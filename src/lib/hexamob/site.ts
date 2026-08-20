const DEFAULT_SITE_URL = "https://hexamob.vip";

export const siteName = "HEXAMOB - Chauffeur VTC Premium";

export const siteDescription =
  "HEXAMOB est une société VTC premium en Charente-Maritime, spécialisée dans le transport avec chauffeur depuis 2007.";

export function getSiteUrl(): string {
  const configured =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    process.env.SITE_URL?.trim() ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "");

  const base = configured || DEFAULT_SITE_URL;
  return base.replace(/\/+$/, "");
}

export function absoluteUrl(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalizedPath}`;
}
