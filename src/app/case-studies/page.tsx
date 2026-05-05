'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ContactUsFooter from '@/app/components/partials/ContactUsFooter';
import { Constants } from '@/Constants';
import { AzureHero } from '@/ImagePath';

type Industry =
  | 'All'
  | 'Financial Services'
  | 'Healthcare'
  | 'Retail'
  | 'Manufacturing'
  | 'Logistics'
  | 'SaaS / ISV';

const industryStyle: Record<
  Exclude<Industry, 'All'>,
  { pill: string; bar: string; metricColor: string }
> = {
  'Financial Services': {
    pill: 'bg-[#eff6ff] text-[#1d4ed8] border border-[#bfdbfe]',
    bar: '#3b82f6',
    metricColor: '#1d4ed8',
  },
  Healthcare: {
    pill: 'bg-[#ecfdf5] text-[#065f46] border border-[#a7f3d0]',
    bar: '#10b981',
    metricColor: '#065f46',
  },
  Retail: {
    pill: 'bg-[#f5f3ff] text-[#5b21b6] border border-[#ddd6fe]',
    bar: '#8b5cf6',
    metricColor: '#5b21b6',
  },
  Manufacturing: {
    pill: 'bg-[#fffbeb] text-[#92400e] border border-[#fde68a]',
    bar: '#f59e0b',
    metricColor: '#92400e',
  },
  Logistics: {
    pill: 'bg-[#f0f9ff] text-[#075985] border border-[#bae6fd]',
    bar: '#0ea5e9',
    metricColor: '#075985',
  },
  'SaaS / ISV': {
    pill: 'bg-[#fff7ed] text-[#9a3412] border border-[#fed7aa]',
    bar: '#e89a78',
    metricColor: '#c2612d',
  },
};

type CaseStudy = {
  id: string;
  industry: Exclude<Industry, 'All'>;
  client: string;
  title: string;
  desc: string;
  service: string;
  serviceUrl: string;
  tags: string[];
  metric: { value: string; label: string };
};

const caseStudies: CaseStudy[] = [
  {
    id: 'banking-migration',
    industry: 'Financial Services',
    client: 'Leading Regional Bank',
    title: 'Zero-downtime migration of a core banking platform to Azure',
    desc: 'Migrated a monolithic on-premises core banking system to Azure with no service interruption, enabling same-day feature deployments and significantly reducing infrastructure overhead.',
    service: 'Migrate to Azure',
    serviceUrl: Constants.PAGES.MIGRATE_TO_AZURE,
    tags: ['Azure Migrate', 'AKS', 'Zero Downtime'],
    metric: { value: '38%', label: 'Infrastructure cost reduction' },
  },
  {
    id: 'healthcare-platform',
    industry: 'Healthcare',
    client: 'National Health Insurance Provider',
    title: 'Cloud-native patient data platform handling 2M+ records daily',
    desc: 'Designed and built a GDPR-compliant, event-driven platform on Azure that processes over 2 million patient records per day with enterprise-grade uptime.',
    service: 'Cloud Native SD',
    serviceUrl: Constants.PAGES.CLOUD_NATIVE_SD,
    tags: ['AKS', 'Event-Driven', 'GDPR'],
    metric: { value: '99.99%', label: 'Platform uptime SLA' },
  },
  {
    id: 'retail-devops',
    industry: 'Retail',
    client: 'Regional Retail Chain',
    title: 'From monthly releases to daily deployments with Azure DevOps',
    desc: 'Helped a 200-store retail chain adopt CI/CD, reducing release cycles from monthly to daily and cutting post-release incidents across all production environments.',
    service: 'DevOps on Azure',
    serviceUrl: Constants.PAGES.DEVOPS_ON_AZURE,
    tags: ['CI/CD', 'Azure DevOps', 'IaC'],
    metric: { value: '70%', label: 'Fewer post-release incidents' },
  },
  {
    id: 'manufacturing-architecture',
    industry: 'Manufacturing',
    client: 'Industrial Equipment Manufacturer',
    title: 'Modernising a 15-year-old ERP system with cloud-native microservices',
    desc: 'Broke apart a legacy ERP monolith into independently deployable microservices on Azure, enabling teams to ship individual modules without full-system downtime.',
    service: 'Cloud Software Architecture',
    serviceUrl: Constants.PAGES.CLOUD_SOFTWARE_ARCHITECTURE,
    tags: ['Microservices', 'Legacy Modernisation', 'Azure Service Bus'],
    metric: { value: '4×', label: 'Faster feature delivery' },
  },
  {
    id: 'logistics-data',
    industry: 'Logistics',
    client: 'Pan-European Logistics Provider',
    title: 'Automated data lifecycle management across 12 Azure regions',
    desc: 'Implemented end-to-end data governance and lifecycle policies across a multi-region Azure estate, achieving full regulatory compliance and slashing storage costs.',
    service: 'Data Lifecycle Management',
    serviceUrl: Constants.PAGES.DATA_LIFECYCLE_MANAGEMENT,
    tags: ['Data Governance', 'Azure Policy', 'Multi-Region'],
    metric: { value: '45%', label: 'Storage costs eliminated' },
  },
  {
    id: 'saas-cost-optimisation',
    industry: 'SaaS / ISV',
    client: 'B2B SaaS Platform',
    title: 'Reducing Azure spend by 40% without touching the product roadmap',
    desc: "Audited and optimised a B2B SaaS company's Azure environment — right-sizing compute, implementing Reserved Instances, and removing idle resources — saving €180K annually.",
    service: 'Managed Services',
    serviceUrl: Constants.PAGES.MANAGED_SERVICES,
    tags: ['FinOps', 'Reserved Instances', 'Right-Sizing'],
    metric: { value: '€180K', label: 'Annual Azure savings' },
  },
];

const filters: Industry[] = [
  'All',
  'Financial Services',
  'Healthcare',
  'Retail',
  'Manufacturing',
  'Logistics',
  'SaaS / ISV',
];

const heroStats = [
  { value: '6+', label: 'Engagements delivered' },
  { value: '6', label: 'Industries served' },
  { value: '40%', label: 'Average cost reduction' },
  { value: '99.99%', label: 'Uptime achieved' },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-3.5 h-3.5 shrink-0"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function CaseStudiesPage() {
  const [active, setActive] = useState<Industry>('All');

  const filtered =
    active === 'All'
      ? caseStudies
      : caseStudies.filter((c) => c.industry === active);

  const [featured, ...rest] = filtered;

  return (
    <div className="relative min-h-full overflow-x-clip bg-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden flex flex-col pt-36 sm:pt-44">
        {/* Background image — same approach as other service pages */}
        <div className="absolute inset-0 z-0">
          <Image
            src={AzureHero}
            alt="Case Studies"
            fill
            className="object-cover object-[85%] sm:object-top"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a]/95 via-[#0a0e1a]/80 to-[#0a0e1a]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-transparent" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-9xl mx-auto w-full px-5 sm:px-10 pb-16 sm:pb-20">
          <motion.div
            className="inline-flex items-center gap-2 bg-[#e89a78]/15 border border-[#e89a78]/30 rounded-full px-4 py-1.5 mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs uppercase tracking-widest text-[#e89a78] font-semibold">
              Solutions · Case Studies
            </p>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black !leading-[1.05] text-white max-w-3xl mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Proven results{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#f0a060] via-[#e89a78] to-[#d4845c] bg-clip-text text-transparent">
                across every industry
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-[#f0a060] via-[#e89a78] to-[#d4845c] opacity-60" />
            </span>
          </motion.h1>

          <motion.p
            className="text-white/60 text-lg sm:text-xl max-w-xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Real outcomes for real organisations — from financial services to
            healthcare. See how we help businesses modernise, scale, and cut
            costs on Azure.
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
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
                <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              Schedule a free call
            </Link>
            <Link
              href={Constants.PAGES.SOLUTIONS}
              className="inline-flex items-center justify-center gap-2 px-7 min-h-[52px] rounded-full border border-white/25 hover:border-[#e89a78]/60 text-white/70 hover:text-white font-semibold text-sm transition-all duration-200 w-full sm:w-auto"
            >
              View all solutions
            </Link>
          </motion.div>
        </div>

        {/* Stats strip — attached to bottom of hero */}
        <div className="relative z-10 max-w-9xl mx-auto w-full px-5 sm:px-10 border-t border-white/[0.08]">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/[0.08]">
            {heroStats.map((s, i) => (
              <motion.div
                key={i}
                className="py-6 px-0 sm:px-6 first:pl-0"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
              >
                <p className="text-2xl sm:text-3xl font-black text-white mb-0.5">{s.value}</p>
                <p className="text-xs text-white/40 font-medium">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filter + Cards ── */}
      <section className="max-w-9xl mx-auto px-5 sm:px-10 py-16 sm:py-24">

        {/* Filter pills */}
        <motion.div
          className="flex flex-wrap gap-2 mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-60px' }}
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide border transition-all duration-200 ${
                active === f
                  ? 'bg-[#0a0e1a] border-[#0a0e1a] text-white shadow-sm'
                  : 'bg-white border-[#e8e0d8] text-[#6b6b6b] hover:border-[#0a0e1a]/30 hover:text-[#0a0e1a]'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {filtered.length === 0 ? (
          <div className="flex items-center justify-center py-24">
            <p className="text-sm text-[#9b9589]">No case studies in this category yet.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-6">

            {/* ── Featured card (first result) ── */}
            {featured && (
              <motion.div
                key={`${featured.id}-featured`}
                className="group rounded-2xl bg-[#0a0e1a] overflow-hidden border border-white/[0.07] hover:border-white/[0.14] transition-all duration-300"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Industry-coloured top bar */}
                <div className="h-[3px]" style={{ backgroundColor: industryStyle[featured.industry].bar }} />

                <div className="p-7 sm:p-10 lg:p-12">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16">

                    {/* Left — content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-6">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold ${industryStyle[featured.industry].pill}`}>
                          {featured.industry}
                        </span>
                        <span className="hidden sm:block text-[10px] uppercase tracking-[0.15em] text-white/25 font-semibold">
                          Featured
                        </span>
                      </div>

                      <p className="text-[10px] uppercase tracking-[0.15em] text-white/35 font-semibold mb-3">
                        {featured.client}
                      </p>

                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-5 max-w-2xl">
                        {featured.title}
                      </h2>

                      <p className="text-white/50 text-base leading-relaxed mb-8 max-w-2xl">
                        {featured.desc}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {featured.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] text-white/45 bg-white/[0.06] border border-white/[0.08] px-3 py-1 rounded-lg font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-5">
                        <Link
                          href={featured.serviceUrl}
                          className="inline-flex items-center gap-2 px-5 min-h-[44px] rounded-full bg-[#e89a78] hover:bg-[#f0a060] text-white font-semibold text-sm transition-all duration-200"
                        >
                          View {featured.service}
                          <ArrowIcon />
                        </Link>
                        <span className="text-xs text-white/25 font-medium">
                          NativeCloud · {featured.service}
                        </span>
                      </div>
                    </div>

                    {/* Right — big metric */}
                    <div className="lg:w-52 shrink-0">
                      <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                        <p
                          className="text-5xl sm:text-6xl font-black leading-none mb-2"
                          style={{ color: industryStyle[featured.industry].bar }}
                        >
                          {featured.metric.value}
                        </p>
                        <p className="text-xs text-white/40 font-medium leading-snug">
                          {featured.metric.label}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── Regular cards grid ── */}
            {rest.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((cs, i) => {
                  const sty = industryStyle[cs.industry];
                  return (
                    <motion.div
                      key={cs.id}
                      className="group flex flex-col bg-white border border-[#e8e0d8] rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-black/[0.07] hover:-translate-y-1 transition-all duration-300"
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.07 }}
                    >
                      {/* Industry-coloured top bar */}
                      <div className="h-[3px] shrink-0" style={{ backgroundColor: sty.bar }} />

                      <div className="flex flex-col flex-1 p-6">
                        {/* Industry badge */}
                        <div className="mb-5">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold ${sty.pill}`}>
                            {cs.industry}
                          </span>
                        </div>

                        {/* Big metric */}
                        <div className="mb-5">
                          <p
                            className="text-4xl font-black leading-none mb-1"
                            style={{ color: sty.metricColor }}
                          >
                            {cs.metric.value}
                          </p>
                          <p className="text-xs text-[#9b9589] font-medium">
                            {cs.metric.label}
                          </p>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-[#f0ece8] mb-5" />

                        {/* Client */}
                        <p className="text-[10px] uppercase tracking-[0.15em] text-[#9b9589] font-semibold mb-2">
                          {cs.client}
                        </p>

                        {/* Title */}
                        <h3 className="text-[15px] font-bold text-[#0a0e1a] leading-snug mb-3">
                          {cs.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-[#6b6b6b] leading-relaxed mb-5 flex-1">
                          {cs.desc}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {cs.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] text-[#6b6b6b] bg-[#f4f1ee] px-2.5 py-1 rounded-lg font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-4 border-t border-[#f0ece8]">
                          <Link
                            href={cs.serviceUrl}
                            className="text-xs text-[#9b9589] hover:text-[#e89a78] transition-colors font-medium"
                          >
                            {cs.service}
                          </Link>
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e89a78] group-hover:gap-2.5 transition-all duration-200 cursor-pointer">
                            Read more
                            <ArrowIcon />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </section>

      {/* ── CTA ── */}
      <section className="max-w-9xl mx-auto px-5 sm:px-10 pb-20 sm:pb-28">
        <motion.div
          className="relative overflow-hidden flex flex-col sm:flex-row gap-8 items-start sm:items-center justify-between p-8 sm:p-12 rounded-2xl bg-[#0a0e1a]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-40px' }}
        >
          {/* Decorative glow */}
          <div className="absolute -top-12 -right-12 w-72 h-72 bg-[#e89a78]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-lg">
            <p className="text-xs uppercase tracking-widest text-[#e89a78] font-semibold mb-3">
              Ready to be next?
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
              Let&apos;s build your success story on Azure
            </h3>
            <p className="text-white/45 text-sm leading-relaxed">
              Book a free 30-minute call. We&apos;ll assess where you are today and outline
              a realistic path forward — no obligation, no pressure.
            </p>
          </div>

          <Link
            href={Constants.PAGES.SCHEDULE_CALL}
            className="relative shrink-0 inline-flex items-center justify-center gap-2.5 px-7 min-h-[52px] rounded-full bg-[#e89a78] hover:bg-[#f0a060] text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#e89a78]/25 w-full sm:w-auto"
          >
            Schedule a free call
            <ArrowIcon />
          </Link>
        </motion.div>
      </section>

      <ContactUsFooter />
    </div>
  );
}
