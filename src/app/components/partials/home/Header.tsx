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
      <div className="relative hidden overflow-hidden md:block hero-gradient-bg">
        <style>{`
          .hero-gradient-bg {
            background:
              radial-gradient(circle at 15% 100%, rgba(190,203,255,0.5), transparent 48%),
              #ffffff;
          }
        `}</style>

        <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 pb-[88px] pt-[162px] sm:px-6 md:pb-[130px] md:pt-[182px]">

          {/* headline (rotates between slogans) */}
          <RotatingHeroHeadline variant="desktop" />

          {/* supporting subhead */}
          <p className="mt-6 max-w-[560px] text-[19px] font-normal leading-[1.6] text-[#4B5563]">
            We work closely with our clients, use the right technology, and stay focused on
            what matters most: delivering real results.
          </p>

          {/* site search — same field, placeholder and behaviour */}
          <HeroSearch />

          {/* CTA row */}
          <div className="mt-12 flex flex-col items-start md:flex-row md:flex-wrap md:items-center md:gap-3">
            <Link
              href={Constants.PAGES.GET_IN_TOUCH}
              className="inline-flex h-10 min-w-[160px] cursor-pointer items-center justify-center whitespace-nowrap rounded-full bg-[#2E2B2B] px-5 text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-[#242121] active:bg-[#1A1818]"
            >
              Let&apos;s talk
            </Link>

            {/* secondary — text link with arrow */}
            <Link
              href={Constants.PAGES.SOLUTIONS}
              className="group mt-3 inline-flex h-10 cursor-pointer items-center gap-1.5 whitespace-nowrap px-2 text-[14px] font-semibold text-[#2E2B2B] transition-colors duration-200 hover:text-[#0066B3] md:mt-0"
            >
              See all solutions
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">&rarr;</span>
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
