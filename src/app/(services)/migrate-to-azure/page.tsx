'use client';

import { Plus_Jakarta_Sans } from "next/font/google";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Constants } from '@/Constants';

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const steps = [
  { number: '01', title: 'Discovery & Assessment',  desc: 'We map your entire estate — workloads, dependencies, data, and integrations — and produce a migration readiness report with a risk-scored inventory of every asset.' },
  { number: '02', title: 'Migration Strategy',       desc: 'We select the right strategy for each workload: Rehost, Replatform, Refactor, Rearchitect, or Retire. No one-size-fits-all approach — every decision is justified.' },
  { number: '03', title: 'Landing Zone Setup',       desc: 'We build a secure, governance-ready Azure Landing Zone following Microsoft CAF best practices — networking, identity, policies, and cost management configured from day one.' },
  { number: '04', title: 'Migration & Cutover',      desc: 'We execute migrations in waves with parallel-run validation, automated rollback plans, and zero-downtime cutovers — keeping your business running throughout.' },
  { number: '05', title: 'Optimise & Handover',      desc: 'Post-migration we right-size resources, implement monitoring and alerting, and hand over full documentation and runbooks so your team is confident on day one.' },
];

const pillars = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" /></svg>,
    title: 'On-Premises to Azure',
    desc: 'Move physical servers, VMs, and databases from your data centre to Azure with Azure Migrate — minimal disruption, maximum speed.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>,
    title: 'AWS / GCP to Azure',
    desc: 'Cross-cloud migrations handled end-to-end — compute, storage, networking, and managed services re-mapped to their Azure equivalents with full data integrity.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>,
    title: 'Database Migration',
    desc: 'SQL Server, Oracle, MySQL, PostgreSQL — migrated to Azure SQL, Cosmos DB, or Azure Database for PostgreSQL with schema conversion and zero data loss.',
  },
];

const reasons = [
  { stat: '99.99%', label: 'Azure SLA uptime',    desc: 'Global redundancy and geo-replication keep your workloads available.' },
  { stat: '35%',   label: 'Average cost saving',  desc: 'Azure Hybrid Benefit, Reserved Instances, and right-sizing deliver measurable savings.' },
  { stat: '0 h',   label: 'Target downtime',       desc: 'We plan every cutover for zero business impact using live migration techniques.' },
];

const faqs = [
  { q: 'How long does a migration take?',              a: 'Timelines vary by estate size. A typical mid-market migration (50–200 workloads) completes in 8–16 weeks. We provide a firm schedule after the Discovery phase.' },
  { q: 'Will my applications need to be rewritten?',   a: 'Most workloads can be rehosted or replatformed with no code changes. Where refactoring adds clear value (cost, performance, scalability), we recommend it — but it is never mandatory.' },
  { q: 'What about compliance and data residency?',    a: 'Azure offers data residency in 60+ regions. We configure Azure Policy, Microsoft Defender, and regulatory compliance blueprints to meet GDPR, ISO 27001, SOC 2, and more.' },
  { q: 'Do you provide support after the migration?',  a: 'Yes. We offer Managed Services post-migration — from 8×5 monitoring up to 24×7 NOC support — so you never face Azure alone.' },
];

/* ── Liquid glass tokens ── */
const lg: React.CSSProperties = {
  background: "rgba(255,255,255,0.60)",
  backdropFilter: "blur(40px) saturate(160%)",
  WebkitBackdropFilter: "blur(40px) saturate(160%)",
  border: "1px solid rgba(255,255,255,0.82)",
  boxShadow: "0 2px 24px rgba(0,120,212,0.08), 0 1px 2px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.95)",
};
const lgCard: React.CSSProperties = {
  background: "rgba(255,255,255,0.52)",
  backdropFilter: "blur(32px) saturate(150%)",
  WebkitBackdropFilter: "blur(32px) saturate(150%)",
  border: "1px solid rgba(255,255,255,0.78)",
  boxShadow: "0 4px 32px rgba(0,120,212,0.07), 0 1px 3px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.90)",
};
const lgDark: React.CSSProperties = {
  background: "rgba(255,255,255,0.09)",
  backdropFilter: "blur(32px) saturate(150%)",
  WebkitBackdropFilter: "blur(32px) saturate(150%)",
  border: "1px solid rgba(255,255,255,0.18)",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25)",
};

export default function MigrateToAzurePage() {
  return (
    <div className={`relative min-h-full overflow-x-clip ${jakarta.className}`}>

      {/* ── Hero ──────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[100svh] flex items-center" style={{ background: "linear-gradient(145deg, #05102b 0%, #0c2461 28%, #0078d4 62%, #00bcf2 100%)" }}>

        {/* Blobs */}
        <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute rounded-full" style={{ width: 700, height: 700, top: "-20%", left: "-15%", background: "radial-gradient(circle, rgba(0,188,242,0.30) 0%, transparent 65%)", filter: "blur(70px)" }} />
          <div className="absolute rounded-full" style={{ width: 600, height: 600, top: "10%",  right: "-10%", background: "radial-gradient(circle, rgba(0,120,212,0.35) 0%, transparent 65%)", filter: "blur(60px)" }} />
          <div className="absolute rounded-full" style={{ width: 500, height: 500, bottom: "-15%", left: "30%", background: "radial-gradient(circle, rgba(100,210,255,0.25) 0%, transparent 65%)", filter: "blur(60px)" }} />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 pt-36 pb-24">
          <div className="flex flex-col lg:flex-row lg:items-center gap-14 xl:gap-20">

            {/* Left */}
            <motion.div className="flex-1 min-w-0" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.25,0.46,0.45,0.94] }}>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-10" style={lg}>
                <span className="text-[11px] font-semibold text-[#0078d4] tracking-widest uppercase">Cloud Migration</span>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-[96px] font-extrabold text-white leading-[0.97] tracking-[-0.045em] mb-8">
                Move to Azure<br />without<br />
                <span style={{ background: "linear-gradient(120deg, #64d2ff 0%, #00bcf2 50%, #38bdf8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  the risk.
                </span>
              </h1>

              <motion.p className="text-white/55 text-[18px] font-normal leading-[1.75] max-w-[460px] mb-10" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
                We migrate your workloads, databases, and infrastructure to Azure — on time, on budget, and with zero unplanned downtime. Every stage handled end-to-end.
              </motion.p>

              <motion.div className="flex flex-wrap gap-3" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}>
                <Link href={Constants.PAGES.SCHEDULE_CALL} className="bg-white hover:bg-white/90 text-[#0c2461] font-bold px-8 py-4 rounded-full text-base transition-colors whitespace-nowrap shadow-lg shadow-black/10">
                  Schedule a free assessment
                </Link>
                <Link href={Constants.PAGES.SOLUTIONS} className="font-medium px-8 py-4 rounded-full text-base text-white/80 hover:text-white transition-colors whitespace-nowrap" style={lg}>
                  View all solutions
                </Link>
              </motion.div>
            </motion.div>

            {/* Right — migration progress dashboard */}
            <motion.div className="lg:flex-1 lg:max-w-[480px] w-full" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.95, delay: 0.08, ease: [0.25,0.46,0.45,0.94] }}>
              <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}>
                <div className="rounded-[28px] p-7 flex flex-col gap-5" style={lgCard}>

                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#0078d4] uppercase tracking-widest">Migration Progress</span>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" style={{ boxShadow: "0 0 6px #34d399" }} />
                      <span className="text-[10px] text-[#0078d4] font-semibold">Active</span>
                    </div>
                  </div>

                  {/* Steps */}
                  <div className="flex flex-col gap-3">
                    {[
                      { label: "Discovery complete",         done: true  },
                      { label: "Landing Zone deployed",      done: true  },
                      { label: "Wave 1 — 18 / 43 workloads",done: false, progress: 42 },
                      { label: "Wave 2 — pending",           done: false, pending: true },
                      { label: "Cutover — scheduled",        done: false, pending: true },
                    ].map((row, i) => (
                      <div key={i} className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-3">
                          <span className={`text-xs shrink-0 w-4 ${row.done ? "text-emerald-500" : row.pending ? "text-slate-400" : "text-[#0078d4]"}`}>
                            {row.done ? "✓" : row.pending ? "○" : "▸"}
                          </span>
                          <span className={`text-sm ${row.done ? "text-[#0c2461] font-medium" : row.pending ? "text-slate-400" : "text-[#0c2461] font-semibold"}`} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12 }}>
                            {row.label}
                          </span>
                        </div>
                        {row.progress !== undefined && (
                          <div className="ml-7 flex items-center gap-2">
                            <div className="flex-1 h-1.5 rounded-full bg-blue-100 overflow-hidden">
                              <div className="h-full rounded-full" style={{ width: `${row.progress}%`, background: "linear-gradient(90deg, #0078d4, #00bcf2)" }} />
                            </div>
                            <span className="text-[10px] font-bold text-[#0078d4]">{row.progress}%</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 pt-1 border-t border-black/[0.06]">
                    {["Azure Migrate", "CAF", "Terraform", "Azure Policy"].map((t) => (
                      <span key={t} className="text-[10px] font-semibold text-[#0078d4] bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Migration types ───────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(160deg, #f0f9ff 0%, #e0f2fe 45%, #ecfeff 100%)" }}>
        <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute rounded-full" style={{ width: 700, height: 700, top: "-25%", right: "-15%", background: "radial-gradient(circle, rgba(0,188,242,0.25) 0%, transparent 65%)", filter: "blur(70px)" }} />
          <div className="absolute rounded-full" style={{ width: 500, height: 500, bottom: "-15%", left: "-5%",  background: "radial-gradient(circle, rgba(0,120,212,0.18) 0%, transparent 65%)", filter: "blur(60px)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-28">
          <div className="flex items-center gap-2 mb-5">
            <p className="text-xs uppercase tracking-wider text-[#0078d4] font-semibold">Migration types</p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#05102b] leading-[1.05] tracking-[-0.035em] mb-14 max-w-2xl">
            We migrate from<br />
            <span style={{ background: "linear-gradient(120deg, #0078d4 0%, #00bcf2 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              anywhere to Azure.
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pillars.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8%" }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-[22px] p-8 flex flex-col gap-5 hover:shadow-lg transition-shadow duration-300" style={lgCard}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-[#0078d4]" style={{ background: "rgba(0,120,212,0.10)", border: "1px solid rgba(0,120,212,0.18)" }}>
                  {p.icon}
                </div>
                <h3 className="text-base font-bold text-[#05102b] leading-snug">{p.title}</h3>
                <p className="text-[#334155] text-sm font-normal leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(145deg, #05102b 0%, #0c2461 40%, #0078d4 100%)" }}>
        <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute rounded-full" style={{ width: 600, height: 600, top: "-20%", right: "-10%", background: "radial-gradient(circle, rgba(0,188,242,0.20) 0%, transparent 65%)", filter: "blur(70px)" }} />
          <div className="absolute rounded-full" style={{ width: 400, height: 400, bottom: "0%", left: "5%", background: "radial-gradient(circle, rgba(100,210,255,0.15) 0%, transparent 65%)", filter: "blur(60px)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-28">
          <div className="flex items-center gap-2 mb-5">
            <p className="text-xs uppercase tracking-wider text-sky-400 font-semibold">How it works</p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-[-0.035em] mb-14">
            A proven five-step<br />migration process.
          </h2>

          <div className="flex flex-col gap-3">
            {steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-8%" }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-[22px] p-8 flex gap-8 items-start hover:bg-white/[0.04] transition-colors duration-200" style={lgDark}>
                <span className="text-4xl font-extrabold shrink-0 leading-none pt-1 tracking-[-0.04em]" style={{ background: "linear-gradient(135deg, #64d2ff 0%, #00bcf2 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {step.number}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-white tracking-[-0.01em]">{step.title}</h3>
                  <p className="text-white/50 text-[15px] font-normal leading-relaxed max-w-2xl">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(160deg, #f0f9ff 0%, #e0f2fe 50%, #f0f9ff 100%)" }}>
        <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute rounded-full" style={{ width: 600, height: 600, top: "0%", left: "20%", background: "radial-gradient(circle, rgba(0,188,242,0.20) 0%, transparent 65%)", filter: "blur(70px)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-28">
          <div className="flex items-center gap-2 mb-5">
            <p className="text-xs uppercase tracking-wider text-[#0078d4] font-semibold">Why Azure</p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#05102b] leading-[1.05] tracking-[-0.035em] mb-14">
            The numbers speak<br />for themselves.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-20">
            {reasons.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8%" }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-[22px] p-8 flex flex-col gap-3 hover:shadow-lg transition-shadow duration-300" style={lgCard}>
                <span className="text-5xl font-extrabold tracking-[-0.04em]" style={{ background: "linear-gradient(120deg, #0078d4 0%, #00bcf2 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {r.stat}
                </span>
                <h3 className="text-base font-bold text-[#05102b]">{r.label}</h3>
                <p className="text-[#334155] text-sm font-normal leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* FAQ */}
          <div className="flex items-center gap-2 mb-5">
            <p className="text-xs uppercase tracking-wider text-[#0078d4] font-semibold">Common questions</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#05102b] leading-[1.05] tracking-[-0.035em] mb-12">
            Frequently asked questions.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8%" }} transition={{ duration: 0.45, delay: i * 0.07 }}
                className="rounded-[22px] p-8 flex flex-col gap-3 hover:shadow-lg transition-shadow duration-300" style={lgCard}>
                <h3 className="text-base font-bold text-[#05102b] leading-snug">{faq.q}</h3>
                <p className="text-[#334155] text-sm font-normal leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA banner */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8%" }} transition={{ duration: 0.6 }}
            className="rounded-[24px] px-10 py-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between"
            style={{ background: "linear-gradient(135deg, #0078d4 0%, #0c2461 100%)", border: "1px solid rgba(255,255,255,0.15)", boxShadow: "0 20px 60px rgba(0,120,212,0.25), inset 0 1px 0 rgba(255,255,255,0.20)" }}
          >
            <div className="max-w-lg">
              <h3 className="text-2xl font-extrabold text-white tracking-[-0.025em] mb-2">Ready to start your migration?</h3>
              <p className="text-white/60 text-[15px] font-normal leading-relaxed">Book a free 30-minute assessment. We&apos;ll review your current estate and give you a clear migration roadmap — no obligation.</p>
            </div>
            <Link href={Constants.PAGES.SCHEDULE_CALL}
              className="shrink-0 inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-white/90 text-[#0c2461] font-bold text-sm transition-all whitespace-nowrap shadow-lg shadow-black/10">
              Schedule a free assessment
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
