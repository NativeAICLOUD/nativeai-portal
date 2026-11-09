'use client';

import { motion } from 'framer-motion';
import { CONTAINER, Eyebrow, SECTION_PB, H2, BODY, FeatureCard } from './HomeUI';

const benefits = [
  {
    icon: '/img/faster-development.svg',
    color: '#2563EB',
    bg: 'rgba(37,99,235,0.08)',
    title: 'Agents that do the work',
    desc: 'AI agents read, decide and act across your systems — triaging requests, drafting documents and running workflows end to end.',
  },
  {
    icon: '/img/scalability-peach.svg',
    color: '#7C3AED',
    bg: 'rgba(124,58,237,0.08)',
    title: 'Grounded in your data',
    desc: 'Retrieval over your own documents, databases and APIs, so every answer is specific to your business and traceable to its source.',
  },
  {
    icon: '/img/continue-integratie-en-delivery.svg',
    color: '#0F8B83',
    bg: 'rgba(15,139,131,0.08)',
    title: 'Humans stay in control',
    desc: 'Approval steps, guardrails and full audit trails keep people in charge of every decision that matters.',
  },
  {
    icon: '/img/cost-effectiveness.svg',
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.08)',
    title: 'Ship AI faster',
    desc: 'AI-assisted engineering and proven agent patterns take you from use case to production in weeks, not quarters.',
  },
  {
    icon: '/img/improved-security.svg',
    color: '#E11D48',
    bg: 'rgba(225,29,72,0.08)',
    title: 'Secure by design',
    desc: 'Private models, identity, encryption and monitoring are built in from day one — your data never trains someone else’s model.',
  },
];

/* Five cards: 2 + 3 on desktop (6-col grid) and 2 + 2 + 1-wide on tablet,
   so no row ever ends with a lone orphan card. */
const spanFor = (i: number, total: number) =>
  [
    i < 2 ? 'lg:col-span-3' : 'lg:col-span-2',
    i === total - 1 && total % 2 === 1 ? 'sm:col-span-2' : '',
  ].join(' ');

export default function WhyCloudNativeSection() {
  return (
    <section className="font-switzer bg-white">
      <div className={`${CONTAINER} ${SECTION_PB}`}>

      {/* Section header */}
      <motion.div
        className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-60px' }}
      >
        <div>
          <div className="mb-4"><Eyebrow>Built for the AI era</Eyebrow></div>
          <h2 className={`max-w-xl ${H2}`}>
            Engineering Your Way with Agentic AI
          </h2>
          <p className={`mt-4 max-w-xl ${BODY}`}>
            Software that doesn&apos;t just run your processes — it takes them on. We design and build
            agentic AI that works inside your systems, alongside your team.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {benefits.map(({ icon, color, bg, title, desc }, i) => (
          <motion.div
            key={title}
            className={spanFor(i, benefits.length)}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.08 }}
            viewport={{ once: true, margin: '-40px' }}
          >
            <FeatureCard icon={icon} iconColor={color} iconBg={bg} title={title} desc={desc} iconOutside hoverTint revealOnHover />
          </motion.div>
        ))}
      </div>

      </div>
    </section>
  );
}
