"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initEvenementsAnimations() {
  gsap.utils.toArray<HTMLElement>(".event-card").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      y: 40,
      autoAlpha: 0,
      duration: 0.7,
      delay: i * 0.1,
      ease: "Power2.out",
    });
  });

  gsap.utils.toArray<HTMLElement>(".package-card").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      y: 50,
      autoAlpha: 0,
      duration: 0.7,
      delay: i * 0.12,
      ease: "Power2.out",
    });
  });

  gsap.utils.toArray<HTMLElement>(".process-step").forEach((step, i) => {
    gsap.from(step, {
      scrollTrigger: {
        trigger: step,
        start: "top 88%",
        toggleActions: "play none none reverse",
      },
      x: i % 2 === 0 ? -30 : 30,
      autoAlpha: 0,
      duration: 0.6,
      ease: "Power2.out",
    });
  });

  gsap.utils.toArray<HTMLElement>(".highlight-tag").forEach((tag, i) => {
    gsap.from(tag, {
      scrollTrigger: {
        trigger: tag,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
      scale: 0.9,
      autoAlpha: 0,
      duration: 0.4,
      delay: i * 0.05,
      ease: "Back.out(1.4)",
    });
  });

  gsap.utils.toArray<HTMLElement>(".destination-banner").forEach((banner) => {
    const media = banner.querySelector<HTMLElement>(".destination-banner-media");
    if (!media) return;

    const getTravel = () => Math.max(0, media.offsetHeight - banner.offsetHeight);

    gsap.fromTo(
      media,
      { y: 0 },
      {
        y: () => -getTravel(),
        ease: "none",
        scrollTrigger: {
          trigger: banner,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      },
    );
  });
}
