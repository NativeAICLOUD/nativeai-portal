'use client';

import { Constants } from "@/Constants";
import { Link } from 'react-transition-progress/next';
import RotatingHeroHeadline from './RotatingHeroHeadline';
import HeroSearch from './HeroSearch';
import MobileHomeHero from './MobileHomeHero';
import HeroFog from './HeroFog';
import PartnerHoverCard from '@/app/components/PartnerHoverCard';

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

      {/* Desktop hero — heading, search, CTAs and badge as one content-driven group.
          Top/bottom padding scale with viewport height so 13–14" laptops stay compact. */}
      <div className="relative isolate hidden overflow-hidden bg-white md:block">
        {/* Soft blue fog spread behind the content */}
        <HeroFog cover className="opacity-75" />

        <div
          className="relative z-10 mx-auto w-full max-w-[1240px] px-6"
          style={{ paddingTop: 'clamp(150px, 20vh, 220px)', paddingBottom: 'clamp(64px, 9vh, 104px)' }}
        >

          {/* headline (rotates between slogans) */}
          <RotatingHeroHeadline variant="desktop" />

          {/* site search — same field, placeholder and behaviour */}
          <HeroSearch />

          {/* CTA row */}
          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3">
            <Link
              href={Constants.PAGES.GET_IN_TOUCH}
              className="inline-flex h-10 min-w-[160px] cursor-pointer items-center justify-center whitespace-nowrap rounded-full bg-[#2E2B2B] px-5 text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-[#242121] active:bg-[#1A1818]"
            >
              Let&apos;s talk
            </Link>

            {/* secondary — text link with arrow */}
            <Link
              href={Constants.PAGES.SOLUTIONS}
              className="group inline-flex h-10 cursor-pointer items-center gap-1.5 whitespace-nowrap px-1 text-[14px] font-semibold text-[#2E2B2B] transition-colors duration-200 hover:text-[#0066B3]"
            >
              See all solutions
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">&rarr;</span>
            </Link>

            {/* Claude partner badge — expands into the partnership card on hover */}
            <PartnerHoverCard official />
          </div>

        </div>

        {/* Gradient divider — same as the nearshore intro */}
        <hr
          className="m-0 h-1 w-full border-0"
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
