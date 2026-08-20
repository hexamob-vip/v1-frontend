import type { Metadata } from "next";
import ServicesPage from "@/components/services/ServicesPage";

export const metadata: Metadata = {
  title: "Services VTC — HEXAMOB Premium Charente-Maritime",
  description:
    "Découvrez nos services VTC premium : trajets standards, trajets longs, services sur mesure, circuits touristiques et solutions entreprise en Charente-Maritime.",
};

export default function Page() {
  return <ServicesPage />;
}
