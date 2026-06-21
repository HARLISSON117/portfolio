import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string;
}

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW = 60_000;
const MAX_CONTENT_LENGTH = 8_000;

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function cleanText(value: string): string {
  return value.replace(/[<>]/g, "").trim();
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT) return false;
  record.count += 1;
  return true;
}

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (contentLength > MAX_CONTENT_LENGTH) {
    return NextResponse.json({ error: "Mensagem muito longa." }, { status: 413 });
  }

  const ip = getClientIp(request);
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: "Muitas tentativas. Aguarde um momento." }, { status: 429 });
  }

  let body: Partial<ContactPayload>;
  try {
    body = (await request.json()) as Partial<ContactPayload>;
  } catch {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }

  if (body.honeypot) {
    return NextResponse.json({ success: true });
  }

  const name = typeof body.name === "string" ? body.name : "";
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const subject = typeof body.subject === "string" ? body.subject : "";
  const message = typeof body.message === "string" ? body.message : "";

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Preencha todos os campos." }, { status: 422 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "E-mail inválido." }, { status: 422 });
  }

  if (name.length > 100 || subject.length > 200 || message.length > 2000 || message.trim().length < 10) {
    return NextResponse.json({ error: "Verifique o tamanho dos campos." }, { status: 422 });
  }

  const cleanName = cleanText(name);
  const cleanSubject = cleanText(subject);
  const cleanMessage = cleanText(message);

  const resendKey = process.env.RESEND_API_KEY;
  const contactEmailTo = process.env.CONTACT_EMAIL_TO;
  const contactEmailFrom = process.env.CONTACT_EMAIL_FROM ?? "portfolio@seudominio.com";

  if (resendKey && contactEmailTo) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: contactEmailFrom,
        to: contactEmailTo,
        reply_to: email,
        subject: `[Portfólio] ${cleanSubject}`,
        html: `
          <p><strong>Nome:</strong> ${escapeHtml(cleanName)}</p>
          <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${escapeHtml(cleanMessage).replace(/\n/g, "<br />")}</p>
        `,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Não foi possível enviar a mensagem agora." }, { status: 502 });
    }
  } else if (process.env.NODE_ENV !== "production") {
    console.info("[Contact Form - dev only]", {
      name: cleanName,
      email,
      subject: cleanSubject,
      message: cleanMessage,
    });
  }

  return NextResponse.json({ success: true });
}
