"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { profile } from "@/data/profile";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string;
}

const initialForm: FormState = { name: "", email: "", subject: "", message: "", honeypot: "" };

function validate(form: FormState): Partial<Record<keyof FormState, string>> {
  const errors: Partial<Record<keyof FormState, string>> = {};

  if (!form.name.trim()) errors.name = "Nome é obrigatório.";
  if (!form.email.trim()) errors.email = "E-mail é obrigatório.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "E-mail inválido.";
  if (!form.subject.trim()) errors.subject = "Assunto é obrigatório.";
  if (!form.message.trim()) errors.message = "Mensagem é obrigatória.";
  else if (form.message.trim().length < 10) errors.message = "Mensagem muito curta.";

  return errors;
}

function readableUrl(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setForm((previousForm) => ({ ...previousForm, [name]: value }));
    setStatus((previousStatus) => (previousStatus === "error" ? "idle" : previousStatus));

    if (errors[name as keyof FormState]) {
      setErrors((previousErrors) => ({ ...previousErrors, [name]: undefined }));
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newErrors = validate(form);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setForm(initialForm);
        setStatus("success");
        return;
      }

      const data = (await response.json().catch(() => ({}))) as { error?: string };
      setStatus("error");
      if (data.error) setErrors({ message: data.error });
    } catch {
      setStatus("error");
    }
  }

  const contactItems = [
    { icon: "✉️", label: "E-mail", value: profile.email, href: `mailto:${profile.email}` },
    { icon: "💼", label: "LinkedIn", value: readableUrl(profile.linkedin), href: profile.linkedin },
    ...(profile.github
      ? [{ icon: "🐱", label: "GitHub", value: readableUrl(profile.github), href: profile.github }]
      : []),
    { icon: "📱", label: "WhatsApp", value: profile.phone, href: profile.whatsapp },
    { icon: "📍", label: "Localização", value: profile.location, href: undefined },
  ];

  return (
    <SectionWrapper id="contato" className="bg-gray-50 dark:bg-surface-card/30">
      <SectionHeader
        eyebrow="Vamos conversar"
        title="Entre em"
        titleHighlight="Contato"
        subtitle="Aberto a oportunidades, colaborações e conversas sobre tecnologia."
      />

      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            Se você tem uma oportunidade de estágio, um projeto interessante, quer trocar
            conhecimento ou simplesmente bater um papo sobre tecnologia, pode me chamar.
          </p>

          <div className="space-y-3 pt-2">
            {contactItems.map((item) =>
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={item.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="group flex items-center gap-3 rounded-xl p-3 text-gray-600 transition-colors hover:bg-white hover:text-brand-400 dark:text-gray-300 dark:hover:bg-white/5"
                >
                  <span className="w-8 flex-shrink-0 text-center text-xl" aria-hidden="true">{item.icon}</span>
                  <span>
                    <span className="block text-xs text-gray-400 group-hover:text-brand-400/70">{item.label}</span>
                    <span className="block break-all text-sm font-medium">{item.value}</span>
                  </span>
                </a>
              ) : (
                <div key={item.label} className="flex items-center gap-3 p-3">
                  <span className="w-8 flex-shrink-0 text-center text-xl" aria-hidden="true">{item.icon}</span>
                  <span>
                    <span className="block text-xs text-gray-400">{item.label}</span>
                    <span className="block text-sm font-medium text-gray-600 dark:text-gray-300">{item.value}</span>
                  </span>
                </div>
              ),
            )}
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="card p-6 sm:p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <span className="text-5xl" aria-hidden="true">✅</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Mensagem enviada!</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Obrigado pelo contato. Responderei em breve.</p>
                <button type="button" onClick={() => setStatus("idle")} className="mt-2 btn-secondary">
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Formulário de contato">
                <div className="sr-only" aria-hidden="true">
                  <label htmlFor="honeypot">Deixe este campo em branco</label>
                  <input
                    id="honeypot"
                    name="honeypot"
                    type="text"
                    value={form.honeypot}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="mb-4 grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Nome"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Seu nome"
                    value={form.name}
                    error={errors.name}
                    onChange={handleChange}
                    autoComplete="name"
                    maxLength={100}
                  />
                  <Field
                    label="E-mail"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={form.email}
                    error={errors.email}
                    onChange={handleChange}
                    autoComplete="email"
                    maxLength={254}
                  />
                </div>

                <div className="mb-4">
                  <Field
                    label="Assunto"
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Sobre o que é?"
                    value={form.subject}
                    error={errors.subject}
                    onChange={handleChange}
                    maxLength={200}
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Mensagem <span className="text-red-400" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Sua mensagem..."
                    value={form.message}
                    onChange={handleChange}
                    maxLength={2000}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    aria-invalid={Boolean(errors.message)}
                    className={`w-full resize-none rounded-xl border bg-gray-50 px-4 py-3 text-sm text-gray-900
                               placeholder-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500/50
                               dark:bg-surface-dark dark:text-gray-100 dark:placeholder-gray-600 ${
                                 errors.message
                                   ? "border-red-400"
                                   : "border-gray-200 focus:border-brand-500 dark:border-surface-border"
                               }`}
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="mt-1 text-xs text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                {status === "error" && (
                  <p role="alert" className="mb-4 text-sm text-red-400">
                    Ocorreu um erro. Tente novamente ou entre em contato diretamente pelo e-mail/WhatsApp.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full justify-center disabled:cursor-not-allowed disabled:opacity-60 btn-primary"
                >
                  {status === "loading" ? (
                    <>
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar mensagem
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 2 11 13M22 2 15 22l-4-9-9-4 20-7z" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

interface FieldProps {
  label: string;
  id: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  maxLength?: number;
}

function Field({ label, id, name, type, placeholder, value, error, onChange, autoComplete, maxLength }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label} <span className="text-red-400" aria-hidden="true">*</span>
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        maxLength={maxLength}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={Boolean(error)}
        className={`w-full rounded-xl border bg-gray-50 px-4 py-3 text-sm text-gray-900
                   placeholder-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500/50
                   dark:bg-surface-dark dark:text-gray-100 dark:placeholder-gray-600 ${
                     error ? "border-red-400" : "border-gray-200 focus:border-brand-500 dark:border-surface-border"
                   }`}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
