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

export type FooterLink =
  | { href: string; label: string; external?: boolean }
  | { label: string; action: "cookies" };

export const footerGeneralLinks: FooterLink[] = [
  { href: "/", label: "ACCUEIL" },
  { href: "/entreprise", label: "ENTREPRISE" },
  { href: "/services", label: "SERVICES" },
];

export const footerLegalLinks: FooterLink[] = [
  { href: "/contact", label: "CONTACTEZ-NOUS" },
  { href: "/mentions-legales", label: "MENTIONS LÉGALES" },
  { href: "/conditions-generales", label: "CONDITIONS GÉNÉRALES" },
  { label: "COOKIES", action: "cookies" },
  { href: "/confidentialite", label: "CONFIDENTIALITÉ" },
];

export const footerServiceLinks: FooterLink[] = serviceLinks
  .filter((link) => link.href !== "/services")
  .map((link) => ({
    href: link.href,
    label: link.label.toUpperCase(),
  }));

export const footerActionLinks: FooterLink[] = [
  { href: "/evenements-speciaux", label: "ÉVÉNEMENTS SPÉCIAUX" },
  { href: "/contact", label: "RÉSERVER UNE COURSE" },
];

/** @deprecated Use footerLegalLinks */
export const footerLinks = footerLegalLinks;
