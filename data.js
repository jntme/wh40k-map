/*
 * Map data.
 *
 * Coordinates: galactic plane centred on (0,0), radius approx. 1050 units.
 * x grows east (right), y grows south (down). Positions are schematic
 * and not to scale.
 *
 * Note: the base data was compiled from memory.
 * Please check details against Lexicanum (https://wh40k.lexicanum.com).
 *
 * Links:
 *   systems[].planets[]  -> planets in the system
 *   planets[].books      -> books set on the planet (without a specific event)
 *   events[].planets     -> planet IDs where the event took place
 *   events[].books       -> books about the event
 *   events[].sort        -> sort key: millennium * 1000 + year (e.g. 014.M31 -> 31014)
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
   "name": "Eye of Terror",
   "type": "warp",
   "x": -540,
   "y": -500,
   "r": 85,
   "desc": "Vast Warp storm born at the birth of Slaanesh. Home of the Traitor Legions and launch point of the Black Crusades.",
   "safe30k": "Vast Warp storm on the galactic north-west, torn open when the Aeldari empire fell and a new Chaos god was born. Its tides swallow whole sectors, and the Great Crusade's fleets give it a wide berth."
  },
  {
   "id": "maelstrom",
   "name": "Maelstrom",
   "type": "warp",
   "x": -60,
   "y": -120,
   "r": 40,
   "desc": "Warp storm region near the Segmentum Solar, a haven for pirates and renegades.",
   "safe30k": "Turbulent Warp storm region near the Segmentum Solar, treacherous for navigators."
  }
 ],
 "rift": {
  "name": "Cicatrix Maledictum",
  "eras": [
   "40k"
  ],
  "desc": "The Great Rift. It tore open after the Fall of Cadia and splits the galaxy into the Imperium Sanctum (south) and the Imperium Nihilus (north).",
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
   "name": "Damocles Gulf",
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
   "name": "Signus Cluster",
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
  },
  {
   "id": "murder",
   "name": "Murder",
   "segmentum": "ultima",
   "x": 760,
   "y": -390,
   "planets": [
    "murder"
   ]
  },
  {
   "id": "xenobia",
   "name": "Xenobia",
   "segmentum": "ultima",
   "x": 820,
   "y": -300,
   "planets": [
    "xenobia"
   ]
  },
  {
   "id": "laeran",
   "name": "Laeran",
   "segmentum": "ultima",
   "x": 480,
   "y": -280,
   "planets": [
    "laeran"
   ]
  },
  {
   "id": "sarosh",
   "name": "Sarosh",
   "segmentum": "obscurus",
   "x": -150,
   "y": -520,
   "planets": [
    "sarosh"
   ]
  },
  {
   "id": "nurth",
   "name": "Nurth",
   "segmentum": "ultima",
   "x": 150,
   "y": -200,
   "planets": [
    "nurth"
   ]
  },
  {
   "id": "aghoru",
   "name": "Aghoru",
   "segmentum": "ultima",
   "x": 300,
   "y": -560,
   "planets": [
    "aghoru"
   ]
  },
  {
   "id": "dagonet",
   "name": "Dagonet",
   "segmentum": "solar",
   "x": -450,
   "y": -30,
   "planets": [
    "dagonet"
   ]
  },
  {
   "id": "pythos",
   "name": "Pythos",
   "segmentum": "ultima",
   "x": 510,
   "y": -240,
   "planets": [
    "pythos"
   ]
  },
  {
   "id": "traoris",
   "name": "Traoris",
   "segmentum": "ultima",
   "x": 540,
   "y": -40,
   "planets": [
    "traoris"
   ]
  },
  {
   "id": "planet_of_the_sorcerers",
   "name": "Planet of the Sorcerers",
   "segmentum": "obscurus",
   "x": -555,
   "y": -525,
   "planets": [
    "planet_of_the_sorcerers"
   ]
  },
  {
   "id": "thoas",
   "name": "Thoas",
   "segmentum": "ultima",
   "x": 900,
   "y": 250,
   "planets": [
    "thoas"
   ]
  },
  {
   "id": "dulan",
   "name": "Dulan",
   "segmentum": "obscurus",
   "x": -400,
   "y": -720,
   "planets": [
    "dulan"
   ]
  },
  {
   "id": "morningstar",
   "name": "Morningstar",
   "segmentum": "ultima",
   "x": 360,
   "y": -500,
   "planets": [
    "morningstar"
   ]
  },
  {
   "id": "byzas",
   "name": "Byzas",
   "segmentum": "ultima",
   "x": 100,
   "y": 250,
   "planets": [
    "byzas"
   ]
  },
  {
   "id": "gardinaal",
   "name": "Gardinaal",
   "segmentum": "ultima",
   "x": 700,
   "y": -250,
   "planets": [
    "gardinaal_prime"
   ]
  },
  {
   "id": "taras",
   "name": "Taras",
   "segmentum": "ultima",
   "x": 550,
   "y": 380,
   "planets": [
    "antaeum"
   ]
  },
  {
   "id": "muspel",
   "name": "Muspel",
   "segmentum": "obscurus",
   "x": -50,
   "y": -930,
   "planets": [
    "muspel"
   ]
  },
  {
   "id": "galaspar",
   "name": "Galaspar",
   "segmentum": "pacificus",
   "x": -980,
   "y": 140,
   "planets": [
    "galaspar"
   ]
  },
  {
   "id": "one_five_four_four",
   "name": "One-Five-Four Four",
   "segmentum": "pacificus",
   "x": -570,
   "y": -100,
   "planets": [
    "one_five_four_four"
   ]
  },
  {
   "id": "constanix",
   "name": "Constanix",
   "segmentum": "tempestus",
   "x": 150,
   "y": 800,
   "planets": [
    "constanix_ii"
   ]
  },
  {
   "id": "carandiru",
   "name": "Carandiru",
   "segmentum": "tempestus",
   "x": -250,
   "y": 760,
   "planets": [
    "carandiru"
   ]
  },
  {
   "id": "percepton",
   "name": "Percepton",
   "segmentum": "ultima",
   "x": 720,
   "y": 560,
   "planets": [
    "percepton_primus"
   ]
  },
  {
   "id": "helwain",
   "name": "Helwain",
   "segmentum": "ultima",
   "x": 900,
   "y": 160,
   "planets": [
    "helwain"
   ]
  },
  {
   "id": "scathia",
   "name": "Scathia",
   "segmentum": "obscurus",
   "x": 200,
   "y": -880,
   "planets": [
    "scathia"
   ]
  },
  {
   "id": "shanriatha",
   "name": "Shanriatha",
   "segmentum": "obscurus",
   "x": -560,
   "y": -580,
   "planets": [
    "shanriatha"
   ]
  },
  {
   "id": "yarant",
   "name": "Yarant",
   "segmentum": "solar",
   "x": -230,
   "y": -160,
   "planets": [
    "yarant_iii"
   ]
  }
 ],
 "planets": {
  "terra": {
   "name": "Terra",
   "type": "Throne World",
   "desc": "Cradle of humanity and seat of the Golden Throne. The Imperium is ruled from the Imperial Palace.",
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
    "type": "Throne World, besieged",
    "desc": "As Horus closed on Sol, Rogal Dorn turned the Palace into a fortress. In 014.M31 the traitor Legions besieged Terra; the Emperor slew Horus aboard the Vengeful Spirit but was mortally wounded and was interred upon the Golden Throne."
   },
   "safe30k": {
    "type": "Throne World",
    "desc": "Cradle of humanity and seat of the Emperor, from whose Imperial Palace the Great Crusade was launched. The Emperor has withdrawn to its depths, while Malcador and the Imperial Fists keep the Palace."
   }
  },
  "mars": {
   "name": "Mars",
   "type": "Forge World",
   "desc": "Heart of the Adeptus Mechanicus and greatest Forge World of the Imperium.",
   "books": [
    "mechanicum"
   ],
   "era30k": {
    "type": "Forge World, civil war",
    "desc": "Kelbor-Hal sided with Horus and plunged Mars into civil war; the Dark Mechanicum overran most of the planet, and its fighting raged throughout the Heresy."
   },
   "safe30k": {
    "type": "Forge World (Seat of the Mechanicum)",
    "desc": "The Red Planet, ancient seat of the Mechanicum and ally of Terra under the Treaty of Olympus, where Fabricator-General Kelbor-Hal rules and the Titan Legions and the Legions' arms are forged."
   }
  },
  "armageddon": {
   "name": "Armageddon",
   "type": "Hive World",
   "desc": "Industrially vital Hive World, scene of several devastating wars against the Orks.",
   "books": []
  },
  "cadia": {
   "name": "Cadia",
   "type": "Fortress World (destroyed)",
   "desc": "Fortress World at the Cadian Gate, the only stable route out of the Eye of Terror. For ten thousand years a bulwark against Chaos.",
   "books": [
    "cadia_stands",
    "fall_of_cadia_rath",
    "creed_ashes_of_cadia"
   ],
   "safe30k": {
    "type": "Uncharted World (1301-12)",
    "desc": "Remote world at the edge of known space beside a vast warp storm, designated 1301-12 by the Word Bearers' 1301st Expedition; its primitive, violet-eyed people keep strange old faiths."
   },
   "era30k": {
    "type": "Uncharted World (1301-12)",
    "desc": "Some forty years before the Heresy, Lorgar's Pilgrimage led the Word Bearers here; its people worshipped the Chaos Gods, and the storm beside it would become the Eye of Terror. Cadia's fortress-world history begins only after the Heresy."
   }
  },
  "fenris": {
   "name": "Fenris",
   "type": "Death World · Chapter Planet",
   "desc": "Ice and ocean world, home of the Space Wolves.",
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
    "type": "Legion homeworld (VI Legion)",
    "desc": "Fenris remained loyal; its Legion, after burning Prospero, fought the Alpha Legion at Alaxxes and later hunted Horus on its own terms."
   },
   "safe30k": {
    "type": "Legion homeworld (VI Legion)",
    "desc": "Ice and ocean world of fire-mountains and ever-shifting land, where Leman Russ grew up among the tribes; it gives the Vlka Fenryka their savage warriors."
   }
  },
  "caliban": {
   "name": "Caliban",
   "type": "Chapter Planet (destroyed)",
   "desc": "Forest world and home of the Dark Angels, destroyed at the end of the Horus Heresy.",
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
    "type": "Legion homeworld (I Legion), shattered",
    "desc": "Long left behind by the Lion, Luther and the Caliban garrison turned against him and seized control of the world. At the war's end the Lion returned, and in the battle between the Dark Angels and their fallen brothers Caliban was torn apart."
   },
   "safe30k": {
    "type": "Legion homeworld (I Legion)",
    "desc": "Beast-haunted forest world of knightly orders, where Lion El'Jonson and Luther led the Order in a crusade against the Great Beasts. It is the recruiting world of the Dark Angels, and Luther now governs it in the Lion's absence."
   }
  },
  "prospero": {
   "name": "Prospero",
   "type": "Scholar World (devastated)",
   "desc": "Homeworld of the Thousand Sons under the Primarch Magnus.",
   "books": [
    "thousand_sons",
    "prospero_burns",
    "master_of_prospero",
    "crimson_king"
   ],
   "era30k": {
    "type": "Legion homeworld (XV Legion), razed",
    "desc": "After Magnus' warning to Terra the Space Wolves, with Custodes and Sisters of Silence, burned Prospero and Tizca; Magnus drew his Legion into the warp."
   },
   "safe30k": {
    "type": "Legion homeworld (XV Legion)",
    "desc": "Scholar world of the Thousand Sons, its capital Tizca a city of light and pyramid libraries where Magnus gathers the knowledge of the galaxy."
   }
  },
  "vigilus": {
   "name": "Vigilus",
   "type": "Hive World",
   "desc": "Strategically vital world at the Nachmund Gauntlet, one of the few safe passages through the Great Rift.",
   "books": []
  },
  "macragge": {
   "name": "Macragge",
   "type": "Chapter Planet",
   "desc": "Capital world of Ultramar and home of the Ultramarines.",
   "books": [
    "killing_ground",
    "unremembered_empire",
    "lord_of_ultramar"
   ],
   "era30k": {
    "type": "Legion homeworld (XIII Legion), capital of Imperium Secundus",
    "desc": "Cut off from Terra by the Ruinstorm and believing it fallen, Guilliman proclaimed Imperium Secundus on Macragge with Sanguinius as Emperor; the experiment ended once Terra was found still to stand."
   },
   "safe30k": {
    "type": "Legion homeworld (XIII Legion)",
    "desc": "Capital of Ultramar, the realm of Five Hundred Worlds that Roboute Guilliman rules with order and reason; the Fortress of Hera crowns its capital."
   }
  },
  "calth": {
   "name": "Calth",
   "type": "Colony World",
   "desc": "World in Ultramar, scene of one of the greatest betrayals of the Horus Heresy.",
   "books": [
    "know_no_fear",
    "mark_of_calth",
    "battle_for_the_abyss"
   ],
   "era30k": {
    "type": "Muster world (Ultramar), devastated",
    "desc": "In 007.M31 the Word Bearers struck the Ultramarines mustering at Calth; the attack crippled the fleet, the poisoned star Veridia scorched the surface and Erebus's ritual raised the Ruinstorm. The Underworld War in Calth's arcologies dragged on for years."
   },
   "safe30k": {
    "type": "Shipyard and muster world (Ultramar)",
    "desc": "Prosperous industrial and shipyard world of Ultramar, orbiting the star Veridia; its orbital docks build warships for the XIII Legion."
   }
  },
  "baal": {
   "name": "Baal",
   "type": "Chapter Planet",
   "desc": "Home of the Blood Angels, with its moons Baal Primus and Baal Secundus.",
   "books": [
    "deus_encarmine",
    "deus_sanguinius",
    "red_fury",
    "black_tide"
   ],
   "era30k": {
    "type": "Legion homeworld (IX Legion)",
    "desc": "Baal itself saw no major battle in the Heresy; its Legion was lured to Signus by Horus and later rallied to Imperium Secundus and the defence of Terra, where Sanguinius fell."
   },
   "safe30k": {
    "type": "Legion homeworld (IX Legion)",
    "desc": "Desert world in the Baal system whose irradiated moon Baal Secundus is where the Primarch Sanguinius was found among mutant-plagued tribes; the moons now give warriors to the Blood Angels."
   }
  },
  "nostramo": {
   "name": "Nostramo",
   "type": "Chapter Planet (destroyed)",
   "desc": "World of eternal darkness, home of the Night Lords. Destroyed by its own Primarch, Konrad Curze.",
   "books": [
    "soul_hunter",
    "night_haunter",
    "blood_reaver"
   ],
   "era30k": {
    "type": "Legion homeworld (VIII Legion), destroyed",
    "desc": "When Nostramo sank back into crime, Curze had his fleet bombard it until the planet cracked apart, shortly before the Heresy."
   },
   "safe30k": {
    "type": "Legion homeworld (VIII Legion)",
    "desc": "Hive world of eternal night where Konrad Curze, the Night Haunter, imposed order through terror; the Night Lords draw their recruits from its streets."
   }
  },
  "isstvan3": {
   "name": "Isstvan III",
   "type": "Colony World",
   "desc": "Where Horus' open betrayal of the loyal elements of his Legions began.",
   "books": [
    "galaxy_in_flames",
    "flight_eisenstein"
   ],
   "era30k": {
    "type": "Rebel World, virus-bombed",
    "desc": "Horus sent four Legions to Isstvan III, deployed the warriors loyal to the Emperor and then destroyed them with virus bombs and orbital fire, the first open act of his rebellion."
   },
   "safe30k": {
    "type": "Rebel World",
    "desc": "Colony world of the Isstvan system whose governor, Vardus Praal, has declared against the Imperium; Horus is to bring it back into line."
   }
  },
  "isstvan5": {
   "name": "Isstvan V",
   "type": "Desert World",
   "desc": "Scene of the Drop Site Massacre.",
   "books": [
    "fulgrim",
    "dropsite_massacre"
   ],
   "era30k": {
    "type": "Desert World, battlefield",
    "desc": "In 006.M31 seven Legions landed against the traitors in the Urgall Depression; four of them turned, and the Iron Hands, Salamanders and Raven Guard were slaughtered in the Drop Site Massacre."
   },
   "safe30k": {
    "type": "Desert World",
    "desc": "Desert world in the Isstvan system, an ancient world of strange fortifications."
   }
  },
  "davin": {
   "name": "Davin",
   "type": "Feudal World",
   "desc": "Moon-world where Horus was wounded and seduced by the powers of Chaos.",
   "books": [
    "false_gods"
   ],
   "era30k": {
    "type": "Compliant World, site of Horus' fall",
    "desc": "Temba, corrupted by Nurgle, struck down Horus on Davin's moon with the Anathame. Carried to the Serpent Lodge temple on Davin, the dying Horus was shown the Chaos Gods' visions and turned against the Emperor."
   },
   "safe30k": {
    "type": "Compliant World (Luna Wolves)",
    "desc": "Feudal world brought to compliance by the Luna Wolves decades earlier, now ruled by Governor Eugen Temba; its warrior lodges keep ancient customs, and its moon has turned to rebellion."
   }
  },
  "tanith": {
   "name": "Tanith",
   "type": "Forest World (destroyed)",
   "desc": "Home of the Tanith First and Only, Gaunt's Ghosts.",
   "books": [
    "first_and_only",
    "ghostmaker"
   ]
  },
  "verghast": {
   "name": "Verghast",
   "type": "Hive World",
   "desc": "Hive World in the Sabbat Worlds, scene of the siege of Vervunhive.",
   "books": []
  },
  "titan": {
   "name": "Titan",
   "type": "Moon · Chapter Planet",
   "desc": "Moon of Saturn in the Sol System and secret fortress of the Grey Knights, the daemon-hunting Chapter of the Ordo Malleus.",
   "era40k": {
    "type": "Chapter Planet",
    "desc": "Seat of the Grey Knights; from here their Brotherhoods set out against daemonic incursions across the galaxy."
   },
   "books": [
    "grey_knights",
    "dark_adeptus",
    "hammer_of_daemons"
   ],
   "safe30k": {
    "type": "Moon (Sol)",
    "desc": "Largest moon of Saturn in the Sol System, part of the Saturnine holdings guarding the approaches to Terra."
   },
   "era30k": {
    "type": "Moon (Sol)",
    "desc": "No major Heresy battle on Titan is recorded; after the war it became the hidden fortress of the Grey Knights, the order the Emperor and Malcador began to prepare during the Heresy."
   }
  },
  "badab_primaris": {
   "name": "Badab Primaris",
   "type": "Hive World · Chapter Planet",
   "desc": "Toxic Hive World on the edge of the Maelstrom and seat of the Astral Claws under Lufgt Huron, the 'Tyrant of Badab'.",
   "era40k": {
    "type": "Rebel World (reconquered)",
    "desc": "Reconquered after the Badab War; Huron fled into the Maelstrom as Huron Blackheart with the Red Corsairs."
   },
   "books": []
  },
  "hydra_cordatus": {
   "name": "Hydra Cordatus",
   "type": "Forge World · Fortress World",
   "desc": "Arid world bearing the citadel of the Adeptus Mechanicus, in whose depths the Space Marines' gene-seed stores were kept.",
   "era40k": {
    "type": "Fortress World (fallen)",
    "desc": "Besieged and taken by the Iron Warriors in late M41."
   },
   "books": []
  },
  "medrengard": {
   "name": "Medrengard",
   "type": "Daemon World · Legion homeworld",
   "desc": "Fortress world of the Iron Warriors in the Eye of Terror, ruled by Perturabo and his Warsmiths. A black sun burns above it.",
   "books": []
  },
  "sicarus": {
   "name": "Sicarus",
   "type": "Daemon World · Legion homeworld",
   "desc": "Daemon World of the Word Bearers in the Eye of Terror, ruled by Lorgar. From here the Legion's Dark Apostles go forth.",
   "books": [
    "dark_apostle",
    "dark_disciple",
    "dark_creed"
   ]
  },
  "piscina4": {
   "name": "Piscina IV",
   "type": "Mining World",
   "desc": "Imperial world within the Dark Angels' recruiting sphere, with its capital Kadillus Harbour; scene of a devastating Ork assault.",
   "books": []
  },
  "medusa": {
   "name": "Medusa",
   "type": "Death World · Chapter Planet",
   "desc": "Cold, hostile world and home of the Iron Hands, who despise the 'flesh' and improve themselves with bionics.",
   "era40k": {
    "type": "Chapter Planet",
    "desc": "Still home of the Iron Hands."
   },
   "era30k": {
    "type": "Legion homeworld (X Legion)",
    "desc": "After Ferrus Manus fell on Isstvan V, Medusa became the rallying point for the surviving Iron Hands and their bitter clan war."
   },
   "books": [
    "gorgon_of_medusa"
   ],
   "safe30k": {
    "type": "Legion homeworld (X Legion)",
    "desc": "Cold, storm-wracked world where Ferrus Manus is said to have slain the silver wyrm Asirnoth; its clans prize iron over flesh and send their sons to the Iron Hands."
   }
  },
  "gathalamor": {
   "name": "Gathalamor",
   "type": "Cardinal World · Shrine World",
   "desc": "Major Shrine World of the Ecclesiarchy in the Segmentum Solar, galactic south-west of Terra.",
   "books": []
  },
  "ophelia7": {
   "name": "Ophelia VII",
   "type": "Cardinal World · Shrine World",
   "desc": "Holy world of the Ecclesiarchy and seat of the Convent Sanctorum of the Adepta Sororitas.",
   "books": []
  },
  "biel_tan": {
   "name": "Biel-Tan",
   "type": "Aeldari Craftworld",
   "desc": "Warlike Aeldari Craftworld that seeks to reclaim the ancient empire. Position shown here is schematic, as craftworlds drift.",
   "books": []
  },
  "rynns_world": {
   "name": "Rynn's World",
   "type": "Agri World · Chapter Planet",
   "desc": "Fertile world in the Loki Sector and home of the Crimson Fists with their fortress-monastery Arx Tyrannus.",
   "era40k": {
    "type": "Chapter Planet (devastated)",
    "desc": "Ravaged by Snagrod's Waaagh! from 989.M41; the Arx Tyrannus was destroyed by one of the Chapter's own misguided missiles."
   },
   "books": []
  },
  "metalica": {
   "name": "Metalica",
   "type": "Forge World",
   "desc": "Forge World and industrial heart of the Charadon Sector, famous for its deafening war-cult.",
   "books": []
  },
  "nocturne": {
   "name": "Nocturne",
   "type": "Death World · Chapter Planet",
   "desc": "Volcanic world wracked by tremendous tidal quakes, home of the Salamanders and their Primarch Vulkan.",
   "era30k": {
    "type": "Legion homeworld (XVIII Legion)",
    "desc": "After Isstvan V the surviving Salamanders held Nocturne and kept alive the hope that Vulkan lived; the Primarch returned to his Legion at last."
   },
   "books": [
    "salamander",
    "firedrake",
    "deathfire",
    "lord_of_drakes"
   ],
   "era40k": {
    "type": "Chapter Planet",
    "desc": "Still home of the Salamanders."
   },
   "safe30k": {
    "type": "Legion homeworld (XVIII Legion)",
    "desc": "Volcanic death world of tidal quakes and Sanctuary Cities, where Vulkan grew up with the blacksmith N'bel and defended his people from the raiders of the Dark Eldar. It gives warriors to the Salamanders."
   }
  },
  "ichar4": {
   "name": "Ichar IV",
   "type": "Hive World",
   "desc": "Hive World in the Ultima Segmentum, galactic north of Ultramar.",
   "books": []
  },
  "tarsis_ultra": {
   "name": "Tarsis Ultra",
   "type": "Agri World (dead)",
   "desc": "Former Agri World in the Ultima Segmentum, attacked by a splinter of Hive Fleet Leviathan.",
   "books": []
  },
  "iax": {
   "name": "Iax",
   "type": "Garden World",
   "desc": "Paradisiacal Garden World in Ultramar and one of Guilliman's 'Five Hundred Worlds'.",
   "era40k": {
    "type": "Garden World (plague-ridden)",
    "desc": "Mortarion's target in the Plague Wars and scene of his duel with Guilliman."
   },
   "books": []
  },
  "octarius": {
   "name": "Octarius",
   "type": "Ork empire",
   "desc": "Heartland of one of the largest Ork empires in the galaxy, on the Eastern Fringe near Ultramar.",
   "era40k": {
    "type": "War zone",
    "desc": "Since Kryptman's gambit, scene of an endless war between Tyranids and Orks."
   },
   "books": []
  },
  "damnos": {
   "name": "Damnos",
   "type": "Mining World (lost)",
   "desc": "Icy Imperial mining world beneath whose surface a Necron tomb lay sleeping.",
   "books": []
  },
  "pavonis": {
   "name": "Pavonis",
   "type": "Industrial World",
   "desc": "Imperial world where Uriel Ventris fought his first actions as Captain of the Ultramarines' 4th Company.",
   "books": [
    "courage_and_honour"
   ]
  },
  "dalyth": {
   "name": "Dal'yth Prime",
   "type": "T'au sept world",
   "desc": "T'au sept world beyond the Damocles Gulf, main target of the Imperial Damocles Crusade.",
   "books": []
  },
  "tsagualsa": {
   "name": "Tsagualsa",
   "type": "Dead World",
   "desc": "Grim world in the Thramas Sector on the Eastern Fringe, called the 'Carrion World' by the Night Lords.",
   "era30k": {
    "type": "Night Lords stronghold",
    "desc": "Fought over during the Thramas Crusade, Tsagualsa became the Night Lords' stronghold after the Siege; there Konrad Curze, having foreseen his death, let the Callidus M'Shen slay him."
   },
   "books": [],
   "safe30k": {
    "type": "Dead World",
    "desc": "Grim world in the Thramas Sector on the Eastern Fringe."
   }
  },
  "paradyce6": {
   "name": "Paradyce VI",
   "type": "Imperial World (lost)",
   "desc": "World in the Nephilim Sector, lying within the Pariah Nexus and overrun by the Necrons.",
   "books": []
  },
  "necromunda": {
   "name": "Necromunda",
   "type": "Hive World",
   "desc": "Polluted Hive World in the Segmentum Solar, famous for Hive Primus and its gang-ridden underhive. A major supplier of munitions and armour to the Imperial Guard.",
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
   "type": "Ork World",
   "desc": "World conquered by Ghazghkull Thraka, which he meant to turn into a vast munitions factory for his next Waaagh! Here Commissar Yarrick lost his Baneblade 'Fortress of Arrogance'.",
   "books": [
    "gunheads"
   ]
  },
  "catachan": {
   "name": "Catachan",
   "type": "Death World · Jungle World",
   "desc": "The Imperium's most notorious Death World, in the Ultima Segmentum. Its lethal jungle breeds the Catachan Jungle Fighters.",
   "books": []
  },
  "valhalla": {
   "name": "Valhalla",
   "type": "Ice World",
   "desc": "Once a green world, knocked from its orbit by a comet strike and frozen over. Home of the Valhallan Ice Warriors.",
   "books": []
  },
  "krieg": {
   "name": "Krieg",
   "type": "Death World (irradiated)",
   "desc": "Former Hive World in the Segmentum Tempestus, ravaged by atomic fire in a centuries-long civil war. Home of the Death Korps of Krieg.",
   "books": [
    "krieg_novel"
   ]
  },
  "tallarn": {
   "name": "Tallarn",
   "type": "Desert World",
   "desc": "Desert world in the Segmentum Tempestus and home of the Tallarn Desert Raiders.",
   "era30k": {
    "type": "Desert World, virus-bombed",
    "desc": "The Iron Warriors virus-bombed Tallarn, killing billions; survivors fought on in sealed vehicles across its poisoned plains in the largest tank battle in history."
   },
   "books": [
    "tallarn"
   ],
   "era40k": {
    "type": "Desert World",
    "desc": "Now a desert world and recruiting ground of the Tallarn regiments."
   },
   "safe30k": {
    "type": "Recruiting World",
    "desc": "Fertile, populous world of the Segmentum Tempestus that supplies the Imperial Army."
   }
  },
  "vostroya": {
   "name": "Vostroya",
   "type": "Industrial World",
   "desc": "Industrial world in the Halo Zone of the Segmentum Obscurus beyond the Eye of Terror. As penance it gives its firstborn to the Imperial Guard (the Vostroyan Firstborn).",
   "books": []
  },
  "balhaut": {
   "name": "Balhaut",
   "type": "Imperial World",
   "desc": "Sabbat World where Warmaster Slaydo won the decisive victory of his crusade and was mortally wounded. Later a world of rest and reconstruction for the crusade armies.",
   "books": []
  },
  "fortis_binary": {
   "name": "Fortis Binary",
   "type": "Forge World",
   "desc": "Chaos-held Forge World in the Sabbat Worlds, the first major action of the Tanith Ghosts under Gaunt.",
   "books": [
    "first_and_only",
    "ghostmaker"
   ]
  },
  "menazoid_epsilon": {
   "name": "Menazoid Epsilon",
   "type": "Death World",
   "desc": "Death World in the Menazoid Clasp system. Here Lord General Dravere fell; the planet held an STC facility for making 'Men of Iron'.",
   "books": [
    "first_and_only",
    "ghostmaker"
   ]
  },
  "hagia": {
   "name": "Hagia",
   "type": "Shrine World",
   "desc": "Birthworld of Saint Sabbat and resting place of her relics. Its capital is the Holy Doctrinopolis.",
   "books": [
    "honour_guard"
   ]
  },
  "phantine": {
   "name": "Phantine",
   "type": "Imperial World",
   "desc": "World with a toxic lower atmosphere whose cities lie high above the clouds. Retaken through air-drop operations by the Tanith Ghosts and dogfights of the Phantine air forces.",
   "books": [
    "guns_of_tanith",
    "double_eagle"
   ]
  },
  "aexe_cardinal": {
   "name": "Aexe Cardinal",
   "type": "Imperial World",
   "desc": "World torn by trench warfare, where the Aexe Alliance fights the Chaos-backed Shadik Republic.",
   "books": [
    "straight_silver"
   ]
  },
  "herodor": {
   "name": "Herodor",
   "type": "Shrine World",
   "desc": "Shrine World of the Sabbat Worlds where a girl is venerated as the rebirth of Saint Sabbat. Here Colonel Colm Corbec fell.",
   "books": [
    "sabbat_martyr"
   ]
  },
  "gereon": {
   "name": "Gereon",
   "type": "Imperial World (occupied)",
   "desc": "World occupied by the Archenemy, where the traitor general Noches Sturm is held captive. Liberated in 777.M41.",
   "books": [
    "traitor_general",
    "armour_of_contempt"
   ]
  },
  "jago": {
   "name": "Jago",
   "type": "Imperial World",
   "desc": "Barren world where the Ghosts must hold the ancient fortress of Hinzerhaus against the Blood Pact.",
   "books": [
    "only_in_death",
    "iron_star"
   ]
  },
  "urdesh": {
   "name": "Urdesh",
   "type": "Forge World",
   "desc": "Forge World in the Iron Belt and one of the most important suppliers of the Sabbat Worlds Crusade, taken by Chaos midway through the crusade. Scene of Macaroth's decisive campaign against Anarch Sek.",
   "books": [
    "the_warmaster",
    "the_anarch"
   ]
  },
  "ancreon_sextus": {
   "name": "Ancreon Sextus",
   "type": "Imperial World",
   "desc": "World with ancient ziggurat cities such as Sparshad Mons, used by the Blood Pact as warp gates.",
   "books": [
    "his_last_command"
   ]
  },
  "salvations_reach": {
   "name": "Salvation's Reach",
   "type": "Archenemy stronghold",
   "desc": "Top-secret Archenemy bastion in the Sabbat Worlds, target of a daring commando raid by the Tanith Ghosts.",
   "books": [
    "salvations_reach"
   ]
  },
  "orestes": {
   "name": "Orestes",
   "type": "Forge World",
   "desc": "Forge World of the Adeptus Mechanicus where the Titan Legion Legio Invicta stops on its way to the Sabbat Worlds and is attacked by Chaos Titans.",
   "books": [
    "titanicus"
   ]
  },
  "karsk": {
   "name": "Karsk",
   "type": "Imperial World",
   "desc": "World in the western Halo where Lord Solar Macharius fights a cult seeking to summon the 'Angel of Fire' – in truth a daemon.",
   "books": [
    "angel_of_fire"
   ]
  },
  "demetrius": {
   "name": "Demetrius",
   "type": "Imperial World",
   "desc": "World where Macharius searches for the 'Fist of Demetrius', a power fist said to have belonged to a Primarch.",
   "books": [
    "fist_of_demetrius"
   ]
  },
  "loki": {
   "name": "Loki",
   "type": "Imperial World",
   "desc": "Scene of the final years of the Macharian Crusade.",
   "books": [
    "fall_of_macharius"
   ]
  },
  "port_maw": {
   "name": "Port Maw",
   "type": "Hive World",
   "desc": "Hollow, ancient artificial planetoid, capital world of the Gothic Sector and headquarters of Battlefleet Gothic.",
   "books": [
    "execution_hour",
    "shadow_point"
   ]
  },
  "savaven": {
   "name": "Savaven",
   "type": "Cardinal World",
   "desc": "Cardinal World of the Ecclesiarchy, the first planet destroyed by the Planet Killer in the Gothic War.",
   "era40k": {
    "type": "Destroyed World",
    "desc": "Destroyed by the Planet Killer in the Gothic War."
   },
   "books": []
  },
  "schindlegeist": {
   "name": "Schindlegeist",
   "type": "Civilised World",
   "desc": "Location of the fifth Blackstone Fortress before the Gothic War and scene of the decisive battle against Abaddon's fleet.",
   "books": []
  },
  "gudrun": {
   "name": "Gudrun",
   "type": "Imperial World",
   "desc": "Former capital world of the Helican Subsector in the Scarus Sector, seat of noble houses such as the treacherous House Glaw.",
   "books": [
    "xenos"
   ]
  },
  "hubris": {
   "name": "Hubris",
   "type": "Imperial World",
   "desc": "Cold world in the Helican Subsector. In its cryo-vaults Inquisitor Eisenhorn corners the heretic Murdin Eyclone.",
   "books": [
    "xenos"
   ]
  },
  "thracian_primaris": {
   "name": "Thracian Primaris",
   "type": "Imperial World",
   "desc": "World in the Helican Subsector, scene of Lord Helican's disastrous triumphal procession in 241.M41.",
   "books": [
    "malleus"
   ]
  },
  "eustis_majoris": {
   "name": "Eustis Majoris",
   "type": "Hive World",
   "desc": "Capital world of the Angelus Subsector in the Scarus Sector, one vast hive. Here Inquisitor Ravenor investigates the trade in the drug flects.",
   "books": [
    "ravenor",
    "ravenor_returned",
    "ravenor_rogue"
   ]
  },
  "sancour": {
   "name": "Sancour",
   "type": "Imperial World",
   "desc": "World with the decaying city of Queen Mab, once a centre of shipbuilding. Setting of the Bequin novels.",
   "books": [
    "pariah",
    "penitent"
   ]
  },
  "vraks_prime": {
   "name": "Vraks Prime",
   "type": "Armoury World",
   "desc": "The only inhabited world of the Vraks system in the Scarus Sector, a vast Imperial arsenal. Broke from the Imperium under Cardinal Xaphan.",
   "books": [
    "siege_of_vraks"
   ]
  },
  "kathur": {
   "name": "Kathur",
   "type": "Shrine World",
   "desc": "Shrine World in the Scarus Sector near the Eye of Terror, afflicted by Chaos plagues.",
   "books": [
    "cadian_blood"
   ]
  },
  "gravalax": {
   "name": "Gravalax",
   "type": "Agri World",
   "desc": "Small Agri World in the region of the Damocles Gulf, almost entirely surrounded by T'au space.",
   "books": [
    "for_the_emperor"
   ]
  },
  "perlia": {
   "name": "Perlia",
   "type": "Civilised World",
   "desc": "Civilised world near the Damocles Gulf holding most of its subsector's industry. Twice the scene of a siege, both times with Ciaphas Cain present.",
   "books": [
    "death_or_glory",
    "cains_last_stand"
   ]
  },
  "simia_orichalcae": {
   "name": "Simia Orichalcae",
   "type": "Ice World",
   "desc": "Ice world with an important promethium refinery, defended against Orks by Cain's regiment.",
   "books": [
    "caves_of_ice"
   ]
  },
  "adumbria": {
   "name": "Adumbria",
   "type": "Imperial World",
   "desc": "World defended by Cain's regiment against a Chaos invasion.",
   "books": [
    "traitors_hand"
   ]
  },
  "periremunda": {
   "name": "Periremunda",
   "type": "Imperial World",
   "desc": "World facing an approaching Tyranid hive fleet.",
   "books": [
    "duty_calls"
   ]
  },
  "nusquam_fundumentibus": {
   "name": "Nusquam Fundumentibus",
   "type": "Imperial World",
   "desc": "World where Cain and the Valhallan 597th are deployed against an Ork outbreak.",
   "books": [
    "last_ditch"
   ]
  },
  "daniks_world": {
   "name": "Danik's World",
   "type": "War World · Ice World",
   "desc": "Former Agri World in the Ultima Segmentum, contested by rebel PDF troops, the Vostroyan 12th Army and Orks.",
   "books": [
    "rebel_winter"
   ]
  },
  "cressida": {
   "name": "Cressida",
   "type": "Dead World (formerly ice world)",
   "desc": "Ice world destroyed by Exterminatus after the withdrawal of Imperial forces.",
   "books": [
    "ice_guard"
   ]
  },
  "rogar_iii": {
   "name": "Rogar III",
   "type": "Death World · Jungle World",
   "desc": "Jungle Death World contested between the Imperium and the Orks, area of operations for Catachan Jungle Fighters.",
   "books": [
    "death_world"
   ]
  },
  "gondwa_vi": {
   "name": "Gondwa VI",
   "type": "Swamp World",
   "desc": "Ork-overrun swamp world where the Catachan 57th Jungle Fighters do battle.",
   "books": [
    "catachan_devil"
   ]
  },
  "dulmalin": {
   "name": "Dulma'lin",
   "type": "Cavern World",
   "desc": "Cavern world that Colonel 'Iron Hand' Straken and his Catachans are tasked with clearing of Orks.",
   "books": [
    "straken"
   ]
  },
  "khadar": {
   "name": "Khadar",
   "type": "Desert World",
   "desc": "Desert world emitting a mysterious distress call; Tallarn Desert Raiders are dispatched to investigate.",
   "books": [
    "desert_raiders"
   ]
  },
  "belmos_vii": {
   "name": "Belmos VII",
   "type": "Mining World",
   "desc": "Mining world whose population is struck by an inexplicable plague; area of operations for the Mordian 114th Iron Guard regiment.",
   "books": [
    "iron_guard"
   ]
  },
  "broucheroc": {
   "name": "Broucheroc",
   "type": "War World",
   "desc": "Frontline city in the war against the Orks, where a new Guardsman's life expectancy is calculated at fifteen hours.",
   "books": [
    "fifteen_hours"
   ]
  },
  "luna": {
   "name": "Luna",
   "type": "Moon",
   "desc": "Terra's moon in the Sol System.",
   "era30k": {
    "type": "Moon, battleground",
    "desc": "Selenar remnants still harboured old grudges and hidden secrets; during the Siege of Terra survivors of the Shattered Legions answered a distress call from Luna and fought beneath its surface. Luna was reclaimed by the Imperium after the Siege."
   },
   "books": [
    "sons_of_the_selenar"
   ],
   "safe30k": {
    "type": "Moon (Selenar)",
    "desc": "Terra's moon, home of the Selenar gene-cults whose genetic science helped create the Legions; the Luna Wolves took their name from it."
   }
  },
  "pluto": {
   "name": "Pluto",
   "type": "Fortress planet",
   "desc": "Outermost planet of the Sol System.",
   "era30k": {
    "type": "Fortress World (Sol), attacked",
    "desc": "The Alpha Legion infiltrated the Sol System and struck at Pluto's defences, testing Rogal Dorn and his Huscarls long before the Solar War."
   },
   "books": [
    "praetorian_of_dorn"
   ],
   "safe30k": {
    "type": "Fortress World (Sol)",
    "desc": "Outermost world of the Sol System, its frozen bastions part of the outer defences maintained by the Imperial Fists."
   }
  },
  "cthonia": {
   "name": "Cthonia",
   "type": "Mining World (destroyed)",
   "desc": "Exhausted mining world in the Segmentum Solar, eaten away by gang wars.",
   "era30k": {
    "type": "Legion homeworld (XVI Legion), destroyed",
    "desc": "Toward the end of the Heresy the Dark Angels destroyed the over-mined world, cracking it apart."
   },
   "books": [],
   "safe30k": {
    "type": "Legion homeworld (XVI Legion)",
    "desc": "Hollowed-out, gang-ridden mining world near Terra whose warriors carry its harsh code into the Luna Wolves and their famous Cthonian Head-hunter auxiliaries."
   }
  },
  "nikaea": {
   "name": "Nikaea",
   "type": "Frontier World",
   "desc": "World in the Segmentum Solar.",
   "era30k": {
    "type": "Frontier World",
    "desc": "At the Council of Nikaea the Emperor banned the Librarius and the use of sorcery in the Legions, a ruling that Magnus would defy."
   },
   "books": [
    "thousand_sons"
   ],
   "safe30k": {
    "type": "Frontier World",
    "desc": "Remote world chosen as the venue for a great council at which the Emperor will rule on the use of psychic powers within the Legions."
   }
  },
  "beta_garmon2": {
   "name": "Beta-Garmon II",
   "type": "Hive World",
   "desc": "World in the Beta-Garmon cluster, a strategic nexus before the Segmentum Solar.",
   "era30k": {
    "type": "Hive World, Titan battlefield",
    "desc": "Beta-Garmon became the last great obstacle before Sol; the Titandeath around Nyrcon City on Beta-Garmon II saw more Titans destroyed than in any battle before, and the cluster's worlds were reduced to ruin."
   },
   "books": [
    "titandeath"
   ],
   "safe30k": {
    "type": "Hive World (Beta-Garmon Cluster)",
    "desc": "Populous hive world in the Beta-Garmon cluster, a nexus of warp routes leading toward the Segmentum Solar and thus one of the gateways to Terra."
   }
  },
  "paramar5": {
   "name": "Paramar V",
   "type": "Forge World",
   "desc": "Forge World in the north of the Segmentum Solar, on a warp-stable route between Isstvan and Sol.",
   "era30k": {
    "type": "Forge World, contested",
    "desc": "The Alpha Legion and Dark Mechanicum attacked Paramar V early in the Heresy, and the world was fought over repeatedly as a key supply node on the traitors' road to Terra."
   },
   "books": [],
   "safe30k": {
    "type": "Forge World",
    "desc": "Forge World in the north of the Segmentum Solar on a warp-stable route linking Isstvan to Sol."
   }
  },
  "molech": {
   "name": "Molech",
   "type": "Fortress World · Knight World",
   "desc": "Knight World where, according to traitor legend, the Emperor once made a pact with Chaos.",
   "era30k": {
    "type": "Knight World, conquered",
    "desc": "Horus invaded Molech with the Sons of Horus and Death Guard and broke its Knights and Titans; there he entered a warp gateway once used by the Emperor and returned with greater power."
   },
   "books": [
    "vengeful_spirit"
   ],
   "safe30k": {
    "type": "Knight World, Fortress World",
    "desc": "Wealthy Knight World ruled by House Devine, a major Imperial fortress world in the north whose ancient legends speak of a visit by the Emperor."
   }
  },
  "trisolian": {
   "name": "Trisolian",
   "type": "System",
   "desc": "Star system on Horus' path to Terra.",
   "era30k": {
    "type": "Battlefield",
    "desc": "Leman Russ hunted the Vengeful Spirit to Trisolian, boarded it and struck Horus with the Spear of Russ before being gravely wounded himself."
   },
   "books": [
    "wolfsbane"
   ],
   "safe30k": {
    "type": "Forge station cluster",
    "desc": "A cluster of Mechanicum void stations orbiting the Trisolian star, on Horus' route toward Terra."
   }
  },
  "phall": {
   "name": "Phall",
   "type": "Agri World system",
   "desc": "System in the Segmentum Obscurus with two Agri Worlds.",
   "era30k": {
    "type": "Battlefield",
    "desc": "In 007.M31 Perturabo's entire Iron Warriors fleet ambushed the Imperial Fists Retribution Fleet under Alexis Polux at Phall."
   },
   "books": [
    "shadows_of_treachery"
   ],
   "safe30k": {
    "type": "Agri World system",
    "desc": "Star system with two agri worlds in the Segmentum Ultima."
   }
  },
  "iydris": {
   "name": "Iydris",
   "type": "Daemon World",
   "desc": "World in the Eye of Terror.",
   "era30k": {
    "type": "Crone World",
    "desc": "Fulgrim lured Perturabo here in search of the 'Angel Exterminatus'; the hunt was a ruse, and on Iydris Fulgrim ascended to become a daemon prince of Slaanesh."
   },
   "books": [
    "angel_exterminatus"
   ],
   "safe30k": {
    "type": "Crone World",
    "desc": "Abandoned Eldar world hidden in the warp storms that will one day become the Eye of Terror."
   }
  },
  "colchis": {
   "name": "Colchis",
   "type": "Chapter Planet (destroyed)",
   "desc": "Desert world in the Segmentum Pacificus, once ruled by a powerful priesthood.",
   "era30k": {
    "type": "Legion homeworld (XVII Legion), condemned",
    "desc": "Colchis remained a Word Bearers stronghold through the Heresy; after the war it was purged by the Ultramarines and destroyed by Exterminatus around 032.M31."
   },
   "books": [
    "bearer_of_the_word"
   ],
   "safe30k": {
    "type": "Legion homeworld (XVII Legion)",
    "desc": "Desert world of the Segmentum Pacificus once ruled by the priesthood of the Covenant and its Old Faith; Lorgar overthrew them in a holy war and now his Word Bearers preach the Emperor's divinity from here."
   }
  },
  "khur": {
   "name": "Khur",
   "type": "Civilised World (dead)",
   "desc": "World in the Segmentum Pacificus with the city of Monarchia.",
   "era30k": {
    "type": "Civilised World, censured",
    "desc": "On the Emperor's orders the Ultramarines razed Monarchia, and the Word Bearers were forced to kneel in its ashes. The humiliation set Lorgar on the path to Chaos, forty-three years before the Heresy."
   },
   "books": [
    "first_heretic"
   ],
   "safe30k": {
    "type": "Civilised World",
    "desc": "World of the Segmentum Pacificus where the Word Bearers raised Monarchia, a perfect city built in worship of the Emperor."
   }
  },
  "inwit": {
   "name": "Inwit",
   "type": "Ice World",
   "desc": "Ice world in the Inwit Cluster (Segmentum Tempestus).",
   "era30k": {
    "type": "Ice World, homeworld of Rogal Dorn",
    "desc": "No major Heresy campaign at Inwit is recorded in the novels; its Legion fought far away, defending Terra."
   },
   "books": [],
   "safe30k": {
    "type": "Ice World, homeworld of Rogal Dorn",
    "desc": "Tidally locked ice world at the heart of the Inwit Cluster, an ancient stellar empire of ice-hive clans that Rogal Dorn ruled before the Emperor found him. Many Imperial Fists are drawn from its tribes."
   }
  },
  "kiavahr": {
   "name": "Kiavahr",
   "type": "Forge World",
   "desc": "Technocratic industrial world in the Kiavahr system (Segmentum Tempestus).",
   "era30k": {
    "type": "Forge World",
    "desc": "Corax's uprising on Lycaeus broke the tech-guilds long before the Heresy; Kiavahr stayed bound to the Raven Guard as they rebuilt after Isstvan V."
   },
   "books": [
    "deliverance_lost"
   ],
   "safe30k": {
    "type": "Forge World",
    "desc": "Technocratic industrial world ruled by tech-guilds that exploited the prison moon Lycaeus for labour."
   }
  },
  "deliverance": {
   "name": "Deliverance",
   "type": "Moon · Chapter Planet",
   "desc": "Moon of Kiavahr, formerly the prison world Lycaeus.",
   "era30k": {
    "type": "Legion homeworld (XIX Legion)",
    "desc": "After Isstvan V Corax brought his shattered Legion back to Deliverance to rebuild it, but his hurried gene-seed experiments produced monstrous Raptors."
   },
   "era40k": {
    "type": "Chapter Planet",
    "desc": "Still home of the Raven Guard."
   },
   "books": [
    "deliverance_lost",
    "corax",
    "lord_of_shadows"
   ],
   "safe30k": {
    "type": "Legion homeworld (XIX Legion)",
    "desc": "Moon of Kiavahr, once the prison moon Lycaeus, where Corax led the prisoners in revolt against the Kiavahran tech-guilds and renamed it Deliverance. It is the Raven Guard's fortress."
   }
  },
  "barbarus": {
   "name": "Barbarus",
   "type": "Death World",
   "desc": "World shrouded in poisonous mists in the Segmentum Tempestus.",
   "era30k": {
    "type": "Legion homeworld (XIV Legion), destroyed",
    "desc": "Shortly before the Siege of Terra the Dark Angels destroyed the traitor homeworld with cyclonic torpedoes; Mortarion, by then a servant of Nurgle, showed little emotion at the news."
   },
   "books": [
    "buried_dagger",
    "pale_king"
   ],
   "safe30k": {
    "type": "Legion homeworld (XIV Legion)",
    "desc": "Toxic, mist-shrouded death world where the young Mortarion was raised by the overlord Necare and later led the valley folk against the mountain overlords. It is the recruiting world of the Death Guard."
   }
  },
  "ullanor": {
   "name": "Ullanor Prime",
   "type": "Ork World",
   "desc": "Centre of the greatest Ork empire at the time of the Great Crusade. Location before the War of the Beast unknown.",
   "era30k": {
    "type": "Ork World, traitor muster point",
    "desc": "Before the Siege of Terra Horus gathered his traitor hosts at Ullanor, the scene of his greatest triumph."
   },
   "books": [
    "slaves_to_darkness"
   ],
   "safe30k": {
    "type": "Ork World",
    "desc": "Former heart of the greatest Ork empire of the Great Crusade, conquered in 000.M31; at the Triumph of Ullanor the Emperor named Horus Warmaster and returned to Terra."
   }
  },
  "olympia": {
   "name": "Olympia",
   "type": "Dead World",
   "desc": "Mountainous world of city-states in the Ultima Segmentum.",
   "era30k": {
    "type": "Legion homeworld (IV Legion), ruined",
    "desc": "Olympia rebelled shortly before the Heresy, and Perturabo crushed it with a decimation and city-by-city purges. In the Scouring the Iron Warriors themselves made the world uninhabitable as they fled the Imperial assault."
   },
   "books": [
    "hammer_of_olympia"
   ],
   "safe30k": {
    "type": "Legion homeworld (IV Legion)",
    "desc": "Mountainous world of rival city-states, where Perturabo rose at the court of the Tyrant of Lochos and united the planet. It supplies warriors to the Iron Warriors."
   }
  },
  "chemos": {
   "name": "Chemos",
   "type": "Dead World",
   "desc": "Exhausted industrial world in the Ultima Segmentum (Aquitaine Sector).",
   "era30k": {
    "type": "Legion homeworld (III Legion), destroyed",
    "desc": "Neglected by its fallen Legion, Chemos was left largely undefended; in 012.M31 the Dark Angels destroyed it with seismic charges and orbital bombardment and declared the system Perdita."
   },
   "books": [
    "palatine_phoenix"
   ],
   "safe30k": {
    "type": "Legion homeworld (III Legion)",
    "desc": "Pollution-choked mining world of the Ultima Segmentum, whose dying industrial society Fulgrim saved and led to prosperity; its capital Callax is the heart of the Emperor's Children's recruiting."
   }
  },
  "diamat": {
   "name": "Diamat",
   "type": "Forge World",
   "desc": "Forge World in the Tanagra system (Ultima Segmentum).",
   "era30k": {
    "type": "Forge World, contested",
    "desc": "Early in the Heresy traitor forces moved to seize Diamat's armouries; Lion El'Jonson and the Dark Angels defended it, learning there of Horus' rebellion."
   },
   "books": [
    "fallen_angels"
   ],
   "safe30k": {
    "type": "Forge World",
    "desc": "Forge World of the Mechanicum, a key source of weapons and armour for the Legions."
   }
  },
  "nuceria": {
   "name": "Nuceria",
   "type": "Dead World",
   "desc": "World in the Ultima Segmentum where Angron grew up as a gladiator slave.",
   "era30k": {
    "type": "Dead World, site of Angron's ascension",
    "desc": "During the Shadow Crusade the World Eaters made war on Nuceria, and Lorgar's ritual raised Angron to daemonhood amid the slaughter."
   },
   "books": [
    "betrayer",
    "slave_of_nuceria"
   ],
   "safe30k": {
    "type": "Gladiator World",
    "desc": "World of gladiator pits where Angron was enslaved by the High Riders and rose up with fellow slaves, before the Emperor took him away to lead the War Hounds."
   }
  },
  "signus_prime": {
   "name": "Signus Prime",
   "type": "Forbidden World",
   "desc": "Principal world of the Signus Cluster in the Ultima Segmentum.",
   "era30k": {
    "type": "Forbidden World",
    "desc": "Horus lured the Blood Angels into a trap at Signus; they fought the daemons of Khorne, the Legion's Flaw was revealed, and the cluster was later declared Mortae Perpetua."
   },
   "books": [
    "fear_to_tread"
   ],
   "safe30k": {
    "type": "Imperial World",
    "desc": "Principal world of the Signus Cluster in the Ultima Segmentum, toward which the Blood Angels are sent."
   }
  },
  "chogoris": {
   "name": "Chogoris",
   "type": "Feudal World · Chapter Planet",
   "desc": "Steppe world in the Ultima Segmentum (Yasan Sector), home of the White Scars.",
   "era30k": {
    "type": "Legion homeworld (V Legion)",
    "desc": "The homeworld remained loyal and saw no major Heresy battle; the White Scars long stayed absent from the war, debating where their loyalties lay, before they fought their way back to Terra."
   },
   "era40k": {
    "type": "Chapter Planet",
    "desc": "Still home of the White Scars."
   },
   "books": [
    "warhawk_of_chogoris"
   ],
   "safe30k": {
    "type": "Legion homeworld (V Legion)",
    "desc": "Vast steppe world where the warlord Jaghatai Khan united the tribes and overthrew the Palatine empire before the Emperor found him. It is the recruiting world of the White Scars."
   }
  },
  "sixty_three_nineteen": {
   "name": "Sixty-Three Nineteen",
   "type": "Compliant World",
   "desc": "The 19th world brought to compliance by the 63rd Expedition Fleet. Location unknown.",
   "era30k": {
    "type": "Compliant World",
    "desc": "In 001.M31 Horus and the Luna Wolves brought the world to compliance; in the fighting Captain Sejanus was killed by the false Emperor."
   },
   "books": [
    "horus_rising"
   ],
   "safe30k": {
    "type": "Compliant World (63-19)",
    "desc": "The nineteenth world of the 63rd Expedition, whose ruler claims to be the true Emperor of Mankind."
   }
  },
  "chondax": {
   "name": "Chondax",
   "type": "Ork and dead world",
   "desc": "Trinary star system at the galactic rim. Exact location unknown.",
   "era30k": {
    "type": "Ork World, cut off",
    "desc": "An Alpha Legion blockade cut the White Scars off from all news; Space Wolves arrived bearing orders for the Khan, and the two Legions came close to blows before the White Scars learned of Horus' treachery."
   },
   "books": [
    "scars"
   ],
   "safe30k": {
    "type": "Ork World (White Scars campaign)",
    "desc": "Remote trinary system at the galaxy's edge where the White Scars are hunting the last Ork holdouts, far from news of the rest of the Imperium."
   }
  },
  "armatura": {
   "name": "Armatura",
   "type": "Garrison and Forge World",
   "desc": "World in Ultramar.",
   "era30k": {
    "type": "Garrison World (Ultramar), ravaged",
    "desc": "During the Shadow Crusade Angron and the World Eaters, together with Lorgar's Word Bearers, struck Armatura and laid waste to its defences and military academies."
   },
   "books": [
    "betrayer"
   ],
   "safe30k": {
    "type": "Garrison and Forge World (Ultramar)",
    "desc": "Armoury and garrison world of Ultramar, the Five Hundred Worlds ruled by Roboute Guilliman; its manufactoria and barracks supply and train the XIII Legion and Ultramar's armies."
   }
  },
  "thramas": {
   "name": "Thramas",
   "type": "Hive World",
   "desc": "Hive World in the Thramas Sector on the edge of the Ultima Segmentum.",
   "era30k": {
    "type": "Contested sector world",
    "desc": "From 007 to 009.M31 the Night Lords and Dark Angels fought the Thramas Crusade over the sector; the Night Lords' fleet was savaged, but the campaign delayed the Lion so long that he reached Terra too late."
   },
   "books": [],
   "safe30k": {
    "type": "Hive World (Thramas Sector)",
    "desc": "Hive world of the Thramas Sector on the Eastern Fringe at the edge of the Ultima Segmentum."
   }
  },
  "sotha": {
   "name": "Sotha",
   "type": "Dead World",
   "desc": "World on the Eastern Fringe, near Ultramar.",
   "era30k": {
    "type": "Imperial World, beacon of Imperium Secundus",
    "desc": "Barabas Dantioch woke the Pharos, whose light guided ships through the Ruinstorm as a second Astronomican; the Night Lords then assaulted Sotha to take or silence it."
   },
   "books": [
    "pharos"
   ],
   "safe30k": {
    "type": "Imperial World (Eastern Fringe)",
    "desc": "Remote world near Ultramar that hides, deep in its mountain, an ancient alien device known as the Pharos."
   }
  },
  "murder": {
   "name": "Murder",
   "type": "Death World",
   "desc": "A world of the Interex, designated One-Forty Twenty by the Imperium, where the megarachnid were kept. The Luna Wolves fought there to relieve the trapped Blood Angels and the Imperial Army.",
   "books": [],
   "safe30k": {
    "type": "Death World (140-20)",
    "desc": "Death world designated One-Forty Twenty, nicknamed 'Murder' by the Imperial troops: its megarachnid swarms have trapped Blood Angels, Emperor's Children and Imperial Army forces on its surface."
   },
   "era30k": {
    "type": "Death World",
    "desc": "The Luna Wolves relieved the trapped forces; Murder turned out to be a quarantine world on which the Interex had imprisoned the megarachnids."
   }
  },
  "xenobia": {
   "name": "Xenobia",
   "type": "Civilised World",
   "desc": "A border world of the human Interex. Peace talks between the Interex and Horus broke down there after their Kinebrach weapons museum was raided.",
   "books": [],
   "safe30k": {
    "type": "Civilised World (Interex)",
    "desc": "Border world of the Interex, an advanced human civilisation that welcomes the Luna Wolves' embassy with caution because it fears the 'Kaos'."
   },
   "era30k": {
    "type": "Civilised World (Interex)",
    "desc": "While the talks were under way Erebus stole the Anathame from the Kinebrach Hall of Devices; the theft wrecked the peace and the Interex took up arms against the Imperium."
   }
  },
  "laeran": {
   "name": "Laeran",
   "type": "Ocean World",
   "desc": "An ocean world and homeworld of the xenos Laer. The Emperor's Children destroyed it, and at its temple Fulgrim took the daemon-touched Laer blade.",
   "books": [],
   "safe30k": {
    "type": "Ocean World (Laer)",
    "desc": "Ocean world of the Laer, a xenos civilisation devoted to sensation and art, which the Emperor's Children's 28th Expedition is moving to conquer."
   },
   "era30k": {
    "type": "Ocean World, purged",
    "desc": "The Emperor's Children exterminated the Laer, and in their temple Fulgrim took a daemon-haunted Laer blade, the beginning of his corruption."
   }
  },
  "sarosh": {
   "name": "Sarosh",
   "type": "Imperial World",
   "desc": "A human world that the Dark Angels brought into compliance. A betrayal there deepened the rift between Lion El'Jonson and Luther.",
   "books": [],
   "safe30k": {
    "type": "Imperial World",
    "desc": "Bureaucratic world whose rulers have asked to join the Imperium yet keep stalling the Dark Angels over the terms of compliance."
   },
   "era30k": {
    "type": "Imperial World",
    "desc": "The Saroshi secretly worshipped warp entities and struck at the Dark Angels; after the betrayal the Lion sent Luther and others home to Caliban, deepening the rift between them."
   }
  },
  "nurth": {
   "name": "Nurth",
   "type": "Compliant World",
   "desc": "A backwater world where the 670th Expedition and the Alpha Legion fought a long compliance campaign, with ancient sorcerous powers at work.",
   "books": [],
   "safe30k": {
    "type": "Compliant World (Nurth)",
    "desc": "Backwater desert world, a lost colony that refuses the Imperial Truth; the Imperial Army's 670th Expedition and the secretive Alpha Legion are fighting a long compliance campaign against its sorcerous people."
   },
   "era30k": {
    "type": "Dead World",
    "desc": "The Nurthene civilisation was annihilated in the end. Through John Grammaticus, the Cabal convinced Alpharius that siding with Horus would best serve mankind."
   }
  },
  "aghoru": {
   "name": "Aghoru",
   "type": "Desert World",
   "desc": "An arid world where the Thousand Sons and Space Wolves fought alongside each other during the Great Crusade. Magnus explored its mysterious Mountain there.",
   "books": [],
   "safe30k": {
    "type": "Compliant World (Thousand Sons)",
    "desc": "Arid fifth world of an otherwise dead system, designated 28-16 and brought into compliance by the Thousand Sons' 28th Expedition, with a small Space Wolves contingent watching alongside. Its simple people dwell in the shadow of a vast artificial Mountain that fascinates Magnus the Red."
   },
   "era30k": {
    "type": "Compliant World (Thousand Sons)",
    "desc": "Within the Mountain Magnus found a corrupted gateway into a web of warp conduits and sealed it; Khalophis woke the valley's ancient guardian Titans, which the Thousand Sons destroyed together with the Space Wolves. The episode deepened the Wolves' suspicion of the Thousand Sons' sorcery just before the Council of Nikaea."
   }
  },
  "dagonet": {
   "name": "Dagonet",
   "type": "Imperial World",
   "desc": "A world that the Officio Assassinorum's Execution Force chose as the place to ambush and kill Horus.",
   "books": [],
   "safe30k": {
    "type": "Imperial World (Taebian Stars)",
    "desc": "Keystone world of the Taebian Stars, freed by Horus from a tyrant priest-king with a single shot; its people revere him as 'the Liberator'."
   },
   "era30k": {
    "type": "Imperial World, civil war",
    "desc": "When the Heresy broke out its nobles declared for Horus and the world fell into civil war. The Officio Assassinorum's Execution Force went to Dagonet to kill Horus, but the attempt failed and all but one assassin died."
   }
  },
  "pythos": {
   "name": "Pythos",
   "type": "Death World",
   "desc": "A jungle-choked death world full of monstrous predators. Survivors of the Shattered Legions took refuge here after Isstvan V, and a warp anomaly at its heart drew daemonic forces to it.",
   "books": [],
   "safe30k": {
    "type": "Death World",
    "desc": "Jungle-choked death world teeming with monstrous predators, settled by a few hardy human colonists."
   },
   "era30k": {
    "type": "Death World",
    "desc": "Iron Hands and other Shattered Legion survivors took refuge on Pythos after Isstvan V, but a warp anomaly at its heart drew daemonic forces down on them."
   }
  },
  "traoris": {
   "name": "Traoris",
   "type": "Imperial World",
   "desc": "A ravaged world where loyalist Shattered Legion survivors and Word Bearers raced to excavate a mysterious artefact after the Dropsite Massacre.",
   "books": [],
   "safe30k": {
    "type": "Imperial World",
    "desc": "Ravaged world that holds an ancient cultist fortress and a strange relic buried beneath it."
   },
   "era30k": {
    "type": "Imperial World",
    "desc": "After the Drop Site Massacre loyalist survivors under Artellus Numeon raced Word Bearers for a fulgurite relic on Traoris; Erebus seized it and killed Dark Apostle Elias, while Numeon came to believe Vulkan still lived."
   }
  },
  "planet_of_the_sorcerers": {
   "name": "Planet of the Sorcerers",
   "type": "Daemon World",
   "desc": "The daemon world inside the Eye of Terror where the Thousand Sons fled after the burning of Prospero. It became the Legion's home and Magnus the Red's domain.",
   "books": [],
   "safe30k": {
    "type": "Daemon World",
    "desc": "A world hidden deep in the warp storms of the Eye; nothing yet ties it to any Legion."
   },
   "era30k": {
    "type": "Daemon World",
    "desc": "After Prospero burned, Magnus drew the surviving Thousand Sons into the warp; they emerged here, and the world became their new home and Magnus' domain."
   }
  },
  "thoas": {
   "name": "Thoas",
   "type": "Xenos World",
   "desc": "Heart of an ork empire spanning a dozen systems, destroyed by Roboute Guilliman and the Ultramarines during the Great Crusade.",
   "books": [],
   "safe30k": {
    "type": "Ork World",
    "desc": "Ork-held world at the heart of a rival empire that confronts Roboute Guilliman's growing realm of Ultramar."
   },
   "era30k": {
    "type": "Ork World",
    "desc": "Guilliman and the Ultramarines broke the Ork empire at Thoas during the Great Crusade. No known role in the Heresy."
   }
  },
  "dulan": {
   "name": "Dulan",
   "type": "Industrial World",
   "desc": "Red, hyper-industrial throneworld of the Faash, ringed by an iron defence halo. Conquered by the Space Wolves and Dark Angels in 870.M30.",
   "books": [],
   "safe30k": {
    "type": "Rebel World",
    "desc": "Red, heavily industrialised world of the tyrant Durath, ringed by iron defences; he has insulted the Emperor and slaughtered Imperial envoys."
   },
   "era30k": {
    "type": "Rebel World, conquered",
    "desc": "Russ swore to kill the tyrant himself, but the Lion took the fortress with his own plan and slew Durath; the furious Russ attacked his brother afterwards, a brawl that soured the Legions for decades."
   }
  },
  "morningstar": {
   "name": "Morningstar",
   "type": "Imperial World",
   "desc": "Human world wracked by magnetic storms; Magnus and Perturabo tried to evacuate it before destroying it to contain an ancient corruption.",
   "books": [],
   "safe30k": {
    "type": "Imperial World",
    "desc": "Human world wracked by magnetic storms, visited by Magnus the Red and Perturabo during a joint campaign."
   },
   "era30k": {
    "type": "Imperial World, destroyed",
    "desc": "Faced with an ancient corruption on Morningstar, Magnus and Perturabo tried to evacuate its people before destroying it."
   }
  },
  "byzas": {
   "name": "Byzas",
   "type": "Compliant World",
   "desc": "Aristocratic world ruled through byzantine politics; the first world brought to compliance by Fulgrim's 28th Expedition.",
   "books": [],
   "safe30k": {
    "type": "Compliant World (Emperor's Children)",
    "desc": "Aristocratic world of courtly intrigue, designated 28-1 as the first world of the Emperor's Children's 28th Expedition. Fulgrim set out to bring it to compliance not through massed slaughter but with only six blades."
   },
   "era30k": {
    "type": "Compliant World (Emperor's Children)",
    "desc": "A Great Crusade compliance; Byzas plays no known role in the Heresy itself."
   }
  },
  "gardinaal_prime": {
   "name": "Gardinaal Prime",
   "type": "Civilised World",
   "desc": "Capital of the eleven-world Gardinaal empire in Astrid's Necklace, crushed by Ferrus Manus and the Iron Hands in 869.M30.",
   "books": [],
   "safe30k": {
    "type": "Industrial World",
    "desc": "Capital of the eleven-world Gardinaal empire near the Dominion of Storms, whose lords defied the Imperium and resisted the Ultramarines with powerful ancient weapons until Ferrus Manus came."
   },
   "era30k": {
    "type": "Industrial World",
    "desc": "Ferrus Manus and the Iron Hands, with the Emperor's Children, crushed the Lords of Gardinaal during the Great Crusade; the world later became a model of Imperial compliance. No known role in the Heresy."
   }
  },
  "antaeum": {
   "name": "Antaeum",
   "type": "Death World",
   "desc": "Volcanic world in the Taras System where the XVIII Legion made its last stand against the orks until Vulkan arrived.",
   "books": [],
   "safe30k": {
    "type": "Death World (Taras System)",
    "desc": "Volcanic death world of the Taras System on the Great Crusade's frontier, where the Terran-born warriors of the XVIII Legion are locked in battle against a vast Ork host."
   },
   "era30k": {
    "type": "Death World (Taras System)",
    "desc": "Besieged by an immense Ork fleet, the remnants of the XVIII Legion held Antaeum until Vulkan arrived from Nocturne with new warriors and broke the greenskins, uniting Terran and Nocturnean Salamanders. A Great Crusade campaign; the world plays no known role in the Heresy itself."
   }
  },
  "muspel": {
   "name": "Muspel",
   "type": "Imperial World",
   "desc": "Rebellious world on the Northern Fringe whose population fell under the psychic domination of the xenos Khrave; liberated by the Dark Angels in 997.M30.",
   "books": [],
   "safe30k": {
    "type": "Imperial World",
    "desc": "Placid human world, brought into compliance long ago by the Blood Angels, where strange disappearances and unrest have begun to spread."
   },
   "era30k": {
    "type": "Imperial World",
    "desc": "Lion El'Jonson's Dark Angels discovered that the xenos Khrave were feeding on and controlling Muspel's population, and purged them. A Great Crusade episode."
   }
  },
  "galaspar": {
   "name": "Galaspar",
   "type": "Hive World",
   "desc": "Hive world and seat of the Order that ruled the Galaspar Cluster, brought to compliance by Mortarion's Death Guard.",
   "books": [],
   "safe30k": {
    "type": "Hive World",
    "desc": "Hive world and heart of a cluster of human worlds in the Segmentum Pacificus, brought into the Imperium by the newly named Death Guard in a grimly famous campaign."
   },
   "era30k": {
    "type": "Hive World",
    "desc": "A Great Crusade conquest by Mortarion's Death Guard; Galaspar plays no known role in the Heresy itself."
   }
  },
  "one_five_four_four": {
   "name": "One-Five-Four Four",
   "type": "Feral World",
   "desc": "Jungle world held by the eldar, later called Caldera; conquered by the Iron Hands, Death Guard and Salamanders during the Great Crusade.",
   "books": [],
   "safe30k": {
    "type": "Compliant World (154-4)",
    "desc": "Jungle world designated One-Five-Four Four, defended by human tribes and Eldar; Ferrus Manus, Mortarion and Vulkan are joined in bringing it to compliance."
   },
   "era30k": {
    "type": "Compliant World (Caldera)",
    "desc": "The three Legions conquered the world, which was renamed Caldera, but the primarchs' rivalry nearly cost Vulkan's Salamanders dearly. A Great Crusade episode."
   }
  },
  "constanix_ii": {
   "name": "Constanix II",
   "type": "Forge World",
   "desc": "Minor, isolated forge world of acid seas and barge-cities; it sided with the Word Bearers until Corax's Raven Guard retook it.",
   "books": [],
   "safe30k": {
    "type": "Forge World",
    "desc": "Minor forge world of acid seas, its people living in floating barge-cities such as Iapetus and Atlas, watched over by the Titans of Legio Nivalis."
   },
   "era30k": {
    "type": "Forge World, divided",
    "desc": "Archmagos Delvere allied Constanix II with the Word Bearers and built daemon engines; Corax infiltrated the world and, with loyalist Mechanicum and Titans, liberated the barge-city of Atlas."
   }
  },
  "carandiru": {
   "name": "Carandiru",
   "type": "Penal Colony",
   "desc": "Prison colony whose liberation by Corax's Raven Guard during the Horus Heresy is told in Ravenlord.",
   "books": [],
   "safe30k": {
    "type": "Penal Colony",
    "desc": "Isolated prison colony in the Segmentum Tempestus, a place of chains and forced labour."
   },
   "era30k": {
    "type": "Penal Colony, liberated",
    "desc": "After Isstvan V the Raven Guard, joined by loyalist Night Lords under Kasati Nuon, liberated Carandiru from traitor control in a battle remembered as the Day of Vengeance."
   }
  },
  "percepton_primus": {
   "name": "Percepton Primus",
   "type": "Imperial World",
   "desc": "Isolated world of Ultramar purged by the Word Bearers' 34th Company during the Shadow Crusade.",
   "books": [],
   "safe30k": {
    "type": "Imperial World (Ultramar)",
    "desc": "Isolated world of the Percepton system in Ultramar, garrisoned by the Ultramarines."
   },
   "era30k": {
    "type": "Imperial World (Ultramar), devastated",
    "desc": "During the Shadow Crusade the Word Bearers wrecked the Ultramarines' fleet at Percepton within minutes; the ground war raged for months until Chapter Master Decimus called down his final contingency, an orbital bombardment."
   }
  },
  "helwain": {
   "name": "Helwain",
   "type": "Dead World",
   "desc": "Desolate, ghost-haunted world where Zardu Layak seeks the Anakatis Blades.",
   "books": [],
   "safe30k": {
    "type": "Dead World",
    "desc": "Desolate, forgotten world said to be haunted, where ancient weapons, the Anakatis blades, lie hidden."
   },
   "era30k": {
    "type": "Dead World",
    "desc": "The Word Bearers' Crimson Apostle Zardu Layak travelled to Helwain to claim the Anakatis blades, a journey that tested his faith in the truths he served."
   }
  },
  "scathia": {
   "name": "Scathia",
   "type": "Civilised World",
   "desc": "Human world on the far side of the Northern Major Warp Storm, chosen as the gateway world of the Night Crusade into the Occluda Noctis. Guarded by a powerful fleet and several starbases, it refused to join the Imperium and was brought into compliance by the Imperial Fists, Dark Angels and Emperor's Children at the cost of millions of lives.",
   "safe30k": {
    "type": "Independent human world",
    "desc": "A human civilisation beyond the Northern Major Warp Storm that has survived the Age of Strife, defended by a strong fleet and starbases, and refuses to join the Imperium. It stands at the threshold of the Occluda Noctis, a shadowed region the Great Crusade has yet to conquer."
   },
   "books": []
  },
  "shanriatha": {
   "name": "Shanriatha",
   "type": "Crone World (Eye of Terror)",
   "desc": "A dead eldar world inside the Eye of Terror, once called Ycressa; the ruins of a craftworld that fled the birth of Slaanesh too late lie buried in its rust-red dust.",
   "safe30k": {
    "type": "Crone World",
    "desc": "A lifeless former eldar world deep within the Eye of Terror, its red dust plains strewn with the ruins of an ancient civilisation."
   },
   "books": []
  },
  "yarant_iii": {
   "name": "Yarant III",
   "type": "Imperial World",
   "desc": "World of the Yarant system. During the Heresy the Space Wolves were routed at Yarant, and later made a desperate stand there before the Raven Guard came to their aid.",
   "safe30k": {
    "type": "Imperial World",
    "desc": "A world of the Yarant system within the Imperium's reach in the Segmentum Solar."
   },
   "books": []
  }
 },
 "events": [
  {
   "id": "unification_wars",
   "name": "Unification Wars",
   "date": "M30",
   "sort": 30790,
   "era": "Great Crusade",
   "desc": "The Emperor unites a fractured Terra with His Thunder Warriors; Constantin Valdor leads the Custodes.",
   "planets": [
    "terra"
   ],
   "books": [
    "valdor"
   ],
   "public": true
  },
  {
   "id": "imperial_palace_coup",
   "name": "Imperial Palace Coup",
   "date": "late M30",
   "sort": 30791,
   "era": "Great Crusade",
   "desc": "Near the end of the Unification Wars, Grand Provost Marshal Uwoma Kandawire and the last Thunder Warriors rise against Valdor; the first Space Marines crush them.",
   "planets": [
    "terra"
   ],
   "books": [
    "valdor"
   ]
  },
  {
   "id": "crusade_start",
   "name": "Start of the Great Crusade",
   "date": "c. 798.M30",
   "sort": 30798,
   "era": "Great Crusade",
   "desc": "After the Treaty of Olympus with Mars, the Emperor sets out from Terra to reclaim humanity's scattered worlds.",
   "planets": [
    "terra",
    "mars"
   ],
   "books": [],
   "public": true
  },
  {
   "id": "lycaeus_uprising",
   "name": "Lycaeus Uprising",
   "date": "M30",
   "sort": 30850,
   "era": "Great Crusade",
   "desc": "Corax leads the prisoners of the moon Lycaeus against the Tech-Guilds of Kiavahr; the moon is renamed Deliverance.",
   "planets": [
    "deliverance",
    "kiavahr"
   ],
   "books": [
    "deliverance_lost"
   ]
  },
  {
   "id": "taras_defence",
   "name": "Defence of the Taras Division",
   "date": "M30",
   "sort": 30850,
   "era": "Great Crusade",
   "desc": "The Terran XVIII Legion makes a last stand against an ork horde on Antaeum until Vulkan arrives with his Nocturnean warriors and unites the Legion.",
   "planets": [
    "antaeum"
   ],
   "books": [
    "lord_of_drakes"
   ]
  },
  {
   "id": "morningstar",
   "name": "Destruction of Morningstar",
   "date": "853.M30",
   "sort": 30853,
   "era": "Great Crusade",
   "desc": "The Thousand Sons and Iron Warriors try to evacuate Morningstar as magnetic storms tear it apart; to stop the Shai-Tan entity's corruption, Magnus and Perturabo destroy the world and its evacuation fleet.",
   "planets": [
    "morningstar"
   ],
   "books": [
    "master_of_prospero"
   ]
  },
  {
   "id": "barbarus_liberation",
   "name": "Liberation of Barbarus",
   "date": "M30",
   "sort": 30860,
   "era": "Great Crusade",
   "desc": "Mortarion rises against the Overlords of the mists; the Emperor slays the last Overlord, and Mortarion takes command of the Death Guard.",
   "planets": [
    "barbarus"
   ],
   "books": [
    "buried_dagger",
    "pale_king"
   ]
  },
  {
   "id": "byzas_compliance",
   "name": "Compliance of Byzas",
   "date": "M30",
   "sort": 30860.2,
   "era": "Great Crusade",
   "desc": "Fulgrim brings Byzas into compliance with only seven warriors, nearly dying in the attempt.",
   "planets": [
    "byzas"
   ],
   "books": [
    "palatine_phoenix"
   ]
  },
  {
   "id": "night_crusade",
   "name": "Night Crusade",
   "date": "c. 860.M30",
   "sort": 30860.5,
   "era": "Great Crusade",
   "desc": "Dorn, the Lion and Fulgrim storm Scathia, the gateway into the Occluda Noctis; Horus has the Imperial Fists spearhead the conquest of the shadowed region.",
   "planets": [
    "scathia"
   ],
   "books": [
    "rogal_dorn_the_emperors_crusader"
   ]
  },
  {
   "id": "galaspar_conquest",
   "name": "Conquest of Galaspar",
   "date": "M30",
   "sort": 30862,
   "era": "Great Crusade",
   "desc": "In his first independent campaign, Mortarion wipes out the Order that enslaves Galaspar; Horus and Sanguinius are sent to judge his methods.",
   "planets": [
    "galaspar"
   ],
   "books": [
    "pale_king"
   ]
  },
  {
   "id": "gardinaal_fall",
   "name": "Fall of the Lords of Gardinaal",
   "date": "869.M30",
   "sort": 30869,
   "era": "Great Crusade",
   "desc": "After the 413th Expedition is thrown back, Ferrus Manus crushes the Gardinaal stellar empire, refusing its surrender until its Lords are dead.",
   "planets": [
    "gardinaal_prime"
   ],
   "books": [
    "gorgon_of_medusa"
   ]
  },
  {
   "id": "dulan",
   "name": "Dulan Campaign",
   "date": "870.M30",
   "sort": 30870,
   "era": "Great Crusade",
   "desc": "The Space Wolves and Dark Angels bring the Faash of Dulan to compliance; the campaign ends in the duel between Leman Russ and Lion El'Jonson.",
   "planets": [
    "dulan"
   ],
   "books": [
    "great_wolf"
   ]
  },
  {
   "id": "sarosh_compliance",
   "name": "Compliance of Sarosh",
   "date": "c. 945.M30",
   "sort": 30945,
   "era": "Great Crusade",
   "desc": "The Dark Angels, newly reinforced by Calibanite recruits, bring the world of Sarosh into the Imperium while its rulers plot against the Lion.",
   "planets": [
    "sarosh"
   ],
   "books": [
    "descent_angels"
   ]
  },
  {
   "id": "monarchia",
   "name": "Destruction of Monarchia",
   "date": "late M30",
   "sort": 30963,
   "era": "Great Crusade",
   "desc": "The Emperor has the Ultramarines raze the temple-city of Monarchia and rebukes the Word Bearers for their worship – some 43 years before Isstvan V.",
   "planets": [
    "khur"
   ],
   "books": [
    "first_heretic",
    "unburdened"
   ]
  },
  {
   "id": "thoas",
   "name": "Battle of Thoas",
   "date": "late M30",
   "sort": 30964,
   "era": "Great Crusade",
   "desc": "Guilliman destroys the last stronghold of an ork empire on Thoas, sparing the ruins of a lost human civilisation at a heavy price; he kills the Ork Emperor himself.",
   "planets": [
    "thoas"
   ],
   "books": [
    "lord_of_ultramar"
   ]
  },
  {
   "id": "pilgrimage_of_lorgar",
   "name": "Pilgrimage of Lorgar",
   "date": "c. 963–966.M30",
   "sort": 30965,
   "era": "Great Crusade",
   "desc": "Seeking a truth worthier of worship after the Emperor's rebuke, Lorgar leads the Word Bearers on a pilgrimage into the region later called the Eye of Terror, discovering Cadia along the way.",
   "planets": [
    "cadia",
    "shanriatha"
   ],
   "books": [
    "first_heretic",
    "aurelian"
   ]
  },
  {
   "id": "nostramo_destruction",
   "name": "Destruction of Nostramo",
   "date": "late M30",
   "sort": 30984,
   "era": "Great Crusade",
   "desc": "Konrad Curze destroys his homeworld from orbit after it slides back into lawlessness.",
   "planets": [
    "nostramo"
   ],
   "books": [
    "night_haunter"
   ]
  },
  {
   "id": "compliance_caldera",
   "name": "Compliance of One-Five-Four Four",
   "date": "late M30",
   "sort": 30995,
   "era": "Great Crusade",
   "desc": "The Salamanders, Iron Hands and Death Guard invade an eldar-held feral world; Vulkan's Legion fights through its jungles.",
   "planets": [
    "one_five_four_four"
   ],
   "books": [
    "promethean_sun"
   ]
  },
  {
   "id": "muspel",
   "name": "Second Compliance of Muspel",
   "date": "997.M30",
   "sort": 30997,
   "era": "Great Crusade",
   "desc": "The Lion lures the psychic Khrave out on Muspel and kills their ruler, the Autochthonar, aboard its own ship.",
   "planets": [
    "muspel"
   ],
   "books": [
    "lord_of_the_first"
   ]
  },
  {
   "id": "ullanor",
   "name": "Ullanor Crusade and Triumph",
   "date": "000.M31",
   "sort": 31000,
   "era": "Great Crusade",
   "desc": "The greatest Ork empire in the galaxy is destroyed. At the Triumph, the Emperor names Horus Warmaster and withdraws to Terra.",
   "planets": [
    "ullanor"
   ],
   "books": [
    "warhawk_of_chogoris"
   ],
   "public": true
  },
  {
   "id": "sixty_three_nineteen",
   "name": "Battle of Sixty-Three Nineteen",
   "date": "001.M31",
   "sort": 31001,
   "era": "Great Crusade",
   "desc": "Horus and the Luna Wolves topple the world's false 'Emperor'; Captain Garviel Loken slays the usurper.",
   "planets": [
    "sixty_three_nineteen"
   ],
   "books": [
    "horus_rising"
   ]
  },
  {
   "id": "nurth_campaign",
   "name": "Nurth Campaign",
   "date": "001.M31",
   "sort": 31001.1,
   "era": "Great Crusade",
   "desc": "The Alpha Legion and the Imperial Army's Geno Five-Two Chiliad fight the sorcerous Nurthene, and the Legion is drawn into contact with the alien Cabal.",
   "planets": [
    "nurth"
   ],
   "books": [
    "legion"
   ]
  },
  {
   "id": "murder_campaign",
   "name": "War on Murder",
   "date": "001.M31",
   "sort": 31001.2,
   "era": "Great Crusade",
   "desc": "The Luna Wolves reinforce an Emperor's Children force pinned down by the megarachnid hives of the world called Murder, where they first meet warriors of the Interex.",
   "planets": [
    "murder"
   ],
   "books": [
    "horus_rising"
   ]
  },
  {
   "id": "interex_war",
   "name": "War with the Interex",
   "date": "001.M31",
   "sort": 31001.3,
   "era": "Great Crusade",
   "desc": "Contact with the human Interex on Xenobia collapses into war after a theft from their Hall of Devices is blamed on the Luna Wolves.",
   "planets": [
    "xenobia"
   ],
   "books": [
    "horus_rising"
   ]
  },
  {
   "id": "nikaea",
   "name": "Council of Nikaea",
   "date": "001.M31",
   "sort": 31001.5,
   "era": "Great Crusade",
   "desc": "The Emperor forbids the Legions the use of psychic powers; the Librarius divisions are disbanded and Magnus is censured.",
   "planets": [
    "nikaea"
   ],
   "books": [
    "thousand_sons"
   ]
  },
  {
   "id": "chondax",
   "name": "Chondax Campaign",
   "date": "001–007.M31",
   "sort": 31001.8,
   "era": "Great Crusade",
   "desc": "The White Scars fight Orks for years on the galactic fringe; an Alpha Legion blockade keeps them ignorant of the Heresy's outbreak.",
   "planets": [
    "chondax"
   ],
   "books": [
    "scars"
   ]
  },
  {
   "id": "chondax_final_war",
   "name": "Last Ork War on Chondax",
   "date": "c. 006–007.M31",
   "sort": 31001.9,
   "era": "Great Crusade",
   "desc": "The White Scars hunt the last orks of the Ullanor empire across the salt plains of Chondax.",
   "planets": [
    "chondax"
   ],
   "books": [
    "brotherhood_of_the_storm"
   ]
  },
  {
   "id": "davin",
   "name": "Corruption of Horus on Davin",
   "date": "004.M31",
   "sort": 31004,
   "era": "Great Crusade",
   "desc": "On Davin's moon, Eugan Temba wounds Horus with the Anathame; while healing in the Delphos of the lodge temple, Horus is seduced by the Chaos Gods.",
   "planets": [
    "davin"
   ],
   "books": [
    "false_gods"
   ]
  },
  {
   "id": "laeran_campaign",
   "name": "Laeran Campaign",
   "date": "c. 004.M31",
   "sort": 31004.1,
   "era": "Great Crusade",
   "desc": "The Emperor's Children conquer the ocean world of the alien Laer, and Fulgrim claims a strange blade from their temple.",
   "planets": [
    "laeran"
   ],
   "books": [
    "fulgrim"
   ]
  },
  {
   "id": "olympia_decimation",
   "name": "Decimation of Olympia",
   "date": "c. 004.M31",
   "sort": 31004.2,
   "era": "Great Crusade",
   "desc": "After an uprising on Olympia, Perturabo forces the population into decimation; millions die and the world is enslaved.",
   "planets": [
    "olympia"
   ],
   "books": [
    "hammer_of_olympia"
   ]
  },
  {
   "id": "magnus_warning",
   "name": "Magnus' Warning to Terra",
   "date": "004.M31",
   "sort": 31004.7,
   "era": "Horus Heresy",
   "desc": "Magnus the Red hurls his spirit across the warp to warn the Emperor of Horus' fall, shattering the wards that protect a secret project beneath the Imperial Palace.",
   "planets": [
    "prospero",
    "terra"
   ],
   "books": [
    "thousand_sons",
    "outcast_dead"
   ]
  },
  {
   "id": "prospero",
   "name": "Burning of Prospero",
   "date": "004–005.M31",
   "sort": 31004.8,
   "era": "Horus Heresy",
   "desc": "After Magnus' forbidden warning to Terra, the Space Wolves and Custodes destroy Prospero. The Thousand Sons are torn into the Eye of Terror.",
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
   "name": "Isstvan III Atrocity",
   "date": "005.M31",
   "sort": 31005,
   "era": "Horus Heresy",
   "desc": "Horus has the loyal Marines of his Traitor Legions wiped out by virus bombardment. The open rebellion begins.",
   "planets": [
    "isstvan3"
   ],
   "books": [
    "galaxy_in_flames",
    "flight_eisenstein",
    "fulgrim"
   ]
  },
  {
   "id": "outcast_dead_escape",
   "name": "Escape of the Outcast Dead",
   "date": "005.M31",
   "sort": 31005.05,
   "era": "Horus Heresy",
   "desc": "Imprisoned legionaries from Legions suspected of treachery break out beneath the Imperial Palace and flee through the Petitioner's City with the astropath Kai Zulane.",
   "planets": [
    "terra"
   ],
   "books": [
    "outcast_dead"
   ]
  },
  {
   "id": "eisenstein_flight",
   "name": "Flight of the Eisenstein",
   "date": "005.M31",
   "sort": 31005.1,
   "era": "Horus Heresy",
   "desc": "Battle-Captain Nathaniel Garro escapes the Isstvan system aboard the frigate Eisenstein and carries the first warning of Horus' treachery to Terra.",
   "planets": [
    "isstvan3",
    "terra"
   ],
   "books": [
    "flight_eisenstein"
   ]
  },
  {
   "id": "webway_war",
   "name": "Webway War",
   "date": "M31",
   "sort": 31005.2,
   "era": "Horus Heresy",
   "desc": "Magnus' breach damages the Webway beneath the Palace; the Custodes, the Sisters of Silence and the Emperor fight invading Daemons.",
   "planets": [
    "terra"
   ],
   "books": [
    "master_of_mankind"
   ]
  },
  {
   "id": "signus",
   "name": "Signus Campaign",
   "date": "005–006.M31",
   "sort": 31005.4,
   "era": "Horus Heresy",
   "desc": "Horus lures the Blood Angels into the Signus Cluster, where they fight Daemons of Khorne and Sanguinius learns of his Legion's Flaw.",
   "planets": [
    "signus_prime"
   ],
   "books": [
    "fear_to_tread"
   ]
  },
  {
   "id": "mars_schism",
   "name": "Schism of Mars",
   "date": "from 005.M31",
   "sort": 31005.5,
   "era": "Horus Heresy",
   "desc": "Civil war within the Mechanicum between loyalists and followers of Horus.",
   "planets": [
    "mars"
   ],
   "books": [
    "mechanicum",
    "cybernetica"
   ]
  },
  {
   "id": "caliban_revolt",
   "name": "Luther's Revolt on Caliban",
   "date": "c. 005.M31",
   "sort": 31005.6,
   "era": "Horus Heresy",
   "desc": "Luther and the Dark Angels garrison on Caliban seize control of their homeworld and declare it free of the Imperium.",
   "planets": [
    "caliban"
   ],
   "books": [
    "fallen_angels"
   ]
  },
  {
   "id": "diamat",
   "name": "Battle of Diamat",
   "date": "M31",
   "sort": 31005.7,
   "era": "Horus Heresy",
   "desc": "The Dark Angels under the Lion defend the Forge World of Diamat against forces that have sided with Horus.",
   "planets": [
    "diamat"
   ],
   "books": [
    "fallen_angels"
   ]
  },
  {
   "id": "isstvan5",
   "name": "Drop Site Massacre",
   "date": "006.M31",
   "sort": 31006,
   "era": "Horus Heresy",
   "desc": "Three Legions betray their supposed allies. Ferrus Manus falls; the Iron Hands, Salamanders and Raven Guard are shattered.",
   "planets": [
    "isstvan5"
   ],
   "books": [
    "fulgrim",
    "first_heretic",
    "dropsite_massacre",
    "war_without_end",
    "eye_of_terra"
   ]
  },
  {
   "id": "corax_rescue",
   "name": "Rescue of Corax",
   "date": "006.M31",
   "sort": 31006.1,
   "era": "Horus Heresy",
   "desc": "Months after the Drop Site Massacre, a relief fleet fights its way to Isstvan V to evacuate Corax and the last Raven Guard survivors.",
   "planets": [
    "isstvan5"
   ],
   "books": [
    "deliverance_lost",
    "age_of_darkness",
    "shadows_of_treachery"
   ]
  },
  {
   "id": "search_for_vulkan",
   "name": "Search for Vulkan on Isstvan V",
   "date": "006.M31",
   "sort": 31006.1,
   "era": "Horus Heresy",
   "desc": "After the massacre, Salamanders survivors search the Urgall Depression for any trace of their primarch.",
   "planets": [
    "isstvan5"
   ],
   "books": [
    "scorched_earth"
   ]
  },
  {
   "id": "pythos_damnation",
   "name": "Damnation of Pythos",
   "date": "c. 006.M31",
   "sort": 31006.2,
   "era": "Horus Heresy",
   "desc": "Shattered Legion survivors under Captain Atticus try to turn a warp anomaly on the death world of Pythos into a weapon; the daemon Madail breaks through and claims the world and their ships.",
   "planets": [
    "pythos"
   ],
   "books": [
    "damnation_of_pythos"
   ]
  },
  {
   "id": "traitor_council_isstvan",
   "name": "Council of the Traitor Primarchs",
   "date": "006.M31",
   "sort": 31006.2,
   "era": "Horus Heresy",
   "desc": "Days after Isstvan V, Horus gathers the traitor primarchs aboard the Vengeful Spirit; Lorgar exposes the daemon wearing Fulgrim's body.",
   "planets": [
    "isstvan5"
   ],
   "books": [
    "aurelian"
   ]
  },
  {
   "id": "paramar1",
   "name": "First Battle of Paramar",
   "date": "006.M31",
   "sort": 31006.3,
   "era": "Horus Heresy",
   "desc": "The Alpha Legion, the Dark Mechanicum and the Titans of Legio Fureans seize the Forge World Paramar V, securing Horus' road to Terra.",
   "planets": [
    "paramar5"
   ],
   "books": []
  },
  {
   "id": "raven_guard_rebirth",
   "name": "Rebirth of the Raven Guard",
   "date": "006–007.M31",
   "sort": 31006.6,
   "era": "Horus Heresy",
   "desc": "Armed with gene-stock from Terra, Corax tries to rapidly rebuild his Legion on Deliverance while Alpha Legion agents work against him from the shadows.",
   "planets": [
    "deliverance",
    "terra"
   ],
   "books": [
    "deliverance_lost"
   ]
  },
  {
   "id": "second_prospero",
   "name": "Second Battle of Prospero",
   "date": "c. 007.M31",
   "sort": 31006.8,
   "era": "Horus Heresy",
   "desc": "On the ruins of Prospero, Jaghatai Khan fights Mortarion and puts down a lodge mutiny aboard his flagship; the White Scars drive off the Death Guard and declare for the Emperor.",
   "planets": [
    "prospero"
   ],
   "books": [
    "scars"
   ]
  },
  {
   "id": "furious_abyss_hunt",
   "name": "Hunt for the Furious Abyss",
   "date": "007.M31",
   "sort": 31006.9,
   "era": "Horus Heresy",
   "desc": "A small band of loyalists from several Legions pursues the Word Bearers' giant battleship Furious Abyss across the void towards Ultramar.",
   "planets": [
    "thoas",
    "macragge"
   ],
   "books": [
    "battle_for_the_abyss"
   ]
  },
  {
   "id": "calth",
   "name": "Battle of Calth",
   "date": "007.M31",
   "sort": 31007,
   "era": "Horus Heresy",
   "desc": "The Word Bearers treacherously attack the Ultramarines at Calth. The star is destabilised and the Ruinstorm is born.",
   "planets": [
    "calth"
   ],
   "books": [
    "know_no_fear",
    "mark_of_calth"
   ]
  },
  {
   "id": "underworld_war",
   "name": "Underworld War on Calth",
   "date": "007.M31",
   "sort": 31007.05,
   "era": "Horus Heresy",
   "desc": "With the surface scorched by its star, Ultramarines and Word Bearers fight on in the arcologies and caverns beneath Calth.",
   "planets": [
    "calth"
   ],
   "books": [
    "know_no_fear",
    "mark_of_calth",
    "honoured",
    "unburdened"
   ]
  },
  {
   "id": "phall",
   "name": "Battle of Phall",
   "date": "007.M31",
   "sort": 31007.1,
   "era": "Horus Heresy",
   "desc": "An Imperial Fists punitive expedition under Alexis Polux meets the Iron Warriors in the Phall System – a costly void battle with no victor.",
   "planets": [
    "phall"
   ],
   "books": [
    "shadows_of_treachery"
   ]
  },
  {
   "id": "alaxxes",
   "name": "Battle of the Alaxxes Nebula",
   "date": "007.M31",
   "sort": 31007.15,
   "era": "Horus Heresy",
   "desc": "Hunted by the Alpha Legion after Prospero, the Space Wolves fleet makes its stand in the corrosive Alaxxes Nebula.",
   "planets": [],
   "books": [
    "wolf_king"
   ]
  },
  {
   "id": "armatura_battle",
   "name": "Battle of Armatura",
   "date": "007.M31",
   "sort": 31007.2,
   "era": "Horus Heresy",
   "desc": "The World Eaters and Word Bearers strike the Ultramarines' garrison world of Armatura, where Guilliman has prepared a trap.",
   "planets": [
    "armatura"
   ],
   "books": [
    "betrayer"
   ]
  },
  {
   "id": "constanix",
   "name": "Liberation of Constanix II",
   "date": "c. 007.M31",
   "sort": 31007.2,
   "era": "Horus Heresy",
   "desc": "Corax's Raven Guard strike the forge world Constanix II, whose masters have allied with the Word Bearers.",
   "planets": [
    "constanix_ii"
   ],
   "books": [
    "corax_soulforge"
   ]
  },
  {
   "id": "shadow_crusade",
   "name": "Shadow Crusade",
   "date": "007–008.M31",
   "sort": 31007.3,
   "era": "Horus Heresy",
   "desc": "The Word Bearers and World Eaters under Lorgar and Angron ravage the worlds of Ultramar.",
   "planets": [
    "armatura",
    "macragge"
   ],
   "books": [
    "betrayer",
    "purge"
   ]
  },
  {
   "id": "percepton",
   "name": "Purge of Percepton Primus",
   "date": "007.M31",
   "sort": 31007.35,
   "era": "Horus Heresy",
   "desc": "During the Shadow Crusade the Word Bearers' 34th Company wages a long war of extermination against the Ultramarines on Percepton Primus.",
   "planets": [
    "percepton_primus"
   ],
   "books": [
    "purge"
   ]
  },
  {
   "id": "thramas",
   "name": "Thramas Crusade",
   "date": "007–009.M31",
   "sort": 31007.5,
   "era": "Horus Heresy",
   "desc": "Years of war between the Night Lords and Dark Angels over the Forge Worlds of the Thramas Sector.",
   "planets": [
    "thramas"
   ],
   "books": [
    "age_of_darkness",
    "the_primarchs",
    "shadows_of_treachery"
   ]
  },
  {
   "id": "knights_errant_founding",
   "name": "Recruitment of the Knights-Errant",
   "date": "c. 007–008.M31",
   "sort": 31007.6,
   "era": "Horus Heresy",
   "desc": "As Malcador's Agentia Primus, Nathaniel Garro gathers his first Knights-Errant: Tylos Rubio on Calth, Macer Varren, and a lost Garviel Loken on Isstvan III.",
   "planets": [
    "calth",
    "isstvan3",
    "terra"
   ],
   "books": [
    "garro"
   ]
  },
  {
   "id": "iydris",
   "name": "Fulgrim's Ascension on Iydris",
   "date": "007.M31",
   "sort": 31007.7,
   "era": "Horus Heresy",
   "desc": "Perturabo follows Fulgrim into the Eye of Terror in search of the 'Angel Exterminatus' – and Fulgrim himself becomes a Daemon Prince.",
   "planets": [
    "iydris"
   ],
   "books": [
    "angel_exterminatus"
   ]
  },
  {
   "id": "nuceria",
   "name": "Battle of Nuceria",
   "date": "008.M31",
   "sort": 31008,
   "era": "Horus Heresy",
   "desc": "At the end of the Shadow Crusade, Guilliman corners Angron on Nuceria; Lorgar elevates Angron to Daemon Prince.",
   "planets": [
    "nuceria"
   ],
   "books": [
    "betrayer"
   ]
  },
  {
   "id": "carandiru",
   "name": "Day of Vengeance on Carandiru",
   "date": "c. 008.M31",
   "sort": 31008.1,
   "era": "Horus Heresy",
   "desc": "The Raven Guard raise the prisoners of Carandiru in revolt against its traitor masters.",
   "planets": [
    "carandiru"
   ],
   "books": [
    "ravenlord"
   ]
  },
  {
   "id": "dagonet_execution_force",
   "name": "Execution Force on Dagonet",
   "date": "c. 008.M31",
   "sort": 31008.2,
   "era": "Horus Heresy",
   "desc": "The first combined Execution Force of the Officio Assassinorum lies in wait on Dagonet to kill the Warmaster.",
   "planets": [
    "dagonet"
   ],
   "books": [
    "nemesis"
   ]
  },
  {
   "id": "eirene_septimus",
   "name": "Raid on the Alpha Legion Platform",
   "date": "c. 008.M31",
   "sort": 31008.2,
   "era": "Horus Heresy",
   "desc": "The Shattered Legions crew of the Sisypheum strikes an Alpha Legion refinery platform above the acid seas of Eirene Septimus to kill Alpharius.",
   "planets": [],
   "books": [
    "seventh_serpent"
   ]
  },
  {
   "id": "traoris_strike",
   "name": "Strike on Traoris",
   "date": "c. 008.M31",
   "sort": 31008.5,
   "era": "Horus Heresy",
   "desc": "Survivors of the Drop Site Massacre under Artellus Numeon join a Cabal agent on Traoris to strike at the Word Bearers, who seek an ancient relic of the Emperor there.",
   "planets": [
    "traoris"
   ],
   "books": [
    "vulkan_lives"
   ]
  },
  {
   "id": "imperium_secundus",
   "name": "Imperium Secundus",
   "date": "009–011.M31",
   "sort": 31009,
   "era": "Horus Heresy",
   "desc": "Cut off by the Ruinstorm, Guilliman believes Terra has fallen and proclaims a second Imperium on Macragge, with Sanguinius as Emperor.",
   "planets": [
    "macragge"
   ],
   "books": [
    "unremembered_empire",
    "angels_of_caliban",
    "ruinstorm"
   ]
  },
  {
   "id": "macragge_curze",
   "name": "Night Haunter on Macragge",
   "date": "009.M31",
   "sort": 31009.1,
   "era": "Horus Heresy",
   "desc": "Konrad Curze slips onto Macragge to strike at his brothers in the heart of Guilliman's new realm.",
   "planets": [
    "macragge"
   ],
   "books": [
    "unremembered_empire"
   ]
  },
  {
   "id": "sotha",
   "name": "Battle of Sotha",
   "date": "c. 009.M31",
   "sort": 31009.2,
   "era": "Horus Heresy",
   "desc": "The Night Lords attack Sotha to destroy the Pharos, which serves Imperium Secundus as a substitute Astronomican.",
   "planets": [
    "sotha"
   ],
   "books": [
    "pharos"
   ]
  },
  {
   "id": "molech",
   "name": "Battle of Molech",
   "date": "009.M31",
   "sort": 31009.4,
   "era": "Horus Heresy",
   "desc": "Horus conquers the Knight World of Molech and enters a warp gate there, through which he gains vast new power.",
   "planets": [
    "molech"
   ],
   "books": [
    "vengeful_spirit"
   ]
  },
  {
   "id": "inwit_siege",
   "name": "Siege of Inwit",
   "date": "009–013.M31",
   "sort": 31009.6,
   "era": "Horus Heresy",
   "desc": "Traitor fleets from several Legions assault the Inwit Cluster, home of Rogal Dorn; the defenders hold firm.",
   "planets": [
    "inwit"
   ],
   "books": []
  },
  {
   "id": "vulkan_return_nocturne",
   "name": "Vulkan's Return to Nocturne",
   "date": "c. 009–010.M31",
   "sort": 31009.7,
   "era": "Horus Heresy",
   "desc": "The Pyre carries Vulkan's body through the Ruinstorm to Nocturne and destroys the pursuing Death Guard at the Draconis Gate; after Artellus Numeon's self-sacrifice, Vulkan rises again.",
   "planets": [
    "nocturne"
   ],
   "books": [
    "deathfire"
   ]
  },
  {
   "id": "fall_of_calastar",
   "name": "Fall of the Impossible City",
   "date": "c. 009–010.M31",
   "sort": 31009.8,
   "era": "Horus Heresy",
   "desc": "Calastar falls to the daemons in the webway. The Emperor leaves the Golden Throne to cover the retreat, Ra Endymion takes the daemon Drach'nyen into himself, and the Terran portal is sealed.",
   "planets": [
    "terra"
   ],
   "books": [
    "master_of_mankind"
   ]
  },
  {
   "id": "tallarn",
   "name": "Battle of Tallarn",
   "date": "010–012.M31",
   "sort": 31010,
   "era": "Horus Heresy",
   "desc": "The Iron Warriors poison Tallarn; on its surface follows the largest tank battle in human history.",
   "planets": [
    "tallarn"
   ],
   "books": [
    "tallarn",
    "tallarn_executioner",
    "tallarn_ironclad"
   ]
  },
  {
   "id": "wrought",
   "name": "Voyage to the Wrought",
   "date": "c. 010.M31",
   "sort": 31010.2,
   "era": "Horus Heresy",
   "desc": "Forgefather T'kell and the Firedrakes carry seven of Vulkan's artefacts to a secret vault, pursued by the Sons of Horus and the Dark Mechanicum.",
   "planets": [
    "nocturne"
   ],
   "books": [
    "sons_of_the_forge"
   ]
  },
  {
   "id": "pluto",
   "name": "Battle of Pluto",
   "date": "010.M31",
   "sort": 31010.5,
   "era": "Siege of Terra",
   "desc": "The Alpha Legion strikes the outer defences of the Sol System; Rogal Dorn confronts Alpharius himself.",
   "planets": [
    "pluto"
   ],
   "books": [
    "praetorian_of_dorn"
   ]
  },
  {
   "id": "dark_glass",
   "name": "White Scars' Passage of the Dark Glass",
   "date": "c. 011.M31",
   "sort": 31011.1,
   "era": "Horus Heresy",
   "desc": "Hunted by the Death Guard and Emperor's Children, the White Scars feint at the Kalium Gate and break through to Terra via the Dark Glass; Targutai Yesugei dies to open the way.",
   "planets": [
    "terra"
   ],
   "books": [
    "path_of_heaven"
   ]
  },
  {
   "id": "curze_captured",
   "name": "Capture of Konrad Curze",
   "date": "c. 011.M31",
   "sort": 31011.2,
   "era": "Horus Heresy",
   "desc": "Lion El'Jonson corners Curze on Macragge and breaks his back; after a bitter trial before Sanguinius and Guilliman, the Lion is banished but returns to become Curze's jailer.",
   "planets": [
    "macragge"
   ],
   "books": [
    "angels_of_caliban"
   ]
  },
  {
   "id": "davin_second",
   "name": "Second Battle of Davin",
   "date": "c. 011–012.M31",
   "sort": 31011.8,
   "era": "Horus Heresy",
   "desc": "Sanguinius, Guilliman and the Lion fight a daemonic host on and above Davin; Sanguinius escapes the daemon Madail, Davin is destroyed and a path through the Ruinstorm opens.",
   "planets": [
    "davin"
   ],
   "books": [
    "ruinstorm"
   ]
  },
  {
   "id": "vulkan_to_terra",
   "name": "Vulkan's Road to Terra",
   "date": "c. 012.M31",
   "sort": 31012.1,
   "era": "Horus Heresy",
   "desc": "The reborn Vulkan leaves Nocturne, joins Shadrak Meduson's Shattered Legions for a time, then travels the webway with Eldrad Ulthran to reach the Throneworld.",
   "planets": [
    "nocturne",
    "terra"
   ],
   "books": [
    "old_earth"
   ]
  },
  {
   "id": "trisolian",
   "name": "Battle of Trisolian",
   "date": "012.M31",
   "sort": 31012.2,
   "era": "Horus Heresy",
   "desc": "Leman Russ boards the Vengeful Spirit and wounds Horus with the Spear of Russ, but is forced to flee gravely injured.",
   "planets": [
    "trisolian"
   ],
   "books": [
    "wolfsbane"
   ]
  },
  {
   "id": "chemos_destruction",
   "name": "Destruction of Chemos",
   "date": "012.M31",
   "sort": 31012.3,
   "era": "Horus Heresy",
   "desc": "The Dark Angels destroy Chemos, homeworld of the Emperor's Children.",
   "planets": [
    "chemos"
   ],
   "books": [
    "dreadwing"
   ]
  },
  {
   "id": "magnus_restored",
   "name": "Restoration of the Crimson King",
   "date": "c. 012.M31",
   "sort": 31012.4,
   "era": "Horus Heresy",
   "desc": "Ahriman and his brothers gather the scattered shards of Magnus's soul; made whole, Magnus embraces the Ruinous Powers and resolves to join the assault on Terra.",
   "planets": [
    "planet_of_the_sorcerers",
    "aghoru",
    "nikaea",
    "terra"
   ],
   "books": [
    "crimson_king"
   ]
  },
  {
   "id": "yarant",
   "name": "Rescue at Yarant III",
   "date": "c. 012.M31",
   "sort": 31012.4,
   "era": "Horus Heresy",
   "desc": "Corax's Raven Guard and Raptors come to the aid of the cornered Space Wolves and their gravely wounded primarch on Yarant III.",
   "planets": [
    "yarant_iii"
   ],
   "books": [
    "weregeld"
   ]
  },
  {
   "id": "beta_garmon",
   "name": "Beta-Garmon Campaign",
   "date": "006–013.M31",
   "sort": 31012.5,
   "era": "Horus Heresy",
   "desc": "The long struggle for the gateway to the Segmentum Solar culminates in the 'Titandeath' at Nyrcon – Horus triumphs and the road to Terra lies open.",
   "planets": [
    "beta_garmon2"
   ],
   "books": [
    "titandeath"
   ]
  },
  {
   "id": "keeler_hunt",
   "name": "Hunt for Euphrati Keeler",
   "date": "c. 013.M31",
   "sort": 31013.1,
   "era": "Horus Heresy",
   "desc": "Garro searches Terra for the living saint while assassins in Horus' service close in on her.",
   "planets": [
    "terra"
   ],
   "books": [
    "garro_vow_of_faith"
   ]
  },
  {
   "id": "solar_war",
   "name": "Solar War",
   "date": "010–014.M31",
   "sort": 31013.5,
   "era": "Siege of Terra",
   "desc": "Horus' fleets fight their way through the Sol System; Dorn's defensive lines on the outer planets fall.",
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
   "id": "horus_reawakened",
   "name": "Reawakening of the Warmaster",
   "date": "c. 013–014.M31",
   "sort": 31013.6,
   "era": "Horus Heresy",
   "desc": "Maloghurst gives his life in a warp ritual to return the comatose Horus's soul to his body; the Warmaster wakes wholly in the grip of the Chaos Gods.",
   "planets": [],
   "books": [
    "slaves_to_darkness"
   ]
  },
  {
   "id": "charchera",
   "name": "Ambush at Charchera",
   "date": "c. 013–014.M31",
   "sort": 31013.6,
   "era": "Horus Heresy",
   "desc": "Iron Warriors under Warsmith Khrossus try to delay Guilliman's fleet in the Charchera System on its way to Terra.",
   "planets": [],
   "books": [
    "spear_of_ultramar"
   ]
  },
  {
   "id": "passage_of_angels",
   "name": "Dark Angels' Campaign of Annihilation",
   "date": "c. 013–014.M31",
   "sort": 31013.7,
   "era": "Horus Heresy",
   "desc": "After the Ruinstorm, the Lion leads the Dark Angels against the worlds of the traitor Legions while his lieutenants question his purpose.",
   "planets": [],
   "books": [
    "dreadwing"
   ]
  },
  {
   "id": "death_guard_damnation",
   "name": "Damnation of the Death Guard",
   "date": "c. 014.M31",
   "sort": 31013.8,
   "era": "Horus Heresy",
   "desc": "Becalmed in the warp on the way to Terra, the Death Guard are ravaged by plague sown through Typhon's sabotage; Mortarion gives himself and his Legion to Nurgle.",
   "planets": [],
   "books": [
    "buried_dagger"
   ]
  },
  {
   "id": "fall_of_luna",
   "name": "Fall of Luna",
   "date": "014.M31",
   "sort": 31013.8,
   "era": "Siege of Terra",
   "desc": "At the climax of the Solar War a warp rift opens over Luna; the battle barge War Oath rams the lunar defence ring and Abaddon storms the moon's gene-labs.",
   "planets": [
    "luna"
   ],
   "books": [
    "solar_war"
   ]
  },
  {
   "id": "magna_mater_raid",
   "name": "Raid for the Magna Mater",
   "date": "014.M31",
   "sort": 31013.9,
   "era": "Siege of Terra",
   "desc": "On traitor-held Luna, the Shattered Legions crew of the Sisypheum answers a Selenar distress call and fights to carry off a hidden relic of primarch gene-craft.",
   "planets": [
    "luna"
   ],
   "books": [
    "sons_of_the_selenar"
   ]
  },
  {
   "id": "grey_knights_founding",
   "name": "Founding of the Grey Knights",
   "date": "c. 014.M31",
   "sort": 31013.95,
   "era": "Horus Heresy",
   "desc": "As the Traitor fleets enter the Sol System, Malcador presents nine Knights-Errant to the Emperor; Loken refuses and the other eight go to Titan as the first Grey Knights.",
   "planets": [
    "titan",
    "terra"
   ],
   "books": [
    "buried_dagger"
   ]
  },
  {
   "id": "siege_terra",
   "name": "Siege of Terra",
   "date": "014.M31",
   "sort": 31014,
   "era": "Siege of Terra",
   "desc": "The climax of the Heresy: Horus' armies besiege the Imperial Palace. It ends with Horus' death and the Emperor on the Golden Throne.",
   "planets": [
    "terra",
    "mars"
   ],
   "books": [
    "end_and_death_volume_iii",
    "era_of_ruin"
   ]
  },
  {
   "id": "bombardment_of_terra",
   "name": "Bombardment of Terra",
   "date": "014.M31",
   "sort": 31014,
   "era": "Siege of Terra",
   "desc": "On the thirteenth day of Secundus the traitor fleet begins bombarding Terra, and a vast ground war erupts in the outer defences of the Imperial Palace.",
   "planets": [
    "terra"
   ],
   "books": [
    "lost_and_damned"
   ]
  },
  {
   "id": "angron_planetfall",
   "name": "Angron's Planetfall",
   "date": "014.M31",
   "sort": 31014.05,
   "era": "Siege of Terra",
   "desc": "Angron crashes onto Terra like a meteor and fights his way to the Palace walls, where Sanguinius declines his challenge.",
   "planets": [
    "terra"
   ],
   "books": [
    "lost_and_damned"
   ]
  },
  {
   "id": "fall_lions_gate",
   "name": "Fall of the Lion's Gate Spaceport",
   "date": "014.M31",
   "sort": 31014.1,
   "era": "Siege of Terra",
   "desc": "Perturabo's Iron Warriors, with Khârn and Abaddon, overwhelm Fafnir Rann's defenders and seize the spaceport beside the Palace.",
   "planets": [
    "terra"
   ],
   "books": [
    "first_wall"
   ]
  },
  {
   "id": "saturnine_assault",
   "name": "Battle of the Saturnine Gate",
   "date": "014.M31",
   "sort": 31014.2,
   "era": "Siege of Terra",
   "desc": "Abaddon strikes beneath the Saturnine walls while Fulgrim's Emperor's Children assault the gate; Dorn's trap and his duel with Fulgrim decide the day.",
   "planets": [
    "terra"
   ],
   "books": [
    "saturnine"
   ]
  },
  {
   "id": "magnus_on_terra",
   "name": "Magnus in the Imperial Palace",
   "date": "014.M31",
   "sort": 31014.25,
   "era": "Siege of Terra",
   "desc": "Magnus the Red pushes into the Imperial Palace in search of the lost fragment of himself hidden within its inner sanctum.",
   "planets": [
    "terra"
   ],
   "books": [
    "fury_of_magnus"
   ]
  },
  {
   "id": "mercury_wall",
   "name": "Battle of the Mercury Wall",
   "date": "014.M31",
   "sort": 31014.3,
   "era": "Siege of Terra",
   "desc": "The Titans of the Legio Mortis assault the Mercury Wall, defended by their ancient rivals of the Legio Ignatum.",
   "planets": [
    "terra"
   ],
   "books": [
    "mortis"
   ]
  },
  {
   "id": "marmax_bastion",
   "name": "Garro's Stand at the Marmax Bastion",
   "date": "014.M31",
   "sort": 31014.35,
   "era": "Siege of Terra",
   "desc": "Nathaniel Garro faces Mortarion to cover Euphrati Keeler's escape from the Marmax Bastion; he dies, but leaves his primarch with a wound that will not heal.",
   "planets": [
    "terra"
   ],
   "books": [
    "garro_knight_of_grey"
   ]
  },
  {
   "id": "lions_gate",
   "name": "Retaking of the Lion's Gate Spaceport",
   "date": "014.M31",
   "sort": 31014.4,
   "era": "Siege of Terra",
   "desc": "Jaghatai Khan leads the White Scars in a counter-offensive to retake the Lion's Gate spaceport from Mortarion's Death Guard; he defeats Mortarion but is gravely wounded.",
   "planets": [
    "terra"
   ],
   "books": [
    "warhawk",
    "echoes_eternity"
   ]
  },
  {
   "id": "delphic_battlement",
   "name": "Stand at the Delphic Battlement",
   "date": "014.M31",
   "sort": 31014.5,
   "era": "Siege of Terra",
   "desc": "Sanguinius rallies the last defenders on the walls before the Eternity Gate and finally duels Angron, defeating and banishing him.",
   "planets": [
    "terra"
   ],
   "books": [
    "echoes_eternity"
   ]
  },
  {
   "id": "emperor_boards_vengeful_spirit",
   "name": "The Emperor Boards the Vengeful Spirit",
   "date": "014.M31",
   "sort": 31014.7,
   "era": "Siege of Terra",
   "desc": "Horus lowers his flagship's shields; the Emperor accepts the challenge and teleports aboard with Sanguinius, Dorn and Valdor.",
   "planets": [
    "terra"
   ],
   "books": [
    "end_and_death_volume_i",
    "end_and_death_volume_ii",
    "end_and_death_volume_iii"
   ]
  },
  {
   "id": "death_of_sanguinius",
   "name": "Death of Sanguinius",
   "date": "014.M31",
   "sort": 31014.8,
   "era": "Siege of Terra",
   "desc": "Aboard the Vengeful Spirit, Horus kills Sanguinius in the Lupercal's Court, and the Blood Angels are driven into a killing madness.",
   "planets": [
    "terra"
   ],
   "books": [
    "end_and_death_volume_ii",
    "end_and_death_volume_iii"
   ]
  },
  {
   "id": "fall_caliban",
   "name": "Fall of Caliban",
   "date": "c. 014–015.M31",
   "sort": 31015,
   "era": "Horus Heresy",
   "desc": "On the Lion's return, Luther turns against him; Caliban shatters and the Fallen are scattered through the Warp.",
   "planets": [
    "caliban"
   ],
   "books": [
    "luther_first_fallen"
   ]
  },
  {
   "id": "curze_death",
   "name": "Death of the Night Haunter",
   "date": "c. 036.M31",
   "sort": 31036,
   "era": "Horus Heresy",
   "desc": "On Tsagualsa, Konrad Curze lets the Callidus assassin M'Shen reach him, an end he foresaw long before.",
   "planets": [
    "tsagualsa"
   ],
   "books": [
    "night_haunter"
   ]
  },
  {
   "id": "battle_of_the_fang",
   "name": "First Battle of the Fang",
   "date": "M32",
   "sort": 32100,
   "era": "M32",
   "desc": "The Thousand Sons and their allies attack Fenris and besiege the Fang, fortress of the Space Wolves.",
   "planets": [
    "fenris"
   ],
   "books": [
    "battle_of_the_fang"
   ]
  },
  {
   "id": "war_of_the_beast",
   "name": "War of the Beast",
   "date": "M32",
   "sort": 32544,
   "era": "M32",
   "desc": "A vast Ork empire under 'the Beast' overruns the Imperium and threatens even Terra. The Imperial Fists are nearly wiped out.",
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
   "name": "Krieg Civil War and Atomic Fire",
   "date": "M40",
   "sort": 40450,
   "era": "M40",
   "desc": "Krieg secedes from the Imperium; only Hive Ferrograd under Colonel Jurten stays loyal. The centuries-long atomic war that follows turns Krieg into an irradiated death world.",
   "planets": [
    "krieg"
   ],
   "books": [
    "krieg_novel"
   ]
  },
  {
   "id": "gothic_war",
   "name": "Gothic War",
   "date": "139–160.M41",
   "sort": 41139,
   "era": "Gothic War",
   "desc": "Abaddon's 12th Black Crusade, wielding the Planet Killer in the Gothic Sector. His target is the Blackstone Fortresses; Abaddon seizes three but is defeated by the Imperium and the Eldar.",
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
   "name": "Destruction of Savaven",
   "date": "M41",
   "sort": 41142,
   "era": "Gothic War",
   "desc": "The Cardinal World of Savaven is the first planet destroyed by the Planet Killer.",
   "planets": [
    "savaven"
   ],
   "books": []
  },
  {
   "id": "schindlegeist",
   "name": "Battle of Schindlegeist",
   "date": "c. 160.M41",
   "sort": 41160,
   "era": "Gothic War",
   "desc": "The decisive battle of the Gothic War, in which Abaddon's fleet is beaten.",
   "planets": [
    "schindlegeist"
   ],
   "books": []
  },
  {
   "id": "eyclone_hunt",
   "name": "Eisenhorn's Hunt for Murdin Eyclone",
   "date": "240.M41",
   "sort": 41240,
   "era": "M41",
   "desc": "Inquisitor Gregor Eisenhorn corners the heretic Eyclone on Hubris and uncovers a conspiracy around the Necroteuch reaching as far as House Glaw on Gudrun.",
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
   "name": "Lord Helican's Triumph",
   "date": "241.M41",
   "sort": 41241,
   "era": "M41",
   "desc": "The triumphal parade for Lord Helican on Thracian Primaris ends in a devastating massacre. The starting point of 'Malleus'.",
   "planets": [
    "thracian_primaris"
   ],
   "books": [
    "malleus"
   ]
  },
  {
   "id": "macharian_crusade",
   "name": "Macharian Crusade",
   "date": "392–399.M41",
   "sort": 41392,
   "era": "Macharian Crusade",
   "desc": "In seven years, Lord Solar Macharius conquers over a thousand worlds on the western rim of the galaxy in the Segmentum Pacificus.",
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
   "name": "Ravenor's Investigation on Eustis Majoris",
   "date": "401–404.M41",
   "sort": 41401,
   "era": "M41",
   "desc": "Inquisitor Gideon Ravenor pursues the trade in the drug flects on Eustis Majoris and stumbles upon a far greater conspiracy.",
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
   "name": "First War for Armageddon",
   "date": "444.M41",
   "sort": 41444,
   "era": "M41",
   "desc": "Angron leads a Daemon invasion against Armageddon. The Grey Knights and Space Wolves hurl him back; the Inquisition's subsequent purge leads to the 'Months of Shame'.",
   "planets": [
    "armageddon"
   ],
   "books": [
    "emperors_gift"
   ]
  },
  {
   "id": "damocles_crusade",
   "name": "Damocles Gulf Crusade",
   "date": "742.M41",
   "sort": 41742,
   "era": "M41",
   "desc": "The Imperium's first major war against the T'au Empire. The Imperial Guard and Space Marines, the Ultramarines among them, fight for Dal'yth Prime until a truce is struck.",
   "planets": [
    "dalyth"
   ],
   "books": [
    "damocles"
   ]
  },
  {
   "id": "macragge_745",
   "name": "Battle of Macragge",
   "date": "745.M41",
   "sort": 41745,
   "era": "M41",
   "desc": "Hive Fleet Behemoth attacks Ultramar. In the First Tyrannic War, the Ultramarines' First Company falls defending the polar fortresses, but Behemoth is destroyed.",
   "planets": [
    "macragge"
   ],
   "books": []
  },
  {
   "id": "sabbat_crusade_start",
   "name": "Start of the Sabbat Worlds Crusade",
   "date": "755.M41",
   "sort": 41755,
   "era": "Sabbat Worlds Crusade",
   "desc": "Warmaster Slaydo launches the crusade to reclaim the Sabbat Worlds, overrun by Chaos around 740.M41.",
   "planets": [],
   "books": [
    "sabbat_worlds_crusade"
   ]
  },
  {
   "id": "balhaut_765",
   "name": "Battle of Balhaut",
   "date": "765.M41",
   "sort": 41765,
   "era": "Sabbat Worlds Crusade",
   "desc": "Slaydo's victory over the hosts of Chaos on Balhaut; the Warmaster then succumbs to his wounds and Macaroth succeeds him.",
   "planets": [
    "balhaut"
   ],
   "books": [
    "sabbat_worlds_crusade"
   ]
  },
  {
   "id": "tanith_fall",
   "name": "Fall of Tanith",
   "date": "765.M41",
   "sort": 41765.2,
   "era": "Sabbat Worlds Crusade",
   "desc": "Tanith is destroyed by Chaos during the Founding of its regiments. Only the Tanith First-and-Only under Commissar Ibram Gaunt escapes.",
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
   "name": "Battle for Fortis Binary",
   "date": "M41",
   "sort": 41765.5,
   "era": "Sabbat Worlds Crusade",
   "desc": "The newly founded Tanith Ghosts fight a trench war for the Chaos-held Forge World.",
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
   "name": "Menazoid Epsilon Campaign",
   "date": "M41",
   "sort": 41766,
   "era": "Sabbat Worlds Crusade",
   "desc": "The Ghosts fight for an STC facility on the death world Menazoid Epsilon; Lord General Dravere is killed.",
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
   "name": "Siege of Vervunhive",
   "date": "M41",
   "sort": 41767,
   "era": "Sabbat Worlds Crusade",
   "desc": "The Chaos warlord Heritor Asphodel attacks Vervunhive from Ferrozoica Hive. The Ghosts defend the city; Verghastite survivors join the regiment.",
   "planets": [
    "verghast"
   ],
   "books": [
    "necropolis"
   ]
  },
  {
   "id": "hagia",
   "name": "Honour Guard on Hagia",
   "date": "769.M41",
   "sort": 41769,
   "era": "Sabbat Worlds Crusade",
   "desc": "Gaunt leads an honour guard to save the relics of Saint Sabbat from the shrine on Hagia before the Infardi can seize them.",
   "planets": [
    "hagia"
   ],
   "books": [
    "honour_guard"
   ]
  },
  {
   "id": "orestes",
   "name": "Titan War on Orestes",
   "date": "M41",
   "sort": 41770,
   "era": "Sabbat Worlds Crusade",
   "desc": "Legio Invicta is drawn into a war against Chaos Titans on the Forge World Orestes, while the world's Mechanicus is divided against itself.",
   "planets": [
    "orestes"
   ],
   "books": [
    "titanicus"
   ]
  },
  {
   "id": "phantine",
   "name": "Liberation of Phantine",
   "date": "771.M41",
   "sort": 41771,
   "era": "Sabbat Worlds Crusade",
   "desc": "A campaign to retake the cloud world of Phantine and secure the Warmaster's supply lines; the Ghosts' first airborne drop.",
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
   "name": "Trench War on Aexe Cardinal",
   "date": "772.M41",
   "sort": 41772,
   "era": "Sabbat Worlds Crusade",
   "desc": "The Ghosts reinforce the Aexe Alliance in a grinding trench war against the Shadik Republic.",
   "planets": [
    "aexe_cardinal"
   ],
   "books": [
    "straight_silver"
   ]
  },
  {
   "id": "herodor",
   "name": "Defence of Herodor",
   "date": "773.M41",
   "sort": 41773,
   "era": "Sabbat Worlds Crusade",
   "desc": "The Ghosts protect a girl believed to be the reincarnation of Saint Sabbat from an attack by the Archenemy. Colonel Corbec falls.",
   "planets": [
    "herodor"
   ],
   "books": [
    "sabbat_martyr"
   ]
  },
  {
   "id": "gereon_infiltration",
   "name": "Mission to Gereon",
   "date": "774.M41",
   "sort": 41774,
   "era": "Sabbat Worlds Crusade",
   "desc": "Gaunt infiltrates occupied Gereon with a small team to assassinate the traitor general Noches Sturm.",
   "planets": [
    "gereon"
   ],
   "books": [
    "traitor_general"
   ]
  },
  {
   "id": "ancreon_sextus",
   "name": "Assault on Sparshad Mons",
   "date": "776.M41",
   "sort": 41776,
   "era": "Sabbat Worlds Crusade",
   "desc": "The battle for the step-cities of Ancreon Sextus, which prove to be Blood Pact warp gates.",
   "planets": [
    "ancreon_sextus"
   ],
   "books": [
    "his_last_command"
   ]
  },
  {
   "id": "gereon_liberation",
   "name": "Liberation of Gereon",
   "date": "777.M41",
   "sort": 41777,
   "era": "Sabbat Worlds Crusade",
   "desc": "The Ghosts aid the resistance in freeing Gereon from the Archenemy.",
   "planets": [
    "gereon"
   ],
   "books": [
    "armour_of_contempt"
   ]
  },
  {
   "id": "jago",
   "name": "Siege of Hinzerhaus",
   "date": "778.M41",
   "sort": 41778,
   "era": "Sabbat Worlds Crusade",
   "desc": "On Jago, the Ghosts hold the ancient fortress of Hinzerhaus against overwhelming Blood Pact forces.",
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
   "name": "Blood Pact Strike on Balhaut",
   "date": "780.M41",
   "sort": 41780,
   "era": "Sabbat Worlds Crusade",
   "desc": "A Blood Pact infiltration team on Balhaut attempts to eliminate a high-ranking defector.",
   "planets": [
    "balhaut"
   ],
   "books": [
    "blood_pact"
   ]
  },
  {
   "id": "salvations_reach",
   "name": "Raid on Salvation's Reach",
   "date": "781.M41",
   "sort": 41781,
   "era": "Sabbat Worlds Crusade",
   "desc": "A Tanith Ghosts commando operation against the Archenemy fortress of Salvation's Reach.",
   "planets": [
    "salvations_reach"
   ],
   "books": [
    "salvations_reach"
   ]
  },
  {
   "id": "urdesh",
   "name": "Battle of Urdesh",
   "date": "M41",
   "sort": 41782,
   "era": "Sabbat Worlds Crusade",
   "desc": "A decisive campaign led by Warmaster Macaroth in person for the Forge World Urdesh against the hosts of Anarch Sek.",
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
   "name": "Siege of Vraks",
   "date": "813–830.M41",
   "sort": 41813,
   "era": "M41",
   "desc": "After Cardinal Xaphan's apostasy, the 88th Siege Army of the Death Korps of Krieg besieges the armoury world Vraks Prime – a campaign of 17 to 18 years with millions dead.",
   "planets": [
    "vraks_prime"
   ],
   "books": [
    "siege_of_vraks"
   ]
  },
  {
   "id": "cressida",
   "name": "Evacuation of Cressida",
   "date": "M41",
   "sort": 41900,
   "era": "M41",
   "desc": "After Imperial forces are ordered to withdraw, a squad of Valhallans must rescue a stranded dignitary before the ice world is destroyed by Exterminatus.",
   "planets": [
    "cressida"
   ],
   "books": [
    "ice_guard"
   ]
  },
  {
   "id": "badab_war",
   "name": "Badab War",
   "date": "901–912.M41",
   "sort": 41901,
   "era": "M41",
   "desc": "Lufgt Huron, Chapter Master of the Astral Claws, secedes from the Imperium with allied Chapters. Years of fratricidal war between Space Marines end with the fall of Badab and Huron's flight into the Maelstrom.",
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
   "name": "Rebellion on Danik's World",
   "date": "M41",
   "sort": 41901,
   "era": "M41",
   "desc": "The Vostroyan 12th Army fights rebel PDF troops and the Venomhead Ork clan on the frozen world.",
   "planets": [
    "daniks_world"
   ],
   "books": [
    "rebel_winter"
   ]
  },
  {
   "id": "kathur",
   "name": "Reclamation of Kathur",
   "date": "M41",
   "sort": 41902,
   "era": "M41",
   "desc": "Cadian Guardsmen are sent to retake the Chaos-tainted shrine world of Kathur.",
   "planets": [
    "kathur"
   ],
   "books": [
    "cadian_blood"
   ]
  },
  {
   "id": "broucheroc",
   "name": "Ork War for Broucheroc",
   "date": "M41",
   "sort": 41903,
   "era": "M41",
   "desc": "In the frontline city of Broucheroc, contested for years, young recruit Arvin Larn tries to survive longer than fifteen hours.",
   "planets": [
    "broucheroc"
   ],
   "books": [
    "fifteen_hours"
   ]
  },
  {
   "id": "perlia_1",
   "name": "First Siege of Perlia",
   "date": "921.M41",
   "sort": 41921,
   "era": "M41",
   "desc": "Waaagh! Korbul strikes the subsector. Commissar Ciaphas Cain defends the industrial centre of Perlia with the Valhallan 12th Field Artillery.",
   "planets": [
    "perlia"
   ],
   "books": [
    "death_or_glory"
   ]
  },
  {
   "id": "gravalax",
   "name": "Gravalax Incident",
   "date": "M41",
   "sort": 41925,
   "era": "M41",
   "desc": "Ciaphas Cain and the Valhallan 597th are sent to Gravalax, which threatens to defect to the T'au Empire; an assassination attempt on the T'au envoy brings the world to the brink of war.",
   "planets": [
    "gravalax"
   ],
   "books": [
    "for_the_emperor"
   ]
  },
  {
   "id": "simia_orichalcae",
   "name": "Defence of Simia Orichalcae",
   "date": "M41",
   "sort": 41926,
   "era": "M41",
   "desc": "Cain's regiment defends a promethium refinery on the ice world against Ork raiders – and finds something worse in the ice caves.",
   "planets": [
    "simia_orichalcae"
   ],
   "books": [
    "caves_of_ice"
   ]
  },
  {
   "id": "periremunda",
   "name": "Tyranid Threat on Periremunda",
   "date": "M41",
   "sort": 41927,
   "era": "M41",
   "desc": "About a year after Simia Orichalcae, Cain's regiment is sent to secure Periremunda against an approaching Tyranid hive fleet.",
   "planets": [
    "periremunda"
   ],
   "books": [
    "duty_calls"
   ]
  },
  {
   "id": "adumbria",
   "name": "Chaos Invasion of Adumbria",
   "date": "M41",
   "sort": 41928,
   "era": "M41",
   "desc": "Cain and the Valhallan 597th defend Adumbria against a Chaos invasion.",
   "planets": [
    "adumbria"
   ],
   "books": [
    "traitors_hand"
   ]
  },
  {
   "id": "nusquam",
   "name": "Ork Uprising on Nusquam Fundumentibus",
   "date": "M41",
   "sort": 41935,
   "era": "M41",
   "desc": "Cain and the Valhallan 597th battle an Ork uprising on Nusquam Fundumentibus.",
   "planets": [
    "nusquam_fundumentibus"
   ],
   "books": [
    "last_ditch"
   ]
  },
  {
   "id": "armageddon2",
   "name": "Second War for Armageddon",
   "date": "941.M41",
   "sort": 41941,
   "era": "M41",
   "desc": "Ghazghkull Thraka attacks Armageddon. Commissar Yarrick leads the defence.",
   "planets": [
    "armageddon"
   ],
   "books": [
    "ghazghkull"
   ]
  },
  {
   "id": "kadillus",
   "name": "Battle for Kadillus Harbour",
   "date": "M41",
   "sort": 41960,
   "era": "M41",
   "desc": "The Dark Angels' 3rd Company defends Piscina IV and the city of Kadillus Harbour against an Ork invasion.",
   "planets": [
    "piscina4"
   ],
   "books": [
    "purging_of_kadillus"
   ]
  },
  {
   "id": "fall_of_damnos",
   "name": "Fall of Damnos",
   "date": "M41",
   "sort": 41970,
   "era": "M41",
   "desc": "A Necron tomb awakens on Damnos. Despite the intervention of the Ultramarines, the world is lost.",
   "planets": [
    "damnos"
   ],
   "books": [
    "fall_of_damnos"
   ]
  },
  {
   "id": "rynns_world_war",
   "name": "Rynn's World War",
   "date": "989.M41",
   "sort": 41989,
   "era": "M41",
   "desc": "Waaagh! Snagrod falls upon Rynn's World. A misfired defence missile destroys Arx Tyrannus and almost the entire Crimson Fists Chapter; the survivors fight for their home.",
   "planets": [
    "rynns_world"
   ],
   "books": [
    "rynns_world"
   ]
  },
  {
   "id": "hydra_cordatus_siege",
   "name": "Siege of Hydra Cordatus",
   "date": "late M41",
   "sort": 41990,
   "era": "M41",
   "desc": "The Iron Warriors besiege the citadel on Hydra Cordatus to seize the Space Marine gene-seed stored there. The fortress falls.",
   "planets": [
    "hydra_cordatus"
   ],
   "books": [
    "storm_of_iron"
   ]
  },
  {
   "id": "ichar4",
   "name": "Battle of Ichar IV",
   "date": "992–993.M41",
   "sort": 41992,
   "era": "M41",
   "desc": "In the Second Tyrannic War, Hive Fleet Kraken attacks Ichar IV. Under Marneus Calgar, the Ultramarines and the Imperial Guard drive the Tyranids back.",
   "planets": [
    "ichar4"
   ],
   "books": []
  },
  {
   "id": "soul_drinkers_war",
   "name": "Crusade of the Soul Drinkers",
   "date": "late M41",
   "sort": 41993,
   "era": "M41",
   "desc": "After the dispute over Rogal Dorn's Soulspear, the Soul Drinkers Chapter is excommunicated and wages its own war under Sarpedon, culminating in battles aboard the Phalanx, fortress of the Imperial Fists.",
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
   "name": "Night Lords' Return to Tsagualsa",
   "date": "late M41",
   "sort": 41995,
   "era": "M41",
   "desc": "Hunted by the Eldar of Ulthwé, Talos and his Night Lords flee to Tsagualsa, where their Primarch once died.",
   "planets": [
    "tsagualsa"
   ],
   "books": [
    "void_stalker"
   ]
  },
  {
   "id": "pavonis_nightbringer",
   "name": "Crisis on Pavonis",
   "date": "late M41",
   "sort": 41996,
   "era": "M41",
   "desc": "Uriel Ventris leads the Ultramarines' 4th Company to Pavonis and confronts a shard of the Nightbringer, one of the C'tan.",
   "planets": [
    "pavonis"
   ],
   "books": [
    "nightbringer"
   ]
  },
  {
   "id": "golgotha",
   "name": "Battles for Golgotha",
   "date": "late M41",
   "sort": 41996,
   "era": "M41",
   "desc": "Yarrick tracks Ghazghkull to Golgotha and is defeated; later a Cadian armoured company is sent to recover the wreck of the 'Fortress of Arrogance' – shortly before the Third War for Armageddon.",
   "planets": [
    "golgotha"
   ],
   "books": [
    "gunheads"
   ]
  },
  {
   "id": "octarius_war",
   "name": "Octarius War",
   "date": "from 997.M41",
   "sort": 41997,
   "era": "M41",
   "desc": "Inquisitor Kryptman diverts Hive Fleet Leviathan into the Ork empire of Octarius. The war between Tyranids and Orks makes both sides grow dangerously.",
   "planets": [
    "octarius"
   ],
   "books": [
    "octarius_rising_tide"
   ]
  },
  {
   "id": "tarsis_ultra",
   "name": "Battle of Tarsis Ultra",
   "date": "997.M41",
   "sort": 41997.3,
   "era": "M41",
   "desc": "A tendril of Hive Fleet Leviathan attacks Tarsis Ultra. Uriel Ventris defends the world at great cost and is exiled afterwards.",
   "planets": [
    "tarsis_ultra"
   ],
   "books": [
    "warriors_of_ultramar"
   ]
  },
  {
   "id": "armageddon3",
   "name": "Third War for Armageddon",
   "date": "998.M41",
   "sort": 41998,
   "era": "M41",
   "desc": "Ghazghkull returns with an even greater Waaagh!",
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
   "name": "Death Oath on Medrengard",
   "date": "late M41",
   "sort": 41998,
   "era": "M41",
   "desc": "Uriel Ventris and Pasanius fulfil their Death Oath in the Iron Warriors' fortresses on Medrengard and face Honsou.",
   "planets": [
    "medrengard"
   ],
   "books": [
    "dead_sky_black_sun"
   ]
  },
  {
   "id": "nocturne_defence",
   "name": "Defence of Nocturne",
   "date": "late M41",
   "sort": 41998.2,
   "era": "M41",
   "desc": "The Salamanders defend their homeworld Nocturne during the Time of Trial against the renegade Dragon Warriors and other attackers.",
   "planets": [
    "nocturne"
   ],
   "books": [
    "nocturne"
   ]
  },
  {
   "id": "honsou_ultramar",
   "name": "Honsou's Vengeance on Ultramar",
   "date": "late M41",
   "sort": 41998.5,
   "era": "M41",
   "desc": "The Warsmith Honsou attacks Ultramar with the Iron Warriors; heavy fighting with the Ultramarines erupts on Calth and Tarentus.",
   "planets": [
    "calth"
   ],
   "books": [
    "chapters_due"
   ]
  },
  {
   "id": "fall_cadia",
   "name": "Fall of Cadia",
   "date": "999.M41",
   "sort": 41999,
   "era": "Gathering Storm",
   "desc": "Abaddon's 13th Black Crusade destroys Cadia. Soon after, the Cicatrix Maledictum tears open.",
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
   "name": "Fracture of Biel-Tan",
   "date": "999.M41",
   "sort": 41999.1,
   "era": "Gathering Storm",
   "desc": "Daemons of Slaanesh ravage the Craftworld Biel-Tan. The Ynnari under Yvraine emerge and proclaim Ynnead, the god of the dead.",
   "planets": [
    "biel_tan"
   ],
   "books": [
    "gs_fracture_biel_tan"
   ]
  },
  {
   "id": "perlia_2",
   "name": "Second Siege of Perlia",
   "date": "999.M41",
   "sort": 41999.1,
   "era": "M41",
   "desc": "During the 13th Black Crusade, Perlia falls under the gaze of Chaos. The aged Ciaphas Cain, now a tutor at a Schola Progenium, defends the world once more.",
   "planets": [
    "perlia"
   ],
   "books": [
    "cains_last_stand"
   ]
  },
  {
   "id": "guilliman_rebirth",
   "name": "Resurrection of Guilliman",
   "date": "999.M41",
   "sort": 41999.2,
   "era": "Gathering Storm",
   "desc": "With the help of Yvraine and Belisarius Cawl, Roboute Guilliman awakens on Macragge from his ten-thousand-year stasis.",
   "planets": [
    "macragge"
   ],
   "books": [
    "gs_rise_primarch"
   ]
  },
  {
   "id": "great_rift_opens",
   "name": "Opening of the Cicatrix Maledictum",
   "date": "999.M41",
   "sort": 41999.3,
   "era": "Gathering Storm",
   "desc": "A galaxy-spanning warp storm tears open from the Eye of Terror to the eastern rim, splitting the Imperium into Sanctus and Nihilus.",
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
   "name": "Terran Crusade",
   "date": "999.M41",
   "sort": 41999.35,
   "era": "Gathering Storm",
   "desc": "Guilliman fights his way through warp storms to Terra, meets the Emperor on the Golden Throne and becomes Lord Commander of the Imperium.",
   "planets": [
    "terra"
   ],
   "books": [
    "gs_rise_primarch"
   ]
  },
  {
   "id": "baal_devastation",
   "name": "Devastation of Baal",
   "date": "999.M41",
   "sort": 41999.5,
   "era": "Gathering Storm",
   "desc": "Hive Fleet Leviathan attacks the Baal System. Under Commander Dante, the Blood Angels and their Successors face annihilation until Guilliman's reinforcements arrive.",
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
   "name": "Indomitus Crusade",
   "date": "early M42",
   "sort": 42000.2,
   "era": "Indomitus Crusade",
   "desc": "Guilliman sets out from Terra with vast fleets and the new Primaris Marines to reconquer the Imperium.",
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
   "name": "Plague Wars in Ultramar",
   "date": "early M42",
   "sort": 42001,
   "era": "Dark Imperium",
   "desc": "The Death Guard smother Ultramar in plague. The returned Roboute Guilliman leads the resistance and finally confronts Mortarion on Iax.",
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
   "name": "War of Vigilus",
   "date": "early M42",
   "sort": 42002,
   "era": "Dark Imperium",
   "desc": "Orks, Genestealer Cults and Abaddon's forces fight for control of the Nachmund Gauntlet.",
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
   "name": "Battle of Gathalamor",
   "date": "early M42",
   "sort": 42003,
   "era": "Indomitus Crusade",
   "desc": "The Indomitus Crusade reaches the shrine world of Gathalamor, where an ancient threat awakens. Mordians and the Adepta Sororitas wage a desperate ground war.",
   "planets": [
    "gathalamor"
   ],
   "books": [
    "gate_of_bones"
   ]
  },
  {
   "id": "wolftime",
   "name": "The Wolftime",
   "date": "early M42",
   "sort": 42004,
   "era": "Indomitus Crusade",
   "desc": "The Indomitus Crusade reaches Fenris. The Space Wolves struggle with accepting the Primaris Marines while the prophesied Wolftime draws near.",
   "planets": [
    "fenris"
   ],
   "books": [
    "wolftime"
   ]
  },
  {
   "id": "iron_kingdom",
   "name": "Return to Medusa",
   "date": "early M42",
   "sort": 42005,
   "era": "Indomitus Crusade",
   "desc": "A thrust of the Indomitus Crusade leads into the Imperium Nihilus to Medusa, home of the Iron Hands.",
   "planets": [
    "medusa"
   ],
   "books": [
    "iron_kingdom"
   ]
  },
  {
   "id": "psychic_awakening",
   "name": "Psychic Awakening",
   "date": "early M42",
   "sort": 42005.5,
   "era": "Dark Imperium",
   "desc": "In the shadow of the Great Rift, psychic powers awaken everywhere. Countless conflicts flare up, such as those around the Blood Angels and the Black Rage.",
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
   "name": "War in the Pariah Nexus",
   "date": "early M42",
   "sort": 42006,
   "era": "Dark Imperium",
   "desc": "In the Nephilim Sector, the Necrons raise a web of pylons that snuffs out psykers and strips humans of their souls ('the Stilling'). Battle Group Kallides pushes in, later followed by Guilliman.",
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
   "name": "War in Charadon",
   "date": "early M42",
   "sort": 42007,
   "era": "Dark Imperium",
   "desc": "Typhus and the Death Guard invade the Charadon Sector and tear open a warp rift. The Forge World Metalica becomes the flashpoint.",
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
   "name": "Assault on Ophelia VII",
   "date": "early M42",
   "sort": 42008,
   "era": "Indomitus Crusade",
   "desc": "A monster of legend threatens the Cardinal World Ophelia VII. Abbess Sanctorum Morvenn Vahl defends it while the schemes of the 'Hand of Abaddon' ripen.",
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
   "date": "early M42",
   "sort": 42009,
   "era": "Dark Imperium",
   "desc": "Abaddon and the Daemon smith Vashtorr reach with colossal ships for the fragments of a mighty key. In the end, Lion El'Jonson returns and defeats Angron.",
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
   "number": 1,
   "year": 2019,
   "format": "Novel",
   "pages": 384,
   "premise": "After seven years of civil war, Horus' armada reaches the Sol System and the final campaign of the Heresy begins. Rogal Dorn has ringed Terra with spheres of defence across the outer planets and moons, meant to bleed the traitor fleet before it can reach the Throneworld. Sigismund, Ezekyle Abaddon, the former remembrancer Mersadie Oliton and the sorcerer Ahriman are among those caught up in the opening battle for the system.",
   "summary": "Horus' armada breaks into the Sol System, and Rogal Dorn's layered spheres of defence try to bleed it on the way in. Sigismund, privately disgraced in his primarch's eyes, leads the outer line of the defence with Fafnir Rann, while Admiral Niora Su-Kassen coordinates the fleets and logistics of the defence and sees its human cost. Ezekyle Abaddon spearheads the traitor advance, boarding and destroying the White Scars battleship Lance of Heaven with Zardu Layak at his side, and broods on what his father has become. Mersadie Oliton, carrying a message meant for Garviel Loken, searches for a way back to Terra while hunted by both sides. Ahriman, meanwhile, prepares a great ritual on Horus' behalf. In the climax the ritual tears open a warp rift over Luna that lets the main traitor host bypass the remaining defences. The battle barge War Oath is sent on a suicide run into Luna's orbital defence ring, and Abaddon storms the moon and takes the Selenar gene-labs. The book ends with Dorn's void defences broken and Horus' fleet in Terra's skies, ready to begin the siege.",
   "characters": [
    "Rogal Dorn – Primarch of the Imperial Fists, Praetorian of Terra",
    "Sigismund – First Captain, Imperial Fists",
    "Fafnir Rann – Lord Seneschal, Imperial Fists",
    "Niora Su-Kassen – Admiral commanding loyalist fleet forces",
    "Ezekyle Abaddon – First Captain, Sons of Horus",
    "Zardu Layak – Word Bearers Dark Apostle, the Crimson Apostle",
    "Ahzek Ahriman – Chief Librarian of the Thousand Sons",
    "Mersadie Oliton – former remembrancer of the 63rd Expedition",
    "Horus Lupercal – Warmaster, Primarch of the Sons of Horus"
   ],
   "legions": [
    "Imperial Fists",
    "Sons of Horus",
    "Thousand Sons",
    "Word Bearers",
    "White Scars"
   ],
   "setting": "014.M31",
   "sort": 31014,
   "planets": [
    "luna",
    "terra"
   ],
   "related": [
    "lost_and_damned",
    "sons_of_the_selenar",
    "slaves_to_darkness",
    "praetorian_of_dorn"
   ]
  },
  "lost_and_damned": {
   "title": "The Lost and the Damned",
   "author": "Guy Haley",
   "series": "The Siege of Terra",
   "number": 2,
   "year": 2019,
   "format": "Novel",
   "pages": 432,
   "premise": "On the thirteenth day of Secundus the bombardment of Terra begins. Beyond the walls of the Imperial Palace a vast ground war erupts in which every metre is paid for in lives, and the outer redoubts and the Palace's great void shield must hold against the traitor host. Mortarion and Angron, now more daemon than primarch, lead the assault.",
   "summary": "With the Sol System lost, the traitor fleet begins bombarding Terra on the thirteenth day of Secundus, and the ground war breaks out in the outer defences around the Imperial Palace. Soldiers, conscripts and refugees are fed into a front where the air itself has turned to poison, while the loyalist primarchs strain to hold the outer bastions and the Aegis void shield. Horus chooses Mortarion's Death Guard rather than the World Eaters to spearhead the attack, and Angron's fury at the slight turns murderous aboard the Conqueror. To save the ship, its captain Lotara Sarrin, Khârn and the Night Lord Gendor Skraivok trap their own primarch in Perturabo's labyrinth aboard the Nightfall. Once the Emperor's psychic shield over Terra has been weakened, Angron is fired from the Nightfall and crashes onto Terra like a meteor, carving his way to the Palace walls. There he challenges Sanguinius, who only salutes him and refuses: their duel, he says, will come on another day. Abaddon grapples with the rivalries among the traitor commanders as Horus is slowly consumed by the powers he channels. As the outer defences crumble, the defenders cling to the hope that Guilliman will arrive in time.",
   "characters": [
    "Rogal Dorn – Primarch of the Imperial Fists, Praetorian of Terra",
    "Sanguinius – Primarch of the Blood Angels",
    "Raldoron – First Captain, Blood Angels",
    "Angron – Daemon Primarch of the World Eaters",
    "Khârn – Captain of the World Eaters' 8th Assault Company",
    "Lotara Sarrin – Shipmistress of the Conqueror",
    "Gendor Skraivok – Night Lords captain, 'the Painted Count'",
    "Mortarion – Daemon Primarch of the Death Guard",
    "Ezekyle Abaddon – First Captain, Sons of Horus",
    "Horus Lupercal – Warmaster"
   ],
   "legions": [
    "Imperial Fists",
    "Blood Angels",
    "White Scars",
    "Death Guard",
    "World Eaters",
    "Night Lords",
    "Imperial Army"
   ],
   "setting": "014.M31",
   "sort": 31014,
   "planets": [
    "terra"
   ],
   "related": [
    "solar_war",
    "first_wall",
    "betrayer",
    "buried_dagger"
   ]
  },
  "first_wall": {
   "title": "The First Wall",
   "author": "Gav Thorpe",
   "series": "The Siege of Terra",
   "number": 3,
   "year": 2020,
   "format": "Novel",
   "pages": 460,
   "premise": "The outer defences have fallen, but the walls of the Imperial Palace still stand. Horus orders Perturabo to take the Lion's Gate spaceport, whose capture would let the traitors land their full strength beside the Palace, and charges the Dark Apostle Zardu Layak with bringing the Neverborn onto Terra. Rogal Dorn, facing a siegebreaker worthy of him, has his own plans.",
   "summary": "Horus gives Perturabo the task of taking the Lion's Gate spaceport, which would let the traitors land their heaviest forces at the Palace's flank. Zardu Layak is given the other task: weakening the Emperor's protection over Terra so that the Neverborn can walk on its soil. Lord Seneschal Fafnir Rann commands the spaceport's defence and holds through a grinding campaign of attrition against the Iron Warriors, while Dorn and Perturabo match stratagems across the whole front. Both commanders face hard choices, and both Dorn and Horus have prepared counter-moves. The spaceport is finally overwhelmed by a massive assault led by the Iron Warrior Kroeger, Khârn of the World Eaters and Ezekyle Abaddon. Rann is wounded in a duel with Kroeger and survives only because Sigismund intervenes. With the Lion's Gate in traitor hands, Horus has his landing ground beside the Palace, and the warp begins to gain a foothold on Terra.",
   "characters": [
    "Rogal Dorn – Primarch of the Imperial Fists, Praetorian of Terra",
    "Perturabo – Primarch of the Iron Warriors",
    "Fafnir Rann – Lord Seneschal, Imperial Fists, commanding at the Lion's Gate",
    "Sigismund – First Captain, Imperial Fists",
    "Kroeger – Iron Warriors captain",
    "Khârn – Captain, World Eaters",
    "Ezekyle Abaddon – First Captain, Sons of Horus",
    "Zardu Layak – Word Bearers Dark Apostle",
    "Horus Lupercal – Warmaster"
   ],
   "legions": [
    "Imperial Fists",
    "Iron Warriors",
    "Sons of Horus",
    "World Eaters",
    "Word Bearers",
    "Daemons"
   ],
   "setting": "014.M31",
   "sort": 31014,
   "planets": [
    "terra"
   ],
   "related": [
    "lost_and_damned",
    "saturnine",
    "hammer_of_olympia",
    "angel_exterminatus"
   ]
  },
  "saturnine": {
   "title": "Saturnine",
   "author": "Dan Abnett",
   "series": "The Siege of Terra",
   "number": 4,
   "year": 2020,
   "format": "Novel",
   "pages": 560,
   "premise": "Horus' host tightens its grip on the Imperial Palace, and one by one its bastions begin to fail. Outnumbered and outgunned, Rogal Dorn cannot defend everything, so he must decide what to risk while the traitors search for a weak point in the walls. Their eyes fall on a section of the wall called Saturnine.",
   "summary": "With the outer defences lost, Perturabo's calculations point the traitors at the Saturnine sector of the Palace's Ultimate Wall. Dorn, unable to defend everything, makes hard choices to buy time for Guilliman, and founds an order of scholars to record the history of the war, and conceal it if necessary. Abaddon plans a hidden strike through a passage beneath the Saturnine walls, while Eidolon persuades Fulgrim to throw the whole Emperor's Children Legion against the Saturnine Gate as cover. The weak point is a trap laid by Dorn. In the depths, kill-squads under Garviel Loken and Nathaniel Garro ambush the Sons of Horus; Garro cuts down the possessed Justaerin captain Falkus Kibre, and Abaddon kills the Blood Angel Bel Sepatus and the loyal World Eater Endryd Har before teleporting away. On the walls Fulgrim overwhelms Sigismund and duels Dorn, who impales him, but the Daemon Primarch regenerates at once. Learning that the underground thrust has failed, Fulgrim abandons the battle, leaving his Phoenix Guard to try to assassinate Dorn, and Sigismund hurls Eidolon from the battlements. The Palace holds, but the cost and the secrets uncovered in the Palace's depths and beyond weigh on everyone.",
   "characters": [
    "Rogal Dorn – Primarch of the Imperial Fists, Praetorian of Terra",
    "Sigismund – First Captain, Imperial Fists",
    "Ezekyle Abaddon – First Captain, Sons of Horus",
    "Fulgrim – Daemon Primarch of the Emperor's Children",
    "Eidolon – Lord Commander, Emperor's Children",
    "Garviel Loken – former Luna Wolf, Knight-Errant",
    "Nathaniel Garro – former Death Guard, Knight-Errant",
    "Falkus Kibre – Captain of the Justaerin, Sons of Horus",
    "Bel Sepatus – Captain-Paladin, Blood Angels",
    "Endryd Har – loyalist World Eater"
   ],
   "legions": [
    "Imperial Fists",
    "Sons of Horus",
    "Emperor's Children",
    "Blood Angels",
    "Knights Errant"
   ],
   "setting": "014.M31",
   "sort": 31014,
   "planets": [
    "terra"
   ],
   "related": [
    "first_wall",
    "mortis",
    "fury_of_magnus",
    "eidolon_the_auric_hammer"
   ]
  },
  "mortis": {
   "title": "Mortis",
   "author": "John French",
   "series": "The Siege of Terra",
   "number": 5,
   "year": 2021,
   "format": "Novel",
   "pages": 560,
   "premise": "As the assault on the Palace grinds on, the power of Chaos waxes and the defenders' dreams pull them toward a false paradise. Horus commands the Titans of the Legio Mortis to break the walls, and against them stand the Mercury Wall and the god-engines of the Legio Ignatum. Across a nightmarish Terra, lost travellers try to find their way home.",
   "summary": "Frustrated by the Palace's resistance, Horus unleashes the Titans of the Legio Mortis against its walls. At the Mercury Wall they meet the Legio Ignatum, and the ancient rivalry between the two Titan Legions plays out in a colossal battle of god-machines. As the warp's power grows, the defenders' waking hours fill with despair and their dreams draw them toward a false paradise that is worse than death. Rogal Dorn receives a sealed order from the Emperor, and outside the Palace the Dark Angels Paladin Corswain attempts a desperate gambit that could change the course of the siege. White Scars such as Shiban Khan fight on in the ruins. The Perpetual Oll Persson leads his small band of companions through the warp and his own memories in an attempt to reach Terra. By the end the defences have been broken open and the traitor vanguard is pressing inward.",
   "characters": [
    "Rogal Dorn – Primarch of the Imperial Fists, Praetorian of Terra",
    "Corswain – Paladin and Seneschal, Dark Angels",
    "Oll Persson – Perpetual, former soldier of Old Earth",
    "John Grammaticus – Perpetual and former agent of the Cabal",
    "Shiban Khan – White Scars warrior",
    "Horus Lupercal – Warmaster"
   ],
   "legions": [
    "Legio Mortis",
    "Legio Ignatum",
    "Imperial Fists",
    "White Scars",
    "Dark Angels",
    "Daemons"
   ],
   "setting": "014.M31",
   "sort": 31014,
   "planets": [
    "terra"
   ],
   "related": [
    "saturnine",
    "warhawk",
    "fury_of_magnus",
    "titandeath"
   ]
  },
  "warhawk": {
   "title": "Warhawk",
   "author": "Chris Wraight",
   "series": "The Siege of Terra",
   "number": 6,
   "year": 2021,
   "format": "Novel",
   "pages": 480,
   "premise": "The inner walls are breached and traitor vanguards drive toward the heart of the Palace. Jaghatai Khan, the Warhawk of Chogoris, prepares the most audacious strike of the siege: a counter-offensive to free the Lion's Gate spaceport from an old enemy who has been made far greater than before. Inside the walls, desperate gambits are attempted.",
   "summary": "With the inner walls breached, Jaghatai Khan plans the boldest stroke of the siege: retaking the Lion's Gate spaceport from the newly ascended Mortarion and his Death Guard. Cut off and outnumbered, the White Scars ride out, with Shiban Khan given the task of seizing the spaceport's anti-ship batteries while the Khan goes after Mortarion himself. The Khan defeats the Daemon Primarch in a savage duel and the spaceport is retaken, but the Khan then vanishes. Believing him dead, many White Scars prepare for a ritual last stand, until Shiban and the Munitorum liaison Ilya Ravallion rally them and word comes that the primarch lives, though gravely wounded. Inside the Palace, Dorn bears the crushing weight of the defence. Sigismund takes up a black sword and gathers the warriors who will become the Templars. Euphrati Keeler is released into the ruins with a new and darker sense of her faith, and the biologis criminal Basilio Fo is set loose; Constantin Valdor, troubled by his own doubts, hunts him.",
   "characters": [
    "Jaghatai Khan – Primarch of the White Scars",
    "Shiban Khan – White Scars warrior",
    "Ilya Ravallion – Munitorum liaison to the White Scars",
    "Mortarion – Daemon Primarch of the Death Guard",
    "Rogal Dorn – Primarch of the Imperial Fists, Praetorian of Terra",
    "Sigismund – First Captain, Imperial Fists",
    "Euphrati Keeler – former remembrancer, living saint of the Lectitio Divinitatus",
    "Constantin Valdor – Captain-General of the Legio Custodes",
    "Basilio Fo – imprisoned biologis criminal"
   ],
   "legions": [
    "White Scars",
    "Death Guard",
    "Imperial Fists",
    "Legio Custodes"
   ],
   "setting": "014.M31",
   "sort": 31014,
   "planets": [
    "terra"
   ],
   "related": [
    "mortis",
    "echoes_eternity",
    "path_of_heaven",
    "garro_knight_of_grey"
   ]
  },
  "echoes_eternity": {
   "title": "Echoes of Eternity",
   "author": "Aaron Dembski-Bowden",
   "series": "The Siege of Terra",
   "number": 7,
   "year": 2022,
   "format": "Novel",
   "pages": 560,
   "premise": "The walls have fallen and the Inner Palace lies in ruins as the Warmaster's horde drives the loyalists back to the Delphic Battlement, the last walls of the Sanctum Imperialis. Angron, Herald of Horus, leads the damned while the warp begins to corrupt Terra's soil. With his brothers unable to stand beside him, Sanguinius waits on the final battlements to rally the last defenders.",
   "summary": "The Lion's Gate spaceport has been retaken, but most of the Palace has fallen and the warp has begun to remake Terra in Chaos' image. Angron, now Herald of Horus after Mortarion's defeat, leads the World Eaters and a daemonic host toward the Sanctum Imperialis. With the Khan near death, Dorn encircled at the Bhab Bastion and Guilliman seemingly too far away, Sanguinius takes command at the Delphic Battlement, the last wall before the Eternity Gate, and gathers Blood Angels, broken survivors and refugees for a final stand. Zephon, reunited with his Legion, fights alongside the techno-archaeologist Arkhan Land, and when the traitors take the Bhab Bastion he gives in to his Legion's rage as the surviving officers rally under Archamus. Sanguinius, who knows he is fated to die, finally faces Angron. The Angel defeats his brother and banishes the Daemon Primarch, holding the gate and buying the Sanctum a little more time.",
   "characters": [
    "Sanguinius – Primarch of the Blood Angels",
    "Angron – Daemon Primarch of the World Eaters, Herald of Horus",
    "Zephon – Blood Angels Dominion, 'the Bringer of Sorrow'",
    "Arkhan Land – Mechanicum techno-archaeologist",
    "Azkaellon – Commander of the Sanguinary Guard",
    "Archamus – Huscarl, master of Dorn's guard",
    "Fafnir Rann – Lord Seneschal, Imperial Fists"
   ],
   "legions": [
    "Blood Angels",
    "World Eaters",
    "Imperial Fists",
    "Daemons"
   ],
   "setting": "014.M31",
   "sort": 31014,
   "planets": [
    "terra"
   ],
   "related": [
    "warhawk",
    "end_and_death_volume_i",
    "sanguinius_the_great_angel",
    "betrayer"
   ]
  },
  "mechanicum": {
   "title": "Mechanicum",
   "author": "Graham McNeill",
   "series": "The Horus Heresy",
   "number": 9,
   "year": 2008,
   "format": "Novel",
   "pages": 415,
   "premise": "Mars, home of the Mechanicum priesthood, forges much of the weaponry the expeditionary fleets need, and whoever controls it will hold a great advantage in the coming war. As the Warmaster's agents stir rebellion, a young scribe named Dalia Cythera is brought to Mars to help build a device of extraordinary power.",
   "summary": "The novel opens with the Emperor's arrival on Mars, which the priesthood took as the coming of the Omnissiah. Generations later, Dalia Cythera, a Terran scribe with an intuitive understanding of machines, is brought to the forge Magma City by Archmagos Koriel Zeth to help build the Akashic Reader, a device intended to access all knowledge through the warp. A test of the device kills its user and gives Dalia visions of something imprisoned beneath the Martian surface. Meanwhile Fabricator General Kelbor-Hal, resentful of the Emperor's hold over Mars, accepts the offers of Horus' envoy Regulus in return for access to forbidden knowledge. When news of Isstvan arrives, the traitors unleash a corrupting scrapcode across the planet, and Titan Legions, Knight houses and forge cities turn on one another in the Schism of Mars. The loyal Legio Tempestus and the knights of House Taranis fight to defend Magma City against the Legio Mortis, while Imperial Fists sent by Rogal Dorn secure what war materiel they can. Dalia flees with companions into the depths and finds the prison of the 'Dragon of Mars', guarded by the ancient psyker Semyon, who passes his role as Guardian on to her. Zeth chooses to destroy her forge rather than let it fall to the traitors, and Mars is lost to the Dark Mechanicum.",
   "characters": [
    "Dalia Cythera – young Terran scribe and inventor",
    "Koriel Zeth – Archmagos and Mistress of Magma City",
    "Kelbor-Hal – Fabricator General of Mars",
    "Regulus – Horus' Mechanicum envoy",
    "Rho-mu 31 – Magma City's protector",
    "Caxton, Zouche and Mellicin – Dalia's companions",
    "Raf Maven – Knight of House Taranis",
    "Camulos – Princeps of the Legio Mortis",
    "Semyon – ancient Guardian of the Dragon of Mars",
    "The Emperor of Mankind"
   ],
   "legions": [
    "Mechanicum",
    "Dark Mechanicum",
    "Legio Titanicus",
    "Imperial Knights",
    "Imperial Fists"
   ],
   "setting": "005–006.M31",
   "sort": 31005,
   "planets": [
    "mars",
    "terra"
   ],
   "related": [
    "shadows_of_treachery",
    "titandeath"
   ]
  },
  "galaxy_in_flames": {
   "title": "Galaxy in Flames",
   "author": "Ben Counter",
   "series": "The Horus Heresy",
   "number": 3,
   "year": 2006,
   "format": "Novel",
   "pages": 407,
   "premise": "Recovered from his grievous wounds, the Warmaster leads four Legions against the rebel world of Isstvan III. Loyal warriors such as Garviel Loken, Saul Tarvitz and Nathaniel Garro begin to sense that the Warmaster has secret plans of his own, and the strength of their oaths will be tested as never before.",
   "summary": "Horus brings the Sons of Horus, World Eaters, Emperor's Children and Death Guard to Isstvan III, whose governor Vardus Praal has declared against the Imperium. Each primarch sends down the warriors he does not trust to follow him into rebellion, including Loken, Torgaddon and Tarvitz. Tarvitz discovers that the planet is about to be virus-bombed, and Nathaniel Garro helps him get back down to warn the loyalists, who take shelter as the life-eater virus and firestorm strip the world. The survivors rally in the ruins of the Choral City and hold out against wave after wave of traitor assaults, including Angron and his World Eaters. Inside the loyalist lines, Horus Aximand kills Tarik Torgaddon, and Abaddon and the Mournival turn on Loken, who is left for dead in the Sirenhold. Garro escapes the system aboard the Eisenstein with Iacton Qruze and remembrancers including Mersadie Oliton and Kyril Sindermann, carrying word of the treachery towards Terra. After weeks of resistance, the traitors finish the loyalists with a final bombardment; Tarvitz dies at the last stand, and Loken's fate is left uncertain. The atrocity marks the open beginning of the civil war.",
   "characters": [
    "Garviel Loken – Captain, 10th Company, Sons of Horus",
    "Saul Tarvitz – Captain, Emperor's Children",
    "Nathaniel Garro – Battle-Captain, 7th Company, Death Guard",
    "Tarik Torgaddon – Captain, 2nd Company, Sons of Horus",
    "Horus Aximand – Captain, 5th Company, Sons of Horus",
    "Ezekyle Abaddon – First Captain, Sons of Horus",
    "Horus Lupercal – Warmaster",
    "Angron – Primarch of the World Eaters",
    "Fulgrim – Primarch of the Emperor's Children",
    "Lucius – Swordsman of the Emperor's Children",
    "Iacton Qruze – 'the Half-heard', veteran of the Sons of Horus",
    "Euphrati Keeler – Remembrancer"
   ],
   "legions": [
    "Sons of Horus",
    "World Eaters",
    "Emperor's Children",
    "Death Guard"
   ],
   "setting": "005.M31",
   "sort": 31005,
   "planets": [
    "isstvan3"
   ],
   "related": [
    "false_gods",
    "flight_eisenstein",
    "fulgrim"
   ]
  },
  "flight_eisenstein": {
   "title": "The Flight of the Eisenstein",
   "author": "James Swallow",
   "series": "The Horus Heresy",
   "number": 4,
   "year": 2007,
   "format": "Novel",
   "pages": 407,
   "premise": "Battle-Captain Nathaniel Garro of the Death Guard watches with growing unease as secret lodges and strange loyalties spread through his Legion. When he learns what the Warmaster intends at Isstvan, Garro must choose between his oath to his primarch and his oath to the Emperor, and find a way to carry the truth across a galaxy in turmoil.",
   "summary": "Garro, a Barbarus-born captain who still reveres the Emperor, clashes with the ambitious Ignatius Grulgor and grows wary of the lodge led by First Captain Calas Typhon. In the Isstvan system he discovers the plan to virus-bomb Isstvan III and the loyalists on it, and Mortarion will not hear his objections. After helping Saul Tarvitz reach the surface, Garro seizes the frigate Eisenstein and escapes with loyal Death Guard, Iacton Qruze and several remembrancers, among them Euphrati Keeler. Grulgor, imprisoned aboard, is infected by a warp-born plague and rises as a daemonic horror, and the crippled frigate is assailed both by the warp and by its own corrupted passengers. Keeler's faith and the loyalists' resistance carry the ship through, and the Eisenstein limps into the Sol system. Rogal Dorn first doubts Garro's account, but the evidence of Horus' betrayal is undeniable and the first warning reaches the Emperor. At the end Garro is taken in by Malcador the Sigillite, who has a new purpose for him.",
   "characters": [
    "Nathaniel Garro – Battle-Captain, 7th Company, Death Guard",
    "Mortarion – Primarch of the Death Guard",
    "Ignatius Grulgor – Commander and Garro's rival",
    "Calas Typhon – First Captain, Death Guard",
    "Solun Decius – young Death Guard sergeant",
    "Meric Voyen – Death Guard Apothecary",
    "Euphrati Keeler – Remembrancer",
    "Iacton Qruze – Sons of Horus veteran",
    "Kaleb Arin – Garro's equerry",
    "Rogal Dorn – Primarch of the Imperial Fists",
    "Malcador the Sigillite – Regent of Terra"
   ],
   "legions": [
    "Death Guard",
    "Sons of Horus",
    "Imperial Fists",
    "Sisters of Silence"
   ],
   "setting": "005.M31",
   "sort": 31005,
   "planets": [
    "isstvan3",
    "terra"
   ],
   "related": [
    "galaxy_in_flames",
    "garro",
    "garro_knight_of_grey"
   ]
  },
  "fulgrim": {
   "title": "Fulgrim",
   "author": "Graham McNeill",
   "series": "The Horus Heresy",
   "number": 5,
   "year": 2007,
   "format": "Novel",
   "pages": 510,
   "premise": "Fulgrim and his Emperor's Children seek perfection in all things, and their crusade against the alien Laer opens new and dangerous sensations to the Legion. Meanwhile Fulgrim's bond with his brother Ferrus Manus of the Iron Hands is about to be tested by the gathering storm of the Heresy.",
   "summary": "The Emperor's Children wage war on the Laer, an alien race whose temple is drenched in excess, and Fulgrim takes a beautiful sword from its shrine; it houses a daemon of Slaanesh that begins to whisper to him. The Legion's officers, among them Eidolon, Lucius, Fabius and Julius Kaesoron, slide into indulgence, while artists such as Ostian Delafour and Serena d'Angelus are consumed by obsession. Fulgrim, who forged weapons with Ferrus Manus in earlier days, meets Horus and is won over to rebellion; he is sent to sway Ferrus but fails, and the two brothers part as enemies. Some captains, such as Solomon Demeter, remain loyal and are destroyed. At Isstvan V, the Iron Hands, Salamanders and Raven Guard land to punish the traitors, and the second wave of Legions turns on them in the Drop Site Massacre. Fulgrim beheads Ferrus Manus. Overcome by guilt, he surrenders to the daemon in his blade, which takes possession of his body while Fulgrim's soul is left trapped within a portrait. The novel ends with the Emperor's Children wholly given to Slaanesh.",
   "characters": [
    "Fulgrim – Primarch of the Emperor's Children",
    "Ferrus Manus – Primarch of the Iron Hands",
    "Saul Tarvitz – Captain, Emperor's Children",
    "Lucius – Swordsman and captain, Emperor's Children",
    "Eidolon – Lord Commander, Emperor's Children",
    "Julius Kaesoron – Captain, Emperor's Children",
    "Solomon Demeter – Captain, Emperor's Children",
    "Fabius – Apothecary, Emperor's Children",
    "Horus Lupercal – Warmaster",
    "Ostian Delafour – Remembrancer and sculptor",
    "Serena d'Angelus – Remembrancer and painter",
    "Gabriel Santar – First Captain, Iron Hands"
   ],
   "legions": [
    "Emperor's Children",
    "Iron Hands",
    "Sons of Horus"
   ],
   "setting": "004–006.M31",
   "sort": 31005,
   "planets": [
    "laeran",
    "isstvan3",
    "isstvan5"
   ],
   "related": [
    "galaxy_in_flames",
    "angel_exterminatus",
    "the_primarchs",
    "palatine_phoenix"
   ]
  },
  "false_gods": {
   "title": "False Gods",
   "author": "Graham McNeill",
   "series": "The Horus Heresy",
   "number": 2,
   "year": 2006,
   "format": "Novel",
   "pages": 406,
   "premise": "Horus has taken up the mantle of Warmaster, but rivalry and resentment simmer among his brother primarchs. When a rebellion calls him to the moon of the world Davin, the Warmaster is drawn into a battle against more than a mortal enemy, and the Luna Wolves face a test of everything they believe.",
   "summary": "Erebus of the Word Bearers reports that Eugan Temba, the governor Horus left on Davin's moon, has rebelled. Horus leads the assault in person and finds the moon rotting and Temba's dead troops risen as plague-ridden walking corpses. Aboard Temba's crashed flagship, the now grotesquely mutated governor wounds Horus with the stolen anathame, whose poison no Imperial apothecary can cure. With the Warmaster dying, Erebus persuades the Mournival to carry him to the Delphos, a temple of the Serpent Lodge on Davin. In a warp vision, Magnus the Red tries to warn Horus, but Erebus, wearing the shape of Hastur Sejanus, shows him a future in which the Emperor is worshipped as a god and the primarchs are forgotten. Horus accepts the offer of the Chaos powers and awakens healed. Warrior lodges spread through the Legion, now renamed the Sons of Horus, and Loken and Torgaddon refuse to join. Among the remembrancers, Euphrati Keeler's encounter with the daemonic turns her into a figurehead of the forbidden Lectitio Divinitatus. Horus quietly removes those who could expose him: the remembrancer Petronella Vivar is killed by his own hand, Ignace Karkasy is murdered and Lord Commander Hektor Varvaras is executed. The Warmaster then names the next target for his fleets: the Isstvan system.",
   "characters": [
    "Horus Lupercal – Warmaster, Primarch of the Luna Wolves",
    "Garviel Loken – Captain, 10th Company; member of the Mournival",
    "Tarik Torgaddon – Captain, 2nd Company; member of the Mournival",
    "Ezekyle Abaddon – First Captain",
    "Horus Aximand – Captain, 5th Company",
    "Erebus – First Chaplain of the Word Bearers",
    "Eugan Temba – rebel governor on Davin's moon",
    "Petronella Vivar – Remembrancer chosen to chronicle Horus",
    "Maggard – Petronella's bodyguard",
    "Euphrati Keeler – Remembrancer and imagist",
    "Ignace Karkasy – Remembrancer and poet",
    "Magnus the Red – Primarch of the Thousand Sons"
   ],
   "legions": [
    "Luna Wolves",
    "Sons of Horus",
    "Word Bearers"
   ],
   "setting": "004.M31",
   "sort": 31004,
   "planets": [
    "davin"
   ],
   "related": [
    "horus_rising",
    "galaxy_in_flames"
   ]
  },
  "know_no_fear": {
   "title": "Know No Fear",
   "author": "Dan Abnett",
   "series": "The Horus Heresy",
   "number": 19,
   "year": 2012,
   "format": "Novel",
   "pages": 412,
   "premise": "The Ultramarines gather in force at Calth, a jewel of Ultramar, to muster for a new campaign alongside their brothers of the Word Bearers. No word of the Warmaster's rebellion has reached them, and Roboute Guilliman has no reason to doubt the Legion arriving in his system.",
   "summary": "Guilliman assembles a huge Ultramarines force at Calth, where the Word Bearers under Kor Phaeron arrive as supposed allies. On Lorgar's orders the Word Bearers strike without warning: ships ram, orbital defence platforms are seized and turned on the planet, and the Ultramarines are thrown into chaos. Remus Ventanus fights on the surface while Guilliman leads the counter-attack from orbit. Erebus works a ritual that wounds Calth's star, Veridia, so that radiation scours the planet's surface and the warp is torn apart. Guilliman leads the counter-attack in person, fighting traitor legionaries and the daemons Erebus has summoned, and refuses to yield the system. Oll Persson, an ancient man living as a farmer on Calth, gathers a small group of survivors and opens a way out through the warp. The battle ends with Calth's surface uninhabitable, the survivors retreating into the arcology caves, and the start of the Ruinstorm that will cut Ultramar off from the Imperium.",
   "characters": [
    "Roboute Guilliman – Primarch of the Ultramarines",
    "Remus Ventanus – Captain, 4th Company, Ultramarines",
    "Marius Gage – Chapter Master, Ultramarines",
    "Kor Phaeron – Master of the Faith, Word Bearers",
    "Erebus – First Chaplain, Word Bearers",
    "Oll Persson – Perpetual living as a farmer on Calth",
    "Lorgar Aurelian – Primarch of the Word Bearers"
   ],
   "legions": [
    "Ultramarines",
    "Word Bearers",
    "Mechanicum",
    "Imperial Army"
   ],
   "setting": "007.M31",
   "sort": 31007,
   "planets": [
    "calth",
    "macragge"
   ],
   "related": [
    "battle_for_the_abyss",
    "mark_of_calth",
    "betrayer",
    "first_heretic"
   ]
  },
  "thousand_sons": {
   "title": "A Thousand Sons",
   "author": "Graham McNeill",
   "series": "The Horus Heresy",
   "number": 12,
   "year": 2010,
   "format": "Novel",
   "pages": 558,
   "premise": "Magnus the Red and his Thousand Sons seek knowledge in all things, including the arts of the warp that other Legions fear. Censured at the Council of Nikaea for their use of sorcery, they retreat to their homeworld of Prospero. But when Magnus foresees a terrible danger, he is faced with a choice that will change the fate of his Legion forever.",
   "summary": "Ahzek Ahriman and Magnus lead the Thousand Sons alongside the Space Wolves on Aghoru, where a mysterious mountain hides a warp presence, and the Wolves' contempt for sorcery grows. At the Council of Nikaea the Emperor bans the use of psychic powers and disbands the Librarius, and Magnus is censured. The Thousand Sons return to Prospero and continue their studies in secret, accompanied by remembrancers such as Lemuel Gaumon, Camille Shivani and Kallista Eris. Through the warp Magnus sees Horus' fall and, despite his father's edict, hurls his spirit across space to warn the Emperor; the projection shatters the wards of the Emperor's secret project beneath the Imperial Palace. The Emperor orders Leman Russ to bring Magnus to Terra, but Horus convinces Russ that the order means destruction. Ashamed and believing he deserves punishment, Magnus lets his Legion fight with its powers bound as the Space Wolves, Custodes and Sisters of Silence fall upon Tizca. Russ breaks Magnus' back in single combat, but at the last moment Magnus and the survivors of his Legion are carried away through the warp to a world in the Eye of Terror, where Magnus finally embraces the powers he once believed he could master.",
   "characters": [
    "Magnus the Red – Primarch of the Thousand Sons",
    "Ahzek Ahriman – Chief Librarian, Thousand Sons",
    "Lemuel Gaumon – Remembrancer",
    "Camille Shivani – Remembrancer",
    "Kallista Eris – Remembrancer and seer",
    "Leman Russ – Primarch of the Space Wolves",
    "The Emperor of Mankind",
    "Phosis T'kar – Captain, Thousand Sons",
    "Uthizzar – Captain, Thousand Sons",
    "Hathor Maat – Captain, Thousand Sons",
    "Amon – Captain of Magnus' bodyguard"
   ],
   "legions": [
    "Thousand Sons",
    "Space Wolves",
    "Legio Custodes",
    "Sisters of Silence"
   ],
   "setting": "001–004.M31",
   "sort": 31004,
   "planets": [
    "aghoru",
    "nikaea",
    "prospero",
    "terra"
   ],
   "related": [
    "prospero_burns",
    "outcast_dead",
    "crimson_king",
    "master_of_prospero"
   ]
  },
  "prospero_burns": {
   "title": "Prospero Burns",
   "author": "Dan Abnett",
   "series": "The Horus Heresy",
   "number": 15,
   "year": 2010,
   "format": "Novel",
   "pages": 444,
   "premise": "Kasper Hawser, a Terran scholar devoted to preserving lost knowledge, is taken to the death world of Fenris to live among the savage Space Wolves. As skjald of their company he records their sagas and learns their ways, while the Legion is drawn towards a fateful confrontation with the Thousand Sons.",
   "summary": "On Terra the scholar Kasper Hawser works to rescue humanity's lost knowledge, until he is attacked and decides to seek out the Space Wolves, a Legion the Imperium regards as barbaric. On Fenris he survives the ordeals of the world and is taken in by Ogvai Ogvai Helmschrot, Wolf Lord of Tra, as the company's skjald. He learns that the Wolves are not mindless killers but the Emperor's hunters, charged with confronting enemies others cannot, including the powers of the warp. Hawser accompanies them to war and witnesses the Wolves' encounters with corrupting forces. Hawser comes to realise that his road to Fenris was not entirely of his own making, and that both the Wolves and the Thousand Sons have taken an interest in him. The Wolves are sent to Prospero to bring Magnus to justice, and the novel depicts the burning of Tizca from their side, with Russ facing Magnus. Hawser learns that his true role was to observe and that Russ always knew more than he showed. The book also reveals that the Wolves' attack fits the designs of Horus and the Chaos powers.",
   "characters": [
    "Kasper Hawser – Terran scholar, later skjald of the Space Wolves",
    "Ogvai Ogvai Helmschrot – Wolf Lord of Tra, Space Wolves",
    "Leman Russ – Primarch of the Space Wolves",
    "Aun Helwintr – Rune Priest",
    "Bitur Bitursson – Space Wolves warrior and Hawser's companion",
    "Amlodhi Skarssen Skarssensson – Wolf Lord",
    "Magnus the Red – Primarch of the Thousand Sons",
    "Ahzek Ahriman – Chief Librarian, Thousand Sons"
   ],
   "legions": [
    "Space Wolves",
    "Thousand Sons",
    "Legio Custodes",
    "Sisters of Silence"
   ],
   "setting": "late M30–004.M31",
   "sort": 31004,
   "planets": [
    "terra",
    "fenris",
    "prospero"
   ],
   "related": [
    "thousand_sons",
    "wolfsbane",
    "great_wolf"
   ]
  },
  "descent_angels": {
   "title": "Descent of Angels",
   "author": "Mitchel Scanlon",
   "series": "The Horus Heresy",
   "number": 6,
   "year": 2007,
   "format": "Novel",
   "pages": 413,
   "premise": "On the forest world of Caliban, knightly orders protect the people from the monstrous beasts of the endless woods. The young Zahariel and Nemiel aspire to join the greatest of them, led by the mighty Lion El'Jonson. But the coming of the Imperium brings a new destiny for the Lion and the sons of Caliban.",
   "summary": "Zahariel and his cousin Nemiel train as aspirants of the Order, the knightly brotherhood led by Lion El'Jonson and Luther, which is waging a crusade to exterminate the Great Beasts of Caliban. Zahariel undertakes a perilous hunt for one of the beasts and joins the final war against the Knights of Lupus, who are destroyed. Soon afterwards the Emperor arrives and is revealed as the Lion's father, and Caliban is absorbed into the Imperium. In the course of the Emperor's visit, Zahariel stops an attempt on the Emperor's life. Zahariel and Nemiel are selected and transformed into Space Marines of the Dark Angels Legion, while Luther, too old to be fully remade, becomes the Lion's second. The Dark Angels then fight to bring the world of Sarosh into compliance, where the Saroshi plot to assassinate the Lion. Zahariel, now showing psychic gifts, sees that Luther hesitated to stop the plot. Afterwards the Lion sends Luther, Zahariel and many Calibanite veterans back to Caliban, ostensibly to oversee recruitment, sowing the seeds of a future rift.",
   "characters": [
    "Zahariel – Aspirant of the Order, later a Dark Angels Librarian",
    "Nemiel – Zahariel's cousin and fellow aspirant",
    "Lion El'Jonson – Master of the Order and Primarch of the Dark Angels",
    "Luther – the Lion's closest companion and second-in-command",
    "Master Remiel – Knight-master of the Order",
    "Lord Cypher – keeper of the Order's lore",
    "The Emperor of Mankind – arrives on Caliban",
    "Israfael – Dark Angels Librarian"
   ],
   "legions": [
    "Dark Angels"
   ],
   "setting": "c. 945.M30",
   "sort": 30945,
   "planets": [
    "caliban",
    "sarosh"
   ],
   "related": [
    "fallen_angels",
    "lord_of_the_first",
    "luther_first_fallen"
   ]
  },
  "fallen_angels": {
   "title": "Fallen Angels",
   "author": "Mike Lee",
   "series": "The Horus Heresy",
   "number": 11,
   "year": 2009,
   "format": "Novel",
   "pages": 412,
   "premise": "As news of Horus' treachery spreads, the Dark Angels face a time of testing both among the stars and on their homeworld. Luther, once Lion El'Jonson's trusted second, languishes on Caliban, an exile in all but name, while the Lion races to stop the traitors from seizing the forge world of Diamat. And an ancient evil gathers beneath the surface of Caliban.",
   "summary": "Luther and Zahariel spend decades on Caliban overseeing recruitment while the Imperium strips the planet's forests and crowds its people into new arcologies. A rebellion grows that Luther hides from the Lion, and when Zahariel leads a strike on a seized processing plant he finds its workers sacrificed in a warp ritual and senses a deep taint running through Caliban itself. The alien Watchers in the Dark tell him the world is doomed. Luther withdraws into the old library of the Knights of Lupus and emerges convinced that the Lion knew of the taint and sent them home to die. When the Librarian Israfael tries to remove him from command, Luther's followers strike Israfael down and Luther declares Caliban free of the Imperium; Zahariel helps him stop a second, greater ritual, dies, and is brought back by Luther's sorcery. Meanwhile, Nemiel and a Dark Angels force fight on Diamat to secure secret war engines against a Dark Mechanicum uprising, and the Lion arrives to hold the warehouse against the Sons of Horus. Unaware that Perturabo has already joined the Warmaster, the Lion hands the captured engines to the Iron Warriors primarch to use at Isstvan. Both threads end with the Dark Angels unknowingly undermined by those closest to them.",
   "characters": [
    "Zahariel – Dark Angels Librarian on Caliban",
    "Luther – Master of Caliban",
    "Nemiel – Dark Angels Chaplain at Diamat",
    "Lion El'Jonson – Primarch of the Dark Angels",
    "Lord Cypher – Keeper of the Order's lore",
    "Merir Astelan – Dark Angels Chapter Master",
    "Israfael – Dark Angels Librarian",
    "Sar Daviel – former knight turned rebel leader",
    "Perturabo – Primarch of the Iron Warriors"
   ],
   "legions": [
    "Dark Angels",
    "Sons of Horus",
    "Dark Mechanicum",
    "Iron Warriors"
   ],
   "setting": "c. 950.M30–005.M31",
   "sort": 31005,
   "planets": [
    "caliban",
    "diamat"
   ],
   "related": [
    "descent_angels",
    "angels_of_caliban",
    "luther_first_fallen"
   ]
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
   "series": "Standalone novel",
   "year": 2022
  },
  "cadia_stands": {
   "title": "Cadia Stands",
   "author": "Justin D. Hill",
   "series": "Standalone novel",
   "year": 2018
  },
  "gs_fall_cadia": {
   "title": "Gathering Storm I: Fall of Cadia",
   "author": "Games Workshop",
   "series": "Campaign book",
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
   "number": 12,
   "year": 2019,
   "format": "Novella",
   "pages": 280,
   "premise": "Of all the Emperor's sons, it is Konrad Curze whose legend is darkest: born in the shadows of the crime-ridden world of Nostramo, he became the figure of dread known as the Night Haunter. In his last days, Curze relives the path that made him a monster and a weapon of terror, from the gutters of his hive world to the moment he has long foreseen.",
   "summary": "The frame story is set around two decades after the Siege of Terra. Curze, recovered from a stasis pod by the crew of the salvage ship Sheldroon, travels with the crewman Elver to Tsagualsa, where he rejoins Night Lords under Talos Valcoran; when Elver glimpses that the primarch secretly doubts his own visions, Curze has the Night Lords dispose of him. Awaiting the assassin he knows is coming, Curze speaks to the Emperor in his madness, trying to justify himself and win a vindication his father never gave. The narrative is deliberately fragmented, jumping through memories: his crash on Nostramo and brutal survival in its darkness, his campaign of punishment against crime that made him the planet's secret ruler, the Emperor's arrival, and his years leading the Night Lords. Further memories cover his Legion's rule by terror, his growing rejection of the Imperium and his destruction of Nostramo from orbit when it slid back into lawlessness. On Tsagualsa the Night Lords build their stronghold while Curze makes no move to escape his fate. He lets the Callidus assassin M'Shen reach him so that his death will vindicate everything he believed about the Imperium. The surviving vid-log cuts out as she leaps at him, and against his last order Talos and his brothers hunt her in vengeance.",
   "characters": [
    "Konrad Curze – Primarch of the Night Lords",
    "M'Shen – Callidus assassin",
    "Elver – crewman of the salvage ship Sheldroon",
    "Talos Valcoran – Night Lords legionary, leader of First Claw",
    "Jago Sevatarion – First Captain of the Night Lords, in memories",
    "The Emperor – in memories and Curze's imagined dialogue"
   ],
   "legions": [
    "Night Lords"
   ],
   "setting": "c. 036.M31 (frame); memories span Curze's life",
   "sort": 31036,
   "planets": [
    "tsagualsa",
    "nostramo"
   ],
   "related": [
    "lord_of_shadows",
    "lord_of_the_first"
   ]
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
   "series": "Campaign book",
   "year": 2018
  },
  "vigilus_ablaze": {
   "title": "Vigilus Ablaze",
   "author": "Games Workshop",
   "series": "Campaign book",
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
   "series": "Campaign book",
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
   "series": "Campaign book",
   "year": 2017
  },
  "gs_rise_primarch": {
   "title": "Gathering Storm III: Rise of the Primarch",
   "author": "Games Workshop",
   "series": "Campaign book",
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
   "series": "Standalone novel",
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
   "series": "Campaign book",
   "year": 2019
  },
  "pa_blood_of_baal": {
   "title": "Psychic Awakening: Blood of Baal",
   "author": "Games Workshop",
   "series": "Campaign book",
   "year": 2020
  },
  "pa_ritual_of_the_damned": {
   "title": "Psychic Awakening: Ritual of the Damned",
   "author": "Games Workshop",
   "series": "Campaign book",
   "year": 2020
  },
  "pa_pariah": {
   "title": "Psychic Awakening: Pariah",
   "author": "Games Workshop",
   "series": "Campaign book",
   "year": 2020
  },
  "charadon_book_of_rust": {
   "title": "War Zone Charadon – Act I: The Book of Rust",
   "author": "Games Workshop",
   "series": "Campaign book",
   "year": 2021
  },
  "charadon_book_of_fire": {
   "title": "War Zone Charadon – Act II: The Book of Fire",
   "author": "Games Workshop",
   "series": "Campaign book",
   "year": 2021
  },
  "aoo_abaddon": {
   "title": "Arks of Omen: Abaddon",
   "author": "Games Workshop",
   "series": "Campaign book",
   "year": 2023
  },
  "aoo_angron": {
   "title": "Arks of Omen: Angron",
   "author": "Games Workshop",
   "series": "Campaign book",
   "year": 2023
  },
  "aoo_vashtorr": {
   "title": "Arks of Omen: Vashtorr",
   "author": "Games Workshop",
   "series": "Campaign book",
   "year": 2023
  },
  "aoo_lion": {
   "title": "Arks of Omen: The Lion",
   "author": "Games Workshop",
   "series": "Campaign book",
   "year": 2023
  },
  "lion_son_of_the_forest": {
   "title": "The Lion: Son of the Forest",
   "author": "Mike Brooks",
   "series": "Standalone novel",
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
   "series": "Gaunt's Ghosts (Novella)",
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
   "series": "Sabbat Worlds (background book)",
   "year": 2005
  },
  "titanicus": {
   "title": "Titanicus",
   "author": "Dan Abnett",
   "series": "Standalone novel",
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
   "series": "Standalone novel",
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
   "number": 1,
   "year": 2006,
   "format": "Novel",
   "pages": 412,
   "premise": "At the close of the Great Crusade, the Emperor has withdrawn to Terra and named his favoured son Horus Warmaster of all the Imperium's armies. Captain Garviel Loken of the Luna Wolves is drawn into the Warmaster's inner circle as the expeditionary fleets press on into the last unconquered stars, accompanied by civilian remembrancers sent to record the age.",
   "summary": "The Luna Wolves of the 63rd Expeditionary Fleet confront a human empire on the world they designate Sixty-Three Nineteen, whose ruler claims to be the true Emperor of Mankind. A parley turns into an ambush that kills Captain Hastur Sejanus, Horus' favourite, and Garviel Loken later slays the false Emperor in the assault that follows. Loken is elevated into the Mournival, Horus' circle of advisers, alongside Abaddon, Torgaddon and Aximand. During the mop-up in the Whisperhead mountains, Loken's friend Xavyer Jubal is possessed by something from the warp and Loken is forced to kill him, a first sign of powers the Imperial Truth denies. Remembrancers such as the poet Ignace Karkasy, the imagist Euphrati Keeler and the documentarist Mersadie Oliton join the fleet, and Loken befriends them. The Luna Wolves then relieve an Emperor's Children force under Eidolon, among them Captain Saul Tarvitz, besieged by the megarachnid hives of the world called Murder, and meet warriors of the Interex there. Diplomacy with the advanced, xenos-tolerant Interex on Xenobia goes well until the Word Bearer Erebus secretly steals a kinebrach blade, the anathame, from their Hall of Devices. The theft and a staged incident wreck the talks, and the novel ends with the Luna Wolves at war with a human civilisation that might have been an ally, while Loken senses that something is wrong with the Legion.",
   "characters": [
    "Garviel Loken – Captain, 10th Company, Luna Wolves",
    "Horus Lupercal – Primarch of the Luna Wolves and newly named Warmaster",
    "Ezekyle Abaddon – First Captain, Luna Wolves; member of the Mournival",
    "Tarik Torgaddon – Captain, 2nd Company; member of the Mournival",
    "Horus Aximand – Captain, 5th Company; member of the Mournival",
    "Hastur Sejanus – Captain, 4th Company, Horus' favourite son",
    "Erebus – First Chaplain of the Word Bearers",
    "Ignace Karkasy – Remembrancer and poet",
    "Euphrati Keeler – Remembrancer and imagist",
    "Mersadie Oliton – Remembrancer and documentarist",
    "Kyril Sindermann – Chief Iterator of the expedition",
    "Saul Tarvitz – Captain, Emperor's Children"
   ],
   "legions": [
    "Luna Wolves",
    "Emperor's Children"
   ],
   "setting": "000–001.M31",
   "sort": 31000,
   "planets": [
    "sixty_three_nineteen",
    "murder",
    "xenobia"
   ],
   "related": [
    "false_gods",
    "galaxy_in_flames"
   ]
  },
  "battle_for_the_abyss": {
   "title": "Battle for the Abyss",
   "author": "Ben Counter",
   "series": "The Horus Heresy",
   "number": 8,
   "year": 2008,
   "format": "Novel",
   "pages": 411,
   "premise": "News of Horus' treachery is spreading, and the Legions are choosing sides. A small band of loyal Space Marines from several Legions learns that a powerful traitor fleet, led by the most destructive warship ever built, is heading for Ultramar. Unless they can stop the Furious Abyss, the Ultramarines may suffer a blow from which they will never recover.",
   "summary": "The Furious Abyss, a giant battleship secretly built for the Word Bearers in the shipyards above Jupiter, slips out of the Sol system. Captain Cestus of the Ultramarines, travelling with a mixed group of loyal Space Wolves, World Eaters and Thousand Sons legionaries, stumbles on the conspiracy and gives chase. At a refuelling station at Thoas they are ambushed, and they learn the ship is meant to cripple the Ultramarines as they gather for their campaign. The loyalists fight a desperate running battle across the void, boarding the ship and losing comrades along the way. Distrust between the Legions, especially towards the psychic powers of the Thousand Sons legionary Mhotep, nearly breaks the group apart. In the end the loyalists, at the cost of most of their lives, destroy the Furious Abyss before it can reach Macragge, while the wider attack on Ultramar still lies ahead.",
   "characters": [
    "Cestus – Captain, Ultramarines",
    "Antiges – Ultramarines warrior and Cestus' friend",
    "Brynngar – Space Wolves Rune Priest",
    "Skraal – World Eaters legionary",
    "Mhotep – Thousand Sons legionary",
    "Zadkiel – Word Bearers Admiral of the Furious Abyss"
   ],
   "legions": [
    "Ultramarines",
    "Word Bearers",
    "Space Wolves",
    "World Eaters",
    "Thousand Sons"
   ],
   "setting": "007.M31",
   "sort": 31007,
   "planets": [
    "thoas",
    "macragge"
   ],
   "related": [
    "know_no_fear",
    "first_heretic"
   ]
  },
  "first_heretic": {
   "title": "The First Heretic",
   "author": "Aaron Dembski-Bowden",
   "series": "The Horus Heresy",
   "number": 14,
   "year": 2010,
   "format": "Novel",
   "pages": 502,
   "premise": "Lorgar and his Word Bearers worship the Emperor as a god, and for their devotion they are publicly humiliated by the Emperor himself. Shamed and bitter, the XVII Legion begins to search for a truth worth believing in. Captain Argel Tal will follow his primarch on a path that leads far beyond the Imperium.",
   "summary": "On the world of Khur, the Emperor has the Ultramarines raze the Word Bearers' perfect city of Monarchia and rebukes Lorgar for worshipping him. Custodes under Aquillon and the Sisters of Silence are attached to the Legion as observers, and Captain Argel Tal and the Chaplain Xaphen grow close to them. Urged by Kor Phaeron and Erebus, Lorgar leads a pilgrimage towards the region that will become the Eye of Terror, discovering the world later named Cadia on the way. There a being called Ingethel shows Lorgar the true powers of the warp, and Argel Tal's company is possessed and transformed into the daemon-bonded Gal Vorbak. The Custodes and Sisters are slain when they try to stop the Legion. Lorgar accepts the Chaos Gods and becomes the architect of the Heresy, bringing Horus into the plan. At the Drop Site Massacre on Isstvan V, Lorgar duels Corax, and Argel Tal confronts the cost of his choices. The novel ends with the Word Bearers bound for Calth and the next stage of their war.",
   "characters": [
    "Argel Tal – Captain, 7th Assault Company, Word Bearers",
    "Xaphen – Word Bearers Chaplain",
    "Lorgar Aurelian – Primarch of the Word Bearers",
    "Kor Phaeron – Master of the Faith",
    "Erebus – First Chaplain",
    "Aquillon – Custodian assigned to the Legion",
    "Cyrene Valantion – Khurian woman who joins Argel Tal",
    "Ingethel the Ascended – a daemon",
    "Corax – Primarch of the Raven Guard",
    "The Emperor of Mankind"
   ],
   "legions": [
    "Word Bearers",
    "Ultramarines",
    "Legio Custodes",
    "Sisters of Silence",
    "Raven Guard"
   ],
   "setting": "963.M30–006.M31",
   "sort": 30963,
   "planets": [
    "khur",
    "cadia",
    "isstvan5"
   ],
   "related": [
    "betrayer",
    "know_no_fear",
    "bearer_of_the_word"
   ]
  },
  "outcast_dead": {
   "title": "The Outcast Dead",
   "author": "Graham McNeill",
   "series": "The Horus Heresy",
   "number": 17,
   "year": 2011,
   "format": "Novel",
   "pages": 459,
   "premise": "On Terra, the astropath Kai Zulane, broken by a trauma in the warp, receives a vision of terrible importance. Hunted for the secret locked inside his mind, he falls in with a band of renegade Space Marines from Legions suspected of treachery, and must flee through the shadows of the Throneworld.",
   "summary": "Kai Zulane, once a gifted astropath with the Ultramarines, is recovering from a disaster in the warp at the City of Sight on Terra. When Magnus the Red's psychic warning crashes into the Imperial Palace, Kai is the only one to receive its full message, and the knowledge in his head is coveted by many factions. A group of legionaries from Legions that sided with Horus, among them the Thousand Sons Atharva, the Luna Wolf Severian and the World Eater Tagore, has been imprisoned beneath the Palace; they break out and take Kai with them. The Outcast Dead flee through the Petitioner's City pursued by the Custodian Ra Endymion and the hunter Yasu Nagasena. Along the way they shelter among people who preach the divinity of the Emperor, while Tagore's rage and the agendas of the others tear the group apart. Most of the renegades die in the pursuit, and in the end the secret in Kai's mind is delivered to the one for whom it was intended.",
   "characters": [
    "Kai Zulane – disgraced astropath",
    "Atharva – Thousand Sons Adept",
    "Severian – Luna Wolves warrior",
    "Tagore – World Eaters captain",
    "Ra Endymion – Custodian",
    "Yasu Nagasena – Imperial hunter",
    "Roxanne Castana – Navigator",
    "Magnus the Red – Primarch of the Thousand Sons (in vision)"
   ],
   "legions": [
    "Legio Custodes",
    "Thousand Sons",
    "Luna Wolves",
    "World Eaters"
   ],
   "setting": "005.M31",
   "sort": 31005,
   "planets": [
    "terra"
   ],
   "related": [
    "thousand_sons",
    "deliverance_lost"
   ]
  },
  "deliverance_lost": {
   "title": "Deliverance Lost",
   "author": "Gav Thorpe",
   "series": "The Horus Heresy",
   "number": 18,
   "year": 2012,
   "format": "Novel",
   "pages": 469,
   "premise": "After the Drop Site Massacre, Corax and the shattered remnants of his Raven Guard have barely escaped with their lives. To rebuild his Legion, Corax turns to the Emperor for help, but the secretive Alpha Legion is determined to see that the Raven Guard never fly again.",
   "summary": "Months after Isstvan V, a relief fleet fights its way through to the system and rescues Corax and a few thousand Raven Guard survivors. Corax travels to Terra, where the Emperor entrusts him with secret gene-stock from the primarch project so that he can rebuild his Legion quickly. Flashbacks show Corax's youth on the prison moon Lycaeus, the uprising he led against the Tech-Guilds of Kiavahr, and his meeting with the Emperor. On Deliverance, the accelerated rebirth of the Legion yields warriors twisted by flawed gene-seed, the Raptors. Alpha Legion operatives, some disguised as Raven Guard, infiltrate the Legion, assassinate key figures and sabotage the gene-labs. John Grammaticus and the Cabal are also involved in the shadow war. Corax confronts the Alpha Legion's primarch, but the twins' deception keeps the truth uncertain. The novel ends with Corax's hopes of a swift rebirth dashed and the Raven Guard committed to waging the war from the shadows.",
   "characters": [
    "Corax – Primarch of the Raven Guard",
    "Branne – Raven Guard commander",
    "Agapito – Raven Guard captain",
    "Navar Hef – Raven Guard sergeant",
    "Alpharius – Primarch of the Alpha Legion",
    "Omegon – Alpharius' twin",
    "Arkhas Fal – Alpha Legion infiltrator",
    "Malcador the Sigillite – Regent of Terra",
    "The Emperor of Mankind",
    "John Grammaticus – Perpetual and Cabal agent"
   ],
   "legions": [
    "Raven Guard",
    "Alpha Legion"
   ],
   "setting": "006–007.M31",
   "sort": 31006,
   "planets": [
    "isstvan5",
    "terra",
    "deliverance",
    "kiavahr"
   ],
   "related": [
    "legion",
    "corax",
    "lord_of_shadows"
   ]
  },
  "fear_to_tread": {
   "title": "Fear to Tread",
   "author": "James Swallow",
   "series": "The Horus Heresy",
   "number": 21,
   "year": 2012,
   "format": "Novel",
   "pages": 508,
   "premise": "Sanguinius and his Blood Angels are dispatched by the Warmaster to the distant Signus Cluster to put down an alien threat. The Angel's sons carry a dark secret in their blood, and in Signus they will face a foe unlike any they have fought before.",
   "summary": "Horus sends the Blood Angels to the Signus Cluster, supposedly to destroy the xenos Slaugth, while he prepares the trap that awaits them. In Signus the Legion finds worlds scoured of life and a star system twisted by the warp, and on Signus Prime they are ambushed by the daemon legions of Khorne. The madness of the warp drives many Blood Angels into a bloody rage, exposing the flaw in their gene-seed. The Bloodthirster Ka'Bandha slaughters legionaries and seeks to break Sanguinius and turn the Legion to the Blood God. Raldoron, Azkaellon, Amit and the Librarian Mkani Kano fight to hold the Legion together while human allies die in their thousands. Sanguinius confronts Ka'Bandha and defeats him, but learns of Horus' treachery and of the darkness in his own sons. The Blood Angels escape Signus, wounded and changed, and turn towards the wider war.",
   "characters": [
    "Sanguinius – Primarch of the Blood Angels",
    "Raldoron – First Captain, Blood Angels",
    "Azkaellon – Commander of the Sanguinary Guard",
    "Nassir Amit – Captain, 5th Company",
    "Mkani Kano – Blood Angels Librarian",
    "Meros – Blood Angels Apothecary",
    "Ka'Bandha – Bloodthirster of Khorne",
    "Horus Lupercal – Warmaster"
   ],
   "legions": [
    "Blood Angels",
    "Daemons",
    "Imperial Army"
   ],
   "setting": "005–006.M31",
   "sort": 31005,
   "planets": [
    "signus_prime"
   ],
   "related": [
    "unremembered_empire",
    "sanguinius_the_great_angel"
   ]
  },
  "shadows_of_treachery": {
   "title": "Shadows of Treachery",
   "author": "Various",
   "series": "The Horus Heresy",
   "number": 22,
   "year": 2012,
   "format": "Anthology",
   "pages": 409,
   "premise": "From the battlefields of Phall and Isstvan to the haunted shadows of Terra, the greatest war in human history rages on. This collection gathers five hard-to-find short stories with two new novellas, one about the Imperial Fists fleet sent to punish Horus and one about the Night Lords.",
   "summary": "In 'The Crimson Fist', the Imperial Fists fleet originally dispatched towards Isstvan, becalmed in the Phall system under Captain Alexis Polux, is drawn into a savage void war with Perturabo's Iron Warriors. 'The Dark King' shows Konrad Curze, tormented by visions, attacking Rogal Dorn before the Heresy. In 'The Lightning Tower', Dorn must turn the Imperial Palace into a fortress and confronts his own fear. 'The Kaban Project' reveals a dangerous artificial intelligence in the forges of Lukas Chrom on Mars before the Schism. 'Raven's Flight' follows Corax and his surviving sons hiding on Isstvan V after the massacre and the attempt to rescue them. 'Death of a Silversmith' tells of a remembrancer who glimpses the Warmaster's fall too early. In 'Prince of Crows', Sevatar leads the Night Lords while Curze lies in a coma after a clash with the Lion, as the Thramas Crusade draws to its end.",
   "characters": [
    "Alexis Polux – Captain, Imperial Fists",
    "Rogal Dorn – Primarch of the Imperial Fists",
    "Konrad Curze – Primarch of the Night Lords",
    "Lukas Chrom – Mechanicum magos",
    "Corax – Primarch of the Raven Guard",
    "Sevatar – First Captain of the Night Lords",
    "Lion El'Jonson – Primarch of the Dark Angels",
    "Forrix – Iron Warriors Triarch"
   ],
   "legions": [
    "Imperial Fists",
    "Iron Warriors",
    "Night Lords",
    "Raven Guard",
    "Dark Angels",
    "Mechanicum"
   ],
   "setting": "c. 984.M30–009.M31 (various)",
   "sort": 31007,
   "planets": [
    "phall",
    "terra",
    "mars",
    "isstvan5",
    "thramas"
   ],
   "contents": [
    {
     "title": "The Crimson Fist",
     "author": "John French",
     "format": "Novella"
    },
    {
     "title": "The Dark King",
     "author": "Graham McNeill",
     "format": "Short story"
    },
    {
     "title": "The Lightning Tower",
     "author": "Dan Abnett",
     "format": "Short story"
    },
    {
     "title": "The Kaban Project",
     "author": "Graham McNeill",
     "format": "Short story"
    },
    {
     "title": "Raven's Flight",
     "author": "Gav Thorpe",
     "format": "Audio drama script"
    },
    {
     "title": "Death of a Silversmith",
     "author": "Graham McNeill",
     "format": "Short story"
    },
    {
     "title": "Prince of Crows",
     "author": "Aaron Dembski-Bowden",
     "format": "Novella"
    }
   ],
   "related": [
    "deliverance_lost",
    "mechanicum",
    "age_of_darkness",
    "praetorian_of_dorn"
   ]
  },
  "angel_exterminatus": {
   "title": "Angel Exterminatus",
   "author": "Graham McNeill",
   "series": "The Horus Heresy",
   "number": 23,
   "year": 2012,
   "format": "Novel",
   "pages": 416,
   "premise": "Perturabo, embittered primarch of the Iron Warriors, is offered a prize by his brother Fulgrim: an ancient alien weapon of untold power, hidden deep within the warp. As the Iron Warriors and Emperor's Children set out together, a band of vengeful Iron Hands follows in their wake.",
   "summary": "Fulgrim visits Perturabo and tempts him with the Angel Exterminatus, a weapon of the ancient Eldar said to lie on a world within the Eye of Terror. Survivors of the Iron Hands aboard the Sisypheum, still seeking vengeance for Ferrus Manus, shadow the traitor fleets. The expedition passes through warp-haunted space and reaches the Eldar crone world Iydris, where Perturabo's warriors besiege the ancient defences. Perturabo slowly realises that Fulgrim has deceived him: the true purpose of the expedition is a ritual using the deaths of countless Iron Warriors to transform Fulgrim. Fulgrim ascends to become a daemon prince of Slaanesh. Perturabo turns on his brother, and the Iron Warriors fight their way out amid the carnage. The Iron Hands strike but cannot change the outcome, and Perturabo leaves Iydris more bitter and alone than before.",
   "characters": [
    "Perturabo – Primarch of the Iron Warriors",
    "Fulgrim – Primarch of the Emperor's Children",
    "Forrix – Iron Warriors Triarch",
    "Kroeger – Iron Warriors captain",
    "Barban Falk – Iron Warriors Warsmith",
    "Lucius – Emperor's Children swordsman",
    "Sabik Wayland – Iron Hands legionary"
   ],
   "legions": [
    "Iron Warriors",
    "Emperor's Children",
    "Iron Hands",
    "Aeldari"
   ],
   "setting": "007.M31",
   "sort": 31007,
   "planets": [
    "iydris"
   ],
   "related": [
    "fulgrim",
    "the_primarchs",
    "hammer_of_olympia"
   ]
  },
  "betrayer": {
   "title": "Betrayer",
   "author": "Aaron Dembski-Bowden",
   "series": "The Horus Heresy",
   "number": 24,
   "year": 2012,
   "format": "Novel",
   "premise": "The Shadow Crusade has begun. While the Ultramarines reel from the attack on Calth, Lorgar and his Word Bearers strike deep into Ultramar alongside Angron and the World Eaters. On the garrison world of Armatura their savagery may finally prove to be their undoing. Worlds will burn, Legions will clash and a primarch will fall.",
   "summary": "The World Eaters and Word Bearers ravage Ultramar together, and Khârn of the World Eaters and Argel Tal of the Word Bearers' Gal Vorbak are bound by a close brotherhood. Angron is dying, his brain destroyed by the Butcher's Nails, and Lorgar has his own plans for his brother. At Armatura, Guilliman has prepared a trap, and the traitor Legions suffer heavy losses. Lorgar then leads Angron to Nuceria, the world where Angron was enslaved. Guilliman pursues them there, and in the battle Lorgar and Guilliman clash. Lorgar carries out a ritual that saves Angron's life by remaking him as a daemon prince of Khorne, as the primarch had never wanted. Argel Tal is killed and Khârn is left with his loss, and the World Eaters as they were cease to exist. Guilliman withdraws, having failed to stop the ascension.",
   "characters": [
    "Khârn – Captain, 8th Assault Company, World Eaters",
    "Argel Tal – Commander of the Gal Vorbak, Word Bearers",
    "Angron – Primarch of the World Eaters",
    "Lorgar Aurelian – Primarch of the Word Bearers",
    "Lotara Sarrin – Shipmistress of the Conqueror",
    "Kargos – World Eaters Apothecary",
    "Roboute Guilliman – Primarch of the Ultramarines",
    "Erebus – First Chaplain, Word Bearers"
   ],
   "legions": [
    "World Eaters",
    "Word Bearers",
    "Ultramarines"
   ],
   "setting": "007–008.M31",
   "sort": 31008,
   "planets": [
    "armatura",
    "nuceria"
   ],
   "related": [
    "first_heretic",
    "know_no_fear",
    "slave_of_nuceria"
   ]
  },
  "mark_of_calth": {
   "title": "Mark of Calth",
   "author": "Various",
   "series": "The Horus Heresy",
   "number": 25,
   "year": 2013,
   "format": "Anthology",
   "pages": 416,
   "premise": "The Heresy came to Calth without warning, and in a few hours of betrayal the Ultramarines were laid low by the Word Bearers. Now, as the planet is scoured by solar flares from its wounded star, survivors of both sides fight on in the dark arcology shelters below. Eight stories by authors including Dan Abnett, Aaron Dembski-Bowden and Rob Sanders.",
   "summary": "'The Shards of Erebus' shows Erebus breaking up the blade that wounded Horus into ritual daggers for his Word Bearers commanders, just before the attack. In 'Calth That Was', Remus Ventanus leads the Ultramarines in the Underworld War beneath the planet against a Dark Apostle's trap. 'Dark Heart' follows a rogue Word Bearer, Marduk, rising in Kor Phaeron's favour during the orbital battle. 'The Traveller' tells of a refugee community whose saviour proves to be possessed by a daemon. In 'A Deeper Darkness', Ultramarine Hylas Pelion leads scouts through flooded tunnels to a Word Bearers cave base held by a daemon. 'The Underworld War' follows a Word Bearer's journey across Calth's poisoned surface. 'Athame' traces one ritual dagger through its owners up to Oll Persson. 'Unmarked' sends Oll and his companions through the warp, pursued by the daemon M'kar.",
   "characters": [
    "Remus Ventanus – Captain, 4th Company, Ultramarines",
    "Erebus – First Chaplain, Word Bearers",
    "Kor Phaeron – Master of the Faith",
    "Marduk – Word Bearers legionary",
    "Hylas Pelion – Ultramarines sergeant",
    "Oll Persson – Perpetual",
    "M'kar – daemon"
   ],
   "legions": [
    "Ultramarines",
    "Word Bearers",
    "Daemons"
   ],
   "setting": "007.M31 and after",
   "sort": 31007,
   "planets": [
    "calth"
   ],
   "contents": [
    {
     "title": "The Shards of Erebus",
     "author": "Guy Haley",
     "format": "Short story"
    },
    {
     "title": "Calth That Was",
     "author": "Graham McNeill",
     "format": "Novella"
    },
    {
     "title": "Dark Heart",
     "author": "Anthony Reynolds",
     "format": "Short story"
    },
    {
     "title": "The Traveller",
     "author": "David Annandale",
     "format": "Short story"
    },
    {
     "title": "A Deeper Darkness",
     "author": "Rob Sanders",
     "format": "Short story"
    },
    {
     "title": "The Underworld War",
     "author": "Aaron Dembski-Bowden",
     "format": "Short story"
    },
    {
     "title": "Athame",
     "author": "John French",
     "format": "Short story"
    },
    {
     "title": "Unmarked",
     "author": "Dan Abnett",
     "format": "Short story"
    }
   ],
   "related": [
    "know_no_fear",
    "betrayer",
    "ruinstorm"
   ]
  },
  "vulkan_lives": {
   "title": "Vulkan Lives",
   "author": "Nick Kyme",
   "series": "The Horus Heresy",
   "number": 26,
   "year": 2013,
   "format": "Novel",
   "pages": 416,
   "premise": "Since the Drop Site Massacre, the survivors of the Salamanders Legion have searched in vain for their missing primarch. While Vulkan might have wished himself dead, he lives still, and as the war continues without him his sons are drawn into a plot to end the Heresy by the most underhand means imaginable.",
   "summary": "Vulkan is a prisoner of his brother Konrad Curze aboard the Night Lords' flagship, held in a cell built by Perturabo. Curze tortures and kills him again and again, and Vulkan discovers that he cannot stay dead. Flashbacks recall his earlier campaigns and the betrayal at Isstvan V alongside his Pyre Guard. Curze breaks Vulkan's mind with a false vision of rescue by Corax. Meanwhile the Cabal agent John Grammaticus is sent to Traoris to recover a fulgurite, a spear of solidified lightning cast by the Emperor, which the Word Bearers also seek. He joins a band of Drop Site survivors under Pyre Guard captain Artellus Numeon, who plan to kill the Word Bearers' leader; the strike collapses and the survivors appear to be lost. Vulkan finally escapes Curze's ship through a teleporter, and the novel ends as he plunges through the atmosphere of an unknown world towards another death.",
   "characters": [
    "Vulkan – Primarch of the Salamanders",
    "Konrad Curze – Primarch of the Night Lords",
    "Artellus Numeon – Captain of the Pyre Guard, Salamanders",
    "John Grammaticus – Perpetual and Cabal agent",
    "Barthusa Narek – Word Bearers huntsman",
    "Ferrus Manus – Primarch of the Iron Hands (flashbacks)"
   ],
   "legions": [
    "Salamanders",
    "Night Lords",
    "Word Bearers",
    "Iron Hands",
    "Raven Guard"
   ],
   "setting": "c. 006–009.M31",
   "sort": 31008,
   "planets": [
    "traoris"
   ],
   "related": [
    "unremembered_empire",
    "deathfire",
    "lord_of_drakes"
   ]
  },
  "unremembered_empire": {
   "title": "The Unremembered Empire",
   "author": "Dan Abnett",
   "series": "The Horus Heresy",
   "number": 27,
   "year": 2013,
   "format": "Novel",
   "pages": 416,
   "premise": "The Astronomican has gone dark, and Roboute Guilliman can only believe that Terra has fallen. Ever the pragmatist, he draws his forces to Ultramar and begins building a new empire to carry the Emperor's legacy. Even with several of his primarch brothers at his side, he faces war from without and intrigue from within.",
   "summary": "Cut off by the Ruinstorm, Guilliman lights the Pharos, an alien device from Sotha, to guide fleets to Macragge, and begins forging Imperium Secundus. Lion El'Jonson arrives with the Dark Angels, followed by Sanguinius and the Blood Angels, and Guilliman proposes that Sanguinius be crowned Emperor of the new realm. Vulkan falls from the sky into Macragge's capital, apparently dead, and returns to life, haunted by his captivity. Konrad Curze has followed his prey and slips onto Macragge to strike at his brothers. The Lion and Guilliman, wary of each other, fight Curze in the capital, and a wider plot by Cabal agents and Word Bearers unfolds around the primarchs. The brothers drive Curze off, but the attack exposes how fragile their alliance is. Sanguinius reluctantly accepts the throne of Imperium Secundus, Guilliman becomes his Lord Protector, and the alliance of brothers begins in mutual suspicion.",
   "characters": [
    "Roboute Guilliman – Primarch of the Ultramarines and Lord of Ultramar",
    "Sanguinius – Primarch of the Blood Angels",
    "Lion El'Jonson – Primarch of the Dark Angels",
    "Vulkan – Primarch of the Salamanders",
    "Konrad Curze – Primarch of the Night Lords",
    "John Grammaticus – Perpetual and Cabal agent",
    "Tylos Rubio – Ultramarines Librarian"
   ],
   "legions": [
    "Ultramarines",
    "Blood Angels",
    "Dark Angels",
    "Salamanders",
    "Night Lords"
   ],
   "setting": "009.M31",
   "sort": 31009,
   "planets": [
    "macragge",
    "sotha"
   ],
   "related": [
    "vulkan_lives",
    "fear_to_tread",
    "pharos",
    "ruinstorm"
   ]
  },
  "scars": {
   "series": "The Horus Heresy",
   "title": "Scars",
   "author": "Chris Wraight",
   "number": 28,
   "year": 2013,
   "format": "Novel",
   "pages": 416,
   "premise": "Cut off for years by warp storms while fighting Orks at Chondax, the White Scars suddenly receive a flood of contradictory news: Horus has rebelled, Prospero has burned, and the Space Wolves are calling for help. Jaghatai Khan must find the truth before he chooses a side, while warrior lodges inside his own Legion have already made their choice.",
   "summary": "With the Alpha Legion's warp-storm device destroyed, the White Scars learn of rebellion, of Prospero's burning and of Leman Russ's fleet under Alpha Legion attack at Alaxxes. Unsure whom to trust, Jaghatai Khan refuses to aid Russ and takes his Legion to Prospero in search of Magnus. On the ruined world the Khan is separated from his Keshig and meets a shade of Magnus, who shows him the truth about the warp and Horus's fall. Mortarion then arrives to recruit him for the Warmaster, claiming half the White Scars have already declared for Horus; the two primarchs fight a brutal duel in the ash of Tizca until Mortarion withdraws. Meanwhile, the lodge leader Hasik Noyan-Khan, with Torghun among his followers, seizes the flagship Swordstorm to force the Legion to Horus's side. Shiban leads a daring assault against the mutineers and is badly wounded fighting his former brothers. The Khan returns, runs Hasik through on his own bridge and drives the Death Guard fleet from the system. Purged of its traitors, with the Thousand Son Revuel Arvida as an unexpected guest, the White Scars finally declare for the Emperor.",
   "characters": [
    "Jaghatai Khan – Primarch, White Scars",
    "Shiban Khan – Khan of the Brotherhood of the Storm",
    "Torghun Khan – Terran-born khan and lodge member",
    "Targutai Yesugei – Stormseer and the Khan's counsellor",
    "Ilya Ravallion – Departmento Munitorum general attached to the Legion",
    "Hasik Noyan-Khan – lodge leader who seizes the flagship",
    "Jemulan Noyan-Khan – loyal senior commander",
    "Qin Xa – Master of the Keshig",
    "Revuel Arvida – Thousand Sons survivor on Prospero",
    "Mortarion – Primarch, Death Guard",
    "Leman Russ – Primarch, Space Wolves",
    "Magnus the Red – a shade of the Primarch on Prospero"
   ],
   "legions": [
    "White Scars",
    "Space Wolves",
    "Alpha Legion",
    "Death Guard"
   ],
   "setting": "c. 006–007.M31",
   "sort": 31007,
   "planets": [
    "chondax",
    "prospero"
   ],
   "related": [
    "brotherhood_of_the_storm",
    "path_of_heaven",
    "wolf_king",
    "war_without_end"
   ]
  },
  "vengeful_spirit": {
   "series": "The Horus Heresy",
   "title": "Vengeful Spirit",
   "author": "Graham McNeill",
   "number": 29,
   "year": 2014,
   "format": "Novel",
   "premise": "Horus turns his full strength on Molech, a heavily defended Knight World ruled by House Devine and guarded by Titan Legions, Imperial Army regiments and loyal Legionaries. Why the Warmaster wants this world so badly is a mystery to its defenders. Meanwhile Garviel Loken leads a team of Malcador's Knights-Errant on a near-impossible infiltration of Horus's flagship.",
   "summary": "On the world of Dwell, Horus learns that the Emperor once visited Molech long ago and gained power and knowledge there through a pact with the Ruinous Powers. Together with Mortarion and Fulgrim, the Warmaster invades Molech, where Raeven Devine murders his father to seize House Devine. Garviel Loken and a squad of Knights-Errant, among them Tylos Rubio, Severian, Iacton Qruze and the Space Wolf Bror Tyrfingr, slip aboard the Vengeful Spirit and mark a path in Fenrisian runes for a later assault by Leman Russ. They are discovered and dragged before Horus, who tries and fails to win Loken back; several Knights die, and the survivors escape when their stealth ship blows out the windows of the Lupercal's Court. On the surface, the corrupted Knights of House Devine turn on their allies and the defence of Lupercalia collapses into a massacre. The Perpetual Alivia Sureka tries to seal the Emperor's ancient warp gate, but Horus breaches it. Moments pass in reality while he spends ages in the warp, taking the power the Emperor once claimed without bargaining for it. He returns a god in his own right and orders the march on Terra.",
   "characters": [
    "Horus Lupercal – Warmaster, Sons of Horus",
    "Garviel Loken – Knight-Errant leading the infiltration",
    "Tylos Rubio – Knight-Errant, former Ultramarines Codicier",
    "Severian – Knight-Errant, former Luna Wolf",
    "Bror Tyrfingr – Space Wolf seconded to the Knights-Errant",
    "Iacton Qruze – Knight-Errant, 'the Half-Heard'",
    "Ezekyle Abaddon – First Captain, Sons of Horus",
    "Maloghurst – Horus's equerry",
    "Raeven Devine – scion who seizes House Devine",
    "Alivia Sureka – Perpetual living on Molech",
    "Fulgrim – Daemon Primarch, Emperor's Children",
    "Mortarion – Primarch, Death Guard"
   ],
   "legions": [
    "Sons of Horus",
    "Knights Errant",
    "Imperial Knights",
    "Legio Titanicus",
    "Imperial Army",
    "Death Guard",
    "Emperor's Children"
   ],
   "setting": "009.M31",
   "sort": 31009,
   "planets": [
    "molech"
   ],
   "related": [
    "garro",
    "war_without_end",
    "wolfsbane",
    "galaxy_in_flames"
   ]
  },
  "deathfire": {
   "series": "The Horus Heresy",
   "title": "Deathfire",
   "author": "Nick Kyme",
   "number": 32,
   "year": 2015,
   "format": "Novel",
   "pages": 416,
   "premise": "Vulkan's body lies in a tomb beneath the Fortress of Hera on Macragge, but Artellus Numeon refuses to accept that his Primarch is dead. He persuades the Salamanders in Imperium Secundus to carry Vulkan home to Nocturne, to be reborn in the flames of Mount Deathfire. The journey leads through the Ruinstorm, with enemies who want the Primarch's body for themselves.",
   "summary": "Rescued by the Ultramarines, Numeon finds Vulkan's casket on Macragge mysteriously empty; when the body turns up again, he gathers the surviving warriors of the Pyre to take it home. They leave aboard the battle-barge Charybdis and soon divert to the world called Rampart, where they fight Death Guard and pick up the enigmatic Knight-Errant Kaspian Hecht. In the Ruinstorm they are hunted by Death Guard under Maelig Laestygon and Word Bearers under Quor Gallek, and a daemonic incursion tears through the ship. A psychic projection of Magnus the Red answers Numeon's plea and guides the Charybdis out of the storm, asking how much he would sacrifice to see Vulkan restored. At Nocturne the Charybdis is sacrificed so that the last twenty of the Pyre can get Vulkan's casket to the surface, where Lord Chaplain Nomus Rhy'tan and the Legion's garrison destroy the Death Guard at the Draconis Gate. Vulkan is consigned to the fire of Mount Deathfire, but he does not rise. Broken, Numeon lays down his armour and walks into a magma vent as a final offering. Soon afterwards, Zytos and two companions find Vulkan alive on the ash plains, the spear still in his chest.",
   "characters": [
    "Artellus Numeon – former Captain of the Pyre Guard, Salamanders",
    "Vulkan – Primarch, Salamanders",
    "Barek Zytos – Sergeant, Salamanders",
    "Var'kir – Chaplain, Salamanders",
    "Nomus Rhy'tan – Lord Chaplain on Nocturne",
    "Kaspian Hecht – Knight-Errant found on Rampart",
    "Maelig Laestygon – Death Guard commander",
    "Quor Gallek – Word Bearers commander",
    "Magnus the Red – Primarch, Thousand Sons"
   ],
   "legions": [
    "Salamanders",
    "Death Guard",
    "Word Bearers",
    "Ultramarines"
   ],
   "setting": "c. 009–010.M31",
   "sort": 31009.5,
   "planets": [
    "macragge",
    "nocturne"
   ],
   "related": [
    "vulkan_lives",
    "unremembered_empire",
    "old_earth",
    "born_of_flame"
   ]
  },
  "pharos": {
   "series": "The Horus Heresy",
   "title": "Pharos",
   "author": "Guy Haley",
   "number": 34,
   "year": 2015,
   "format": "Novel",
   "premise": "Imperium Secundus survives the Ruinstorm thanks to the Pharos, a mysterious xenos device beneath a mountain on Sotha that lights a path through the warp. Roboute Guilliman has persuaded Sanguinius that Terra is lost and that the Pharos holds the key to humanity's future. But the Night Lords have been watching Sotha, and they are ready to strike.",
   "summary": "The loyalist Iron Warrior Barabas Dantioch studies the Pharos, an ancient navigation and communication engine whose powers he only partly understands. Leaderless since the Thramas Crusade, the Night Lords gather in secret and fall on lightly defended Sotha to seize the device and find their lost Primarch. The Ultramarines and Sotha's people are butchered as the Night Lords push towards the mountain. On Macragge, the fugitive Konrad Curze haunts Imperium Secundus and confronts Sanguinius, who must weigh his visions of his own fate against his brother's madness. As the Night Lords break into the Pharos, Dantioch overloads the device and dies to keep it from the enemy, at terrible cost. His act wrecks the Pharos as a beacon for Imperium Secundus. A coda reveals that its final pulse has carried far beyond the galaxy, where something vast and hungry takes notice, setting up the coming of the Tyranids ten thousand years later.",
   "characters": [
    "Barabas Dantioch – loyalist Warsmith of the Iron Warriors on Sotha",
    "Sanguinius – Primarch, Blood Angels; Emperor of Imperium Secundus",
    "Roboute Guilliman – Primarch, Ultramarines",
    "Konrad Curze – Primarch, Night Lords",
    "Krieg Acerbus – Night Lords commander"
   ],
   "legions": [
    "Ultramarines",
    "Night Lords",
    "Blood Angels",
    "Iron Warriors"
   ],
   "setting": "c. 009.M31",
   "sort": 31009.2,
   "planets": [
    "sotha",
    "macragge"
   ],
   "related": [
    "unremembered_empire",
    "angels_of_caliban",
    "ruinstorm",
    "burden_of_loyalty"
   ]
  },
  "angels_of_caliban": {
   "series": "The Horus Heresy",
   "title": "Angels of Caliban",
   "author": "Gav Thorpe",
   "number": 38,
   "year": 2016,
   "format": "Novel",
   "pages": 480,
   "premise": "As Lord Protector of Imperium Secundus, Lion El'Jonson hunts Konrad Curze across Ultramar, and his methods put him on a collision course with his loyal brothers. Far away on Caliban, Luther and the exiled Dark Angels face rebellion and old rivalries of their own. Two stories show a First Legion drifting apart.",
   "summary": "Feeling responsible for Curze's rampage, the Lion pursues him for two years, sending the Dreadwing to Zepath on a slim lead and clashing with Guilliman over Macragge's security. After a suicide bombing he imposes martial law and is refused an orbital bombardment of the rebellious Illyrium region, so he sends his own warriors in. At Alma Mons he corners Curze, beats him and breaks his spine across his knee, then hands him to Sanguinius and Guilliman for trial. Curze sows discord, revealing that the Lion went behind Guilliman's back, and Guilliman breaks the Lion Sword in fury; the Lion is banished. As Sanguinius prepares to execute Curze, the Lion teleports back to argue that Curze's prophecy of an assassin sent by the Emperor proves the Emperor still lives, and he vows to be Curze's jailer. On Caliban, Luther faces insurgents, monstrous beasts and sorcery, while Zahariel and the disgraced Astelan pursue their own agendas. Luther moves closer to open defiance of his Primarch. The revelation that Terra still stands ends Imperium Secundus.",
   "characters": [
    "Lion El'Jonson – Primarch, Dark Angels; Lord Protector",
    "Konrad Curze – Primarch, Night Lords",
    "Roboute Guilliman – Primarch, Ultramarines",
    "Sanguinius – Emperor of Imperium Secundus",
    "Holguin – Lieutenant of the Deathwing",
    "Farith Redloss – Lieutenant-elect of the Dreadwing",
    "Luther – Master of Caliban",
    "Zahariel – Librarian on Caliban",
    "Merir Astelan – disgraced Chapter Master"
   ],
   "legions": [
    "Dark Angels",
    "Night Lords",
    "Ultramarines",
    "Blood Angels"
   ],
   "setting": "c. 009–011.M31",
   "sort": 31011,
   "planets": [
    "macragge",
    "caliban"
   ],
   "related": [
    "unremembered_empire",
    "pharos",
    "ruinstorm",
    "fallen_angels"
   ]
  },
  "praetorian_of_dorn": {
   "series": "The Horus Heresy",
   "title": "Praetorian of Dorn",
   "author": "John French",
   "number": 39,
   "year": 2016,
   "format": "Novel",
   "pages": 512,
   "premise": "Rogal Dorn has turned the Sol System into a fortress of concentric defensive spheres. Then the Alpha Legion strikes for the first time since the war began, and many of the Imperial Fists' defences prove inadequate. With every eye turned outward, Dorn and his Huscarls must hunt an enemy that may already be inside the walls.",
   "summary": "Alpha Legion sleeper agents, planted years before the Heresy, wake across the Sol System and launch a wave of murder and sabotage. In a calculated insult, infiltrators reach the Investiary in the Imperial Palace and destroy the statues of the Primarchs, leaving only those of Dorn and Alpharius. While Dorn is drawn into the chaos, an Alpha Legion fleet that has drifted towards Sol for a year strikes Pluto and its moons, where Sigismund's outnumbered ships are mauled by hidden fire ships. Archamus, Master of the Huscarls, realises the real target is Hydra, the moon that houses the system's astropathic watch-station, and leads a doomed counter-attack against Alpharius himself. Dorn arrives with the Phalanx and teleports into the fight. The two Primarchs duel; Dorn takes the Pale Spear on his shoulder and cuts Alpharius down, killing him. The Alpha Legion withdraws, and Omegon takes his brother's place, hiding the death from Horus. Dorn is left to face what the defence of Terra will cost.",
   "characters": [
    "Rogal Dorn – Primarch, Imperial Fists; Praetorian of Terra",
    "Archamus – Master of the Huscarls",
    "Sigismund – First Captain, Imperial Fists",
    "Alpharius – Primarch, Alpha Legion",
    "Omegon – Alpharius's twin",
    "Kel Silonius – Harrowmaster, Alpha Legion"
   ],
   "legions": [
    "Imperial Fists",
    "Alpha Legion",
    "Legio Custodes",
    "Imperial Army"
   ],
   "setting": "010.M31",
   "sort": 31010,
   "planets": [
    "pluto",
    "terra"
   ],
   "related": [
    "solar_war",
    "silent_war",
    "shadows_of_treachery",
    "legion"
   ]
  },
  "corax": {
   "series": "The Horus Heresy",
   "title": "Corax",
   "author": "Gav Thorpe",
   "number": 40,
   "year": 2016,
   "format": "Collection",
   "pages": 416,
   "premise": "After Isstvan V and the Battle of Ravendelve, Corvus Corax rallies the remnants of the Raven Guard and strikes back at the Warmaster's forces on every front, from Dark Mechanicum hereteks to the Sons of Horus. He has slowed the physical corruption of his gene-altered Raptors, but not what is happening to their spirit. This collection gathers Gav Thorpe's Corax novellas and stories along with the new novella Weregeld.",
   "summary": "The stories follow Corax's bitter guerrilla war against the Traitors after the Drop Site Massacre and the Battle of Ravendelve, and his struggle to hold his shattered Legion together. Soulforge and Ravenlord take the Raven Guard against Dark Mechanicum hereteks and the Warmaster's Legions, and the shorter pieces dwell on Corax's use of stealth and terror. Running through the whole volume are the Raptors, the warriors born from Corax's flawed attempt to replenish his Legion with gene-seed. In the new novella Weregeld, their physical and spiritual corruption reaches its end point, and the Raptors meet a tragic fate.",
   "characters": [
    "Corvus Corax – Primarch, Raven Guard",
    "Branne Nev – Commander, Raven Guard",
    "Agapito Nev – Commander, Raven Guard",
    "Alvarex Solaro – Raven Guard captain",
    "Navar Hef – leader of the Raptors"
   ],
   "legions": [
    "Raven Guard",
    "Alpha Legion",
    "Sons of Horus",
    "Dark Mechanicum"
   ],
   "setting": "c. 007–011.M31",
   "sort": 31008,
   "planets": [
    "deliverance"
   ],
   "contents": [
    {
     "title": "Soulforge",
     "author": "Gav Thorpe",
     "format": "Novella"
    },
    {
     "title": "Ravenlord",
     "author": "Gav Thorpe",
     "format": "Novella"
    },
    {
     "title": "The Shadowmasters",
     "author": "Gav Thorpe",
     "format": "Short story"
    },
    {
     "title": "The Value of Fear",
     "author": "Gav Thorpe",
     "format": "Short story"
    },
    {
     "title": "Raptor",
     "author": "Gav Thorpe",
     "format": "Short story"
    },
    {
     "title": "Weregeld",
     "author": "Gav Thorpe",
     "format": "Novella"
    }
   ],
   "related": [
    "deliverance_lost",
    "corax_soulforge",
    "ravenlord",
    "weregeld"
   ]
  },
  "master_of_mankind": {
   "series": "The Horus Heresy",
   "title": "The Master of Mankind",
   "author": "Aaron Dembski-Bowden",
   "number": 41,
   "year": 2016,
   "format": "Novel",
   "premise": "While the Heresy rages across the galaxy, another war is fought beneath the Imperial Palace. The Legio Custodes, the Sisters of Silence and Fabricator-General Kane's Mechanicum battle daemons for the webway gates nearest Terra, which were breached by Magnus's reckless warning. Traitor Titans and Legionaries now fight among the enemy, and at the heart of it all is the Emperor Himself.",
   "summary": "Five years into the War Within the Webway, the defenders are losing ground in Calastar, the derelict Aeldari 'Impossible City'. Prefect Diocletian Coros raises fresh forces, including condemned Knights of the disgraced House Vyridion, while the tech-priest Arkhan Land is drawn into the war's secrets. Tribune Ra Endymion, now sole commander of the Custodians in the labyrinth, receives the full knowledge of the Emperor's dream: a human webway that would free mankind from the warp. Calastar falls, and after the sacrifice of a thousand psykers the Emperor leaves the Golden Throne to cover the retreat and confront the daemon Drach'nyen. The daemon cannot be killed, only caged, so Ra takes the blade into his own body. The Emperor orders him to run deep into the webway with it as the last loyal forces withdraw. The Emperor then seals the Terran portal. His great project is lost, and the novel leaves Him weighing His past and the age of darkness His choices have helped bring about.",
   "characters": [
    "The Emperor – Master of Mankind",
    "Ra Endymion – Tribune, Legio Custodes",
    "Diocletian Coros – Prefect, Legio Custodes",
    "Constantin Valdor – Captain-General, Legio Custodes",
    "Jenetia Krole – Knight-Commander, Sisters of Silence",
    "Arkhan Land – Technoarchaeologist",
    "Zagreus Kane – Fabricator-General of Mars in exile",
    "Drach'nyen – daemon in the webway"
   ],
   "legions": [
    "Legio Custodes",
    "Sisters of Silence",
    "Mechanicum",
    "Imperial Knights",
    "Daemons"
   ],
   "setting": "c. 009–010.M31",
   "sort": 31010,
   "planets": [
    "terra"
   ],
   "related": [
    "thousand_sons",
    "old_earth",
    "valdor"
   ]
  },
  "garro": {
   "series": "The Horus Heresy",
   "title": "Garro",
   "author": "James Swallow",
   "number": 42,
   "year": 2017,
   "format": "Novel",
   "pages": 384,
   "premise": "Battle-Captain Nathaniel Garro, once of the Death Guard, kneels before Malcador and becomes his Agentia Primus, a grey-clad warrior answerable only to the Regent. From the ruins of Isstvan III to the halls of the Imperial Palace, he recruits the first Knights-Errant and strikes at the Warmaster's agents. But Garro has doubts of his own about the Sigillite's purposes and his own place in the Imperium.",
   "summary": "Garro's first mission takes him to Calth, where he recruits Tylos Rubio, an Ultramarines Codicier who breaks the Edict of Nikaea to save his company and is shunned for it. He then takes in Macer Varren, a World Eater who refused to follow Angron, and works through Malcador's list across the war. On Isstvan III he finds a half-mad survivor calling himself Cerberus, who turns out to be Garviel Loken, and brings him back to himself. Between missions he searches for the Living Saint, Euphrati Keeler. A scribe, Katanoh Tallery, leads him to secret shipments bound for Titan, where Malcador reveals an Emperor-sanctioned project to fight Chaos after the Heresy; Garro refuses an order to kill her, and Malcador relents. On Terra, Garro saves Keeler from the turned assassin Eristede Kell and an Alpha Legion operative, then hands her into Malcador's custody. The book was built from Swallow's Garro audio dramas and the novella Vow of Faith, revised and expanded into one story.",
   "characters": [
    "Nathaniel Garro – Agentia Primus, former Death Guard captain",
    "Malcador the Sigillite – Regent of Terra",
    "Tylos Rubio – Ultramarines psyker turned Knight-Errant",
    "Macer Varren – World Eaters loyalist turned Knight-Errant",
    "Garviel Loken – lost Luna Wolf found on Isstvan III",
    "Euphrati Keeler – the Living Saint",
    "Katanoh Tallery – Administratum scribe",
    "Eristede Kell – Vindicare assassin turned to Horus's service",
    "Meric Voyen – Apothecary, Death Guard loyalist"
   ],
   "legions": [
    "Knights Errant",
    "Death Guard",
    "Ultramarines",
    "World Eaters",
    "Legio Custodes",
    "Imperial Fists"
   ],
   "setting": "c. 007–013.M31",
   "sort": 31008,
   "planets": [
    "calth",
    "isstvan3",
    "terra",
    "titan"
   ],
   "related": [
    "flight_eisenstein",
    "garro_vow_of_faith",
    "buried_dagger",
    "vengeful_spirit"
   ]
  },
  "crimson_king": {
   "series": "The Horus Heresy",
   "title": "The Crimson King",
   "author": "Graham McNeill",
   "number": 44,
   "year": 2017,
   "format": "Novel",
   "premise": "After the razing of Prospero, Magnus the Red took the Thousand Sons to the Planet of the Sorcerers in the Eye of Terror, where he watches the Heresy with cold detachment and hoards what knowledge survived Tizca. But his sons can see that their Primarch is a broken soul whose mind is slipping into the warp. To restore him, Ahzek Ahriman and his brothers must return to the scenes of Magnus's greatest triumphs and tragedies.",
   "summary": "Magnus's soul was shattered when Leman Russ broke him on Prospero, and its fragments are scattered across the galaxy and across time. Ahriman, Amon and a small cabal, joined by the reluctant Lucius, set out to gather the shards while the flesh-change resurfaces in the Legion and Space Wolves and Knights-Errant hunt them. One shard lies in the ashes of Kallista Eris carried by the remembrancer Lemuel Gaumon, imprisoned on Terra. Others wait on Aghoru, on Nikaea and in the distant past of Terra, where Ahriman must travel back in time to reclaim one. The Nikaea shard possesses Gaumon, and with Ahriman's help it is brought back to the Planet of the Sorcerers. As the fragments return, Magnus is made whole again, but the restored Primarch embraces his patron and is crowned anew by the Ruinous Powers. The noblest part of him remains captive on Terra, and Magnus declares that the Thousand Sons will join Horus's assault on the Throneworld to recover it.",
   "characters": [
    "Magnus the Red – Primarch, Thousand Sons",
    "Ahzek Ahriman – Chief Librarian, Thousand Sons",
    "Amon – Magnus's equerry and former tutor",
    "Lucius – swordsman, Emperor's Children",
    "Lemuel Gaumon – remembrancer imprisoned on Terra",
    "Kallista Eris – late remembrancer whose ashes hold a shard"
   ],
   "legions": [
    "Thousand Sons",
    "Space Wolves",
    "Knights Errant",
    "Emperor's Children"
   ],
   "setting": "c. 012.M31",
   "sort": 31012,
   "planets": [
    "planet_of_the_sorcerers",
    "aghoru",
    "nikaea",
    "terra"
   ],
   "related": [
    "thousand_sons",
    "prospero_burns",
    "scars",
    "heralds_of_the_siege"
   ]
  },
  "tallarn": {
   "series": "The Horus Heresy",
   "title": "Tallarn",
   "author": "John French",
   "number": 45,
   "year": 2017,
   "format": "Collection",
   "premise": "Fresh from the Eye of Terror, Perturabo strikes at Tallarn and unleashes a bombardment that kills millions and drives the survivors into sealed bunkers. What follows is the greatest armoured war of the Heresy, ground out across a poisoned world for more than a year. But Perturabo came to Tallarn with a darker purpose than slaughter. This collection gathers John French's Tallarn novellas and stories.",
   "summary": "Executioner opens with the virus bombardment that turns Tallarn into a dead world, seen through the remnants of the Jurnian 701st Armoured Regiment, who emerge from their shelters to fight in sealed tanks across the poisoned surface. The Vanus assassin Iaeo hunts Alpha Legion infiltrators among the survivors. Ironclad follows the escalating tank war while Argonis, Horus's emissary, arrives with a Dark Mechanicum magos to bring the wayward Iron Warriors to heel. Alpha Legion operatives and an Officio Assassinorum agent work their own angles on both sides. Perturabo's real aim lies beneath the surface: an ancient secret that has caught his curiosity since Fulgrim's ascension. The Iron Warriors finally withdraw, leaving millions dead and the loyalists holding a ruined world. Siren follows a desperate hunt for the planet's last astropath after the Iron Warriors leave, and Witness surveys the graveyard Tallarn has become through its new governor.",
   "characters": [
    "Perturabo – Primarch, Iron Warriors",
    "Kenor Argonis – Sons of Horus emissary of the Warmaster",
    "Sota-Nul – Dark Mechanicum magos",
    "Iaeo – Vanus assassin hunting Alpha Legion infiltrators"
   ],
   "legions": [
    "Iron Warriors",
    "Imperial Army",
    "Alpha Legion",
    "Dark Mechanicum",
    "Officio Assassinorum"
   ],
   "setting": "010–012.M31",
   "sort": 31010,
   "planets": [
    "tallarn"
   ],
   "contents": [
    {
     "title": "Tallarn: Witness",
     "author": "John French",
     "format": "Short story"
    },
    {
     "title": "Tallarn: Executioner",
     "author": "John French",
     "format": "Novella"
    },
    {
     "title": "Tallarn: Siren",
     "author": "John French",
     "format": "Short story"
    },
    {
     "title": "Tallarn: Ironclad",
     "author": "John French",
     "format": "Novella"
    }
   ],
   "related": [
    "tallarn_executioner",
    "tallarn_ironclad",
    "angel_exterminatus",
    "war_without_end"
   ]
  },
  "ruinstorm": {
   "series": "The Horus Heresy",
   "title": "Ruinstorm",
   "author": "David Annandale",
   "number": 46,
   "year": 2017,
   "format": "Novel",
   "pages": 384,
   "premise": "Imperium Secundus has been exposed as a mistake: Terra still stands, but it lies beyond the Ruinstorm. Sanguinius, Roboute Guilliman and Lion El'Jonson lead the fleets of three Legions out from Macragge to break through and reach the Emperor. An unseen enemy watches every move, and each Primarch carries his own inner storm.",
   "summary": "The three Legions find that not even the Tuchulcha Engine can navigate the Ruinstorm, and they face solar-system-sized obstacles in both realspace and the warp, along with rumours of a destroyer called the Pilgrim. After the Battle of Pyrrhan, Sanguinius has a vision that they must go where the Heresy began: Davin. Over the Lion's fury he takes the captive Konrad Curze to use his foresight. At Davin, Sanguinius leads a ground assault and is trapped in a portal to the warp, where the daemon Madail presents him with an unthinkable choice and visions of his own fate. The Lion nearly orders the world destroyed with his brother on it, then realises an outside power is steering them towards damnation. Guilliman and the Lion fight side by side at the Temple of the Serpent Lodge, while above them the daemon ship Veritas Ferrum destroys Guilliman's flagship Samothrace. Sanguinius escapes, and Davin is destroyed by cyclonic torpedoes, which opens a breach in the Ruinstorm. Guilliman and the Lion launch diversionary attacks on Horus's blockading fleets so that Sanguinius and the Blood Angels can race for Terra.",
   "characters": [
    "Sanguinius – Primarch, Blood Angels",
    "Roboute Guilliman – Primarch, Ultramarines",
    "Lion El'Jonson – Primarch, Dark Angels",
    "Konrad Curze – captive Primarch, Night Lords",
    "Madail – daemon of the Ruinstorm"
   ],
   "legions": [
    "Ultramarines",
    "Blood Angels",
    "Dark Angels",
    "Daemons"
   ],
   "setting": "c. 011–012.M31",
   "sort": 31011.5,
   "planets": [
    "macragge",
    "davin"
   ],
   "related": [
    "angels_of_caliban",
    "pharos",
    "damnation_of_pythos",
    "false_gods"
   ]
  },
  "old_earth": {
   "series": "The Horus Heresy",
   "title": "Old Earth",
   "author": "Nick Kyme",
   "number": 47,
   "year": 2017,
   "format": "Novel",
   "pages": 400,
   "premise": "Reborn beneath Mount Deathfire, Vulkan gathers his most trusted sons for the last part of his journey. The Shattered Legions have stalled the Warmaster's advance, but cracks are spreading through their alliance amid rumours that Ferrus Manus has returned. Haunted by a sense of unfinished destiny, Vulkan must choose between their war of vengeance and his own path to the Throneworld.",
   "summary": "Vulkan leaves Nocturne and his Legion behind, feeling called to Terra. He seeks out Shadrak Meduson and the Iron Hands of the Shattered Legions, who are waging a guerrilla war against the Sons of Horus. Meduson is resisted by factions within his own Legion and is chasing a showdown with his nemesis, Tybalt Marr. The Word Bearer Barthusa Narek, an old foe from Vulkan's captivity, still hunts the Primarch. With the warp closed by the Ruinstorm, Vulkan's road to Terra runs through the webway, where humans are not welcome and where he must accept the help of the Aeldari farseer Eldrad Ulthran. The novel closes the Salamanders arc of Vulkan Lives and Deathfire with Vulkan reaching the Throneworld to take up the role he was born for.",
   "characters": [
    "Vulkan – Primarch, Salamanders",
    "Shadrak Meduson – Iron Lord, Shattered Legions",
    "Tybalt Marr – Captain, Sons of Horus",
    "Barthusa Narek – Word Bearers hunter",
    "Eldrad Ulthran – Aeldari farseer",
    "Barek Zytos – Sergeant, Salamanders"
   ],
   "legions": [
    "Salamanders",
    "Iron Hands",
    "Sons of Horus",
    "Word Bearers",
    "Aeldari"
   ],
   "setting": "c. 012.M31",
   "sort": 31012,
   "planets": [
    "nocturne",
    "terra"
   ],
   "related": [
    "deathfire",
    "vulkan_lives",
    "shattered_legions",
    "master_of_mankind"
   ]
  },
  "wolfsbane": {
   "series": "The Horus Heresy",
   "title": "Wolfsbane",
   "author": "Guy Haley",
   "number": 49,
   "year": 2018,
   "format": "Novel",
   "pages": 432,
   "premise": "Leman Russ means to fulfil his vow and stop Horus before the Warmaster breaks into the Segmentum Solar. Against the wishes of his brothers, he takes the Space Wolves away from Terra and races to meet the enemy. Malcador's agents report that Horus has changed beyond recognition, so powerful that no one may be able to stand against him.",
   "summary": "Russ withdraws the Space Wolves from Terra just as Sanguinius is about to arrive, over the opposition of three of his brothers. Interwoven chapters return to Russ's youth on Fenris and the burden of being the Emperor's executioner, while the Wolf King journeys into the depths of his homeworld to face his own nature. The Space Wolves then make a death-or-glory attack on Horus's vanguard at Trisolian, following the runes left aboard the Vengeful Spirit. Russ confronts his brother in the Warmaster's flagship and glimpses a faint trace of the old Horus. Horus overpowers him, but Russ drives his spear into Horus's side, leaving a wound that does not heal. The gravely wounded Wolf King is dragged clear by his warriors, and the Space Wolves pull back from the gates of the Segmentum Solar. The wound will shape everything that follows.",
   "characters": [
    "Leman Russ – Primarch, Space Wolves",
    "Horus Lupercal – Warmaster",
    "Bjorn – Space Wolves warrior, later the Fell-Handed",
    "Malcador the Sigillite – Regent of Terra",
    "Belisarius Cawl – Mechanicum magos"
   ],
   "legions": [
    "Space Wolves",
    "Sons of Horus"
   ],
   "setting": "012.M31",
   "sort": 31012,
   "planets": [
    "trisolian",
    "fenris",
    "terra"
   ],
   "related": [
    "wolf_king",
    "burden_of_loyalty",
    "prospero_burns",
    "slaves_to_darkness"
   ]
  },
  "slaves_to_darkness": {
   "series": "The Horus Heresy",
   "title": "Slaves to Darkness",
   "author": "John French",
   "number": 51,
   "year": 2018,
   "format": "Novel",
   "pages": 400,
   "premise": "After long, grinding years of war, the traitors at last close on Terra, but time is running out: Guilliman and the Lion are racing back with armies that could turn the tide. While Mortarion is sent ahead as the vanguard, Lorgar and Perturabo must marshal Fulgrim and Angron, both now daemons and perhaps beyond the Warmaster's command. And with Horus laid low, it falls to Maloghurst to hold the Sons of Horus together.",
   "summary": "Since Trisolian, the wound from Russ's spear has left Horus lying in a coma aboard the Vengeful Spirit while part of his soul fights an endless battle in the warp. Without him, the traitor host bogs down in infighting. Lorgar and Perturabo try to bind the daemonic Fulgrim and Angron to the cause. Maloghurst accepts help from Lorgar, the Word Bearer Zardu Layak and the magos Sota-Nul and enters the warp in a blood ritual to reach his master. Horus Aximand opposes him and has him imprisoned in a shifting maze, but Kalus Ekkadon frees him while Blood Angels from Heta-Gladius storm the flagship. Maloghurst finds the trapped fragment of Horus, which still resists becoming the gods' slave, and urges him to accept what he has chosen. He then stabs the spear wound in Horus's soul, giving his own life to send it back. The Warmaster wakes wholly in the grip of the Chaos Gods, takes command again, and the host turns towards Terra.",
   "characters": [
    "Maloghurst – equerry, Sons of Horus",
    "Horus Lupercal – Warmaster",
    "Horus Aximand – Captain, Sons of Horus",
    "Falkus Kibre – Captain, Sons of Horus",
    "Kalus Ekkadon – Captain, Catulan Reavers",
    "Lorgar Aurelian – Primarch, Word Bearers",
    "Zardu Layak – Word Bearers Dark Apostle",
    "Sota-Nul – Dark Mechanicum magos",
    "Perturabo – Primarch, Iron Warriors",
    "Angron – Daemon Primarch, World Eaters",
    "Fulgrim – Daemon Primarch, Emperor's Children",
    "Mortarion – Primarch, Death Guard"
   ],
   "legions": [
    "Sons of Horus",
    "Word Bearers",
    "Iron Warriors",
    "World Eaters",
    "Emperor's Children",
    "Death Guard",
    "Blood Angels"
   ],
   "setting": "c. 013–014.M31",
   "sort": 31013.5,
   "planets": [],
   "related": [
    "wolfsbane",
    "titandeath",
    "solar_war",
    "buried_dagger"
   ]
  },
  "titandeath": {
   "series": "The Horus Heresy",
   "title": "Titandeath",
   "author": "Guy Haley",
   "number": 53,
   "year": 2018,
   "format": "Novel",
   "premise": "One barrier remains between Horus and Terra: the Beta-Garmon Cluster, the only viable route to the Sol System. Both sides pour in armies and Titan Legions in numbers never seen before, and god-engines of loyalists and traitors march against each other. Princeps Esha Ani Mohana of the Legio Solaria fights in a battle that will decide the next phase of the war.",
   "summary": "With the Ruinstorm fading, the loyalists mass at Beta-Garmon, using its astropathic relay to call in stranded forces, while Horus brings the full weight of his Titan Legions against them. Esha Ani Mohana of the Legio Solaria, all-female and fiercely proud, fights under her Great Mother, Mohana Mankata VI, against old enemies including Legio Vulpa. The clashes on Beta-Garmon II grow into the 'Titandeath', the largest Titan battle in history, centred on Nyrcon City. The traitor Legios fall further into Chaos; the Vulpa princeps Terent Harrtek's god-engine is taken by a daemon of Khorne. Mohana Mankata VI falls in battle, and the loyalist line collapses as Horus outmanoeuvres the defenders. Esha Ani Mohana leads the battered survivors of the Solaria in retreat towards Terra. The campaign ends in a decisive traitor victory that opens the road to the Sol System.",
   "characters": [
    "Esha Ani Mohana – Princeps Majoris, Legio Solaria",
    "Mohana Mankata VI – 'Great Mother', Domina Princeps of Legio Solaria",
    "Terent Harrtek – Princeps Majoris, Legio Vulpa",
    "Horus Lupercal – Warmaster",
    "Sanguinius – Primarch, Blood Angels",
    "Jaghatai Khan – Primarch, White Scars"
   ],
   "legions": [
    "Legio Solaria",
    "Legio Vulpa",
    "Legio Mortis",
    "Sons of Horus",
    "Imperial Army",
    "Blood Angels"
   ],
   "setting": "012–013.M31",
   "sort": 31013,
   "planets": [
    "beta_garmon2"
   ],
   "related": [
    "wolfsbane",
    "slaves_to_darkness",
    "solar_war"
   ]
  },
  "buried_dagger": {
   "series": "The Horus Heresy",
   "title": "The Buried Dagger",
   "author": "James Swallow",
   "number": 54,
   "year": 2019,
   "format": "Novel",
   "premise": "The Traitor Primarchs muster for the final assault on Terra, and Mortarion and the Death Guard are sent ahead as the vanguard. Lost in the warp and struck down by a terrible plague, the unbreakable Legion is brought to its knees. Meanwhile on Terra, Malcador and his agents move against a plot to spread sedition ahead of Horus's armies.",
   "summary": "The novel alternates between Mortarion's memories of Barbarus and the present. The young Primarch rises against the overlords of the poisoned mists and comes close to dying in the toxic heights before the Emperor arrives and slays the last overlord. In the present, the Death Guard fleet becomes becalmed in the warp, and a devastating plague spreads through ships and Legionaries alike. Calas Typhon is revealed to have sabotaged the fleet so the Legion would fall to Nurgle. With his sons dying around him and his body failing, Mortarion makes the bargain he swore never to make and gives himself and the Death Guard to the Plague God. On Terra, Garro, Loken and the Knights-Errant work for Malcador against the conspiracy. As the Traitor fleets enter the Sol System, Malcador brings nine Knights-Errant before the Emperor to found a new order. Loken refuses so that he can face Horus, and the other eight are taken through the webway to Titan as the first Grey Knights. Garro, who has no psychic gift, is released from the Sigillite's service.",
   "characters": [
    "Mortarion – Primarch, Death Guard",
    "Calas Typhon – First Captain, Death Guard",
    "Nathaniel Garro – Agentia Primus of the Knights-Errant",
    "Garviel Loken – Knight-Errant",
    "Malcador the Sigillite – Regent of Terra",
    "Tylos Rubio – Knight-Errant psyker",
    "The Emperor – Master of Mankind"
   ],
   "legions": [
    "Death Guard",
    "Knights Errant",
    "Grey Knights"
   ],
   "setting": "c. 013–014.M31 (flashbacks to M30)",
   "sort": 31013.9,
   "planets": [
    "barbarus",
    "terra",
    "titan"
   ],
   "related": [
    "garro",
    "pale_king",
    "flight_eisenstein",
    "solar_war"
   ]
  },
  "dropsite_massacre": {
   "title": "Dropsite Massacre",
   "author": "John French",
   "year": 2025,
   "format": "Novel",
   "pages": 400,
   "premise": "Horus' rebellion is revealed, and Rogal Dorn and Malcador assemble the largest loyalist force of legionaries and primarchs ever gathered to crush it before it can spread. Told through traitors and loyalists alike – from Maloghurst and Khârn to Castrmen Orth of the Iron Hands and the Raven Guard's Kaedes Nex – the march to Isstvan V begins.",
   "summary": "On Terra, Malcador and Dorn dispatch a retribution fleet, which is then stranded for months at Phall, while Alpha Legion sabotage keeps a warning from Vulkan from getting through. At the traitors' council on Isstvan V, Angron storms out and Maloghurst, struggling to hold together the Warmaster's fractious allies, sends Abaddon to Khârn to bring him back in line; Horus refuses to kill his brother. Horus reaches Alpharius through Davinite sorcery at the cost of an astropath's life, and the Alpha Legion works on both sides of the coming battle. Fabius Bile modifies an Emperor's Children legionary as a gift for Horus. Ferrus Manus weighs and rejects Exterminatus, and after the first wave drives the traitors back he charges after them against the advice of Corax and Vulkan. Then the second wave – Night Lords, Iron Warriors, Word Bearers and Alpha Legion – turns its guns on the loyalists in the Urgall Depression, with Legio Mortis Titans joining the slaughter. Ferrus Manus dies off-page at Fulgrim's hand; the captured Iron Hands centurion Castrmen Orth watches Fulgrim present his primarch's head to Fabius Bile. Hundreds of thousands lie dead as the book closes on the words 'It is done'.",
   "characters": [
    "Maloghurst – Equerry, Sons of Horus",
    "Khârn – Captain of the 8th Assault Company, World Eaters",
    "Castrmen Orth – Centurion, Iron Hands",
    "Kaedes Nex 'the Blood Crow' – Moritat-Prime, Raven Guard",
    "Alvarex Maun – Strike Captain, Raven Guard",
    "Fabius Bile – Chief Apothecary, Emperor's Children",
    "Horus – Warmaster, Sons of Horus",
    "Ferrus Manus – Primarch, Iron Hands",
    "Corvus Corax – Primarch, Raven Guard",
    "Angron – Primarch, World Eaters",
    "Fulgrim – Primarch, Emperor's Children",
    "Malcador the Sigillite – Regent of Terra"
   ],
   "legions": [
    "Sons of Horus",
    "World Eaters",
    "Emperor's Children",
    "Death Guard",
    "Iron Hands",
    "Raven Guard",
    "Salamanders",
    "Night Lords",
    "Iron Warriors",
    "Alpha Legion",
    "Word Bearers"
   ],
   "setting": "006.M31",
   "sort": 31006,
   "planets": [
    "isstvan5",
    "terra",
    "phall"
   ],
   "related": [
    "fulgrim",
    "first_heretic",
    "scorched_earth",
    "vulkan_lives"
   ],
   "series": "The Horus Heresy",
   "number": null
  },
  "sons_of_the_selenar": {
   "title": "Sons of the Selenar",
   "author": "Graham McNeill",
   "series": "The Siege of Terra",
   "year": 2020,
   "format": "Novella",
   "premise": "The Shattered Legions crew of the strike cruiser Sisypheum reaches the Sol System at the end of its endurance, divided between a suicidal mission and orders to rejoin the defence of Terra. Garbled transmissions draw them down to the war-torn surface of Luna. There, horrors from the earliest days of gene-craft and a long-buried secret await them.",
   "summary": "Battered from the Solar War, in which they destroyed the Word Bearers battleship Covenant of Truth, the Sisypheum's Iron Hands, Raven Guard and Salamander crew pick up a distress call from Luna. It comes from Ta'lab Vita-37, a Selenar gene-witch who has hidden the Magna Mater, a relic holding perfect copies of all twenty primarchs' genomes, ever since the Imperium's first pacification of the moon two centuries earlier. With Luna occupied by the traitors and Horus hunting the relic, the crew undertakes a near-suicidal raid beneath the lunar surface. They defeat the Dark Mechanicum magos tracking the relic, but he summons Justaerin Terminators of the Sons of Horus before he dies. Mortally wounded, Vita-37 entrusts the Magna Mater to the loyalists and unleashes the last Ur-legionaries, failed Selenar gene-experiments, against the Justaerin. One by one the Sisypheum's warriors die to get the relic away. An unexpected intervention by Magnus the Red's flagship Photep lets the last survivors escape. The wounded Iron Father Sabik Wayland leaves Nykona Sharrowkyn and the relic on an abandoned void station, then draws off the pursuit with the Sisypheum. Sharrowkyn puts himself into hibernation, and the last thing he sees is the station's name: Sangprimus Portum.",
   "characters": [
    "Nykona Sharrowkyn – Raven Guard sniper of the Sisypheum",
    "Sabik Wayland – Iron Father, Iron Hands",
    "Atesh Tarsa – Salamanders Apothecary",
    "Ulrach Branthan – wounded Iron Hands captain of the Sisypheum",
    "Ta'lab Vita-37 – Selenar gene-witch",
    "Trastevere – Justaerin captain, Sons of Horus"
   ],
   "legions": [
    "Iron Hands",
    "Raven Guard",
    "Salamanders",
    "Sons of Horus",
    "Dark Mechanicum"
   ],
   "setting": "014.M31",
   "sort": 31014,
   "planets": [
    "luna"
   ],
   "related": [
    "shattered_legions",
    "angel_exterminatus",
    "solar_war"
   ]
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
   "number": 1,
   "year": 2016,
   "format": "Novella",
   "pages": 240,
   "premise": "Long before the Imperium reached him, Roboute Guilliman ruled Ultramar as the last Battle King of Macragge, and he now leads the XIII Legion in the Great Crusade. Facing the last stronghold of a rival ork empire on the world of Thoas, he must choose his weapons carefully, because how he wins matters as much as winning.",
   "summary": "The novella is not an origin story: it follows the Ultramarines' final battle against the remnants of an ork empire that spanned about a dozen systems, fought on Thoas shortly after the razing of Monarchia. Excerpts from Guilliman's own treatises open the chapters and give oblique glimpses of his early years and his philosophy of war. The orks hold a fortress complex built into the ruins and pyramids of a vanished pre-Imperial human civilisation. Captain Hierax of the Nemesis Chapter wants to purge the ruins with Destroyers, but Guilliman refuses, choosing to preserve what remains of the lost humans, and only later lets the Second Destroyers deploy in a limited role. That choice has a price: orks pour out of tunnels beneath the northern pyramids, and when Captain Sirras of the 223rd fires lascannons against orders, a pyramid collapses and kills most of the 22nd Chapter's forces. Guilliman responds by reshuffling his commanders and holding his Legion to the precision he demands of it. He personally leads the First Chapter's spearhead into the heart of the complex. There he kills the Ork Emperor on its throne of piled missiles with a sustained burst from Arbitrator into its maw, without setting off the ordnance beneath it. With the empire broken, he has the fortress complex flattened from orbit. He later cites Thoas as the kind of cost he wants to avoid when he refuses Exterminatus elsewhere.",
   "characters": [
    "Roboute Guilliman – Primarch of the Ultramarines",
    "Marius Gage – Chapter Master Primus, Ultramarines",
    "Hierax – Captain, 22nd 'Nemesis' Chapter, urges use of the Destroyers",
    "Sirras – Captain of the 223rd Company, fires against orders",
    "The Ork Emperor – warlord of the ork empire on Thoas"
   ],
   "legions": [
    "Ultramarines"
   ],
   "setting": "late M30 (after 903.M30, shortly after the razing of Monarchia)",
   "sort": 30964,
   "planets": [
    "thoas"
   ],
   "related": [
    "know_no_fear",
    "scions_of_the_emperor"
   ]
  },
  "great_wolf": {
   "title": "Leman Russ: The Great Wolf",
   "author": "Chris Wraight",
   "series": "The Horus Heresy: Primarchs",
   "number": 2,
   "year": 2016,
   "format": "Novella",
   "pages": 176,
   "premise": "At the height of the Great Crusade, the Space Wolves are sent to bring the rebel world of Dulan and its tyrant Durath to compliance. Russ has sworn to kill Durath himself, but his brother Lion El'Jonson of the Dark Angels urges caution, and with two Legions in the field the rivalry between the Wolf and the Lion threatens to engulf them all.",
   "summary": "In 870.M30 the Space Wolves are assigned to finish the war against the Faash of Dulan after the technologically advanced enemy has inflicted a string of defeats on the front-line Imperial divisions. The Dark Angels arrive first, having found Dulan's location in old records, and the two Legions grind against each other from the start. In the void war the Space Wolves battleship Aesrumnír destroys a Faash cruiser despite Dark Angels hails, killing a Dark Angels boarding party in the process; the Blade of Numarc fires on the Aesrumnír in return, and only Russ's personal intervention stops the clash from escalating. Russ has commandeered a jarl's flagship and holds back the final push while he brings an errant jarl back to heel, as Jorin Bloodhowl and Bulveye break from the main attack to search for a missing warrior. On the surface the Lion moves on the Tyrant's Crimson Fortress on his own plan, leaving the Wolves' flank exposed, and he takes Durath's head before Russ can fulfil his oath. When the Lion shows him the Tyrant's head, Russ strikes him, and the two primarchs fight for a day and a night. The duel ends with the Lion knocking Russ unconscious, and each Legion records the quarrel in its own way. The feud gives rise to the tradition of honour duels between the two Legions that endures into the 41st Millennium.",
   "characters": [
    "Leman Russ – Primarch of the Space Wolves",
    "Lion El'Jonson – Primarch of the Dark Angels",
    "Durath – Tyrant of Dulan",
    "Ogvai Ogvai Helmschrot – Jarl of the Tra (3rd Great Company)",
    "Gunnar Gunnhilt – Jarl of the Onn (1st Great Company)",
    "Jorin Bloodhowl – Jarl of the Dekk-Tra (13th Great Company)",
    "Bulveye – Space Wolves warrior of the 13th Great Company"
   ],
   "legions": [
    "Space Wolves",
    "Dark Angels"
   ],
   "setting": "870.M30",
   "sort": 30870,
   "planets": [
    "dulan"
   ],
   "related": [
    "prospero_burns",
    "wolfsbane",
    "lord_of_the_first"
   ]
  },
  "master_of_prospero": {
   "title": "Magnus the Red: Master of Prospero",
   "author": "Graham McNeill",
   "series": "The Horus Heresy: Primarchs",
   "number": 3,
   "year": 2017,
   "format": "Novella",
   "premise": "Magnus the Red, a psyker without peer save the Emperor, leads the Thousand Sons through the Great Crusade in search of lost knowledge. Fighting alongside his brother Perturabo of the Iron Warriors to save a dying world, Magnus begins to foresee an approaching nexus of fate, and must choose between their shared task and his own mastery of the warp.",
   "summary": "In 853.M30 the governor of Morningstar calls for help as geomagnetic storms begin to tear the planet apart, and the Thousand Sons, later joined by Perturabo's Iron Warriors, arrive to evacuate its population. In the capital Calaena, Ahriman and Forrix work side by side to keep order while civilians are loaded aboard the ancient mass convoy ship Lux Ferem. The evacuation is opposed by the Sons of Shaitan, a doomsday cult that insists the death of the people and the planet are part of a great plan. Atharva and others break into an ancient Terran colony vessel and are possessed by Shai-Tan, a gestalt entity lurking within it. The two primarchs clash over methods as the crisis deepens, Perturabo the pragmatic engineer and Magnus the seer chasing visions of a coming nexus. Magnus defeats the entity and seals it within the Book of Magnus. Its corruption has already spread, so Magnus and Perturabo destroy Morningstar by Exterminatus and annihilate the evacuation fleet with it, and no native of the world survives. Afterwards Magnus erases his Legion's memories of the campaign, a secret that resurfaces years later.",
   "characters": [
    "Magnus the Red – Primarch of the Thousand Sons",
    "Perturabo – Primarch of the Iron Warriors",
    "Ahzek Ahriman – Chief Librarian, Thousand Sons",
    "Atharva – Thousand Sons sorcerer",
    "Kydomor Forrix – Iron Warriors commander",
    "Shai-Tan – entity behind the Sons of Shaitan cult"
   ],
   "legions": [
    "Thousand Sons",
    "Iron Warriors"
   ],
   "setting": "853.M30",
   "sort": 30853,
   "planets": [
    "morningstar"
   ],
   "related": [
    "thousand_sons",
    "hammer_of_olympia",
    "crimson_king"
   ]
  },
  "hammer_of_olympia": {
   "title": "Perturabo: The Hammer of Olympia",
   "author": "Guy Haley",
   "series": "The Horus Heresy: Primarchs",
   "number": 4,
   "year": 2017,
   "format": "Novella",
   "premise": "A child prodigy of Olympia, Perturabo grew up amid the feuds of its city-states before the Emperor found him. After decades of thankless campaigning, the primarch resents his Legion's place in the Imperium, and when word reaches him of turmoil on his adopted homeworld, he orders the Iron Warriors to abandon their war against the xenos hrud and crush the rebellion by any means necessary.",
   "summary": "The novella alternates between Perturabo's youth on Olympia and the end of the Great Crusade. In the past, the boy is found in the mountains below Lochos and taken in by the Tyrant Dammekos; he becomes the city's peerless engineer and general, and grows close to his foster sister Calliphone. In the present, in 999.M30, the Iron Warriors fight the time-bending hrud in the Sak'trada Deeps, where a hrud temporal shockwave devastates the Iron Blood and much of the fleet, and Perturabo is censured for the failure. News then arrives that Olympia has risen against Imperial rule, a revolt the Lexicanum account says was covertly engineered by the Word Bearers. Perturabo abandons the campaign and brings the whole Legion down on his homeworld. He gives the Olympians a choice: carry out a decimation themselves, one in every ten, or face extermination. Storming the palace of Lochos, he finds an aged Calliphone beside her father's tomb and strangles her, then sobs once, horrified by what he has done. By the end more than five million Olympians are dead and the survivors are enslaved.",
   "characters": [
    "Perturabo – Primarch of the Iron Warriors",
    "Dammekos – Tyrant of Lochos, Perturabo's adoptive father",
    "Calliphone – Perturabo's foster sister"
   ],
   "legions": [
    "Iron Warriors"
   ],
   "setting": "999.M30 – c. 000.M31 (flashbacks to Perturabo's youth on Olympia)",
   "sort": 30999,
   "planets": [
    "olympia"
   ],
   "related": [
    "angel_exterminatus",
    "master_of_prospero"
   ]
  },
  "bearer_of_the_word": {
   "title": "Lorgar: Bearer of the Word",
   "author": "Gav Thorpe",
   "series": "The Horus Heresy: Primarchs",
   "number": 5,
   "year": 2017,
   "format": "Novella",
   "pages": 256,
   "premise": "On Colchis, mighty religions rule a decaying society in the name of absent gods until the arrival of Lorgar, the 'Golden One', raised by Kor Phaeron, priest of the Covenant, to be his weapon in a quest for power. As religious war spreads across the planet, Lorgar is plagued by visions of the Emperor's coming and must balance the teachings of his adoptive father against the fate he knows awaits him among the stars.",
   "summary": "The young Lorgar is first taken in by the Declined, desert nomads led by Fan Morgal, until the exiled priest Kor Phaeron finds him. To keep the child's existence secret from the Covenant, Kor Phaeron has Fan Morgal and his tribe massacred and raises Lorgar as his son and disciple, often cruelly. Lorgar grows close to the people of Kor Phaeron's caravan, among them the captain Axata and Nairo, a former Covenant teacher sold into slavery. When conspirators mutiny, Lorgar kills them and saves his master's life; Kor Phaeron grows less openly abusive and names him the new Bearer of the Word. Lorgar's visions of a returning god turn converts from the Covenant, and a religious war led by his followers spreads across Colchis, with Kor Phaeron acting as his adviser in all things worldly. Nairo, now also an adviser, feuds with Kor Phaeron until he attacks him with a knife during the victory ceremony at Vharadesh, and Lorgar kills Nairo with his mace. Throughout, Lorgar is torn between his adoptive father's lessons and the visions of a golden figure coming from the stars. The book closes with the arrival of the Emperor, whom Lorgar recognises from his visions.",
   "characters": [
    "Lorgar – the 'Golden One', future Primarch of the Word Bearers",
    "Kor Phaeron – exiled Covenant priest, Lorgar's adoptive father",
    "Nairo – former Covenant teacher, slave and later Lorgar's adviser",
    "Axata – captain of Kor Phaeron's caravan",
    "Fan Morgal – chieftain of the Declined nomads",
    "The Emperor – appears at the novel's close"
   ],
   "legions": [
    "Word Bearers"
   ],
   "setting": "c. M30 (Lorgar's youth on Colchis, before the Emperor's arrival)",
   "sort": 30820,
   "planets": [
    "colchis"
   ],
   "related": [
    "first_heretic",
    "aurelian"
   ]
  },
  "palatine_phoenix": {
   "title": "Fulgrim: The Palatine Phoenix",
   "author": "Josh Reynolds",
   "series": "The Horus Heresy: Primarchs",
   "number": 6,
   "year": 2017,
   "format": "Novella",
   "premise": "Lord of Chemos and bearer of the Palatine Aquila, Fulgrim is eager to take his rightful place in the Great Crusade and test his skills, and those of his followers, against a true challenge. Accompanied by only seven of his finest warriors, he sets out to bring a rebellious world into compliance by any means necessary, and learns that the greater the triumph, the greater the price.",
   "summary": "Early in his command, while the Emperor's Children are still small enough that their veterans are 'the Two Hundred', Fulgrim vows to bring the world of Byzas into compliance without fire and blood, carrying only seven blades into the campaign. His companions are Narvo Quin, Grythan Thorn, Abdemon, Flavius Alkenex, Kasperos Telmar, the Apothecary Fabius and Cyrius, with the Iterator Golconda Pyke of the 28th Expedition as his diplomat. On Byzas he must navigate the court of the Hereditary Governor Pandion IV and his Chancellor Belleros Corynth, where rebellion and courtly intrigue run together. Fulgrim proudly refuses help from a local warrior brotherhood and insists on winning through diplomacy and the sword alone. The campaign nearly kills him. In the climax he takes on the rebels at their base single-handed and disarms an atomic bomb by driving his sword into it. Byzas is brought into compliance as promised, but the cost of Fulgrim's pride and perfectionism foreshadows the flaws that will later consume him.",
   "characters": [
    "Fulgrim – Primarch of the Emperor's Children",
    "Golconda Pyke – Primary Iterator and diplomat of the 28th Expedition",
    "Fabius – Apothecary, one of Fulgrim's seven",
    "Narvo Quin – one of Fulgrim's seven",
    "Grythan Thorn – one of Fulgrim's seven",
    "Kasperos Telmar – Chemosian warrior, one of Fulgrim's seven",
    "Abdemon – one of Fulgrim's seven",
    "Flavius Alkenex – one of Fulgrim's seven",
    "Cyrius – one of Fulgrim's seven",
    "Pandion IV – Hereditary Governor of Byzas",
    "Belleros Corynth – Chancellor of Byzas"
   ],
   "legions": [
    "Emperor's Children"
   ],
   "setting": "c. M30 (early in Fulgrim's command, before 970.M30)",
   "sort": 30860,
   "planets": [
    "byzas"
   ],
   "related": [
    "fulgrim",
    "gorgon_of_medusa"
   ]
  },
  "gorgon_of_medusa": {
   "title": "Ferrus Manus: The Gorgon of Medusa",
   "author": "David Guymer",
   "series": "The Horus Heresy: Primarchs",
   "number": 7,
   "year": 2018,
   "format": "Novella",
   "pages": 224,
   "premise": "The Great Crusade has swept across half the galaxy, and rumours say the Emperor will soon step back and raise one of his sons to lead in his stead. Faced with the bitterly non-compliant human empire of Gardinaal and a leaderless host of Ultramarines, Thousand Sons and Emperor's Children under his command, Ferrus Manus decides to make an example that even the Emperor cannot ignore.",
   "summary": "Gardinaal, an eleven-world human empire at the edge of the Dominion of Storms, has wrecked the 413th Expedition: its STC war machines threw back the Ultramarines and Titans of Legio Atarus, killed hundreds of thousands of Imperial Army troops and left the fleet only able to hold a blockade. Ferrus Manus arrives with the Iron Hands and a contingent of Emperor's Children and takes command from Ulan Cicerus. The book starts slowly, with the Iron Hands training alongside their allies, and is interwoven with flashbacks to Ferrus's youth on Medusa and his relations with his brothers. To shame his own Legion into doing better, Ferrus names the Emperor's Children swordsman Tesserius Akurduana, First Palatine, as his equerry, and the two clash over how much caution the war requires. Ferrus challenges him to a duel; Akurduana lasts several minutes before nearly dying and earns the Gorgon's respect. When a Gardinaal orbital superweapon threatens the fleet, Akurduana leads a boarding party to disable it and sacrifices himself; he is given a full funeral aboard the Fist of Iron. The Iron Hands then crush Gardinaal Prime in relentless assaults, Ferrus refuses the Lords' offer of unconditional surrender, and the Ultramarines are granted the honour of storming the breach into the capital. When the last Lords of Gardinaal have paid for their defiance, Ferrus simply says 'It is done', and the world becomes a model of compliance with its industry intact.",
   "characters": [
    "Ferrus Manus – Primarch of the Iron Hands",
    "Gabriel Santar – First Captain of the Iron Hands",
    "Tesserius Akurduana – First Palatine of the Emperor's Children, made Ferrus's equerry",
    "Ulan Cicerus – Ultramarines Master commanding the 413th Expedition"
   ],
   "legions": [
    "Iron Hands",
    "Emperor's Children",
    "Ultramarines",
    "Thousand Sons"
   ],
   "setting": "869.M30",
   "sort": 30869,
   "planets": [
    "gardinaal_prime",
    "medusa"
   ],
   "related": [
    "fulgrim",
    "palatine_phoenix",
    "scions_of_the_emperor"
   ]
  },
  "warhawk_of_chogoris": {
   "title": "Jaghatai Khan: Warhawk of Chogoris",
   "author": "Chris Wraight",
   "series": "The Horus Heresy: Primarchs",
   "number": 8,
   "year": 2018,
   "format": "Novella",
   "pages": 224,
   "premise": "Ever since Chogoris was brought into the Imperium, the White Scars' warrior mysticism has sat uneasily with the ideals of Unity. As the Librarius project is born and opposition to it grows, other primarchs try to draw the Khan into the great argument over psychic power in the Legions, and he must decide where his greatest allegiance lies: with the Imperial Truth or with his own heritage.",
   "summary": "The novella moves through a series of dated episodes from the Khan's life in the Great Crusade. On Terra in 879.M30 he and his first Chogorian warriors meet the Imperium; reluctant about the Imperial Truth, he is persuaded by Yesugei to meet Malcador, who convinces him to go along, and he leaves as soon as he can. On Hoadh in 884.M30 the White Scars destroy psychic crab-like xenos that have enslaved a human population, a lesson the Khan suspects Malcador intended about the misuse of the warp; afterwards Sanguinius asks him to speak for the Librarius to Horus. A visit to Chogoris in 898.M30 shows how the Legion walls its fortress-monastery off from the Chogorians to preserve their freedom. On Gar-Ban-Gar in 906.M30 the White Scars and Luna Wolves fight orks whose weirdboyz the stormseers turn against their own; the Khan kills the warboss, Giyahun falls, Hasik grows close to the Luna Wolves and their warrior lodges, and the Khan promises that when Horus calls, he will answer. On Baal in 908.M30 he meets Magnus and Sanguinius to safeguard the Librarius, but Magnus's arrogance about Chogoris leaves them without a common plan and the Khan departs bitterly. The book ends at Ullanor after the Triumph, where a Luna Wolves Librarian reveals that Horus understood the Librarius's value yet stayed neutral to keep his brothers close. The Khan repeats his promise to Horus in a strained meeting, senses the distance growing between Horus and his brothers, and leaves for Chondax.",
   "characters": [
    "Jaghatai Khan – Primarch of the White Scars",
    "Targutai Yesugei – Stormseer of the White Scars",
    "Hasik – White Scars warrior",
    "Giyahun – high-ranking White Scars officer",
    "Qin Xa – White Scars keshig",
    "Malcador – the Sigillite",
    "Magnus the Red – Primarch of the Thousand Sons",
    "Sanguinius – Primarch of the Blood Angels",
    "Horus – Primarch of the Luna Wolves",
    "Hastur Sejanus – Luna Wolves captain",
    "Jereth – Luna Wolves Librarian"
   ],
   "legions": [
    "White Scars"
   ],
   "setting": "879.M30 – 000.M31",
   "sort": 30879,
   "planets": [
    "terra",
    "chogoris",
    "baal",
    "ullanor"
   ],
   "related": [
    "scars",
    "brotherhood_of_the_storm",
    "path_of_heaven"
   ]
  },
  "lord_of_drakes": {
   "title": "Vulkan: Lord of Drakes",
   "author": "David Annandale",
   "series": "The Horus Heresy: Primarchs",
   "number": 9,
   "year": 2018,
   "format": "Novella",
   "pages": 224,
   "premise": "The Terran-born warriors of the XVIII Legion are still waiting to learn who their primarch is, unaware that he has already been found. In the Taras Division they make a last, desperate stand against a monstrous ork invasion, while on Nocturne Vulkan has raised a new force of warriors and must now lead them to war, to save one half of his Legion and forge a new, indivisible whole.",
   "summary": "With most Legions committed to the expeditions or to the Rangdan war in the north, the XVIII Legion under Lord Commander Cassian Vaughn is the only force able to answer an ork invasion of the colony worlds of the Taras Division. For nearly a year some 19,000 legionaries fight running battles against over a million orks in crude ships, rok asteroids and space hulks, buying time to evacuate three planetary populations to the Taras System. Vaughn is grievously wounded, and he decides to draw the horde onto Antaeum, a volcanic death world, where the Legion will use the planet's fury against the orks and expect no relief. Meanwhile on Nocturne, Vulkan has trained a new generation of warriors from his people and, learning of his sons' plight, leads them out sooner than planned. His fleet reaches Antaeum just as the XVIII is about to be overrun, and he leads the Nocturnean Salamanders down to the surface, where the surrounded orks are quickly destroyed. Vulkan kneels to his Terran sons in thanks for their sacrifice rather than demanding their fealty. He formally accepts mastery of the Legion by presenting the mortally wounded Vaughn with the broken power klaw of the warlord who struck him down. Afterwards Vulkan builds the Iron Dragon Dreadnought so that Vaughn can serve on, honours the Terran veterans in the reformed Legion's heraldry and Pyre Guard, and unites the two halves into the Salamanders.",
   "characters": [
    "Vulkan – Primarch of the Salamanders",
    "Cassian Vaughn – Lord Commander of the XVIII Legion",
    "Tukeren Na'shor – XVIII Legion officer"
   ],
   "legions": [
    "Salamanders"
   ],
   "setting": "c. M30 (soon after Vulkan's discovery)",
   "sort": 30850,
   "planets": [
    "antaeum",
    "nocturne"
   ],
   "related": [
    "vulkan_lives",
    "promethean_sun",
    "sons_of_the_emperor"
   ]
  },
  "lord_of_shadows": {
   "title": "Corax: Lord of Shadows",
   "author": "Guy Haley",
   "series": "The Horus Heresy: Primarchs",
   "number": 10,
   "year": 2018,
   "format": "Novella",
   "pages": 224,
   "premise": "During the Great Crusade, Corax and the Raven Guard, with a massive Imperial Army war host, are sent to humble the immense void-cities of the Carinae. The lords of Carinae are well defended and without remorse, and when an ancient horror is unleashed, Corax's desire for vengeance is tested against the need for a swift and certain end to the war.",
   "summary": "The 27th Expedition's campaign against the Carinae Sodality, a civilisation of a thousand artificial moons, has stalled. Its commander asks for the Night Lords, but Corax answers instead, determined to win without Curze's terror tactics; he brings about 30,000 legionaries and takes the void-cities one at a time through mobility and stealth rather than besieging the whole system. Praefector Marcus Valerius of the Imperial Army is troubled by visions that the Raven Guard face peril. At the void-city of Zenith-312, Arch-Comptroller Agarth unleashes the anima-phage, a weapon from the Age of Strife that turns the population and the accompanying Imperial Army regiments into frenzied killers, and the outnumbered Raven Guard are forced to cut them down; the fate of Captain Effe Dellius is left unknown. Agarth uses the massacre of his own people to escape, and the taskforce turns to hunting him with the Moritat kill-cadres. The Night Lords join the campaign under Curze, whose mass slaughter of civilians brings the two primarchs close to blows; Corax persuades Sevatar to press Curze into withdrawing. The war drags on for almost seven more months before Agarth is run to ground. Back home, resentment toward the old Tech-Guild masters of Kiavahr boils over into bloodshed among the people of Deliverance, and Corax must weigh vengeance against justice there too.",
   "characters": [
    "Corvus Corax – Primarch of the Raven Guard",
    "Arch-Comptroller Agarth – ruler of the Carinae Sodality",
    "Marcus Valerius – Praefector of the Imperial Army",
    "Effe Dellius – Captain, Raven Guard",
    "Branne Nev – Commander of the Raptors, Raven Guard",
    "Agapito Nev – Commander of the Talons, Raven Guard",
    "Konrad Curze – Primarch of the Night Lords",
    "Jago Sevatarion – First Captain of the Night Lords"
   ],
   "legions": [
    "Raven Guard",
    "Imperial Army"
   ],
   "setting": "c. late M30",
   "sort": 30940,
   "planets": [
    "deliverance",
    "kiavahr"
   ],
   "related": [
    "deliverance_lost",
    "night_haunter",
    "corax"
   ]
  },
  "slave_of_nuceria": {
   "title": "Angron: Slave of Nuceria",
   "author": "Ian St. Martin",
   "series": "The Horus Heresy: Primarchs",
   "number": 11,
   "year": 2019,
   "format": "Novella",
   "premise": "A Legion becomes a reflection of its primarch, both his strengths and his flaws, and for the XII Legion, once the War Hounds and now the World Eaters, the two are almost impossible to separate. Placed in command of a Legion he does not want, in service to a father he cannot forgive, Angron gives his sons an ultimatum that will set them on a path from which there is no return.",
   "summary": "Two narratives interlock. In the past, the young Angron fights in the arenas of Nuceria for the entertainment of the High Riders and slowly bonds with his fellow gladiators. In the present, Centurion Mago of the 18th Company, a Terran-born veteran of the War Hounds, leads his brothers in the compliance of Ghenna. Negotiations break down when the World Eaters discover that the Ghennans have altered their own bodies and use an apparent form of abominable intelligence. Angron demands that the world fall within 31 hours, one Nucerian day, on pain of decimation; the Legion is swamped by billions of synthetic simulacra and the deadline passes before the capital falls. When Mago refuses to carry out another decimation, Angron flies into a rage and kills swathes of his own sons until Vorias's Librarians subdue him. Apothecary Gahlan Surlak reverse-engineers Ghennan technology and finally perfects a way to implant the Butcher's Nails, and Khârn is the first to survive the procedure. Mago tries to destroy Surlak's equipment and fails. The World Eaters return with about a thousand nailed legionaries; Surlak traces the command signal to the true Ghennans, barely a thousand shrivelled beings in life-pods controlling the simulacra. Mago dies in a duel with Khârn after declaring that the Legion is damned, his resistance collapses, and in a single night the World Eaters leave nothing alive on Ghenna.",
   "characters": [
    "Angron – Primarch of the World Eaters",
    "Mago – Centurion, 18th Company, World Eaters",
    "Khârn – World Eaters captain, first to survive the Nails",
    "Gahlan Surlak – Chief Apothecary of the World Eaters",
    "Vorias – Chief Librarian of the World Eaters",
    "The High Riders – Nucerian slave-masters of Angron's youth"
   ],
   "legions": [
    "World Eaters"
   ],
   "setting": "c. late M30 (flashbacks to Angron's youth on Nuceria)",
   "sort": 30955,
   "planets": [
    "nuceria"
   ],
   "related": [
    "betrayer"
   ]
  },
  "lord_of_the_first": {
   "title": "Lion El'Jonson: Lord of the First",
   "author": "David Guymer",
   "series": "The Horus Heresy: Primarchs",
   "number": 13,
   "year": 2020,
   "format": "Novella",
   "pages": 208,
   "premise": "Lion El'Jonson is the paragon of what a primarch should be, and his Dark Angels are the Emperor's last line and final sanction. While the Emperor gathers his mightiest sons for the assault on Ullanor, the Lion instead takes his Legion to the edge of the galaxy near the Ghoul Stars to subdue a single rebellious world, and he shares his reasons with no one, not even his own sons.",
   "summary": "In 997.M30, during the Northern Fringe campaign, the Lion investigates disappearances and unrest on Muspel, a passive world first brought into compliance by the Blood Angels and rebuilt by the Imperium. The rebellion turns out to be the work of the Khrave, psychic bat-like xenos who steal minds, and when the Dark Angels arrive the Khrave seize mortal members of the fleet as thralls. The Legion holds firm, forcing the xenos to pour their strength into individual Khrave-hosts, whose deaths kill the Khrave controlling them and weaken the gestalt led by the Autochthonar. The Lion has kept his true purpose secret, even from most of his own warriors, so the mind-reading Khrave cannot learn it from his thralls: he came to Muspel to lure them out and destroy them. When the Khrave-host that had been the remembrancer Savine Grael tries to dominate him, his will proves stronger; as she dies he reads the Khrave network, learning where every Khrave is and that the Autochthonar is leading a fleet from the Ghoul Stars to Muspel. When the fleet attacks, the Lion teleports aboard the Autochthonar's ship with a small band of Dark Angels and fights his way to its chamber. The Autochthonar nearly overwhelms him, until on the surface Ironwing Master Duriel sacrifices himself to destroy a Khrave-Titan with an atomic bomb, and the psychic backlash leaves the xenos ruler helpless. The Lion tells it that the Imperium may one day fall but it will not live to see it, and drives the Lion Sword through its skull, freeing the thralls and ending the Khrave threat for millennia.",
   "characters": [
    "Lion El'Jonson – Primarch of the Dark Angels",
    "The Autochthonar – ruler of the Khrave",
    "Duriel – Master of the Ironwing, Dark Angels",
    "Savine Grael – remembrancer taken as a Khrave-host"
   ],
   "legions": [
    "Dark Angels"
   ],
   "setting": "997.M30",
   "sort": 30997,
   "planets": [
    "muspel"
   ],
   "related": [
    "great_wolf",
    "descent_angels",
    "rogal_dorn_the_emperors_crusader"
   ]
  },
  "pale_king": {
   "title": "Mortarion: The Pale King",
   "author": "David Annandale",
   "series": "The Horus Heresy: Primarchs",
   "number": 15,
   "year": 2022,
   "format": "Novella",
   "premise": "Mortarion leads the Death Guard against the Galaspar Cluster, whose ruling Order holds its people in cruel bondage, much like the tyrants of his own youth on Barbarus. When the Emperor sends two of his brothers to examine how the compliance was won, the Pale King must answer for his methods.",
   "summary": "The Conquest of Galaspar is Mortarion's first major independent action after taking command of his Legion. The frame story follows Horus and Sanguinius, sent by the Emperor to judge whether Mortarion was overly zealous; most of the book is their inquiry and Mortarion's recollection of the campaign. Galaspar is ruled by the Order, a zealous regime that lives by a philosophy of 'no correction' and keeps its people in brutal indenture, with millions controlled through cybernetics and drugs. The Death Guard fight with phosphex, scything armoured assaults and grim attrition, and Mortarion personally leads the invasion of Hive Protarkos. The Order is wiped out and the population freed. Inside the Legion, friction grows between the Terran Dusk Raiders veterans and the new recruits from Barbarus, seen through First Captain Antavus Barrazin. Through Cinis, a liberated mortal, the book offers a different view of what Mortarion's liberation means. Horus and Sanguinius are divided in their verdict; Sanguinius notes that he too was raised on a death world. Mortarion leaves Galaspar unrepentant, convinced that a Liberator and an Angel of Death can be one and the same.",
   "characters": [
    "Mortarion – Primarch of the Death Guard",
    "Horus – Primarch of the Luna Wolves, sent to judge the campaign",
    "Sanguinius – Primarch of the Blood Angels, sent to judge the campaign",
    "Antavus Barrazin – Terran-born First Captain of the Death Guard",
    "Cinis – mortal of Galaspar liberated by the Death Guard"
   ],
   "legions": [
    "Death Guard"
   ],
   "setting": "c. M30 (soon after Mortarion took command of the Legion)",
   "sort": 30862,
   "planets": [
    "galaspar"
   ],
   "related": [
    "buried_dagger",
    "scions_of_the_emperor"
   ]
  },
  "valdor": {
   "title": "Valdor: Birth of the Imperium",
   "author": "Chris Wraight",
   "series": "The Horus Heresy: Characters",
   "year": 2019,
   "format": "Novel",
   "premise": "Before the primarchs, before the Heresy, the Custodians marched with the Emperor to conquer humanity's birthworld. In the final phase of the Unification Wars, Constantin Valdor, first Captain-General of the Legio Custodes, must finish the conquest of Terra as the first Legiones Astartes rise. He discovers what kind of empire he was made to build, and what secrets it will carry into the future.",
   "summary": "In the final years of the Unification Wars, Constantin Valdor and the Custodians fight beside the Emperor to complete the conquest of Terra, while the first Legiones Astartes rise to replace the Thunder Warriors. Valdor carries out the darker work the new Imperium demands, including the secret destruction of the Thunder Warriors once their purpose is served. Grand Provost Marshal Uwoma Kandawire tries to hold Valdor to account for that destruction and stages a coup inside the Imperial Palace. Surviving Thunder Warriors under Ushotan, former commander of their IV Legion, join her, seeking revenge and an honourable death rather than slow decay. The rebels are crushed by the Space Marines in their first openly acknowledged engagement, and Valdor kills Ushotan in single combat. With the last threat on Terra removed, the planet is unified and the way is clear for the Emperor to turn to the stars.",
   "characters": [
    "Constantin Valdor – Captain-General of the Legio Custodes",
    "The Emperor of Mankind",
    "Uwoma Kandawire – Grand Provost Marshal",
    "Ushotan – former commander of the IV Legion of Thunder Warriors"
   ],
   "legions": [
    "Legio Custodes",
    "Thunder Warriors"
   ],
   "setting": "late M30 (final years of the Unification Wars)",
   "sort": 30790,
   "planets": [
    "terra"
   ],
   "related": [
    "master_of_mankind"
   ]
  },
  "luther_first_fallen": {
   "title": "Luther: First of the Fallen",
   "author": "Gav Thorpe",
   "series": "The Horus Heresy: Characters",
   "year": 2020,
   "format": "Novel",
   "premise": "Luther, the knight who found and raised Lion El'Jonson, tells his own story of Caliban. From his years at the Lion's side to the slow-burning resentment of being left behind, he recounts the choices that made him the first of the Fallen, in his own words and on his own terms.",
   "summary": "Imprisoned beneath the Rock after the fall of Caliban, Luther tells his story to a succession of Dark Angels Supreme Grand Masters who interrogate him across the millennia. In the first person, and always in his own favour, he recounts his life as a knight of Caliban, the finding of the wild boy who became Lion El'Jonson, and their war together against the Great Beasts. The coming of the Imperium brings glory to the Lion but leaves Luther more and more in his brother's shadow, until he is sent back to govern Caliban while the Legion fights among the stars. On the homeworld, resentment, rebellion and the whispers of the warp, including encounters with Calas Typhon and Erebus, shape the choices that set Luther against the Lion. His account builds toward the Lion's return and the catastrophe that shattered Caliban. The framing interrogations show how the Dark Angels have guarded his secret ever since.",
   "characters": [
    "Luther – former Grand Master of the Order, Lion's second",
    "Lion El'Jonson – Primarch of the Dark Angels",
    "Calas Typhon – First Captain of the Death Guard",
    "Erebus – First Chaplain of the Word Bearers",
    "Supreme Grand Masters of the Dark Angels – Luther's interrogators across ten thousand years"
   ],
   "legions": [
    "Dark Angels"
   ],
   "setting": "late M30 – c. 015.M31 (framed in the Rock across M31–M41)",
   "sort": 31015,
   "planets": [
    "caliban"
   ],
   "related": [
    "descent_angels",
    "fallen_angels",
    "angels_of_caliban",
    "lord_of_the_first"
   ]
  },
  "legion": {
   "title": "Legion",
   "author": "Dan Abnett",
   "series": "The Horus Heresy",
   "number": 7,
   "year": 2008,
   "format": "Novel",
   "pages": 412,
   "premise": "The Alpha Legion, last and most secretive of the Legiones Astartes, arrives on a heathen world to support the Imperial Army in a campaign against uncanny forces. Its warriors seem alike in every way, and no one can say who or what they serve. An agent of an alien power is working his way towards them.",
   "summary": "On the world Nurth, the Imperial Army's Geno Five-Two Chiliad under Colonel-Commander Peto Soneka struggles against the Nurthene, whose 'shadow' sorcery makes them deadly. The Alpha Legion arrives to support the campaign, its legionaries indistinguishable from one another and its intentions opaque. John Grammaticus, a near-immortal human working for the Cabal, a secret alliance of xenos races, infiltrates the Imperial forces to make contact with the Legion's primarch. Grammaticus brings the Alpha Legion to a meeting with the Cabal, which reveals that Alpharius and Omegon are twin primarchs and presents them with a terrible calculation: the coming war will be won or lost by Chaos, and the galaxy is better off if Horus prevails. The Alpha Legion accepts this reasoning and decides to side with the Warmaster. To keep the secret, the Legion's battle-barges destroy the 670th Expeditionary Fleet. Soneka and Grammaticus are left to face what they have learned, and Grammaticus begins to doubt the masters he serves.",
   "characters": [
    "Peto Soneka – Colonel-Commander, Geno Five-Two Chiliad, Imperial Army",
    "John Grammaticus – Perpetual and Cabal agent",
    "Alpharius – Primarch of the Alpha Legion",
    "Omegon – Alpharius' twin brother",
    "Hurtado Bronzi – Imperial Army officer",
    "Dinas Chayne – Imperial Army commander"
   ],
   "legions": [
    "Alpha Legion",
    "Imperial Army"
   ],
   "setting": "001.M31",
   "sort": 31001,
   "planets": [
    "nurth"
   ],
   "related": [
    "deliverance_lost",
    "vulkan_lives",
    "alpharius_head_of_the_hydra"
   ]
  },
  "tales_of_heresy": {
   "title": "Tales of Heresy",
   "author": "Various",
   "series": "The Horus Heresy",
   "number": 10,
   "year": 2009,
   "format": "Anthology",
   "pages": 412,
   "premise": "Long before the Heresy, the Legions struggled with their identities and with the demands of the Great Crusade. These seven stories visit the Custodian Guard, the Sisters of Silence, the Space Wolves, the Word Bearers, the Dark Angels and a newly found primarch, from the Unification of Terra to the first days of the civil war.",
   "summary": "In 'Blood Games', the Custodian Amon Tauromachian tests Terra's defences and investigates a troublemaker in the hives of Hy Brasil, uncovering a web of deceit on the Throneworld itself. 'Wolf at the Door' follows Wolf Lord Bulveye's 13th Company as they defend a long-isolated human world against the alien Harrowers. In 'Scions of the Storm', Captain Sor Talgron of the Word Bearers wages a zealous campaign in the wake of the Emperor's rebuke at Monarchia and finds unsettling parallels with the people he conquers. 'The Voice' sends the Sisters of Silence Amendera Kendel and Leilani Mollitas to investigate a Black Ship found drifting in the warp. 'Call of the Lion' shows Dark Angels commanders Astelan and Belath disagreeing over how to bring Byzanthis into compliance. In 'The Last Church', the last priest on Terra, Uriah Olathaire, debates faith and reason with a mysterious visitor who is revealed to be the Emperor. 'After Desh'ea' tells how the War Hounds struggle to win over their newly recovered primarch Angron, whose rage kills captain after captain until Khârn finds a way to reach him.",
   "characters": [
    "Amon Tauromachian – Custodian of the Legio Custodes",
    "Bulveye – Wolf Lord of the 13th Company, Space Wolves",
    "Sor Talgron – Captain, 34th Company, Word Bearers",
    "Amendera Kendel – Sister of Silence",
    "Merir Astelan – Dark Angels Chapter Master",
    "Uriah Olathaire – last priest of Terra",
    "The Emperor of Mankind",
    "Angron – Primarch of the War Hounds",
    "Khârn – Captain, 8th Assault Company, War Hounds"
   ],
   "legions": [
    "Legio Custodes",
    "Sisters of Silence",
    "Space Wolves",
    "Word Bearers",
    "Dark Angels",
    "World Eaters"
   ],
   "setting": "c. 800.M30–005.M31 (various)",
   "sort": 30950,
   "planets": [
    "terra"
   ],
   "contents": [
    {
     "title": "Blood Games",
     "author": "Dan Abnett",
     "format": "Short story"
    },
    {
     "title": "Wolf at the Door",
     "author": "Mike Lee",
     "format": "Short story"
    },
    {
     "title": "Scions of the Storm",
     "author": "Anthony Reynolds",
     "format": "Short story"
    },
    {
     "title": "The Voice",
     "author": "James Swallow",
     "format": "Short story"
    },
    {
     "title": "Call of the Lion",
     "author": "Gav Thorpe",
     "format": "Short story"
    },
    {
     "title": "The Last Church",
     "author": "Graham McNeill",
     "format": "Short story"
    },
    {
     "title": "After Desh'ea",
     "author": "Matthew Farrer",
     "format": "Short story"
    }
   ],
   "related": [
    "valdor",
    "first_heretic",
    "slave_of_nuceria"
   ]
  },
  "nemesis": {
   "title": "Nemesis",
   "author": "James Swallow",
   "series": "The Horus Heresy",
   "number": 13,
   "year": 2010,
   "format": "Novel",
   "pages": 507,
   "premise": "With the galaxy at war, powerful figures in the shadows of the Imperial Palace decide to end the rebellion with one stroke: an execution force of assassins drawn from every clade of the Officio Assassinorum is sent to kill the Warmaster. What they cannot know is that another assassin is already abroad, with his sights set on the Emperor himself.",
   "summary": "After earlier attempts on Horus' life have failed, the masters of the Officio Assassinorum, for the first time, combine their clades into a single execution force. Vindicare sniper Eristede Kell leads Koyne of the Callidus, Jenniker Soalm of the Venenum, Iota of the Culexus, the Vanus operative Fon Tariel and the Eversor Garantine, a team riven by rivalry. They travel to the world of Dagonet, where Horus is expected to accept the surrender of its rulers. Erebus, meanwhile, has sent a weapon of his own, a killer meant to strike at the Emperor, and the execution force becomes entangled with that plot. On Dagonet the force's shot kills a decoy, Luc Sedirae of the Sons of Horus, instead of the Warmaster, and nearly all of the assassins die. Their mission against Horus fails, but the counter-assassin's attack on the Emperor is thwarted.",
   "characters": [
    "Eristede Kell – Vindicare assassin and team leader",
    "Koyne – Callidus assassin",
    "Jenniker Soalm – Venenum assassin",
    "Iota – Culexus assassin",
    "Fon Tariel – Vanus operative",
    "Garantine – Eversor assassin",
    "Horus Lupercal – Warmaster",
    "Erebus – First Chaplain of the Word Bearers",
    "Luc Sedirae – Captain, Sons of Horus"
   ],
   "legions": [
    "Officio Assassinorum",
    "Sons of Horus",
    "Word Bearers"
   ],
   "setting": "c. 008.M31",
   "sort": 31008,
   "planets": [
    "dagonet",
    "terra"
   ],
   "related": [
    "vengeful_spirit"
   ]
  },
  "age_of_darkness": {
   "title": "Age of Darkness",
   "author": "Various",
   "series": "The Horus Heresy",
   "number": 16,
   "year": 2011,
   "format": "Anthology",
   "pages": 408,
   "premise": "After the betrayal at Isstvan V, Horus begins the long campaign that can only end at Terra. These nine stories shed light on the seven 'missing' years of the Heresy, filled with secrecy and silence, plans and foundations laid across distant stars.",
   "summary": "'Rules of Engagement' follows Captain Remus Ventanus testing the newly written Codex Astartes in an exercise as the war comes to Ultramar. In 'Liar's Due', a stranger with a remembrancer's tattoo spreads the rumour that Terra has fallen, and Town Forty-Four tears itself apart. 'Forgotten Sons' sends the Salamander Heka'tan to compete with a traitor Iterator for the loyalty of the world Bastion. In 'The Last Remembrancer', Rogal Dorn and Iacton Qruze interrogate a prisoner on Titan who has stood beside the Warmaster. 'Rebirth' sees the Thousand Sons captain Kalliston captured in the ruins of Prospero. 'The Face of Treachery' tells of the fleet sent to rescue Corax from Isstvan V and an infiltrator within it. In 'Little Horus', Horus Aximand leads the Sons of Horus against the Iron Hands on the mausoleum world of Dwell. 'The Iron Within' shows the crippled Warsmith Barabas Dantioch choosing loyalty to the Emperor when his Iron Warriors return for him. 'Savage Weapons' brings Lion El'Jonson face to face with Konrad Curze during the Thramas Crusade.",
   "characters": [
    "Remus Ventanus – Captain, 4th Company, Ultramarines",
    "Heka'tan – Salamanders sergeant",
    "Rogal Dorn – Primarch of the Imperial Fists",
    "Iacton Qruze – loyalist of the Sons of Horus",
    "Kalliston – Captain, Thousand Sons",
    "Corax – Primarch of the Raven Guard",
    "Horus Aximand – Captain, 5th Company, Sons of Horus",
    "Barabas Dantioch – Warsmith, Iron Warriors",
    "Lion El'Jonson – Primarch of the Dark Angels",
    "Konrad Curze – Primarch of the Night Lords"
   ],
   "legions": [
    "Ultramarines",
    "Salamanders",
    "Imperial Fists",
    "Thousand Sons",
    "Raven Guard",
    "Alpha Legion",
    "Sons of Horus",
    "Iron Hands",
    "Iron Warriors",
    "Dark Angels",
    "Night Lords"
   ],
   "setting": "005–009.M31 (various)",
   "sort": 31007,
   "planets": [
    "titan",
    "prospero",
    "isstvan5",
    "thramas"
   ],
   "contents": [
    {
     "title": "Rules of Engagement",
     "author": "Graham McNeill",
     "format": "Short story"
    },
    {
     "title": "Liar's Due",
     "author": "James Swallow",
     "format": "Short story"
    },
    {
     "title": "Forgotten Sons",
     "author": "Nick Kyme",
     "format": "Short story"
    },
    {
     "title": "The Last Remembrancer",
     "author": "John French",
     "format": "Short story"
    },
    {
     "title": "Rebirth",
     "author": "Chris Wraight",
     "format": "Short story"
    },
    {
     "title": "The Face of Treachery",
     "author": "Gav Thorpe",
     "format": "Short story"
    },
    {
     "title": "Little Horus",
     "author": "Dan Abnett",
     "format": "Short story"
    },
    {
     "title": "The Iron Within",
     "author": "Rob Sanders",
     "format": "Short story"
    },
    {
     "title": "Savage Weapons",
     "author": "Aaron Dembski-Bowden",
     "format": "Short story"
    }
   ],
   "related": [
    "deliverance_lost",
    "know_no_fear",
    "angel_exterminatus",
    "shadows_of_treachery"
   ]
  },
  "the_primarchs": {
   "title": "The Primarchs",
   "author": "Various",
   "series": "The Horus Heresy",
   "number": 20,
   "year": 2012,
   "format": "Anthology",
   "pages": 440,
   "premise": "Created in the Emperor's own image, the primarchs led their Legions in the conquest of the galaxy. These four novellas explore the hidden secrets of four of them: Fulgrim, Ferrus Manus, Lion El'Jonson and the twin primarchs of the Alpha Legion.",
   "summary": "In 'The Reflection Crack'd', the Emperor's Children captains begin to suspect that something other than Fulgrim now wears their primarch's body after Isstvan V, and they plan to free him from the daemon's grip. 'Feat of Iron' returns to the Great Crusade, where Ferrus Manus fights alongside the Salamanders and Death Guard against the Eldar on Gardinaal and is shown visions of his own fate. In 'The Lion', the Dark Angels, at war with the Night Lords, are dragged into a new conflict with daemons and forced to choose between brother Legions, and the Lion uncovers a secret that sets his Legion on its own course. 'The Serpent Beneath' follows Alpharius Omegon assembling an elite team to infiltrate a secret installation held by the Alpha Legion itself, a mission that exposes how far the Legion's deceptions reach.",
   "characters": [
    "Fulgrim – Primarch of the Emperor's Children",
    "Fabius – Apothecary, Emperor's Children",
    "Ferrus Manus – Primarch of the Iron Hands",
    "Lion El'Jonson – Primarch of the Dark Angels",
    "Corswain – Dark Angels Seneschal",
    "Alpharius Omegon – twin Primarchs of the Alpha Legion"
   ],
   "legions": [
    "Emperor's Children",
    "Iron Hands",
    "Dark Angels",
    "Alpha Legion",
    "Aeldari"
   ],
   "setting": "c. 000–007.M31 (various)",
   "sort": 31006,
   "planets": [
    "gardinaal_prime",
    "thramas"
   ],
   "contents": [
    {
     "title": "The Reflection Crack'd",
     "author": "Graham McNeill",
     "format": "Novella"
    },
    {
     "title": "Feat of Iron",
     "author": "Nick Kyme",
     "format": "Novella"
    },
    {
     "title": "The Lion",
     "author": "Gav Thorpe",
     "format": "Novella"
    },
    {
     "title": "The Serpent Beneath",
     "author": "Rob Sanders",
     "format": "Novella"
    }
   ],
   "related": [
    "fulgrim",
    "angels_of_caliban",
    "angel_exterminatus",
    "gorgon_of_medusa"
   ]
  },
  "damnation_of_pythos": {
   "series": "The Horus Heresy",
   "title": "The Damnation of Pythos",
   "author": "David Annandale",
   "number": 30,
   "year": 2014,
   "format": "Novel",
   "pages": 416,
   "premise": "After the Drop Site Massacre, a battered Iron Hands strike cruiser carrying Raven Guard and Salamanders survivors reaches Pythos, a death world crawling with giant predators. While the Legionaries carve out a refuge for human refugees adrift in the warp, they hope to turn the planet into a base for striking back at the Traitors. But something on Pythos is waiting for them.",
   "summary": "Captain Durun Atticus of the Iron Hands 111th Clan-Company brings the Veritas Ferrum and its mixed band of Isstvan survivors to the Pandorax System. Pythos is a savage jungle world, and the Legionaries fight its monstrous beasts while sheltering refugees who arrive there. Atticus, almost entirely machine, wants to use a warp anomaly on the planet as a weapon against the Traitors, despite the doubts of his sergeant Galba and of the Salamander Khi'dem. Fear, faith and manipulation slowly erode the alliance, while the refugees turn to belief in the Emperor and dark omens multiply. The anomaly turns out to be a trap that thins the veil between realspace and the warp. The daemon Madail manifests and brings a daemonic host into reality, slaughtering the survivors and claiming the planet. The Shattered Legions' ships are remade into daemon vessels, with the Veritas Ferrum at their heart. A single warning reaches Terra, but the Administratum ignores it.",
   "characters": [
    "Durun Atticus – Captain, 111th Clan-Company, Iron Hands",
    "Galba – Sergeant, Iron Hands",
    "Khi'dem – Sergeant, Salamanders",
    "Inachus Ptero – Raven Guard veteran and former Librarian",
    "Rhydia – astropath aboard the Veritas Ferrum",
    "Madail – daemon of the warp"
   ],
   "legions": [
    "Iron Hands",
    "Salamanders",
    "Raven Guard",
    "Daemons"
   ],
   "setting": "c. 006.M31",
   "sort": 31006,
   "planets": [
    "pythos"
   ],
   "related": [
    "legacies_of_betrayal",
    "war_without_end",
    "ruinstorm",
    "shattered_legions"
   ]
  },
  "legacies_of_betrayal": {
   "series": "The Horus Heresy",
   "title": "Legacies of Betrayal",
   "author": "Various",
   "number": 31,
   "year": 2015,
   "format": "Anthology",
   "pages": 416,
   "premise": "An anthology of short stories, audio scripts and one novella from across the Heresy, with champions on both sides heading into battle on countless fronts. Its centrepiece is Chris Wraight's novella Brotherhood of the Storm, about the White Scars before they learn of Horus's rebellion. Other tales feature Angron and Lorgar, Horus himself, the Space Wolves and the scattered survivors of Isstvan V.",
   "summary": "Brotherhood of the Storm follows Shiban and Torghun at the end of the Chondax campaign, Yesugei's psychic awakening on Chogoris and the arrival of Ilya Ravallion among the White Scars. Butcher's Nails shows Angron and Lorgar on the eve of the Shadow Crusade, including an Aeldari attempt to kill Angron before he can ascend. In Warmaster, Horus speaks his thoughts to the severed head of Ferrus Manus, and in Thief of Revelations Magnus shows Ahriman scenes of the wider war. Veritas Ferrum sets up the Iron Hands of The Damnation of Pythos, while Riven, Strike and Fade and Kryptos follow loyalist survivors of Isstvan V fighting on. Honour to the Dead and Censure return to Calth. Lucius: The Eternal Blade and Kharn: The Eightfold Path chart the darkening of two Traitor champions. Heart of the Conqueror shows Angron's corruption seeping into the World Eaters' flagship, and Hunter's Moon reveals the fate of the Space Wolves sent to watch Alpharius.",
   "characters": [
    "Shiban Khan – White Scars, Brotherhood of the Storm",
    "Angron – Primarch, World Eaters",
    "Lorgar Aurelian – Primarch, Word Bearers",
    "Horus Lupercal – Warmaster",
    "Lucius – swordsman, Emperor's Children",
    "Khârn – Captain, World Eaters",
    "Nykona Sharrowkyn – Raven Guard infiltrator",
    "Bjorn – Space Wolves warrior",
    "Aeonid Thiel – Ultramarines sergeant on Calth"
   ],
   "legions": [
    "White Scars",
    "World Eaters",
    "Word Bearers",
    "Sons of Horus",
    "Emperor's Children",
    "Iron Hands",
    "Space Wolves",
    "Dark Angels"
   ],
   "setting": "c. 005–010.M31",
   "sort": 31007,
   "planets": [
    "chondax",
    "calth",
    "isstvan5"
   ],
   "contents": [
    {
     "title": "Brotherhood of the Storm",
     "author": "Chris Wraight",
     "format": "Novella"
    },
    {
     "title": "Wolf's Claw",
     "author": "Chris Wraight",
     "format": "Audio drama script"
    },
    {
     "title": "Bjorn: Lone Wolf",
     "author": "Chris Wraight",
     "format": "Short story"
    },
    {
     "title": "Serpent",
     "author": "John French",
     "format": "Short story"
    },
    {
     "title": "Riven",
     "author": "John French",
     "format": "Short story"
    },
    {
     "title": "Warmaster",
     "author": "John French",
     "format": "Audio drama script"
    },
    {
     "title": "Hunter's Moon",
     "author": "Guy Haley",
     "format": "Audio drama script"
    },
    {
     "title": "Strike and Fade",
     "author": "Guy Haley",
     "format": "Audio drama script"
    },
    {
     "title": "Veritas Ferrum",
     "author": "David Annandale",
     "format": "Audio drama script"
    },
    {
     "title": "Honour to the Dead",
     "author": "Gav Thorpe",
     "format": "Audio drama script"
    },
    {
     "title": "The Divine Word",
     "author": "Gav Thorpe",
     "format": "Short story"
    },
    {
     "title": "Cypher: Guardian of Order",
     "author": "Gav Thorpe",
     "format": "Audio drama script"
    },
    {
     "title": "Butcher's Nails",
     "author": "Aaron Dembski-Bowden",
     "format": "Audio drama script"
    },
    {
     "title": "Heart of the Conqueror",
     "author": "Aaron Dembski-Bowden",
     "format": "Short story"
    },
    {
     "title": "Kryptos",
     "author": "Graham McNeill",
     "format": "Short story"
    },
    {
     "title": "Lucius: The Eternal Blade",
     "author": "Graham McNeill",
     "format": "Audio drama script"
    },
    {
     "title": "Thief of Revelations",
     "author": "Graham McNeill",
     "format": "Short story"
    },
    {
     "title": "Kharn: The Eightfold Path",
     "author": "Anthony Reynolds",
     "format": "Audio drama script"
    },
    {
     "title": "Censure",
     "author": "Nick Kyme",
     "format": "Audio drama script"
    }
   ],
   "related": [
    "scars",
    "damnation_of_pythos",
    "betrayer",
    "brotherhood_of_the_storm"
   ]
  },
  "war_without_end": {
   "series": "The Horus Heresy",
   "title": "War Without End",
   "author": "Various",
   "number": 33,
   "year": 2016,
   "format": "Anthology",
   "pages": 544,
   "premise": "Twenty-one short stories, most first printed in limited-edition anthologies, that range from the Great Crusade to the middle years of the Heresy. They ask whether the signs of betrayal were there all along, with tales of Angron, Fulgrim, Vulkan, the Lion's Dark Angels and the Iron Warriors' escape from the Eye of Terror.",
   "summary": "Lord of the Red Sands has Angron speak with a loyalist captain on Isstvan III about his past, while The Phoenician witnesses Ferrus Manus's death through the eyes of his dying First Captain. Imperfect and Chirurgeon reveal Fulgrim's and Fabius's secret experiments. Artefacts shows Vulkan before Isstvan deciding the fate of his vault of weapons. Black Oculus follows the Iron Warriors' navigators out of the Eye of Terror towards Tallarn, and A Safe and Shadowed Place has the Night Lords choose Sotha as their next target. The Devine Adoratrice and Wolf Mother expand on Molech before and after its fall. Hands of the Emperor sets the Imperial Fists against the Custodes over Terra's defence, and Gunsight sends a surviving assassin hunting Horus aboard the Vengeful Spirit. Allegiance and Daemonology follow up Scars from the sides of Revuel Arvida and a desperate Mortarion.",
   "characters": [
    "Angron – Primarch, World Eaters",
    "Fulgrim – Primarch, Emperor's Children",
    "Fabius – Apothecary, Emperor's Children",
    "Vulkan – Primarch, Salamanders",
    "Mortarion – Primarch, Death Guard",
    "Revuel Arvida – Thousand Sons survivor",
    "Corswain – Seneschal, Dark Angels",
    "Maloghurst – equerry, Sons of Horus",
    "Gendor Skraivok – Night Lords captain",
    "Alivia Sureka – Perpetual"
   ],
   "legions": [
    "World Eaters",
    "Emperor's Children",
    "Dark Angels",
    "Iron Warriors",
    "Space Wolves",
    "Legio Custodes",
    "Imperial Fists",
    "Salamanders"
   ],
   "setting": "c. 000–010.M31",
   "sort": 31005,
   "planets": [
    "isstvan3",
    "isstvan5",
    "molech",
    "davin"
   ],
   "contents": [
    {
     "title": "Sermon of Exodus",
     "author": "David Annandale",
     "format": "Short story"
    },
    {
     "title": "Howl of the Hearthworld",
     "author": "Aaron Dembski-Bowden",
     "format": "Short story"
    },
    {
     "title": "Lord of the Red Sands",
     "author": "Aaron Dembski-Bowden",
     "format": "Short story"
    },
    {
     "title": "Black Oculus",
     "author": "John French",
     "format": "Short story"
    },
    {
     "title": "The Laurel of Defiance",
     "author": "Guy Haley",
     "format": "Short story"
    },
    {
     "title": "A Safe and Shadowed Place",
     "author": "Guy Haley",
     "format": "Short story"
    },
    {
     "title": "Twisted",
     "author": "Guy Haley",
     "format": "Short story"
    },
    {
     "title": "Artefacts",
     "author": "Nick Kyme",
     "format": "Short story"
    },
    {
     "title": "The Phoenician",
     "author": "Nick Kyme",
     "format": "Short story"
    },
    {
     "title": "Imperfect",
     "author": "Nick Kyme",
     "format": "Short story"
    },
    {
     "title": "Chirurgeon",
     "author": "Nick Kyme",
     "format": "Short story"
    },
    {
     "title": "The Devine Adoratrice",
     "author": "Graham McNeill",
     "format": "Short story"
    },
    {
     "title": "Wolf Mother",
     "author": "Graham McNeill",
     "format": "Short story"
    },
    {
     "title": "Hands of the Emperor",
     "author": "Rob Sanders",
     "format": "Short story"
    },
    {
     "title": "The Harrowing",
     "author": "Rob Sanders",
     "format": "Short story"
    },
    {
     "title": "Virtues of the Sons",
     "author": "Andy Smillie",
     "format": "Short story"
    },
    {
     "title": "All That Remains",
     "author": "James Swallow",
     "format": "Short story"
    },
    {
     "title": "Gunsight",
     "author": "James Swallow",
     "format": "Short story"
    },
    {
     "title": "By the Lion's Command",
     "author": "Gav Thorpe",
     "format": "Short story"
    },
    {
     "title": "Allegiance",
     "author": "Chris Wraight",
     "format": "Short story"
    },
    {
     "title": "Daemonology",
     "author": "Chris Wraight",
     "format": "Short story"
    }
   ],
   "related": [
    "vengeful_spirit",
    "tallarn",
    "scars",
    "pharos"
   ]
  },
  "eye_of_terra": {
   "series": "The Horus Heresy",
   "title": "Eye of Terra",
   "author": "Various",
   "number": 35,
   "year": 2016,
   "format": "Anthology",
   "pages": 416,
   "premise": "An anthology of fifteen short stories and audio scripts plus Aaron Dembski-Bowden's novella Aurelian, about Lorgar's pilgrimage into the Eye of Terror. The tales reach back to the Great Crusade, when Horus and the Emperor fought side by side, and forward into the bitterness that eats away at even the most steadfast souls.",
   "summary": "Aurelian is set at the first gathering of the Traitor Primarchs after Isstvan V: Lorgar confronts Horus over Fulgrim's possession and tells of his journey through the Eye of Terror, where the Ruinous Powers revealed themselves to him. The Wolf of Ash and Fire shows Horus and the Emperor attacking the Ork planetoid Gorro before Ullanor. In The Long Night, the captive Night Lord Sevatar plots his own path while imprisoned by the Dark Angels, and Massacre shows the Drop Site Massacre through the eyes of Night Lords. Brotherhood of the Moon puts Torghun Khan on trial for his part in the White Scars' lodge rebellion. The Eagle's Talon and Iron Corpses take place in the war around Tallarn. Master of the First follows the disgraced Astelan scheming on Caliban, while Red-Marked, Stratagem and The Herald of Sanguinius turn to Imperium Secundus.",
   "characters": [
    "Lorgar Aurelian – Primarch, Word Bearers",
    "Magnus the Red – Primarch, Thousand Sons",
    "Horus Lupercal – Warmaster",
    "The Emperor – Master of Mankind",
    "Jago Sevatarion – First Captain, Night Lords",
    "Torghun Khan – White Scars lodge member",
    "Merir Astelan – disgraced Dark Angels Chapter Master",
    "Aeonid Thiel – Ultramarines sergeant",
    "Azkaellon – Sanguinary Guard, Blood Angels"
   ],
   "legions": [
    "Word Bearers",
    "Luna Wolves",
    "Night Lords",
    "White Scars",
    "Dark Angels",
    "Ultramarines",
    "Blood Angels",
    "Iron Warriors"
   ],
   "setting": "c. 000–010.M31",
   "sort": 31006,
   "planets": [
    "isstvan5",
    "caliban",
    "tallarn"
   ],
   "contents": [
    {
     "title": "The Wolf of Ash and Fire",
     "author": "Graham McNeill",
     "format": "Short story"
    },
    {
     "title": "Aurelian",
     "author": "Aaron Dembski-Bowden",
     "format": "Novella"
    },
    {
     "title": "The Long Night",
     "author": "Aaron Dembski-Bowden",
     "format": "Audio drama script"
    },
    {
     "title": "Massacre",
     "author": "Aaron Dembski-Bowden",
     "format": "Short story"
    },
    {
     "title": "Brotherhood of the Moon",
     "author": "Chris Wraight",
     "format": "Short story"
    },
    {
     "title": "Master of the First",
     "author": "Gav Thorpe",
     "format": "Audio drama script"
    },
    {
     "title": "Inheritor",
     "author": "Gav Thorpe",
     "format": "Short story"
    },
    {
     "title": "Vorax",
     "author": "Matthew Farrer",
     "format": "Short story"
    },
    {
     "title": "Ironfire",
     "author": "Rob Sanders",
     "format": "Short story"
    },
    {
     "title": "Stratagem",
     "author": "Nick Kyme",
     "format": "Audio drama script"
    },
    {
     "title": "Red-Marked",
     "author": "Nick Kyme",
     "format": "Audio drama script"
    },
    {
     "title": "Sins of the Father",
     "author": "Andy Smillie",
     "format": "Short story"
    },
    {
     "title": "The Herald of Sanguinius",
     "author": "Andy Smillie",
     "format": "Audio drama script"
    },
    {
     "title": "The Eagle's Talon",
     "author": "John French",
     "format": "Audio drama script"
    },
    {
     "title": "Iron Corpses",
     "author": "David Annandale",
     "format": "Audio drama script"
    },
    {
     "title": "The Final Compliance of Sixty-Three Fourteen",
     "author": "Guy Haley",
     "format": "Short story"
    }
   ],
   "related": [
    "first_heretic",
    "aurelian",
    "scars",
    "tallarn"
   ]
  },
  "path_of_heaven": {
   "series": "The Horus Heresy",
   "title": "The Path of Heaven",
   "author": "Chris Wraight",
   "number": 36,
   "year": 2016,
   "format": "Novel",
   "pages": 432,
   "premise": "Four years after choosing the Emperor, the White Scars are worn down by a hit-and-run war against the Death Guard and the Emperor's Children far from Terra. Warp storms hem them in and old divisions resurface. Jaghatai Khan and his Stormseers must find a route back to the Throneworld before the final battle begins.",
   "summary": "The White Scars' raids against Traitor supply lines are losing their edge as Mortarion's Death Guard and a resurrected, mutated Eidolon of the Emperor's Children close in. The Khan openly sets his sights on the Kalium Gate, an ancient warp gate, and the Legion fights a vicious battle there. That assault is a feint: the real goal is the Dark Glass, an archeotech station that can open a route to the Sol System. Shiban Khan, scarred and changed since the lodge war, struggles with what the Legion is becoming, while the Thousand Son Revuel Arvida fights the flesh-change each time he uses his powers. With the station collapsing and the enemy upon them, Targutai Yesugei leads a strike force to activate the Dark Glass and dies doing so. His spirit charges Arvida with guiding the fleet, and the Thousand Son steers the White Scars through to Terra before collapsing. The Legion arrives at the Throneworld in time for the coming siege.",
   "characters": [
    "Jaghatai Khan – Primarch, White Scars",
    "Shiban Khan – White Scars khan",
    "Targutai Yesugei – Stormseer, Zadyin Arga",
    "Ilya Ravallion – Munitorum general with the White Scars",
    "Revuel Arvida – Thousand Sons psyker travelling with the Legion",
    "Qin Xa – Master of the Keshig",
    "Eidolon – Lord Commander, Emperor's Children",
    "Mortarion – Primarch, Death Guard"
   ],
   "legions": [
    "White Scars",
    "Death Guard",
    "Emperor's Children"
   ],
   "setting": "c. 011.M31",
   "sort": 31011,
   "planets": [
    "terra"
   ],
   "related": [
    "scars",
    "brotherhood_of_the_storm",
    "heralds_of_the_siege",
    "warhawk"
   ]
  },
  "silent_war": {
   "series": "The Horus Heresy",
   "title": "The Silent War",
   "author": "Various",
   "number": 37,
   "year": 2016,
   "format": "Anthology",
   "pages": 480,
   "premise": "While armies clash across the galaxy, a war of secrets is fought in the shadows. Thirteen stories and Anthony Reynolds's novella The Purge follow the agents of Malcador the Sigillite, from his grey-armoured Knights-Errant to the Sisters of Silence, as Rogal Dorn prepares the Sol System for Horus's assault.",
   "summary": "The stories follow the Sigillite's covert war after the outbreak of the Heresy. Anthony Reynolds's novella The Purge and pieces by John French, among them Grey Angel and Templar, send Knights-Errant and Malcador's other agents on secret missions, while Chris Wraight's The Sigillite turns to Malcador himself. James Swallow's three stories revisit Nathaniel Garro's circle, and Graham McNeill's Luna Mendax and Wolf Hunt take the hidden war to the Moon and to the Space Wolves. Together they show the unseen hands shaping the defence of Terra and the Imperium that will follow.",
   "characters": [
    "Malcador the Sigillite – Regent of Terra",
    "Nathaniel Garro – Agentia Primus of the Knights-Errant",
    "Rogal Dorn – Primarch, Imperial Fists"
   ],
   "legions": [
    "Knights Errant",
    "Sisters of Silence",
    "Legio Custodes",
    "Imperial Fists",
    "Space Wolves"
   ],
   "setting": "c. 006–012.M31",
   "sort": 31009,
   "planets": [
    "terra",
    "luna"
   ],
   "contents": [
    {
     "title": "The Watcher",
     "author": "C. Z. Dunn",
     "format": "Audio drama script"
    },
    {
     "title": "Child of Night",
     "author": "John French",
     "format": "Short story"
    },
    {
     "title": "Grey Angel",
     "author": "John French",
     "format": "Audio drama script"
    },
    {
     "title": "Templar",
     "author": "John French",
     "format": "Audio drama script"
    },
    {
     "title": "The Gates of Terra",
     "author": "Nick Kyme",
     "format": "Short story"
    },
    {
     "title": "Luna Mendax",
     "author": "Graham McNeill",
     "format": "Short story"
    },
    {
     "title": "Wolf Hunt",
     "author": "Graham McNeill",
     "format": "Audio drama script"
    },
    {
     "title": "The Purge",
     "author": "Anthony Reynolds",
     "format": "Novella"
    },
    {
     "title": "Army of One",
     "author": "Rob Sanders",
     "format": "Short story"
    },
    {
     "title": "Distant Echoes of Old Night",
     "author": "Rob Sanders",
     "format": "Short story"
    },
    {
     "title": "Ghosts Speak Not",
     "author": "James Swallow",
     "format": "Short story"
    },
    {
     "title": "Lost Sons",
     "author": "James Swallow",
     "format": "Short story"
    },
    {
     "title": "Patience",
     "author": "James Swallow",
     "format": "Short story"
    },
    {
     "title": "The Sigillite",
     "author": "Chris Wraight",
     "format": "Audio drama script"
    }
   ],
   "related": [
    "garro",
    "purge",
    "flight_eisenstein",
    "praetorian_of_dorn"
   ]
  },
  "shattered_legions": {
   "series": "The Horus Heresy",
   "title": "Shattered Legions",
   "author": "Various",
   "number": 43,
   "year": 2017,
   "format": "Anthology",
   "premise": "Driven to the brink at Isstvan V, the Iron Hands seek vengeance for Ferrus Manus. Gathering survivors of the Raven Guard and Salamanders aboard any ship that can still make the warp, the Shattered Legions wage a campaign of annihilation masterminded by Shadrak Meduson. Ten short stories are joined by Graham McNeill's novella The Seventh Serpent.",
   "summary": "In Meduson, Shadrak Meduson forges the Isstvan V survivors into mixed cells of no more than a thousand warriors that bleed the Traitors with raids, sabotage and ambushes, culminating in a costly clash with the Sons of Horus on Dwell, where Horus Aximand kills his sergeant Bion Henricos. The following stories trace different cells across the war and the strain that grief, pride and growing ruthlessness put on an alliance of three very different Legions. In The Seventh Serpent, the ragtag crew of the Sisypheum are drawn into a war of deception against the Alpha Legion.",
   "characters": [
    "Shadrak Meduson – Iron Lord of Clan Sorrgol, Iron Hands",
    "Bion Henricos – Sergeant, Clan Sorrgol",
    "Horus Aximand – Captain, Sons of Horus",
    "Nykona Sharrowkyn – Raven Guard infiltrator",
    "Sabik Wayland – Iron Hands Techmarine"
   ],
   "legions": [
    "Iron Hands",
    "Salamanders",
    "Raven Guard",
    "Sons of Horus",
    "Alpha Legion"
   ],
   "setting": "c. 006–012.M31",
   "sort": 31009,
   "planets": [],
   "contents": [
    {
     "title": "Meduson",
     "author": "Dan Abnett",
     "format": "Short story"
    },
    {
     "title": "The Noose",
     "author": "David Annandale",
     "format": "Short story"
    },
    {
     "title": "The Keys of Hel",
     "author": "John French",
     "format": "Short story"
    },
    {
     "title": "Unforged",
     "author": "Guy Haley",
     "format": "Short story"
    },
    {
     "title": "Unspoken",
     "author": "Guy Haley",
     "format": "Short story"
    },
    {
     "title": "Immortal Duty",
     "author": "Nick Kyme",
     "format": "Short story"
    },
    {
     "title": "The Either",
     "author": "Graham McNeill",
     "format": "Audio drama script"
    },
    {
     "title": "The Seventh Serpent",
     "author": "Graham McNeill",
     "format": "Novella"
    },
    {
     "title": "Deeds Endured",
     "author": "Gav Thorpe",
     "format": "Short story"
    },
    {
     "title": "Grey Talon",
     "author": "Chris Wraight",
     "format": "Audio drama script"
    },
    {
     "title": "Hand Elect",
     "author": "Chris Wraight",
     "format": "Short story"
    }
   ],
   "related": [
    "seventh_serpent",
    "old_earth",
    "vulkan_lives",
    "damnation_of_pythos"
   ]
  },
  "burden_of_loyalty": {
   "series": "The Horus Heresy",
   "title": "The Burden of Loyalty",
   "author": "Various",
   "number": 48,
   "year": 2018,
   "format": "Anthology",
   "premise": "As the darkness of war consumes the galaxy, those who still serve the Throne fight to survive and to defend everything they hold dear. The anthology's centrepieces are two novellas: Chris Wraight's The Wolf King, in which the Space Wolves are hounded by the Alpha Legion, and Rob Sanders' Cybernetica, about the loyalists' response to the fall of Mars. Six shorter tales of loyalists across the later Heresy complete the volume.",
   "summary": "In The Wolf King, the Space Wolves, still bleeding from Prospero, are ambushed by the Alpha Legion and driven into the Alaxxes Nebula. Russ withdraws into brooding until Bjorn helps him face what being the Emperor's executioner has cost. First Captain Gunnar Gunnhilt dies holding the line, and Russ fights Alpharius's Lernaean Terminators on his own bridge. A lost Dark Angels fleet under Chapter Master Althalos, hidden in the nebula since before the Heresy, intervenes and routs the traitors. In Cybernetica, with Mars lost to the Dark Mechanicum and blockaded, Rogal Dorn and Malcador weigh a final solution: wiping out all life on the Red Planet. Shorter pieces by Abnett, Annandale, Dembski-Bowden, French, Goulding and Thorpe round out the volume, including a return to the Pharos on Sotha.",
   "characters": [
    "Leman Russ – Primarch, Space Wolves",
    "Bjorn – Space Wolves warrior",
    "Gunnar Gunnhilt – First Captain, Space Wolves",
    "Althalos – Chapter Master, Dark Angels",
    "Ormand – Captain, Dark Angels",
    "Alpharius – Primarch, Alpha Legion",
    "Rogal Dorn – Primarch, Imperial Fists",
    "Malcador the Sigillite – Regent of Terra"
   ],
   "legions": [
    "Space Wolves",
    "Alpha Legion",
    "Dark Angels",
    "Mechanicum",
    "Imperial Fists"
   ],
   "setting": "c. 007–012.M31",
   "sort": 31010,
   "planets": [
    "mars",
    "sotha"
   ],
   "contents": [
    {
     "title": "Perpetual",
     "author": "Dan Abnett",
     "format": "Audio drama script"
    },
    {
     "title": "The Binary Succession",
     "author": "David Annandale",
     "format": "Audio drama script"
    },
    {
     "title": "Into Exile",
     "author": "Aaron Dembski-Bowden",
     "format": "Short story"
    },
    {
     "title": "Ordo Sinister",
     "author": "John French",
     "format": "Short story"
    },
    {
     "title": "The Heart of the Pharos",
     "author": "Laurie Goulding",
     "format": "Audio drama script"
    },
    {
     "title": "Cybernetica",
     "author": "Rob Sanders",
     "format": "Novella"
    },
    {
     "title": "The Thirteenth Wolf",
     "author": "Gav Thorpe",
     "format": "Audio drama script"
    },
    {
     "title": "The Wolf King",
     "author": "Chris Wraight",
     "format": "Novella"
    }
   ],
   "related": [
    "wolf_king",
    "cybernetica",
    "wolfsbane",
    "pharos"
   ]
  },
  "born_of_flame": {
   "series": "The Horus Heresy",
   "title": "Born of Flame",
   "author": "Nick Kyme",
   "number": 50,
   "year": 2018,
   "format": "Collection",
   "premise": "This collection brings together Nick Kyme's shorter Salamanders fiction: the novellas Promethean Sun and Scorched Earth, the short novel Sons of the Forge and two connected short stories. It follows Vulkan and the XVIII Legion from a Great Crusade campaign to the aftermath of Isstvan V. The tales show the Legion's humanity, its sacrifices and its stubborn defiance.",
   "summary": "Promethean Sun is set during the Great Crusade on One-Five-Four Four, a world held in thrall by the Aeldari. While the Iron Hands and Death Guard fight the xenos, the Salamanders brave its deadliest jungles, and Vulkan discovers that the world's ancient arch hides a ritual binding a Dark Eldar witch before he defeats the aliens' designs. Artefacts shows Vulkan before Isstvan V deciding the fate of his vault of unique weapons, only seven of which are to survive. Scorched Earth follows two Salamanders survivors of the Drop Site Massacre, Ra'stan and Usabius, who strike out across the Urgall Depression on Isstvan V to learn what became of Vulkan. In Sons of the Forge, Forgefather T'kell and a band of Firedrakes carry the last seven of Vulkan's great weapons to the secret vault called the Wrought, while others hunt for them. Immortal Duty follows Salamanders survivors fighting on in the later war.",
   "characters": [
    "Vulkan – Primarch, Salamanders",
    "Artellus Numeon – Captain of the Pyre Guard",
    "T'kell – Forgefather, Salamanders",
    "Ra'stan – Salamanders survivor of Isstvan V",
    "Usabius – Salamanders survivor of Isstvan V",
    "Ferrus Manus – Primarch, Iron Hands"
   ],
   "legions": [
    "Salamanders",
    "Iron Hands",
    "Death Guard",
    "Aeldari"
   ],
   "setting": "late M30 – c. 010.M31",
   "sort": 31000,
   "planets": [
    "one_five_four_four",
    "isstvan5"
   ],
   "contents": [
    {
     "title": "Promethean Sun",
     "author": "Nick Kyme",
     "format": "Novella"
    },
    {
     "title": "Scorched Earth",
     "author": "Nick Kyme",
     "format": "Novella"
    },
    {
     "title": "Sons of the Forge",
     "author": "Nick Kyme",
     "format": "Novella"
    },
    {
     "title": "Artefacts",
     "author": "Nick Kyme",
     "format": "Short story"
    },
    {
     "title": "Immortal Duty",
     "author": "Nick Kyme",
     "format": "Short story"
    }
   ],
   "related": [
    "promethean_sun",
    "scorched_earth",
    "sons_of_the_forge",
    "deathfire"
   ]
  },
  "heralds_of_the_siege": {
   "series": "The Horus Heresy",
   "title": "Heralds of the Siege",
   "author": "Various",
   "number": 52,
   "year": 2018,
   "format": "Anthology",
   "pages": 400,
   "premise": "Horus's fleet nears Terra as the war reaches its last months. Terra raises its defences, armies muster and heroes on both sides make their final moves across the galaxy and inside the Sol System. This anthology of short stories and audio scripts sets the stage for the Siege of Terra.",
   "summary": "The stories trace the final pieces moving into place across the galaxy and inside the Sol System. In The Last Son of Prospero, Revuel Arvida, who guided the White Scars to Terra, lies dying of the flesh-change, and Jaghatai Khan demands he be saved whatever the cost, though it is unclear what would remain of him. The Painted Count returns to the Night Lords after Sotha, and Children of Sicarus to the Word Bearers. Other tales, by French, Haley, Kyme, Sanders, Swallow, Thorpe and Wraight, follow loyalists and traitors through their last missions before the siege, as Terra raises its defences.",
   "characters": [
    "Revuel Arvida – Thousand Sons psyker on Terra",
    "Jaghatai Khan – Primarch, White Scars",
    "Rogal Dorn – Primarch, Imperial Fists",
    "Malcador the Sigillite – Regent of Terra"
   ],
   "legions": [
    "Imperial Fists",
    "Sons of Horus",
    "Thousand Sons",
    "Raven Guard",
    "Alpha Legion",
    "Night Lords",
    "Word Bearers",
    "Space Wolves"
   ],
   "setting": "c. 013–014.M31",
   "sort": 31013.5,
   "planets": [
    "terra"
   ],
   "contents": [
    {
     "title": "Dark Compliance",
     "author": "John French",
     "format": "Audio drama script"
    },
    {
     "title": "Now Peals Midnight",
     "author": "John French",
     "format": "Short story"
    },
    {
     "title": "The Painted Count",
     "author": "Guy Haley",
     "format": "Short story"
    },
    {
     "title": "Duty Waits",
     "author": "Guy Haley",
     "format": "Short story"
    },
    {
     "title": "Dreams of Unity",
     "author": "Nick Kyme",
     "format": "Short story"
    },
    {
     "title": "Children of Sicarus",
     "author": "Anthony Reynolds",
     "format": "Audio drama script"
    },
    {
     "title": "Myriad",
     "author": "Rob Sanders",
     "format": "Short story"
    },
    {
     "title": "The Ember Wolves",
     "author": "Rob Sanders",
     "format": "Short story"
    },
    {
     "title": "Exocytosis",
     "author": "James Swallow",
     "format": "Short story"
    },
    {
     "title": "The Grey Raven",
     "author": "Gav Thorpe",
     "format": "Short story"
    },
    {
     "title": "Valerius",
     "author": "Gav Thorpe",
     "format": "Audio drama script"
    },
    {
     "title": "The Board is Set",
     "author": "Gav Thorpe",
     "format": "Short story"
    },
    {
     "title": "Blackshield",
     "author": "Chris Wraight",
     "format": "Short story"
    },
    {
     "title": "The Last Son of Prospero",
     "author": "Chris Wraight",
     "format": "Short story"
    },
    {
     "title": "The Soul, Severed",
     "author": "Chris Wraight",
     "format": "Audio drama script"
    },
    {
     "title": "Magisterium",
     "author": "Chris Wraight",
     "format": "Short story"
    }
   ],
   "related": [
    "slaves_to_darkness",
    "solar_war",
    "path_of_heaven",
    "crimson_king"
   ]
  },
  "end_and_death_volume_i": {
   "title": "The End and the Death: Volume I",
   "author": "Dan Abnett",
   "series": "The Siege of Terra",
   "number": 8,
   "year": 2023,
   "format": "Novel",
   "premise": "The walls have fallen, the gates are breached, and the Warmaster stands on the verge of victory after seven years of civil war. At the final hour of the final day, the Emperor rises, and with Him come His Angel, His Praetorian and His Captain. The surviving characters of the saga are drawn toward the last confrontation.",
   "summary": "The warp has engulfed the Palace and time itself has stopped on Terra, leaving the Warmaster on the brink of victory. Yet Guilliman's relief fleets are only hours away, so Horus lowers the shields of the Vengeful Spirit to lure his father into a direct confrontation. The Emperor accepts the challenge and teleports aboard the flagship with Sanguinius, Rogal Dorn, Constantin Valdor and their finest warriors,. Oll Persson and his companions, the 'Argonauts', finally reach the Palace, desperate to warn the Emperor that Horus means to sacrifice humanity and become a new god of Chaos, the 'Dark King'. Vulkan meets them and tells them they are too late: the Emperor has already gone. Garviel Loken, determined to confront the father he once served, finds his own way aboard the Vengeful Spirit.",
   "characters": [
    "The Emperor of Mankind",
    "Horus Lupercal – Warmaster",
    "Sanguinius – Primarch of the Blood Angels",
    "Rogal Dorn – Primarch of the Imperial Fists",
    "Constantin Valdor – Captain-General of the Legio Custodes",
    "Malcador the Sigillite – Regent of Terra",
    "Oll Persson – Perpetual",
    "John Grammaticus – Perpetual",
    "Vulkan – Primarch of the Salamanders",
    "Garviel Loken – former Luna Wolf, Knight-Errant"
   ],
   "legions": [
    "Sons of Horus",
    "Legio Custodes",
    "Blood Angels",
    "Imperial Fists",
    "Daemons"
   ],
   "setting": "014.M31",
   "sort": 31014,
   "planets": [
    "terra"
   ],
   "related": [
    "echoes_eternity",
    "end_and_death_volume_ii",
    "horus_rising"
   ]
  },
  "end_and_death_volume_ii": {
   "title": "The End and the Death: Volume II",
   "author": "Dan Abnett",
   "series": "The Siege of Terra",
   "number": 9,
   "year": 2023,
   "format": "Novel",
   "pages": 672,
   "premise": "Aboard the Vengeful Spirit, the Emperor and His companions fight through a flagship that has become a realm of the warp. On Terra the defenders hold on without their master. The middle volume of the finale moves the saga toward its reckoning between father and son, and between two angelic brothers.",
   "summary": "The Emperor and His companions are separated aboard the Vengeful Spirit, which has become steeped in the growing power of the warp. It emerges that the 'Dark King' is not Horus but the Emperor Himself, who has drawn on the warp to gain the power to defeat Horus and his patrons. Oll Persson and Garviel Loken plead with the Emperor not to become Chaos in order to destroy it, and in the end He relents and releases the power He has gathered. Meanwhile the shade of Ferrus Manus appears to Sanguinius and guides the Angel toward his final confrontation with the Warmaster. After a gruelling battle Horus kills Sanguinius and crucifies his body in the Lupercal's Court. The death of their primarch drives the Blood Angels into a madness in which they attack friend and foe alike.",
   "characters": [
    "The Emperor of Mankind",
    "Horus Lupercal – Warmaster",
    "Sanguinius – Primarch of the Blood Angels",
    "Garviel Loken – former Luna Wolf, Knight-Errant",
    "Oll Persson – Perpetual",
    "Ferrus Manus – shade of the fallen Primarch of the Iron Hands",
    "Rogal Dorn – Primarch of the Imperial Fists",
    "Constantin Valdor – Captain-General of the Legio Custodes"
   ],
   "legions": [
    "Sons of Horus",
    "Blood Angels",
    "Legio Custodes",
    "Imperial Fists",
    "Daemons"
   ],
   "setting": "014.M31",
   "sort": 31014,
   "planets": [
    "terra"
   ],
   "related": [
    "end_and_death_volume_i",
    "end_and_death_volume_iii",
    "fear_to_tread"
   ]
  },
  "end_and_death_volume_iii": {
   "title": "The End and the Death: Volume III",
   "author": "Dan Abnett",
   "series": "The Siege of Terra",
   "number": 10,
   "year": 2024,
   "format": "Novel",
   "premise": "Father and son meet at last on the bridge of the Vengeful Spirit, in a duel fought across reality as much as across the deck. On Terra, the last defenders cling on as the warp presses in. The concluding volume brings the Horus Heresy to its end.",
   "summary": "The Emperor finally confronts Horus on the bridge of the Vengeful Spirit. Horus mortally wounds Him but hesitates when Garviel Loken appeals to whatever humanity remains in his father. At the critical moment the Chaos Gods, angered by Horus' belief that he controls them, withdraw their power, and Horus understands that he has been their pawn all along. He begs the Emperor to end him, and with Oll Persson's athame the Emperor destroys the Warmaster body and soul. With Horus dead the warp around Terra dissipates and time resumes; Dorn, Valdor and their warriors reach the bridge and carry the dying Emperor back to Terra. Loken stays with his fallen primarch's body as Abaddon and his warriors arrive, and the two part without violence, but Erebus then kills Loken, explaining that his death is needed for the daemon Samus to be born. Malcador, who has held the Golden Throne in his master's absence, is consumed by the effort, and the Emperor is installed in the Golden Throne, setting the Imperium on its path through the next ten thousand years.",
   "characters": [
    "The Emperor of Mankind",
    "Horus Lupercal – Warmaster",
    "Garviel Loken – former Luna Wolf, Knight-Errant",
    "Oll Persson – Perpetual",
    "Rogal Dorn – Primarch of the Imperial Fists",
    "Constantin Valdor – Captain-General of the Legio Custodes",
    "Ezekyle Abaddon – First Captain, Sons of Horus",
    "Erebus – First Chaplain of the Word Bearers",
    "Malcador the Sigillite – Regent of Terra"
   ],
   "legions": [
    "Sons of Horus",
    "Legio Custodes",
    "Imperial Fists",
    "Daemons"
   ],
   "setting": "014.M31",
   "sort": 31014,
   "planets": [
    "terra"
   ],
   "related": [
    "end_and_death_volume_ii",
    "era_of_ruin",
    "horus_rising",
    "ashes_of_the_imperium"
   ]
  },
  "fury_of_magnus": {
   "title": "Fury of Magnus",
   "author": "Graham McNeill",
   "series": "The Siege of Terra",
   "year": 2020,
   "format": "Novella",
   "pages": 248,
   "premise": "Magnus the Red comes to Terra alongside Horus' besieging armies, driven by more than revenge. He seeks a fragment of himself, the missing piece of his shattered soul that lies within the most impregnable place on the planet: the inner sanctum of the Imperial Palace. To be whole again he must overcome the fiercest of defences and face the father he both loves and hates.",
   "characters": [
    "Magnus the Red – Daemon Primarch of the Thousand Sons",
    "The Emperor of Mankind"
   ],
   "legions": [
    "Thousand Sons"
   ],
   "setting": "014.M31",
   "sort": 31014,
   "planets": [
    "terra"
   ],
   "related": [
    "saturnine",
    "mortis",
    "crimson_king",
    "master_of_prospero"
   ]
  },
  "garro_knight_of_grey": {
   "title": "Garro: Knight of Grey",
   "author": "James Swallow",
   "series": "The Siege of Terra",
   "year": 2023,
   "format": "Novella",
   "pages": 144,
   "premise": "As the battle for Terra rages, the former Knight-Errant Nathaniel Garro fights among the ashes of the Imperial Palace to protect Euphrati Keeler, the first saint of the Imperial faith. His long road from the Isstvan betrayal and the flight of the Eisenstein, through his missions for Malcador, leads toward a meeting with his gene-father Mortarion, now the monstrous lord of the Death Guard.",
   "summary": "Released from Malcador's service when the new order on Titan is formed, Garro chooses to fight in the defence of the Palace alongside his old comrade Helig Gallor. He is reunited with Euphrati Keeler at the Marmax Bastion just as the Death Guard strike, led by Mortarion and Typhus in person. To buy time for Keeler and the bastion's survivors to escape, Garro goes out to face his fallen primarch. Mortarion offers him a poisoned cup of vengeance and a place back in the Legion; Garro refuses, and a brutal duel begins. Garro wounds the primarch's face but is battered down and about to be claimed for Nurgle when a golden radiance, channelled through Keeler's faith, renews him and lets him match Mortarion blow for blow. Mortarion's scythe finally shatters Garro's sword and impales him, but Garro drags himself along the blade and drives the broken sword into the primarch's throat, leaving a wound that will not close. Garro dies at peace, knowing his duty is done, and Kyril Sindermann later names him the first true martyr of the Imperial faith.",
   "characters": [
    "Nathaniel Garro – former Death Guard battle-captain, Knight-Errant",
    "Euphrati Keeler – living saint of the Lectitio Divinitatus",
    "Helig Gallor – former Death Guard, Garro's comrade",
    "Mortarion – Daemon Primarch of the Death Guard",
    "Typhus – First Captain of the Death Guard",
    "Kyril Sindermann – former iterator"
   ],
   "legions": [
    "Knights Errant",
    "Death Guard"
   ],
   "setting": "014.M31",
   "sort": 31014,
   "planets": [
    "terra"
   ],
   "related": [
    "garro",
    "flight_eisenstein",
    "buried_dagger",
    "warhawk"
   ]
  },
  "era_of_ruin": {
   "title": "Era of Ruin",
   "author": "Various",
   "series": "The Siege of Terra",
   "year": 2025,
   "format": "Anthology",
   "premise": "An anthology of eight stories by the Siege of Terra authors, set in the immediate aftermath of the final battle. Survivors on both sides face the consequences of the Horus Heresy as the Imperium begins to take its new and grim shape.",
   "summary": "The eight stories pick up directly after the end of the siege and follow survivors of both sides through the first days of the new age. In Chris Wraight's 'Homebound', Ilya Ravallion must choose between staying with the decimated White Scars and living out what remains of her life in peace. In John French's 'Ex Libris', an embattled Ahzek Ahriman races against time to learn what he can of the warp. In Aaron Dembski-Bowden's 'The Carrion Lord of the Imperium', the Custodian Amon Tauromachian returns. Together the stories show the cost of the war and the foundations of the Imperium that will follow.",
   "legions": [
    "Legio Custodes",
    "White Scars",
    "Thousand Sons",
    "Blood Angels"
   ],
   "setting": "014.M31 (aftermath of the Siege)",
   "sort": 31014,
   "planets": [
    "terra"
   ],
   "contents": [
    {
     "title": "Angels of Another Age",
     "author": "John French",
     "format": "Short story"
    },
    {
     "title": "Fulgurite",
     "author": "Nick Kyme",
     "format": "Short story"
    },
    {
     "title": "Fragments (All We Have Left)",
     "author": "Dan Abnett",
     "format": "Short story"
    },
    {
     "title": "Ex Libris",
     "author": "John French",
     "format": "Short story"
    },
    {
     "title": "System Purge",
     "author": "Gav Thorpe",
     "format": "Short story"
    },
    {
     "title": "After the Dawn, the Darkness",
     "author": "Guy Haley",
     "format": "Short story"
    },
    {
     "title": "Homebound",
     "author": "Chris Wraight",
     "format": "Short story"
    },
    {
     "title": "The Carrion Lord of the Imperium",
     "author": "Aaron Dembski-Bowden",
     "format": "Short story"
    }
   ],
   "related": [
    "end_and_death_volume_iii",
    "ashes_of_the_imperium",
    "warhawk"
   ]
  },
  "alpharius_head_of_the_hydra": {
   "title": "Alpharius: Head of the Hydra",
   "author": "Mike Brooks",
   "series": "The Horus Heresy: Primarchs",
   "number": 14,
   "year": 2021,
   "format": "Novella",
   "pages": 288,
   "premise": "Almost nothing is known of Alpharius, the most mysterious of the Emperor's sons, for the lord of the Alpha Legion is unmatched in the art of obfuscation, and even his rediscovery has remained an enigma. Now he tells his own story, but when the tale comes from the serpent's mouth, where does the deception end and the truth begin?",
   "summary": "Alpharius narrates most of the book in the first person, while Omegon speaks the prologue and epilogue, which open with 'I am Alpharius. This is a lie.' and close with 'I am Alpharius. This was a lie.' By his own account, Alpharius was found by the Emperor on Terra almost immediately, kept secret and given the task of protecting the Imperium, without guidance if necessary. Only the Emperor, Malcador and Constantin Valdor knew of him, and he watched the rediscovery of several brothers while hiding among their Legions, helped by a gift that changes how others perceive him. He took command of the XX Legion and shaped it to work unseen throughout the Crusade. The account weaves together the competing rumours about his origin. He tells of finding Omegon, who had landed on a dead world of an advanced civilisation, escaped with its technology and later ruled a human world of his own; the twins wonder whether only one of them was ever meant to exist. Horus is presented as the brother who officially discovers the 'last' primarch. In the final chapters the xenos Slaugth attack, a terrifying foe that serves as a foil to the primarch. To the very end the reader cannot know how much of the account is true.",
   "characters": [
    "Alpharius – Primarch of the Alpha Legion, narrator",
    "Omegon – Alpharius's twin, narrator of the prologue and epilogue",
    "The Emperor – found and tasked Alpharius",
    "Malcador – the Sigillite, one of few who knew of Alpharius",
    "Constantin Valdor – Captain-General of the Legio Custodes",
    "Horus – Primarch of the Luna Wolves"
   ],
   "legions": [
    "Alpha Legion"
   ],
   "setting": "c. M30 (spans the Great Crusade)",
   "sort": 30950,
   "planets": [],
   "related": [
    "legion",
    "blood_of_the_emperor",
    "praetorian_of_dorn"
   ]
  },
  "rogal_dorn_the_emperors_crusader": {
   "title": "Rogal Dorn: The Emperor's Crusader",
   "author": "Gav Thorpe",
   "series": "The Horus Heresy: Primarchs",
   "number": 16,
   "year": 2022,
   "format": "Novella",
   "pages": 208,
   "premise": "Six decades into the Great Crusade, four primarchs are sent to bring the Occluda Noctis, hundreds of star systems beyond the Northern Major Warp Storm, into the Imperium. Rogal Dorn leads the Imperial Fists into this Night Crusade, where an unknown foe waits in the dark and his brothers disagree over how to fulfil the Emperor's command.",
   "summary": "The Night Crusade begins at Scathia, chosen as its gateway world, which refuses to join the Imperium; Dorn, Lion El'Jonson and Fulgrim each lead their Legions into the assault, and millions die before it complies. When Fulgrim's envoy Eidolon goes ahead of the attack, the Lion blames the Emperor's Children for the trouble, and Dorn argues that without the possibility of compliance all opposition must be destroyed. At a council the primarchs argue over three strategies: dividing the region, spiralling in from the edge, or striking straight at its heart. Horus mediates between Dorn and the Lion, endorses all three plans and, with apparent good humour, gives the Imperial Fists the hardest task as the spearhead. The story is told partly through the Imperial Fists Gidoreas and the Templar Sigismund, who loses a duel to a Dark Angels champion, the Navigator Esuin Rigantis, and the remembrancer Larentius val de Meer. Dorn's fleet brings the Damareen Consensus and the Triumvirate of Garl into compliance, after Damareen forces destroy several of Captain Thrass's ships when their peace offer is refused. Concluding that only a direct strike at the centre of the Occluda Noctis will fully carry out his father's order, Dorn defeats the threat hidden there through planning rather than heroics. In the end, even with the enemy broken and ready to submit, he sets that aside to obey the Emperor's instructions to the letter, and the campaign ends in mass slaughter.",
   "characters": [
    "Rogal Dorn – Primarch of the Imperial Fists",
    "Lion El'Jonson – Primarch of the Dark Angels",
    "Fulgrim – Primarch of the Emperor's Children",
    "Horus – Primarch of the Luna Wolves, mediator of the council",
    "Sigismund – Templar of the Imperial Fists",
    "Gidoreas – Imperial Fists officer",
    "Thrass – Imperial Fists captain",
    "Esuin Rigantis – Navigator",
    "Larentius val de Meer – remembrancer",
    "Eidolon – Fulgrim's envoy"
   ],
   "legions": [
    "Imperial Fists",
    "Dark Angels",
    "Emperor's Children",
    "Luna Wolves"
   ],
   "setting": "c. 860.M30 (the Great Crusade's sixth decade)",
   "sort": 30860,
   "planets": [
    "scathia"
   ],
   "related": [
    "lord_of_the_first",
    "palatine_phoenix",
    "sigismund_the_eternal_crusader"
   ]
  },
  "sanguinius_the_great_angel": {
   "title": "Sanguinius: The Great Angel",
   "author": "Chris Wraight",
   "series": "The Horus Heresy: Primarchs",
   "number": 17,
   "year": 2022,
   "format": "Novella",
   "premise": "A disgraced remembrancer, whose earlier book criticised the Great Crusade, is assigned to the Blood Angels to chronicle their primarch. Travelling with the IX Legion, he struggles to verify the legends that surround Sanguinius and finds himself asking what the Great Angel, and the Imperium itself, really are.",
   "summary": "The book is written as the remembrancer's own manuscript, a first-person account commissioned by Sanguinius. Its author had become notorious for a book about the darker side of the Crusade, including the Night Lords and World Eaters, and he resolves to record only what he can prove. Much of the story is set on Baal while the fleet gathers to resupply, with the homeworld's scale, logistics and devoted serfs drawn in detail, and part of it during the war against the megarachnids on Murder alongside Horus's Luna Wolves and the Emperor's Children. Sanguinius speaks with the narrator only a few times; the book is about how others see him. The chronicler finds no witnesses to the Legion's past before Sanguinius and slowly uncovers the darkness the Blood Angels hide beneath their finery, a flaw in their blood they fear above all. Another remembrancer, with the fleet for decades, tells him that serfs and parts of the Army already know the truth and do not care. The narrator is killed for what he has learned, and the truth is suppressed because the Imperium needs the idea of Sanguinius more than the reality. His manuscript is sealed, meant for a future in which the Blood Angels can study their failures as history.",
   "characters": [
    "Sanguinius – Primarch of the Blood Angels",
    "The remembrancer – disgraced chronicler and first-person narrator",
    "Horus – Primarch of the Luna Wolves",
    "Bel Sepatus – Blood Angels officer",
    "Iacton Qruze – Luna Wolves captain"
   ],
   "legions": [
    "Blood Angels"
   ],
   "setting": "c. late M30 (Great Crusade)",
   "sort": 30995,
   "planets": [
    "baal",
    "murder"
   ],
   "related": [
    "fear_to_tread",
    "horus_rising"
   ]
  },
  "sons_of_the_emperor": {
   "title": "Sons of the Emperor",
   "author": "Various",
   "series": "The Horus Heresy: Primarchs",
   "year": 2018,
   "format": "Anthology",
   "premise": "The first Primarchs anthology: eight short stories by eight Black Library authors that feature eleven primarchs and even the Emperor. Some are told by the primarchs themselves, others through the eyes of legionaries and mortals, ranging from the earliest days of the Great Crusade to long after the end of the Heresy.",
   "summary": "First released as an event-only book at the Horus Heresy and Necromunda Weekender in February 2018 and later given a wider release, the anthology gathers eight standalone tales by John French, Aaron Dembski-Bowden, Nick Kyme, Gav Thorpe, Guy Haley, LJ Goulding, Graham McNeill and Dan Abnett. Sanguinius and Vulkan are among the primarchs in focus, alongside nine more of their brothers and the Emperor himself. The stories range across the whole span of the setting, from the earliest days of the Great Crusade to long after the Heresy.",
   "characters": [
    "Sanguinius",
    "Vulkan",
    "The Emperor"
   ],
   "legions": [],
   "contents": [
    {
     "title": "The Passing of Angels",
     "author": "John French",
     "format": "Short story"
    },
    {
     "title": "The Abyssal Edge",
     "author": "Aaron Dembski-Bowden",
     "format": "Short story"
    },
    {
     "title": "Mercy of the Dragon",
     "author": "Nick Kyme",
     "format": "Short story"
    },
    {
     "title": "Shadow of the Past",
     "author": "Gav Thorpe",
     "format": "Short story"
    },
    {
     "title": "The Emperor's Architect",
     "author": "Guy Haley",
     "format": "Short story"
    },
    {
     "title": "Prince of Blood",
     "author": "LJ Goulding",
     "format": "Short story"
    },
    {
     "title": "The Ancient Awaits",
     "author": "Graham McNeill",
     "format": "Short story"
    },
    {
     "title": "Misbegotten",
     "author": "Dan Abnett",
     "format": "Short story"
    }
   ],
   "planets": [],
   "related": [
    "scions_of_the_emperor",
    "blood_of_the_emperor"
   ]
  },
  "scions_of_the_emperor": {
   "title": "Scions of the Emperor",
   "author": "Various",
   "series": "The Horus Heresy: Primarchs",
   "year": 2019,
   "format": "Anthology",
   "pages": 192,
   "premise": "The second Primarchs anthology: eight short stories by eight authors, often writing primarchs they are not usually linked with. They include a very young Ferrus Manus on Medusa, a youthful Guilliman on his home world, Rogal Dorn on Terra on the eve of the Siege, and the Lion in conversation with an Alpha Legionnaire during the Rangdan Xenocides.",
   "summary": "The stories are quiet, character-focused pieces rather than epic battles. In 'Canticle' David Guymer shows a very young Ferrus Manus, and in 'The Sinew of War' Darius Hinks a youthful Roboute Guilliman on Macragge. David Annandale's 'The Verdict of the Scythe' follows Mortarion directly after the events of The Pale King, and Guy Haley's 'A Game of Opposites' pits the Khan against the Iron Warriors. Ian St. Martin's 'Better Angels' pairs Sanguinius with one of his sons, and in Gav Thorpe's 'The Conqueror's Truth' a remembrancer observes Konrad Curze on crusade. James Swallow's 'The Chamber at the End of Memory' brings together Rogal Dorn and Malcador, and Chris Wraight's 'First Legion' has the Lion speaking with an Alpha Legionnaire during the Rangdan Xenocides.",
   "characters": [
    "Ferrus Manus – Primarch of the Iron Hands ('Canticle')",
    "Mortarion – Primarch of the Death Guard ('The Verdict of the Scythe')",
    "Jaghatai Khan – Primarch of the White Scars ('A Game of Opposites')",
    "Sanguinius – Primarch of the Blood Angels ('Better Angels')",
    "Konrad Curze – Primarch of the Night Lords ('The Conqueror's Truth')",
    "Roboute Guilliman – Primarch of the Ultramarines ('The Sinew of War')",
    "Rogal Dorn – Primarch of the Imperial Fists ('The Chamber at the End of Memory')",
    "Malcador – the Sigillite ('The Chamber at the End of Memory')",
    "Lion El'Jonson – Primarch of the Dark Angels ('First Legion')"
   ],
   "legions": [],
   "contents": [
    {
     "title": "Canticle",
     "author": "David Guymer",
     "format": "Short story"
    },
    {
     "title": "The Verdict of the Scythe",
     "author": "David Annandale",
     "format": "Short story"
    },
    {
     "title": "A Game of Opposites",
     "author": "Guy Haley",
     "format": "Short story"
    },
    {
     "title": "Better Angels",
     "author": "Ian St. Martin",
     "format": "Short story"
    },
    {
     "title": "The Conqueror's Truth",
     "author": "Gav Thorpe",
     "format": "Short story"
    },
    {
     "title": "The Sinew of War",
     "author": "Darius Hinks",
     "format": "Short story"
    },
    {
     "title": "The Chamber at the End of Memory",
     "author": "James Swallow",
     "format": "Short story"
    },
    {
     "title": "First Legion",
     "author": "Chris Wraight",
     "format": "Short story"
    }
   ],
   "planets": [
    "medusa",
    "macragge",
    "terra"
   ],
   "related": [
    "sons_of_the_emperor",
    "blood_of_the_emperor",
    "pale_king"
   ]
  },
  "blood_of_the_emperor": {
   "title": "Blood of the Emperor",
   "author": "Various",
   "series": "The Horus Heresy: Primarchs",
   "year": 2021,
   "format": "Anthology",
   "pages": 192,
   "premise": "The third Primarchs anthology: six short stories, each offering a fresh look at one of the Emperor's sons, by Graham McNeill, Nick Kyme, David Guymer, Andy Clark, Mike Brooks and Chris Wraight. Their settings range from Fenris in winter to the depths of the Cthonian underworld and Terra itself.",
   "summary": "Six standalone stories, each centred on a primarch at a moment in the Great Crusade or the Heresy. Mike Brooks's 'Council of Truth' has Alpharius questioned over a brutal campaign and is a companion piece to his Head of the Hydra. The settings range from Fenris in winter and the underworld of Cthonia to Terra, taking in the sorcerers of Prospero and the Emperor's Praetorian along the way.",
   "characters": [
    "Alpharius – Primarch of the Alpha Legion ('Council of Truth')"
   ],
   "legions": [],
   "contents": [
    {
     "title": "Lupus Daemonis",
     "author": "Graham McNeill",
     "format": "Short story"
    },
    {
     "title": "Skjalds",
     "author": "Nick Kyme",
     "format": "Short story"
    },
    {
     "title": "The Sixth Cult of the Denied",
     "author": "David Guymer",
     "format": "Short story"
    },
    {
     "title": "The Will of the Legion",
     "author": "Andy Clark",
     "format": "Short story"
    },
    {
     "title": "Council of Truth",
     "author": "Mike Brooks",
     "format": "Short story"
    },
    {
     "title": "Terminus",
     "author": "Chris Wraight",
     "format": "Short story"
    }
   ],
   "planets": [],
   "related": [
    "sons_of_the_emperor",
    "scions_of_the_emperor",
    "alpharius_head_of_the_hydra"
   ]
  },
  "sigismund_the_eternal_crusader": {
   "title": "Sigismund: The Eternal Crusader",
   "author": "John French",
   "series": "The Horus Heresy: Characters",
   "year": 2022,
   "format": "Novel",
   "premise": "In the waning years of the Great Crusade, the celebrated remembrancer Solomon Voss sets out to understand why Sigismund, champion of the Imperial Fists, believes the war will never end. His inquiry reaches back to a time before Sigismund became a Space Marine, through his first battles and oaths, to the bitterest duels between Legions.",
   "characters": [
    "Sigismund – First Captain and champion of the Imperial Fists",
    "Solomon Voss – remembrancer and wordsmith",
    "Rogal Dorn – Primarch of the Imperial Fists"
   ],
   "legions": [
    "Imperial Fists"
   ],
   "setting": "c. late Great Crusade (framing; flashbacks to Sigismund's youth)",
   "sort": 31003,
   "planets": [
    "terra"
   ],
   "related": [
    "solar_war",
    "warhawk",
    "rogal_dorn_the_emperors_crusader",
    "age_of_darkness"
   ]
  },
  "eidolon_the_auric_hammer": {
   "title": "Eidolon: The Auric Hammer",
   "author": "Marc Collins",
   "series": "The Horus Heresy: Characters",
   "year": 2024,
   "format": "Novel",
   "premise": "On the eve of the Siege of Terra, Lord Commander Eidolon of the Emperor's Children has fallen far from grace. Stranded around the world of Tatricala, where the ghosts of his past haunt every step, and beset by daemonic manifestations aboard his own ship, he must fight his way back toward Terra and the culmination of Horus' rebellion.",
   "characters": [
    "Eidolon – Lord Commander, Emperor's Children",
    "Fulgrim – Daemon Primarch of the Emperor's Children"
   ],
   "legions": [
    "Emperor's Children"
   ],
   "setting": "c. 013–014.M31 (eve of the Siege of Terra)",
   "sort": 31013,
   "planets": [],
   "related": [
    "saturnine",
    "path_of_heaven",
    "palatine_phoenix"
   ]
  },
  "zardu_layak_the_crimson_apostle": {
   "title": "Zardu Layak: The Crimson Apostle",
   "author": "Rich McCormick",
   "series": "The Horus Heresy: Characters",
   "year": 2026,
   "format": "Novel",
   "premise": "The Word Bearers zealot Zardu Layak has dreamed of his primarch and believes he will be instrumental in a grand ritual that will change the galaxy forever. First he must travel to the forgotten, haunted world of Helwain to claim the malign Anakatis Blades. There, as the shadows of his own past weakness close in, he is forced to doubt whether the truth he serves is a lie.",
   "characters": [
    "Zardu Layak – Word Bearers Dark Apostle, the Crimson Apostle",
    "Lorgar Aurelian – Primarch of the Word Bearers, seen in Layak's visions"
   ],
   "legions": [
    "Word Bearers"
   ],
   "setting": "c. 006–007.M31 (before Calth; inferred)",
   "sort": 31006,
   "planets": [
    "helwain"
   ],
   "related": [
    "slaves_to_darkness",
    "solar_war",
    "first_wall",
    "know_no_fear"
   ]
  },
  "raldoron_revenant": {
   "title": "Raldoron: Revenant",
   "author": "Guy Haley",
   "series": "The Horus Heresy: Characters",
   "year": 2026,
   "format": "Novel",
   "premise": "To slow Horus' conquest of the Garmon Cluster, the Blood Angels begin the mass recruitment of hastily trained Inductii. Their First Captain, Raldoron, renowned for his pragmatic leadership, must command recruits with little control over the Red Thirst, whose savagery threatens to revive the half-forgotten horrors of the Revenant Legion, the brotherhood that existed before Sanguinius tempered his sons.",
   "characters": [
    "Raldoron – First Captain, Blood Angels",
    "Sanguinius – Primarch of the Blood Angels"
   ],
   "legions": [
    "Blood Angels"
   ],
   "setting": "c. 011–012.M31 (Garmon Cluster campaign)",
   "sort": 31012,
   "planets": [],
   "related": [
    "titandeath",
    "fear_to_tread",
    "sanguinius_the_great_angel",
    "echoes_eternity"
   ]
  },
  "promethean_sun": {
   "title": "Promethean Sun",
   "author": "Nick Kyme",
   "year": 2011,
   "format": "Novella",
   "pages": 128,
   "premise": "During the Great Crusade, three Legions under their primarchs descend on a feral world held by the eldar. While the Iron Hands and Death Guard fight elsewhere, Vulkan and his Salamanders push into deadly jungles full of monstrous beasts and xenos witchery. Vulkan must uncover what the eldar are really guarding if the world is to be brought to compliance.",
   "summary": "The 154th Expeditionary Fleet finds world One-Five-Four Four, called Ibsen by its people, where eldar seers and warriors stand alongside the native human tribes. Vulkan's Salamanders, Ferrus Manus' Iron Hands and Mortarion's Death Guard are committed to its conquest, and the Salamanders take the jungles. Flashbacks show the Emperor's arrival on Nocturne and Vulkan's youth fighting raiders from the stars. Before the decisive battle Vulkan has an unsettling conversation with a strange remembrancer, who leads the Imperials towards a great arch fed by a network of psychic menhirs. The fiercest fighting of the campaign takes place at the arch, where Vulkan himself turns the battle. Afterwards Vulkan and his Pyre Guard follow the vanishing remembrancer through a portal beneath the arch and find the tribal priests about to sacrifice a captive dark eldar witch. Vulkan realises that the arch is a gate the dark eldar once used to raid the world, that the eldar had freed the humans – descendants of people taken from Nocturne – and that the natives saw them as liberators. The remembrancer was the Emperor in disguise. In the end Vulkan orders the xenos-tainted world and its people cleansed by fire and renames the dead world Caldera, ready for new colonists.",
   "characters": [
    "Vulkan – Primarch, Salamanders",
    "Artellus Numeon – First Captain and leader of the Pyre Guard, Salamanders",
    "Heka'tan – Captain, Salamanders",
    "Varrun – Pyre Guard, Salamanders",
    "Ferrus Manus – Primarch, Iron Hands",
    "Mortarion – Primarch, Death Guard",
    "The Emperor – disguised as a remembrancer"
   ],
   "legions": [
    "Salamanders",
    "Iron Hands",
    "Death Guard",
    "Aeldari"
   ],
   "setting": "late M30 (Great Crusade)",
   "sort": 30995,
   "planets": [
    "one_five_four_four",
    "nocturne"
   ],
   "related": [
    "lord_of_drakes",
    "the_primarchs",
    "vulkan_lives",
    "scorched_earth"
   ],
   "collected_in": "born_of_flame",
   "series": "The Horus Heresy",
   "number": null
  },
  "aurelian": {
   "title": "Aurelian",
   "author": "Aaron Dembski-Bowden",
   "year": 2011,
   "format": "Novella",
   "pages": 128,
   "premise": "After the Emperor's rebuke at Monarchia, Lorgar of the Word Bearers searched the stars for the truth about the gods – until he gazed into the Eye of Terror and the Eye stared back. Guided by the daemon Ingethel, he undertakes a journey into the heart of the warp and is shown the moments on which humanity's fate may turn.",
   "summary": "Four days after the Drop Site Massacre, Horus gathers the traitor primarchs aboard the Vengeful Spirit. Lorgar, newly confident and openly psychic, publicly accuses Fulgrim of being an impostor, strikes him and pins the daemon wearing his brother's body, and realises Horus already knew. Magnus then appears to Lorgar as a sorcerous projection, and Lorgar answers his accusations by telling him of his Pilgrimage some 43 years earlier. Guided by the daemon prince Ingethel, Lorgar walked the crone world Shanriatha inside the Eye of Terror, slew a risen Avatar of Khaine and was shown visions: his Legion in red at the Eternity Gate, Argel Tal's death at Sanguinius' hands, and a broken, aged Magnus on a sorcerous world who banished him. He was warned of deaths that awaited him if he intervened between Magnus and Russ or fought Corax. Khorne broke the gods' pact by sending the Bloodthirster An'ggrath against him, and Lorgar killed it at great cost. Kairos Fateweaver then offered him the choice that would come at Calth: kill Guilliman for glory and lose the war, or spare him for the greater victory. Back in the present, Lorgar rejects Horus' plans and announces his own campaign against Ultramar. He forces an audience with the daemon in Fulgrim's flesh, is shown the painting that imprisons his brother's soul, and keeps the secret. Finally he summons Argel Tal for other wars.",
   "characters": [
    "Lorgar – Primarch, Word Bearers",
    "Ingethel the Ascended – daemon prince and Lorgar's guide",
    "Magnus the Red – Primarch, Thousand Sons",
    "Horus – Warmaster, Sons of Horus",
    "Fulgrim – Primarch, Emperor's Children (possessed)",
    "An'ggrath the Unbound – Bloodthirster of Khorne",
    "Kairos Fateweaver – Lord of Change",
    "Argel Tal – Gal Vorbak, Word Bearers"
   ],
   "legions": [
    "Word Bearers",
    "Daemons"
   ],
   "setting": "c. 963.M30 (frame: 006.M31)",
   "sort": 30963,
   "planets": [
    "shanriatha"
   ],
   "related": [
    "first_heretic",
    "bearer_of_the_word",
    "know_no_fear",
    "betrayer"
   ],
   "collected_in": "eye_of_terra",
   "series": "The Horus Heresy",
   "number": null
  },
  "brotherhood_of_the_storm": {
   "title": "Brotherhood of the Storm",
   "author": "Chris Wraight",
   "year": 2012,
   "format": "Novella",
   "pages": 128,
   "premise": "While word of Horus' treachery spreads, the White Scars remain silent, locked in a long war against the orks of Chondax. Through the eyes of a jetbike khan, a Stormseer and a Munitorum official sent to bring order to the Legion, the novella reveals the warriors of Jaghatai Khan before they must choose their path.",
   "summary": "On Chondax, the salt-plain 'White World', Shiban Khan leads his brotherhood in a swift, savage jetbike war against the last orks of the Ullanor empire. His charge-first Chogorian instincts sit uneasily beside the measured Terran-born Torghun Khan, whose friendship and time spent with the Sons of Horus foreshadow later divisions. In a second strand, Departmento Munitorum general Ilya Ravallion is sent after the Triumph of Ullanor to tame the Legion's chaotic logistics, struggles against its ways, and finally wins an audience with the Khan, beginning her place at his side. A third strand follows the young Targutai Yesugei on Chogoris as his psychic gifts awaken in the mountains and he sees visions of four dark powers and of the Emperor they fear. The White Scars hunt the orks to the last stronghold and the campaign ends in victory. Jaghatai Khan himself appears only near the close, as word of a brother's treachery reaches the Legion. Its choice is left open, and the story continues directly in Scars.",
   "characters": [
    "Shiban Khan – Khan of the Brotherhood of the Storm, White Scars",
    "Torghun Khan – Terran-born khan, White Scars",
    "Targutai Yesugei – Stormseer, White Scars",
    "Ilya Ravallion – General, Departmento Munitorum",
    "Jaghatai Khan – Primarch, White Scars"
   ],
   "legions": [
    "White Scars"
   ],
   "setting": "c. 006–007.M31 (end of the Chondax campaign)",
   "sort": 31006,
   "planets": [
    "chondax",
    "chogoris"
   ],
   "related": [
    "scars",
    "path_of_heaven",
    "warhawk_of_chogoris"
   ],
   "collected_in": "legacies_of_betrayal",
   "series": "The Horus Heresy",
   "number": null
  },
  "corax_soulforge": {
   "title": "Corax: Soulforge",
   "author": "Gav Thorpe",
   "year": 2013,
   "format": "Novella",
   "pages": 128,
   "premise": "After Isstvan V, the surviving Raven Guard fight a hidden war behind enemy lines. A captured Word Bearers ship reveals a new alliance between the traitors and the forge world Constanix II, where terrible new war machines are said to be born. Corax must strike at the heart of its priesthood.",
   "summary": "Waging hit-and-run war after the events of Deliverance Lost, Corax and his officers board and take the Word Bearers cruiser Kamiel. Its records point to Constanix II, an isolated forge world of floating barge-cities on an acid sea, whose master Archmagos Delvere was won over by a Word Bearers emissary shortly before Isstvan V. Delvere is now building daemon-infused war engines. Over the objections of Branne and Agapito Nev, Corax divides his small fleet to investigate. The Raven Guard find most barge-cities and part of the Legio Nivalis corrupted, and, aided by loyalist Mechanicum elements and the Warlord Titan Castor Terminus, seize the barge-city Atlas. From there they assault the capital Iapetus. Corax fights through to its shrine of the Machine-God, destroys the first daemon engines of their kind and kills Delvere. He then duels the Word Bearers sorcerer Azor Nathrakin, who draws strength from a warp rift, and hurls him into the rift as it collapses. Constanix II is liberated, though other daemon engines remain loose and many questions about the Raven Guard's own future go unanswered.",
   "characters": [
    "Corvus Corax – Primarch, Raven Guard",
    "Agapito Nev – Commander, Raven Guard",
    "Branne Nev – Commander and Master of Recruits, Raven Guard",
    "Archmagos Delvere – master of Constanix II, Dark Mechanicum",
    "Azor Nathrakin – sorcerer, Word Bearers"
   ],
   "legions": [
    "Raven Guard",
    "Word Bearers",
    "Dark Mechanicum"
   ],
   "setting": "c. 007.M31",
   "sort": 31007,
   "planets": [
    "constanix_ii"
   ],
   "related": [
    "deliverance_lost",
    "ravenlord",
    "corax",
    "lord_of_shadows"
   ],
   "collected_in": "corax",
   "series": "The Horus Heresy",
   "number": null
  },
  "scorched_earth": {
   "title": "Scorched Earth",
   "author": "Nick Kyme",
   "year": 2013,
   "format": "Novella",
   "pages": 128,
   "premise": "In the aftermath of the Drop Site Massacre, the loyal Legions lie broken on Isstvan V. The Salamanders Ra'stan and Usabius leave their fellow survivors and strike out into the Urgall Depression, hunted by traitors, to learn what – if anything – remains of their vanished primarch Vulkan.",
   "summary": "After the slaughter on Isstvan V, two Salamanders, Ra'stan and Usabius, break away from the other survivors to search the Urgall Depression for Vulkan. Their journey takes them across a ravaged battlefield where traitor hunting parties track and torture loyalist stragglers, and they cross paths with other survivors of the shattered Legions. Ra'stan, once a Librarian, is haunted by guilt over the moment their drop ships were brought down. As the search grows more desperate, the truth emerges: Usabius, his captain, died in the crash, and the companion Ra'stan has been talking to is a figment of his broken mind. The search for Vulkan ends without an answer, the primarch's fate still unknown, and Ra'stan is left a broken survivor of the massacre. The phrase 'Vulkan lives' first appears here and leads into the Salamanders' later story.",
   "characters": [
    "Ra'stan – former Librarian, Salamanders",
    "Usabius – Captain, Salamanders",
    "Vulkan – Primarch, Salamanders (sought)"
   ],
   "legions": [
    "Salamanders",
    "Iron Hands",
    "Raven Guard"
   ],
   "setting": "006.M31",
   "sort": 31006,
   "planets": [
    "isstvan5"
   ],
   "related": [
    "vulkan_lives",
    "promethean_sun",
    "sons_of_the_forge",
    "dropsite_massacre"
   ],
   "collected_in": "born_of_flame",
   "series": "The Horus Heresy",
   "number": null
  },
  "tallarn_executioner": {
   "title": "Tallarn: Executioner",
   "author": "John French",
   "year": 2013,
   "format": "Novella",
   "pages": 128,
   "premise": "The Iron Warriors virus-bomb Tallarn, a verdant staging world of the Great Crusade, and turn it into a toxic wasteland. When the survivors of the Jurnian 701st Armoured Regiment emerge from their shelters, the opening moves of the greatest tank battle in history begin – while hidden powers manipulate both sides.",
   "summary": "Tallarn has long served as a transfer world for the Imperial Army, its vaults packed with more tanks than crews. The battered Iron Warriors fleet arrives and bombards it with life-eater virus, killing the surface world in hours. The remnants of the Jurnian 701st Armoured Regiment, many of them barely trained soldiers, convicts and local volunteers, survive sealed in underground shelters. Through a Tallarn native whose life is upended and two tank commanders at different stages of their careers, the novella follows the crews of tanks such as Lantern, Silence and Talon as they emerge into the poisoned fog. They fight the first armoured clashes against the Iron Warriors, proving that Tallarn will not die quietly. Betrayal runs through the story, with the Alpha Legion among the hidden hands at work. The novella ends abruptly and brutally, opening the long war that continues in Tallarn: Ironclad.",
   "characters": [
    "Crews of the tanks Lantern, Silence and Talon – Jurnian 701st Armoured Regiment, Imperial Army"
   ],
   "legions": [
    "Iron Warriors",
    "Imperial Army"
   ],
   "setting": "010.M31",
   "sort": 31010,
   "planets": [
    "tallarn"
   ],
   "related": [
    "tallarn_ironclad",
    "tallarn",
    "angel_exterminatus"
   ],
   "collected_in": "tallarn",
   "series": "The Horus Heresy",
   "number": null
  },
  "ravenlord": {
   "title": "Ravenlord",
   "author": "Gav Thorpe",
   "year": 2014,
   "format": "Novella",
   "pages": 128,
   "premise": "Corax and his surviving Raven Guard wage a different kind of war, liberating worlds held by the traitors and gathering followers. An unexpected reunion with another survivor of Isstvan V leads them to the prison colony of Carandiru – and to the ghosts of their own past.",
   "summary": "The Raven Guard liberate Scarato, a world the Sons of Horus had made into a prison, and use its astropaths to send a rallying call that draws more than three hundred legionaries of several Legions. Among them is Gherith Arendi, former commander of Corax's Shadow Wardens, believed dead on Isstvan V; after the Alpha Legion's infiltration of Deliverance he is met with suspicion. His secret is that he escaped Isstvan by using Salamanders and Iron Hands survivors as bait to seize a shuttle, and Corax confronts him over it. Arendi's intelligence leads the Legion to Carandiru, where Commander Soukhounou infiltrates alone and spends two months preparing a popular uprising. On the Day of Vengeance the uprising erupts and Mor Deythan teams black out the capital's defences. Branne's Raptors discover a laboratory where Fabius has experimented on captured loyalist legionaries. Carandiru's commander proves to be Nathian, a Raven Guard companion from the Lycaeus uprising who was left behind on Isstvan V, turned by Lorgar, and built the prison world as a trap. Corax attacks Nathian's bunker alone and is nearly killed by Fabius' 'New Men' until Arendi disobeys orders and saves him, restoring trust between them. Nathian overloads the bunker's generator and kills himself in front of Corax, blaming him for what he became, and Corax orders the Raptors to purge the failed experiments over Branne's protests.",
   "characters": [
    "Corvus Corax – Primarch, Raven Guard",
    "Gherith Arendi – former commander of the Shadow Wardens, Raven Guard",
    "Nathian – renegade Raven Guard, master of Carandiru",
    "Branne Nev – Commander of the Raptors, Raven Guard",
    "Navar Hef – Raptor lieutenant, Raven Guard",
    "Soukhounou – Commander, Raven Guard",
    "Napenna – Techmarine, Raven Guard (prisoner)",
    "Kasati Nuon – loyalist Night Lord"
   ],
   "legions": [
    "Raven Guard"
   ],
   "setting": "c. 008.M31",
   "sort": 31008,
   "planets": [
    "carandiru"
   ],
   "related": [
    "corax_soulforge",
    "weregeld",
    "deliverance_lost",
    "corax"
   ],
   "collected_in": "corax",
   "series": "The Horus Heresy",
   "number": null
  },
  "purge": {
   "title": "The Purge",
   "author": "Anthony Reynolds",
   "year": 2014,
   "format": "Novella",
   "pages": 128,
   "premise": "As the Shadow Crusade spreads across Ultramar, the Word Bearers' 34th Company falls upon the isolated world of Percepton Primus. Commander Sor Talgron, who once stood in the halls of the Imperial Palace, begins to doubt his part in Lorgar's grand scheme – a dangerous thought in a Legion that does not forgive unbelief.",
   "summary": "Sor Talgron's 34th Company of the Word Bearers attacks Percepton Primus during the Shadow Crusade; the Ultramarines' fleet is lost within minutes, but Chapter Master Aecus Decimus drags the ground war out for 163 days. Talgron is a dour, faithless soldier who despises the zealots of his Legion and doubts the warp-worship of Chaplain Jarulek. A second timeline shows his years of garrison duty on Terra beside Rogal Dorn and the Custodian Tiber Acanthus, during which the 34th secretly sabotaged the defences of the Throneworld and Jarulek turned Talgron's old Terran mentor Volkhar Wreth into a daemonhost, before Dorn sent the company to Isstvan V. On Percepton, Decimus prepares a last resort: the surviving cruiser Righteous Fury fires phosphex onto the battlefield before it is destroyed. Decimus leads a final charge as the cold fire consumes both sides. Two-thirds of the 34th die and Talgron is burned beyond recognition, dragged from the flames by the young sergeant Kol Badar. Through the rite once performed with Jarulek, Talgron returns from death, is rebuilt with bionics and embraces the Dark Gods as a Dark Apostle, purging his own doubt.",
   "characters": [
    "Sor Talgron – Captain, 34th Company, Word Bearers",
    "Jarulek – Chaplain of the 34th Company, Word Bearers",
    "Kol Badar – Cataphractii sergeant, Word Bearers",
    "Aecus Decimus – Chapter Master, Ultramarines",
    "Volkhar Wreth – Talgron's Terran mentor",
    "Rogal Dorn – Primarch, Imperial Fists",
    "Tiber Acanthus – Legio Custodes",
    "Archamus – master of Dorn's Huscarls, Imperial Fists"
   ],
   "legions": [
    "Word Bearers",
    "Ultramarines"
   ],
   "setting": "007.M31 (flashbacks before Isstvan V)",
   "sort": 31007,
   "planets": [
    "percepton_primus",
    "terra"
   ],
   "related": [
    "betrayer",
    "know_no_fear",
    "first_heretic"
   ],
   "collected_in": "silent_war",
   "series": "The Horus Heresy",
   "number": null
  },
  "seventh_serpent": {
   "title": "The Seventh Serpent",
   "author": "Graham McNeill",
   "year": 2014,
   "format": "Novella",
   "pages": 128,
   "premise": "The crew of the Sisypheum – Iron Hands, Raven Guard and Salamanders who survived Isstvan V – seek a decisive blow against the traitors. With unlikely allies they strike at a hidden Alpha Legion outpost, but nothing involving the XX Legion is ever what it seems.",
   "summary": "After the events of Angel Exterminatus, the Sisypheum boards an Alpha Legion cruiser, and its decrypted logs point to a meeting with Alpharius himself. When another Alpha Legion warship attacks, the crew is rescued by the Iron Heart, flagship of the renowned Iron Hands captain Shadrak Meduson. Nykona Sharrowkyn distrusts their saviour, infiltrates the Iron Heart and is caught, but the mission is set: kill Alpharius. The target is a refinery platform floating above the acid seas of Eirene Septimus. A team in stolen Alpha Legion armour seizes the control hub, Frater Thamatica and Sabik Wayland rig the docked ships' fuel to explode, and Sharrowkyn shoots 'Alpharius' through the head. The victim proves to be an Alpha Legion dissident, the sabotaged ships were crewed by loyalists, and 'Shadrak Meduson' was Alpharius all along – the Sisypheum has done the Alpha Legion's internal killing for it. Sharrowkyn kills the legionary Ashur Maesan, but Alpharius refuses to fight him, saying Magnus asked that he be spared, and departs. The platform is destroyed and only four of the Sisypheum's warriors escape, among them the badly wounded Cadmus Tyro, who admits he should have listened to Sharrowkyn.",
   "characters": [
    "Nykona Sharrowkyn – Mor Deythan, Raven Guard",
    "Cadmus Tyro – Equerry and acting commander of the Sisypheum, Iron Hands",
    "Frater Thamatica – Iron Father, Iron Hands",
    "Sabik Wayland – Iron Father and pilot, Iron Hands",
    "Atesh Tarsa – Apothecary, Salamanders",
    "Verdana Cybus – Iron Hands",
    "Alpharius – Primarch, Alpha Legion",
    "Ashur Maesan – Alpha Legion"
   ],
   "legions": [
    "Iron Hands",
    "Raven Guard",
    "Salamanders",
    "Alpha Legion"
   ],
   "setting": "c. 008.M31 (after Angel Exterminatus)",
   "sort": 31008,
   "planets": [],
   "related": [
    "angel_exterminatus",
    "shattered_legions",
    "alpharius_head_of_the_hydra"
   ],
   "collected_in": "shattered_legions",
   "series": "The Horus Heresy",
   "number": null
  },
  "tallarn_ironclad": {
   "title": "Tallarn: Ironclad",
   "author": "John French",
   "year": 2015,
   "format": "Novella",
   "pages": 240,
   "premise": "The Battle of Tallarn rages across the poisoned planet as tanks, Dreadnoughts and Titans clash. But what secret purpose really drives the Iron Warriors onward – and who else is trying to find out?",
   "summary": "The armoured war on Tallarn has grown into a clash of tanks, Dreadnoughts, Titans and Knights. Perturabo recalls the Contemptor Dreadnought Hrend, still haunted by Isstvan V, to search for an ancient artefact buried beneath the planet – the true reason the Iron Warriors came. Argonis, sent by Horus to bring the wayward Iron Warriors to heel, distrusts Perturabo and investigates with the Dark Mechanicum adept Sota-Nul. The Alpha Legion operative Jalen, three cloned brothers who were on Tallarn before the invasion, runs agents on both sides, while the Vanus Infocyte Iaeo hunts him. Iaeo plays Argonis against the traitors; one Jalen is killed by Argonis and another stranded on the surface, and Iaeo sacrifices herself to expose the last, keeping the artefact out of Alpha Legion hands. Hrend reaches the hidden site and barely survives an Alpha Legion attack there. On the loyalist side, the tank commander Kord realises the enemy is searching for something, and the Imperial counter-offensive culminates in a battle near the Iron Warriors' stronghold. The Iron Warriors are driven off in a costly loyalist victory, Argonis escapes, and the nature of the artefact remains a mystery.",
   "characters": [
    "Hrend – Contemptor Dreadnought, Iron Warriors",
    "Perturabo – Primarch, Iron Warriors",
    "Argonis – emissary of the Warmaster, Sons of Horus",
    "Sota-Nul – adept, Dark Mechanicum",
    "Jalen – clone-triplet operative, Alpha Legion",
    "Iaeo – Vanus Infocyte, Officio Assassinorum",
    "Kord – tank commander, Imperial Army"
   ],
   "legions": [
    "Iron Warriors",
    "Imperial Army",
    "Sons of Horus",
    "Alpha Legion",
    "Officio Assassinorum"
   ],
   "setting": "010–011.M31",
   "sort": 31011,
   "planets": [
    "tallarn"
   ],
   "related": [
    "tallarn_executioner",
    "tallarn",
    "hammer_of_olympia"
   ],
   "collected_in": "tallarn",
   "series": "The Horus Heresy",
   "number": null
  },
  "cybernetica": {
   "title": "Cybernetica",
   "author": "Rob Sanders",
   "year": 2015,
   "format": "Novella",
   "pages": 128,
   "premise": "Mars has fallen to the Warmaster's Dark Mechanicum and lies under Rogal Dorn's blockade. The corruption runs too deep for half-measures, and Dorn and Malcador, guided by those who witnessed the fall, weigh a terrible final solution: the extermination of all life on the Red Planet.",
   "summary": "Raven Guard sergeant Dravian Klayde, 'the Carrion', rebuilt with augmetics after terrible wounds, is training on Mars as a Techmarine alongside initiates of other Legions when the Schism of Mars erupts. The Dark Mechanicum storms the barracks and Klayde is the only survivor; he escapes with the Imperial Fists and on Terra is recruited by Malcador into the Knights Errant. Dorn, Malcador and Fabricator-Locum Zagreus Kane debate how to retake Mars and settle on a final solution. Rather than an open assault, they will free the imprisoned heretek Octal Bool, who worships the Tabula Myriad – a forbidden Dark Age machine intelligence with an army of thinking war machines that could wipe Mars clean of life. Klayde persuades Dorn to give him a narrow window for a clandestine strike. The mission is undone by Aulus Scaramanca, an Iron Warriors Techmarine and former barracks comrade who survived the attack and has joined the Dark Mechanicum. Klayde falls fighting Scaramanca, his fate left uncertain, and the threat of the Tabula Myriad remains for the future.",
   "characters": [
    "Dravian Klayde 'the Carrion' – Raven Guard sergeant and Techmarine, later Knight Errant",
    "Aulus Scaramanca – Techmarine, Iron Warriors, turned to the Dark Mechanicum",
    "Octal Bool – imprisoned heretek",
    "Tabula Myriad – machine intelligence",
    "Rogal Dorn – Primarch, Imperial Fists",
    "Malcador the Sigillite – Regent of Terra",
    "Zagreus Kane – Fabricator-Locum, Mechanicum"
   ],
   "legions": [
    "Mechanicum",
    "Dark Mechanicum",
    "Imperial Fists",
    "Raven Guard",
    "Knights Errant"
   ],
   "setting": "c. 005–006.M31 (Schism of Mars and blockade)",
   "sort": 31005,
   "planets": [
    "mars",
    "terra"
   ],
   "related": [
    "mechanicum",
    "praetorian_of_dorn"
   ],
   "collected_in": "burden_of_loyalty",
   "series": "The Horus Heresy",
   "number": null
  },
  "wolf_king": {
   "title": "Wolf King",
   "author": "Chris Wraight",
   "year": 2015,
   "format": "Novella",
   "pages": 128,
   "premise": "Still reeling from Prospero, the Space Wolves are ambushed by the Alpha Legion and hounded to the edge of the Alaxxes Nebula. Leman Russ calls on his brothers for aid, but none comes. Trapped in the rust-red clouds, the Rout prepares to make a stand worthy of the sagas.",
   "summary": "After Prospero the Space Wolves are routed by the Alpha Legion and flee into the corrosive, sensor-blinding Alaxxes Nebula. Russ calls the nearby White Scars for help, but the Khan, unsure who is loyal, refuses. Believing Magnus dead and doubting his role as the Emperor's executioner, Russ withdraws into his chambers, leaving First Captain Gunnar Gunnhilt to lead a desperate breakout. The young pack leader Bjorn helps Russ come to terms with his past and the need for the Legion to change, and the Wolf King returns to command. Gunnhilt sacrifices himself and his ship to destroy a major Alpha Legion vessel. Lernaean Terminators teleport onto Russ' flagship, and Russ faces Alpharius disguised among them. At the brink of defeat, a Dark Angels fleet led by the star fort Chimaera arrives and the Alpha Legion withdraws; a Dark Angels captain had secretly come aboard to test the Wolves' loyalty. Their commander Althalos leads an expedition sent out by Luther decades earlier and knows nothing of the Heresy. Russ tells him of Horus' treachery, the Dark Angels resupply the Wolves and turn for Caliban, and Russ, his purpose restored, sets course for Terra.",
   "characters": [
    "Leman Russ – Primarch, Space Wolves",
    "Gunnar Gunnhilt – First Captain, Space Wolves",
    "Bjorn the One-Handed – pack leader, Space Wolves",
    "Kva – Rune Priest, Space Wolves",
    "Alpharius – Primarch, Alpha Legion",
    "Althalos – Chapter Master, Dark Angels",
    "Ormand – Captain, Dark Angels"
   ],
   "legions": [
    "Space Wolves",
    "Alpha Legion",
    "Dark Angels"
   ],
   "setting": "007.M31",
   "sort": 31007,
   "planets": [],
   "related": [
    "scars",
    "prospero_burns",
    "vengeful_spirit",
    "wolfsbane"
   ],
   "collected_in": "burden_of_loyalty",
   "series": "The Horus Heresy",
   "number": null
  },
  "honoured": {
   "title": "The Honoured",
   "author": "Rob Sanders",
   "year": 2015,
   "format": "Novella",
   "pages": 192,
   "premise": "After the Word Bearers' betrayal at Calth, the tortured Veridian star drives the survivors of both sides into the planet's subterranean arcologies. Captain Steloc Aethon of the Ultramarines' 'Honoured 19th' Company leads the war in the underworld – if he can master his own thirst for vengeance.",
   "summary": "On the surface at Lanshear, Captain Steloc Aethon of the 19th Company glimpses a Word Bearers chaplain he believes is his old acquaintance Kurtha Sedd. As the Veridian star scorches Calth, Aethon leads survivors and civilians into the arcologies. The Ultramarines take a Word Bearers teleport station and then the main teleport hub, winning by flooding the tunnels with coolant. Captured Word Bearers confirm that Sedd leads the enemy, and Aethon sends them back with an offer of an honourable death. Sergeant Orestrian Urcus finds the civilians who sheltered with the Ultramarines massacred, and Sedd ambushes and kills the young acting sergeant Arkan Dardanus. Aethon repels an all-out Word Bearers assault, follows the trail to Sedd's lair and duels him. Aethon is killed by Sedd, and only the arrival of Tauro Nicodemus' relief force destroys Sedd's daemons and saves Urcus and a few others, while Sedd escapes.",
   "characters": [
    "Steloc Aethon – Captain, 19th Company, Ultramarines",
    "Arkan Dardanus – acting sergeant, Ultramarines",
    "Orestrian Urcus – Terminator Sergeant, Ultramarines",
    "Tauro Nicodemus – Tetrarch, Ultramarines",
    "Remus Ventanus – Captain, Ultramarines",
    "Kurtha Sedd – Chaplain, Word Bearers"
   ],
   "legions": [
    "Ultramarines",
    "Word Bearers"
   ],
   "setting": "007.M31",
   "sort": 31007,
   "planets": [
    "calth"
   ],
   "related": [
    "unburdened",
    "know_no_fear",
    "mark_of_calth"
   ],
   "series": "The Horus Heresy",
   "number": null
  },
  "unburdened": {
   "title": "The Unburdened",
   "author": "David Annandale",
   "year": 2015,
   "format": "Novella",
   "pages": 192,
   "premise": "The companion to The Honoured, told from the traitors' side. Chaplain Kurtha Sedd of the Word Bearers' Third Hand Chapter is troubled by the attack on Calth, yet he and his devout brethren must carry the war into the haunted tunnels beneath the planet, whatever the cost.",
   "summary": "The story opens at Monarchia, where the young Kurtha Sedd watches the Ultramarines humble his Legion, commits a massacre in his shame that the Legion covers up, and loses his faith in the Emperor. On Calth, Sedd rallies the scattered Word Bearers warbands in the caverns beneath the scorched surface. The battles of The Honoured are retold from his side, crossing Steloc Aethon's path at key moments. Sedd is wracked by doubt; some of his warriors think him weak, he abandons his men at a crucial moment, and his first attempts at daemonology go badly. His warband is thwarted again and again and loses almost an entire coterie, gaining only a pair of daemon-possessed warriors – the Unburdened. Sedd repeatedly avoids killing Aethon, until he understands that murdering him will sever his last ties to the past. He kills Aethon and gives himself fully to Chaos as the arcologies collapse around them.",
   "characters": [
    "Kurtha Sedd – Chaplain, Third Hand Chapter, Word Bearers",
    "Steloc Aethon – Captain, 19th Company, Ultramarines",
    "The Unburdened – possessed warriors, Word Bearers"
   ],
   "legions": [
    "Word Bearers",
    "Ultramarines"
   ],
   "setting": "007.M31 (prologue at Monarchia)",
   "sort": 31007,
   "planets": [
    "calth",
    "khur"
   ],
   "related": [
    "honoured",
    "know_no_fear",
    "mark_of_calth",
    "first_heretic"
   ],
   "series": "The Horus Heresy",
   "number": null
  },
  "garro_vow_of_faith": {
   "title": "Garro: Vow of Faith",
   "author": "James Swallow",
   "year": 2015,
   "format": "Novella",
   "pages": 128,
   "premise": "Nathaniel Garro, Agentia Primus of Malcador's Knights Errant, has grown restless as the Sigillite's plans for the future are revealed. As the Warmaster's armies draw near, he sets out across Terra in search of the living saint, Euphrati Keeler.",
   "summary": "Disillusioned by what he has learned of Malcador's secret designs, Garro sets aside his role and goes in search of Euphrati Keeler as Horus' forces approach Terra. At Salvaguardia, a remote site where followers of the Lectitio Divinitatus have been massacred, he meets Sigismund, who has encountered Keeler himself. The killers are Horus' agents: Eristede Kell, the former Vindicare assassin broken aboard the Vengeful Spirit and now armed with a daemon weapon, and the Alpha Legion operative Haln. They mean to kill Keeler and ignite religious hysteria on Terra. Garro and the assassins converge on the Hesperides orbital plate, where Emperor-worshippers are being held. Keeler performs miracles of vision, healing and stopped time, and Garro kills Haln and then Kell before the daemon weapon can be unleashed. In the end Garro delivers Keeler into Malcador's custody; the Knight Errant Vardas Ison takes her away, and she tells Garro that his hand will one day free her.",
   "characters": [
    "Nathaniel Garro – Agentia Primus, Knights Errant",
    "Euphrati Keeler – the living saint",
    "Malcador the Sigillite – Regent of Terra",
    "Sigismund – First Captain, Imperial Fists",
    "Eristede Kell – Vindicare assassin turned traitor",
    "Haln – operative, Alpha Legion",
    "Vardas Ison – Knight Errant"
   ],
   "legions": [
    "Knights Errant",
    "Imperial Fists",
    "Officio Assassinorum"
   ],
   "setting": "c. 013.M31 (before the Siege)",
   "sort": 31013,
   "planets": [
    "terra"
   ],
   "related": [
    "garro",
    "flight_eisenstein",
    "vengeful_spirit"
   ],
   "collected_in": "garro",
   "series": "The Horus Heresy",
   "number": null
  },
  "sons_of_the_forge": {
   "title": "Sons of the Forge",
   "author": "Nick Kyme",
   "year": 2016,
   "format": "Novella",
   "pages": 240,
   "premise": "Charged with a solemn duty by Vulkan himself, Forgefather T'kell and a chosen band of Firedrakes must carry the last seven of the primarch's greatest artefacts to a secret vault called the Wrought, beyond the reach of enemy and ally alike. But word of the relics has already spread.",
   "summary": "Before Isstvan, Vulkan ordered T'kell to destroy the artefacts of his great vault, but allowed him to keep seven, one for each realm of Nocturne, and hide them in a secret armoury, the Wrought. After Vulkan's body is returned to Nocturne, T'kell recruits Captain Rahz Obek and the 'Unscarred' Firedrakes, who erased their honour markings in shame, and sails secretly in the forge-ship Chalice of Fire. At the Wrought they find the enemy waiting: Horus' Mechanicum adviser Regulus, with Dark Mechanicum forces and a cadre of Sons of Horus. Obek is captured, and T'kell, infected with scrap-code that compels him to open the vault, shoots himself to burn it out and falls into a coma. The Salamanders ally with the Shattered Legions ship Obstinate under Iron Father Kastigan Ulok, who has used forbidden technology to raise his dead crew and tries to seize the relics once he learns what the Chalice carries. Ulok's warriors Ahrem Gallikus and a Salamander apothecary turn against him and die, and Chaplain Zau'ul secretly wields one of the artefacts to kill Ulok's champion before dying himself. Captured aboard the Obstinate, T'kell orders the Chalice of Fire to destroy it with him aboard. Obek fulfils Vulkan's wish and safeguards the artefacts; ten thousand years later the Salamanders Chapter recovers the drifting Chalice, Obek's armour still standing vigil at its heart.",
   "characters": [
    "T'kell – Forgefather, Salamanders",
    "Rahz Obek – Captain of the 'Unscarred' Firedrakes, Salamanders",
    "Zau'ul – Chaplain, Salamanders",
    "Kastigan Ulok – Iron Father, Iron Hands (Shattered Legions)",
    "Ahrem Gallikus – Medusan Immortal, Iron Hands",
    "Regulus – Mechanicum adept and adviser to Horus",
    "Vulkan – Primarch, Salamanders (prologue)"
   ],
   "legions": [
    "Salamanders",
    "Sons of Horus",
    "Dark Mechanicum",
    "Iron Hands"
   ],
   "setting": "c. 010.M31 (after Deathfire)",
   "sort": 31010,
   "planets": [
    "nocturne"
   ],
   "related": [
    "deathfire",
    "vulkan_lives",
    "scorched_earth",
    "born_of_flame"
   ],
   "collected_in": "born_of_flame",
   "series": "The Horus Heresy",
   "number": null
  },
  "weregeld": {
   "title": "Weregeld",
   "author": "Gav Thorpe",
   "year": 2017,
   "format": "Novella",
   "premise": "The Raven Guard fight on, but Corax's mutated Raptors are a growing burden and a secret blood-debt is owed to the Space Wolves. When the Wolves and their primarch are cornered by the traitors, Corax must decide what his Legion – and he himself – has become.",
   "summary": "Corax's mutated Raptors continue to degenerate, and their lieutenant Navar Hef confesses that he murdered a Space Wolves pack that had been sent to guard Corax, leaving a blood-debt owed to the Sixth Legion. Distrusting psykers, Corax disbands his Librarius and sends all non-Raven Guard allies, including the loyal Night Lord Kasati Nuon, to Terra. Reinforcements arrive from Deliverance while the Raven Guard fight scattered traitor forces. Learning that the Space Wolves and a gravely wounded Leman Russ are cornered by Horus' forces on Yarant III, Corax leads his Legion and the Raptors to their aid. Gherith Arendi's Black Guard and the Raptors help get the Wolves off the planet, and Russ briefly rises from his sickbed to speak with Corax before collapsing again. The debt is paid in blood, remembered by the Wolves in the Saga of the Weregeld. In the epilogue Hef, fully degenerated but still recognising his primarch, is killed by Corax, now convinced that primarchs, legionaries and Raptors alike are tainted by the warp.",
   "characters": [
    "Corvus Corax – Primarch, Raven Guard",
    "Navar Hef – Raptor lieutenant, Raven Guard",
    "Gherith Arendi – commander of the Black Guard, Raven Guard",
    "Agapito Nev – Commander, Raven Guard",
    "Balsar Kurthuri – former Chief Librarian, Raven Guard",
    "Kasati Nuon – loyalist Night Lord",
    "Leman Russ – Primarch, Space Wolves",
    "Rathvin – Watch Pack leader, Space Wolves"
   ],
   "legions": [
    "Raven Guard",
    "Space Wolves"
   ],
   "setting": "c. 012.M31",
   "sort": 31012,
   "planets": [
    "yarant_iii"
   ],
   "related": [
    "ravenlord",
    "corax",
    "wolfsbane",
    "lord_of_shadows"
   ],
   "collected_in": "corax",
   "series": "The Horus Heresy",
   "number": null
  },
  "dreadwing": {
   "title": "Dreadwing",
   "author": "David Guymer",
   "year": 2018,
   "format": "Novella",
   "premise": "With the Ruinstorm broken and Guilliman and Sanguinius racing for Terra, the Dark Angels wage a campaign of annihilation against the worlds of the traitor Legions. As the Legion fragments, its Wing lieutenants begin to ask whether the Lion still fights a war he means to win.",
   "summary": "Freed from the Ruinstorm, the Dark Angels use the Tuchulcha engine to strike at the worlds of the traitor Legions while the Lion broods and keeps his plans even from his lieutenants. The novella centres on the only two Hexagrammaton commanders to survive the Ruinstorm: Farith Redloss of the Dreadwing, who wants the destruction to continue, and Holguin of the Deathwing, who wants to go to Terra. Both are visited by the Watchers in the Dark, and new lieutenants such as Calloson of the Stormwing and Vastael of the Firewing rise to fill the gaps. The Legion fights to retake a forge world, and in the final battle the Lion turns on Mechanicum forces who had been his allies. Convinced by the dark Astronomican and Curze's prophecies that Terra has fallen or will fall, the Lion resolves to burn the traitors' homeworlds so that Horus inherits only ash. Chemos and Barbarus are destroyed and Cthonia is named as the next target, while Holguin's objections are brushed aside, leaving a bleak picture of the First Legion on the eve of the Siege.",
   "characters": [
    "Lion El'Jonson – Primarch, Dark Angels",
    "Farith Redloss – Voted-Lieutenant of the Dreadwing, Dark Angels",
    "Holguin – Voted-Lieutenant of the Deathwing, Dark Angels",
    "Calloson – Voted-Lieutenant of the Stormwing, Dark Angels",
    "Vastael – Lieutenant of the Firewing, Dark Angels"
   ],
   "legions": [
    "Dark Angels"
   ],
   "setting": "c. 013–014.M31 (after the Ruinstorm)",
   "sort": 31013,
   "planets": [
    "chemos",
    "barbarus"
   ],
   "related": [
    "ruinstorm",
    "angels_of_caliban",
    "lord_of_the_first",
    "luther_first_fallen"
   ],
   "series": "The Horus Heresy",
   "number": null
  },
  "spear_of_ultramar": {
   "title": "Spear of Ultramar",
   "author": "David Annandale",
   "year": 2018,
   "format": "Novella",
   "premise": "As Guilliman's fleet races through the Ruinstorm towards Terra, Horus sends Warsmith Khrossus and a single company of Iron Warriors to delay it in the Charchera System. Guilliman sees the ambush coming but has no choice except to plunge into it, knowing every second lost could doom the Throneworld.",
   "summary": "Guilliman's fleet races through the dying Ruinstorm towards Terra, and Horus must delay it. In the Charchera System a single grand company of Iron Warriors under Warsmith Khrossus, aided by a handful of Word Bearers sorcerers, prepares a trap they know Guilliman will recognise but must spring anyway. The story pairs Ultramarines and Iron Warriors leads across three linked fronts. Guilliman splits his forces: his flagship assaults the planet, a company strikes an orbital station with boarding torpedoes, and the rest pursue a decoy ship that detonates charges buried in a planetoid, destroying itself and several Ultramarines vessels. As the Word Bearers work their ritual, Guilliman agonises over unleashing Captain Hierax's Destroyers and comes close to destroying the world to press on. The Ultramarines prevail through sheer numbers while the Iron Warriors fight to the last, but the victory is bloody and the fleet loses precious time on the road to Terra.",
   "characters": [
    "Roboute Guilliman – Primarch, Ultramarines",
    "Khrossus – Warsmith, Iron Warriors",
    "Hierax – Captain of Destroyers, Ultramarines",
    "Lucretius Corvo – Ultramarines"
   ],
   "legions": [
    "Ultramarines",
    "Iron Warriors",
    "Word Bearers"
   ],
   "setting": "c. 013–014.M31 (after the Ruinstorm)",
   "sort": 31013,
   "planets": [],
   "related": [
    "ruinstorm",
    "lord_of_ultramar",
    "unremembered_empire"
   ],
   "series": "The Horus Heresy",
   "number": null
  }
 }
};
