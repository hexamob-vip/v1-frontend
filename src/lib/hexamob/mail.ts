import nodemailer from "nodemailer";
import { companyLegal } from "@/lib/hexamob/legal";

type ContactEmailInput = {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
};

function getSmtpConfig() {
  const host = process.env.SMTP_HOST?.trim();
  const port = Number.parseInt(process.env.SMTP_PORT ?? "587", 10);
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  const from = process.env.SMTP_FROM?.trim() || companyLegal.email;
  const to = process.env.CONTACT_TO?.trim() || companyLegal.email;

  if (!host || !user || !pass) {
    throw new Error("SMTP configuration is incomplete");
  }

  return {
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    from,
    to,
  };
}

export async function sendContactEmail(input: ContactEmailInput) {
  const smtp = getSmtpConfig();
  const transporter = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.secure,
    auth: smtp.auth,
  });

  const subject = input.subject?.trim() || "Nouveau message depuis hexamob.vip";
  const phoneLine = input.phone?.trim() ? `\nTéléphone : ${input.phone.trim()}` : "";
  const text = [
    "Nouveau message via le formulaire de contact HEXAMOB",
    "",
    `Nom : ${input.name}`,
    `E-mail : ${input.email}${phoneLine}`,
    `Objet : ${subject}`,
    "",
    input.message,
  ].join("\n");

  await transporter.sendMail({
    from: smtp.from,
    to: smtp.to,
    replyTo: input.email,
    subject: `[Contact HEXAMOB] ${subject}`,
    text,
  });
}

export function isSmtpConfigured(): boolean {
  return Boolean(
    process.env.SMTP_HOST?.trim() &&
      process.env.SMTP_USER?.trim() &&
      process.env.SMTP_PASS?.trim(),
  );
}
