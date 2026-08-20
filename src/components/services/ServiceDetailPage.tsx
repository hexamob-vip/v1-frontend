"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AmbientGlow from "@/components/layout/AmbientGlow";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HexamobButton from "@/components/layout/HexamobButton";
import { bootPageScroll } from "@/lib/hexamob/animations/bootPageScroll";
import { initServicesAnimations } from "@/lib/hexamob/animations/servicesAnimations";
import { getOtherServices, type Service } from "@/lib/hexamob/services";
import { getDestinationByLabel } from "@/lib/hexamob/destinations";

const sectionClass = "relative flex w-screen overflow-hidden";
const titleClass = "title p-[3vw] font-type1 text-[5vw] font-thin leading-none text-white max-lg:text-[8vw]";
const h3Class = "text-[1.2vw] uppercase text-gold-500 max-lg:text-[3.5vw]";
const lineClass = "line absolute -top-[3vw] h-px w-full origin-left bg-white/50 max-lg:-top-[4vw]";

type ServiceDetailPageProps = {
  service: Service;
};

export default function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const otherServices = getOtherServices(service.slug);

  useEffect(() => bootPageScroll(initServicesAnimations), [service.slug]);

  return (
    <>
      <Header />
      <AmbientGlow />

      <div className="scroller fixed top-0 left-0 z-[99999] h-screen w-screen">
        <div id="main">
          {/* Hero */}
          <section
            className={`${sectionClass} min-h-screen items-end justify-start bg-cover bg-center`}
            style={{ backgroundImage: `url('${service.heroImage}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-page via-page/70 to-page/40" />
            <div
              className="arrow absolute z-[9] h-[70vh] w-[70vh] rotate-[135deg] bg-gradient-to-br from-gold-800/50 via-transparent to-transparent opacity-80 max-lg:h-[50vh] max-lg:w-[50vh]"
              style={{ top: "20vh", left: "-53vh" }}
            />
            <div className="relative z-10 w-full p-[3vw] pb-[8vw]">
              <Link href="/services" className="mb-[2vw] inline-block text-[0.9vw] uppercase text-gold-500 transition hover:text-white max-lg:text-[2.8vw]">
                ← Tous les services
              </Link>
              <p className="mb-[1vw] text-[1vw] uppercase tracking-[0.3em] text-gold-500 max-lg:text-[3vw]">
                {service.tagline}
              </p>
              <h1 className="font-type1 text-[8vw] font-thin uppercase leading-[0.9] text-white max-lg:text-[12vw]">
                {service.label}
              </h1>
              <p className="mt-[2vw] w-[50vw] text-white/80 max-lg:w-full max-lg:mt-[4vw]">{service.description}</p>
            </div>
          </section>

          {/* Intro */}
          <section className={`${sectionClass} flex-col py-[10vw] max-lg:py-[20vw]`}>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-page via-page/60 to-page/0" />

            <div className="relative z-10 mx-[3vw] mb-[4vw]">
              <div className={lineClass} />
              <h3 className={h3Class}>Présentation</h3>
            </div>
            <div className="mx-[3vw] grid w-[94vw] grid-cols-[1fr_1.2fr] gap-[6vw] max-lg:grid-cols-1 max-lg:gap-[6vw]">
              <div>
                <span className="mb-[2vw] block font-type1 text-[10vw] leading-none text-white/10 max-lg:text-[18vw]">
                  {service.number}
                </span>
                <h2 className={`${titleClass} !p-0`}>
                  {service.label.split(" ").slice(0, 2).join(" ")}
                  <br />
                  {service.label.split(" ").slice(2).join(" ") || "premium"}
                </h2>
              </div>
              <article className="flex flex-col justify-end text-white/80">
                <p>{service.intro}</p>
                <div className="mt-[3vw]">
                  <HexamobButton
                    href={`mailto:contact@hexamob.vip?subject=${encodeURIComponent(`Demande VTC - ${service.label}`)}`}
                    className="text-white"
                  >
                    Réserver
                  </HexamobButton>
                </div>
              </article>
            </div>
          </section>

          {/* Features */}
          <section className={`${sectionClass} flex-col py-[10vw] max-lg:py-[20vw]`}>
            <div className="relative mx-[3vw] mb-[6vw]">
              <div className={lineClass} />
              <h3 className={h3Class}>Prestations</h3>
              <h2 className={`${titleClass} !p-0 !pt-[2vw]`}>
                Ce que nous
                <br />
                proposons.
              </h2>
            </div>

            <div className="mx-[3vw] grid w-[94vw] grid-cols-2 gap-[3vw] max-lg:grid-cols-1 max-lg:gap-[6vw]">
              {service.features.map((feature, i) => (
                <div
                  key={feature.title}
                  className="feature-item relative rounded-xl border border-white/10 p-[2.5vw] max-lg:p-[5vw] bg-page/40 backdrop-blur-lg"
                >
                  <span className="mb-[1vw] block font-type1 text-[4vw] leading-none text-gold-500/40 max-lg:text-[8vw]">
                    0{i + 1}
                  </span>
                  <h3 className={`${h3Class} mb-[1vw]`}>{feature.title}</h3>
                  <p className="text-white/70">{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Highlights & destinations */}
          <section className={`${sectionClass} flex-col py-[10vw] max-lg:py-[20vw]`}>
            <div className="mx-[3vw] grid w-[94vw] grid-cols-2 gap-[6vw] max-lg:grid-cols-1 max-lg:gap-[10vw]">
              <div>
                <div className="relative mb-[3vw]">
                  <div className={lineClass} />
                  <h3 className={h3Class}>Avantages</h3>
                </div>
                <div className="flex flex-wrap gap-[1vw] max-lg:gap-[2vw]">
                  {service.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="highlight-tag border border-gold-800/30 px-[1.5vw] py-[0.5vw] text-[0.85vw] uppercase text-white/60 max-lg:px-[3vw] max-lg:py-[1vw] max-lg:text-[2.5vw] bg-page/5 backdrop-blur-lg rounded-xl"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {service.destinations && (
                <div>
                  <div className="relative mb-[3vw]">
                    <div className={lineClass} />
                    <h3 className={h3Class}>Destinations</h3>
                  </div>
                  <div className="flex flex-wrap gap-[2vw] uppercase text-white/40 max-lg:gap-[3vw] max-lg:text-[2.8vw]">
                    {service.destinations.map((dest) => {
                      const destination = getDestinationByLabel(dest);
                      if (!destination) {
                        return (
                          <span
                            key={dest}
                            className="border border-white/20 px-[1.5vw] py-[0.5vw] max-lg:px-[3vw] max-lg:py-[1vw] bg-page/5 backdrop-blur-lg rounded-xl"
                          >
                            {dest}
                          </span>
                        );
                      }
                      return (
                        <Link
                          key={dest}
                          href={`/destinations/${destination.slug}`}
                          className="border border-white/20 px-[1.5vw] py-[0.5vw] transition hover:border-gold-800/60 hover:text-white max-lg:px-[3vw] max-lg:py-[1vw] bg-page/5 backdrop-blur-lg rounded-xl"
                        >
                          {dest}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Image */}
          <section className={`${sectionClass} destination-banner h-[45vh] max-lg:h-[30vh]`}>
            <div className="relative h-full w-full overflow-hidden">
              <div className="destination-banner-media absolute inset-x-0 top-0 h-[150%] w-full will-change-transform">
                <img
                  src={service.cardImage}
                  alt={service.label}
                  className="h-full w-full object-cover"
                  onLoad={() => {
                    import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => ScrollTrigger.refresh());
                  }}
                />
              </div>
              <div className="absolute inset-0 z-[1] bg-page/40" />
            </div>
          </section>

          {/* Related services */}
          <section className="related-services relative flex w-screen flex-col overflow-hidden py-[10vw] max-lg:py-[20vw]">
            <div className="relative mx-[3vw] mb-[6vw]">
              <div className={lineClass} />
              <h3 className={h3Class}>Autres services</h3>
              <h2 className={`${titleClass} !p-0 !pt-[2vw]`}>
                Découvrez
                <br />
                aussi.
              </h2>
            </div>

            <div className="mx-[3vw] grid w-[94vw] grid-cols-4 gap-[2vw] max-lg:grid-cols-2 max-lg:gap-[4vw]">
              {otherServices.slice(0, 4).map((related) => (
                <Link
                  key={related.slug}
                  href={`/services/${related.slug}`}
                  className="related-service group overflow-hidden rounded-xl border border-white/10 transition hover:border-gold-800/40"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={related.cardImage}
                      alt={related.label}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 45vw, 22vw"
                      style={{ objectPosition: related.cardPosition ?? "center center" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-page to-transparent" />
                    <div className="absolute bottom-0 p-[1.5vw] max-lg:p-[3vw]">
                      <p className="text-[0.7vw] uppercase text-gold-500 max-lg:text-[2.2vw]">{related.shortLabel}</p>
                      <h3 className="font-type1 text-[1.2vw] text-white max-lg:text-[3.5vw]">{related.label}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mx-[3vw] mt-[4vw] max-lg:mt-[8vw]">
              <HexamobButton href="/services" className="text-white">
                Tous les services
              </HexamobButton>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
}
