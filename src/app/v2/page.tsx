'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Link } from 'react-transition-progress/next';
import { Constants } from '@/Constants';

/* ─── Data ─────────────────────────────────────────────── */

const stats = [
  { value: 50, suffix: '+', label: 'Projects shipped' },
  { value: 8,  suffix: '+', label: 'Years building' },
  { value: 40, suffix: '%', label: 'Avg. cost reduction' },
  { value: 30, suffix: '%', label: 'Productivity gain' },
];

const bentoCards = [
  {
    id: 'ai',
    tag: 'Most demanded',
    title: 'AI Agents & RAG',
    desc: 'Autonomous agents that research, decide, and act across your tools — connected to your own data so every answer is accurate, private, and on-brand.',
    href: '/services/ai-agents-rag',
    span: 'md:col-span-2 md:row-span-2',
    style: 'dark-featured',
  },
  {
    id: 'cloud',
    tag: 'Cloud native',
    title: 'Cloud Architecture',
    desc: 'Azure & AWS infrastructure built for scale, security, and zero surprises.',
    href: '/azure',
    span: '',
    style: 'orange-tint',
  },
  {
    id: 'dev',
    tag: 'Tailored to you',
    title: 'Custom Development',
    desc: 'From MVP to enterprise platform — modern architecture, real reliability.',
    href: '/services/custom-development',
    span: '',
    style: 'subtle',
  },
  {
    id: 'devops',
    tag: 'Automation',
    title: 'DevOps & CI/CD',
    desc: 'Ship faster, break less. Automated pipelines and zero-downtime deployments.',
    href: '/services',
    span: '',
    style: 'orange-solid',
  },
  {
    id: 'migration',
    tag: 'Seamless',
    title: 'Cloud Migration',
    desc: 'Lift-and-shift to cloud native — on time and under budget.',
    href: '/azure',
    span: 'md:col-span-2',
    style: 'dark-mid',
  },
];

const steps = [
  {
    num: '01',
    title: 'Discovery call',
    desc: 'We map your current state, goals, and constraints in a focused 30-min session — no fluff, no forms.',
  },
  {
    num: '02',
    title: 'Architecture & plan',
    desc: 'We design the solution, choose the right stack, and lay out a timeline with clear milestones.',
  },
  {
    num: '03',
    title: 'Build & ship',
    desc: 'We deliver in sprints with full visibility — no black boxes, no surprises at the end.',
  },
];

const painPoints = [
  {
    before: 'Teams buried in repetitive tasks',
    after: 'AI agents give your team their time back',
    metric: 'Up to 30% productivity gain',
  },
  {
    before: 'Scattered data, slower decisions',
    after: 'RAG systems that surface the right answer instantly',
    metric: 'Single source of truth for your business',
  },
  {
    before: 'Cloud costs spiraling out of control',
    after: 'Optimised, auto-scaling infrastructure that fits your budget',
    metric: 'Average 40% cloud cost reduction',
  },
];

/* ─── CountUp ───────────────────────────────────────────── */
function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const ctrl = animate(0, to, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v) + suffix;
      },
    });
    return () => ctrl.stop();
  }, [inView, to, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

/* ─── Bento card styles ─────────────────────────────────── */
function BentoCard({ card, index }: { card: typeof bentoCards[0]; index: number }) {
  const baseDelay = index * 0.08;

  const wrapperCls = {
    'dark-featured': 'bg-gradient-to-br from-[#0d1428] to-[#12102a] border border-white/[0.07] hover:border-[#2563EB]/25',
    'orange-tint':   'bg-[#2563EB]/[0.06] border border-[#2563EB]/15 hover:border-[#2563EB]/40',
    'subtle':        'bg-white/[0.03] border border-white/[0.07] hover:border-white/15',
    'orange-solid':  'bg-gradient-to-br from-[#2563EB] to-[#d4693e] border-0',
    'dark-mid':      'bg-[#0d1428] border border-white/[0.07] hover:border-white/15',
  }[card.style];

  const tagCls = {
    'dark-featured': 'text-[#2563EB] bg-[#2563EB]/10 border border-[#2563EB]/20',
    'orange-tint':   'text-[#3b82f6] bg-[#3b82f6]/10 border border-[#3b82f6]/20',
    'subtle':        'text-white/40 bg-white/5 border border-white/10',
    'orange-solid':  'text-white/70 bg-white/15 border border-white/20',
    'dark-mid':      'text-white/35 bg-white/5 border border-white/10',
  }[card.style];

  const titleCls = {
    'dark-featured': 'text-white',
    'orange-tint':   'text-white',
    'subtle':        'text-white',
    'orange-solid':  'text-white',
    'dark-mid':      'text-white',
  }[card.style];

  const descCls = {
    'dark-featured': 'text-white/40',
    'orange-tint':   'text-white/45',
    'subtle':        'text-white/35',
    'orange-solid':  'text-white/65',
    'dark-mid':      'text-white/35',
  }[card.style];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut', delay: baseDelay }}
      viewport={{ once: true, margin: '-40px' }}
      className={`
        relative overflow-hidden rounded-3xl transition-all duration-300 group cursor-pointer
        flex flex-col justify-between p-7 sm:p-8
        ${card.span}
        ${wrapperCls}
        ${card.style === 'dark-featured' ? 'min-h-[260px] md:min-h-0' : ''}
      `}
    >
      {/* Featured glow */}
      {card.style === 'dark-featured' && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_55%,_rgba(37,99,235,0.13)_0%,_transparent_60%)] pointer-events-none" />
      )}

      <div className="relative">
        <span className={`inline-flex text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 ${tagCls}`}>
          {card.tag}
        </span>
        <h3 className={`font-bold mb-2.5 ${titleCls} ${card.style === 'dark-featured' ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>
          {card.title}
        </h3>
        <p className={`text-sm leading-relaxed ${descCls} ${card.style === 'dark-featured' ? 'max-w-sm' : ''}`}>
          {card.desc}
        </p>
      </div>

      <Link
        href={card.href}
        className={`
          relative mt-6 inline-flex items-center gap-2 text-sm font-semibold
          group-hover:gap-3 transition-all duration-200
          ${card.style === 'dark-featured' ? 'text-[#2563EB]' : card.style === 'orange-solid' ? 'text-white' : 'text-white/40 hover:text-white'}
        `}
      >
        Learn more
        <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </Link>
    </motion.div>
  );
}

/* ─── Page ──────────────────────────────────────────────── */
export default function HomeV2() {
  return (
    <div className="bg-[#050912] text-white min-h-screen overflow-x-hidden">

      {/* ══ 1. HERO ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 sm:px-12 xl:px-20 pt-32 pb-20 overflow-hidden">

        {/* Aurora blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ x: [0, 70, -40, 0], y: [0, -60, 30, 0], scale: [1, 1.15, 0.9, 1] }}
            transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-48 -left-24 w-[750px] h-[750px] rounded-full bg-[#2563EB]/[0.08] blur-[140px]"
          />
          <motion.div
            animate={{ x: [0, -90, 50, 0], y: [0, 70, -40, 0], scale: [1, 0.85, 1.2, 1] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
            className="absolute top-1/4 -right-48 w-[650px] h-[650px] rounded-full bg-[#6366f1]/[0.05] blur-[130px]"
          />
          <motion.div
            animate={{ x: [0, 50, -25, 0], y: [0, 40, -70, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 12 }}
            className="absolute bottom-10 left-1/3 w-[500px] h-[400px] rounded-full bg-[#2563EB]/[0.06] blur-[110px]"
          />
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.022]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto w-full">

          {/* Label pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2.5 border border-white/[0.09] bg-white/[0.04] rounded-full px-5 py-2 mb-10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse shrink-0" />
            <span className="text-xs uppercase tracking-[0.18em] text-white/40 font-medium">
              AI Agents · Cloud Architecture · Custom Dev
            </span>
          </motion.div>

          {/* H1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.1 }}
            className="mb-8"
          >
            <h1 className="text-[clamp(3rem,8vw,8rem)] font-black leading-[0.92] tracking-tight">
              <span className="block text-white">We make</span>
              <span className="block bg-gradient-to-r from-[#f5a870] via-[#2563EB] to-[#1d4ed8] bg-clip-text text-transparent">
                AI work
              </span>
              <span className="block text-white/20 font-light italic">
                inside your business.
              </span>
            </h1>
          </motion.div>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.28 }}
            className="text-white/40 text-lg sm:text-xl max-w-xl leading-relaxed mb-12"
          >
            From AI agents to cloud infrastructure to custom software — we build the systems that make your team faster, your decisions smarter, and your costs lower.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 items-start mb-20 sm:mb-24"
          >
            <Link
              href={Constants.PAGES.SCHEDULE_CALL}
              className="group inline-flex items-center gap-3 bg-[#2563EB] hover:bg-[#d4836a] text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-2xl shadow-[#2563EB]/20 hover:shadow-[#2563EB]/35"
            >
              Schedule a free call
              <span className="w-6 h-6 rounded-full bg-white/20 group-hover:bg-white/25 flex items-center justify-center transition-colors shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 group-hover:translate-x-0.5 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2.5 border border-white/[0.12] hover:border-[#2563EB]/35 text-white/50 hover:text-white/80 text-base font-medium px-8 py-4 rounded-full transition-all duration-200"
            >
              Explore services
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.55 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 pt-10 border-t border-white/[0.07]"
          >
            {stats.map((s, i) => (
              <div key={i}>
                <div className="text-4xl sm:text-5xl font-black text-white mb-1.5 tabular-nums">
                  <CountUp to={s.value} suffix={s.suffix} />
                </div>
                <p className="text-white/30 text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ 2. BENTO SERVICES ════════════════════════════════ */}
      <section className="relative px-6 sm:px-12 xl:px-20 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                <p className="text-xs uppercase tracking-[0.16em] text-white/30 font-medium">What we build</p>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.05]">
                Built for what<br />
                <span className="text-[#2563EB]">actually matters.</span>
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-white/30 hover:text-[#2563EB] transition-colors font-medium group"
            >
              All services
              <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </motion.div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[220px] gap-4">
            {bentoCards.map((card, i) => (
              <BentoCard key={card.id} card={card} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. PROBLEM → SOLUTION ════════════════════════════ */}
      <section className="relative px-6 sm:px-12 xl:px-20 py-20 sm:py-28 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <p className="text-xs uppercase tracking-[0.16em] text-white/30 font-medium">Real problems, solved</p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
              Every hour wasted is a problem{' '}
              <span className="text-[#2563EB]">we&apos;ve solved before.</span>
            </h2>
            <p className="text-white/35 text-base leading-relaxed mb-10">
              We&apos;ve seen the same patterns across dozens of companies. Here&apos;s what we replace.
            </p>
            <Link
              href={Constants.PAGES.SCHEDULE_CALL}
              className="inline-flex items-center gap-2.5 bg-[#2563EB]/10 border border-[#2563EB]/25 hover:bg-[#2563EB]/15 hover:border-[#2563EB]/40 text-[#2563EB] font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-200"
            >
              Let&apos;s solve yours
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </motion.div>

          <div className="flex flex-col gap-0 divide-y divide-white/[0.06]">
            {painPoints.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
                viewport={{ once: true, margin: '-40px' }}
                className="py-7 first:pt-0 last:pb-0"
              >
                <p className="text-white/25 text-sm line-through decoration-white/15 mb-2">{p.before}</p>
                <p className="text-white font-semibold text-base sm:text-lg mb-1.5">{p.after}</p>
                <span className="inline-block text-xs font-semibold text-[#2563EB] bg-[#2563EB]/8 border border-[#2563EB]/15 px-3 py-1 rounded-full">
                  {p.metric}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. HOW WE WORK ═══════════════════════════════════ */}
      <section className="px-6 sm:px-12 xl:px-20 py-20 sm:py-28 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-80px' }}
            className="mb-14"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <p className="text-xs uppercase tracking-[0.16em] text-white/30 font-medium">How it works</p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold">
              From idea to shipped —{' '}
              <span className="text-white/30 font-light">in three steps.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.12 }}
                viewport={{ once: true, margin: '-40px' }}
                className="relative border border-white/[0.07] rounded-3xl p-8 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.13] transition-all duration-300 group"
              >
                {/* Step connector — arrow between cards */}
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-[#050912] border border-white/[0.1] items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 text-white/25" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
                <span className="block text-[4.5rem] font-black leading-none text-white/[0.05] mb-4 group-hover:text-white/[0.07] transition-colors">
                  {step.num}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/35 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. CTA BANNER ════════════════════════════════════ */}
      <section className="px-6 sm:px-12 xl:px-20 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true, margin: '-80px' }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#2563EB] via-[#df7a52] to-[#c4603a] p-12 sm:p-16 md:p-20 text-center"
          >
            {/* Dot pattern */}
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
            {/* Inner glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(255,255,255,0.15)_0%,_transparent_60%)]" />

            <div className="relative">
              <span className="text-white/50 text-xs uppercase tracking-[0.2em] font-semibold block mb-5">
                Ready to start?
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 max-w-2xl mx-auto leading-[1.05]">
                Let&apos;s build something your business actually needs.
              </h2>
              <p className="text-white/55 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                A 30-minute call with our team. No commitment, no sales pitch — just a straight conversation about what&apos;s possible for your business.
              </p>
              <Link
                href={Constants.PAGES.SCHEDULE_CALL}
                className="inline-flex items-center gap-3 bg-white text-[#c4603a] font-bold text-base px-8 py-4 rounded-full hover:bg-white/90 transition-all duration-200 shadow-2xl shadow-black/25 group"
              >
                Schedule a free call
                <span className="w-7 h-7 rounded-full bg-[#c4603a]/15 group-hover:bg-[#c4603a]/25 flex items-center justify-center transition-colors shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
