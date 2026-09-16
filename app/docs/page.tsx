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
  CreditCard
} from "lucide-react";

export const metadata = {
  title: "Documentation — Billama Decentralized GPU Grid",
  description: "Comprehensive technical guides for Billama OpenAI/Ollama proxy, Node Daemon, FreeIPA LDAP, and Kubernetes Helm deployments.",
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
                  <a href="#openai-sdk" className="block py-1.5 px-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-cyan-400">
                    2. OpenAI SDK Drop-In
                  </a>
                  <a href="#ollama-api" className="block py-1.5 px-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-cyan-400">
                    3. Native Ollama Endpoints
                  </a>
                  <a href="#node-setup" className="block py-1.5 px-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-cyan-400">
                    4. Worker Node Daemon
                  </a>
                  <a href="#zero-idle" className="block py-1.5 px-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-cyan-400">
                    5. Zero-Idle Waterfall™
                  </a>
                  <a href="#rendergrid" className="block py-1.5 px-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-cyan-400">
                    6. RenderGrid 3D Blender
                  </a>
                  <a href="#freeipa" className="block py-1.5 px-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-cyan-400">
                    7. FreeIPA LDAP Integration
                  </a>
                  <a href="#helm" className="block py-1.5 px-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-cyan-400">
                    8. Kubernetes Helm Deploy
                  </a>
                  <a href="#payouts" className="block py-1.5 px-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-cyan-400">
                    9. Payouts &amp; Economics
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
                  <span>Getting Started</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
                  Billama System Architecture &amp; Developer Guide
                </h1>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Billama is an open, decentralized GPU marketplace and token utility grid. It intercepts, meters, and routes LLM requests in real-time while ensuring hardware suppliers enjoy guaranteed yields through the Zero-Idle Waterfall.
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
              <section id="openai-sdk" className="space-y-4 pt-8 border-t border-slate-800">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-cyan-400" />
                  <span>2. OpenAI SDK Drop-In</span>
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

              {/* Section 3 */}
              <section id="ollama-api" className="space-y-4 pt-8 border-t border-slate-800">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-cyan-400" />
                  <span>3. Native Ollama API</span>
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

              {/* Section 4 */}
              <section id="node-setup" className="space-y-4 pt-8 border-t border-slate-800">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-indigo-400" />
                  <span>4. Worker Node Daemon Setup</span>
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

              {/* Section 5 */}
              <section id="zero-idle" className="space-y-4 pt-8 border-t border-slate-800">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Layers className="w-5 h-5 text-emerald-400" />
                  <span>5. The Zero-Idle Waterfall™</span>
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

              {/* Section 6 */}
              <section id="rendergrid" className="space-y-4 pt-8 border-t border-slate-800">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Server className="w-5 h-5 text-purple-400" />
                  <span>6. RenderGrid &amp; Universal Batch Compute</span>
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

              {/* Section 7 */}
              <section id="freeipa" className="space-y-4 pt-8 border-t border-slate-800">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-cyan-400" />
                  <span>7. Enterprise FreeIPA &amp; LDAP Setup</span>
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

              {/* Section 8 */}
              <section id="helm" className="space-y-4 pt-8 border-t border-slate-800">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Server className="w-5 h-5 text-indigo-400" />
                  <span>8. Kubernetes Helm Deployment</span>
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

              {/* Section 9 */}
              <section id="payouts" className="space-y-4 pt-8 border-t border-slate-800">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-emerald-400" />
                  <span>9. Payouts &amp; Provider Economics</span>
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
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
