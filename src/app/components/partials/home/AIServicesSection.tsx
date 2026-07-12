"use client";

import { motion } from 'framer-motion';
import { Link } from 'react-transition-progress/next';
import { Constants } from '@/Constants';

const services = [
  {
    tag:  'Automate first',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
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
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
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
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: 'Custom SaaS & Platform Development',
    desc:  'Build modern SaaS platforms, portals, dashboards, APIs, and business applications using .NET, React/Next.js, Azure, and cloud-native architecture.',
    href:  '/services/custom-development',
  },
];

const AIServicesSection = () => (
  <section className="font-switzer max-w-9xl mx-auto px-6 sm:px-12 xl:px-16 py-20 sm:py-28">

    {/* Header */}
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
      <div>
        <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#9ca3af] mb-4">Core Services</p>
        <h2 className="text-[30px] md:text-[40px] font-medium text-[#111] leading-[1.1] max-w-md">
          Three ways we drive results
        </h2>
        <p className="text-[#6b7280] text-[15px] font-light mt-3 max-w-sm leading-relaxed">
          Every engagement maps to one of these pillars — often all three at once.
        </p>
      </div>
      <Link
        href="/services"
        className="inline-flex items-center gap-2 text-[14px] font-medium text-[#111] hover:opacity-70 transition-opacity shrink-0"
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
            className="group flex h-full flex-col gap-5 rounded-lg border border-[#e6e6e6] bg-white p-7 transition-[filter,box-shadow] duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:[filter:invert(1)]"
          >
            <div className="flex items-center justify-between">
              <span className="text-[#111]">{s.icon}</span>
              <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#9ca3af]">{s.tag}</span>
            </div>
            <div>
              <h3 className="text-[20px] font-medium text-[#111] mb-2 leading-[1.25]">{s.title}</h3>
              <p className="text-[#111] text-[15px] font-normal leading-[1.5]">{s.desc}</p>
            </div>
            <span className="mt-auto inline-flex items-center gap-1.5 text-[13px] font-medium text-[#111]">
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
