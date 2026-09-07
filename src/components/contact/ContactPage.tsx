"use client";

import { useEffect } from "react";
import AmbientGlow from "@/components/layout/AmbientGlow";
import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { bootPageScroll } from "@/lib/hexamob/animations/bootPageScroll";
import { companyLegal } from "@/lib/hexamob/legal";

export default function ContactPage() {
  useEffect(() => bootPageScroll(), []);

  return (
    <>
      <Header />
      <AmbientGlow />

      <div className="scroller fixed top-0 left-0 z-[99999] h-screen w-screen">
        <div id="main">
          <section className="relative flex min-h-[45vh] w-screen items-end overflow-hidden bg-page pt-[18vw] max-lg:pt-[28vw]">
            <div
              className="arrow pointer-events-none absolute z-[1] h-[70vh] w-[70vh] rotate-[135deg] bg-gradient-to-br from-gold-800/40 via-transparent to-transparent opacity-80 max-lg:h-[50vh] max-lg:w-[50vh]"
              style={{ top: "10vh", left: "-40vh" }}
            />
            <div className="relative z-10 w-full p-[3vw] pb-[6vw]">
              <p className="mb-[1vw] text-[0.75vw] uppercase tracking-[0.3em] text-gold-500 max-lg:mb-[2vw] max-lg:text-[2.5vw]">
                Nous contacter
              </p>
              <h1 className="title font-type1 text-[7vw] font-thin uppercase leading-[0.95] text-white max-lg:text-[12vw]">
                Contact
              </h1>
            </div>
          </section>

          <section className="relative w-screen overflow-hidden bg-page px-[3vw] pb-[12vw] pt-[4vw] max-lg:pb-[20vw]">
            <div className="mx-auto grid max-w-[72vw] grid-cols-[1fr_1.4fr] gap-[4vw] max-lg:max-w-none max-lg:grid-cols-1 max-lg:gap-[8vw]">
              <aside className="text-white/75 max-lg:text-[3.2vw]">
                <p className="mb-[2vw] leading-relaxed max-lg:mb-[4vw]">
                  Pour toute demande de devis, réservation ou question sur nos services VTC en
                  Charente-Maritime (et France), utilisez le formulaire ci-contre.
                </p>
                {/* 
                <ul className="space-y-[1vw] max-lg:space-y-[3vw]">
                  <li>
                    <span className="mb-[0.3vw] block text-[0.7vw] uppercase tracking-[0.15em] text-gold-500 max-lg:mb-[1vw] max-lg:text-[2.5vw]">
                      E-mail
                    </span>
                    <a
                      href={`mailto:${companyLegal.email}`}
                      className="text-white hover:text-gold-500"
                    >
                      {companyLegal.email}
                    </a>
                  </li>
                  <li>
                    <span className="mb-[0.3vw] block text-[0.7vw] uppercase tracking-[0.15em] text-gold-500 max-lg:mb-[1vw] max-lg:text-[2.5vw]">
                      Téléphone
                    </span>
                    <a
                      href={`tel:${companyLegal.phone.replace(/\s/g, "")}`}
                      className="text-white hover:text-gold-500"
                    >
                      {companyLegal.phone}
                    </a>
                  </li>
                </ul>*/}
                <p className="mt-[2vw] text-[0.7vw] text-white/45 max-lg:mt-[5vw] max-lg:text-[2.5vw]">
                  Réponse rapide ou sous 24 à 48 h ouvrées selon la demande.
                </p>
              </aside>

              <div className="relative">
                <ContactForm />
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
}
