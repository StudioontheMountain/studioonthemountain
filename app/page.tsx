"use client"
import { useState } from "react"

const tools = [
  { name: "Marketing Wins", desc: "AI-personalized marketing tactics for small businesses. Hundreds of proven plays, tailored to your business type. One-time license.", domain: "marketingwins.app", url: "https://www.marketingwins.app" },
  { name: "EasyExpenseTracker", desc: "An expense tracker that keeps your data on your phone. No cloud sync, no subscriptions, no surveillance. One-time purchase.", domain: "easyexpensetracker.app", url: "https://www.easyexpensetracker.app" },
  { name: "HabitHill", desc: "Habit tracking with AI-assisted nudges. Private, lightweight, no subscription required. One-time license.", domain: "habithill.app", url: "https://www.habithill.app" },
  { name: "helloneko", desc: "AI-assisted file conversion. Pay per use. Files are processed and discarded — nothing stored, nothing tracked.", domain: "helloneko.app", url: "https://www.helloneko.app" },
]

const otherProjects = [
  { name: "InsuranceTerms", desc: "Insurance terminology in plain English.", url: "https://www.insuranceterms.app" },
  { name: "MoneyTerms", desc: "Financial concepts made accessible.", url: "https://www.moneyterms.app" },
  { name: "RealEstateTerms", desc: "Real estate jargon decoded.", url: "https://www.realestateterms.app" },
  { name: "HowDoYouSpell", desc: "Spelling reference across US, UK, CA, AU.", url: "https://www.howdoyouspell.app" },
  { name: "CountryMusicAwards", desc: "Country music news and awards coverage.", url: "https://www.countrymusicawards.com" },
  { name: "rockam", desc: "Rock music content and community.", url: "https://www.rockam.com" },
]

const contactProducts = [
  { value: "marketingwins", label: "Marketing Wins" },
  { value: "easyexpensetracker", label: "EasyExpenseTracker" },
  { value: "habithill", label: "HabitHill" },
  { value: "helloneko", label: "helloneko" },
  { value: "insuranceterms", label: "InsuranceTerms" },
  { value: "moneyterms", label: "MoneyTerms" },
  { value: "realestateterms", label: "RealEstateTerms" },
  { value: "howdoyouspell", label: "HowDoYouSpell" },
  { value: "countrymusicawards", label: "CountryMusicAwards" },
  { value: "rockam", label: "rockam" },
  { value: "studio", label: "Studio on the Mountain (general)" },
]

const fontStack = `-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif`
const displayFontStack = `-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif`

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", product: "" })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSending(true)
    setError(false)
    try {
      const productLabel = contactProducts.find(p => p.value === formData.product)?.label || "General"
      const composedMessage = `[${productLabel}]\n\n${formData.message}`

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: composedMessage,
        }),
      })
      if (res.ok) {
        setSent(true)
        setFormData({ name: "", email: "", message: "", product: "" })
      } else {
        setError(true)
      }
    } catch (err) {
      console.error(err)
      setError(true)
    }
    setSending(false)
  }

  return (
    <main style={{
      minHeight: "100vh",
      background: "#F5F1EA",
      color: "#1B1B1F",
      fontFamily: fontStack,
      fontSize: 17,
      lineHeight: 1.5,
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
    }}>

      {/* HERO */}
      <section style={{
        position: "relative",
        minHeight: "45vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#c8c4b8",
      }}>
        <picture>
          <source srcSet="/dune.webp" type="image/webp" />
          <img
            src="/dune.jpg"
            alt=""
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              zIndex: 1,
            }}
          />
        </picture>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 2,
          background: "linear-gradient(90deg, rgba(20, 22, 28, 0.55) 0%, rgba(20, 22, 28, 0.30) 50%, rgba(20, 22, 28, 0.10) 100%)",
        }} />

        {/* Header (positioned over hero) */}
        <header style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          padding: "1.75rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: 1100,
          margin: "0 auto",
        }}>
          <a href="/" style={{
            fontSize: "1rem",
            fontWeight: 500,
            letterSpacing: "-0.005em",
            color: "#FFFFFF",
            textDecoration: "none",
            textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
          }}>Studio on the Mountain</a>
          <nav style={{ display: "flex", gap: "2rem" }}>
            {["Tools", "About", "Contact"].map(s => (
              <a key={s} href={`#${s.toLowerCase()}`} style={{
                fontSize: "0.95rem",
                fontWeight: 400,
                color: "rgba(255, 255, 255, 0.85)",
                textDecoration: "none",
                letterSpacing: "-0.005em",
                textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
              }}>{s}</a>
            ))}
          </nav>
        </header>

        <div style={{
          position: "relative",
          zIndex: 3,
          maxWidth: 720,
          margin: "0 auto",
          padding: "6rem 2rem",
          width: "100%",
        }}>
          <h1 style={{
            fontFamily: displayFontStack,
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 600,
            letterSpacing: "-0.03em",
            lineHeight: 1,
            color: "#FFFFFF",
            marginBottom: "1.75rem",
            textShadow: "0 1px 2px rgba(0, 0, 0, 0.25), 0 2px 12px rgba(0, 0, 0, 0.2)",
          }}>
            We make useful AI tools for small business.
          </h1>
          <p style={{
            fontSize: "1.2rem",
            lineHeight: 1.5,
            color: "rgba(255, 255, 255, 0.92)",
            maxWidth: "32em",
            textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
            margin: 0,
          }}>
            A small studio. A few apps that earn their keep. Made with care, supported by humans.
          </p>
        </div>
      </section>

      {/* TOOLS */}
      <section id="tools" style={{ padding: "5rem 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
          <span style={{
            fontSize: "0.85rem",
            fontWeight: 500,
            letterSpacing: "0.05em",
            textTransform: "uppercase" as const,
            color: "#6B6B70",
            marginBottom: "1.25rem",
            display: "block",
          }}>Tools</span>
          <h2 style={{
            fontFamily: displayFontStack,
            fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
            fontWeight: 600,
            letterSpacing: "-0.018em",
            lineHeight: 1.05,
            marginBottom: "1.5rem",
            color: "#1B1B1F",
          }}>What we make.</h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
            marginTop: "2rem",
          }}>
            {tools.map(tool => (
              <a key={tool.name} href={tool.url} target="_blank" rel="noopener noreferrer" style={{
                display: "block",
                padding: "1.75rem",
                backgroundColor: "rgba(255, 255, 255, 0.45)",
                border: "1px solid rgba(27, 27, 31, 0.08)",
                borderRadius: 14,
                textDecoration: "none",
                color: "inherit",
                transition: "background-color 0.2s ease, transform 0.15s ease, border-color 0.2s ease",
              }}>
                <h3 style={{
                  fontSize: "1.2rem",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  marginBottom: "0.5rem",
                  lineHeight: 1.2,
                  color: "#1B1B1F",
                }}>{tool.name}</h3>
                <p style={{
                  fontSize: "0.95rem",
                  color: "#3A3A3F",
                  lineHeight: 1.5,
                  margin: 0,
                }}>{tool.desc}</p>
                <span style={{
                  fontSize: "0.85rem",
                  color: "#6B6B70",
                  marginTop: "0.85rem",
                  display: "block",
                  letterSpacing: "-0.005em",
                }}>{tool.domain}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER PROJECTS */}
      <section style={{ padding: "5rem 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
          <span style={{
            fontSize: "0.85rem",
            fontWeight: 500,
            letterSpacing: "0.05em",
            textTransform: "uppercase" as const,
            color: "#6B6B70",
            marginBottom: "1.25rem",
            display: "block",
          }}>Other Projects</span>
          <h2 style={{
            fontFamily: displayFontStack,
            fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
            fontWeight: 600,
            letterSpacing: "-0.018em",
            lineHeight: 1.05,
            marginBottom: "1.5rem",
            color: "#1B1B1F",
          }}>Other things we&rsquo;ve made.</h2>
          <p style={{ color: "#3A3A3F", maxWidth: "36em", marginBottom: "1rem" }}>
            Reference sites, content projects, and side experiments. Not the focus, but useful in their own ways.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1rem 2.5rem",
            marginTop: "1.5rem",
          }}>
            {otherProjects.map(p => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" style={{
                display: "block",
                padding: "0.85rem 0",
                textDecoration: "none",
                color: "inherit",
                borderBottom: "1px solid rgba(27, 27, 31, 0.08)",
              }}>
                <span style={{
                  fontSize: "1rem",
                  fontWeight: 500,
                  letterSpacing: "-0.005em",
                  color: "#1B1B1F",
                }}>{p.name}</span>
                <span style={{
                  fontSize: "0.9rem",
                  color: "#6B6B70",
                  marginLeft: "0.5em",
                }}>{p.desc}</span>
              </a>
            ))}
          </div>

          <p style={{
            fontSize: "0.9rem",
            color: "#6B6B70",
            fontStyle: "italic",
            marginTop: "1.5rem",
          }}>More projects in development. Check back soon.</p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "5rem 0" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 2rem" }}>
          <span style={{
            fontSize: "0.85rem",
            fontWeight: 500,
            letterSpacing: "0.05em",
            textTransform: "uppercase" as const,
            color: "#6B6B70",
            marginBottom: "1.25rem",
            display: "block",
          }}>About</span>
          <h2 style={{
            fontFamily: displayFontStack,
            fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
            fontWeight: 600,
            letterSpacing: "-0.018em",
            lineHeight: 1.05,
            marginBottom: "1.5rem",
            color: "#1B1B1F",
          }}>A small studio.</h2>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.6, color: "#3A3A3F", marginBottom: "1.25rem", maxWidth: "36em" }}>
            Studio on the Mountain is a small independent studio. We build a handful of AI-assisted tools and reference sites, support them, and answer email when something breaks.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.6, color: "#3A3A3F", marginBottom: "1.25rem", maxWidth: "36em" }}>
            We charge once when we can. We don&rsquo;t sync your data to our servers when we don&rsquo;t have to. We try to make tools that earn their keep instead of demanding your attention.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.6, color: "#3A3A3F", maxWidth: "36em", margin: 0 }}>
            That&rsquo;s most of what there is to know.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "5rem 0" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 2rem" }}>
          <span style={{
            fontSize: "0.85rem",
            fontWeight: 500,
            letterSpacing: "0.05em",
            textTransform: "uppercase" as const,
            color: "#6B6B70",
            marginBottom: "1.25rem",
            display: "block",
          }}>Contact</span>
          <h2 style={{
            fontFamily: displayFontStack,
            fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
            fontWeight: 600,
            letterSpacing: "-0.018em",
            lineHeight: 1.05,
            marginBottom: "1.5rem",
            color: "#1B1B1F",
          }}>Get in touch.</h2>
          <p style={{ color: "#3A3A3F", marginBottom: "1rem" }}>
            Questions, bug reports, press inquiries, or anything else. Pick the relevant product below and we&rsquo;ll route it correctly.
          </p>

          {sent ? (
            <div style={{
              padding: "1.5rem",
              backgroundColor: "#E8F0E5",
              color: "#2D4A3E",
              border: "1px solid rgba(45, 74, 62, 0.2)",
              borderRadius: 10,
              maxWidth: 540,
              marginTop: "2rem",
            }}>
              Thanks &mdash; we got it. We&rsquo;ll be in touch.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ marginTop: "2rem", maxWidth: 540 }}>

              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="contact-product" style={{
                  display: "block",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  marginBottom: "0.5rem",
                  color: "#1B1B1F",
                  letterSpacing: "-0.005em",
                }}>Which product is this about?</label>
                <select
                  id="contact-product"
                  required
                  value={formData.product}
                  onChange={e => setFormData(d => ({ ...d, product: e.target.value }))}
                  style={{
                    width: "100%",
                    padding: "0.75rem 0.95rem",
                    paddingRight: "2.5rem",
                    fontFamily: "inherit",
                    fontSize: "1rem",
                    fontWeight: 400,
                    color: "#1B1B1F",
                    backgroundColor: "#FAF6EF",
                    border: "1px solid rgba(27, 27, 31, 0.18)",
                    borderRadius: 10,
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    appearance: "none",
                    backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'><path d='M1 1L6 6L11 1' stroke='%231B1B1F' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>\")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 1rem center",
                    cursor: "pointer",
                  }}
                >
                  <option value="">Select one&hellip;</option>
                  {contactProducts.map(p => (
                    <option key={p.value} value={p.value}>{p.label}</option>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="contact-name" style={{
                  display: "block",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  marginBottom: "0.5rem",
                  color: "#1B1B1F",
                  letterSpacing: "-0.005em",
                }}>Your name</label>
                <input
                  type="text"
                  id="contact-name"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={e => setFormData(d => ({ ...d, name: e.target.value }))}
                  style={{
                    width: "100%",
                    padding: "0.75rem 0.95rem",
                    fontFamily: "inherit",
                    fontSize: "1rem",
                    fontWeight: 400,
                    color: "#1B1B1F",
                    backgroundColor: "#FAF6EF",
                    border: "1px solid rgba(27, 27, 31, 0.18)",
                    borderRadius: 10,
                    outline: "none",
                  }}
                />
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="contact-email" style={{
                  display: "block",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  marginBottom: "0.5rem",
                  color: "#1B1B1F",
                  letterSpacing: "-0.005em",
                }}>Email</label>
                <input
                  type="email"
                  id="contact-email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={e => setFormData(d => ({ ...d, email: e.target.value }))}
                  style={{
                    width: "100%",
                    padding: "0.75rem 0.95rem",
                    fontFamily: "inherit",
                    fontSize: "1rem",
                    fontWeight: 400,
                    color: "#1B1B1F",
                    backgroundColor: "#FAF6EF",
                    border: "1px solid rgba(27, 27, 31, 0.18)",
                    borderRadius: 10,
                    outline: "none",
                  }}
                />
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="contact-message" style={{
                  display: "block",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  marginBottom: "0.5rem",
                  color: "#1B1B1F",
                  letterSpacing: "-0.005em",
                }}>Message</label>
                <textarea
                  id="contact-message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={e => setFormData(d => ({ ...d, message: e.target.value }))}
                  style={{
                    width: "100%",
                    padding: "0.75rem 0.95rem",
                    fontFamily: "inherit",
                    fontSize: "1rem",
                    fontWeight: 400,
                    color: "#1B1B1F",
                    backgroundColor: "#FAF6EF",
                    border: "1px solid rgba(27, 27, 31, 0.18)",
                    borderRadius: 10,
                    outline: "none",
                    minHeight: 140,
                    resize: "vertical",
                    lineHeight: 1.5,
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                style={{
                  display: "inline-block",
                  backgroundColor: "#1B1B1F",
                  color: "#F5F1EA",
                  padding: "0.85rem 1.75rem",
                  borderRadius: 999,
                  fontSize: "1rem",
                  fontWeight: 500,
                  letterSpacing: "-0.003em",
                  border: "none",
                  cursor: sending ? "default" : "pointer",
                  fontFamily: "inherit",
                  opacity: sending ? 0.6 : 1,
                }}
              >
                {sending ? "Sending\u2026" : "Send message"}
              </button>

              {error && (
                <div style={{
                  marginTop: "1rem",
                  padding: "0.85rem 1rem",
                  backgroundColor: "#F4E4E4",
                  color: "#6B2D2D",
                  border: "1px solid rgba(107, 45, 45, 0.2)",
                  borderRadius: 10,
                  fontSize: "0.95rem",
                }}>
                  Something went wrong. Please try again or email us directly.
                </div>
              )}
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: "1px solid rgba(27, 27, 31, 0.08)",
        padding: "2.5rem 2rem 2rem",
        fontSize: "0.85rem",
        color: "#6B6B70",
        textAlign: "center",
      }}>
        <div>&copy; {new Date().getFullYear()} Studio on the Mountain</div>
      </footer>

    </main>
  )
}
