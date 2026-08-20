export type EventType = {
  icon: string;
  title: string;
  desc: string;
  image: string;
  bgPosition?: string;
};

export type EventPackage = {
  name: string;
  tagline: string;
  price: string;
  includes: string[];
  highlight?: boolean;
};

export type ProcessStep = {
  step: string;
  title: string;
  desc: string;
};

export const eventTypes: EventType[] = [
  {
    icon: "01",
    title: "Mariages",
    desc: "Transfert des mariés, navettes invités, coordination avec le wedding planner — élégance et ponctualité pour le plus beau jour de votre vie.",
    image: "/assets/images/hexamob-vtc-chauffeur-privee-voiture-luxe-mariage.jpg",
    bgPosition: "center center",
  },
  {
    icon: "02",
    title: "EVG & EVJF",
    desc: "Enterrements de vie de garçon et de jeune fille en Charente-Maritime : navettes entre hôtels, bars et activités, chauffeur discret et flexible.",
    image: "/assets/images/hexamob-vtc-chauffeur-haut-gamme-la-rochelle-evjf-02.jpg",
    bgPosition: "bottom center",
  },
  {
    icon: "03",
    title: "Anniversaires & galas",
    desc: "Soirées privées, anniversaires marquants et galas — mise à disposition premium avec chauffeur en tenue sobre et service raffiné.",
    image: "/assets/images/hexamob-vtc-chauffeur-haut-gamme-la-rochelle-evjf.jpg",
    bgPosition: "center center",
  },
  {
    icon: "04",
    title: "Réceptions & séminaires",
    desc: "Accueil VIP de vos invités, transferts hôtel-salle, navettes multi-véhicules pour vos événements d'entreprise et réceptions.",
    image: "/assets/images/hexamob-vtc-chauffeur-haut-gamme-la-rochelle-aeroport.jpg",
    bgPosition: "center center",
  },
];

export const packages: EventPackage[] = [
  {
    name: "Éclat",
    tagline: "Mariage",
    price: "Sur devis",
    includes: [
      "Mercedes Classe S pour les mariés",
      "Champagne et eau à bord",
      "Décoration discrète du véhicule",
      "Coordination avec le lieu de réception",
      "Chauffeur en tenue sobre",
    ],
    highlight: true,
  },
  {
    name: "Festif",
    tagline: "EVG / EVJF",
    price: "Sur devis",
    includes: [
      "Navette premium jusqu'à 8 passagers",
      "Itinéraire flexible sur la journée",
      "Pauses et arrêts sur demande",
      "Chauffeur discret et disponible",
      "Option multi-véhicules",
    ],
  },
  {
    name: "Prestige",
    tagline: "Journée complète",
    price: "Sur devis",
    includes: [
      "Mise à disposition véhicule + chauffeur",
      "Demi-journée ou journée entière",
      "Flotte Mercedes Classe S disponible",
      "Navettes invités en option",
      "Devis personnalisé selon votre programme",
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Vous nous contactez",
    desc: "Décrivez votre événement, la date, le nombre d'invités et vos envies — nous répondons sous 24h avec une première proposition.",
  },
  {
    step: "02",
    title: "Devis sur mesure",
    desc: "Forfait tout compris adapté à votre budget : transport, extras, navettes, durée de mise à disposition.",
  },
  {
    step: "03",
    title: "Coordination",
    desc: "Nous échangeons avec vos organisateurs, wedding planner ou lieu de réception pour synchroniser chaque étape.",
  },
  {
    step: "04",
    title: "Le jour J",
    desc: "Chauffeur ponctuel, véhicule impeccable, service discret — vous profitez, nous gérons la logistique.",
  },
];

export const eventHighlights = [
  "Forfaits tout compris",
  "Mercedes Classe S",
  "Navettes multi-véhicules",
  "Champagne à bord",
  "Coordination événementielle",
  "Devis personnalisé",
  "Charente-Maritime",
  "Disponible 24/7",
];
