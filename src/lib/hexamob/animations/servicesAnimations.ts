"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initServicesAnimations() {
  gsap.utils.toArray<HTMLElement>(".service-card").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      y: 50,
      autoAlpha: 0,
      duration: 0.7,
      delay: i * 0.1,
      ease: "Power2.out",
    });
  });

  gsap.utils.toArray<HTMLElement>(".feature-item").forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
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

  gsap.utils.toArray<HTMLElement>(".nearby-town").forEach((town, i) => {
    gsap.from(town, {
      scrollTrigger: {
        trigger: town,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
      y: 20,
      autoAlpha: 0,
      duration: 0.45,
      delay: i * 0.04,
      ease: "Power2.out",
    });
  });

  gsap.utils.toArray<HTMLElement>(".related-service").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 92%",
        toggleActions: "play none none none",
        once: true,
      },
      y: 30,
      autoAlpha: 0,
      duration: 0.5,
      delay: i * 0.1,
      ease: "Power2.out",
      immediateRender: true,
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
