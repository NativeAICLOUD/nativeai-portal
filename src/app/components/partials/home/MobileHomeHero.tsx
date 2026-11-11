'use client';

import { Link } from 'react-transition-progress/next';
import { Constants } from '@/Constants';
import HeroFog from './HeroFog';
import PartnerHoverCard from '@/app/components/PartnerHoverCard';

/* Editorial mobile-only hero — eyebrow, static headline (no blur/rotation),
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

      <p
        className="m-0 uppercase tracking-[0.2em] text-[#1e1e1e]"
        style={{ marginBottom: 8, fontSize: 12, lineHeight: '18px', fontWeight: 500 }}
      >
        About NativeCloud
      </p>

      <h1
        className="m-0 text-[#1e1e1e]"
        style={{
          fontSize: 32,
          lineHeight: '40px',
          fontWeight: 600,
          letterSpacing: '-0.019em',
          marginBottom: 32,
          maxWidth: '100%',
        }}
      >
        We make{' '}
        <span style={{ background: 'rgba(37,99,235,0.14)', borderRadius: 0, padding: '2px 6px' }}>
          AI work
        </span>{' '}
        inside your business.
      </h1>

      <Link
        href={Constants.PAGES.GET_IN_TOUCH}
        className="flex w-full h-10 cursor-pointer items-center justify-center whitespace-nowrap rounded-full bg-[#2E2B2B] px-5 text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-[#242121] active:bg-[#1A1818]"
      >
        Let&apos;s talk
      </Link>

      <Link
        href={Constants.PAGES.SOLUTIONS}
        className="group mt-3 flex w-full h-10 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap px-5 text-[14px] font-semibold text-[#2E2B2B] transition-colors duration-200 hover:text-[#0066B3]"
      >
        See all solutions
        <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">&rarr;</span>
      </Link>

      {/* Claude partner badge — tap to open the partnership card */}
      <div className="mt-3 mb-16 flex justify-center">
        <PartnerHoverCard official />
      </div>

      {/* Gradient divider — same as the desktop hero (Header.tsx) */}
      <hr
        className="m-0 mt-6 h-1 w-full border-0"
        style={{
          backgroundImage: 'linear-gradient(260deg, #fff, #BECBFF 20%, #5B7CFA 50%, #2563EB 80%, #fff)',
          borderRadius: 100,
        }}
      />
    </div>
  );
}
