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

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
      </svg>
    ),
    title: 'System Design & Architecture',
    desc: 'We design end-to-end cloud architectures tailored to your workload — choosing the right services, patterns, and topology before a single line of code is written.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
      </svg>
    ),
    title: 'Microservices & API Design',
    desc: 'We decompose monoliths into well-bounded microservices with clean APIs — structured for independent deployability, scalability, and long-term maintainability.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
      </svg>
    ),
    title: 'Infrastructure as Code',
    desc: 'We provision and manage all infrastructure through code — Terraform, Bicep, or Pulumi — so every environment is reproducible, auditable, and version-controlled.',
  },
];

const services = [
  { title: 'Well-Architected Reviews',       desc: 'Audit your existing cloud setup against the five pillars of the Azure or AWS Well-Architected Framework and get a prioritised improvement roadmap.' },
  { title: 'Reference Architecture Blueprints', desc: 'Proven, battle-tested architecture patterns — multi-region HA, event-driven systems, CQRS/ES — adapted to your domain and delivered as living documentation.' },
  { title: 'Cloud Migration Architecture',   desc: 'Lift-and-shift, re-platform, or full re-architect — we plan the migration path that minimises risk and maximises the value of the cloud.' },
  { title: 'Serverless & Container Architecture', desc: 'Design containerised workloads on AKS or EKS, or go fully serverless with Azure Functions and Azure Container Apps — right-sized for cost and performance.' },
  { title: 'Event-Driven Architecture',      desc: 'Decouple services with reliable messaging and event streaming using Azure Service Bus, Event Grid, or Kafka — built for resilience at any scale.' },
  { title: 'Security & Compliance Design',   desc: 'Zero-trust network design, identity architecture, encryption at rest and in transit, and compliance mapping for ISO 27001, SOC 2, GDPR, and more.' },
];

const reasons = [
  { stat: '3×',  label: 'Faster time-to-scale',  desc: 'Well-designed systems scale horizontally without rewrites.' },
  { stat: '60%', label: 'Lower incident rate',    desc: 'Architecture reviews catch failure modes before they hit production.' },
  { stat: '40%', label: 'Reduced cloud spend',    desc: 'Right-sized resources and optimised data flows cut waste at the source.' },
];

/* ── Authentic Apple liquid-glass ── */
const lg: React.CSSProperties = {
  background: "rgba(255,255,255,0.60)",
  backdropFilter: "blur(40px) saturate(160%)",
  WebkitBackdropFilter: "blur(40px) saturate(160%)",
  border: "1px solid rgba(255,255,255,0.82)",
  boxShadow: "0 2px 24px rgba(14,116,144,0.08), 0 1px 2px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.95)",
};
const lgCard: React.CSSProperties = {
  background: "rgba(255,255,255,0.52)",
  backdropFilter: "blur(32px) saturate(150%)",
  WebkitBackdropFilter: "blur(32px) saturate(150%)",
  border: "1px solid rgba(255,255,255,0.78)",
  boxShadow: "0 4px 32px rgba(14,116,144,0.07), 0 1px 3px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.90)",
};

function Blobs({ items }: { items: { w: number; h: number; top?: string; left?: string; right?: string; bottom?: string; color: string; blur?: number; delay?: string }[] }) {
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
      {items.map((b, i) => (
        <div key={i} className="absolute rounded-full" style={{ width: b.w, height: b.h, top: b.top, left: b.left, right: b.right, bottom: b.bottom, background: `radial-gradient(circle, ${b.color} 0%, transparent 65%)`, filter: `blur(${b.blur ?? 60}px)` }} />
      ))}
    </div>
  );
}

export default function CloudSoftwareArchitecturePage() {
  return (
    <div className={`relative min-h-full overflow-x-clip ${jakarta.className}`}>

      {/* ── Hero ──────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[100svh] flex items-center" style={{ background: "linear-gradient(145deg, #0b1437 0%, #0f2d6b 28%, #0c4a8c 55%, #0369a1 80%, #0891b2 100%)" }}>
        <Blobs items={[
          { w: 700, h: 700, top: "-20%", left: "-15%",  color: "rgba(147,197,253,0.35)", delay: "0s" },
          { w: 600, h: 600, top: "15%",  right: "-12%", color: "rgba(34,211,238,0.25)",  delay: "0.8s" },
          { w: 500, h: 500, bottom: "-15%", left: "30%",color: "rgba(96,165,250,0.30)",  delay: "1.4s" },
          { w: 300, h: 300, top: "60%",  left: "10%",   color: "rgba(165,243,252,0.20)", delay: "0.4s" },
        ]} />

        <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 pt-36 pb-24">
          <div className="flex flex-col lg:flex-row lg:items-center gap-14 xl:gap-20">

            {/* Left */}
            <motion.div className="flex-1 min-w-0" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.25,0.46,0.45,0.94] }}>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-10" style={lg}>
                <span className="text-[11px] font-semibold text-sky-700 tracking-widest uppercase">Cloud Architecture</span>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-[96px] font-extrabold text-white leading-[0.97] tracking-[-0.045em] mb-8">
                Systems that<br />
                scale from<br />
                <span style={{ background: "linear-gradient(120deg, #7dd3fc 0%, #38bdf8 40%, #22d3ee 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  day one.
                </span>
              </h1>

              <motion.p className="text-white/55 text-[18px] font-normal leading-[1.75] max-w-[460px] mb-10" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
                We architect cloud-native solutions built for performance, resilience, and growth — making the right design decisions before a single line of code is written.
              </motion.p>

              <motion.div className="flex flex-wrap gap-3" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}>
                <Link href={Constants.PAGES.SCHEDULE_CALL} className="bg-white hover:bg-white/90 text-[#0c4a8c] font-bold px-8 py-4 rounded-full text-base transition-colors whitespace-nowrap shadow-lg shadow-black/10">
                  Schedule a free call
                </Link>
                <Link href={Constants.PAGES.SOLUTIONS} className="font-medium px-8 py-4 rounded-full text-base text-white/80 hover:text-white transition-colors whitespace-nowrap" style={lg}>
                  View all solutions
                </Link>
              </motion.div>
            </motion.div>

            {/* Right — floating architecture diagram */}
            <motion.div className="lg:flex-1 lg:max-w-[500px] w-full" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.95, delay: 0.08, ease: [0.25,0.46,0.45,0.94] }}>
              <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}>
                <div className="rounded-[28px] p-7 flex flex-col gap-5" style={lgCard}>
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-sky-700 uppercase tracking-widest">Cloud Architecture</span>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" style={{ boxShadow: "0 0 6px #34d399" }} />
                      <span className="text-[10px] text-sky-600 font-medium">Live</span>
                    </div>
                  </div>

                  {/* Architecture diagram */}
                  <div className="flex flex-col gap-3">
                    {/* Top row — CDN + Gateway */}
                    <div className="grid grid-cols-2 gap-2.5">
                      {[
                        { label: "CDN / WAF", color: "from-sky-200/60 to-blue-100/40" },
                        { label: "API Gateway", color: "from-blue-200/60 to-indigo-100/40" },
                      ].map((n) => (
                        <div key={n.label} className={`h-12 rounded-2xl bg-gradient-to-br ${n.color} flex items-center justify-center`} style={{ border: "1px solid rgba(255,255,255,0.80)" }}>
                          <span className="text-[11px] font-semibold text-sky-800">{n.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center">
                      <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
                        <path d="M12 0v12M6 8l6 6 6-6" stroke="rgba(14,116,144,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    {/* Middle row — microservices */}
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { label: "Auth",    color: "from-violet-200/50 to-purple-100/30" },
                        { label: "Orders",  color: "from-sky-200/50 to-cyan-100/30" },
                        { label: "Events",  color: "from-teal-200/50 to-emerald-100/30" },
                      ].map((n) => (
                        <div key={n.label} className={`h-16 rounded-2xl bg-gradient-to-br ${n.color} flex items-center justify-center`} style={{ border: "1px solid rgba(255,255,255,0.75)" }}>
                          <span className="text-[11px] font-semibold text-slate-700">{n.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center">
                      <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
                        <path d="M12 0v12M6 8l6 6 6-6" stroke="rgba(14,116,144,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    {/* Bottom row — storage */}
                    <div className="grid grid-cols-2 gap-2.5">
                      {[
                        { label: "Azure SQL / Cosmos", color: "from-blue-200/60 to-sky-100/40" },
                        { label: "Blob / Redis",       color: "from-cyan-200/60 to-teal-100/40" },
                      ].map((n) => (
                        <div key={n.label} className={`h-12 rounded-2xl bg-gradient-to-br ${n.color} flex items-center justify-center px-2`} style={{ border: "1px solid rgba(255,255,255,0.80)" }}>
                          <span className="text-[10px] font-semibold text-sky-800 text-center leading-tight">{n.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {["Azure", "Kubernetes", "Terraform", "IaC"].map((t) => (
                      <span key={t} className="text-[10px] font-semibold text-sky-700 bg-sky-100/70 border border-sky-200/60 px-2.5 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Three pillars ─────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(160deg, #f0f9ff 0%, #e0f2fe 40%, #ecfeff 100%)" }}>
        <Blobs items={[
          { w: 700, h: 700, top: "-20%", right: "-15%", color: "rgba(147,197,253,0.35)", blur: 70 },
          { w: 500, h: 500, bottom: "-15%", left: "-10%", color: "rgba(165,243,252,0.30)", blur: 60 },
        ]} />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-28">
          <div className="flex items-center gap-2 mb-5">
            <p className="text-xs uppercase tracking-wider text-sky-600 font-semibold">What we do</p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0c1445] leading-[1.05] tracking-[-0.035em] mb-14 max-w-2xl">
            Three disciplines that make<br />architecture{" "}
            <span style={{ background: "linear-gradient(120deg, #0369a1 0%, #0891b2 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>future-proof.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-[22px] p-8 flex flex-col gap-5 hover:shadow-lg transition-shadow duration-300"
                style={lgCard}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-sky-600" style={{ background: "rgba(14,165,233,0.12)", border: "1px solid rgba(14,165,233,0.20)" }}>
                  {p.icon}
                </div>
                <h3 className="text-base font-bold text-[#0c1445] leading-snug">{p.title}</h3>
                <p className="text-[#334155] text-sm font-light leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services grid ─────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 50%, #ecfeff 100%)" }}>
        <Blobs items={[
          { w: 600, h: 600, top: "0%", left: "20%", color: "rgba(34,211,238,0.20)", blur: 70 },
        ]} />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <p className="text-xs uppercase tracking-wider text-sky-600 font-semibold">Architecture services</p>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0c1445] leading-[1.05] tracking-[-0.035em] max-w-xl">
                Everything your architecture<br />needs, under one roof.
              </h2>
            </div>
            <Link href={Constants.PAGES.SCHEDULE_CALL} className="shrink-0 self-start md:self-end font-semibold px-6 py-3 rounded-full text-sm text-sky-700 whitespace-nowrap hover:shadow-md transition-all" style={lg}>
              Schedule a call →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="rounded-[22px] p-8 flex flex-col gap-3 hover:shadow-lg transition-shadow duration-300"
                style={lgCard}
              >
                <span className="text-[11px] font-bold text-sky-500 uppercase tracking-widest">0{i + 1}</span>
                <h3 className="text-base font-bold text-[#0c1445] leading-snug">{s.title}</h3>
                <p className="text-[#334155] text-sm font-light leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why it matters — stats ─────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(145deg, #0b1437 0%, #0f2d6b 40%, #0c4a8c 100%)" }}>
        <Blobs items={[
          { w: 600, h: 600, top: "-20%", right: "-10%", color: "rgba(147,197,253,0.20)", blur: 70 },
          { w: 400, h: 400, bottom: "-10%", left: "10%", color: "rgba(34,211,238,0.15)", blur: 60 },
        ]} />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-28">
          <div className="flex items-center gap-2 mb-5">
            <p className="text-xs uppercase tracking-wider text-sky-400 font-semibold">Why architecture matters</p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-[-0.035em] mb-14">
            Good architecture<br />pays for itself.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-[22px] p-8 flex flex-col gap-3"
                style={{
                  background: "rgba(255,255,255,0.09)",
                  backdropFilter: "blur(32px) saturate(150%)",
                  WebkitBackdropFilter: "blur(32px) saturate(150%)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25)",
                }}
              >
                <span className="text-5xl font-black" style={{ background: "linear-gradient(120deg, #7dd3fc 0%, #22d3ee 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {r.stat}
                </span>
                <h3 className="text-base font-bold text-white">{r.label}</h3>
                <p className="text-white/50 text-sm font-light leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA banner */}
          <motion.div
            className="rounded-[24px] px-10 py-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between"
            style={{
              background: "rgba(255,255,255,0.10)",
              backdropFilter: "blur(40px) saturate(160%)",
              WebkitBackdropFilter: "blur(40px) saturate(160%)",
              border: "1px solid rgba(255,255,255,0.22)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.30)",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-lg">
              <h3 className="text-2xl font-extrabold text-white tracking-[-0.025em] mb-2">Ready to design your architecture?</h3>
              <p className="text-white/55 text-[15px] font-normal leading-relaxed">Book a free 30-minute call. We&apos;ll review your current setup and outline a path forward — no obligation.</p>
            </div>
            <Link
              href={Constants.PAGES.SCHEDULE_CALL}
              className="shrink-0 inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-white/90 text-[#0c4a8c] font-bold text-sm transition-all whitespace-nowrap shadow-lg shadow-black/10"
            >
              Schedule a free call
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
