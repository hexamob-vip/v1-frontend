"use client";

export default function LexusCanvas() {
  return (
    <section
      id="canvas"
      className="z-[1] pointer-events-none fixed left-0 top-0 flex h-screen w-screen flex-col items-center justify-center brightness-110 contrast-110 [&.off]:hidden"
    />
  );
}
