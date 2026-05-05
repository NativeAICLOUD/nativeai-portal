'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { useState } from 'react';
import { Constants } from '@/Constants';
import ServiceFooter from '@/app/components/partials/services/ServiceFooter';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

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
      style={{
        background: dark ? 'rgba(232,154,120,0.10)' : 'rgba(232,154,120,0.10)',
        border: '1px solid rgba(232,154,120,0.28)',
      }}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
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
    title: 'Low-risk adoption pathway',
    body: 'A modular, phased approach ensures your team adopts GitHub with zero disruption and full governance from day one.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e89a78" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'End-to-end support',
    body: 'From initial assessment and discovery through full implementation and post-launch optimization — we stay with you at every step.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A90D9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.66 0 3-4.03 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4.03-3-9s1.34-9 3-9" />
      </svg>
    ),
  },
  {
    title: 'Faster implementation',
    body: 'Pre-built migration tooling, Copilot enablement playbooks, and battle-tested DevSecOps templates cut delivery time significantly.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6ECFB0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: 'Enterprise security by default',
    body: 'Secrets scanning, branch protection, CODEOWNERS, and SSO configured and governed from the very first day of implementation.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e89a78" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: 'AI-assisted development',
    body: 'GitHub Copilot integration across your IDE, PR review, and CI pipelines — measurable productivity gains from week one.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9b7fe8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v4M8 15h.01M16 15h.01" />
      </svg>
    ),
  },
  {
    title: 'Measurable outcomes',
    body: 'Every phase delivers tracked KPIs — deployment frequency, lead time, MTTR, and Copilot acceptance rates — so ROI is visible.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A90D9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
  },
];

const modules = [
  {
    tag: 'Module 01',
    title: 'GitHub Copilot Adoption',
    body: 'Enable AI pair programming across your entire engineering organization. We configure Copilot policies, integrate with your IDE and CI pipeline, and train teams to use it effectively — with measurable productivity metrics from week one.',
    items: [
      'IDE integration & policy configuration',
      'Copilot Business / Enterprise setup',
      'Team enablement & training workshops',
      'Productivity KPI dashboard & tracking',
    ],
    accent: '#4A90D9',
  },
  {
    tag: 'Module 02',
    title: 'GitHub Migration',
    body: 'Move your repositories, pipelines, and commit history from Azure DevOps, Bitbucket, or any platform to GitHub — without service interruption, data loss, or team confusion.',
    items: [
      'Repository & full history migration',
      'Azure DevOps Pipelines → GitHub Actions',
      'Permissions & governance remapping',
      'Parallel-run validation before cutover',
    ],
    accent: '#e89a78',
  },
  {
    tag: 'Module 03',
    title: 'DevSecOps & Enterprise Security',
    body: 'Strengthen your security posture with GitHub Advanced Security. We implement secret scanning, code scanning, Dependabot, branch protection, and CODEOWNERS across your entire organization.',
    items: [
      'GitHub Advanced Security enablement',
      'Secret scanning & Dependabot automation',
      'Branch protection & CODEOWNERS policies',
      'SAST / SCA pipeline integration',
    ],
    accent: '#6ECFB0',
  },
];

const phases = [
  {
    number: '01',
    title: 'Discover & Plan',
    body: 'We audit your current repositories, pipelines, and team workflows. The output is a tailored GitHub adoption roadmap, risk register, and prioritised backlog — agreed with your stakeholders before a single line changes.',
    duration: '1–2 weeks',
  },
  {
    number: '02',
    title: 'Accelerate',
    body: 'We execute the migration and configuration in phased sprints, running parallel validation before any cutover. Your development operations continue without interruption throughout.',
    duration: '2–6 weeks',
  },
  {
    number: '03',
    title: 'Innovate',
    body: 'Post-migration, we optimize GitHub Actions workflows, expand Copilot adoption across teams, and establish automated security gates — so engineering velocity compounds over time.',
    duration: 'Ongoing',
  },
];

const migrationPaths = [
  {
    from: 'Azure DevOps',
    to: 'GitHub Enterprise',
    body: 'Full migration of repos, Pipelines → Actions, Boards → Issues/Projects, and identity federation via Microsoft Entra ID.',
  },
  {
    from: 'Hybrid DevOps',
    to: '+ GitHub Actions',
    body: 'Keep Azure DevOps Boards and Artifacts while migrating source control and CI/CD to GitHub — a low-disruption hybrid path.',
  },
  {
    from: 'GitHub.com (Team)',
    to: 'GitHub Enterprise Cloud',
    body: 'Upgrade to Enterprise with SSO, audit log streaming, Advanced Security policies, and enterprise-grade support.',
  },
  {
    from: 'Bitbucket / GitLab',
    to: 'GitHub Enterprise',
    body: 'Cross-platform migration with full commit history, PR history, and complete CI pipeline reconstruction in GitHub Actions.',
  },
];

const faqs = [
  {
    q: 'How long does a typical GitHub migration take?',
    a: 'Scope varies by repository count and pipeline complexity. Most migrations run 3–8 weeks end-to-end. After our discovery phase we give you a fixed timeline with milestones before any work begins.',
  },
  {
    q: 'Will our development be disrupted during migration?',
    a: 'No. We run all migrations in parallel — new repos and pipelines are validated in GitHub before any cutover from the source system. Teams continue working on the existing platform until we flip the switch together.',
  },
  {
    q: 'Do you support GitHub Enterprise Cloud and Server?',
    a: 'Yes. We work with both GitHub Enterprise Cloud (SaaS) and GitHub Enterprise Server (self-hosted), including hybrid configurations and migrations between the two.',
  },
  {
    q: "What's included in GitHub Copilot Adoption?",
    a: 'Policy configuration, IDE rollout, Copilot Business or Enterprise licensing guidance, team training workshops, and a metrics dashboard tracking acceptance rate, lines suggested, and developer satisfaction scores.',
  },
  {
    q: 'Can NativeCloud help with GitHub Advanced Security licensing?',
    a: 'Yes. We work with GitHub licensing and can advise on GHAS tier selection, seat planning, and cost optimization strategies as part of the DevSecOps module.',
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
          style={{
            background: isOpen ? '#e89a78' : 'rgba(232,154,120,0.10)',
            border: '1px solid rgba(232,154,120,0.25)',
          }}
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

export default function GitHubAcceleratorPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <style>{`
        @keyframes pulse-blob {
          0%, 100% { opacity: 0.65; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.06); }
        }
      `}</style>

      <div className={jakarta.className}>

        {/* ── HERO ── */}
        <section
          className="relative overflow-hidden min-h-[92svh] flex items-center"
          style={{ background: 'linear-gradient(160deg, #fff8f3 0%, #fef2e8 40%, #f0f4ff 100%)' }}
        >
          <Blobs items={[
            { w: 800, h: 800, top: '-20%',    left: '-15%',  color: 'rgba(232,154,120,0.48)', delay: '0s' },
            { w: 650, h: 650, top: '10%',     right: '-12%', color: 'rgba(74,144,217,0.30)',  delay: '1.5s' },
            { w: 500, h: 500, bottom: '-15%', left: '28%',   color: 'rgba(110,207,176,0.26)', delay: '3s' },
          ]} />

          <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 pt-44 pb-28">
            <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: 'easeOut' }}>

              {/* GitHub logo badge */}
              <div className="flex items-center gap-3 mb-7">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center"
                  style={{ background: '#0a0e1a', boxShadow: '0 4px 16px rgba(10,14,26,0.18)' }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden>
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-[#0a0e1a]/60" style={MONO}>GitHub Partner Program</span>
              </div>

              <Pill label="GitHub Accelerator" />

              <div className="flex flex-col lg:flex-row lg:items-center gap-16 xl:gap-20">

                {/* Left — text */}
                <div className="flex-1 min-w-0">
                  <h1
                    className="font-extrabold text-[#0a0e1a] leading-[0.96] mb-6"
                    style={{ fontSize: 'clamp(44px, 6.8vw, 86px)', letterSpacing: '-0.045em' }}
                  >
                    Deliver software<br />
                    <span style={{
                      background: 'linear-gradient(135deg, #e89a78 0%, #fb923c 55%, #4A90D9 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>
                      faster with GitHub.
                    </span>
                  </h1>

                  <motion.p
                    className="text-[#6b7280] text-xl leading-[1.75] max-w-[500px] mb-10"
                    initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75, delay: 0.15, ease: 'easeOut' }}
                  >
                    A modular program to adopt GitHub Copilot, migrate from Azure DevOps, and implement enterprise-grade DevSecOps — with hands-on guidance and measurable outcomes. No risks. Minimal disruption.
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
                      Explore the Modules
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
                        { value: '3', label: 'Core modules' },
                        { value: '3', label: 'Delivery phases' },
                        { value: '0', label: 'Disruptions' },
                        { value: '100%', label: 'Governed setup' },
                      ].map((s) => (
                        <div key={s.label} className="flex flex-col gap-1">
                          <span className="text-[2.4rem] font-extrabold text-[#0a0e1a] leading-none" style={{ letterSpacing: '-0.04em' }}>{s.value}</span>
                          <span className="text-xs text-[#9ca3af] font-medium mt-1">{s.label}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-5 border-t border-[#f0e8df]">
                      <p className="text-xs text-[#9ca3af] leading-relaxed">
                        No risks. Minimal disruption.<br />
                        Strong security & governance from day one.
                      </p>
                    </div>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </div>
        </section>

        {/* ── WHY GITHUB ACCELERATOR ── */}
        <section
          className="relative overflow-hidden py-28"
          style={{ background: 'linear-gradient(180deg, #fff8f3 0%, #fef6f0 100%)' }}
        >
          <Blobs items={[
            { w: 600, h: 600, top: '-10%', right: '-8%', color: 'rgba(232,154,120,0.18)', delay: '0s' },
          ]} />
          <div className="relative max-w-7xl mx-auto px-6 md:px-12">

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="mb-16">
              <Pill label="Why GitHub Accelerator" />
              <h2
                className="text-4xl md:text-5xl font-extrabold text-[#0a0e1a] leading-[1.06]"
                style={{ letterSpacing: '-0.035em' }}
              >
                A clear path to GitHub.<br />
                <span className="text-[#e89a78]">No guesswork.</span>
              </h2>
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

        {/* ── CORE MODULES ── */}
        <section id="modules" className="relative overflow-hidden py-28 bg-[#0a0e1a]">
          <Blobs items={[
            { w: 700, h: 700, top: '-10%',    left: '-10%',  color: 'rgba(232,154,120,0.13)', delay: '0s' },
            { w: 600, h: 600, bottom: '-10%', right: '-8%',  color: 'rgba(74,144,217,0.11)',  delay: '2s' },
          ]} />
          <div className="relative max-w-7xl mx-auto px-6 md:px-12">

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="mb-16">
              <Pill label="Service Modules" dark />
              <h2
                className="text-4xl md:text-5xl font-extrabold text-white leading-[1.06]"
                style={{ letterSpacing: '-0.035em' }}
              >
                Three modules.<br />
                <span style={{
                  background: 'linear-gradient(135deg, #e89a78 0%, #fb923c 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                  One program.
                </span>
              </h2>
              <p className="text-white/50 text-lg mt-5 max-w-[480px]">
                Select all three or start with the module that delivers the most immediate value for your team.
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
              <h2
                className="text-4xl md:text-5xl font-extrabold text-[#0a0e1a] leading-[1.06]"
                style={{ letterSpacing: '-0.035em' }}
              >
                Three phases.<br />
                <span className="text-[#e89a78]">Zero surprises.</span>
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

        {/* ── MIGRATION PATHS ── */}
        <section className="relative overflow-hidden py-28 bg-[#0a0e1a]">
          <Blobs items={[
            { w: 550, h: 550, top: '15%',     right: '-5%',  color: 'rgba(110,207,176,0.09)', delay: '0s' },
            { w: 600, h: 600, bottom: '-15%', left: '-5%',   color: 'rgba(232,154,120,0.09)', delay: '2s' },
          ]} />
          <div className="relative max-w-7xl mx-auto px-6 md:px-12">

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="mb-14">
              <Pill label="Migration Paths" dark />
              <h2
                className="text-4xl md:text-5xl font-extrabold text-white leading-[1.06]"
                style={{ letterSpacing: '-0.035em' }}
              >
                Wherever you start,<br />
                <span style={{
                  background: 'linear-gradient(135deg, #e89a78 0%, #fb923c 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                  we get you there.
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {migrationPaths.map((mp, i) => (
                <motion.div
                  key={mp.from}
                  variants={fadeUp} initial="hidden" whileInView="show"
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: i * 0.09 }}
                  className="rounded-2xl p-7"
                  style={lgDark}
                >
                  <div className="flex items-center gap-2.5 mb-4 flex-wrap">
                    <span className="text-sm font-semibold text-white/75">{mp.from}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(232,154,120,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    <span className="text-sm font-semibold text-[#e89a78]">{mp.to}</span>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed">{mp.body}</p>
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
              <h2
                className="text-4xl md:text-5xl font-extrabold text-[#0a0e1a] leading-[1.06]"
                style={{ letterSpacing: '-0.035em' }}
              >
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

        {/* ── FOOTER CTA ── */}
        <ServiceFooter />

      </div>
    </>
  );
}
