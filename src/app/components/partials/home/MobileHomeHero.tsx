'use client';

import { Link } from 'react-transition-progress/next';
import { Constants } from '@/Constants';
import HeroFog from './HeroFog';
import PartnerHoverCard from '@/app/components/PartnerHoverCard';
import RotatingHeroHeadline from './RotatingHeroHeadline';

/* Editorial mobile-only hero — eyebrow, headline rotating through the two featured slogans,
   supporting paragraph, full-width CTA, secondary CTA.
   Rendered only below the md breakpoint; desktop keeps the existing hero. */
export default function MobileHomeHero() {
  return (
    <div
      className="relative isolate overflow-hidden bg-white px-5"
      style={{ paddingTop: 124 }}
    >
      {/* Blue glow drifting like fog, same as the desktop hero */}
      <HeroFog />

      {/* Eyebrow — same type as the "What we do" label further down; links to the About page */}
      <p className="m-0 mb-4 text-[14px] font-medium uppercase tracking-[0.18em] text-[#1e1e1e]">
        <Link
          href={Constants.PAGES.ABOUT_US}
          className="rounded-sm transition-colors duration-200 hover:text-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
        >
          About us
        </Link>
      </p>

      {/* Fixed-height slot so the buttons below don't jump when the slogan changes */}
      <div style={{ minHeight: '7.5rem', marginBottom: 24 }}>
        <RotatingHeroHeadline variant="mobile" featuredOnly />
      </div>

      {/* Actions — stacked: a white pill matching the Claude partner badge,
          then a quiet text link ~30px below it. */}
      <div className="flex flex-col items-center">
        {/* Same pill as the Claude partner badge below: white, hairline border, 40px tall */}
        <Link
          href={Constants.PAGES.GET_IN_TOUCH}
          className="flex w-full h-10 cursor-pointer items-center justify-center whitespace-nowrap rounded-md bg-black px-5 text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-[#1A1818] active:bg-[#2E2B2B]"
        >
          Let&apos;s talk
        </Link>

        <Link
          href={Constants.PAGES.SOLUTIONS}
          className="group relative mt-[30px] inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-sm py-1 text-[15px] font-semibold text-[#2E2B2B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-4"
        >
          Hesitant? Let&apos;s explore
          <span
            aria-hidden="true"
            className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-active:translate-x-1 motion-reduce:transition-none"
          >
            &rarr;
          </span>
          {/* underline that draws in from the left on hover */}
          <span
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[#2E2B2B] transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
          />
        </Link>
      </div>

      {/* Claude partner badge — tap to open the partnership card.
          Sits under a hairline as a quiet trust line, aligned with the text. */}
      <div className="mt-6 mb-12 flex items-center">
        <PartnerHoverCard official />
      </div>
    </div>
  );
}
