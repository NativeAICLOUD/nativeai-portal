'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

/* Drifting blue fog patches layered over the illustration — each follows its own slow loop. */
const FOG = [
  { left: '-10%', top: '35%', size: '55%', color: 'rgba(120,160,255,0.45)', x: ['0%', '18%', '30%', '10%', '0%'], y: ['0%', '-12%', '6%', '14%', '0%'], duration: 14 },
  { left: '5%', top: '55%', size: '45%', color: 'rgba(100,145,250,0.35)', x: ['0%', '25%', '45%', '20%', '0%'], y: ['0%', '8%', '-10%', '-4%', '0%'], duration: 18 },
  { left: '-15%', top: '5%', size: '40%', color: 'rgba(140,175,255,0.30)', x: ['0%', '15%', '35%', '15%', '0%'], y: ['0%', '20%', '35%', '10%', '0%'], duration: 22 },
];

/* The orange AI infinity ribbon on its airy blue/peach gradient (16:9).
   It comes into focus on mount (blur → sharp, slight zoom-out), then drifts gently
   while blue fog rolls across it. Shared by the AI readiness promo card and AI pages. */
export default function AIRibbonVisual({
  className = 'rounded-xl',
  sizes = '360px',
  delay = 0.25,
  priority = false,
}: {
  className?: string;
  sizes?: string;
  /** Seconds before the focus-in starts. */
  delay?: number;
  priority?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <div className={`relative aspect-[16/9] w-full overflow-hidden border border-[#e6e6e6] ${className}`} aria-hidden="true">
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { opacity: 0, scale: 1.12, filter: 'blur(10px)' }}
        animate={reduce ? undefined : { opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ delay, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="absolute inset-0"
          animate={reduce ? undefined : { scale: [1, 1.04, 1], rotate: [0, -1.5, 0] }}
          transition={{ delay: delay + 0.95, duration: 6, ease: 'easeInOut', repeat: Infinity }}
        >
          <Image src="/img/ai-infinity-ribbon.png" alt="" fill sizes={sizes} priority={priority} className="object-cover" />
        </motion.div>
      </motion.div>
      {/* Blue fog — soft blurred patches that slowly roll across the image's baked-in blue haze.
          multiply keeps them reading as tint over the white backdrop instead of a flat overlay. */}
      {FOG.map((f, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute rounded-full mix-blend-multiply"
          style={{
            left: f.left,
            top: f.top,
            width: f.size,
            height: f.size,
            background: `radial-gradient(circle, ${f.color} 0%, rgba(147,180,255,0) 70%)`,
            filter: 'blur(14px)',
          }}
          initial={{ opacity: 0 }}
          animate={reduce ? { opacity: 1 } : { opacity: [0, 1, 0.75, 1, 0], x: f.x, y: f.y, scale: [1, 1.18, 0.95, 1.1, 1] }}
          transition={reduce ? { duration: 0.6 } : { delay: delay + 0.35 + i * 1.4, duration: f.duration, ease: 'easeInOut', repeat: Infinity }}
        />
      ))}
    </div>
  );
}
