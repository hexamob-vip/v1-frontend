import PaymentMethods from "@/components/layout/PaymentMethods";
import { footerLinks } from "@/lib/hexamob/navigation";

export default function Footer() {
  return (
    <section className="footer relative w-screen overflow-hidden bg-page max-lg:flex max-lg:h-fit max-lg:flex-col max-lg:overflow-visible lg:flex lg:h-[53vh] lg:min-h-[29vw]">
      <div className="arrow-footer-1 pointer-events-none absolute -left-[30vw] -top-[5vh] z-0 hidden h-[70vh] w-[70vh] rotate-[135deg] bg-gradient-to-br from-gold-800/50 via-transparent to-transparent opacity-80 lg:block" />
      <div className="arrow-footer-2 pointer-events-none absolute -left-[20vw] -top-[5vh] z-0 hidden h-[70vh] w-[70vh] rotate-[135deg] bg-gradient-to-br from-gold-800/50 via-transparent to-transparent opacity-80 lg:block" />

      <div className="relative z-[1] flex max-lg:flex-col max-lg:gap-[8vw] max-lg:px-[6vw] max-lg:pt-[10vw] lg:contents">
        <div className="pamplona relative z-[99] text-white max-lg:w-full lg:p-[3vw]">
          <div
            id="cert"
            className="uppercase max-lg:mb-[3vw] max-lg:text-[2.8vw] lg:absolute lg:-mt-[1.7vw] lg:w-[6vw] lg:text-[0.5vw]"
          >
            Chauffeur VTC certifié
          </div>
          France
          <br />
          <br />
          <a href="tel:+34948853453">[+34] 948 85 34 53</a>
          <br />
          <br />
          <a href="mailto:infosp@hexamob.com">infosp@hexamob.com</a>
          <br />
          <br />
          <a href="https://maps.app.goo.gl/hRXURRoJ5qqAM9rT8" target="_blank" rel="noreferrer">
            Cité du Transport de Pampelune.
            <br />
            Place Europe 15, 1er étage, bureau 5.
            <br />
            31119 Imárcoain (Navarre)
          </a>
        </div>

        <div className="francia relative z-[99] text-white max-lg:w-full lg:ml-[4vw] lg:p-[3vw]">
          MOUGUERRE
          <br />
          Francia
          <br />
          <br />
          <a href="tel:+33559932456">[+33] 5 59 93 24 56</a>
          <br />
          <br />
          <a href="mailto:contact@hexamob.vip">contact@hexamob.vip</a>
          <br />
          <br />
          <a href="https://goo.gl/maps/dHHfiaexPDi67ihT8" target="_blank" rel="noreferrer">
            12 Rue Alegera BP 80052
            <br />
            Centre Européen de Fret
            <br />
            64990 Mouguerre
          </a>
        </div>

        <div className="marruecos relative z-[99] text-white max-lg:w-full lg:ml-[4vw] lg:p-[3vw]">
          TANGER
          <br />
          Maroc
          <br />
          <br />
          <a href="tel:+212539940932">[+212] 539 940 932</a>
          <br />
          <br />
          <a href="mailto:infoma@hexamob.com">infoma@hexamob.com</a>
          <br />
          <br />
          <a href="https://maps.app.goo.gl/8xKxBdVUEnFFpnAz5" target="_blank" rel="noreferrer">
            Boulevard Mohamed V 80052
            <br />
            Residende Bovapes Building , 5 etge, bureau nº29
            <br />
            90000 Tangier
          </a>
        </div>
      </div>

      <nav className="submenu relative z-[1] max-lg:mt-[8vw] max-lg:w-full max-lg:px-[6vw] lg:ml-[7.5vw] lg:w-[18vw] lg:pt-[3vw]">
        <ul className="flex flex-col text-white max-lg:w-full lg:w-[15vw] [&_li]:cursor-pointer [&_li]:border-b [&_li]:border-white [&_li]:py-[0.3vw] max-lg:[&_li]:py-[2vw] [&_li:hover_span]:ml-[1vw] [&_span.on]:ml-[1vw] [&_span]:mr-[0.5vw] [&_span]:text-gold-800 [&_span]:transition-all [&_span]:duration-300">
          {footerLinks.map((item) => (
            <li key={item.label}>
              <span>▸</span>
              <a
                href={item.href}
                target={"external" in item && item.external ? "_blank" : undefined}
                rel="noreferrer"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="footer-copy relative z-[1] uppercase text-white max-lg:mt-[8vw] max-lg:w-full max-lg:px-[6vw] max-lg:pb-[8vw] lg:absolute lg:bottom-0 lg:left-[47vw] lg:p-[2vw]">
        <PaymentMethods />

        <div
          id="navarre-gov-text"
          className="p-[0.5vw_0.3vw] text-[2.8vw] leading-snug max-lg:mt-[4vw] lg:w-[27.4vw] lg:text-[0.53vw]"
        >
          Cette entreprise a bénéficié d&apos;une aide cofinancée à hauteur de 40 % par le Fonds européen de
          développement régional dans le cadre du programme opérationnel FEDER 2021-2027 de Navarre.
          <br />
          <br />
          Cette entreprise a reçu une subvention du gouvernement de Navarre dans le cadre de l&apos;appel à projets 2024
          pour l&apos;amélioration de la compétitivité.
        </div>

        <div className="mt-[6vw] flex flex-col gap-[4vw] lg:hidden">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://es.linkedin.com/company/hexamob"
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

      <div className="design-credit absolute bottom-0 right-0 hidden p-[3vw] uppercase text-white lg:block [&_a:hover]:text-gold-800">
        Design réalisé par{" "}
        <a target="_blank" rel="noreferrer" href="https://digenius.fr">
          Digenius
        </a>
        .
      </div>

      <div className="linkedin absolute bottom-[6vw] left-[82vw] z-[9] hidden text-white lg:block [&_a:hover]:text-gold-800 [&_span]:mr-[0.5vw] [&_span]:text-gold-800">
        <a target="_blank" rel="noreferrer" href="https://es.linkedin.com/company/hexamob">
          <span>▸</span>
          LinkedIn
        </a>
      </div>
    </section>
  );
}
