import type { Metadata } from "next";
import ConfidentialitePage from "@/components/legal/ConfidentialitePage";
import { absoluteUrl } from "@/lib/hexamob/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité — HEXAMOB VTC Charente-Maritime",
  description:
    "Politique de confidentialité HEXAMOB : collecte des données, cookies, vos droits RGPD et contact pour exercer vos droits.",
  alternates: {
    canonical: absoluteUrl("/confidentialite"),
  },
};

export default function Page() {
  return <ConfidentialitePage />;
}
