'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ContactUsFooter from '@/app/components/partials/ContactUsFooter';
import { Constants } from '@/Constants';

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
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 shrink-0">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

const lg: React.CSSProperties = {
  background: "rgba(255,255,255,0.62)",
  backdropFilter: "blur(40px) saturate(180%)",
  WebkitBackdropFilter: "blur(40px) saturate(180%)",
  border: "1px solid rgba(255,255,255,0.85)",
  boxShadow: "0 4px 32px rgba(232,154,120,0.10), 0 1px 2px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.95)",
};

const lgCard: React.CSSProperties = {
  background: "rgba(255,255,255,0.55)",
  backdropFilter: "blur(32px) saturate(160%)",
  WebkitBackdropFilter: "blur(32px) saturate(160%)",
  border: "1px solid rgba(255,255,255,0.80)",
  boxShadow: "0 2px 20px rgba(232,154,120,0.08), inset 0 1px 0 rgba(255,255,255,0.92)",
};

export default function CaseStudiesPage() {
  const [active, setActive] = useState<Industry>('All');
  const filtered = active === 'All' ? caseStudies : caseStudies.filter((c) => c.industry === active);
  const [featured, ...rest] = filtered;

  return (
    <div className="relative min-h-full overflow-x-clip">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden min-h-[100svh] flex items-center" style={{ background: "linear-gradient(145deg, #fff5ee 0%, #fdf0e8 30%, #fef6f0 60%, #fff8f2 100%)" }}>
        <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute rounded-full" style={{ width: 820, height: 820, top: "-15%", right: "-10%", background: "radial-gradient(circle, rgba(240,140,60,0.30) 0%, transparent 65%)", filter: "blur(70px)" }} />
          <div className="absolute rounded-full" style={{ width: 680, height: 680, top: "28%", left: "-18%", background: "radial-gradient(circle, rgba(232,154,120,0.18) 0%, transparent 65%)", filter: "blur(60px)" }} />
          <div className="absolute rounded-full" style={{ width: 500, height: 500, bottom: "-10%", left: "25%", background: "radial-gradient(circle, rgba(232,154,120,0.16) 0%, transparent 65%)", filter: "blur(60px)" }} />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 pt-36 pb-24">
          <div className="flex flex-col lg:flex-row lg:items-center gap-14 xl:gap-20">

            {/* Left */}
            <motion.div className="flex-1 min-w-0" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.25,0.46,0.45,0.94] }}>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-10" style={{ ...lg, borderRadius: 999 }}>
                <span className="text-[11px] font-semibold tracking-widest uppercase" style={{ color: '#b86a30' }}>Solutions · Case Studies</span>
              </div>

              <h1 className="font-black text-[#0a0e1a] leading-[1.05] tracking-[-0.045em] mb-8" style={{ fontSize: "clamp(44px, 6vw, 80px)" }}>
                Proven results{' '}
                <span style={{ background: "linear-gradient(120deg, #f0a060 0%, #e89a78 50%, #d4845c 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  across every industry
                </span>
              </h1>

              <motion.p className="text-[#0a0e1a]/52 text-lg leading-[1.75] max-w-[480px] mb-10" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
                Real outcomes for real organisations — from financial services to healthcare. See how we help businesses modernise, scale, and cut costs on Azure.
              </motion.p>

              <motion.div className="flex flex-wrap gap-3" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}>
                <Link href={Constants.PAGES.SCHEDULE_CALL} className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold transition-all text-white whitespace-nowrap" style={{ background: "#e89a78", boxShadow: "0 4px 16px rgba(232,154,120,0.35)" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                  Schedule a free call
                </Link>
                <Link href={Constants.PAGES.SOLUTIONS} className="inline-flex items-center px-8 py-4 rounded-full text-base font-semibold transition-all whitespace-nowrap" style={{ ...lg, color: '#b86a30', borderRadius: 999 }}>
                  View all solutions
                </Link>
              </motion.div>
            </motion.div>

            {/* Right — stats glass card */}
            <motion.div className="lg:flex-1 lg:max-w-[420px] w-full" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.95, delay: 0.08 }}>
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}>
                <div className="rounded-[28px] p-7 flex flex-col gap-5" style={lgCard}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: '#b86a30' }}>Our Track Record</span>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" style={{ boxShadow: "0 0 6px #34d399" }} />
                      <span className="text-[10px] font-medium" style={{ color: '#c4743c' }}>Verified</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {heroStats.map((s, i) => (
                      <div key={i} className="rounded-2xl p-4 flex flex-col gap-1" style={{ background: 'rgba(255,255,255,0.60)', border: '1px solid rgba(255,255,255,0.80)' }}>
                        <p className="text-2xl font-black text-[#0a0e1a]" style={{ letterSpacing: '-0.03em' }}>{s.value}</p>
                        <p className="text-[10px] text-[#0a0e1a]/40 font-medium leading-snug">{s.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {['Financial Services', 'Healthcare', 'Retail', 'SaaS'].map(t => (
                      <span key={t} className="text-[10px] font-semibold px-2.5 py-1 rounded-full" style={{ color: '#b86a30', background: 'rgba(240,160,96,0.12)', border: '1px solid rgba(240,160,96,0.25)' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Filter + Cards ── */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(160deg, #fdf0e8 0%, #fff5ee 40%, #fef6f0 100%)" }}>
        <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute rounded-full" style={{ width: 700, height: 700, top: "-10%", right: "-10%", background: "radial-gradient(circle, rgba(240,140,60,0.18) 0%, transparent 65%)", filter: "blur(70px)" }} />
          <div className="absolute rounded-full" style={{ width: 500, height: 500, bottom: "-10%", left: "10%", background: "radial-gradient(circle, rgba(232,154,120,0.15) 0%, transparent 65%)", filter: "blur(60px)" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 sm:py-24">

          {/* Filter pills */}
          <motion.div className="flex flex-wrap gap-2 mb-12" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, margin: '-60px' }}>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className="px-4 py-2 rounded-full text-xs font-semibold tracking-wide border transition-all duration-200"
                style={active === f
                  ? { background: '#e89a78', borderColor: '#e89a78', color: '#ffffff' }
                  : { background: 'rgba(255,255,255,0.60)', borderColor: '#e8d0b8', color: '#6b6b6b' }
                }
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

              {/* Featured card */}
              {featured && (
                <motion.div
                  key={`${featured.id}-featured`}
                  className="group rounded-2xl overflow-hidden"
                  style={lgCard}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="h-[3px]" style={{ backgroundColor: industryStyle[featured.industry].bar }} />
                  <div className="p-7 sm:p-10 lg:p-12">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-6">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold ${industryStyle[featured.industry].pill}`}>
                            {featured.industry}
                          </span>
                          <span className="hidden sm:block text-[10px] uppercase tracking-[0.15em] text-[#0a0e1a]/30 font-semibold">Featured</span>
                        </div>
                        <p className="text-[10px] uppercase tracking-[0.15em] text-[#0a0e1a]/35 font-semibold mb-3">{featured.client}</p>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0a0e1a] leading-tight mb-5 max-w-2xl">{featured.title}</h2>
                        <p className="text-[#0a0e1a]/52 text-base leading-relaxed mb-8 max-w-2xl">{featured.desc}</p>
                        <div className="flex flex-wrap gap-2 mb-8">
                          {featured.tags.map((tag) => (
                            <span key={tag} className="text-[11px] px-3 py-1 rounded-lg font-medium" style={{ color: '#b86a30', background: 'rgba(240,160,96,0.12)', border: '1px solid rgba(240,160,96,0.20)' }}>{tag}</span>
                          ))}
                        </div>
                        <div className="flex items-center gap-5">
                          <Link href={featured.serviceUrl} className="inline-flex items-center gap-2 px-5 min-h-[44px] rounded-full font-semibold text-sm transition-all text-white hover:opacity-90" style={{ background: '#e89a78' }}>
                            View {featured.service}
                            <ArrowIcon />
                          </Link>
                          <span className="text-xs text-[#0a0e1a]/30 font-medium">NativeCloud · {featured.service}</span>
                        </div>
                      </div>
                      <div className="lg:w-52 shrink-0">
                        <div className="p-6 rounded-2xl" style={{ background: 'rgba(255,255,255,0.70)', border: '1px solid rgba(255,255,255,0.90)', boxShadow: '0 2px 12px rgba(232,154,120,0.10)' }}>
                          <p className="text-5xl sm:text-6xl font-black leading-none mb-2" style={{ color: industryStyle[featured.industry].bar }}>{featured.metric.value}</p>
                          <p className="text-xs text-[#0a0e1a]/40 font-medium leading-snug">{featured.metric.label}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Regular cards grid */}
              {rest.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.map((cs, i) => {
                    const sty = industryStyle[cs.industry];
                    return (
                      <motion.div
                        key={cs.id}
                        className="group flex flex-col rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300"
                        style={lgCard}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.07 }}
                      >
                        <div className="h-[3px] shrink-0" style={{ backgroundColor: sty.bar }} />
                        <div className="flex flex-col flex-1 p-6">
                          <div className="mb-5">
                            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold ${sty.pill}`}>{cs.industry}</span>
                          </div>
                          <div className="mb-5">
                            <p className="text-4xl font-black leading-none mb-1" style={{ color: sty.metricColor }}>{cs.metric.value}</p>
                            <p className="text-xs text-[#0a0e1a]/40 font-medium">{cs.metric.label}</p>
                          </div>
                          <div className="border-t border-[#f0e0d0] mb-5" />
                          <p className="text-[10px] uppercase tracking-[0.15em] text-[#0a0e1a]/40 font-semibold mb-2">{cs.client}</p>
                          <h3 className="text-[15px] font-bold text-[#0a0e1a] leading-snug mb-3">{cs.title}</h3>
                          <p className="text-sm text-[#0a0e1a]/52 leading-relaxed mb-5 flex-1">{cs.desc}</p>
                          <div className="flex flex-wrap gap-1.5 mb-5">
                            {cs.tags.map((tag) => (
                              <span key={tag} className="text-[11px] px-2.5 py-1 rounded-lg font-medium" style={{ color: '#b86a30', background: 'rgba(240,160,96,0.10)', border: '1px solid rgba(240,160,96,0.18)' }}>{tag}</span>
                            ))}
                          </div>
                          <div className="flex items-center justify-between pt-4 border-t border-[#f0e0d0]">
                            <Link href={cs.serviceUrl} className="text-xs font-medium hover:text-[#e89a78] transition-colors" style={{ color: '#9b9589' }}>{cs.service}</Link>
                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold group-hover:gap-2.5 transition-all duration-200 cursor-pointer" style={{ color: '#e89a78' }}>
                              Read more <ArrowIcon />
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
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(145deg, #fdf0e8 0%, #fff5ee 40%, #fff8f2 100%)" }}>
        <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute rounded-full" style={{ width: 600, height: 600, top: "-20%", right: "-10%", background: "radial-gradient(circle, rgba(240,140,60,0.22) 0%, transparent 65%)", filter: "blur(70px)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20">
          <motion.div
            className="rounded-[24px] px-10 py-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between"
            style={lg}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-40px' }}
          >
            <div className="max-w-lg">
              <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: '#b86a30' }}>Ready to be next?</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0a0e1a] mb-3 leading-tight">Let&apos;s build your success story on Azure</h3>
              <p className="text-[#0a0e1a]/48 text-sm leading-relaxed">Book a free 30-minute call. We&apos;ll assess where you are today and outline a realistic path forward — no obligation, no pressure.</p>
            </div>
            <Link href={Constants.PAGES.SCHEDULE_CALL} className="shrink-0 inline-flex items-center justify-center gap-2.5 px-7 min-h-[52px] rounded-full font-semibold text-sm transition-all text-white w-full sm:w-auto hover:opacity-90" style={{ background: '#e89a78', boxShadow: '0 4px 16px rgba(232,154,120,0.35)' }}>
              Schedule a free call
              <ArrowIcon />
            </Link>
          </motion.div>
        </div>
      </section>

      <ContactUsFooter />
    </div>
  );
}
