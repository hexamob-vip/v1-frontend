import type { MetadataRoute } from "next";
import { buildSitemapEntries } from "@/lib/hexamob/seo-routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return buildSitemapEntries();
}
