'use client';

import { Link } from 'react-transition-progress/next';
import { Constants } from '@/Constants';
import HeroFog from './HeroFog';
import PartnerHoverCard from '@/app/components/PartnerHoverCard';
import RotatingHeroHeadline from './RotatingHeroHeadline';

/* Editorial mobile-only hero — eyebrow, headline rotating through the pill slogans,
   supporting paragraph, full-width CTA, secondary CTA.
   Rendered only below the md breakpoint; desktop keeps the existing hero. */
export default function MobileHomeHero() {
  return (
    <div
      className="relative isolate overflow-hidden bg-white px-5"
      style={{ paddingTop: 124 }}
    >
      {/* Blue glow drifting like fog, same as the desktop hero */}
      <HeroFog cover lively />

      {/* Fixed-height slot so the buttons below don't jump when the slogan changes */}
      <div style={{ minHeight: '11.5rem', marginBottom: 24 }}>
        <RotatingHeroHeadline variant="mobile" pillOnly />
      </div>

      {/* Actions — side by side, 48px tall so both are comfortable tap targets */}
      <div className="flex gap-2.5">
        <Link
          href={Constants.PAGES.GET_IN_TOUCH}
          className="group flex h-12 flex-1 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-[#2E2B2B] px-4 text-[15px] font-semibold text-white shadow-[0_10px_24px_-12px_rgba(37,99,235,0.55)] transition-colors duration-200 hover:bg-[#242121] active:bg-[#1A1818]"
        >
          Let&apos;s talk
          <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5 group-active:translate-x-0.5">&rarr;</span>
        </Link>

        <Link
          href={Constants.PAGES.SOLUTIONS}
          className="flex h-12 flex-1 cursor-pointer items-center justify-center whitespace-nowrap rounded-full border border-[#BECBFF] bg-white/70 px-4 text-[15px] font-semibold text-[#2E2B2B] backdrop-blur-md transition-colors duration-200 hover:bg-[#E1F0FF] hover:text-[#0066B3] active:bg-[#CCE4FF]"
        >
          See all solutions
        </Link>
      </div>

      {/* Claude partner badge — tap to open the partnership card.
          Sits under a hairline as a quiet trust line, aligned with the text. */}
      <div className="mt-7 mb-12 flex items-center border-t border-[#2563EB]/15 pt-5">
        <PartnerHoverCard official />
      </div>
    </div>
  );
}
