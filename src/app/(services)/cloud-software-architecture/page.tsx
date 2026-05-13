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
  boxShadow: "0 2px 24px rgba(232,154,120,0.10), 0 1px 2px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.95)",
};
const lgCard: React.CSSProperties = {
  background: "rgba(255,255,255,0.52)",
  backdropFilter: "blur(32px) saturate(150%)",
  WebkitBackdropFilter: "blur(32px) saturate(150%)",
  border: "1px solid rgba(255,255,255,0.78)",
  boxShadow: "0 4px 32px rgba(232,154,120,0.08), 0 1px 3px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.90)",
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
      <section className="relative overflow-hidden min-h-[100svh] flex items-center" style={{ background: "linear-gradient(145deg, #fff5ee 0%, #fdf0e8 30%, #fef6f0 60%, #fff8f2 100%)" }}>
        <Blobs items={[
          { w: 820, h: 820, top: "-15%",    right: "-10%", color: "rgba(240,140,60,0.30)",  delay: "0s" },
          { w: 680, h: 680, top: "28%",     left: "-18%",  color: "rgba(232,154,120,0.18)", delay: "0.8s" },
          { w: 500, h: 500, bottom: "-10%", left: "25%",   color: "rgba(232,154,120,0.16)", delay: "1.4s" },
          { w: 360, h: 360, bottom: "5%",   right: "-5%",  color: "rgba(212,132,92,0.12)",  delay: "0.4s" },
        ]} />

        <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 pt-36 pb-24">
          <div className="flex flex-col lg:flex-row lg:items-center gap-14 xl:gap-20">

            {/* Left */}
            <motion.div className="flex-1 min-w-0" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.25,0.46,0.45,0.94] }}>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-10" style={lg}>
                <span className="text-[11px] font-semibold tracking-widest uppercase" style={{ color: '#b86a30' }}>Cloud Architecture</span>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-[96px] font-extrabold text-[#0a0e1a] leading-[0.97] tracking-[-0.045em] mb-8">
                Systems that<br />
                scale from<br />
                <span style={{ background: "linear-gradient(120deg, #f0a060 0%, #e89a78 40%, #d4845c 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  day one.
                </span>
              </h1>

              <motion.p className="text-[#0a0e1a]/52 text-[18px] font-normal leading-[1.75] max-w-[460px] mb-10" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
                We architect cloud-native solutions built for performance, resilience, and growth — making the right design decisions before a single line of code is written.
              </motion.p>

              <motion.div className="flex flex-wrap gap-3" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}>
                <Link href={Constants.PAGES.SCHEDULE_CALL} className="bg-[#e89a78] hover:bg-[#d4836a] text-white font-bold px-8 py-4 rounded-full text-base transition-colors whitespace-nowrap shadow-lg shadow-black/10">
                  Schedule a free call
                </Link>
                <Link href={Constants.PAGES.SOLUTIONS} className="font-medium px-8 py-4 rounded-full text-base transition-colors whitespace-nowrap" style={{ ...lg, color: '#b86a30' }}>
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
                    <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: '#b86a30' }}>Cloud Architecture</span>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" style={{ boxShadow: "0 0 6px #34d399" }} />
                      <span className="text-[10px] font-medium" style={{ color: '#c4743c' }}>Live</span>
                    </div>
                  </div>

                  {/* Architecture diagram */}
                  <div className="flex flex-col gap-3">
                    {/* Top row — CDN + Gateway */}
                    <div className="grid grid-cols-2 gap-2.5">
                      {[
                        { label: "CDN / WAF", color: "from-orange-100/60 to-amber-50/40" },
                        { label: "API Gateway", color: "from-orange-100/60 to-orange-50/40" },
                      ].map((n) => (
                        <div key={n.label} className={`h-12 rounded-2xl bg-gradient-to-br ${n.color} flex items-center justify-center`} style={{ border: "1px solid rgba(255,255,255,0.80)" }}>
                          <span className="text-[11px] font-semibold" style={{ color: '#9a4a1e' }}>{n.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center">
                      <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
                        <path d="M12 0v12M6 8l6 6 6-6" stroke="rgba(196,116,60,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
                        <path d="M12 0v12M6 8l6 6 6-6" stroke="rgba(196,116,60,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    {/* Bottom row — storage */}
                    <div className="grid grid-cols-2 gap-2.5">
                      {[
                        { label: "Azure SQL / Cosmos", color: "from-orange-100/60 to-amber-50/40" },
                        { label: "Blob / Redis",       color: "from-amber-100/60 to-orange-50/40" },
                      ].map((n) => (
                        <div key={n.label} className={`h-12 rounded-2xl bg-gradient-to-br ${n.color} flex items-center justify-center px-2`} style={{ border: "1px solid rgba(255,255,255,0.80)" }}>
                          <span className="text-[10px] font-semibold text-center leading-tight" style={{ color: '#9a4a1e' }}>{n.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {["Azure", "Kubernetes", "Terraform", "IaC"].map((t) => (
                      <span key={t} className="text-[10px] font-semibold px-2.5 py-1 rounded-full" style={{ color: '#b86a30', background: 'rgba(240,160,96,0.12)', border: '1px solid rgba(240,160,96,0.25)' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Three pillars ─────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(160deg, #fdf0e8 0%, #fff5ee 40%, #fef6f0 100%)" }}>
        <Blobs items={[
          { w: 700, h: 700, top: "-20%", right: "-15%", color: "rgba(240,140,60,0.22)", blur: 70 },
          { w: 500, h: 500, bottom: "-15%", left: "-10%", color: "rgba(232,154,120,0.18)", blur: 60 },
        ]} />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-28">
          <div className="flex items-center gap-2 mb-5">
            <p className="text-xs uppercase tracking-wider font-semibold" style={{ color: '#b86a30' }}>What we do</p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0a0e1a] leading-[1.05] tracking-[-0.035em] mb-14 max-w-2xl">
            Three disciplines that make<br />architecture{" "}
            <span style={{ background: "linear-gradient(120deg, #f0a060 0%, #d4845c 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>future-proof.</span>
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
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ color: '#c4743c', background: "rgba(240,160,96,0.14)", border: "1px solid rgba(240,160,96,0.22)" }}>
                  {p.icon}
                </div>
                <h3 className="text-base font-bold text-[#0a0e1a] leading-snug">{p.title}</h3>
                <p className="text-[#0a0e1a]/52 text-sm font-light leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services grid ─────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #fff5ee 0%, #fef6f0 50%, #fff8f2 100%)" }}>
        <Blobs items={[
          { w: 600, h: 600, top: "0%", left: "20%", color: "rgba(232,154,120,0.20)", blur: 70 },
        ]} />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <p className="text-xs uppercase tracking-wider font-semibold" style={{ color: '#b86a30' }}>Architecture services</p>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0a0e1a] leading-[1.05] tracking-[-0.035em] max-w-xl">
                Everything your architecture<br />needs, under one roof.
              </h2>
            </div>
            <Link href={Constants.PAGES.SCHEDULE_CALL} className="shrink-0 self-start md:self-end font-semibold px-6 py-3 rounded-full text-sm whitespace-nowrap hover:shadow-md transition-all" style={{ ...lg, color: '#b86a30' }}>
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
                <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: '#e89a78' }}>0{i + 1}</span>
                <h3 className="text-base font-bold text-[#0a0e1a] leading-snug">{s.title}</h3>
                <p className="text-[#0a0e1a]/52 text-sm font-light leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why it matters — stats ─────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(145deg, #fdf0e8 0%, #fff5ee 40%, #fff8f2 100%)" }}>
        <Blobs items={[
          { w: 600, h: 600, top: "-20%", right: "-10%", color: "rgba(240,140,60,0.22)", blur: 70 },
          { w: 400, h: 400, bottom: "-10%", left: "10%", color: "rgba(232,154,120,0.18)", blur: 60 },
        ]} />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-28">
          <div className="flex items-center gap-2 mb-5">
            <p className="text-xs uppercase tracking-wider font-semibold" style={{ color: '#b86a30' }}>Why architecture matters</p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0a0e1a] leading-[1.05] tracking-[-0.035em] mb-14">
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
                style={lgCard}
              >
                <span className="text-5xl font-black" style={{ background: "linear-gradient(120deg, #f0a060 0%, #d4845c 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {r.stat}
                </span>
                <h3 className="text-base font-bold text-[#0a0e1a]">{r.label}</h3>
                <p className="text-[#0a0e1a]/48 text-sm font-light leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA banner */}
          <motion.div
            className="rounded-[24px] px-10 py-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between"
            style={lg}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-lg">
              <h3 className="text-2xl font-extrabold text-[#0a0e1a] tracking-[-0.025em] mb-2">Ready to design your architecture?</h3>
              <p className="text-[#0a0e1a]/52 text-[15px] font-normal leading-relaxed">Book a free 30-minute call. We&apos;ll review your current setup and outline a path forward — no obligation.</p>
            </div>
            <Link
              href={Constants.PAGES.SCHEDULE_CALL}
              className="shrink-0 inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#e89a78] hover:bg-[#d4836a] text-white font-bold text-sm transition-all whitespace-nowrap shadow-lg shadow-black/10"
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
