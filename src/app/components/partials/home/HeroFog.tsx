'use client';

import { motion, useReducedMotion } from 'framer-motion';

/* Hero background — the soft periwinkle glow (rgba(190,203,255)) that used to sit
   still at the bottom-left, now as slow fog banks rolling along the bottom of the
   hero down to the gradient divider. Place inside a `relative overflow-hidden` hero,
   behind the content (content uses z-10). Static under prefers-reduced-motion.
   `cover` spreads the fog over the whole hero instead of just the bottom edge. */
type Bank = { left: string; bottom: string; w: string; h: string; color: string; x: string[]; y: string[]; duration: number };

const BANKS: Bank[] = [
  // main bank — where the original glow sat (15% / bottom)
  { left: '-12%', bottom: '-30%', w: '62%', h: '95%', color: 'rgba(190,203,255,0.62)', x: ['0%', '28%', '10%', '0%'], y: ['0%', '-12%', '5%', '0%'], duration: 20 },
  // drifts across the middle of the bottom edge
  { left: '25%', bottom: '-40%', w: '55%', h: '80%', color: 'rgba(190,203,255,0.45)', x: ['0%', '-28%', '26%', '0%'], y: ['0%', '-12%', '-3%', '0%'], duration: 25 },
  // faint lavender wisp that wanders further right
  { left: '50%', bottom: '-35%', w: '50%', h: '75%', color: 'rgba(205,212,255,0.40)', x: ['0%', '28%', '-22%', '0%'], y: ['0%', '-8%', '-15%', '0%'], duration: 29 },
];

// Extra banks for `cover` — same colours, drifting through the middle and top of the hero
const COVER_BANKS: Bank[] = [
  { left: '-20%', bottom: '30%', w: '60%', h: '90%', color: 'rgba(190,203,255,0.45)', x: ['0%', '22%', '8%', '0%'], y: ['0%', '10%', '-6%', '0%'], duration: 34 },
  { left: '35%', bottom: '45%', w: '55%', h: '85%', color: 'rgba(205,212,255,0.40)', x: ['0%', '-18%', '14%', '0%'], y: ['0%', '-8%', '6%', '0%'], duration: 41 },
  { left: '65%', bottom: '10%', w: '50%', h: '90%', color: 'rgba(190,203,255,0.42)', x: ['0%', '-24%', '-8%', '0%'], y: ['0%', '12%', '-4%', '0%'], duration: 29 },
];

export default function HeroFog({ cover = false, className = '' }: { cover?: boolean; className?: string }) {
  const reduce = useReducedMotion();
  const banks = cover ? [...BANKS, ...COVER_BANKS] : BANKS;
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
      {banks.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: b.left,
            bottom: b.bottom,
            width: b.w,
            height: b.h,
            background: `radial-gradient(closest-side, ${b.color} 0%, rgba(190,203,255,0) 100%)`,
            filter: 'blur(48px)',
          }}
          animate={reduce ? undefined : { x: b.x, y: b.y, scale: [1, 1.12, 0.94, 1], opacity: [0.85, 1, 0.7, 0.85] }}
          transition={{ duration: b.duration, ease: 'easeInOut', repeat: Infinity }}
        />
      ))}
    </div>
  );
}
