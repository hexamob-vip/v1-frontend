import type { Metadata } from "next";
import EntreprisePage from "@/components/entreprise/EntreprisePage";

export const metadata: Metadata = {
  title: "Entreprise — HEXAMOB VTC Premium Charente-Maritime",
  description:
    "Découvrez HEXAMOB : notre histoire depuis 2020, notre engagement qualité, nos certifications VTC et notre flotte premium Lexus ES 300h, Mercedes Classe V et Tesla Model 3.",
};

export default function Page() {
  return <EntreprisePage />;
}
