"use client";

import { motion } from 'framer-motion';
import { Link } from 'react-transition-progress/next';
import { Constants } from '@/Constants';

/* Colour pairing reused from the Industries palette for the same
   Legal/Finance/Cloud associations used elsewhere on the site. */
const solutions = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    color: '#7C3AED',
    bg: 'rgba(124,58,237,0.07)',
    title: 'Legal AI Workspace',
    desc:  'Automate document classification, deadline extraction, client communication, and case workflow support.',
    tags:  ['Document AI', 'Deadline Tracking', 'Case Workflows'],
    href:  Constants.PAGES.AI_LEGAL_WORKSPACE,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <rect width="20" height="14" x="2" y="5" rx="2"/>
        <path d="M2 10h20"/>
      </svg>
    ),
    color: '#0F8B83',
    bg: 'rgba(15,139,131,0.08)',
    title: 'Payment Automation Platform',
    desc:  'Automate invoices, reminders, payment tracking, reporting, and client follow-ups.',
    tags:  ['Invoice AI', 'Auto-Reminders', 'Reconciliation'],
    href:  Constants.PAGES.PAYMENT_AUTOMATION,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/>
        <path d="M12 12v9M8 17l4-4 4 4"/>
      </svg>
    ),
    color: '#2563EB',
    bg: 'rgba(37,99,235,0.07)',
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
          Practical{' '}
          <span style={{ background: 'rgba(37,99,235,0.14)', borderRadius: 0, padding: '2px 6px' }}>
            AI &amp; Cloud
          </span>{' '}
          solutions we can deliver
        </h2>
        <p className="text-[#6b7280] text-[15px] font-light max-w-xs sm:text-right leading-relaxed">
          Industry-specific starting points — ready to adapt to your business in weeks, not months.
        </p>
      </div>
    </motion.div>

    {/* Grouped warm-gray wrapper hugging the cards — same schema as "What we do" */}
    <div className="w-full rounded-2xl bg-[#FAFAF8] p-3 sm:p-5">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {solutions.map(({ icon, color, bg, title, desc, tags, href }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.1 }}
            viewport={{ once: true, margin: '-40px' }}
          >
            <Link
              href={href}
              className="group flex h-full flex-col rounded-lg border border-[#ECECEC] bg-white p-[18px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(37,99,235,0.2)] hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
            >
              {/* top: icon + title */}
              <div className="flex min-h-[56px] items-center gap-3.5">
                <span
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[12px] transition-transform duration-200 group-hover:scale-105"
                  style={{ background: bg, color }}
                >
                  {icon}
                </span>
                <h3 className="m-0 text-[15.5px] font-semibold leading-[1.25] text-[#111827]">{title}</h3>
              </div>

              {/* divider */}
              <div className="my-3 h-px w-full bg-[#EAEAEA]" />

              {/* description */}
              <p className="m-0 flex-1 text-[14px] font-normal leading-[1.5] text-[#6B7280]">
                {desc}
              </p>

              {/* tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-[#e6e6e6] bg-[#fafafa] px-2.5 py-0.5 text-[11px] font-medium text-[#6b7280]">
                    {tag}
                  </span>
                ))}
              </div>

              {/* cta */}
              <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-[#111827]">
                Explore solution
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>

  </section>
);

export default PracticalSolutionsSection;
