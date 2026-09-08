const DEFAULT_SITE_URL = "https://hexamob.vip";

export const siteName = "HEXAMOB - Chauffeur VTC Premium";

export const siteDescription =
  "HEXAMOB est une société VTC premium en Charente-Maritime, spécialisée dans le transport avec chauffeur depuis 2020.";

export const defaultOgImagePath = "/assets/images/default.jpg";

export const defaultOgImage = {
  url: defaultOgImagePath,
  width: 1920,
  height: 1080,
  alt: siteName,
} as const;

function normalizeSiteUrl(url: string): string {
  const trimmed = url.trim().replace(/\/+$/, "");
  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }
  return `https://${trimmed}`;
}

export function getSiteUrl(): string {
  const configured =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    process.env.SITE_URL?.trim();

  if (configured) {
    return normalizeSiteUrl(configured);
  }

  // Never use VERCEL_URL on production — it points to a deployment URL, not the custom domain.
  if (process.env.VERCEL_ENV === "production") {
    const productionDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
    if (productionDomain) {
      return normalizeSiteUrl(productionDomain);
    }
    return DEFAULT_SITE_URL;
  }

  if (process.env.VERCEL_URL) {
    return normalizeSiteUrl(process.env.VERCEL_URL);
  }

  return DEFAULT_SITE_URL;
}

export function absoluteUrl(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalizedPath}`;
}
