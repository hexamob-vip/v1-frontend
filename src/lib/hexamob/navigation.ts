export const navLinks = [
  { href: "/", label: "Accueil", className: "link-home" },
  { href: "/entreprise", label: "Entreprise", className: "link-entreprise" },
] as const;

export const serviceLinks = [
  {
    href: "/services/trajets-standards",
    label: "Trajets standards",
    className: "link-trajets-standards",
  },
  {
    href: "/services/trajets-longs",
    label: "Trajets longs",
    className: "link-trajets-longs",
  },
  {
    href: "/services/sur-mesure",
    label: "Services sur mesure",
    className: "link-sur-mesure",
  },
  {
    href: "/services/touristes",
    label: "Services touristes",
    className: "link-touristes",
  },
  {
    href: "/services/entreprises",
    label: "Services entreprises",
    className: "link-services-entreprises",
  },
  {
    href: "/services",
    label: "Tous les services",
    className: "link-services",
  },
] as const;

export const footerLinks = [
  { href: "https://hexamob.com/certificaciones/", label: "CERTIFICATIONS" },
  { href: "https://hexamob.com/aviso-legal/", label: "MENTIONS LÉGALES" },
  { href: "https://hexamob.com/proteccion-de-datos/", label: "PROTECTION DES DONNÉES" },
  {
    href: "mailto:environment@hexamob.com?subject=Demande%20de%20politique%20SIG&body=Je%20souhaite%20demander%20la%20politique%20SIG.",
    label: "POLITIQUE SIG",
  },
  { href: "https://hexamob.com/politica-privacidad/", label: "COOKIES" },
  { href: "https://hexamob.com/compliance/", label: "CONFORMITÉ" },
  {
    href: "https://centinela.lefebvre.es/public/concept/2314141?access=V9suRVKLOr1b8hYK%2BlQHoyoAw2bCHMVYiDot8oJoK0Q%3D",
    label: "CANAL DE SIGNALEMENT",
    external: true,
  },
  { href: "https://hexamob.com/next-generation-eu/", label: "Next Generation EU" },
] as const;
