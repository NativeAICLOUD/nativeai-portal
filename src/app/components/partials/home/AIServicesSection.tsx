"use client";

import { Link } from 'react-transition-progress/next';

const services = [
  {
    tag: 'Most demanded',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
      </svg>
    ),
    title: 'AI Agents & RAG',
    desc: 'Automate decisions, workflows, and operations. Our AI agents and RAG systems plug directly into your business — eliminating manual work and accelerating results with your own data.',
    href: '/services/ai-agents-rag',
  },
  {
    tag: 'Cloud native',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
      </svg>
    ),
    title: 'Cloud Architecture & DevOps',
    desc: 'From Azure to AWS, we design, migrate, and manage cloud infrastructure built for scale, security, and speed — backed by certified experts and automated operations.',
    href: '/azure',
  },
  {
    tag: 'Tailored to you',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    title: 'Custom Development',
    desc: 'When off-the-shelf does not fit, we build. From MVPs to enterprise platforms — delivered on Azure and AWS with modern architecture and production-grade reliability.',
    href: '/services/custom-development',
  },
];

const problems = [
  {
    pain: 'Teams buried in repetitive tasks',
    solution: 'AI agents give your team their time back',
    stat: 'Up to 30% productivity gain',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    pain: 'Scattered data, slower decisions',
    solution: 'RAG systems that connect your knowledge instantly',
    stat: 'Single source of truth for your business',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    pain: 'Cloud costs spiraling out of control',
    solution: 'Optimised, auto-scaling infrastructure that fits your budget',
    stat: 'Average 40% cloud cost reduction',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
  },
];

const AIServicesSection = () => {
  return (
    <section className="max-w-9xl mx-auto px-6 sm:px-12 xl:px-16 py-20 sm:py-28">

      {/* Section label */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
            <p className="text-xs uppercase tracking-wider text-[#6b6b6b] font-medium">What we build</p>
          </div>
          <h2 className="text-2xl sm:text-3.5xl lg:text-4xl font-bold text-[#0a0e1a] max-w-md leading-tight">
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-24">
        {services.map((s, i) => (
          <Link
            key={i}
            href={s.href}
            className="group flex flex-col gap-5 border border-[#e8e0d8] rounded-2xl p-8 hover:border-[#e89a78] hover:shadow-md transition-all duration-300 bg-[#faf7f4]"
          >
            <div className="flex items-center justify-between">
              <div className="text-[#e89a78]">{s.icon}</div>
              <span className="text-xs font-semibold text-[#b8714e] bg-[#f4ebe8] px-3 py-1 rounded-full border border-[#e8d0c4]">
                {s.tag}
              </span>
            </div>
            <h3 className="text-xl font-bold text-[#0a0e1a]">{s.title}</h3>
            <p className="text-[#6b6b6b] text-sm leading-relaxed flex-1">{s.desc}</p>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0a0e1a] group-hover:text-[#e89a78] group-hover:gap-3 transition-all">
              Learn more
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </Link>
        ))}
      </div>

      {/* Problem → Solution block */}
      <div className="relative bg-[#0a0e1a] rounded-2xl px-5 sm:px-10 md:px-14 py-10 sm:py-16 md:py-20 text-white overflow-hidden">
        {/* warm glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_60%,_rgba(232,154,120,0.12)_0%,_transparent_60%)]" />
        <div className="relative flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
          <div className="lg:w-2/5 shrink-0">

            {/* Label pill */}
            <div className="inline-flex items-center gap-2 bg-[#e89a78]/15 border border-[#e89a78]/30 rounded-full px-3.5 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
              <p className="text-[10px] sm:text-xs uppercase tracking-wide sm:tracking-widest text-[#e89a78] font-bold leading-none">
                AI Agents · LLMs · Azure &amp; AWS
              </p>
            </div>

            {/* Headline */}
            <h2 className="text-[1.75rem] sm:text-3xl lg:text-5xl font-bold leading-[1.1] mb-4">
              We make AI work{' '}
              <span className="text-[#e89a78]">inside your business.</span>
            </h2>

            <p className="text-white/55 text-sm leading-relaxed mb-8 max-w-sm lg:max-w-none">
              Every hour spent on manual work, every delayed decision, every runaway cloud bill — these are problems we have solved before. Here is how.
            </p>

            {/* Buttons */}
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

          <div className="flex-1 flex flex-col gap-4 sm:gap-5">
            {problems.map((p, i) => (
              <div key={i} className="flex gap-4 items-start border-b border-white/8 pb-4 sm:pb-5 last:border-0 last:pb-0">
                <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#e89a78]/10 border border-[#e89a78]/25 flex items-center justify-center text-[#e89a78] mt-0.5">
                  {p.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-white/30 text-xs sm:text-sm mb-1 line-through decoration-white/20 leading-snug">{p.pain}</p>
                  <p className="text-white font-semibold text-sm sm:text-base mb-1 leading-snug">{p.solution}</p>
                  <p className="text-[#e89a78] text-xs font-medium tracking-wide">{p.stat}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default AIServicesSection;
