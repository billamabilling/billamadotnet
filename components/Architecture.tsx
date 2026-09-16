"use client";

import { useState } from "react";
import { 
  Network, 
  Server, 
  ShieldCheck, 
  Cpu, 
  Database, 
  Key, 
  Lock, 
  ArrowDown, 
  CheckCircle,
  Sparkles,
  GitBranch,
  Radio
} from "lucide-react";

export default function Architecture() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      num: 1,
      title: "1. Global Edge Gateway",
      subtitle: "Auth, Ledger & Pre-flight Balance",
      desc: "Client initiates OpenAI/Ollama request with API key. The edge gateway validates key identity, binds to PostgreSQL atomic credit ledger, and pre-verifies adequate balance before proxying to the grid."
    },
    {
      num: 2,
      title: "2. Smart Routing & Canary Dispatch",
      subtitle: "Latency-Aware Node Selection & 2% Audits",
      desc: "The router evaluates connected nodes based on active model cache in VRAM, thermal headroom, and latency score. 2% of requests are transparently duplicated across consensus nodes to audit against malicious output."
    },
    {
      num: 3,
      title: "3. Decentralized Node Execution",
      subtitle: "CUDA / ROCm / Metal Worker Daemons",
      desc: "Worker node decodes prompt, computes token generation with local Ollama or vLLM engine, and streams tokens over WebStream TransformStream back to the caller."
    },
    {
      num: 4,
      title: "4. Token Settlement & Revenue Share",
      subtitle: "82% Supplier Net Credit & Payout Rail",
      desc: "Stream closes; gateway computes exact prompt_eval_count and eval_count. 82% of token value is credited directly to provider wallet, while user balance is finalized atomically in PostgreSQL."
    }
  ];

  return (
    <section id="architecture" className="py-20 md:py-32 relative bg-[#070b13]/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold mb-4">
            <Network className="w-3.5 h-3.5" />
            <span>Under The Hood</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Production-Grade <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Grid Architecture</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Designed for high concurrency, zero latency overhead, atomic financial settlement, and decentralized hardware resilience.
          </p>
        </div>

        {/* Visual Flow diagram */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 bg-[#0a0f1d]/95">
            {/* Steps bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
              {steps.map((step) => (
                <button
                  key={step.num}
                  type="button"
                  onClick={() => setActiveStep(step.num)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    activeStep === step.num
                      ? "bg-cyan-950/50 border-cyan-500 shadow-md shadow-cyan-950/50 scale-[1.02]"
                      : "bg-slate-900/40 border-slate-800 hover:border-slate-700 text-slate-400"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-cyan-400">STEP 0{step.num}</span>
                    {activeStep === step.num && (
                      <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping"></span>
                    )}
                  </div>
                  <div className="font-bold text-sm text-white">{step.title}</div>
                  <div className="text-[11px] text-slate-400 truncate mt-0.5">{step.subtitle}</div>
                </button>
              ))}
            </div>

            {/* Active Step Description */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                {activeStep === 1 && <Lock className="w-6 h-6" />}
                {activeStep === 2 && <GitBranch className="w-6 h-6" />}
                {activeStep === 3 && <Cpu className="w-6 h-6" />}
                {activeStep === 4 && <Database className="w-6 h-6" />}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {steps[activeStep - 1].title}: {steps[activeStep - 1].subtitle}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {steps[activeStep - 1].desc}
                </p>
              </div>
            </div>

            {/* ASCII / Diagram Flow Presentation */}
            <div className="mt-8 p-4 sm:p-6 rounded-2xl bg-[#060911] border border-slate-800/90 font-mono text-xs overflow-x-auto text-slate-300 leading-normal">
              <div className="text-slate-500 mb-2">// Network Topology Flowchart</div>
              <pre className="text-cyan-400/90">
{`                      ┌──────────────────────────────────────────────┐
                      │    AI Developer Application (OpenAI/Ollama)  │
                      └──────────────────────┬───────────────────────┘
                                             │ HTTP/2 WebStream
                                             ▼
                      ┌──────────────────────────────────────────────┐
                      │          Billama Global Edge Gateway         │
                      │  • Auth Token Check     • PostgreSQL Ledger  │
                      │  • FreeIPA LDAP Sync    • Smart Node Routing │
                      └──────────────────────┬───────────────────────┘
                                             │
             ┌───────────────────────────────┼───────────────────────────────┐
             ▼                               ▼                               ▼
  ┌───────────────────────┐       ┌───────────────────────┐       ┌───────────────────────┐
  │  Tier 1: Token Engine │       │   Tier 2: RenderGrid  │       │  Tier 3: Idle Fallback│
  │  • Ollama / vLLM      │       │  • Blender 3D Tiles   │       │  • ZK Proofs          │
  │  • Sub-second stream  │       │  • Batch Embeddings   │       │  • Network Keeping    │
  └──────────┬────────────┘       └──────────┬────────────┘       └──────────┬────────────┘
             │                               │                               │
             └───────────────────────────────┼───────────────────────────────┘
                                             ▼
                      ┌──────────────────────────────────────────────┐
                      │          Billama Decentralized Node Grid     │
                      │   [NVIDIA RTX 4090/5090] [Apple M-Silicon]   │
                      │   [Enterprise H100/A100 Racks (Kubernetes)]  │
                      └──────────────────────────────────────────────┘`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
