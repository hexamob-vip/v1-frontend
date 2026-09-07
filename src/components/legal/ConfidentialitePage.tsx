"use client";

import { useEffect, type ReactNode } from "react";
import Link from "next/link";
import AmbientGlow from "@/components/layout/AmbientGlow";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { bootPageScroll } from "@/lib/hexamob/animations/bootPageScroll";
import { companyLegal, getSiteDomain } from "@/lib/hexamob/legal";
import { openCookieConsent } from "@/lib/hexamob/cookies";

const sectionTitleClass =
  "mb-[1.5vw] font-type1 text-[2.2vw] font-thin text-white max-lg:mb-[4vw] max-lg:text-[6vw]";
const blockClass = "mb-[4vw] max-lg:mb-[8vw]";
const textClass = "text-white/75 leading-relaxed max-lg:text-[3.2vw]";
const listClass = "mt-[1vw] list-disc space-y-[0.6vw] pl-[1.2vw] max-lg:mt-[3vw] max-lg:space-y-[2vw] max-lg:pl-[4vw]";

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

export default function ConfidentialitePage() {
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
                Protection des données
              </p>
              <h1 className="title font-type1 text-[7vw] font-thin uppercase leading-[0.95] text-white max-lg:text-[12vw]">
                Politique de
                <br />
                confidentialité
              </h1>
            </div>
          </section>

          <section className="relative w-screen overflow-hidden bg-page px-[3vw] pb-[12vw] pt-[4vw] max-lg:pb-[20vw]">
            <div className="mx-auto max-w-[62vw] max-lg:max-w-none">
              <LegalBlock title="1. Responsable du traitement">
                <p>
                  Le responsable du traitement des données personnelles collectées sur le site{" "}
                  <strong className="text-white">{siteDomain}</strong> est {companyLegal.name},{" "}
                  {companyLegal.legalForm}, dont le siège social est situé {fullAddress},{" "}
                  {companyLegal.address.country} (SIREN {companyLegal.siren}).
                </p>
              </LegalBlock>

              <LegalBlock title="2. Données collectées">
                <p className="mb-[1vw] max-lg:mb-[3vw]">
                  Dans le cadre de l&apos;utilisation du site et de nos services VTC, nous pouvons
                  collecter les catégories de données suivantes :
                </p>
                <ul className={listClass}>
                  <li>
                    Données d&apos;identification et de contact : nom, prénom, adresse e-mail,
                    numéro de téléphone
                  </li>
                  <li>
                    Données relatives à votre demande : objet, message, informations de trajet ou de
                    prestation
                  </li>
                  <li>
                    Données techniques : adresse IP, logs de connexion, type de navigateur, pages
                    consultées
                  </li>
                  <li>Données liées aux cookies et traceurs (voir section dédiée)</li>
                </ul>
              </LegalBlock>

              <LegalBlock title="3. Finalités et bases légales">
                <p className="mb-[1vw] max-lg:mb-[3vw]">
                  Vos données sont traitées pour les finalités suivantes :
                </p>
                <ul className={listClass}>
                  <li>
                    Répondre à vos demandes de contact, de devis ou de réservation (exécution de
                    mesures précontractuelles ou contrat)
                  </li>
                  <li>Assurer la gestion de la relation client et le suivi des prestations VTC</li>
                  <li>Assurer la sécurité du site et en prévenir les usages abusifs</li>
                  <li>Mesurer l&apos;audience et améliorer l&apos;expérience utilisateur (cookies)</li>
                  <li>Respecter nos obligations légales et réglementaires</li>
                </ul>
              </LegalBlock>

              <LegalBlock title="4. Durée de conservation">
                <p>
                  Les données sont conservées pendant la durée nécessaire à la finalité du
                  traitement, puis archivées ou supprimées conformément aux obligations légales.
                  Les demandes via le formulaire de contact sont conservées le temps de traiter la
                  demande et d&apos;assurer le suivi commercial, sauf obligation légale contraire.
                </p>
              </LegalBlock>

              <LegalBlock title="5. Destinataires des données">
                <p>
                  Vos données sont destinées aux services internes de {companyLegal.name} habilités à
                  les traiter. Elles peuvent être transmises à nos sous-traitants techniques
                  (hébergement, messagerie) dans la stricte limite de leurs missions et sous notre
                  responsabilité.
                </p>
              </LegalBlock>

              <LegalBlock title="6. Cookies">
                <p>
                  Lors de votre navigation, des cookies peuvent être déposés sur votre terminal pour
                  assurer le fonctionnement du site et, avec votre accord, mesurer l&apos;audience.
                  Vous pouvez à tout moment gérer vos préférences via le lien{" "}
                  <button
                    type="button"
                    onClick={openCookieConsent}
                    className="text-gold-500 underline-offset-2 hover:underline"
                  >
                    Cookies
                  </button>{" "}
                  en pied de page ou refuser les cookies non essentiels lors de votre première visite.
                </p>
              </LegalBlock>

              <LegalBlock title="7. Vos droits">
                <p className="mb-[1vw] max-lg:mb-[3vw]">
                  Conformément au Règlement général sur la protection des données (RGPD) et à la loi
                  Informatique et Libertés, vous disposez des droits suivants :
                </p>
                <ul className={listClass}>
                  <li>Droit d&apos;accès, de rectification et de mise à jour</li>
                  <li>Droit à l&apos;effacement et à la limitation du traitement</li>
                  <li>Droit d&apos;opposition et à la portabilité de vos données</li>
                  <li>Droit de retirer votre consentement à tout moment (cookies)</li>
                </ul>
                <p className="mt-[1vw] max-lg:mt-[3vw]">
                  Pour exercer vos droits, contactez-nous via le{" "}
                  <Link href="/contact" className="text-gold-500 underline-offset-2 hover:underline">
                    formulaire de contact
                  </Link>
                  , par téléphone au{" "}
                  <a
                    href={`tel:${companyLegal.phone.replace(/\s/g, "")}`}
                    className="text-gold-500 underline-offset-2 hover:underline"
                  >
                    {companyLegal.phone}
                  </a>
                  , ou en répondant à l&apos;e-mail qui vous aura été adressé dans le cadre de nos
                  échanges.
                </p>
                <p className="mt-[1vw] max-lg:mt-[3vw]">
                  Vous pouvez également introduire une réclamation auprès de la CNIL (
                  <a
                    href="https://www.cnil.fr"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gold-500 underline-offset-2 hover:underline"
                  >
                    www.cnil.fr
                  </a>
                  ).
                </p>
              </LegalBlock>

              <LegalBlock title="8. Sécurité">
                <p>
                  {companyLegal.name} met en œuvre les mesures techniques et organisationnelles
                  appropriées pour protéger vos données contre la perte, l&apos;accès non autorisé,
                  la divulgation ou l&apos;altération.
                </p>
              </LegalBlock>

              <LegalBlock title="9. Transferts hors Union européenne">
                <p>
                  Le site est hébergé par Vercel Inc. (États-Unis). Lorsque des données sont
                  transférées hors de l&apos;Union européenne, nous veillons à ce que des garanties
                  appropriées soient mises en place conformément à la réglementation applicable.
                </p>
              </LegalBlock>

              <LegalBlock title="10. Modifications">
                <p>
                  La présente politique de confidentialité peut être mise à jour à tout moment.
                  Nous vous invitons à la consulter régulièrement. Pour en savoir plus sur nos
                  conditions de service, consultez nos{" "}
                  <Link
                    href="/conditions-generales"
                    className="text-gold-500 underline-offset-2 hover:underline"
                  >
                    conditions générales
                  </Link>
                  .
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
