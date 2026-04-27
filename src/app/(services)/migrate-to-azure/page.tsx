'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ContactUsFooter from '@/app/components/partials/ContactUsFooter';
import { Constants } from '@/Constants';

const steps = [
  {
    number: '01',
    title: 'Discovery & Assessment',
    desc: 'We map your entire estate — workloads, dependencies, data, and integrations — and produce a migration readiness report with a risk-scored inventory of every asset.',
  },
  {
    number: '02',
    title: 'Migration Strategy',
    desc: 'We select the right strategy for each workload: Rehost, Replatform, Refactor, Rearchitect, or Retire. No one-size-fits-all approach — every decision is justified.',
  },
  {
    number: '03',
    title: 'Landing Zone Setup',
    desc: 'We build a secure, governance-ready Azure Landing Zone following Microsoft CAF best practices — networking, identity, policies, and cost management configured from day one.',
  },
  {
    number: '04',
    title: 'Migration & Cutover',
    desc: 'We execute migrations in waves with parallel-run validation, automated rollback plans, and zero-downtime cutovers — keeping your business running throughout.',
  },
  {
    number: '05',
    title: 'Optimise & Handover',
    desc: 'Post-migration we right-size resources, implement monitoring and alerting, and hand over full documentation and runbooks so your team is confident on day one.',
  },
];

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
      </svg>
    ),
    title: 'On-Premises to Azure',
    desc: 'Move physical servers, VMs, and databases from your data centre to Azure with Azure Migrate — minimal disruption, maximum speed.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    title: 'AWS / GCP to Azure',
    desc: 'Cross-cloud migrations handled end-to-end — compute, storage, networking, and managed services re-mapped to their Azure equivalents with full data integrity.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    title: 'Database Migration',
    desc: 'SQL Server, Oracle, MySQL, PostgreSQL — migrated to Azure SQL, Cosmos DB, or Azure Database for PostgreSQL with schema conversion and zero data loss.',
  },
];

const reasons = [
  { stat: '99.99%', label: 'Azure SLA uptime', desc: 'Global redundancy and geo-replication keep your workloads available.' },
  { stat: '35%', label: 'Average cost saving', desc: 'Azure Hybrid Benefit, Reserved Instances, and right-sizing deliver measurable savings.' },
  { stat: '0 h', label: 'Target downtime', desc: 'We plan every cutover for zero business impact using live migration techniques.' },
];

const faqs = [
  {
    q: 'How long does a migration take?',
    a: 'Timelines vary by estate size. A typical mid-market migration (50–200 workloads) completes in 8–16 weeks. We provide a firm schedule after the Discovery phase.',
  },
  {
    q: 'Will my applications need to be rewritten?',
    a: 'Most workloads can be rehosted or replatformed with no code changes. Where refactoring adds clear value (cost, performance, scalability), we recommend it — but it is never mandatory.',
  },
  {
    q: 'What about compliance and data residency?',
    a: 'Azure offers data residency in 60+ regions. We configure Azure Policy, Microsoft Defender, and regulatory compliance blueprints to meet GDPR, ISO 27001, SOC 2, and more.',
  },
  {
    q: 'Do you provide support after the migration?',
    a: 'Yes. We offer Managed Services post-migration — from 8×5 monitoring up to 24×7 NOC support — so you never face Azure alone.',
  },
];

export default function MigrateToAzurePage() {
  return (
    <div className="relative min-h-full overflow-x-clip bg-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#0a0e1a] pt-36 pb-20 sm:pt-44 sm:pb-28 px-5 sm:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_65%,_rgba(232,154,120,0.13)_0%,_transparent_58%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_25%,_rgba(240,160,80,0.08)_0%,_transparent_52%)] pointer-events-none" />

        <div className="relative max-w-9xl mx-auto">
          <motion.div
            className="inline-flex items-center gap-2 bg-[#e89a78]/10 border border-[#e89a78]/25 rounded-full px-4 py-1.5 mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78]" />
            <p className="text-xs uppercase tracking-widest text-[#e89a78] font-semibold">Solutions · Cloud Migration</p>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black !leading-[1.05] text-white max-w-4xl mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Move to Azure —{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#f0a060] via-[#e89a78] to-[#d4845c] bg-clip-text text-transparent">
                without the risk
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-[#f0a060] via-[#e89a78] to-[#d4845c] opacity-60" />
            </span>
          </motion.h1>

          <motion.p
            className="text-white/55 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We migrate your workloads, databases, and infrastructure to Azure — on time, on budget, and with zero unplanned downtime. From on-premises data centres to cross-cloud moves, we handle every stage end-to-end.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href={Constants.PAGES.SCHEDULE_CALL}
              className="inline-flex items-center justify-center gap-3 px-7 min-h-[52px] rounded-full bg-[#e89a78] hover:bg-[#f0a060] text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#e89a78]/25 w-full sm:w-auto"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
                <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              Schedule a free assessment
            </Link>
            <Link
              href={Constants.PAGES.SOLUTIONS}
              className="inline-flex items-center justify-center gap-2 px-7 min-h-[52px] rounded-full border border-white/20 hover:border-[#e89a78]/50 text-white/70 hover:text-white font-semibold text-sm transition-all duration-200 w-full sm:w-auto"
            >
              View all solutions
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Migration types ── */}
      <section className="max-w-9xl mx-auto px-5 sm:px-10 py-20 sm:py-28">
        <motion.div
          className="flex items-center gap-2 mb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78]" />
          <p className="text-xs uppercase tracking-wider text-[#6b6b6b] font-medium">Migration types</p>
        </motion.div>

        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0a0e1a] max-w-xl mb-14 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: '-60px' }}
        >
          We migrate from{' '}
          <span className="bg-gradient-to-r from-[#f0a060] via-[#e89a78] to-[#d4845c] bg-clip-text text-transparent">
            anywhere to Azure
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
              viewport={{ once: true, margin: '-40px' }}
              className="group flex flex-col gap-4 p-7 rounded-2xl border border-[#e8e0d8] hover:border-[#e89a78]/40 bg-[#faf7f4] hover:bg-[#f4ebe8] transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-xl bg-[#e89a78]/10 border border-[#e89a78]/20 flex items-center justify-center text-[#e89a78] group-hover:bg-[#e89a78]/15 transition-colors">
                {pillar.icon}
              </div>
              <h3 className="text-base font-semibold text-[#0a0e1a]">{pillar.title}</h3>
              <p className="text-[#6b6b6b] text-sm leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="bg-[#0a0e1a] py-20 sm:py-28 px-5 sm:px-10">
        <div className="max-w-9xl mx-auto">
          <motion.div
            className="inline-flex items-center gap-2 bg-[#e89a78]/10 border border-[#e89a78]/25 rounded-full px-4 py-1.5 mb-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-60px' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78]" />
            <p className="text-xs uppercase tracking-widest text-[#e89a78] font-semibold">How it works</p>
          </motion.div>

          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white max-w-xl mb-14 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: '-60px' }}
          >
            A proven five-step migration process
          </motion.h2>

          <div className="flex flex-col gap-px">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
                viewport={{ once: true, margin: '-40px' }}
                className="group flex gap-6 sm:gap-10 p-6 sm:p-8 rounded-2xl hover:bg-white/[0.04] transition-colors duration-200"
              >
                <span className="text-3xl sm:text-4xl font-black bg-gradient-to-b from-[#f0a060] to-[#d4845c] bg-clip-text text-transparent shrink-0 w-10 sm:w-14 leading-none pt-1">
                  {step.number}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-base sm:text-lg font-semibold text-white">{step.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed max-w-2xl">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="max-w-9xl mx-auto px-5 sm:px-10 py-20 sm:py-28">
        <motion.div
          className="flex items-center gap-2 mb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78]" />
          <p className="text-xs uppercase tracking-wider text-[#6b6b6b] font-medium">Why Azure</p>
        </motion.div>

        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0a0e1a] max-w-xl mb-14 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: '-60px' }}
        >
          The numbers speak for themselves
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: '-40px' }}
              className="flex flex-col gap-2 p-7 rounded-2xl bg-[#faf7f4] border border-[#e8e0d8]"
            >
              <span className="text-4xl font-black bg-gradient-to-r from-[#f0a060] via-[#e89a78] to-[#d4845c] bg-clip-text text-transparent">
                {r.stat}
              </span>
              <h3 className="text-base font-semibold text-[#0a0e1a]">{r.label}</h3>
              <p className="text-[#6b6b6b] text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <motion.div
          className="flex items-center gap-2 mb-4 mt-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78]" />
          <p className="text-xs uppercase tracking-wider text-[#6b6b6b] font-medium">Common questions</p>
        </motion.div>

        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-[#0a0e1a] mb-10 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: '-60px' }}
        >
          Frequently asked questions
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              viewport={{ once: true, margin: '-40px' }}
              className="flex flex-col gap-3 p-6 rounded-2xl border border-[#e8e0d8] bg-[#faf7f4]"
            >
              <h3 className="text-sm font-semibold text-[#0a0e1a]">{faq.q}</h3>
              <p className="text-[#6b6b6b] text-sm leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          className="flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between p-8 rounded-2xl bg-[#0a0e1a]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-40px' }}
        >
          <div className="max-w-lg">
            <h3 className="text-lg font-bold text-white mb-1">Ready to start your migration?</h3>
            <p className="text-white/50 text-sm">Book a free 30-minute assessment. We&apos;ll review your current estate and give you a clear migration roadmap — no obligation.</p>
          </div>
          <Link
            href={Constants.PAGES.SCHEDULE_CALL}
            className="shrink-0 inline-flex items-center justify-center gap-2 px-6 min-h-[48px] rounded-full bg-[#e89a78] hover:bg-[#f0a060] text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#e89a78]/20 w-full sm:w-auto"
          >
            Schedule a free assessment
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </section>

      <ContactUsFooter />
    </div>
  );
}
