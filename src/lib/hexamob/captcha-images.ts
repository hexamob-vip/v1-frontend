type SceneType = "sedan" | "suv" | "bus" | "bicycle" | "boat" | "plane";
type ChallengeCategory = "car" | "bus" | "bicycle" | "boat" | "plane";

const CAR_TYPES: SceneType[] = ["sedan", "suv"];
const CHALLENGE_CATEGORIES: ChallengeCategory[] = ["car", "bus", "bicycle", "boat", "plane"];

const CATEGORY_TYPES: Record<ChallengeCategory, SceneType[]> = {
  car: CAR_TYPES,
  bus: ["bus"],
  bicycle: ["bicycle"],
  boat: ["boat"],
  plane: ["plane"],
};

const DISTRACTOR_TYPES: SceneType[] = ["bus", "bicycle", "boat", "plane", "sedan", "suv"];

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pickColor(rand: () => number, hueBase: number): string {
  const hue = hueBase + rand() * 40 - 20;
  const sat = 35 + rand() * 30;
  const light = 35 + rand() * 25;
  return `hsl(${hue.toFixed(0)} ${sat.toFixed(0)}% ${light.toFixed(0)}%)`;
}

function noiseLines(rand: () => number, width: number, height: number): string {
  const lines: string[] = [];
  const count = 6 + Math.floor(rand() * 6);

  for (let i = 0; i < count; i += 1) {
    const x1 = rand() * width;
    const y1 = rand() * height;
    const x2 = rand() * width;
    const y2 = rand() * height;
    const opacity = 0.08 + rand() * 0.18;
    lines.push(
      `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="rgba(255,255,255,${opacity.toFixed(2)})" stroke-width="${(0.6 + rand()).toFixed(1)}" />`,
    );
  }

  return lines.join("");
}

function sedanShape(fill: string, stroke: string): string {
  return `
    <rect x="34" y="68" width="132" height="34" rx="8" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
    <path d="M58 68 L78 42 H122 L138 68 Z" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
    <circle cx="62" cy="102" r="14" fill="#111" stroke="${stroke}" stroke-width="2"/>
    <circle cx="138" cy="102" r="14" fill="#111" stroke="${stroke}" stroke-width="2"/>
    <circle cx="62" cy="102" r="6" fill="#444"/>
    <circle cx="138" cy="102" r="6" fill="#444"/>
  `;
}

function suvShape(fill: string, stroke: string): string {
  return `
    <rect x="30" y="52" width="140" height="52" rx="10" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
    <rect x="48" y="58" width="104" height="28" rx="4" fill="rgba(255,255,255,0.12)"/>
    <circle cx="58" cy="104" r="15" fill="#111" stroke="${stroke}" stroke-width="2"/>
    <circle cx="142" cy="104" r="15" fill="#111" stroke="${stroke}" stroke-width="2"/>
    <circle cx="58" cy="104" r="6" fill="#444"/>
    <circle cx="142" cy="104" r="6" fill="#444"/>
  `;
}

function busShape(fill: string, stroke: string): string {
  return `
    <rect x="24" y="48" width="152" height="56" rx="8" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
    <rect x="36" y="58" width="24" height="20" rx="2" fill="rgba(255,255,255,0.18)"/>
    <rect x="66" y="58" width="24" height="20" rx="2" fill="rgba(255,255,255,0.18)"/>
    <rect x="96" y="58" width="24" height="20" rx="2" fill="rgba(255,255,255,0.18)"/>
    <rect x="126" y="58" width="24" height="20" rx="2" fill="rgba(255,255,255,0.18)"/>
    <circle cx="52" cy="104" r="13" fill="#111" stroke="${stroke}" stroke-width="2"/>
    <circle cx="148" cy="104" r="13" fill="#111" stroke="${stroke}" stroke-width="2"/>
  `;
}

function bicycleShape(fill: string, stroke: string): string {
  return `
    <circle cx="62" cy="88" r="24" fill="none" stroke="${stroke}" stroke-width="3"/>
    <circle cx="138" cy="88" r="24" fill="none" stroke="${stroke}" stroke-width="3"/>
    <path d="M62 88 L98 52 L118 88 L138 88" fill="none" stroke="${fill}" stroke-width="4" stroke-linecap="round"/>
    <path d="M98 52 L118 68" fill="none" stroke="${stroke}" stroke-width="3"/>
    <circle cx="62" cy="88" r="4" fill="${fill}"/>
    <circle cx="138" cy="88" r="4" fill="${fill}"/>
  `;
}

function boatShape(fill: string, stroke: string): string {
  return `
    <path d="M30 92 Q100 72 170 92 L155 108 H45 Z" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
    <path d="M98 92 V48 L118 92 Z" fill="${stroke}" opacity="0.85"/>
    <path d="M20 108 H180" stroke="rgba(255,255,255,0.25)" stroke-width="2"/>
  `;
}

function planeShape(fill: string, stroke: string): string {
  return `
    <ellipse cx="100" cy="78" rx="52" ry="12" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
    <path d="M68 78 L44 92 L68 86 Z" fill="${stroke}"/>
    <path d="M132 78 L156 92 L132 86 Z" fill="${stroke}"/>
    <path d="M92 78 L100 48 L108 78 Z" fill="${stroke}"/>
    <circle cx="118" cy="76" r="5" fill="rgba(255,255,255,0.35)"/>
  `;
}

function renderScene(type: SceneType, seed: number): string {
  const rand = mulberry32(seed);
  const width = 200;
  const height = 130;
  const bg = pickColor(rand, type === "sedan" || type === "suv" ? 220 : rand() * 360);
  const fill = pickColor(rand, 45);
  const stroke = pickColor(rand, 200);

  const shapes: Record<SceneType, string> = {
    sedan: sedanShape(fill, stroke),
    suv: suvShape(fill, stroke),
    bus: busShape(fill, stroke),
    bicycle: bicycleShape(fill, stroke),
    boat: boatShape(fill, stroke),
    plane: planeShape(fill, stroke),
  };

  const rotate = (rand() * 8 - 4).toFixed(1);
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 200 130">
  <rect width="200" height="130" fill="${bg}"/>
  ${noiseLines(rand, width, height)}
  <g transform="rotate(${rotate} 100 75)">${shapes[type]}</g>
  ${noiseLines(rand, width, height)}
</svg>`;

  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

function shuffle<T>(items: T[], rand: () => number): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rand() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export type CaptchaImageOption = {
  id: string;
  src: string;
};

export function buildCaptchaImages(seed: number): {
  images: CaptchaImageOption[];
  correctIds: string[];
  question: string;
} {
  const rand = mulberry32(seed);
  const category = CHALLENGE_CATEGORIES[Math.floor(rand() * CHALLENGE_CATEGORIES.length)];
  const targetTypes = CATEGORY_TYPES[category];

  const targetCount = 2 + Math.floor(rand() * 2);
  const distractorPool = shuffle(
    DISTRACTOR_TYPES.filter((type) => !targetTypes.includes(type)),
    rand,
  );
  const distractorCount = 6 - targetCount;

  const types: SceneType[] = [
    ...Array.from({ length: targetCount }, () => targetTypes[Math.floor(rand() * targetTypes.length)]),
    ...distractorPool.slice(0, distractorCount),
  ];

  const shuffledTypes = shuffle(types, rand);
  const images: CaptchaImageOption[] = [];
  const correctIds: string[] = [];

  shuffledTypes.forEach((type, index) => {
    const id = `${seed.toString(36)}-${index}-${Math.floor(rand() * 1_000_000).toString(36)}`;
    const imageSeed = seed + index * 9973 + type.length * 131;
    images.push({ id, src: renderScene(type, imageSeed) });

    if (targetTypes.includes(type)) {
      correctIds.push(id);
    }
  });

  const questionByCategory: Record<ChallengeCategory, string> = {
    car: "Sélectionnez toutes les images contenant des voitures.",
    bus: "Sélectionnez toutes les images contenant un bus.",
    bicycle: "Sélectionnez toutes les images contenant un vélo.",
    boat: "Sélectionnez toutes les images contenant un bateau.",
    plane: "Sélectionnez toutes les images contenant un avion.",
  };

  return {
    images,
    correctIds,
    question: questionByCategory[category],
  };
}

export { CAR_TYPES as TARGET_TYPES };
