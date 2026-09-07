"use client";

import { useEffect, useState } from "react";
import {
  COOKIE_CONSENT_OPEN_EVENT,
  COOKIE_CONSENT_STORAGE_KEY,
  type CookieConsentChoice,
} from "@/lib/hexamob/cookies";
import { cn } from "@/lib/hexamob/cn";

const privacyPolicyHref = "/confidentialite";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (stored === "accepted" || stored === "rejected") return;

    const timer = window.setTimeout(() => setVisible(true), 800);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const open = () => setVisible(true);
    window.addEventListener(COOKIE_CONSENT_OPEN_EVENT, open);
    return () => window.removeEventListener(COOKIE_CONSENT_OPEN_EVENT, open);
  }, []);

  const saveChoice = (value: CookieConsentChoice) => {
    localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, value);
    setVisible(false);
  };

  return (
    <>
      <div
        className={cn(
          "pointer-events-none fixed inset-0 z-[999997] transition-opacity duration-300",
          visible ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!visible}
      />

      <aside
        role="dialog"
        aria-labelledby="cookie-consent-title"
        aria-modal="true"
        className={cn(
          "pointer-events-auto fixed bottom-[3vw] left-[3vw] z-[999998] w-[28vw] max-w-[420px] rounded-xl border border-white/10 bg-page/95 p-[1.5vw] text-white shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-300 max-lg:bottom-[4vw] max-lg:right-[4vw] max-lg:left-[4vw] max-lg:w-auto max-lg:p-[5vw]",
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-[1vw] opacity-0 max-lg:translate-y-[3vw]",
        )}
      >
        <p className="mb-[0.5vw] text-[0.65vw] uppercase tracking-[0.2em] text-gold-500 max-lg:mb-[2vw] max-lg:text-[2.5vw]">
          Cookies
        </p>
        <h2
          id="cookie-consent-title"
          className="mb-[1vw] font-type1 text-[1.1vw] font-thin leading-snug max-lg:mb-[3vw] max-lg:text-[4.5vw]"
        >
          Votre confidentialité
        </h2>
        <p className="mb-[1.5vw] text-[0.75vw] leading-relaxed text-white/70 max-lg:mb-[4vw] max-lg:text-[2.8vw]">
          Nous utilisons des cookies pour améliorer votre expérience, mesurer l&apos;audience et
          assurer le bon fonctionnement du site. Vous pouvez accepter ou refuser les cookies non
          essentiels.{" "}
          <a
            href={privacyPolicyHref}
            className="text-gold-500 underline-offset-2 hover:underline"
          >
            Politique de confidentialité
          </a>
          .
        </p>
        <div className="flex flex-wrap gap-[0.6vw] max-lg:gap-[2vw]">
          <button
            type="button"
            onClick={() => saveChoice("accepted")}
            className="rounded-full border border-gold-800/60 bg-gold-800/20 px-[1vw] py-[0.4vw] text-[0.65vw] uppercase tracking-wide text-white transition hover:bg-gold-800/40 max-lg:px-[3vw] max-lg:py-[1.5vw] max-lg:text-[2.5vw]"
          >
            Tout accepter
          </button>
          <button
            type="button"
            onClick={() => saveChoice("rejected")}
            className="rounded-full border border-white/20 px-[1vw] py-[0.4vw] text-[0.65vw] uppercase tracking-wide text-white/70 transition hover:border-white/40 hover:text-white max-lg:px-[3vw] max-lg:py-[1.5vw] max-lg:text-[2.5vw]"
          >
            Refuser
          </button>
        </div>
      </aside>
    </>
  );
}
