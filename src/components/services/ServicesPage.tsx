"use client";

import { useEffect } from "react";
import Link from "next/link";
import AmbientGlow from "@/components/layout/AmbientGlow";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DestinationsStrip from "@/components/layout/DestinationsStrip";
import HexamobButton from "@/components/layout/HexamobButton";
import { bootPageScroll } from "@/lib/hexamob/animations/bootPageScroll";
import { initServicesAnimations } from "@/lib/hexamob/animations/servicesAnimations";
import { services } from "@/lib/hexamob/services";

const stats = [
  { num: "+ 10 000", desc: "prestations VTC par an" },
  { num: "+ 6", desc: "ans d'expérience" },
  { num: "24/7", desc: "disponibilité" },
  { num: "5", desc: "gammes de services" },
];

const sectionClass = "relative flex w-screen overflow-hidden";
const titleClass = "title p-[3vw] font-type1 text-[5vw] font-thin leading-none text-white max-lg:text-[8vw]";
const h3Class = "text-[1.2vw] uppercase text-gold-500 max-lg:text-[3.5vw]";
const lineClass = "line absolute -top-[3vw] h-px w-full origin-left bg-white/50 max-lg:-top-[4vw]";

export default function ServicesPage() {
  useEffect(() => bootPageScroll(initServicesAnimations), []);

  return (
    <>
      <Header />
      <AmbientGlow />

      <div className="scroller fixed top-0 left-0 z-[99999] h-screen w-screen">
        <div id="main">
          {/* Hero */}
          <section
            id="hero-services"
            className={`${sectionClass} min-h-screen items-end justify-start bg-[url('/assets/images/hexamob-vtc-chauffeur-haut-gamme-la-rochelle.jpg')] bg-cover bg-center`}
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
                Nos prestations
              </p>
              <h1 className="font-type1 text-[10vw] font-thin uppercase leading-[0.9] text-white max-lg:text-[14vw]">
                Services
                <br />
                VTC premium
              </h1>
              <p className="mt-[2vw] w-[45vw] text-white/80 max-lg:w-full max-lg:mt-[4vw]">
                Du transfert aéroport au circuit touristique, du trajet interurbain à la solution entreprise — HEXAMOB
                propose une gamme complète de services VTC sur mesure en Charente-Maritime.
              </p>
            </div>
          </section>

          {/* Services grid */}
          <section id="services-grid" className={`${sectionClass} flex-col py-[10vw] max-lg:py-[20vw]`}>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-page via-page/60 to-page/0" />

          <div className="relative mx-[3vw] mb-[6vw]">
              <div className={lineClass} />
              <h3 className={h3Class}>Nos services</h3>
              <h2 className={`${titleClass} !p-0 !pt-[2vw]`}>
                Une solution
                <br />
                pour chaque besoin.
              </h2>
            </div>

            <div className="mx-[3vw] grid w-[94vw] grid-cols-2 gap-[2vw] max-lg:grid-cols-1 max-lg:gap-[6vw]">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="service-card group relative overflow-hidden rounded-xl border border-white/10 transition-colors duration-500 hover:border-gold-800/40 bg-page/90 backdrop-blur-lg"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={service.cardImage}
                      alt={service.label}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-page via-page/30 to-transparent" />
                    <span className="absolute left-[2vw] top-[2vw] font-type1 text-[6vw] leading-none text-white/10 max-lg:text-[12vw]">
                      {service.number}
                    </span>
                    <div className="absolute bottom-0 p-[2vw] max-lg:p-[4vw]">
                      <p className="text-[0.9vw] uppercase text-gold-500 max-lg:text-[2.8vw]">{service.tagline}</p>
                      <h3 className="font-type1 text-[2.5vw] text-white max-lg:text-[6vw]">{service.label}</h3>
                    </div>
                  </div>
                  <div className="p-[2vw] max-lg:p-[4vw]">
                    <p className="mb-[1.5vw] text-white/70">{service.description}</p>
                    <HexamobButton className="text-white">Découvrir</HexamobButton>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Image interlude */}
          <section
            className={`${sectionClass} h-[50vh] bg-[url('/assets/images/hexamob-vtc-chauffeur-privee-rochefort-charente.jpg')] bg-cover bg-center max-lg:h-[35vh]`}
          >
            <div className="absolute inset-0 bg-page/50" />
            <div className="relative z-10 flex h-full w-full items-center justify-center p-[3vw]">
              <blockquote className="title max-w-[70vw] text-center font-type1 text-[3.5vw] font-thin italic leading-snug text-white max-lg:text-[5.5vw]">
                « Confort, ponctualité et élégance — au cœur de chaque prestation HEXAMOB. »
              </blockquote>
            </div>
          </section>

          {/* Stats */}
          <section className={`${sectionClass} flex-col py-[8vw] max-lg:py-[15vw]`}>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-page via-page/60 to-page/0" />

            <div className="relative z-10 mx-[3vw] grid w-[94vw] grid-cols-4 gap-[2vw] max-lg:grid-cols-2 max-lg:gap-[6vw]">
              {stats.map((item) => (
                <div key={item.num} className="border-l border-gold-800/40 pl-[2vw] max-lg:pl-[3vw]">
                  <div className="font-type1 text-[5vw] leading-none text-white max-lg:text-[10vw]">{item.num}</div>
                  <p className="mt-[0.5vw] text-white/50 max-lg:text-[2.8vw]">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className={`${sectionClass} flex-col  py-[8vw] max-lg:py-[15vw]`}>
            <div className="mx-[3vw] flex w-[94vw] items-end justify-between max-lg:flex-col max-lg:items-start max-lg:gap-[4vw]">
              <div>
                <h3 className={`${h3Class} mb-[1vw]`}>Besoin d&apos;un devis ?</h3>
                <h2 className={`${titleClass} !p-0`}>
                  Contactez
                  <br />
                  notre équipe.
                </h2>
              </div>
              <div className="flex gap-[2vw] max-lg:flex-col max-lg:gap-[3vw]">
                <HexamobButton href="tel:+33672102411" className="text-white">
                  Demander un devis
                </HexamobButton>
                <HexamobButton href="/entreprise" className="text-white/60">
                  À propos
                </HexamobButton>
              </div>
            </div>
          </section>

          <DestinationsStrip className="bg-page" />

          <Footer />
        </div>
      </div>
    </>
  );
}
