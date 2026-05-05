"use client";

import { motion } from 'framer-motion';
import { Link } from 'react-transition-progress/next';

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

/* ── section ── */
const AIServicesSection = () => (
  <section className="max-w-9xl mx-auto px-6 sm:px-12 xl:px-16 py-20 sm:py-28">

    {/* Header */}
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
      <div>
        <div className="flex items-center gap-2 mb-4">
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

  </section>
);

export default AIServicesSection;
