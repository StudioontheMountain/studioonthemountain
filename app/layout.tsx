import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Studio on the Mountain",
  description: "A portfolio of web applications, reference platforms, and digital products.",
  openGraph: {
    title: "Studio on the Mountain",
    description: "A portfolio of web applications, reference platforms, and digital products.",
    url: "https://www.studioonthemountain.com",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EDEZF98JGL"></script>
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-EDEZF98JGL');` }} />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600&family=Outfit:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0, background: "#f7f5f0" }}>
        {children}
      </body>
    </html>
  )
}
