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
  segmentums: [
    { id: "solar", name: "Segmentum Solar", label: [-280, 300] },
    { id: "obscurus", name: "Segmentum Obscurus", label: [-330, -840] },
    { id: "pacificus", name: "Segmentum Pacificus", label: [-900, 40] },
    { id: "tempestus", name: "Segmentum Tempestus", label: [-280, 820] },
    { id: "ultima", name: "Ultima Segmentum", label: [560, -560] }
  ],

  features: [
    {
      id: "eye",
      name: "Auge des Schreckens",
      type: "warp",
      x: -540, y: -500, r: 85,
      desc: "Gewaltiger Warpsturm, entstanden bei der Geburt Slaaneshs. Heimat der Verräterlegionen und Ausgangspunkt der Schwarzen Kreuzzüge."
    },
    {
      id: "maelstrom",
      name: "Maelstrom",
      type: "warp",
      x: -60, y: -120, r: 40,
      desc: "Warpsturm-Region nahe dem Segmentum Solar, Zuflucht von Piraten und Renegaten."
    }
  ],

  // Der Große Riss als Pfad (Kontrollpunkte für eine geglättete Linie)
  rift: {
    name: "Cicatrix Maledictum",
    desc: "Der Große Riss. Er öffnete sich nach dem Fall von Cadia und teilt die Galaxie in Imperium Sanctum (südlich) und Imperium Nihilus (nördlich).",
    points: [[-540, -500], [-330, -400], [-80, -300], [200, -150], [420, 40], [600, 200], [700, 320]]
  },

  systems: [
    { id: "sol", name: "Sol", segmentum: "solar", x: -280, y: 40, major: true, planets: ["terra", "mars"] },
    { id: "armageddon", name: "Armageddon", segmentum: "solar", x: -310, y: -190, planets: ["armageddon"] },
    { id: "cadia", name: "Cadia", segmentum: "obscurus", x: -430, y: -400, major: true, planets: ["cadia"] },
    { id: "fenris", name: "Fenris", segmentum: "obscurus", x: -650, y: -300, planets: ["fenris"] },
    { id: "caliban", name: "Caliban", segmentum: "obscurus", x: -230, y: -620, planets: ["caliban"] },
    { id: "prospero", name: "Prospero", segmentum: "obscurus", x: -470, y: -680, planets: ["prospero"] },
    { id: "vigilus", name: "Vigilus", segmentum: "obscurus", x: -120, y: -260, planets: ["vigilus"] },
    { id: "ultramar", name: "Macragge", segmentum: "ultima", x: 850, y: 450, major: true, planets: ["macragge"] },
    { id: "calth", name: "Calth", segmentum: "ultima", x: 900, y: 520, planets: ["calth"] },
    { id: "baal", name: "Baal", segmentum: "ultima", x: 480, y: 40, planets: ["baal"] },
    { id: "nostramo", name: "Nostramo", segmentum: "ultima", x: 650, y: -300, planets: ["nostramo"] },
    { id: "isstvan", name: "Isstvan", segmentum: "ultima", x: 420, y: -160, planets: ["isstvan3", "isstvan5"] },
    { id: "davin", name: "Davin", segmentum: "ultima", x: 280, y: -380, planets: ["davin"] },
    { id: "tanith", name: "Tanith", segmentum: "pacificus", x: -820, y: 230, planets: ["tanith"] },
    { id: "verghast", name: "Verghast", segmentum: "pacificus", x: -870, y: 310, planets: ["verghast"] }
  ],

  planets: {
    terra: {
      name: "Terra", type: "Thronwelt",
      desc: "Wiege der Menschheit und Sitz des Goldenen Throns. Vom Imperialen Palast aus wird das Imperium regiert.",
      books: []
    },
    mars: {
      name: "Mars", type: "Schmiedewelt",
      desc: "Herz des Adeptus Mechanicus und grösste Schmiedewelt des Imperiums.",
      books: []
    },
    armageddon: {
      name: "Armageddon", type: "Makropolwelt",
      desc: "Industriell bedeutende Makropolwelt, Schauplatz mehrerer verheerender Kriege gegen die Orks.",
      books: []
    },
    cadia: {
      name: "Cadia", type: "Festungswelt (zerstört)",
      desc: "Festungswelt am Cadianischen Tor, dem einzigen stabilen Weg aus dem Auge des Schreckens. Über zehntausend Jahre ein Bollwerk gegen das Chaos.",
      books: []
    },
    fenris: {
      name: "Fenris", type: "Todeswelt · Ordensheimat",
      desc: "Eis- und Ozeanwelt, Heimat der Space Wolves.",
      books: ["space_wolf"]
    },
    caliban: {
      name: "Caliban", type: "Ordensheimat (zerstört)",
      desc: "Waldwelt und Heimat der Dark Angels, am Ende der Horus-Häresie zerstört.",
      books: ["descent_angels"]
    },
    prospero: {
      name: "Prospero", type: "Gelehrtenwelt (verwüstet)",
      desc: "Heimatwelt der Thousand Sons unter dem Primarchen Magnus.",
      books: []
    },
    vigilus: {
      name: "Vigilus", type: "Makropolwelt",
      desc: "Strategisch wichtige Welt am Nachmund-Korridor, einer der wenigen sicheren Passagen durch den Großen Riss.",
      books: []
    },
    macragge: {
      name: "Macragge", type: "Ordensheimat",
      desc: "Hauptwelt von Ultramar und Heimat der Ultramarines.",
      books: []
    },
    calth: {
      name: "Calth", type: "Kolonialwelt",
      desc: "Welt in Ultramar, Schauplatz eines der grössten Verrate der Horus-Häresie.",
      books: []
    },
    baal: {
      name: "Baal", type: "Ordensheimat",
      desc: "Heimat der Blood Angels mit ihren Monden Baal Primus und Baal Secundus.",
      books: []
    },
    nostramo: {
      name: "Nostramo", type: "Ordensheimat (zerstört)",
      desc: "Ewig dunkle Welt, Heimat der Night Lords. Vom eigenen Primarchen Konrad Curze vernichtet.",
      books: ["soul_hunter", "night_haunter"]
    },
    isstvan3: {
      name: "Isstvan III", type: "Kolonialwelt",
      desc: "Hier begann Horus' offener Verrat an den loyalen Teilen seiner Legionen.",
      books: []
    },
    isstvan5: {
      name: "Isstvan V", type: "Wüstenwelt",
      desc: "Schauplatz des Drop-Site-Massakers.",
      books: []
    },
    davin: {
      name: "Davin", type: "Feudalwelt",
      desc: "Mondwelt, auf der Horus verwundet und durch die Mächte des Chaos verführt wurde.",
      books: []
    },
    tanith: {
      name: "Tanith", type: "Waldwelt (zerstört)",
      desc: "Heimat des Tanith First and Only, der Gaunt's Ghosts.",
      books: []
    },
    verghast: {
      name: "Verghast", type: "Makropolwelt",
      desc: "Makropolwelt in den Sabbat-Welten, Schauplatz der Belagerung von Vervunhive.",
      books: []
    }
  },

  events: [
    {
      id: "isstvan3", name: "Massaker auf Isstvan III", date: "005.M31", sort: 31005, era: "Horus-Häresie",
      desc: "Horus lässt die loyalen Marines seiner Verräterlegionen per Virusbombardement auslöschen. Beginn der offenen Rebellion.",
      planets: ["isstvan3"], books: ["galaxy_in_flames", "flight_eisenstein"]
    },
    {
      id: "isstvan5", name: "Drop-Site-Massaker", date: "M31", sort: 31006, era: "Horus-Häresie",
      desc: "Drei Legionen fallen ihren vermeintlichen Verbündeten in den Rücken. Ferrus Manus fällt.",
      planets: ["isstvan5"], books: ["fulgrim"]
    },
    {
      id: "davin", name: "Horus' Verführung auf Davin", date: "M31", sort: 31003, era: "Großer Kreuzzug",
      desc: "Horus wird schwer verwundet und auf Davin durch die Chaosgötter verführt.",
      planets: ["davin"], books: ["false_gods"]
    },
    {
      id: "prospero", name: "Brand von Prospero", date: "M31", sort: 31004, era: "Horus-Häresie",
      desc: "Die Space Wolves zerstören Prospero, die Heimat der Thousand Sons.",
      planets: ["prospero"], books: ["thousand_sons", "prospero_burns"]
    },
    {
      id: "mars_schism", name: "Schisma des Mars", date: "M31", sort: 31005.5, era: "Horus-Häresie",
      desc: "Bürgerkrieg innerhalb des Mechanicum zwischen Loyalisten und Anhängern des Horus.",
      planets: ["mars"], books: ["mechanicum"]
    },
    {
      id: "calth", name: "Verrat von Calth", date: "M31", sort: 31007, era: "Horus-Häresie",
      desc: "Die Word Bearers greifen die Ultramarines auf Calth heimtückisch an.",
      planets: ["calth"], books: ["know_no_fear"]
    },
    {
      id: "siege_terra", name: "Belagerung von Terra", date: "014.M31", sort: 31014, era: "Horus-Häresie",
      desc: "Der Höhepunkt der Häresie: Horus' Armeen belagern den Imperialen Palast. Endet mit Horus' Tod und dem Imperator auf dem Goldenen Thron.",
      planets: ["terra", "mars"],
      books: ["solar_war", "lost_and_damned", "first_wall", "saturnine", "mortis", "warhawk", "echoes_eternity", "end_and_death"]
    },
    {
      id: "fall_caliban", name: "Fall von Caliban", date: "M31", sort: 31015, era: "Horus-Häresie",
      desc: "Rebellion auf Caliban und Zerstörung der Welt. Ursprung der Gefallenen Engel.",
      planets: ["caliban"], books: ["fallen_angels"]
    },
    {
      id: "macragge_745", name: "Schlacht um Macragge", date: "745.M41", sort: 41745, era: "M41",
      desc: "Die Schwarmflotte Behemoth greift Ultramar an. Erster Tyranidenkrieg.",
      planets: ["macragge"], books: []
    },
    {
      id: "tanith_fall", name: "Fall von Tanith", date: "M41", sort: 41757, era: "Sabbat-Welten-Kreuzzug",
      desc: "Tanith wird vom Chaos vernichtet. Nur ein Regiment unter Kommissar Gaunt entkommt.",
      planets: ["tanith"], books: ["first_and_only"]
    },
    {
      id: "vervunhive", name: "Belagerung von Vervunhive", date: "M41", sort: 41758, era: "Sabbat-Welten-Kreuzzug",
      desc: "Die Makropole Vervunhive auf Verghast wird von Chaostruppen belagert.",
      planets: ["verghast"], books: ["necropolis"]
    },
    {
      id: "armageddon2", name: "Zweiter Krieg um Armageddon", date: "941.M41", sort: 41941, era: "M41",
      desc: "Ghazghkull Thraka greift Armageddon an. Commissar Yarrick führt die Verteidigung.",
      planets: ["armageddon"], books: ["ghazghkull"]
    },
    {
      id: "armageddon3", name: "Dritter Krieg um Armageddon", date: "998.M41", sort: 41998, era: "M41",
      desc: "Ghazghkulls Rückkehr mit einer noch grösseren Waaagh!",
      planets: ["armageddon"], books: ["helsreach", "ghazghkull"]
    },
    {
      id: "fall_cadia", name: "Fall von Cadia", date: "999.M41", sort: 41999, era: "Gathering Storm",
      desc: "Abaddons 13. Schwarzer Kreuzzug zerstört Cadia. Kurz darauf reisst die Cicatrix Maledictum auf.",
      planets: ["cadia"], books: ["cadia_stands", "gs_fall_cadia"]
    },
    {
      id: "baal_devastation", name: "Verwüstung von Baal", date: "Ende M41", sort: 41999.5, era: "Gathering Storm",
      desc: "Die Schwarmflotte Leviathan greift das Baal-System an. Die Blood Angels und ihre Nachfolger stehen vor der Vernichtung.",
      planets: ["baal"], books: ["devastation_baal"]
    },
    {
      id: "plague_wars", name: "Seuchenkriege in Ultramar", date: "frühes M42", sort: 42001, era: "Dark Imperium",
      desc: "Die Death Guard überzieht Ultramar mit Seuchen. Der zurückgekehrte Roboute Guilliman führt den Widerstand.",
      planets: ["macragge"], books: ["dark_imperium", "plague_war"]
    },
    {
      id: "vigilus_war", name: "Krieg um Vigilus", date: "frühes M42", sort: 42002, era: "Dark Imperium",
      desc: "Orks, Genestealer-Kulte und Abaddons Truppen kämpfen um die Kontrolle des Nachmund-Korridors.",
      planets: ["vigilus"], books: ["vigilus_defiant", "vigilus_ablaze"]
    }
  ],

  books: {
    solar_war: { title: "The Solar War", author: "John French", series: "The Siege of Terra", year: 2019 },
    lost_and_damned: { title: "The Lost and the Damned", author: "Guy Haley", series: "The Siege of Terra", year: 2019 },
    first_wall: { title: "The First Wall", author: "Gav Thorpe", series: "The Siege of Terra", year: 2020 },
    saturnine: { title: "Saturnine", author: "Dan Abnett", series: "The Siege of Terra", year: 2020 },
    mortis: { title: "Mortis", author: "John French", series: "The Siege of Terra", year: 2021 },
    warhawk: { title: "Warhawk", author: "Chris Wraight", series: "The Siege of Terra", year: 2021 },
    echoes_eternity: { title: "Echoes of Eternity", author: "Aaron Dembski-Bowden", series: "The Siege of Terra", year: 2022 },
    end_and_death: { title: "The End and the Death (Bd. I–III)", author: "Dan Abnett", series: "The Siege of Terra", year: "ab 2023" },
    mechanicum: { title: "Mechanicum", author: "Graham McNeill", series: "The Horus Heresy", year: 2008 },
    galaxy_in_flames: { title: "Galaxy in Flames", author: "Ben Counter", series: "The Horus Heresy", year: 2006 },
    flight_eisenstein: { title: "The Flight of the Eisenstein", author: "James Swallow", series: "The Horus Heresy", year: 2007 },
    fulgrim: { title: "Fulgrim", author: "Graham McNeill", series: "The Horus Heresy", year: 2007 },
    false_gods: { title: "False Gods", author: "Graham McNeill", series: "The Horus Heresy", year: 2006 },
    know_no_fear: { title: "Know No Fear", author: "Dan Abnett", series: "The Horus Heresy", year: 2012 },
    thousand_sons: { title: "A Thousand Sons", author: "Graham McNeill", series: "The Horus Heresy", year: 2010 },
    prospero_burns: { title: "Prospero Burns", author: "Dan Abnett", series: "The Horus Heresy", year: 2010 },
    descent_angels: { title: "Descent of Angels", author: "Mitchel Scanlon", series: "The Horus Heresy", year: 2007 },
    fallen_angels: { title: "Fallen Angels", author: "Mike Lee", series: "The Horus Heresy", year: 2009 },
    helsreach: { title: "Helsreach", author: "Aaron Dembski-Bowden", series: "Space Marine Battles", year: 2010 },
    ghazghkull: { title: "Ghazghkull Thraka: Prophet of the Waaagh!", author: "Nate Crowley", series: "Einzelroman", year: 2022 },
    cadia_stands: { title: "Cadia Stands", author: "Justin D. Hill", series: "Einzelroman", year: 2018 },
    gs_fall_cadia: { title: "Gathering Storm I: Fall of Cadia", author: "Games Workshop", series: "Kampagnenbuch", year: 2017 },
    devastation_baal: { title: "The Devastation of Baal", author: "Guy Haley", series: "Space Marine Battles", year: 2017 },
    dark_imperium: { title: "Dark Imperium", author: "Guy Haley", series: "Dark Imperium", year: 2017 },
    plague_war: { title: "Plague War", author: "Guy Haley", series: "Dark Imperium", year: 2018 },
    first_and_only: { title: "First and Only", author: "Dan Abnett", series: "Gaunt's Ghosts", year: 1999 },
    necropolis: { title: "Necropolis", author: "Dan Abnett", series: "Gaunt's Ghosts", year: 2000 },
    soul_hunter: { title: "Soul Hunter", author: "Aaron Dembski-Bowden", series: "Night Lords", year: 2010 },
    night_haunter: { title: "Konrad Curze: The Night Haunter", author: "Guy Haley", series: "The Horus Heresy: Primarchs", year: 2018 },
    space_wolf: { title: "Space Wolf", author: "William King", series: "Space Wolf", year: 1999 },
    vigilus_defiant: { title: "Vigilus Defiant", author: "Games Workshop", series: "Kampagnenbuch", year: 2018 },
    vigilus_ablaze: { title: "Vigilus Ablaze", author: "Games Workshop", series: "Kampagnenbuch", year: 2019 }
  }
};
