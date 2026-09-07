"use client";

import { useEffect } from "react";
import AmbientGlow from "@/components/layout/AmbientGlow";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DestinationsStrip from "@/components/layout/DestinationsStrip";
import HexamobButton from "@/components/layout/HexamobButton";
import { bootPageScroll } from "@/lib/hexamob/animations/bootPageScroll";
import { initEntrepriseAnimations } from "@/lib/hexamob/animations/entrepriseAnimations";

const timeline = [
  {
    year: "2020",
    title: "Une passion, une vision",
    text: "HEXAMOB naît en Charente-Maritime avec une conviction simple : le transport avec chauffeur doit allier confort, ponctualité et élégance. Depuis nos premiers trajets, nous avons bâti une réputation d'excellence auprès de particuliers et d'entreprises.",
  },
  {
    year: "2025",
    title: "L'expertise premium",
    text: "Cinq années d'expérience VTC nous ont permis de développer un savoir-faire unique : anticiper les besoins, personnaliser chaque prestation et garantir un service irréprochable sur l'ensemble du département.",
  },
  {
    year: String(new Date().getFullYear()),
    title: "Une équipe engagée",
    text: "Des chauffeurs formés aux standards les plus exigeants, une flotte entretenue avec rigueur et une équipe disponible 24/7 en font le partenaire VTC de confiance pour Rochefort, La Rochelle, Royan, Saintes, Surgères et au-delà.",
  },
];

const values = [
  { label: "Confort", desc: "Véhicules haut de gamme, silence et sérénité à bord." },
  { label: "Ponctualité", desc: "Chaque minute compte — nous respectons vos horaires." },
  { label: "Élégance", desc: "Un service discret, raffiné, à la hauteur de vos attentes." },
];

const engagements = [
  {
    icon: "01",
    title: "Qualité du service",
    text: "Chaque trajet est préparé avec soin : réservation confirmée, itinéraire optimisé, accueil personnalisé. Notre engagement qualité s'applique du transfert aéroport au circuit touristique sur mesure.",
    image: "/assets/images/hexamob-vtc-chauffeur-haut-gamme-royan.jpg",
  },
  {
    icon: "02",
    title: "Véhicules entretenus",
    text: "Notre flotte premium fait l'objet d'un entretien rigoureux et régulier. Propreté impeccable, confort optimal et sécurité maximale — parce que votre expérience commence dès l'ouverture de la portière.",
    image: "/assets/images/hexamob-vtc-chauffeur-haut-gamme-rochefort.jpg",
  },
  {
    icon: "03",
    title: "Chauffeurs formés",
    text: "Nos chauffeurs VTC sont sélectionnés pour leur professionnalisme, leur courtoisie et leur connaissance du territoire. Formés aux standards premium, ils incarnent l'excellence HEXAMOB à chaque trajet.",
    image: "/assets/images/hexamob-vtc-chauffeur-haut-gamme-la-rochelle-aeroport.jpg",
  },
];

const certifications = [
  {
    title: "Licence VTC",
    desc: "Exploitation agréée conforme à la réglementation française. Tous nos chauffeurs disposent de leur carte VTC et respectent les obligations légales du transport de personnes.",
  },
  {
    title: "Assurance tous risques",
    desc: "Couverture complète passagers et véhicules pour votre tranquillité d'esprit, sur chaque prestation, quelle que soit la destination.",
  },
  {
    title: "Partenariats locaux",
    desc: "Collaborations établies avec des hôtels de prestige, des offices de tourisme et des entreprises de Charente-Maritime pour un service intégré et fiable.",
  },
];

const fleet = [
  {
    name: "Lexus ES 300h",
    tagline: "Élégance hybride",
    desc: "Notre berline phare : confort silencieux et motorisation hybride pour vos trajets quotidiens, transferts aéroport, déplacements professionnels et événements. L'alliance du raffinement et de la responsabilité.",
    specs: ["4 places", "Hybride", "Confort premium"],
    image: "/assets/images/hexamob-vtc-chauffeur-haut-gamme-la-rochelle-02.jpg",
  },
  {
    name: "Mercedes Classe V",
    tagline: "Petits groupes — ou équivalent",
    desc: "Van premium pour vos petits groupes : familles, EVG, navettes invités et déplacements à plusieurs. Espace, confort et discrétion, avec un véhicule équivalent selon disponibilité.",
    specs: ["Jusqu'à 7 places", "Grand volume bagages", "Idéal groupes"],
    image: "/assets/cars/hexamob-mercedes-classe-v-vtc-charente.jpg",
  },
  {
    name: "Tesla Model 3 2026",
    tagline: "100 % électrique",
    desc: "La dernière génération Tesla pour un trajet silencieux, technologique et responsable. Idéale pour les transferts urbains, aéroport et déplacements professionnels au quotidien.",
    specs: ["4 places", "100 % électrique", "Modèle 2026"],
    image: "/assets/cars/hexamob-tesla-y-vtc-charente.jpg",
  },
];

const partners = [
  "Hôtels & palaces",
  "Offices de tourisme",
  "Entreprises locales",
  "Événementiel",
  "Aéroports & gares",
];

const sectionClass = "relative flex w-screen overflow-hidden";
const titleClass = "title p-[3vw] font-type1 text-[5vw] font-thin leading-none text-white max-lg:text-[8vw]";
const h3Class = "text-[1.2vw] uppercase text-gold-500 max-lg:text-[3.5vw]";
const lineClass = "line absolute -top-[3vw] h-px w-full origin-left bg-white/50 max-lg:-top-[4vw]";

export default function EntreprisePage() {
  useEffect(() => bootPageScroll(initEntrepriseAnimations), []);

  return (
    <>
      <Header />
      <AmbientGlow />

      <div className="scroller fixed top-0 left-0 z-[99999] h-screen w-screen">
        <div id="main">
          {/* Hero */}
          <section
            id="hero-entreprise"
            className={`${sectionClass} min-h-screen items-end justify-start bg-[url('/assets/images/hexamob-vtc-chauffeur-haut-gamme-saintes.jpg')] bg-cover bg-center `}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-page via-page/60 to-page/30" />
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
                À propos
              </p>
              <h1 className="font-type1 text-[10vw] font-thin uppercase leading-[0.9] text-white max-lg:text-[14vw]">
                Notre
                <br />
                histoire
              </h1>
              <div className="mt-[2vw] flex items-end gap-[4vw] max-lg:mt-[4vw] max-lg:flex-col max-lg:items-start">
                <p className="w-[40vw] text-white/80 max-lg:w-full">
                  Depuis 2020, HEXAMOB incarne l&apos;excellence du VTC premium en Charente-Maritime. Découvrez
                  l&apos;engagement, les certifications et la flotte qui font notre différence.
                </p>
                <div className="text-[3vw] text-gold-500 max-lg:text-[8vw]">DEPUIS 2020</div>
              </div>
            </div>
          </section>

          {/* Notre histoire — timeline narrative */}
          <section id="histoire" className={`${sectionClass} flex-col py-[10vw] max-lg:py-[20vw]`}>
          <div className="absolute inset-0 bg-gradient-to-b pointer-events-none from-page via-page/60 to-page/30" />
           
            <div className="relative mx-[3vw] mb-[6vw]">
              <div className={lineClass} />
              <h3 className={h3Class}>Notre histoire</h3>
              <h2 className={`${titleClass} !p-0 !pt-[2vw]`}>
                Une aventure
                <br />
                née en Charente-Maritime.
              </h2>
            </div>

            <div className="mx-[3vw] flex w-[94vw] flex-col gap-[6vw] max-lg:gap-[10vw]">
              {timeline.map((item) => (
                <div
                  key={item.year}
                  className="timeline-item grid grid-cols-[12vw_1fr] gap-[4vw] max-lg:grid-cols-1 max-lg:gap-[2vw]"
                >
                  <div className="font-type1 text-[6vw] leading-none text-gold-500/60 max-lg:text-[12vw]">
                    {item.year}
                  </div>
                  <div>
                    <h3 className={`${h3Class} mb-[1vw]`}>{item.title}</h3>
                    <p className="w-[50vw] text-white/80 max-lg:w-full">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mx-[3vw] mt-[8vw] flex gap-[2vw] max-lg:mt-[12vw] max-lg:flex-col max-lg:gap-[4vw]">
              {values.map((value) => (
                <div
                  key={value.label}
                  className="flex-1 border-l border-gold-800/40 pl-[2vw] max-lg:border-l-0 max-lg:border-t max-lg:pt-[3vw] max-lg:pl-0"
                >
                  <div className="mb-[0.5vw] font-type1 text-[3vw] text-white max-lg:text-[7vw]">{value.label}</div>
                  <p className="text-white/60 max-lg:text-[3.2vw]">{value.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Image interlude */}
          <section className={`${sectionClass} destination-banner h-[60vh] max-lg:h-[40vh]`}>
            <div className="relative h-full w-full overflow-hidden">
              <div className="destination-banner-media absolute inset-x-0 top-0 h-[150%] w-full will-change-transform">
                <img
                  src="/assets/images/hexamob-vtc-chauffeur-privee-rochefort-charente.jpg"
                  alt="Chauffeur VTC premium HEXAMOB à Rochefort"
                  className="h-full w-full object-cover"
                  onLoad={() => {
                    import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => ScrollTrigger.refresh());
                  }}
                />
              </div>
              <div className="absolute inset-0 z-[1] bg-page/50" />
              <div className="relative z-10 flex h-full w-full items-center justify-center p-[3vw]">
                <blockquote className="title max-w-[70vw] text-center font-type1 text-[4vw] font-thin italic leading-snug text-white max-lg:text-[6vw]">
                  « Chaque trajet est une promesse tenue — confort, ponctualité et élégance, sans compromis. »
                </blockquote>
              </div>
            </div>
          </section>

          {/* Notre engagement */}
          <section id="engagement" className={`${sectionClass} flex-col py-[10vw] max-lg:py-[20vw]`}>
            <div className="relative mx-[3vw] mb-[6vw]">
              <div className={lineClass} />
              <h3 className={h3Class}>Notre engagement</h3>
              <h2 className={`${titleClass} !p-0 !pt-[2vw]`}>
                L&apos;excellence
                <br />
                au cœur de chaque trajet.
              </h2>
            </div>

            <div className="mx-[3vw] flex w-[94vw] flex-col gap-[8vw] max-lg:gap-[12vw]">
              {engagements.map((item) => (
                <div
                  key={item.title}
                  className="engagement-card grid grid-cols-2 items-center gap-[4vw] max-lg:grid-cols-1 max-lg:gap-[4vw]"
                >
                  <div className={item.icon === "02" ? "order-2 max-lg:order-1" : ""}>
                    <span className="mb-[1vw] block font-type1 text-[8vw] leading-none text-white/10 max-lg:text-[15vw]">
                      {item.icon}
                    </span>
                    <h3 className={`${h3Class} mb-[1.5vw]`}>{item.title}</h3>
                    <p className="w-[38vw] text-white/80 max-lg:w-full">{item.text}</p>
                  </div>
                  <div
                    className={`relative aspect-[4/3] overflow-hidden rounded-xl ${item.icon === "02" ? "order-1 max-lg:order-2" : ""}`}
                  >
                    <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-page/40 to-transparent" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Nos certifications */}
          <section
            id="certifications"
            className={`${sectionClass} flex-col py-[10vw] max-lg:py-[20vw]`}
          >
            <div className="relative mx-[3vw] mb-[6vw]">
              <div className={lineClass} />
              <h3 className={h3Class}>Nos certifications</h3>
              <h2 className={`${titleClass} !p-0 !pt-[2vw]`}>
                Reconnu,
                <br />
                certifié, de confiance.
              </h2>
            </div>

            <div className="mx-[3vw] grid w-[94vw] grid-cols-3 gap-[3vw] max-lg:grid-cols-1 max-lg:gap-[6vw]">
              {certifications.map((cert) => (
                <div key={cert.title} className="cert-item border border-white/10 p-[2vw] max-lg:p-[4vw] rounded-xl backdrop-blur-lg bg-page/40">
                  <h3 className={`${h3Class} mb-[1.5vw]`}>{cert.title}</h3>
                  <p className="text-white/70">{cert.desc}</p>
                </div>
              ))}
            </div>

            <div className="mx-[3vw] mt-[6vw] max-lg:mt-[10vw]">
              <h3 className={`${h3Class} mb-[2vw]`}>Partenaires & réseau</h3>
              <div className="flex flex-wrap gap-[2vw] uppercase text-white/50 max-lg:gap-[3vw] max-lg:text-[2.8vw]">
                {partners.map((partner) => (
                  <span key={partner} className="border border-white/20 px-[1.5vw] py-[0.5vw] max-lg:px-[3vw] max-lg:py-[1vw] rounded-xl backdrop-blur-lg bg-page/5">
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Notre flotte */}
          <section id="flotte" className={`${sectionClass} flex-col py-[10vw] max-lg:py-[20vw]`}>
            <div className="relative mx-[3vw] mb-[6vw]">
              <div className={lineClass} />
              <h3 className={h3Class}>Notre flotte</h3>
              <h2 className={`${titleClass} !p-0 !pt-[2vw]`}>
                Des véhicules
                <br />
                à la hauteur de vos attentes.
              </h2>
            </div>

            <div className="mx-[3vw] grid w-[94vw] grid-cols-3 gap-[2vw] max-lg:grid-cols-1 max-lg:gap-[6vw]">
              {fleet.map((vehicle) => (
                <div key={vehicle.name} className="fleet-card group overflow-hidden rounded-xl border border-white/10 backdrop-blur-lg bg-page/90">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-page via-page/20 to-transparent" />
                    <div className="absolute bottom-0 p-[2vw] max-lg:p-[4vw]">
                      <p className="text-[0.9vw] uppercase text-gold-500 max-lg:text-[2.8vw]">{vehicle.tagline}</p>
                      <h3 className="font-type1 text-[2.5vw] text-white max-lg:text-[6vw]">{vehicle.name}</h3>
                    </div>
                  </div>
                  <div className="p-[2vw] max-lg:p-[4vw]">
                    <p className="mb-[1.5vw] text-white/70">{vehicle.desc}</p>
                    <ul className="flex flex-wrap gap-[1vw] max-lg:gap-[2vw]">
                      {vehicle.specs.map((spec) => (
                        <li
                          key={spec}
                          className="text-[0.85vw] uppercase text-white/40 max-lg:text-[2.5vw]"
                        >
                          {spec}
                          <span className="mx-[0.5vw] text-gold-500">·</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mx-[3vw] mt-[6vw] max-lg:mt-[10vw]">
              <HexamobButton href="/">Réserver un trajet</HexamobButton>
            </div>
          </section>

          <DestinationsStrip />

          <Footer />
        </div>
      </div>
    </>
  );
}
