'use client';

import { Link } from 'react-transition-progress/next';
import { Constants } from '@/Constants';

/* Editorial mobile-only hero — eyebrow, static headline (no blur/rotation),
   supporting paragraph, full-width CTA, secondary CTA.
   Rendered only below the md breakpoint; desktop keeps the existing hero. */
export default function MobileHomeHero() {
  return (
    <div
      className="px-5"
      style={{
        background:
          'radial-gradient(circle at 15% 100%, rgba(190,203,255,0.5), transparent 48%), ' +
          '#ffffff',
        paddingTop: 124,
      }}
    >
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
          marginBottom: 16,
          maxWidth: '100%',
        }}
      >
        We make{' '}
        <span style={{ background: 'rgba(37,99,235,0.14)', borderRadius: 0, padding: '2px 6px' }}>
          AI work
        </span>{' '}
        inside your business.
      </h1>

      <p
        className="m-0 text-[#343434]"
        style={{
          fontSize: 20,
          fontWeight: 400,
          lineHeight: 1.5,
          letterSpacing: '-0.015em',
          marginBottom: 32,
        }}
      >
        We work closely with our clients, use the right technology, and stay focused on
        what matters most: delivering real results.
      </p>

      <Link
        href={Constants.PAGES.GET_IN_TOUCH}
        className="flex w-full h-10 cursor-pointer items-center justify-center whitespace-nowrap rounded-full bg-[#E1F0FF] px-5 text-[14px] font-semibold text-[#0066B3] transition-colors duration-200 hover:bg-[#CCE4FF] active:bg-[#B8D9FF]"
      >
        Let&apos;s talk
      </Link>

      <Link
        href={Constants.PAGES.SOLUTIONS}
        className="mt-3 mb-16 flex w-full h-10 cursor-pointer items-center justify-center whitespace-nowrap rounded-full bg-[#2E2B2B] px-5 text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-[#242121] active:bg-[#1A1818]"
      >
        See all solutions
      </Link>

      {/* hairline divider — symmetric fade in the CTA pill blues, same as About */}
      <hr
        className="m-0 mt-6 h-[1.5px] w-full border-0"
        style={{
          backgroundImage: 'linear-gradient(90deg, #fff, #E1F0FF 15%, #0066B3 50%, #E1F0FF 85%, #fff)',
          borderRadius: 100,
        }}
      />
    </div>
  );
}
