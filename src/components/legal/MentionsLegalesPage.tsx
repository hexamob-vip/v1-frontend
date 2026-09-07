"use client";

import { useEffect, type ReactNode } from "react";
import Link from "next/link";
import AmbientGlow from "@/components/layout/AmbientGlow";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { bootPageScroll } from "@/lib/hexamob/animations/bootPageScroll";
import { companyLegal, getSiteDomain, hostingLegal } from "@/lib/hexamob/legal";
import { getSiteUrl } from "@/lib/hexamob/site";

const sectionTitleClass =
  "mb-[1.5vw] font-type1 text-[2.2vw] font-thin text-white max-lg:mb-[4vw] max-lg:text-[6vw]";
const blockClass = "mb-[4vw] max-lg:mb-[8vw]";
const textClass = "text-white/75 leading-relaxed max-lg:text-[3.2vw]";
const labelClass = "mb-[0.4vw] text-[0.75vw] uppercase tracking-[0.2em] text-gold-500 max-lg:mb-[1.5vw] max-lg:text-[2.5vw]";

function LegalBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <article className={blockClass}>
      <h2 className={sectionTitleClass}>{title}</h2>
      <div className={textClass}>{children}</div>
    </article>
  );
}

export default function MentionsLegalesPage() {
  const siteUrl = getSiteUrl();
  const siteDomain = getSiteDomain();
  const fullAddress = `${companyLegal.address.street}, ${companyLegal.address.postalCode} ${companyLegal.address.city}`;

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
                Informations légales
              </p>
              <h1 className="title font-type1 text-[7vw] font-thin uppercase leading-[0.95] text-white max-lg:text-[12vw]">
                Mentions
                <br />
                légales
              </h1>
            </div>
          </section>

          <section className="relative w-screen overflow-hidden bg-page px-[3vw] pb-[12vw] pt-[4vw] max-lg:pb-[20vw]">
            <div className="mx-auto max-w-[62vw] max-lg:max-w-none">
              <LegalBlock title="Éditeur du site">
                <p className="mb-[1vw] max-lg:mb-[3vw]">
                  Le présent site <strong className="text-white">{siteDomain}</strong> est édité
                  par :
                </p>
                <ul className="space-y-[0.6vw] max-lg:space-y-[2vw]">
                  <li>
                    <span className={labelClass}>Raison sociale</span>
                    <br />
                    {companyLegal.name} — {companyLegal.legalForm}
                  </li>
                  <li>
                    <span className={labelClass}>Siège social</span>
                    <br />
                    {fullAddress}, {companyLegal.address.country}
                  </li>
                  <li>
                    <span className={labelClass}>Immatriculation</span>
                    <br />
                    SIREN {companyLegal.siren} — SIRET {companyLegal.siret}
                    <br />
                    RCS {companyLegal.rcs}
                  </li>
                  <li>
                    <span className={labelClass}>N° de TVA intracommunautaire</span>
                    <br />
                    {companyLegal.vat}
                  </li>
                  <li>
                    <span className={labelClass}>Capital social</span>
                    <br />
                    {companyLegal.capital}
                  </li>
                  <li>
                    <span className={labelClass}>Activité</span>
                    <br />
                    {companyLegal.activity}
                  </li>
                </ul>
              </LegalBlock>

              <LegalBlock title="Directeur de la publication">
                <p>
                  Le directeur de la publication est <strong className="text-white">{companyLegal.director}</strong>, en
                  qualité de gérant de la société {companyLegal.name}.
                </p>
              </LegalBlock>

              <LegalBlock title="Contact">
                <p>
                  Pour toute question relative au site ou à nos services, utilisez notre{" "}
                  <Link href="/contact" className="text-gold-500 underline-offset-2 hover:underline">
                    formulaire de contact
                  </Link>
                  .
                </p>
              </LegalBlock>

              <LegalBlock title="Hébergement">
                <p className="mb-[1vw] max-lg:mb-[3vw]">
                  Le site est hébergé par :
                </p>
                <ul className="space-y-[0.6vw] max-lg:space-y-[2vw]">
                  <li>
                    <span className={labelClass}>Hébergeur</span>
                    <br />
                    {hostingLegal.name}
                  </li>
                  <li>
                    <span className={labelClass}>Adresse</span>
                    <br />
                    {hostingLegal.address}
                  </li>
                  <li>
                    <span className={labelClass}>Site web</span>
                    <br />
                    <a
                      href={hostingLegal.website}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gold-500 underline-offset-2 hover:underline"
                    >
                      {hostingLegal.website}
                    </a>
                  </li>
                </ul>
              </LegalBlock>

              <LegalBlock title="Propriété intellectuelle">
                <p>
                  L&apos;ensemble des éléments composant le site {siteUrl} (textes, visuels,
                  graphismes, logo, structure, vidéos) est protégé par le droit de la propriété
                  intellectuelle. Toute reproduction, représentation, modification ou exploitation,
                  totale ou partielle, sans autorisation écrite préalable de {companyLegal.name},
                  est interdite.
                </p>
              </LegalBlock>

              <LegalBlock title="Données personnelles">
                <p>
                  Pour en savoir plus sur la collecte et le traitement de vos données, consultez
                  notre{" "}
                  <Link
                    href="/confidentialite"
                    className="text-gold-500 underline-offset-2 hover:underline"
                  >
                    politique de confidentialité
                  </Link>
                  . Vous pouvez également gérer vos préférences cookies via le lien « Cookies » en
                  pied de page.
                </p>
              </LegalBlock>

              <LegalBlock title="Limitation de responsabilité">
                <p>
                  {companyLegal.name} s&apos;efforce d&apos;assurer l&apos;exactitude des
                  informations diffusées sur ce site. Toutefois, la société ne saurait être tenue
                  responsable des erreurs, omissions ou d&apos;une indisponibilité temporaire du
                  service. L&apos;utilisateur reconnaît utiliser le site sous sa responsabilité
                  exclusive.
                </p>
              </LegalBlock>

              <p className="text-[0.7vw] uppercase tracking-[0.15em] text-white/40 max-lg:text-[2.5vw]">
                Dernière mise à jour — septembre 2026
              </p>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
}
