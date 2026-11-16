'use client';

import Link from 'next/link';
import type { PointerEvent as ReactPointerEvent, ReactNode } from 'react';

/*
 * Outline button that fills with drifting periwinkle fog on hover — the same
 * treatment as the Innovate / Modernize / Accelerate cards on the homepage
 * (EngineeredYourWaySection): three blurred fog banks drifting behind the
 * label plus a glow that follows the cursor. Same size and shape as
 * SecondaryButton, so it can replace one in place.
 */

// Fog banks — the hero fog's periwinkle, scaled down for a button.
const FOG_BANKS = [
  { left: '-30%', top: '-60%', w: '90%', h: '200%', color: 'rgba(190,203,255,0.75)', anim: 'fogbtn-a', duration: 7 },
  { left: '40%', top: '-20%', w: '90%', h: '210%', color: 'rgba(190,203,255,0.90)', anim: 'fogbtn-b', duration: 9 },
  { left: '10%', top: '20%', w: '80%', h: '180%', color: 'rgba(190,203,255,0.65)', anim: 'fogbtn-c', duration: 11 },
];

// Feeds the cursor position to the glow layer.
const onFogMove = (e: ReactPointerEvent<HTMLAnchorElement>) => {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${e.clientX - r.left}px`);
  el.style.setProperty('--my', `${e.clientY - r.top}px`);
};

export default function FogButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      onPointerMove={onFogMove}
      className="fogbtn group relative isolate inline-flex items-center overflow-hidden rounded-full border border-[#111]/15 px-6 py-3 text-[15px] font-medium text-[#111] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#8FA3F5] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111827]/20"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
      >
        {FOG_BANKS.map((b) => (
          <span
            key={b.anim}
            className="fogbtn-bank absolute rounded-full"
            style={{
              left: b.left,
              top: b.top,
              width: b.w,
              height: b.h,
              background: `radial-gradient(closest-side, ${b.color} 0%, transparent 100%)`,
              filter: 'blur(10px)',
              animation: `${b.anim} ${b.duration}s ease-in-out infinite`,
            }}
          />
        ))}
        <span
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(90px circle at var(--mx, 50%) var(--my, 50%), rgba(190,203,255,0.70), transparent 70%)',
          }}
        />
      </span>

      {children}

      <style>{`
        .fogbtn .fogbtn-bank { animation-play-state: paused; }
        .fogbtn:hover .fogbtn-bank, .fogbtn:focus-visible .fogbtn-bank { animation-play-state: running; }
        @keyframes fogbtn-a {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30%, 18%) scale(1.15); }
          66% { transform: translate(10%, -6%) scale(0.92); }
        }
        @keyframes fogbtn-b {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-28%, -16%) scale(1.15); }
          66% { transform: translate(-8%, 8%) scale(0.92); }
        }
        @keyframes fogbtn-c {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(22%, -12%) scale(1.15); }
          66% { transform: translate(-18%, -4%) scale(0.92); }
        }
        @media (prefers-reduced-motion: reduce) {
          .fogbtn .fogbtn-bank { animation: none !important; }
        }
      `}</style>
    </Link>
  );
}
