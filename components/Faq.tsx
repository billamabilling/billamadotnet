"use client";

import { ChevronDown, HelpCircle } from "lucide-react";
import { trackFaqToggle } from "@/lib/snowcat/tracker";

export default function Faq() {
  const faqs = [
    {
      q: "What is the NVIDIA NeMo Switchyard + Bifrost Dual-Router in Billama 3.0?",
      a: "Billama 3.0 couples NVIDIA NeMo Switchyard (Rust-based intelligent model router) with Bifrost (Go-based ultra-fast token router). Switchyard acts as the brain, evaluating prompt complexity and quality feedback to dynamically select the optimal model tier (cascading simple queries to lightweight 3B models and escalating complex reasoning to frontier 70B models), saving an extra 40–70% in token expenditure. Bifrost then acts as the high-performance transport layer, delivering sub-100µs proxying, health checks, and adaptive load balancing across warm nodes."
    },
    {
      q: "What makes Billama different from centralized AI clouds like AWS Bedrock or OpenAI?",
      a: "Billama is a two-sided decentralized GPU grid. Instead of paying 75%+ enterprise markups to hyperscalers for datacenter overhead, requests are dynamically routed to verified nodes running Ollama or vLLM. You get 100% drop-in OpenAI API compatibility at 60–80% lower cost, while hardware providers earn an honest 82% net revenue share."
    },
    {
      q: "How does the Zero-Idle Waterfall guarantee my GPU never earns $0?",
      a: "Consumer hardware on standard compute networks often suffers from low utilization when user chat traffic dips. Billama solves this with a 3-tier waterfall: Tier 1 executes live streaming LLM tokens. When chat volume pauses, nodes immediately pull Tier 2 batch jobs (Blender 3D tile rendering and vector embeddings). If both queues are calm, Tier 3 cryptographic proof validation engages as a baseline income floor."
    },
    {
      q: "How does Billama prevent rogue nodes from forging tokens or returning garbage output?",
      a: "Billama uses a multi-layered verification system. 2% of live inference prompts are duplicated randomly across consensus canary nodes to verify token logits and output validity. In addition, 3D Blender render jobs require cryptographic tile hash validation. Malicious or modified nodes are penalized and forfeited from the dispatch pool."
    },
    {
      q: "What hardware can I connect as a compute provider?",
      a: "Billama supports any NVIDIA GPU with CUDA (RTX 3080, 3090, 4080, 4090, 5090, A100, H100), AMD GPUs with ROCm, and Apple Silicon Macs (M1/M2/M3/M4 Max and Ultra) with Unified Memory. Minimum recommended VRAM is 12GB for smaller models or 24GB+ for 70B quantized models."
    },
    {
      q: "How do teams manage API keys, organization budgets, and quotas?",
      a: "Billama includes enterprise LDAP / FreeIPA directory synchronization and multi-tenant organization management. Administrators can provision subordinate users, define strict monthly token or dollar budget caps, inspect live per-key usage analytics, and restrict model access across engineering departments."
    },
    {
      q: "What payout methods are supported and how frequently are providers paid?",
      a: "Hardware providers can withdraw earnings weekly. Supported payment rails include direct bank transfers via Stripe Connect ACH (supporting 40+ countries), stablecoins (USDC on Solana or Polygon) for instant global settlement, or 0%-fee Billama credits to spend on inference."
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-32 relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-slate-400 text-base">
            Everything you need to know about the Billama utility grid, token billing, and provider yields.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              name="faq"
              onToggle={(e) => {
                trackFaqToggle({
                  question: faq.q,
                  isOpen: e.currentTarget.open,
                });
              }}
              className="group glass-panel rounded-2xl border border-slate-800/80 bg-[#090e1b]/90 p-5 transition-all open:border-cyan-500/40"
            >
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-white text-base select-none focus:outline-none focus-visible:text-cyan-400">
                <span className="pr-4">{faq.q}</span>
                <ChevronDown className="w-5 h-5 text-slate-400 chevron shrink-0 transition-transform duration-200 group-open:rotate-180 group-open:text-cyan-400" />
              </summary>
              <div className="mt-3 text-sm text-slate-300 leading-relaxed pt-2 border-t border-slate-800/60">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
