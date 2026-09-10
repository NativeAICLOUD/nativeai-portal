'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-transition-progress/next';
import { Constants } from '@/Constants';

const MONO: React.CSSProperties = { fontFamily: "'JetBrains Mono', monospace" };

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 } as const,
  transition: { duration: 0.55, ease: 'easeOut', delay } as const,
  viewport: { once: true, margin: '-60px' },
});

const services = [
  {
    title: 'Dedicated Development Teams',
    desc: 'Senior engineers embedded in your workflow. We build, ship, and iterate — fully aligned with your product roadmap and delivery cadence.',
    color: '#5B7CFA',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16"/>
      </svg>
    ),
  },
  {
    title: 'Managed Delivery Teams',
    desc: 'End-to-end delivery ownership with built-in accountability. We bring the team, the process, and the discipline — you focus on outcomes.',
    color: '#2563EB',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <path d="M3.29 7 12 12l8.71-5M12 22V12"/>
      </svg>
    ),
  },
  {
    title: 'Cloud & Platform Engineering',
    desc: 'Azure-first infrastructure built for real scale. Kubernetes, CI/CD pipelines, and infrastructure-as-code — production-ready from day one.',
    color: '#46B5B0',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/>
        <path d="M12 12v9M8 17l4-4 4 4"/>
      </svg>
    ),
  },
  {
    title: 'AI-Native Application Development',
    desc: 'LLM integration, RAG pipelines, and autonomous agents. We build AI into your product core — not as a feature bolted on after launch.',
    color: '#9B6BFF',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 8V4H8"/>
        <rect width="16" height="12" x="4" y="8" rx="2"/>
        <path d="M2 14h2M20 14h2M15 13v2M9 13v2"/>
      </svg>
    ),
  },
];


export default function NearshoreTeamsSection() {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-8 overflow-hidden">

      {/* Section background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, #ffffff 0%, #faf8f6 60%, #f5f1ee 100%)' }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "url('/img/noise-background.jpg')", backgroundSize: '300px 300px', opacity: 0.025 }}
      />

      <div className="relative max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10 sm:mb-12">

          <motion.div {...fadeUp(0)}>
            <h2 className="text-2xl sm:text-3xl font-black leading-snug tracking-[-0.02em] text-[#0a0e1a]">
              Dedicated Nearshore Teams
            </h2>
          </motion.div>

          <motion.div className="flex flex-wrap gap-3 shrink-0" {...fadeUp(0.1)}>
            <Link
              href={Constants.PAGES.SCHEDULE_CALL}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              style={{ background: '#0a0e1a', boxShadow: '0 6px 24px rgba(0,0,0,0.22)' }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z"/>
              </svg>
              Book a Discovery Call
            </Link>
            <Link
              href={Constants.PAGES.SOLUTIONS}
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: 'rgba(255,255,255,0.9)',
                border: '1px solid rgba(0,0,0,0.10)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                color: '#0a0e1a',
              }}
            >
              Explore Services
              <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* ── Cards grid: 1 main + 4 service = 5 total ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">

          {/* Main featured card — spans 2 cols on lg */}
          <motion.div
            {...fadeUp(0)}
            className="relative lg:col-span-2 rounded-2xl overflow-hidden p-7 sm:p-8 flex flex-col justify-between min-h-[260px]"
            style={{ background: '#0a0e1a' }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 60% 80% at 80% 20%, rgba(37,99,235,0.12) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 10% 80%, rgba(91,124,250,0.10) 0%, transparent 60%)' }}
            />
            <div className="relative z-[1] flex flex-col gap-4 flex-1">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(37,99,235,0.12)', color: '#2563EB' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-[17px] font-bold text-white leading-snug">Dedicated Nearshore Teams</h3>
                <p className="text-[13px] text-white/45 leading-relaxed max-w-md">
                  Senior-led teams embedded directly in your product organisation. We cover the full delivery spectrum — from hands-on engineering to cloud infrastructure, AI development, and technical leadership.
                </p>
              </div>
            </div>
            <div className="relative z-[1] mt-6 flex items-center gap-1.5 text-[12px] font-semibold text-[#2563EB]">
              Four areas. One team. Full delivery.
            </div>
          </motion.div>

          {/* 4 service cards */}
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              {...fadeUp((i + 1) * 0.07)}
              className="group relative rounded-2xl border border-[#e8e0d8] bg-white hover:border-[#2563EB]/50 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 overflow-hidden p-6 sm:p-7 flex flex-col gap-5"
            >
              <div
                className="absolute -top-6 -right-6 w-32 h-32 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle, ${service.color}20 0%, transparent 70%)` }}
              />
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${service.color}16`, color: service.color }}
              >
                {service.icon}
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-[15px] font-bold text-[#0a0e1a] leading-snug">{service.title}</h3>
                <p className="text-[13px] text-[#6b6b6b] leading-relaxed">{service.desc}</p>
              </div>
              <div
                className="flex items-center gap-1.5 text-[12px] font-semibold transition-all duration-200 group-hover:gap-2.5"
                style={{ color: service.color }}
              >
                Learn more
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
