"use client";

import Link from "next/link";
import type { FooterLink } from "@/lib/hexamob/navigation";
import { openCookieConsent } from "@/lib/hexamob/cookies";

function isInternalHref(href: string) {
  return href.startsWith("/");
}

type FooterLinkListProps = {
  links: FooterLink[];
};

export default function FooterLinkList({ links }: FooterLinkListProps) {
  return (
    <ul className="pointer-events-auto flex flex-col text-white max-lg:w-full lg:w-[15vw] [&_li]:cursor-pointer [&_li]:border-b [&_li]:border-white [&_li:last-child]:border-b-0 [&_li]:py-[0.3vw] max-lg:[&_li]:py-[2vw] [&_li:hover_span]:ml-[1vw] [&_span.on]:ml-[1vw] [&_span]:mr-[0.5vw] [&_span]:text-gold-800 [&_span]:transition-all [&_span]:duration-300">
      {links.map((item) => (
        <li key={item.label}>
          <span>▸</span>
          {"action" in item ? (
            <button
              type="button"
              onClick={openCookieConsent}
              className="pointer-events-auto text-left uppercase"
            >
              {item.label}
            </button>
          ) : isInternalHref(item.href) ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <a
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel="noreferrer"
            >
              {item.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}
