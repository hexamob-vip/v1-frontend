import Scrollbar from "smooth-scrollbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let scrollbarInstance: Scrollbar | null = null;

export function setupSmoothScroll() {
  const scroller = document.querySelector(".scroller") as HTMLElement | null;
  if (!scroller) return null;

  // SPA navigation: always rebind to the current .scroller node
  if (scrollbarInstance) {
    try {
      scrollbarInstance.destroy();
    } catch {
      // already destroyed
    }
    scrollbarInstance = null;
  }

  scrollbarInstance = Scrollbar.init(scroller, {
    damping: 0.05,
    thumbMinSize: 20,
    delegateTo: document,
    alwaysShowTracks: true,
    renderByPixels: true,
  });

  ScrollTrigger.scrollerProxy(scroller, {
    scrollTop(value) {
      if (!scrollbarInstance) return 0;
      if (arguments.length) {
        scrollbarInstance.scrollTop = value as number;
      }
      return scrollbarInstance.scrollTop;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  scrollbarInstance.addListener(ScrollTrigger.update);
  ScrollTrigger.defaults({ scroller });
  ScrollTrigger.refresh();

  return scrollbarInstance;
}

export function getScrollbar() {
  return scrollbarInstance;
}

export function killSmoothScroll() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

  if (scrollbarInstance) {
    try {
      scrollbarInstance.destroy();
    } catch {
      // already destroyed
    }
    scrollbarInstance = null;
  }

  // Prevent next page from inheriting a detached scroller default
  ScrollTrigger.defaults({ scroller: window });
}
