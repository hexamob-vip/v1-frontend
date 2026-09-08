"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type MouseEvent, type ReactNode } from "react";
import { getScrollbar } from "@/lib/hexamob/animations/setupScroll";
import { cn } from "@/lib/hexamob/cn";
import { navLinks, serviceLinks } from "@/lib/hexamob/navigation";
import HexamobButton from "@/components/layout/HexamobButton";

const linkClass =
  "link relative uppercase before:absolute before:bottom-0 before:left-0 before:top-[1.2vw] before:h-px before:w-full before:scale-x-0 before:bg-gradient-to-l before:from-gold-500 before:to-transparent before:transition-transform before:duration-200 before:origin-right hover:before:scale-x-100 hover:before:origin-left aria-[current=page]:before:scale-x-100 aria-[current=page]:before:origin-left aria-[current=page]:pointer-events-none max-lg:before:hidden max-lg:aria-[current=page]:before:hidden max-lg:aria-[current=page]:opacity-50";

const submenuClass =
  "absolute left-0 top-full z-10 hidden min-w-[22vw] flex-col border-l border-gold-500 py-[0.5vw] pl-[1vw] pt-[0.8vw] opacity-0 transition-opacity duration-300 before:absolute before:inset-x-0 before:-top-[0.8vw] before:h-[0.8vw] before:content-[''] group-[.open]/services:flex group-[.open]/services:opacity-100 lg:group-hover/services:flex lg:group-hover/services:opacity-100 max-h-[70vh] overflow-y-auto";

function isNavActive(pathname: string, href: string, exact = false) {
  if (href === "/" || exact) return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}

type NavAnchorProps = {
  href: string;
  className?: string;
  children: ReactNode;
  exact?: boolean;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
};

function NavAnchor({
  href,
  className,
  children,
  exact,
  onClick,
}: NavAnchorProps) {
  const pathname = usePathname();
  const active = isNavActive(pathname, href, exact);

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(linkClass, className)}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesActive = isNavActive(pathname, "/services");

  const closeMobile = () => setMobileOpen(false);

  useEffect(() => {
    setScrolled(false);

    let scrollbarListener:
      | ((status: { offset: { y: number } }) => void)
      | null = null;
    let attachedScrollbar: ReturnType<typeof getScrollbar> = null;
    let retryTimer: ReturnType<typeof setInterval> | null = null;

    const updateFromOffset = (offsetY: number) => {
      setScrolled(offsetY > 0);
    };

    const attachScrollbarListener = () => {
      const scrollbar = getScrollbar();
      if (!scrollbar || scrollbarListener) return false;

      scrollbarListener = ({ offset }) => updateFromOffset(offset.y);
      attachedScrollbar = scrollbar;
      scrollbar.addListener(scrollbarListener);
      updateFromOffset(scrollbar.scrollTop);
      return true;
    };

    if (!attachScrollbarListener()) {
      retryTimer = setInterval(() => {
        if (attachScrollbarListener() && retryTimer) {
          clearInterval(retryTimer);
        }
      }, 100);
    }

    return () => {
      if (retryTimer) clearInterval(retryTimer);
      if (attachedScrollbar && scrollbarListener) {
        attachedScrollbar.removeListener(scrollbarListener);
      }
    };
  }, [pathname]);

  return (
    <>
      <div
        className={`${
          !scrolled ? "opacity-0" : "opacity-100"
        } pointer-events-none fixed top-0 left-0 w-full h-[50vh] -translate-y-full bg-white z-[999999] transition-all duration-300`}
      />
      <header className="fixed top-0 z-[999999] h-[5vw] w-screen max-lg:h-auto">
        <div
          className={cn(
            "fixed left-0 top-0 z-[0] h-[15vw] lg:h-[10vw] w-screen bg-gradient-to-b from-black black/50 to-transparent transition-opacity duration-300",
            scrolled ? "opacity-100" : "opacity-0"
          )}
        />

        <div
          id="logo"
          className="fixed left-0 top-0 z-[999] w-[17.5vw] p-[2.5vw_3vw] max-lg:top-[1vw] max-lg:w-[37vw] [&_svg_path]:fill-white"
        >
          <Link href="/" className="link-home block" onClick={closeMobile}>
            {/*<Logo />*/}
            <img
              src="/assets/images/logo-hexamob-vtc-prive-charente-maritime.png"
              alt="HEXAMOB"
              className="w-full h-full object-contain"
            />
          </Link>
        </div>

        <button
          id="mobile-menu-button"
          type="button"
          aria-label="Menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className={cn(
            "absolute right-[3vw] top-[1vw] z-[999] hidden h-[9vw] w-[9vw] max-lg:block",
            mobileOpen &&
              "openb whiteopen [&_span:first-child]:top-[5vw] [&_span:first-child]:-rotate-45 [&_span:nth-child(2)]:top-[5vw] [&_span:nth-child(2)]:rotate-45",
            mobileOpen && "whiteopen [&_span]:!bg-white"
          )}
        >
          <span className="absolute left-0 top-[5.5vw] block h-[0.8vw] w-[8vw] bg-white transition-all duration-300" />
          <span className="absolute left-0 top-[3vw] block h-[0.8vw] w-[8vw] bg-white transition-all duration-300" />
        </button>

        <div
          id="mobile-menu"
          className={cn(
            "fixed hidden h-screen w-screen overflow-hidden max-lg:flex",
            mobileOpen ? "pointer-events-auto" : "pointer-events-none"
          )}
        >
          <nav
            id="mobile-nav"
            className={cn(
              "fixed h-screen w-screen -translate-x-full bg-page transition-transform duration-[800ms] ease-in-out overflow-x-hidden",
              mobileOpen && "open translate-x-0"
            )}
          >
            <div
              className="arrow pointer-events-none absolute z-0 h-[50vh] w-[50vh] rotate-[135deg] bg-gradient-to-br from-gold-800 via-transparent to-transparent opacity-30 max-lg:mt-[50vw] max-lg:right-[80vw]"
              id="arrow-mobile-1"
            />
            <div
              className="arrow pointer-events-none absolute z-0 h-[50vh] w-[50vh] translate-x-[50%] rotate-[135deg] bg-gradient-to-br from-gold-800 via-transparent to-transparent opacity-30 max-lg:mt-[50vw] max-lg:right-[80vw]"
              id="arrow-mobile-2"
            />
            <ul className="relative z-10 ml-[3vw] mt-[10vh] flex w-[94vw] list-none flex-col text-[120%] uppercase text-white max-lg:[&>li]:border-white max-lg:[&>li]:py-[2vw] max-lg:[&>li:not(:nth-last-child(-n+2))]:border-b">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <NavAnchor
                    href={item.href}
                    className={item.className}
                    onClick={closeMobile}
                  >
                    {item.label}
                  </NavAnchor>
                </li>
              ))}
              <li
                className={cn(
                  "group/services cursor-pointer",
                  servicesOpen && "open active h-[55vw]"
                )}
                onClick={() => setServicesOpen((open) => !open)}
              >
                <NavAnchor
                  href="/services"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeMobile();
                  }}
                >
                  Services
                </NavAnchor>
                <ul
                  className={cn(
                    submenuClass,
                    "static ml-[1vw] mt-[1vw] flex border-none max-lg:flex max-lg:opacity-100"
                  )}
                >
                  {serviceLinks.map((item) => (
                    <li
                      key={item.label}
                      className="mb-[0.6vw] text-[4vw] max-lg:border-none"
                    >
                      <NavAnchor
                        href={item.href}
                        className={item.className}
                        exact={item.href === "/services"}
                        onClick={closeMobile}
                      >
                        {item.label}
                      </NavAnchor>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <NavAnchor
                  href="/evenements-speciaux"
                  className="link-evenements-speciaux"
                  onClick={closeMobile}
                >
                  Événements spéciaux
                </NavAnchor>
              </li>
              <li>
                <HexamobButton
                  href="tel:+33672102411"
                  variant="gold"
                  showArrow={false}
                  className="link-sur-mesure !py-[2vw] !px-[3vw] !rounded-full !w-full text-center"
                >
                  Réserver une course
                </HexamobButton>
              </li>
              {/*
            <li>
              <a href="https://hexamob.com/noticias" className={cn(linkClass, "link-news")}>
                Actualités
              </a>
            </li>
             */}
            </ul>

            <div
              id="mobile-watermark"
              className="pointer-events-none absolute bottom-[20vw] left-0 w-[94vw] p-[3vw] font-type1 text-[16vw] uppercase leading-none text-white opacity-10 max-lg:block lg:hidden"
            >
              <img
                src="/assets/images/icon-hexamob-chauffeur-vtc-rochefort-saintes-la-rochelle-angouleme-bordeaux-royan.png"
                alt="VTC & Chauffeur privé"
                className="w-full h-full object-contain"
              />
            </div>
          </nav>
        </div>

        <nav
          id="desktop-nav"
          className="fixed right-0 top-0 flex h-[5vw] items-center justify-end gap-[2vw] pr-[3vw] text-white transition-colors duration-300 max-lg:hidden pt-[2.4vw]"
        >
          <ul className="flex list-none items-center gap-[2vw] uppercase">
            {navLinks.map((item) => (
              <li key={item.label}>
                <NavAnchor href={item.href} className={item.className}>
                  {item.label}
                </NavAnchor>
              </li>
            ))}
            <li
              className={cn(
                "group/services relative cursor-pointer",
                servicesActive && "active"
              )}
            >
              <NavAnchor href="/services">Services</NavAnchor>
              <ul className={submenuClass}>
                {serviceLinks.map((item) => (
                  <li key={item.label} className="mb-[0.6vw]">
                    <NavAnchor
                      href={item.href}
                      className={item.className}
                      exact={item.href === "/services"}
                    >
                      {item.label}
                    </NavAnchor>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <NavAnchor
                href="/evenements-speciaux"
                className="link-evenements-speciaux"
              >
                Événements spéciaux
              </NavAnchor>
            </li>

            {/*
          <li>
            <a href="https://hexamob.com/noticias" className={cn(linkClass, "link-news")}>
              Actualités
            </a>
          </li>
          */}
          </ul>
          <div className="group/reserve relative flex items-center">
            <HexamobButton
              href="tel:+33672102411"
              variant="gold"
              showArrow={false}
              className="link-sur-mesure py-[0.7vw] px-[0.75vw]"
            >
              Réserver une course
            </HexamobButton>
          </div>
        </nav>
      </header>
    </>
  );
}
