import { services } from "@/lib/hexamob/services";

export type ContactSubjectOption = {
  value: string;
  label: string;
};

export const contactSubjectOptions: ContactSubjectOption[] = [
  ...services.map((service) => ({
    value: service.slug,
    label: service.label,
  })),
  { value: "evenements-speciaux", label: "Événements spéciaux" },
  { value: "general", label: "Général" },
];

export const contactSubjectValues = contactSubjectOptions.map((option) => option.value);

export function getContactSubjectLabel(value: string): string {
  return contactSubjectOptions.find((option) => option.value === value)?.label ?? value;
}

export function resolveContactSubjectFromQuery(query: string | null): string {
  if (!query) return "";

  const normalized = query.trim().toLowerCase();
  const match = contactSubjectOptions.find(
    (option) =>
      option.value === normalized ||
      option.label.toLowerCase() === normalized ||
      option.label.toLowerCase().includes(normalized),
  );

  return match?.value ?? "";
}
