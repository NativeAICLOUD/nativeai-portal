'use client';

import { motion } from 'framer-motion';
import {
  Compass, PenTool, Code2, Rocket, Sparkles, Lightbulb,
  Users, FolderKanban, Handshake,
  type LucideIcon,
} from 'lucide-react';
import { CONTAINER, Eyebrow, SECTION_Y, SECTION_PB, H2, H3, BODY, FeatureCard } from './HomeUI';

/* One deep tone per stage on a soft solid tile. Discovery reuses the
   "Discovery Session" gold/cream pair from WhatWeOfferSection; the rest are
   the About page's engagement-card family plus indigo. */
const capabilities: { title: string; desc: string; icon: LucideIcon; color: string; bg: string }[] = [
  { title: 'Discovery',   icon: Compass,   color: '#A16207', bg: '#FBF7E8', desc: 'Workshops, audits and scoping that de-risk the build before it starts.' },
  { title: 'Design',      icon: PenTool,   color: '#7E22CE', bg: '#F6F0FC', desc: 'UX research, UI design and prototyping your users will actually enjoy.' },
  { title: 'Development', icon: Code2,     color: '#0369A1', bg: '#EEF6FB', desc: 'Senior .NET, React and cloud-native engineering in two-week sprints.' },
  { title: 'Delivery',    icon: Rocket,    color: '#BE123C', bg: '#FDF0F3', desc: 'CI/CD, automated testing and zero-downtime releases — shipped with discipline.' },
  { title: 'Data & AI',   icon: Sparkles,  color: '#4338CA', bg: '#F0F0FB', desc: 'LLMs, RAG pipelines, agents and analytics built into your product core.' },
  { title: 'Consultancy', icon: Lightbulb, color: '#0F766E', bg: '#EEF8F6', desc: 'Architecture reviews, technical leadership and pragmatic advice.' },
];

/* Stage card with a gentle hover: a small lift, a faint border in the stage
   colour, a very soft corner wash, the icon tile nudging up slightly and the
   step number picking up the stage colour. */
function StageCard({ step, title, desc, icon: Icon, color, bg }: { step: number; title: string; desc: string; icon: LucideIcon; color: string; bg: string }) {
  return (
    <div
      tabIndex={0}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#E6E6E6] bg-white p-6 outline-none transition-[transform,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-[var(--cb)] focus-visible:-translate-y-0.5 focus-visible:border-[var(--cb)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      style={{ '--c': color, '--cb': `${color}33` } as React.CSSProperties}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        style={{ background: `radial-gradient(120% 90% at 0% 0%, ${color}0A 0%, transparent 55%)` }}
      />

      <div className="relative mb-5 flex items-start justify-between">
        {/* Same tile as "Discovery Session": 48px, 14px radius, soft solid bg, 24px glyph. */}
        <span
          className="grid h-12 w-12 place-items-center rounded-[14px] bg-[var(--bg)] text-[var(--c)] transition-transform duration-300 ease-out group-hover:scale-105 group-focus-visible:scale-105 motion-reduce:group-hover:scale-100"
          style={{ '--bg': bg } as React.CSSProperties}
        >
          <Icon className="h-6 w-6" strokeWidth={1.7} aria-hidden="true" />
        </span>
        <span className="text-[13px] font-medium tabular-nums text-[#D1D5DB] transition-colors duration-300 group-hover:text-[var(--c)] group-focus-visible:text-[var(--c)]">
          {String(step).padStart(2, '0')}
        </span>
      </div>

      <h3 className={`relative m-0 ${H3}`}>{title}</h3>
      <p className={`relative mt-2 flex-1 ${BODY}`}>{desc}</p>
    </div>
  );
}

/* One colour per engagement model, matching its card on the About page:
   Team Augmentation crimson · Project-Based sky blue · Digital Partner purple. */
const MODEL_TILE = [
  { color: '#BE123C', bg: 'rgba(190,18,60,0.08)' },
  { color: '#0369A1', bg: 'rgba(3,105,161,0.08)' },
  { color: '#7E22CE', bg: 'rgba(126,34,206,0.08)' },
];

const collaborationModels: { title: string; desc: string; icon: LucideIcon }[] = [
  { title: 'Blended teams',               icon: Users,       desc: 'Our engineers embed in your existing team — filling skill gaps and adding senior capacity exactly where you need it.' },
  { title: 'Project-based collaboration', icon: FolderKanban, desc: 'A defined scope, a dedicated team and end-to-end ownership — from kickoff to production handover.' },
  { title: 'Digital partner',             icon: Handshake,   desc: 'A long-term partnership covering build, run and evolve — your extended engineering department.' },
];

export default function DeliverySpectrumSection() {
  return (
    <div className="font-switzer">

      {/* ── End-to-end capability ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="mb-4"><Eyebrow>Full delivery spectrum</Eyebrow></div>
            <h2 className={`m-0 max-w-[560px] ${H2}`}>
              Everything your product needs to move forward.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {capabilities.map(({ title, desc, icon, color, bg }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: (i % 3) * 0.1 }}
                viewport={{ once: true, margin: '-40px' }}
              >
                <StageCard step={i + 1} title={title} desc={desc} icon={icon} color={color} bg={bg} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Collaboration models ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} ${SECTION_PB}`}>
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="mb-4"><Eyebrow>How we work together</Eyebrow></div>
            <h2 className={`m-0 max-w-[560px] ${H2}`}>
              Three ways to work with us.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {collaborationModels.map(({ title, desc, icon }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: (i % 3) * 0.1 }}
                viewport={{ once: true, margin: '-40px' }}
              >
                <FeatureCard icon={icon} iconColor={MODEL_TILE[i % MODEL_TILE.length].color} iconBg={MODEL_TILE[i % MODEL_TILE.length].bg} title={title} desc={desc} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
