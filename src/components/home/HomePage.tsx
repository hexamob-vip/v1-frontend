"use client";

import { useEffect } from "react";
import Link from "next/link";
import AmbientGlow from "@/components/layout/AmbientGlow";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HexamobButton from "@/components/layout/HexamobButton";
import QualityAmenities from "@/components/home/QualityAmenities";
import LexusCanvas from "@/components/three/LexusCanvas";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initGeneralAnimations } from "@/lib/hexamob/animations/generalAnimations";
import { initHomeAnimations } from "@/lib/hexamob/animations/homeAnimations";
import {
  killSmoothScroll,
  setupSmoothScroll,
} from "@/lib/hexamob/animations/setupScroll";
import {
  initLexusScene,
  registerLexusScrollAnimations,
} from "@/lib/hexamob/animations/lexusScene";
import {
  getDestinationByLabel,
  stripDestinations,
} from "@/lib/hexamob/destinations";

const stats = [
  { num: "+ 500", desc: "prestations VTC premium réalisées chaque année" },
  { num: "+ 6", desc: "ans d'expérience VTC" },
  { num: "+ 1000", desc: "clients desservis" },
  { num: "+ 24/7", desc: "disponibilité service client" },
  { num: "+ 100", desc: "destinations en Charente-Maritime" },
];

const GOOGLE_REVIEWS_URL = "https://share.google/qc9ExEeMCDaHKjPDm";

const carouselItems = [
  {
    type: "image" as const,
    src: "/assets/images/hexamob-vtc-chauffeur-privee-saintes-charente.jpg",
    className: "carousel-img1",
  },
  {
    type: "review" as const,
    author: "Lucile Brochard",
    text: "Super experience avec Anthony, très disponible et sympathique. Il nous a accompagnées pendant 3 jours sur un enterrement de vie de jeune fille.",
  },
  {
    type: "image" as const,
    src: "/assets/images/hexamob-vtc-chauffeur-haut-gamme-la-rochelle-02.jpg",
    className: "carousel-img2",
  },
  {
    type: "review" as const,
    author: "Marine Renon",
    text: "Excellente expérience ! Chauffeur très agréable j’ai passer un super moment je recommande très fortement !!",
  },
  {
    type: "image" as const,
    src: "/assets/images/hexamob-vtc-chauffeur-haut-gamme-rochefort.jpg",
    className: "carousel-img3",
  },
  {
    type: "review" as const,
    author: "Dogan TARHAN",
    text: "Super rencontre, voiture très confortable et chauffeur très agréable. Merci pour cette belle expérience, je recommande fortement.",
  },
];

const carouselCardClass =
  "carousel-img m-[3vw] flex h-[16vw] w-[30vw] shrink-0 flex-col justify-between rounded-xl max-lg:h-[60vw] max-lg:w-[94vw]";

const sectionClass = "relative flex h-screen w-screen overflow-hidden";
const sectionStartClass = `${sectionClass} justify-start`;
/** Vertically centered column sections — matches HEXAMOB justify-content: center */
const sectionCenterClass = `${sectionClass} flex-col items-start justify-center`;
const sectionMinHeightCenterClass = `relative flex h-fit lg:h-screen w-screen overflow-hidden flex-col items-start justify-center`;
const titleClass =
  "title p-[3vw] font-type1 text-[5vw] font-thin leading-none text-white max-lg:text-[8vw]";
const h3Class =
  "w-[17vw] text-[1.2vw] uppercase text-gold-500 max-lg:w-full max-lg:text-[3.5vw]";
const contentClass =
  "content mx-[3vw] flex w-[56vw] max-lg:w-[90vw] max-lg:flex-col lg:absolute lg:top-[22vw] max-lg:relative max-lg:top-0";
const lineClass =
  "line absolute -top-[3vw] h-px w-full origin-left bg-white/50 max-lg:-top-[4vw]";

export default function HomePage() {
  useEffect(() => {
    let destroyLexus: (() => void) | undefined;
    let cancelled = false;
    let fallback = 0;

    const frameId = window.requestAnimationFrame(() => {
      if (cancelled) return;

      const boot = async () => {
        setupSmoothScroll();
        initGeneralAnimations();
        initHomeAnimations();

        if (cancelled) return;

        const canvas = document.getElementById("canvas");
        if (canvas) {
          const lexus = await initLexusScene(canvas);
          if (cancelled) {
            lexus.destroy();
            return;
          }
          registerLexusScrollAnimations(lexus.scene);
          destroyLexus = lexus.destroy;
        }

        ScrollTrigger.refresh(true);
      };

      void boot();

      fallback = window.setTimeout(() => {
        if (getComputedStyle(document.body).opacity === "0") {
          document.body.style.opacity = "1";
        }
      }, 4000);
    });

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(fallback);
      destroyLexus?.();
      killSmoothScroll();
    };
  }, []);

  return (
    <>
      <Header />
      <LexusCanvas />

      <AmbientGlow />

      <div className="scroller fixed top-0 left-0 z-[99999] h-screen w-screen">
        <div id="main">
          <section id="hero" className={`${sectionStartClass} bg-page`}>
            <div className="preload" />
            <div
              id="hero-video"
              className="pointer-events-none absolute left-0 top-0 z-[9] h-screen w-screen overflow-hidden opacity-40"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-hidden="true"
              >
                <source
                  src="/assets/videos/hexamob-chaffeur-vtc-charente-maritime-rochefort.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div
              className="arrow absolute z-[99] h-[70vh] w-[70vh] rotate-[135deg] bg-gradient-to-br from-gold-800/50 via-transparent to-transparent opacity-80 max-lg:h-[50vh] max-lg:w-[50vh]"
              id="arrow_1"
              style={{ top: "20vh", left: "-53vh" }}
            />
            <div
              className="arrow absolute z-[99] h-[70vh] w-[70vh] rotate-[135deg] bg-gradient-to-br from-gold-800/50 via-transparent to-transparent opacity-80 max-lg:h-[50vh] max-lg:w-[50vh]"
              id="arrow_2"
              style={{ top: "20vh", left: "-23vh" }}
            />
            <h1 className="absolute bottom-[11.5vw] z-[99] box-content h-[18vw] w-[94vw] p-[3vw] font-type1 text-[12.5vw] font-thin uppercase leading-none text-white max-lg:bottom-[64.3vw] max-lg:h-[25vw] max-lg:text-[16.4vw]">
              <span className="absolute bottom-0 top-0 w-[94vw] text-left">
                Chauffeur
              </span>
              <span className="absolute bottom-0 w-[94vw] text-right">
                VTC <span className="opacity-50"> / </span> Privée
              </span>
            </h1>
            <div
              id="year"
              className="absolute bottom-[36vw] left-[3vw] z-[9] text-gold-800 max-lg:bottom-[96vw]"
            >
              DEPUIS 2020
            </div>
            <div
              id="start-scroll"
              className="absolute right-0 top-[calc(100vh-12vw)] z-[9999] cursor-pointer p-[2vw_3vw] text-white max-lg:right-[3vw] max-lg:top-[calc(100vh-32vw)]"
            >
              <span className="absolute left-[1vw] h-[1vw] w-[1vw] -translate-y-[0vw] rotate-45 border-b border-r border-gold-800 opacity-0 [animation:scroll-arrow-1_3s_ease_infinite] max-lg:hidden" />
              <span className="absolute left-[1vw] h-[1vw] w-[1vw] -translate-y-[0vw] rotate-45 border-b border-r border-gold-800 [animation:scroll-arrow-2_3s_ease_infinite] max-lg:hidden" />
              <span className="absolute left-[1vw] h-[1vw] w-[1vw] rotate-45 border-b border-r border-gold-800 [animation:scroll-arrow-3_3s_ease_infinite] max-lg:hidden" />
              <div
                id="start-in"
                className="relative  inline-block rounded-[3vw] border border-white px-[0.5vw] py-[0.1vw] text-[80%] uppercase [animation:blink_1.5s_linear_infinite] hover:bg-gold-800/50 hover:text-white hover:[animation:none] max-lg:px-[2.2vw] max-lg:py-[1vw] max-lg:text-[3vw]"
              >
                Scroll Down
              </div>
            </div>
          </section>

          <div
            id="hero-text"
            className="absolute left-[35.5vw] top-[calc(100vh-13vw)] z-[9] h-[6vw] w-[40vw] p-[3vw] text-white transition-colors duration-1000 max-lg:left-0 max-lg:top-[calc(100vh-67vw)] max-lg:h-[39vw] max-lg:w-[94vw] [&.blue]:text-white"
          >
            <article className="transition-colors duration-1000">
              Transport premium en Charente-Maritime depuis 2020. Confort,
              ponctualité et élégance au cœur de chaque trajet. Nous répondons
              aux besoins spécifiques de nos clients avec qualité de service,
              véhicules entretenus et chauffeurs formés, en respectant les
              standards les plus exigeants.
            </article>
          </div>

          <section id="section-two" className={sectionStartClass} />

          <div id="mark0" className="max-lg:-mt-[15vh]" />

          <section
            id="services-intro"
            className={`relative flex flex-col lg:flex-row items-start justify-center lg:justify-start lg:h-screen w-screen overflow-hidden max-lg:mt-[15vh] max-lg:h-auto max-lg:min-h-screen max-lg:overflow-visible pb-52 lg:pb-0`}
            //className={`relative flex lg:h-screen w-screen overflow-hidden justify-start max-lg:mt-[15vh] max-lg:h-auto max-lg:min-h-screen max-lg:overflow-visible pb-52 lg:pb-0`}
          >
            <h2 className={titleClass}>
              Transport premium
              <br />
              en Charente-Maritime –
              <br />
              confort et élégance.
            </h2>

            <div
              className={`${contentClass} mt-[4vw] lg:mt-0`}
              id="content-standard-trips"
            >
              <div className={lineClass} />
              <h3 className={h3Class}>TRAJETS STANDARDS</h3>
              <article className="ml-[3vw] w-[30vw] max-lg:ml-0 max-lg:mt-[2vw] max-lg:w-[84vw]">
                Trajets standards en VTC : aéroport, gare, centre-ville et
                transferts quotidiens en Charente-Maritime. Nous assurons chaque
                déplacement avec confort, ponctualité et élégance, véhicules
                entretenus et chauffeurs formés pour tous vos besoins locaux et
                professionnels.
                <br />
                <br />
                <HexamobButton
                  href="/services/trajets-standards"
                  className="link-trajets-standards"
                >
                  + infos
                </HexamobButton>
              </article>
            </div>

            <div
              className={`${contentClass} opacity-0 pointer-events-none max-lg:mt-[12vw] max-lg:opacity-100 max-lg:pointer-events-auto`}
              id="content-long-trips"
            >
              <div className={lineClass} />
              <h3 className={h3Class}>TRAJETS LONGS</h3>
              <article className="ml-[3vw] w-[30vw] max-lg:ml-0 max-lg:mt-[2vw] max-lg:w-[84vw]">
                Trajets en Charente-Maritime : La Rochelle, Royan, Saintes,
                Cognac, Surgères, l&apos;Île de Ré et l&apos;Île d&apos;Oléron. Voyages
                confortables sur grande distance avec chauffeur professionnel,
                véhicule premium entretenu et service ponctuel adapté à vos
                horaires.
                <br />
                <br />
                <HexamobButton
                  href="/services/trajets-longs"
                  className="link-trajets-longs"
                >
                  + infos
                </HexamobButton>
              </article>
            </div>

            <div
              className={`${contentClass} opacity-0 pointer-events-none max-lg:mt-[12vw] max-lg:opacity-100 max-lg:pointer-events-auto`}
              id="content-events"
            >
              <div className={lineClass} />
              <h3 className={h3Class}>ÉVÉNEMENTS SPÉCIAUX</h3>
              <div className="pointer-events-none aspect-video w-[15vw] max-lg:hidden rounded-xl overflow-hidden">
                <img
                  src="/assets/images/hexamob-vtc-chauffeur-haut-gamme-la-rochelle.jpg"
                  alt="Événements spéciaux"
                  className="w-full h-full object-cover"
                />
              </div>
              <article className="ml-[3vw] w-[30vw] max-lg:ml-0 max-lg:mt-[2vw] max-lg:w-[50vw]">
                Mariages, enterrements de vie de garçon, galas — forfaits tout
                compris avec transport premium et champagne.
                <br />
                <br />
                <HexamobButton
                  href="/evenements-speciaux"
                  className="link-evenements-speciaux"
                >
                  + infos
                </HexamobButton>
              </article>
            </div>
          </section>

          <section
            id="section-numbers"
            className="hidden lg:flex absolute -mt-[307vh] ml-[40vw] h-[90vh] w-[10vw] flex-col overflow-visible z-[-1] max-lg:relative max-lg:ml-[59vw] max-lg:mt-[-86vh] max-lg:h-auto max-lg:w-auto"
          >
            {["01", "02", "03"].map((number) => (
              <div
                key={number}
                className="number relative mb-[55vh] w-[19vw] text-right text-[15vw] text-white/10 max-lg:mb-[26vw] max-lg:w-[35vw] max-lg:text-[22vw]"
              >
                {number}
              </div>
            ))}
          </section>

          <section id="gap" className="lg:h-[40vh] w-screen" />

          <section
            id="punctuality"
            className={`${sectionMinHeightCenterClass} box-content bg-[url('/assets/images/hexamob-vtc-chauffeur-privee-saintes-charente.jpg')] bg-cover bg-right pb-[30vh] max-lg:box-border max-lg:justify-start [mask-image:linear-gradient(to_bottom,black_calc(100%-50vh),transparent)]`}
          >
            <div className="absolute inset-0 bg-page/55 z-[0]" />
            <h2
              className={`${titleClass} relative z-[1] w-[70vw] text-white max-lg:mt-[21vw] max-lg:w-[95vw]`}
            >
              Ponctualité garantie
              <br />
              pour chaque trajet VTC
              <br />
              en Charente-Maritime.
            </h2>
            <div className="content-block relative z-[1] flex w-[50vw] p-[3vw] text-white max-lg:w-[80vw] max-lg:flex-col">
              <h3
                className={`${h3Class} !text-goldhigh-500 lg:!text-goldhigh-500 max-lg:w-[80vw]`}
              >
                SERVICE PREMIUM
              </h3>
              <article
                className="w-[50vw] text-white max-lg:mt-[3vw] max-lg:w-full"
                style={{ textShadow: "0 0 10px rgba(0, 0, 0, 1)" }}
              >
                L&apos;une de nos spécialités, avec plus de 6 ans
                d&apos;expérience, est le transport premium en
                Charente-Maritime. Confort, ponctualité et élégance à chaque
                trajet grâce à des véhicules entretenus et des chauffeurs
                formés, pour un service VTC d&apos;excellence, du transfert
                local au trajet long.
                <br />
                <br />
                <HexamobButton
                  href="/services/sur-mesure"
                  variant="white"
                  className="link-sur-mesure"
                >
                  + infos
                </HexamobButton>
              </article>
              <article
                className="w-[50vw] text-white max-lg:mt-[3vw] max-lg:w-full"
                style={{ textShadow: "0 0 10px rgba(0, 0, 0, 1)" }}
              >
                Nous proposons des trajets vers La Rochelle, Royan, Saintes,
                Cognac, Surgères, l&apos;Île de Ré et l&apos;Île d&apos;Oléron, des
                transferts standards aéroport, gare et centre-ville, en
                respectant les exigences spécifiques de chaque client.
              </article>
            </div>

            <div
              id="kilometers"
              className="mt-12 lg:mt-0 ml-[3vw] lg:p-0 lg:absolute lg:top-1/2 lg:-translate-y-full lg:right-[10vw] flex h-[20vw] w-[20vw] items-center justify-center rounded-[30vw] border border-dashed border-white/20 text-center text-[3vw] text-white max-lg:top-[140vw] max-lg:right-[25vw] max-lg:h-[50vw] max-lg:w-[50vw] max-lg:translate-y-0 max-lg:text-[7vw]"
            >
              <div
                id="dot"
                className="absolute left-[-0.25vw] top-[calc(50%-0.25vw)] z-[9] h-[0.5vw] w-[0.5vw] origin-[10.25vw] rotate-[270deg] rounded-full bg-goldhigh-500 max-lg:left-[-0.6vw] max-lg:top-[calc(50%-0.7vw)] max-lg:h-[1.4vw] max-lg:w-[1.4vw] max-lg:origin-[25.7vw]"
              />
              <svg viewBox="0 0 1024 1024" className="absolute fill-none">
                <path
                  className="st0 stroke-white stroke-[3px]"
                  d="M512,1023.5c-69.1,0-136-13.5-199.1-40.2c-60.9-25.8-115.6-62.6-162.6-109.6c-47-47-83.9-101.7-109.6-162.6 C14,648,0.5,581.1,0.5,512c0-69.1,13.5-136,40.2-199.1c25.8-60.9,62.6-115.6,109.6-162.6c47-47,101.7-83.9,162.6-109.6 C376,14,442.9,0.5,512,0.5c69.1,0,136,13.5,199.1,40.2c60.9,25.8,115.6,62.6,162.6,109.6c47,47,83.9,101.7,109.6,162.6 c26.7,63.1,40.2,130,40.2,199.1c0,69.1-13.5,136-40.2,199.1c-25.8,60.9-62.6,115.6-109.6,162.6c-47,47-101.7,83.9-162.6,109.6 C648,1010,581.1,1023.5,512,1023.5z"
                />
              </svg>
              +
              <div id="kilometers-num" className="mr-[1vw] inline">
                0
              </div>
              km
              <div
                id="hours"
                className="absolute top-[12vw] text-[1vw] uppercase text-goldhigh-500 opacity-0 max-lg:top-[29vw] max-lg:text-[3vw]"
              >
                <div id="hours-num" className="mr-[0.5vw] inline">
                  par
                </div>
                an
              </div>
            </div>
          </section>

          <div
            id="carousel-home"
            className="-mt-px w-screen overflow-x-hidden pb-[10vw] max-lg:pb-[14vw]"
          >
            <div
              id="hexamob-wordmark"
              className="absolute mt-[-5vw] h-[40vw] w-screen overflow-hidden text-[38vw] opacity-20 [-webkit-text-stroke:1px_#fff] max-lg:h-[109vw] max-lg:text-[107vw]"
            >
              <span className="absolute w-[120vw] -translate-x-[52vw] text-transparent">
                HEXAMOB
              </span>
            </div>
            <div
              id="carousel-images"
              className="mt-[7vw] flex w-max max-lg:mt-[26vw]"
            >
              {carouselItems.map((item, index) => {
                if (item.type === "image") {
                  return (
                    <div
                      key={`image-${item.src}-${index}`}
                      className={`${carouselCardClass} ${item.className} overflow-hidden bg-cover bg-center`}
                      style={{ backgroundImage: `url('${item.src}')` }}
                    />
                  );
                }

                return (
                  <a
                    key={`review-${item.author}`}
                    href={GOOGLE_REVIEWS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className={`${carouselCardClass} border border-white/20 bg-page/40 p-[2vw] text-white backdrop-blur-sm transition hover:border-gold-800/50 max-lg:p-[5vw]`}
                  >
                    <div>
                      <div className="mb-[1vw] text-[1.2vw] text-goldhigh-800 max-lg:mb-[3vw] max-lg:text-[4vw]">
                        ★★★★★
                      </div>
                      <p className="font-type1 text-[1.1vw] leading-snug max-lg:text-[3.8vw]">
                        “{item.text}”
                      </p>
                    </div>
                    <p className="mt-auto text-[0.8vw] uppercase tracking-wide text-white/50 max-lg:text-[2.8vw]">
                      {item.author} · Google
                    </p>
                  </a>
                );
              })}
            </div>
            <div className="relative z-10 mt-[3vw] flex w-full justify-center px-[3vw] max-lg:mt-[8vw]">
              <HexamobButton
                href={GOOGLE_REVIEWS_URL}
                variant="white"
                className="max-lg:px-[4vw] max-lg:py-[2vw] max-lg:text-[3.2vw]"
              >
                Voir tous les avis
              </HexamobButton>
            </div>
          </div>

          <div id="mark1" className="-mt-px" />

          <section
            id="stats"
            className={`relative flex h-screen w-screen overflow-hidden flex-col items-start justify-center max-lg:h-[calc(100vh+1px)]`}
          >
            <div
              className={`arrow absolute z-[99] h-[70vh] w-[70vh] bg-gradient-to-br from-gold-800/50 via-transparent to-transparent opacity-80 max-lg:h-[50vh] max-lg:w-[50vh] rotate-[-45deg]`}
              id="arrow_3"
              style={{ top: "20vh", left: "-53vh" }}
            />
            <div
              className={`arrow absolute z-[99] h-[70vh] w-[70vh] bg-gradient-to-br from-gold-800/50 via-transparent to-transparent opacity-80 max-lg:h-[50vh] max-lg:w-[50vh] rotate-[-45deg]`}
              id="arrow_4"
              style={{ top: "20vh", left: "-23vh" }}
            />
            <h2 className={`${titleClass} text-white`}>
              Une solution
              <br />
              pour chaque client.
            </h2>
            <article className="w-[40vw] px-[3vw] text-white max-lg:w-[80vw]">
              Nous planifions des prestations VTC sur mesure pour répondre aux
              besoins de chaque client. Transferts standards, trajets longs,
              visites guidées et circuits personnalisés, avec abonnements,
              trajets réguliers et gestion de flotte pour nos clients exigeants.
              <br />
              <br />
              <HexamobButton
                href="/services"
                variant="white"
                className="link-services"
              >
                Services
              </HexamobButton>
            </article>
            <div
              id="stats-strip"
              className="h-[18vw] w-screen overflow-hidden max-lg:h-auto max-lg:min-h-[32vh] max-lg:py-[4vw]"
            >
              <div
                id="stats-strip-inner"
                className="flex w-[300vw] items-center max-lg:w-[620vw]"
              >
                {stats.map((item) => (
                  <div
                    key={item.num}
                    className="stat-item mr-[3vw] flex w-[40vw] shrink-0 flex-col items-end justify-center p-[3vw] max-lg:w-[62vw]"
                  >
                    <div className="num text-[10vw] leading-none text-white max-lg:text-[18vw]">
                      {item.num}
                    </div>
                    <div className="desc mt-[0.5vw] max-w-[36vw] text-right text-[0.9vw] leading-snug text-white max-lg:mt-[2vw] max-lg:max-w-[58vw] max-lg:text-[3.2vw]">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="gap2" className="lg:h-[80vw] w-screen" />

          <section
            id="commitment"
            className="pointer-events-none relative flex h-fit min-h-screen w-screen items-center justify-start overflow-visible max-lg:min-h-0 max-lg:flex-col max-lg:items-end pt-22 lg:pt-0 lg:mt-[-60vw] lg:mb-[60vw]"
          >
            <div
              id="commitment-content"
              className="pointer-events-auto relative left-1/2 z-[9] flex w-1/2 flex-col justify-center p-[3vw] max-lg:left-0 max-lg:w-full [&_article]:px-[3vw]"
            >
              <h2 className={titleClass}>
                Nous misons sur un service VTC premium
              </h2>
              <article>
                HEXAMOB propose des visites guidées en VTC et circuits
                personnalisés pour les touristes, des services sur mesure pour
                mariages et événements, et des solutions entreprise :
                abonnements, trajets réguliers et gestion de flotte. Qualité de
                service, véhicules entretenus et chauffeurs formés garantissent
                une expérience premium. Nos trajets standards couvrent aéroport,
                gare et centre-ville ; nous desservons La Rochelle, Royan,
                Saintes, Cognac, Surgères, l&apos;Île de Ré et l&apos;Île d&apos;Oléron.
              </article>
            </div>
            <div className="feature-block electric lg:absolute lg:left-[11vw] lg:top-[20vw] w-[30vw] max-lg:relative max-lg:left-0 max-lg:top-12 max-lg:w-full max-lg:px-[3vw] [&_img]:aspect-[3/4] [&_img]:w-full [&_img]:object-cover overflow-hidden rounded-xl">
              <img
                src="/assets/images/hexamob-vtc-chauffeur-haut-gamme-la-rochelle-aeroport.jpg"
                alt="Chauffeur VTC premium"
                className="w-full h-full object-cover rounded-xl"
                width={1200}
                height={800}
              />
            </div>
          </section>

          <div id="mark2" className="lg:-mt-[60vh]" />

          <section
            id="panels"
            className="relative z-[1] flex lg:h-screen w-screen overflow-hidden justify-start lg:-mt-[60vh]"
          >
            <div
              id="panels-inner"
              className="flex h-full w-[300vw] flex-row-reverse will-change-transform max-lg:h-auto max-lg:w-screen max-lg:flex-col"
            >
              <section
                id="digitalization"
                className={`${sectionCenterClass} max-lg:overflow-x-clip max-lg:overflow-y-visible`}
              >
                <h3 className={`${h3Class} px-[3vw] max-lg:w-[70vw]`}>
                  Digitalisation
                </h3>
                <h2 className={`${titleClass} w-[50vw] max-lg:w-[80vw]`}>
                  Nous mettons
                  <br />
                  la technologie
                  <br />
                  au service du VTC.
                </h2>
                <div
                  id="feature-points"
                  className="flex w-[60vw] flex-wrap max-lg:my-[4vw] max-lg:w-[400vw]"
                >
                  {[
                    [
                      "Réservation digitale",
                      "Nous utilisons des outils de gestion intégrée pour planifier, confirmer et suivre vos trajets VTC en temps réel.",
                    ],
                    [
                      "Traçabilité GPS",
                      "Grâce au suivi GPS en direct, nous savons à tout moment où se trouve votre chauffeur et votre véhicule.",
                    ],
                    [
                      "Service client 24/7",
                      "Notre équipe est toujours disponible pour répondre à vos demandes de transport et vos réservations.",
                    ],
                    [
                      "Suivi personnalisé",
                      "Notre suivi personnalisé facilite vos trajets réguliers, abonnements entreprise et gestion de flotte avec connectivité directe.",
                    ],
                    [
                      "Bientôt disponible",
                      "Application à venir prochainement...",
                    ],
                  ].map(([title, text]) => (
                    <div
                      key={title}
                      className="w-[20vw] p-[1vw_3vw] max-lg:w-[60vw]"
                    >
                      <h3 className="mb-[0.5vw] w-auto p-0 text-gold-500">
                        {title}
                      </h3>
                      {text}
                    </div>
                  ))}
                </div>
                <div
                  id="gps"
                  className="mx-[3vw] h-[52vw] w-[94vw] shrink-0 lg:absolute lg:right-0 lg:top-[15vh] lg:mx-0 lg:h-[75vh] lg:w-[56vw]"
                >
                  <img
                    src="/assets/images/ipad_iphone.png"
                    alt="Technologie"
                    className="w-full h-full object-contain"
                  />
                </div>
              </section>

              <section
                id="quality"
                className={`${sectionCenterClass} relative right-[100vw] max-lg:right-0 max-lg:mt-[140vh] max-lg:justify-start`}
              >
                <h3
                  className={`${h3Class} px-[3vw] max-lg:mt-[16vw] max-lg:w-[70vw]`}
                >
                  Qualité
                </h3>
                <h2 className={titleClass}>
                  Nous garantissons <br />
                  un service VTC
                  <br />
                  premium et fiable.
                </h2>
                <article className="relative z-[2] mx-[3vw] w-[50vw] max-lg:w-[90vw]">
                  Nous considérons la qualité du service comme pilier
                  stratégique de toute notre activité VTC. Véhicules entretenus
                  et chauffeurs formés nous permettent d&apos;offrir un
                  transport premium aux clients les plus exigeants. Jour après
                  jour, nous renforçons nos standards de confort, ponctualité et
                  élégance pour améliorer chaque trajet, en respectant les
                  exigences spécifiques de nos clients.
                  <br />
                  <br />
                  <HexamobButton href="/entreprise" className="link-entreprise">
                    Entreprise
                  </HexamobButton>
                </article>
                <QualityAmenities />
              </section>
            </div>
          </section>

          <div id="marker" className="lg:-mt-[60vh] h-px w-[5vw]" />

          <section
            id="closing"
            className="relative mt-[100vh] flex h-fit w-screen flex-col justify-center overflow-hidden py-[3vw] max-lg:mt-0 max-lg:h-[34vh]"
          >
            <div
              id="destinations"
              className="mx-[3vw] flex gap-x-[1vw] justify-center lg:justify-between py-[2vw] uppercase max-lg:flex-wrap max-lg:text-[92%] max-lg:[&_a]:p-[1vw]"
            >
              {stripDestinations.map((city) => {
                const destination = getDestinationByLabel(city);
                if (!destination) {
                  return <div key={city}>{city}</div>;
                }
                return (
                  <Link
                    key={city}
                    href={`/destinations/${destination.slug}`}
                    className="transition hover:text-white"
                  >
                    {city}
                  </Link>
                );
              })}
            </div>
            <div
              id="destination-line"
              className="ml-[3vw] h-px w-[94vw] origin-left bg-white/50"
            />
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
}
