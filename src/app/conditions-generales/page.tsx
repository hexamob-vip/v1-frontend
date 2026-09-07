import type { Metadata } from "next";
import ConditionsGeneralesPage from "@/components/legal/ConditionsGeneralesPage";
import { absoluteUrl } from "@/lib/hexamob/site";

export const metadata: Metadata = {
  title: "Conditions générales — HEXAMOB VTC Charente-Maritime",
  description:
    "Conditions générales HEXAMOB : réservation par téléphone ou formulaire de contact, acompte de 15 % et modalités des prestations VTC.",
  alternates: {
    canonical: absoluteUrl("/conditions-generales"),
  },
};

export default function Page() {
  return <ConditionsGeneralesPage />;
}
