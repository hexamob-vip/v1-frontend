import type { Metadata } from "next";
import MentionsLegalesPage from "@/components/legal/MentionsLegalesPage";
import { absoluteUrl } from "@/lib/hexamob/site";

export const metadata: Metadata = {
  title: "Mentions légales — HEXAMOB VTC Charente-Maritime",
  description:
    "Mentions légales du site HEXAMOB : éditeur, directeur de publication, hébergement Vercel et coordonnées de la société VTC basée à Tonnay-Charente.",
  alternates: {
    canonical: absoluteUrl("/mentions-legales"),
  },
};

export default function Page() {
  return <MentionsLegalesPage />;
}
