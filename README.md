# Galaxy Map 40K

Interactive fan map of the Warhammer 40,000 galaxy: explore systems and planets, zoom in, and see the storylines and matching books for each world. The toggle at the top switches between **30K** (the Great Crusade and the Horus Heresy) and **40K** (M41 to the Dark Imperium).

Live: https://jntme.github.io/wh40k-map/

## View locally

Open `index.html` in a browser. No build step or server needed.

## Structure

| File | Contents |
|---|---|
| `index.html` | Page skeleton |
| `style.css` | Styling (desktop and mobile) |
| `app.js` | Map, zoom and panning, eras, panel, search, routing |
| `data.js` | All data: segmentums, systems, planets, events, books |
| `tools/merge_content.py` | Merges new data from a JSON file and checks it |

## Adding data

Everything lives in `data.js` (JSON format):

1. **Book**: add it under `books` with an ID.
2. **Planet**: add it under `planets` and list its ID in the matching system under `systems[].planets`. For a new system, set `x`/`y`: centre (0,0), radius approx. 1050, x grows east, y grows south.
3. **Event**: link it under `events` to `planets` and `books`. `sort` is millennium × 1000 + year, so 999.M41 becomes `41999`. Events with `sort` below 32000 appear in 30K, all others in 40K.
4. **Era texts** for a planet: `era30k` and `era40k`, each with its own `type` and `desc` (e.g. Prospero as an intact Legion homeworld in 30K).

Larger batches can be merged from a JSON file with the same structure:

```
python3 tools/merge_content.py data.js new.json
```

The script reports duplicates, systems placed too close together and mismatched segmentums. Broken references are also logged to the browser console on load (`[Data check]`).

Deep links work via the hash, e.g. `#/40k/planet/cadia`, `#/30k/event/siege_terra` or `#/40k/book/helsreach`.

## Notes

- Positions are schematic, not to scale.
- The content was researched with AI assistance and checked against search excerpts from [Lexicanum](https://wh40k.lexicanum.com), Wikipedia and Black Library. Some dates and many positions are estimates; corrections are welcome.
- Unofficial fan project, not affiliated with Games Workshop. Warhammer 40,000 is a trademark of Games Workshop Ltd.
