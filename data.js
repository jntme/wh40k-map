/*
 * Datenbasis der Karte.
 *
 * Koordinaten: Galaxie-Ebene mit Zentrum (0,0), Radius ca. 1050 Einheiten.
 * x wächst nach Osten (rechts), y nach Süden (unten). Positionen sind
 * schematisch und nicht massstabsgetreu.
 *
 * Hinweis: Der Grundbestand wurde aus dem Gedächtnis zusammengestellt.
 * Daten bitte gegen Lexicanum (https://wh40k.lexicanum.com) prüfen.
 *
 * Verknüpfungen:
 *   systems[].planets[]  -> Planeten im System
 *   planets[].books      -> Bücher, die auf dem Planeten spielen (ohne festes Ereignis)
 *   events[].planets     -> Planeten-IDs, auf denen das Ereignis stattfand
 *   events[].books       -> Bücher zum Ereignis
 *   events[].sort        -> Sortierschlüssel: Jahrtausend * 1000 + Jahr (z. B. 014.M31 -> 31014)
 */
window.WH40K_DATA = {
 "segmentums": [
  {
   "id": "solar",
   "name": "Segmentum Solar",
   "label": [
    -280,
    300
   ]
  },
  {
   "id": "obscurus",
   "name": "Segmentum Obscurus",
   "label": [
    -330,
    -840
   ]
  },
  {
   "id": "pacificus",
   "name": "Segmentum Pacificus",
   "label": [
    -900,
    40
   ]
  },
  {
   "id": "tempestus",
   "name": "Segmentum Tempestus",
   "label": [
    -280,
    820
   ]
  },
  {
   "id": "ultima",
   "name": "Ultima Segmentum",
   "label": [
    560,
    -560
   ]
  }
 ],
 "features": [
  {
   "id": "eye",
   "name": "Auge des Schreckens",
   "type": "warp",
   "x": -540,
   "y": -500,
   "r": 85,
   "desc": "Gewaltiger Warpsturm, entstanden bei der Geburt Slaaneshs. Heimat der Verräterlegionen und Ausgangspunkt der Schwarzen Kreuzzüge."
  },
  {
   "id": "maelstrom",
   "name": "Maelstrom",
   "type": "warp",
   "x": -60,
   "y": -120,
   "r": 40,
   "desc": "Warpsturm-Region nahe dem Segmentum Solar, Zuflucht von Piraten und Renegaten."
  }
 ],
 "rift": {
  "name": "Cicatrix Maledictum",
  "eras": [
   "40k"
  ],
  "desc": "Der Große Riss. Er öffnete sich nach dem Fall von Cadia und teilt die Galaxie in Imperium Sanctum (südlich) und Imperium Nihilus (nördlich).",
  "points": [
   [
    -540,
    -500
   ],
   [
    -330,
    -400
   ],
   [
    -80,
    -300
   ],
   [
    200,
    -150
   ],
   [
    420,
    40
   ],
   [
    600,
    200
   ],
   [
    700,
    320
   ]
  ]
 },
 "systems": [
  {
   "id": "sol",
   "name": "Sol",
   "segmentum": "solar",
   "x": -280,
   "y": 40,
   "major": true,
   "planets": [
    "terra",
    "mars",
    "titan",
    "luna",
    "pluto"
   ]
  },
  {
   "id": "armageddon",
   "name": "Armageddon",
   "segmentum": "solar",
   "x": -310,
   "y": -190,
   "planets": [
    "armageddon"
   ]
  },
  {
   "id": "cadia",
   "name": "Cadia",
   "segmentum": "obscurus",
   "x": -430,
   "y": -400,
   "major": true,
   "planets": [
    "cadia"
   ]
  },
  {
   "id": "fenris",
   "name": "Fenris",
   "segmentum": "obscurus",
   "x": -650,
   "y": -300,
   "planets": [
    "fenris"
   ]
  },
  {
   "id": "caliban",
   "name": "Caliban",
   "segmentum": "obscurus",
   "x": -230,
   "y": -620,
   "planets": [
    "caliban"
   ]
  },
  {
   "id": "prospero",
   "name": "Prospero",
   "segmentum": "ultima",
   "x": 150,
   "y": -450,
   "planets": [
    "prospero"
   ]
  },
  {
   "id": "vigilus",
   "name": "Vigilus",
   "segmentum": "obscurus",
   "x": -120,
   "y": -260,
   "planets": [
    "vigilus"
   ]
  },
  {
   "id": "ultramar",
   "name": "Macragge",
   "segmentum": "ultima",
   "x": 850,
   "y": 450,
   "major": true,
   "planets": [
    "macragge"
   ]
  },
  {
   "id": "calth",
   "name": "Calth",
   "segmentum": "ultima",
   "x": 860,
   "y": 490,
   "planets": [
    "calth"
   ]
  },
  {
   "id": "baal",
   "name": "Baal",
   "segmentum": "ultima",
   "x": 480,
   "y": 40,
   "planets": [
    "baal"
   ]
  },
  {
   "id": "nostramo",
   "name": "Nostramo",
   "segmentum": "ultima",
   "x": 650,
   "y": -300,
   "planets": [
    "nostramo"
   ]
  },
  {
   "id": "isstvan",
   "name": "Isstvan",
   "segmentum": "ultima",
   "x": 420,
   "y": -160,
   "planets": [
    "isstvan3",
    "isstvan5"
   ]
  },
  {
   "id": "davin",
   "name": "Davin",
   "segmentum": "ultima",
   "x": 280,
   "y": -380,
   "planets": [
    "davin"
   ]
  },
  {
   "id": "tanith",
   "name": "Tanith",
   "segmentum": "pacificus",
   "x": -820,
   "y": 230,
   "planets": [
    "tanith"
   ]
  },
  {
   "id": "verghast",
   "name": "Verghast",
   "segmentum": "pacificus",
   "x": -870,
   "y": 310,
   "planets": [
    "verghast"
   ]
  },
  {
   "id": "badab",
   "name": "Badab",
   "segmentum": "ultima",
   "x": -10,
   "y": -165,
   "planets": [
    "badab_primaris"
   ]
  },
  {
   "id": "hydra_cordatus",
   "name": "Hydra Cordatus",
   "segmentum": "obscurus",
   "x": -470,
   "y": -320,
   "planets": [
    "hydra_cordatus"
   ]
  },
  {
   "id": "medrengard",
   "name": "Medrengard",
   "segmentum": "obscurus",
   "x": -575,
   "y": -465,
   "planets": [
    "medrengard"
   ]
  },
  {
   "id": "sicarus",
   "name": "Sicarus",
   "segmentum": "obscurus",
   "x": -505,
   "y": -540,
   "planets": [
    "sicarus"
   ]
  },
  {
   "id": "piscina",
   "name": "Piscina",
   "segmentum": "obscurus",
   "x": -200,
   "y": -420,
   "planets": [
    "piscina4"
   ]
  },
  {
   "id": "medusa",
   "name": "Medusa",
   "segmentum": "obscurus",
   "x": -640,
   "y": -640,
   "planets": [
    "medusa"
   ]
  },
  {
   "id": "gathalamor",
   "name": "Gathalamor",
   "segmentum": "solar",
   "x": -400,
   "y": 140,
   "planets": [
    "gathalamor"
   ]
  },
  {
   "id": "ophelia",
   "name": "Ophelia",
   "segmentum": "tempestus",
   "x": -150,
   "y": 560,
   "planets": [
    "ophelia7"
   ]
  },
  {
   "id": "biel_tan",
   "name": "Biel-Tan",
   "segmentum": "tempestus",
   "x": -700,
   "y": 500,
   "planets": [
    "biel_tan"
   ]
  },
  {
   "id": "rynns_world",
   "name": "Rynn's World",
   "segmentum": "ultima",
   "x": 300,
   "y": 620,
   "planets": [
    "rynns_world"
   ]
  },
  {
   "id": "metalica",
   "name": "Metalica",
   "segmentum": "ultima",
   "x": 400,
   "y": 555,
   "planets": [
    "metalica"
   ]
  },
  {
   "id": "nocturne",
   "name": "Nocturne",
   "segmentum": "ultima",
   "x": 720,
   "y": 300,
   "planets": [
    "nocturne"
   ]
  },
  {
   "id": "ichar",
   "name": "Ichar",
   "segmentum": "ultima",
   "x": 790,
   "y": 300,
   "planets": [
    "ichar4"
   ]
  },
  {
   "id": "tarsis",
   "name": "Tarsis",
   "segmentum": "ultima",
   "x": 900,
   "y": 360,
   "planets": [
    "tarsis_ultra"
   ]
  },
  {
   "id": "iax",
   "name": "Iax",
   "segmentum": "ultima",
   "x": 790,
   "y": 525,
   "planets": [
    "iax"
   ]
  },
  {
   "id": "octarius",
   "name": "Octarius",
   "segmentum": "ultima",
   "x": 700,
   "y": 650,
   "planets": [
    "octarius"
   ]
  },
  {
   "id": "damnos",
   "name": "Damnos",
   "segmentum": "ultima",
   "x": 715,
   "y": 400,
   "planets": [
    "damnos"
   ]
  },
  {
   "id": "pavonis",
   "name": "Pavonis",
   "segmentum": "ultima",
   "x": 660,
   "y": 120,
   "planets": [
    "pavonis"
   ]
  },
  {
   "id": "damocles",
   "name": "Damocles-Golf",
   "segmentum": "ultima",
   "x": 820,
   "y": -80,
   "planets": [
    "dalyth"
   ]
  },
  {
   "id": "tsagualsa",
   "name": "Tsagualsa",
   "segmentum": "ultima",
   "x": 880,
   "y": 60,
   "planets": [
    "tsagualsa"
   ]
  },
  {
   "id": "paradyce",
   "name": "Paradyce",
   "segmentum": "ultima",
   "x": 360,
   "y": -440,
   "planets": [
    "paradyce6"
   ]
  },
  {
   "id": "necromunda",
   "name": "Necromunda",
   "segmentum": "solar",
   "x": -200,
   "y": 110,
   "planets": [
    "necromunda"
   ]
  },
  {
   "id": "golgotha",
   "name": "Golgotha",
   "segmentum": "solar",
   "x": -370,
   "y": -140,
   "planets": [
    "golgotha"
   ]
  },
  {
   "id": "catachan",
   "name": "Catachan",
   "segmentum": "ultima",
   "x": 600,
   "y": 520,
   "planets": [
    "catachan"
   ]
  },
  {
   "id": "valhalla",
   "name": "Valhalla",
   "segmentum": "ultima",
   "x": 380,
   "y": 300,
   "planets": [
    "valhalla"
   ]
  },
  {
   "id": "krieg",
   "name": "Krieg",
   "segmentum": "tempestus",
   "x": -150,
   "y": 600,
   "planets": [
    "krieg"
   ]
  },
  {
   "id": "tallarn",
   "name": "Tallarn",
   "segmentum": "tempestus",
   "x": -450,
   "y": 500,
   "planets": [
    "tallarn"
   ]
  },
  {
   "id": "vostroya",
   "name": "Vostroya",
   "segmentum": "obscurus",
   "x": -640,
   "y": -700,
   "planets": [
    "vostroya"
   ]
  },
  {
   "id": "balhaut",
   "name": "Balhaut",
   "segmentum": "pacificus",
   "x": -760,
   "y": 170,
   "planets": [
    "balhaut"
   ]
  },
  {
   "id": "fortis",
   "name": "Fortis",
   "segmentum": "pacificus",
   "x": -860,
   "y": 200,
   "planets": [
    "fortis_binary"
   ]
  },
  {
   "id": "menazoid_clasp",
   "name": "Menazoid Clasp",
   "segmentum": "pacificus",
   "x": -900,
   "y": 250,
   "planets": [
    "menazoid_epsilon"
   ]
  },
  {
   "id": "hagia",
   "name": "Hagia",
   "segmentum": "pacificus",
   "x": -780,
   "y": 290,
   "planets": [
    "hagia"
   ]
  },
  {
   "id": "phantine",
   "name": "Phantine",
   "segmentum": "pacificus",
   "x": -730,
   "y": 240,
   "planets": [
    "phantine"
   ]
  },
  {
   "id": "aexe",
   "name": "Aexe",
   "segmentum": "pacificus",
   "x": -700,
   "y": 180,
   "planets": [
    "aexe_cardinal"
   ]
  },
  {
   "id": "herodor",
   "name": "Herodor",
   "segmentum": "pacificus",
   "x": -660,
   "y": 230,
   "planets": [
    "herodor"
   ]
  },
  {
   "id": "gereon",
   "name": "Gereon",
   "segmentum": "pacificus",
   "x": -640,
   "y": 140,
   "planets": [
    "gereon"
   ]
  },
  {
   "id": "jago",
   "name": "Jago",
   "segmentum": "pacificus",
   "x": -600,
   "y": 200,
   "planets": [
    "jago"
   ]
  },
  {
   "id": "urdesh",
   "name": "Urdesh",
   "segmentum": "pacificus",
   "x": -580,
   "y": 110,
   "planets": [
    "urdesh"
   ]
  },
  {
   "id": "ancreon",
   "name": "Ancreon",
   "segmentum": "pacificus",
   "x": -735,
   "y": 165,
   "planets": [
    "ancreon_sextus"
   ]
  },
  {
   "id": "salvations_reach",
   "name": "Salvation's Reach",
   "segmentum": "pacificus",
   "x": -640,
   "y": 40,
   "planets": [
    "salvations_reach"
   ]
  },
  {
   "id": "orestes",
   "name": "Orestes",
   "segmentum": "pacificus",
   "x": -680,
   "y": 60,
   "planets": [
    "orestes"
   ]
  },
  {
   "id": "karsk",
   "name": "Karsk",
   "segmentum": "pacificus",
   "x": -960,
   "y": -80,
   "planets": [
    "karsk"
   ]
  },
  {
   "id": "demetrius",
   "name": "Demetrius",
   "segmentum": "pacificus",
   "x": -930,
   "y": -160,
   "planets": [
    "demetrius"
   ]
  },
  {
   "id": "loki",
   "name": "Loki",
   "segmentum": "pacificus",
   "x": -980,
   "y": 0,
   "planets": [
    "loki"
   ]
  },
  {
   "id": "port_maw",
   "name": "Port Maw",
   "segmentum": "obscurus",
   "x": -360,
   "y": -620,
   "planets": [
    "port_maw"
   ]
  },
  {
   "id": "savaven",
   "name": "Savaven",
   "segmentum": "obscurus",
   "x": -300,
   "y": -560,
   "planets": [
    "savaven"
   ]
  },
  {
   "id": "schindlegeist",
   "name": "Schindlegeist",
   "segmentum": "obscurus",
   "x": -410,
   "y": -560,
   "planets": [
    "schindlegeist"
   ]
  },
  {
   "id": "gudrun",
   "name": "Gudrun",
   "segmentum": "obscurus",
   "x": -40,
   "y": -700,
   "planets": [
    "gudrun"
   ]
  },
  {
   "id": "hubris",
   "name": "Hubris",
   "segmentum": "obscurus",
   "x": 10,
   "y": -730,
   "planets": [
    "hubris"
   ]
  },
  {
   "id": "thracian",
   "name": "Thracian",
   "segmentum": "obscurus",
   "x": -60,
   "y": -640,
   "planets": [
    "thracian_primaris"
   ]
  },
  {
   "id": "eustis_majoris",
   "name": "Eustis Majoris",
   "segmentum": "obscurus",
   "x": 60,
   "y": -660,
   "planets": [
    "eustis_majoris"
   ]
  },
  {
   "id": "sancour",
   "name": "Sancour",
   "segmentum": "obscurus",
   "x": 110,
   "y": -720,
   "planets": [
    "sancour"
   ]
  },
  {
   "id": "vraks",
   "name": "Vraks",
   "segmentum": "obscurus",
   "x": -120,
   "y": -580,
   "planets": [
    "vraks_prime"
   ]
  },
  {
   "id": "kathur",
   "name": "Kathur",
   "segmentum": "obscurus",
   "x": -250,
   "y": -500,
   "planets": [
    "kathur"
   ]
  },
  {
   "id": "gravalax",
   "name": "Gravalax",
   "segmentum": "ultima",
   "x": 790,
   "y": 330,
   "planets": [
    "gravalax"
   ]
  },
  {
   "id": "perlia",
   "name": "Perlia",
   "segmentum": "ultima",
   "x": 760,
   "y": 390,
   "planets": [
    "perlia"
   ]
  },
  {
   "id": "simia_orichalcae",
   "name": "Simia Orichalcae",
   "segmentum": "ultima",
   "x": 680,
   "y": 455,
   "planets": [
    "simia_orichalcae"
   ]
  },
  {
   "id": "adumbria",
   "name": "Adumbria",
   "segmentum": "ultima",
   "x": 820,
   "y": 390,
   "planets": [
    "adumbria"
   ]
  },
  {
   "id": "periremunda",
   "name": "Periremunda",
   "segmentum": "ultima",
   "x": 700,
   "y": 370,
   "planets": [
    "periremunda"
   ]
  },
  {
   "id": "nusquam_fundumentibus",
   "name": "Nusquam Fundumentibus",
   "segmentum": "ultima",
   "x": 740,
   "y": 470,
   "planets": [
    "nusquam_fundumentibus"
   ]
  },
  {
   "id": "daniks_world",
   "name": "Danik's World",
   "segmentum": "ultima",
   "x": 300,
   "y": 250,
   "planets": [
    "daniks_world"
   ]
  },
  {
   "id": "cressida",
   "name": "Cressida",
   "segmentum": "ultima",
   "x": 420,
   "y": 380,
   "planets": [
    "cressida"
   ]
  },
  {
   "id": "rogar",
   "name": "Rogar",
   "segmentum": "ultima",
   "x": 520,
   "y": 600,
   "planets": [
    "rogar_iii"
   ]
  },
  {
   "id": "gondwa",
   "name": "Gondwa",
   "segmentum": "ultima",
   "x": 560,
   "y": 640,
   "planets": [
    "gondwa_vi"
   ]
  },
  {
   "id": "dulmalin",
   "name": "Dulma'lin",
   "segmentum": "ultima",
   "x": 470,
   "y": 520,
   "planets": [
    "dulmalin"
   ]
  },
  {
   "id": "khadar",
   "name": "Khadar",
   "segmentum": "tempestus",
   "x": 0,
   "y": 580,
   "planets": [
    "khadar"
   ]
  },
  {
   "id": "belmos",
   "name": "Belmos",
   "segmentum": "obscurus",
   "x": -500,
   "y": -250,
   "planets": [
    "belmos_vii"
   ]
  },
  {
   "id": "broucheroc",
   "name": "Broucheroc",
   "segmentum": "pacificus",
   "x": -700,
   "y": -60,
   "planets": [
    "broucheroc"
   ]
  },
  {
   "id": "cthonia",
   "name": "Cthonia",
   "segmentum": "solar",
   "x": -170,
   "y": 150,
   "planets": [
    "cthonia"
   ]
  },
  {
   "id": "nikaea",
   "name": "Nikaea",
   "segmentum": "solar",
   "x": -380,
   "y": 150,
   "planets": [
    "nikaea"
   ]
  },
  {
   "id": "beta_garmon",
   "name": "Beta-Garmon",
   "segmentum": "solar",
   "x": -120,
   "y": -80,
   "planets": [
    "beta_garmon2"
   ]
  },
  {
   "id": "paramar",
   "name": "Paramar",
   "segmentum": "solar",
   "x": -180,
   "y": -150,
   "planets": [
    "paramar5"
   ]
  },
  {
   "id": "molech",
   "name": "Molech",
   "segmentum": "solar",
   "x": -60,
   "y": -30,
   "planets": [
    "molech"
   ]
  },
  {
   "id": "trisolian",
   "name": "Trisolian",
   "segmentum": "solar",
   "x": -60,
   "y": 60,
   "planets": [
    "trisolian"
   ]
  },
  {
   "id": "phall",
   "name": "Phall",
   "segmentum": "obscurus",
   "x": -350,
   "y": -300,
   "planets": [
    "phall"
   ]
  },
  {
   "id": "iydris",
   "name": "Iydris",
   "segmentum": "obscurus",
   "x": -600,
   "y": -450,
   "planets": [
    "iydris"
   ]
  },
  {
   "id": "colchis",
   "name": "Colchis",
   "segmentum": "pacificus",
   "x": -850,
   "y": 0,
   "planets": [
    "colchis"
   ]
  },
  {
   "id": "khur",
   "name": "Khur",
   "segmentum": "pacificus",
   "x": -750,
   "y": 100,
   "planets": [
    "khur"
   ]
  },
  {
   "id": "inwit",
   "name": "Inwit",
   "segmentum": "tempestus",
   "x": -250,
   "y": 420,
   "planets": [
    "inwit"
   ]
  },
  {
   "id": "kiavahr",
   "name": "Kiavahr",
   "segmentum": "tempestus",
   "x": 0,
   "y": 650,
   "planets": [
    "kiavahr",
    "deliverance"
   ]
  },
  {
   "id": "barbarus",
   "name": "Barbarus",
   "segmentum": "tempestus",
   "x": -150,
   "y": 900,
   "planets": [
    "barbarus"
   ]
  },
  {
   "id": "ullanor",
   "name": "Ullanor",
   "segmentum": "ultima",
   "x": 60,
   "y": -330,
   "planets": [
    "ullanor"
   ]
  },
  {
   "id": "olympia",
   "name": "Olympia",
   "segmentum": "ultima",
   "x": 250,
   "y": -80,
   "planets": [
    "olympia"
   ]
  },
  {
   "id": "chemos",
   "name": "Chemos",
   "segmentum": "ultima",
   "x": 200,
   "y": 100,
   "planets": [
    "chemos"
   ]
  },
  {
   "id": "diamat",
   "name": "Diamat",
   "segmentum": "ultima",
   "x": 350,
   "y": 250,
   "planets": [
    "diamat"
   ]
  },
  {
   "id": "nuceria",
   "name": "Nuceria",
   "segmentum": "ultima",
   "x": 560,
   "y": 240,
   "planets": [
    "nuceria"
   ]
  },
  {
   "id": "signus",
   "name": "Signus-Cluster",
   "segmentum": "ultima",
   "x": 600,
   "y": -150,
   "planets": [
    "signus_prime"
   ]
  },
  {
   "id": "chogoris",
   "name": "Chogoris",
   "segmentum": "ultima",
   "x": 650,
   "y": -80,
   "planets": [
    "chogoris"
   ]
  },
  {
   "id": "sixty_three",
   "name": "Sixty-Three Nineteen",
   "segmentum": "ultima",
   "x": 700,
   "y": -450,
   "planets": [
    "sixty_three_nineteen"
   ]
  },
  {
   "id": "chondax",
   "name": "Chondax",
   "segmentum": "ultima",
   "x": 850,
   "y": -500,
   "planets": [
    "chondax"
   ]
  },
  {
   "id": "armatura",
   "name": "Armatura",
   "segmentum": "ultima",
   "x": 775,
   "y": 580,
   "planets": [
    "armatura"
   ]
  },
  {
   "id": "thramas",
   "name": "Thramas",
   "segmentum": "ultima",
   "x": 940,
   "y": 140,
   "planets": [
    "thramas"
   ]
  },
  {
   "id": "sotha",
   "name": "Sotha",
   "segmentum": "ultima",
   "x": 930,
   "y": 330,
   "planets": [
    "sotha"
   ]
  }
 ],
 "planets": {
  "terra": {
   "name": "Terra",
   "type": "Thronwelt",
   "desc": "Wiege der Menschheit und Sitz des Goldenen Throns. Vom Imperialen Palast aus wird das Imperium regiert.",
   "books": [
    "wolfblade",
    "valdor",
    "outcast_dead",
    "master_of_mankind",
    "garro",
    "old_earth",
    "ashes_of_the_imperium"
   ],
   "era30k": {
    "type": "Thronwelt · Sitz der VII. Legion",
    "desc": "Ausgangspunkt des Großen Kreuzzugs. Rogal Dorn und die Imperial Fists bauen den Imperialen Palast zur Festung aus; 014.M31 Schauplatz der Belagerung, an deren Ende der Imperator auf den Goldenen Thron gesetzt wird."
   }
  },
  "mars": {
   "name": "Mars",
   "type": "Schmiedewelt",
   "desc": "Herz des Adeptus Mechanicus und grösste Schmiedewelt des Imperiums.",
   "books": [
    "mechanicum"
   ],
   "era30k": {
    "type": "Sitz des Mechanicum",
    "desc": "Durch den Vertrag von Olympus mit Terra verbündet. Während der Häresie stellt sich Fabricator-General Kelbor-Hal auf Horus' Seite und stürzt den Mars in einen Bürgerkrieg."
   }
  },
  "armageddon": {
   "name": "Armageddon",
   "type": "Makropolwelt",
   "desc": "Industriell bedeutende Makropolwelt, Schauplatz mehrerer verheerender Kriege gegen die Orks.",
   "books": []
  },
  "cadia": {
   "name": "Cadia",
   "type": "Festungswelt (zerstört)",
   "desc": "Festungswelt am Cadianischen Tor, dem einzigen stabilen Weg aus dem Auge des Schreckens. Über zehntausend Jahre ein Bollwerk gegen das Chaos.",
   "books": [
    "cadia_stands",
    "fall_of_cadia_rath",
    "creed_ashes_of_cadia"
   ]
  },
  "fenris": {
   "name": "Fenris",
   "type": "Todeswelt · Ordensheimat",
   "desc": "Eis- und Ozeanwelt, Heimat der Space Wolves.",
   "books": [
    "space_wolf",
    "ragnars_claw",
    "grey_hunter",
    "sons_of_fenris",
    "wolfs_honour",
    "prospero_burns",
    "great_wolf"
   ],
   "era30k": {
    "type": "Legionsheimat (VI. Legion)",
    "desc": "Heimat der Vlka Fenryka. Leman Russ wuchs hier unter den Stämmen auf, bevor der Imperator ihn fand; Rekrutierungswelt der Legion."
   }
  },
  "caliban": {
   "name": "Caliban",
   "type": "Ordensheimat (zerstört)",
   "desc": "Waldwelt und Heimat der Dark Angels, am Ende der Horus-Häresie zerstört.",
   "books": [
    "descent_angels",
    "angels_of_darkness",
    "ravenwing",
    "master_of_sanctity",
    "the_unforgiven",
    "fallen_angels",
    "angels_of_caliban",
    "lord_of_the_first",
    "luther_first_fallen"
   ],
   "era30k": {
    "type": "Legionsheimat (I. Legion)",
    "desc": "Von Bestien heimgesuchte Waldwelt der Ritterorden. Luther verwaltet sie, nachdem der Löwe ihn heimgeschickt hat; Unruhen und Verrat führen am Ende der Häresie zur Zerstörung des Planeten."
   }
  },
  "prospero": {
   "name": "Prospero",
   "type": "Gelehrtenwelt (verwüstet)",
   "desc": "Heimatwelt der Thousand Sons unter dem Primarchen Magnus.",
   "books": [
    "thousand_sons",
    "prospero_burns",
    "master_of_prospero",
    "crimson_king"
   ],
   "era30k": {
    "type": "Legionsheimat (XV. Legion)",
    "desc": "Welt der Gelehrten mit der Hauptstadt Tizca. Nach dem Konzil von Nikaea zieht sich Magnus hierher zurück; 004–005.M31 von Space Wolves und Custodes verwüstet."
   }
  },
  "vigilus": {
   "name": "Vigilus",
   "type": "Makropolwelt",
   "desc": "Strategisch wichtige Welt am Nachmund-Korridor, einer der wenigen sicheren Passagen durch den Großen Riss.",
   "books": []
  },
  "macragge": {
   "name": "Macragge",
   "type": "Ordensheimat",
   "desc": "Hauptwelt von Ultramar und Heimat der Ultramarines.",
   "books": [
    "killing_ground",
    "unremembered_empire",
    "lord_of_ultramar"
   ],
   "era30k": {
    "type": "Legionsheimat (XIII. Legion) · Hauptstadt des Imperium Secundus",
    "desc": "Zentrum des Fünfhundert-Welten-Reichs Ultramar. 009.M31 ruft Guilliman hier das Imperium Secundus aus, als er Terra für verloren hält."
   }
  },
  "calth": {
   "name": "Calth",
   "type": "Kolonialwelt",
   "desc": "Welt in Ultramar, Schauplatz eines der grössten Verrate der Horus-Häresie.",
   "books": [
    "know_no_fear",
    "mark_of_calth",
    "battle_for_the_abyss"
   ],
   "era30k": {
    "type": "Werft- und Musterungswelt Ultramars",
    "desc": "Hier sammelten sich 007.M31 Ultramarines und Word Bearers – vorgeblich für einen gemeinsamen Feldzug. Nach dem Verrat wurde die Sonne Veridia destabilisiert, die Oberfläche unbewohnbar; der Untergrundkrieg dauerte bis 014.M31."
   }
  },
  "baal": {
   "name": "Baal",
   "type": "Ordensheimat",
   "desc": "Heimat der Blood Angels mit ihren Monden Baal Primus und Baal Secundus.",
   "books": [
    "deus_encarmine",
    "deus_sanguinius",
    "red_fury",
    "black_tide"
   ],
   "era30k": {
    "type": "Legionsheimat (IX. Legion)",
    "desc": "Auf dem verstrahlten Mond Baal Secundus wuchs Sanguinius auf. Während der Häresie Zufluchtsort für loyale Astartes."
   }
  },
  "nostramo": {
   "name": "Nostramo",
   "type": "Ordensheimat (zerstört)",
   "desc": "Ewig dunkle Welt, Heimat der Night Lords. Vom eigenen Primarchen Konrad Curze vernichtet.",
   "books": [
    "soul_hunter",
    "night_haunter",
    "blood_reaver"
   ],
   "era30k": {
    "type": "Legionsheimat (VIII. Legion, zerstört)",
    "desc": "Ewig nächtliche Makropolwelt, die Konrad Curze als 'Night Haunter' durch Terror ordnete. Als sie nach seinem Weggang wieder in Verbrechen versank, ließ er sie noch vor der Häresie vernichten."
   }
  },
  "isstvan3": {
   "name": "Isstvan III",
   "type": "Kolonialwelt",
   "desc": "Hier begann Horus' offener Verrat an den loyalen Teilen seiner Legionen.",
   "books": [
    "galaxy_in_flames",
    "flight_eisenstein"
   ],
   "era30k": {
    "type": "Rebellenwelt · Virusbombardement",
    "desc": "Abgefallene Kolonie, gegen die Horus vier Legionen schickte. Die als unzuverlässig geltenden Marines wurden abgesetzt und dann per Virusbombe und Bombardement ausgelöscht."
   }
  },
  "isstvan5": {
   "name": "Isstvan V",
   "type": "Wüstenwelt",
   "desc": "Schauplatz des Drop-Site-Massakers.",
   "books": [
    "fulgrim",
    "dropsite_massacre"
   ],
   "era30k": {
    "type": "Schlachtfeld (Urgall-Senke)",
    "desc": "006.M31 landeten drei loyale Legionen in der Urgall-Senke, um die Verräter zu stellen, und wurden von den vermeintlichen Verbündeten der zweiten Welle verraten."
   }
  },
  "davin": {
   "name": "Davin",
   "type": "Feudalwelt",
   "desc": "Mondwelt, auf der Horus verwundet und durch die Mächte des Chaos verführt wurde.",
   "books": [
    "false_gods"
   ],
   "era30k": {
    "type": "Kompatible Welt der Luna Wolves",
    "desc": "Der von Horus eingesetzte Gouverneur Eugen Temba fiel ab. Auf Davins Mond verwundete er Horus mit dem Anathame; in einer Logentempel-Heilung wurde Horus verführt."
   }
  },
  "tanith": {
   "name": "Tanith",
   "type": "Waldwelt (zerstört)",
   "desc": "Heimat des Tanith First and Only, der Gaunt's Ghosts.",
   "books": [
    "first_and_only",
    "ghostmaker"
   ]
  },
  "verghast": {
   "name": "Verghast",
   "type": "Makropolwelt",
   "desc": "Makropolwelt in den Sabbat-Welten, Schauplatz der Belagerung von Vervunhive.",
   "books": []
  },
  "titan": {
   "name": "Titan",
   "type": "Mond · Ordensheimat",
   "desc": "Saturnmond im Sol-System und geheime Festung der Grey Knights, des Dämonenjäger-Ordens der Ordo Malleus.",
   "era40k": {
    "type": "Ordensheimat",
    "desc": "Sitz der Grey Knights; von hier brechen ihre Bruderschaften zu Dämoneninvasionen in der ganzen Galaxis auf."
   },
   "books": [
    "grey_knights",
    "dark_adeptus",
    "hammer_of_daemons"
   ]
  },
  "badab_primaris": {
   "name": "Badab Primaris",
   "type": "Makropolwelt · Ordensheimat",
   "desc": "Giftige Makropolwelt am Rand des Maelstroms und Sitz der Astral Claws unter Lufgt Huron, dem 'Tyrannen von Badab'.",
   "era40k": {
    "type": "Rebellenwelt (zurückerobert)",
    "desc": "Nach dem Badab-Krieg zurückerobert; Huron floh als Huron Blackheart mit den Red Corsairs in den Maelstrom."
   },
   "books": []
  },
  "hydra_cordatus": {
   "name": "Hydra Cordatus",
   "type": "Schmiedewelt · Festungswelt",
   "desc": "Dürre Welt mit der Zitadelle des Adeptus Mechanicus, in deren Tiefen die Gensaat-Lager der Space Marines verwahrt wurden.",
   "era40k": {
    "type": "Festungswelt (gefallen)",
    "desc": "Im späten M41 von den Iron Warriors belagert und erobert."
   },
   "books": []
  },
  "medrengard": {
   "name": "Medrengard",
   "type": "Dämonenwelt · Legionsheimat",
   "desc": "Festungswelt der Iron Warriors im Auge des Schreckens, beherrscht von Perturabo und seinen Kriegsschmieden. Über ihr brennt eine schwarze Sonne.",
   "books": []
  },
  "sicarus": {
   "name": "Sicarus",
   "type": "Dämonenwelt · Legionsheimat",
   "desc": "Daemonenwelt der Word Bearers im Auge des Schreckens, regiert von Lorgar. Von hier ziehen die Dunklen Apostel der Legion aus.",
   "books": [
    "dark_apostle",
    "dark_disciple",
    "dark_creed"
   ]
  },
  "piscina4": {
   "name": "Piscina IV",
   "type": "Bergbauwelt",
   "desc": "Imperiale Welt der Dark Angels-Rekrutierungssphäre mit der Hauptstadt Kadillus Harbour; Schauplatz eines verheerenden Ork-Angriffs.",
   "books": []
  },
  "medusa": {
   "name": "Medusa",
   "type": "Todeswelt · Ordensheimat",
   "desc": "Kalte, lebensfeindliche Welt und Heimat der Iron Hands, die das 'Fleisch' verachten und sich mit Bionik verbessern.",
   "era40k": {
    "type": "Ordensheimat",
    "desc": "Weiterhin Heimat der Iron Hands."
   },
   "era30k": {
    "type": "Legionsheimat (X. Legion)",
    "desc": "Hier wuchs Ferrus Manus auf und erschlug der Legende nach den Silberwurm Asirnoth. Nach Isstvan V Sammelpunkt der zerschlagenen Iron Hands."
   },
   "books": [
    "gorgon_of_medusa"
   ]
  },
  "gathalamor": {
   "name": "Gathalamor",
   "type": "Kardinalswelt · Schreinwelt",
   "desc": "Bedeutende Schreinwelt der Ekklesiarchie im Segmentum Solar, galaktisch südwestlich von Terra.",
   "books": []
  },
  "ophelia7": {
   "name": "Ophelia VII",
   "type": "Kardinalswelt · Schreinwelt",
   "desc": "Heilige Welt der Ekklesiarchie und Sitz des Convent Sanctorum der Adepta Sororitas.",
   "books": []
  },
  "biel_tan": {
   "name": "Biel-Tan",
   "type": "Weltenschiff der Aeldari",
   "desc": "Kriegerisches Aeldari-Weltenschiff, das die Rückeroberung des alten Reiches anstrebt. Position hier schematisch, da Weltenschiffe wandern.",
   "books": []
  },
  "rynns_world": {
   "name": "Rynn's World",
   "type": "Agrarwelt · Ordensheimat",
   "desc": "Fruchtbare Welt im Loki-Sektor und Heimat der Crimson Fists mit ihrem Festungskloster Arx Tyrannus.",
   "era40k": {
    "type": "Ordensheimat (verwüstet)",
    "desc": "Ab 989.M41 von Snagrods Waaagh! verwüstet; die Arx Tyrannus wurde durch eine fehlgeleitete eigene Rakete zerstört."
   },
   "books": []
  },
  "metalica": {
   "name": "Metalica",
   "type": "Schmiedewelt",
   "desc": "Schmiedewelt und industrielles Herz des Charadon-Sektors, berühmt für ihren lärmenden Kriegskult.",
   "books": []
  },
  "nocturne": {
   "name": "Nocturne",
   "type": "Todeswelt · Ordensheimat",
   "desc": "Vulkanische Welt mit gewaltigen Gezeitenbeben, Heimat der Salamanders und ihres Primarchen Vulkan.",
   "era30k": {
    "type": "Legionsheimat (XVIII. Legion)",
    "desc": "Vulkan wuchs bei einem Schmied auf und schützte die Sanctuary-Städte vor Sklavenjägern. Nach Isstvan V hüteten die Salamander hier die Hoffnung auf seine Rückkehr."
   },
   "books": [
    "salamander",
    "firedrake",
    "deathfire",
    "lord_of_drakes"
   ],
   "era40k": {
    "type": "Ordensheimat",
    "desc": "Weiterhin Heimat der Salamanders."
   }
  },
  "ichar4": {
   "name": "Ichar IV",
   "type": "Makropolwelt",
   "desc": "Makropolwelt im Ultima Segmentum, galaktisch nördlich von Ultramar.",
   "books": []
  },
  "tarsis_ultra": {
   "name": "Tarsis Ultra",
   "type": "Agrarwelt (tot)",
   "desc": "Ehemalige Agrarwelt im Ultima Segmentum, die von einem Ausläufer der Schwarmflotte Leviathan angegriffen wurde.",
   "books": []
  },
  "iax": {
   "name": "Iax",
   "type": "Gartenwelt",
   "desc": "Paradiesische Gartenwelt in Ultramar und eine der 'Fünfhundert Welten' Guillimans.",
   "era40k": {
    "type": "Gartenwelt (verseucht)",
    "desc": "In den Seuchenkriegen Ziel Mortarions und Schauplatz seines Duells mit Guilliman."
   },
   "books": []
  },
  "octarius": {
   "name": "Octarius",
   "type": "Ork-Reich",
   "desc": "Kerngebiet eines der grössten Ork-Reiche der Galaxis, am Ostrand nahe Ultramar.",
   "era40k": {
    "type": "Kriegsgebiet",
    "desc": "Seit Kryptmans Plan Schauplatz eines endlosen Krieges zwischen Tyraniden und Orks."
   },
   "books": []
  },
  "damnos": {
   "name": "Damnos",
   "type": "Bergbauwelt (verloren)",
   "desc": "Eisige imperiale Bergbauwelt, unter deren Oberfläche eine Necron-Gruft schlief.",
   "books": []
  },
  "pavonis": {
   "name": "Pavonis",
   "type": "Industriewelt",
   "desc": "Imperiale Welt, auf der Uriel Ventris seine ersten Einsätze als Hauptmann der 4. Kompanie der Ultramarines bestritt.",
   "books": [
    "courage_and_honour"
   ]
  },
  "dalyth": {
   "name": "Dal'yth Prime",
   "type": "Sept-Welt der T'au",
   "desc": "T'au-Sept-Welt jenseits des Damocles-Golfs, Hauptziel des imperialen Damocles-Kreuzzugs.",
   "books": []
  },
  "tsagualsa": {
   "name": "Tsagualsa",
   "type": "Totenwelt",
   "desc": "Düstere Welt im Thramas-Sektor am Ostrand, von den Night Lords die 'Aaswelt' genannt.",
   "era30k": {
    "type": "Festung der Night Lords",
    "desc": "Hier wurde Konrad Curze von der Assassine M'Shen getötet."
   },
   "books": []
  },
  "paradyce6": {
   "name": "Paradyce VI",
   "type": "Imperiale Welt (verloren)",
   "desc": "Welt im Nephilim-Sektor, die innerhalb des Pariah-Nexus liegt und von den Necrons überrannt wurde.",
   "books": []
  },
  "necromunda": {
   "name": "Necromunda",
   "type": "Makropolwelt",
   "desc": "Verschmutzte Makropolwelt im Segmentum Solar, berühmt für die Makropole Primus und ihre Unterwelt voller Gangs. Wichtiger Munitions- und Rüstungslieferant der Imperialen Armee.",
   "books": [
    "survival_instinct",
    "salvation_necromunda",
    "blood_royal",
    "junktion",
    "fleshworks",
    "cardinal_crimson",
    "back_from_the_dead",
    "outlander",
    "lasgun_wedding",
    "terminal_overkill",
    "sinners_bounty",
    "road_to_redemption",
    "soulless_fury",
    "fire_made_flesh"
   ]
  },
  "golgotha": {
   "name": "Golgotha",
   "type": "Ork-Welt",
   "desc": "Von Ghazghkull Thraka eroberte Welt, die er zu einer riesigen Munitionsfabrik für seinen nächsten Waaagh! machen wollte. Hier verlor Commissar Yarrick seinen Baneblade 'Fortress of Arrogance'.",
   "books": [
    "gunheads"
   ]
  },
  "catachan": {
   "name": "Catachan",
   "type": "Todeswelt · Dschungelwelt",
   "desc": "Berüchtigtste Todeswelt des Imperiums im Ultima Segmentum. Ihr tödlicher Dschungel bringt die Catachan-Dschungelkämpfer hervor.",
   "books": []
  },
  "valhalla": {
   "name": "Valhalla",
   "type": "Eiswelt",
   "desc": "Einst eine grüne Welt, die durch einen Kometeneinschlag aus ihrer Bahn geworfen wurde und vereiste. Heimat der Valhallanischen Eiskrieger.",
   "books": []
  },
  "krieg": {
   "name": "Krieg",
   "type": "Todeswelt (verstrahlt)",
   "desc": "Ehemalige Makropolwelt im Segmentum Tempestus, nach einem jahrhundertelangen Bürgerkrieg atomar verwüstet. Heimat des Todeskorps von Krieg.",
   "books": [
    "krieg_novel"
   ]
  },
  "tallarn": {
   "name": "Tallarn",
   "type": "Wüstenwelt",
   "desc": "Wüstenwelt im Segmentum Tempestus und Heimat der Tallarn-Wüstenkrieger.",
   "era30k": {
    "type": "Musterungswelt",
    "desc": "Bis zur Häresie eine fruchtbare Welt. Die Iron Warriors vergifteten sie per Virusbombardement; danach folgte die grösste Panzerschlacht der Geschichte."
   },
   "books": [
    "tallarn"
   ],
   "era40k": {
    "type": "Wüstenwelt",
    "desc": "Heute Wüstenwelt und Rekrutierungsquelle der Tallarn-Regimenter."
   }
  },
  "vostroya": {
   "name": "Vostroya",
   "type": "Industriewelt",
   "desc": "Industriewelt in der Halo-Zone des Segmentum Obscurus jenseits des Auges des Schreckens. Liefert als Busse ihre Erstgeborenen an die Imperiale Armee (Vostroyanische Erstgeborene).",
   "books": []
  },
  "balhaut": {
   "name": "Balhaut",
   "type": "Imperiale Welt",
   "desc": "Sabbat-Welt, auf der Kriegsmeister Slaydo den entscheidenden Sieg seines Kreuzzugs errang und dabei tödlich verwundet wurde. Später Ruhe- und Wiederaufbauwelt der Kreuzzugsarmeen.",
   "books": []
  },
  "fortis_binary": {
   "name": "Fortis Binary",
   "type": "Schmiedewelt",
   "desc": "Vom Chaos gehaltene Schmiedewelt in den Sabbat-Welten, erster grosser Einsatz der Tanith-Geister unter Gaunt.",
   "books": [
    "first_and_only",
    "ghostmaker"
   ]
  },
  "menazoid_epsilon": {
   "name": "Menazoid Epsilon",
   "type": "Todeswelt",
   "desc": "Todeswelt im Menazoid-Clasp-System. Hier fiel Lord-General Dravere; auf dem Planeten lag eine STC-Anlage zur Herstellung von 'Männern aus Eisen'.",
   "books": [
    "first_and_only",
    "ghostmaker"
   ]
  },
  "hagia": {
   "name": "Hagia",
   "type": "Schreinwelt",
   "desc": "Geburtswelt der Heiligen Sabbat und Ruhestätte ihrer Reliquien. Hauptstadt ist die Heilige Doctrinopolis.",
   "books": [
    "honour_guard"
   ]
  },
  "phantine": {
   "name": "Phantine",
   "type": "Imperiale Welt",
   "desc": "Welt mit giftiger unterer Atmosphäre, deren Städte hoch über den Wolken liegen. Zurückeroberung durch Luftlandeoperationen der Tanith-Geister und Luftkämpfe der Phantine-Luftstreitkräfte.",
   "books": [
    "guns_of_tanith",
    "double_eagle"
   ]
  },
  "aexe_cardinal": {
   "name": "Aexe Cardinal",
   "type": "Imperiale Welt",
   "desc": "Von Grabenkrieg zerrissene Welt, auf der die Aexe-Allianz gegen die vom Chaos unterstützte Shadik-Republik kämpft.",
   "books": [
    "straight_silver"
   ]
  },
  "herodor": {
   "name": "Herodor",
   "type": "Schreinwelt",
   "desc": "Schreinwelt der Sabbat-Welten, auf der ein Mädchen als Wiedergeburt der Heiligen Sabbat verehrt wird. Hier fiel Oberst Colm Corbec.",
   "books": [
    "sabbat_martyr"
   ]
  },
  "gereon": {
   "name": "Gereon",
   "type": "Imperiale Welt (besetzt)",
   "desc": "Vom Archfeind besetzte Welt, auf der der Verräter-General Noches Sturm gefangen gehalten wird. 777.M41 befreit.",
   "books": [
    "traitor_general",
    "armour_of_contempt"
   ]
  },
  "jago": {
   "name": "Jago",
   "type": "Imperiale Welt",
   "desc": "Ödwelt, auf der die Geister die uralte Festung Hinzerhaus gegen den Blutpakt halten müssen.",
   "books": [
    "only_in_death",
    "iron_star"
   ]
  },
  "urdesh": {
   "name": "Urdesh",
   "type": "Schmiedewelt",
   "desc": "Schmiedewelt im Eisengürtel und einer der wichtigsten Versorger des Sabbat-Welten-Kreuzzugs, zur Mitte des Kreuzzugs vom Chaos erobert. Schauplatz von Macaroths Entscheidungsfeldzug gegen Anarch Sek.",
   "books": [
    "the_warmaster",
    "the_anarch"
   ]
  },
  "ancreon_sextus": {
   "name": "Ancreon Sextus",
   "type": "Imperiale Welt",
   "desc": "Welt mit uralten Stufenstädten wie Sparshad Mons, die der Blutpakt als Warptore nutzt.",
   "books": [
    "his_last_command"
   ]
  },
  "salvations_reach": {
   "name": "Salvation's Reach",
   "type": "Archfeind-Stützpunkt",
   "desc": "Hochgeheime Bastion des Archfeinds in den Sabbat-Welten, Ziel eines riskanten Kommandounternehmens der Tanith-Geister.",
   "books": [
    "salvations_reach"
   ]
  },
  "orestes": {
   "name": "Orestes",
   "type": "Schmiedewelt",
   "desc": "Schmiedewelt des Adeptus Mechanicus, auf der die Titanenlegion Legio Invicta auf dem Weg in die Sabbat-Welten Station macht und von Chaostitanen angegriffen wird.",
   "books": [
    "titanicus"
   ]
  },
  "karsk": {
   "name": "Karsk",
   "type": "Imperiale Welt",
   "desc": "Welt im westlichen Halo, auf der Lord Solar Macharius gegen einen Kult kämpft, der den 'Engel des Feuers' – in Wahrheit einen Dämon – beschwören will.",
   "books": [
    "angel_of_fire"
   ]
  },
  "demetrius": {
   "name": "Demetrius",
   "type": "Imperiale Welt",
   "desc": "Welt, auf der Macharius nach der 'Faust von Demetrius' sucht, einer Energiefaust, die angeblich einem Primarchen gehörte.",
   "books": [
    "fist_of_demetrius"
   ]
  },
  "loki": {
   "name": "Loki",
   "type": "Imperiale Welt",
   "desc": "Schauplatz der letzten Jahre des Macharius-Kreuzzugs.",
   "books": [
    "fall_of_macharius"
   ]
  },
  "port_maw": {
   "name": "Port Maw",
   "type": "Makropolwelt",
   "desc": "Hohler, uralter künstlicher Planetoid, Hauptwelt des Gothic-Sektors und Hauptquartier der Battlefleet Gothic.",
   "books": [
    "execution_hour",
    "shadow_point"
   ]
  },
  "savaven": {
   "name": "Savaven",
   "type": "Kardinalswelt",
   "desc": "Kardinalswelt der Ekklesiarchie, im Gothic-Krieg als erster Planet vom Planetenkiller vernichtet.",
   "era40k": {
    "type": "Zerstörte Welt",
    "desc": "Im Gothic-Krieg vom Planetenkiller vernichtet."
   },
   "books": []
  },
  "schindlegeist": {
   "name": "Schindlegeist",
   "type": "Zivilisierte Welt",
   "desc": "Standort der fünften Schwarzsteinfestung vor dem Gothic-Krieg und Schauplatz der Entscheidungsschlacht gegen Abaddons Flotte.",
   "books": []
  },
  "gudrun": {
   "name": "Gudrun",
   "type": "Imperiale Welt",
   "desc": "Ehemalige Hauptwelt des Helican-Subsektors im Scarus-Sektor, Sitz der Adelshäuser wie des verräterischen Hauses Glaw.",
   "books": [
    "xenos"
   ]
  },
  "hubris": {
   "name": "Hubris",
   "type": "Imperiale Welt",
   "desc": "Kalte Welt im Helican-Subsektor. In ihren Kryo-Gewölben stellt Inquisitor Eisenhorn den Ketzer Murdin Eyclone.",
   "books": [
    "xenos"
   ]
  },
  "thracian_primaris": {
   "name": "Thracian Primaris",
   "type": "Imperiale Welt",
   "desc": "Welt im Helican-Subsektor, Schauplatz des katastrophalen Triumphzugs von Lord Helican 241.M41.",
   "books": [
    "malleus"
   ]
  },
  "eustis_majoris": {
   "name": "Eustis Majoris",
   "type": "Makropolwelt",
   "desc": "Hauptwelt des Angelus-Subsektors im Scarus-Sektor, eine riesige Makropole. Hier ermittelt Inquisitor Ravenor gegen den Handel mit der Droge Flects.",
   "books": [
    "ravenor",
    "ravenor_returned",
    "ravenor_rogue"
   ]
  },
  "sancour": {
   "name": "Sancour",
   "type": "Imperiale Welt",
   "desc": "Welt mit der verfallenden Stadt Queen Mab, einst Zentrum des Schiffbaus. Schauplatz der Bequin-Romane.",
   "books": [
    "pariah",
    "penitent"
   ]
  },
  "vraks_prime": {
   "name": "Vraks Prime",
   "type": "Arsenalwelt",
   "desc": "Einzige bewohnte Welt des Vraks-Systems im Scarus-Sektor, ein gewaltiges Waffenlager des Imperiums. Fiel unter Kardinal Xaphan vom Imperium ab.",
   "books": [
    "siege_of_vraks"
   ]
  },
  "kathur": {
   "name": "Kathur",
   "type": "Schreinwelt",
   "desc": "Schreinwelt im Scarus-Sektor nahe dem Auge des Schreckens, von Chaosseuchen heimgesucht.",
   "books": [
    "cadian_blood"
   ]
  },
  "gravalax": {
   "name": "Gravalax",
   "type": "Agrarwelt",
   "desc": "Kleine Agrarwelt in der Region des Damokles-Golfs, fast vollständig von T'au-Raum umgeben.",
   "books": [
    "for_the_emperor"
   ]
  },
  "perlia": {
   "name": "Perlia",
   "type": "Zivilisierte Welt",
   "desc": "Zivilisierte Welt nahe dem Damokles-Golf mit dem Grossteil der Industrie ihres Subsektors. Zweimal Schauplatz einer Belagerung, beide Male mit Ciaphas Cain.",
   "books": [
    "death_or_glory",
    "cains_last_stand"
   ]
  },
  "simia_orichalcae": {
   "name": "Simia Orichalcae",
   "type": "Eiswelt",
   "desc": "Eiswelt mit einer wichtigen Promethium-Raffinerie, die Cains Regiment gegen Orks verteidigt.",
   "books": [
    "caves_of_ice"
   ]
  },
  "adumbria": {
   "name": "Adumbria",
   "type": "Imperiale Welt",
   "desc": "Welt, die Cains Regiment gegen eine Chaos-Invasion verteidigt.",
   "books": [
    "traitors_hand"
   ]
  },
  "periremunda": {
   "name": "Periremunda",
   "type": "Imperiale Welt",
   "desc": "Welt, die sich einer anrückenden Tyraniden-Schwarmflotte gegenübersieht.",
   "books": [
    "duty_calls"
   ]
  },
  "nusquam_fundumentibus": {
   "name": "Nusquam Fundumentibus",
   "type": "Imperiale Welt",
   "desc": "Welt, auf der Cain und das Valhallanische 597. gegen einen Orkausbruch eingesetzt werden.",
   "books": [
    "last_ditch"
   ]
  },
  "daniks_world": {
   "name": "Danik's World",
   "type": "Kriegswelt · Eiswelt",
   "desc": "Ehemalige Agrarwelt im Ultima Segmentum, umkämpft von rebellischen PVS-Truppen, der 12. Vostroyanischen Armee und Orks.",
   "books": [
    "rebel_winter"
   ]
  },
  "cressida": {
   "name": "Cressida",
   "type": "Tote Welt (ehem. Eiswelt)",
   "desc": "Eiswelt, die nach dem Abzug der imperialen Truppen durch Exterminatus vernichtet wurde.",
   "books": [
    "ice_guard"
   ]
  },
  "rogar_iii": {
   "name": "Rogar III",
   "type": "Todeswelt · Dschungelwelt",
   "desc": "Zwischen Imperium und Orks umkämpfte Dschungel-Todeswelt, Einsatzort von Catachan-Dschungelkämpfern.",
   "books": [
    "death_world"
   ]
  },
  "gondwa_vi": {
   "name": "Gondwa VI",
   "type": "Sumpfwelt",
   "desc": "Von Orks überrannte Sumpfwelt, auf der die Catachan 57. Dschungelkämpfer kämpfen.",
   "books": [
    "catachan_devil"
   ]
  },
  "dulmalin": {
   "name": "Dulma'lin",
   "type": "Höhlenwelt",
   "desc": "Höhlenwelt, die Oberst 'Iron Hand' Straken und seine Catachaner von Orks säubern sollen.",
   "books": [
    "straken"
   ]
  },
  "khadar": {
   "name": "Khadar",
   "type": "Wüstenwelt",
   "desc": "Wüstenwelt, von der ein rätselhafter Notruf ausgeht; Tallarn-Wüstenkrieger werden zur Untersuchung entsandt.",
   "books": [
    "desert_raiders"
   ]
  },
  "belmos_vii": {
   "name": "Belmos VII",
   "type": "Minenwelt",
   "desc": "Minenwelt, deren Bevölkerung von einer unerklärlichen Seuche befallen ist; Einsatzort des 114. Mordianischen Eisengarde-Regiments.",
   "books": [
    "iron_guard"
   ]
  },
  "broucheroc": {
   "name": "Broucheroc",
   "type": "Kriegswelt",
   "desc": "Frontstadt im Krieg gegen die Orks, in der die Lebenserwartung eines neuen Gardisten auf fünfzehn Stunden berechnet wird.",
   "books": [
    "fifteen_hours"
   ]
  },
  "luna": {
   "name": "Luna",
   "type": "Mond",
   "desc": "Terras Mond im Sol-System.",
   "era30k": {
    "type": "Heimat der Selenar-Gencults",
    "desc": "Ursprünglicher Stützpunkt der Luna Wolves. Während der Belagerung von Terra Schauplatz von Kämpfen um die Gentechnik-Anlagen der Selenar."
   },
   "books": [
    "sons_of_the_selenar"
   ]
  },
  "pluto": {
   "name": "Pluto",
   "type": "Festungsplanet",
   "desc": "Äusserster Planet des Sol-Systems.",
   "era30k": {
    "type": "Äussere Verteidigung des Sol-Systems",
    "desc": "010.M31 griff die Alpha Legion die Verteidigung der Imperial Fists an Pluto an – das erste grosse Gefecht des Solarkriegs."
   },
   "books": [
    "praetorian_of_dorn"
   ]
  },
  "cthonia": {
   "name": "Cthonia",
   "type": "Bergbauwelt (zerstört)",
   "desc": "Ausgebeutete, von Bandenkriegen zerfressene Bergbauwelt im Segmentum Solar.",
   "era30k": {
    "type": "Legionsheimat (XVI. Legion)",
    "desc": "Rekrutierungswelt der Luna Wolves bzw. Sons of Horus; ihre Krieger trugen den rauen Bandenkodex Cthonias in die Legion."
   },
   "books": []
  },
  "nikaea": {
   "name": "Nikaea",
   "type": "Grenzwelt",
   "desc": "Welt im Segmentum Solar.",
   "era30k": {
    "type": "Ort des Konzils von Nikaea",
    "desc": "001.M31 entschied der Imperator hier über die Zukunft der Librarians und der psionischen Künste in den Legionen."
   },
   "books": [
    "thousand_sons"
   ]
  },
  "beta_garmon2": {
   "name": "Beta-Garmon II",
   "type": "Makropolwelt",
   "desc": "Welt im Beta-Garmon-Sternhaufen, einem strategischen Knotenpunkt vor dem Segmentum Solar.",
   "era30k": {
    "type": "Schlachtfeld der Titanen",
    "desc": "Schauplatz des 'Titandeath' um die Stadt Nyrcon: Über tausend Titanen fielen in der grössten Titanenschlacht der Geschichte."
   },
   "books": [
    "titandeath"
   ]
  },
  "paramar5": {
   "name": "Paramar V",
   "type": "Schmiedewelt",
   "desc": "Schmiedewelt im Norden des Segmentum Solar, an einer warpstabilen Route zwischen Isstvan und Sol.",
   "era30k": {
    "type": "Schmiedewelt · Nachschubknoten",
    "desc": "006.M31 von Alpha Legion und Dunklem Mechanicum erobert, danach mehrfach umkämpft (Zweite Schlacht 008–011.M31); erst 019.M31 zurückerobert."
   },
   "books": []
  },
  "molech": {
   "name": "Molech",
   "type": "Festungswelt · Ritterwelt",
   "desc": "Ritterwelt, auf der der Imperator einst – so die Legende der Verräter – einen Pakt mit dem Chaos schloss.",
   "era30k": {
    "type": "Festungs- und Ritterwelt",
    "desc": "009.M31 von Horus mit Sons of Horus und Death Guard erobert; Horus betritt dort ein Warptor und gewinnt neue Macht."
   },
   "books": [
    "vengeful_spirit"
   ]
  },
  "trisolian": {
   "name": "Trisolian",
   "type": "System",
   "desc": "Sternsystem auf Horus' Weg nach Terra.",
   "era30k": {
    "type": "Schlachtfeld",
    "desc": "012.M31 griff Leman Russ hier das Flaggschiff Vengeful Spirit an und verwundete Horus mit dem Speer des Russ."
   },
   "books": [
    "wolfsbane"
   ]
  },
  "phall": {
   "name": "Phall",
   "type": "Agrarwelten-System",
   "desc": "System im Segmentum Obscurus mit zwei Agrarwelten.",
   "era30k": {
    "type": "Schlachtfeld",
    "desc": "007.M31 trafen hier eine Imperial-Fists-Flotte unter Alexis Polux und die Iron Warriors aufeinander."
   },
   "books": [
    "shadows_of_treachery"
   ]
  },
  "iydris": {
   "name": "Iydris",
   "type": "Dämonenwelt",
   "desc": "Welt im Auge des Schreckens.",
   "era30k": {
    "type": "Schauplatz von Fulgrims Aufstieg",
    "desc": "Ziel von Perturabos und Fulgrims Suche nach dem 'Angel Exterminatus'; Fulgrim steigt hier zum Dämonenprinzen auf."
   },
   "books": [
    "angel_exterminatus"
   ]
  },
  "colchis": {
   "name": "Colchis",
   "type": "Ordensheimat (zerstört)",
   "desc": "Wüstenwelt im Segmentum Pacificus, einst von einer mächtigen Priesterschaft beherrscht.",
   "era30k": {
    "type": "Legionsheimat (XVII. Legion)",
    "desc": "Lorgar wuchs hier im Covenant auf und führte einen Glaubenskrieg. Nach der Häresie im Bitteren Krieg (bis ca. 032.M31) zerstört."
   },
   "books": [
    "bearer_of_the_word"
   ]
  },
  "khur": {
   "name": "Khur",
   "type": "Zivilisierte Welt (tot)",
   "desc": "Welt im Segmentum Pacificus mit der Stadt Monarchia.",
   "era30k": {
    "type": "Von den Word Bearers bekehrte Welt",
    "desc": "Monarchia war als Tempelstadt zu Ehren des Imperators erbaut. Auf Befehl des Imperators zerstörten die Ultramarines sie – die Zensur der Word Bearers."
   },
   "books": [
    "first_heretic"
   ]
  },
  "inwit": {
   "name": "Inwit",
   "type": "Eiswelt",
   "desc": "Eiswelt im Inwit-Cluster (Segmentum Tempestus).",
   "era30k": {
    "type": "Heimatwelt Rogal Dorns",
    "desc": "Hier wuchs Rogal Dorn auf. 009–013.M31 griffen Verräterflotten den Inwit-Cluster an."
   },
   "books": []
  },
  "kiavahr": {
   "name": "Kiavahr",
   "type": "Schmiedewelt",
   "desc": "Technokratische Industriewelt im Kiavahr-System (Segmentum Tempestus).",
   "era30k": {
    "type": "Unterworfene Technokratie",
    "desc": "Die Tech-Gilden Kiavahrs beuteten den Gefängnismond Lycaeus aus, bis Corax' Aufstand sie stürzte."
   },
   "books": [
    "deliverance_lost"
   ]
  },
  "deliverance": {
   "name": "Deliverance",
   "type": "Mond · Ordensheimat",
   "desc": "Mond Kiavahrs, früher die Gefängniswelt Lycaeus.",
   "era30k": {
    "type": "Legionsheimat (XIX. Legion)",
    "desc": "Corax führte hier den Häftlingsaufstand an und benannte Lycaeus in Deliverance um. Nach Isstvan V baute die Raven Guard dort ihre Legion wieder auf."
   },
   "era40k": {
    "type": "Ordensheimat",
    "desc": "Weiterhin Heimat der Raven Guard."
   },
   "books": [
    "deliverance_lost",
    "corax",
    "lord_of_shadows"
   ]
  },
  "barbarus": {
   "name": "Barbarus",
   "type": "Todeswelt",
   "desc": "Von giftigen Nebeln umhüllte Welt im Segmentum Tempestus.",
   "era30k": {
    "type": "Legionsheimat (XIV. Legion)",
    "desc": "Mortarion wuchs unter einem Nekromanten-Kriegsherrn auf und führte die Menschen der Täler gegen die Herren der Berge. Während der Häresie zerstört."
   },
   "books": [
    "buried_dagger",
    "pale_king"
   ]
  },
  "ullanor": {
   "name": "Ullanor Prime",
   "type": "Orkwelt",
   "desc": "Zentrum des grössten Ork-Reichs zur Zeit des Großen Kreuzzugs. Lage vor dem Krieg des Biests unbekannt.",
   "era30k": {
    "type": "Schauplatz des Ullanor-Kreuzzugs",
    "desc": "000.M31 besiegt; beim anschließenden Triumph ernennt der Imperator Horus zum Kriegsmeister. Vor der Belagerung Terras Sammelpunkt der Verräterheere."
   },
   "books": [
    "slaves_to_darkness"
   ]
  },
  "olympia": {
   "name": "Olympia",
   "type": "Tote Welt",
   "desc": "Gebirgige Welt der Stadtstaaten im Ultima Segmentum.",
   "era30k": {
    "type": "Legionsheimat (IV. Legion)",
    "desc": "Perturabo wuchs hier am Hof des Tyrannen von Lochos auf. Nach einem Aufstand ließ er ca. 004.M31 die Bevölkerung dezimieren. Bei der Belagerung ab 019.M31 sprengten die Iron Warriors ihre eigenen Arsenale."
   },
   "books": [
    "hammer_of_olympia"
   ]
  },
  "chemos": {
   "name": "Chemos",
   "type": "Tote Welt",
   "desc": "Ausgebeutete Industriewelt im Ultima Segmentum (Aquitaine-Sektor).",
   "era30k": {
    "type": "Legionsheimat (III. Legion)",
    "desc": "Fulgrim führte die verarmte Kolonie zu neuem Wohlstand. 012.M31 von den Dark Angels zerstört."
   },
   "books": [
    "palatine_phoenix"
   ]
  },
  "diamat": {
   "name": "Diamat",
   "type": "Schmiedewelt",
   "desc": "Schmiedewelt im Tanagra-System (Ultima Segmentum).",
   "era30k": {
    "type": "Umkämpfte Schmiedewelt",
    "desc": "Der Löwe und die Dark Angels verteidigten Diamat gegen Kräfte des Horus, während sie von der Rebellion erfuhren."
   },
   "books": [
    "fallen_angels"
   ]
  },
  "nuceria": {
   "name": "Nuceria",
   "type": "Tote Welt",
   "desc": "Welt im Ultima Segmentum, auf der Angron als Gladiatorensklave aufwuchs.",
   "era30k": {
    "type": "Heimatwelt Angrons",
    "desc": "Angron floh mit Mitsklaven gegen die Hochreiter. Der Imperator holte ihn gegen seinen Willen – seine Gefährten starben. 008.M31 Ort der Schlacht, in der Angron zum Dämonenprinzen aufsteigt. (Ausbildungswelt der World Eaters war Bodt.)"
   },
   "books": [
    "betrayer",
    "slave_of_nuceria"
   ]
  },
  "signus_prime": {
   "name": "Signus Prime",
   "type": "Verbotene Welt",
   "desc": "Hauptwelt des Signus-Clusters im Ultima Segmentum.",
   "era30k": {
    "type": "Schauplatz des Signus-Feldzugs",
    "desc": "Horus lockte die Blood Angels hierher, wo sie gegen Dämonen Khornes kämpften und Sanguinius vom Fluch der Legion erfuhr. Danach zur Mortae Perpetua erklärt."
   },
   "books": [
    "fear_to_tread"
   ]
  },
  "chogoris": {
   "name": "Chogoris",
   "type": "Feudalwelt · Ordensheimat",
   "desc": "Steppenwelt im Ultima Segmentum (Yasan-Sektor), Heimat der White Scars.",
   "era30k": {
    "type": "Legionsheimat (V. Legion)",
    "desc": "Jaghatai Khan einte als Kriegsherr die Steppenvölker und vertrieb das Palatinat, bevor der Imperator ihn fand."
   },
   "era40k": {
    "type": "Ordensheimat",
    "desc": "Weiterhin Heimat der White Scars."
   },
   "books": [
    "warhawk_of_chogoris"
   ]
  },
  "sixty_three_nineteen": {
   "name": "Sixty-Three Nineteen",
   "type": "Kompatible Welt",
   "desc": "Die 19. Welt, die von der 63. Expeditionsflotte unterworfen wurde. Lage unbekannt.",
   "era30k": {
    "type": "Kreuzzugswelt",
    "desc": "001.M31 gab sich ihr Herrscher als Imperator aus; Horus und die Luna Wolves stürzten ihn."
   },
   "books": [
    "horus_rising"
   ]
  },
  "chondax": {
   "name": "Chondax",
   "type": "Ork- und tote Welt",
   "desc": "Trinäres Sternsystem am galaktischen Rand. Genaue Lage unbekannt.",
   "era30k": {
    "type": "Feldzug der White Scars",
    "desc": "Jahrelang kämpften die White Scars hier gegen Orks und standen dabei einer Blockade der Alpha Legion gegenüber, die sie von Nachrichten abschnitt."
   },
   "books": [
    "scars"
   ]
  },
  "armatura": {
   "name": "Armatura",
   "type": "Garnisons- und Schmiedewelt",
   "desc": "Welt in Ultramar.",
   "era30k": {
    "type": "Militärischer Knotenpunkt Ultramars",
    "desc": "Während des Schattenkreuzzugs von Angron und den World Eaters verwüstet."
   },
   "books": [
    "betrayer"
   ]
  },
  "thramas": {
   "name": "Thramas",
   "type": "Makropolwelt",
   "desc": "Makropolwelt im Thramas-Sektor am Rand des Ultima Segmentum.",
   "era30k": {
    "type": "Umkämpfte Sektorwelt",
    "desc": "Ziel des Thramas-Kreuzzugs, in dem Night Lords und Dark Angels jahrelang um den Sektor kämpften."
   },
   "books": []
  },
  "sotha": {
   "name": "Sotha",
   "type": "Tote Welt",
   "desc": "Welt am Rand der Eastern Fringe, nahe Ultramar.",
   "era30k": {
    "type": "Standort des Pharos",
    "desc": "Hier stand der Pharos, ein Xenos-Leuchtfeuer, das zeitweise das Astronomican ersetzte. Die Night Lords griffen Sotha an."
   },
   "books": [
    "pharos"
   ]
  }
 },
 "events": [
  {
   "id": "unification_wars",
   "name": "Vereinigungskriege",
   "date": "M30",
   "sort": 30790,
   "era": "Großer Kreuzzug",
   "desc": "Der Imperator eint das zersplitterte Terra mit seinen Donnerkriegern; Constantin Valdor führt die Custodes an.",
   "planets": [
    "terra"
   ],
   "books": [
    "valdor"
   ]
  },
  {
   "id": "crusade_start",
   "name": "Beginn des Großen Kreuzzugs",
   "date": "ca. 798.M30",
   "sort": 30798,
   "era": "Großer Kreuzzug",
   "desc": "Nach dem Vertrag mit dem Mars bricht der Imperator von Terra auf, um die verstreuten Welten der Menschheit zurückzugewinnen.",
   "planets": [
    "terra",
    "mars"
   ],
   "books": []
  },
  {
   "id": "lycaeus_uprising",
   "name": "Aufstand auf Lycaeus",
   "date": "M30",
   "sort": 30850,
   "era": "Großer Kreuzzug",
   "desc": "Corax führt die Gefangenen des Mondes Lycaeus gegen die Tech-Gilden Kiavahrs; der Mond wird in Deliverance umbenannt.",
   "planets": [
    "deliverance",
    "kiavahr"
   ],
   "books": [
    "deliverance_lost"
   ]
  },
  {
   "id": "barbarus_liberation",
   "name": "Befreiung von Barbarus",
   "date": "M30",
   "sort": 30860,
   "era": "Großer Kreuzzug",
   "desc": "Mortarion erhebt sich gegen die Herren des Nebels; der Imperator erschlägt den letzten Kriegsherrn, und Mortarion übernimmt die Death Guard.",
   "planets": [
    "barbarus"
   ],
   "books": [
    "buried_dagger",
    "pale_king"
   ]
  },
  {
   "id": "monarchia",
   "name": "Zerstörung von Monarchia",
   "date": "spätes M30",
   "sort": 30963,
   "era": "Großer Kreuzzug",
   "desc": "Der Imperator lässt die Ultramarines die Tempelstadt Monarchia zerstören und tadelt die Word Bearers für ihre Verehrung – ca. 43 Jahre vor Isstvan V.",
   "planets": [
    "khur"
   ],
   "books": [
    "first_heretic"
   ]
  },
  {
   "id": "nostramo_destruction",
   "name": "Vernichtung von Nostramo",
   "date": "spätes M30",
   "sort": 30984,
   "era": "Großer Kreuzzug",
   "desc": "Konrad Curze lässt seine Heimatwelt aus dem Orbit zerstören, nachdem sie wieder in Gesetzlosigkeit versunken ist.",
   "planets": [
    "nostramo"
   ],
   "books": []
  },
  {
   "id": "ullanor",
   "name": "Ullanor-Kreuzzug und Triumph",
   "date": "000.M31",
   "sort": 31000,
   "era": "Großer Kreuzzug",
   "desc": "Das größte Ork-Reich der Galaxis wird vernichtet. Beim Triumph ernennt der Imperator Horus zum Kriegsmeister und zieht sich nach Terra zurück.",
   "planets": [
    "ullanor"
   ],
   "books": []
  },
  {
   "id": "sixty_three_nineteen",
   "name": "Schlacht um Sixty-Three Nineteen",
   "date": "001.M31",
   "sort": 31001,
   "era": "Großer Kreuzzug",
   "desc": "Horus und die Luna Wolves stürzen den falschen 'Imperator' der Welt; Captain Garviel Loken tötet den Usurpator.",
   "planets": [
    "sixty_three_nineteen"
   ],
   "books": [
    "horus_rising"
   ]
  },
  {
   "id": "nikaea",
   "name": "Konzil von Nikaea",
   "date": "001.M31",
   "sort": 31001.5,
   "era": "Großer Kreuzzug",
   "desc": "Der Imperator verbietet den Legionen den Gebrauch psionischer Kräfte; die Librarius-Abteilungen werden aufgelöst und Magnus wird verwarnt.",
   "planets": [
    "nikaea"
   ],
   "books": [
    "thousand_sons"
   ]
  },
  {
   "id": "chondax",
   "name": "Chondax-Feldzug",
   "date": "001–007.M31",
   "sort": 31001.8,
   "era": "Großer Kreuzzug",
   "desc": "Die White Scars kämpfen jahrelang gegen Orks am Rand der Galaxis; eine Blockade der Alpha Legion hält sie über den Ausbruch der Häresie im Unklaren.",
   "planets": [
    "chondax"
   ],
   "books": [
    "scars"
   ]
  },
  {
   "id": "davin",
   "name": "Horus' Verführung auf Davin",
   "date": "004.M31",
   "sort": 31004,
   "era": "Großer Kreuzzug",
   "desc": "Horus wird auf Davins Mond von Eugen Temba mit dem Anathame verwundet und während der Heilung im Logentempel von den Chaosgöttern verführt.",
   "planets": [
    "davin"
   ],
   "books": [
    "false_gods"
   ]
  },
  {
   "id": "olympia_decimation",
   "name": "Dezimierung von Olympia",
   "date": "ca. 004.M31",
   "sort": 31004.2,
   "era": "Großer Kreuzzug",
   "desc": "Nach einem Aufstand auf Olympia zwingt Perturabo die Bevölkerung zur Dezimierung; Millionen sterben, die Welt wird versklavt.",
   "planets": [
    "olympia"
   ],
   "books": [
    "hammer_of_olympia"
   ]
  },
  {
   "id": "prospero",
   "name": "Brand von Prospero",
   "date": "004–005.M31",
   "sort": 31004.8,
   "era": "Horus-Häresie",
   "desc": "Nach Magnus' verbotener Warnung an Terra zerstören Space Wolves und Custodes Prospero. Die Thousand Sons werden ins Auge des Schreckens gerissen.",
   "planets": [
    "prospero"
   ],
   "books": [
    "thousand_sons",
    "prospero_burns",
    "crimson_king"
   ]
  },
  {
   "id": "isstvan3",
   "name": "Massaker auf Isstvan III",
   "date": "005.M31",
   "sort": 31005,
   "era": "Horus-Häresie",
   "desc": "Horus lässt die loyalen Marines seiner Verräterlegionen per Virusbombardement auslöschen. Beginn der offenen Rebellion.",
   "planets": [
    "isstvan3"
   ],
   "books": [
    "galaxy_in_flames",
    "flight_eisenstein"
   ]
  },
  {
   "id": "webway_war",
   "name": "Krieg im Netz der Tausend Tore",
   "date": "M31",
   "sort": 31005.2,
   "era": "Horus-Häresie",
   "desc": "Magnus' Durchbruch beschädigt das Netz unter dem Palast; Custodes, Schwestern der Stille und der Imperator kämpfen gegen eindringende Dämonen.",
   "planets": [
    "terra"
   ],
   "books": [
    "master_of_mankind"
   ]
  },
  {
   "id": "signus",
   "name": "Signus-Feldzug",
   "date": "005–006.M31",
   "sort": 31005.4,
   "era": "Horus-Häresie",
   "desc": "Horus lenkt die Blood Angels in den Signus-Cluster, wo sie gegen Dämonen Khornes kämpfen und Sanguinius vom Makel seiner Legion erfährt.",
   "planets": [
    "signus_prime"
   ],
   "books": [
    "fear_to_tread"
   ]
  },
  {
   "id": "mars_schism",
   "name": "Schisma des Mars",
   "date": "ab 005.M31",
   "sort": 31005.5,
   "era": "Horus-Häresie",
   "desc": "Bürgerkrieg innerhalb des Mechanicum zwischen Loyalisten und Anhängern des Horus.",
   "planets": [
    "mars"
   ],
   "books": [
    "mechanicum"
   ]
  },
  {
   "id": "diamat",
   "name": "Schlacht um Diamat",
   "date": "M31",
   "sort": 31005.7,
   "era": "Horus-Häresie",
   "desc": "Die Dark Angels unter dem Löwen verteidigen die Schmiedewelt Diamat gegen Kräfte, die sich Horus angeschlossen haben.",
   "planets": [
    "diamat"
   ],
   "books": [
    "fallen_angels"
   ]
  },
  {
   "id": "isstvan5",
   "name": "Drop-Site-Massaker",
   "date": "006.M31",
   "sort": 31006,
   "era": "Horus-Häresie",
   "desc": "Drei Legionen fallen ihren vermeintlichen Verbündeten in den Rücken. Ferrus Manus fällt, Iron Hands, Salamanders und Raven Guard werden zerschlagen.",
   "planets": [
    "isstvan5"
   ],
   "books": [
    "fulgrim",
    "first_heretic",
    "dropsite_massacre"
   ]
  },
  {
   "id": "paramar1",
   "name": "Erste Schlacht um Paramar",
   "date": "006.M31",
   "sort": 31006.3,
   "era": "Horus-Häresie",
   "desc": "Alpha Legion, Dunkles Mechanicum und die Titanen der Legio Fureans erobern die Schmiedewelt Paramar V und sichern Horus den Weg nach Terra.",
   "planets": [
    "paramar5"
   ],
   "books": []
  },
  {
   "id": "calth",
   "name": "Verrat von Calth",
   "date": "007.M31",
   "sort": 31007,
   "era": "Horus-Häresie",
   "desc": "Die Word Bearers greifen die Ultramarines auf Calth heimtückisch an. Die Sonne wird destabilisiert, der Ruinsturm entsteht.",
   "planets": [
    "calth"
   ],
   "books": [
    "know_no_fear",
    "mark_of_calth",
    "battle_for_the_abyss"
   ]
  },
  {
   "id": "phall",
   "name": "Schlacht von Phall",
   "date": "007.M31",
   "sort": 31007.1,
   "era": "Horus-Häresie",
   "desc": "Eine Strafexpedition der Imperial Fists unter Alexis Polux trifft im Phall-System auf die Iron Warriors – eine verlustreiche Raumschlacht ohne Sieger.",
   "planets": [
    "phall"
   ],
   "books": [
    "shadows_of_treachery"
   ]
  },
  {
   "id": "shadow_crusade",
   "name": "Schattenkreuzzug",
   "date": "007–008.M31",
   "sort": 31007.3,
   "era": "Horus-Häresie",
   "desc": "Word Bearers und World Eaters unter Lorgar und Angron verwüsten die Welten Ultramars.",
   "planets": [
    "armatura",
    "macragge"
   ],
   "books": [
    "betrayer"
   ]
  },
  {
   "id": "thramas",
   "name": "Thramas-Kreuzzug",
   "date": "007–009.M31",
   "sort": 31007.5,
   "era": "Horus-Häresie",
   "desc": "Jahrelanger Krieg zwischen Night Lords und Dark Angels um die Schmiedewelten des Thramas-Sektors.",
   "planets": [
    "thramas"
   ],
   "books": []
  },
  {
   "id": "iydris",
   "name": "Aufstieg Fulgrims auf Iydris",
   "date": "007.M31",
   "sort": 31007.7,
   "era": "Horus-Häresie",
   "desc": "Perturabo folgt Fulgrim ins Auge des Schreckens auf der Suche nach dem 'Angel Exterminatus' – und Fulgrim wird selbst zum Dämonenprinzen.",
   "planets": [
    "iydris"
   ],
   "books": [
    "angel_exterminatus"
   ]
  },
  {
   "id": "nuceria",
   "name": "Schlacht um Nuceria",
   "date": "008.M31",
   "sort": 31008,
   "era": "Horus-Häresie",
   "desc": "Am Ende des Schattenkreuzzugs stellt Guilliman Angron auf Nuceria; Lorgar lässt Angron zum Dämonenprinzen aufsteigen.",
   "planets": [
    "nuceria"
   ],
   "books": [
    "betrayer"
   ]
  },
  {
   "id": "imperium_secundus",
   "name": "Imperium Secundus",
   "date": "009–011.M31",
   "sort": 31009,
   "era": "Horus-Häresie",
   "desc": "Vom Ruinsturm abgeschnitten, hält Guilliman Terra für gefallen und ruft auf Macragge ein zweites Imperium mit Sanguinius als Regenten aus.",
   "planets": [
    "macragge"
   ],
   "books": [
    "unremembered_empire",
    "vulkan_lives",
    "angels_of_caliban",
    "ruinstorm"
   ]
  },
  {
   "id": "sotha",
   "name": "Schlacht um Sotha",
   "date": "ca. 009.M31",
   "sort": 31009.2,
   "era": "Horus-Häresie",
   "desc": "Die Night Lords greifen Sotha an, um den Pharos zu zerstören, der dem Imperium Secundus als Ersatz-Astronomican dient.",
   "planets": [
    "sotha"
   ],
   "books": [
    "pharos"
   ]
  },
  {
   "id": "molech",
   "name": "Schlacht um Molech",
   "date": "009.M31",
   "sort": 31009.4,
   "era": "Horus-Häresie",
   "desc": "Horus erobert die Ritterwelt Molech und betritt dort ein Warptor, durch das er gewaltige neue Macht gewinnt.",
   "planets": [
    "molech"
   ],
   "books": [
    "vengeful_spirit"
   ]
  },
  {
   "id": "inwit_siege",
   "name": "Belagerung von Inwit",
   "date": "009–013.M31",
   "sort": 31009.6,
   "era": "Horus-Häresie",
   "desc": "Verräterflotten aus mehreren Legionen greifen den Inwit-Cluster, die Heimat Rogal Dorns, an; die Verteidiger halten stand.",
   "planets": [
    "inwit"
   ],
   "books": []
  },
  {
   "id": "tallarn",
   "name": "Schlacht um Tallarn",
   "date": "010–012.M31",
   "sort": 31010,
   "era": "Horus-Häresie",
   "desc": "Die Iron Warriors vergiften Tallarn; auf der Oberfläche folgt die grösste Panzerschlacht der Menschheitsgeschichte.",
   "planets": [
    "tallarn"
   ],
   "books": [
    "tallarn"
   ]
  },
  {
   "id": "pluto",
   "name": "Schlacht um Pluto",
   "date": "010.M31",
   "sort": 31010.5,
   "era": "Belagerung von Terra",
   "desc": "Die Alpha Legion greift die äussere Verteidigung des Sol-Systems an; Rogal Dorn stellt Alpharius selbst.",
   "planets": [
    "pluto"
   ],
   "books": [
    "praetorian_of_dorn"
   ]
  },
  {
   "id": "trisolian",
   "name": "Schlacht von Trisolian",
   "date": "012.M31",
   "sort": 31012.2,
   "era": "Horus-Häresie",
   "desc": "Leman Russ entert die Vengeful Spirit und verwundet Horus mit dem Speer des Russ, muss aber schwer verletzt fliehen.",
   "planets": [
    "trisolian"
   ],
   "books": [
    "wolfsbane"
   ]
  },
  {
   "id": "chemos_destruction",
   "name": "Zerstörung von Chemos",
   "date": "012.M31",
   "sort": 31012.3,
   "era": "Horus-Häresie",
   "desc": "Die Dark Angels vernichten Chemos, die Heimatwelt der Emperor's Children.",
   "planets": [
    "chemos"
   ],
   "books": []
  },
  {
   "id": "beta_garmon",
   "name": "Schlacht um Beta-Garmon",
   "date": "006–013.M31",
   "sort": 31012.5,
   "era": "Horus-Häresie",
   "desc": "Der lange Kampf um das Tor zum Segmentum Solar gipfelt im 'Titandeath' bei Nyrcon – Horus siegt und hat den Weg nach Terra frei.",
   "planets": [
    "beta_garmon2"
   ],
   "books": [
    "titandeath"
   ]
  },
  {
   "id": "solar_war",
   "name": "Solarkrieg",
   "date": "010–014.M31",
   "sort": 31013.5,
   "era": "Belagerung von Terra",
   "desc": "Horus' Flotten kämpfen sich durch das Sol-System; die Verteidigungslinien Dorns an den äusseren Planeten fallen.",
   "planets": [
    "pluto",
    "mars",
    "luna"
   ],
   "books": [
    "solar_war"
   ]
  },
  {
   "id": "siege_terra",
   "name": "Belagerung von Terra",
   "date": "014.M31",
   "sort": 31014,
   "era": "Belagerung von Terra",
   "desc": "Der Höhepunkt der Häresie: Horus' Armeen belagern den Imperialen Palast. Endet mit Horus' Tod und dem Imperator auf dem Goldenen Thron.",
   "planets": [
    "terra",
    "mars"
   ],
   "books": [
    "solar_war",
    "lost_and_damned",
    "first_wall",
    "saturnine",
    "mortis",
    "warhawk",
    "echoes_eternity",
    "end_and_death",
    "sons_of_the_selenar"
   ]
  },
  {
   "id": "lions_gate",
   "name": "Kampf um den Raumhafen Lion's Gate",
   "date": "014.M31",
   "sort": 31014.2,
   "era": "Belagerung von Terra",
   "desc": "Die Verräter erobern den Raumhafen Lion's Gate vor dem Palast; später holt Jaghatai Khan ihn in einem verzweifelten Angriff zurück.",
   "planets": [
    "terra"
   ],
   "books": [
    "first_wall",
    "warhawk"
   ]
  },
  {
   "id": "fall_caliban",
   "name": "Fall von Caliban",
   "date": "ca. 014–015.M31",
   "sort": 31015,
   "era": "Horus-Häresie",
   "desc": "Bei der Rückkehr des Löwen stellt sich Luther gegen ihn; Caliban zerbricht, die Gefallenen werden durch den Warp verstreut.",
   "planets": [
    "caliban"
   ],
   "books": [
    "fallen_angels",
    "luther_first_fallen"
   ]
  },
  {
   "id": "battle_of_the_fang",
   "name": "Schlacht um den Fang",
   "date": "M32",
   "sort": 32100,
   "era": "M32",
   "desc": "Die Thousand Sons und ihre Verbündeten greifen Fenris an und belagern den Fang, die Festung der Space Wolves.",
   "planets": [
    "fenris"
   ],
   "books": [
    "battle_of_the_fang"
   ]
  },
  {
   "id": "war_of_the_beast",
   "name": "Krieg der Bestie",
   "date": "M32",
   "sort": 32544,
   "era": "M32",
   "desc": "Ein gewaltiges Ork-Reich unter 'der Bestie' überrennt das Imperium und bedroht sogar Terra. Die Imperial Fists werden fast ausgelöscht.",
   "planets": [
    "terra"
   ],
   "books": [
    "i_am_slaughter",
    "predator_prey",
    "emperor_expects",
    "last_wall",
    "throneworld",
    "the_beheading"
   ]
  },
  {
   "id": "krieg_civil_war",
   "name": "Bürgerkrieg und Atombrand auf Krieg",
   "date": "M40",
   "sort": 40450,
   "era": "M40",
   "desc": "Krieg sagt sich vom Imperium los; nur Makropole Ferrograd unter Oberst Jurten bleibt loyal. Der folgende, jahrhundertelange Atomkrieg macht Krieg zur verstrahlten Todeswelt.",
   "planets": [
    "krieg"
   ],
   "books": [
    "krieg_novel"
   ]
  },
  {
   "id": "gothic_war",
   "name": "Gothic-Krieg",
   "date": "139–160.M41",
   "sort": 41139,
   "era": "Gothic-Krieg",
   "desc": "Abaddons 12. Schwarzer Kreuzzug mit dem Planetenkiller im Gothic-Sektor. Ziel sind die Schwarzsteinfestungen; Abaddon erbeutet drei, wird aber von Imperium und Eldar besiegt.",
   "planets": [
    "port_maw"
   ],
   "books": [
    "execution_hour",
    "shadow_point"
   ]
  },
  {
   "id": "savaven_destroyed",
   "name": "Vernichtung von Savaven",
   "date": "M41",
   "sort": 41142,
   "era": "Gothic-Krieg",
   "desc": "Die Kardinalswelt Savaven wird als erster Planet vom Planetenkiller zerstört.",
   "planets": [
    "savaven"
   ],
   "books": []
  },
  {
   "id": "schindlegeist",
   "name": "Schlacht von Schindlegeist",
   "date": "um 160.M41",
   "sort": 41160,
   "era": "Gothic-Krieg",
   "desc": "Entscheidungsschlacht des Gothic-Krieges, in der Abaddons Flotte geschlagen wird.",
   "planets": [
    "schindlegeist"
   ],
   "books": []
  },
  {
   "id": "eyclone_hunt",
   "name": "Eisenhorns Jagd auf Murdin Eyclone",
   "date": "240.M41",
   "sort": 41240,
   "era": "M41",
   "desc": "Inquisitor Gregor Eisenhorn stellt den Ketzer Eyclone auf Hubris und deckt eine Verschwörung um das Necroteuch auf, die bis zum Haus Glaw auf Gudrun reicht.",
   "planets": [
    "hubris",
    "gudrun"
   ],
   "books": [
    "xenos"
   ]
  },
  {
   "id": "helican_triumph",
   "name": "Triumph von Lord Helican",
   "date": "241.M41",
   "sort": 41241,
   "era": "M41",
   "desc": "Der Triumphzug für Lord Helican auf Thracian Primaris endet in einem verheerenden Massaker. Ausgangspunkt der Handlung von 'Malleus'.",
   "planets": [
    "thracian_primaris"
   ],
   "books": [
    "malleus"
   ]
  },
  {
   "id": "macharian_crusade",
   "name": "Macharius-Kreuzzug",
   "date": "392–399.M41",
   "sort": 41392,
   "era": "Macharius-Kreuzzug",
   "desc": "Lord Solar Macharius erobert in sieben Jahren über tausend Welten am westlichen Rand der Galaxis im Segmentum Pacificus.",
   "planets": [
    "karsk",
    "demetrius",
    "loki"
   ],
   "books": [
    "angel_of_fire",
    "fist_of_demetrius",
    "fall_of_macharius"
   ]
  },
  {
   "id": "ravenor_flects",
   "name": "Ravenors Ermittlungen auf Eustis Majoris",
   "date": "401–404.M41",
   "sort": 41401,
   "era": "M41",
   "desc": "Inquisitor Gideon Ravenor verfolgt den Handel mit der Droge Flects auf Eustis Majoris und stösst auf eine weit grössere Verschwörung.",
   "planets": [
    "eustis_majoris"
   ],
   "books": [
    "ravenor",
    "ravenor_returned",
    "ravenor_rogue"
   ]
  },
  {
   "id": "armageddon1",
   "name": "Erster Krieg um Armageddon",
   "date": "444.M41",
   "sort": 41444,
   "era": "M41",
   "desc": "Angron führt eine Dämoneninvasion gegen Armageddon. Grey Knights und Space Wolves werfen ihn zurück; die anschliessende Säuberung durch die Inquisition führt zu den 'Monaten der Schande'.",
   "planets": [
    "armageddon"
   ],
   "books": [
    "emperors_gift"
   ]
  },
  {
   "id": "damocles_crusade",
   "name": "Damocles-Golf-Kreuzzug",
   "date": "742.M41",
   "sort": 41742,
   "era": "M41",
   "desc": "Erster grosser Krieg des Imperiums gegen das T'au-Imperium. Imperiale Armee und Space Marines, darunter die Ultramarines, kämpfen um Dal'yth Prime, bis ein Waffenstillstand geschlossen wird.",
   "planets": [
    "dalyth"
   ],
   "books": [
    "damocles"
   ]
  },
  {
   "id": "macragge_745",
   "name": "Schlacht um Macragge",
   "date": "745.M41",
   "sort": 41745,
   "era": "M41",
   "desc": "Die Schwarmflotte Behemoth greift Ultramar an. Im Ersten Tyranidenkrieg fällt die Erste Kompanie der Ultramarines bei der Verteidigung der Polfestungen, doch Behemoth wird vernichtet.",
   "planets": [
    "macragge"
   ],
   "books": []
  },
  {
   "id": "sabbat_crusade_start",
   "name": "Beginn des Sabbat-Welten-Kreuzzugs",
   "date": "755.M41",
   "sort": 41755,
   "era": "Sabbat-Welten-Kreuzzug",
   "desc": "Kriegsmeister Slaydo beginnt den Kreuzzug zur Rückeroberung der Sabbat-Welten, die das Chaos um 740.M41 überrannt hatte.",
   "planets": [],
   "books": [
    "sabbat_worlds_crusade"
   ]
  },
  {
   "id": "balhaut_765",
   "name": "Schlacht um Balhaut",
   "date": "765.M41",
   "sort": 41765,
   "era": "Sabbat-Welten-Kreuzzug",
   "desc": "Slaydos Sieg über die Chaosheere auf Balhaut; der Kriegsmeister erliegt danach seinen Wunden, Macaroth wird sein Nachfolger.",
   "planets": [
    "balhaut"
   ],
   "books": [
    "sabbat_worlds_crusade"
   ]
  },
  {
   "id": "tanith_fall",
   "name": "Fall von Tanith",
   "date": "765.M41",
   "sort": 41765.2,
   "era": "Sabbat-Welten-Kreuzzug",
   "desc": "Tanith wird während der Gründung seiner Regimenter vom Chaos vernichtet. Nur das Tanith First and Only unter Kommissar Ibram Gaunt entkommt.",
   "planets": [
    "tanith"
   ],
   "books": [
    "first_and_only",
    "ghostmaker"
   ]
  },
  {
   "id": "fortis_binary",
   "name": "Kampf um Fortis Binary",
   "date": "M41",
   "sort": 41765.5,
   "era": "Sabbat-Welten-Kreuzzug",
   "desc": "Die frisch gegründeten Tanith-Geister kämpfen im Grabenkrieg um die vom Chaos gehaltene Schmiedewelt.",
   "planets": [
    "fortis_binary"
   ],
   "books": [
    "first_and_only",
    "ghostmaker"
   ]
  },
  {
   "id": "menazoid_epsilon",
   "name": "Feldzug auf Menazoid Epsilon",
   "date": "M41",
   "sort": 41766,
   "era": "Sabbat-Welten-Kreuzzug",
   "desc": "Die Geister kämpfen auf der Todeswelt Menazoid Epsilon um eine STC-Anlage; Lord-General Dravere kommt ums Leben.",
   "planets": [
    "menazoid_epsilon"
   ],
   "books": [
    "first_and_only",
    "ghostmaker"
   ]
  },
  {
   "id": "vervunhive",
   "name": "Belagerung von Vervunhive",
   "date": "M41",
   "sort": 41767,
   "era": "Sabbat-Welten-Kreuzzug",
   "desc": "Der Chaos-Kriegsherr Heritor Asphodel greift von der Makropole Ferrozoica aus Vervunhive an. Die Geister verteidigen die Stadt; Überlebende aus Verghast schliessen sich dem Regiment an.",
   "planets": [
    "verghast"
   ],
   "books": [
    "necropolis"
   ]
  },
  {
   "id": "hagia",
   "name": "Ehrengarde auf Hagia",
   "date": "769.M41",
   "sort": 41769,
   "era": "Sabbat-Welten-Kreuzzug",
   "desc": "Gaunt führt eine Ehrengarde, um die Reliquien der Heiligen Sabbat aus dem Schrein auf Hagia vor den Infardi zu retten.",
   "planets": [
    "hagia"
   ],
   "books": [
    "honour_guard"
   ]
  },
  {
   "id": "orestes",
   "name": "Titanenkrieg um Orestes",
   "date": "M41",
   "sort": 41770,
   "era": "Sabbat-Welten-Kreuzzug",
   "desc": "Die Legio Invicta wird auf der Schmiedewelt Orestes in einen Krieg gegen Chaostitanen verwickelt, während das Mechanicus der Welt zerstritten ist.",
   "planets": [
    "orestes"
   ],
   "books": [
    "titanicus"
   ]
  },
  {
   "id": "phantine",
   "name": "Rückeroberung von Phantine",
   "date": "771.M41",
   "sort": 41771,
   "era": "Sabbat-Welten-Kreuzzug",
   "desc": "Feldzug zur Rückeroberung der Wolkenwelt Phantine, um die Nachschublinien des Kriegsmeisters zu sichern; erste Luftlandeoperation der Geister.",
   "planets": [
    "phantine"
   ],
   "books": [
    "guns_of_tanith",
    "double_eagle"
   ]
  },
  {
   "id": "aexe_cardinal",
   "name": "Grabenkrieg auf Aexe Cardinal",
   "date": "772.M41",
   "sort": 41772,
   "era": "Sabbat-Welten-Kreuzzug",
   "desc": "Die Geister verstärken die Aexe-Allianz im zermürbenden Grabenkrieg gegen die Shadik-Republik.",
   "planets": [
    "aexe_cardinal"
   ],
   "books": [
    "straight_silver"
   ]
  },
  {
   "id": "herodor",
   "name": "Verteidigung von Herodor",
   "date": "773.M41",
   "sort": 41773,
   "era": "Sabbat-Welten-Kreuzzug",
   "desc": "Die Geister schützen ein Mädchen, das als Wiedergeburt der Heiligen Sabbat gilt, vor einem Angriff des Archfeinds. Oberst Corbec fällt.",
   "planets": [
    "herodor"
   ],
   "books": [
    "sabbat_martyr"
   ]
  },
  {
   "id": "gereon_infiltration",
   "name": "Mission auf Gereon",
   "date": "774.M41",
   "sort": 41774,
   "era": "Sabbat-Welten-Kreuzzug",
   "desc": "Gaunt infiltriert mit einem kleinen Trupp das besetzte Gereon, um den Verräter-General Noches Sturm zu töten.",
   "planets": [
    "gereon"
   ],
   "books": [
    "traitor_general"
   ]
  },
  {
   "id": "ancreon_sextus",
   "name": "Sturm auf Sparshad Mons",
   "date": "776.M41",
   "sort": 41776,
   "era": "Sabbat-Welten-Kreuzzug",
   "desc": "Kampf um die Stufenstädte von Ancreon Sextus, die sich als Warptore des Blutpakts erweisen.",
   "planets": [
    "ancreon_sextus"
   ],
   "books": [
    "his_last_command"
   ]
  },
  {
   "id": "gereon_liberation",
   "name": "Befreiung von Gereon",
   "date": "777.M41",
   "sort": 41777,
   "era": "Sabbat-Welten-Kreuzzug",
   "desc": "Die Geister unterstützen den Widerstand bei der Befreiung Gereons vom Archfeind.",
   "planets": [
    "gereon"
   ],
   "books": [
    "armour_of_contempt"
   ]
  },
  {
   "id": "jago",
   "name": "Belagerung von Hinzerhaus",
   "date": "778.M41",
   "sort": 41778,
   "era": "Sabbat-Welten-Kreuzzug",
   "desc": "Die Geister halten auf Jago die uralte Festung Hinzerhaus gegen eine Übermacht des Blutpakts.",
   "planets": [
    "jago"
   ],
   "books": [
    "only_in_death",
    "iron_star"
   ]
  },
  {
   "id": "balhaut_780",
   "name": "Blutpakt-Attentat auf Balhaut",
   "date": "780.M41",
   "sort": 41780,
   "era": "Sabbat-Welten-Kreuzzug",
   "desc": "Ein Infiltrationstrupp des Blutpakts versucht auf Balhaut einen hochrangigen Überläufer zu beseitigen.",
   "planets": [
    "balhaut"
   ],
   "books": [
    "blood_pact"
   ]
  },
  {
   "id": "salvations_reach",
   "name": "Angriff auf Salvation's Reach",
   "date": "781.M41",
   "sort": 41781,
   "era": "Sabbat-Welten-Kreuzzug",
   "desc": "Kommandounternehmen der Tanith-Geister gegen die Archfeind-Festung Salvation's Reach.",
   "planets": [
    "salvations_reach"
   ],
   "books": [
    "salvations_reach"
   ]
  },
  {
   "id": "urdesh",
   "name": "Schlacht um Urdesh",
   "date": "M41",
   "sort": 41782,
   "era": "Sabbat-Welten-Kreuzzug",
   "desc": "Entscheidungsfeldzug unter Kriegsmeister Macaroth persönlich um die Schmiedewelt Urdesh gegen die Heere von Anarch Sek.",
   "planets": [
    "urdesh"
   ],
   "books": [
    "the_warmaster",
    "the_anarch"
   ]
  },
  {
   "id": "vraks_siege",
   "name": "Belagerung von Vraks",
   "date": "813–830.M41",
   "sort": 41813,
   "era": "M41",
   "desc": "Nach dem Abfall von Kardinal Xaphan belagert die 88. Belagerungsarmee des Todeskorps von Krieg die Arsenalwelt Vraks Prime – ein 17 bis 18 Jahre dauernder Feldzug mit Millionen Toten.",
   "planets": [
    "vraks_prime"
   ],
   "books": [
    "siege_of_vraks"
   ]
  },
  {
   "id": "cressida",
   "name": "Evakuierung von Cressida",
   "date": "M41",
   "sort": 41900,
   "era": "M41",
   "desc": "Nach dem Rückzugsbefehl der imperialen Truppen soll ein Trupp Valhallaner einen gestrandeten Würdenträger retten, bevor die Eiswelt durch Exterminatus vernichtet wird.",
   "planets": [
    "cressida"
   ],
   "books": [
    "ice_guard"
   ]
  },
  {
   "id": "badab_war",
   "name": "Badab-Krieg",
   "date": "901–912.M41",
   "sort": 41901,
   "era": "M41",
   "desc": "Lufgt Huron, Ordensmeister der Astral Claws, sagt sich mit verbündeten Orden vom Imperium los. Ein mehrjähriger Bruderkrieg zwischen Space Marines endet mit dem Fall von Badab und Hurons Flucht in den Maelstrom.",
   "planets": [
    "badab_primaris"
   ],
   "books": [
    "ia9_badab_war",
    "ia10_badab_war"
   ]
  },
  {
   "id": "daniks_world",
   "name": "Rebellion auf Danik's World",
   "date": "M41",
   "sort": 41901,
   "era": "M41",
   "desc": "Die 12. Vostroyanische Armee kämpft auf der vereisten Welt gegen rebellische PVS-Truppen und den Ork-Clan Venomhead.",
   "planets": [
    "daniks_world"
   ],
   "books": [
    "rebel_winter"
   ]
  },
  {
   "id": "kathur",
   "name": "Rückeroberung von Kathur",
   "date": "M41",
   "sort": 41902,
   "era": "M41",
   "desc": "Cadianische Gardisten sollen die vom Chaos verseuchte Schreinwelt Kathur zurückerobern.",
   "planets": [
    "kathur"
   ],
   "books": [
    "cadian_blood"
   ]
  },
  {
   "id": "broucheroc",
   "name": "Ork-Krieg um Broucheroc",
   "date": "M41",
   "sort": 41903,
   "era": "M41",
   "desc": "In der seit Jahren umkämpften Frontstadt Broucheroc versucht der junge Rekrut Arvin Larn, länger als fünfzehn Stunden zu überleben.",
   "planets": [
    "broucheroc"
   ],
   "books": [
    "fifteen_hours"
   ]
  },
  {
   "id": "perlia_1",
   "name": "Erste Belagerung von Perlia",
   "date": "921.M41",
   "sort": 41921,
   "era": "M41",
   "desc": "Waaagh! Korbul greift den Subsektor an. Kommissar Ciaphas Cain verteidigt mit der Valhallanischen 12. Feldartillerie das Industriezentrum Perlia.",
   "planets": [
    "perlia"
   ],
   "books": [
    "death_or_glory"
   ]
  },
  {
   "id": "gravalax",
   "name": "Gravalax-Zwischenfall",
   "date": "M41",
   "sort": 41925,
   "era": "M41",
   "desc": "Ciaphas Cain und das Valhallanische 597. werden nach Gravalax entsandt, das zum T'au-Imperium überzulaufen droht; ein Attentat auf den T'au-Botschafter bringt die Welt an den Rand des Krieges.",
   "planets": [
    "gravalax"
   ],
   "books": [
    "for_the_emperor"
   ]
  },
  {
   "id": "simia_orichalcae",
   "name": "Verteidigung von Simia Orichalcae",
   "date": "M41",
   "sort": 41926,
   "era": "M41",
   "desc": "Cains Regiment verteidigt eine Promethium-Raffinerie auf der Eiswelt gegen Ork-Plünderer – und stösst in den Eishöhlen auf Schlimmeres.",
   "planets": [
    "simia_orichalcae"
   ],
   "books": [
    "caves_of_ice"
   ]
  },
  {
   "id": "periremunda",
   "name": "Tyranidenbedrohung auf Periremunda",
   "date": "M41",
   "sort": 41927,
   "era": "M41",
   "desc": "Etwa ein Jahr nach Simia Orichalcae soll Cains Regiment Periremunda gegen eine anrückende Tyraniden-Schwarmflotte sichern.",
   "planets": [
    "periremunda"
   ],
   "books": [
    "duty_calls"
   ]
  },
  {
   "id": "adumbria",
   "name": "Chaos-Invasion von Adumbria",
   "date": "M41",
   "sort": 41928,
   "era": "M41",
   "desc": "Cain und das Valhallanische 597. verteidigen Adumbria gegen eine Invasion des Chaos.",
   "planets": [
    "adumbria"
   ],
   "books": [
    "traitors_hand"
   ]
  },
  {
   "id": "nusquam",
   "name": "Orkausbruch auf Nusquam Fundumentibus",
   "date": "M41",
   "sort": 41935,
   "era": "M41",
   "desc": "Cain und das Valhallanische 597. bekämpfen einen Orkausbruch auf Nusquam Fundumentibus.",
   "planets": [
    "nusquam_fundumentibus"
   ],
   "books": [
    "last_ditch"
   ]
  },
  {
   "id": "armageddon2",
   "name": "Zweiter Krieg um Armageddon",
   "date": "941.M41",
   "sort": 41941,
   "era": "M41",
   "desc": "Ghazghkull Thraka greift Armageddon an. Commissar Yarrick führt die Verteidigung.",
   "planets": [
    "armageddon"
   ],
   "books": [
    "ghazghkull"
   ]
  },
  {
   "id": "kadillus",
   "name": "Säuberung von Kadillus",
   "date": "M41",
   "sort": 41960,
   "era": "M41",
   "desc": "Die 3. Kompanie der Dark Angels verteidigt Piscina IV und die Stadt Kadillus Harbour gegen eine Ork-Invasion.",
   "planets": [
    "piscina4"
   ],
   "books": [
    "purging_of_kadillus"
   ]
  },
  {
   "id": "fall_of_damnos",
   "name": "Fall von Damnos",
   "date": "M41",
   "sort": 41970,
   "era": "M41",
   "desc": "Auf Damnos erwacht eine Necron-Gruft. Trotz des Eingreifens der Ultramarines geht die Welt verloren.",
   "planets": [
    "damnos"
   ],
   "books": [
    "fall_of_damnos"
   ]
  },
  {
   "id": "rynns_world_war",
   "name": "Krieg um Rynn's World",
   "date": "989.M41",
   "sort": 41989,
   "era": "M41",
   "desc": "Waaagh! Snagrod fällt über Rynn's World her. Eine fehlgeleitete Abwehrrakete zerstört die Arx Tyrannus und fast den ganzen Orden der Crimson Fists; die Überlebenden kämpfen um ihre Heimat.",
   "planets": [
    "rynns_world"
   ],
   "books": [
    "rynns_world"
   ]
  },
  {
   "id": "hydra_cordatus_siege",
   "name": "Belagerung von Hydra Cordatus",
   "date": "spätes M41",
   "sort": 41990,
   "era": "M41",
   "desc": "Die Iron Warriors belagern die Zitadelle auf Hydra Cordatus, um die dort gelagerte Gensaat der Space Marines zu erbeuten. Die Festung fällt.",
   "planets": [
    "hydra_cordatus"
   ],
   "books": [
    "storm_of_iron"
   ]
  },
  {
   "id": "ichar4",
   "name": "Schlacht um Ichar IV",
   "date": "992–993.M41",
   "sort": 41992,
   "era": "M41",
   "desc": "Im Zweiten Tyranidenkrieg greift die Schwarmflotte Kraken Ichar IV an. Unter Marneus Calgar schlagen Ultramarines und Imperiale Armee die Tyraniden zurück.",
   "planets": [
    "ichar4"
   ],
   "books": []
  },
  {
   "id": "soul_drinkers_war",
   "name": "Kreuzzug der Soul Drinkers",
   "date": "spätes M41",
   "sort": 41993,
   "era": "M41",
   "desc": "Nach dem Streit um die Seelenlanze Rogal Dorns wird der Orden der Soul Drinkers exkommuniziert und führt unter Sarpedon einen eigenen Krieg, bis hin zu den Kämpfen an Bord der Phalanx, der Festung der Imperial Fists.",
   "planets": [],
   "books": [
    "soul_drinker",
    "bleeding_chalice",
    "crimson_tears",
    "chapter_war",
    "hellforged",
    "phalanx"
   ]
  },
  {
   "id": "void_stalker",
   "name": "Rückkehr der Night Lords nach Tsagualsa",
   "date": "spätes M41",
   "sort": 41995,
   "era": "M41",
   "desc": "Von den Eldar Ulthwés gejagt, fliehen Talos und seine Night Lords nach Tsagualsa, wo einst ihr Primarch starb.",
   "planets": [
    "tsagualsa"
   ],
   "books": [
    "void_stalker"
   ]
  },
  {
   "id": "pavonis_nightbringer",
   "name": "Krise auf Pavonis",
   "date": "spätes M41",
   "sort": 41996,
   "era": "M41",
   "desc": "Uriel Ventris führt die 4. Kompanie der Ultramarines nach Pavonis und stellt sich einem Splitter des Nachtbringers, eines C'tan.",
   "planets": [
    "pavonis"
   ],
   "books": [
    "nightbringer"
   ]
  },
  {
   "id": "golgotha",
   "name": "Kämpfe um Golgotha",
   "date": "spätes M41",
   "sort": 41996,
   "era": "M41",
   "desc": "Yarrick spürt Ghazghkull auf Golgotha auf und unterliegt; später soll eine cadianische Panzergruppe das Wrack der 'Fortress of Arrogance' bergen – kurz vor dem Dritten Krieg um Armageddon.",
   "planets": [
    "golgotha"
   ],
   "books": [
    "gunheads"
   ]
  },
  {
   "id": "octarius_war",
   "name": "Krieg um Octarius",
   "date": "ab 997.M41",
   "sort": 41997,
   "era": "M41",
   "desc": "Inquisitor Kryptman lenkt die Schwarmflotte Leviathan in das Ork-Reich von Octarius. Der Krieg zwischen Tyraniden und Orks lässt beide Seiten gefährlich anwachsen.",
   "planets": [
    "octarius"
   ],
   "books": [
    "octarius_rising_tide"
   ]
  },
  {
   "id": "tarsis_ultra",
   "name": "Schlacht um Tarsis Ultra",
   "date": "997.M41",
   "sort": 41997.3,
   "era": "M41",
   "desc": "Ein Ausläufer der Schwarmflotte Leviathan greift Tarsis Ultra an. Uriel Ventris verteidigt die Welt um einen hohen Preis und wird danach verbannt.",
   "planets": [
    "tarsis_ultra"
   ],
   "books": [
    "warriors_of_ultramar"
   ]
  },
  {
   "id": "armageddon3",
   "name": "Dritter Krieg um Armageddon",
   "date": "998.M41",
   "sort": 41998,
   "era": "M41",
   "desc": "Ghazghkulls Rückkehr mit einer noch grösseren Waaagh!",
   "planets": [
    "armageddon"
   ],
   "books": [
    "helsreach",
    "ghazghkull"
   ]
  },
  {
   "id": "medrengard_death_oath",
   "name": "Todesschwur auf Medrengard",
   "date": "spätes M41",
   "sort": 41998,
   "era": "M41",
   "desc": "Uriel Ventris und Pasanius erfüllen ihren Todesschwur in den Festungen der Iron Warriors auf Medrengard und treffen auf Honsou.",
   "planets": [
    "medrengard"
   ],
   "books": [
    "dead_sky_black_sun"
   ]
  },
  {
   "id": "nocturne_defence",
   "name": "Verteidigung von Nocturne",
   "date": "spätes M41",
   "sort": 41998.2,
   "era": "M41",
   "desc": "Die Salamanders verteidigen ihre Heimatwelt Nocturne während des Grossen Bebens gegen die abtrünnigen Dragon Warriors und andere Angreifer.",
   "planets": [
    "nocturne"
   ],
   "books": [
    "nocturne"
   ]
  },
  {
   "id": "honsou_ultramar",
   "name": "Honsous Rache an Ultramar",
   "date": "spätes M41",
   "sort": 41998.5,
   "era": "M41",
   "desc": "Der Kriegsschmied Honsou greift mit den Iron Warriors Ultramar an; auf Calth und Tarentus kommt es zu schweren Kämpfen mit den Ultramarines.",
   "planets": [
    "calth"
   ],
   "books": [
    "chapters_due"
   ]
  },
  {
   "id": "fall_cadia",
   "name": "Fall von Cadia",
   "date": "999.M41",
   "sort": 41999,
   "era": "Gathering Storm",
   "desc": "Abaddons 13. Schwarzer Kreuzzug zerstört Cadia. Kurz darauf reisst die Cicatrix Maledictum auf.",
   "planets": [
    "cadia"
   ],
   "books": [
    "cadia_stands",
    "gs_fall_cadia"
   ]
  },
  {
   "id": "fracture_biel_tan",
   "name": "Zersplitterung von Biel-Tan",
   "date": "999.M41",
   "sort": 41999.1,
   "era": "Gathering Storm",
   "desc": "Slaanesh-Dämonen verwüsten das Weltenschiff Biel-Tan. Die Ynnari um Yvraine treten hervor und verkünden den Totengott Ynnead.",
   "planets": [
    "biel_tan"
   ],
   "books": [
    "gs_fracture_biel_tan"
   ]
  },
  {
   "id": "perlia_2",
   "name": "Zweite Belagerung von Perlia",
   "date": "999.M41",
   "sort": 41999.1,
   "era": "M41",
   "desc": "Während des 13. Schwarzen Kreuzzugs gerät Perlia ins Visier des Chaos. Der greise Ciaphas Cain, Lehrer an einer Schola Progenium, verteidigt die Welt erneut.",
   "planets": [
    "perlia"
   ],
   "books": [
    "cains_last_stand"
   ]
  },
  {
   "id": "guilliman_rebirth",
   "name": "Wiederauferstehung Guillimans",
   "date": "999.M41",
   "sort": 41999.2,
   "era": "Gathering Storm",
   "desc": "Mit Hilfe von Yvraine und Belisarius Cawl erwacht Roboute Guilliman auf Macragge aus seiner zehntausendjährigen Stasis.",
   "planets": [
    "macragge"
   ],
   "books": [
    "gs_rise_primarch"
   ]
  },
  {
   "id": "great_rift_opens",
   "name": "Öffnung der Cicatrix Maledictum",
   "date": "999.M41",
   "sort": 41999.3,
   "era": "Gathering Storm",
   "desc": "Ein galaxisweiter Warpsturm reisst vom Auge des Schreckens bis zum Ostrand auf und teilt das Imperium in Sanctus und Nihilus.",
   "planets": [
    "cadia",
    "terra"
   ],
   "books": [
    "gs_rise_primarch"
   ]
  },
  {
   "id": "terran_crusade",
   "name": "Terranischer Kreuzzug",
   "date": "999.M41",
   "sort": 41999.35,
   "era": "Gathering Storm",
   "desc": "Guilliman kämpft sich durch Warpstürme nach Terra durch, trifft den Imperator auf dem Goldenen Thron und wird zum Reichsregenten.",
   "planets": [
    "terra"
   ],
   "books": [
    "gs_rise_primarch"
   ]
  },
  {
   "id": "baal_devastation",
   "name": "Verwüstung von Baal",
   "date": "999.M41",
   "sort": 41999.5,
   "era": "Gathering Storm",
   "desc": "Die Schwarmflotte Leviathan greift das Baal-System an. Unter Kommandant Dante stehen die Blood Angels und ihre Nachfolger vor der Vernichtung, bis Guillimans Verstärkung eintrifft.",
   "planets": [
    "baal"
   ],
   "books": [
    "devastation_baal",
    "dante"
   ]
  },
  {
   "id": "indomitus_crusade",
   "name": "Indomitus-Kreuzzug",
   "date": "frühes M42",
   "sort": 42000.2,
   "era": "Indomitus-Kreuzzug",
   "desc": "Guilliman bricht mit gewaltigen Flotten und den neuen Primaris-Marines von Terra auf, um das Imperium zurückzuerobern.",
   "planets": [
    "terra"
   ],
   "books": [
    "avenging_son",
    "throne_of_light",
    "indomitus",
    "martyrs_tomb",
    "sea_of_souls"
   ]
  },
  {
   "id": "plague_wars",
   "name": "Seuchenkriege in Ultramar",
   "date": "frühes M42",
   "sort": 42001,
   "era": "Dark Imperium",
   "desc": "Die Death Guard überzieht Ultramar mit Seuchen. Der zurückgekehrte Roboute Guilliman führt den Widerstand und stellt Mortarion schliesslich auf Iax.",
   "planets": [
    "macragge",
    "iax"
   ],
   "books": [
    "dark_imperium",
    "plague_war",
    "godblight"
   ]
  },
  {
   "id": "vigilus_war",
   "name": "Krieg um Vigilus",
   "date": "frühes M42",
   "sort": 42002,
   "era": "Dark Imperium",
   "desc": "Orks, Genestealer-Kulte und Abaddons Truppen kämpfen um die Kontrolle des Nachmund-Korridors.",
   "planets": [
    "vigilus"
   ],
   "books": [
    "vigilus_defiant",
    "vigilus_ablaze"
   ]
  },
  {
   "id": "gathalamor",
   "name": "Schlacht um Gathalamor",
   "date": "frühes M42",
   "sort": 42003,
   "era": "Indomitus-Kreuzzug",
   "desc": "Der Indomitus-Kreuzzug erreicht die Schreinwelt Gathalamor, auf der eine uralte Bedrohung erwacht. Mordianer und Sororitas führen einen verzweifelten Bodenkrieg.",
   "planets": [
    "gathalamor"
   ],
   "books": [
    "gate_of_bones"
   ]
  },
  {
   "id": "wolftime",
   "name": "Die Wolfszeit",
   "date": "frühes M42",
   "sort": 42004,
   "era": "Indomitus-Kreuzzug",
   "desc": "Der Indomitus-Kreuzzug erreicht Fenris. Die Space Wolves ringen mit der Aufnahme der Primaris-Marines, während die prophezeite Wolfszeit naht.",
   "planets": [
    "fenris"
   ],
   "books": [
    "wolftime"
   ]
  },
  {
   "id": "iron_kingdom",
   "name": "Rückkehr nach Medusa",
   "date": "frühes M42",
   "sort": 42005,
   "era": "Indomitus-Kreuzzug",
   "desc": "Ein Vorstoss des Indomitus-Kreuzzugs führt in das Imperium Nihilus nach Medusa, der Heimat der Iron Hands.",
   "planets": [
    "medusa"
   ],
   "books": [
    "iron_kingdom"
   ]
  },
  {
   "id": "psychic_awakening",
   "name": "Psionisches Erwachen",
   "date": "frühes M42",
   "sort": 42005.5,
   "era": "Dark Imperium",
   "desc": "Im Schatten des Grossen Risses erwachen überall psionische Kräfte. Zahlreiche Konflikte flammen auf, etwa um die Blood Angels und den Schwarzen Zorn.",
   "planets": [
    "baal"
   ],
   "books": [
    "pa_faith_and_fury",
    "pa_blood_of_baal",
    "pa_ritual_of_the_damned"
   ]
  },
  {
   "id": "pariah_nexus",
   "name": "Krieg im Pariah-Nexus",
   "date": "frühes M42",
   "sort": 42006,
   "era": "Dark Imperium",
   "desc": "Im Nephilim-Sektor errichten die Necrons ein Netz aus Pylonen, das Psioniker auslöscht und Menschen die Seele raubt ('die Stille'). Die Kampfgruppe Kallides stösst hinein, später auch Guilliman.",
   "planets": [
    "paradyce6"
   ],
   "books": [
    "pa_pariah",
    "silent_king"
   ]
  },
  {
   "id": "charadon",
   "name": "Krieg um Charadon",
   "date": "frühes M42",
   "sort": 42007,
   "era": "Dark Imperium",
   "desc": "Typhus und die Death Guard fallen in den Charadon-Sektor ein und reissen einen Warp-Riss auf. Die Schmiedewelt Metalica wird zum Brennpunkt.",
   "planets": [
    "metalica"
   ],
   "books": [
    "charadon_book_of_rust",
    "charadon_book_of_fire"
   ]
  },
  {
   "id": "ophelia7",
   "name": "Angriff auf Ophelia VII",
   "date": "frühes M42",
   "sort": 42008,
   "era": "Indomitus-Kreuzzug",
   "desc": "Ein Ungeheuer aus Mythen bedroht die Kardinalswelt Ophelia VII. Äbtissin Sanctorum Morvenn Vahl verteidigt sie, während die Pläne der 'Hand Abaddons' reifen.",
   "planets": [
    "ophelia7"
   ],
   "books": [
    "hand_of_abaddon"
   ]
  },
  {
   "id": "arks_of_omen",
   "name": "Arks of Omen",
   "date": "frühes M42",
   "sort": 42009,
   "era": "Dark Imperium",
   "desc": "Abaddon und der Dämonenschmied Vashtorr greifen mit gewaltigen Schiffen nach den Fragmenten eines mächtigen Schlüssels. Am Ende kehrt Lion El'Jonson zurück und besiegt Angron.",
   "planets": [],
   "books": [
    "aoo_abaddon",
    "aoo_angron",
    "aoo_vashtorr",
    "aoo_lion",
    "lion_son_of_the_forest"
   ]
  }
 ],
 "books": {
  "solar_war": {
   "title": "The Solar War",
   "author": "John French",
   "series": "The Siege of Terra",
   "year": 2019
  },
  "lost_and_damned": {
   "title": "The Lost and the Damned",
   "author": "Guy Haley",
   "series": "The Siege of Terra",
   "year": 2019
  },
  "first_wall": {
   "title": "The First Wall",
   "author": "Gav Thorpe",
   "series": "The Siege of Terra",
   "year": 2020
  },
  "saturnine": {
   "title": "Saturnine",
   "author": "Dan Abnett",
   "series": "The Siege of Terra",
   "year": 2020
  },
  "mortis": {
   "title": "Mortis",
   "author": "John French",
   "series": "The Siege of Terra",
   "year": 2021
  },
  "warhawk": {
   "title": "Warhawk",
   "author": "Chris Wraight",
   "series": "The Siege of Terra",
   "year": 2021
  },
  "echoes_eternity": {
   "title": "Echoes of Eternity",
   "author": "Aaron Dembski-Bowden",
   "series": "The Siege of Terra",
   "year": 2022
  },
  "end_and_death": {
   "title": "The End and the Death (Bd. I–III)",
   "author": "Dan Abnett",
   "series": "The Siege of Terra",
   "year": "ab 2023"
  },
  "mechanicum": {
   "title": "Mechanicum",
   "author": "Graham McNeill",
   "series": "The Horus Heresy",
   "year": 2008
  },
  "galaxy_in_flames": {
   "title": "Galaxy in Flames",
   "author": "Ben Counter",
   "series": "The Horus Heresy",
   "year": 2006
  },
  "flight_eisenstein": {
   "title": "The Flight of the Eisenstein",
   "author": "James Swallow",
   "series": "The Horus Heresy",
   "year": 2007
  },
  "fulgrim": {
   "title": "Fulgrim",
   "author": "Graham McNeill",
   "series": "The Horus Heresy",
   "year": 2007
  },
  "false_gods": {
   "title": "False Gods",
   "author": "Graham McNeill",
   "series": "The Horus Heresy",
   "year": 2006
  },
  "know_no_fear": {
   "title": "Know No Fear",
   "author": "Dan Abnett",
   "series": "The Horus Heresy",
   "year": 2012
  },
  "thousand_sons": {
   "title": "A Thousand Sons",
   "author": "Graham McNeill",
   "series": "The Horus Heresy",
   "year": 2010
  },
  "prospero_burns": {
   "title": "Prospero Burns",
   "author": "Dan Abnett",
   "series": "The Horus Heresy",
   "year": 2010
  },
  "descent_angels": {
   "title": "Descent of Angels",
   "author": "Mitchel Scanlon",
   "series": "The Horus Heresy",
   "year": 2007
  },
  "fallen_angels": {
   "title": "Fallen Angels",
   "author": "Mike Lee",
   "series": "The Horus Heresy",
   "year": 2009
  },
  "helsreach": {
   "title": "Helsreach",
   "author": "Aaron Dembski-Bowden",
   "series": "Space Marine Battles",
   "year": 2010
  },
  "ghazghkull": {
   "title": "Ghazghkull Thraka: Prophet of the Waaagh!",
   "author": "Nate Crowley",
   "series": "Einzelroman",
   "year": 2022
  },
  "cadia_stands": {
   "title": "Cadia Stands",
   "author": "Justin D. Hill",
   "series": "Einzelroman",
   "year": 2018
  },
  "gs_fall_cadia": {
   "title": "Gathering Storm I: Fall of Cadia",
   "author": "Games Workshop",
   "series": "Kampagnenbuch",
   "year": 2017
  },
  "devastation_baal": {
   "title": "The Devastation of Baal",
   "author": "Guy Haley",
   "series": "Space Marine Battles",
   "year": 2017
  },
  "dark_imperium": {
   "title": "Dark Imperium",
   "author": "Guy Haley",
   "series": "Dark Imperium",
   "year": 2017
  },
  "plague_war": {
   "title": "Plague War",
   "author": "Guy Haley",
   "series": "Dark Imperium",
   "year": 2018
  },
  "first_and_only": {
   "title": "First and Only",
   "author": "Dan Abnett",
   "series": "Gaunt's Ghosts",
   "year": 1999
  },
  "necropolis": {
   "title": "Necropolis",
   "author": "Dan Abnett",
   "series": "Gaunt's Ghosts",
   "year": 2000
  },
  "soul_hunter": {
   "title": "Soul Hunter",
   "author": "Aaron Dembski-Bowden",
   "series": "Night Lords",
   "year": 2010
  },
  "night_haunter": {
   "title": "Konrad Curze: The Night Haunter",
   "author": "Guy Haley",
   "series": "The Horus Heresy: Primarchs",
   "year": 2018
  },
  "space_wolf": {
   "title": "Space Wolf",
   "author": "William King",
   "series": "Space Wolf",
   "year": 1999
  },
  "vigilus_defiant": {
   "title": "Vigilus Defiant",
   "author": "Games Workshop",
   "series": "Kampagnenbuch",
   "year": 2018
  },
  "vigilus_ablaze": {
   "title": "Vigilus Ablaze",
   "author": "Games Workshop",
   "series": "Kampagnenbuch",
   "year": 2019
  },
  "i_am_slaughter": {
   "title": "I Am Slaughter",
   "author": "Dan Abnett",
   "series": "The Beast Arises",
   "year": 2016
  },
  "predator_prey": {
   "title": "Predator, Prey",
   "author": "Rob Sanders",
   "series": "The Beast Arises",
   "year": 2016
  },
  "emperor_expects": {
   "title": "The Emperor Expects",
   "author": "Gav Thorpe",
   "series": "The Beast Arises",
   "year": 2016
  },
  "last_wall": {
   "title": "The Last Wall",
   "author": "David Annandale",
   "series": "The Beast Arises",
   "year": 2016
  },
  "throneworld": {
   "title": "Throneworld",
   "author": "Guy Haley",
   "series": "The Beast Arises",
   "year": 2016
  },
  "the_beheading": {
   "title": "The Beheading",
   "author": "Guy Haley",
   "series": "The Beast Arises",
   "year": 2017
  },
  "battle_of_the_fang": {
   "title": "Battle of the Fang",
   "author": "Chris Wraight",
   "series": "Space Marine Battles",
   "year": 2011
  },
  "emperors_gift": {
   "title": "The Emperor's Gift",
   "author": "Aaron Dembski-Bowden",
   "series": "Grey Knights",
   "year": 2012
  },
  "damocles": {
   "title": "Damocles",
   "author": "Phil Kelly, Guy Haley, Josh Reynolds, Ben Counter",
   "series": "Space Marine Battles",
   "year": 2013
  },
  "ia9_badab_war": {
   "title": "Imperial Armour Volume Nine – The Badab War: Part One",
   "author": "Alan Bligh (Forge World)",
   "series": "Imperial Armour",
   "year": 2010
  },
  "ia10_badab_war": {
   "title": "Imperial Armour Volume Ten – The Badab War: Part Two",
   "author": "Alan Bligh (Forge World)",
   "series": "Imperial Armour",
   "year": 2011
  },
  "purging_of_kadillus": {
   "title": "The Purging of Kadillus",
   "author": "Gav Thorpe",
   "series": "Space Marine Battles",
   "year": 2011
  },
  "fall_of_damnos": {
   "title": "Fall of Damnos",
   "author": "Nick Kyme",
   "series": "Space Marine Battles",
   "year": 2011
  },
  "rynns_world": {
   "title": "Rynn's World",
   "author": "Steve Parker",
   "series": "Space Marine Battles",
   "year": 2010
  },
  "storm_of_iron": {
   "title": "Storm of Iron",
   "author": "Graham McNeill",
   "series": "Iron Warriors",
   "year": 2002
  },
  "void_stalker": {
   "title": "Void Stalker",
   "author": "Aaron Dembski-Bowden",
   "series": "Night Lords",
   "year": 2012
  },
  "blood_reaver": {
   "title": "Blood Reaver",
   "author": "Aaron Dembski-Bowden",
   "series": "Night Lords",
   "year": 2011
  },
  "nightbringer": {
   "title": "Nightbringer",
   "author": "Graham McNeill",
   "series": "Ultramarines",
   "year": 2002
  },
  "warriors_of_ultramar": {
   "title": "Warriors of Ultramar",
   "author": "Graham McNeill",
   "series": "Ultramarines",
   "year": 2003
  },
  "dead_sky_black_sun": {
   "title": "Dead Sky, Black Sun",
   "author": "Graham McNeill",
   "series": "Ultramarines",
   "year": 2004
  },
  "killing_ground": {
   "title": "The Killing Ground",
   "author": "Graham McNeill",
   "series": "Ultramarines",
   "year": 2008
  },
  "courage_and_honour": {
   "title": "Courage and Honour",
   "author": "Graham McNeill",
   "series": "Ultramarines",
   "year": 2009
  },
  "chapters_due": {
   "title": "The Chapter's Due",
   "author": "Graham McNeill",
   "series": "Ultramarines",
   "year": 2010
  },
  "octarius_rising_tide": {
   "title": "War Zone Octarius Book 1: Rising Tide",
   "author": "Games Workshop",
   "series": "Kampagnenbuch",
   "year": 2021
  },
  "salamander": {
   "title": "Salamander",
   "author": "Nick Kyme",
   "series": "Tome of Fire",
   "year": 2009
  },
  "firedrake": {
   "title": "Firedrake",
   "author": "Nick Kyme",
   "series": "Tome of Fire",
   "year": 2010
  },
  "nocturne": {
   "title": "Nocturne",
   "author": "Nick Kyme",
   "series": "Tome of Fire",
   "year": 2011
  },
  "gs_fracture_biel_tan": {
   "title": "Gathering Storm II: Fracture of Biel-Tan",
   "author": "Games Workshop",
   "series": "Kampagnenbuch",
   "year": 2017
  },
  "gs_rise_primarch": {
   "title": "Gathering Storm III: Rise of the Primarch",
   "author": "Games Workshop",
   "series": "Kampagnenbuch",
   "year": 2017
  },
  "dante": {
   "title": "Dante",
   "author": "Guy Haley",
   "series": "Characters",
   "year": 2017
  },
  "avenging_son": {
   "title": "Avenging Son",
   "author": "Guy Haley",
   "series": "Dawn of Fire",
   "year": 2020
  },
  "gate_of_bones": {
   "title": "The Gate of Bones",
   "author": "Andy Clark",
   "series": "Dawn of Fire",
   "year": 2021
  },
  "wolftime": {
   "title": "The Wolftime",
   "author": "Gav Thorpe",
   "series": "Dawn of Fire",
   "year": 2021
  },
  "throne_of_light": {
   "title": "Throne of Light",
   "author": "Guy Haley",
   "series": "Dawn of Fire",
   "year": 2022
  },
  "iron_kingdom": {
   "title": "The Iron Kingdom",
   "author": "Nick Kyme",
   "series": "Dawn of Fire",
   "year": 2023
  },
  "martyrs_tomb": {
   "title": "The Martyr's Tomb",
   "author": "Marc Collins",
   "series": "Dawn of Fire",
   "year": 2023
  },
  "sea_of_souls": {
   "title": "Sea of Souls",
   "author": "Chris Wraight",
   "series": "Dawn of Fire",
   "year": 2023
  },
  "hand_of_abaddon": {
   "title": "Hand of Abaddon",
   "author": "Nick Kyme",
   "series": "Dawn of Fire",
   "year": 2024
  },
  "silent_king": {
   "title": "The Silent King",
   "author": "Guy Haley",
   "series": "Dawn of Fire",
   "year": 2025
  },
  "indomitus": {
   "title": "Indomitus",
   "author": "Gav Thorpe",
   "series": "Einzelroman",
   "year": 2020
  },
  "godblight": {
   "title": "Godblight",
   "author": "Guy Haley",
   "series": "Dark Imperium",
   "year": 2020
  },
  "pa_faith_and_fury": {
   "title": "Psychic Awakening: Faith and Fury",
   "author": "Games Workshop",
   "series": "Kampagnenbuch",
   "year": 2019
  },
  "pa_blood_of_baal": {
   "title": "Psychic Awakening: Blood of Baal",
   "author": "Games Workshop",
   "series": "Kampagnenbuch",
   "year": 2020
  },
  "pa_ritual_of_the_damned": {
   "title": "Psychic Awakening: Ritual of the Damned",
   "author": "Games Workshop",
   "series": "Kampagnenbuch",
   "year": 2020
  },
  "pa_pariah": {
   "title": "Psychic Awakening: Pariah",
   "author": "Games Workshop",
   "series": "Kampagnenbuch",
   "year": 2020
  },
  "charadon_book_of_rust": {
   "title": "War Zone Charadon – Act I: The Book of Rust",
   "author": "Games Workshop",
   "series": "Kampagnenbuch",
   "year": 2021
  },
  "charadon_book_of_fire": {
   "title": "War Zone Charadon – Act II: The Book of Fire",
   "author": "Games Workshop",
   "series": "Kampagnenbuch",
   "year": 2021
  },
  "aoo_abaddon": {
   "title": "Arks of Omen: Abaddon",
   "author": "Games Workshop",
   "series": "Kampagnenbuch",
   "year": 2023
  },
  "aoo_angron": {
   "title": "Arks of Omen: Angron",
   "author": "Games Workshop",
   "series": "Kampagnenbuch",
   "year": 2023
  },
  "aoo_vashtorr": {
   "title": "Arks of Omen: Vashtorr",
   "author": "Games Workshop",
   "series": "Kampagnenbuch",
   "year": 2023
  },
  "aoo_lion": {
   "title": "Arks of Omen: The Lion",
   "author": "Games Workshop",
   "series": "Kampagnenbuch",
   "year": 2023
  },
  "lion_son_of_the_forest": {
   "title": "The Lion: Son of the Forest",
   "author": "Mike Brooks",
   "series": "Einzelroman",
   "year": 2023
  },
  "soul_drinker": {
   "title": "Soul Drinker",
   "author": "Ben Counter",
   "series": "Soul Drinkers",
   "year": 2002
  },
  "bleeding_chalice": {
   "title": "The Bleeding Chalice",
   "author": "Ben Counter",
   "series": "Soul Drinkers",
   "year": 2003
  },
  "crimson_tears": {
   "title": "Crimson Tears",
   "author": "Ben Counter",
   "series": "Soul Drinkers",
   "year": 2005
  },
  "chapter_war": {
   "title": "Chapter War",
   "author": "Ben Counter",
   "series": "Soul Drinkers",
   "year": 2007
  },
  "hellforged": {
   "title": "Hellforged",
   "author": "Ben Counter",
   "series": "Soul Drinkers",
   "year": 2009
  },
  "phalanx": {
   "title": "Phalanx",
   "author": "Ben Counter",
   "series": "Soul Drinkers",
   "year": 2012
  },
  "grey_knights": {
   "title": "Grey Knights",
   "author": "Ben Counter",
   "series": "Grey Knights",
   "year": 2004
  },
  "dark_adeptus": {
   "title": "Dark Adeptus",
   "author": "Ben Counter",
   "series": "Grey Knights",
   "year": 2006
  },
  "hammer_of_daemons": {
   "title": "Hammer of Daemons",
   "author": "Ben Counter",
   "series": "Grey Knights",
   "year": 2008
  },
  "dark_apostle": {
   "title": "Dark Apostle",
   "author": "Anthony Reynolds",
   "series": "Word Bearers",
   "year": 2007
  },
  "dark_disciple": {
   "title": "Dark Disciple",
   "author": "Anthony Reynolds",
   "series": "Word Bearers",
   "year": 2008
  },
  "dark_creed": {
   "title": "Dark Creed",
   "author": "Anthony Reynolds",
   "series": "Word Bearers",
   "year": 2009
  },
  "deus_encarmine": {
   "title": "Deus Encarmine",
   "author": "James Swallow",
   "series": "Blood Angels",
   "year": 2004
  },
  "deus_sanguinius": {
   "title": "Deus Sanguinius",
   "author": "James Swallow",
   "series": "Blood Angels",
   "year": 2005
  },
  "red_fury": {
   "title": "Red Fury",
   "author": "James Swallow",
   "series": "Blood Angels",
   "year": 2008
  },
  "black_tide": {
   "title": "Black Tide",
   "author": "James Swallow",
   "series": "Blood Angels",
   "year": 2010
  },
  "ragnars_claw": {
   "title": "Ragnar's Claw",
   "author": "William King",
   "series": "Space Wolf",
   "year": 2000
  },
  "grey_hunter": {
   "title": "Grey Hunter",
   "author": "William King",
   "series": "Space Wolf",
   "year": 2002
  },
  "wolfblade": {
   "title": "Wolfblade",
   "author": "William King",
   "series": "Space Wolf",
   "year": 2003
  },
  "sons_of_fenris": {
   "title": "Sons of Fenris",
   "author": "Lee Lightner",
   "series": "Space Wolf",
   "year": 2005
  },
  "wolfs_honour": {
   "title": "Wolf's Honour",
   "author": "Lee Lightner",
   "series": "Space Wolf",
   "year": 2006
  },
  "angels_of_darkness": {
   "title": "Angels of Darkness",
   "author": "Gav Thorpe",
   "series": "Dark Angels",
   "year": 2003
  },
  "ravenwing": {
   "title": "Ravenwing",
   "author": "Gav Thorpe",
   "series": "The Legacy of Caliban",
   "year": 2013
  },
  "master_of_sanctity": {
   "title": "Master of Sanctity",
   "author": "Gav Thorpe",
   "series": "The Legacy of Caliban",
   "year": 2014
  },
  "the_unforgiven": {
   "title": "The Unforgiven",
   "author": "Gav Thorpe",
   "series": "The Legacy of Caliban",
   "year": 2015
  },
  "ghostmaker": {
   "title": "Ghostmaker",
   "author": "Dan Abnett",
   "series": "Gaunt's Ghosts",
   "year": 2000
  },
  "honour_guard": {
   "title": "Honour Guard",
   "author": "Dan Abnett",
   "series": "Gaunt's Ghosts",
   "year": 2001
  },
  "guns_of_tanith": {
   "title": "The Guns of Tanith",
   "author": "Dan Abnett",
   "series": "Gaunt's Ghosts",
   "year": 2002
  },
  "straight_silver": {
   "title": "Straight Silver",
   "author": "Dan Abnett",
   "series": "Gaunt's Ghosts",
   "year": 2002
  },
  "sabbat_martyr": {
   "title": "Sabbat Martyr",
   "author": "Dan Abnett",
   "series": "Gaunt's Ghosts",
   "year": 2003
  },
  "traitor_general": {
   "title": "Traitor General",
   "author": "Dan Abnett",
   "series": "Gaunt's Ghosts",
   "year": 2004
  },
  "his_last_command": {
   "title": "His Last Command",
   "author": "Dan Abnett",
   "series": "Gaunt's Ghosts",
   "year": 2005
  },
  "armour_of_contempt": {
   "title": "The Armour of Contempt",
   "author": "Dan Abnett",
   "series": "Gaunt's Ghosts",
   "year": 2006
  },
  "only_in_death": {
   "title": "Only in Death",
   "author": "Dan Abnett",
   "series": "Gaunt's Ghosts",
   "year": 2007
  },
  "iron_star": {
   "title": "The Iron Star",
   "author": "Dan Abnett",
   "series": "Gaunt's Ghosts (Novelle)",
   "year": 2008
  },
  "blood_pact": {
   "title": "Blood Pact",
   "author": "Dan Abnett",
   "series": "Gaunt's Ghosts",
   "year": 2009
  },
  "salvations_reach": {
   "title": "Salvation's Reach",
   "author": "Dan Abnett",
   "series": "Gaunt's Ghosts",
   "year": 2011
  },
  "the_warmaster": {
   "title": "The Warmaster",
   "author": "Dan Abnett",
   "series": "Gaunt's Ghosts",
   "year": 2017
  },
  "the_anarch": {
   "title": "The Anarch",
   "author": "Dan Abnett",
   "series": "Gaunt's Ghosts",
   "year": 2019
  },
  "double_eagle": {
   "title": "Double Eagle",
   "author": "Dan Abnett",
   "series": "Sabbat Worlds",
   "year": 2004
  },
  "sabbat_worlds_crusade": {
   "title": "The Sabbat Worlds Crusade",
   "author": "Dan Abnett",
   "series": "Sabbat Worlds (Hintergrundband)",
   "year": 2005
  },
  "titanicus": {
   "title": "Titanicus",
   "author": "Dan Abnett",
   "series": "Einzelroman",
   "year": 2008
  },
  "xenos": {
   "title": "Xenos",
   "author": "Dan Abnett",
   "series": "Eisenhorn",
   "year": 2001
  },
  "malleus": {
   "title": "Malleus",
   "author": "Dan Abnett",
   "series": "Eisenhorn",
   "year": 2001
  },
  "ravenor": {
   "title": "Ravenor",
   "author": "Dan Abnett",
   "series": "Ravenor",
   "year": 2004
  },
  "ravenor_returned": {
   "title": "Ravenor Returned",
   "author": "Dan Abnett",
   "series": "Ravenor",
   "year": 2005
  },
  "ravenor_rogue": {
   "title": "Ravenor Rogue",
   "author": "Dan Abnett",
   "series": "Ravenor",
   "year": 2007
  },
  "pariah": {
   "title": "Pariah",
   "author": "Dan Abnett",
   "series": "Bequin",
   "year": 2012
  },
  "penitent": {
   "title": "Penitent",
   "author": "Dan Abnett",
   "series": "Bequin",
   "year": 2021
  },
  "for_the_emperor": {
   "title": "For the Emperor",
   "author": "Sandy Mitchell",
   "series": "Ciaphas Cain",
   "year": 2003
  },
  "caves_of_ice": {
   "title": "Caves of Ice",
   "author": "Sandy Mitchell",
   "series": "Ciaphas Cain",
   "year": 2004
  },
  "traitors_hand": {
   "title": "The Traitor's Hand",
   "author": "Sandy Mitchell",
   "series": "Ciaphas Cain",
   "year": 2005
  },
  "death_or_glory": {
   "title": "Death or Glory",
   "author": "Sandy Mitchell",
   "series": "Ciaphas Cain",
   "year": 2006
  },
  "duty_calls": {
   "title": "Duty Calls",
   "author": "Sandy Mitchell",
   "series": "Ciaphas Cain",
   "year": 2007
  },
  "cains_last_stand": {
   "title": "Cain's Last Stand",
   "author": "Sandy Mitchell",
   "series": "Ciaphas Cain",
   "year": 2008
  },
  "last_ditch": {
   "title": "The Last Ditch",
   "author": "Sandy Mitchell",
   "series": "Ciaphas Cain",
   "year": 2012
  },
  "angel_of_fire": {
   "title": "Angel of Fire",
   "author": "William King",
   "series": "The Macharian Crusade",
   "year": 2012
  },
  "fist_of_demetrius": {
   "title": "Fist of Demetrius",
   "author": "William King",
   "series": "The Macharian Crusade",
   "year": 2013
  },
  "fall_of_macharius": {
   "title": "Fall of Macharius",
   "author": "William King",
   "series": "The Macharian Crusade",
   "year": 2014
  },
  "fifteen_hours": {
   "title": "Fifteen Hours",
   "author": "Mitchel Scanlon",
   "series": "Imperial Guard",
   "year": 2005
  },
  "rebel_winter": {
   "title": "Rebel Winter",
   "author": "Steve Parker",
   "series": "Imperial Guard",
   "year": 2007
  },
  "desert_raiders": {
   "title": "Desert Raiders",
   "author": "Lucien Soulban",
   "series": "Imperial Guard",
   "year": 2007
  },
  "gunheads": {
   "title": "Gunheads",
   "author": "Steve Parker",
   "series": "Imperial Guard",
   "year": 2009
  },
  "ice_guard": {
   "title": "Ice Guard",
   "author": "Steve Lyons",
   "series": "Imperial Guard",
   "year": 2009
  },
  "iron_guard": {
   "title": "Iron Guard",
   "author": "Mark Clapham",
   "series": "Imperial Guard",
   "year": 2012
  },
  "death_world": {
   "title": "Death World",
   "author": "Steve Lyons",
   "series": "Imperial Guard",
   "year": 2006
  },
  "straken": {
   "title": "Straken",
   "author": "Toby Frost",
   "series": "Imperial Guard",
   "year": 2014
  },
  "cadian_blood": {
   "title": "Cadian Blood",
   "author": "Aaron Dembski-Bowden",
   "series": "Imperial Guard",
   "year": 2009
  },
  "catachan_devil": {
   "title": "Catachan Devil",
   "author": "Justin Woolley",
   "series": "Astra Militarum",
   "year": 2022
  },
  "krieg_novel": {
   "title": "Krieg",
   "author": "Steve Lyons",
   "series": "Astra Militarum",
   "year": 2022
  },
  "siege_of_vraks": {
   "title": "Siege of Vraks",
   "author": "Steve Lyons",
   "series": "Astra Militarum",
   "year": 2024
  },
  "fall_of_cadia_rath": {
   "title": "The Fall of Cadia",
   "author": "Robert Rath",
   "series": "Einzelroman",
   "year": 2023
  },
  "creed_ashes_of_cadia": {
   "title": "Creed: Ashes of Cadia",
   "author": "Jude Reid",
   "series": "Astra Militarum",
   "year": 2023
  },
  "execution_hour": {
   "title": "Execution Hour",
   "author": "Gordon Rennie",
   "series": "The Gothic War",
   "year": 2001
  },
  "shadow_point": {
   "title": "Shadow Point",
   "author": "Gordon Rennie",
   "series": "The Gothic War",
   "year": 2003
  },
  "survival_instinct": {
   "title": "Survival Instinct",
   "author": "Andy Chambers",
   "series": "Necromunda",
   "year": 2005
  },
  "salvation_necromunda": {
   "title": "Salvation",
   "author": "C. S. Goto",
   "series": "Necromunda",
   "year": 2005
  },
  "blood_royal": {
   "title": "Blood Royal",
   "author": "Gordon Rennie & Will McDermott",
   "series": "Necromunda",
   "year": 2005
  },
  "junktion": {
   "title": "Junktion",
   "author": "Matthew Farrer",
   "series": "Necromunda",
   "year": 2005
  },
  "fleshworks": {
   "title": "Fleshworks",
   "author": "Lucien Soulban",
   "series": "Necromunda",
   "year": 2006
  },
  "cardinal_crimson": {
   "title": "Cardinal Crimson",
   "author": "Will McDermott",
   "series": "Necromunda",
   "year": 2006
  },
  "back_from_the_dead": {
   "title": "Back from the Dead",
   "author": "Nick Kyme",
   "series": "Necromunda",
   "year": 2006
  },
  "outlander": {
   "title": "Outlander",
   "author": "Matt Keefe",
   "series": "Necromunda",
   "year": 2006
  },
  "lasgun_wedding": {
   "title": "Lasgun Wedding",
   "author": "Will McDermott",
   "series": "Necromunda",
   "year": 2007
  },
  "terminal_overkill": {
   "title": "Terminal Overkill",
   "author": "Justin D. Hill",
   "series": "Necromunda",
   "year": 2019
  },
  "sinners_bounty": {
   "title": "Kal Jerico: Sinner's Bounty",
   "author": "Josh Reynolds",
   "series": "Necromunda",
   "year": 2020
  },
  "road_to_redemption": {
   "title": "Road to Redemption",
   "author": "Mike Brooks",
   "series": "Necromunda",
   "year": 2020
  },
  "soulless_fury": {
   "title": "Soulless Fury",
   "author": "Will McDermott",
   "series": "Necromunda",
   "year": 2020
  },
  "fire_made_flesh": {
   "title": "Fire Made Flesh",
   "author": "Denny Flowers",
   "series": "Necromunda",
   "year": 2021
  },
  "horus_rising": {
   "title": "Horus Rising",
   "author": "Dan Abnett",
   "series": "The Horus Heresy",
   "year": 2006
  },
  "battle_for_the_abyss": {
   "title": "Battle for the Abyss",
   "author": "Ben Counter",
   "series": "The Horus Heresy",
   "year": 2008
  },
  "first_heretic": {
   "title": "The First Heretic",
   "author": "Aaron Dembski-Bowden",
   "series": "The Horus Heresy",
   "year": 2010
  },
  "outcast_dead": {
   "title": "The Outcast Dead",
   "author": "Graham McNeill",
   "series": "The Horus Heresy",
   "year": 2011
  },
  "deliverance_lost": {
   "title": "Deliverance Lost",
   "author": "Gav Thorpe",
   "series": "The Horus Heresy",
   "year": 2012
  },
  "fear_to_tread": {
   "title": "Fear to Tread",
   "author": "James Swallow",
   "series": "The Horus Heresy",
   "year": 2012
  },
  "shadows_of_treachery": {
   "title": "Shadows of Treachery",
   "author": "Christian Dunn, Nick Kyme (Hrsg.)",
   "series": "The Horus Heresy",
   "year": 2012
  },
  "angel_exterminatus": {
   "title": "Angel Exterminatus",
   "author": "Graham McNeill",
   "series": "The Horus Heresy",
   "year": 2012
  },
  "betrayer": {
   "title": "Betrayer",
   "author": "Aaron Dembski-Bowden",
   "series": "The Horus Heresy",
   "year": 2012
  },
  "mark_of_calth": {
   "title": "Mark of Calth",
   "author": "Laurie Goulding (Hrsg.)",
   "series": "The Horus Heresy",
   "year": 2013
  },
  "vulkan_lives": {
   "title": "Vulkan Lives",
   "author": "Nick Kyme",
   "series": "The Horus Heresy",
   "year": 2013
  },
  "unremembered_empire": {
   "title": "The Unremembered Empire",
   "author": "Dan Abnett",
   "series": "The Horus Heresy",
   "year": 2013
  },
  "scars": {
   "title": "Scars",
   "author": "Chris Wraight",
   "series": "The Horus Heresy",
   "year": 2014
  },
  "vengeful_spirit": {
   "title": "Vengeful Spirit",
   "author": "Graham McNeill",
   "series": "The Horus Heresy",
   "year": 2014
  },
  "deathfire": {
   "title": "Deathfire",
   "author": "Nick Kyme",
   "series": "The Horus Heresy",
   "year": 2015
  },
  "pharos": {
   "title": "Pharos",
   "author": "Guy Haley",
   "series": "The Horus Heresy",
   "year": 2015
  },
  "angels_of_caliban": {
   "title": "Angels of Caliban",
   "author": "Gav Thorpe",
   "series": "The Horus Heresy",
   "year": 2016
  },
  "praetorian_of_dorn": {
   "title": "Praetorian of Dorn",
   "author": "John French",
   "series": "The Horus Heresy",
   "year": 2016
  },
  "corax": {
   "title": "Corax",
   "author": "Gav Thorpe",
   "series": "The Horus Heresy",
   "year": 2016
  },
  "master_of_mankind": {
   "title": "The Master of Mankind",
   "author": "Aaron Dembski-Bowden",
   "series": "The Horus Heresy",
   "year": 2016
  },
  "garro": {
   "title": "Garro",
   "author": "James Swallow",
   "series": "The Horus Heresy",
   "year": 2017
  },
  "crimson_king": {
   "title": "The Crimson King",
   "author": "Graham McNeill",
   "series": "The Horus Heresy",
   "year": 2017
  },
  "tallarn": {
   "title": "Tallarn",
   "author": "John French",
   "series": "The Horus Heresy",
   "year": 2017
  },
  "ruinstorm": {
   "title": "Ruinstorm",
   "author": "David Annandale",
   "series": "The Horus Heresy",
   "year": 2017
  },
  "old_earth": {
   "title": "Old Earth",
   "author": "Nick Kyme",
   "series": "The Horus Heresy",
   "year": 2017
  },
  "wolfsbane": {
   "title": "Wolfsbane",
   "author": "Guy Haley",
   "series": "The Horus Heresy",
   "year": 2018
  },
  "slaves_to_darkness": {
   "title": "Slaves to Darkness",
   "author": "John French",
   "series": "The Horus Heresy",
   "year": 2018
  },
  "titandeath": {
   "title": "Titandeath",
   "author": "Guy Haley",
   "series": "The Horus Heresy",
   "year": 2018
  },
  "buried_dagger": {
   "title": "The Buried Dagger",
   "author": "James Swallow",
   "series": "The Horus Heresy",
   "year": 2019
  },
  "dropsite_massacre": {
   "title": "Dropsite Massacre",
   "author": "John French",
   "series": "The Horus Heresy",
   "year": 2025
  },
  "sons_of_the_selenar": {
   "title": "Sons of the Selenar",
   "author": "Graham McNeill",
   "series": "The Siege of Terra (Novelle)",
   "year": 2020
  },
  "ashes_of_the_imperium": {
   "title": "Ashes of the Imperium",
   "author": "Chris Wraight",
   "series": "The Scouring",
   "year": 2025
  },
  "lord_of_ultramar": {
   "title": "Roboute Guilliman: Lord of Ultramar",
   "author": "David Annandale",
   "series": "The Horus Heresy: Primarchs",
   "year": 2016
  },
  "great_wolf": {
   "title": "Leman Russ: The Great Wolf",
   "author": "Chris Wraight",
   "series": "The Horus Heresy: Primarchs",
   "year": 2017
  },
  "master_of_prospero": {
   "title": "Magnus the Red: Master of Prospero",
   "author": "Graham McNeill",
   "series": "The Horus Heresy: Primarchs",
   "year": 2017
  },
  "hammer_of_olympia": {
   "title": "Perturabo: The Hammer of Olympia",
   "author": "Guy Haley",
   "series": "The Horus Heresy: Primarchs",
   "year": 2017
  },
  "bearer_of_the_word": {
   "title": "Lorgar: Bearer of the Word",
   "author": "Gav Thorpe",
   "series": "The Horus Heresy: Primarchs",
   "year": 2017
  },
  "palatine_phoenix": {
   "title": "Fulgrim: The Palatine Phoenix",
   "author": "Josh Reynolds",
   "series": "The Horus Heresy: Primarchs",
   "year": 2018
  },
  "gorgon_of_medusa": {
   "title": "Ferrus Manus: The Gorgon of Medusa",
   "author": "David Guymer",
   "series": "The Horus Heresy: Primarchs",
   "year": 2018
  },
  "warhawk_of_chogoris": {
   "title": "Jaghatai Khan: Warhawk of Chogoris",
   "author": "Chris Wraight",
   "series": "The Horus Heresy: Primarchs",
   "year": 2018
  },
  "lord_of_drakes": {
   "title": "Vulkan: Lord of Drakes",
   "author": "David Annandale",
   "series": "The Horus Heresy: Primarchs",
   "year": 2018
  },
  "lord_of_shadows": {
   "title": "Corax: Lord of Shadows",
   "author": "Guy Haley",
   "series": "The Horus Heresy: Primarchs",
   "year": 2018
  },
  "slave_of_nuceria": {
   "title": "Angron: Slave of Nuceria",
   "author": "Ian St. Martin",
   "series": "The Horus Heresy: Primarchs",
   "year": 2019
  },
  "lord_of_the_first": {
   "title": "Lion El'Jonson: Lord of the First",
   "author": "David Guymer",
   "series": "The Horus Heresy: Primarchs",
   "year": 2020
  },
  "pale_king": {
   "title": "Mortarion: The Pale King",
   "author": "David Annandale",
   "series": "The Horus Heresy: Primarchs",
   "year": 2022
  },
  "valdor": {
   "title": "Valdor: Birth of the Imperium",
   "author": "Chris Wraight",
   "series": "The Horus Heresy: Characters",
   "year": 2020
  },
  "luther_first_fallen": {
   "title": "Luther: First of the Fallen",
   "author": "Gav Thorpe",
   "series": "The Horus Heresy: Characters",
   "year": 2021
  }
 }
};
