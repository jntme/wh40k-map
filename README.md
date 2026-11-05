# Galaxiekarte 40K

Interaktive Fan-Karte der Warhammer-40,000-Galaxie: Systeme und Planeten erkunden, hineinzoomen und zu jeder Welt die Handlungsstränge und passenden Bücher sehen.

## Lokal ansehen

`index.html` im Browser öffnen. Ein Build-Schritt oder Server ist nicht nötig.

## Aufbau

| Datei | Inhalt |
|---|---|
| `index.html` | Seitengerüst |
| `style.css` | Gestaltung (Desktop und Mobil) |
| `app.js` | Karte, Zoom und Verschieben, Panel, Suche, Routing |
| `data.js` | Alle Daten: Segmentums, Systeme, Planeten, Ereignisse, Bücher |

## Daten ergänzen

Alles steht in `data.js`:

1. **Buch** unter `books` mit einer ID anlegen.
2. **Planet** unter `planets` anlegen und die ID im passenden System unter `systems[].planets` eintragen. Für ein neues System `x`/`y` setzen: Zentrum (0,0), Radius ca. 1050, x nach Osten, y nach Süden.
3. **Ereignis** unter `events` mit `planets` und `books` verknüpfen. `sort` ist Jahrtausend × 1000 + Jahr, für 999.M41 also `41999`.

Fehlerhafte Verweise meldet die Browser-Konsole beim Laden (`[Datenprüfung]`).

Direktlinks funktionieren über den Hash, z. B. `#/planet/cadia`, `#/event/siege_terra` oder `#/book/helsreach`.

## Hinweise

- Positionen sind schematisch, nicht massstabsgetreu.
- Der Grundbestand wurde aus dem Gedächtnis zusammengestellt und sollte gegen [Lexicanum](https://wh40k.lexicanum.com) geprüft werden.
- Inoffizielles Fanprojekt, nicht mit Games Workshop verbunden. Warhammer 40,000 ist eine Marke von Games Workshop Ltd.
