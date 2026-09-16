import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Billama — Decentralized GPU Marketplace & AI Token Utility Grid",
  description: "60-80% cheaper AI inference with drop-in OpenAI & Ollama compatibility. Monetize idle consumer GPUs and enterprise data center racks with the Zero-Idle Waterfall guarantee.",
  keywords: [
    "GPU Marketplace",
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
    title: "Billama — Decentralized GPU Marketplace & AI Token Utility Grid",
    description: "Drop-in OpenAI & Ollama API proxy with 60-80% savings and guaranteed yields for GPU providers.",
    url: "https://billama.net",
    siteName: "Billama",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Billama — Decentralized GPU Marketplace & AI Token Utility Grid",
    description: "60-80% cheaper AI inference. Turn idle GPUs into an automated income stream.",
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
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#080c14] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" />
        <div className="fixed inset-0 bg-radial-gradient pointer-events-none z-0" />
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
