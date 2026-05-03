'use client';

import { Constants } from "@/Constants";
import { Link } from 'react-transition-progress/next';
import Image from "next/image";

const MONO: React.CSSProperties = { fontFamily: "'JetBrains Mono', monospace" };

const tags = ['AI Agents', 'LLMs', 'Azure & AWS'];


function HomeHeader() {
  return (
    <main className="relative overflow-hidden lg:pl-[50px] min-h-screen flex flex-col justify-center pt-28 pb-20 lg:pt-28 lg:pb-16">

      {/* ── Backgrounds ── */}
      <div className="absolute w-full h-full z-[-1] left-0 top-0 after:absolute after:bottom-0 after:bg-main-gradient after:w-full after:h-1/5">
        <Image src="/img/BG.png" alt="Background" layout="fill" objectFit="cover" quality={100} />
        <Image src="/img/Group 32.png" alt="Design Element" className="!top-36" layout="fill" objectFit="cover" quality={100} />
      </div>

      {/* Noise texture */}
      <div
        className="absolute inset-0 z-[-1] pointer-events-none"
        style={{ backgroundImage: "url('/img/noise-background.jpg')", backgroundSize: '300px 300px', opacity: 0.04 }}
      />

      {/* Warm glow */}
      <div
        className="absolute pointer-events-none z-0 hidden sm:block"
        style={{
          top: '40%', left: '20%', transform: 'translate(-50%, -50%)',
          width: '700px', height: '500px',
          background: 'radial-gradient(ellipse, rgba(232,154,120,0.18) 0%, transparent 68%)',
        }}
      />

      {/* ── Content ── */}
      <div className="relative max-w-6xl mx-auto w-full px-5 sm:px-10 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 xl:gap-16">

          {/* Left — headline */}
          <div className="relative z-[1] flex-1 min-w-0 lg:max-w-[520px]">

            {/* Tags */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 mb-8 sm:mb-7">
              {tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    ...MONO,
                    background: 'rgba(232,154,120,0.10)',
                    border: '1px solid rgba(240,160,96,0.35)',
                    color: '#c4743c',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                  }}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium select-none"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Headline */}
            <h1 className="text-[2.6rem] sm:text-4xl md:text-5xl lg:text-6xl mb-10 sm:mb-8 font-extrabold leading-[1.1] tracking-tight text-center lg:text-left max-w-lg lg:max-w-full mx-auto text-[#0a0e1a]">
              We make{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#f0a060] via-[#e89a78] to-[#d4845c] bg-clip-text text-transparent">
                  AI work
                </span>
                <span className="absolute -bottom-1.5 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-[#f0a060] via-[#e89a78] to-[#d4845c] opacity-70" />
              </span>
              {' '}inside your business
            </h1>

            {/* Buttons */}
            <div className="flex justify-center lg:justify-start gap-3 flex-col sm:flex-row items-stretch sm:items-center">
              <Link
                href={Constants.PAGES.SCHEDULE_CALL}
                className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap w-full sm:w-auto px-7 py-4 sm:py-3 rounded-full text-base sm:text-sm font-semibold text-white bg-[#0a0e1a] hover:bg-[#1a2235] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e89a78] focus-visible:ring-offset-2"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
                  <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
                </svg>
                Schedule a free call
              </Link>
              <Link
                href={Constants.PAGES.SOLUTIONS}
                className="group/sol inline-flex items-center justify-center gap-2.5 whitespace-nowrap w-full sm:w-auto px-7 py-4 sm:py-3 rounded-full text-base sm:text-sm font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e89a78] focus-visible:ring-offset-2"
                style={{
                  background: 'rgba(255,255,255,0.65)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  border: '1px solid rgba(255,255,255,0.90)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.98)',
                  color: '#0a0e1a',
                }}
              >
                Explore our solutions
                <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover/sol:translate-x-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right — MCP diagram + glass card */}
          <div className="relative z-[1] w-full lg:w-[340px] xl:w-[380px] shrink-0 flex flex-col gap-3">

            {/* ── Animated MCP architecture diagram ── */}
            <div
              className="hidden lg:block overflow-hidden"
              style={{
                ...MONO,
                background: 'rgba(10,14,26,0.82)',
                backdropFilter: 'blur(24px) saturate(180%)',
                WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                border: '1px solid rgba(255,255,255,0.09)',
                borderRadius: 16,
                boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
              }}
            >
              <svg width="100%" height="96" viewBox="0 0 360 96" fill="none" xmlns="http://www.w3.org/2000/svg">

                {/* ── INPUT node ── */}
                <g opacity="0">
                  <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="0.15s" fill="freeze" />
                  <animateTransform attributeName="transform" type="translate" from="-8 0" to="0 0" dur="0.5s" begin="0.15s" fill="freeze" />
                  <circle cx="34" cy="48" r="16" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.14)" strokeWidth="1.2" />
                  <circle cx="34" cy="48" r="16" fill="none" stroke="rgba(240,160,96,0.22)" strokeWidth="1">
                    <animate attributeName="r" values="16;26;16" dur="2.4s" begin="1.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;0;0.5" dur="2.4s" begin="1.5s" repeatCount="indefinite" />
                  </circle>
                  <rect x="27" y="40" width="14" height="16" rx="2" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2" />
                  <path d="M30 44h8M30 47.5h8M30 51h5" stroke="rgba(255,255,255,0.25)" strokeWidth="0.9" strokeLinecap="round" />
                  <text x="34" y="76" textAnchor="middle" fill="rgba(255,255,255,0.28)" fontSize="6.5" fontFamily="JetBrains Mono, monospace" letterSpacing="0.3">INPUT</text>
                </g>

                {/* ── Flow line: Input → Agent ── */}
                <g opacity="0">
                  <animate attributeName="opacity" from="0" to="1" dur="0.35s" begin="0.55s" fill="freeze" />
                  <line x1="52" y1="48" x2="83" y2="48" stroke="rgba(240,160,96,0.50)" strokeWidth="1.2" strokeDasharray="5 4">
                    <animate attributeName="strokeDashoffset" from="9" to="0" dur="0.7s" begin="0.55s" repeatCount="indefinite" />
                  </line>
                </g>

                {/* ── AI Agent box ── */}
                <g opacity="0">
                  <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="0.7s" fill="freeze" />
                  <animateTransform attributeName="transform" type="translate" from="0 6" to="0 0" dur="0.5s" begin="0.7s" fill="freeze" />
                  <rect x="85" y="28" width="76" height="40" rx="9" fill="rgba(240,160,96,0.18)" stroke="rgba(240,160,96,0.60)" strokeWidth="1.4" />
                  <text x="123" y="44" textAnchor="middle" fill="rgba(255,255,255,0.92)" fontSize="9" fontWeight="700" fontFamily="JetBrains Mono, monospace">AI Agent</text>
                  <text x="123" y="57" textAnchor="middle" fill="rgba(240,160,96,0.65)" fontSize="7" fontFamily="JetBrains Mono, monospace">GPT-4o</text>
                  <text x="123" y="80" textAnchor="middle" fill="rgba(255,255,255,0.22)" fontSize="6" fontFamily="JetBrains Mono, monospace" letterSpacing="0.3">AGENT</text>
                </g>

                {/* ── Bidirectional MCP lines + label ── */}
                <g opacity="0">
                  <animate attributeName="opacity" from="0" to="1" dur="0.35s" begin="1.1s" fill="freeze" />
                  <line x1="163" y1="43" x2="192" y2="43" stroke="rgba(240,160,96,0.55)" strokeWidth="1.2" strokeDasharray="5 4">
                    <animate attributeName="strokeDashoffset" from="9" to="0" dur="0.7s" begin="1.1s" repeatCount="indefinite" />
                  </line>
                  <line x1="192" y1="53" x2="163" y2="53" stroke="rgba(240,160,96,0.30)" strokeWidth="1" strokeDasharray="5 4">
                    <animate attributeName="strokeDashoffset" from="0" to="9" dur="0.7s" begin="1.1s" repeatCount="indefinite" />
                  </line>
                  <text x="177" y="36" textAnchor="middle" fill="rgba(240,160,96,0.55)" fontSize="6.5" fontFamily="JetBrains Mono, monospace" letterSpacing="0.5">MCP</text>
                </g>

                {/* ── MCP Server box ── */}
                <g opacity="0">
                  <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="1.25s" fill="freeze" />
                  <animateTransform attributeName="transform" type="translate" from="0 6" to="0 0" dur="0.5s" begin="1.25s" fill="freeze" />
                  <rect x="194" y="28" width="76" height="40" rx="9" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.16)" strokeWidth="1.2" />
                  <text x="232" y="44" textAnchor="middle" fill="rgba(255,255,255,0.80)" fontSize="9" fontWeight="600" fontFamily="JetBrains Mono, monospace">MCP</text>
                  <text x="232" y="57" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="JetBrains Mono, monospace">Server</text>
                  <text x="232" y="80" textAnchor="middle" fill="rgba(255,255,255,0.22)" fontSize="6" fontFamily="JetBrains Mono, monospace" letterSpacing="0.3">SERVER</text>
                </g>

                {/* ── Flow line: Server → Tools ── */}
                <g opacity="0">
                  <animate attributeName="opacity" from="0" to="1" dur="0.35s" begin="1.65s" fill="freeze" />
                  <line x1="272" y1="48" x2="302" y2="48" stroke="rgba(240,160,96,0.40)" strokeWidth="1.2" strokeDasharray="5 4">
                    <animate attributeName="strokeDashoffset" from="9" to="0" dur="0.7s" begin="1.65s" repeatCount="indefinite" />
                  </line>
                  <path d="M272 43 Q287 43 305 33" stroke="rgba(255,255,255,0.10)" strokeWidth="0.9" fill="none" />
                  <path d="M272 53 Q287 53 305 63" stroke="rgba(255,255,255,0.10)" strokeWidth="0.9" fill="none" />
                </g>

                {/* ── Tool nodes ── */}
                <g opacity="0">
                  <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="1.8s" fill="freeze" />
                  <animateTransform attributeName="transform" type="translate" from="8 0" to="0 0" dur="0.5s" begin="1.8s" fill="freeze" />
                  <circle cx="320" cy="33" r="13" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
                  <text x="320" y="30" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="5.5" fontFamily="JetBrains Mono, monospace">Azure</text>
                  <text x="320" y="39" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="5.5" fontFamily="JetBrains Mono, monospace">AI</text>
                  <circle cx="320" cy="63" r="13" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
                  <text x="320" y="60" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="5.5" fontFamily="JetBrains Mono, monospace">RAG</text>
                  <text x="320" y="69" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="5.5" fontFamily="JetBrains Mono, monospace">Store</text>
                  <text x="320" y="88" textAnchor="middle" fill="rgba(255,255,255,0.20)" fontSize="6" fontFamily="JetBrains Mono, monospace" letterSpacing="0.3">TOOLS</text>
                </g>

              </svg>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}

export default HomeHeader;
