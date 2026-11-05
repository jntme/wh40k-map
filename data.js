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
   "desc": "Vast Warp storm born at the birth of Slaanesh. Home of the Traitor Legions and launch point of the Black Crusades."
  },
  {
   "id": "maelstrom",
   "name": "Maelstrom",
   "type": "warp",
   "x": -60,
   "y": -120,
   "r": 40,
   "desc": "Warp storm region near the Segmentum Solar, a haven for pirates and renegades."
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
   "segmentum": "obscurus",
   "x": -50,
   "y": -480,
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
   "segmentum": "pacificus",
   "x": -850,
   "y": 80,
   "planets": [
    "helwain"
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
    "type": "Throne World · Seat of the VII Legion",
    "desc": "Starting point of the Great Crusade. Rogal Dorn and the Imperial Fists fortify the Imperial Palace; in 014.M31 the scene of the Siege, at whose end the Emperor is interred upon the Golden Throne."
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
    "type": "Seat of the Mechanicum",
    "desc": "Allied to Terra through the Treaty of Olympus. During the Heresy, Fabricator-General Kelbor-Hal sides with Horus and plunges Mars into civil war."
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
   ]
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
    "desc": "Home of the Vlka Fenryka. Leman Russ grew up among its tribes before the Emperor found him; recruiting world of the Legion."
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
    "type": "Legion homeworld (I Legion)",
    "desc": "Beast-haunted forest world of the knightly orders. Luther governs it after the Lion sends him home; unrest and treachery lead to the planet's destruction at the end of the Heresy."
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
    "type": "Legion homeworld (XV Legion)",
    "desc": "World of scholars with its capital Tizca. After the Council of Nikaea, Magnus withdraws here; devastated by the Space Wolves and Custodes in 004–005.M31."
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
    "type": "Legion homeworld (XIII Legion) · Capital of Imperium Secundus",
    "desc": "Centre of Ultramar, the realm of Five Hundred Worlds. In 009.M31 Guilliman proclaims Imperium Secundus here, believing Terra lost."
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
    "type": "Shipyard and muster world of Ultramar",
    "desc": "In 007.M31 the Ultramarines and Word Bearers mustered here – ostensibly for a joint campaign. After the betrayal the star Veridia was destabilised and the surface rendered uninhabitable; the Underworld War lasted until 014.M31."
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
    "desc": "Sanguinius grew up on the irradiated moon of Baal Secundus. During the Heresy a refuge for loyal Astartes."
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
    "type": "Legion homeworld (VIII Legion, destroyed)",
    "desc": "A hive world of endless night that Konrad Curze ruled through terror as the 'Night Haunter'. When it sank back into crime after his departure, he had it destroyed even before the Heresy."
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
    "type": "Rebel World · Virus bombardment",
    "desc": "Rebel colony against which Horus sent four Legions. The Marines deemed unreliable were deployed to the surface, then annihilated by virus bombs and orbital bombardment."
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
    "type": "Battlefield (Urgall Depression)",
    "desc": "In 006.M31 three loyal Legions landed in the Urgall Depression to bring the traitors to battle, and were betrayed by their supposed allies in the second wave."
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
    "type": "Compliant World of the Luna Wolves",
    "desc": "Eugen Temba, the governor installed by Horus, turned renegade. On Davin's moon he wounded Horus with the Anathame; during a healing in a Lodge temple, Horus was corrupted."
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
   ]
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
    "desc": "Ferrus Manus grew up here and, according to legend, slew the silver wyrm Asirnoth. After Isstvan V the rallying point of the shattered Iron Hands."
   },
   "books": [
    "gorgon_of_medusa"
   ]
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
    "desc": "Vulkan grew up with a blacksmith and protected the Sanctuary Cities from slavers. After Isstvan V the Salamanders here kept alive the hope of his return."
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
    "desc": "Here Konrad Curze was slain by the assassin M'Shen."
   },
   "books": []
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
    "type": "Recruiting World",
    "desc": "A fertile world until the Heresy. The Iron Warriors poisoned it with virus bombardment; there followed the greatest tank battle in history."
   },
   "books": [
    "tallarn"
   ],
   "era40k": {
    "type": "Desert World",
    "desc": "Now a desert world and recruiting ground of the Tallarn regiments."
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
    "type": "Home of the Selenar gene-cults",
    "desc": "Original base of the Luna Wolves. During the Siege of Terra the scene of fighting over the gene-forges of the Selenar."
   },
   "books": [
    "sons_of_the_selenar"
   ]
  },
  "pluto": {
   "name": "Pluto",
   "type": "Fortress planet",
   "desc": "Outermost planet of the Sol System.",
   "era30k": {
    "type": "Outer defence of the Sol System",
    "desc": "In 010.M31 the Alpha Legion attacked the Imperial Fists' defences at Pluto – the first major engagement of the Solar War."
   },
   "books": [
    "praetorian_of_dorn"
   ]
  },
  "cthonia": {
   "name": "Cthonia",
   "type": "Mining World (destroyed)",
   "desc": "Exhausted mining world in the Segmentum Solar, eaten away by gang wars.",
   "era30k": {
    "type": "Legion homeworld (XVI Legion)",
    "desc": "Recruiting world of the Luna Wolves, later the Sons of Horus; its warriors carried Cthonia's harsh gang code into the Legion."
   },
   "books": []
  },
  "nikaea": {
   "name": "Nikaea",
   "type": "Frontier World",
   "desc": "World in the Segmentum Solar.",
   "era30k": {
    "type": "Site of the Council of Nikaea",
    "desc": "In 001.M31 the Emperor ruled here on the future of the Librarians and the psychic arts within the Legions."
   },
   "books": [
    "thousand_sons"
   ]
  },
  "beta_garmon2": {
   "name": "Beta-Garmon II",
   "type": "Hive World",
   "desc": "World in the Beta-Garmon cluster, a strategic nexus before the Segmentum Solar.",
   "era30k": {
    "type": "Battlefield of the Titans",
    "desc": "Scene of the 'Titandeath' around the city of Nyrcon: more than a thousand Titans fell in the greatest Titan battle in history."
   },
   "books": [
    "titandeath"
   ]
  },
  "paramar5": {
   "name": "Paramar V",
   "type": "Forge World",
   "desc": "Forge World in the north of the Segmentum Solar, on a warp-stable route between Isstvan and Sol.",
   "era30k": {
    "type": "Forge World · Supply nexus",
    "desc": "Taken by the Alpha Legion and the Dark Mechanicum in 006.M31, then contested repeatedly (Second Battle 008–011.M31); only reconquered in 019.M31."
   },
   "books": []
  },
  "molech": {
   "name": "Molech",
   "type": "Fortress World · Knight World",
   "desc": "Knight World where, according to traitor legend, the Emperor once made a pact with Chaos.",
   "era30k": {
    "type": "Fortress and Knight World",
    "desc": "Conquered in 009.M31 by Horus with the Sons of Horus and Death Guard; Horus enters a warp gate there and gains new power."
   },
   "books": [
    "vengeful_spirit"
   ]
  },
  "trisolian": {
   "name": "Trisolian",
   "type": "System",
   "desc": "Star system on Horus' path to Terra.",
   "era30k": {
    "type": "Battlefield",
    "desc": "In 012.M31 Leman Russ attacked the flagship Vengeful Spirit here and wounded Horus with the Spear of Russ."
   },
   "books": [
    "wolfsbane"
   ]
  },
  "phall": {
   "name": "Phall",
   "type": "Agri World system",
   "desc": "System in the Segmentum Obscurus with two Agri Worlds.",
   "era30k": {
    "type": "Battlefield",
    "desc": "In 007.M31 an Imperial Fists fleet under Alexis Polux clashed with the Iron Warriors here."
   },
   "books": [
    "shadows_of_treachery"
   ]
  },
  "iydris": {
   "name": "Iydris",
   "type": "Daemon World",
   "desc": "World in the Eye of Terror.",
   "era30k": {
    "type": "Site of Fulgrim's ascension",
    "desc": "Goal of Perturabo and Fulgrim's quest for the 'Angel Exterminatus'; here Fulgrim ascends to daemonhood."
   },
   "books": [
    "angel_exterminatus"
   ]
  },
  "colchis": {
   "name": "Colchis",
   "type": "Chapter Planet (destroyed)",
   "desc": "Desert world in the Segmentum Pacificus, once ruled by a powerful priesthood.",
   "era30k": {
    "type": "Legion homeworld (XVII Legion)",
    "desc": "Lorgar grew up here within the Covenant and led a holy war. Destroyed after the Heresy during the Bitter War (until c. 032.M31)."
   },
   "books": [
    "bearer_of_the_word"
   ]
  },
  "khur": {
   "name": "Khur",
   "type": "Civilised World (dead)",
   "desc": "World in the Segmentum Pacificus with the city of Monarchia.",
   "era30k": {
    "type": "World converted by the Word Bearers",
    "desc": "Monarchia was built as a temple-city in honour of the Emperor. On the Emperor's order the Ultramarines destroyed it – the Censure of the Word Bearers."
   },
   "books": [
    "first_heretic"
   ]
  },
  "inwit": {
   "name": "Inwit",
   "type": "Ice World",
   "desc": "Ice world in the Inwit Cluster (Segmentum Tempestus).",
   "era30k": {
    "type": "Homeworld of Rogal Dorn",
    "desc": "Rogal Dorn grew up here. In 009–013.M31 traitor fleets attacked the Inwit Cluster."
   },
   "books": []
  },
  "kiavahr": {
   "name": "Kiavahr",
   "type": "Forge World",
   "desc": "Technocratic industrial world in the Kiavahr system (Segmentum Tempestus).",
   "era30k": {
    "type": "Subjugated technocracy",
    "desc": "Kiavahr's Tech-Guilds exploited the prison moon Lycaeus until Corax's uprising overthrew them."
   },
   "books": [
    "deliverance_lost"
   ]
  },
  "deliverance": {
   "name": "Deliverance",
   "type": "Moon · Chapter Planet",
   "desc": "Moon of Kiavahr, formerly the prison world Lycaeus.",
   "era30k": {
    "type": "Legion homeworld (XIX Legion)",
    "desc": "Corax led the prisoners' uprising here and renamed Lycaeus Deliverance. After Isstvan V the Raven Guard rebuilt their Legion there."
   },
   "era40k": {
    "type": "Chapter Planet",
    "desc": "Still home of the Raven Guard."
   },
   "books": [
    "deliverance_lost",
    "corax",
    "lord_of_shadows"
   ]
  },
  "barbarus": {
   "name": "Barbarus",
   "type": "Death World",
   "desc": "World shrouded in poisonous mists in the Segmentum Tempestus.",
   "era30k": {
    "type": "Legion homeworld (XIV Legion)",
    "desc": "Mortarion grew up under a necromancer warlord and led the people of the valleys against the Overlords of the mountains. Destroyed during the Heresy."
   },
   "books": [
    "buried_dagger",
    "pale_king"
   ]
  },
  "ullanor": {
   "name": "Ullanor Prime",
   "type": "Ork World",
   "desc": "Centre of the greatest Ork empire at the time of the Great Crusade. Location before the War of the Beast unknown.",
   "era30k": {
    "type": "Site of the Ullanor Crusade",
    "desc": "Conquered in 000.M31; at the subsequent Triumph the Emperor names Horus Warmaster. Before the Siege of Terra the mustering point of the traitor hosts."
   },
   "books": [
    "slaves_to_darkness"
   ]
  },
  "olympia": {
   "name": "Olympia",
   "type": "Dead World",
   "desc": "Mountainous world of city-states in the Ultima Segmentum.",
   "era30k": {
    "type": "Legion homeworld (IV Legion)",
    "desc": "Perturabo grew up here at the court of the Tyrant of Lochos. After an uprising he had the population decimated around 004.M31. During the siege from 019.M31 the Iron Warriors blew up their own arsenals."
   },
   "books": [
    "hammer_of_olympia"
   ]
  },
  "chemos": {
   "name": "Chemos",
   "type": "Dead World",
   "desc": "Exhausted industrial world in the Ultima Segmentum (Aquitaine Sector).",
   "era30k": {
    "type": "Legion homeworld (III Legion)",
    "desc": "Fulgrim led the impoverished colony to new prosperity. Destroyed by the Dark Angels in 012.M31."
   },
   "books": [
    "palatine_phoenix"
   ]
  },
  "diamat": {
   "name": "Diamat",
   "type": "Forge World",
   "desc": "Forge World in the Tanagra system (Ultima Segmentum).",
   "era30k": {
    "type": "Contested Forge World",
    "desc": "The Lion and the Dark Angels defended Diamat against Horus' forces as they learned of the rebellion."
   },
   "books": [
    "fallen_angels"
   ]
  },
  "nuceria": {
   "name": "Nuceria",
   "type": "Dead World",
   "desc": "World in the Ultima Segmentum where Angron grew up as a gladiator slave.",
   "era30k": {
    "type": "Homeworld of Angron",
    "desc": "Angron escaped with fellow slaves to fight the High Riders. The Emperor took him against his will – his companions died. In 008.M31 site of the battle in which Angron ascends to daemonhood. (The World Eaters' training world was Bodt.)"
   },
   "books": [
    "betrayer",
    "slave_of_nuceria"
   ]
  },
  "signus_prime": {
   "name": "Signus Prime",
   "type": "Forbidden World",
   "desc": "Principal world of the Signus Cluster in the Ultima Segmentum.",
   "era30k": {
    "type": "Site of the Signus Campaign",
    "desc": "Horus lured the Blood Angels here, where they fought the daemons of Khorne and Sanguinius learned of the Legion's curse. Afterwards declared Mortae Perpetua."
   },
   "books": [
    "fear_to_tread"
   ]
  },
  "chogoris": {
   "name": "Chogoris",
   "type": "Feudal World · Chapter Planet",
   "desc": "Steppe world in the Ultima Segmentum (Yasan Sector), home of the White Scars.",
   "era30k": {
    "type": "Legion homeworld (V Legion)",
    "desc": "As a warlord, Jaghatai Khan united the steppe peoples and drove out the Palatine before the Emperor found him."
   },
   "era40k": {
    "type": "Chapter Planet",
    "desc": "Still home of the White Scars."
   },
   "books": [
    "warhawk_of_chogoris"
   ]
  },
  "sixty_three_nineteen": {
   "name": "Sixty-Three Nineteen",
   "type": "Compliant World",
   "desc": "The 19th world brought to compliance by the 63rd Expedition Fleet. Location unknown.",
   "era30k": {
    "type": "Crusade World",
    "desc": "In 001.M31 its ruler claimed to be the Emperor; Horus and the Luna Wolves overthrew him."
   },
   "books": [
    "horus_rising"
   ]
  },
  "chondax": {
   "name": "Chondax",
   "type": "Ork and dead world",
   "desc": "Trinary star system at the galactic rim. Exact location unknown.",
   "era30k": {
    "type": "White Scars campaign",
    "desc": "For years the White Scars fought Orks here while facing an Alpha Legion blockade that cut them off from all news."
   },
   "books": [
    "scars"
   ]
  },
  "armatura": {
   "name": "Armatura",
   "type": "Garrison and Forge World",
   "desc": "World in Ultramar.",
   "era30k": {
    "type": "Military hub of Ultramar",
    "desc": "Ravaged by Angron and the World Eaters during the Shadow Crusade."
   },
   "books": [
    "betrayer"
   ]
  },
  "thramas": {
   "name": "Thramas",
   "type": "Hive World",
   "desc": "Hive World in the Thramas Sector on the edge of the Ultima Segmentum.",
   "era30k": {
    "type": "Contested sector world",
    "desc": "Target of the Thramas Crusade, in which the Night Lords and Dark Angels fought for years over the sector."
   },
   "books": []
  },
  "sotha": {
   "name": "Sotha",
   "type": "Dead World",
   "desc": "World on the Eastern Fringe, near Ultramar.",
   "era30k": {
    "type": "Location of the Pharos",
    "desc": "Here stood the Pharos, a xenos beacon that for a time replaced the Astronomican. The Night Lords attacked Sotha."
   },
   "books": [
    "pharos"
   ]
  },
  "murder": {
   "name": "Murder",
   "type": "Death World",
   "desc": "A world of the Interex, designated One-Forty Twenty by the Imperium, where the megarachnid were kept. The Luna Wolves fought there to relieve the trapped Blood Angels and the Imperial Army.",
   "books": []
  },
  "xenobia": {
   "name": "Xenobia",
   "type": "Civilised World",
   "desc": "A border world of the human Interex. Peace talks between the Interex and Horus broke down there after their Kinebrach weapons museum was raided.",
   "books": []
  },
  "laeran": {
   "name": "Laeran",
   "type": "Ocean World",
   "desc": "An ocean world and homeworld of the xenos Laer. The Emperor's Children destroyed it, and at its temple Fulgrim took the daemon-touched Laer blade.",
   "books": []
  },
  "sarosh": {
   "name": "Sarosh",
   "type": "Imperial World",
   "desc": "A human world that the Dark Angels brought into compliance. A betrayal there deepened the rift between Lion El'Jonson and Luther.",
   "books": []
  },
  "nurth": {
   "name": "Nurth",
   "type": "Compliant World",
   "desc": "A backwater world where the 670th Expedition and the Alpha Legion fought a long compliance campaign, with ancient sorcerous powers at work.",
   "books": []
  },
  "aghoru": {
   "name": "Aghoru",
   "type": "Desert World",
   "desc": "An arid world where the Thousand Sons and Space Wolves fought alongside each other during the Great Crusade. Magnus explored its mysterious Mountain there.",
   "books": []
  },
  "dagonet": {
   "name": "Dagonet",
   "type": "Imperial World",
   "desc": "A world that the Officio Assassinorum's Execution Force chose as the place to ambush and kill Horus.",
   "books": []
  },
  "pythos": {
   "name": "Pythos",
   "type": "Death World",
   "desc": "A jungle-choked death world full of monstrous predators. Survivors of the Shattered Legions took refuge here after Isstvan V, and a warp anomaly at its heart drew daemonic forces to it.",
   "books": []
  },
  "traoris": {
   "name": "Traoris",
   "type": "Imperial World",
   "desc": "A ravaged world where loyalist Shattered Legion survivors and Word Bearers raced to excavate a mysterious artefact after the Dropsite Massacre.",
   "books": []
  },
  "planet_of_the_sorcerers": {
   "name": "Planet of the Sorcerers",
   "type": "Daemon World",
   "desc": "The daemon world inside the Eye of Terror where the Thousand Sons fled after the burning of Prospero. It became the Legion's home and Magnus the Red's domain.",
   "books": []
  },
  "thoas": {
   "name": "Thoas",
   "type": "Xenos World",
   "desc": "Heart of an ork empire spanning a dozen systems, destroyed by Roboute Guilliman and the Ultramarines during the Great Crusade.",
   "books": []
  },
  "dulan": {
   "name": "Dulan",
   "type": "Industrial World",
   "desc": "Red, hyper-industrial throneworld of the Faash, ringed by an iron defence halo. Conquered by the Space Wolves and Dark Angels in 870.M30.",
   "books": []
  },
  "morningstar": {
   "name": "Morningstar",
   "type": "Imperial World",
   "desc": "Human world wracked by magnetic storms; Magnus and Perturabo tried to evacuate it before destroying it to contain an ancient corruption.",
   "books": []
  },
  "byzas": {
   "name": "Byzas",
   "type": "Compliant World",
   "desc": "Aristocratic world ruled through byzantine politics; the first world brought to compliance by Fulgrim's 28th Expedition.",
   "books": []
  },
  "gardinaal_prime": {
   "name": "Gardinaal Prime",
   "type": "Civilised World",
   "desc": "Capital of the eleven-world Gardinaal empire in Astrid's Necklace, crushed by Ferrus Manus and the Iron Hands in 869.M30.",
   "books": []
  },
  "antaeum": {
   "name": "Antaeum",
   "type": "Death World",
   "desc": "Volcanic world in the Taras System where the XVIII Legion made its last stand against the orks until Vulkan arrived.",
   "books": []
  },
  "muspel": {
   "name": "Muspel",
   "type": "Imperial World",
   "desc": "Rebellious world on the Northern Fringe whose population fell under the psychic domination of the xenos Khrave; liberated by the Dark Angels in 997.M30.",
   "books": []
  },
  "galaspar": {
   "name": "Galaspar",
   "type": "Hive World",
   "desc": "Hive world and seat of the Order that ruled the Galaspar Cluster, brought to compliance by Mortarion's Death Guard.",
   "books": []
  },
  "one_five_four_four": {
   "name": "One-Five-Four Four",
   "type": "Feral World",
   "desc": "Jungle world held by the eldar, later called Caldera; conquered by the Iron Hands, Death Guard and Salamanders during the Great Crusade.",
   "books": []
  },
  "constanix_ii": {
   "name": "Constanix II",
   "type": "Forge World",
   "desc": "Minor, isolated forge world of acid seas and barge-cities; it sided with the Word Bearers until Corax's Raven Guard retook it.",
   "books": []
  },
  "carandiru": {
   "name": "Carandiru",
   "type": "Penal Colony",
   "desc": "Prison colony whose liberation by Corax's Raven Guard during the Horus Heresy is told in Ravenlord.",
   "books": []
  },
  "percepton_primus": {
   "name": "Percepton Primus",
   "type": "Imperial World",
   "desc": "Isolated world of Ultramar purged by the Word Bearers' 34th Company during the Shadow Crusade.",
   "books": []
  },
  "helwain": {
   "name": "Helwain",
   "type": "Dead World",
   "desc": "Desolate, ghost-haunted world where Zardu Layak seeks the Anakatis Blades.",
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
   "books": []
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
    "first_heretic"
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
   "books": []
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
   "books": []
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
    "mechanicum"
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
    "dropsite_massacre"
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
    "mark_of_calth",
    "battle_for_the_abyss"
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
    "betrayer"
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
   "books": []
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
    "vulkan_lives",
    "angels_of_caliban",
    "ruinstorm"
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
    "tallarn"
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
   "books": []
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
    "solar_war",
    "lost_and_damned",
    "first_wall",
    "saturnine",
    "mortis",
    "warhawk",
    "echoes_eternity",
    "end_and_death_volume_i",
    "end_and_death_volume_ii",
    "end_and_death_volume_iii",
    "sons_of_the_selenar"
   ]
  },
  {
   "id": "lions_gate",
   "name": "Battle for the Lion's Gate Spaceport",
   "date": "014.M31",
   "sort": 31014.2,
   "era": "Siege of Terra",
   "desc": "The traitors seize the Lion's Gate spaceport before the Palace; later Jaghatai Khan retakes it in a desperate assault.",
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
   "name": "Fall of Caliban",
   "date": "c. 014–015.M31",
   "sort": 31015,
   "era": "Horus Heresy",
   "desc": "On the Lion's return, Luther turns against him; Caliban shatters and the Fallen are scattered through the Warp.",
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
   "year": 2019,
   "number": 1,
   "format": "Novel",
   "synopsis": "Horus's armada reaches the Sol System, and Rogal Dorn's outer defences must stand against the full strength of the traitor fleet. Across the void and on the outer worlds, Sigismund, Ezekyle Abaddon and countless lesser warriors fight battles that decide whether Terra can be reached. The opening book of the Siege of Terra shows the scale of the final war.",
   "legions": [
    "Imperial Fists",
    "Sons of Horus",
    "Iron Warriors",
    "White Scars",
    "Death Guard"
   ],
   "characters": [
    "Rogal Dorn",
    "Sigismund",
    "Ezekyle Abaddon",
    "Horus Lupercal",
    "Mersadie Oliton"
   ],
   "setting": "014.M31",
   "sort": 31014,
   "planets": [
    "pluto",
    "terra"
   ]
  },
  "lost_and_damned": {
   "title": "The Lost and the Damned",
   "author": "Guy Haley",
   "series": "The Siege of Terra",
   "year": 2019,
   "number": 2,
   "format": "Novel",
   "synopsis": "With Terra's void defences broken, the traitor armies make landfall and Perturabo begins the methodical siege of the Imperial Palace. Soldiers, refugees and Legiones Astartes alike endure the bombardment and ground war outside the walls. The novel shows the human cost of the siege through both great commanders and ordinary defenders.",
   "legions": [
    "Iron Warriors",
    "Imperial Fists",
    "Blood Angels",
    "Death Guard",
    "Solar Auxilia"
   ],
   "characters": [
    "Perturabo",
    "Rogal Dorn",
    "Fafnir Rann",
    "Kyril Sindermann"
   ],
   "setting": "014.M31",
   "sort": 31014,
   "planets": [
    "terra"
   ]
  },
  "first_wall": {
   "title": "The First Wall",
   "author": "Gav Thorpe",
   "series": "The Siege of Terra",
   "year": 2020,
   "number": 3,
   "format": "Novel",
   "synopsis": "Horus's forces target the Lion's Gate spaceport, whose capture would let the traitors land an endless tide of reinforcements beside the Palace. As the Neverborn begin to walk on Terra, the defenders fight to hold the outer fortifications. The book marks the moment the siege turns from an ordinary war into something more otherworldly.",
   "legions": [
    "Imperial Fists",
    "Sons of Horus",
    "Iron Warriors",
    "Blood Angels",
    "White Scars"
   ],
   "characters": [
    "Rogal Dorn",
    "Sigismund",
    "Ezekyle Abaddon"
   ],
   "setting": "014.M31",
   "sort": 31014,
   "planets": [
    "terra"
   ]
  },
  "saturnine": {
   "title": "Saturnine",
   "author": "Dan Abnett",
   "series": "The Siege of Terra",
   "year": 2020,
   "number": 4,
   "format": "Novel",
   "synopsis": "Rogal Dorn springs a carefully hidden plan against a weakened section of the Palace wall where the traitors expect easy victory. The battle for the Saturnine defences becomes one of the most desperate gambits of the siege. Meanwhile, tensions build among the defenders as they weigh what they are willing to sacrifice.",
   "legions": [
    "Imperial Fists",
    "Sons of Horus",
    "Iron Warriors",
    "Blood Angels"
   ],
   "characters": [
    "Rogal Dorn",
    "Fafnir Rann"
   ],
   "setting": "014.M31",
   "sort": 31014,
   "planets": [
    "terra"
   ]
  },
  "mortis": {
   "title": "Mortis",
   "author": "John French",
   "series": "The Siege of Terra",
   "year": 2021,
   "number": 5,
   "format": "Novel",
   "synopsis": "Titans of the Legio Mortis lead the traitor assault on the Palace's defences while the war grows ever more nightmarish. As the walls fail and reinforcements dwindle, Rogal Dorn and his allies struggle to keep the defence from collapsing. The novel follows both god-engine and individual soldier as the siege enters its darkest phase.",
   "legions": [
    "Legio Mortis",
    "Imperial Fists",
    "Sons of Horus",
    "Iron Warriors"
   ],
   "characters": [
    "Rogal Dorn",
    "Vulkan",
    "Ezekyle Abaddon"
   ],
   "setting": "014.M31",
   "sort": 31014,
   "planets": [
    "terra"
   ]
  },
  "warhawk": {
   "title": "Warhawk",
   "author": "Chris Wraight",
   "series": "The Siege of Terra",
   "year": 2021,
   "number": 6,
   "format": "Novel",
   "synopsis": "Jaghatai Khan leads the White Scars in an audacious attempt to retake the Lion's Gate spaceport from the traitors. His campaign brings him face to face with Mortarion and the Death Guard. The novel is a portrait of the Khan as both commander and brother at the climax of the Heresy.",
   "legions": [
    "White Scars",
    "Death Guard",
    "Imperial Fists"
   ],
   "characters": [
    "Jaghatai Khan",
    "Shiban Khan",
    "Ilya Ravallion",
    "Mortarion"
   ],
   "setting": "014.M31",
   "sort": 31014,
   "planets": [
    "terra"
   ]
  },
  "echoes_eternity": {
   "title": "Echoes of Eternity",
   "author": "Aaron Dembski-Bowden",
   "series": "The Siege of Terra",
   "year": 2022,
   "number": 7,
   "format": "Novel",
   "synopsis": "With the outer defences collapsing, Angron leads the traitor host against the Sanctum Imperialis, the Palace's last stronghold. Sanguinius and the Blood Angels prepare a final defence in the ruins as daemons and World Eaters pour into the city. The novel turns on the two brothers' fates and the legacy each leaves behind.",
   "legions": [
    "Blood Angels",
    "World Eaters",
    "Daemons",
    "Legio Custodes"
   ],
   "characters": [
    "Sanguinius",
    "Angron",
    "Khârn",
    "Zephon",
    "Raldoron"
   ],
   "setting": "014.M31",
   "sort": 31014,
   "planets": [
    "terra"
   ]
  },
  "mechanicum": {
   "title": "Mechanicum",
   "author": "Graham McNeill",
   "series": "The Horus Heresy",
   "year": 2008,
   "number": 9,
   "format": "Novel",
   "synopsis": "As Horus's rebellion spreads, the forge world of Mars splits between those who stay loyal to the Emperor and those who follow Fabricator General Kelbor-Hal into heresy. A young adept, Dalia Cythera, holds knowledge the Emperor needs, while Titan Legions turn on one another in a civil war on the Red Planet.",
   "legions": [
    "Mechanicum",
    "Dark Mechanicum",
    "Legio Titanicus",
    "Imperial Knights",
    "Legio Custodes"
   ],
   "characters": [
    "Dalia Cythera",
    "Kelbor-Hal",
    "Koriel Zeth",
    "Regulus",
    "Rogal Dorn",
    "Ipluvien Maximal"
   ],
   "planets": [
    "mars",
    "terra"
   ],
   "setting": "005.M31",
   "sort": 31005
  },
  "galaxy_in_flames": {
   "title": "Galaxy in Flames",
   "author": "Ben Counter",
   "series": "The Horus Heresy",
   "year": 2006,
   "number": 3,
   "format": "Novel",
   "synopsis": "Recovered from his wounds, Horus moves openly against the Emperor and plans to purge the loyalist elements of four Legions on Isstvan III. Garviel Loken, Saul Tarvitz and Nathaniel Garro are among those who learn of the treachery, and the virus-bombing of the world marks the true beginning of the civil war.",
   "legions": [
    "Sons of Horus",
    "World Eaters",
    "Emperor's Children",
    "Death Guard"
   ],
   "characters": [
    "Horus",
    "Garviel Loken",
    "Saul Tarvitz",
    "Nathaniel Garro",
    "Angron",
    "Fulgrim",
    "Ezekyle Abaddon",
    "Euphrati Keeler"
   ],
   "planets": [
    "isstvan3"
   ],
   "setting": "005.M31",
   "sort": 31005
  },
  "flight_eisenstein": {
   "title": "The Flight of the Eisenstein",
   "author": "James Swallow",
   "series": "The Horus Heresy",
   "year": 2007,
   "number": 4,
   "format": "Novel",
   "synopsis": "Death Guard Battle-Captain Nathaniel Garro witnesses the corruption spreading through his Legion and seizes the frigate Eisenstein to escape the Isstvan system. After a perilous journey through the warp he must reach Terra to warn the Emperor that Horus has turned traitor.",
   "legions": [
    "Death Guard",
    "Sons of Horus",
    "Legio Custodes"
   ],
   "characters": [
    "Nathaniel Garro",
    "Mortarion",
    "Ignatius Grulgor",
    "Euphrati Keeler",
    "Kaleb Arin",
    "Rogal Dorn",
    "Malcador"
   ],
   "planets": [
    "isstvan3",
    "terra"
   ],
   "setting": "005.M31",
   "sort": 31005
  },
  "fulgrim": {
   "title": "Fulgrim",
   "author": "Graham McNeill",
   "series": "The Horus Heresy",
   "year": 2007,
   "number": 5,
   "format": "Novel",
   "synopsis": "Fulgrim's Emperor's Children pursue perfection in the war against the alien Laer, where a daemon-haunted blade and the excesses of the Legion begin to corrupt the Phoenician. The story follows the Legion's fall from grace through to its betrayal of Ferrus Manus and the Iron Hands at the Drop Site Massacre on Isstvan V.",
   "legions": [
    "Emperor's Children",
    "Iron Hands",
    "Sons of Horus",
    "Salamanders",
    "Raven Guard"
   ],
   "characters": [
    "Fulgrim",
    "Ferrus Manus",
    "Horus",
    "Saul Tarvitz",
    "Lucius",
    "Eidolon",
    "Ostian Delafour",
    "Serena d'Angelus"
   ],
   "planets": [
    "laeran",
    "isstvan5"
   ]
  },
  "false_gods": {
   "title": "False Gods",
   "author": "Graham McNeill",
   "series": "The Horus Heresy",
   "year": 2006,
   "number": 2,
   "format": "Novel",
   "synopsis": "Horus returns to the moon of Davin to put down a rebellion by a former Imperial commander, only to be struck down by a corrupted blade. As the Warmaster lies near death, Erebus and the Davinite lodges steer his salvation, and in dreams of the warp Horus is shown a future that turns him against the Emperor.",
   "legions": [
    "Luna Wolves",
    "Sons of Horus",
    "Word Bearers",
    "Imperial Army"
   ],
   "characters": [
    "Horus",
    "Erebus",
    "Garviel Loken",
    "Ezekyle Abaddon",
    "Euphrati Keeler",
    "Petronella Vivar",
    "Eugen Temba"
   ],
   "planets": [
    "davin"
   ],
   "setting": "004.M31",
   "sort": 31004
  },
  "know_no_fear": {
   "title": "Know No Fear",
   "author": "Dan Abnett",
   "series": "The Horus Heresy",
   "year": 2012,
   "number": 19,
   "format": "Novel",
   "synopsis": "Roboute Guilliman gathers the Ultramarines at Calth to muster for a campaign against Ork forces, unaware that Kor Phaeron and the Word Bearers have come not as allies but as betrayers. The surprise attack turns the system into a battlefield as Calth's sun is poisoned and the Ultramarines fight for survival.",
   "legions": [
    "Ultramarines",
    "Word Bearers",
    "Mechanicum",
    "Imperial Army",
    "Legio Titanicus"
   ],
   "characters": [
    "Roboute Guilliman",
    "Kor Phaeron",
    "Erebus",
    "Marius Gage",
    "Ventanus",
    "Oll Persson",
    "Aeonid Thiel"
   ],
   "planets": [
    "calth",
    "macragge"
   ],
   "setting": "007.M31",
   "sort": 31007
  },
  "thousand_sons": {
   "title": "A Thousand Sons",
   "author": "Graham McNeill",
   "series": "The Horus Heresy",
   "year": 2010,
   "number": 12,
   "format": "Novel",
   "synopsis": "Magnus the Red and his scholarly, psychically gifted Thousand Sons fight for the Great Crusade on Aghoru while the Council of Nikaea debates the use of sorcery. Convinced he alone can save his father from Horus, Magnus breaks the Emperor's edict with catastrophic consequences that bring ruin to Prospero.",
   "legions": [
    "Thousand Sons",
    "Space Wolves",
    "Legio Custodes",
    "Sisters of Silence"
   ],
   "characters": [
    "Magnus the Red",
    "Ahzek Ahriman",
    "Lemuel Gaumon",
    "Camille Shivani",
    "Kallista Eris",
    "Leman Russ",
    "Yasu Nagasena"
   ],
   "planets": [
    "aghoru",
    "nikaea",
    "prospero"
   ]
  },
  "prospero_burns": {
   "title": "Prospero Burns",
   "author": "Dan Abnett",
   "series": "The Horus Heresy",
   "year": 2010,
   "number": 15,
   "format": "Novel",
   "synopsis": "Remembrancer Kasper Hawser is taken in by the Space Wolves and lives among the warriors of Fenris, slowly learning their sagas and their purpose. Told from within the VI Legion, the novel shows the Wolves' attack on Prospero from their own perspective and how they became the Emperor's executioners.",
   "legions": [
    "Space Wolves",
    "Thousand Sons",
    "Legio Custodes",
    "Sisters of Silence"
   ],
   "characters": [
    "Kasper Hawser",
    "Leman Russ",
    "Bear",
    "Ogvai Ogvai Helmschrot",
    "Magnus the Red",
    "Ahzek Ahriman"
   ],
   "planets": [
    "fenris",
    "prospero",
    "terra"
   ],
   "setting": "004–005.M31",
   "sort": 31005
  },
  "descent_angels": {
   "title": "Descent of Angels",
   "author": "Mitchel Scanlon",
   "series": "The Horus Heresy",
   "year": 2007,
   "number": 6,
   "format": "Novel",
   "synopsis": "On the forested world of Caliban, young Zahariel rises through the knightly Order as Lion El'Jonson wages war on the planet's great beasts. When the Emperor arrives and the Order is absorbed into the Dark Angels Legion, Zahariel and his comrades join the Great Crusade, and the Sarosh campaign sows the first rifts between the Lion and Luther.",
   "legions": [
    "Dark Angels",
    "The Order"
   ],
   "characters": [
    "Zahariel",
    "Nemiel",
    "Lion El'Jonson",
    "Luther",
    "Lord Cypher"
   ],
   "planets": [
    "caliban",
    "sarosh"
   ]
  },
  "fallen_angels": {
   "title": "Fallen Angels",
   "author": "Mike Lee",
   "series": "The Horus Heresy",
   "year": 2009,
   "number": 11,
   "format": "Novel",
   "synopsis": "The Dark Angels are split between two fronts: the Lion leads the Legion against Horus's forces on the forge world of Diamat, while Luther, Zahariel and the exiled warriors on Caliban face a growing rebellion fuelled by forces in the warp. The novel follows the widening rift that will lead to the Fall of Caliban.",
   "legions": [
    "Dark Angels",
    "Sons of Horus",
    "Mechanicum",
    "Imperial Army"
   ],
   "characters": [
    "Lion El'Jonson",
    "Luther",
    "Zahariel",
    "Nemiel",
    "Astelan",
    "Lord Cypher"
   ],
   "planets": [
    "diamat",
    "caliban"
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
   "year": 2019,
   "number": 12,
   "format": "Novella",
   "synopsis": "On Tsagualsa, Konrad Curze spends what he knows are his final hours waiting for the assassin sent to kill him. His memories range from his brutal youth on Nostramo through the Great Crusade, the Night Lords' rule of terror and the destruction of his homeworld, painting a portrait of a primarch tormented by visions.",
   "legions": [
    "Night Lords"
   ],
   "characters": [
    "Konrad Curze",
    "Jago Sevatarion",
    "M'Shen"
   ],
   "planets": [
    "tsagualsa",
    "nostramo"
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
   "year": 2006,
   "number": 1,
   "format": "Novel",
   "synopsis": "Newly named Warmaster after the triumph at Ullanor, Horus leads the 63rd Expedition onward while his Luna Wolves fight to bring a deceptive human empire and the alien-haunted world of Murder into compliance. Through the eyes of Captain Garviel Loken, the novel shows the Great Crusade at its height and plants the first doubts and secret lodges that will grow into rebellion.",
   "legions": [
    "Luna Wolves",
    "Imperial Army",
    "Emperor's Children"
   ],
   "characters": [
    "Horus",
    "Garviel Loken",
    "Ezekyle Abaddon",
    "Horus Aximand",
    "Tarik Torgaddon",
    "Kyril Sindermann",
    "Mersadie Oliton",
    "Saul Tarvitz"
   ],
   "planets": [
    "sixty_three_nineteen",
    "murder",
    "xenobia"
   ],
   "setting": "000–001.M31",
   "sort": 31001
  },
  "battle_for_the_abyss": {
   "title": "Battle for the Abyss",
   "author": "Ben Counter",
   "series": "The Horus Heresy",
   "year": 2008,
   "number": 8,
   "format": "Novel",
   "synopsis": "The Word Bearers' new warship, the Furious Abyss, sets out from the Jovian shipyards to strike at Ultramar. A small band of loyalist Astartes from several Legions, led by Ultramarine Cestus, races to stop it before it can cripple the Ultramarines.",
   "legions": [
    "Word Bearers",
    "Ultramarines",
    "Space Wolves",
    "World Eaters",
    "Thousand Sons"
   ],
   "characters": [
    "Cestus",
    "Zadkiel",
    "Brynngar",
    "Skraal",
    "Mhotep",
    "Antiges"
   ],
   "planets": [],
   "setting": "007.M31",
   "sort": 31007
  },
  "first_heretic": {
   "title": "The First Heretic",
   "author": "Aaron Dembski-Bowden",
   "series": "The Horus Heresy",
   "year": 2010,
   "number": 14,
   "format": "Novel",
   "synopsis": "Rebuked by the Emperor for worshipping him as a god, Lorgar and his Word Bearers are humiliated on the ashes of Monarchia. Searching for a new truth, the primarch is drawn towards the powers of the warp, and the story follows the Legion's journey into heresy all the way to the Drop Site Massacre on Isstvan V.",
   "legions": [
    "Word Bearers",
    "Legio Custodes",
    "Sisters of Silence",
    "Raven Guard",
    "Salamanders",
    "Iron Hands"
   ],
   "characters": [
    "Lorgar",
    "Argel Tal",
    "Kor Phaeron",
    "Erebus",
    "Cyrene Valantion",
    "Xaphen",
    "Aquillon"
   ],
   "planets": [
    "khur",
    "cadia",
    "isstvan5"
   ]
  },
  "outcast_dead": {
   "title": "The Outcast Dead",
   "author": "Graham McNeill",
   "series": "The Horus Heresy",
   "year": 2011,
   "number": 17,
   "format": "Novel",
   "synopsis": "On Terra, the astropath Kai Zulane receives a vision so dangerous that he becomes the most hunted man in the Imperial Palace. He escapes with a band of renegade Astartes imprisoned after Isstvan, and the Legio Custodes and Sisters of Silence pursue them through the underbelly of the Throneworld.",
   "legions": [
    "Legio Custodes",
    "Sisters of Silence",
    "Thousand Sons",
    "World Eaters",
    "Death Guard",
    "Space Wolves",
    "Sons of Horus"
   ],
   "characters": [
    "Kai Zulane",
    "Atharva",
    "Subha",
    "Severian",
    "Kiron",
    "Tagore",
    "Malcador"
   ],
   "planets": [
    "terra"
   ]
  },
  "deliverance_lost": {
   "title": "Deliverance Lost",
   "author": "Gav Thorpe",
   "series": "The Horus Heresy",
   "year": 2012,
   "number": 18,
   "format": "Novel",
   "synopsis": "Corvus Corax escapes the Drop Site Massacre with only a remnant of his Raven Guard and returns to Terra and Deliverance to rebuild his Legion. Secretly gaining access to the Emperor's gene-science, he seeks to restore his strength, unaware that the Alpha Legion have already infiltrated his ranks.",
   "legions": [
    "Raven Guard",
    "Alpha Legion",
    "Legio Custodes"
   ],
   "characters": [
    "Corvus Corax",
    "Alpharius",
    "Branne",
    "Agapito",
    "Alvarex Maun",
    "Malcador",
    "The Emperor"
   ],
   "planets": [
    "isstvan5",
    "terra",
    "deliverance"
   ]
  },
  "fear_to_tread": {
   "title": "Fear to Tread",
   "author": "James Swallow",
   "series": "The Horus Heresy",
   "year": 2012,
   "number": 21,
   "format": "Novel",
   "synopsis": "Horus sends Sanguinius and the Blood Angels to the Signus Cluster, supposedly to purge a xenos threat. The world they find is a trap engineered by the Word Bearers, who mean to break the IX Legion by unleashing the curse hidden in its gene-seed. Against a daemon host, Sanguinius must hold his sons back from the Red Thirst and from damnation.",
   "legions": [
    "Blood Angels",
    "Word Bearers"
   ],
   "characters": [
    "Sanguinius",
    "Raldoron",
    "Azkaellon",
    "Meros",
    "Nassir Amit",
    "Ka'Bandha"
   ],
   "setting": "005–006.M31",
   "sort": 31006,
   "planets": [
    "signus_prime"
   ]
  },
  "shadows_of_treachery": {
   "title": "Shadows of Treachery",
   "author": "Various",
   "series": "The Horus Heresy",
   "year": 2012,
   "number": 22,
   "format": "Anthology",
   "synopsis": "This anthology gathers earlier stories and two new novellas. Most deal with the Imperial Fists and Night Lords in the first months of the Heresy. Highlights include the Imperial Fists' fateful clash with the Iron Warriors at Phall, Rogal Dorn's doubts as Terra is fortified, the Raven Guard's escape from Isstvan V, and Sevatar's bid to hold the fracturing VIII Legion together.",
   "legions": [
    "Imperial Fists",
    "Night Lords",
    "Iron Warriors",
    "Raven Guard",
    "Dark Angels"
   ],
   "characters": [
    "Rogal Dorn",
    "Konrad Curze",
    "Alexis Polux",
    "Sevatar",
    "Corax",
    "Perturabo"
   ],
   "planets": [
    "phall",
    "terra",
    "isstvan5"
   ]
  },
  "angel_exterminatus": {
   "title": "Angel Exterminatus",
   "author": "Graham McNeill",
   "series": "The Horus Heresy",
   "year": 2012,
   "number": 23,
   "format": "Novel",
   "synopsis": "Fulgrim tempts Perturabo into a joint expedition into the Eye of Terror to claim an ancient Eldar weapon. Meanwhile a vengeful band of Iron Hands, survivors of Isstvan V, hunts the Emperor's Children. The trail ends on the crone world of Iydris, where the alliance of the two Traitor Primarchs is put to the test.",
   "legions": [
    "Iron Warriors",
    "Emperor's Children",
    "Iron Hands",
    "Raven Guard",
    "Salamanders",
    "Aeldari"
   ],
   "characters": [
    "Perturabo",
    "Fulgrim",
    "Lucius",
    "Forrix",
    "Kroeger",
    "Sharrowkyn"
   ],
   "setting": "007.M31",
   "sort": 31007,
   "planets": [
    "iydris"
   ]
  },
  "betrayer": {
   "title": "Betrayer",
   "author": "Aaron Dembski-Bowden",
   "series": "The Horus Heresy",
   "year": 2012,
   "number": 24,
   "format": "Novel",
   "synopsis": "During the Shadow Crusade, the World Eaters and Word Bearers ravage Ultramar side by side, but Angron's Butcher's Nails are slowly killing him. Lorgar works on a plan to save his brother in his own way. The campaign builds to a confrontation with Roboute Guilliman on Armatura and to the World Eaters' fateful return to Nuceria.",
   "legions": [
    "World Eaters",
    "Word Bearers",
    "Ultramarines"
   ],
   "characters": [
    "Angron",
    "Lorgar",
    "Khârn",
    "Argel Tal",
    "Lotara Sarrin",
    "Roboute Guilliman"
   ],
   "setting": "008.M31",
   "sort": 31008,
   "planets": [
    "armatura",
    "nuceria"
   ]
  },
  "mark_of_calth": {
   "title": "Mark of Calth",
   "author": "Various",
   "series": "The Horus Heresy",
   "year": 2013,
   "number": 25,
   "format": "Anthology",
   "synopsis": "An anthology set during and after the Word Bearers' betrayal at Calth. Its stories follow the war beneath the irradiated surface, where Ultramarines and survivors keep fighting in the arcologies. Others show the Word Bearers' sorcerous schemes and the aftermath of the Battle of Calth from both sides.",
   "legions": [
    "Ultramarines",
    "Word Bearers",
    "Imperial Army"
   ],
   "characters": [
    "Erebus",
    "Kor Phaeron",
    "Remus Ventanus",
    "Oll Persson",
    "Roboute Guilliman"
   ],
   "setting": "007.M31",
   "sort": 31007,
   "planets": [
    "calth"
   ]
  },
  "vulkan_lives": {
   "title": "Vulkan Lives",
   "author": "Nick Kyme",
   "series": "The Horus Heresy",
   "year": 2013,
   "number": 26,
   "format": "Novel",
   "synopsis": "After the Dropsite Massacre, Vulkan is taken prisoner by Konrad Curze, who tortures and kills him again and again, only to find that his brother keeps coming back to life. Elsewhere, Artellus Numeon leads a group of Shattered Legion survivors. On the ravaged world of Traoris, loyalists and Word Bearers race to claim a mysterious artefact.",
   "legions": [
    "Salamanders",
    "Night Lords",
    "Word Bearers",
    "Iron Hands",
    "Raven Guard"
   ],
   "characters": [
    "Vulkan",
    "Konrad Curze",
    "Artellus Numeon",
    "Narek"
   ],
   "planets": [
    "traoris"
   ]
  },
  "unremembered_empire": {
   "title": "The Unremembered Empire",
   "author": "Dan Abnett",
   "series": "The Horus Heresy",
   "year": 2013,
   "number": 27,
   "format": "Novel",
   "synopsis": "Cut off from Terra by the Ruinstorm, Ultramar is lit by the beacon of the Pharos. Roboute Guilliman proclaims Imperium Secundus on Macragge and gathers the Primarchs who are able to answer. Sanguinius, Lion El'Jonson and Vulkan come together while a hidden assassin stalks Macragge's streets and old rivalries and mistrust threaten the new empire from within.",
   "legions": [
    "Ultramarines",
    "Blood Angels",
    "Dark Angels",
    "Salamanders",
    "Night Lords",
    "Word Bearers"
   ],
   "characters": [
    "Roboute Guilliman",
    "Lion El'Jonson",
    "Sanguinius",
    "Vulkan",
    "Konrad Curze",
    "John Grammaticus",
    "Narek"
   ],
   "planets": [
    "macragge"
   ]
  },
  "scars": {
   "title": "Scars",
   "author": "Chris Wraight",
   "series": "The Horus Heresy",
   "year": 2014,
   "number": 28,
   "format": "Novel",
   "synopsis": "Isolated by warp storms at the end of the Chondax campaign, the White Scars hear conflicting reports of Horus's rebellion. Jaghatai Khan must choose between the Warmaster and the Emperor, while secret warrior lodges work to tip the Legion towards treachery. Bad blood with the Space Wolves over Prospero brings the V and VI Legions to the edge of war.",
   "legions": [
    "White Scars",
    "Space Wolves",
    "Alpha Legion"
   ],
   "characters": [
    "Jaghatai Khan",
    "Shiban",
    "Targutai Yesugei",
    "Torghun",
    "Ilya Ravallion",
    "Leman Russ",
    "Malcador the Sigillite"
   ],
   "setting": "c. 006.M31",
   "sort": 31006,
   "planets": [
    "chondax",
    "terra"
   ]
  },
  "vengeful_spirit": {
   "title": "Vengeful Spirit",
   "author": "Graham McNeill",
   "series": "The Horus Heresy",
   "year": 2014,
   "number": 29,
   "format": "Novel",
   "synopsis": "Horus invades the fortified world of Molech, which guards a secret from the Emperor's past and a path to power in the Warp. Garviel Loken and a cell of Malcador's Knights Errant infiltrate the Warmaster's fleet while Imperial Knights and Titan Legions defend the planet. The campaign marks a turning point in Horus's ascendancy.",
   "legions": [
    "Sons of Horus",
    "Knights Errant",
    "Imperial Army",
    "Imperial Knights",
    "Legio Titanicus"
   ],
   "characters": [
    "Horus",
    "Ezekyle Abaddon",
    "Garviel Loken",
    "Tylos Rubio",
    "Severian",
    "Raeven"
   ],
   "setting": "009.M31",
   "sort": 31009,
   "planets": [
    "molech"
   ]
  },
  "deathfire": {
   "title": "Deathfire",
   "author": "Nick Kyme",
   "series": "The Horus Heresy",
   "year": 2015,
   "number": 32,
   "format": "Novel",
   "synopsis": "Artellus Numeon believes that Vulkan's lifeless body can be restored on the Primarch's home world. He leads the Salamanders out of Ultramar and through the Ruinstorm towards Nocturne. Word Bearers and Death Guard hunt them all the way, and the journey tests the faith of the XVIII Legion's last loyal sons.",
   "legions": [
    "Salamanders",
    "Ultramarines",
    "Death Guard",
    "Word Bearers"
   ],
   "characters": [
    "Artellus Numeon",
    "Vulkan",
    "Barek Zytos",
    "Xathen",
    "Thiel",
    "Prayto"
   ],
   "planets": [
    "macragge",
    "nocturne"
   ]
  },
  "pharos": {
   "title": "Pharos",
   "author": "Guy Haley",
   "series": "The Horus Heresy",
   "year": 2015,
   "number": 34,
   "format": "Novel",
   "synopsis": "On Sotha, the xenos beacon inside Mount Pharos keeps Imperium Secundus connected through the Ruinstorm. That makes it a prime target for the Night Lords. As Konrad Curze's Legion falls on the world, Ultramarines defenders and Sanguinius must hold the Pharos, while the device itself proves far stranger than anyone suspected.",
   "legions": [
    "Ultramarines",
    "Night Lords",
    "Blood Angels",
    "Imperial Army"
   ],
   "characters": [
    "Sanguinius",
    "Konrad Curze",
    "Krieg Acerbus"
   ],
   "setting": "c. 009.M31",
   "sort": 31009,
   "planets": [
    "sotha"
   ]
  },
  "angels_of_caliban": {
   "title": "Angels of Caliban",
   "author": "Gav Thorpe",
   "series": "The Horus Heresy",
   "year": 2016,
   "number": 38,
   "format": "Novel",
   "synopsis": "As Lord Protector of Imperium Secundus, Lion El'Jonson hunts Konrad Curze across the worlds of Ultramar. Far away on Caliban, Luther and the exiled Dark Angels drift further from their Primarch, and the decisions they make will tear the First Legion apart.",
   "legions": [
    "Dark Angels",
    "Night Lords",
    "Ultramarines"
   ],
   "characters": [
    "Lion El'Jonson",
    "Luther",
    "Konrad Curze",
    "Zahariel",
    "Holguin"
   ],
   "planets": [
    "macragge",
    "caliban"
   ]
  },
  "praetorian_of_dorn": {
   "title": "Praetorian of Dorn",
   "author": "John French",
   "series": "The Horus Heresy",
   "year": 2016,
   "number": 39,
   "format": "Novel",
   "synopsis": "The Alpha Legion launches its first strike on the Sol System, exposing weaknesses in the defences Rogal Dorn has built around Terra. The Praetorian and his huscarl Archamus have to hunt an enemy that hides in plain sight. The war against the XX Legion stretches from Pluto to the heart of the Imperial Palace.",
   "legions": [
    "Imperial Fists",
    "Alpha Legion",
    "Legio Custodes",
    "Imperial Army"
   ],
   "characters": [
    "Rogal Dorn",
    "Archamus",
    "Alpharius",
    "Sigismund"
   ],
   "setting": "010.M31",
   "sort": 31010,
   "planets": [
    "terra",
    "pluto"
   ]
  },
  "corax": {
   "title": "Corax",
   "author": "Gav Thorpe",
   "series": "The Horus Heresy",
   "year": 2016,
   "number": 40,
   "format": "Anthology",
   "synopsis": "This single-author collection follows Corax after Isstvan V and the Battle of Ravendelve. It gathers the novellas Soulforge and Ravenlord, several short stories, and the new novella Weregeld. Corax wages a guerrilla war against the Traitors and struggles to keep his shattered Legion together, while his gene-altered Raptors face a grim fate.",
   "legions": [
    "Raven Guard",
    "Alpha Legion",
    "Night Lords",
    "Mechanicum"
   ],
   "characters": [
    "Corax",
    "Branne",
    "Agapito",
    "Alvarex Solaro"
   ],
   "planets": [
    "deliverance"
   ]
  },
  "master_of_mankind": {
   "title": "The Master of Mankind",
   "author": "Aaron Dembski-Bowden",
   "series": "The Horus Heresy",
   "year": 2016,
   "number": 41,
   "format": "Novel",
   "synopsis": "Beneath the Imperial Palace, the Emperor's unfinished Webway project has been breached by daemonic hosts after Magnus the Red's reckless warning. The Legio Custodes, the Sisters of Silence and the Mechanicum forces of Fabricator-General Kane wage a hopeless war in the labyrinth dimension to hold the gateways to Terra. At its heart, the novel shows the Emperor Himself, enthroned and at war, and asks what His ambitions really cost.",
   "legions": [
    "Legio Custodes",
    "Sisters of Silence",
    "Mechanicum",
    "Daemons"
   ],
   "characters": [
    "The Emperor",
    "Constantin Valdor",
    "Ra Endymion",
    "Diocletian Coros",
    "Arkhan Land",
    "Zagreus Kane"
   ],
   "setting": "004-014.M31",
   "sort": 31004,
   "planets": [
    "terra"
   ]
  },
  "garro": {
   "title": "Garro",
   "author": "James Swallow",
   "series": "The Horus Heresy",
   "year": 2017,
   "number": 42,
   "format": "Novel",
   "synopsis": "Nathaniel Garro, the Death Guard captain who brought warning of Horus's treachery to Terra, now serves Malcador the Sigillite as his Agentia Primus. Sent across a galaxy in flames, he gathers warriors from broken and traitor Legions to form the first Knights-Errant. Along the way he must reckon with the rising faith of the Lectitio Divinitatus and his own doubts about the Regent's purposes.",
   "legions": [
    "Knights Errant",
    "Death Guard",
    "Ultramarines",
    "World Eaters"
   ],
   "characters": [
    "Nathaniel Garro",
    "Malcador the Sigillite",
    "Tylos Rubio",
    "Varren",
    "Euphrati Keeler"
   ],
   "planets": [
    "terra"
   ]
  },
  "crimson_king": {
   "title": "The Crimson King",
   "author": "Graham McNeill",
   "series": "The Horus Heresy",
   "year": 2017,
   "number": 44,
   "format": "Novel",
   "synopsis": "After the burning of Prospero, the Thousand Sons have retreated to the Planet of the Sorcerers in the Eye of Terror, but their primarch is a shattered, fading shadow of himself. Ahzek Ahriman and his brothers search the warp for the scattered fragments of Magnus's soul, hoping to restore him before his Legion falls apart. Their quest pulls them into the schemes of other powers and toward a choice about what the Thousand Sons will become.",
   "legions": [
    "Thousand Sons"
   ],
   "characters": [
    "Magnus the Red",
    "Ahzek Ahriman",
    "Amon",
    "Lemuel Gaumon",
    "Kallista Eris"
   ],
   "planets": [
    "planet_of_the_sorcerers"
   ]
  },
  "tallarn": {
   "title": "Tallarn",
   "author": "John French",
   "series": "The Horus Heresy",
   "year": 2017,
   "number": 45,
   "format": "Novel",
   "synopsis": "Perturabo's Iron Warriors arrive at Tallarn and poison the world with a virus bombardment, leaving its survivors sheltering in underground bunkers. What follows is the largest armoured war of the Heresy, fought by tank crews in sealed vehicles across a dead surface. The book combines the novella Executioner, the novel Ironclad and two short stories, and hints that the Iron Warriors came looking for something more than slaughter.",
   "legions": [
    "Iron Warriors",
    "Imperial Army",
    "Alpha Legion",
    "Mechanicum"
   ],
   "characters": [
    "Perturabo",
    "Akil Sulan",
    "Susada Syn",
    "Argonis",
    "Iaeo"
   ],
   "setting": "010-012.M31",
   "sort": 31010,
   "planets": [
    "tallarn"
   ]
  },
  "ruinstorm": {
   "title": "Ruinstorm",
   "author": "David Annandale",
   "series": "The Horus Heresy",
   "year": 2017,
   "number": 46,
   "format": "Novel",
   "synopsis": "With Imperium Secundus dissolved, Roboute Guilliman, Sanguinius and Lion El'Jonson lead the fleets of three Legions out from Macragge into the daemon-haunted Ruinstorm. Seeking the source of the warp storm that has cut the galaxy in two, they fight toward Davin while Sanguinius is tormented by the temptations of a daemon. Their success would finally open the way back toward Terra.",
   "legions": [
    "Ultramarines",
    "Blood Angels",
    "Dark Angels",
    "Word Bearers",
    "Daemons"
   ],
   "characters": [
    "Roboute Guilliman",
    "Sanguinius",
    "Lion El'Jonson",
    "Madail"
   ],
   "setting": "011.M31",
   "sort": 31011,
   "planets": [
    "macragge",
    "davin"
   ]
  },
  "old_earth": {
   "title": "Old Earth",
   "author": "Nick Kyme",
   "series": "The Horus Heresy",
   "year": 2017,
   "number": 47,
   "format": "Novel",
   "synopsis": "The reborn Vulkan gathers his most loyal Salamanders for the last leg of a journey toward Terra, a road that leads through the hidden paths of the webway. Meanwhile Shadrak Meduson's Shattered Legions wage an increasingly desperate war against the traitors, and their alliance begins to fracture. The novel closes the Salamanders arc begun in Vulkan Lives and Deathfire.",
   "legions": [
    "Salamanders",
    "Iron Hands",
    "Raven Guard",
    "Word Bearers",
    "Aeldari"
   ],
   "characters": [
    "Vulkan",
    "Shadrak Meduson",
    "Barthusa Narek",
    "Eldrad Ulthran"
   ],
   "planets": [
    "nocturne",
    "terra"
   ]
  },
  "wolfsbane": {
   "title": "Wolfsbane",
   "author": "Guy Haley",
   "series": "The Horus Heresy",
   "year": 2018,
   "number": 49,
   "format": "Novel",
   "synopsis": "Leman Russ resolves to stop Horus before the Warmaster can reach the Sol System, even if it costs him his Legion. Leading the Space Wolves in a desperate strike against the Vengeful Spirit at Trisolian, the Wolf King confronts his brother in person. Interwoven memories of Russ's youth on Fenris explain why he believes this hunt is his alone.",
   "legions": [
    "Space Wolves",
    "Sons of Horus"
   ],
   "characters": [
    "Leman Russ",
    "Horus Lupercal",
    "Bjorn",
    "Belisarius Cawl"
   ],
   "setting": "012.M31",
   "sort": 31012,
   "planets": [
    "trisolian",
    "fenris"
   ]
  },
  "slaves_to_darkness": {
   "title": "Slaves to Darkness",
   "author": "John French",
   "series": "The Horus Heresy",
   "year": 2018,
   "number": 51,
   "format": "Novel",
   "synopsis": "After the victory at Beta-Garmon the traitor host assembles at Ullanor for the final push on Terra, but Horus is weakened by a wound that will not heal. As the Warmaster's Legions jostle for power and the Ruinous Powers tighten their hold, the defenders of Terra make their last preparations. The novel sets the stage for the Siege of Terra.",
   "legions": [
    "Sons of Horus",
    "Word Bearers",
    "Imperial Fists",
    "Death Guard",
    "World Eaters"
   ],
   "characters": [
    "Horus Lupercal",
    "Ezekyle Abaddon",
    "Lorgar Aurelian",
    "Erebus",
    "Rogal Dorn",
    "Malcador the Sigillite"
   ],
   "planets": [
    "ullanor",
    "terra"
   ]
  },
  "titandeath": {
   "title": "Titandeath",
   "author": "Guy Haley",
   "series": "The Horus Heresy",
   "year": 2018,
   "number": 53,
   "format": "Novel",
   "synopsis": "In the Beta-Garmon Cluster, loyalist and traitor Titan Legions meet in the largest god-engine battle in history on the irradiated fields of Beta-Garmon II. Princeps Esha Ani Mohana of the Legio Solaria fights for survival while her rivalry with Legio Vulpa becomes deeply personal. Over the course of the battle, the gathering corruption of the traitor Legios becomes impossible to ignore.",
   "legions": [
    "Legio Solaria",
    "Legio Vulpa",
    "Legio Mortis",
    "Sons of Horus",
    "Blood Angels"
   ],
   "characters": [
    "Esha Ani Mohana",
    "Mohana Mankata VI",
    "Terent Harrtek"
   ],
   "setting": "013.M31",
   "sort": 31013,
   "planets": [
    "beta_garmon2"
   ]
  },
  "buried_dagger": {
   "title": "The Buried Dagger",
   "author": "James Swallow",
   "series": "The Horus Heresy",
   "year": 2019,
   "number": 54,
   "format": "Novel",
   "synopsis": "On their way to Terra, Mortarion and the Death Guard are trapped in the warp, and a terrible plague turns the Legion into Nurgle's servants. On Titan, Nathaniel Garro and Malcador's Knights-Errant prepare for the founding of a secret order that will outlast the Heresy. The two storylines show the fall of a Legion and the birth of the Grey Knights.",
   "legions": [
    "Death Guard",
    "Knights Errant",
    "Grey Knights"
   ],
   "characters": [
    "Mortarion",
    "Calas Typhon",
    "Nathaniel Garro",
    "Malcador the Sigillite",
    "Tylos Rubio"
   ],
   "planets": [
    "titan",
    "terra"
   ]
  },
  "dropsite_massacre": {
   "title": "Dropsite Massacre",
   "author": "John French",
   "series": "The Horus Heresy",
   "year": 2025,
   "format": "Novel",
   "synopsis": "Rogal Dorn and Malcador send the largest loyalist force ever assembled to Isstvan V to punish Horus' rebellion, unaware of how deep the betrayal runs. The slaughter that follows is told through the eyes of both traitors and loyalists, from Sons of Horus and World Eaters to the shattered Iron Hands and Raven Guard.",
   "legions": [
    "Sons of Horus",
    "World Eaters",
    "Iron Hands",
    "Raven Guard",
    "Salamanders",
    "Night Lords",
    "Iron Warriors",
    "Alpha Legion",
    "Word Bearers"
   ],
   "characters": [
    "Maloghurst",
    "Khârn",
    "Castrmen Orth",
    "Kaedes Nex",
    "Horus",
    "Ferrus Manus"
   ],
   "setting": "006.M31",
   "sort": 31006,
   "planets": [
    "isstvan5"
   ]
  },
  "sons_of_the_selenar": {
   "title": "Sons of the Selenar",
   "author": "Graham McNeill",
   "series": "The Siege of Terra",
   "year": 2020,
   "format": "Novella",
   "synopsis": "As the siege begins, a crew of Shattered Legions warriors aboard the Sisypheum returns to the Sol System and is drawn to embattled Luna by a garbled distress call. Deep beneath the lunar surface, traitor forces hunt for a secret of the Selenar gene-cults that could give Horus power over the Astartes. The novella reveals hidden truths about the Emperor's genesmiths.",
   "legions": [
    "Iron Hands",
    "Raven Guard",
    "Salamanders",
    "Selenar gene-cults"
   ],
   "characters": [
    "Nykona Sharrowkyn",
    "Ulrach Branthan",
    "Wayland"
   ],
   "setting": "014.M31",
   "sort": 31014,
   "planets": [
    "luna"
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
   "year": 2016,
   "number": 1,
   "format": "Novella",
   "synopsis": "During the Great Crusade, Guilliman leads the Ultramarines against an ork empire whose heart lies on the world of Thoas. The campaign tests how far the Lord of Ultramar is willing to go to win, and how he weighs the cost of total victory against the kind of Imperium he wants to build. Interludes reveal the statesman behind the general.",
   "legions": [
    "Ultramarines"
   ],
   "characters": [
    "Roboute Guilliman",
    "Marius Gage",
    "Ork Emperor of Thoas"
   ],
   "setting": "after 903.M30",
   "sort": 30903,
   "planets": [
    "thoas"
   ]
  },
  "great_wolf": {
   "title": "Leman Russ: The Great Wolf",
   "author": "Chris Wraight",
   "series": "The Horus Heresy: Primarchs",
   "year": 2016,
   "number": 2,
   "format": "Novella",
   "synopsis": "The Space Wolves are sent to break the Faash and their Tyrant on the hyper-industrial throneworld of Dulan. Fighting alongside the Dark Angels, Russ and his Wolf Lords grow ever more at odds with Lion El'Jonson. The campaign's end sparks the infamous clash between the two primarchs.",
   "legions": [
    "Space Wolves",
    "Dark Angels"
   ],
   "characters": [
    "Leman Russ",
    "Lion El'Jonson",
    "Durath",
    "Kloja"
   ],
   "setting": "870.M30",
   "sort": 30870,
   "planets": [
    "dulan"
   ]
  },
  "master_of_prospero": {
   "title": "Magnus the Red: Master of Prospero",
   "author": "Graham McNeill",
   "series": "The Horus Heresy: Primarchs",
   "year": 2017,
   "number": 3,
   "format": "Novella",
   "synopsis": "Magnus and Perturabo join forces to evacuate the colony world of Morningstar, which is being torn apart by magnetic storms. A doomsday cult called the Sons of Shaitan resists the rescue, and something ancient stirs beneath the planet. The two primarchs and their Legions must decide what price is acceptable to stop its corruption from spreading.",
   "legions": [
    "Thousand Sons",
    "Iron Warriors"
   ],
   "characters": [
    "Magnus the Red",
    "Perturabo",
    "Ahzek Ahriman",
    "Forrix",
    "Atharva",
    "Konrad Vargha"
   ],
   "planets": [
    "morningstar"
   ]
  },
  "hammer_of_olympia": {
   "title": "Perturabo: The Hammer of Olympia",
   "author": "Guy Haley",
   "series": "The Horus Heresy: Primarchs",
   "year": 2017,
   "number": 4,
   "format": "Novella",
   "synopsis": "Two timelines frame the lord of the Iron Warriors: his precocious youth among the city-states of Olympia, and a bitter Great Crusade war against the time-bending hrud. When news of a revolt on his adopted homeworld arrives, Perturabo abandons the campaign and turns his Legion's full weight on Olympia.",
   "legions": [
    "Iron Warriors"
   ],
   "characters": [
    "Perturabo",
    "Dammekos",
    "Calliphone"
   ],
   "planets": [
    "olympia"
   ]
  },
  "bearer_of_the_word": {
   "title": "Lorgar: Bearer of the Word",
   "author": "Gav Thorpe",
   "series": "The Horus Heresy: Primarchs",
   "year": 2017,
   "number": 5,
   "format": "Novella",
   "synopsis": "On the desert world of Colchis, the disgraced preacher Kor Phaeron discovers a golden child among nomad outcasts and resolves to use him. The novel follows the young Lorgar's rise from prophet to master of the Covenant, largely through Kor Phaeron's scheming eyes, and the faith that will shape the Word Bearers.",
   "legions": [
    "Word Bearers"
   ],
   "characters": [
    "Lorgar",
    "Kor Phaeron"
   ],
   "planets": [
    "colchis"
   ]
  },
  "palatine_phoenix": {
   "title": "Fulgrim: The Palatine Phoenix",
   "author": "Josh Reynolds",
   "series": "The Horus Heresy: Primarchs",
   "year": 2017,
   "number": 6,
   "format": "Novella",
   "synopsis": "At the start of the 28th Expedition, Fulgrim sets out to bring the world of Byzas into compliance with only a handful of his Emperor's Children. Byzas is a maze of aristocratic intrigue, and the Phoenician must win with diplomacy and the blade rather than sheer numbers, proving to himself that perfection needs no help.",
   "legions": [
    "Emperor's Children"
   ],
   "characters": [
    "Fulgrim",
    "Fabius",
    "Golconda Pyke",
    "Narvo Quin",
    "Grythan Thorn",
    "Kasperos Telmar",
    "Cyrius"
   ],
   "planets": [
    "byzas"
   ]
  },
  "gorgon_of_medusa": {
   "title": "Ferrus Manus: The Gorgon of Medusa",
   "author": "David Guymer",
   "series": "The Horus Heresy: Primarchs",
   "year": 2018,
   "number": 7,
   "format": "Novella",
   "synopsis": "The 413th Expedition is stalled against the stubbornly non-compliant human empire of Gardinaal. Commanding a mixed host that includes leaderless contingents of Ultramarines, Thousand Sons and Emperor's Children, Ferrus Manus decides to crush Gardinaal himself and send a message to his brothers and his father.",
   "legions": [
    "Iron Hands",
    "Ultramarines",
    "Thousand Sons",
    "Emperor's Children"
   ],
   "characters": [
    "Ferrus Manus",
    "Gabriel Santar"
   ],
   "setting": "869.M30",
   "sort": 30869,
   "planets": [
    "gardinaal_prime"
   ]
  },
  "warhawk_of_chogoris": {
   "title": "Jaghatai Khan: Warhawk of Chogoris",
   "author": "Chris Wraight",
   "series": "The Horus Heresy: Primarchs",
   "year": 2018,
   "number": 8,
   "format": "Novella",
   "synopsis": "Years after Chogoris was brought into the Imperium, the White Scars' warrior mysticism sits uneasily with the Imperial Truth. As the Librarius project takes shape, the Khan must weigh loyalty to the Emperor's vision against the heritage of his homeworld, while recollections reveal his rise to power on the steppes.",
   "legions": [
    "White Scars"
   ],
   "characters": [
    "Jaghatai Khan",
    "Qin Xa",
    "Hasik",
    "Targutai Yesugei"
   ],
   "planets": [
    "chogoris"
   ]
  },
  "lord_of_drakes": {
   "title": "Vulkan: Lord of Drakes",
   "author": "David Annandale",
   "series": "The Horus Heresy: Primarchs",
   "year": 2018,
   "number": 9,
   "format": "Novella",
   "synopsis": "The Terran-born warriors of the XVIII Legion are making a last stand against an ork invasion in the Taras Division, unaware their primarch has already been found. On Nocturne, Vulkan has trained a new generation of warriors and finally leads them to war, to save his beleaguered sons and forge two halves into one Legion.",
   "legions": [
    "Salamanders"
   ],
   "characters": [
    "Vulkan",
    "Cassian Vaughn",
    "Reth Sho'mar",
    "Tukeren Na'shor",
    "The Emperor"
   ],
   "planets": [
    "antaeum",
    "nocturne"
   ]
  },
  "lord_of_shadows": {
   "title": "Corax: Lord of Shadows",
   "author": "Guy Haley",
   "series": "The Horus Heresy: Primarchs",
   "year": 2018,
   "number": 10,
   "format": "Novella",
   "synopsis": "The Raven Guard and an Imperial Army war host are sent to force the void-cities of the Carinae Sodality into compliance. When an ancient bio-weapon is unleashed at the void-city of Zenith, allies turn on each other and the campaign teeters on collapse. Meanwhile, on Deliverance, a movement claiming to act in Corax's name takes vengeance into its own hands.",
   "legions": [
    "Raven Guard",
    "Night Lords"
   ],
   "characters": [
    "Corvus Corax",
    "Effe Dellius",
    "Arch-Comptroller Agarth",
    "Konrad Curze",
    "Jago Sevatarion"
   ],
   "planets": [
    "deliverance"
   ]
  },
  "slave_of_nuceria": {
   "title": "Angron: Slave of Nuceria",
   "author": "Ian St. Martin",
   "series": "The Horus Heresy: Primarchs",
   "year": 2019,
   "number": 11,
   "format": "Novella",
   "synopsis": "Angron commands a Legion he never wanted in service of a father he cannot forgive. Flashbacks to his years as a gladiator-slave on Nuceria alternate with a Great Crusade campaign in which he demands that his sons take the Butcher's Nails, an ultimatum that will change the World Eaters forever.",
   "legions": [
    "World Eaters"
   ],
   "characters": [
    "Angron",
    "Khârn",
    "Mago"
   ],
   "planets": [
    "nuceria"
   ]
  },
  "lord_of_the_first": {
   "title": "Lion El'Jonson: Lord of the First",
   "author": "David Guymer",
   "series": "The Horus Heresy: Primarchs",
   "year": 2020,
   "number": 13,
   "format": "Novella",
   "synopsis": "While the Emperor gathers his sons for Ullanor, the Lion leads the Dark Angels to the Northern Fringe to subdue the rebellious world of Muspel. There they face the Khrave, psychic xenos able to seize the minds of lesser beings, and the Legion's habit of secrecy becomes both a weapon and a weakness.",
   "legions": [
    "Dark Angels"
   ],
   "characters": [
    "Lion El'Jonson",
    "The Autochthonar"
   ],
   "setting": "997.M30",
   "sort": 30997,
   "planets": [
    "muspel"
   ]
  },
  "pale_king": {
   "title": "Mortarion: The Pale King",
   "author": "David Annandale",
   "series": "The Horus Heresy: Primarchs",
   "year": 2022,
   "number": 15,
   "format": "Novella",
   "synopsis": "Mortarion leads the Death Guard in a merciless compliance of the Galaspar Cluster, whose ruling Order enslaves and works its people to death, much like the tyrants of his own youth. When two of his brothers arrive to call him to account for the slaughter, the Pale King refuses to apologise for his methods.",
   "legions": [
    "Death Guard"
   ],
   "characters": [
    "Mortarion",
    "Horus",
    "Sanguinius"
   ],
   "planets": [
    "galaspar"
   ]
  },
  "valdor": {
   "title": "Valdor: Birth of the Imperium",
   "author": "Chris Wraight",
   "series": "The Horus Heresy: Characters",
   "year": 2019,
   "format": "Novel",
   "synopsis": "Near the end of the Unification Wars, Constantin Valdor, Captain-General of the Custodians, fights to complete the Emperor's conquest of Terra. As the new Legiones Astartes rise and the Thunder Warriors grow restless, Valdor must carry out the darker deeds that the birth of the Imperium demands.",
   "legions": [
    "Legio Custodes",
    "Thunder Warriors"
   ],
   "characters": [
    "Constantin Valdor",
    "The Emperor",
    "Ushotan",
    "Uwoma Kandawire"
   ],
   "setting": "M30",
   "sort": 30000,
   "planets": [
    "terra"
   ]
  },
  "luther_first_fallen": {
   "title": "Luther: First of the Fallen",
   "author": "Gav Thorpe",
   "series": "The Horus Heresy: Characters",
   "year": 2020,
   "format": "Novel",
   "synopsis": "Luther, the knight who found and raised Lion El'Jonson, tells his own story of Caliban, from his years beside the Lion to the slow-burning resentment of being left behind. As rebellion and dark influences grow on the Dark Angels' homeworld, Luther makes the choices that will shatter both the Legion and Caliban.",
   "legions": [
    "Dark Angels"
   ],
   "characters": [
    "Luther",
    "Lion El'Jonson",
    "Zahariel",
    "Merir Astelan"
   ],
   "planets": [
    "caliban"
   ]
  },
  "legion": {
   "title": "Legion",
   "author": "Dan Abnett",
   "series": "The Horus Heresy",
   "number": 7,
   "year": 2008,
   "format": "Novel",
   "synopsis": "The Imperial Army's Geno Five-Two Chiliad struggles to pacify the world of Nurth when the secretive Alpha Legion arrives to assist. As officers investigate the Legion's motives and an ancient sorcerous cult, the twin primarchs make a fateful choice about which side to take in the coming war.",
   "legions": [
    "Alpha Legion",
    "Imperial Army"
   ],
   "characters": [
    "Alpharius",
    "Omegon",
    "Peto Soneka",
    "John Grammaticus",
    "Hurtado Bronzi",
    "Namid Shere"
   ],
   "planets": [
    "nurth"
   ]
  },
  "tales_of_heresy": {
   "title": "Tales of Heresy",
   "author": "Various",
   "series": "The Horus Heresy",
   "number": 10,
   "year": 2009,
   "format": "Anthology",
   "synopsis": "A collection of short stories that widens the scope of the Great Crusade and the early Heresy, from the Legio Custodes and the Sisters of Silence on Terra to Angron's World Eaters, the Space Wolves, the Dark Angels and the Emperor's Children. Several tales explore the Imperial Truth, the last remnants of faith and the Emperor himself.",
   "legions": [
    "Legio Custodes",
    "Sisters of Silence",
    "World Eaters",
    "Space Wolves",
    "Dark Angels",
    "Emperor's Children"
   ],
   "characters": [
    "Amon Tauromachian",
    "The Emperor",
    "Angron",
    "Leman Russ",
    "Uriah Olathaire"
   ],
   "planets": [
    "terra"
   ]
  },
  "nemesis": {
   "title": "Nemesis",
   "author": "James Swallow",
   "series": "The Horus Heresy",
   "number": 13,
   "year": 2010,
   "format": "Novel",
   "synopsis": "The Officio Assassinorum assembles an Execution Force of operatives from its rival clades and sends them to the world of Dagonet to kill the Warmaster. Meanwhile, the Word Bearers set a murderous agent of their own in motion, and Imperial investigators on Terra pursue a trail of impossible killings.",
   "legions": [
    "Officio Assassinorum",
    "Sons of Horus",
    "Word Bearers"
   ],
   "characters": [
    "Eristede Kell",
    "Jenniker Soalm",
    "Iota",
    "Fon Tariel",
    "Garantine",
    "Erebus",
    "Horus"
   ],
   "planets": [
    "dagonet",
    "terra"
   ]
  },
  "age_of_darkness": {
   "title": "Age of Darkness",
   "author": "Various",
   "series": "The Horus Heresy",
   "number": 16,
   "year": 2011,
   "format": "Anthology",
   "synopsis": "Short stories set in the shadowed years after Isstvan, when the war spread into countless hidden conflicts. Tales cover the Ultramarines before Calth, the scattered survivors of Isstvan V, the Raven Guard and Alpha Legion, Remembrancers on Terra, the shattered Thousand Sons and the Iron Warriors.",
   "legions": [
    "Ultramarines",
    "Raven Guard",
    "Alpha Legion",
    "Thousand Sons",
    "Iron Warriors",
    "Iron Hands",
    "Salamanders",
    "Sons of Horus"
   ],
   "characters": [
    "Roboute Guilliman",
    "Corvus Corax",
    "Horus Aximand",
    "Ahzek Ahriman",
    "Malcador"
   ],
   "planets": [
    "terra",
    "prospero"
   ]
  },
  "the_primarchs": {
   "title": "The Primarchs",
   "author": "Various",
   "series": "The Horus Heresy",
   "number": 20,
   "year": 2012,
   "format": "Anthology",
   "synopsis": "Four novellas centred on the primarchs themselves: Fulgrim faces the consequences of his choices, Lion El'Jonson's Dark Angels fight the Heresy in secret, the Alpha Legion's twin primarchs pursue their hidden designs, and Ferrus Manus leads his Iron Hands in a war against a defiant world before the Heresy breaks.",
   "legions": [
    "Emperor's Children",
    "Dark Angels",
    "Alpha Legion",
    "Iron Hands"
   ],
   "characters": [
    "Fulgrim",
    "Lion El'Jonson",
    "Alpharius",
    "Omegon",
    "Ferrus Manus",
    "Corswain"
   ],
   "planets": []
  },
  "damnation_of_pythos": {
   "title": "The Damnation of Pythos",
   "author": "David Annandale",
   "series": "The Horus Heresy",
   "number": 30,
   "year": 2014,
   "format": "Novel",
   "synopsis": "A band of Iron Hands, Raven Guard and Salamanders who survived Isstvan V takes refuge on Pythos, a death world swarming with predators. There they try to strike back at the Traitors. A warp anomaly at the planet's heart draws a growing horror, and the Shattered Legions face a foe that cannot be beaten with bolter and blade.",
   "legions": [
    "Iron Hands",
    "Raven Guard",
    "Salamanders",
    "Imperial Army"
   ],
   "characters": [
    "Atticus",
    "Galba",
    "Madail"
   ],
   "planets": [
    "pythos"
   ]
  },
  "legacies_of_betrayal": {
   "title": "Legacies of Betrayal",
   "author": "Various",
   "series": "The Horus Heresy",
   "number": 31,
   "year": 2015,
   "format": "Anthology",
   "synopsis": "This anthology collects many shorter tales from across the galaxy-spanning civil war. Their viewpoints range from Primarchs to line legionaries. They include the White Scars' brotherhood, Angron and Lorgar on the eve of open war, Horus in his role as Warmaster, and the first steps of Lucius towards becoming the Eternal Blade.",
   "legions": [
    "White Scars",
    "World Eaters",
    "Word Bearers",
    "Sons of Horus",
    "Emperor's Children",
    "Iron Hands",
    "Space Wolves"
   ],
   "characters": [
    "Jaghatai Khan",
    "Angron",
    "Lorgar",
    "Horus",
    "Lucius",
    "Sharrowkyn"
   ],
   "planets": []
  },
  "war_without_end": {
   "title": "War Without End",
   "author": "Various",
   "series": "The Horus Heresy",
   "number": 33,
   "year": 2016,
   "format": "Anthology",
   "synopsis": "This anthology gathers short stories from the Great Crusade and the Heresy, many first released as limited editions or event exclusives. They range from Angron's bloody past and Fulgrim's descent to the Lion's campaigns and the Iron Warriors' escape from the Eye of Terror.",
   "legions": [
    "World Eaters",
    "Emperor's Children",
    "Dark Angels",
    "Iron Warriors",
    "Space Wolves",
    "Legio Custodes"
   ],
   "characters": [
    "Angron",
    "Fulgrim",
    "Lion El'Jonson",
    "Perturabo"
   ],
   "planets": []
  },
  "eye_of_terra": {
   "title": "Eye of Terra",
   "author": "Various",
   "series": "The Horus Heresy",
   "number": 35,
   "year": 2016,
   "format": "Anthology",
   "synopsis": "This collection of short stories covers the era of the Great Crusade and the Heresy. Its centrepiece is the novella Aurelian, in which Lorgar journeys through the Eye of Terror. Other tales range from Horus and the Emperor fighting side by side against the Orks to scattered battles across the galaxy.",
   "legions": [
    "Word Bearers",
    "Luna Wolves",
    "Space Wolves",
    "Dark Angels",
    "Iron Hands",
    "Blood Angels"
   ],
   "characters": [
    "Lorgar",
    "Horus",
    "The Emperor"
   ],
   "planets": []
  },
  "path_of_heaven": {
   "title": "The Path of Heaven",
   "author": "Chris Wraight",
   "series": "The Horus Heresy",
   "number": 36,
   "year": 2016,
   "format": "Novel",
   "synopsis": "Years after declaring for the Emperor, the White Scars are hemmed in by Warp storms and Traitor Legions as they wage a hit-and-run war far from Terra. Jaghatai Khan searches for a route home to the Throneworld. Meanwhile the Death Guard and Emperor's Children close in, and old divisions within the Legion flare up again.",
   "legions": [
    "White Scars",
    "Death Guard",
    "Emperor's Children",
    "Alpha Legion"
   ],
   "characters": [
    "Jaghatai Khan",
    "Shiban",
    "Targutai Yesugei",
    "Ilya Ravallion",
    "Mortarion"
   ],
   "planets": [
    "prospero",
    "terra"
   ]
  },
  "silent_war": {
   "title": "The Silent War",
   "author": "Various",
   "series": "The Horus Heresy",
   "number": 37,
   "year": 2016,
   "format": "Anthology",
   "synopsis": "This anthology focuses on Malcador the Sigillite and the hidden agents he sends out as the Heresy spreads. Many of the stories follow his Knights Errant, renegade legionaries recruited for covert missions, along with the Sisters of Silence and others fighting a secret war in the shadows.",
   "legions": [
    "Knights Errant",
    "Sisters of Silence",
    "Legio Custodes",
    "Imperial Fists"
   ],
   "characters": [
    "Malcador the Sigillite",
    "Nathaniel Garro"
   ],
   "planets": [
    "terra",
    "luna"
   ]
  },
  "shattered_legions": {
   "title": "Shattered Legions",
   "author": "Various",
   "series": "The Horus Heresy",
   "number": 43,
   "year": 2017,
   "format": "Anthology",
   "synopsis": "A collection of stories, edited by Laurie Goulding, following the survivors of the Isstvan V massacre. Iron Hands, Salamanders and Raven Guard bands, bound together under Shadrak Meduson, fight a guerrilla war of vengeance against the traitor Legions while struggling with their own grief and growing ruthlessness. The volume is anchored by Graham McNeill's novella The Seventh Serpent.",
   "legions": [
    "Iron Hands",
    "Salamanders",
    "Raven Guard"
   ],
   "characters": [
    "Shadrak Meduson",
    "Nykona Sharrowkyn"
   ],
   "planets": []
  },
  "burden_of_loyalty": {
   "title": "The Burden of Loyalty",
   "author": "Various",
   "series": "The Horus Heresy",
   "number": 48,
   "year": 2018,
   "format": "Anthology",
   "synopsis": "An anthology, edited by Laurie Goulding, of loyalist stories set across the later Heresy. Its centrepieces are Chris Wraight's novella The Wolf King, about the Space Wolves, and Rob Sanders' Cybernetica, about the Legio Cybernetica, alongside shorter tales by Dan Abnett, Aaron Dembski-Bowden, John French, David Annandale and Gav Thorpe.",
   "legions": [
    "Space Wolves",
    "Mechanicum",
    "Imperial Fists",
    "Ultramarines"
   ],
   "planets": []
  },
  "born_of_flame": {
   "title": "Born of Flame",
   "author": "Nick Kyme",
   "series": "The Horus Heresy",
   "number": 50,
   "year": 2018,
   "format": "Anthology",
   "synopsis": "A collection of Nick Kyme's shorter Salamanders fiction from the Great Crusade and the Heresy, including the novellas Promethean Sun and Scorched Earth and the short novel Sons of the Forge. It follows Vulkan and his sons from a doomed crusade campaign through the aftermath of the Isstvan V massacre, showing the Legion's humanity and its burden of loss.",
   "legions": [
    "Salamanders",
    "Iron Hands"
   ],
   "characters": [
    "Vulkan",
    "Artellus Numeon"
   ],
   "planets": [
    "isstvan5"
   ]
  },
  "heralds_of_the_siege": {
   "title": "Heralds of the Siege",
   "author": "Various",
   "series": "The Horus Heresy",
   "number": 52,
   "year": 2018,
   "format": "Anthology",
   "synopsis": "A collection of stories, edited by Nick Kyme and Laurie Goulding, set in the final months before the Siege of Terra. Loyalist and traitor forces make their last moves across the galaxy and inside the Sol System, preparing for the conflict to come. Contributors include John French, Chris Wraight, Gav Thorpe, Guy Haley, Nick Kyme, James Swallow, Rob Sanders and Anthony Reynolds.",
   "legions": [
    "Imperial Fists",
    "Sons of Horus",
    "Thousand Sons",
    "Raven Guard",
    "Alpha Legion"
   ],
   "characters": [
    "Rogal Dorn",
    "Malcador the Sigillite"
   ],
   "planets": [
    "terra"
   ]
  },
  "end_and_death_volume_i": {
   "title": "The End and the Death: Volume I",
   "author": "Dan Abnett",
   "series": "The Siege of Terra",
   "number": 8,
   "year": 2023,
   "format": "Novel",
   "synopsis": "As the Palace verges on collapse and time itself begins to unravel on Terra, Horus makes a final gamble. When the Warmaster lowers the Vengeful Spirit's shields, the Emperor must decide whether to answer the challenge. The first volume of the finale gathers the surviving characters of the saga toward their last stand.",
   "legions": [
    "Sons of Horus",
    "Imperial Fists",
    "Blood Angels",
    "Legio Custodes",
    "Daemons"
   ],
   "characters": [
    "The Emperor",
    "Horus Lupercal",
    "Rogal Dorn",
    "Malcador the Sigillite",
    "John Grammaticus",
    "Oll Persson",
    "Garviel Loken"
   ],
   "setting": "014.M31",
   "sort": 31014,
   "planets": [
    "terra"
   ]
  },
  "end_and_death_volume_ii": {
   "title": "The End and the Death: Volume II",
   "author": "Dan Abnett",
   "series": "The Siege of Terra",
   "number": 9,
   "year": 2023,
   "format": "Novel",
   "synopsis": "The Emperor and His companions fight their way across the nightmare realm that the Vengeful Spirit has become. On Terra the defenders hold on without their master, while aboard the flagship two angelic brothers come face to face. The middle volume moves the Heresy toward its fatal reckoning.",
   "legions": [
    "Sons of Horus",
    "Blood Angels",
    "Legio Custodes",
    "Daemons"
   ],
   "characters": [
    "The Emperor",
    "Horus Lupercal",
    "Sanguinius",
    "Garviel Loken",
    "Oll Persson"
   ],
   "setting": "014.M31",
   "sort": 31014,
   "planets": [
    "terra"
   ]
  },
  "end_and_death_volume_iii": {
   "title": "The End and the Death: Volume III",
   "author": "Dan Abnett",
   "series": "The Siege of Terra",
   "number": 10,
   "year": 2024,
   "format": "Novel",
   "synopsis": "The Emperor and Horus meet for the last time, in a duel fought across reality as much as on the deck of the Vengeful Spirit. On Terra, Malcador sits on the Golden Throne to buy his master time. The concluding volume brings the Horus Heresy to its end and sets the Imperium on the path to the grim forty-first millennium.",
   "legions": [
    "Sons of Horus",
    "Legio Custodes",
    "Imperial Fists",
    "Daemons"
   ],
   "characters": [
    "The Emperor",
    "Horus Lupercal",
    "Malcador the Sigillite",
    "Garviel Loken",
    "Rogal Dorn"
   ],
   "setting": "014.M31",
   "sort": 31014,
   "planets": [
    "terra"
   ]
  },
  "fury_of_magnus": {
   "title": "Fury of Magnus",
   "author": "Graham McNeill",
   "series": "The Siege of Terra",
   "year": 2020,
   "format": "Novella",
   "synopsis": "Magnus the Red brings his Thousand Sons to the Siege of Terra in the hope of finally carrying out his long-laid plans. From beyond the walls to the heart of the Palace and the realms beyond, Ahriman, Amon and Menkaura are caught up in the culmination of their primarch's designs. Salamanders and Space Wolves stand against them.",
   "legions": [
    "Thousand Sons",
    "Salamanders",
    "Space Wolves"
   ],
   "characters": [
    "Magnus the Red",
    "Ahzek Ahriman",
    "Amon",
    "Menkaura"
   ],
   "setting": "014.M31",
   "sort": 31014,
   "planets": [
    "terra"
   ]
  },
  "garro_knight_of_grey": {
   "title": "Garro: Knight of Grey",
   "author": "James Swallow",
   "series": "The Siege of Terra",
   "year": 2023,
   "format": "Novella",
   "synopsis": "Within the ruined Imperial Palace, the Knight-Errant Nathaniel Garro fights on as the plagues of the Death Guard spread through the defences. His war becomes a personal confrontation with his gene-father Mortarion, now a Daemon Primarch. It closes Garro's long arc through the Heresy.",
   "legions": [
    "Knights Errant",
    "Death Guard"
   ],
   "characters": [
    "Nathaniel Garro",
    "Mortarion"
   ],
   "setting": "014.M31",
   "sort": 31014,
   "planets": [
    "terra"
   ]
  },
  "era_of_ruin": {
   "title": "Era of Ruin",
   "author": "Various",
   "series": "The Siege of Terra",
   "year": 2025,
   "format": "Anthology",
   "synopsis": "An epilogue anthology of eight stories by the Siege of Terra authors, set in the immediate aftermath of the Siege. Survivors on both sides count the cost of the war as the Imperium begins to take its new, grim shape. Contributors include Dan Abnett, John French, Aaron Dembski-Bowden, Chris Wraight, Gav Thorpe, Guy Haley and Nick Kyme.",
   "legions": [
    "Imperial Fists",
    "Blood Angels",
    "White Scars",
    "Legio Custodes"
   ],
   "setting": "014.M31",
   "sort": 31014,
   "planets": [
    "terra"
   ]
  },
  "alpharius_head_of_the_hydra": {
   "title": "Alpharius: Head of the Hydra",
   "author": "Mike Brooks",
   "series": "The Horus Heresy: Primarchs",
   "number": 14,
   "year": 2021,
   "format": "Novella",
   "synopsis": "Alpharius himself narrates the story of his origins and of how the Alpha Legion came to be, after being reunited with his twin Omegon. The tale is interrupted by an assault from the xenos Slaugth, and the reader can never be sure how much of the primarch's account is truth and how much is misdirection.",
   "legions": [
    "Alpha Legion"
   ],
   "characters": [
    "Alpharius",
    "Omegon",
    "Horus"
   ],
   "planets": []
  },
  "rogal_dorn_the_emperors_crusader": {
   "title": "Rogal Dorn: The Emperor's Crusader",
   "author": "Gav Thorpe",
   "series": "The Horus Heresy: Primarchs",
   "number": 16,
   "year": 2022,
   "format": "Novella",
   "synopsis": "Six decades into the Great Crusade, four primarchs are sent beyond the Northern Major Warp Storm to conquer the shrouded region known as the Occluda Noctis. Rogal Dorn leads the Imperial Fists into this Night Crusade, clashing with Lion El'Jonson over how to fulfil the Emperor's orders while an unknown foe waits in the dark.",
   "legions": [
    "Imperial Fists",
    "Dark Angels"
   ],
   "characters": [
    "Rogal Dorn",
    "Lion El'Jonson",
    "Fafnir Rann"
   ],
   "planets": []
  },
  "sanguinius_the_great_angel": {
   "title": "Sanguinius: The Great Angel",
   "author": "Chris Wraight",
   "series": "The Horus Heresy: Primarchs",
   "number": 17,
   "year": 2022,
   "format": "Novella",
   "synopsis": "A disgraced remembrancer is assigned to the Blood Angels to chronicle their primarch. Told through the chronicler's interviews and observations, the book explores the gap between Sanguinius the man and the angelic myth that surrounds him, and what the legend means to those who serve him.",
   "legions": [
    "Blood Angels"
   ],
   "characters": [
    "Sanguinius"
   ],
   "planets": []
  },
  "sons_of_the_emperor": {
   "title": "Sons of the Emperor",
   "author": "Various",
   "series": "The Horus Heresy: Primarchs",
   "year": 2018,
   "format": "Anthology",
   "synopsis": "Eight short stories by different Black Library authors, each spotlighting one or more primarchs at defining moments of the Great Crusade and Heresy. Among them is a tale of the Emperor coming to Nocturne to reveal Vulkan's destiny.",
   "legions": [],
   "characters": [
    "Vulkan",
    "The Emperor"
   ],
   "planets": []
  },
  "scions_of_the_emperor": {
   "title": "Scions of the Emperor",
   "author": "Various",
   "series": "The Horus Heresy: Primarchs",
   "year": 2019,
   "format": "Anthology",
   "synopsis": "A second collection of eight primarch-focused short stories. Highlights include a young Guilliman learning hard lessons in statecraft, an even younger Ferrus Manus fighting to survive alone on Medusa, and the Lion conversing with an Alpha Legionnaire during the Rangdan Xenocides.",
   "legions": [
    "Ultramarines",
    "Iron Hands",
    "Dark Angels",
    "Alpha Legion"
   ],
   "characters": [
    "Roboute Guilliman",
    "Ferrus Manus",
    "Lion El'Jonson"
   ],
   "planets": [
    "medusa"
   ]
  },
  "blood_of_the_emperor": {
   "title": "Blood of the Emperor",
   "author": "Various",
   "series": "The Horus Heresy: Primarchs",
   "year": 2021,
   "format": "Anthology",
   "synopsis": "Six short stories, each offering a fresh look at one of the primarchs, by Graham McNeill, Nick Kyme, David Guymer, Andy Clark, Mike Brooks and Chris Wraight.",
   "legions": [],
   "characters": [],
   "planets": []
  },
  "sigismund_the_eternal_crusader": {
   "title": "Sigismund: The Eternal Crusader",
   "author": "John French",
   "series": "The Horus Heresy: Characters",
   "year": 2022,
   "format": "Novel",
   "synopsis": "Near the end of the Great Crusade, the remembrancer Solomon Voss sets out to understand why Sigismund believes the war will never end. His search uncovers Sigismund's life before he became a Space Marine, his first battles and oaths, and the duels that made him the Imperial Fists' greatest champion.",
   "legions": [
    "Imperial Fists"
   ],
   "characters": [
    "Sigismund",
    "Solomon Voss",
    "Rogal Dorn"
   ],
   "planets": [
    "terra"
   ]
  },
  "eidolon_the_auric_hammer": {
   "title": "Eidolon: The Auric Hammer",
   "author": "Marc Collins",
   "series": "The Horus Heresy: Characters",
   "year": 2024,
   "format": "Novel",
   "synopsis": "Lord Commander Primus Eidolon of the Emperor's Children has fallen far and faces a reckoning for his misdeeds during the Heresy. As the traitor host closes on Terra, he must claw back his power and decide how much of his soul he will trade for glory, amid ever more dangerous dealings with daemons.",
   "legions": [
    "Emperor's Children"
   ],
   "characters": [
    "Eidolon",
    "Fulgrim"
   ],
   "planets": []
  },
  "zardu_layak_the_crimson_apostle": {
   "title": "Zardu Layak: The Crimson Apostle",
   "author": "Rich McCormick",
   "series": "The Horus Heresy: Characters",
   "year": 2026,
   "format": "Novel",
   "synopsis": "The Word Bearers zealot Zardu Layak believes the gods have chosen him, guided by visions of Lorgar. To claim the strength his destiny requires, he journeys to the haunted, desolate world of Helwain in search of the daemon-bound Anakatis Blades, where the ghosts of his own past weakness wait for him.",
   "legions": [
    "Word Bearers"
   ],
   "characters": [
    "Zardu Layak",
    "Lorgar",
    "Anakatis Blade-Slaves"
   ],
   "planets": [
    "helwain"
   ]
  },
  "raldoron_revenant": {
   "title": "Raldoron: Revenant",
   "author": "Guy Haley",
   "series": "The Horus Heresy: Characters",
   "year": 2026,
   "format": "Novel",
   "synopsis": "Sanguinius leads the Imperial Reprisal Fleet into the Garmon Cluster to slow Horus' advance on Terra. First Captain Raldoron is forced to fill his ranks with hastily raised inductii whose unchecked savagery threatens to revive the Blood Angels' darker heritage as the Revenant Legion.",
   "legions": [
    "Blood Angels"
   ],
   "characters": [
    "Raldoron",
    "Sanguinius"
   ],
   "planets": [
    "beta_garmon2"
   ]
  },
  "promethean_sun": {
   "title": "Promethean Sun",
   "author": "Nick Kyme",
   "series": "The Horus Heresy",
   "year": 2011,
   "format": "Novella",
   "synopsis": "During the Great Crusade, the Iron Hands, Death Guard and Salamanders invade a feral world held by the eldar. While their brothers fight in the open, the Salamanders push into deep jungles full of monstrous beasts and witchery, and Vulkan himself must foil the xenos' plan, at a cost he will long regret.",
   "legions": [
    "Salamanders",
    "Iron Hands",
    "Death Guard"
   ],
   "characters": [
    "Vulkan",
    "Ferrus Manus",
    "Mortarion",
    "Artellus Numeon"
   ],
   "planets": [
    "one_five_four_four"
   ]
  },
  "aurelian": {
   "title": "Aurelian",
   "author": "Aaron Dembski-Bowden",
   "series": "The Horus Heresy",
   "year": 2011,
   "format": "Novella",
   "synopsis": "After the Emperor's rebuke at Monarchia, Lorgar searches the stars for truth until he stares into the Eye of Terror. Guided by the daemon Ingethel, he travels into the realm of Chaos and witnesses visions of the pivotal moments that will decide humanity's fate, then sets his course towards damnation.",
   "legions": [
    "Word Bearers"
   ],
   "characters": [
    "Lorgar",
    "Ingethel",
    "Argel Tal"
   ],
   "planets": []
  },
  "brotherhood_of_the_storm": {
   "title": "Brotherhood of the Storm",
   "author": "Chris Wraight",
   "series": "The Horus Heresy",
   "year": 2012,
   "format": "Novella",
   "synopsis": "While news of Horus' treachery spreads, the White Scars remain silent, locked in a long war against the orks of Chondax. Shiban Khan and his jetbike brotherhood fight on the frontier as both loyalists and traitors try to reach the V Legion, and the Khan must finally choose where to turn.",
   "legions": [
    "White Scars"
   ],
   "characters": [
    "Shiban Khan",
    "Torghun Khan",
    "Targutai Yesugei",
    "Jaghatai Khan",
    "Ilya Ravallion"
   ],
   "setting": "001–007.M31",
   "sort": 31001,
   "planets": [
    "chondax"
   ]
  },
  "corax_soulforge": {
   "title": "Corax: Soulforge",
   "author": "Gav Thorpe",
   "series": "The Horus Heresy",
   "year": 2013,
   "format": "Novella",
   "synopsis": "Still rebuilding after Isstvan V, the Raven Guard discover that the forge world Constanix II has allied with the Word Bearers. Corax leads an infiltration into the heart of its Dark Mechanicum priesthood to stop the new war machines being built there, and confronts questions about his own origins.",
   "legions": [
    "Raven Guard",
    "Word Bearers",
    "Dark Mechanicum"
   ],
   "characters": [
    "Corvus Corax",
    "Agapito Nev",
    "Branne Nev",
    "Magos Delvere"
   ],
   "planets": [
    "constanix_ii"
   ]
  },
  "scorched_earth": {
   "title": "Scorched Earth",
   "author": "Nick Kyme",
   "series": "The Horus Heresy",
   "year": 2013,
   "format": "Novella",
   "synopsis": "In the aftermath of the Drop Site Massacre, Salamanders Ra'stan and Usabius leave the other survivors and venture into the Urgall Depression on Isstvan V. Their mission is to discover what, if anything, remains of their vanished primarch Vulkan.",
   "legions": [
    "Salamanders",
    "Iron Hands",
    "Raven Guard",
    "Emperor's Children"
   ],
   "characters": [
    "Ra'stan",
    "Usabius",
    "Erasmus Ruuman",
    "Ishmal Sulnar",
    "Morvax Haukspeer"
   ],
   "setting": "006.M31",
   "sort": 31006,
   "planets": [
    "isstvan5"
   ]
  },
  "tallarn_executioner": {
   "title": "Tallarn: Executioner",
   "author": "John French",
   "series": "The Horus Heresy",
   "year": 2013,
   "format": "Novella",
   "synopsis": "The Iron Warriors virus-bomb the garrison world of Tallarn, turning it into a toxic wasteland. When the survivors of an armoured regiment emerge from their shelters, the opening moves of the greatest tank battle in history begin, while hidden powers manipulate both sides.",
   "legions": [
    "Iron Warriors",
    "Imperial Army"
   ],
   "characters": [
    "Tahirah"
   ],
   "setting": "010–012.M31",
   "sort": 31010,
   "planets": [
    "tallarn"
   ]
  },
  "ravenlord": {
   "title": "Ravenlord",
   "author": "Gav Thorpe",
   "series": "The Horus Heresy",
   "year": 2014,
   "format": "Novella",
   "synopsis": "Corax and his surviving Raven Guard wage a guerrilla war, liberating worlds held by the traitors. A reunion with another Isstvan V survivor leads them to the prison colony of Carandiru, and to the ghosts of their own past on Deliverance.",
   "legions": [
    "Raven Guard"
   ],
   "characters": [
    "Corvus Corax",
    "Agapito Nev",
    "Branne Nev"
   ],
   "planets": [
    "carandiru",
    "deliverance"
   ]
  },
  "purge": {
   "title": "The Purge",
   "author": "Anthony Reynolds",
   "series": "The Horus Heresy",
   "year": 2014,
   "format": "Novella",
   "synopsis": "As the Shadow Crusade spreads across Ultramar, the Word Bearers' 34th Company descends on the isolated world of Percepton Primus. Commander Sor Talgron, once welcome in the halls of the Imperial Palace, begins to doubt the glory of this campaign of extermination, a dangerous thought in Lorgar's Legion.",
   "legions": [
    "Word Bearers",
    "Ultramarines"
   ],
   "characters": [
    "Sor Talgron"
   ],
   "setting": "007–008.M31",
   "sort": 31007,
   "planets": [
    "percepton_primus"
   ]
  },
  "seventh_serpent": {
   "title": "The Seventh Serpent",
   "author": "Graham McNeill",
   "series": "The Horus Heresy",
   "year": 2014,
   "format": "Novella",
   "synopsis": "The crew of the Sisypheum, a band of Iron Hands, Raven Guard and Salamanders survivors, joins Shadrak Meduson in a raid on a hidden Alpha Legion outpost. Nothing involving the XX Legion is what it seems, and the true architect of the battle reveals himself.",
   "legions": [
    "Iron Hands",
    "Raven Guard",
    "Salamanders",
    "Alpha Legion"
   ],
   "characters": [
    "Shadrak Meduson",
    "Cadmus Tyro",
    "Nykona Sharrowkyn",
    "Frater Thamatica",
    "Alpharius"
   ],
   "planets": []
  },
  "tallarn_ironclad": {
   "title": "Tallarn: Ironclad",
   "author": "John French",
   "series": "The Horus Heresy",
   "year": 2015,
   "format": "Novella",
   "synopsis": "The Battle of Tallarn rages across the poisoned planet as tanks, Dreadnoughts and Titans clash. Colonel Silas Kord and his crews fight to survive while agents of several traitor factions try to uncover the secret that really drew the Iron Warriors to Tallarn.",
   "legions": [
    "Iron Warriors",
    "Imperial Army",
    "Sons of Horus",
    "Alpha Legion",
    "Iron Hands"
   ],
   "characters": [
    "Silas Kord",
    "Argonis",
    "Jalen",
    "Hrend",
    "Menoetius"
   ],
   "setting": "010–012.M31",
   "sort": 31010,
   "planets": [
    "tallarn"
   ]
  },
  "cybernetica": {
   "title": "Cybernetica",
   "author": "Rob Sanders",
   "series": "The Horus Heresy",
   "year": 2015,
   "format": "Novella",
   "synopsis": "With Mars lost to Horus' Dark Mechanicum and blockaded by Rogal Dorn, the corruption runs too deep to ignore. Malcador and Dorn turn to those who witnessed the fall to plan a terrible final solution: wiping out all life on the Red Planet using loyal machine cohorts.",
   "legions": [
    "Imperial Fists",
    "Mechanicum",
    "Legio Cybernetica"
   ],
   "characters": [
    "Rogal Dorn",
    "Malcador",
    "Zagreus Kane",
    "Gnaus Archelon",
    "Octal Bool"
   ],
   "planets": [
    "mars"
   ]
  },
  "wolf_king": {
   "title": "Wolf King",
   "author": "Chris Wraight",
   "series": "The Horus Heresy",
   "year": 2015,
   "format": "Novella",
   "synopsis": "Still reeling from Prospero, the Space Wolves are ambushed by the Alpha Legion and driven to the edge of the Alaxxes Nebula. Leman Russ calls for help from his brothers, but none comes, so the trapped Rout prepares to make its stand in the rust-red clouds.",
   "legions": [
    "Space Wolves",
    "Alpha Legion",
    "Dark Angels"
   ],
   "characters": [
    "Leman Russ",
    "Bjorn",
    "Gunnar Gunnhilt",
    "Althalos",
    "Alpharius"
   ],
   "setting": "007.M31",
   "sort": 31007,
   "planets": []
  },
  "honoured": {
   "title": "The Honoured",
   "author": "Rob Sanders",
   "series": "The Horus Heresy",
   "year": 2015,
   "format": "Novella",
   "synopsis": "After the Word Bearers' betrayal at Calth, the poisoned Veridian star drives survivors into the planet's subterranean arcologies. Captain Steloc Aethon of the Ultramarines' 19th Company leads the underground war against the traitors, if he can master his own thirst for revenge.",
   "legions": [
    "Ultramarines",
    "Word Bearers"
   ],
   "characters": [
    "Steloc Aethon"
   ],
   "setting": "007.M31",
   "sort": 31007,
   "planets": [
    "calth"
   ]
  },
  "unburdened": {
   "title": "The Unburdened",
   "author": "David Annandale",
   "series": "The Horus Heresy",
   "year": 2015,
   "format": "Novella",
   "synopsis": "A companion to The Honoured, told from the traitors' side. Chaplain Kurtha Sedd of the Word Bearers is troubled by the attack on Calth, yet he and his devout brethren carry the war into the haunted tunnels beneath the planet, whatever it costs them.",
   "legions": [
    "Word Bearers",
    "Ultramarines"
   ],
   "characters": [
    "Kurtha Sedd"
   ],
   "setting": "007.M31",
   "sort": 31007,
   "planets": [
    "calth"
   ]
  },
  "garro_vow_of_faith": {
   "title": "Garro: Vow of Faith",
   "author": "James Swallow",
   "series": "The Horus Heresy",
   "year": 2015,
   "format": "Novella",
   "synopsis": "Nathaniel Garro, now Agentia Primus of Malcador's Knights Errant, grows restless as the Sigillite's plans for the future become clear. As the traitors draw closer to the Throneworld, he sets out into the wastes of Terra in search of the living saint Euphrati Keeler.",
   "legions": [
    "Knights Errant",
    "Death Guard"
   ],
   "characters": [
    "Nathaniel Garro",
    "Malcador",
    "Euphrati Keeler"
   ],
   "planets": [
    "terra"
   ]
  },
  "sons_of_the_forge": {
   "title": "Sons of the Forge",
   "author": "Nick Kyme",
   "series": "The Horus Heresy",
   "year": 2016,
   "format": "Novella",
   "synopsis": "Charged by Vulkan himself, Forgefather T'kell and a band of Firedrakes escort seven of the primarch's greatest artefacts to a secret vault called the Wrought. But Sons of Horus and the Dark Mechanicum are already trying to break into it.",
   "legions": [
    "Salamanders",
    "Sons of Horus",
    "Dark Mechanicum"
   ],
   "characters": [
    "T'kell",
    "Vulkan"
   ],
   "planets": []
  },
  "weregeld": {
   "title": "Weregeld",
   "author": "Gav Thorpe",
   "series": "The Horus Heresy",
   "year": 2016,
   "format": "Novel",
   "synopsis": "The Raven Guard continue to rebuild after Isstvan V while Alpha Legion infiltrators work to undo them from within. Corax's war of vengeance against the XX Legion comes to a head in a final reckoning that decides whether the Legion has any future at all.",
   "legions": [
    "Raven Guard",
    "Alpha Legion"
   ],
   "characters": [
    "Corvus Corax",
    "Omegon"
   ],
   "planets": []
  },
  "dreadwing": {
   "title": "Dreadwing",
   "author": "David Guymer",
   "series": "The Horus Heresy",
   "year": 2018,
   "format": "Novella",
   "synopsis": "With the Ruinstorm broken and Guilliman and Sanguinius racing to Terra, the Dark Angels wage a campaign of annihilation against the worlds of the traitor Legions. As the Legion fragments, the Wing lieutenants begin to ask whether the Lion is still fighting a war he means to win.",
   "legions": [
    "Dark Angels"
   ],
   "characters": [
    "Lion El'Jonson",
    "Farith Redloss",
    "Calloson"
   ],
   "planets": []
  },
  "spear_of_ultramar": {
   "title": "Spear of Ultramar",
   "author": "David Annandale",
   "series": "The Horus Heresy",
   "year": 2018,
   "format": "Novella",
   "synopsis": "As Guilliman's fleet races through the Ruinstorm towards Terra, Horus sends Warsmith Khrossus and a single company of Iron Warriors to delay it in the Charchera System. Guilliman sees the ambush coming but has no choice except to plunge into it, knowing every second lost could doom the Throneworld.",
   "legions": [
    "Ultramarines",
    "Iron Warriors"
   ],
   "characters": [
    "Roboute Guilliman",
    "Khrossus"
   ],
   "planets": []
  }
 }
};
