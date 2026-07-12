'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Constants } from '@/Constants';
import { CONTAINER, Eyebrow, PrimaryButton, SecondaryButton } from '@/app/components/partials/services/ServiceUI';

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
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 shrink-0">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function CaseStudiesPage() {
  const [active, setActive] = useState<Industry>('All');
  const filtered = active === 'All' ? caseStudies : caseStudies.filter((c) => c.industry === active);
  const [featured, ...rest] = filtered;

  return (
    <div className="font-switzer">

      {/* ── Hero ── */}
      <div className="industries-hero-bg">
        <div className={`${CONTAINER} pb-12 pt-32 lg:pt-28`}>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">

            {/* Left */}
            <div className="flex-1">
              <div className="mb-6"><Eyebrow>Case Studies</Eyebrow></div>
              <h1 className="m-0 text-[40px] font-medium leading-[1.05] text-[#111] sm:text-[52px] lg:text-[64px]">
                Proven results across every industry.
              </h1>
              <p className="mt-6 max-w-[520px] text-[18px] font-light leading-[1.6] text-[#111]">
                Real outcomes for real organisations — from financial services to healthcare. See
                how we help businesses modernise, scale, and cut costs on Azure.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton href={Constants.PAGES.SCHEDULE_CALL}>Schedule a free call</PrimaryButton>
                <SecondaryButton href={Constants.PAGES.SOLUTIONS}>View all solutions</SecondaryButton>
              </div>
            </div>

            {/* Right — track record card */}
            <div className="w-full lg:max-w-[440px] lg:flex-1">
              <div className="flex flex-col gap-5 rounded-2xl border border-[#e6e6e6] bg-white p-6">
                <div className="flex items-center justify-between">
                  <Eyebrow>Our track record</Eyebrow>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#059669]" />
                    <span className="text-[11px] font-medium text-[#059669]">Verified</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {heroStats.map((s) => (
                    <div key={s.label} className="rounded-xl border border-[#eee] bg-[#fafafa] p-4">
                      <p className="m-0 text-[24px] font-medium leading-none text-[#111]">{s.value}</p>
                      <p className="m-0 mt-1.5 text-[11px] font-light leading-snug text-[#9ca3af]">{s.label}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Financial Services', 'Healthcare', 'Retail', 'SaaS'].map((t) => (
                    <span key={t} className="rounded-full border border-[#e6e6e6] px-2.5 py-1 text-[11px] font-medium text-[#111]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* multicolour divider — full viewport width */}
        <hr className="linegrad-divider m-0 h-1 w-full border-0" />
      </div>

      {/* ── Filter + Cards ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} py-20 lg:py-24`}>

          {/* Filter pills */}
          <div className="mb-12 flex flex-wrap gap-2">
            {filters.map((f) => {
              const isActive = active === f;
              return (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-colors ${
                    isActive
                      ? 'border-[#111] bg-[#111] text-white'
                      : 'border-[#e6e6e6] bg-white text-[#6b7280] hover:border-[#111] hover:text-[#111]'
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>

          {filtered.length === 0 ? (
            <div className="flex items-center justify-center py-24">
              <p className="text-sm text-[#9ca3af]">No case studies in this category yet.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">

              {/* Featured card */}
              {featured && (
                <div className="overflow-hidden rounded-2xl border border-[#e6e6e6] bg-white">
                  <div className="h-[3px]" style={{ backgroundColor: industryStyle[featured.industry].bar }} />
                  <div className="p-7 sm:p-10 lg:p-12">
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-16">
                      <div className="min-w-0 flex-1">
                        <div className="mb-6 flex items-center justify-between">
                          <span className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold ${industryStyle[featured.industry].pill}`}>
                            {featured.industry}
                          </span>
                          <span className="hidden text-[10px] font-semibold uppercase tracking-[0.15em] text-[#9ca3af] sm:block">Featured</span>
                        </div>
                        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.12em] text-[#9ca3af]">{featured.client}</p>
                        <h2 className="m-0 mb-5 max-w-2xl text-[26px] font-medium leading-[1.15] text-[#111] sm:text-[32px] lg:text-[40px]">{featured.title}</h2>
                        <p className="mb-8 max-w-2xl text-[16px] font-normal leading-[1.5] text-[#111]">{featured.desc}</p>
                        <div className="mb-8 flex flex-wrap gap-2">
                          {featured.tags.map((tag) => (
                            <span key={tag} className="rounded-md border border-[#e6e6e6] px-2.5 py-1 text-[11px] font-medium text-[#111]">{tag}</span>
                          ))}
                        </div>
                        <Link href={featured.serviceUrl} className="inline-flex items-center gap-2 rounded-full bg-[#111] px-5 py-3 text-[14px] font-medium text-white transition-opacity hover:opacity-90">
                          View {featured.service}
                          <ArrowIcon />
                        </Link>
                      </div>
                      <div className="shrink-0 lg:w-52">
                        <div className="rounded-2xl border border-[#eee] bg-[#fafafa] p-6">
                          <p className="mb-2 text-[48px] font-medium leading-none sm:text-[56px]" style={{ color: industryStyle[featured.industry].metricColor }}>{featured.metric.value}</p>
                          <p className="text-[13px] font-normal leading-snug text-[#6b7280]">{featured.metric.label}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Regular cards grid */}
              {rest.length > 0 && (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {rest.map((cs) => {
                    const sty = industryStyle[cs.industry];
                    return (
                      <div
                        key={cs.id}
                        className="flex flex-col overflow-hidden rounded-2xl border border-[#e6e6e6] bg-white transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
                      >
                        <div className="h-[3px] shrink-0" style={{ backgroundColor: sty.bar }} />
                        <div className="flex flex-1 flex-col p-6">
                          <div className="mb-5">
                            <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold ${sty.pill}`}>{cs.industry}</span>
                          </div>
                          <div className="mb-5">
                            <p className="mb-1 text-[36px] font-medium leading-none" style={{ color: sty.metricColor }}>{cs.metric.value}</p>
                            <p className="text-[12px] font-normal text-[#9ca3af]">{cs.metric.label}</p>
                          </div>
                          <div className="mb-5 border-t border-[#eee]" />
                          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.12em] text-[#9ca3af]">{cs.client}</p>
                          <h3 className="mb-3 text-[16px] font-medium leading-snug text-[#111]">{cs.title}</h3>
                          <p className="mb-5 flex-1 text-[14px] font-normal leading-[1.5] text-[#111]">{cs.desc}</p>
                          <div className="mb-5 flex flex-wrap gap-1.5">
                            {cs.tags.map((tag) => (
                              <span key={tag} className="rounded-md border border-[#e6e6e6] px-2 py-0.5 text-[11px] font-medium text-[#111]">{tag}</span>
                            ))}
                          </div>
                          <div className="flex items-center justify-between border-t border-[#eee] pt-4">
                            <Link href={cs.serviceUrl} className="text-[12px] font-medium text-[#6b7280] transition-colors hover:text-[#111]">{cs.service}</Link>
                            <Link href={cs.serviceUrl} className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#111]">
                              Read more <ArrowIcon />
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a0e1a]">
        <div className={`${CONTAINER} flex flex-col gap-10 py-20 md:flex-row md:items-center md:justify-between`}>
          <div className="flex max-w-xl flex-col gap-4">
            <h2 className="m-0 text-[28px] font-medium leading-[1.1] text-white md:text-[44px]">
              Let&apos;s build your success story on Azure.
            </h2>
            <p className="m-0 text-[18px] font-light leading-[1.6] text-white/70">
              Book a free 30-minute call. We&apos;ll assess where you are today and outline a
              realistic path forward — no obligation, no pressure.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton href={Constants.PAGES.SCHEDULE_CALL} dark>Schedule a free call</PrimaryButton>
            <SecondaryButton href={Constants.PAGES.SOLUTIONS} onDark>All solutions</SecondaryButton>
          </div>
        </div>
      </section>

    </div>
  );
}
