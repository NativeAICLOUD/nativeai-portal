'use client';

import { useEffect, useState } from 'react';

// ── Edit these to change the rotating hero slogans ──
// Each slogan is split so the middle phrase keeps the shimmer + underline accent.
const SLOGANS = [
  { pre: 'We make ', highlight: 'AI work', post: ' inside your business' },
  { pre: '', highlight: 'Web intelligence', post: ' for the agentic era' },
];
const ROTATE_INTERVAL = 4200; // ms between slogan changes

const VARIANTS = {
  desktop: {
    h1Style: {
      fontFamily: "'Switzer', sans-serif",
      fontSize: 'clamp(2.8rem, 5vw, 5rem)',
      fontWeight: 600,
      lineHeight: 1.06,
      letterSpacing: '-0.02em',
      color: '#111',
      margin: '0 0 28px',
      maxWidth: 560,
    } as React.CSSProperties,
    underlineClass:
      'absolute bottom-1 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-[#2563eb] opacity-70',
  },
  mobile: {
    h1Style: {
      fontFamily: "'Switzer', sans-serif",
      fontSize: 'clamp(1.75rem, 6.5vw, 2.4rem)',
      fontWeight: 600,
      lineHeight: 1.08,
      letterSpacing: '-0.02em',
      margin: '0 0 20px',
      color: '#111',
      textAlign: 'center',
    } as React.CSSProperties,
    underlineClass:
      'absolute bottom-0.5 left-0 w-full h-[2.5px] rounded-full bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-[#2563eb] opacity-60',
  },
} as const;

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
        <span className="relative inline-block">
          <span className="hdr-aiwork-refive">{slogan.highlight}</span>
          <span className={cfg.underlineClass} />
        </span>
        {slogan.post}
      </h1>

      <style>{`
        .hdr-rot-headline {
          animation: hdr-aiwork-reveal 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .hdr-aiwork-refive {
          display: inline-block;
          /* Corporate blue metallic shimmer (ClearScale-style palette) */
          background: linear-gradient(
            100deg,
            #1e4fd6 0%,
            #3b82f6 28%,
            #dbeafe 50%,
            #3b82f6 72%,
            #1e4fd6 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          animation: hdr-aiwork-shimmer 3.2s linear infinite;
        }
        @keyframes hdr-aiwork-reveal {
          from { opacity: 0; filter: blur(16px); }
          to   { opacity: 1; filter: blur(0); }
        }
        @keyframes hdr-aiwork-shimmer {
          to { background-position: 200% center; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hdr-rot-headline { animation: none; }
          .hdr-aiwork-refive {
            animation: none;
            background-position: 50% center;
          }
        }
      `}</style>
    </>
  );
}
