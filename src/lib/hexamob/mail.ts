import nodemailer from "nodemailer";
import {
  buildAdminContactEmailHtml,
  buildAdminContactEmailText,
  buildClientConfirmationEmailHtml,
  buildClientConfirmationEmailText,
  type ContactEmailContent,
} from "@/lib/hexamob/contact-email-templates";
import { companyLegal } from "@/lib/hexamob/legal";

type ContactEmailInput = ContactEmailContent;

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

function createTransporter() {
  const smtp = getSmtpConfig();
  return {
    smtp,
    transporter: nodemailer.createTransport({
      host: smtp.host,
      port: smtp.port,
      secure: smtp.secure,
      auth: smtp.auth,
    }),
  };
}

export async function sendContactEmail(input: ContactEmailInput) {
  const { smtp, transporter } = createTransporter();
  const subject = input.subject.trim() || "Demande de contact";

  await transporter.sendMail({
    from: smtp.from,
    to: smtp.to,
    replyTo: input.email,
    subject: `[Contact HEXAMOB] ${subject}`,
    text: buildAdminContactEmailText(input),
    html: buildAdminContactEmailHtml(input),
  });

  try {
    await transporter.sendMail({
      from: smtp.from,
      to: input.email,
      subject: "Nous avons bien reçu votre message — HEXAMOB",
      text: buildClientConfirmationEmailText(input),
      html: buildClientConfirmationEmailHtml(input),
    });
  } catch (error) {
    console.error("[contact] confirmation email failed", error);
  }
}

export function isSmtpConfigured(): boolean {
  return Boolean(
    process.env.SMTP_HOST?.trim() &&
      process.env.SMTP_USER?.trim() &&
      process.env.SMTP_PASS?.trim(),
  );
}
