import { NextResponse } from "next/server"

export const runtime = "nodejs"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX = { short: 200, message: 5000 }

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "")
const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")

export async function POST(req: Request) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 })
  }

  // Honeypot: real users never fill this hidden field. Pretend success so bots move on.
  if (clean(body.website, 200)) return NextResponse.json({ ok: true })

  const source = clean(body.source, 40) || "contact"
  const name = clean(body.name, MAX.short)
  const email = clean(body.email, MAX.short)
  const phone = clean(body.phone, MAX.short)
  const organization = clean(body.organization, MAX.short)
  const type = clean(body.type, MAX.short)
  const message = clean(body.message, MAX.message)

  if (!name || !EMAIL_RE.test(email) || !message) {
    return NextResponse.json({ error: "invalid_fields" }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.INQUIRY_TO_EMAIL
  const from = process.env.INQUIRY_FROM_EMAIL ?? "Blue Carbon Website <onboarding@resend.dev>"

  // Never report success for a message that was not actually sent.
  if (!apiKey || !to) {
    console.error("[inquiry] RESEND_API_KEY or INQUIRY_TO_EMAIL is not set; inquiry was NOT delivered")
    return NextResponse.json({ error: "not_configured" }, { status: 503 })
  }

  const rows: [string, string][] = [
    ["Form", source],
    ["Name", name],
    ["Email", email],
    ["Phone", phone],
    ["Organization", organization],
    ["Type", type],
  ]
  const html =
    `<table cellpadding="6" style="font-family:sans-serif;font-size:14px">` +
    rows
      .filter(([, v]) => v)
      .map(([k, v]) => `<tr><td><b>${k}</b></td><td>${escapeHtml(v)}</td></tr>`)
      .join("") +
    `</table><p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap">${escapeHtml(message)}</p>`
  const text = rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join("\n") + `\n\n${message}`

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: to.split(",").map((s) => s.trim()),
      reply_to: email,
      subject: `[Blue Carbon website] ${source} inquiry from ${name}`,
      html,
      text,
    }),
  })

  if (!res.ok) {
    console.error("[inquiry] Resend rejected the email", res.status, await res.text())
    return NextResponse.json({ error: "send_failed" }, { status: 502 })
  }
  return NextResponse.json({ ok: true })
}
