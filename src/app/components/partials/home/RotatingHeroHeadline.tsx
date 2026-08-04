'use client';

import { useEffect, useState } from 'react';

// ── Edit these to change the rotating hero slogans ──
// Each slogan is split so the middle phrase keeps the shimmer + underline accent.
const SLOGANS = [
  { pre: 'We make ', highlight: 'AI work', post: ' inside your business' },
  { pre: '', highlight: 'Web intelligence', post: ' for the agentic era' },
];
const ROTATE_INTERVAL = 4200; // ms between slogan changes

/* Editorial typography: large, tight, typography-led. The highlight is a
   flat marker-style tint rather than a shimmer/underline. */
const VARIANTS = {
  desktop: {
    h1Style: {
      fontFamily: "'Switzer', sans-serif",
      fontSize: 'clamp(2.75rem, 6.5vw, 5.25rem)',
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

const HIGHLIGHT_STYLE: React.CSSProperties = {
  background: 'rgba(37, 99, 235, 0.10)',
  color: '#171717',
  padding: '0 6px 3px',
  borderRadius: 2,
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
      <h1 key={index} className="hdr-rot-headline" style={cfg.h1Style}>
        {slogan.pre}
        <span style={HIGHLIGHT_STYLE}>{slogan.highlight}</span>
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
