import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { 
  BookOpen, 
  Terminal, 
  Cpu, 
  ShieldCheck, 
  Server, 
  Database, 
  ArrowLeft,
  CheckCircle2,
  Code2,
  Layers,
  CreditCard,
  Zap
} from "lucide-react";

export const metadata = {
  title: "Documentation — Billama 3.0 Decentralized GPU Grid",
  description: "Comprehensive technical guides for Billama 3.0 OpenAI/Ollama proxy, intelligent multi-tier AI routing, Node Daemon, FreeIPA LDAP, and Kubernetes Helm deployments.",
};

export default function DocsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Overview</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Sidebar Table of Contents */}
            <aside className="lg:col-span-3">
              <div className="sticky top-24 space-y-6 glass-panel p-5 rounded-2xl border border-slate-800 text-xs">
                <div className="font-mono uppercase font-bold text-slate-400 tracking-wider text-[11px]">
                  Documentation Menu
                </div>

                <div className="space-y-1 font-mono">
                  <a href="#quickstart" className="block py-1.5 px-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-cyan-400">
                    1. Quickstart &amp; Overview
                  </a>
                  <a href="#billama-sdk" className="block py-1.5 px-2 rounded-lg text-cyan-300 hover:bg-slate-800 hover:text-cyan-200 font-semibold">
                    2. Official TypeScript SDK (@billama/sdk)
                  </a>
                  <a href="#openai-sdk" className="block py-1.5 px-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-cyan-400">
                    3. OpenAI SDK Drop-In
                  </a>
                  <a href="#ollama-api" className="block py-1.5 px-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-cyan-400">
                    4. Native Ollama Endpoints
                  </a>
                  <a href="#node-setup" className="block py-1.5 px-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-cyan-400">
                    5. Worker Node Daemon
                  </a>
                  <a href="#zero-idle" className="block py-1.5 px-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-cyan-400">
                    6. Zero-Idle Waterfall™
                  </a>
                  <a href="#rendergrid" className="block py-1.5 px-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-cyan-400">
                    7. RenderGrid 3D Blender
                  </a>
                  <a href="#freeipa" className="block py-1.5 px-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-cyan-400">
                    8. FreeIPA LDAP Integration
                  </a>
                  <a href="#helm" className="block py-1.5 px-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-cyan-400">
                    9. Kubernetes Helm Deploy
                  </a>
                  <a href="#payouts" className="block py-1.5 px-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-cyan-400">
                    10. Payouts &amp; Economics
                  </a>
                  <a href="#dual-router" className="block py-1.5 px-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-cyan-400">
                    11. Intelligent Multi-Tier Routing
                  </a>
                  <a href="#ecosystem-docs" className="block py-1.5 px-2 rounded-lg text-cyan-300 hover:bg-slate-800 hover:text-cyan-200 font-semibold">
                    12. Ecosystem App Architecture
                  </a>
                </div>
              </div>
            </aside>

            {/* Main Content Area */}
            <article className="lg:col-span-9 space-y-14">
              {/* Section 1 */}
              <section id="quickstart" className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Billama 3.0 Platform Guide</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
                  Billama 3.0 System Architecture &amp; Developer Guide
                </h1>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Billama 3.0 is an enterprise-grade decentralized GPU marketplace and token utility grid. Featuring an intelligent multi-tier dual-router, it dynamically matches prompts to optimal model tiers while guaranteeing continuous hardware yield through the Zero-Idle Waterfall.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
                    <span className="font-bold text-white block mb-1">Base Endpoint</span>
                    <code className="text-cyan-400 font-mono">https://api.billama.net</code>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
                    <span className="font-bold text-white block mb-1">Auth Scheme</span>
                    <code className="text-cyan-400 font-mono">Bearer blm_live_...</code>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
                    <span className="font-bold text-white block mb-1">Supplier Payout</span>
                    <code className="text-emerald-400 font-mono">82% Net Revenue</code>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section id="billama-sdk" className="space-y-4 pt-8 border-t border-slate-800">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-cyan-400" />
                  <span>2. Official TypeScript SDK (@billama/sdk)</span>
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  The official TypeScript/JavaScript library for full-stack applications. Includes streaming chat completions, billing checkout sessions, micro-metered job dispatching (RenderGrid Blender 3D, 4-stem Demucs separation), Next.js App Router balance guards, and React hooks.
                </p>
                <div className="p-4 rounded-2xl bg-[#060911] border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto">
                  <pre>{`// 1. Installation
pnpm add @billama/sdk

// 2. Client Initialization & Streaming Chat
import { Billama } from "@billama/sdk";

const billama = new Billama({
  apiKey: process.env.BILLAMA_API_KEY,
});

const stream = await billama.chat.stream({
  model: "llama3.3:70b",
  messages: [{ role: "user", content: "Optimize our data pipeline." }],
});

for await (const chunk of stream) {
  process.stdout.write(chunk.content);
}

// Access diagnostic routing telemetry:
console.log({
  tokens: stream.usage?.totalTokens,
  latencyMs: stream.latencyMs,
  costUsd: stream.costUsd,
  routerTarget: stream.routeTarget
});

// 3. User Wallet Balance Check & Subscriptions
const balance = await billama.billing.getBalance();
console.log("Credits remaining: $", balance.balanceUsd);

const session = await billama.billing.createCheckoutSession({
  planId: "pro_monthly",
  customerEmail: "user@domain.com",
  successUrl: "https://app.domain.com/settings/billing?success=true",
  cancelUrl: "https://app.domain.com/pricing",
});`}</pre>
                </div>
              </section>

              {/* Section 3 */}
              <section id="openai-sdk" className="space-y-4 pt-8 border-t border-slate-800">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-cyan-400" />
                  <span>3. OpenAI SDK Drop-In</span>
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Any application utilizing the official OpenAI client in Python, TypeScript, Go, or Rust can route traffic through Billama by configuring the <code className="text-cyan-300 font-mono">base_url</code>.
                </p>
                <div className="p-4 rounded-2xl bg-[#060911] border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto">
                  <pre>{`from openai import OpenAI

client = OpenAI(
    base_url="https://api.billama.net/v1",
    api_key="blm_live_your_key_here"
)

response = client.chat.completions.create(
    model="llama3.3:70b",
    messages=[
        {"role": "system", "content": "You are a specialized AI assistant."},
        {"role": "user", "content": "Generate a high-concurrency token router."}
    ],
    temperature=0.6,
    stream=True
)

for chunk in response:
    if chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end="", flush=True)`}</pre>
                </div>
              </section>

              {/* Section 4 */}
              <section id="ollama-api" className="space-y-4 pt-8 border-t border-slate-800">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-cyan-400" />
                  <span>4. Native Ollama API</span>
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Billama natively proxies Ollama API endpoints, preserving the exact JSON response structures including token counts (<code className="text-cyan-300 font-mono">prompt_eval_count</code> and <code className="text-cyan-300 font-mono">eval_count</code>).
                </p>
                <div className="p-4 rounded-2xl bg-[#060911] border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto">
                  <pre>{`# 1. Chat completions
curl https://api.billama.net/api/chat \\
  -H "Authorization: Bearer blm_live_your_key_here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "deepseek-r1:70b",
    "messages": [{"role": "user", "content": "Optimize PostgreSQL connection pooling."}],
    "stream": true
  }'

# 2. Text generation
curl https://api.billama.net/api/generate \\
  -H "Authorization: Bearer blm_live_your_key_here" \\
  -d '{"model": "llama3.2:8b", "prompt": "Summarize the Billama whitepaper."}'

# 3. Model list
curl https://api.billama.net/api/tags \\
  -H "Authorization: Bearer blm_live_your_key_here"`}</pre>
                </div>
              </section>

              {/* Section 5 */}
              <section id="node-setup" className="space-y-4 pt-8 border-t border-slate-800">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-indigo-400" />
                  <span>5. Worker Node Daemon Setup</span>
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Hardware owners run the lightweight non-root node runner. The runner automatically detects NVIDIA CUDA, AMD ROCm, or Apple Metal hardware and dynamically allocates models to VRAM.
                </p>
                <div className="p-4 rounded-2xl bg-[#060911] border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto">
                  <pre>{`# Step 1: Install daemon via 1-liner
curl -sSL https://billama.net/install.sh | sh

# Step 2: Start worker with your node token
billama-node start \\
  --server=https://api.billama.net \\
  --token=blm_node_your_node_token \\
  --max-vram=22GB \\
  --zero-idle=true

# Supported CLI flags:
# --server     URL of Billama Gateway
# --token      Node authentication secret (from dashboard)
# --max-vram   VRAM cap to reserve for Billama workloads
# --zero-idle  Enable automatic cascade to Tier 2/3 jobs when idle
# --port       Local Ollama port (default: 11434)`}</pre>
                </div>
              </section>

              {/* Section 6 */}
              <section id="zero-idle" className="space-y-4 pt-8 border-t border-slate-800">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Layers className="w-5 h-5 text-emerald-400" />
                  <span>6. The Zero-Idle Waterfall™</span>
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  The Zero-Idle Waterfall ensures no hardware sits idle. Whenever real-time inference traffic drops, the node manager switches tasks in under 100 milliseconds:
                </p>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
                    <strong className="text-cyan-400 font-mono block mb-1">Tier 1: Token Engine (Real-Time Inference)</strong>
                    <span>Live user prompts, interactive chat streaming. Evaluated token-by-token. Maximum hourly revenue ($0.45 – $1.40/hr).</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
                    <strong className="text-purple-400 font-mono block mb-1">Tier 2: RenderGrid &amp; Batch Jobs</strong>
                    <span>Headless Blender 3D rendering with tile hash verification, high-throughput vector embedding generation ($0.30 – $0.75/hr).</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
                    <strong className="text-emerald-400 font-mono block mb-1">Tier 3: Baseline Cryptographic Yield</strong>
                    <span>ZK-proof generation, distributed hashing, and baseline network verification. Ensures nodes never earn $0 ($0.15 – $0.35/hr).</span>
                  </div>
                </div>
              </section>

              {/* Section 7 */}
              <section id="rendergrid" className="space-y-4 pt-8 border-t border-slate-800">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Server className="w-5 h-5 text-purple-400" />
                  <span>7. RenderGrid &amp; Universal Batch Compute</span>
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Billama includes a distributed 3D rendering engine. Headless Blender scenes are sliced into tile coordinates and dispatched across active nodes. Output frames are cryptographically verified using sha256 tile hashes to eliminate bad renders.
                </p>
                <div className="p-4 rounded-2xl bg-[#060911] border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto">
                  <pre>{`# Submit 3D rendering batch job via REST
curl -X POST https://api.billama.net/v1/jobs/submit \\
  -H "Authorization: Bearer blm_live_your_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "type": "blender_render",
    "scene_url": "https://assets.billama.net/scenes/demo.blend",
    "resolution": [3840, 2160],
    "samples": 512,
    "tile_grid": [4, 4]
  }'`}</pre>
                </div>
              </section>

              {/* Section 8 */}
              <section id="freeipa" className="space-y-4 pt-8 border-t border-slate-800">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-cyan-400" />
                  <span>8. Enterprise FreeIPA &amp; LDAP Setup</span>
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Billama provides in-cluster FreeIPA integration with automated user seeding and group mapping. Configure your LDAP binding in Helm or environment variables:
                </p>
                <div className="p-4 rounded-2xl bg-[#060911] border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto">
                  <pre>{`# Environment Variables for LDAP Integration:
LDAP_URL="ldap://freeipa.freeipa.svc.cluster.local:389"
LDAP_BIND_DN="uid=admin,cn=users,cn=accounts,dc=billama,dc=local"
LDAP_BIND_PASSWORD="AdminPassword123!"
LDAP_SEARCH_BASE="dc=billama,dc=local"
LDAP_USER_SEARCH_FILTER="(&(objectClass=person)(|(uid={{username}})(mail={{username}})))"
LDAP_GROUP_SEARCH_FILTER="(member={{dn}})"`}</pre>
                </div>
              </section>

              {/* Section 9 */}
              <section id="helm" className="space-y-4 pt-8 border-t border-slate-800">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Server className="w-5 h-5 text-indigo-400" />
                  <span>9. Kubernetes Helm Deployment</span>
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Deploy Billama in private enterprise clusters using the production Helm chart.
                </p>
                <div className="p-4 rounded-2xl bg-[#060911] border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto">
                  <pre>{`helm repo add billama https://charts.billama.net
helm upgrade --install billama billama/billama \\
  --namespace billama \\
  --create-namespace \\
  --values values-production.yaml`}</pre>
                </div>
              </section>

              {/* Section 10 */}
              <section id="payouts" className="space-y-4 pt-8 border-t border-slate-800">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-emerald-400" />
                  <span>10. Payouts &amp; Provider Economics</span>
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Hardware nodes receive an 82% net payout. Settlements occur weekly with support for Stripe Connect bank ACH, USDC on Solana or Polygon, or 0%-fee Billama compute credits.
                </p>
                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-xs text-slate-300 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>
                    No locked tokens, no withdrawal freezes, and no proprietary cryptocurrency requirement. Real cash and USDC rails.
                  </span>
                </div>
              </section>

              {/* Section 10: Billama 3.0 Dual-Router */}
              <section id="dual-router" className="space-y-4 pt-8 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Billama 3.0 Architecture</span>
                  </div>
                  <span className="text-xs font-mono text-slate-500">v3.0 Live</span>
                </div>

                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-cyan-400" />
                  <span>11. Intelligent Multi-Tier Model Cascading &amp; Edge Routing</span>
                </h2>

                <p className="text-slate-300 text-sm leading-relaxed">
                  Billama 3.0 decouples routing decisions from transport proxying by pairing two specialized engines:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-slate-900/60 border border-cyan-500/30 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-sm">Model Cascading Brain</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono">Decision Layer</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Analyzes prompt complexity, agent intent, and quality feedback to pick the optimal model tier (cascading simple queries to lightweight 3B models and escalating complex reasoning to frontier 70B models), saving an extra 40–70% in token costs.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-900/60 border border-blue-500/30 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-sm">High-Speed Edge Gateway</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono">Transport Layer</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Ultra-low latency token router with &lt;100µs overhead. Handles adaptive least-latency load balancing, real-time health telemetry, cluster mesh routing, and guardrail interception across thousands of warm GPU nodes.
                    </p>
                  </div>
                </div>

                <h3 className="text-sm font-mono uppercase font-bold text-slate-300 tracking-wider pt-4">
                  Dual-Routing Modes Matrix
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs font-mono border border-slate-800 rounded-xl overflow-hidden">
                    <thead className="bg-slate-900 text-slate-300 text-left">
                      <tr>
                        <th className="p-3">Mode</th>
                        <th className="p-3">Decision Layer (Cascading)</th>
                        <th className="p-3">Edge Transport (&lt;100µs)</th>
                        <th className="p-3">Behavior</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 text-slate-400 bg-[#060911]">
                      <tr>
                        <td className="p-3 text-cyan-300 font-bold">HYBRID_CASCADE</td>
                        <td className="p-3 text-emerald-400">Active (Cascading)</td>
                        <td className="p-3 text-emerald-400">Active (&lt;100µs LB)</td>
                        <td className="p-3">Default dual-engine mode: intelligent model choice + ultra-low latency edge proxy</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-300 font-bold">TIER_LOCKED</td>
                        <td className="p-3 text-cyan-400">Explicit Model Tier</td>
                        <td className="p-3 text-emerald-400">Active (&lt;100µs LB)</td>
                        <td className="p-3">Direct tier mode: user-specified model with adaptive edge load balancing</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-300 font-bold">EDGE_PROXY</td>
                        <td className="p-3 text-slate-600">Pass-Through</td>
                        <td className="p-3 text-emerald-400">Active (&lt;100µs LB)</td>
                        <td className="p-3">Transport-only mode: high-throughput routing without dynamic model cascading</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-300 font-bold">DIRECT_NODE</td>
                        <td className="p-3 text-slate-600">Disabled</td>
                        <td className="p-3 text-slate-600">Disabled</td>
                        <td className="p-3">Direct session to decentralized P2P warm worker nodes or local daemon</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-sm font-mono uppercase font-bold text-slate-300 tracking-wider pt-4">
                  Response Telemetry Headers
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  Every response through Billama 3.0 includes diagnostic telemetry headers so developers can monitor model overrides, routing confidence, and verified cost savings:
                </p>

                <div className="p-4 rounded-xl bg-[#060911] border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto">
                  <pre>{`HTTP/1.1 200 OK
X-Billama-Route-Target: HYBRID_CASCADE
X-Billama-Router-Engine: Adaptive Multi-Tier Engine
X-Billama-Selected-Model: llama3.2:3b
X-Billama-Original-Model: llama3.3:70b
X-Billama-Routing-Strategy: cascade
X-Billama-Routing-Confidence: 0.94
X-Billama-Routing-Cost-Savings: 85%
X-Billama-Node-Id: edge-adaptive-lb-pod-2`}</pre>
                </div>
              </section>

              {/* Section 12 */}
              <section id="ecosystem-docs" className="space-y-6 pt-8 border-t border-slate-800">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Production Reference Deployments</span>
                </div>

                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span>12. Ecosystem Applications Architecture</span>
                </h2>

                <p className="text-slate-300 text-sm leading-relaxed">
                  Five commercial ventures leverage Billama as their unified AI compute layer and billing clearinghouse:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-sm">Syncromancer</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30">Music DAW</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Browser-based Google Magenta JS generates dynamic MIDI melodies and chords, while heavy GPU Demucs 4-stem separation jobs run over Billama RenderGrid.
                    </p>
                    <code className="text-[11px] text-cyan-400 font-mono block">pnpm add @magenta/music @billama/sdk</code>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-sm">Ironclad Grants</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">Grant Studio</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Discovers funding opportunities and drafts federal proposals using Billama vector embeddings for RAG and Llama 3.3 70B narrative generation.
                    </p>
                    <code className="text-[11px] text-cyan-400 font-mono block">billama.embeddings.create() + billama.chat.stream()</code>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-sm">FitDjinn Health PBC</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Health PBC</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      AI metabolic copilot evaluates patient vitals and workouts with pre-flight subscription balance guards ensuring compliance before model inference.
                    </p>
                    <code className="text-[11px] text-cyan-400 font-mono block">billama.billing.getBalance() &gt; 0</code>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-sm">Monitaur Technologies</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">Edge Video AI</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      NVIDIA Jetson IoT devices stream zero-idle anomaly inference, offloading heavy multi-camera vision batches to Billama GPU clusters during off-peak windows.
                    </p>
                    <code className="text-[11px] text-cyan-400 font-mono block">billama.jobs.createBatch(&#123; type: &quot;VISION_INFERENCE&quot; &#125;)</code>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-sm">BokBot Defense</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-500/20 text-orange-300 border border-orange-500/30">Poultry Agritech</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      On-premise Frigate NVR and ZoneMinder streams route backyard chicken coop camera frames to Billama vision models (llama3.2-vision, qwen2.5-vl) for real-time predator threat classification and coop defense triggers.
                    </p>
                    <code className="text-[11px] text-cyan-400 font-mono block">billama.chat.completions.create(&#123; model: &quot;llama3.2-vision:11b&quot; &#125;)</code>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
