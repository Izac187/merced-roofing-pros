import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { siteConfig } from "@/lib/config";

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  service: z.string().optional(),
  source: z.string().optional(),
});

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 422 });
  }

  const { name, phone, service, source } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email not configured" }, { status: 503 });
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: `${siteConfig.siteName} <onboarding@resend.dev>`,
    to: [process.env.LEAD_EMAIL ?? siteConfig.email],
    subject: `New Lead: ${name} — ${siteConfig.siteName}`,
    text: [
      `Name: ${name}`,
      `Phone: ${phone}`,
      service ? `Service: ${service}` : null,
      source ? `Source: ${source}` : null,
      `Site: ${siteConfig.domain}`,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
