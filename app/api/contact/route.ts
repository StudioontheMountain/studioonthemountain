import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields required" }, { status: 400 })
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY

    if (RESEND_API_KEY) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Studio on the Mountain <noreply@studioonthemountain.com>",
          to: "hello@studioonthemountain.com",
          subject: `Contact from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
          reply_to: email,
        }),
      })
    } else {
      console.log("Contact form submission:", { name, email, message })
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
