"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AmbientGlow from "@/components/layout/AmbientGlow";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DestinationsStrip from "@/components/layout/DestinationsStrip";
import HexamobButton from "@/components/layout/HexamobButton";
import { bootPageScroll } from "@/lib/hexamob/animations/bootPageScroll";
import { initEvenementsAnimations } from "@/lib/hexamob/animations/evenementsAnimations";
import { eventHighlights, eventTypes, packages, processSteps } from "@/lib/hexamob/evenements";

const sectionClass = "relative flex w-screen overflow-hidden";
const titleClass = "title p-[3vw] font-type1 text-[5vw] font-thin leading-none text-white max-lg:text-[8vw]";
const h3Class = "text-[1.2vw] uppercase text-gold-500 max-lg:text-[3.5vw]";
const lineClass = "line absolute -top-[3vw] h-px w-full origin-left bg-white/50 max-lg:-top-[4vw]";

export default function EvenementsSpeciauxPage() {
  useEffect(() => bootPageScroll(initEvenementsAnimations), []);

  return (
    <>
      <Header />
      <AmbientGlow />

      <div className="scroller fixed top-0 left-0 z-[99999] h-screen w-screen">
        <div id="main">
          {/* Hero */}
          <section
            id="hero-evenements"
            className={`${sectionClass} min-h-screen items-end justify-start bg-[url('/assets/images/hexamob-vtc-chauffeur-privee-rochefort-charente.jpg')] bg-cover bg-center`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-page via-page/70 to-page/40" />
            <div
              className="arrow absolute z-[9] h-[70vh] w-[70vh] rotate-[135deg] bg-gradient-to-br from-gold-800/50 via-transparent to-transparent opacity-80 max-lg:h-[50vh] max-lg:w-[50vh]"
              style={{ top: "20vh", left: "-53vh" }}
            />
            <div
              className="arrow absolute z-[9] h-[70vh] w-[70vh] rotate-[135deg] bg-gradient-to-br from-gold-800/50 via-transparent to-transparent opacity-80 max-lg:h-[50vh] max-lg:w-[50vh]"
              style={{ top: "20vh", left: "-23vh" }}
            />
            <div className="relative z-10 w-full p-[3vw] pb-[8vw]">
              <p className="mb-[1vw] text-[1vw] uppercase tracking-[0.3em] text-gold-500 max-lg:text-[3vw]">
                Trajets sur mesure
              </p>
              <h1 className="font-type1 text-[9vw] font-thin uppercase leading-[0.9] text-white max-lg:text-[13vw]">
                Événements
                <br />
                spéciaux
              </h1>
              <div className="mt-[2vw] flex items-end gap-[4vw] max-lg:mt-[4vw] max-lg:flex-col max-lg:items-start">
                <p className="w-[45vw] text-white/80 max-lg:w-full">
                  Mariages, enterrements de vie de garçon, galas et réceptions — forfaits tout compris avec transport
                  premium, champagne et coordination sur mesure en Charente-Maritime.
                </p>
                <HexamobButton
                  href="tel:+33672102411"
                  className="shrink-0 text-white"
                >
                  Demander un devis
                </HexamobButton>
              </div>
            </div>
          </section>

          {/* Intro */}
          <section id="intro-evenements" className={`${sectionClass} flex-col py-[10vw] max-lg:py-[20vw]`}>
            <div className="mx-[3vw] grid w-[94vw] grid-cols-[1fr_1.2fr] gap-[6vw] max-lg:grid-cols-1 max-lg:gap-[6vw]">
              <div>
                <div className="relative mb-[3vw]">
                  <div className={lineClass} />
                  <h3 className={h3Class}>Notre promesse</h3>
                </div>
                <span className="mb-[2vw] block font-type1 text-[10vw] leading-none text-white/10 max-lg:text-[18vw]">
                  VTC
                </span>
                <h2 className={`${titleClass} !p-0`}>
                  Chaque moment
                  <br />
                  mérite l&apos;exception.
                </h2>
              </div>
              <article className="flex flex-col justify-end text-white/80">
                <p>
                  HEXAMOB conçoit des prestations VTC sur mesure pour vos événements les plus précieux. De la
                  coordination avec votre wedding planner aux navettes festives pour un EVG sur l&apos;Île de Ré, nous
                  sublimons chaque instant avec des véhicules premium, des chauffeurs discrets et des forfaits pensés
                  pour vous simplifier la vie.
                </p>
                <p className="mt-[2vw]">
                  Transport + champagne pour votre mariage, navette premium pour votre enterrement de vie de garçon,
                  mise à disposition pour une réception d&apos;entreprise — dites-nous votre projet, nous bâtissons le
                  forfait idéal.
                </p>
              </article>
            </div>
          </section>

          {/* Event types */}
          <section id="types-evenements" className={`${sectionClass} flex-col  py-[10vw] max-lg:py-[20vw]`}>
            <div className="relative mx-[3vw] mb-[6vw]">
              <div className={lineClass} />
              <h3 className={h3Class}>Vos occasions</h3>
              <h2 className={`${titleClass} !p-0 !pt-[2vw]`}>
                Des trajets
                <br />
                pour chaque célébration.
              </h2>
            </div>

            <div className="mx-[3vw] grid w-[94vw] grid-cols-2 gap-[2vw] max-lg:grid-cols-1 max-lg:gap-[6vw]">
              {eventTypes.map((event) => (
                <div
                  key={event.title}
                  className="event-card group overflow-hidden rounded-xl border border-white/10 transition-colors hover:border-gold-800/40 bg-page/90 backdrop-blur-lg"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 94vw, 47vw"
                      style={{ objectPosition: event.bgPosition ?? "center center" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-page via-page/40 to-transparent" />
                    <span className="absolute left-[2vw] top-[2vw] font-type1 text-[5vw] leading-none text-white/20 max-lg:text-[10vw]">
                      {event.icon}
                    </span>
                    <h3 className={`${h3Class} absolute bottom-[2vw] left-[2vw] max-lg:bottom-[4vw] max-lg:left-[4vw]`}>
                      {event.title}
                    </h3>
                  </div>
                  <p className="p-[2vw] text-white/70 max-lg:p-[4vw]">{event.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Image interlude */}
          <section className={`${sectionClass} destination-banner h-[55vh] max-lg:h-[38vh]`}>
            <div className="relative h-full w-full overflow-hidden">
              <div className="destination-banner-media absolute inset-x-0 top-0 h-[150%] w-full will-change-transform">
                <img
                  src="/assets/images/hexamob-vtc-chauffeur-haut-gamme-la-rochelle.jpg"
                  alt="Chauffeur VTC premium HEXAMOB à La Rochelle"
                  className="h-full w-full object-cover"
                  onLoad={() => {
                    import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => ScrollTrigger.refresh());
                  }}
                />
              </div>
              <div className="absolute inset-0 z-[1] bg-page/55" />
              <div className="relative z-10 flex h-full w-full items-center justify-center p-[3vw]">
                <blockquote className="title max-w-[75vw] text-center font-type1 text-[3.8vw] font-thin italic leading-snug text-white max-lg:text-[6vw]">
                  « Transport + champagne pour votre mariage — nous nous occupons du reste. »
                </blockquote>
              </div>
            </div>
          </section>

          {/* Packages */}
          <section id="forfaits" className={`${sectionClass} flex-col py-[10vw] max-lg:py-[20vw]`}>
            <div className="relative mx-[3vw] mb-[6vw]">
              <div className={lineClass} />
              <h3 className={h3Class}>Forfaits tout compris</h3>
              <h2 className={`${titleClass} !p-0 !pt-[2vw]`}>
                Des formules
                <br />
                clés en main.
              </h2>
              <p className="mt-[2vw] w-[50vw] text-white/60 max-lg:w-full">
                Exemples de prestations — chaque forfait est personnalisable selon votre événement, votre budget et vos
                envies.
              </p>
            </div>

            <div className="mx-[3vw] grid w-[94vw] grid-cols-3 gap-[2vw] max-lg:grid-cols-1 max-lg:gap-[6vw]">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`package-card relative flex flex-col rounded-xl border p-[2.5vw] max-lg:p-[5vw] ${
                    pkg.highlight
                      ? "border-gold-800/60 bg-gold-800/5"
                      : "border-white/10 bg-transparent"
                  }`}
                >
                  {pkg.highlight && (
                    <span className="absolute top-[1vw] right-[1vw] mb-[1vw] text-[0.75vw] uppercase tracking-[0.2em] text-gold-500 max-lg:text-[2.5vw]">
                      Le plus demandé
                    </span>
                  )}
                  <p className="text-[0.9vw] uppercase text-gold-500 max-lg:text-[2.8vw]">{pkg.tagline}</p>
                  <h3 className="mb-[0.5vw] font-type1 text-[3.5vw] text-white max-lg:text-[8vw]">{pkg.name}</h3>
                  <p className="mb-[2vw] font-type1 text-[2vw] text-white/40 max-lg:text-[5vw]">{pkg.price}</p>
                  <ul className="mb-[3vw] flex flex-1 flex-col gap-[1vw] max-lg:gap-[2vw]">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex gap-[1vw] text-white/70 max-lg:gap-[2vw] max-lg:text-[3.2vw]">
                        <span className="shrink-0 text-gold-500">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <HexamobButton
                    href={`tel:+33672102411`}
                    className="mt-auto text-white py-[0.75vw] px-[2vw] border border-white/50 text-center"
                  >
                    Demander ce forfait
                  </HexamobButton>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section id="process" className={`${sectionClass} flex-col  py-[10vw] max-lg:py-[20vw]`}>
            <div className="relative mx-[3vw] mb-[6vw]">
              <div className={lineClass} />
              <h3 className={h3Class}>Comment ça marche</h3>
              <h2 className={`${titleClass} !p-0 !pt-[2vw]`}>
                Simple,
                <br />
                fluide, sans stress.
              </h2>
            </div>

            <div className="mx-[3vw] grid w-[94vw] grid-cols-2 gap-[3vw] max-lg:grid-cols-1 max-lg:gap-[6vw]">
              {processSteps.map((item) => (
                <div key={item.step} className="process-step border border-white/10 p-[2.5vw] max-lg:p-[5vw] rounded-lg bg-page/10 backdrop-blur-lg">
                  <span className="mb-[1vw] block font-type1 text-[5vw] leading-none text-gold-500/40 max-lg:text-[10vw]">
                    {item.step}
                  </span>
                  <h3 className={`${h3Class} mb-[1vw]`}>{item.title}</h3>
                  <p className="text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Highlights & fleet teaser */}
          <section className={`${sectionClass} flex-col py-[10vw] max-lg:py-[20vw]`}>
            <div className="mx-[3vw] grid w-[94vw] grid-cols-2 gap-[6vw] max-lg:grid-cols-1 max-lg:gap-[10vw]">
              <div>
                <div className="relative mb-[3vw]">
                  <div className={lineClass} />
                  <h3 className={h3Class}>Inclus & options</h3>
                </div>
                <div className="flex flex-wrap gap-[1vw] max-lg:gap-[2vw]">
                  {eventHighlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="highlight-tag border border-gold-800/30 px-[1.5vw] py-[0.5vw] text-[0.85vw] uppercase text-white/60 max-lg:px-[3vw] max-lg:py-[1vw] max-lg:text-[2.5vw] rounded-lg"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="relative mb-[3vw]">
                  <div className={lineClass} />
                  <h3 className={h3Class}>Véhicule phare</h3>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <img
                    src="/assets/images/hexamob-vtc-chauffeur-privee-rochefort-charente.jpg"
                    alt="Mercedes Classe S HEXAMOB"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 94vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-page/80 to-transparent" />
                  <div className="absolute bottom-0 p-[2vw] max-lg:p-[4vw]">
                    <p className="text-[0.9vw] uppercase text-gold-500 max-lg:text-[2.8vw]">Prestige absolu</p>
                    <h3 className="font-type1 text-[2.5vw] text-white max-lg:text-[6vw]">Mercedes Classe S</h3>
                    <p className="mt-[1vw] text-white/70 max-lg:text-[3.2vw]">
                      Le summum du raffinement pour vos mariages, galas et réceptions d&apos;exception.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className={`${sectionClass} flex-col  py-[8vw] max-lg:py-[15vw]`}>
            <div className="mx-[3vw] flex w-[94vw] items-end justify-between max-lg:flex-col max-lg:items-start max-lg:gap-[4vw]">
              <div>
                <h3 className={`${h3Class} mb-[1vw]`}>Prêt à célébrer ?</h3>
                <h2 className={`${titleClass} !p-0`}>
                  Parlons de
                  <br />
                  votre événement.
                </h2>
              </div>
              <div className="flex gap-[2vw] max-lg:flex-col max-lg:gap-[3vw]">
                <HexamobButton
                  href="tel:+33672102411"
                  className="text-white"
                >
                  Demander un devis
                </HexamobButton>
                <HexamobButton href="/services/sur-mesure" className="text-white/60">
                  Service sur mesure
                </HexamobButton>
              </div>
            </div>
          </section>

          <DestinationsStrip className="" />

          <Footer />
        </div>
      </div>
    </>
  );
}
