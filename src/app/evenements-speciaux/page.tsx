import type { Metadata } from "next";
import EvenementsSpeciauxPage from "@/components/evenements/EvenementsSpeciauxPage";

export const metadata: Metadata = {
  title: "Événements spéciaux — HEXAMOB VTC Premium Charente-Maritime",
  description:
    "Mariages, EVG, EVJF, galas et réceptions en VTC premium. Forfaits tout compris : transport, champagne, navettes et coordination sur mesure en Charente-Maritime.",
};

export default function Page() {
  return <EvenementsSpeciauxPage />;
}
