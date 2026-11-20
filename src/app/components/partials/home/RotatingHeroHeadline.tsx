'use client';

import { useEffect, useState } from 'react';
import { Instrument_Serif } from 'next/font/google';
import { SerifAccent } from '@/app/components/ui/EditorialGlow';

// Instrument Serif, upright + italic — used only by slogans flagged `pill`.
const pillSerif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

// ── Edit these to change the rotating hero slogans ──
// Each slogan is split so the middle phrase gets the highlight.
// `editorial: true` switches that one slogan to the editorial design — light weight,
// larger, with the highlight in the italic serif instead of the blue marker tint.
// `pill: true` uses the "Intelligence at every layer" design instead: the whole
// slogan in the serif, with the highlight in an italic periwinkle pill on its own line.
const SLOGANS: { pre: string; highlight: string; post: string; editorial?: boolean; pill?: boolean; mobile?: boolean }[] = [
  { pre: '', highlight: 'Web intelligence', post: ' for the agentic era', pill: true, mobile: true },
  { pre: 'We make ', highlight: 'AI work', post: ' inside your business', editorial: true, mobile: true },
  { pre: '', highlight: 'Agentic AI', post: ' that acts, not just answers', mobile: true },
  { pre: 'Modernize & scale with ', highlight: 'Azure Certified', post: ' experts' },
  { pre: 'Your ', highlight: 'AI & Digital Transformation', post: ' partner' },
];
// `mobile: true` — the slogans the mobile home hero rotates through.
const FEATURED_SLOGANS = SLOGANS.filter((s) => s.mobile);
const ROTATE_INTERVAL = 4200; // ms between slogan changes

/* Default typography: large, tight, typography-led. The highlight is a
   flat marker-style tint rather than a shimmer/underline. */
const VARIANTS = {
  desktop: {
    h1Style: {
      fontFamily: "'Switzer', sans-serif",
      fontSize: 'clamp(2.75rem, 4.4vw, 5.25rem)', // ~84px at 1920, ~60px at 1366, 44px floor
      fontWeight: 500,
      lineHeight: 1.0,
      letterSpacing: '-0.04em',
      color: '#171717',
      margin: 0,
      maxWidth: 820,
    } as React.CSSProperties,
  },
  mobile: {
    h1Style: {
      fontFamily: "'Switzer', sans-serif",
      fontSize: 'clamp(2.4rem, 8vw, 2.75rem)',
      fontWeight: 500,
      lineHeight: 1.02,
      letterSpacing: '-0.04em',
      margin: 0,
      color: '#171717',
    } as React.CSSProperties,
  },
} as const;

/* Editorial typography for slogans flagged `editorial` — same treatment as
   "Move your business forward." (IndustriesIntroSection). Applied on top of the variant above. */
const EDITORIAL_OVERRIDES = {
  desktop: {
    fontSize: 'clamp(2.75rem, 5.4vw, 6.5rem)', // ~104px at 1920, ~74px at 1366, 44px floor
    fontWeight: 300,
    lineHeight: 1.02,
    letterSpacing: '-0.035em',
    color: '#141414',
    maxWidth: 1100,
  } as React.CSSProperties,
  mobile: {
    fontSize: 44,
    fontWeight: 300,
    lineHeight: 1.02,
    letterSpacing: '-0.035em',
    color: '#1e1e1e',
  } as React.CSSProperties,
} as const;

/* Pill design — same as EditorialHeadline ("Intelligence at every layer of your business."). */
const PILL_OVERRIDES = {
  desktop: {
    fontSize: 'clamp(3rem, 6.2vw, 7.5rem)', // serif runs small, so a step larger than the sans
    fontWeight: 400,
    lineHeight: 1,
    letterSpacing: '-0.02em',
    color: '#141414',
    maxWidth: 1100,
  } as React.CSSProperties,
  mobile: {
    fontSize: 'clamp(2.25rem, 11vw, 3.5rem)', // 36px at 320 wide, ~43px at 390
    fontWeight: 400,
    lineHeight: 1,
    letterSpacing: '-0.02em',
    color: '#141414',
  } as React.CSSProperties,
} as const;

const PILL_STYLE: React.CSSProperties = {
  display: 'inline-block',
  background: '#BECBFF',
  fontStyle: 'italic',
  letterSpacing: '-0.025em',
  padding: '0.04em 0.36em 0.16em 0.3em',
  // uneven radii, all above half the height → a capsule with slightly organic curves
  borderRadius: '0.66em 0.78em 0.6em 0.72em / 0.74em 0.62em 0.76em 0.64em',
};

const HIGHLIGHT_STYLE: React.CSSProperties = {
  background: 'rgba(37, 99, 235, 0.10)',
  color: '#171717',
  padding: '0 6px 3px',
  borderRadius: 2,
  // keep the tint hugging each line when the highlight wraps
  boxDecorationBreak: 'clone',
  WebkitBoxDecorationBreak: 'clone',
};

export default function RotatingHeroHeadline({
  variant,
  featuredOnly = false,
}: {
  variant: 'desktop' | 'mobile';
  /** Rotate only through the slogans flagged `mobile` (used by the mobile home hero). */
  featuredOnly?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const slogans = featuredOnly ? FEATURED_SLOGANS : SLOGANS;

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slogans.length);
    }, ROTATE_INTERVAL);
    return () => clearInterval(id);
  }, [slogans]);

  const cfg = VARIANTS[variant];
  const slogan = slogans[index];
  // On mobile every slogan uses the same default design (bold sans + blue marker
  // highlight); the pill and editorial designs are desktop-only.
  const usePill = variant === 'desktop' && !!slogan.pill;
  const useEditorial = variant === 'desktop' && !!slogan.editorial;

  if (usePill) {
    return (
      <>
        <h1
          key={index}
          className={pillSerif.className}
          style={{ ...cfg.h1Style, ...PILL_OVERRIDES[variant], fontFamily: undefined }}
        >
          {slogan.pre}
          {/* Same motion as the editorial headline further down the page:
              each line rises and fades in, one after the other; the pill
              grows slightly and lightens on hover. */}
          <span className="hdr-pill-line" style={{ display: 'block' }}>
            <span className="hdr-pill" style={PILL_STYLE}>{slogan.highlight}</span>
          </span>
          {/* Second line in the light sans of "inside your business" (editorial slogans),
              scaled to the same optical size — the serif around it is set a step larger. */}
          <span
            className="hdr-pill-line"
            style={{
              display: 'block',
              marginTop: '0.14em',
              animationDelay: '0.12s',
              fontFamily: "'Switzer', sans-serif",
              fontWeight: 300,
              fontSize: '0.87em',
              lineHeight: 1.02,
              letterSpacing: '-0.035em',
            }}
          >
            {slogan.post.trim()}
          </span>
        </h1>
        <style>{REVEAL_CSS}</style>
      </>
    );
  }

  return (
    <>
      {/* key={index} remounts the headline each change → replays fade + un-blur */}
      <h1
        key={index}
        className="hdr-rot-headline"
        style={useEditorial ? { ...cfg.h1Style, ...EDITORIAL_OVERRIDES[variant] } : cfg.h1Style}
      >
        {slogan.pre}
        {useEditorial ? (
          <SerifAccent>{slogan.highlight}</SerifAccent>
        ) : (
          <span className="hdr-highlight" style={HIGHLIGHT_STYLE}>{slogan.highlight}</span>
        )}
        {slogan.post}
      </h1>

      <style>{REVEAL_CSS}</style>
    </>
  );
}

const REVEAL_CSS = `
  .hdr-rot-headline {
    animation: hdr-aiwork-reveal 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
  }
  @keyframes hdr-aiwork-reveal {
    from { opacity: 0; filter: blur(16px); }
    to   { opacity: 1; filter: blur(0); }
  }
  .hdr-pill-line {
    animation: hdr-pill-rise 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
  }
  @keyframes hdr-pill-rise {
    from { opacity: 0; transform: translateY(0.3em); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .hdr-pill {
    transform-origin: left center;
    transition: transform 0.5s ease-out, background-color 0.5s ease-out;
  }
  .hdr-pill:hover {
    transform: scale(1.02);
    background-color: #CCE4FF !important;
  }
  @media (prefers-reduced-motion: reduce) {
    .hdr-rot-headline, .hdr-pill-line { animation: none; }
    .hdr-pill { transition: none; }
    .hdr-pill:hover { transform: none; }
  }
`;
