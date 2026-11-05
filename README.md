# Galaxiekarte 40K

Interaktive Fan-Karte der Warhammer-40,000-Galaxie: Systeme und Planeten erkunden, hineinzoomen und zu jeder Welt die Handlungsstränge und passenden Bücher sehen. Oben lässt sich zwischen **30K** (Großer Kreuzzug und Horus-Häresie) und **40K** (M41 bis Dark Imperium) umschalten.

## Lokal ansehen

`index.html` im Browser öffnen. Ein Build-Schritt oder Server ist nicht nötig.

## Aufbau

| Datei | Inhalt |
|---|---|
| `index.html` | Seitengerüst |
| `style.css` | Gestaltung (Desktop und Mobil) |
| `app.js` | Karte, Zoom und Verschieben, Zeitalter, Panel, Suche, Routing |
| `data.js` | Alle Daten: Segmentums, Systeme, Planeten, Ereignisse, Bücher |
| `tools/merge_content.py` | Fügt neue Daten aus einer JSON-Datei ein und prüft sie |

## Daten ergänzen

Alles steht in `data.js` (JSON-Format):

1. **Buch** unter `books` mit einer ID anlegen.
2. **Planet** unter `planets` anlegen und die ID im passenden System unter `systems[].planets` eintragen. Für ein neues System `x`/`y` setzen: Zentrum (0,0), Radius ca. 1050, x nach Osten, y nach Süden.
3. **Ereignis** unter `events` mit `planets` und `books` verknüpfen. `sort` ist Jahrtausend × 1000 + Jahr, für 999.M41 also `41999`. Ereignisse mit `sort` unter 32000 erscheinen in 30K, alle anderen in 40K.
4. **Zeitalter-Texte** für einen Planeten: `era30k` und `era40k` mit eigenem `type` und `desc` (z. B. Prospero als intakte Legionsheimat in 30K).

Grössere Datenmengen lassen sich als JSON-Datei im gleichen Aufbau einfügen:

```
python3 tools/merge_content.py data.js neu.json
```

Das Script meldet Dubletten, zu nahe Systeme und unpassende Segmentums. Fehlerhafte Verweise meldet ausserdem die Browser-Konsole beim Laden (`[Datenprüfung]`).

Direktlinks funktionieren über den Hash, z. B. `#/40k/planet/cadia`, `#/30k/event/siege_terra` oder `#/40k/book/helsreach`.

## Hinweise

- Positionen sind schematisch, nicht massstabsgetreu.
- Die Inhalte wurden mit KI-Unterstützung recherchiert und über Suchauszüge von [Lexicanum](https://wh40k.lexicanum.com), Wikipedia und Black Library geprüft. Einzelne Daten und viele Positionen sind Schätzungen, Korrekturen sind willkommen.
- Inoffizielles Fanprojekt, nicht mit Games Workshop verbunden. Warhammer 40,000 ist eine Marke von Games Workshop Ltd.
