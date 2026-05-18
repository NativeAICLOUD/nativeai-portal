'use client';

import Image from 'next/image';
import { Link } from 'react-transition-progress/next';
import { Constants } from '@/Constants';

const MONO: React.CSSProperties = { fontFamily: "'JetBrains Mono', monospace" };
const tags = ['AI Agents', 'LLMs', 'Azure & AWS'];

export default function MobileAgentFlow() {
  return (
    <div
      style={{
        borderRadius: 28,
        boxShadow: '0 20px 60px rgba(0,0,0,0.14)',
        overflow: 'hidden',
        position: 'relative',
        border: '1px solid rgba(255,255,255,0.65)',
      }}
    >
      <div className="relative z-[2] px-6 pt-9 pb-0">

        {/* badges */}
        <div className="flex flex-wrap justify-center items-center gap-1.5 mb-5">
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                ...MONO,
                background: 'rgba(232,154,120,0.12)',
                border: '1px solid rgba(240,160,96,0.38)',
                color: '#c4743c',
              }}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide select-none"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* headline */}
        <h1
          style={{
            fontSize: 'clamp(1.75rem, 6.5vw, 2.4rem)',
            fontWeight: 900,
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            margin: '0 0 20px',
            color: '#0a0e1a',
            textAlign: 'center',
          }}
        >
          We make{' '}
          <span className="relative inline-block">
            <span style={{
              background: 'linear-gradient(90deg, #f0a060, #e89a78, #d4845c)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              AI work
            </span>
            <span className="absolute bottom-0.5 left-0 w-full h-[2.5px] rounded-full bg-gradient-to-r from-[#f0a060] via-[#e89a78] to-[#d4845c] opacity-60" />
          </span>
          {' '}inside your business
        </h1>

        {/* buttons — stacked, full-width, equal height */}
        <div className="flex flex-col gap-2.5 mb-5">
          <Link
            href={Constants.PAGES.SCHEDULE_CALL}
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300 active:scale-[0.98]"
            style={{ background: '#0a0e1a', boxShadow: '0 6px 20px rgba(0,0,0,0.25)' }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z"/>
            </svg>
            Talk to our Experts
          </Link>
          <Link
            href={Constants.PAGES.SOLUTIONS}
            className="group/sol inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-sm font-semibold transition-all duration-300 active:scale-[0.98]"
            style={{
              background: 'rgba(255,255,255,0.68)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(255,255,255,0.92)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,1)',
              color: '#0a0e1a',
            }}
          >
            Explore our solutions
            <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover/sol:translate-x-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
            </svg>
          </Link>
        </div>

        {/* illustration — scaled down, centered, closer to content */}
        <div className="flex justify-center">
          <Image
            src="/img/github.png"
            alt="AI Agent Architecture"
            width={600}
            height={600}
            style={{
              width: '108%',
              marginLeft: '-4%',
              height: 'auto',
              display: 'block',
              WebkitMaskImage: 'radial-gradient(ellipse 78% 78% at 50% 50%, black 50%, transparent 88%)',
              maskImage: 'radial-gradient(ellipse 78% 78% at 50% 50%, black 50%, transparent 88%)',
            }}
            quality={95}
          />
        </div>

      </div>
    </div>
  );
}
