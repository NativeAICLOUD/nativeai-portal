'use client';

import { Constants } from "@/Constants";
import { Link } from 'react-transition-progress/next';
import RotatingHeroHeadline from './RotatingHeroHeadline';
import HeroSearch from './HeroSearch';
import MobileHomeHero from './MobileHomeHero';

/* Minimal editorial hero — typography-led, content-first.
   Same content and behaviour as before; decorative card, background
   artwork and illustration removed.
   Mobile (<768px) renders a completely separate, editorial hero
   (MobileHomeHero) — desktop markup below is untouched. */
function HomeHeader() {
  return (
    <main className="font-switzer">
      {/* Mobile-only hero */}
      <div className="md:hidden">
        <MobileHomeHero />
      </div>

      {/* Desktop hero — unchanged */}
      <div className="hidden md:block hero-gradient-bg">
        <style>{`
          .hero-gradient-bg {
            background:
              radial-gradient(circle at 15% 100%, rgba(190,203,255,0.5), transparent 48%),
              #ffffff;
          }
        `}</style>
        <div className="mx-auto w-full max-w-[1240px] px-5 pb-[88px] pt-[162px] sm:px-6 md:pb-[130px] md:pt-[182px]">

          {/* headline (rotates between slogans) */}
          <RotatingHeroHeadline variant="desktop" />

          {/* site search — same field, placeholder and behaviour */}
          <HeroSearch />

          {/* CTA row */}
          <div className="mt-12 flex flex-col items-start md:flex-row md:flex-wrap md:items-center md:gap-6">
            <Link
              href={Constants.PAGES.SCHEDULE_CALL}
              className="group/cta inline-flex min-w-[210px] cursor-pointer items-center justify-center rounded-full bg-black px-11 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2563EB] hover:shadow-[0_10px_28px_rgba(37,99,235,0.25)] active:translate-y-0 active:shadow-none"
            >
              <span className="text-[17px] font-semibold leading-none text-white">
                Let&apos;s talk
              </span>
            </Link>

            {/* secondary — quiet text link */}
            <Link
              href={Constants.PAGES.SOLUTIONS}
              className="group/sol inline-flex items-center gap-2 text-[17px] font-medium text-[#4B5563] transition-colors duration-200 hover:text-[#0F172A]"
            >
              Explore our solutions
              <svg className="h-[18px] w-[18px] shrink-0 transition-transform duration-200 ease-out group-hover/sol:translate-x-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>

        </div>

        {/* Gradient divider — same as the nearshore intro */}
        <hr
          className="m-0 mt-24 h-1 w-full border-0 md:mt-48"
          style={{
            backgroundImage: 'linear-gradient(260deg, #fff, #BECBFF 20%, #5B7CFA 50%, #2563EB 80%, #fff)',
            borderRadius: 100,
          }}
        />
      </div>
    </main>
  );
}

export default HomeHeader;
