"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-transition-progress/next';

/* ── count-up hook ── */
function useCountUp(target: number, duration = 1400) {
  const [value, setValue]   = useState(0);
  const [started, setStart] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStart(true); },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const steps  = 40;
    const step   = duration / steps;
    let current  = 0;
    const id = setInterval(() => {
      current++;
      setValue(Math.round((current / steps) * target));
      if (current >= steps) clearInterval(id);
    }, step);
    return () => clearInterval(id);
  }, [started, target, duration]);

  return { value, ref };
}

/* ── service cards ── */
const services = [
  {
    tag:  'Most demanded',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
      </svg>
    ),
    title: 'AI Agents & RAG',
    desc:  'Automate decisions, workflows, and operations. Our AI agents and RAG systems plug directly into your business — eliminating manual work and accelerating results.',
    href:  '/services/ai-agents-rag',
  },
  {
    tag:  'Cloud native',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
      </svg>
    ),
    title: 'Cloud Architecture & DevOps',
    desc:  'From Azure to AWS, we design, migrate, and manage cloud infrastructure built for scale, security, and speed — backed by certified experts.',
    href:  '/azure',
  },
  {
    tag:  'Tailored to you',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    title: 'Custom Development',
    desc:  'When off-the-shelf does not fit, we build. From MVPs to enterprise platforms — delivered on Azure and AWS with modern architecture and reliability.',
    href:  '/services/custom-development',
  },
];

/* ── problem rows ── */
const problems = [
  {
    pain:     'Teams buried in repetitive tasks',
    solution: 'AI agents give your team their time back',
    stat:     30,
    unit:     '%',
    label:    'productivity gain',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    pain:     'Scattered data, slower decisions',
    solution: 'RAG connects your knowledge instantly',
    stat:     null,
    unit:     '',
    label:    'Single source of truth',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    pain:     'Cloud costs spiraling out of control',
    solution: 'Auto-scaling infrastructure that fits your budget',
    stat:     40,
    unit:     '%',
    label:    'avg cloud cost reduction',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
  },
];

/* ── stat pill with count-up ── */
function StatPill({ stat, unit, label }: { stat: number | null; unit: string; label: string }) {
  const { value, ref } = useCountUp(stat ?? 0);
  return (
    <div
      ref={ref}
      className="shrink-0 flex flex-col items-center justify-center rounded-2xl text-center px-4 py-3 min-w-[90px]"
      style={{ background: 'rgba(232,154,120,0.12)', border: '1px solid rgba(232,154,120,0.22)' }}
    >
      {stat !== null ? (
        <span className="text-2xl sm:text-3xl font-black text-[#e89a78] leading-none tabular-nums">
          {value}{unit}
        </span>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#e89a78]" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      )}
      <span className="text-[10px] text-[#e89a78]/70 font-medium mt-1 leading-tight">{label}</span>
    </div>
  );
}

/* ── section ── */
const AIServicesSection = () => (
  <section className="max-w-9xl mx-auto px-6 sm:px-12 xl:px-16 py-20 sm:py-28">

    {/* Header */}
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
          <p className="text-xs uppercase tracking-wider text-[#6b6b6b] font-medium">What we build</p>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0a0e1a] max-w-md leading-tight">
          What we actually build for you
        </h2>
      </div>
      <Link
        href="/services"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#0a0e1a] hover:text-[#e89a78] transition-colors"
      >
        Explore all services
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </Link>
    </div>

    {/* Service Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
      {services.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.1 }}
          viewport={{ once: true, margin: '-40px' }}
        >
          <Link
            href={s.href}
            className="group flex flex-col gap-5 border border-[#e8e0d8] rounded-2xl p-7 hover:border-[#e89a78] hover:shadow-md transition-all duration-300 bg-[#faf7f4] h-full"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#e89a78]/10 border border-[#e89a78]/20 flex items-center justify-center text-[#e89a78]">
                {s.icon}
              </div>
              <span className="text-xs font-semibold text-[#b8714e] bg-[#f4ebe8] px-3 py-1 rounded-full border border-[#e8d0c4]">
                {s.tag}
              </span>
            </div>
            <h3 className="text-lg font-bold text-[#0a0e1a]">{s.title}</h3>
            <p className="text-[#6b6b6b] text-sm leading-relaxed flex-1">{s.desc}</p>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0a0e1a] group-hover:text-[#e89a78] group-hover:gap-2.5 transition-all">
              Learn more
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </Link>
        </motion.div>
      ))}
    </div>

    {/* Problem → Solution block */}
    <div className="relative bg-[#0a0e1a] rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_60%,_rgba(232,154,120,0.12)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_rgba(232,154,120,0.06)_0%,_transparent_50%)]" />

      <div className="relative flex flex-col lg:flex-row gap-10 lg:gap-16 items-start px-8 sm:px-12 md:px-14 py-12 sm:py-16 md:py-20">

        {/* Left — headline */}
        <div className="lg:w-[42%] shrink-0">
          <div className="inline-flex items-center gap-2 bg-[#e89a78]/15 border border-[#e89a78]/30 rounded-full px-3.5 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#e89a78] font-bold">
              AI Agents · LLMs · Azure &amp; AWS
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] mb-5">
            We make AI work{' '}
            <span className="text-[#e89a78]">inside your business.</span>
          </h2>

          <p className="text-white/45 text-sm leading-relaxed mb-8 max-w-sm">
            Every hour spent on manual work, every delayed decision, every runaway cloud bill — these are problems we have solved before. Here is how.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 bg-[#e89a78] hover:bg-[#d4836a] shadow-lg shadow-[#e89a78]/20 hover:shadow-[#e89a78]/35 transition-all duration-200 text-white font-semibold text-sm px-7 py-3.5 rounded-full group"
            >
              Make it happen
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-[#e89a78]/50 text-white/70 hover:text-white text-sm font-medium px-7 py-3.5 rounded-full transition-all duration-200"
            >
              See all services
            </Link>
          </div>
        </div>

        {/* Right — problem → solution rows */}
        <div className="flex-1 flex flex-col divide-y" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 + i * 0.12 }}
              viewport={{ once: true, margin: '-40px' }}
              className="group flex items-center gap-4 sm:gap-6 py-6 first:pt-0 last:pb-0"
            >
              {/* icon */}
              <div className="shrink-0 w-10 h-10 rounded-xl bg-[#e89a78]/10 border border-[#e89a78]/20 flex items-center justify-center text-[#e89a78]">
                {p.icon}
              </div>

              {/* pain → solution */}
              <div className="flex-1 min-w-0">
                <p className="text-white/25 text-xs sm:text-sm mb-1.5 line-through decoration-white/15 leading-snug">
                  {p.pain}
                </p>
                {/* animated arrow */}
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="h-px flex-1 max-w-[24px] bg-gradient-to-r from-[#e89a78]/40 to-[#e89a78]/10 rounded-full" />
                  <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 text-[#e89a78]/50 shrink-0" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
                <p className="text-white font-semibold text-sm sm:text-base leading-snug">
                  {p.solution}
                </p>
              </div>

              {/* stat pill */}
              <StatPill stat={p.stat} unit={p.unit} label={p.label} />
            </motion.div>
          ))}
        </div>

      </div>
    </div>

  </section>
);

export default AIServicesSection;
