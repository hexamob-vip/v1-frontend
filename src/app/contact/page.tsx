import { Suspense } from "react";
import type { Metadata } from "next";
import ContactPage from "@/components/contact/ContactPage";
import { absoluteUrl } from "@/lib/hexamob/site";

export const metadata: Metadata = {
  title: "Contact — HEXAMOB VTC Charente-Maritime",
  description:
    "Contactez HEXAMOB pour une réservation VTC, un devis ou toute question. Formulaire sécurisé avec réponse sous 24 à 48 h.",
  alternates: {
    canonical: absoluteUrl("/contact"),
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <ContactPage />
    </Suspense>
  );
}
