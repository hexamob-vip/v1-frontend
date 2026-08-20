export type DestinationVisit = {
  title: string;
  desc: string;
};

export type DestinationCircuit = {
  title: string;
  duration: string;
  desc: string;
};

export type Destination = {
  slug: string;
  label: string;
  region: string;
  heroImage: string;
  cardImage: string;
  tagline: string;
  intro: string;
  toDo: string[];
  visits: DestinationVisit[];
  circuits: DestinationCircuit[];
};

export const destinations: Destination[] = [
  {
    slug: "la-rochelle",
    label: "La Rochelle",
    region: "Charente-Maritime",
    heroImage: "/assets/images/hexamob-vtc-chauffeur-haut-gamme-la-rochelle.jpg",
    cardImage: "/assets/images/hexamob-vtc-chauffeur-haut-gamme-la-rochelle.jpg",
    tagline: "Port historique & escale premium",
    intro:
      "Capitale maritime de la Charente-Maritime, La Rochelle séduit par son Vieux-Port, ses tours médiévales et son art de vivre atlantique. HEXAMOB vous y conduit en VTC premium pour vos transferts aéroport, escales croisière ou séjours sur mesure.",
    toDo: [
      "Flâner sur les quais du Vieux-Port et les arcades",
      "Profiter des terrasses du centre historique",
      "Partir en excursion vers l'Île de Ré ou Fort Boyard",
      "Assister aux Francofolies, grand festival de musique annuel en juillet",
      "Rejoindre le Stereoparc de Rochefort en VTC (30 min) — rendez-vous estival de la région",
      "Assister à un match ou un concert au Stade Marcel-Deflandre",
      "Découvrir l'Aquarium et le Muséum d'histoire naturelle",
    ],
    visits: [
      { title: "Vieux-Port & tours", desc: "La Tour de la Chaîne, la Tour Saint-Nicolas et la Tour de la Lanterne — emblèmes de la ville." },
      { title: "Francofolies de La Rochelle", desc: "Festival de musique une fois par an, début juillet — concerts en bord de mer et transferts VTC aller-retour hôtel." },
      { title: "Quartier du Gabut", desc: "Maisons colorées, cafés et vue sur les yachts au cœur du port." },
      { title: "Marché central", desc: "Produits locaux, fruits de mer et spécialités charentaises du mardi au dimanche." },
      { title: "Les Minimes", desc: "Port de plaisance, plages voisines et base nautique pour les amateurs de voile." },
    ],
    circuits: [
      { title: "La Rochelle essentielle", duration: "Demi-journée", desc: "Vieux-Port, tours, marché et promenade en bord de mer avec pauses gourmandes." },
      { title: "La Rochelle & Île de Ré", duration: "Journée", desc: "Matin en ville, après-midi sur l'île : phare, villages et plages." },
      { title: "Francofolies & Stereoparc", duration: "Sur mesure", desc: "Navettes VTC premium pour les festivals estivaux : Francofolies à La Rochelle et Stereoparc à Rochefort, aller-retour hôtel ou gare." },
      { title: "La Rochelle by night", duration: "Soirée", desc: "Dîner en centre-ville, balade nocturne sur les quais et retour hôtel en VTC." },
    ],
  },
  {
    slug: "saintes",
    label: "Saintes",
    region: "Charente-Maritime",
    heroImage: "/assets/images/hexamob-vtc-chauffeur-privee-saintes-charente.jpg",
    cardImage: "/assets/images/hexamob-vtc-chauffeur-privee-saintes-charente.jpg",
    tagline: "Ville d'art & patrimoine gallo-romain",
    intro:
      "Ancienne capitale de la Saintonge, Saintes abrite un remarquable patrimoine gallo-romain et un centre historique élégant. Idéale pour une escale VTC entre Bordeaux et La Rochelle, ou une journée culturelle.",
    toDo: [
      "Visiter l'Archéodrome et les thermes gallo-romains",
      "Se promener le long de la Charente",
      "Explorer les rues piétonnes et le marché hebdomadaire",
      "Déguster les produits locaux en Charente-Maritime",
      "Enchaîner vers Cognac ou Royan en trajet long",
    ],
    visits: [
      { title: "Arch of Germanicus", desc: "Monument romain du Ier siècle, au cœur du centre historique." },
      { title: "Amphithéâtre gallo-romain", desc: "Un des plus grands de la province, témoin de l'histoire antique de la ville." },
      { title: "Cathédrale Saint-Pierre", desc: "Architecture gothique et flamboyante, place du marché." },
      { title: "Abbaye aux Dames", desc: "Ensemble monastique majeur, concerts et expositions." },
    ],
    circuits: [
      { title: "Saintes patrimoine", duration: "Demi-journée", desc: "Arc de Germanicus, amphithéâtre, cathédrale et bords de Charente." },
      { title: "Saintes & Cognac", duration: "Journée", desc: "Matin à Saintes, après-midi dans les vignobles et maisons de Cognac." },
      { title: "Transfert gare & visite", duration: "Sur mesure", desc: "Prise en charge à la gare TGV puis circuit culturel à la carte." },
    ],
  },
  {
    slug: "rochefort",
    label: "Rochefort",
    region: "Charente-Maritime",
    heroImage: "/assets/images/hexamob-vtc-chauffeur-privee-rochefort-charente.jpg",
    cardImage: "/assets/images/hexamob-vtc-chauffeur-privee-rochefort-charente.jpg",
    tagline: "Ville navale, thermes & patrimoine maritime",
    intro:
      "Créée par Colbert au XVIIe siècle, Rochefort est une ville d'exception tournée vers la mer. Arsenale, Hermione, Corderie Royale et les Thermes de Rochefort — 6e station thermale de France — : une destination idéale en VTC pour cures, séjours bien-être et patrimoine maritime.",
    toDo: [
      "Visiter l'Arsenal et la frégate Hermione",
      "Parcourir la Corderie Royale et le Jardin des Retours",
      "Faire une cure ou un séjour bien-être aux Thermes de Rochefort",
      "Assister au Stereoparc, festival de musique annuel en juillet",
      "Se détendre sur la plage de Fouras ou l'île Madame",
      "Découvrir la Maison Pierre Loti",
      "Relier La Rochelle, Île d'Oléron ou Royan en trajet premium",
    ],
    visits: [
      { title: "Hermione & Arsenal", desc: "Réplique de la frégate de La Fayette et chantiers navals historiques." },
      { title: "Thermes de Rochefort", desc: "Station thermale ouverte de février à décembre — cures conventionnées, séjours 2 à 5 jours, eau ferrugineuse et soins rhumatologie, phlébologie, dermatologie." },
      { title: "Stereoparc", desc: "Festival de musique une fois par an en juillet — transferts VTC depuis La Rochelle, Royan ou votre hôtel." },
      { title: "Corderie Royale", desc: "Bâtiment de 374 mètres de long, musée et jardins en bord de Charente." },
      { title: "Maison Pierre Loti", desc: "Demeure éclectique de l'écrivain et officier de marine." },
      { title: "Transbordeur de Martrou", desc: "Dernier transbordeur à câbles d'Europe, classé monument historique." },
    ],
    circuits: [
      { title: "Rochefort maritime", duration: "Demi-journée", desc: "Arsenal, Hermione, Corderie et promenade sur les quais." },
      { title: "Cure thermale & transferts", duration: "Sur mesure", desc: "Prise en charge gare, hôtel ou aéroport — navettes quotidiennes vers les Thermes de Rochefort pendant votre cure (18 jours ou séjour court)." },
      { title: "Stereoparc aller-retour", duration: "Soirée", desc: "Prise en charge hôtel ou gare, dépose au festival et retour nocturne en VTC premium." },
      { title: "Rochefort & Fouras", duration: "Journée", desc: "Patrimoine naval le matin, plage et vue sur Fort Boyard l'après-midi." },
      { title: "Estuaire de la Charente", duration: "Journée", desc: "Circuit le long de l'estuaire jusqu'à l'Île d'Oléron ou Royan." },
    ],
  },
  {
    slug: "royan",
    label: "Royan",
    region: "Charente-Maritime",
    heroImage: "/assets/images/hexamob-vtc-chauffeur-privee-rochefort-charente.jpg",
    cardImage: "/assets/img/boat.jpg",
    tagline: "Perle de la Côte de Beauté",
    intro:
      "Royan, station balnéaire emblématique, combine plages de sable fin, architecture des années 50 et proximité des vignobles de Cognac. HEXAMOB vous y conduit pour vos séjours, transferts gare ou circuits estuariens.",
    toDo: [
      "Profiter des cinq plages de sable fin",
      "Visiter le marché central et la conche de Royan",
      "Partir vers la Palmyre, le zoo ou le phare de Cordouan",
      "Déguster huîtres et poissons en estuaire de Gironde",
      "Enchaîner vers Bordeaux ou La Palmyre en trajet long",
    ],
    visits: [
      { title: "Grande Conche", desc: "Plage emblématique en forme de croissant, face à l'océan Atlantique." },
      { title: "Église Notre-Dame", desc: "Architecture moderniste remarquable, symbole de la reconstruction." },
      { title: "Zoo de la Palmyre", desc: "L'un des plus grands zoos privés d'Europe, à 15 minutes en VTC." },
      { title: "Phare de Cordouan", desc: "Versailles de la mer — excursion bateau depuis le port de Royan." },
    ],
    circuits: [
      { title: "Royan & plages", duration: "Demi-journée", desc: "Centre-ville, Grande Conche et corniche vers Saint-Palais." },
      { title: "Royan & Palmyre", duration: "Journée", desc: "Matin à Royan, après-midi au zoo et forêt de la Coubre." },
      { title: "Estuaire & Cordouan", duration: "Journée", desc: "Villages ostréicoles, Talmont et embarquement vers le phare." },
    ],
  },
  {
    slug: "cognac",
    label: "Cognac",
    region: "Charente",
    heroImage: "/assets/images/hexamob-vtc-chauffeur-privee-saintes-charente.jpg",
    cardImage: "/assets/img/forest.jpg",
    tagline: "Capitale mondiale du Cognac & du Pineau",
    intro:
      "Entre vignobles, chais centenaires et architecture de pierre blonde, Cognac est une étape incontournable. HEXAMOB propose des circuits VTC premium : maisons de négoce, dégustations de Cognac et de Pineau des Charentes, et villages viticoles.",
    toDo: [
      "Visiter les grandes maisons de Cognac (Hennessy, Rémy Martin, Martell…)",
      "Déguster le Pineau des Charentes, apéritif emblématique de la région",
      "Déguster en chai avec un guide local",
      "Parcourir les quais de la Charente et le château des Valois",
      "Explorer les villages viticoles alentour (Jarnac, Segonzac)",
      "Combiner avec Saintes ou Angoulême en journée",
    ],
    visits: [
      { title: "Maison Hennessy", desc: "Visite des chais, crypte et dégustation au cœur du domaine." },
      { title: "Pineau des Charentes", desc: "Assemblage de jus de raisin et eau-de-vie de Cognac — dégustation en maison de négoce ou chez un producteur local, blanc ou rosé." },
      { title: "Château de Cognac", desc: "Forteresse médiévale et lieu de naissance du roi François Ier." },
      { title: "Musée des Arts du Cognac", desc: "Histoire de l'eau-de-vie, outils et savoir-faire local." },
      { title: "Jarnac & Segonzac", desc: "Villages viticoles voisins, maisons familiales et panoramas de vignes." },
    ],
    circuits: [
      { title: "Tour des vignobles", duration: "Demi-journée", desc: "Deux maisons de Cognac, dégustation et promenade en centre-ville." },
      { title: "Cognac & Pineau", duration: "Demi-journée", desc: "Visite de chais, découverte du Pineau des Charentes et dégustation commentée en VTC premium." },
      { title: "Grands crus du Cognac", duration: "Journée", desc: "Circuit complet : Grande Champagne, Petite Champagne et Borderies." },
      { title: "Cognac & gastronomie", duration: "Journée", desc: "Visites de chais, déjeuner étoilé ou bistrot charentais, retour en VTC." },
    ],
  },
  {
    slug: "ile-de-re",
    label: "Île de Ré",
    region: "Charente-Maritime",
    heroImage: "/assets/images/hexamob-vtc-chauffeur-haut-gamme-la-rochelle.jpg",
    cardImage: "/assets/img/group.jpg",
    tagline: "Île authentique & lumière atlantique",
    intro:
      "L'Île de Ré, accessible depuis le pont de La Rochelle, offre villages blancs et verts, plages, phare des Baleines et saveurs iodées. HEXAMOB organise vos transferts et circuits VTC sur l'île à la carte.",
    toDo: [
      "Visiter Saint-Martin-de-Ré et ses fortifications Vauban",
      "Monter au phare des Baleines",
      "Déguster des huîtres à La Flotte ou Le Port",
      "Louer un vélo ou flâner dans les villages typiques",
      "Profiter des plages de Conche des Baleines ou Gros Jonc",
    ],
    visits: [
      { title: "Saint-Martin-de-Ré", desc: "Port classé, remparts Vauban et ruelles fleuries — cœur de l'île." },
      { title: "Phare des Baleines", desc: "Vue panoramique à 360° sur l'océan et l'île depuis le sommet." },
      { title: "Ars-en-Ré", desc: "Clocher noir et blanc, marais salants et marché du mardi matin." },
      { title: "La Flotte-en-Ré", desc: "Port de pêche animé, restaurants et accès aux plages." },
    ],
    circuits: [
      { title: "Île de Ré essentielle", duration: "Demi-journée", desc: "Saint-Martin, phare des Baleines et halte huîtres." },
      { title: "Tour complet de l'île", duration: "Journée", desc: "Villages, plages, marais salants et coucher de soleil au Port." },
      { title: "La Rochelle & Île de Ré", duration: "Journée", desc: "Transfert pont inclus, circuit combiné ville et île." },
    ],
  },
  {
    slug: "ile-d-oleron",
    label: "Île d'Oléron",
    region: "Charente-Maritime",
    heroImage: "/assets/img/boat.jpg",
    cardImage: "/assets/img/intermodal.jpg",
    tagline: "Plus grande île de la côte atlantique",
    intro:
      "L'Île d'Oléron, la plus grande île de France métropolitaine, mêle forêts, plages sauvages, ostréiculture et patrimoine. HEXAMOB vous accompagne depuis Rochefort, Royan ou La Rochelle pour une journée premium.",
    toDo: [
      "Explorer le port de La Cotinière et ses ventes aux enchères",
      "Visiter le Château d'Oléron et ses remparts",
      "Se baigner aux plages de Vert-Bois ou de la Grande-Village",
      "Découvrir les cabanes ostréicoles du port de Boyardville",
      "Traverser le pont depuis le continent en VTC premium",
    ],
    visits: [
      { title: "La Cotinière", desc: "Premier port de pêche de Charente-Maritime, ambiance authentique." },
      { title: "Château d'Oléron", desc: "Citadelle, remparts et vue sur le pertuis d'Antioche." },
      { title: "Port des Salines", desc: "Marais salants reconstitués, sentier et boutique artisanale." },
      { title: "Saint-Georges-d'Oléron", desc: "Village central, marché et accès aux forêts de pins." },
    ],
    circuits: [
      { title: "Oléron découverte", duration: "Demi-journée", desc: "Château, port ostréicole et plage du Grand-Village." },
      { title: "Tour de l'île", duration: "Journée", desc: "La Cotinière, Salines, Boyardville et plages du sud." },
      { title: "Oléron & Fort Boyard", duration: "Journée", desc: "Circuit île le matin, croisière ou vue sur Fort Boyard l'après-midi." },
    ],
  },
  {
    slug: "bordeaux",
    label: "Bordeaux",
    region: "Nouvelle-Aquitaine",
    heroImage: "/assets/img/render-1.jpg",
    cardImage: "/assets/img/render-2.jpg",
    tagline: "Ville UNESCO & escale business",
    intro:
      "Bordeaux, métropole viticole et patrimoniale, est une destination phare pour nos trajets longs depuis La Rochelle, Saintes ou Royan. Confort premium, pauses sur demande et arrivée directe en centre-ville ou à Mérignac.",
    toDo: [
      "Flâner sur la place de la Bourse et le miroir d'eau",
      "Visiter la Cité du Vin et les quais de Garonne",
      "Explorer le quartier Saint-Pierre et ses restaurants",
      "Partir en excursion Saint-Émilion ou Médoc en VTC",
      "Transfert aéroport Bordeaux-Mérignac sans stress",
    ],
    visits: [
      { title: "Place de la Bourse", desc: "Architecture classique et miroir d'eau — carte postale bordelaise." },
      { title: "Cité du Vin", desc: "Parcours immersif autour du vin et panorama sur Bordeaux." },
      { title: "Quartier Saint-Pierre", desc: "Ruelles médiévales, restaurants et ambiance nocturne." },
      { title: "Saint-Émilion", desc: "Village viticole classé UNESCO, à 45 min en VTC." },
    ],
    circuits: [
      { title: "Bordeaux centre", duration: "Demi-journée", desc: "Miroir d'eau, Grand-Théâtre, quais et déjeuner en centre." },
      { title: "Bordeaux & Saint-Émilion", duration: "Journée", desc: "Matin en ville, après-midi vignobles et dégustation." },
      { title: "Transfert long", duration: "Trajet direct", desc: "La Rochelle ou Royan → Bordeaux centre ou aéroport Mérignac." },
    ],
  },
  {
    slug: "nantes",
    label: "Nantes",
    region: "Pays de la Loire",
    heroImage: "/assets/img/train.jpg",
    cardImage: "/assets/img/train.jpg",
    tagline: "Métropole créative & hub aéroport",
    intro:
      "Nantes combine patrimoine industriel, Machines de l'île et dynamisme urbain. HEXAMOB assure vos trajets longs depuis la Charente-Maritime vers Nantes centre ou l'aéroport Atlantique, en véhicule premium.",
    toDo: [
      "Découvrir les Machines de l'île et l'Éléphant géant",
      "Se promener en bord de Loire et sur l'île de Nantes",
      "Visiter le château des ducs de Bretagne",
      "Profiter du Passage Pommeraye et du centre historique",
      "Connexion vol ou TGV à l'aéroport Nantes Atlantique",
    ],
    visits: [
      { title: "Machines de l'île", desc: "Bestiaire mécanique géant, carrousel des mondes marins." },
      { title: "Château des ducs", desc: "Forteresse médiévale, musée d'histoire de Nantes." },
      { title: "Passage Pommeraye", desc: "Galerie marchande du XIXe siècle, architecture remarquable." },
      { title: "Île de Nantes", desc: "Quartier créatif, hangars réhabilités et vue sur la Loire." },
    ],
    circuits: [
      { title: "Nantes essentielle", duration: "Demi-journée", desc: "Château, centre historique et Machines de l'île." },
      { title: "Nantes & Loire", duration: "Journée", desc: "Ville le matin, Trentemoult ou vignobles nantais l'après-midi." },
      { title: "Transfert aéroport", duration: "Trajet direct", desc: "Charente-Maritime → Nantes Atlantique ou gare TGV." },
    ],
  },
  {
    slug: "paris",
    label: "Paris",
    region: "Île-de-France",
    intro:
      "Pour vos déplacements vers la capitale, HEXAMOB propose un trajet long premium depuis la Charente-Maritime : confort, pauses sur demande, discrétion et ponctualité. Idéal avant un vol, une réunion ou un séjour parisien.",
    heroImage: "/assets/img/render-1.jpg",
    cardImage: "/assets/images/hexamob-vtc-chauffeur-haut-gamme-ile-de-re-aeroport-02.jpg",
    tagline: "Trajet long premium vers la capitale",
    toDo: [
      "Voyager en confort sur la distance (5h+ depuis La Rochelle)",
      "Planifier des pauses autoroute sur demande",
      "Arriver directement hôtel, gare ou aéroports parisiens",
      "Travailler ou se reposer à bord en silence",
      "Organiser un aller-retour sur plusieurs jours",
    ],
    visits: [
      { title: "Gares parisiennes", desc: "Montparnasse, Gare de Lyon, Nord — dépose directe à quai ou hall." },
      { title: "Aéroports CDG & Orly", desc: "Transfert porte-à-porte depuis la Charente-Maritime ou liaison locale." },
      { title: "Quartiers d'affaires", desc: "La Défense, 8e arrondissement, sièges sociaux — service corporate." },
      { title: "Sites emblématiques", desc: "Sur place, enchaînez avec un service VTC parisien ou retour HEXAMOB." },
    ],
    circuits: [
      { title: "Trajet direct", duration: "Aller simple", desc: "La Rochelle, Saintes ou Royan → Paris centre ou banlieue." },
      { title: "Aller-retour business", duration: "1–2 jours", desc: "Départ matinal, retour sur rendez-vous, véhicule premium garanti." },
      { title: "Paris & aéroport", duration: "Sur mesure", desc: "Trajet long puis transfert CDG/Orly pour votre correspondance." },
    ],
  },
];

export const stripDestinations = [
  "La Rochelle",
  "Royan",
  "Île de Ré",
  "Île d'Oléron",
  "Cognac",
  "Saintes",
] as const;

const cityHeroImageSlugs: Partial<Record<string, string>> = {
  "la-rochelle": "la-rochelle",
  saintes: "saintes",
  rochefort: "rochefort",
  royan: "royan",
  cognac: "cognac",
  "ile-de-re": "ile-de-re",
  "ile-d-oleron": "ile-oleron",
};

export function getDestinationCityHeroImage(
  slug: string,
  variant: 1 | 2 = Math.random() < 0.5 ? 1 : 2,
): string | undefined {
  const citySlug = cityHeroImageSlugs[slug];
  if (!citySlug) return undefined;

  return `/assets/images/cities/${citySlug}-0${variant}.jpg`;
}

export function getDestinationCityImages(
  slug: string,
  fallbackHeroImage: string,
  fallbackCardImage?: string,
): { heroImage: string; bannerImage: string } {
  const citySlug = cityHeroImageSlugs[slug];
  const cardFallback = fallbackCardImage ?? fallbackHeroImage;

  if (!citySlug) {
    return { heroImage: fallbackHeroImage, bannerImage: cardFallback };
  }

  const heroVariant: 1 | 2 = Math.random() < 0.5 ? 1 : 2;
  const bannerVariant: 1 | 2 = heroVariant === 1 ? 2 : 1;

  return {
    heroImage: `/assets/images/cities/${citySlug}-0${heroVariant}.jpg`,
    bannerImage: `/assets/images/cities/${citySlug}-0${bannerVariant}.jpg`,
  };
}

export function getDestinationHeroImage(slug: string, fallbackHeroImage: string): string {
  return getDestinationCityHeroImage(slug) ?? fallbackHeroImage;
}

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((destination) => destination.slug === slug);
}

export function getDestinationByLabel(label: string): Destination | undefined {
  return destinations.find(
    (destination) => destination.label.toLowerCase() === label.toLowerCase(),
  );
}

export function getOtherDestinations(slug: string): Destination[] {
  return destinations.filter((destination) => destination.slug !== slug);
}
