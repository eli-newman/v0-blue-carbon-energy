export interface InquiryPayload {
  source: "contact" | "partners"
  name: string
  email: string
  phone?: string
  organization?: string
  type?: string
  message: string
  /** Honeypot field; must stay empty for real users. */
  website?: string
}

/** Posts a form to /api/inquiry. Resolves true only if the server confirms the email was sent. */
export async function submitInquiry(payload: InquiryPayload): Promise<boolean> {
  try {
    const res = await fetch("/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
    return res.ok
  } catch {
    return false
  }
}
