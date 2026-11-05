#!/usr/bin/env python3
"""Fügt Recherche-Ergebnisse (JSON) in data.js ein.

Aufruf:  python3 tools/merge_content.py data.js neu1.json [neu2.json ...]

- Bestehende Einträge bleiben erhalten; Listen (Planeten, Bücher) werden vereinigt.
- Zeitalter-Angaben (era30k/era40k) aus den neuen Daten werden übernommen.
- Mögliche Dubletten, zu nahe Systeme und Segmentum-Abweichungen werden gemeldet.
"""
import json
import math
import re
import subprocess
import sys
import unicodedata


def load_data_js(path):
    """data.js mit JavaScriptCore (osascript) auswerten und als JSON holen."""
    js = (
        "ObjC.import('Foundation');"
        f"var src = $.NSString.stringWithContentsOfFileEncodingError({json.dumps(path)}, 4, null).js;"
        "var window = {}; eval(src); JSON.stringify(window.WH40K_DATA);"
    )
    out = subprocess.run(["osascript", "-l", "JavaScript", "-e", js], capture_output=True, text=True, check=True)
    return json.loads(out.stdout)


def norm(s):
    s = unicodedata.normalize("NFD", s.lower())
    return re.sub(r"[^a-z0-9]", "", "".join(c for c in s if not unicodedata.combining(c)))


def segmentum_for(x, y, terra=(-280, 40)):
    dx, dy = x - terra[0], y - terra[1]
    if math.hypot(dx, dy) <= 260:
        return "solar"
    a = math.degrees(math.atan2(dy, dx))
    if -140 <= a < -50:
        return "obscurus"
    if -50 <= a < 60:
        return "ultima"
    if 60 <= a < 150:
        return "tempestus"
    return "pacificus"


def union(a, b):
    out = list(a or [])
    for x in b or []:
        if x not in out:
            out.append(x)
    return out


def main():
    data_path, *new_paths = sys.argv[1:]
    D = load_data_js(data_path)
    systems = {s["id"]: s for s in D["systems"]}
    report = []

    for path in new_paths:
        N = json.load(open(path))
        src = path.rsplit("/", 1)[-1]

        for bid, b in N.get("books", {}).items():
            if bid in D["books"]:
                old = D["books"][bid]
                if str(old.get("year")) != str(b.get("year")) or old.get("author") != b.get("author"):
                    report.append(f"[{src}] Buch {bid}: alt {old.get('author')}/{old.get('year')} neu {b.get('author')}/{b.get('year')} -> neu übernommen")
                    D["books"][bid] = {**old, **b}
                continue
            dup = [k for k, v in D["books"].items() if norm(v["title"]) == norm(b["title"])]
            if dup:
                report.append(f"[{src}] Buch {bid} doppelt zu {dup[0]} (gleicher Titel)")
            D["books"][bid] = b

        for pid, p in N.get("planets", {}).items():
            if pid in D["planets"]:
                old = D["planets"][pid]
                old["books"] = union(old.get("books"), p.get("books"))
                for key in ("era30k", "era40k"):
                    if p.get(key):
                        old[key] = p[key]
                for key in ("type", "desc"):
                    if not old.get(key) and p.get(key):
                        old[key] = p[key]
                continue
            dup = [k for k, v in D["planets"].items() if norm(v["name"]) == norm(p["name"])]
            if dup:
                report.append(f"[{src}] Planet {pid} doppelt zu {dup[0]} (gleicher Name)")
            p.setdefault("books", [])
            D["planets"][pid] = p

        for s in N.get("systems", []):
            if s["id"] in systems:
                old = systems[s["id"]]
                old["planets"] = union(old["planets"], s.get("planets"))
                moved = any(k in s and s[k] != old.get(k) for k in ("x", "y", "segmentum"))
                if moved:
                    report.append(f"[{src}] System {s['id']} korrigiert: {old.get('segmentum')} ({old['x']},{old['y']}) -> {s.get('segmentum')} ({s.get('x')},{s.get('y')})")
                    for k in ("x", "y", "segmentum"):
                        if k in s:
                            old[k] = s[k]
                continue
            dup = [k for k, v in systems.items() if norm(v["name"]) == norm(s["name"])]
            if dup:
                report.append(f"[{src}] System {s['id']} doppelt zu {dup[0]} -> Planeten zusammengeführt")
                systems[dup[0]]["planets"] = union(systems[dup[0]]["planets"], s.get("planets"))
                continue
            entry = {k: s[k] for k in ("id", "name", "segmentum", "x", "y", "planets") if k in s}
            if s.get("major"):
                entry["major"] = True
            systems[s["id"]] = entry

        events = {e["id"]: e for e in D["events"]}
        for e in N.get("events", []):
            if e["id"] in events:
                old = events[e["id"]]
                old["planets"] = union(old["planets"], e.get("planets"))
                old["books"] = union(old["books"], e.get("books"))
                for k in ("name", "desc", "date", "sort", "era"):
                    if e.get(k) is not None and e[k] != old.get(k):
                        if k in ("date", "sort", "era"):
                            report.append(f"[{src}] Ereignis {e['id']}: {k} {old.get(k)} -> {e[k]}")
                        old[k] = e[k]
                continue
            events[e["id"]] = e
        D["events"] = sorted(events.values(), key=lambda e: e["sort"])

    # Planeten, die in mehreren Systemen stehen, nur im ersten behalten
    owner = {}
    for s in systems.values():
        keep = []
        for p in s["planets"]:
            if p in owner:
                report.append(f"Planet {p} steht in {owner[p]} und {s['id']} -> nur in {owner[p]}")
            else:
                owner[p] = s["id"]
                keep.append(p)
        s["planets"] = keep
    D["systems"] = [s for s in systems.values() if s["planets"]]

    # Prüfungen
    for s in D["systems"]:
        r = math.hypot(s["x"], s["y"])
        if r > 1020:
            report.append(f"System {s['id']} liegt ausserhalb der Galaxie (r={r:.0f})")
        seg = segmentum_for(s["x"], s["y"])
        if seg != s["segmentum"]:
            report.append(f"System {s['id']}: Segmentum {s['segmentum']}, Position spricht für {seg}")
    sl = D["systems"]
    for i in range(len(sl)):
        for j in range(i + 1, len(sl)):
            d = math.hypot(sl[i]["x"] - sl[j]["x"], sl[i]["y"] - sl[j]["y"])
            if d < 22:
                report.append(f"Systeme {sl[i]['id']} und {sl[j]['id']} nur {d:.0f} auseinander")
    for e in D["events"]:
        for p in e["planets"]:
            if p not in D["planets"]:
                report.append(f"Ereignis {e['id']}: Planet {p} fehlt")
        for b in e["books"]:
            if b not in D["books"]:
                report.append(f"Ereignis {e['id']}: Buch {b} fehlt")
    for pid, p in D["planets"].items():
        if pid not in owner:
            report.append(f"Planet {pid} hat kein System")
        for b in p.get("books", []):
            if b not in D["books"]:
                report.append(f"Planet {pid}: Buch {b} fehlt")

    header = open(data_path).read().split("window.WH40K_DATA")[0]
    with open(data_path, "w") as f:
        f.write(header + "window.WH40K_DATA = " + json.dumps(D, ensure_ascii=False, indent=1) + ";\n")

    print(f"Systeme {len(D['systems'])}, Planeten {len(D['planets'])}, Ereignisse {len(D['events'])}, Bücher {len(D['books'])}")
    print("\n".join(report) if report else "Keine Auffälligkeiten.")


if __name__ == "__main__":
    main()
