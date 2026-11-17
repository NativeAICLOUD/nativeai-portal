'use client';

import { useEffect, useState } from 'react';
import { SerifAccent } from '@/app/components/ui/EditorialGlow';

// ── Edit these to change the rotating hero slogans ──
// Each slogan is split so the middle phrase gets the highlight.
// `editorial: true` switches that one slogan to the editorial design — light weight,
// larger, with the highlight in the italic serif instead of the blue marker tint.
const SLOGANS: { pre: string; highlight: string; post: string; editorial?: boolean }[] = [
  { pre: 'We make ', highlight: 'AI work', post: ' inside your business', editorial: true },
  { pre: '', highlight: 'Agentic AI', post: ' that acts, not just answers' },
  { pre: 'Modernize & scale with ', highlight: 'Azure Certified', post: ' experts' },
  { pre: '', highlight: 'Web intelligence', post: ' for the agentic era', editorial: true },
  { pre: 'Your ', highlight: 'AI & Digital Transformation', post: ' partner' },
];
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
    fontWeight: 300,
    letterSpacing: '-0.035em',
    color: '#141414',
  } as React.CSSProperties,
} as const;

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
}: {
  variant: 'desktop' | 'mobile';
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SLOGANS.length);
    }, ROTATE_INTERVAL);
    return () => clearInterval(id);
  }, []);

  const cfg = VARIANTS[variant];
  const slogan = SLOGANS[index];

  return (
    <>
      {/* key={index} remounts the headline each change → replays fade + un-blur */}
      <h1
        key={index}
        className="hdr-rot-headline"
        style={slogan.editorial ? { ...cfg.h1Style, ...EDITORIAL_OVERRIDES[variant] } : cfg.h1Style}
      >
        {slogan.pre}
        {slogan.editorial ? (
          <SerifAccent>{slogan.highlight}</SerifAccent>
        ) : (
          <span className="hdr-highlight" style={HIGHLIGHT_STYLE}>{slogan.highlight}</span>
        )}
        {slogan.post}
      </h1>

      <style>{`
        .hdr-rot-headline {
          animation: hdr-aiwork-reveal 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes hdr-aiwork-reveal {
          from { opacity: 0; filter: blur(16px); }
          to   { opacity: 1; filter: blur(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hdr-rot-headline { animation: none; }
        }
      `}</style>
    </>
  );
}
