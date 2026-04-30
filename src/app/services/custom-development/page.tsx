'use client';

import Image from "next/image";
import { Link } from "react-transition-progress/next";
import { motion } from "framer-motion";
import ServiceFooter from "@/app/components/partials/services/ServiceFooter";
import ProcessTimeline from "@/app/components/partials/services/ProcessTimeline";

const processSteps = [
  {
    step: "01",
    heading: "Discovery & Scoping",
    body: "We start by understanding your business inside out — mapping requirements, constraints, and goals before writing a single line of code. Stakeholder interviews, workflow audits, and a clear project charter that both teams sign off on.",
  },
  {
    step: "02",
    heading: "Architecture & Design",
    body: "System design with your team — cloud-native by default, scalable by intent. We choose the right stack for your use case, document the architecture, and get buy-in before the build starts. No surprises halfway through.",
  },
  {
    step: "03",
    heading: "Iterative Build",
    body: "Agile delivery in two-week sprints with weekly demos. You see working software every step of the way, not a big reveal at the end. Scope can shift — we're built to absorb it without derailing the project.",
  },
  {
    step: "04",
    heading: "Testing & QA",
    body: "Every feature is tested before it ships: automated unit and integration tests, manual QA, and performance benchmarks baked into the pipeline. Testing is part of development, not an afterthought.",
  },
  {
    step: "05",
    heading: "Deployment",
    body: "Production deployment on Azure or AWS with zero-downtime releases, automated rollbacks, and monitoring from day one. Alerting, logging, and dashboards configured before go-live.",
  },
  {
    step: "06",
    heading: "Support & Growth",
    body: "We don't disappear after launch. Continuous support, performance optimisation, and feature development as your product evolves. Most clients stay with us long past the initial build.",
  },
];

const features = [
  {
    num: "01",
    title: "Web & App Development",
    body: "We build web and mobile applications that perform smoothly, scale easily, and work perfectly across devices — from MVP to enterprise level.",
    color: "#e89a78",
    bg: "#fff8f5",
    border: "#fde8db",
  },
  {
    num: "02",
    title: "API Development & Integration",
    body: "We connect systems, automate data exchange, and make your tools talk to each other securely and efficiently.",
    color: "#7c3aed",
    bg: "#f5f3ff",
    border: "#e2d9ff",
  },
  {
    num: "03",
    title: "AI-Powered Features",
    body: "We integrate AI components — copilots, chatbots, recommendation engines, and data processing — directly into your product architecture.",
    color: "#0284c7",
    bg: "#f0f9ff",
    border: "#bae6fd",
  },
  {
    num: "04",
    title: "Backend Engineering",
    body: "Reliable backends built for speed, data integrity, and stability — supporting both complex workflows and fast iteration.",
    color: "#059669",
    bg: "#f0fdf4",
    border: "#bbf7d0",
  },
  {
    num: "05",
    title: "Frontend Development",
    body: "Modern, responsive, and pixel-perfect interfaces — built with React, Vue, Angular, or Blazor to match the design vision exactly.",
    color: "#d97706",
    bg: "#fffbeb",
    border: "#fde68a",
  },
  {
    num: "06",
    title: "Maintenance & DevOps",
    body: "We handle monitoring, updates, and optimisation to keep your product running smoothly — 24/7, with full visibility.",
    color: "#db2777",
    bg: "#fdf2f8",
    border: "#fbcfe8",
  },
];

const stats = [
  { val: "2 weeks", label: "to first working sprint" },
  { val: "100%", label: "cloud-native delivery" },
  { val: "6+", label: "delivery phases, no surprises" },
];

export default function CustomDevelopmentPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-36 pb-20">

          {/* Pill tag */}
          <div className="inline-flex items-center gap-2.5 bg-[#fff8f5] border border-[#fde8db] rounded-full px-4 py-1.5 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
            <span className="text-[11px] font-semibold text-[#e89a78] tracking-widest uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              Custom Development
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center gap-12 xl:gap-20">
            {/* Headline */}
            <motion.div
              className="flex-1 min-w-0"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-[#0a0e1a] leading-[1.0] tracking-tight mb-8">
                We build<br />
                products that<br />
                <span style={{
                  background: "linear-gradient(135deg, #e89a78 0%, #d97706 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  don&apos;t break.
                </span>
              </h1>
              <motion.p
                className="text-[#4b5563] text-xl leading-relaxed max-w-[480px] mb-10"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              >
                From MVPs to full-scale platforms — reliable software that grows with your business. Fast to launch, easy to scale, built to last.
              </motion.p>
              <motion.div
                className="flex flex-wrap items-center gap-3"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
              >
                <Link
                  href="/schedule-call"
                  className="bg-[#0a0e1a] hover:bg-[#1a2235] text-white px-8 py-4 rounded-full text-base font-semibold transition-colors whitespace-nowrap"
                >
                  Book a 15-min call
                </Link>
                <Link
                  href="/solutions"
                  className="bg-white border border-[#e5e7eb] hover:border-[#d1d5db] hover:bg-[#f9fafb] text-[#374151] px-8 py-4 rounded-full text-base font-medium transition-colors whitespace-nowrap"
                >
                  See all solutions
                </Link>
              </motion.div>

              <motion.p
                className="mt-12 text-sm font-semibold text-[#9ca3af] tracking-widest uppercase"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              >
                Real code · Real deadlines · Real results
              </motion.p>
            </motion.div>

            {/* Hero image — slides in from right then floats */}
            <motion.div
              className="lg:flex-1 lg:max-w-[560px] w-full"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/img/img-customdevelopment.avif"
                  alt="Custom software development"
                  width={560}
                  height={520}
                  className="w-full h-auto object-cover rounded-3xl shadow-xl"
                  priority
                  quality={90}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ──────────────────────────────── */}
      <div className="bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <p className="text-4xl font-black text-white">{s.val}</p>
                <p className="text-[#9ca3af] text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── What's included ──────────────────────────── */}
      <section className="bg-[#f9fafb] border-t border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
                <p className="text-xs uppercase tracking-wider text-[#6b7280] font-medium">What&apos;s included</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0a0e1a] leading-tight max-w-xl">
                Every layer of the stack,<br />covered.
              </h2>
            </div>
            <Link
              href="/schedule-call"
              className="shrink-0 self-start md:self-end inline-flex items-center bg-[#0a0e1a] hover:bg-[#1a2235] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors whitespace-nowrap"
            >
              Schedule a quick intro
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <div
                key={f.num}
                className="rounded-2xl p-8 flex flex-col gap-4 border"
                style={{ background: f.bg, borderColor: f.border }}
              >
                <span
                  className="text-[11px] font-bold uppercase tracking-widest"
                  style={{ color: f.color, fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {f.num}
                </span>
                <h3 className="text-lg font-bold text-[#0a0e1a] leading-snug">{f.title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Two-column callout ────────────────────────── */}
      <section className="bg-white border-t border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="rounded-3xl bg-[#0a0e1a] px-10 py-12 flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
                <p className="text-xs uppercase tracking-wider text-white/50 font-medium">Our approach</p>
              </div>
              <p className="text-white text-lg leading-relaxed">
                We don&apos;t just write code — we engineer solutions that move your business forward. Every build phase keeps product logic and user experience in sync, so what ships matches what was designed and what was needed.
              </p>
            </div>
            <div className="rounded-3xl bg-[#fff8f5] border border-[#fde8db] px-10 py-12 flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
                <p className="text-xs uppercase tracking-wider text-[#e89a78]/80 font-medium">Who we work with</p>
              </div>
              <p className="text-[#1a0a05] text-lg leading-relaxed">
                Startups building their first product. Scale-ups replacing legacy systems. Enterprises launching new business lines. If the problem requires real engineering — not a template — we&apos;re the right team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process timeline ─────────────────────────── */}
      <section className="bg-[#f9fafb] border-t border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="flex items-center gap-2 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
            <p className="text-xs uppercase tracking-wider text-[#6b7280] font-medium">How we work</p>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a0e1a] max-w-[800px] leading-tight">
              We move fast but stay precise —<br />every phase keeps product and UX in sync.
            </h2>
            <Link
              href="/schedule-call"
              className="shrink-0 self-start lg:self-end inline-flex items-center bg-[#0a0e1a] hover:bg-[#1a2235] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors whitespace-nowrap"
            >
              Grow with us
            </Link>
          </div>
          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      <ServiceFooter />
    </>
  );
}
