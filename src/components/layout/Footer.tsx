import PaymentMethods from "@/components/layout/PaymentMethods";
import FooterLinkList from "@/components/layout/FooterLinkList";
import {
  footerActionLinks,
  footerGeneralLinks,
  footerLegalLinks,
  footerServiceLinks,
} from "@/lib/hexamob/navigation";

export default function Footer() {
  return (
    <section className="footer relative w-screen overflow-hidden bg-page max-lg:flex max-lg:h-fit max-lg:flex-col max-lg:overflow-visible lg:flex lg:h-[53vh] lg:min-h-[29vw]">
      <div className="arrow-footer-1 pointer-events-none absolute -left-[30vw] -top-[5vh] z-0 hidden h-[70vh] w-[70vh] rotate-[135deg] bg-gradient-to-br from-gold-800/50 via-transparent to-transparent opacity-80 lg:block" />
      <div className="arrow-footer-2 pointer-events-none absolute -left-[20vw] -top-[5vh] z-0 hidden h-[70vh] w-[70vh] rotate-[135deg] bg-gradient-to-br from-gold-800/50 via-transparent to-transparent opacity-80 lg:block" />

      <div className="submenu relative z-[99] flex max-lg:flex-col max-lg:gap-[8vw] max-lg:px-[6vw] max-lg:pt-[10vw] lg:contents">
        <nav className="pointer-events-auto relative max-lg:w-full lg:p-[3vw]">
          <div
            id="cert"
            className="uppercase max-lg:mb-[3vw] max-lg:text-[2.8vw] lg:absolute lg:-mt-[1.7vw] lg:w-[6vw] lg:text-[0.5vw]"
          >
            Chauffeur VTC certifié
          </div>
          <FooterLinkList links={footerGeneralLinks} />
        </nav>

        <nav className="pointer-events-auto relative text-white max-lg:w-full lg:ml-[4vw] lg:p-[3vw]">
          <FooterLinkList links={footerServiceLinks} />
        </nav>

        <nav className="pointer-events-auto relative text-white max-lg:w-full lg:ml-[4vw] lg:p-[3vw]">
          <FooterLinkList links={footerActionLinks} />
        </nav>
      </div>

      <nav className="submenu pointer-events-auto relative z-[1] max-lg:mt-[8vw] max-lg:w-full max-lg:px-[6vw] lg:ml-[7.5vw] lg:w-[18vw] lg:pt-[3vw]">
        <FooterLinkList links={footerLegalLinks} />
      </nav>

      <div className="footer-copy relative z-[1] uppercase text-white max-lg:mt-[8vw] max-lg:w-full max-lg:px-[6vw] max-lg:pb-[8vw] lg:absolute lg:bottom-0 lg:left-[47vw] lg:p-[2vw]">
        <PaymentMethods />

        <div
          id="vtc-compliance-text"
          className="p-[0.5vw_0.3vw] text-[2.8vw] leading-snug max-lg:mt-[4vw] lg:w-[27.4vw] lg:text-[0.53vw]"
        >
          Société agréée VTC — HEXAMOB dispose de l&apos;ensemble des licences et autorisations
          requises pour l&apos;exploitation de services de transport avec chauffeur en France :
          inscription au registre des VTC, assurance responsabilité civile professionnelle et
          chauffeurs titulaires de la carte professionnelle VTC.
        </div>

        <div className="mt-[6vw] flex flex-col gap-[4vw] lg:hidden">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://fr.linkedin.com/company/hexamob"
            className="[&_span]:mr-[0.5vw] [&_span]:text-gold-800"
          >
            <span>▸</span>
            LinkedIn
          </a>
          <div className="[&_a:hover]:text-gold-800">
            Design réalisé par{" "}
            <a target="_blank" rel="noreferrer" href="https://digenius.fr">
              Digenius
            </a>
            .
          </div>
          <div className="text-[12.4vw] leading-[0.7]">© 2026 HEXAMOB</div>
        </div>
      </div>

      <div className="hexamob absolute bottom-0 hidden p-[3vw] text-[5vw] leading-[0.7] text-white lg:block">
        © 2026 HEXAMOB
      </div>

      <div className="design-credit text-xs pointer-events-auto absolute bottom-0 right-0 z-10 hidden p-[3vw] uppercase text-white lg:block [&_a:hover]:text-gold-800">
        Design réalisé par{" "}
        <a target="_blank" rel="noreferrer" href="https://digenius.fr">
          Digenius
        </a>
        .
      </div>

      <div className="linkedin absolute bottom-[6vw] left-[82vw] z-[9] hidden text-white lg:block [&_a:hover]:text-gold-800 [&_span]:mr-[0.5vw] [&_span]:text-gold-800">
        <a target="_blank" rel="noreferrer" href="https://fr.linkedin.com/company/hexamob">
          <span>▸</span>
          LinkedIn
        </a>
      </div>
    </section>
  );
}
