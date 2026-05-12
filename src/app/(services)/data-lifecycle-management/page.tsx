'use client';

import { Link } from 'react-transition-progress/next';
import { motion } from 'framer-motion';
import { Constants } from '@/Constants';

const MONO: React.CSSProperties = { fontFamily: "'JetBrains Mono', monospace" };

const glass: React.CSSProperties = {
  background: 'rgba(255,255,255,0.72)',
  backdropFilter: 'blur(48px) saturate(200%)',
  WebkitBackdropFilter: 'blur(48px) saturate(200%)',
  border: '1px solid rgba(255,255,255,0.90)',
  borderRadius: 20,
  boxShadow: '0 24px 64px rgba(0,0,0,0.10), 0 2px 4px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.98)',
};

const glassLight: React.CSSProperties = {
  background: 'rgba(255,255,255,0.55)',
  backdropFilter: 'blur(32px) saturate(180%)',
  WebkitBackdropFilter: 'blur(32px) saturate(180%)',
  border: '1px solid rgba(255,255,255,0.80)',
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.95)',
};

const features = [
  { num: '01', title: 'Azure Landing Zone',           body: 'Enterprise-grade cloud foundation — networking, security, RBAC, Key Vault, and storage tiers provisioned and compliant before your first byte arrives.',         color: '#0284c7' },
  { num: '02', title: 'Data Extraction & Ingestion',  body: 'Connect any source — databases, APIs, flat files, event streams — into your Azure Data Lake with automated, monitored pipelines.',                               color: '#7c3aed' },
  { num: '03', title: 'Transformation & Cleaning',    body: 'Bronze → Silver → Gold pipelines that normalise, deduplicate, validate, and enrich raw data before it reaches any analytics or ML workload.',                     color: '#e89a78' },
  { num: '04', title: 'Data Science & Analysis',      body: 'Surface patterns, trends, and predictions using Azure Synapse Analytics and Databricks — turning historical records into forward-looking insight.',               color: '#059669' },
  { num: '05', title: 'Data Visualisation',           body: 'Power BI reports and dashboards that translate complex datasets into clear, actionable views — built with your business users, not just your data team.',         color: '#0284c7' },
  { num: '06', title: 'AI & Machine Learning',        body: 'Embed predictive models and real-time intelligence into your data workflows — automate decisions, detect anomalies, and respond to events as they happen.',       color: '#7c3aed' },
];

const processSteps = [
  { step: '01', heading: 'Discovery & Data Audit',         body: 'We map your data sources, understand volumes, formats, and access patterns — then design the target architecture before a single resource is provisioned.' },
  { step: '02', heading: 'Azure Landing Zone Setup',        body: 'We provision the full foundation: networking, IAM, Key Vault, storage tiers, and compliance controls — your data platform starts secure from day one.' },
  { step: '03', heading: 'Extraction & Pipeline Build',     body: 'We connect your sources, build ingestion pipelines, and land raw data in the bronze layer of your Data Lake — with alerting and monitoring in place.' },
  { step: '04', heading: 'Transformation & Enrichment',     body: 'We build silver and gold layer pipelines that clean, join, and enrich your data — making it ready for reporting, analytics, and machine learning.' },
  { step: '05', heading: 'Visualisation & Validation',      body: 'We build Power BI reports and dashboards, then validate every metric with your business stakeholders before the platform is handed over.' },
  { step: '06', heading: 'Handover, Training & Support',    body: 'Your team gets full ownership, thorough documentation, and access to our support desk — so you can scale the platform confidently without depending on us.' },
];

const layers = [
  { label: 'Bronze', color: '#cd7f32', bg: 'rgba(205,127,50,0.12)', desc: 'Raw ingested data', status: 'ingesting' },
  { label: 'Silver', color: '#9ca3af', bg: 'rgba(156,163,175,0.12)', desc: 'Cleaned & validated',  status: 'processing' },
  { label: 'Gold',   color: '#f59e0b', bg: 'rgba(245,158,11,0.12)', desc: 'Ready for analytics',   status: 'live' },
];

export default function DataLifecycleManagementPage() {
  return (
    <div style={MONO} className="min-h-screen bg-white overflow-x-clip">

      <style>{`
        .dlm-gradient-text {
          background: linear-gradient(135deg, #0284c7 0%, #e89a78 55%, #059669 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        @keyframes pulse-dot { 0%,100%{opacity:1} 50%{opacity:0.3} }
      `}</style>

      {/* ── Hero ── */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.07]"
            style={{ background: 'radial-gradient(circle, #0284c7 0%, transparent 70%)' }} />
          <div className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full opacity-[0.06]"
            style={{ background: 'radial-gradient(circle, #e89a78 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.05]"
            style={{ background: 'radial-gradient(circle, #059669 0%, transparent 70%)' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-36 pb-16">

          <motion.div
            className="inline-flex items-center gap-2.5 bg-[#e8f4fb] border border-[#bde0f5] rounded-full px-4 py-1.5 mb-10"
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] shrink-0" />
            <span className="text-[11px] font-semibold text-[#0284c7] tracking-widest uppercase">
              Data Lifecycle · Azure · Power BI
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-center gap-16 xl:gap-24">

            {/* Headline */}
            <div className="flex-1 min-w-0">
              <motion.h1
                className="text-6xl md:text-7xl lg:text-8xl font-black text-[#0a0e1a] leading-[1.0] tracking-tight mb-8"
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              >
                Raw data to<br />
                <span className="dlm-gradient-text">live insight</span><br />
                on Azure.
              </motion.h1>
              <motion.p
                className="text-[#4b5563] text-xl leading-relaxed max-w-[500px] mb-10"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              >
                We design and build end-to-end data platforms — from raw ingestion to clean analytics layers — so your organisation can act on data instead of just storing it.
              </motion.p>
              <motion.div
                className="flex flex-wrap items-center gap-3"
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link
                  href={Constants.PAGES.SCHEDULE_CALL}
                  className="bg-[#0a0e1a] hover:bg-[#0284c7] text-white px-8 py-4 rounded-full text-base font-semibold transition-colors whitespace-nowrap"
                >
                  Start your data journey
                </Link>
                <Link
                  href={Constants.PAGES.SOLUTIONS}
                  className="bg-white border border-[#e5e7eb] hover:border-[#d1d5db] hover:bg-[#f9fafb] text-[#374151] px-8 py-4 rounded-full text-base font-medium transition-colors whitespace-nowrap"
                >
                  View all solutions
                </Link>
              </motion.div>
            </div>

            {/* Data pipeline card */}
            <motion.div
              className="flex-1 lg:max-w-[480px] w-full"
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ background: '#0d1220' }}>
                {/* Window chrome */}
                <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.07]" style={{ background: '#111827' }}>
                  <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
                  <span className="ml-3 text-xs text-white/30">data-platform — pipeline monitor</span>
                </div>

                {/* Pipeline layers */}
                <div className="p-5 flex flex-col gap-3">
                  {layers.map((layer, i) => (
                    <div key={i} className="rounded-xl px-4 py-3.5 flex items-center justify-between" style={{ background: layer.bg, border: `1px solid ${layer.color}22` }}>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold tracking-widest" style={{ color: layer.color }}>{layer.label}</span>
                        <span className="text-white/50 text-xs">{layer.desc}</span>
                      </div>
                      <span className="flex items-center gap-1.5 text-xs" style={{ color: layer.color }}>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: layer.color, animation: 'pulse-dot 2s ease-in-out infinite', animationDelay: `${i * 0.4}s` }} />
                        {layer.status}
                      </span>
                    </div>
                  ))}

                  <div className="mt-1 flex flex-col gap-2 text-xs">
                    {[
                      { icon: '✓', color: '#28c840', text: '14 sources connected · last run 2m ago' },
                      { icon: '✓', color: '#28c840', text: '2.4 M rows processed · 0 validation errors' },
                      { icon: '→', color: '#e89a78', text: 'Power BI refresh scheduled in 8 min' },
                    ].map((row, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span style={{ color: row.color }} className="shrink-0">{row.icon}</span>
                        <span className="text-white/60">{row.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Status bar */}
                <div className="px-5 py-3 flex items-center justify-between border-t border-white/[0.06] text-xs" style={{ background: '#111827' }}>
                  <span className="text-white/40">Azure Data Lake Gen2 · Synapse · Power BI</span>
                  <span className="flex items-center gap-1.5 text-white/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#28c840]" style={{ boxShadow: '0 0 5px #28c840' }} />
                    running
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { val: '14+',  label: 'data sources' },
                  { val: '< 5m', label: 'refresh time' },
                  { val: '100%', label: 'data lineage' },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl px-4 py-3 text-center bg-[#f9fafb] border border-[#e5e7eb]">
                    <p className="text-[#0a0e1a] text-lg font-bold leading-none mb-1">{s.val}</p>
                    <p className="text-[#9ca3af] text-[11px] leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Tech strip ── */}
      <div className="bg-[#f9fafb] border-y border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-wrap items-center gap-x-8 gap-y-3">
          <span className="text-[11px] uppercase tracking-widest text-[#9ca3af] font-semibold shrink-0">Built on</span>
          {['Azure Data Lake', 'Data Factory', 'Synapse Analytics', 'Databricks', 'Power BI', 'Azure ML', 'Key Vault'].map((t) => (
            <span key={t} className="text-sm text-[#6b7280] whitespace-nowrap">{t}</span>
          ))}
        </div>
      </div>

      {/* ── What's included — glass cards on gradient ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden
          style={{ background: 'linear-gradient(160deg, #f0f9ff 0%, #faf5ff 50%, #f0fdf4 100%)' }} />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
            <p className="text-xs uppercase tracking-wider text-[#6b7280] font-medium">What&apos;s included</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a0e1a] leading-tight max-w-xl">
              The full data stack,<br />end to end.
            </h2>
            <Link
              href={Constants.PAGES.SCHEDULE_CALL}
              className="shrink-0 self-start md:self-end inline-flex items-center bg-[#0a0e1a] hover:bg-[#1a2235] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors whitespace-nowrap"
            >
              Start your data journey
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={i}
                style={glassLight}
                className="p-8 flex flex-col gap-3 hover:shadow-lg transition-shadow duration-200"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.07 }}
                viewport={{ once: true, margin: '-40px' }}
              >
                <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: f.color }}>{f.num}</span>
                <h3 className="text-[15px] font-semibold text-[#0a0e1a] leading-snug">{f.title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{f.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why DLM / For whom — two glass panels ── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="rounded-3xl bg-[#0a0e1a] px-10 py-12 flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
                <p className="text-xs uppercase tracking-wider text-white/50 font-medium">Why DLM?</p>
              </div>
              <p className="text-white text-lg leading-relaxed">
                Data is one of the most valuable elements of your organisation. It shows you what your situation was, what it is, and what it could be — and DLM lets you make it accessible to serve customers better, create business opportunities, and power decisions with real intelligence.
              </p>
            </div>
            <div className="rounded-3xl bg-[#e8f4fb] border border-[#bde0f5] px-10 py-12 flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] shrink-0" />
                <p className="text-xs uppercase tracking-wider text-[#0284c7]/70 font-medium">For whom?</p>
              </div>
              <p className="text-[#0a0e1a] text-lg leading-relaxed">
                Any organisation in any sector — whether you have hundreds of records or billions. Whether you are already on Azure, partly on-premises, or not yet in the cloud at all, we tailor the journey to where you are today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process — glass panel ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden
          style={{ background: 'linear-gradient(160deg, #faf5ff 0%, #f0f9ff 100%)' }} />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
            <p className="text-xs uppercase tracking-wider text-[#6b7280] font-medium">How we work</p>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a0e1a] leading-tight max-w-xl">
              From raw data to reliable<br />insight — without disruption.
            </h2>
            <Link
              href={Constants.PAGES.SCHEDULE_CALL}
              className="shrink-0 self-start lg:self-end inline-flex items-center bg-[#0a0e1a] hover:bg-[#1a2235] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors whitespace-nowrap"
            >
              Schedule a free call
            </Link>
          </div>

          <div style={glass} className="overflow-hidden">
            <div className="divide-y divide-black/[0.06]">
              {processSteps.map((s, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 px-10 py-8 hover:bg-black/[0.02] transition-colors"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.06 }}
                  viewport={{ once: true, margin: '-40px' }}
                >
                  <span className="text-[11px] font-semibold text-[#9A9A9A] tracking-widest uppercase shrink-0 pt-0.5 w-6">{s.step}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[15px] font-semibold text-[#0E0E12] mb-1.5">{s.heading}</h3>
                    <p className="text-[13px] text-[#6B6B6B] leading-relaxed">{s.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="px-10 py-5 border-t border-black/[0.07] flex items-center justify-between" style={{ background: 'rgba(255,255,255,0.40)' }}>
              <p className="text-[13px] text-[#9A9A9A]">Not sure where to start?</p>
              <Link
                href={Constants.PAGES.SCHEDULE_CALL}
                className="inline-flex items-center gap-2 text-[13px] font-medium text-[#e89a78] hover:text-[#d4836a] transition-colors"
              >
                Schedule a free call
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
