"use client";

import { gsap } from "gsap";

declare global {
  interface Window {
    gsap: typeof gsap;
  }
}

export function ensureGsapGlobals() {
  if (typeof window === "undefined") return;
  window.gsap = gsap;
}

export function loadDrawSvgPlugin() {
  ensureGsapGlobals();
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("@/lib/gsap/DrawSVGPlugin.min.js");
}

export function loadSplitTextPlugin() {
  ensureGsapGlobals();
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const splitTextModule = require("@/lib/gsap/SplitText.js");
  return (splitTextModule.default ?? splitTextModule) as new (
    target: Element,
    vars?: Record<string, unknown>,
  ) => {
    chars: Element[];
    revert: () => void;
  };
}
