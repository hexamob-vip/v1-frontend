export type ServiceFeature = {
  title: string;
  desc: string;
};

export type Service = {
  slug: string;
  label: string;
  shortLabel: string;
  className: string;
  number: string;
  heroImage: string;
  cardImage: string;
  cardPosition?: string;
  tagline: string;
  description: string;
  intro: string;
  features: ServiceFeature[];
  highlights: string[];
  destinations?: string[];
};

export const services: Service[] = [
  {
    slug: "trajets-standards",
    label: "Trajets standards",
    shortLabel: "Standards",
    className: "link-trajets-standards",
    number: "01",
    heroImage: "/assets/images/hexamob-vtc-chauffeur-haut-gamme-la-rochelle.jpg",
    cardImage: "/assets/images/hexamob-vtc-chauffeur-haut-gamme-la-rochelle-02.jpg",
    tagline: "Aéroport, gare, centre-ville",
    description:
      "Vos déplacements quotidiens en VTC premium : transferts aéroport, gare, centre-ville et rendez-vous professionnels en Charente-Maritime.",
    intro:
      "HEXAMOB assure vos trajets standards avec ponctualité, confort et élégance. Que ce soit pour un vol matinal, une arrivée en gare ou un rendez-vous en centre-ville, nos chauffeurs professionnels vous accueillent et vous conduisent en toute sérénité, véhicule premium entretenu et service personnalisé.",
    features: [
      {
        title: "Transferts aéroport",
        desc: "La Rochelle, Bordeaux-Mérignac, Nantes Atlantique — suivi de vol, accueil personnalisé avec pancarte, aide aux bagages.",
      },
      {
        title: "Transferts gare",
        desc: "Gares de La Rochelle, Saintes, Royan, Rochefort — prise en charge ponctuelle à quai ou devant l'entrée principale.",
      },
      {
        title: "Centre-ville & hôtels",
        desc: "Déplacements locaux, hôtels, restaurants, centres d'affaires — service discret et raffiné au cœur de la Charente-Maritime.",
      },
      {
        title: "Rendez-vous professionnels",
        desc: "Trajets réguliers pour vos réunions, déplacements clients et événements corporate locaux.",
      },
    ],
    highlights: [
      "Réservation 24/7",
      "Suivi GPS en temps réel",
      "Véhicules premium entretenus",
      "Chauffeurs formés VTC",
      "Eau et Wi-Fi à bord",
      "Facturation entreprise",
    ],
    destinations: ["La Rochelle", "Saintes", "Rochefort", "Royan", "Cognac", "Île de Ré"],
  },
  {
    slug: "trajets-longs",
    label: "Trajets longs",
    shortLabel: "Longs",
    className: "link-trajets-longs",
    number: "02",
    heroImage: "/assets/images/hexamob-vtc-chauffeur-privee-saintes-charente.jpg",
    cardImage: "/assets/images/hexamob-vtc-chauffeur-privee-rochefort-charente.jpg",
    tagline: "Interurbains & grandes distances",
    description:
      "Voyages confortables vers Bordeaux, Nantes, Paris et toutes les destinations de Charente-Maritime avec chauffeur professionnel.",
    intro:
      "Pour vos trajets interurbains, HEXAMOB vous propose un transport premium sur grande distance. Reposez-vous à bord de véhicules haut de gamme pendant que votre chauffeur optimise l'itinéraire. Idéal pour les déplacements d'affaires, les week-ends ou les connexions aéroport sur de longues distances.",
    features: [
      {
        title: "Bordeaux",
        desc: "Trajet direct depuis La Rochelle, Saintes ou Royan — environ 2h de confort premium, idéal avant un vol ou une réunion.",
      },
      {
        title: "Nantes",
        desc: "Liaison fluide vers Nantes Atlantique ou le centre-ville — service ponctuel adapté à vos horaires de vol ou de train.",
      },
      {
        title: "Paris",
        desc: "Trajets interurbains vers la capitale — voyage de nuit ou de jour, pauses sur demande, service haut de gamme garanti.",
      },
      {
        title: "Charente-Maritime",
        desc: "La Rochelle, Royan, Saintes, Cognac, l'Île de Ré et l'Île d'Oléron — circuits sur mesure dans le département.",
      },
    ],
    highlights: [
      "Itinéraire optimisé",
      "Pauses sur demande",
      "Confort longue distance",
      "Tarif forfaitaire",
      "Multi-passagers",
      "Bagages volumineux",
    ],
    destinations: ["Bordeaux", "Nantes", "Paris", "La Rochelle", "Cognac", "Île d'Oléron"],
  },
  {
    slug: "sur-mesure",
    label: "Services sur mesure",
    shortLabel: "Sur mesure",
    className: "link-sur-mesure",
    number: "03",
    heroImage: "/assets/images/hexamob-vtc-chauffeur-privee-rochefort-charente.jpg",
    cardImage: "/assets/images/hexamob-vtc-chauffeur-haut-gamme-la-rochelle-evjf-02.jpg",
    cardPosition: "bottom center",
    tagline: "Mariages, événements, transferts VIP",
    description:
      "Prestations VTC personnalisées pour mariages, galas, événements privés et transferts d'entreprise d'exception.",
    intro:
      "Chaque événement mérite un service à la hauteur. HEXAMOB conçoit des prestations sur mesure : décoration discrète du véhicule, coordination avec les organisateurs, navettes invités, mise à disposition à l'heure ou à la journée. Mariages en Charente-Maritime, soirées d'entreprise ou cérémonies — nous sublimons chaque moment.",
    features: [
      {
        title: "Mariages",
        desc: "Transfert des mariés, navettes invités, coordination avec le wedding planner — élégance et ponctualité garanties.",
      },
      {
        title: "Événements privés",
        desc: "Galas, anniversaires, soirées VIP — mise à disposition de véhicules premium avec chauffeur dédié.",
      },
      {
        title: "Transferts d'entreprise",
        desc: "Accueil de dirigeants, clients internationaux et délégations — service protocolaire et discret.",
      },
      {
        title: "Mise à disposition",
        desc: "Véhicule et chauffeur à l'heure, demi-journée ou journée entière — flexibilité totale selon votre programme.",
      },
    ],
    highlights: [
      "Coordination événementielle",
      "Flotte Mercedes Classe S",
      "Chauffeur en tenue sobre",
      "Navettes multi-véhicules",
      "Devis personnalisé",
      "Service protocolaire",
    ],
  },
  {
    slug: "touristes",
    label: "Services touristes",
    shortLabel: "Touristes",
    className: "link-touristes",
    number: "04",
    heroImage: "/assets/images/hexamob-vtc-chauffeur-haut-gamme-ile-de-re-aeroport-02.jpg",
    cardImage: "/assets/images/hexamob-vtc-chauffeur-haut-gamme-ile-de-re-aeroport.jpg",
    tagline: "Visites guidées & circuits VTC",
    description:
      "Découvrez la Charente-Maritime en VTC premium : visites guidées, circuits personnalisés et tour des vignobles de Cognac.",
    intro:
      "Explorez la Charente-Maritime autrement. Nos chauffeurs connaissent intimement le territoire et vous emmènent au-delà des sentiers battus : vignobles de Cognac, ports de La Rochelle, plages de Royan, villages de l'Île de Ré. Circuits à la carte, demi-journée ou journée complète, avec commentaires et pauses gourmandes.",
    features: [
      {
        title: "Visites guidées VTC",
        desc: "La Rochelle, Fort Boyard, ports et marchés — votre chauffeur-guide vous fait découvrir les trésors locaux.",
      },
      {
        title: "Tour des vignobles de Cognac",
        desc: "Circuit premium entre maisons de Cognac, dégustations et visites de chais — une expérience inoubliable.",
      },
      {
        title: "Circuits personnalisés",
        desc: "Itinéraire sur mesure selon vos envies : plages, patrimoine, gastronomie ou nature — à votre rythme.",
      },
      {
        title: "Excursions Île de Ré & Oléron",
        desc: "Journée complète sur les îles : phares, villages typiques, ostréiculture et couchers de soleil.",
      },
    ],
    highlights: [
      "Chauffeur-guide local",
      "Circuits à la carte",
      "Demi-journée ou journée",
      "Dégustations Cognac",
      "Multi-langues",
      "Groupes & familles",
    ],
    destinations: ["Cognac", "La Rochelle", "Île de Ré", "Royan", "Saintes", "Île d'Oléron"],
  },
  {
    slug: "entreprises",
    label: "Services entreprises",
    shortLabel: "Entreprises",
    className: "link-services-entreprises",
    number: "05",
    heroImage: "/assets/images/hexamob-vtc-chauffeur-haut-gamme-ile-de-re-aeroport.jpg",
    cardImage: "/assets/images/hexamob-vtc-chauffeur-haut-gamme-ile-de-re-aeroport-02.jpg",
    tagline: "Abonnements, flotte, trajets réguliers",
    description:
      "Solutions VTC pour entreprises : abonnements, trajets réguliers, gestion de flotte et facturation centralisée.",
    intro:
      "HEXAMOB accompagne les entreprises de Charente-Maritime et au-delà avec des solutions de mobilité premium adaptées à vos besoins opérationnels. Abonnements mensuels, trajets réguliers pour vos équipes, gestion de flotte dédiée et reporting centralisé — un interlocuteur unique pour simplifier vos déplacements professionnels.",
    features: [
      {
        title: "Abonnements entreprise",
        desc: "Forfaits mensuels adaptés à votre volume de trajets — tarifs préférentiels et facturation simplifiée.",
      },
      {
        title: "Trajets réguliers",
        desc: "Navettes quotidiennes pour vos collaborateurs, liaisons gare-aéroport-bureaux — horaires garantis.",
      },
      {
        title: "Gestion de flotte",
        desc: "Mise à disposition de véhicules premium avec chauffeurs dédiés — solution clé en main pour vos besoins.",
      },
      {
        title: "Reporting & facturation",
        desc: "Tableau de bord centralisé, facturation mensuelle unique, suivi des dépenses par service ou collaborateur.",
      },
    ],
    highlights: [
      "Interlocuteur dédié",
      "Facturation centralisée",
      "Tarifs négociés",
      "Reporting mensuel",
      "Service 24/7",
      "Multi-sites",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getOtherServices(slug: string): Service[] {
  return services.filter((service) => service.slug !== slug);
}
