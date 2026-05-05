'use client';

import { Plus_Jakarta_Sans } from "next/font/google";
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import ProcessTimeline from '@/app/components/partials/services/ProcessTimeline';

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const steps = [
  { step: '01', heading: 'Assessment & Planning',    body: 'We audit your current SDLC — tools, workflows, team structure, and pain points — and produce a DevOps transformation roadmap aligned to your delivery goals.' },
  { step: '02', heading: 'Azure DevOps Setup',        body: 'We configure your Azure DevOps organisation: projects, repos, boards, pipelines, and artifact feeds — all with RBAC, branch policies, and security best practices from day one.' },
  { step: '03', heading: 'CI/CD Pipeline Build',      body: 'We build automated build and release pipelines for your applications — from commit to production — with quality gates, automated tests, and environment-specific approvals baked in.' },
  { step: '04', heading: 'Infrastructure as Code',    body: 'We define your Azure infrastructure in Terraform or Bicep, version-controlled and pipeline-deployed — so your environments are reproducible, auditable, and consistent.' },
  { step: '05', heading: 'Monitoring & Optimisation', body: 'Azure Monitor, Application Insights, and custom dashboards give you full observability. We tune pipelines for speed, set up alerting, and continuously optimise your delivery flow.' },
];

const capabilities = [
  { num: '01', title: 'CI/CD Pipelines',          body: 'End-to-end automated pipelines from code commit to production — with parallel jobs, caching, and zero-downtime release strategies.',                           dot: '#0078d4' },
  { num: '02', title: 'Azure Boards',              body: 'Agile planning with Kanban boards, sprint backlogs, and work item tracking integrated directly with your repos and pipelines for full traceability.',          dot: '#7c3aed' },
  { num: '03', title: 'Azure Repos',               body: 'Git repositories with branch policies, pull request workflows, code review gates, and fine-grained access control for every team.',                           dot: '#059669' },
  { num: '04', title: 'Infrastructure as Code',    body: 'Terraform, Bicep, and ARM templates version-controlled and deployed through pipelines — your infrastructure defined, tested, and shipped like code.',          dot: '#d97706' },
  { num: '05', title: 'Test Automation',           body: 'Automated unit, integration, and end-to-end tests built into every pipeline stage — quality gates that prevent broken code from reaching production.',          dot: '#0891b2' },
  { num: '06', title: 'Monitoring & Observability', body: 'Azure Monitor, Application Insights, and Log Analytics configured from day one — custom dashboards and proactive alerting for every environment.',           dot: '#db2777' },
];


const faqs = [
  { q: 'Can you migrate us from Jenkins / GitLab CI?',         a: 'Yes. We handle full migrations from Jenkins, GitLab CI, GitHub Actions, or Bamboo — mapping your existing pipelines to Azure DevOps equivalents with minimal disruption.' },
  { q: 'Do we need to be on Azure to use Azure DevOps?',       a: 'No. Azure DevOps is a standalone SaaS platform. We can deploy to any cloud or on-premises environment — Azure, AWS, GCP, or hybrid.' },
  { q: 'What happens to our existing source code and history?', a: 'All git history is preserved. We import repositories, branches, tags, and commit history into Azure Repos with zero data loss.' },
  { q: 'How long does a DevOps transformation take?',           a: 'Initial setup and first pipelines typically take 2–4 weeks. A full transformation covering all teams usually completes within 8–12 weeks.' },
];

/* ── Authentic Apple liquid glass tokens ── */
const lg: React.CSSProperties = {
  background: "rgba(255,255,255,0.62)",
  backdropFilter: "blur(40px) saturate(180%)",
  WebkitBackdropFilter: "blur(40px) saturate(180%)",
  border: "1px solid rgba(255,255,255,0.85)",
  boxShadow: "0 4px 32px rgba(0,80,180,0.10), 0 1px 2px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.95)",
};

const lgCard: React.CSSProperties = {
  background: "rgba(255,255,255,0.55)",
  backdropFilter: "blur(32px) saturate(160%)",
  WebkitBackdropFilter: "blur(32px) saturate(160%)",
  border: "1px solid rgba(255,255,255,0.80)",
  boxShadow: "0 2px 20px rgba(0,80,180,0.07), inset 0 1px 0 rgba(255,255,255,0.92)",
};

const lgDark: React.CSSProperties = {
  background: "rgba(255,255,255,0.07)",
  backdropFilter: "blur(40px) saturate(160%)",
  WebkitBackdropFilter: "blur(40px) saturate(160%)",
  border: "1px solid rgba(255,255,255,0.18)",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.28)",
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


export default function DevOpsOnAzurePage() {
  return (
    <>
      <style>{`
        @keyframes pulse-blob {
          0%, 100% { opacity: 0.75; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.07); }
        }
      `}</style>

      <div className={jakarta.className}>

        {/* ── Hero ── */}
        <section
          className="relative overflow-hidden min-h-[100svh] flex items-center"
          style={{ background: "linear-gradient(145deg, #0d0a2e 0%, #1a1260 32%, #2e2ab8 65%, #4a46d0 100%)" }}
        >
          <Blobs items={[
            { w: 900, h: 900, top: "-25%",    left: "-20%",  color: "rgba(46,42,184,0.55)",  delay: "0s" },
            { w: 700, h: 700, top: "15%",     right: "-12%", color: "rgba(74,70,208,0.38)",  delay: "1.2s" },
            { w: 550, h: 550, bottom: "-18%", left: "32%",   color: "rgba(240,112,96,0.22)", delay: "2.4s" },
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
                  style={{ background: "rgba(74,70,208,0.20)", border: "1px solid rgba(140,136,240,0.40)", backdropFilter: "blur(20px) saturate(160%)", WebkitBackdropFilter: "blur(20px) saturate(160%)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25)" }}
                >
                  <span className="text-[11px] font-bold text-white/80 tracking-widest uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    DevOps on Azure
                  </span>
                </div>

                <h1
                  className="font-extrabold text-white mb-8 leading-[0.95]"
                  style={{ fontSize: "clamp(52px, 7vw, 96px)", letterSpacing: "-0.045em" }}
                >
                  Automate delivery.<br />
                  Eliminate risk.<br />
                  <span style={{
                    background: "linear-gradient(90deg, #a5a0f8 0%, #c4c0ff 60%, #e0deff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    Scale with confidence.
                  </span>
                </h1>

                <motion.p
                  className="text-white/70 text-lg leading-[1.75] max-w-[480px] mb-10"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                >
                  We design and implement world-class DevOps practices on Azure — CI/CD pipelines, Infrastructure as Code, and automated testing that lets your team deploy with confidence, every time.
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
                    style={{ background: "#ffffff", color: "#2e2ab8" }}
                  >
                    Book a 15-min call
                  </Link>
                  <Link
                    href="/solutions"
                    className="inline-flex items-center px-8 py-4 rounded-full text-base font-semibold transition-all"
                    style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.28)", backdropFilter: "blur(16px)", color: "rgba(255,255,255,0.85)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.30)" }}
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
                  {['Azure Pipelines', 'Azure Repos', 'Terraform', 'Bicep', 'Azure Monitor'].map(tag => (
                    <span
                      key={tag}
                      className="text-[11px] font-bold px-3 py-1 rounded-full"
                      style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.22)", color: "rgba(255,255,255,0.65)", fontFamily: "'JetBrains Mono', monospace", backdropFilter: "blur(8px)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right — devops image */}
              <motion.div
                className="lg:flex-1 lg:max-w-[500px] w-full"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.18, ease: "easeOut" }}
              >
                <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.08)" }}>
                  {/* ambient glow */}
                  <div className="absolute -inset-4 -z-10 rounded-[40px]" style={{ background: "radial-gradient(ellipse at 60% 40%, rgba(0,188,242,0.30) 0%, transparent 65%)", filter: "blur(28px)" }} />

                  <Image
                    src="/img/devops1.jpeg"
                    alt="DevOps engineering"
                    width={600}
                    height={520}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                    quality={92}
                  />

                  {/* gradient overlay */}
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,16,43,0.75) 0%, rgba(5,16,43,0.10) 50%, transparent 75%)" }} />

                  {/* bottom caption */}
                  <div className="absolute bottom-6 left-6">
                    <p className="text-white font-bold text-sm leading-tight">DevOps on Azure</p>
                    <p className="text-white/50 text-xs mt-0.5">From commit to production — automated.</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>


        {/* ── Capabilities — glass on pastel blobs ── */}
        <section
          className="relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #f0f8ff 0%, #e8f4ff 40%, #f0fdf8 100%)" }}
        >
          <Blobs items={[
            { w: 900, h: 900, top: "-20%",    right: "-18%", color: "rgba(0,120,212,0.28)",  delay: "0s" },
            { w: 700, h: 700, bottom: "-15%", left: "-12%",  color: "rgba(0,188,242,0.22)",  delay: "1.5s" },
            { w: 500, h: 500, top: "35%",     left: "40%",   color: "rgba(124,58,237,0.14)", delay: "3s" },
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
                  Every layer of your<br />DevOps pipeline, covered.
                </h2>
              </div>
              <Link
                href="/schedule-call"
                className="shrink-0 self-start md:self-end inline-flex items-center px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap"
                style={{ background: "#0078d4", color: "#fff", boxShadow: "0 4px 16px rgba(0,120,212,0.35)" }}
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

        {/* ── Two-column callout — glass panels on blob bg ── */}
        <section
          className="relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #f5f8ff 0%, #eaf3ff 50%, #f5f8ff 100%)" }}
        >
          <Blobs items={[
            { w: 800, h: 800, top: "-25%",    left: "-15%",  color: "rgba(0,120,212,0.20)",  delay: "0.5s" },
            { w: 600, h: 600, bottom: "-20%", right: "-10%", color: "rgba(0,188,242,0.18)",  delay: "2s" },
          ]} />

          <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* Dark glass panel */}
              <div
                className="rounded-3xl px-10 py-12 flex flex-col gap-5"
                style={{
                  background: "rgba(5,16,43,0.88)",
                  backdropFilter: "blur(40px) saturate(160%)",
                  WebkitBackdropFilter: "blur(40px) saturate(160%)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.22), 0 8px 40px rgba(0,20,80,0.25)",
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00bcf2] shrink-0" style={{ boxShadow: "0 0 6px #00bcf2" }} />
                  <p className="text-xs uppercase tracking-wider text-white/50 font-medium">Our philosophy</p>
                </div>
                <p className="text-white/85 text-lg leading-[1.75]">
                  DevOps isn&apos;t a tool — it&apos;s a culture. We don&apos;t just configure pipelines; we work alongside your team to embed the practices, habits, and automation that make fast, reliable delivery the norm — not the exception.
                </p>
              </div>

              {/* Image panel */}
              <div className="rounded-3xl overflow-hidden relative min-h-[320px]" style={{ boxShadow: "0 4px 32px rgba(0,80,180,0.12)" }}>
                <Image
                  src="/img/devops1.jpeg"
                  alt="DevOps engineering team"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  quality={90}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,16,43,0.55) 0%, transparent 60%)' }} />
                <div className="absolute bottom-6 left-8">
                  <p className="text-white font-semibold text-sm">DevOps engineering, done right.</p>
                  <p className="text-white/55 text-xs mt-1">Faster delivery. Less friction. Every time.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── How it works — ProcessTimeline ── */}
        <section
          className="relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #f0f8ff 0%, #e8f4ff 45%, #f5f0ff 100%)" }}
        >
          <Blobs items={[
            { w: 900, h: 900, top: "-20%",    right: "-15%", color: "rgba(0,120,212,0.22)",  delay: "0s" },
            { w: 700, h: 700, bottom: "-20%", left: "-12%",  color: "rgba(0,188,242,0.18)",  delay: "1.8s" },
            { w: 500, h: 500, top: "35%",     left: "40%",   color: "rgba(124,58,237,0.14)", delay: "3.2s" },
          ]} />
          <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-24">
            <div className="flex items-center gap-2 mb-10">
              <p className="text-xs uppercase tracking-wider text-[#6b7280] font-medium">How it works</p>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
              <h2
                className="font-extrabold text-[#0a0e1a] leading-[1.05] max-w-[700px]"
                style={{ fontSize: "clamp(32px, 4.5vw, 56px)", letterSpacing: "-0.035em" }}
              >
                From assessment to<br />fully automated delivery.
              </h2>
              <Link
                href="/schedule-call"
                className="shrink-0 self-start lg:self-end inline-flex items-center px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap"
                style={{ background: "#0078d4", color: "#fff", boxShadow: "0 4px 16px rgba(0,120,212,0.30)" }}
              >
                Start the journey
              </Link>
            </div>
            <ProcessTimeline steps={steps} />
          </div>
        </section>

        {/* ── FAQ — glass on Azure pastel blobs ── */}
        <section
          className="relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #f0f8ff 0%, #e8f4ff 50%, #f5f8ff 100%)" }}
        >
          <Blobs items={[
            { w: 800, h: 800, top: "-15%",    right: "-15%", color: "rgba(0,120,212,0.20)",  delay: "0s" },
            { w: 600, h: 600, bottom: "-10%", left: "-8%",   color: "rgba(0,188,242,0.16)",  delay: "1.8s" },
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
          style={{ background: "linear-gradient(135deg, #1a1260 0%, #2e2ab8 55%, #4a46d0 100%)" }}
        >
          <Blobs items={[
            { w: 700, h: 700, top: "-30%",    right: "-10%", color: "rgba(74,70,208,0.40)",  delay: "0s" },
            { w: 500, h: 500, bottom: "-20%", left: "20%",   color: "rgba(240,112,96,0.22)", delay: "1.5s" },
          ]} />
          <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <div className="flex flex-col gap-4 max-w-xl">
              <h2
                className="font-extrabold text-white leading-[1.05]"
                style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.035em" }}
              >
                Ready to transform<br />your delivery pipeline?
              </h2>
              <p className="text-white/65 text-lg leading-[1.75]">
                Let&apos;s talk about your current setup and map out what modern DevOps looks like for your team.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/schedule-call"
                className="inline-flex items-center px-8 py-4 rounded-full text-base font-bold"
                style={{ background: "#ffffff", color: "#0078d4" }}
              >
                Book a discovery call
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center px-8 py-4 rounded-full text-base font-semibold"
                style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.30)", color: "rgba(255,255,255,0.85)", backdropFilter: "blur(16px)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35)" }}
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
