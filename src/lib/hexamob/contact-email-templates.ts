import { companyLegal } from "@/lib/hexamob/legal";
import { absoluteUrl, siteName } from "@/lib/hexamob/site";

const LOGO_URL = absoluteUrl("/assets/images/logo-signature.png");
const GOLD = "#bc9140";
const BG = "#000000";
const CARD = "#111111";
const BORDER = "#2a2a2a";
const MUTED = "#a3a3a3";

export type ContactEmailContent = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatMultiline(value: string): string {
  return escapeHtml(value).replace(/\r?\n/g, "<br />");
}

function emailLayout(content: string): string {
  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(siteName)}</title>
</head>
<body style="margin:0;padding:0;background-color:${BG};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BG};">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background-color:${CARD};border:1px solid ${BORDER};border-radius:12px;overflow:hidden;">
          <tr>
            <td align="center" style="padding:36px 32px 28px;border-bottom:1px solid ${GOLD};">
              <img src="${LOGO_URL}" alt="HEXAMOB" width="280" style="display:block;width:100%;max-width:280px;height:auto;margin:0 auto;border:0;" />
            </td>
          </tr>
          <tr>
            <td style="padding:32px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#ffffff;">
              ${content}
            </td>
          </tr>
          <tr>
            <td style="padding:24px 32px;border-top:1px solid ${BORDER};font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.5;color:${MUTED};text-align:center;">
              <strong style="color:${GOLD};">${escapeHtml(companyLegal.name)}</strong><br />
              Chauffeur VTC premium · Charente-Maritime<br />
              <a href="mailto:${companyLegal.email}" style="color:${GOLD};text-decoration:none;">${companyLegal.email}</a>
              · ${escapeHtml(companyLegal.phone)}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function detailRow(label: string, value: string): string {
  return `<tr>
    <td style="padding:10px 0;border-bottom:1px solid ${BORDER};font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.4;color:${MUTED};text-transform:uppercase;letter-spacing:0.08em;vertical-align:top;width:120px;">${escapeHtml(label)}</td>
    <td style="padding:10px 0 10px 16px;border-bottom:1px solid ${BORDER};font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.5;color:#ffffff;vertical-align:top;">${value}</td>
  </tr>`;
}

export function buildAdminContactEmailHtml(input: ContactEmailContent): string {
  const phoneRow = input.phone?.trim()
    ? detailRow("Téléphone", `<a href="tel:${escapeHtml(input.phone.trim())}" style="color:${GOLD};text-decoration:none;">${escapeHtml(input.phone.trim())}</a>`)
    : "";

  const content = `
    <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:${GOLD};">Nouveau message</p>
    <h1 style="margin:0 0 24px;font-size:24px;font-weight:400;line-height:1.3;color:#ffffff;">Formulaire de contact</h1>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 24px;">
      ${detailRow("Nom", escapeHtml(input.name))}
      ${detailRow("E-mail", `<a href="mailto:${escapeHtml(input.email)}" style="color:${GOLD};text-decoration:none;">${escapeHtml(input.email)}</a>`)}
      ${phoneRow}
      ${detailRow("Objet", escapeHtml(input.subject))}
    </table>
    <div style="padding:20px;background-color:#0a0a0a;border:1px solid ${BORDER};border-left:3px solid ${GOLD};border-radius:8px;">
      <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:${MUTED};">Message</p>
      <p style="margin:0;font-size:15px;line-height:1.7;color:#f5f5f5;">${formatMultiline(input.message)}</p>
    </div>
    <p style="margin:24px 0 0;font-size:13px;color:${MUTED};">Répondez directement à cet e-mail pour contacter ${escapeHtml(input.name)}.</p>
  `;

  return emailLayout(content);
}

export function buildAdminContactEmailText(input: ContactEmailContent): string {
  const phoneLine = input.phone?.trim() ? `\nTéléphone : ${input.phone.trim()}` : "";
  return [
    "Nouveau message via le formulaire de contact HEXAMOB",
    "",
    `Nom : ${input.name}`,
    `E-mail : ${input.email}${phoneLine}`,
    `Objet : ${input.subject}`,
    "",
    input.message,
  ].join("\n");
}

export function buildClientConfirmationEmailHtml(input: ContactEmailContent): string {
  const content = `
    <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:${GOLD};">Confirmation</p>
    <h1 style="margin:0 0 20px;font-size:26px;font-weight:400;line-height:1.3;color:#ffffff;">Message bien reçu</h1>
    <p style="margin:0 0 16px;color:#f0f0f0;">Bonjour ${escapeHtml(input.name)},</p>
    <p style="margin:0 0 16px;color:#e5e5e5;">
      Nous avons bien reçu votre message concernant
      <strong style="color:${GOLD};">${escapeHtml(input.subject)}</strong>.
      Notre équipe vous répondra dans les plus brefs délais.
    </p>
    <p style="margin:0 0 24px;color:#e5e5e5;">
      Merci pour votre confiance et à très bientôt avec HEXAMOB.
    </p>
    <div style="padding:20px;background-color:#0a0a0a;border:1px solid ${BORDER};border-radius:8px;">
      <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:${MUTED};">Récapitulatif</p>
      <p style="margin:0;font-size:14px;line-height:1.7;color:#d4d4d4;">${formatMultiline(input.message)}</p>
    </div>
    <p style="margin:24px 0 0;font-size:13px;color:${MUTED};">
      Pour toute urgence, vous pouvez aussi nous joindre au ${escapeHtml(companyLegal.phone)}.
    </p>
  `;

  return emailLayout(content);
}

export function buildClientConfirmationEmailText(input: ContactEmailContent): string {
  return [
    `Bonjour ${input.name},`,
    "",
    `Nous avons bien reçu votre message concernant « ${input.subject} ».`,
    "Notre équipe vous répondra dans les plus brefs délais.",
    "",
    "Merci pour votre confiance.",
    "",
    "— L'équipe HEXAMOB",
    companyLegal.email,
    companyLegal.phone,
  ].join("\n");
}
