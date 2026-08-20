"use client";

import { useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import AmbientGlow from "@/components/layout/AmbientGlow";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HexamobButton from "@/components/layout/HexamobButton";
import { bootPageScroll } from "@/lib/hexamob/animations/bootPageScroll";
import { initServicesAnimations } from "@/lib/hexamob/animations/servicesAnimations";
import { getDestinationHeroImage, getOtherDestinations, type Destination } from "@/lib/hexamob/destinations";

const sectionClass = "relative flex w-screen overflow-hidden";
const titleClass =
  "title p-[3vw] font-type1 text-[5vw] font-thin leading-none text-white max-lg:text-[8vw]";
const h3Class = "text-[1.2vw] uppercase text-gold-500 max-lg:text-[3.5vw]";
const lineClass =
  "line absolute -top-[3vw] h-px w-full origin-left bg-white/50 max-lg:-top-[4vw]";

type DestinationPageProps = {
  destination: Destination;
  heroImage: string;
  bannerImage: string;
};

export default function DestinationPage({
  destination,
  heroImage,
  bannerImage,
}: DestinationPageProps) {
  const otherDestinations = useMemo(
    () =>
      getOtherDestinations(destination.slug)
        .slice(0, 4)
        .map((other) => ({
          ...other,
          cardImage: getDestinationHeroImage(other.slug, other.cardImage),
        })),
    [destination.slug],
  );

  useEffect(() => bootPageScroll(initServicesAnimations), [destination.slug]);

  return (
    <>
      <Header />
      <AmbientGlow />

      <div className="scroller fixed top-0 left-0 z-[99999] h-screen w-screen">
        <div id="main">
          <section
            className={`${sectionClass} min-h-screen items-end justify-start bg-cover bg-center`}
            style={{ backgroundImage: `url('${heroImage}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-page via-page/70 to-page/40" />
            <div className="relative z-10 w-full p-[3vw] pb-[8vw]">
              <Link
                href="/services/touristes"
                className="mb-[2vw] inline-block text-[0.9vw] uppercase text-gold-500 transition hover:text-white max-lg:text-[2.8vw]"
              >
                ← Services touristes
              </Link>
              <p className="mb-[1vw] text-[1vw] uppercase tracking-[0.3em] text-gold-500 max-lg:text-[3vw]">
                {destination.region} — {destination.tagline}
              </p>
              <h1 className="font-type1 text-[8vw] font-thin uppercase leading-[0.9] text-white max-lg:text-[12vw]">
                {destination.label}
              </h1>
              <p className="mt-[2vw] w-[50vw] text-white/80 max-lg:mt-[4vw] max-lg:w-full">
                {destination.intro}
              </p>
            </div>
          </section>

          <section className={`${sectionClass} flex-col py-[10vw] max-lg:py-[20vw]`}>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-page via-page/60 to-page/0" />
            <div className="relative z-10 mx-[3vw] mb-[4vw]">
              <div className={lineClass} />
              <h3 className={h3Class}>À faire</h3>
              <h2 className={`${titleClass} !p-0 !pt-[2vw]`}>
                Que faire
                <br />à {destination.label} ?
              </h2>
            </div>
            <ul className="relative z-10 mx-[3vw] grid w-[94vw] grid-cols-2 gap-[2vw] max-lg:grid-cols-1 max-lg:gap-[4vw]">
              {destination.toDo.map((item) => (
                <li
                  key={item}
                  className="feature-item border border-white/10 p-[2vw] text-white/80 max-lg:p-[4vw] bg-page/40 backdrop-blur-lg rounded-xl"
                >
                  <span className="mr-[0.5vw] text-gold-500">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className={`${sectionClass} flex-col py-[10vw] max-lg:py-[20vw]`}>
            <div className="relative mx-[3vw] mb-[6vw]">
              <div className={lineClass} />
              <h3 className={h3Class}>Visiter</h3>
              <h2 className={`${titleClass} !p-0 !pt-[2vw]`}>
                Sites &
                <br />
                incontournables.
              </h2>
            </div>
            <div className="mx-[3vw] grid w-[94vw] grid-cols-2 gap-[3vw] max-lg:grid-cols-1 max-lg:gap-[6vw]">
              {destination.visits.map((visit, i) => (
                <div
                  key={visit.title}
                  className="feature-item rounded-xl border border-white/10 p-[2.5vw] max-lg:p-[5vw] bg-page/40 backdrop-blur-lg"
                >
                  <span className="mb-[1vw] block font-type1 text-[4vw] leading-none text-gold-500/40 max-lg:text-[8vw]">
                    0{i + 1}
                  </span>
                  <h3 className={`${h3Class} mb-[1vw]`}>{visit.title}</h3>
                  <p className="text-white/70">{visit.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={`${sectionClass} flex-col py-[10vw] max-lg:py-[20vw]`}>
            <div className="relative mx-[3vw] mb-[6vw]">
              <div className={lineClass} />
              <h3 className={h3Class}>Circuits VTC</h3>
              <h2 className={`${titleClass} !p-0 !pt-[2vw]`}>
                Nos circuits
                <br />
                premium.
              </h2>
            </div>
            <div className="mx-[3vw] flex w-[94vw] flex-col gap-[3vw] max-lg:gap-[6vw]">
              {destination.circuits.map((circuit) => (
                <div
                  key={circuit.title}
                  className="feature-item grid grid-cols-[14vw_1fr] items-start gap-[3vw] rounded-xl border border-white/10 p-[2.5vw] max-lg:grid-cols-1 max-lg:gap-[2vw] max-lg:p-[5vw] bg-page/40 backdrop-blur-lg"
                >
                  <div className="font-type1 text-[2vw] uppercase leading-tight text-gold-500 max-lg:text-[4vw]">
                    {circuit.duration}
                  </div>
                  <div>
                    <h3 className={`${h3Class} mb-[1vw]`}>{circuit.title}</h3>
                    <p className="text-white/70">{circuit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mx-[3vw] mt-[4vw] max-lg:mt-[8vw]">
              <HexamobButton
                href={`mailto:contact@hexamob.vip?subject=${encodeURIComponent(`Circuit VTC - ${destination.label}`)}`}
                className="text-white"
              >
                Réserver un circuit
              </HexamobButton>
            </div>
          </section>

          <section className={`${sectionClass} destination-banner h-[45vh] max-lg:h-[30vh]`}>
            <div className="relative h-full w-full overflow-hidden">
              <div className="destination-banner-media absolute inset-x-0 top-0 h-[150%] w-full will-change-transform">
                <img
                  src={bannerImage}
                  alt={destination.label}
                  className="h-full w-full object-cover"
                  onLoad={() => {
                    import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => ScrollTrigger.refresh());
                  }}
                />
              </div>
              <div className="absolute inset-0 z-[1] bg-page/40" />
            </div>
          </section>

          <section className="related-services relative flex w-screen flex-col overflow-hidden py-[10vw] max-lg:py-[20vw]">
            <div className="relative mx-[3vw] mb-[6vw]">
              <div className={lineClass} />
              <h3 className={h3Class}>Autres destinations</h3>
              <h2 className={`${titleClass} !p-0 !pt-[2vw]`}>
                Explorez
                <br />
                aussi.
              </h2>
            </div>
            <div className="mx-[3vw] grid w-[94vw] grid-cols-4 gap-[2vw] max-lg:grid-cols-2 max-lg:gap-[4vw]">
              {otherDestinations.map((other) => (
                <Link
                  key={other.slug}
                  href={`/destinations/${other.slug}`}
                  className="related-service group overflow-hidden rounded-xl border border-white/10 transition hover:border-gold-800/40"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={other.cardImage}
                      alt={other.label}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-page to-transparent" />
                    <div className="absolute bottom-0 p-[1.5vw] max-lg:p-[3vw]">
                      <p className="text-[0.7vw] uppercase text-gold-500 max-lg:text-[2.2vw]">
                        {other.region}
                      </p>
                      <h3 className="font-type1 text-[1.2vw] text-white max-lg:text-[3.5vw]">
                        {other.label}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
}
