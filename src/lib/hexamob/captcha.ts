import { createHmac, randomInt, timingSafeEqual } from "crypto";
import { buildCaptchaImages, type CaptchaImageOption } from "@/lib/hexamob/captcha-images";

const CAPTCHA_TTL_MS = 10 * 60 * 1000;
const MIN_SUBMIT_DELAY_MS = 5_000;

type CaptchaPayload = {
  correctIds: string[];
  exp: number;
  sig: string;
};

export type CaptchaChallenge = {
  token: string;
  question: string;
  images: CaptchaImageOption[];
  minSubmitDelayMs: number;
};

function getCaptchaSecret(): string {
  const secret = process.env.CAPTCHA_SECRET?.trim();
  if (secret) return secret;

  if (process.env.NODE_ENV === "production") {
    throw new Error("CAPTCHA_SECRET is required in production");
  }

  return "hexamob-dev-captcha-secret";
}

function signPayload(correctIds: string[], exp: number): string {
  const payload = `${[...correctIds].sort().join(",")}:${exp}`;
  return createHmac("sha256", getCaptchaSecret()).update(payload).digest("hex");
}

function safeEqual(a: string, b: string): boolean {
  const aBuffer = Buffer.from(a);
  const bBuffer = Buffer.from(b);
  if (aBuffer.length !== bBuffer.length) return false;
  return timingSafeEqual(aBuffer, bBuffer);
}

function encodeToken(payload: CaptchaPayload): string {
  return Buffer.from(JSON.stringify(payload)).toString("base64url");
}

function decodeToken(token: string): CaptchaPayload | null {
  try {
    const parsed = JSON.parse(Buffer.from(token, "base64url").toString()) as CaptchaPayload;
    if (!Array.isArray(parsed.correctIds) || !Number.isFinite(parsed.exp) || typeof parsed.sig !== "string") {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function createCaptchaChallenge(): CaptchaChallenge {
  const seed = randomInt(1, 2_147_483_647);
  const exp = Date.now() + CAPTCHA_TTL_MS;
  const { images, correctIds, question } = buildCaptchaImages(seed);
  const sig = signPayload(correctIds, exp);

  return {
    token: encodeToken({ correctIds, exp, sig }),
    question,
    images,
    minSubmitDelayMs: MIN_SUBMIT_DELAY_MS,
  };
}

function normalizeSelectedIds(answer: string): string[] {
  try {
    const parsed = JSON.parse(answer) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((value): value is string => typeof value === "string").sort();
  } catch {
    return answer
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean)
      .sort();
  }
}

export function verifyCaptchaAnswer(token: string, answer: string): boolean {
  const parsed = decodeToken(token);
  if (!parsed) return false;

  const { correctIds, exp, sig } = parsed;
  if (Date.now() > exp) return false;
  if (!safeEqual(signPayload(correctIds, exp), sig)) return false;

  const selected = normalizeSelectedIds(answer);
  const expected = [...correctIds].sort();

  if (selected.length !== expected.length) return false;
  return selected.every((id, index) => id === expected[index]);
}

export function isSubmitDelayValid(formStartedAt: number): boolean {
  if (!Number.isFinite(formStartedAt)) return false;
  return Date.now() - formStartedAt >= MIN_SUBMIT_DELAY_MS;
}

export const captchaMinSubmitDelayMs = MIN_SUBMIT_DELAY_MS;
