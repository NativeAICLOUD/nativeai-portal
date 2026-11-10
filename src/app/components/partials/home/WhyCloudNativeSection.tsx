'use client';

import { motion } from 'framer-motion';
import { Bot, Database, UserCheck, Rocket, ShieldCheck } from 'lucide-react';
import { SECTION_PB } from './HomeUI';

/* Ordered as a story: the data foundation, the agents built on it, the
   human and security guardrails around them, then the outcome — speed. */
const benefits = [
  {
    icon: Database,
    color: '#7C3AED',
    bg: '#F3EEFD',
    title: 'Grounded in your data',
  },
  {
    icon: Bot,
    color: '#2563EB',
    bg: '#EEF3FE',
    title: 'Agents that do the work',
  },
  {
    icon: UserCheck,
    color: '#0F8B83',
    bg: '#EEF8F6',
    title: 'Humans stay in control',
  },
  {
    icon: ShieldCheck,
    color: '#E11D48',
    bg: '#FDEEF1',
    title: 'Secure by design',
  },
  {
    icon: Rocket,
    color: '#D97706',
    bg: '#FBF7E8',
    title: 'Ship AI faster',
  },
];

/* Same design as "What We Offer": one large white panel on a soft outer shell */
export default function WhyCloudNativeSection() {
  return (
    <section aria-labelledby="agentic-ai-heading" className="font-switzer bg-white">
      <div className={SECTION_PB}>
        <div
          className="mx-auto w-full max-w-[1200px] rounded-[24px] p-5 sm:px-8 sm:pb-8 sm:pt-12"
          style={{ background: '#FAF8F6' }}
        >
          <div
            className="rounded-[18px] bg-white p-5 sm:p-8 lg:p-10"
            style={{ boxShadow: '0 20px 60px rgba(15,23,42,.06)' }}
          >
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-60px' }}
            >
              <p
                className="m-0 uppercase text-[#98A2B3]"
                style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.3em', marginBottom: 12 }}
              >
                Built for the AI era
              </p>
              <h2
                id="agentic-ai-heading"
                className="m-0 text-[24px] text-[#101828] sm:text-[30px] lg:text-[38px]"
                style={{ fontWeight: 700, lineHeight: 1.1, marginBottom: 32 }}
              >
                Engineering Your Way with Agentic AI
              </h2>
            </motion.div>

            {/* Columns */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-5 lg:gap-8">
              {benefits.map(({ title, icon: Icon, color, bg }, i) => (
                <motion.div
                  key={title}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[16px] border border-[#EEF0F3] bg-white p-5 transition-[transform,background-color,border-color,box-shadow] duration-300 ease-out hover:-translate-y-[6px] hover:border-transparent hover:bg-[var(--tint)] hover:shadow-[0_18px_40px_rgba(15,23,42,.08)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                  style={{ '--tint': bg, '--accent': color } as React.CSSProperties}
                  initial={{ opacity: 0, y: 28, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                  viewport={{ once: true, margin: '-40px' }}
                >
                  {/* Icon tile — fills with the accent colour and the glyph turns white on hover */}
                  <span className="relative grid h-12 w-12 place-items-center rounded-[14px]" style={{ background: bg }}>
                    <span
                      className="absolute inset-0 scale-50 rounded-[14px] opacity-0 transition-[transform,opacity] duration-300 ease-out group-hover:scale-100 group-hover:opacity-100 motion-reduce:transition-none"
                      style={{ background: color }}
                      aria-hidden="true"
                    />
                    <Icon
                      className="relative transition-[color,transform] duration-300 ease-out group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:!text-white motion-reduce:transition-none"
                      style={{ color, height: 24, width: 24 }}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </span>

                  <h3
                    className="text-[#101828] transition-colors duration-300 ease-out group-hover:text-[var(--accent)]"
                    style={{ fontSize: 19, fontWeight: 600, lineHeight: 1.25, marginTop: 18, marginBottom: 0 }}
                  >
                    {title}
                  </h3>

                  {/* Accent bar grows along the bottom edge on hover */}
                  <span
                    className="absolute bottom-0 left-0 h-[3px] w-0 transition-[width] duration-500 ease-out group-hover:w-full motion-reduce:transition-none"
                    style={{ background: color }}
                    aria-hidden="true"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
