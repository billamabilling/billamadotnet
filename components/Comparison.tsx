import { Check, X, Minus } from "lucide-react";

export default function Comparison() {
  const comparisonData = [
    {
      feature: "Cost per 1M Tokens (Llama 3.3 70B)",
      billama: "$0.40",
      hyperscaler: "$2.40 – $3.00",
      apiAggregator: "$0.90 – $1.20",
      rawDepin: "$0.70 (unmetered VM)",
      highlight: true
    },
    {
      feature: "Drop-in OpenAI SDK Compatibility",
      billama: true,
      hyperscaler: false, // Proprietary SDK required
      apiAggregator: true,
      rawDepin: false
    },
    {
      feature: "Drop-in Ollama CLI & API Native",
      billama: true,
      hyperscaler: false,
      apiAggregator: false,
      rawDepin: false
    },
    {
      feature: "Zero-Idle Waterfall Guarantee for Hardware",
      billama: true, // (Token -> RenderGrid -> Proofs)
      hyperscaler: false,
      apiAggregator: false,
      rawDepin: false
    },
    {
      feature: "2% Canary Consensus Anti-Cheating Audits",
      billama: true,
      hyperscaler: "N/A (Centralized)",
      apiAggregator: "N/A (Centralized)",
      rawDepin: false
    },
    {
      feature: "Universal 3D RenderGrid (Blender)",
      billama: true,
      hyperscaler: false,
      apiAggregator: false,
      rawDepin: "Manual Setup"
    },
    {
      feature: "Enterprise LDAP / FreeIPA & Budget Caps",
      billama: true,
      hyperscaler: "Complex IAM",
      apiAggregator: false,
      rawDepin: false
    },
    {
      feature: "Supplier Revenue Share",
      billama: "82% Net",
      hyperscaler: "0% (Proprietary)",
      apiAggregator: "0% (Proprietary)",
      rawDepin: "70–80%"
    },
    {
      feature: "Multi-Rail Payouts (Bank ACH + USDC)",
      billama: true,
      hyperscaler: false,
      apiAggregator: false,
      rawDepin: "Crypto-Only"
    }
  ];

  const renderValue = (val: string | boolean) => {
    if (val === true) {
      return (
        <div className="flex items-center justify-center">
          <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <Check className="w-4 h-4" />
          </span>
        </div>
      );
    }
    if (val === false) {
      return (
        <div className="flex items-center justify-center">
          <span className="w-6 h-6 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center">
            <X className="w-4 h-4" />
          </span>
        </div>
      );
    }
    return <span className="text-xs font-mono">{val}</span>;
  };

  return (
    <section className="py-20 md:py-32 relative bg-[#070b14]/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            How Does Billama Compare?
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            See how the Billama decentralized utility grid delivers better margins, higher flexibility, and guaranteed provider yield compared to existing alternatives.
          </p>
        </div>

        <div className="glass-panel rounded-3xl border border-slate-800 overflow-hidden max-w-5xl mx-auto shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/80 text-xs font-mono">
                  <th className="py-4 px-6 text-slate-400 font-semibold">Capability</th>
                  <th className="py-4 px-6 text-center text-cyan-300 font-bold bg-cyan-950/30 border-x border-cyan-500/30">
                    🦙 Billama Grid
                  </th>
                  <th className="py-4 px-6 text-center text-slate-400">AWS Bedrock / Azure</th>
                  <th className="py-4 px-6 text-center text-slate-400">API Aggregators</th>
                  <th className="py-4 px-6 text-center text-slate-400">Raw DePIN VMs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-xs sm:text-sm">
                {comparisonData.map((row, idx) => (
                  <tr 
                    key={idx} 
                    className={`hover:bg-slate-900/30 transition-colors ${row.highlight ? "bg-cyan-950/10 font-semibold" : ""}`}
                  >
                    <td className="py-4 px-6 font-medium text-slate-200">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-center text-cyan-300 font-bold bg-cyan-950/20 border-x border-cyan-500/20 font-mono">
                      {renderValue(row.billama)}
                    </td>
                    <td className="py-4 px-6 text-center text-slate-400">
                      {renderValue(row.hyperscaler)}
                    </td>
                    <td className="py-4 px-6 text-center text-slate-400">
                      {renderValue(row.apiAggregator)}
                    </td>
                    <td className="py-4 px-6 text-center text-slate-400">
                      {renderValue(row.rawDepin)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
