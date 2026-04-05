import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields required" }, { status: 400 })
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY

    if (!RESEND_API_KEY) {
      return NextResponse.json({ error: "Email not configured" }, { status: 500 })
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Studio on the Mountain <onboarding@resend.dev>",
        to: "hello@studioonthemountain.com",
        subject: `Contact from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        reply_to: email,
      }),
    })

    const data = await res.json()

    if (!res.ok) {
      return NextResponse.json({ error: "Email failed", details: data }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (e: any) {
    return NextResponse.json({ error: "Server error", details: e.message }, { status: 500 })
  }
}
