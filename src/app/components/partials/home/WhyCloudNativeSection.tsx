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
    desc: 'Retrieval over your own documents, databases and APIs, so every answer is specific to your business and traceable to its source.',
  },
  {
    icon: Bot,
    color: '#2563EB',
    bg: '#EEF3FE',
    title: 'Agents that do the work',
    desc: 'AI agents read, decide and act across your systems — triaging requests, drafting documents and running workflows end to end.',
  },
  {
    icon: UserCheck,
    color: '#0F8B83',
    bg: '#EEF8F6',
    title: 'Humans stay in control',
    desc: 'Approval steps, guardrails and full audit trails keep people in charge of every decision that matters.',
  },
  {
    icon: ShieldCheck,
    color: '#E11D48',
    bg: '#FDEEF1',
    title: 'Secure by design',
    desc: 'Private models, identity, encryption and monitoring are built in from day one — your data never trains someone else’s model.',
  },
  {
    icon: Rocket,
    color: '#D97706',
    bg: '#FBF7E8',
    title: 'Ship AI faster',
    desc: 'AI-assisted engineering and proven agent patterns take you from use case to production in weeks, not quarters.',
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
              {benefits.map(({ title, desc, icon: Icon, color, bg }, i) => (
                <motion.div
                  key={title}
                  className="group transition-transform duration-[250ms] ease-out hover:-translate-y-[6px]"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.1 }}
                  viewport={{ once: true, margin: '-40px' }}
                >
                  <span
                    className="grid h-12 w-12 place-items-center rounded-[14px] transition-[filter] duration-[250ms] ease-out group-hover:brightness-[0.97]"
                    style={{ background: bg }}
                  >
                    <Icon style={{ color, height: 24, width: 24 }} strokeWidth={1.7} aria-hidden="true" />
                  </span>

                  <h3
                    className="text-[#101828] transition-colors duration-[250ms] ease-out group-hover:text-black"
                    style={{ fontSize: 19, fontWeight: 600, lineHeight: 1.25, marginTop: 18, marginBottom: 0 }}
                  >
                    {title}
                  </h3>

                  <div style={{ height: 1, background: 'rgba(15,23,42,.08)', marginTop: 18, marginBottom: 18 }} />

                  <p className="m-0 text-[#475467]" style={{ fontSize: 14.5, fontWeight: 400, lineHeight: 1.55 }}>
                    {desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
