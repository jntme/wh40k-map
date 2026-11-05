# Galaxy Map 40K

Interactive fan map of the Warhammer 40,000 galaxy: explore systems and planets, zoom in, and see the storylines and matching books for each world. The toggle at the top switches between **30K** (the Great Crusade and the Horus Heresy) and **40K** (M41 to the Dark Imperium).

In 30K, the **Horus Heresy Library** lists every novel, novella and anthology of The Horus Heresy, The Siege of Terra, Primarchs and Characters series. Filter by series, Legion, character or reading status, and sort by reading order or in-universe date: the worlds of all listed books are highlighted on the map, hovering a book previews its worlds, and clicking it opens its details.

### Reading progress and spoiler shield

Tick books as read in the library or with **Mark as read** on a book. The list shows your progress and the next unread book. With the **spoiler shield** on (the default):

- An unread book shows only cover-level facts (author, series, year, setting date, Legions, locations, contents of anthologies). Its spoiler-free premise is one click away; summary, characters and storylines appear once you mark it read.
- A 30K storyline (event) stays sealed until you have read one of its books (events marked `"public": true`, such as the start of the Great Crusade, are always shown). Sealed storylines are hidden from the timeline, the map highlights and the search.
- A world shows its spoiler-free 30K description until all its 30K storylines are revealed; then its fate during the Heresy appears.
- 40K shows a warning, since it reveals how the Heresy ended.

Every sealed item has a **Reveal anyway** link.

### Syncing your reading list across devices

The reading list lives in the browser. To share it between devices, the library's **☁ Sync** button connects it to a private GitHub Gist:

1. Create a [GitHub token with only the `gist` scope](https://github.com/settings/tokens/new?scopes=gist&description=Galaxy%20Map%20reading%20sync).
2. Paste it under **☁ Sync** and connect. The app reuses an existing sync gist of your account or creates one.
3. Open the **sync link** shown there once on every other device (e.g. send it to your phone).

Changes sync a moment after you tick a book and whenever the page comes back into view; for each book the newer change wins, so unticking also syncs. This is convenience, not security: the token is stored in the browser and inside the sync link, and anyone with the link can edit your gists. Revoke the token on GitHub to cut access. **Export**/**Import** still work as a manual backup.

On phones the details panel is a bottom sheet: drag or tap its grip to switch between a peek, half and full height.

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

1. **Book**: add it under `books` with an ID. Besides `title`, `author`, `series` and `year`, a book can carry `number` (position in its series), `format` (Novel, Novella, Anthology), `pages`, `premise` (spoiler-free), `summary` (with spoilers), `legions`, `characters` (`"Name – role"`), `contents` (stories of an anthology), `related` (book IDs), `setting` (in-universe date, e.g. `005.M31`), `sort` (same key as for events) and `planets` (IDs of the worlds where it is set).
2. **Planet**: add it under `planets` and list its ID in the matching system under `systems[].planets`. For a new system, set `x`/`y`: centre (0,0), radius approx. 1050, x grows east, y grows south.
3. **Event**: link it under `events` to `planets` and `books`. `sort` is millennium × 1000 + year, so 999.M41 becomes `41999`. Events with `sort` below 32000 appear in 30K, all others in 40K.
4. **Era texts** for a planet: `era30k` and `era40k`, each with its own `type` and `desc` (e.g. Prospero as an intact Legion homeworld in 30K). `era30k` may contain Heresy spoilers; `safe30k` (same shape) is the spoiler-free version shown until the reader has unlocked the world.

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
