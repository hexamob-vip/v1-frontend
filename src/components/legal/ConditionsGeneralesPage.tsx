"use client";

import { useEffect, type ReactNode } from "react";
import Link from "next/link";
import AmbientGlow from "@/components/layout/AmbientGlow";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { bootPageScroll } from "@/lib/hexamob/animations/bootPageScroll";
import { companyLegal } from "@/lib/hexamob/legal";

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

export default function ConditionsGeneralesPage() {
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
                Informations contractuelles
              </p>
              <h1 className="title font-type1 text-[7vw] font-thin uppercase leading-[0.95] text-white max-lg:text-[12vw]">
                Conditions
                <br />
                générales
              </h1>
            </div>
          </section>

          <section className="relative w-screen overflow-hidden bg-page px-[3vw] pb-[12vw] pt-[4vw] max-lg:pb-[20vw]">
            <div className="mx-auto max-w-[62vw] max-lg:max-w-none">
              <LegalBlock title="1. Objet">
                <p>
                  Les présentes conditions générales régissent les prestations de transport avec
                  chauffeur (VTC) proposées par {companyLegal.name}, société agréée VTC, auprès de
                  ses clients particuliers et professionnels. Toute réservation implique
                  l&apos;acceptation sans réserve des présentes conditions.
                </p>
              </LegalBlock>

              <LegalBlock title="2. Réservation">
                <p className="mb-[1vw] max-lg:mb-[3vw]">
                  À ce jour, les réservations s&apos;effectuent exclusivement par l&apos;un des
                  moyens suivants :
                </p>
                <ul className={listClass}>
                  <li>
                    Par téléphone au{" "}
                    <a
                      href={`tel:${companyLegal.phone.replace(/\s/g, "")}`}
                      className="text-gold-500 underline-offset-2 hover:underline"
                    >
                      {companyLegal.phone}
                    </a>
                  </li>
                  <li>
                    Via le{" "}
                    <Link href="/contact" className="text-gold-500 underline-offset-2 hover:underline">
                      formulaire de contact
                    </Link>{" "}
                    du site
                  </li>
                </ul>
                <p className="mt-[1vw] max-lg:mt-[3vw]">
                  Aucune réservation en ligne n&apos;est disponible pour le moment. Chaque demande
                  fait l&apos;objet d&apos;un devis ou d&apos;une confirmation écrite vous précisant
                  la date, l&apos;horaire, l&apos;itinéraire, le véhicule et le montant de la
                  prestation. Pour toute suite à donner à votre demande, il suffit de répondre à
                  cet e-mail ou d&apos;utiliser le{" "}
                  <Link href="/contact" className="text-gold-500 underline-offset-2 hover:underline">
                    formulaire de contact
                  </Link>
                  .
                </p>
              </LegalBlock>

              <LegalBlock title="3. Acompte et confirmation">
                <p>
                  La réservation d&apos;une course ou d&apos;un service n&apos;est effective
                  qu&apos;après versement d&apos;un <strong className="text-white">acompte de 15&nbsp;%</strong>{" "}
                  du montant total de la prestation, communiqué lors de la confirmation de
                  commande.
                </p>
                <p className="mt-[1vw] max-lg:mt-[3vw]">
                  Les modalités de règlement de cet acompte (virement bancaire ou autre moyen
                  accepté) vous sont transmises par {companyLegal.name} au moment de la validation.
                  Le solde restant est exigible selon les conditions précisées dans la confirmation
                  de réservation.
                </p>
              </LegalBlock>

              <LegalBlock title="4. Tarifs">
                <p>
                  Les tarifs sont établis en fonction de la prestation demandée (trajet, durée,
                  options, événement, etc.) et communiqués avant toute confirmation. Les prix
                  s&apos;entendent en euros, toutes taxes comprises lorsque la TVA est applicable.
                </p>
              </LegalBlock>

              <LegalBlock title="5. Modification et annulation">
                <p>
                  Toute modification ou annulation doit être signalée à {companyLegal.name} dans
                  les meilleurs délais, par téléphone, en répondant à l&apos;e-mail de confirmation
                  qui vous aura été envoyé, ou via le{" "}
                  <Link href="/contact" className="text-gold-500 underline-offset-2 hover:underline">
                    formulaire de contact
                  </Link>
                  . Les conditions d&apos;annulation et d&apos;éventuelle retenue sur l&apos;acompte
                  versé vous sont précisées lors de la confirmation de la prestation.
                </p>
              </LegalBlock>

              <LegalBlock title="6. Exécution de la prestation">
                <p>
                  {companyLegal.name} s&apos;engage à mettre en œuvre les moyens nécessaires pour
                  assurer une prestation de qualité, dans le respect des horaires convenus et de la
                  réglementation VTC en vigueur. Le client s&apos;engage à fournir des informations
                  exactes (point de prise en charge, destination, nombre de passagers, bagages,
                  etc.) lors de la réservation.
                </p>
              </LegalBlock>

              <LegalBlock title="7. Responsabilité">
                <p>
                  {companyLegal.name} est couverte par une assurance responsabilité civile
                  professionnelle conforme à la réglementation des transports de personnes. La
                  responsabilité de {companyLegal.name} ne saurait être engagée en cas de force
                  majeure ou de circonstances indépendantes de sa volonté (conditions météorologiques
                  exceptionnelles, grève, accident, etc.).
                </p>
              </LegalBlock>

              <LegalBlock title="8. Données personnelles">
                <p>
                  Les données collectées dans le cadre d&apos;une réservation sont traitées
                  conformément à notre{" "}
                  <Link
                    href="/confidentialite"
                    className="text-gold-500 underline-offset-2 hover:underline"
                  >
                    politique de confidentialité
                  </Link>
                  .
                </p>
              </LegalBlock>

              <LegalBlock title="9. Droit applicable">
                <p>
                  Les présentes conditions générales sont soumises au droit français. En cas de
                  litige, une solution amiable sera recherchée prioritairement. À défaut, les
                  tribunaux compétents seront ceux du ressort du siège social de {companyLegal.name}.
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
