"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initEntrepriseAnimations() {
  gsap.utils.toArray<HTMLElement>(".timeline-item").forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      x: i % 2 === 0 ? -40 : 40,
      autoAlpha: 0,
      duration: 0.8,
      ease: "Power2.out",
    });
  });

  gsap.utils.toArray<HTMLElement>(".engagement-card").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      y: 30,
      autoAlpha: 0,
      duration: 0.6,
      delay: i * 0.1,
      ease: "Power2.out",
    });
  });

  gsap.utils.toArray<HTMLElement>(".fleet-card").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      y: 50,
      autoAlpha: 0,
      duration: 0.7,
      delay: i * 0.15,
      ease: "Power2.out",
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
