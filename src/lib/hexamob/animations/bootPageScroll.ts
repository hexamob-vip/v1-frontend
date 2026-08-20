"use client";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initGeneralAnimations } from "@/lib/hexamob/animations/generalAnimations";
import { killSmoothScroll, setupSmoothScroll } from "@/lib/hexamob/animations/setupScroll";

/**
 * Boot scroll + shared animations for a page.
 * Uses rAF so SPA unmount cleanup always runs before the new page binds
 * smooth-scrollbar / ScrollTrigger to the fresh `.scroller` node.
 */
export function bootPageScroll(initPageAnimations?: () => void): () => void {
  let cancelled = false;
  let fallbackId = 0;

  const frameId = window.requestAnimationFrame(() => {
    if (cancelled) return;

    setupSmoothScroll();
    initGeneralAnimations();
    initPageAnimations?.();
    ScrollTrigger.refresh(true);

    fallbackId = window.setTimeout(() => {
      if (getComputedStyle(document.body).opacity === "0") {
        document.body.style.opacity = "1";
      }
    }, 4000);
  });

  return () => {
    cancelled = true;
    window.cancelAnimationFrame(frameId);
    window.clearTimeout(fallbackId);
    killSmoothScroll();
  };
}
