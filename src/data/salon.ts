export const salon = {
  name: "ProHair",
  tagline: "De leukste kapsalon van Nederland",
  slogan: "Luxe voor iedereen.",
  address: {
    street: "Kabelweg 20",
    zip: "4382 WV",
    city: "Vlissingen",
  },
  phone: "0118 410 637",
  phoneHref: "tel:+31118410637",
  email: "info@prohair.nl",
  established: 2010,
  facebook: "https://www.facebook.com/prohair.vlissingen",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Kabelweg+20+4382+WV+Vlissingen",
  hours: [
    { day: "Maandag", time: "09:00 - 18:00" },
    { day: "Dinsdag", time: "Gesloten", closed: true },
    { day: "Woensdag", time: "09:00 - 18:00" },
    { day: "Donderdag", time: "09:00 - 21:00", note: "Koopavond" },
    { day: "Vrijdag", time: "09:00 - 21:00" },
    { day: "Zaterdag", time: "09:00 - 13:00" },
    { day: "Zondag", time: "Gesloten", closed: true },
  ],
} as const;

export const services = [
  {
    slug: "knippen",
    title: "Knippen",
    short: "Een coupe die je thuis zelf naar styling brengt.",
    body: "Wij knippen volgens de Pivot Point methode: vanuit vorm. Zo zorgt elke coupe voor de juiste balans bij jouw type haar, gezichtskenmerken en lifestyle. Inclusief eerlijk advies, ook als dat betekent dat we je adviseren niet te knippen.",
    icon: "scissors",
  },
  {
    slug: "kleur",
    title: "Kleur",
    short: "Kleur die je haar voedt in plaats van uitput.",
    body: "Van een mini-kleurbehandeling die je 'zicht'-grijs aan de contouren wegwerkt, tot volledige kleurbehandelingen met L'Oreal Professionnel. Inclusief Toner Refresh om je kleur tussendoor op te frissen.",
    icon: "drop",
  },
  {
    slug: "permanent",
    title: "Permanent",
    short: "Natuurlijke beweging, geen tweede haar.",
    body: "Volledige permanent of een deel-permanent voor extra volume aan de bovenkant. Altijd in combinatie met knippen en styling. Voor lang haar rekenen we een toeslag voor extra permanentvloeistof.",
    icon: "wave",
  },
  {
    slug: "verzorging",
    title: "Verzorging",
    short: "Een uur voor je haar, zonder agenda.",
    body: "Wassen met ontspannende hoofdmassage en masker, een haarherstellende kuur of een Muru muru boter prewash. Inclusief warme handdoek, want koffie staat al voor je klaar.",
    icon: "flower",
  },
  {
    slug: "heren",
    title: "Heren & baard",
    short: "Knippen, contouren en de scheermes-finish.",
    body: "Van een combinatie knippen + baard trimmen tot een volledige contour-shave van gezicht en gehele baard. Coupe binnen drie weken bijwerken kan tegen gereduceerd tarief.",
    icon: "ribbon",
  },
  {
    slug: "extensions",
    title: "Weft extensions",
    short: "Extra lengte of volume, vakkundig ingezet.",
    body: "Weft extensions in lengtes van 40 tot 60 cm, ingezet, onderhouden en weer verwijderd door eigen vakmensen. Inclusief stylingadvies voor thuisonderhoud.",
    icon: "star",
  },
] as const;

export const stats = [
  { value: "L'Oreal", label: "Professionnel salon" },
  { value: "Pivot Point", label: "methode partner" },
  { value: "KOZeeland", label: "eigen opleiding" },
  { value: "7", label: "stylisten in het team" },
];

/* Volgorde matcht de teamleden-foto's. De rol-omschrijvingen
   zijn placeholders bij Marin (eigenaar/man) en algemeen "stylist"
   voor de rest — Jorik moet die nog met ProHair zelf invullen. */
export const team = [
  {
    name: "Marin",
    role: "Mede-eigenaar",
    note: "De olie in de machine, samen sinds 2010.",
    image: "/team/kapsalon_prohair_marin.jpg",
  },
  {
    name: "Karin",
    role: "Stylist",
    note: "Knipspecialist en Pivot Point trainer.",
    image: "/team/kapsalon_prohair_karin.jpg",
  },
  {
    name: "Ashley",
    role: "Stylist",
    note: "Kleur, balayage en consults.",
    image: "/team/kapsalon_prohair_ashley.jpg",
  },
  {
    name: "Estrella",
    role: "Stylist",
    note: "Coupes met karakter, krulspecialist.",
    image: "/team/kapsalon_prohair_estrella.jpg",
  },
  {
    name: "Kasia",
    role: "Stylist",
    note: "Heren-coupes en baardwerk.",
    image: "/team/kapsalon_prohair_kasia.jpg",
  },
  {
    name: "Kiomy",
    role: "Stylist in opleiding",
    note: "Onder begeleiding via KOZeeland.",
    image: "/team/kapsalon_prohair_kiomy.jpg",
  },
  {
    name: "Suuz",
    role: "Mascotte",
    note: "Onze viervoeter. Welkomstcomite, knuffelafdeling, ontstresser tijdens kleurbehandelingen.",
    image: "/team/kapsalon_prohair_suuz.jpg",
    isMascot: true,
  },
];

/* Echte prijzen uit hun tarievenpagina (jan 2025), gekoppeld
   aan de service-categorien. Vanaf-prijzen ivm lengte/dikte. */
export const prices = [
  { service: "Knippen modelleren", from: "32,50", duration: "45 min" },
  { service: "Knippen kind (t/m 5 jaar)", from: "26,00", duration: "20 min" },
  { service: "Krullen knippen + masker + diffuser", from: "48,00", duration: "60 min" },
  { service: "Knippen + föhnen ronde borstels", from: "52,50", duration: "60 min" },
  { service: "Coupe binnen 3 weken bijwerken", from: "18,00", duration: "20 min" },
  { service: "Baard trimmen & contour-shave", from: "26,50", duration: "25 min" },
  { service: "Combinatie knippen en scheren", from: "55,00", duration: "60 min" },
  { service: "Kleurbehandeling, knippen & styling", from: "84,00", duration: "vanaf 2 uur" },
  { service: "Mini kleurbehandeling (contouren)", from: "32,00", duration: "30 min" },
  { service: "Toner Refresh", from: "43,00", duration: "45 min" },
  { service: "Permanent, knippen & styling", from: "111,00", duration: "vanaf 2 uur" },
  { service: "Haarherstellende kuur", from: "20,00", duration: "30 min" },
  { service: "Muru muru boter prewash", from: "10,00", duration: "15 min" },
  { service: "Epileren & kleuren wenkbrauwen", from: "17,00", duration: "20 min" },
  { service: "Weft extensions 50 cm (per pak)", from: "245,00", duration: "op afspraak" },
];

/* Klantreviews zijn ILLUSTRATIEF (geen echte review-bron gevonden).
   Voor productie vervangen door Google reviews of ingestuurde quotes. */
export const reviews = [
  {
    quote: "Ze knipt mij al jaren en luistert echt. Ik kom met een idee, ze komt met een eerlijk advies, ik ga blij naar huis.",
    author: "Vaste klant",
    detail: "Vlissingen",
  },
  {
    quote: "De koffie staat altijd klaar en het voelt nooit als snel-snel. Familiekapsalon zoals ze het zelf zeggen, klopt.",
    author: "Klant",
    detail: "Souburg",
  },
  {
    quote: "Mijn dochter ging hier in opleiding via KOZeeland. Wat een sterke en eerlijke club mensen.",
    author: "Ouder van leerling",
    detail: "Middelburg",
  },
];

export const trainingHighlights = [
  {
    title: "The Fundamentals",
    body: "Complete praktijkopleiding kapper volgens de Pivot Point methode. Kleine groepen, methodische opbouw, gewaardeerd certificaat.",
  },
  {
    title: "Open aanbod",
    body: "Losse modules en op-frissings-cursussen voor gediplomeerde kappers die nieuwe technieken willen leren.",
  },
  {
    title: "Geen leeftijdsgrens",
    body: "Iedereen met ambitie en motivatie is welkom, ook wanneer je niet meer 18 bent. Zij-instromers expliciet uitgenodigd.",
  },
];
