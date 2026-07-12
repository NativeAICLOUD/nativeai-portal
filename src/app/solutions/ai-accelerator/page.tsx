'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Constants } from '@/Constants';

const MONO: React.CSSProperties = { fontFamily: "'JetBrains Mono', monospace" };

const lgCard: React.CSSProperties = {
  background: 'rgba(255,255,255,0.52)',
  backdropFilter: 'blur(40px) saturate(190%)',
  WebkitBackdropFilter: 'blur(40px) saturate(190%)',
  border: '1px solid rgba(255,255,255,0.84)',
  boxShadow: '0 4px 28px rgba(180,80,20,0.08), inset 0 1px 0 rgba(255,255,255,0.95)',
};

const lgDark: React.CSSProperties = {
  background: 'rgba(255,255,255,0.07)',
  backdropFilter: 'blur(40px) saturate(160%)',
  WebkitBackdropFilter: 'blur(40px) saturate(160%)',
  border: '1px solid rgba(255,255,255,0.12)',
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.18)',
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

function Blobs({ items }: { items: { w: number; h: number; top?: string; left?: string; right?: string; bottom?: string; color: string; delay: string }[] }) {
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
      {items.map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: b.w, height: b.h,
            top: b.top, left: b.left, right: b.right, bottom: b.bottom,
            background: `radial-gradient(circle, ${b.color} 0%, transparent 68%)`,
            filter: 'blur(64px)',
            animation: `pulse-blob 6s ease-in-out ${b.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
}

function Pill({ label, dark = false }: { label: string; dark?: boolean }) {
  return (
    <div
      className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-6"
      style={{ background: 'rgba(232,154,120,0.10)', border: '1px solid rgba(232,154,120,0.28)' }}
    >
      <span
        className="text-[11px] font-bold tracking-widest uppercase"
        style={{ ...MONO, color: dark ? 'rgba(232,154,120,0.85)' : '#b8714e' }}
      >
        {label}
      </span>
    </div>
  );
}

/* ── DATA ── */

const benefits = [
  {
    title: 'Expert AI use case identification',
    body: 'We help you cut through the noise — identifying AI use cases that are realistic, impactful, and aligned with your actual business goals.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e89a78" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><circle cx="12" cy="12" r="8" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
      </svg>
    ),
  },
  {
    title: 'End-to-end technical support',
    body: 'From first discovery workshop to production deployment — hands-on engineering guidance at every step, with no deep in-house AI expertise required.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A90D9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Production-grade PoC delivery',
    body: 'Every proof of concept is built with production in mind — scalable Azure services, proper architecture, no throwaway prototypes.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6ECFB0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: 'AI Landing Zone infrastructure',
    body: 'We design and deploy a proven Azure AI Landing Zone — secure, cost-efficient, and compliant from day one.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9b7fe8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: 'Data governance & compliance',
    body: 'Privacy, compliance, and security are baked into every solution from the start — not bolted on afterwards.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e89a78" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Long-term scalability guidance',
    body: 'Post-deployment, we provide an advice report covering how to run, optimise, and scale your AI solutions over time.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A90D9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
  },
];

const modules = [
  {
    tag: 'Module 01',
    title: 'Use Case Discovery & PoC',
    body: 'We run focused discovery workshops to identify your most impactful AI use cases and validate them rapidly. Every PoC is designed for scalability — built on Azure OpenAI, Cognitive Services, and Document Intelligence with production architecture from day one.',
    items: [
      'AI use case workshop & prioritisation',
      'Azure OpenAI & Cognitive Services integration',
      'PoC delivery with production-ready architecture',
      'Business value measurement & KPI definition',
    ],
    accent: '#e89a78',
  },
  {
    tag: 'Module 02',
    title: 'AI Infrastructure & Landing Zone',
    body: 'We design and implement a proven Azure AI Landing Zone that gives your teams a secure, governed, and cost-optimised foundation — so AI solutions can be deployed and scaled without starting from scratch each time.',
    items: [
      'Azure AI Landing Zone design & deployment',
      'Private networking & identity configuration',
      'Cost guardrails & budget alerting',
      'Monitoring, logging & observability setup',
    ],
    accent: '#4A90D9',
  },
  {
    tag: 'Module 03',
    title: 'Governance, Privacy & Compliance',
    body: 'Every AI solution we deliver respects your data residency requirements and regulatory obligations. We implement role-based access, audit logging, responsible AI policies, and data classification — giving you complete confidence in your AI operations.',
    items: [
      'Responsible AI policy & guardrails',
      'Data classification & residency controls',
      'RBAC, audit logging & access governance',
      'GDPR / compliance alignment review',
    ],
    accent: '#6ECFB0',
  },
];

const phases = [
  {
    number: '01',
    title: 'Discover',
    body: 'A structured workshop to understand your business goals, identify realistic AI use cases, and produce a prioritised roadmap — with clear criteria for what success looks like before any code is written.',
    duration: '1–2 weeks',
  },
  {
    number: '02',
    title: 'Build',
    body: 'We develop your proof of concept using the right Azure AI services, deploying on a governed Landing Zone. Parallel validation ensures every PoC is production-aligned before handover.',
    duration: '3–6 weeks',
  },
  {
    number: '03',
    title: 'Scale',
    body: 'Post-PoC, we help you move from validated concept to live product — expanding AI adoption across teams, optimising costs, and providing ongoing advisory to keep your AI running efficiently.',
    duration: 'Ongoing',
  },
];

const pillars = [
  {
    title: 'Your data stays yours',
    body: 'We configure Azure AI services with private endpoints and your own data residency requirements. Your data never leaves your tenant and is never used to train shared models.',
    accent: '#e89a78',
  },
  {
    title: 'Compliance from day one',
    body: 'Governance and compliance measures — GDPR alignment, audit trails, role-based access — are embedded into the architecture from the very beginning, not added later.',
    accent: '#4A90D9',
  },
  {
    title: 'Responsible AI by design',
    body: 'We implement Microsoft\'s Responsible AI principles: fairness, reliability, transparency, and accountability — with guardrails that enforce safe outputs across every use case.',
    accent: '#6ECFB0',
  },
];

const faqs = [
  {
    q: 'What Azure AI services do you work with?',
    a: 'We work across the full Azure AI portfolio — Azure OpenAI Service, Azure AI Search, Document Intelligence, Language Service, Azure Machine Learning, and Azure Cognitive Services. We select the right service for each use case rather than defaulting to one.',
  },
  {
    q: 'Do we need an in-house AI team to get started?',
    a: 'No. The AI Accelerator is specifically designed for teams without deep in-house AI expertise. We provide the engineering, architecture, and guidance — your team focuses on the product and business outcomes.',
  },
  {
    q: 'How long does a typical PoC take to deliver?',
    a: 'Most proofs of concept are delivered in 3–6 weeks after the discovery phase. The timeline depends on integration complexity and data readiness — we give you a fixed estimate after the discovery workshop.',
  },
  {
    q: 'How do you handle data privacy and GDPR compliance?',
    a: 'All AI solutions are deployed within your own Azure tenant using private networking. We configure data residency, access controls, and audit logging to meet your compliance requirements from day one — no data is shared externally.',
  },
  {
    q: "What if our systems aren't fully on Azure yet?",
    a: 'No problem. We can connect your existing on-premises or multi-cloud systems to Azure using our Cloud Native development and migration capabilities, so you can start adopting AI even before a full migration is complete.',
  },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-[#f0e8df] last:border-0">
      <button className="w-full flex items-center justify-between gap-4 py-5 text-left group" onClick={onToggle}>
        <span className="text-base font-semibold text-[#0a0e1a] leading-snug group-hover:text-[#e89a78] transition-colors duration-200">
          {q}
        </span>
        <span
          className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200"
          style={{ background: isOpen ? '#e89a78' : 'rgba(232,154,120,0.10)', border: '1px solid rgba(232,154,120,0.25)' }}
        >
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            {isOpen
              ? <path d="M1 6h10" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
              : <path d="M6 1v10M1 6h10" stroke="#e89a78" strokeWidth="1.6" strokeLinecap="round" />
            }
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-[#6b7280] text-sm leading-relaxed pb-5 pr-10">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── PAGE ── */

export default function AIAcceleratorPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <style>{`
        @keyframes pulse-blob {
          0%, 100% { opacity: 0.65; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.06); }
        }
      `}</style>

      <div>

        {/* ── HERO ── */}
        <section
          className="relative overflow-hidden min-h-[92svh] flex items-center"
          style={{ background: 'linear-gradient(160deg, #fff8f3 0%, #fef2e8 45%, #f5f0ff 100%)' }}
        >
          <Blobs items={[
            { w: 850, h: 850, top: '-20%',    left: '-15%',  color: 'rgba(232,154,120,0.46)', delay: '0s'   },
            { w: 650, h: 650, top: '5%',      right: '-12%', color: 'rgba(155,127,232,0.28)', delay: '1.5s' },
            { w: 500, h: 500, bottom: '-15%', left: '30%',   color: 'rgba(110,207,176,0.24)', delay: '3s'   },
          ]} />

          <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 pt-44 pb-28">
            <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: 'easeOut' }}>

              <Pill label="AI Accelerator" />

              <div className="flex flex-col lg:flex-row lg:items-center gap-16 xl:gap-20">

                {/* Left — text */}
                <div className="flex-1 min-w-0">
                  <h1
                    className="font-extrabold text-[#0a0e1a] leading-[0.96] mb-6"
                    style={{ fontSize: 'clamp(44px, 6.8vw, 86px)', letterSpacing: '-0.045em' }}
                  >
                    Build AI solutions<br />
                    <span style={{
                      background: 'linear-gradient(135deg, #e89a78 0%, #f0a060 50%, #9b7fe8 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>
                      with confidence.
                    </span>
                  </h1>

                  <motion.p
                    className="text-[#6b7280] text-xl leading-[1.75] max-w-[500px] mb-10"
                    initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75, delay: 0.15, ease: 'easeOut' }}
                  >
                    Adopt Azure AI services quickly and cost-efficiently — without the compliance risk. We guide you from use case to proof of concept to production, following best practices and embedding governance from day one.
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-3"
                    initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75, delay: 0.27, ease: 'easeOut' }}
                  >
                    <Link
                      href={Constants.PAGES.SCHEDULE_CALL}
                      className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-[0.925rem] font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                      style={{ background: '#0a0e1a', boxShadow: '0 6px 22px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.07)' }}
                    >
                      Talk to our Experts
                    </Link>
                    <a
                      href="#modules"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[0.925rem] font-semibold text-[#0a0e1a] border border-[#e5e7eb] hover:border-[#e89a78] transition-colors duration-200"
                    >
                      Explore the Approach
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </motion.div>
                </div>

                {/* Right — stat card */}
                <motion.div
                  className="lg:w-[310px] w-full shrink-0"
                  initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9, delay: 0.18, ease: 'easeOut' }}
                >
                  <div className="rounded-3xl p-7" style={lgCard}>
                    <p className="text-[10px] font-bold text-[#b8714e] tracking-widest uppercase mb-6" style={MONO}>
                      What you get
                    </p>
                    <div className="grid grid-cols-2 gap-5">
                      {[
                        { value: '3',     label: 'Core modules'      },
                        { value: '4wk',   label: 'Avg. PoC delivery' },
                        { value: '100%',  label: 'Data stays yours'  },
                        { value: '0',     label: 'Vendor lock-in'    },
                      ].map((s) => (
                        <div key={s.label} className="flex flex-col gap-1">
                          <span className="text-[2.4rem] font-extrabold text-[#0a0e1a] leading-none" style={{ letterSpacing: '-0.04em' }}>{s.value}</span>
                          <span className="text-xs text-[#9ca3af] font-medium mt-1">{s.label}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-5 border-t border-[#f0e8df]">
                      <p className="text-xs text-[#9ca3af] leading-relaxed">
                        Use case to production.<br />
                        Secure, compliant, and built to scale.
                      </p>
                    </div>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </div>
        </section>

        {/* ── BENEFITS ── */}
        <section
          className="relative overflow-hidden py-28"
          style={{ background: 'linear-gradient(180deg, #fff8f3 0%, #fef6f0 100%)' }}
        >
          <Blobs items={[
            { w: 600, h: 600, top: '-8%', right: '-8%', color: 'rgba(155,127,232,0.14)', delay: '0s' },
          ]} />
          <div className="relative max-w-7xl mx-auto px-6 md:px-12">

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="mb-16">
              <Pill label="Why AI Accelerator" />
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a0e1a] leading-[1.06]" style={{ letterSpacing: '-0.035em' }}>
                AI that actually works<br />
                <span className="text-[#e89a78]">for your business.</span>
              </h2>
              <p className="text-[#6b7280] text-lg mt-5 max-w-[520px]">
                We reduce the complexity, risk, and guesswork of AI adoption — so you can focus on outcomes, not infrastructure.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  variants={fadeUp} initial="hidden" whileInView="show"
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: i * 0.07 }}
                  className="rounded-2xl p-7"
                  style={lgCard}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: 'rgba(232,154,120,0.08)', border: '1px solid rgba(232,154,120,0.18)' }}
                  >
                    {b.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#0a0e1a] mb-2.5">{b.title}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">{b.body}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* ── MODULES ── */}
        <section id="modules" className="relative overflow-hidden py-28 bg-[#0a0e1a]">
          <Blobs items={[
            { w: 700, h: 700, top: '-10%',    left: '-10%',  color: 'rgba(232,154,120,0.12)', delay: '0s'   },
            { w: 600, h: 600, bottom: '-10%', right: '-8%',  color: 'rgba(155,127,232,0.10)', delay: '2s'   },
          ]} />
          <div className="relative max-w-7xl mx-auto px-6 md:px-12">

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="mb-16">
              <Pill label="Our Approach" dark />
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.06]" style={{ letterSpacing: '-0.035em' }}>
                Three modules.<br />
                <span style={{
                  background: 'linear-gradient(135deg, #e89a78 0%, #f0a060 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                  One complete program.
                </span>
              </h2>
              <p className="text-white/50 text-lg mt-5 max-w-[480px]">
                Pick all three or start with the module that moves the needle most for your team right now.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {modules.map((m, i) => (
                <motion.div
                  key={m.tag}
                  variants={fadeUp} initial="hidden" whileInView="show"
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl p-8 flex flex-col gap-6"
                  style={{ ...lgDark, borderColor: `${m.accent}28` }}
                >
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase mb-4 block" style={{ ...MONO, color: m.accent }}>
                      {m.tag}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3">{m.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{m.body}</p>
                  </div>
                  <div className="flex flex-col gap-3 pt-2 border-t border-white/[0.07] mt-auto">
                    {m.items.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span
                          className="mt-0.5 w-4 h-4 rounded-full shrink-0 flex items-center justify-center"
                          style={{ background: `${m.accent}1a` }}
                        >
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <path d="M1.5 4L3.5 6L6.5 2" stroke={m.accent} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span className="text-white/55 text-xs leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* ── DELIVERY PHASES ── */}
        <section
          className="relative overflow-hidden py-28"
          style={{ background: 'linear-gradient(180deg, #fef6f0 0%, #fff8f3 100%)' }}
        >
          <div className="relative max-w-7xl mx-auto px-6 md:px-12">

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="mb-16">
              <Pill label="How we deliver" />
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a0e1a] leading-[1.06]" style={{ letterSpacing: '-0.035em' }}>
                From idea to production.<br />
                <span className="text-[#e89a78]">In three clear steps.</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {phases.map((p, i) => (
                <motion.div
                  key={p.number}
                  variants={fadeUp} initial="hidden" whileInView="show"
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: i * 0.12 }}
                  className="relative flex flex-col"
                >
                  {i < phases.length - 1 && (
                    <div
                      className="hidden lg:block absolute"
                      style={{ top: 32, left: 'calc(100% + 20px)', width: 40, height: 1, background: 'rgba(232,154,120,0.25)' }}
                    />
                  )}
                  <span
                    className="block text-[5rem] font-extrabold leading-none mb-5"
                    style={{
                      ...MONO,
                      background: 'linear-gradient(135deg, #e89a78, #f0c090)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                      letterSpacing: '-0.05em',
                    }}
                  >
                    {p.number}
                  </span>
                  <h3 className="text-xl font-bold text-[#0a0e1a] mb-3">{p.title}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed mb-5 flex-1">{p.body}</p>
                  <span
                    className="inline-flex items-center self-start px-3.5 py-1 rounded-full text-xs font-semibold"
                    style={{ ...MONO, background: 'rgba(232,154,120,0.10)', color: '#c4743c', border: '1px solid rgba(232,154,120,0.28)' }}
                  >
                    {p.duration}
                  </span>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* ── DATA & GOVERNANCE ── */}
        <section className="relative overflow-hidden py-28 bg-[#0a0e1a]">
          <Blobs items={[
            { w: 600, h: 600, top: '10%',     right: '-8%',  color: 'rgba(110,207,176,0.09)', delay: '0s'   },
            { w: 550, h: 550, bottom: '-12%', left: '-6%',   color: 'rgba(232,154,120,0.09)', delay: '2s'   },
          ]} />
          <div className="relative max-w-7xl mx-auto px-6 md:px-12">

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="mb-14">
              <Pill label="Data & Governance" dark />
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.06]" style={{ letterSpacing: '-0.035em' }}>
                Innovate freely.<br />
                <span style={{
                  background: 'linear-gradient(135deg, #e89a78 0%, #f0a060 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                  Stay in control.
                </span>
              </h2>
              <p className="text-white/50 text-lg mt-5 max-w-[480px]">
                Security, privacy, and compliance are never an afterthought — they are the foundation every solution is built on.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  variants={fadeUp} initial="hidden" whileInView="show"
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl p-7"
                  style={{ ...lgDark, borderColor: `${p.accent}28` }}
                >
                  <div
                    className="w-2 h-2 rounded-full mb-5"
                    style={{ background: p.accent }}
                  />
                  <h3 className="text-base font-bold text-white mb-3">{p.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{p.body}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* ── FAQ ── */}
        <section
          className="relative overflow-hidden py-28"
          style={{ background: 'linear-gradient(180deg, #fff8f3 0%, #fef6f0 100%)' }}
        >
          <div className="relative max-w-3xl mx-auto px-6 md:px-12">

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="mb-14 text-center">
              <Pill label="FAQ" />
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a0e1a] leading-[1.06]" style={{ letterSpacing: '-0.035em' }}>
                Common questions
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
              className="rounded-3xl px-8 py-2"
              style={lgCard}
            >
              {faqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  q={faq.q}
                  a={faq.a}
                  isOpen={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </motion.div>

          </div>
        </section>


      </div>
    </>
  );
}
