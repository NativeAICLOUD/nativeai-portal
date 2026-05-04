'use client';

import { Constants } from "@/Constants";
import { Link } from 'react-transition-progress/next';
import Image from "next/image";
import AgentFlowDiagram from './AgentFlowDiagram';

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

          {/* Right — AgentFlow diagram */}
          <div className="relative z-[1] w-full lg:w-[380px] xl:w-[420px] shrink-0 hidden lg:block">
            <div
              style={{
                background: 'rgba(10,14,26,0.78)',
                backdropFilter: 'blur(28px) saturate(180%)',
                WebkitBackdropFilter: 'blur(28px) saturate(180%)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 24,
                boxShadow: '0 12px 48px rgba(0,0,0,0.32)',
                padding: '28px 24px',
              }}
            >
              <AgentFlowDiagram />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

export default HomeHeader;
