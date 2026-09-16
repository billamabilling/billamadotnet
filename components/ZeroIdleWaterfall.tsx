"use client";

import { useState } from "react";
import { 
  Flame, 
  Layers, 
  ShieldCheck, 
  Workflow, 
  Sparkles, 
  TrendingUp, 
  Boxes, 
  CheckCircle2, 
  Cpu, 
  Activity,
  Zap,
  Clock
} from "lucide-react";

export default function ZeroIdleWaterfall() {
  const [selectedTier, setSelectedTier] = useState<1 | 2 | 3>(1);

  const tierDetails = {
    1: {
      title: "Tier 1: Real-Time LLM Token Engine",
      badge: "Highest Yield ($0.45 – $1.40 / hr)",
      badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
      workload: "Ollama, vLLM, TGI, OpenAI Drop-in",
      latency: "< 35ms Time-to-First-Token (TTFT)",
      description: "Incoming live user prompts and API completions are routed instantly to geographically nearest nodes with warm model weights in VRAM. Real-time streaming over WebStreams with per-token metering.",
      mechanics: [
        "Pre-flight PostgreSQL atomic balance validation",
        "Sub-second WebSocket/HTTP streaming to client",
        "Tokens evaluated counted directly from Ollama response",
        "Immediate auto-fallback if node disconnects"
      ]
    },
    2: {
      title: "Tier 2: RenderGrid & Batch Compute",
      badge: "Secondary Yield ($0.30 – $0.75 / hr)",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      workload: "Headless Blender 3D, Batch Embeddings, LoRA Fine-Tuning",
      latency: "Asynchronous Queue (10s – 5min chunks)",
      description: "When real-time chat queries pause, nodes immediately grab parallelized batch jobs. RenderGrid splits large 4K/8K 3D Blender frames into discrete tiles, distributing them across dozens of consumer GPUs.",
      mechanics: [
        "Headless Blender CLI rendering containerized on node",
        "Automated frame partitioning and PNG tile assembly",
        "Cryptographic tile hash verification against tampering",
        "Massive high-throughput vector embedding generation"
      ]
    },
    3: {
      title: "Tier 3: Cryptographic Baseline Yield",
      badge: "Guaranteed Floor ($0.15 – $0.35 / hr)",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      workload: "ZK-Proof Generation, Distributed Verification, Network Consensus",
      latency: "Continuous Baseline Activity",
      description: "During dead-of-night traffic dips when neither chat nor 3D rendering jobs are queued, nodes automatically engage in verifiable cryptographic proofs and baseline network tasks. Your hardware never sits at $0.",
      mechanics: [
        "Guaranteed non-zero hardware monetization 24/7",
        "Low thermal load profile during baseline state",
        "Instant preemptive interrupt (< 100ms) when Tier 1 prompt arrives",
        "Accumulates continuous yield into provider balance"
      ]
    }
  };

  return (
    <section id="waterfall" className="py-20 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-semibold mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>The Zero-Idle Waterfall™</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Why Billama GPUs <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Never Earn $0</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Traditional cloud providers suffer from 65% idle time. Billama’s proprietary 3-tier cascade switches workloads dynamically in sub-100ms, ensuring 100% hardware efficiency and continuous provider payouts.
          </p>
        </div>

        {/* Interactive Waterfall Diagram */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: 3 Tiers Flow */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {/* Tier 1 Card */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => setSelectedTier(1)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedTier(1);
                }
              }}
              className={`w-full text-left p-6 rounded-2xl border transition-all relative overflow-hidden cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
                selectedTier === 1 
                  ? "bg-slate-900/90 border-cyan-500 shadow-xl shadow-cyan-950/50 scale-[1.02]" 
                  : "bg-slate-900/40 border-slate-800 hover:border-slate-700 opacity-80"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold font-mono">
                    T1
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base">Tier 1: Token Engine</h3>
                    <p className="text-xs text-slate-400">Live Ollama &amp; OpenAI API Inferences</p>
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  Priority 1
                </span>
              </div>
              <div className="mt-3 flex items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1 text-cyan-400">
                  <Flame className="w-3.5 h-3.5" /> High Demand
                </span>
                <span>Latency &lt; 35ms</span>
                <span className="text-emerald-400 font-semibold">$0.45 – $1.40/hr</span>
              </div>
            </div>

            {/* Cascade Arrow */}
            <div className="flex justify-center -my-2 text-slate-600">
              <span className="text-xs font-mono text-slate-500">▼ On inference lull (&lt; 500ms) ▼</span>
            </div>

            {/* Tier 2 Card */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => setSelectedTier(2)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedTier(2);
                }
              }}
              className={`w-full text-left p-6 rounded-2xl border transition-all relative overflow-hidden cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 ${
                selectedTier === 2 
                  ? "bg-slate-900/90 border-purple-500 shadow-xl shadow-purple-950/50 scale-[1.02]" 
                  : "bg-slate-900/40 border-slate-800 hover:border-slate-700 opacity-80"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold font-mono">
                    T2
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base">Tier 2: RenderGrid &amp; Batch</h3>
                    <p className="text-xs text-slate-400">Blender 3D Tiles, Vector Embeddings</p>
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  Priority 2
                </span>
              </div>
              <div className="mt-3 flex items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1 text-purple-400">
                  <Boxes className="w-3.5 h-3.5" /> Asynchronous Queue
                </span>
                <span>Chunked 10s-5m</span>
                <span className="text-emerald-400 font-semibold">$0.30 – $0.75/hr</span>
              </div>
            </div>

            {/* Cascade Arrow */}
            <div className="flex justify-center -my-2 text-slate-600">
              <span className="text-xs font-mono text-slate-500">▼ On empty batch queue ▼</span>
            </div>

            {/* Tier 3 Card */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => setSelectedTier(3)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedTier(3);
                }
              }}
              className={`w-full text-left p-6 rounded-2xl border transition-all relative overflow-hidden cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                selectedTier === 3 
                  ? "bg-slate-900/90 border-emerald-500 shadow-xl shadow-emerald-950/50 scale-[1.02]" 
                  : "bg-slate-900/40 border-slate-800 hover:border-slate-700 opacity-80"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold font-mono">
                    T3
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base">Tier 3: Baseline Yield Guarantee</h3>
                    <p className="text-xs text-slate-400">ZK Proofs, Distributed Verification</p>
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  Always-On
                </span>
              </div>
              <div className="mt-3 flex items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <Activity className="w-3.5 h-3.5" /> Zero-Idle Baseline
                </span>
                <span>Preemptible &lt; 100ms</span>
                <span className="text-emerald-400 font-semibold">$0.15 – $0.35/hr</span>
              </div>
            </div>
          </div>

          {/* Right: Tier Detailed Inspector */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 bg-[#0a0f1b]/95">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-mono font-medium border ${tierDetails[selectedTier].badgeColor}`}>
                {tierDetails[selectedTier].badge}
              </span>
              <span className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                Auto-Preemptible &lt; 100ms
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mt-4">
              {tierDetails[selectedTier].title}
            </h3>

            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              {tierDetails[selectedTier].description}
            </p>

            <div className="mt-6 space-y-4">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">
                  Target Workload
                </span>
                <span className="text-sm font-semibold text-white font-mono">
                  {tierDetails[selectedTier].workload}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">
                  Latency Profile &amp; Response
                </span>
                <span className="text-sm font-semibold text-cyan-300 font-mono">
                  {tierDetails[selectedTier].latency}
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  Key Verification &amp; Billing Mechanics
                </span>
                <ul className="space-y-2">
                  {tierDetails[selectedTier].mechanics.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Anti-cheating pill */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-3 text-xs text-slate-400">
              <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0" />
              <span>
                <strong className="text-slate-200">Anti-Cheating Assurance:</strong> 2% randomized canary audits duplicate prompts to spot-check outputs. Malicious nodes forfeit staked reputation.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
