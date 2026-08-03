'use client';

import { Constants } from "@/Constants";
import { Link } from 'react-transition-progress/next';
import Image from 'next/image';
import MobileAgentFlow from './MobileAgentFlow';
import RotatingHeroHeadline from './RotatingHeroHeadline';

const tags = ['AI', 'DATA', 'CLOUD'];

function HomeHeader() {
  return (
    <main className="font-switzer relative overflow-hidden min-h-screen flex flex-col justify-center pt-[80px] pb-6">

      {/* ── Page backgrounds ── */}
      <div className="absolute w-full h-full z-[-1] left-0 top-0 after:absolute after:bottom-0 after:bg-main-gradient after:w-full after:h-1/5">
        <Image src="/img/BG.png" alt="Background" layout="fill" objectFit="cover" quality={100} />
        <Image src="/img/Group 32.png" alt="Design Element" className="!top-36" layout="fill" objectFit="cover" quality={100} />
      </div>
      <div className="absolute inset-0 z-[-1] pointer-events-none" style={{ backgroundImage: "url('/img/noise-background.jpg')", backgroundSize: '300px 300px', opacity: 0.04 }} />

      {/* ── Mobile view ── */}
      <div className="block lg:hidden relative z-[1] px-5 sm:px-8">
        <MobileAgentFlow />
      </div>

      {/* ── Desktop hero card ── */}
      <div className="hidden lg:block relative z-[1] w-full px-4 xl:px-6">
        <div
          style={{
            borderRadius: 32,
            boxShadow: '0 24px 80px rgba(0,0,0,0.16)',
            overflow: 'hidden',
            position: 'relative',
            border: '1px solid rgba(255,255,255,0.65)',
            minHeight: 'calc(100vh - 100px)',
          }}
        >

          {/* card inner layout */}
          <div className="relative z-[2] flex items-center gap-0 h-full" style={{ minHeight: 'calc(100vh - 100px)' }}>

            {/* Left — text content */}
            <div className="flex-1 py-20 px-16 xl:py-24 xl:px-20 flex flex-col justify-center min-w-0">

              {/* eyebrow badge */}
              <div className="flex flex-wrap items-center gap-2 mb-8">
                <span className="inline-flex items-center rounded-full border border-[#e6e6e6] bg-white/70 px-3.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-[#6b7280] select-none">
                  {tags.join(' · ')}
                </span>
              </div>

              {/* headline (rotates between slogans) */}
              <RotatingHeroHeadline variant="desktop" />

              {/* buttons */}
              <div className="flex items-center gap-3 flex-wrap">
                <Link
                  href={Constants.PAGES.SCHEDULE_CALL}
                  className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap px-7 py-3.5 rounded-full text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  style={{ background: '#0a0e1a', boxShadow: '0 6px 24px rgba(0,0,0,0.28)' }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
                    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z"/>
                  </svg>
                  Talk to our Experts
                </Link>
                <Link
                  href={Constants.PAGES.SOLUTIONS}
                  className="group/sol inline-flex items-center justify-center gap-2.5 whitespace-nowrap px-7 py-3.5 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: 'rgba(255,255,255,0.68)',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    border: '1px solid rgba(255,255,255,0.92)',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,1)',
                    color: '#0a0e1a',
                  }}
                >
                  Explore our solutions
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover/sol:translate-x-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right — illustration */}
            <div className="shrink-0 w-[52%] xl:w-[54%] self-end relative">
              {/* Cool blue glow anchoring image to background palette */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 80% 55% at 48% 92%, rgba(37,99,235,0.13) 0%, rgba(59,130,246,0.04) 48%, transparent 68%)',
                }}
              />
              <Image
                src="/img/github.png"
                alt="AI Agent Architecture"
                width={900}
                height={900}
                style={{
                  position: 'relative',
                  width: '106%',
                  marginLeft: '-3%',
                  height: 'auto',
                  display: 'block',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 16%), linear-gradient(to bottom, transparent 0%, black 14%)',
                  WebkitMaskComposite: 'source-in',
                  maskImage: 'linear-gradient(to right, transparent 0%, black 16%), linear-gradient(to bottom, transparent 0%, black 14%)',
                  maskComposite: 'intersect',
                }}
                quality={95}
              />
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}

export default HomeHeader;
