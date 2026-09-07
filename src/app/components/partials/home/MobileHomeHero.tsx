'use client';

import { Link } from 'react-transition-progress/next';
import { Constants } from '@/Constants';

/* Editorial mobile-only hero — eyebrow, static headline (no blur/rotation),
   supporting paragraph, full-width CTA, secondary CTA.
   Rendered only below the md breakpoint; desktop keeps the existing hero. */
export default function MobileHomeHero() {
  return (
    <div
      className="px-5 pb-10"
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
        We deliver end-to-end{' '}
        <span className="font-semibold text-[#111111]">AI and cloud solutions</span>{' '}
        — SaaS, DevOps, modernization — focused on business outcomes.
      </p>

      <Link
        href={Constants.PAGES.SCHEDULE_CALL}
        className="flex w-full items-center justify-center rounded-full bg-black px-11 py-4 text-center transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2563EB] hover:shadow-[0_10px_28px_rgba(37,99,235,0.25)] active:translate-y-0 active:shadow-none"
      >
        <span className="text-[17px] font-semibold leading-none text-white">
          Let&apos;s talk
        </span>
      </Link>

      <Link
        href={Constants.PAGES.SOLUTIONS}
        className="group/sol mt-8 mb-16 flex items-center justify-center whitespace-nowrap text-[#111111]"
        style={{ fontSize: 20, fontWeight: 600 }}
      >
        Explore our solutions
        <svg
          className="ml-3.5 h-5 w-5 shrink-0 transition-transform duration-300 ease-out group-hover/sol:translate-x-1 group-active/sol:translate-x-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </Link>

      {/* Gradient divider — same as desktop */}
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
