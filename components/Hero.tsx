"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Terminal, 
  Copy, 
  Check, 
  Zap, 
  Cpu, 
  ShieldCheck, 
  Coins, 
  ChevronRight,
  Server,
  Code2,
  Boxes
} from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"openai" | "ollama" | "node" | "helm">("openai");
  const [copied, setCopied] = useState(false);

  const snippets = {
    openai: `# Billama 3.0: Intelligent NeMo Switchyard + Bifrost Dual-Router
from openai import OpenAI

client = OpenAI(
    base_url="https://api.billama.net/v1",  # Billama 3.0 Dual-Router Gateway
    api_key="blm_live_79f3b190c4e7..."     # Real-time metered API Key
)

# Switchyard intelligently picks optimal model tier; Bifrost handles <100µs transport
response = client.chat.completions.create(
    model="llama3.3:70b",  # or "auto" for dynamic Switchyard cascading
    messages=[{"role": "user", "content": "Explain zero-idle GPU yields."}],
    stream=True
)

for chunk in response:
    if chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end="")`,

    ollama: `# Native Ollama CLI & API compatibility
curl https://api.billama.net/api/chat \\
  -H "Authorization: Bearer blm_live_79f3b190c4e7..." \\
  -d '{
    "model": "deepseek-r1:70b",
    "messages": [
      { "role": "user", "content": "Write high-performance CUDA kernel" }
    ],
    "stream": true
  }'`,

    node: `# Install and launch the Billama Node Agent
curl -sSL https://billama.net/install.sh | sh

# Connect your consumer GPU (CUDA, ROCm, Apple Metal)
billama-node start \\
  --server=https://api.billama.net \\
  --token=blm_node_a89bc213f0 \\
  --zero-idle=true`,

    helm: `# Enterprise deployment with FreeIPA LDAP integration
helm repo add billama https://charts.billama.net
helm upgrade --install billama billama/billama \\
  --namespace billama \\
  --create-namespace \\
  --set config.ldapUrl="ldap://freeipa.billama.svc:389" \\
  --set config.ollamaBaseUrl="http://gpu-cluster:11434"`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Tag */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 text-xs font-medium backdrop-blur-md mb-6 shadow-sm hover:border-cyan-400/50 transition-colors">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span className="font-semibold text-cyan-200">Billama 3.0 Live:</span>
            <span>NVIDIA NeMo Switchyard + Bifrost Dual-Router &amp; 82% Share</span>
            <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
          </div>

          {/* Main Title */}
          <h1 className="max-w-4xl text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            The Decentralized GPU Marketplace &amp;{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              AI Token Utility Grid
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Cut AI inference costs by <span className="text-cyan-300 font-semibold">60–80%</span> with <span className="text-white font-semibold">NVIDIA NeMo Switchyard + Bifrost</span> intelligent dual-routing. Monetize idle consumer GPUs (RTX 4090/5090, Apple Silicon) and enterprise racks with the guaranteed <span className="text-indigo-300 font-semibold">Zero-Idle Waterfall</span>.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#providers"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 transition-all hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <Cpu className="w-4 h-4" />
              <span>Connect GPU &amp; Earn</span>
            </Link>

            <Link
              href="#developers"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-semibold text-sm transition-all hover:border-slate-600 focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Start Inferencing (API)</span>
            </Link>

            <Link
              href="#calculator"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-800 bg-slate-950/60 hover:bg-slate-900 text-slate-300 font-semibold text-sm transition-all focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <Coins className="w-4 h-4 text-amber-400" />
              <span>Calculate Savings &amp; Yield</span>
            </Link>
          </div>

          {/* Quick 1-liner copy pill */}
          <div className="mt-5 flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-400 max-w-md w-full justify-between">
            <div className="flex items-center gap-2 overflow-hidden truncate">
              <span className="text-cyan-400">$</span>
              <span className="truncate text-slate-300">curl -sSL https://billama.net/install.sh | sh</span>
            </div>
            <button
              onClick={() => {
                navigator.clipboard.writeText("curl -sSL https://billama.net/install.sh | sh");
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="text-slate-400 hover:text-cyan-400 p-1 transition-colors"
              title="Copy install command"
              aria-label="Copy install command"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Live Metrics Grid */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="glass-panel p-5 rounded-2xl flex flex-col items-center text-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">14,820+</span>
            <span className="text-xs sm:text-sm text-slate-400 mt-1 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Connected GPUs
            </span>
            <span className="text-[11px] text-slate-500 mt-0.5">RTX 4090, H100, Mac M3/M4</span>
          </div>

          <div className="glass-panel p-5 rounded-2xl flex flex-col items-center text-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">60–80%</span>
            <span className="text-xs sm:text-sm text-slate-400 mt-1">Cost Savings</span>
            <span className="text-[11px] text-slate-500 mt-0.5">vs. AWS, Azure &amp; OpenAI</span>
          </div>

          <div className="glass-panel p-5 rounded-2xl flex flex-col items-center text-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-indigo-300 font-mono">82%</span>
            <span className="text-xs sm:text-sm text-slate-400 mt-1">Supplier Net Revenue</span>
            <span className="text-[11px] text-slate-500 mt-0.5">Automated Stripe &amp; USDC Payouts</span>
          </div>

          <div className="glass-panel p-5 rounded-2xl flex flex-col items-center text-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">99.98%</span>
            <span className="text-xs sm:text-sm text-slate-400 mt-1">Grid Uptime SLA</span>
            <span className="text-[11px] text-slate-500 mt-0.5">Dynamic Smart Auto-Reroute</span>
          </div>
        </div>

        {/* Interactive Code Window */}
        <div className="mt-12 max-w-4xl mx-auto rounded-2xl border border-slate-800 bg-[#0c1220]/90 backdrop-blur-xl shadow-2xl shadow-cyan-950/30 overflow-hidden">
          {/* Window Header */}
          <div className="flex flex-wrap items-center justify-between border-b border-slate-800/80 px-4 py-3 bg-slate-900/60 gap-2">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/70 inline-block"></span>
              <span className="h-3 w-3 rounded-full bg-amber-500/70 inline-block"></span>
              <span className="h-3 w-3 rounded-full bg-emerald-500/70 inline-block"></span>
              <span className="text-xs text-slate-400 font-mono ml-2 hidden sm:inline-block">
                billama-grid-client
              </span>
            </div>

            {/* Code Selector Tabs */}
            <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-lg border border-slate-800 text-xs font-mono">
              <button
                onClick={() => setActiveTab("openai")}
                className={`px-3 py-1 rounded-md transition-all ${
                  activeTab === "openai" 
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold" 
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Python OpenAI SDK
              </button>
              <button
                onClick={() => setActiveTab("ollama")}
                className={`px-3 py-1 rounded-md transition-all ${
                  activeTab === "ollama" 
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold" 
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Ollama cURL
              </button>
              <button
                onClick={() => setActiveTab("node")}
                className={`px-3 py-1 rounded-md transition-all ${
                  activeTab === "node" 
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold" 
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Node Daemon
              </button>
              <button
                onClick={() => setActiveTab("helm")}
                className={`px-3 py-1 rounded-md transition-all hidden md:inline-block ${
                  activeTab === "helm" 
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold" 
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                K8s Helm
              </button>
            </div>

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono transition-colors"
              aria-label="Copy snippet"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Code Content */}
          <div className="p-4 sm:p-6 overflow-x-auto text-xs sm:text-sm font-mono text-slate-200 leading-relaxed bg-[#070b13]">
            <pre>
              <code>{snippets[activeTab]}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
