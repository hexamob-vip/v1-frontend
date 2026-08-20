/** Viewport glow layers — must stay outside `.scroller` (smooth-scrollbar restructures its children). */
export default function AmbientGlow() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed top-0 z-[0] -translate-y-1/2 md:-left-1/4 h-full w-full opacity-20 md:h-[75vw] md:w-[75vw]
      [mask-image:linear-gradient(to_bottom,transparent,_transparent_10%,_transparent_10%,black_45%,black_55%,transparent)]"
      >
        <div className="h-full w-full bg-gold-800 [mask-image:radial-gradient(circle,#000_0%,transparent_60%)]" />
      </div>

      <div
        aria-hidden
        className="pointer-events-none fixed top-3/4 z-[0] left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 opacity-50 md:h-[75vw] md:w-[75vw]
      [mask-image:linear-gradient(to_bottom,transparent,_transparent_10%,_transparent_10%,black_45%,black_55%,transparent)]"
      >
        <div className="h-full w-full bg-gold-800 [mask-image:radial-gradient(circle,#000_0%,transparent_60%)]" />
      </div>
    </>
  );
}
