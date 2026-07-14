'use client';

import { motion } from 'framer-motion';

export default function MissionSection() {
  return (
    <section className="relative bg-[#0a0e1a] border-y border-white/[0.07] overflow-hidden py-24 sm:py-32 lg:py-40">

      {/* Large decorative ring — intercept.cloud style */}
      <div
        className="pointer-events-none absolute right-[-18%] top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
        style={{
          border: '1px solid rgba(255,255,255,0.055)',
          boxShadow: 'inset 0 0 80px rgba(232,154,120,0.04)',
        }}
      />
      <div
        className="pointer-events-none absolute right-[-10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
        style={{
          border: '1px solid rgba(255,255,255,0.04)',
        }}
      />
      <div
        className="pointer-events-none absolute right-[-4%] top-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full"
        style={{
          border: '1px solid rgba(232,154,120,0.1)',
          boxShadow: '0 0 60px rgba(232,154,120,0.05)',
        }}
      />

      {/* Faint warm glow left */}
      <div
        className="pointer-events-none absolute -left-40 top-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full"
        style={{ background: 'radial-gradient(ellipse, rgba(232,154,120,0.09) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-[11px] uppercase tracking-[0.2em] text-white/25 font-medium mb-10 sm:mb-14"
        >
          Our mission
        </motion.p>

        {/* Statement */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col gap-1"
        >
          {/* Line 1 */}
          <p className="text-[clamp(2.6rem,6vw,5.5rem)] font-extrabold leading-[1.08] tracking-tight text-white">
            We impact{' '}
            <span
              className="italic font-extrabold"
              style={{ WebkitTextStroke: '1px rgba(232,154,120,0.7)', color: 'transparent' }}
            >
              lives
            </span>
          </p>

          {/* Line 2 */}
          <p className="text-[clamp(2.6rem,6vw,5.5rem)] font-light leading-[1.08] tracking-tight text-white/40 italic">
            by empowering software
          </p>

          {/* Line 3 */}
          <p className="text-[clamp(2.6rem,6vw,5.5rem)] font-extrabold leading-[1.08] tracking-tight text-white">
            organisations to build
          </p>

          {/* Line 4 */}
          <p className="text-[clamp(2.6rem,6vw,5.5rem)] font-extrabold leading-[1.08] tracking-tight bg-gradient-to-r from-[#f0a060] via-[#e89a78] to-[#d4845c] bg-clip-text text-transparent">
            better software.
          </p>

          {/* Line 5 */}
          <p className="text-[clamp(1.5rem,3vw,2.6rem)] font-light leading-[1.2] tracking-tight text-white/30 mt-2 italic">
            For a better tomorrow.
          </p>
        </motion.div>

        {/* Bottom rule + tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 mt-16 sm:mt-20"
        >
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-[#e89a78]/50 to-transparent" />
          <p className="text-[13px] text-white/25 font-medium">
            NativeCloud — AI &amp; Cloud, built for impact
          </p>
        </motion.div>

      </div>
    </section>
  );
}
