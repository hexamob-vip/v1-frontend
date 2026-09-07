"use client";

import { FormEvent, useEffect, useState } from "react";
import { HiArrowPath, HiXMark } from "react-icons/hi2";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/hexamob/cn";
import {
  contactSubjectOptions,
  resolveContactSubjectFromQuery,
} from "@/lib/hexamob/contact-subjects";

type CaptchaImage = {
  id: string;
  src: string;
};

type CaptchaState = {
  token: string;
  question: string;
  images: CaptchaImage[];
  formStartedAt: number;
};

type FormStatus = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-white/15 bg-white/5 px-[1vw] py-[0.7vw] text-white outline-none transition placeholder:text-white/30 focus:border-gold-800/60 max-lg:px-[3vw] max-lg:py-[2vw] max-lg:text-[3.2vw]";
const labelClass =
  "mb-[0.5vw] block text-[0.7vw] uppercase tracking-[0.15em] text-gold-500 max-lg:mb-[1.5vw] max-lg:text-[2.5vw]";

function isEmailValid(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [captchaModalOpen, setCaptchaModalOpen] = useState(false);
  const [captcha, setCaptcha] = useState<CaptchaState | null>(null);
  const [selectedCaptchaIds, setSelectedCaptchaIds] = useState<string[]>([]);
  const [captchaLoading, setCaptchaLoading] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [modalErrorMessage, setModalErrorMessage] = useState("");

  const requiredFieldsComplete =
    name.trim().length >= 2 &&
    isEmailValid(email) &&
    phone.trim().length >= 6 &&
    subject.trim().length > 0 &&
    message.trim().length >= 10;

  useEffect(() => {
    const querySubject = searchParams.get("subject");
    const resolvedSubject = resolveContactSubjectFromQuery(querySubject);
    if (resolvedSubject) {
      setSubject(resolvedSubject);
    }
    setMessage(searchParams.get("message") ?? "");
  }, [searchParams]);

  useEffect(() => {
    if (!captchaModalOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && status !== "loading") {
        closeCaptchaModal();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [captchaModalOpen, status]);

  const loadCaptcha = async () => {
    setCaptchaLoading(true);
    setSelectedCaptchaIds([]);

    try {
      const response = await fetch("/api/contact/captcha", { cache: "no-store" });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error ?? "Captcha indisponible");

      setCaptcha({
        token: data.token,
        question: data.question,
        images: data.images,
        formStartedAt: Date.now(),
      });
      setModalErrorMessage("");
    } catch (error) {
      setCaptcha(null);
      setModalErrorMessage(error instanceof Error ? error.message : "Captcha indisponible");
    } finally {
      setCaptchaLoading(false);
    }
  };

  const closeCaptchaModal = () => {
    if (status === "loading") return;
    setCaptchaModalOpen(false);
    setCaptcha(null);
    setSelectedCaptchaIds([]);
    setCaptchaLoading(false);
    setModalErrorMessage("");
  };

  const openCaptchaModal = async () => {
    setCaptchaModalOpen(true);
    setModalErrorMessage("");
    setSelectedCaptchaIds([]);
    setCaptcha(null);
    await loadCaptcha();
  };

  const toggleCaptchaImage = (id: string) => {
    setSelectedCaptchaIds((current) =>
      current.includes(id) ? current.filter((value) => value !== id) : [...current, id],
    );
  };

  const handleOpenCaptchaModal = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!requiredFieldsComplete) {
      setErrorMessage("Veuillez remplir tous les champs obligatoires.");
      setStatus("error");
      return;
    }

    setErrorMessage("");
    setStatus("idle");
    void openCaptchaModal();
  };

  const handleConfirmSubmit = async () => {
    if (!captcha) {
      setModalErrorMessage("Veuillez patienter pendant le chargement du captcha.");
      return;
    }

    if (selectedCaptchaIds.length === 0) {
      setModalErrorMessage("Veuillez sélectionner au moins une image.");
      return;
    }

    setStatus("loading");
    setModalErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          subject,
          message,
          captchaToken: captcha.token,
          captchaAnswer: JSON.stringify(selectedCaptchaIds),
          formStartedAt: captcha.formStartedAt,
          faxNumber: "",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Envoi impossible");
      }

      closeCaptchaModal();
      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    } catch (error) {
      setStatus("idle");
      setModalErrorMessage(error instanceof Error ? error.message : "Envoi impossible");
      await loadCaptcha();
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl border border-gold-800/30 bg-gold-800/10 p-[2vw] max-lg:p-[5vw]">
        <p className="mb-[1vw] font-type1 text-[2vw] font-thin text-white max-lg:mb-[3vw] max-lg:text-[6vw]">
          Message envoyé
        </p>
        <p className="text-white/75 max-lg:text-[3.2vw]">
          Merci pour votre message. Nous vous répondrons dans les meilleurs délais à l&apos;adresse
          indiquée.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-[1.5vw] rounded-full border border-white/20 px-[1.2vw] py-[0.5vw] text-[0.7vw] uppercase tracking-wide text-white/80 transition hover:border-gold-800/50 hover:text-white max-lg:mt-[4vw] max-lg:px-[4vw] max-lg:py-[2vw] max-lg:text-[2.5vw]"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleOpenCaptchaModal} className="space-y-[1.5vw] max-lg:space-y-[4vw]" noValidate>
        <div className="grid grid-cols-2 gap-[1.5vw] max-lg:grid-cols-1 max-lg:gap-[4vw]">
          <div>
            <label htmlFor="contact-name" className={labelClass}>
              Nom *
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className={inputClass}
              disabled={status === "loading"}
            />
          </div>
          <div>
            <label htmlFor="contact-email" className={labelClass}>
              E-mail *
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={inputClass}
              disabled={status === "loading"}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-[1.5vw] max-lg:grid-cols-1 max-lg:gap-[4vw]">
          <div>
            <label htmlFor="contact-phone" className={labelClass}>
              Téléphone *
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className={inputClass}
              disabled={status === "loading"}
            />
          </div>
          <div>
            <label htmlFor="contact-subject" className={labelClass}>
              Objet *
            </label>
            <select
              id="contact-subject"
              name="subject"
              required
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              className={cn(inputClass, "cursor-pointer appearance-none")}
              disabled={status === "loading"}
            >
              <option value="" disabled className="bg-page text-white">
                Sélectionnez un sujet
              </option>
              {contactSubjectOptions.map((option) => (
                <option key={option.value} value={option.value} className="bg-page text-white">
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="contact-message" className={labelClass}>
            Message *
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={6}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className={cn(inputClass, "resize-y min-h-[10vw] max-lg:min-h-[30vw]")}
            disabled={status === "loading"}
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-9999px] h-px w-px overflow-hidden opacity-0"
        >
          <label htmlFor="contact-fax">Fax</label>
          <input id="contact-fax" name="faxNumber" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        {status === "error" && errorMessage ? (
          <p className="text-[0.75vw] text-red-300 max-lg:text-[2.8vw]" role="alert">
            {errorMessage}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={status === "loading" || !requiredFieldsComplete}
          className="pointer-events-auto inline-flex items-center rounded-full border border-golden-dark/40 bg-gold-gradient px-[1.2vw] py-[0.5vw] text-[0.75vw] font-bold uppercase tracking-wide text-page shadow-gold transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50 max-lg:px-[4vw] max-lg:py-[2vw] max-lg:text-[2.5vw]"
        >
          <span className="mr-[0.4vw] text-page">▸</span>
          Envoyer le message
        </button>
      </form>

      {captchaModalOpen ? (
        <div className="pointer-events-auto fixed inset-0 z-[999999] flex items-center justify-center p-[3vw] max-lg:p-[5vw]">
          <button
            type="button"
            aria-label="Fermer"
            onClick={closeCaptchaModal}
            className="absolute inset-0 bg-black/65 backdrop-blur-sm"
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-captcha-title"
            className="relative z-[1] w-full max-w-[42vw] rounded-xl border border-white/10 bg-page p-[2vw] shadow-[0_8px_40px_rgba(0,0,0,0.45)] max-lg:max-w-none max-lg:p-[5vw]"
          >
            <button
              type="button"
              onClick={closeCaptchaModal}
              disabled={status === "loading"}
              className="absolute right-[1vw] top-[1vw] rounded-full p-[0.4vw] text-white/50 transition hover:text-white max-lg:right-[3vw] max-lg:top-[3vw]"
              aria-label="Fermer la vérification"
            >
              <HiXMark className="size-[1.2vw] max-lg:size-[5vw]" />
            </button>

            <p className="mb-[0.5vw] text-[0.65vw] uppercase tracking-[0.2em] text-gold-500 max-lg:mb-[2vw] max-lg:text-[2.5vw]">
              Vérification anti-robot *
            </p>
            <h2
              id="contact-captcha-title"
              className="mb-[1.5vw] pr-[2vw] font-type1 text-[1.4vw] font-thin leading-snug text-white max-lg:mb-[4vw] max-lg:pr-[8vw] max-lg:text-[4.5vw]"
            >
              {captchaLoading ? "Chargement des images…" : captcha?.question}
            </h2>

            <div
              className="grid grid-cols-3 gap-[0.8vw] max-lg:grid-cols-2 max-lg:gap-[2vw]"
              role="group"
              aria-label="Sélection captcha"
            >
              {captcha?.images.map((image) => {
                const selected = selectedCaptchaIds.includes(image.id);
                return (
                  <button
                    key={image.id}
                    type="button"
                    onClick={() => toggleCaptchaImage(image.id)}
                    disabled={status === "loading" || captchaLoading}
                    aria-pressed={selected}
                    className={cn(
                      "relative overflow-hidden rounded-lg border-2 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500",
                      selected
                        ? "border-gold-500 ring-2 ring-gold-500/40"
                        : "border-white/10 hover:border-white/30",
                    )}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={image.src}
                      alt=""
                      draggable={false}
                      className="block h-auto w-full select-none"
                    />
                    {selected ? (
                      <span className="absolute right-[0.4vw] top-[0.4vw] rounded-full bg-gold-500 px-[0.5vw] py-[0.1vw] text-[0.55vw] font-bold uppercase text-page max-lg:text-[2vw]">
                        OK
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => void loadCaptcha()}
              disabled={status === "loading" || captchaLoading}
              className="mt-[1vw] inline-flex items-center gap-[0.4vw] text-[0.65vw] uppercase tracking-wide text-white/45 transition hover:text-gold-500 max-lg:mt-[3vw] max-lg:gap-[1.5vw] max-lg:text-[2.3vw]"
            >
              <HiArrowPath
                className={cn("size-[0.9vw] max-lg:size-[3vw]", captchaLoading && "animate-spin")}
                aria-hidden="true"
              />
              Recharger les images
            </button>

            {modalErrorMessage ? (
              <p className="mt-[1vw] text-[0.75vw] text-red-300 max-lg:mt-[3vw] max-lg:text-[2.8vw]" role="alert">
                {modalErrorMessage}
              </p>
            ) : null}

            <div className="mt-[1.5vw] flex flex-wrap gap-[0.8vw] max-lg:mt-[4vw] max-lg:gap-[2vw]">
              <button
                type="button"
                onClick={() => void handleConfirmSubmit()}
                disabled={
                  status === "loading" ||
                  captchaLoading ||
                  !captcha ||
                  selectedCaptchaIds.length === 0
                }
                className="inline-flex items-center rounded-full border border-golden-dark/40 bg-gold-gradient px-[1.2vw] py-[0.5vw] text-[0.75vw] font-bold uppercase tracking-wide text-page shadow-gold transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50 max-lg:px-[4vw] max-lg:py-[2vw] max-lg:text-[2.5vw]"
              >
                <span className="mr-[0.4vw] text-page">▸</span>
                {status === "loading" ? "Envoi en cours…" : "Confirmer l'envoi"}
              </button>
              <button
                type="button"
                onClick={closeCaptchaModal}
                disabled={status === "loading"}
                className="rounded-full border border-white/20 px-[1.2vw] py-[0.5vw] text-[0.75vw] uppercase tracking-wide text-white/70 transition hover:border-white/40 hover:text-white max-lg:px-[4vw] max-lg:py-[2vw] max-lg:text-[2.5vw]"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
