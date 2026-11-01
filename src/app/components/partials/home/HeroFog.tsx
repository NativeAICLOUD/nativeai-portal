'use client';

import { motion, useReducedMotion } from 'framer-motion';

/* Hero background — the soft periwinkle glow (rgba(190,203,255)) that used to sit
   still at the bottom-left, now as slow fog banks rolling along the bottom of the
   hero down to the gradient divider. Place inside a `relative overflow-hidden` hero,
   behind the content (content uses z-10). Static under prefers-reduced-motion. */
const BANKS = [
  // main bank — where the original glow sat (15% / bottom)
  { left: '-12%', bottom: '-30%', w: '62%', h: '95%', color: 'rgba(190,203,255,0.62)', x: ['0%', '18%', '6%', '0%'], y: ['0%', '-8%', '4%', '0%'], duration: 24 },
  // drifts across the middle of the bottom edge
  { left: '25%', bottom: '-40%', w: '55%', h: '80%', color: 'rgba(190,203,255,0.45)', x: ['0%', '-20%', '22%', '0%'], y: ['0%', '-10%', '-2%', '0%'], duration: 31 },
  // faint lavender wisp that wanders further right
  { left: '50%', bottom: '-35%', w: '50%', h: '75%', color: 'rgba(205,212,255,0.40)', x: ['0%', '25%', '-15%', '0%'], y: ['0%', '-6%', '-14%', '0%'], duration: 37 },
];

export default function HeroFog() {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {BANKS.map((b, i) => (
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
          animate={reduce ? undefined : { x: b.x, y: b.y, scale: [1, 1.1, 0.95, 1], opacity: [0.9, 1, 0.75, 0.9] }}
          transition={{ duration: b.duration, ease: 'easeInOut', repeat: Infinity }}
        />
      ))}
    </div>
  );
}
