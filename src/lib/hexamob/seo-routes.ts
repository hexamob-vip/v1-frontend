import type { MetadataRoute } from "next";
import { destinations } from "@/lib/hexamob/destinations";
import { services } from "@/lib/hexamob/services";
import { absoluteUrl, siteDescription, siteName } from "@/lib/hexamob/site";

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

type SeoPage = {
  path: string;
  title: string;
  description: string;
  changeFrequency: ChangeFrequency;
  priority: number;
};

const staticPages: SeoPage[] = [
  {
    path: "/",
    title: "Accueil",
    description: "Chauffeur VTC premium en Charente-Maritime — transferts, trajets longs et services sur mesure.",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/entreprise",
    title: "Entreprise",
    description: "Présentation d'HEXAMOB, société VTC premium en Charente-Maritime depuis 2007.",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/evenements-speciaux",
    title: "Événements spéciaux",
    description: "Prestations VTC pour mariages, galas, événements privés et transferts d'exception.",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/services",
    title: "Services VTC",
    description: "Catalogue des services VTC HEXAMOB : trajets standards, longs, sur mesure, touristes et entreprises.",
    changeFrequency: "weekly",
    priority: 0.9,
  },
];

const servicePages: SeoPage[] = services.map((service) => ({
  path: `/services/${service.slug}`,
  title: service.label,
  description: service.description,
  changeFrequency: "monthly" as const,
  priority: 0.8,
}));

const destinationPages: SeoPage[] = destinations.map((destination) => ({
  path: `/destinations/${destination.slug}`,
  title: destination.label,
  description: destination.intro,
  changeFrequency: "monthly" as const,
  priority: 0.7,
}));

export const seoPages: SeoPage[] = [...staticPages, ...servicePages, ...destinationPages];

export function buildSitemapEntries(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return seoPages.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}

export function buildLlmsTxt(): string {
  const lines = [
    `# ${siteName}`,
    "",
    `> ${siteDescription}`,
    "",
    "HEXAMOB propose un service de chauffeur privé premium en Charente-Maritime : transferts aéroport et gare, trajets interurbains, prestations sur mesure pour mariages et événements, circuits touristiques et solutions entreprise.",
    "",
    "## Pages principales",
    "",
    ...staticPages.map(
      (page) => `- [${page.title}](${absoluteUrl(page.path)}): ${truncate(page.description, 120)}`,
    ),
    "",
    "## Services VTC",
    "",
    ...servicePages.map(
      (page) => `- [${page.title}](${absoluteUrl(page.path)}): ${truncate(page.description, 120)}`,
    ),
    "",
    "## Destinations",
    "",
    ...destinationPages.map(
      (page) => `- [${page.title}](${absoluteUrl(page.path)}): ${truncate(page.description, 120)}`,
    ),
    "",
    "## Contact",
    "",
    "- [Contact](mailto:contact@hexamob.vip): Réservations et demandes de devis VTC en Charente-Maritime.",
  ];

  return `${lines.join("\n")}\n`;
}

function truncate(value: string, maxLength: number): string {
  const normalized = value.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) return normalized;
  return `${normalized.slice(0, maxLength - 1).trimEnd()}…`;
}
