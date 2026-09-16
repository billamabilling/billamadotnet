import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ZeroIdleWaterfall from "@/components/ZeroIdleWaterfall";
import Calculator from "@/components/Calculator";
import Features from "@/components/Features";
import Architecture from "@/components/Architecture";
import InteractiveDocs from "@/components/InteractiveDocs";
import Comparison from "@/components/Comparison";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Cpu, Terminal, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <ZeroIdleWaterfall />
        <Calculator />
        <Features />
        <Architecture />
        <InteractiveDocs />
        <Comparison />
        <Faq />

        {/* Bottom CTA Banner */}
        <section className="py-20 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-cyan-950/80 via-slate-900/90 to-indigo-950/80 border border-cyan-500/30 p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
              <div className="max-w-2xl mx-auto relative z-10">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-3 font-semibold">
                  Get Started In 60 Seconds
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                  Ready to Cut Your AI Cloud Bill or Monetize Your GPUs?
                </h2>
                <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  Join over 14,000 active nodes worldwide on the fastest growing decentralized utility grid. Start streaming tokens or generating passive income today.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="#providers"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02]"
                  >
                    <Cpu className="w-4 h-4" />
                    <span>Connect GPU Node</span>
                  </Link>

                  <Link
                    href="#interactive-docs"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-semibold text-sm transition-all"
                  >
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    <span>Explore API Docs</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
