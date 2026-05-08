"use client";

import { motion } from 'framer-motion';
import { Link } from 'react-transition-progress/next';
import { Constants } from '@/Constants';

const services = [
  {
    tag:  'Automate first',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/>
        <path d="M2 14h2M20 14h2M15 13v2M9 13v2"/>
      </svg>
    ),
    title: 'AI Agents & Workflow Automation',
    desc:  'Automate repetitive business processes, document handling, email workflows, internal approvals, and operational tasks using AI agents and LLM-powered workflows.',
    href:  '/services/ai-agents-rag',
  },
  {
    tag:  'Scale & modernize',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/>
        <path d="M12 12v9M8 17l4-4 4 4"/>
      </svg>
    ),
    title: 'Cloud, DevOps & Modernization',
    desc:  'Design, deploy, and optimize secure Azure/AWS infrastructure, CI/CD pipelines, containers, monitoring, and scalable cloud-native systems.',
    href:  Constants.PAGES.DEVOPS_ON_AZURE,
  },
  {
    tag:  'Built to scale',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: 'Custom SaaS & Platform Development',
    desc:  'Build modern SaaS platforms, portals, dashboards, APIs, and business applications using .NET, React/Next.js, Azure, and cloud-native architecture.',
    href:  '/services/custom-development',
  },
];

const AIServicesSection = () => (
  <section className="max-w-9xl mx-auto px-6 sm:px-12 xl:px-16 py-20 sm:py-28">

    {/* Header */}
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <p className="text-xs uppercase tracking-wider text-[#6b6b6b] font-medium">Core Services</p>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0a0e1a] max-w-md leading-tight">
          Three ways we drive results
        </h2>
        <p className="text-[#6b6b6b] text-sm mt-3 max-w-sm leading-relaxed">
          Every engagement maps to one of these pillars — often all three at once.
        </p>
      </div>
      <Link
        href="/services"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#0a0e1a] hover:text-[#e89a78] transition-colors shrink-0"
      >
        Explore all services
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </Link>
    </div>

    {/* Service Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
            className="group flex flex-col gap-5 border border-[#e8e0d8] rounded-2xl p-7 hover:border-[#e89a78] hover:shadow-lg transition-all duration-300 bg-[#faf7f4] h-full"
          >
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-xl bg-[#e89a78]/10 border border-[#e89a78]/20 flex items-center justify-center text-[#e89a78]">
                {s.icon}
              </div>
              <span className="text-xs font-semibold text-[#b8714e] bg-[#f4ebe8] px-3 py-1 rounded-full border border-[#e8d0c4]">
                {s.tag}
              </span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0a0e1a] mb-2">{s.title}</h3>
              <p className="text-[#6b6b6b] text-sm leading-relaxed">{s.desc}</p>
            </div>
            <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[#0a0e1a] group-hover:text-[#e89a78] group-hover:gap-2.5 transition-all">
              Learn more
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </Link>
        </motion.div>
      ))}
    </div>

  </section>
);

export default AIServicesSection;
