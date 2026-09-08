import { getSiteUrl } from "@/lib/hexamob/site";

export const companyLegal = {
  name: "HEXAMOB",
  legalForm: "Société à responsabilité limitée (SARL)",
  address: {
    street: "8 Impasse des Prises de Mai",
    postalCode: "17430",
    city: "Tonnay-Charente",
    country: "France",
  },
  siren: "945 186 617",
  siret: "945 186 617 00011",
  vat: "FR88945186617",
  rcs: "Saintes",
  capital: "500 €",
  activity:
    "Exploitation de véhicule de transport avec chauffeur (VTC) — code NAF 4932Z",
  creationDate: "10 juillet 2025",
  director: "Anthony JOSON",
  email: "contact@hexamob.vip",
  phone: "+33 6 72 10 24 11",
} as const;

export const hostingLegal = {
  name: "Vercel Inc.",
  address: "440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis",
  website: "https://vercel.com",
} as const;

export function getSiteDomain(): string {
  try {
    return new URL(getSiteUrl()).hostname;
  } catch {
    return "hexamob.vip";
  }
}
