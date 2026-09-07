import { createCaptchaChallenge } from "@/lib/hexamob/captcha";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const challenge = createCaptchaChallenge();
    return Response.json(challenge);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Captcha unavailable";
    return Response.json({ error: message }, { status: 500 });
  }
}
