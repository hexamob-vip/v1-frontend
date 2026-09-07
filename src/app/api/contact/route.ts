import { z } from "zod";
import { isSubmitDelayValid, verifyCaptchaAnswer } from "@/lib/hexamob/captcha";
import { contactSubjectValues, getContactSubjectLabel } from "@/lib/hexamob/contact-subjects";
import { isSmtpConfigured, sendContactEmail } from "@/lib/hexamob/mail";

export const dynamic = "force-dynamic";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Nom trop court").max(120),
  email: z.string().trim().email("E-mail invalide").max(160),
  phone: z.string().trim().min(6, "Téléphone requis").max(40),
  subject: z.enum(contactSubjectValues as [string, ...string[]], {
    message: "Objet invalide",
  }),
  message: z.string().trim().min(10, "Message trop court").max(4000),
  captchaToken: z.string().min(10),
  captchaAnswer: z.string().trim().min(2, "Réponse au captcha requise").max(2000),
  formStartedAt: z.number().int().positive(),
  faxNumber: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    if (!isSmtpConfigured()) {
      return Response.json(
        { error: "Le service de contact n'est pas configuré. Réessayez plus tard." },
        { status: 503 },
      );
    }

    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message ?? "Données invalides";
      return Response.json({ error: firstError }, { status: 400 });
    }

    const data = parsed.data;

    if (data.faxNumber) {
      return Response.json({ ok: true });
    }

    if (!isSubmitDelayValid(data.formStartedAt)) {
      return Response.json({ error: "Veuillez patienter avant d'envoyer le formulaire." }, { status: 400 });
    }

    if (!verifyCaptchaAnswer(data.captchaToken, data.captchaAnswer)) {
      return Response.json({ error: "Captcha incorrect ou expiré." }, { status: 400 });
    }

    await sendContactEmail({
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: getContactSubjectLabel(data.subject),
      message: data.message,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("[contact]", error);
    return Response.json(
      { error: "Impossible d'envoyer le message pour le moment." },
      { status: 500 },
    );
  }
}
