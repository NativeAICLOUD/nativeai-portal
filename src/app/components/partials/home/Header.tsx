'use client';

import { Constants } from "@/Constants";
import { Link } from 'react-transition-progress/next';
import RotatingHeroHeadline from './RotatingHeroHeadline';
import HeroSearch from './HeroSearch';

/* Minimal editorial hero — typography-led, content-first.
   Same content and behaviour as before; decorative card, background
   artwork and illustration removed. */
function HomeHeader() {
  return (
    <main
      className="font-switzer"
      style={{
        // industries-hero-bg with the warm side softened toward white
        background:
          'radial-gradient(circle at 15% 100%, rgba(224,225,255,0.75), transparent 43%), ' +
          'radial-gradient(circle at 80% 100%, rgba(255,237,189,0.38), transparent 48%), ' +
          'radial-gradient(circle at 100% 70%, rgba(255,225,215,0.30), transparent 43%), ' +
          '#ffffff',
      }}
    >
      <div className="mx-auto w-full max-w-[1240px] px-5 pb-[88px] pt-[148px] sm:px-6 md:pb-[130px] md:pt-[182px]">

        {/* headline (rotates between slogans) */}
        <RotatingHeroHeadline variant="desktop" />

        {/* site search — same field, placeholder and behaviour */}
        <HeroSearch />

        {/* CTA row */}
        <div className="mt-7 flex flex-wrap items-center gap-3.5">
          <Link
            href={Constants.PAGES.SCHEDULE_CALL}
            className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: '#0a0e1a', boxShadow: '0 6px 24px rgba(0,0,0,0.28)' }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z"/>
            </svg>
            Talk to our Experts
          </Link>
          <Link
            href={Constants.PAGES.SOLUTIONS}
            className="group/sol inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full border border-[#111]/15 bg-white px-7 py-3.5 text-base font-semibold text-[#0a0e1a] transition-all duration-300 hover:scale-[1.02] hover:border-[#111]/40 active:scale-[0.98]"
          >
            Explore our solutions
            <svg className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover/sol:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
            </svg>
          </Link>
        </div>

      </div>

      {/* Gradient divider — same as the nearshore intro */}
      <hr
        className="m-0 mt-20 h-1 w-full border-0 md:mt-44"
        style={{
          backgroundImage: 'linear-gradient(260deg, #fff, #ff9900 20%, #ff6a3d 50%, #ff4f8b 80%, #fff)',
          borderRadius: 100,
        }}
      />
    </main>
  );
}

export default HomeHeader;
