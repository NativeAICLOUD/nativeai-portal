'use client';

import { Plus_Jakarta_Sans } from "next/font/google";
import { motion } from "framer-motion";
import { Link } from "react-transition-progress/next";
import ProcessTimeline from "@/app/components/partials/services/ProcessTimeline";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

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

const capabilities = [
  { num: "01", title: "Web & App Development",       body: "We build web and mobile applications that perform smoothly, scale easily, and work perfectly across devices — from MVP to enterprise level.",                          dot: "#e89a78" },
  { num: "02", title: "API Development & Integration", body: "We connect systems, automate data exchange, and make your tools talk to each other securely and efficiently.",                                                      dot: "#1d4ed8" },
  { num: "03", title: "AI-Powered Features",          body: "We integrate AI components — copilots, chatbots, recommendation engines, and data processing — directly into your product architecture.",                          dot: "#0284c7" },
  { num: "04", title: "Backend Engineering",          body: "Reliable backends built for speed, data integrity, and stability — supporting both complex workflows and fast iteration.",                                          dot: "#059669" },
  { num: "05", title: "Frontend Development",         body: "Modern, responsive, and pixel-perfect interfaces — built with React, Vue, Angular, or Blazor to match the design vision exactly.",                                 dot: "#d97706" },
  { num: "06", title: "Maintenance & DevOps",         body: "We handle monitoring, updates, and optimisation to keep your product running smoothly — 24/7, with full visibility.",                                             dot: "#db2777" },
];

const faqs = [
  { q: "How long does it take to build an MVP?",          a: "Most MVPs take 6–10 weeks from signed charter to live product. We set a fixed scope, ship in sprints, and cut nothing from the core user journey." },
  { q: "Do you work with our existing codebase?",         a: "Yes. We start with a code audit, agree on what stays and what gets rebuilt, then work alongside your team without disrupting ongoing delivery." },
  { q: "What tech stack do you use?",                     a: "We choose the stack that fits your product — React, Next.js, .NET, Node, Python, PostgreSQL, Azure. We don't sell a stack; we match one to your problem." },
  { q: "Can you take over after a failed project?",       a: "We specialise in rescues. We'll do a fast technical audit, identify what can be salvaged, and give you an honest plan — no glossing over the hard parts." },
];

/* ── Apple liquid glass tokens ── */
const lg: React.CSSProperties = {
  background: "rgba(255,255,255,0.62)",
  backdropFilter: "blur(40px) saturate(180%)",
  WebkitBackdropFilter: "blur(40px) saturate(180%)",
  border: "1px solid rgba(255,255,255,0.85)",
  boxShadow: "0 4px 32px rgba(180,60,10,0.10), 0 1px 2px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.95)",
};

const lgCard: React.CSSProperties = {
  background: "rgba(255,255,255,0.55)",
  backdropFilter: "blur(32px) saturate(160%)",
  WebkitBackdropFilter: "blur(32px) saturate(160%)",
  border: "1px solid rgba(255,255,255,0.80)",
  boxShadow: "0 2px 20px rgba(180,60,10,0.07), inset 0 1px 0 rgba(255,255,255,0.92)",
};

function Blobs({ items }: { items: { w: number; h: number; top?: string; left?: string; right?: string; bottom?: string; color: string; delay: string }[] }) {
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
      {items.map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: b.w, height: b.h,
            top: b.top, left: b.left, right: b.right, bottom: b.bottom,
            background: `radial-gradient(circle, ${b.color} 0%, transparent 68%)`,
            filter: "blur(72px)",
            animation: `pulse-blob 5s ease-in-out ${b.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
}

function MetricRow({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[12px] text-[#6b7280]">{label}</span>
      <span className="text-[13px] font-bold" style={{ color, fontFamily: "'JetBrains Mono', monospace" }}>{value}</span>
    </div>
  );
}

export default function CustomDevelopmentPage() {
  return (
    <>
      <style>{`
        @keyframes pulse-blob {
          0%, 100% { opacity: 0.75; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.07); }
        }
        @keyframes live-pulse {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 1; }
        }
      `}</style>

      <div className={jakarta.className}>

        {/* ── Hero ── */}
        <section
          className="relative overflow-hidden min-h-[100svh] flex items-center"
          style={{ background: "linear-gradient(160deg, #ffffff 0%, #fff8f3 45%, #fef2e8 100%)" }}
        >
          <Blobs items={[
            { w: 900, h: 900, top: "-25%",    left: "-20%",  color: "rgba(232,154,120,0.40)",  delay: "0s" },
            { w: 750, h: 750, top: "20%",     right: "-15%", color: "rgba(251,146,60,0.30)",   delay: "1.2s" },
            { w: 700, h: 700, bottom: "-20%", left: "30%",   color: "rgba(15,40,100,0.18)",    delay: "2.4s" },
          ]} />

          <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 pt-36 pb-28">
            <div className="flex flex-col lg:flex-row lg:items-center gap-14 xl:gap-20">

              {/* Left */}
              <motion.div
                className="flex-1 min-w-0"
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div
                  className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-8"
                  style={{ background: "rgba(232,154,120,0.12)", border: "1px solid rgba(232,154,120,0.30)", backdropFilter: "blur(20px) saturate(160%)", WebkitBackdropFilter: "blur(20px) saturate(160%)" }}
                >
                  <span className="text-[11px] font-bold text-[#c2410c] tracking-widest uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    Custom Development
                  </span>
                </div>

                <h1
                  className="font-extrabold text-[#0a0e1a] mb-8 leading-[0.95]"
                  style={{ fontSize: "clamp(52px, 7vw, 96px)", letterSpacing: "-0.045em" }}
                >
                  We build<br />
                  products that<br />
                  <span style={{
                    background: "linear-gradient(90deg, #e89a78 0%, #fb923c 60%, #e89a78 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    don&apos;t break.
                  </span>
                </h1>

                <motion.p
                  className="text-[#5a6476] text-lg leading-[1.75] max-w-[480px] mb-10"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                >
                  From MVPs to full-scale platforms — reliable software that grows with your business. Fast to launch, easy to scale, built to last.
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-3"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.28, ease: "easeOut" }}
                >
                  <Link
                    href="/schedule-call"
                    className="inline-flex items-center px-8 py-4 rounded-full text-base font-bold transition-all"
                    style={{ background: "#e89a78", color: "#ffffff", boxShadow: "0 4px 20px rgba(232,154,120,0.35)" }}
                  >
                    Book a 15-min call
                  </Link>
                  <Link
                    href="/solutions"
                    className="inline-flex items-center px-8 py-4 rounded-full text-base font-semibold transition-all"
                    style={{ background: "rgba(10,14,26,0.06)", border: "1px solid rgba(10,14,26,0.12)", color: "#374151" }}
                  >
                    All solutions
                  </Link>
                </motion.div>

                <motion.div
                  className="flex flex-wrap gap-2 mt-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
                >
                  {['React', 'Next.js', '.NET', 'Node.js', 'Azure', 'PostgreSQL'].map(tag => (
                    <span
                      key={tag}
                      className="text-[11px] font-bold px-3 py-1 rounded-full"
                      style={{ background: "rgba(232,154,120,0.10)", border: "1px solid rgba(232,154,120,0.25)", color: "#9a4a20", fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right — floating glass project card */}
              <motion.div
                className="lg:flex-1 lg:max-w-[440px] w-full"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.12, ease: "easeOut" }}
              >
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="relative">
                    <div
                      className="absolute inset-0 rounded-[32px] -z-10"
                      style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(232,154,120,0.30) 0%, transparent 70%)", filter: "blur(32px)", transform: "scale(1.1)" }}
                    />
                    <div className="rounded-[28px] p-6 flex flex-col gap-5" style={lg}>

                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #e89a78, #fb923c)", boxShadow: "0 2px 12px rgba(232,154,120,0.40)" }}>
                            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-[13px] font-bold text-[#0a0e1a]">E-Commerce v2.0</p>
                            <p className="text-[11px] text-[#6b7280]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>main · feat/checkout-v2</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full" style={{ background: "rgba(5,150,105,0.10)", border: "1px solid rgba(5,150,105,0.35)" }}>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" style={{ animation: "live-pulse 1.6s ease-in-out infinite", boxShadow: "0 0 6px #059669" }} />
                          <span className="text-[11px] font-bold text-[#059669]">Live</span>
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="rounded-xl p-4 flex flex-col gap-2.5" style={{ background: "rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.06)" }}>
                        <p className="text-[10px] font-bold text-[#9ca3af] uppercase tracking-wider mb-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Quality Metrics</p>
                        <MetricRow label="Lighthouse score"  value="98 / 100" color="#059669" />
                        <MetricRow label="Test coverage"     value="94%"      color="#0284c7" />
                        <MetricRow label="Build time"        value="1m 22s"   color="#d97706" />
                        <MetricRow label="Last deploy"       value="3 min ago" color="#e89a78" />
                      </div>

                      {/* Sprint progress */}
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[11px] font-semibold text-[#6b7280]">Sprint 4 of 6</span>
                          <span className="text-[11px] font-bold text-[#e89a78]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>67%</span>
                        </div>
                        <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(232,154,120,0.15)" }}>
                          <motion.div
                            className="h-full rounded-full"
                            style={{ background: "linear-gradient(90deg, #e89a78, #fb923c)" }}
                            initial={{ width: 0 }}
                            animate={{ width: "67%" }}
                            transition={{ duration: 1.4, delay: 0.6, ease: "easeOut" }}
                          />
                        </div>
                      </div>

                      <div className="border-t" style={{ borderColor: "rgba(0,0,0,0.06)" }} />

                      {/* Stack */}
                      <div>
                        <p className="text-[10px] font-bold text-[#9ca3af] uppercase tracking-wider mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Tech Stack</p>
                        <div className="flex flex-wrap gap-1.5">
                          {['React', 'Next.js', '.NET 9', 'PostgreSQL', 'Azure', 'Docker'].map(t => (
                            <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded-md" style={{ background: "rgba(232,154,120,0.12)", color: "#9a4a20", border: "1px solid rgba(232,154,120,0.28)", fontFamily: "'JetBrains Mono', monospace" }}>{t}</span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </section>


        {/* ── Capabilities — glass on warm pastel blobs ── */}
        <section
          className="relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #fff8f3 0%, #fef2e8 40%, #fdf6ff 100%)" }}
        >
          <Blobs items={[
            { w: 900, h: 900, top: "-20%",    right: "-18%", color: "rgba(234,88,12,0.26)",   delay: "0s" },
            { w: 700, h: 700, bottom: "-15%", left: "-12%",  color: "rgba(217,119,6,0.20)",   delay: "1.5s" },
            { w: 500, h: 500, top: "35%",     left: "40%",   color: "rgba(15,40,100,0.40)",   delay: "3s" },
          ]} />

          <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-28">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <p className="text-xs uppercase tracking-wider text-[#6b7280] font-medium">What we deliver</p>
                </div>
                <h2
                  className="font-extrabold text-[#0a0e1a] leading-[1.05] max-w-xl"
                  style={{ fontSize: "clamp(32px, 4.5vw, 56px)", letterSpacing: "-0.035em" }}
                >
                  Every layer of the stack,<br />covered.
                </h2>
              </div>
              <Link
                href="/schedule-call"
                className="shrink-0 self-start md:self-end inline-flex items-center px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap"
                style={{ background: "#e89a78", color: "#fff", boxShadow: "0 4px 16px rgba(234,88,12,0.30)" }}
              >
                Schedule a quick intro
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {capabilities.map((c, i) => (
                <motion.div
                  key={c.num}
                  className="rounded-[22px] p-8 flex flex-col gap-4"
                  style={lgCard}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: c.dot, boxShadow: `0 0 8px ${c.dot}60` }}
                    />
                    <span
                      className="text-[11px] font-bold uppercase tracking-widest"
                      style={{ color: c.dot, fontFamily: "'JetBrains Mono', monospace" }}
                    >{c.num}</span>
                  </div>
                  <h3 className="text-[17px] font-bold text-[#0a0e1a] leading-snug">{c.title}</h3>
                  <p className="text-[#5a6476] text-sm leading-relaxed">{c.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* ── Two-column callout ── */}
        <section
          className="relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #fff8f3 0%, #fef2e8 50%, #fff8f3 100%)" }}
        >
          <Blobs items={[
            { w: 800, h: 800, top: "-25%",    left: "-15%",  color: "rgba(232,154,120,0.22)",  delay: "0.5s" },
            { w: 600, h: 600, bottom: "-20%", right: "-10%", color: "rgba(251,146,60,0.16)",   delay: "2s" },
          ]} />

          <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* Dark glass */}
              <div
                className="rounded-3xl px-10 py-12 flex flex-col gap-5"
                style={{
                  background: "rgba(10,14,26,0.92)",
                  backdropFilter: "blur(40px) saturate(160%)",
                  WebkitBackdropFilter: "blur(40px) saturate(160%)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.22), 0 8px 40px rgba(0,0,30,0.25)",
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" style={{ boxShadow: "0 0 6px #e89a78" }} />
                  <p className="text-xs uppercase tracking-wider text-white/50 font-medium">Our approach</p>
                </div>
                <p className="text-white/85 text-lg leading-[1.75]">
                  We don&apos;t just write code — we engineer solutions that move your business forward. Every build phase keeps product logic and user experience in sync, so what ships matches what was designed and what was needed.
                </p>
              </div>

              {/* Light glass */}
              <div className="rounded-3xl px-10 py-12 flex flex-col gap-5" style={lg}>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" style={{ boxShadow: "0 0 6px rgba(234,88,12,0.6)" }} />
                  <p className="text-xs uppercase tracking-wider text-[#e89a78]/80 font-medium">Who we work with</p>
                </div>
                <p className="text-[#1a0a05] text-lg leading-[1.75]">
                  Startups building their first product. Scale-ups replacing legacy systems. Enterprises launching new business lines. If the problem requires real engineering — not a template — we&apos;re the right team.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* ── Process timeline ── */}
        <section
          className="relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #fff8f3 0%, #fef2e8 45%, #fdf6ff 100%)" }}
        >
          <Blobs items={[
            { w: 900, h: 900, top: "-20%",    right: "-15%", color: "rgba(234,88,12,0.20)",  delay: "0s" },
            { w: 700, h: 700, bottom: "-20%", left: "-12%",  color: "rgba(217,119,6,0.16)",  delay: "1.8s" },
            { w: 500, h: 500, top: "35%",     left: "40%",   color: "rgba(15,40,100,0.38)",  delay: "3.2s" },
          ]} />
          <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-24">
            <div className="flex items-center gap-2 mb-10">
              <p className="text-xs uppercase tracking-wider text-[#6b7280] font-medium">How we work</p>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
              <h2
                className="font-extrabold text-[#0a0e1a] leading-[1.05] max-w-[700px]"
                style={{ fontSize: "clamp(32px, 4.5vw, 56px)", letterSpacing: "-0.035em" }}
              >
                We move fast but stay precise —<br />every phase keeps product and UX in sync.
              </h2>
              <Link
                href="/schedule-call"
                className="shrink-0 self-start lg:self-end inline-flex items-center px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap"
                style={{ background: "#e89a78", color: "#fff", boxShadow: "0 4px 16px rgba(234,88,12,0.30)" }}
              >
                Grow with us
              </Link>
            </div>
            <ProcessTimeline steps={processSteps} />
          </div>
        </section>


        {/* ── FAQ ── */}
        <section
          className="relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #fff8f3 0%, #fef2e8 50%, #fff5f0 100%)" }}
        >
          <Blobs items={[
            { w: 800, h: 800, top: "-15%",    right: "-15%", color: "rgba(234,88,12,0.18)",  delay: "0s" },
            { w: 600, h: 600, bottom: "-10%", left: "-8%",   color: "rgba(217,119,6,0.14)",  delay: "1.8s" },
          ]} />

          <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-28">
            <div className="flex items-center gap-2 mb-5">
              <p className="text-xs uppercase tracking-wider text-[#6b7280] font-medium">Common questions</p>
            </div>
            <h2
              className="font-extrabold text-[#0a0e1a] mb-14 leading-[1.05]"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)", letterSpacing: "-0.035em" }}
            >
              Questions we hear<br />every day.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {faqs.map((f, i) => (
                <motion.div
                  key={f.q}
                  className="rounded-[22px] p-8 flex flex-col gap-3"
                  style={lgCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                >
                  <h3 className="text-[15px] font-bold text-[#0a0e1a] leading-snug">{f.q}</h3>
                  <p className="text-[#5a6476] text-sm leading-relaxed">{f.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* ── CTA Banner ── */}
        <section
          className="relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0a0e1a 0%, #111827 100%)" }}
        >
          <Blobs items={[
            { w: 700, h: 700, top: "-30%",    right: "-10%", color: "rgba(232,154,120,0.32)",  delay: "0s" },
            { w: 500, h: 500, bottom: "-20%", left: "20%",   color: "rgba(15,40,100,0.45)",    delay: "1.5s" },
          ]} />
          <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <div className="flex flex-col gap-4 max-w-xl">
              <h2
                className="font-extrabold text-white leading-[1.05]"
                style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.035em" }}
              >
                Ready to build<br />something that lasts?
              </h2>
              <p className="text-white/65 text-lg leading-[1.75]">
                Let&apos;s talk about your product, your timeline, and what real engineering looks like for your team.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/schedule-call"
                className="inline-flex items-center px-8 py-4 rounded-full text-base font-bold"
                style={{ background: "#e89a78", color: "#ffffff", boxShadow: "0 4px 20px rgba(232,154,120,0.35)" }}
              >
                Book a discovery call
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center px-8 py-4 rounded-full text-base font-semibold"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.80)", backdropFilter: "blur(16px)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.20)" }}
              >
                All solutions
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
