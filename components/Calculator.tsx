"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Calculator as CalcIcon, 
  Coins, 
  Cpu, 
  TrendingUp, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Check, 
  DollarSign 
} from "lucide-react";
import { trackMarketingCta, trackCalculatorEngagement } from "@/lib/snowcat/tracker";

type BuyerModel = {
  id: string;
  name: string;
  params: string;
  billamaPerM: number;
  cloudPerM: number;
};

type ProviderGpu = {
  id: string;
  name: string;
  vram: string;
  hourlyBlended: number; // in USD
};

const BUYER_MODELS: BuyerModel[] = [
  { id: "llama-70b", name: "Llama 3.3 70B", params: "70 Billion", billamaPerM: 0.40, cloudPerM: 2.40 },
  { id: "deepseek-r1", name: "DeepSeek R1 (671B MoE)", params: "671 Billion", billamaPerM: 0.85, cloudPerM: 4.80 },
  { id: "qwen-72b", name: "Qwen 2.5 72B Instruct", params: "72 Billion", billamaPerM: 0.38, cloudPerM: 2.20 },
  { id: "mistral-large", name: "Mistral Large 2", params: "123 Billion", billamaPerM: 0.65, cloudPerM: 3.50 },
  { id: "llama-8b", name: "Llama 3.2 8B", params: "8 Billion", billamaPerM: 0.06, cloudPerM: 0.35 },
];

const PROVIDER_GPUS: ProviderGpu[] = [
  { id: "rtx-4090", name: "NVIDIA RTX 4090", vram: "24 GB GDDR6X", hourlyBlended: 0.68 },
  { id: "rtx-5090", name: "NVIDIA RTX 5090", vram: "32 GB GDDR7", hourlyBlended: 1.10 },
  { id: "rtx-3080", name: "NVIDIA RTX 3080 / 3090", vram: "10–24 GB", hourlyBlended: 0.38 },
  { id: "apple-ultra", name: "Apple Mac Studio Ultra (M2/M3/M4)", vram: "128–192 GB Unified", hourlyBlended: 0.85 },
  { id: "4x-a100", name: "4x NVIDIA A100 SXM", vram: "320 GB HBM2e", hourlyBlended: 4.50 },
  { id: "8x-h100", name: "8x NVIDIA H100 SXM5", vram: "640 GB HBM3", hourlyBlended: 16.20 },
];

export default function Calculator() {
  const [mode, setMode] = useState<"buyer" | "provider">("buyer");

  // Buyer state
  const [selectedModelId, setSelectedModelId] = useState<string>("llama-70b");
  const [monthlyTokensMillions, setMonthlyTokensMillions] = useState<number>(25);

  // Provider state
  const [selectedGpuId, setSelectedGpuId] = useState<string>("rtx-4090");
  const [hoursPerDay, setHoursPerDay] = useState<number>(18);
  const [unitCount, setUnitCount] = useState<number>(2);

  // Buyer Calculations
  const currentModel = BUYER_MODELS.find(m => m.id === selectedModelId) || BUYER_MODELS[0];
  const buyerBillamaCost = (monthlyTokensMillions * currentModel.billamaPerM);
  const buyerCloudCost = (monthlyTokensMillions * currentModel.cloudPerM);
  const buyerSavingsDollars = buyerCloudCost - buyerBillamaCost;
  const buyerSavingsPercent = buyerCloudCost > 0 ? Math.round((buyerSavingsDollars / buyerCloudCost) * 100) : 0;

  // Provider Calculations
  const currentGpu = PROVIDER_GPUS.find(g => g.id === selectedGpuId) || PROVIDER_GPUS[0];
  const daysInMonth = 30.5;
  const providerGrossMonthly = currentGpu.hourlyBlended * hoursPerDay * daysInMonth * unitCount;
  const providerNetMonthly = providerGrossMonthly * 0.82; // 82% take home

  return (
    <section id="calculator" className="py-20 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold mb-4">
            <CalcIcon className="w-3.5 h-3.5" />
            <span>Interactive Economics Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Calculate Your <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Savings or Yield</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Whether you run high-throughput LLM applications or have idle GPUs under your desk, simulate real transparent economics.
          </p>

          {/* Mode Switcher */}
          <div className="mt-8 inline-flex p-1.5 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => {
                setMode("buyer");
                trackMarketingCta({ ctaName: "Compute Buyer Mode", location: "calculator_toggle", ctaType: "calculator" });
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                mode === "buyer"
                  ? "bg-cyan-500 text-slate-950 shadow-md font-bold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>For Compute Buyers (AI Teams)</span>
            </button>
            <button
              onClick={() => {
                setMode("provider");
                trackMarketingCta({ ctaName: "GPU Provider Mode", location: "calculator_toggle", ctaType: "calculator" });
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                mode === "provider"
                  ? "bg-indigo-500 text-white shadow-md font-bold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>For GPU Providers (Hardware Owners)</span>
            </button>
          </div>
        </div>

        {/* Mode 1: Compute Buyer Calculator */}
        {mode === "buyer" && (
          <div className="max-w-5xl mx-auto glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800 bg-[#0a0f1c]/95">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Inputs */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                    Select Target LLM Model
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {BUYER_MODELS.map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => {
                          setSelectedModelId(m.id);
                          const bCost = monthlyTokensMillions * m.billamaPerM;
                          const cCost = monthlyTokensMillions * m.cloudPerM;
                          trackCalculatorEngagement({
                            mode: "buyer",
                            selectedId: m.id,
                            volume: monthlyTokensMillions,
                            estimatedCost: bCost,
                            savingsOrYield: cCost - bCost,
                          });
                        }}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          selectedModelId === m.id
                            ? "bg-cyan-950/40 border-cyan-500 text-white shadow-md"
                            : "bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700"
                        }`}
                      >
                        <span className="font-semibold text-sm text-white block">{m.name}</span>
                        <span className="text-xs text-slate-400 mt-0.5 block">{m.params}</span>
                        <span className="text-xs font-mono text-cyan-400 mt-1 block">
                          ${m.billamaPerM.toFixed(2)} / 1M tokens
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-mono uppercase text-slate-400">
                      Estimated Monthly Volume
                    </label>
                    <span className="text-sm font-mono font-bold text-cyan-400">
                      {monthlyTokensMillions} Million Tokens
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="150"
                    step="1"
                    value={monthlyTokensMillions}
                    onChange={(e) => setMonthlyTokensMillions(Number(e.target.value))}
                    onPointerUp={() => {
                      trackCalculatorEngagement({
                        mode: "buyer",
                        selectedId: selectedModelId,
                        volume: monthlyTokensMillions,
                        estimatedCost: buyerBillamaCost,
                        savingsOrYield: buyerSavingsDollars,
                      });
                    }}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                    <span>1M Tokens</span>
                    <span>50M Tokens</span>
                    <span>100M Tokens</span>
                    <span>150M Tokens</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>
                    No commitments or monthly minimums. Real-time token streaming with atomic PostgreSQL balance checks.
                  </span>
                </div>
              </div>

              {/* Output Cost Box */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-500/30 relative overflow-hidden">
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
                  Projected Monthly Cost
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono">
                    ${buyerBillamaCost.toFixed(2)}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">/ month on Billama</span>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-2.5 text-xs font-mono">
                  <div className="flex justify-between text-slate-400">
                    <span>Hyperscaler (AWS/Azure):</span>
                    <span className="line-through text-red-400 font-semibold">${buyerCloudCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-emerald-400 font-bold text-sm">
                    <span>Monthly Savings:</span>
                    <span>${buyerSavingsDollars.toFixed(2)} ({buyerSavingsPercent}%)</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800">
                  <Link
                    href="/#interactive-docs"
                    onClick={() => {
                      trackMarketingCta({
                        ctaName: "Get API Key & Start",
                        location: "calculator_buyer_result",
                        targetUrl: "/#interactive-docs",
                        ctaType: "signup",
                        metadata: {
                          model: selectedModelId,
                          volumeMillions: monthlyTokensMillions,
                          projectedBillamaCost: Math.round(buyerBillamaCost),
                          savingsDollars: Math.round(buyerSavingsDollars),
                        },
                      });
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-cyan-500/20"
                  >
                    <span>Get API Key &amp; Start</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mode 2: Hardware Provider Calculator */}
        {mode === "provider" && (
          <div className="max-w-5xl mx-auto glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800 bg-[#0a0f1c]/95">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Inputs */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                    Select Your Hardware Model
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {PROVIDER_GPUS.map((g) => (
                      <button
                        key={g.id}
                        type="button"
                        onClick={() => {
                          setSelectedGpuId(g.id);
                          const gross = g.hourlyBlended * hoursPerDay * daysInMonth * unitCount;
                          trackCalculatorEngagement({
                            mode: "provider",
                            selectedId: g.id,
                            volume: unitCount,
                            estimatedCost: gross,
                            savingsOrYield: gross * 0.82,
                          });
                        }}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          selectedGpuId === g.id
                            ? "bg-indigo-950/40 border-indigo-500 text-white shadow-md"
                            : "bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700"
                        }`}
                      >
                        <span className="font-semibold text-sm text-white block">{g.name}</span>
                        <span className="text-xs text-slate-400 mt-0.5 block">{g.vram}</span>
                        <span className="text-xs font-mono text-emerald-400 mt-1 block">
                          ~${g.hourlyBlended.toFixed(2)}/hr blended
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs font-mono uppercase text-slate-400">
                        Hours Online / Day
                      </label>
                      <span className="text-sm font-mono font-bold text-indigo-400">
                        {hoursPerDay} hrs
                      </span>
                    </div>
                    <input
                      type="range"
                      min="4"
                      max="24"
                      step="1"
                      value={hoursPerDay}
                      onChange={(e) => setHoursPerDay(Number(e.target.value))}
                      onPointerUp={() => {
                        trackCalculatorEngagement({
                          mode: "provider",
                          selectedId: selectedGpuId,
                          volume: unitCount,
                          estimatedCost: providerGrossMonthly,
                          savingsOrYield: providerNetMonthly,
                        });
                      }}
                      className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-400"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs font-mono uppercase text-slate-400">
                        Number of Nodes / GPUs
                      </label>
                      <span className="text-sm font-mono font-bold text-indigo-400">
                        {unitCount} units
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="16"
                      step="1"
                      value={unitCount}
                      onChange={(e) => setUnitCount(Number(e.target.value))}
                      onPointerUp={() => {
                        trackCalculatorEngagement({
                          mode: "provider",
                          selectedId: selectedGpuId,
                          volume: unitCount,
                          estimatedCost: providerGrossMonthly,
                          savingsOrYield: providerNetMonthly,
                        });
                      }}
                      className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-400"
                    />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>
                    Backed by the <strong>Zero-Idle Waterfall</strong>. Nodes never earn $0. Automated weekly payouts via Stripe ACH, USDC Solana/Polygon, or Billama credits.
                  </span>
                </div>
              </div>

              {/* Output Earnings Box */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-indigo-500/30 relative overflow-hidden">
                <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-2">
                  Estimated Net Monthly Earnings
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-extrabold text-emerald-400 font-mono">
                    ${providerNetMonthly.toFixed(2)}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">/ mo (Net 82%)</span>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-2 text-xs font-mono">
                  <div className="flex justify-between text-slate-400">
                    <span>Gross Node Yield:</span>
                    <span className="text-slate-200 font-semibold">${providerGrossMonthly.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Marketplace Take (18%):</span>
                    <span className="text-slate-500">-${(providerGrossMonthly * 0.18).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-emerald-400 font-bold text-sm pt-1">
                    <span>Net Take-Home (82%):</span>
                    <span>${providerNetMonthly.toFixed(2)}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800">
                  <Link
                    href="/#providers"
                    onClick={() => {
                      trackMarketingCta({
                        ctaName: "Install Node Agent & Connect",
                        location: "calculator_provider_result",
                        targetUrl: "/#providers",
                        ctaType: "connect_gpu",
                        metadata: {
                          hardware: selectedGpuId,
                          units: unitCount,
                          hoursPerDay,
                          projectedNetMonthly: Math.round(providerNetMonthly),
                        },
                      });
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-500/20"
                  >
                    <span>Install Node Agent &amp; Connect</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
