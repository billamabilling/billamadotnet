import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import SnowcatTracker from "@/components/SnowcatTracker";

export const metadata: Metadata = {
  title: "Billama 3.0 — Decentralized GPU Marketplace & AI Token Utility Grid",
  description: "Billama 3.0 delivers 60-80% cheaper AI inference with NVIDIA NeMo Switchyard + Bifrost dual-routing, drop-in OpenAI & Ollama compatibility, and guaranteed yields for GPU providers with the Zero-Idle Waterfall.",
  keywords: [
    "Billama 3.0",
    "GPU Marketplace",
    "NVIDIA Switchyard",
    "Bifrost Router",
    "Decentralized AI",
    "Ollama Billing",
    "OpenAI Proxy",
    "Zero-Idle Waterfall",
    "RenderGrid",
    "Token Metering",
    "RTX 4090",
    "FreeIPA LDAP",
    "Kubernetes AI"
  ],
  authors: [{ name: "Billama Team", url: "https://billama.net" }],
  openGraph: {
    title: "Billama 3.0 — Decentralized GPU Marketplace & AI Token Utility Grid",
    description: "Drop-in OpenAI & Ollama API proxy with 60-80% savings, NVIDIA Switchyard intelligent routing, and guaranteed yields for GPU providers.",
    url: "https://billama.net",
    siteName: "Billama",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Billama 3.0 — Decentralized GPU Marketplace & AI Token Utility Grid",
    description: "60-80% cheaper AI inference with NVIDIA Switchyard + Bifrost. Turn idle GPUs into an automated income stream.",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🦙</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3NJPDCFEP5" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-3NJPDCFEP5');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('billama-theme') || 'cyber';
                  var lights = ['daylight', 'solarized', 'lavender', 'emerald'];
                  var isLight = lights.indexOf(saved) !== -1;
                  var mode = isLight ? 'light' : 'dark';
                  document.documentElement.setAttribute('data-theme', saved);
                  document.documentElement.setAttribute('data-mode', mode);
                  if (isLight) {
                    document.documentElement.classList.add('light');
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased selection:bg-cyan-500/30 selection:text-cyan-200" suppressHydrationWarning>
        <ThemeProvider>
          <SnowcatTracker />
          <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" />
          <div className="fixed inset-0 bg-radial-gradient pointer-events-none z-0" />
          <div className="relative z-10 flex flex-col min-h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
