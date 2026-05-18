'use client';

import { Inter } from "next/font/google";
import { Link } from "react-transition-progress/next";
import { motion } from "framer-motion";
import ProcessTimeline from "@/app/components/partials/services/ProcessTimeline";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const processSteps = [
  {
    step: "01",
    heading: "Discovery & Research",
    body: "User interviews, heuristic audits, and competitive analysis to understand what your users actually need — not what you assume. We map the full journey before touching Figma.",
  },
  {
    step: "02",
    heading: "Strategy & Architecture",
    body: "We define the sitemap, user flows, and content hierarchy — so every design decision is grounded in clear product logic before any visual work begins.",
  },
  {
    step: "03",
    heading: "Wireframes & Prototyping",
    body: "Low and high-fidelity wireframes, validated with clickable prototypes. We test flows with real users before a single pixel is polished.",
  },
  {
    step: "04",
    heading: "Visual Design",
    body: "Pixel-perfect UI with full interaction states, responsive layouts, and accessibility baked in — designed to the level of detail engineers need to ship without guesswork.",
  },
  {
    step: "05",
    heading: "Design System",
    body: "Component libraries and design tokens that keep your product consistent as it scales — a living system, not a one-time deliverable.",
  },
  {
    step: "06",
    heading: "Handoff & Support",
    body: "Developer-ready specs, annotated components, and ongoing support during implementation — so what ships matches what was designed, every time.",
  },
];

const features = [
  { title: "UX Research & Strategy",    body: "User interviews, usability testing, and journey mapping to uncover what your users actually need — not what you assume." },
  { title: "UI Design",                  body: "Pixel-perfect, responsive interfaces built in Figma — with full interaction states, accessibility baked in, and developer-ready specs." },
  { title: "Design Systems",             body: "Scalable component libraries and design tokens that keep your product consistent and fast to iterate as it grows." },
  { title: "Brand Identity",             body: "Logo, colour system, typography, and brand guidelines — everything needed to show up consistently across every touchpoint." },
  { title: "Prototyping & Validation",   body: "Clickable prototypes to validate flows before a single line of code is written — saving time, budget, and rework." },
  { title: "Design-to-Code Handoff",     body: "We bridge the gap between design and engineering with clear documentation, annotated specs, and implementation support." },
];

/* ── Authentic Apple liquid-glass styles ── */
const lg: React.CSSProperties = {
  background: "rgba(255,255,255,0.62)",
  backdropFilter: "blur(40px) saturate(160%)",
  WebkitBackdropFilter: "blur(40px) saturate(160%)",
  border: "1px solid rgba(255,255,255,0.85)",
  boxShadow: "0 2px 24px rgba(120,80,200,0.08), 0 1px 2px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.95)",
};

const lgCard: React.CSSProperties = {
  background: "rgba(255,255,255,0.55)",
  backdropFilter: "blur(32px) saturate(150%)",
  WebkitBackdropFilter: "blur(32px) saturate(150%)",
  border: "1px solid rgba(255,255,255,0.80)",
  boxShadow: "0 4px 32px rgba(120,80,200,0.07), 0 1px 3px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.92)",
};

export default function DesignPage() {
  return (
    <div className={inter.className}>

      {/* ── Hero ──────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#f0eeff] min-h-[100svh] flex items-center">

        {/* Soft pastel blobs — the backdrop the glass refracts */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute rounded-full" style={{ width: 700, height: 700, top: "-20%", left: "-15%", background: "radial-gradient(circle, rgba(192,132,252,0.45) 0%, transparent 65%)", filter: "blur(60px)" }} />
          <div className="absolute rounded-full" style={{ width: 600, height: 600, top: "10%", right: "-10%", background: "radial-gradient(circle, rgba(249,168,212,0.40) 0%, transparent 65%)", filter: "blur(60px)" }} />
          <div className="absolute rounded-full" style={{ width: 500, height: 500, bottom: "-10%", left: "25%", background: "radial-gradient(circle, rgba(147,197,253,0.35) 0%, transparent 65%)", filter: "blur(60px)" }} />
          <div className="absolute rounded-full" style={{ width: 400, height: 400, top: "45%", left: "50%", background: "radial-gradient(circle, rgba(167,243,208,0.28) 0%, transparent 65%)", filter: "blur(60px)" }} />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 pt-36 pb-24">
          <div className="flex flex-col lg:flex-row lg:items-center gap-14 xl:gap-20">

            {/* Left — headline */}
            <motion.div
              className="flex-1 min-w-0"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Pill */}
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-10" style={lg}>
                <span className="text-[11px] font-semibold text-violet-600 tracking-widest uppercase">Design</span>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-[88px] font-black text-[#0f0c1e] leading-[1.01] tracking-[-0.03em] mb-7">
                Interfaces<br />
                that convert,<br />
                <span style={{ background: "linear-gradient(120deg, #7c3aed 0%, #db2777 50%, #ea580c 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  delight.
                </span>
              </h1>

              <motion.p
                className="text-[#4b4869] text-xl font-light leading-relaxed max-w-[460px] mb-10"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                Great design is not decoration. It is how your product communicates its value — reducing friction and driving measurable outcomes.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
              >
                <Link
                  href="/schedule-call"
                  className="bg-[#0f0c1e] hover:bg-[#1e1840] text-white font-semibold px-8 py-4 rounded-full text-base transition-colors whitespace-nowrap"
                >
                  Start your design project
                </Link>
                <Link
                  href="/solutions"
                  className="font-medium px-8 py-4 rounded-full text-base text-[#3b2f6e] hover:text-[#0f0c1e] transition-colors whitespace-nowrap"
                  style={lg}
                >
                  See all solutions
                </Link>
              </motion.div>
            </motion.div>

            {/* Right — floating liquid glass mockup card */}
            <motion.div
              className="lg:flex-1 lg:max-w-[500px] w-full"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.95, delay: 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="rounded-[28px] p-6 flex flex-col gap-5" style={lgCard}>

                  {/* Browser bar */}
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                    <div className="flex-1 ml-2 h-6 rounded-full bg-black/[0.06] flex items-center px-3 border border-black/[0.05]">
                      <span className="text-[10px] text-[#8b8aad] font-medium">figma.com / nativecloud-ui</span>
                    </div>
                  </div>

                  {/* Nav mock */}
                  <div className="h-10 rounded-2xl flex items-center px-4 gap-3" style={{ background: "rgba(255,255,255,0.70)", border: "1px solid rgba(255,255,255,0.90)", backdropFilter: "blur(16px)" }}>
                    <div className="w-16 h-2.5 rounded-full bg-violet-300/70" />
                    <div className="flex-1" />
                    {["w-10","w-10","w-10"].map((w, i) => (
                      <div key={i} className={`${w} h-2 rounded-full bg-black/10`} />
                    ))}
                    <div className="w-20 h-7 rounded-full bg-violet-500/80" />
                  </div>

                  {/* Hero mock */}
                  <div className="h-32 rounded-2xl flex items-center px-5 gap-4" style={{ background: "linear-gradient(135deg, rgba(192,132,252,0.25) 0%, rgba(249,168,212,0.20) 100%)", border: "1px solid rgba(255,255,255,0.70)" }}>
                    <div className="flex flex-col gap-2.5 flex-1">
                      <div className="w-3/4 h-4 rounded-full bg-[#0f0c1e]/30" />
                      <div className="w-1/2 h-3 rounded-full bg-[#0f0c1e]/15" />
                      <div className="w-28 h-7 rounded-full bg-violet-500/70 mt-1" />
                    </div>
                    <div className="w-24 h-24 rounded-2xl shrink-0" style={{ background: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.85)" }} />
                  </div>

                  {/* Card grid mock */}
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { g: "from-violet-200/50 to-purple-100/30" },
                      { g: "from-pink-200/50 to-rose-100/30" },
                      { g: "from-blue-200/50 to-sky-100/30" },
                    ].map((c, i) => (
                      <div key={i} className={`h-[72px] rounded-2xl bg-gradient-to-br ${c.g} flex flex-col justify-end p-3`} style={{ border: "1px solid rgba(255,255,255,0.80)" }}>
                        <div className="w-full h-2 rounded-full bg-black/15 mb-1.5" />
                        <div className="w-2/3 h-1.5 rounded-full bg-black/08" />
                      </div>
                    ))}
                  </div>

                  {/* Design tokens */}
                  <div className="flex items-center gap-2.5 pt-1">
                    {["#c084fc","#f472b6","#60a5fa","#34d399","#f0a060"].map((c) => (
                      <div key={c} className="w-6 h-6 rounded-full ring-2 ring-white/80 shadow-sm shrink-0" style={{ background: c }} />
                    ))}
                    <div className="flex-1 h-px mx-1 bg-black/08" />
                    <span className="text-[10px] font-medium text-[#9d97c2]">Design System v2</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── What's included — glass cards on pastel ────── */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(160deg, #faf5ff 0%, #fdf2f8 40%, #eff6ff 100%)" }}>
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute rounded-full" style={{ width: 800, height: 800, top: "-30%", right: "-20%", background: "radial-gradient(circle, rgba(192,132,252,0.30) 0%, transparent 65%)", filter: "blur(60px)" }} />
          <div className="absolute rounded-full" style={{ width: 600, height: 600, bottom: "-20%", left: "-10%", background: "radial-gradient(circle, rgba(147,197,253,0.28) 0%, transparent 65%)", filter: "blur(60px)" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <p className="text-xs uppercase tracking-wider text-violet-500 font-semibold">What&apos;s included</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#0f0c1e] leading-tight tracking-tight">
                Every layer of the<br />design process.
              </h2>
            </div>
            <Link
              href="/schedule-call"
              className="shrink-0 self-start md:self-end font-semibold px-6 py-3 rounded-full text-sm text-[#3b2f6e] whitespace-nowrap transition-all hover:shadow-md"
              style={lg}
            >
              Start your project →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="rounded-[22px] p-8 flex flex-col gap-3 hover:shadow-lg transition-shadow duration-300"
                style={lgCard}
              >
                <span className="text-[11px] font-bold text-violet-400 uppercase tracking-widest">0{i + 1}</span>
                <h3 className="text-lg font-bold text-[#0f0c1e] leading-snug tracking-[-0.01em]">{f.title}</h3>
                <p className="text-[#4b4869] text-sm font-light leading-relaxed">{f.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Two-column callout — glass on soft bg ──────── */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #fdf4ff 0%, #fff1f2 100%)" }}>
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute rounded-full" style={{ width: 500, height: 500, top: "0%", left: "20%", background: "radial-gradient(circle, rgba(249,168,212,0.35) 0%, transparent 65%)", filter: "blur(50px)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="rounded-[28px] px-10 py-12 flex flex-col gap-5" style={lgCard}>
              <div className="flex items-center gap-2">
                <p className="text-xs uppercase tracking-wider text-violet-500 font-semibold">Why design first?</p>
              </div>
              <p className="text-[#0f0c1e] text-lg font-light leading-relaxed">
                Design decisions made early are cheap. Made in production they are expensive. Every hour in research and wireframes saves days of engineering rework — and ships a product your users actually want to use.
              </p>
            </div>
            <div className="rounded-[28px] px-10 py-12 flex flex-col gap-5" style={lgCard}>
              <div className="flex items-center gap-2">
                <p className="text-xs uppercase tracking-wider text-pink-500 font-semibold">Who we design for</p>
              </div>
              <p className="text-[#0f0c1e] text-lg font-light leading-relaxed">
                Startups finding product-market fit. Scale-ups overhauling legacy UX. Enterprises launching new digital products. If your users struggle to navigate it, we design the version they won&apos;t want to close.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process timeline — clean white ─────────────── */}
      <section className="bg-white border-t border-[#f0eeff]">
        <div className={`max-w-7xl mx-auto px-6 md:px-12 py-24 ${inter.className}`}>
          <div className="flex items-center gap-2 mb-10">
            <p className="text-xs uppercase tracking-wider text-violet-500 font-semibold">How we work</p>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <h2 className="text-4xl md:text-5xl font-black text-[#0f0c1e] max-w-[780px] leading-tight tracking-tight">
              Every decision traced back<br />to a user need or business goal.
            </h2>
            <Link
              href="/schedule-call"
              className="shrink-0 self-start lg:self-end bg-[#0f0c1e] hover:bg-[#1e1840] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors whitespace-nowrap"
            >
              Grow with us
            </Link>
          </div>
          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

    </div>
  );
}
