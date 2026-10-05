"use client";

import { 
  Music, 
  FileText, 
  Activity, 
  Video, 
  Bird,
  ArrowRight,
  Sparkles,
  Cpu
} from "lucide-react";
import Link from "next/link";

interface EcosystemProject {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: any;
  badge: string;
  badgeColor: string;
  billamaRole: string;
  features: string[];
  link?: string;
}

const PROJECTS: EcosystemProject[] = [
  {
    id: "syncromancer",
    name: "Syncromancer",
    tagline: "Collaborative Music Production with Google Magenta AI",
    description: "Multi-track web DAW powered by in-browser Google Magenta JS for live MIDI continuation and harmonization, connected to Billama GPU nodes for 4-stem Demucs audio separation.",
    icon: Music,
    badge: "Music & Audio AI",
    badgeColor: "bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30",
    billamaRole: "Demucs 4-Stem Audio Separation & Magenta In-Browser Model Sync",
    features: [
      "In-browser Google Magenta JS neural melody continuation",
      "Billama GPU asynchronous audio stem separation jobs",
      "Real-time MIDI roll with AI harmonic generation",
      "Per-stem micro-metered GPU compute clearing",
    ],
  },
  {
    id: "ironclad-grants",
    name: "Ironclad Grants",
    tagline: "AI Grant Research & Collaborative Proposal Studio",
    description: "Enterprise grant discovery, federal compliance verification, and high-fidelity proposal drafting powered by Billama RAG embeddings and LLM narrative generators.",
    icon: FileText,
    badge: "Nonprofit & Civic Tech",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    billamaRole: "Vector Embeddings, Narrative LLMs & Subscription Billing",
    features: [
      "Multi-user RFP research and compliance matrixing",
      "Vector embeddings for historical grant corpus RAG",
      "Automated proposal narrative generation via Llama 3.3 70B",
      "Hosted Billama subscription clearing & team seat tiers",
    ],
  },
  {
    id: "fitdjinn",
    name: "FitDjinn Health PBC",
    tagline: "Clinical Metabolic & Athletic AI Copilot",
    description: "Personalized metabolic health and athletic performance optimization. Integrates Billama AI for contextual clinical copilot inference and patient entitlement management.",
    icon: Activity,
    badge: "Digital Health PBC",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    billamaRole: "Clinical LLM Copilot & Pro Subscription Entitlements",
    features: [
      "Real-time metabolic biomarker workout adjustments",
      "Continuous clinical AI chat via Billama edge models",
      "Automated subscription checks before AI token access",
      "HIPAA-compliant decentralized inference nodes",
    ],
  },
  {
    id: "monitaur",
    name: "Monitaur Technologies",
    tagline: "Edge IoT Fleet & Cloud Vision Anomaly Grid",
    description: "Industrial video monitoring and anomaly detection. Coordinates remote NVIDIA Jetson edge fleets, falling back to Billama GPU clusters for heavy vision inference.",
    icon: Video,
    badge: "Computer Vision & IoT",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    billamaRole: "Zero-Idle Compute Offload & Multi-Tier Device Billing",
    features: [
      "Local Jetson edge inference with dynamic cloud failover",
      "Zero-Idle batch vision analysis during quiet hours",
      "Field Ops ($199/mo) and Enterprise ($599/mo) fleet billing",
      "Asynchronous frame batching over Billama RenderGrid API",
    ],
  },
  {
    id: "bokbot",
    name: "BokBot Defense",
    tagline: "Automated Backyard Chicken Monitoring & Threat Intelligence",
    description: "Connects on-premise Frigate NVR and ZoneMinder camera streams to Billama decentralized vision models for real-time predator threat classification and automated coop defenses.",
    icon: Bird,
    badge: "Poultry & Agritech AI",
    badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    billamaRole: "Decentralized Vision Inference (Llama 3.2 Vision) & Micro-Metered Alerts",
    features: [
      "Real-time Frigate NVR & ZoneMinder RTSP camera frame streaming",
      "Decentralized vision inference detecting hawks, foxes, raccoons, & coyotes",
      "Zero-Idle GPU routing for continuous offload of coop alarm snapshots",
      "Interactive bounding-box incident review & model fine-tuning dataset export",
    ],
  },
];

export default function EcosystemShowcase() {
  return (
    <section id="ecosystem" className="py-20 md:py-32 relative bg-slate-950/40 border-y border-slate-800/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Billama Commercial Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Powered by Billama <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Universal Billing &amp; Compute Grid
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Five production ventures utilize Billama as their central billing clearinghouse, subscription engine, and high-performance AI inference backbone.
          </p>
        </div>

        {/* Ventures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => {
            const Icon = project.icon;
            return (
              <div 
                key={project.id}
                className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group bg-[#090e1a]/80"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:border-cyan-500/30 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${project.badgeColor}`}>
                      {project.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400/90 mb-3">
                    {project.tagline}
                  </p>
                  <p className="text-xs text-slate-300 mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 mb-5">
                    <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-1">
                      Billama Integration
                    </div>
                    <div className="text-xs font-medium text-slate-200">
                      {project.billamaRole}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {project.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="text-cyan-400 text-xs leading-none mt-0.5">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Integrated via</span>
                  <code className="text-cyan-300 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/30">
                    @billama/sdk
                  </code>
                </div>
              </div>
            );
          })}
        </div>

        {/* Integration Callout */}
        <div className="mt-12 glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/20 via-slate-950 to-indigo-950/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">
              Building your own application on Billama?
            </h4>
            <p className="text-xs text-slate-400">
              Install the official public SDK: <code className="text-cyan-300 font-mono">pnpm add @billama/sdk</code> and integrate AI streaming and billing in minutes.
            </p>
          </div>
          <Link
            href="/docs/#billama-sdk"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors whitespace-nowrap"
          >
            <span>View SDK Documentation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
