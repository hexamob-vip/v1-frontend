import type { Metadata } from "next";
import EntreprisePage from "@/components/entreprise/EntreprisePage";

export const metadata: Metadata = {
  title: "Entreprise — HEXAMOB VTC Premium Charente-Maritime",
  description:
    "Découvrez HEXAMOB : notre histoire depuis 2007, notre engagement qualité, nos certifications VTC et notre flotte premium Mercedes Classe S et Lexus ES.",
};

export default function Page() {
  return <EntreprisePage />;
}
