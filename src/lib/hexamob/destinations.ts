export type DestinationVisit = {
  title: string;
  desc: string;
};

export type DestinationCircuit = {
  title: string;
  duration: string;
  desc: string;
};

export type NearbyTown = {
  label: string;
  distance: string;
  duration: string;
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
  nearby: NearbyTown[];
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
    nearby: [
      { label: "Aytré", distance: "6 km", duration: "12 min" },
      { label: "Puilboreau", distance: "5 km", duration: "10 min" },
      { label: "Lagord", distance: "5 km", duration: "12 min" },
      { label: "Périgny", distance: "8 km", duration: "15 min" },
      { label: "Angoulins", distance: "10 km", duration: "15 min" },
      { label: "Châtelaillon-Plage", distance: "15 km", duration: "20 min" },
      { label: "Nieul-sur-Mer", distance: "8 km", duration: "15 min" },
      { label: "Dompierre-sur-Mer", distance: "9 km", duration: "15 min" },
      { label: "Surgères", distance: "35 km", duration: "35 min" },
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
    nearby: [
      { label: "Fontcouverte", distance: "5 km", duration: "10 min" },
      { label: "Les Gonds", distance: "4 km", duration: "8 min" },
      { label: "Chaniers", distance: "8 km", duration: "12 min" },
      { label: "Saint-Georges-des-Coteaux", distance: "7 km", duration: "12 min" },
      { label: "Bussac-sur-Charente", distance: "8 km", duration: "12 min" },
      { label: "Taillebourg", distance: "15 km", duration: "20 min" },
      { label: "Port-d'Envaux", distance: "12 km", duration: "18 min" },
      { label: "Pons", distance: "22 km", duration: "25 min" },
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
    nearby: [
      { label: "Tonnay-Charente", distance: "7 km", duration: "12 min" },
      { label: "Fouras", distance: "15 km", duration: "20 min" },
      { label: "Échillais", distance: "8 km", duration: "12 min" },
      { label: "Saint-Agnant", distance: "10 km", duration: "15 min" },
      { label: "Soubise", distance: "12 km", duration: "18 min" },
      { label: "Saint-Laurent-de-la-Prée", distance: "12 km", duration: "18 min" },
      { label: "Breuil-Magné", distance: "8 km", duration: "12 min" },
      { label: "Yves", distance: "18 km", duration: "22 min" },
      { label: "Surgères", distance: "28 km", duration: "25 min" },
    ],
  },
  {
    slug: "surgeres",
    label: "Surgères",
    region: "Charente-Maritime",
    heroImage: "/assets/images/cities/surgeres-01.jpg",
    cardImage: "/assets/images/cities/surgeres-02.jpg",
    tagline: "Gare TGV & porte de l'Aunis",
    intro:
      "Surgères est un carrefour stratégique de Charente-Maritime, notamment grâce à sa gare TGV. HEXAMOB assure vos transferts VTC premium depuis Paris, La Rochelle, Rochefort ou Niort — accueil à quai, aide aux bagages et départ immédiat vers votre hôtel, domicile ou événement.",
    toDo: [
      "Arriver ou partir en TGV avec prise en charge à quai",
      "Relier Rochefort, Saintes ou l'Île d'Oléron sans correspondance",
      "Découvrir le château et le centre historique",
      "Goûter le beurre et les spécialités laitières de Surgères",
      "Enchaîner vers Cognac, Saintes ou Niort en trajet premium",
    ],
    visits: [
      { title: "Gare TGV de Surgères", desc: "Liaison directe vers Paris-Montparnasse — transfert VTC porte-à-porte à l'arrivée ou au départ." },
      { title: "Château de Surgères", desc: "Ensemble médiéval et parc au cœur de la ville, étape patrimoniale de l'Aunis." },
      { title: "Centre historique", desc: "Rues commerçantes, halles et ambiance de ville de marché charentaise." },
      { title: "Foire de Surgères", desc: "Rendez-vous agricole et festif — navettes VTC depuis La Rochelle, Rochefort ou votre hôtel." },
    ],
    circuits: [
      { title: "Transfert gare TGV", duration: "Trajet direct", desc: "Prise en charge à quai, aide aux bagages, départ immédiat vers La Rochelle, Rochefort, Royan ou votre adresse." },
      { title: "Surgères & Aunis", duration: "Demi-journée", desc: "Château, centre-ville et villages de l'Aunis avec chauffeur premium." },
      { title: "Surgères — La Rochelle", duration: "Journée", desc: "Arrivée TGV le matin, journée à La Rochelle ou Île d'Oléron, retour gare ou hôtel." },
    ],
    nearby: [
      { label: "Saint-Germain-de-Marencennes", distance: "5 km", duration: "8 min" },
      { label: "Vandré", distance: "8 km", duration: "12 min" },
      { label: "Chambon", distance: "10 km", duration: "12 min" },
      { label: "Aigrefeuille-d'Aunis", distance: "12 km", duration: "15 min" },
      { label: "Ciré-d'Aunis", distance: "15 km", duration: "18 min" },
      { label: "Mauzé-sur-le-Mignon", distance: "15 km", duration: "18 min" },
      { label: "La Jarrie", distance: "18 km", duration: "20 min" },
      { label: "Rochefort", distance: "28 km", duration: "25 min" },
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
    nearby: [
      { label: "Vaux-sur-Mer", distance: "5 km", duration: "10 min" },
      { label: "Saint-Georges-de-Didonne", distance: "6 km", duration: "12 min" },
      { label: "Saint-Palais-sur-Mer", distance: "8 km", duration: "12 min" },
      { label: "Médis", distance: "8 km", duration: "12 min" },
      { label: "Saujon", distance: "12 km", duration: "18 min" },
      { label: "Les Mathes / La Palmyre", distance: "15 km", duration: "20 min" },
      { label: "Meschers-sur-Gironde", distance: "12 km", duration: "18 min" },
      { label: "Talmont-sur-Gironde", distance: "18 km", duration: "22 min" },
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
    nearby: [
      { label: "Châteaubernard", distance: "4 km", duration: "8 min" },
      { label: "Merpins", distance: "6 km", duration: "10 min" },
      { label: "Boutiers-Saint-Trojan", distance: "5 km", duration: "10 min" },
      { label: "Gensac-la-Pallue", distance: "8 km", duration: "12 min" },
      { label: "Jarnac", distance: "13 km", duration: "18 min" },
      { label: "Segonzac", distance: "12 km", duration: "18 min" },
      { label: "Bourg-Charente", distance: "10 km", duration: "15 min" },
      { label: "Saint-Brice", distance: "8 km", duration: "12 min" },
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
    nearby: [
      { label: "La Flotte", distance: "5 km", duration: "8 min" },
      { label: "Rivedoux-Plage", distance: "10 km", duration: "15 min" },
      { label: "Sainte-Marie-de-Ré", distance: "8 km", duration: "12 min" },
      { label: "Le Bois-Plage-en-Ré", distance: "8 km", duration: "12 min" },
      { label: "La Couarde-sur-Mer", distance: "12 km", duration: "18 min" },
      { label: "Ars-en-Ré", distance: "18 km", duration: "25 min" },
      { label: "Loix", distance: "16 km", duration: "22 min" },
      { label: "Les Portes-en-Ré", distance: "22 km", duration: "30 min" },
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
    nearby: [
      { label: "Saint-Pierre-d'Oléron", distance: "8 km", duration: "12 min" },
      { label: "Dolus-d'Oléron", distance: "6 km", duration: "10 min" },
      { label: "Le Grand-Village-Plage", distance: "8 km", duration: "12 min" },
      { label: "Saint-Georges-d'Oléron", distance: "12 km", duration: "18 min" },
      { label: "Saint-Trojan-les-Bains", distance: "10 km", duration: "15 min" },
      { label: "Boyardville", distance: "14 km", duration: "20 min" },
      { label: "Saint-Denis-d'Oléron", distance: "18 km", duration: "25 min" },
      { label: "La Brée-les-Bains", distance: "16 km", duration: "22 min" },
    ],
  },
  {
    slug: "bordeaux",
    label: "Bordeaux",
    region: "Nouvelle-Aquitaine",
    heroImage: "/assets/images/cities/bordeaux-01.jpg",
    cardImage: "/assets/images/cities/bordeaux-02.jpg",
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
    nearby: [
      { label: "Mérignac", distance: "10 km", duration: "20 min" },
      { label: "Pessac", distance: "8 km", duration: "18 min" },
      { label: "Talence", distance: "6 km", duration: "15 min" },
      { label: "Bègles", distance: "6 km", duration: "15 min" },
      { label: "Cenon", distance: "8 km", duration: "18 min" },
      { label: "Libourne", distance: "35 km", duration: "40 min" },
      { label: "Saint-Émilion", distance: "40 km", duration: "45 min" },
      { label: "Arcachon", distance: "60 km", duration: "55 min" },
    ],
  },
  {
    slug: "nantes",
    label: "Nantes",
    region: "Pays de la Loire",
    heroImage: "/assets/images/cities/nantes-01.jpg",
    cardImage: "/assets/images/cities/nantes-02.jpg",
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
    nearby: [
      { label: "Rezé", distance: "6 km", duration: "15 min" },
      { label: "Saint-Herblain", distance: "8 km", duration: "18 min" },
      { label: "Orvault", distance: "8 km", duration: "18 min" },
      { label: "Vertou", distance: "10 km", duration: "20 min" },
      { label: "Bouguenais", distance: "12 km", duration: "20 min" },
      { label: "Carquefou", distance: "12 km", duration: "20 min" },
      { label: "Sainte-Luce-sur-Loire", distance: "10 km", duration: "18 min" },
      { label: "Trentemoult", distance: "8 km", duration: "15 min" },
    ],
  },
  {
    slug: "paris",
    label: "Paris",
    region: "Île-de-France",
    intro:
      "Pour vos déplacements vers la capitale, HEXAMOB propose un trajet long premium depuis la Charente-Maritime : confort, pauses sur demande, discrétion et ponctualité. Idéal avant un vol, une réunion ou un séjour parisien.",
    heroImage: "/assets/images/cities/paris-01.jpg",
    cardImage: "/assets/images/cities/paris-02.jpg",
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
    nearby: [
      { label: "La Défense", distance: "10 km", duration: "25 min" },
      { label: "Boulogne-Billancourt", distance: "8 km", duration: "25 min" },
      { label: "Neuilly-sur-Seine", distance: "8 km", duration: "20 min" },
      { label: "Saint-Denis", distance: "10 km", duration: "25 min" },
      { label: "Versailles", distance: "20 km", duration: "35 min" },
      { label: "Orly", distance: "15 km", duration: "30 min" },
      { label: "Roissy-CDG", distance: "25 km", duration: "40 min" },
      { label: "Saint-Germain-en-Laye", distance: "25 km", duration: "40 min" },
    ],
  },
  {
    slug: "bayonne",
    label: "Bayonne",
    region: "Pays basque",
    heroImage: "/assets/images/cities/bayonne-01.jpg",
    cardImage: "/assets/images/cities/bayonne-02.jpg",
    tagline: "Porte du Pays basque",
    intro:
      "HEXAMOB assure vos trajets longs vers Bayonne depuis la Charente-Maritime : confort premium, pauses sur demande et arrivée directe en centre-ville, à la gare ou vers Biarritz. Idéal pour un week-end basque, un vol ou un déplacement professionnel.",
    toDo: [
      "Voyager en confort vers le Pays basque (environ 3h30 depuis La Rochelle)",
      "Arriver directement hôtel, gare ou aéroport de Biarritz",
      "Enchaîner vers Biarritz, Anglet ou Saint-Jean-de-Luz",
      "Prévoir des pauses autoroute sur demande",
      "Organiser un aller-retour week-end ou business",
    ],
    visits: [
      { title: "Centre historique", desc: "Cathédrale, Nive et rues commerçantes — dépose au cœur de Bayonne." },
      { title: "Biarritz & Anglet", desc: "Côte basque à quelques minutes : hôtels, plages et aéroport." },
      { title: "Gare de Bayonne", desc: "Correspondance TGV et TER — prise en charge ou dépose à quai." },
      { title: "Aéroport Biarritz-Pays Basque", desc: "Transfert porte-à-porte pour vos vols au départ ou à l'arrivée." },
    ],
    circuits: [
      { title: "Trajet direct", duration: "Aller simple", desc: "La Rochelle, Rochefort ou Saintes → Bayonne centre, gare ou Biarritz." },
      { title: "Aller-retour week-end", duration: "2 jours", desc: "Départ le vendredi, retour le dimanche, véhicule premium garanti." },
      { title: "Bayonne & Côte basque", duration: "Sur mesure", desc: "Trajet long puis navettes vers Biarritz, Saint-Jean-de-Luz ou l'aéroport." },
    ],
    nearby: [
      { label: "Anglet", distance: "6 km", duration: "15 min" },
      { label: "Biarritz", distance: "8 km", duration: "18 min" },
      { label: "Boucau", distance: "5 km", duration: "12 min" },
      { label: "Tarnos", distance: "8 km", duration: "15 min" },
      { label: "Saint-Jean-de-Luz", distance: "20 km", duration: "25 min" },
      { label: "Hendaye", distance: "35 km", duration: "40 min" },
      { label: "Saint-Jean-Pied-de-Port", distance: "50 km", duration: "55 min" },
      { label: "Pau", distance: "110 km", duration: "1h20" },
    ],
  },
  {
    slug: "angers",
    label: "Angers",
    region: "Pays de la Loire",
    heroImage: "/assets/images/cities/angers-01.jpg",
    cardImage: "/assets/images/cities/angers-02.jpg",
    tagline: "Capitale de l'Anjou",
    intro:
      "Angers est une destination de trajet long naturelle depuis la Charente-Maritime. HEXAMOB vous y conduit en VTC premium vers le centre, la gare TGV Saint-Laud ou vos rendez-vous d'affaires, avec pauses et horaires adaptés.",
    toDo: [
      "Relier Angers en confort (environ 2h30 depuis La Rochelle)",
      "Arriver gare TGV, château ou hôtel sans correspondance",
      "Enchaîner vers Nantes ou Tours le même jour",
      "Travailler ou se reposer à bord",
      "Organiser un aller-retour journée ou soirée",
    ],
    visits: [
      { title: "Château d'Angers", desc: "Forteresse des ducs d'Anjou et Tenture de l'Apocalypse — dépose au pied des remparts." },
      { title: "Centre historique", desc: "Cœur d'Angers, Terra Botanica à proximité, restaurants et hôtels." },
      { title: "Gare Angers-Saint-Laud", desc: "Hub TGV vers Paris, Nantes et Tours — transfert à quai." },
      { title: "Quartiers d'affaires", desc: "Rendez-vous corporate, cliniques et campus — service discret." },
    ],
    circuits: [
      { title: "Trajet direct", duration: "Aller simple", desc: "Charente-Maritime → Angers centre, gare Saint-Laud ou périphérie." },
      { title: "Aller-retour journée", duration: "1 jour", desc: "Départ matinal, retour le soir, idéal pour une réunion ou un événement." },
      { title: "Angers & Loire", duration: "Sur mesure", desc: "Trajet long puis correspondance vers Nantes, Tours ou Saumur." },
    ],
    nearby: [
      { label: "Avrillé", distance: "6 km", duration: "15 min" },
      { label: "Trélazé", distance: "7 km", duration: "15 min" },
      { label: "Les Ponts-de-Cé", distance: "8 km", duration: "15 min" },
      { label: "Saint-Barthélemy-d'Anjou", distance: "8 km", duration: "18 min" },
      { label: "Bouchemaine", distance: "8 km", duration: "15 min" },
      { label: "Saumur", distance: "50 km", duration: "50 min" },
      { label: "Cholet", distance: "60 km", duration: "55 min" },
      { label: "Nantes", distance: "90 km", duration: "1h10" },
    ],
  },
  {
    slug: "tours",
    label: "Tours",
    region: "Centre-Val de Loire",
    heroImage: "/assets/images/cities/tours-01.jpg",
    cardImage: "/assets/images/cities/tours-02.jpg",
    tagline: "Cœur des châteaux de la Loire",
    intro:
      "Tours, porte des châteaux de la Loire, se rejoint confortablement depuis la Charente-Maritime. HEXAMOB propose un trajet long premium vers le centre, Saint-Pierre-des-Corps ou vos hôtels, avec possibilité d'excursions vers les châteaux.",
    toDo: [
      "Relier Tours en VTC (environ 3h depuis La Rochelle)",
      "Arriver gare, centre historique ou hôtel",
      "Enchaîner vers Chenonceau, Amboise ou Villandry",
      "Prévoir un aller-retour week-end châteaux",
      "Combiner avec Poitiers ou Angers",
    ],
    visits: [
      { title: "Vieux-Tours", desc: "Place Plumereau, cathédrale Saint-Gatien et ruelles médiévales." },
      { title: "Gare de Tours & Saint-Pierre-des-Corps", desc: "Correspondances TGV — prise en charge ou dépose à quai." },
      { title: "Châteaux de la Loire", desc: "Chenonceau, Amboise, Villandry — circuits VTC à la carte." },
      { title: "Quartier des Affaires", desc: "Rendez-vous professionnels et hôtels du centre ou de la rive gauche." },
    ],
    circuits: [
      { title: "Trajet direct", duration: "Aller simple", desc: "La Rochelle, Saintes ou Surgères → Tours centre ou Saint-Pierre-des-Corps." },
      { title: "Tours & châteaux", duration: "Journée", desc: "Arrivée le matin, circuit châteaux, retour ou nuit sur place." },
      { title: "Aller-retour week-end", duration: "2 jours", desc: "Départ vendredi, retour dimanche, véhicule premium garanti." },
    ],
    nearby: [
      { label: "Saint-Pierre-des-Corps", distance: "4 km", duration: "12 min" },
      { label: "Joué-lès-Tours", distance: "6 km", duration: "15 min" },
      { label: "Saint-Cyr-sur-Loire", distance: "5 km", duration: "12 min" },
      { label: "La Riche", distance: "4 km", duration: "10 min" },
      { label: "Amboise", distance: "25 km", duration: "30 min" },
      { label: "Chenonceaux", distance: "30 km", duration: "35 min" },
      { label: "Villandry", distance: "18 km", duration: "25 min" },
      { label: "Blois", distance: "60 km", duration: "50 min" },
    ],
  },
  {
    slug: "arcachon",
    label: "Arcachon",
    region: "Gironde",
    heroImage: "/assets/images/cities/arcachon-01.jpg",
    cardImage: "/assets/images/cities/arcachon-02.jpg",
    tagline: "Bassin & Dune du Pilat",
    intro:
      "Arcachon et le Bassin se rejoignent en trajet long premium depuis la Charente-Maritime. HEXAMOB vous dépose à la Villa, au port, à la Dune du Pilat ou à votre résidence — confort, bagages et horaires adaptés aux week-ends et séjours balnéaires.",
    toDo: [
      "Relier Arcachon depuis La Rochelle ou Royan (environ 2h30)",
      "Arriver Villa printanière, port ou Dune du Pilat",
      "Enchaîner vers Cap Ferret, Andernos ou Bordeaux",
      "Prévoir un aller-retour week-end balnéaire",
      "Combiner avec un transfert aéroport Mérignac",
    ],
    visits: [
      { title: "Ville d'hiver & Ville d'été", desc: "Villas, jetée Thiers et front de mer — dépose hôtel ou résidence." },
      { title: "Dune du Pilat", desc: "Plus haute dune d'Europe, à 15 minutes en VTC depuis le centre." },
      { title: "Bassin d'Arcachon", desc: "Cap Ferret, Andernos, villages ostréicoles — navettes à la carte." },
      { title: "Gare d'Arcachon", desc: "Correspondance TER vers Bordeaux — prise en charge à quai." },
    ],
    circuits: [
      { title: "Trajet direct", duration: "Aller simple", desc: "Charente-Maritime → Arcachon centre, Pyla ou Cap Ferret." },
      { title: "Arcachon & Pilat", duration: "Journée", desc: "Arrivée le matin, dune et bassin, retour le soir ou nuit sur place." },
      { title: "Week-end Bassin", duration: "2 jours", desc: "Aller-retour premium pour un séjour ostréicole ou balnéaire." },
    ],
    nearby: [
      { label: "La Teste-de-Buch", distance: "6 km", duration: "12 min" },
      { label: "Pyla-sur-Mer", distance: "8 km", duration: "15 min" },
      { label: "Gujan-Mestras", distance: "10 km", duration: "15 min" },
      { label: "Andernos-les-Bains", distance: "25 km", duration: "30 min" },
      { label: "Cap Ferret", distance: "60 km", duration: "1h10" },
      { label: "Biscarrosse", distance: "40 km", duration: "45 min" },
      { label: "Bordeaux", distance: "60 km", duration: "55 min" },
      { label: "Mérignac", distance: "55 km", duration: "50 min" },
    ],
  },
  {
    slug: "limoges",
    label: "Limoges",
    region: "Haute-Vienne",
    heroImage: "/assets/images/cities/limoges-01.jpg",
    cardImage: "/assets/images/cities/limoges-02.jpg",
    tagline: "Porte du Limousin",
    intro:
      "HEXAMOB relie la Charente-Maritime à Limoges en trajet long premium : centre-ville, gare des Bénédictins ou aéroport. Confort, pauses et ponctualité pour vos rendez-vous, correspondances et séjours dans le Limousin.",
    toDo: [
      "Relier Limoges en VTC (environ 2h30 depuis Angoulême, 3h depuis Saintes)",
      "Arriver gare des Bénédictins, centre ou aéroport",
      "Enchaîner vers Poitiers ou Toulouse",
      "Prévoir un aller-retour journée d'affaires",
      "Organiser un transfert avec bagages, y compris porcelaine et colis",
    ],
    visits: [
      { title: "Gare des Bénédictins", desc: "Monument Art déco — dépose ou prise en charge à quai." },
      { title: "Centre historique", desc: "Cathédrale, quartier de la Cité et musée national de la porcelaine." },
      { title: "Aéroport de Limoges", desc: "Transfert porte-à-porte pour vos vols régionaux." },
      { title: "Quartiers d'affaires", desc: "Hôpitaux, campus et sièges d'entreprise — service corporate." },
    ],
    circuits: [
      { title: "Trajet direct", duration: "Aller simple", desc: "Saintes, Cognac ou La Rochelle → Limoges centre, gare ou aéroport." },
      { title: "Aller-retour business", duration: "1 jour", desc: "Départ matinal, retour le soir, idéal pour une réunion." },
      { title: "Limoges & correspondance", duration: "Sur mesure", desc: "Trajet long puis liaison vers Poitiers, Toulouse ou Paris." },
    ],
    nearby: [
      { label: "Panazol", distance: "6 km", duration: "12 min" },
      { label: "Isle", distance: "5 km", duration: "12 min" },
      { label: "Couzeix", distance: "7 km", duration: "15 min" },
      { label: "Feytiat", distance: "8 km", duration: "15 min" },
      { label: "Aixe-sur-Vienne", distance: "12 km", duration: "18 min" },
      { label: "Saint-Junien", distance: "30 km", duration: "35 min" },
      { label: "Bellac", distance: "45 km", duration: "45 min" },
      { label: "Poitiers", distance: "130 km", duration: "1h30" },
    ],
  },
  {
    slug: "poitiers",
    label: "Poitiers",
    region: "Vienne",
    heroImage: "/assets/images/cities/poitiers-01.jpg",
    cardImage: "/assets/images/cities/poitiers-02.jpg",
    tagline: "Carrefour TGV du Centre-Ouest",
    intro:
      "Poitiers est l'une des liaisons longues les plus fluides depuis la Charente-Maritime. HEXAMOB vous y conduit vers le centre historique, Futuroscope ou la gare TGV — trajet d'environ 2h, idéal avant une correspondance Paris ou un événement.",
    toDo: [
      "Relier Poitiers en VTC (environ 1h45 depuis La Rochelle, 1h15 depuis Surgères)",
      "Arriver gare TGV, centre ou Futuroscope",
      "Enchaîner vers Tours, Limoges ou Paris",
      "Prévoir un aller-retour journée",
      "Combiner transfert gare et visite du Futuroscope",
    ],
    visits: [
      { title: "Centre historique", desc: "Notre-Dame-la-Grande, Palais de Justice et plateau piétonnier." },
      { title: "Gare de Poitiers", desc: "Hub TGV Atlantique — prise en charge ou dépose à quai." },
      { title: "Futuroscope", desc: "Parc et hôtels à 15 minutes — navettes familles et groupes." },
      { title: "Campus & affaires", desc: "Université, CHU et zones d'activités — service corporate." },
    ],
    circuits: [
      { title: "Trajet direct", duration: "Aller simple", desc: "La Rochelle, Surgères ou Saintes → Poitiers centre, gare ou Futuroscope." },
      { title: "Poitiers & Futuroscope", duration: "Journée", desc: "Arrivée le matin, parc ou rendez-vous, retour le soir." },
      { title: "Correspondance TGV", duration: "Sur mesure", desc: "Trajet long puis dépose gare pour Paris, Bordeaux ou Tours." },
    ],
    nearby: [
      { label: "Buxerolles", distance: "4 km", duration: "10 min" },
      { label: "Saint-Benoît", distance: "6 km", duration: "12 min" },
      { label: "Mignaloux-Beauvoir", distance: "8 km", duration: "15 min" },
      { label: "Chasseneuil-du-Poitou", distance: "10 km", duration: "15 min" },
      { label: "Futuroscope", distance: "12 km", duration: "18 min" },
      { label: "Châtellerault", distance: "35 km", duration: "35 min" },
      { label: "Niort", distance: "75 km", duration: "55 min" },
      { label: "Tours", distance: "105 km", duration: "1h10" },
    ],
  },
  {
    slug: "toulouse",
    label: "Toulouse",
    region: "Occitanie",
    heroImage: "/assets/images/cities/toulouse-01.jpg",
    cardImage: "/assets/images/cities/toulouse-02.jpg",
    tagline: "Ville rose & hub aéronautique",
    intro:
      "Pour vos déplacements vers Toulouse, HEXAMOB propose un trajet long premium depuis la Charente-Maritime : confort, pauses, discrétion. Arrivée directe en centre-ville, à Matabiau, à Blagnac ou dans les quartiers aéronautiques.",
    toDo: [
      "Voyager en confort vers Toulouse (environ 4h30 depuis La Rochelle)",
      "Arriver hôtel, gare Matabiau ou aéroport de Blagnac",
      "Prévoir des pauses autoroute sur demande",
      "Enchaîner vers un rendez-vous Airbus, CHU ou centre-ville",
      "Organiser un aller-retour sur deux jours",
    ],
    visits: [
      { title: "Capitole & centre", desc: "Place du Capitole, Garonne et hôtels du centre — dépose porte-à-porte." },
      { title: "Gare Matabiau", desc: "Hub TGV et intercités — prise en charge ou dépose à quai." },
      { title: "Aéroport Toulouse-Blagnac", desc: "Transfert long puis correspondance vol, ou arrivée directe depuis la Charente-Maritime." },
      { title: "Quartier aéronautique", desc: "Airbus, sièges et zones d'activités de Blagnac et Colomiers." },
    ],
    circuits: [
      { title: "Trajet direct", duration: "Aller simple", desc: "La Rochelle, Saintes ou Cognac → Toulouse centre, Matabiau ou Blagnac." },
      { title: "Aller-retour business", duration: "1–2 jours", desc: "Départ matinal, retour sur rendez-vous, véhicule premium garanti." },
      { title: "Toulouse & aéroport", duration: "Sur mesure", desc: "Trajet long puis transfert Blagnac pour votre correspondance." },
    ],
    nearby: [
      { label: "Blagnac", distance: "8 km", duration: "20 min" },
      { label: "Colomiers", distance: "10 km", duration: "22 min" },
      { label: "Balma", distance: "7 km", duration: "18 min" },
      { label: "Tournefeuille", distance: "10 km", duration: "22 min" },
      { label: "Ramonville", distance: "8 km", duration: "20 min" },
      { label: "Labège", distance: "12 km", duration: "25 min" },
      { label: "Muret", distance: "20 km", duration: "30 min" },
      { label: "Albi", distance: "75 km", duration: "1h10" },
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
  "Surgères",
] as const;

const cityHeroImageSlugs: Partial<Record<string, string>> = {
  "la-rochelle": "la-rochelle",
  saintes: "saintes",
  rochefort: "rochefort",
  surgeres: "surgeres",
  royan: "royan",
  cognac: "cognac",
  "ile-de-re": "ile-de-re",
  "ile-d-oleron": "ile-oleron",
  bordeaux: "bordeaux",
  nantes: "nantes",
  paris: "paris",
  bayonne: "bayonne",
  angers: "angers",
  tours: "tours",
  arcachon: "arcachon",
  limoges: "limoges",
  poitiers: "poitiers",
  toulouse: "toulouse",
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
