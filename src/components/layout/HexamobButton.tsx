import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/hexamob/cn";

const buttonVariants = {
  default:
    "pointer-events-auto btn inline-block border border-current px-[0.75vw] py-[0.3vw] text-[80%] uppercase rounded-[3vw] transition duration-400 hover:bg-white hover:text-page [&_span]:mr-[0.3vw] [&_span]:text-gold-500 max-lg:px-[2vw] max-lg:py-[0.4vw]",
  white:
    "pointer-events-auto btn-white inline-block border border-white px-[0.75vw] py-[0.3vw] text-[80%] uppercase rounded-[3vw] transition duration-400 hover:bg-white hover:text-page [&_span]:mr-[0.3vw] [&_span]:text-gold-500 max-lg:px-[2vw] max-lg:py-[0.4vw]",
  gold:
    "pointer-events-auto btn-gold inline-block border border-golden-dark/40 bg-gold-gradient px-[0.75vw] py-[0.3vw] text-[80%] font-bold uppercase text-page [text-shadow:0_1px_1px_#eee] rounded-[3vw] shadow-gold transition duration-400 hover:brightness-110 hover:shadow-gold-lg [&_span]:mr-[0.3vw] [&_span]:text-page max-lg:px-[2vw] max-lg:py-[0.4vw]",
} as const;

type HexamobButtonVariant = keyof typeof buttonVariants;

type HexamobButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  variant?: HexamobButtonVariant;
  showArrow?: boolean;
};

function isExternalHref(href: string) {
  return /^(mailto:|tel:|https?:)/.test(href);
}

export default function HexamobButton({
  children,
  className,
  href,
  variant = "default",
  showArrow = true,
}: HexamobButtonProps) {
  const classes = cn(buttonVariants[variant], className);
  const content = (
    <>
      {showArrow ? <span>▸</span> : null}
      {children}
    </>
  );

  if (!href) {
    return <span className={classes}>{content}</span>;
  }

  if (isExternalHref(href)) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
