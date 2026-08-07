"use client";

import { motion } from 'framer-motion';
import { type SVGProps } from 'react';
import { Constants } from '@/Constants';
import { CONTAINER, SECTION_PB, H2, BODY, FeatureCard } from './HomeUI';

/* Icon components (not lucide-react) — forward standard icon props
   (className/style/strokeWidth/aria-hidden) so FeatureCard can size/colour
   them exactly like it does with lucide icons. */
function LegalIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );
}
function PaymentIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="14" x="2" y="5" rx="2"/>
      <path d="M2 10h20"/>
    </svg>
  );
}
function CloudMigrationIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/>
      <path d="M12 12v9M8 17l4-4 4 4"/>
    </svg>
  );
}

/* Colour pairing reused from the Industries palette for the same
   Legal/Finance/Cloud associations used elsewhere on the site. */
const solutions = [
  {
    icon: LegalIcon,
    color: '#7C3AED',
    bg: 'rgba(124,58,237,0.07)',
    title: 'Legal AI Workspace',
    desc:  'Automate document classification, deadline extraction, client communication, and case workflow support.',
    tags:  ['Document AI', 'Deadline Tracking', 'Case Workflows'],
    href:  Constants.PAGES.AI_LEGAL_WORKSPACE,
  },
  {
    icon: PaymentIcon,
    color: '#0F8B83',
    bg: 'rgba(15,139,131,0.08)',
    title: 'Payment Automation Platform',
    desc:  'Automate invoices, reminders, payment tracking, reporting, and client follow-ups.',
    tags:  ['Invoice AI', 'Auto-Reminders', 'Reconciliation'],
    href:  Constants.PAGES.PAYMENT_AUTOMATION,
  },
  {
    icon: CloudMigrationIcon,
    color: '#2563EB',
    bg: 'rgba(37,99,235,0.07)',
    title: 'Cloud Migration & DevOps',
    desc:  'Modernize applications, automate deployments, improve monitoring, and optimize cloud costs.',
    tags:  ['Zero Downtime', 'CI/CD Pipelines', 'Cost Optimization'],
    href:  Constants.PAGES.MIGRATE_TO_AZURE,
  },
];

const PracticalSolutionsSection = () => (
  <section className={`font-switzer bg-white`}>
    <div className={`${CONTAINER} ${SECTION_PB}`}>

    {/* Section header */}
    <motion.div
      className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-60px' }}
    >
      <div>
        <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#6B7280] mb-4">Practical Solutions</p>
        <h2 className={`max-w-lg ${H2}`}>
          Practical{' '}
          <span style={{ background: 'rgba(37,99,235,0.14)', borderRadius: 0, padding: '2px 6px' }}>
            AI &amp; Cloud
          </span>{' '}
          solutions we can deliver
        </h2>
      </div>
      <p className={`max-w-xs sm:text-right ${BODY}`}>
        Industry-specific starting points — ready to adapt to your business in weeks, not months.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {solutions.map(({ icon, color, bg, title, desc, tags, href }, i) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.1 }}
          viewport={{ once: true, margin: '-40px' }}
        >
          <FeatureCard
            href={href}
            icon={icon}
            iconColor={color}
            iconBg={bg}
            title={title}
            desc={desc}
            tags={tags}
            cta="Explore solution"
          />
        </motion.div>
      ))}
    </div>

    </div>
  </section>
);

export default PracticalSolutionsSection;
