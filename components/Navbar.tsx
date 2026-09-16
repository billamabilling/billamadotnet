"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Server, 
  Cpu, 
  Terminal, 
  ShieldCheck, 
  Calculator, 
  BookOpen, 
  Github, 
  Menu, 
  X, 
  Zap,
  ArrowRight
} from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#080c14]/80 backdrop-blur-xl transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Brand */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-lg">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <span className="text-xl select-none" aria-hidden="true">🦙</span>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5 font-mono">
                  Billama<span className="text-cyan-400">.net</span>
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-mono font-bold tracking-wider">
                  v3.0
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-medium tracking-wide uppercase flex items-center gap-1">
                <span>AI Token Utility Grid</span>
                <span className="text-slate-600">•</span>
                <span className="text-cyan-400/80 lowercase font-mono">dual-router</span>
              </span>
            </div>
          </Link>

          {/* Network status pill */}
          <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            14,820 Nodes Active
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-300" aria-label="Main Navigation">
          <Link 
            href="#features" 
            className="px-3 py-2 rounded-md hover:text-cyan-400 hover:bg-slate-800/50 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-500"
          >
            Features
          </Link>
          <Link 
            href="#waterfall" 
            className="px-3 py-2 rounded-md hover:text-cyan-400 hover:bg-slate-800/50 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-500"
          >
            Zero-Idle Grid
          </Link>
          <Link 
            href="#calculator" 
            className="px-3 py-2 rounded-md hover:text-cyan-400 hover:bg-slate-800/50 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-500"
          >
            Calculator
          </Link>
          <Link 
            href="#architecture" 
            className="px-3 py-2 rounded-md hover:text-cyan-400 hover:bg-slate-800/50 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-500"
          >
            Architecture
          </Link>
          <Link 
            href="/docs/" 
            className="px-3 py-2 rounded-md hover:text-cyan-400 hover:bg-slate-800/50 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-500"
          >
            Docs
          </Link>
          <Link 
            href="#faq" 
            className="px-3 py-2 rounded-md hover:text-cyan-400 hover:bg-slate-800/50 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-500"
          >
            FAQ
          </Link>
        </nav>

        {/* Right CTAs + Theme Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Switcher (Day/Night toggle + Multi-theme dropdown) */}
          <ThemeSwitcher />

          <a
            href="https://github.com/billamabilling/billamadotnet"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900/60 text-slate-300 hover:text-white hover:border-slate-600 text-xs font-mono font-medium transition-all"
            aria-label="GitHub Repository"
          >
            <Github className="w-3.5 h-3.5" />
            <span className="hidden md:inline">GitHub</span>
          </a>

          <Link
            href="#providers"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-semibold shadow-md shadow-cyan-500/20 transition-all hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Connect GPU</span>
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#0c1220]/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3">
          <div className="flex items-center justify-between gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              14,820 Nodes Active on Grid
            </span>
          </div>

          <nav className="flex flex-col space-y-1 text-sm font-medium">
            <Link
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-slate-200 hover:bg-slate-800"
            >
              Features
            </Link>
            <Link
              href="#waterfall"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-slate-200 hover:bg-slate-800"
            >
              Zero-Idle Grid
            </Link>
            <Link
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-slate-200 hover:bg-slate-800"
            >
              Cost &amp; Yield Calculator
            </Link>
            <Link
              href="#architecture"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-slate-200 hover:bg-slate-800"
            >
              Architecture
            </Link>
            <Link
              href="/docs/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-slate-200 hover:bg-slate-800"
            >
              Documentation
            </Link>
            <Link
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-slate-200 hover:bg-slate-800"
            >
              FAQ
            </Link>
          </nav>

          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <Link
              href="#providers"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm"
            >
              <Cpu className="w-4 h-4" />
              <span>Connect GPU &amp; Earn</span>
            </Link>
            <a
              href="https://github.com/billamabilling/billamadotnet"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg border border-slate-700 bg-slate-900 text-slate-300 font-mono text-xs"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
