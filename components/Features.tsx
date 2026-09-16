"use client";

import { 
  Cpu, 
  Terminal, 
  ShieldCheck, 
  Workflow, 
  Layers, 
  Boxes, 
  Lock, 
  CreditCard, 
  Users, 
  Coins, 
  Zap, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";
import Link from "next/link";

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Dual-Sided Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Built for High-Throughput AI Teams, <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Powered by Global Hardware
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Billama connects decentralized computing capacity to production AI applications with enterprise-grade latency, cryptographic verification, and strict token metering.
          </p>
        </div>

        {/* 2-Side Marketplace Highlight Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: For AI Developers */}
          <div id="developers" className="glass-panel p-8 rounded-3xl border border-cyan-500/30 bg-[#090e1a]/95 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Terminal className="w-36 h-36 text-cyan-400" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold mb-4">
              <span>For AI Developers &amp; Studios</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">
              Drop-in API with 60–80% Margin Improvement
            </h3>

            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              Eliminate extortionate cloud API bills without modifying your application logic. Point your existing OpenAI or Ollama SDK client to Billama and start saving immediately.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white text-sm block">100% OpenAI &amp; Ollama Wire Protocol</strong>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Full support for <code className="text-cyan-300">/v1/chat/completions</code>, <code className="text-cyan-300">/api/chat</code>, <code className="text-cyan-300">/v1/embeddings</code>, and streaming tool calls.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white text-sm block">Real-time WebStreams Metering</strong>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Zero latency overhead. Custom <code className="text-cyan-300">TransformStream</code> intercepts token chunks in-flight and atomically updates balance ledgers.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white text-sm block">Enterprise LDAP &amp; FreeIPA Integration</strong>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Native Active Directory and FreeIPA integration with role-based access control, departmental budget caps, and audit logs.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white text-sm block">Deterministic 2% Canary Audits</strong>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Automatic verification replicates 2% of inferences against consensus nodes to eliminate corrupted, hallucinated, or poisoned models.
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <Link
                href="/docs/"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors"
              >
                <span>Explore API Documentation &amp; SDKs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: For GPU Providers */}
          <div id="providers" className="glass-panel p-8 rounded-3xl border border-indigo-500/30 bg-[#090e1a]/95 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Cpu className="w-36 h-36 text-indigo-400" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-semibold mb-4">
              <span>For Hardware Owners &amp; Data Centers</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">
              Turn Idle VRAM into Continuous Passive Income
            </h3>

            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              Connect your consumer RTX 3080/4090/5090, Apple Silicon Macs, or enterprise clusters. Enjoy an 82% supplier revenue share backed by the Zero-Idle Waterfall guarantee.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white text-sm block">1-Command Lightweight Node Agent</strong>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Run <code className="text-indigo-300">curl -sSL https://billama.net/install.sh | sh</code>. Auto-probes CUDA, ROCm, or Apple Metal thermals and VRAM automatically.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white text-sm block">Zero-Idle Waterfall Guarantee</strong>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Instant automated cascade from real-time LLM inference to 3D RenderGrid tiles and cryptographic proof yield. Your hardware never sits at $0.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white text-sm block">RenderGrid 3D Blender Worker</strong>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Headless frame partitioning renders 3D animation scenes with cryptographic tile hash verification for maximum compute utilization.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white text-sm block">Multi-Rail Automated Payouts</strong>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Withdraw net 82% earnings directly via Stripe ACH bank deposit, USDC stablecoins (Solana/Polygon), or 0%-fee Billama compute credits.
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <Link
                href="/docs/#node-setup"
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold text-sm transition-colors"
              >
                <span>Read Node Setup Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* 6 Supporting Feature Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-1.5">Anti-Cheating Verification</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Consensus spot-checks and deterministic tile hash audits guarantee uncompromised accuracy and honest token generation.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
              <Boxes className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-1.5">RenderGrid 3D Dispatch</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Headless Blender and universal batch compute dispatches complex 3D rendering jobs across distributed consumer GPUs.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <Coins className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-1.5">Transparent 18% Take Rate</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Unlike cloud monopolies taking 75%+ margins, Billama pays 82% of every dollar straight to hardware providers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-1.5">Multi-Tenant Organizations</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Hierarchical team governance with subordinate user limits, custom budgets, and LDAP directory auto-sync.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
              <Workflow className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-1.5">Kubernetes &amp; Helm Native</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Production-ready Helm charts and FreeIPA operator manifests allow private cluster deployments in minutes.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
              <CreditCard className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-1.5">Multi-Rail Payouts</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Instant automated liquidity via Stripe Connect ACH, USDC on Solana &amp; Polygon, or zero-fee compute reinvestment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
