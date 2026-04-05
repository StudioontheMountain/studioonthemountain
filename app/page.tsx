"use client"
import { useState } from "react"

const products = {
  "Reference & learning": [
    { name: "InsuranceTerms", desc: "Insurance terminology explained in plain English with real examples.", url: "https://www.insuranceterms.app" },
    { name: "MoneyTerms", desc: "Financial concepts made accessible for everyday decisions.", url: "https://www.moneyterms.app" },
    { name: "RealEstateTerms", desc: "Real estate jargon decoded for buyers, sellers, and investors.", url: "https://www.realestateterms.app" },
    { name: "HowDoYouSpell", desc: "Spelling reference with regional variants across US, UK, CA & AU.", url: "https://www.howdoyouspell.app" },
  ],
  "Apps & tools": [
    { name: "helloneko", desc: "Fast, private file conversion in the browser.", url: "https://www.helloneko.app" },
    { name: "HabitHill", desc: "Minimal habit tracking, no accounts required.", url: "https://www.habithill.app" },
    { name: "EasyExpenseTracker", desc: "Simple expense logging with full data privacy.", url: "https://www.easyexpensetracker.app" },
  ],
  "Media": [
    { name: "MarketingWins", desc: "AI-powered marketing tips and strategy tools.", url: "https://www.marketingwins.app" },
    { name: "rockam.com", desc: "Rock music content and community.", url: "https://www.rockam.com" },
    { name: "CountryMusicAwards", desc: "Country music news and awards coverage.", url: "https://www.countrymusicawards.com" },
  ],
}

const orbitron = { fontFamily: "'Orbitron', sans-serif" }
const outfit = { fontFamily: "'Outfit', sans-serif" }

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSending(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setSent(true)
        setFormData({ name: "", email: "", message: "" })
      }
    } catch (err) {
      console.error(err)
    }
    setSending(false)
  }

  return (
    <main style={{ minHeight: "100vh", background: "linear-gradient(180deg, #f7f5f0 0%, #eae6dd 100%)" }}>
      {/* Nav */}
      <nav style={{ padding: "1.25rem clamp(1.25rem, 5vw, 2.5rem)", display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <svg width="28" height="28" viewBox="0 0 28 28">
            <polygon points="14,2 26,26 2,26" fill="none" stroke="#4a5568" strokeWidth="1.5"/>
            <circle cx="14" cy="15" r="3" fill="none" stroke="#4a5568" strokeWidth="1"/>
            <line x1="14" y1="12" x2="14" y2="8" stroke="#4a5568" strokeWidth="1"/>
          </svg>
          <span style={{ ...orbitron, fontSize: 13, fontWeight: 500, letterSpacing: "0.12em", color: "#3d3d3d", textTransform: "uppercase" as const }}>Studio on the Mountain</span>
        </div>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {["Portfolio", "About", "Contact"].map(s => (
            <a key={s} href={`#${s.toLowerCase()}`} style={{ ...outfit, fontSize: 13, fontWeight: 300, color: "#6b7280", textDecoration: "none", letterSpacing: "0.04em" }}>{s}</a>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "5rem clamp(1.25rem, 5vw, 2.5rem) 4rem", textAlign: "center", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ ...orbitron, fontSize: 10, letterSpacing: "0.3em", color: "#8b7e6a", textTransform: "uppercase" as const, marginBottom: "1.5rem" }}>Digital products &middot; Designed for acquisition</div>
        <h1 style={{ ...orbitron, fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 400, color: "#2d2d2d", letterSpacing: "0.02em", margin: "0 0 1.25rem", lineHeight: 1.3 }}>
          We build tools that<br/>make complex things simple
        </h1>
        <p style={{ ...outfit, fontSize: 15, fontWeight: 300, color: "#6b7280", maxWidth: 440, margin: "0 auto", lineHeight: 1.7 }}>
          A portfolio of web applications, reference platforms, and digital products — crafted with precision.
        </p>
      </section>

      <div style={{ width: 40, height: 1, background: "#c4b99a", margin: "0 auto 3rem" }} />

      {/* Portfolio */}
      <section id="portfolio" style={{ padding: "0 clamp(1.25rem, 5vw, 2.5rem) 3rem", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ ...orbitron, fontSize: 10, letterSpacing: "0.3em", color: "#8b7e6a", textTransform: "uppercase" as const, marginBottom: "2rem", textAlign: "center" }}>Portfolio</div>

        {Object.entries(products).map(([category, items]) => (
          <div key={category} style={{ marginBottom: "2rem" }}>
            <div style={{ ...orbitron, fontSize: 10, color: "#8b7e6a", letterSpacing: "0.15em", textTransform: "uppercase" as const, marginBottom: "1rem" }}>{category}</div>
            <div style={{ display: "grid", gridTemplateColumns: items.length <= 3 ? "repeat(3, 1fr)" : "repeat(2, 1fr)", gap: 12 }}>
              {items.map(p => (
                <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", background: "#fffdf8", border: "0.5px solid #ddd6c8", borderRadius: 10, padding: "1.25rem", transition: "border-color 0.2s" }}>
                  <div style={{ ...outfit, fontSize: 14, fontWeight: 500, color: "#2d2d2d", marginBottom: 4 }}>{p.name}</div>
                  <div style={{ ...outfit, fontSize: 12, fontWeight: 300, color: "#8b8178", lineHeight: 1.6 }}>{p.desc}</div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>

      <div style={{ width: 40, height: 1, background: "#c4b99a", margin: "0 auto 3rem" }} />

      {/* About */}
      <section id="about" style={{ padding: "0 clamp(1.25rem, 5vw, 2.5rem) 3rem", maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
        <div style={{ ...orbitron, fontSize: 10, letterSpacing: "0.3em", color: "#8b7e6a", textTransform: "uppercase" as const, marginBottom: "1.5rem" }}>About</div>
        <p style={{ ...outfit, fontSize: 15, fontWeight: 300, color: "#6b7280", lineHeight: 1.8 }}>
          Studio on the Mountain is a portfolio company building web applications and digital products designed for acquisition. Each product in our portfolio demonstrates a distinct revenue model and serves a defined market. We focus on clarity, privacy, and tools that make complex things simple.
        </p>
      </section>

      <div style={{ width: 40, height: 1, background: "#c4b99a", margin: "0 auto 3rem" }} />

      {/* Contact */}
      <section id="contact" style={{ padding: "0 clamp(1.25rem, 5vw, 2.5rem) 3rem", maxWidth: 440, margin: "0 auto" }}>
        <div style={{ ...orbitron, fontSize: 10, letterSpacing: "0.3em", color: "#8b7e6a", textTransform: "uppercase" as const, marginBottom: "2rem", textAlign: "center" }}>Get in touch</div>
        {sent ? (
          <div style={{ ...outfit, textAlign: "center", color: "#6b7280", fontSize: 15, fontWeight: 300, padding: "2rem 0" }}>
            Message sent. We will be in touch.
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <input type="text" required placeholder="Your name" value={formData.name} onChange={e => setFormData(d => ({ ...d, name: e.target.value }))} style={{ ...outfit, background: "#fffdf8", border: "0.5px solid #ddd6c8", borderRadius: 8, padding: "10px 14px", fontSize: 13, fontWeight: 300, color: "#3d3d3d", outline: "none" }} />
            <input type="email" required placeholder="Your email" value={formData.email} onChange={e => setFormData(d => ({ ...d, email: e.target.value }))} style={{ ...outfit, background: "#fffdf8", border: "0.5px solid #ddd6c8", borderRadius: 8, padding: "10px 14px", fontSize: 13, fontWeight: 300, color: "#3d3d3d", outline: "none" }} />
            <textarea required placeholder="Your message" rows={4} value={formData.message} onChange={e => setFormData(d => ({ ...d, message: e.target.value }))} style={{ ...outfit, background: "#fffdf8", border: "0.5px solid #ddd6c8", borderRadius: 8, padding: "10px 14px", fontSize: 13, fontWeight: 300, color: "#3d3d3d", outline: "none", resize: "vertical" }} />
            <button type="submit" disabled={sending} style={{ ...orbitron, background: "#3d3d3d", color: "#f7f5f0", border: "none", borderRadius: 8, padding: "12px 24px", fontSize: 11, fontWeight: 500, cursor: "pointer", letterSpacing: "0.1em", textTransform: "uppercase" as const, opacity: sending ? 0.6 : 1 }}>
              {sending ? "Sending..." : "Send message"}
            </button>
          </form>
        )}
      </section>

      {/* Footer */}
      <footer style={{ padding: "2rem clamp(1.25rem, 5vw, 2.5rem)", borderTop: "0.5px solid #ddd6c8", display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: 900, margin: "0 auto" }}>
        <span style={{ ...outfit, fontSize: 11, fontWeight: 300, color: "#8b8178" }}>&copy; {new Date().getFullYear()} Studio on the Mountain</span>
        <span style={{ ...orbitron, fontSize: 9, letterSpacing: "0.15em", color: "#8b8178", textTransform: "uppercase" as const }}>SOTM</span>
      </footer>
    </main>
  )
}
