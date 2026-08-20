"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { loadSplitTextPlugin } from "@/lib/hexamob/animations/gsapPlugins";

gsap.registerPlugin(ScrollTrigger);

let refreshBound = false;

function setupSplits() {
  const SplitText = loadSplitTextPlugin();
  const quotes = document.querySelectorAll<HTMLElement>(".title");

  quotes.forEach((quote) => {
    const quoteWithAnim = quote as HTMLElement & {
      anim?: gsap.core.Tween;
      split?: InstanceType<typeof SplitText>;
    };

    if (quoteWithAnim.anim) {
      quoteWithAnim.anim.progress(1).kill();
      quoteWithAnim.split?.revert();
    }

    quoteWithAnim.split = new SplitText(quote, {
      type: "lines,words,chars",
      linesClass: "split-line",
    });

    quoteWithAnim.anim = gsap.from(quoteWithAnim.split.chars, {
      scrollTrigger: {
        trigger: quote,
        toggleActions: "restart pause resume reverse",
        start: "top 60%",
      },
      duration: 0.2,
      ease: "Power1.easeInOut",
      y: 10,
      stagger: 0.01,
      autoAlpha: 0,
    });
  });
}

export function initGeneralAnimations() {
  if (!refreshBound) {
    ScrollTrigger.addEventListener("refresh", setupSplits);
    refreshBound = true;
  }

  setupSplits();

  document.querySelectorAll<HTMLElement>(".menu-services").forEach((menu) => {
    menu.addEventListener("mouseenter", () => menu.classList.add("open"));
    menu.addEventListener("mouseleave", () => menu.classList.remove("open"));
  });

  document.querySelectorAll<HTMLElement>(".submenu ul li").forEach((item) => {
    item.addEventListener("mouseenter", () => item.querySelector("span")?.classList.add("on"));
    item.addEventListener("mouseleave", () => item.querySelector("span")?.classList.remove("on"));
  });

  gsap.to("body", {
    autoAlpha: 1,
    delay: 0.5,
    duration: 1.5,
    overwrite: true,
  });
}
