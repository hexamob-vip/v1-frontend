export const COOKIE_CONSENT_STORAGE_KEY = "hexamob-cookie-consent";

export const COOKIE_CONSENT_OPEN_EVENT = "hexamob:open-cookie-consent";

export type CookieConsentChoice = "accepted" | "rejected";

export function getCookieConsent(): CookieConsentChoice | null {
  if (typeof window === "undefined") return null;

  const value = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
  if (value === "accepted" || value === "rejected") return value;
  return null;
}

export function setCookieConsent(choice: CookieConsentChoice) {
  localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, choice);
}

export function openCookieConsent() {
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_OPEN_EVENT));
}
