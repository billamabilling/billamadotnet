"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  BookOpen, 
  Terminal, 
  Copy, 
  Check, 
  Cpu, 
  ShieldCheck, 
  FileCode, 
  ArrowRight,
  Server,
  Zap
} from "lucide-react";
import { trackDocsEngagement } from "@/lib/snowcat/tracker";

type DocSection = "sdk" | "openai" | "ollama" | "router" | "node" | "helm" | "ldap";

export default function InteractiveDocs() {
  const [activeDoc, setActiveDoc] = useState<DocSection>("sdk");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyCode = (key: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedKey(key);
    trackDocsEngagement({ docSection: "interactive_docs", action: "code_copy", codeSnippetKey: key });
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section id="interactive-docs" className="py-20 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Developer &amp; Operator Manual</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Integration <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Quickstart Guides</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Deploy in seconds. Complete working examples for TypeScript/JavaScript, Python, Shell, Kubernetes Helm, and Enterprise LDAP.
          </p>
        </div>

        {/* Docs Layout */}
        <div className="max-w-5xl mx-auto glass-panel rounded-3xl border border-slate-800 overflow-hidden bg-[#0a0f1e]/95">
          {/* Docs Tabs */}
          <div className="flex border-b border-slate-800/80 bg-slate-950/60 overflow-x-auto text-xs font-mono">
            <button
              onClick={() => {
                setActiveDoc("sdk");
                trackDocsEngagement({ docSection: "interactive_docs", action: "tab_switch", codeSnippetKey: "sdk" });
              }}
              className={`px-5 py-3.5 border-b-2 font-medium transition-all whitespace-nowrap flex items-center gap-2 ${
                activeDoc === "sdk"
                  ? "border-cyan-400 text-cyan-300 bg-slate-900/50"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>@billama/sdk (TypeScript)</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono">v1.0</span>
            </button>

            <button
              onClick={() => {
                setActiveDoc("openai");
                trackDocsEngagement({ docSection: "interactive_docs", action: "tab_switch", codeSnippetKey: "openai" });
              }}
              className={`px-5 py-3.5 border-b-2 font-medium transition-all whitespace-nowrap flex items-center gap-2 ${
                activeDoc === "openai"
                  ? "border-cyan-400 text-cyan-300 bg-slate-900/50"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              <FileCode className="w-4 h-4" />
              <span>OpenAI SDK Drop-In</span>
            </button>

            <button
              onClick={() => {
                setActiveDoc("ollama");
                trackDocsEngagement({ docSection: "interactive_docs", action: "tab_switch", codeSnippetKey: "ollama" });
              }}
              className={`px-5 py-3.5 border-b-2 font-medium transition-all whitespace-nowrap flex items-center gap-2 ${
                activeDoc === "ollama"
                  ? "border-cyan-400 text-cyan-300 bg-slate-900/50"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              <Terminal className="w-4 h-4" />
              <span>Native Ollama API</span>
            </button>

            <button
              onClick={() => {
                setActiveDoc("router");
                trackDocsEngagement({ docSection: "interactive_docs", action: "tab_switch", codeSnippetKey: "router" });
              }}
              className={`px-5 py-3.5 border-b-2 font-medium transition-all whitespace-nowrap flex items-center gap-2 ${
                activeDoc === "router"
                  ? "border-cyan-400 text-cyan-300 bg-slate-900/50"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>Intelligent AI Router</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono">v3.0</span>
            </button>

            <button
              onClick={() => {
                setActiveDoc("node");
                trackDocsEngagement({ docSection: "interactive_docs", action: "tab_switch", codeSnippetKey: "node" });
              }}
              className={`px-5 py-3.5 border-b-2 font-medium transition-all whitespace-nowrap flex items-center gap-2 ${
                activeDoc === "node"
                  ? "border-cyan-400 text-cyan-300 bg-slate-900/50"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>Connect GPU Node</span>
            </button>

            <button
              onClick={() => {
                setActiveDoc("helm");
                trackDocsEngagement({ docSection: "interactive_docs", action: "tab_switch", codeSnippetKey: "helm" });
              }}
              className={`px-5 py-3.5 border-b-2 font-medium transition-all whitespace-nowrap flex items-center gap-2 ${
                activeDoc === "helm"
                  ? "border-cyan-400 text-cyan-300 bg-slate-900/50"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              <Server className="w-4 h-4" />
              <span>Kubernetes &amp; Helm</span>
            </button>

            <button
              onClick={() => {
                setActiveDoc("ldap");
                trackDocsEngagement({ docSection: "interactive_docs", action: "tab_switch", codeSnippetKey: "ldap" });
              }}
              className={`px-5 py-3.5 border-b-2 font-medium transition-all whitespace-nowrap flex items-center gap-2 ${
                activeDoc === "ldap"
                  ? "border-cyan-400 text-cyan-300 bg-slate-900/50"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>FreeIPA LDAP Setup</span>
            </button>
          </div>

          {/* Doc Content Panels */}
          <div className="p-6 sm:p-8">
            {activeDoc === "sdk" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">Official TypeScript SDK (@billama/sdk)</h3>
                  <button
                    onClick={() => copyCode("sdk", `// pnpm add @billama/sdk
import { Billama } from "@billama/sdk";

const billama = new Billama({
  apiKey: process.env.BILLAMA_API_KEY,
});

// 1. Streaming AI Inference with telemetry
const stream = await billama.chat.stream({
  model: "llama3.3:70b",
  messages: [{ role: "user", content: "Design a high-throughput microservice architecture." }],
});

for await (const chunk of stream) {
  process.stdout.write(chunk.content);
}
console.log(\`Tokens used: \${stream.usage?.totalTokens}, Cost: $\${stream.costUsd}\`);

// 2. Universal App Subscription Billing
const checkout = await billama.billing.createCheckoutSession({
  planId: "pro_monthly",
  customerEmail: "user@domain.com",
  successUrl: "https://myapp.com/dashboard?session_id={CHECKOUT_SESSION_ID}",
  cancelUrl: "https://myapp.com/pricing",
});`)}
                    className="inline-flex items-center gap-1 text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    {copiedKey === "sdk" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === "sdk" ? "Copied" : "Copy Code"}</span>
                  </button>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Install the official SDK with <code className="text-cyan-300">pnpm add @billama/sdk</code> (or npm/yarn). Provides native dual-routing streaming chat, wallet balance verification, micro-metered job execution (RenderGrid, stem separation), Next.js route guards, and React hooks (<code className="text-cyan-300">useBillamaBalance</code>, <code className="text-cyan-300">useBillamaChat</code>).
                </p>
                <div className="p-4 rounded-xl bg-[#060911] border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto">
                  <pre>{`// pnpm add @billama/sdk
import { Billama } from "@billama/sdk";

const billama = new Billama({
  apiKey: process.env.BILLAMA_API_KEY,
});

// 1. Streaming AI Inference with telemetry
const stream = await billama.chat.stream({
  model: "llama3.3:70b",
  messages: [{ role: "user", content: "Design a high-throughput microservice architecture." }],
});

for await (const chunk of stream) {
  process.stdout.write(chunk.content);
}
console.log(\`Tokens: \${stream.usage?.totalTokens}, Latency: \${stream.latencyMs}ms\`);

// 2. Universal App Subscription Billing
const checkout = await billama.billing.createCheckoutSession({
  planId: "pro_monthly",
  customerEmail: "user@domain.com",
  successUrl: "https://myapp.com/dashboard?session_id={CHECKOUT_SESSION_ID}",
  cancelUrl: "https://myapp.com/pricing",
});`}</pre>
                </div>
              </div>
            )}

            {activeDoc === "openai" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">Using OpenAI Python SDK with Billama</h3>
                  <button
                    onClick={() => copyCode("openai", `# pip install openai
from openai import OpenAI

client = OpenAI(
    base_url="https://api.billama.net/v1",
    api_key="blm_live_your_api_key"
)

completion = client.chat.completions.create(
    model="llama3.3:70b",
    messages=[
        {"role": "system", "content": "You are a helpful coding assistant."},
        {"role": "user", "content": "Write a high-performance vector search function."}
    ],
    temperature=0.7,
    stream=True
)

for chunk in completion:
    if chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end="", flush=True)`)}
                    className="inline-flex items-center gap-1 text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    {copiedKey === "openai" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === "openai" ? "Copied" : "Copy Code"}</span>
                  </button>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Simply replace <code className="text-cyan-300">base_url</code> with Billama&apos;s edge endpoint and pass your <code className="text-cyan-300">blm_live_...</code> API key. All OpenAI parameters (streaming, tools, json_schema, temperature) work out-of-the-box.
                </p>
                <div className="p-4 rounded-xl bg-[#060911] border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto">
                  <pre>{`# pip install openai
from openai import OpenAI

client = OpenAI(
    base_url="https://api.billama.net/v1",
    api_key="blm_live_your_api_key"
)

completion = client.chat.completions.create(
    model="llama3.3:70b",
    messages=[
        {"role": "system", "content": "You are a helpful coding assistant."},
        {"role": "user", "content": "Write a high-performance vector search function."}
    ],
    temperature=0.7,
    stream=True
)

for chunk in completion:
    if chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end="", flush=True)`}</pre>
                </div>
              </div>
            )}

            {activeDoc === "ollama" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">Direct Ollama API Compatibility</h3>
                  <button
                    onClick={() => copyCode("ollama", `# 1. Chat Completion API
curl https://api.billama.net/api/chat \\
  -H "Authorization: Bearer blm_live_your_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "qwen2.5:72b",
    "messages": [{ "role": "user", "content": "Hello Billama!" }],
    "stream": true
  }'

# 2. Embeddings Endpoint
curl https://api.billama.net/api/embeddings \\
  -H "Authorization: Bearer blm_live_your_key" \\
  -d '{
    "model": "nomic-embed-text",
    "prompt": "The sky is blue because of Rayleigh scattering"
  }'`)}
                    className="inline-flex items-center gap-1 text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    {copiedKey === "ollama" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === "ollama" ? "Copied" : "Copy Code"}</span>
                  </button>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Existing tools that speak Ollama natively (such as Ollama CLI, OpenWebUI, or Continue.dev) work seamlessly by setting <code className="text-cyan-300">OLLAMA_HOST=https://api.billama.net</code>.
                </p>
                <div className="p-4 rounded-xl bg-[#060911] border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto">
                  <pre>{`# 1. Chat Completion API
curl https://api.billama.net/api/chat \\
  -H "Authorization: Bearer blm_live_your_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "qwen2.5:72b",
    "messages": [{ "role": "user", "content": "Hello Billama!" }],
    "stream": true
  }'

# 2. Embeddings Endpoint
curl https://api.billama.net/api/embeddings \\
  -H "Authorization: Bearer blm_live_your_key" \\
  -d '{
    "model": "nomic-embed-text",
    "prompt": "The sky is blue because of Rayleigh scattering"
  }'`}</pre>
                </div>
              </div>
            )}

            {activeDoc === "router" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white">Intelligent AI Routing &amp; Cascading</h3>
                    <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-mono">v3.0 Live</span>
                  </div>
                  <button
                    onClick={() => copyCode("router", `# Example: Test dynamic model cascading with curl
curl -i https://api.billama.net/v1/chat/completions \\
  -H "Authorization: Bearer blm_live_your_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "auto",
    "messages": [{"role": "user", "content": "Explain zero-idle GPU yields."}]
  }'`)}
                    className="inline-flex items-center gap-1 text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    {copiedKey === "router" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === "router" ? "Copied" : "Copy Code"}</span>
                  </button>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Billama 3.0 couples intelligent model selection (cascade tiers from lightweight 3B to frontier 70B) with high-speed edge transport for sub-100µs delivery and adaptive load balancing. Inspect the returned telemetry headers:
                </p>
                <div className="p-4 rounded-xl bg-[#060911] border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto">
                  <pre>{`# 1. Dispatch request with model: "auto" or explicit model name
curl -i https://api.billama.net/v1/chat/completions \\
  -H "Authorization: Bearer blm_live_your_key" \\
  -H "Content-Type: application/json" \\
  -d '{"model": "auto", "messages": [{"role": "user", "content": "Explain zero-idle GPU yields."}]}'

# 2. Inspect real-time response headers stamped by Billama 3.0 Dual-Router:
HTTP/1.1 200 OK
X-Billama-Route-Target: HYBRID_CASCADE
X-Billama-Router-Engine: Adaptive Cascade → Edge Node
X-Billama-Selected-Model: llama3.2:3b
X-Billama-Original-Model: llama3.3:70b
X-Billama-Routing-Strategy: cascade
X-Billama-Routing-Confidence: 0.94
X-Billama-Routing-Cost-Savings: 85%
X-Billama-Node-Id: edge-adaptive-lb-pod-2`}</pre>
                </div>
              </div>
            )}

            {activeDoc === "node" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">Billama Worker Node Setup (Provider Daemon)</h3>
                  <button
                    onClick={() => copyCode("node", `# 1. Run the official quick installation script
curl -sSL https://billama.net/install.sh | sh

# 2. Register your node token from dashboard and start
billama-node start \\
  --server=https://api.billama.net \\
  --token=blm_node_your_token_here \\
  --max-vram=22GB \\
  --zero-idle=true`)}
                    className="inline-flex items-center gap-1 text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    {copiedKey === "node" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === "node" ? "Copied" : "Copy Code"}</span>
                  </button>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  The Billama Node Daemon runs as a non-root background service. It automatically probes VRAM, monitors temperatures, handles preemption, and starts the Zero-Idle waterfall during idle periods.
                </p>
                <div className="p-4 rounded-xl bg-[#060911] border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto">
                  <pre>{`# 1. Run the official quick installation script
curl -sSL https://billama.net/install.sh | sh

# 2. Register your node token from dashboard and start
billama-node start \\
  --server=https://api.billama.net \\
  --token=blm_node_your_token_here \\
  --max-vram=22GB \\
  --zero-idle=true`}</pre>
                </div>
              </div>
            )}

            {activeDoc === "helm" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">Kubernetes Helm Deployment</h3>
                  <button
                    onClick={() => copyCode("helm", `# Add Billama Helm chart repository
helm repo add billama https://charts.billama.net
helm repo update

# Deploy with FreeIPA LDAP and cluster Postgres secrets
helm upgrade --install billama billama/billama \\
  --namespace billama \\
  --create-namespace \\
  --set config.ldapUrl="ldap://freeipa.billama.svc:389" \\
  --set config.ldapSearchBase="dc=billama,dc=net" \\
  --set config.ollamaBaseUrl="http://ollama-service.ollama.svc:11434" \\
  --set secrets.databaseUrl="postgresql://postgres:pass@postgres:5432/billama"`)}
                    className="inline-flex items-center gap-1 text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    {copiedKey === "helm" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === "helm" ? "Copied" : "Copy Code"}</span>
                  </button>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Deploy Billama Enterprise Gateway on EKS, GKE, K3s, or bare-metal Kubernetes. Scales horizontally with HPA support.
                </p>
                <div className="p-4 rounded-xl bg-[#060911] border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto">
                  <pre>{`# Add Billama Helm chart repository
helm repo add billama https://charts.billama.net
helm repo update

# Deploy with FreeIPA LDAP and cluster Postgres secrets
helm upgrade --install billama billama/billama \\
  --namespace billama \\
  --create-namespace \\
  --set config.ldapUrl="ldap://freeipa.billama.svc:389" \\
  --set config.ldapSearchBase="dc=billama,dc=net" \\
  --set config.ollamaBaseUrl="http://ollama-service.ollama.svc:11434" \\
  --set secrets.databaseUrl="postgresql://postgres:pass@postgres:5432/billama"`}</pre>
                </div>
              </div>
            )}

            {activeDoc === "ldap" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">Enterprise LDAP / FreeIPA Directory Setup</h3>
                  <button
                    onClick={() => copyCode("ldap", `# Apply FreeIPA operator & seed organizational users
kubectl apply -f https://raw.githubusercontent.com/billama/billama/main/deploy/freeipa/crd.yaml
kubectl apply -f https://raw.githubusercontent.com/billama/billama/main/deploy/freeipa/operator.yaml
kubectl apply -f https://raw.githubusercontent.com/billama/billama/main/deploy/freeipa/idm-cluster.yaml`)}
                    className="inline-flex items-center gap-1 text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    {copiedKey === "ldap" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === "ldap" ? "Copied" : "Copy Code"}</span>
                  </button>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Centralized identity synchronization mapping LDAP user groups (e.g. <code className="text-cyan-300">cn=ai-team</code>) to Billama roles, budget allowances, and organizational billing accounts.
                </p>
                <div className="p-4 rounded-xl bg-[#060911] border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto">
                  <pre>{`# Apply FreeIPA operator & seed organizational users
kubectl apply -f https://raw.githubusercontent.com/billama/billama/main/deploy/freeipa/crd.yaml
kubectl apply -f https://raw.githubusercontent.com/billama/billama/main/deploy/freeipa/operator.yaml
kubectl apply -f https://raw.githubusercontent.com/billama/billama/main/deploy/freeipa/idm-cluster.yaml`}</pre>
                </div>
              </div>
            )}
          </div>

          <div className="px-6 py-4 bg-slate-950/70 border-t border-slate-800 flex justify-between items-center text-xs">
            <span className="text-slate-400">Looking for full documentation?</span>
            <Link
              href="/docs/"
              className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1"
            >
              <span>Visit Full Documentation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
