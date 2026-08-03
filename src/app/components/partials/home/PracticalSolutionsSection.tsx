"use client";

import { motion } from 'framer-motion';
import { Link } from 'react-transition-progress/next';
import { Constants } from '@/Constants';

const solutions = [
  {
    label: 'Legal',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Legal AI Workspace',
    desc:  'Automate document classification, deadline extraction, client communication, and case workflow support.',
    tags:  ['Document AI', 'Deadline Tracking', 'Case Workflows'],
    href:  Constants.PAGES.AI_LEGAL_WORKSPACE,
  },
  {
    label: 'Finance',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect width="20" height="14" x="2" y="5" rx="2"/>
        <path d="M2 10h20"/>
      </svg>
    ),
    title: 'Payment Automation Platform',
    desc:  'Automate invoices, reminders, payment tracking, reporting, and client follow-ups.',
    tags:  ['Invoice AI', 'Auto-Reminders', 'Reconciliation'],
    href:  Constants.PAGES.PAYMENT_AUTOMATION,
  },
  {
    label: 'Cloud',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/>
        <path d="M12 12v9M8 17l4-4 4 4"/>
      </svg>
    ),
    title: 'Cloud Migration & DevOps',
    desc:  'Modernize applications, automate deployments, improve monitoring, and optimize cloud costs.',
    tags:  ['Zero Downtime', 'CI/CD Pipelines', 'Cost Optimization'],
    href:  Constants.PAGES.MIGRATE_TO_AZURE,
  },
];

const PracticalSolutionsSection = () => (
  <section className="font-switzer max-w-9xl mx-auto px-6 sm:px-12 xl:px-16 pb-20 sm:pb-28">

    {/* Section header */}
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-60px' }}
    >
      <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#9ca3af] mb-4">Practical Solutions</p>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <h2 className="text-[30px] md:text-[40px] font-medium text-[#111] leading-[1.1] max-w-lg">
          Practical AI &amp; Cloud solutions we can deliver
        </h2>
        <p className="text-[#6b7280] text-[15px] font-light max-w-xs sm:text-right leading-relaxed">
          Industry-specific starting points — ready to adapt to your business in weeks, not months.
        </p>
      </div>
    </motion.div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {solutions.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.1 }}
          viewport={{ once: true, margin: '-40px' }}
        >
          <Link
            href={s.href}
            className="group flex h-full flex-col gap-5 rounded-lg border border-[#e6e6e6] bg-white p-7 transition-[filter,box-shadow] duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:[filter:invert(1)]"
          >
            {/* top row */}
            <div className="flex items-start justify-between gap-3">
              <span className="text-[#111]">{s.icon}</span>
              <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#9ca3af]">{s.label}</span>
            </div>

            {/* content */}
            <div className="flex-1">
              <h3 className="text-[18px] font-medium text-[#111] mb-2 leading-[1.3]">{s.title}</h3>
              <p className="text-[#111] text-[15px] font-normal leading-[1.5]">{s.desc}</p>
            </div>

            {/* tags */}
            <div className="flex flex-wrap gap-1.5">
              {s.tags.map((tag) => (
                <span key={tag} className="text-[11px] font-medium text-[#6b7280] bg-[#fafafa] border border-[#e6e6e6] px-2.5 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {/* cta */}
            <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#111]">
              Explore solution
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

export default PracticalSolutionsSection;
