import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getScrollbar } from "@/lib/hexamob/animations/setupScroll";
import { loadDrawSvgPlugin } from "@/lib/hexamob/animations/gsapPlugins";

gsap.registerPlugin(ScrollTrigger);

export function initHomeAnimations() {
  loadDrawSvgPlugin();

  const isDesktop = window.innerWidth > 1024;
  const kilometersNum = document.getElementById("kilometers-num");

  if (isDesktop) {

    gsap.to(".arrow", {
      scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom 1%", scrub: 0.2 },
      x: window.innerWidth * 1.05,
      ease: "power4.inOut",
      immediateRender: false,
    });

    gsap.to("#start-scroll", {
      scrollTrigger: { trigger: "#start-scroll", start: "top 70%", end: "top 50%", scrub: 0.2 },
      autoAlpha: 0,
      ease: "power4.inOut",
      immediateRender: false,
    });

    gsap.to("#hero-text", {
      scrollTrigger: { trigger: "#section-two", scrub: 1, start: "top -10%", end: "top -20%" },
      autoAlpha: 0,
      ease: "power4.inOut",
    });

    ScrollTrigger.create({
      trigger: "#hero",
      start: "top top",
      end: "bottom -10%",
      scrub: 0.2,
      pin: "#hero-text",
    });

    ScrollTrigger.create({
      trigger: "#section-two",
      start: "top 85%",
      toggleClass: { targets: "#hero-text", className: "blue" },
    });

    ScrollTrigger.create({
      trigger: "#section-two",
      start: "top 8%",
      end: "bottom -450%",
      toggleClass: { targets: "#logo, nav", className: "blue" },
    });

    gsap.from(".line", {
      scrollTrigger: { trigger: ".line", scrub: 1, start: "top 80%", end: "top 60%" },
      scaleX: 0,
    });

    ScrollTrigger.create({
      trigger: ".line",
      start: "center 62%",
      end: "bottom -200%",
      scrub: 0.2,
      pin: "#services-intro",
    });

    // Same overall scroll window (0% → -150%); opacity crossfades are short so each block stays readable longer.
    gsap.to("#content-long-trips", {
      scrollTrigger: { trigger: ".line", scrub: 0.4, start: "top 0%", end: "top -12%" },
      autoAlpha: 1,
      pointerEvents: "all",
      immediateRender: false,
    });
    gsap.to("#content-standard-trips", {
      scrollTrigger: { trigger: ".line", scrub: 0.4, start: "top 0%", end: "top -12%" },
      autoAlpha: 0,
      immediateRender: false,
    });
    gsap.to("#content-long-trips", {
      scrollTrigger: { trigger: ".line", scrub: 0.4, start: "top -95%", end: "top -107%" },
      autoAlpha: 0,
      immediateRender: false,
    });
    gsap.to("#content-events", {
      scrollTrigger: { trigger: ".line", scrub: 0.4, start: "top -95%", end: "top -107%" },
      autoAlpha: 1,
      immediateRender: false,
    });

    ScrollTrigger.create({ trigger: "#punctuality", start: "top 0", end: "top -100%", pin: true });

    const num = { var: 0 };
    gsap
      .timeline({
        scrollTrigger: { trigger: "#punctuality", start: "top 0", end: "top -80%", scrub: true },
      })
      .to(num, {
        var: 100000,
        duration: 1,
        ease: "none",
        onUpdate: () => {
          if (kilometersNum) kilometersNum.innerHTML = num.var.toFixed();
        },
      });

    gsap.to("#dot", {
      scrollTrigger: { trigger: "#punctuality", start: "top 0", end: "top -80%", scrub: true },
      rotation: 270,
    });
    gsap.from(".st0", {
      scrollTrigger: { trigger: "#punctuality", start: "top 0", end: "top -80%", scrub: true },
      drawSVG: 0,
    });

    gsap.to("#hours", {
      scrollTrigger: { trigger: "#gap", start: "bottom -60%", end: "bottom -80%", scrub: true },
      autoAlpha: 1,
      immediateRender: false,
      ease: "linear",
    });

    ScrollTrigger.create({ trigger: "#stats", start: "top 0", end: "top -130%", pin: true });

    gsap.to("#carousel-images", {
      scrollTrigger: { trigger: "#carousel-images", start: "top 100%", end: "bottom 0", scrub: 0.2 },
      x: -window.innerWidth * 1.4,
      immediateRender: false,
      ease: "linear",
    });
    gsap.to("#hexamob-wordmark span", {
      scrollTrigger: { trigger: "#carousel-images", start: "top 100%", end: "bottom 0", scrub: 0.2 },
      x: 0,
      immediateRender: false,
      ease: "linear",
    });
    gsap.to("#stats-strip-inner", {
      scrollTrigger: { trigger: "#mark1", start: "top -10%", end: "top -120%", scrub: 0.2 },
      x: -window.innerWidth * 1.2,
      immediateRender: false,
      ease: "power2.inOut",
    });
    gsap.from("#stats article, #stats-strip", {
      scrollTrigger: { trigger: "#stats article", start: "top 80%", end: "top 40%", scrub: 0.2 },
      autoAlpha: 0,
      ease: "power2.inOut",
    });
    gsap.to("#arrow_3", {
      scrollTrigger: { trigger: "#stats", start: "top -10%", end: "top -100%", scrub: 0.2 },
      x: -window.innerWidth * 1.3,
      immediateRender: false,
    });
    gsap.to("#arrow_4", {
      scrollTrigger: { trigger: "#stats", start: "top -10%", end: "top -100%", scrub: 0.2 },
      x: -window.innerWidth * 1.3,
      immediateRender: false,
    });
    gsap.to("#stats, #gap2", {
      scrollTrigger: { trigger: "#stats", start: "top -10", end: "top -80%", scrub: 0.2 },
      autoAlpha: 0,
      immediateRender: false,
    });

    ScrollTrigger.create({
      trigger: "#commitment",
      start: "top 60%",
      end: "bottom -505%",
      toggleClass: { targets: "#logo, nav", className: "blue" },
    });
    // Pin Digitalization → Quality while the panel swipes horizontally.
    // pinType transform is required with smooth-scrollbar (parent uses transforms).
    ScrollTrigger.create({
      trigger: "#panels",
      start: "top top",
      end: "+=120%",
      pin: true,
      pinType: "transform",
      anticipatePin: 1,
    });

    // Original CSS: #panels-inner starts at translateX(-100vw) (Digitalization / #digitalization).
    // #quality is offset with right:100vw, so landing on Quality is x = +100vw (not +200vw).
    // Going to innerWidth*2 overshoots past #quality into empty space.
    gsap.set("#panels-inner", { x: () => -window.innerWidth });
    gsap.to("#panels-inner", {
      x: () => window.innerWidth,
      ease: "power4.inOut",
      immediateRender: false,
      scrollTrigger: {
        trigger: "#panels",
        start: "top top",
        end: "+=120%",
        scrub: 0.2,
        invalidateOnRefresh: true,
      },
    });

    gsap.to("#canvas", {
      scrollTrigger: { trigger: "#closing", start: "bottom 99%", end: "bottom 47%", scrub: true },
      autoAlpha: 0,
      y: 0,
      immediateRender: false,
      ease: "linear",
    });
    gsap.to(".electric", {
      scrollTrigger: { trigger: ".electric", start: "top 100%", end: "bottom 0", scrub: 0.2 },
      y: -800,
      immediateRender: false,
      ease: "power2.inOut",
    });
    gsap.from("#destination-line", {
      scrollTrigger: { trigger: "#destination-line", scrub: 1, start: "top 80%", end: "top 60%" },
      scaleX: 0,
    });
    gsap.to("#destinations, #destination-line", {
      scrollTrigger: { trigger: "#closing", start: "top 20%", end: "top 10%", scrub: 0.2 },
      autoAlpha: 0,
      immediateRender: false,
      ease: "linear",
    });
  } else {
    ScrollTrigger.create({
      trigger: "#section-two",
      start: "top 5%",
      end: "top -215%",
      toggleClass: { targets: "#logo, #mobile-menu-button", className: "blue" },
    });

    gsap.from(".line", {
      scrollTrigger: { trigger: ".line", scrub: 1, start: "top 80%", end: "top 60%" },
      scaleX: 0,
    });

    const punctualityScroll = { trigger: "#punctuality", start: "top 85%", end: "bottom 15%", scrub: true };

    const num = { var: 0 };
    gsap
      .timeline({ scrollTrigger: punctualityScroll })
      .to(num, {
        var: 100000,
        duration: 1,
        ease: "none",
        onUpdate: () => {
          if (kilometersNum) kilometersNum.innerHTML = num.var.toFixed();
        },
      });

    gsap.to("#dot", {
      scrollTrigger: punctualityScroll,
      rotation: 270,
    });
    gsap.from(".st0", {
      scrollTrigger: punctualityScroll,
      drawSVG: 0,
    });
    gsap.to("#hours", {
      scrollTrigger: { trigger: "#punctuality", start: "top 60%", end: "bottom 20%", scrub: true },
      autoAlpha: 1,
      immediateRender: false,
      ease: "linear",
    });

    gsap.to("#carousel-images", {
      scrollTrigger: { trigger: "#carousel-images", start: "top 100%", end: "bottom 0", scrub: 0.2 },
      x: -window.innerWidth * 5,
      immediateRender: false,
      ease: "linear",
    });
    gsap.to("#hexamob-wordmark span", {
      scrollTrigger: { trigger: "#carousel-images", start: "top 100%", end: "bottom 0", scrub: 0.2 },
      x: 0,
      immediateRender: false,
      ease: "linear",
    });
    ScrollTrigger.create({ trigger: "#stats", start: "top 0", end: "top -130%", pin: true });
    gsap.to("#stats-strip-inner", {
      scrollTrigger: { trigger: "#mark1", start: "top -10%", end: "top -120%", scrub: 0.2 },
      x: -window.innerWidth * 2.9,
      immediateRender: false,
      ease: "power2.inOut",
    });
    gsap.to("#stats, #gap2", {
      scrollTrigger: { trigger: "#stats", start: "top -10", end: "top -80%", scrub: 0.2 },
      autoAlpha: 0,
      immediateRender: false,
    });
    ScrollTrigger.create({
      trigger: "#stats",
      start: "bottom 40%",
      end: "bottom -600%",
      toggleClass: { targets: "#logo, #mobile-menu-button", className: "blue" },
    });
    ScrollTrigger.create({ trigger: "#digitalization", start: "top 0", end: "top -130%", pin: true });
    gsap.to("#feature-points", {
      scrollTrigger: { trigger: "#gap2", start: "top -100%", end: "top -190%", scrub: 0.2 },
      x: -window.innerWidth * 2.2,
      immediateRender: false,
      ease: "power2.inOut",
    });
    gsap.to("#canvas", {
      scrollTrigger: { trigger: "#closing", start: "start 75%", end: "start -25%", scrub: true },
      y: -window.innerHeight,
      immediateRender: false,
      ease: "linear",
    });
    gsap.to("#closing", {
      scrollTrigger: { trigger: "#closing", start: "start -15%", end: "end 3%", scrub: 0.2 },
      autoAlpha: 0,
      immediateRender: false,
      ease: "linear",
    });
  }

  const mark0 = document.querySelector("#mark0");
  const startScroll = document.querySelector("#start-scroll");
  if (mark0 && startScroll) {
    startScroll.addEventListener("click", () => {
      const scrollbar = getScrollbar();
      if (!scrollbar) return;
      scrollbar.scrollIntoView(mark0 as HTMLElement, { offsetTop: 0, onlyScrollIfNeeded: false });
    });
  }
}
