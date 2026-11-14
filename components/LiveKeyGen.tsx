"use client";

import React, { useState } from "react";
import { Key, Copy, Check, RefreshCw, Wallet } from "lucide-react";

export default function LiveKeyGen() {
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [balance, setBalance] = useState<number>(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate network delay
    setTimeout(() => {
      const newKey = "blm_live_" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      setApiKey(newKey);
      setBalance(15.00); // Simulate giving a $15.00 starting balance
      setIsGenerating(false);
    }, 800);
  };

  const copyToClipboard = () => {
    if (apiKey) {
      navigator.clipboard.writeText(apiKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Key className="w-5 h-5 text-cyan-400" />
          API Key & Wallet Preview
        </h3>
        {balance > 0 && (
          <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            <Wallet className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 font-mono font-bold">${balance.toFixed(2)}</span>
          </div>
        )}
      </div>

      <p className="text-sm text-slate-400">
        Generate a sandbox API key to test the Billama network. 
        Keys start with a $15.00 test balance for use across any Billama-compatible gateway.
      </p>

      {!apiKey ? (
        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg font-semibold transition-colors disabled:opacity-50"
        >
          {isGenerating ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Key className="w-4 h-4" />}
          {isGenerating ? "Generating..." : "Generate Sandbox Key"}
        </button>
      ) : (
        <div className="space-y-2">
          <label className="text-xs font-mono text-slate-500 uppercase">Your Sandbox Key</label>
          <div className="flex items-center gap-2">
            <div className="flex-1 p-3 bg-black border border-slate-700 rounded-lg font-mono text-sm text-cyan-300">
              {apiKey}
            </div>
            <button
              onClick={copyToClipboard}
              className="p-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-slate-300 transition-colors"
            >
              {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            Use this key in your <code className="text-slate-400">Authorization: Bearer</code> header.
          </p>
        </div>
      )}
    </div>
  );
}
