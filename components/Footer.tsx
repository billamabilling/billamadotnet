import Link from "next/link";
import { Github, Twitter, Disc as Discord, Shield, Heart, Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-[#060910] text-slate-400 text-xs py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 text-white text-lg">
                🦙
              </div>
              <span className="font-mono font-bold text-white text-lg">
                Billama<span className="text-cyan-400">.net</span>
              </span>
            </Link>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              The two-sided decentralized GPU marketplace and AI token utility grid. 60–80% cheaper inference for developers, continuous Zero-Idle yield for hardware providers.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-[11px]">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              All Systems Operational • 14,820 Nodes Online
            </div>
          </div>

          {/* Col 1: Product */}
          <div className="space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px] font-mono">
              Product
            </div>
            <ul className="space-y-2">
              <li><Link href="#features" className="hover:text-cyan-400 transition-colors">Features</Link></li>
              <li><Link href="#waterfall" className="hover:text-cyan-400 transition-colors">Zero-Idle Waterfall</Link></li>
              <li><Link href="#calculator" className="hover:text-cyan-400 transition-colors">Savings &amp; Yield Calculator</Link></li>
              <li><Link href="#architecture" className="hover:text-cyan-400 transition-colors">Architecture</Link></li>
              <li><Link href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Col 2: Developers */}
          <div className="space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px] font-mono">
              Developers
            </div>
            <ul className="space-y-2">
              <li><Link href="/docs/" className="hover:text-cyan-400 transition-colors">Documentation</Link></li>
              <li><Link href="/docs/#openai-sdk" className="hover:text-cyan-400 transition-colors">OpenAI SDK Setup</Link></li>
              <li><Link href="/docs/#ollama-api" className="hover:text-cyan-400 transition-colors">Ollama API Native</Link></li>
              <li><Link href="/docs/#helm" className="hover:text-cyan-400 transition-colors">Kubernetes Helm</Link></li>
              <li><Link href="/docs/#freeipa" className="hover:text-cyan-400 transition-colors">FreeIPA LDAP</Link></li>
            </ul>
          </div>

          {/* Col 3: Hardware Providers */}
          <div className="space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px] font-mono">
              Hardware Providers
            </div>
            <ul className="space-y-2">
              <li><Link href="/docs/#node-setup" className="hover:text-cyan-400 transition-colors">Connect Node Agent</Link></li>
              <li><Link href="#calculator" className="hover:text-cyan-400 transition-colors">Earnings Estimator</Link></li>
              <li><Link href="#waterfall" className="hover:text-cyan-400 transition-colors">RenderGrid 3D</Link></li>
              <li><Link href="#providers" className="hover:text-cyan-400 transition-colors">Payout Rails (Stripe / USDC)</Link></li>
              <li>
                <a 
                  href="https://github.com/billamabilling/billamadotnet" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-cyan-400 transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Billama Project. MIT Licensed.
          </div>
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/billamabilling/billamadotnet" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-slate-300 transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <Link href="/docs/" className="hover:text-slate-300 transition-colors">
              Docs
            </Link>
            <Link href="#faq" className="hover:text-slate-300 transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
