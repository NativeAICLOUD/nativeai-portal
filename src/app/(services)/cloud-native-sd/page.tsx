'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Constants } from '@/Constants';
import ServiceFooter from '@/app/components/partials/services/ServiceFooter';

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

const benefits = [
  { title: 'Faster deployment',    desc: 'Ship from commit to production continuously. Automated pipelines mean every build is a potential release — no manual gates.' },
  { title: 'Elastic scalability',  desc: 'Scale each service independently on demand. Add capacity as load grows and release it when it drops — no over-provisioning.' },
  { title: 'CI/CD by default',     desc: 'Every repo starts with a pipeline. Automated testing, staging deploys, and production promotion are built in from day one.' },
  { title: 'Cost-effectiveness',   desc: 'Pay only for what you use. Cloud-native eliminates idle on-premises infrastructure and cuts the overhead of manual ops.' },
  { title: 'Improved security',    desc: 'Identity-based access, automated compliance checks, and secret management baked in — not bolted on after the fact.' },
];

const useCases = [
  { label: 'MVP delivery',               value: 'Sprint-based delivery of a working product in weeks, not months.' },
  { label: 'Existing Azure customers',   value: 'Optimise your current Azure environment and adopt modern cloud-native patterns.' },
  { label: 'Legacy modernisation',       value: 'Break apart monoliths into maintainable microservices at a pace your team can absorb.' },
  { label: 'Greenfield projects',        value: 'Start right — with proper architecture, CI/CD, and observability from commit one.' },
];

const processSteps = [
  { step: '01', heading: 'Architecture workshop',   body: 'We map your services, data flows, and team topology — then design a target architecture your engineers can ship against in sprints.' },
  { step: '02', heading: 'Environment setup',       body: 'Azure landing zone, Kubernetes cluster, container registry, and CI/CD pipelines — standing and verified before the first feature starts.' },
  { step: '03', heading: 'Sprint-based delivery',   body: 'Two-week sprints. Working software every cycle. Scope can shift; our process absorbs it without derailing delivery.' },
  { step: '04', heading: 'Observability first',     body: 'Metrics, distributed tracing, and log aggregation configured at the start — not tacked on after something breaks in production.' },
  { step: '05', heading: 'Production rollout',      body: 'Zero-downtime deployments, automated rollbacks, and a runbook your team owns. We stay alongside until the system is stable.' },
];

export default function CloudNativeSD() {
  return (
    <div style={MONO} className="min-h-screen bg-white overflow-x-clip">

      <style>{`
        .cn-gradient-text {
          background: linear-gradient(135deg, #0284c7 0%, #e89a78 55%, #059669 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* ── Hero ── */}
      <section className="relative bg-white overflow-hidden">
        {/* Subtle mesh background */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.07]"
            style={{ background: 'radial-gradient(circle, #0284c7 0%, transparent 70%)' }} />
          <div className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full opacity-[0.06]"
            style={{ background: 'radial-gradient(circle, #e89a78 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.05]"
            style={{ background: 'radial-gradient(circle, #059669 0%, transparent 70%)' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-36 pb-16">

          {/* Pill tag */}
          <motion.div
            className="inline-flex items-center gap-2.5 bg-[#e8f4fb] border border-[#bde0f5] rounded-full px-4 py-1.5 mb-10"
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] shrink-0" />
            <span className="text-[11px] font-semibold text-[#0284c7] tracking-widest uppercase">
              Cloud Native · Kubernetes · Azure
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-center gap-16 xl:gap-24">

            {/* Headline */}
            <div className="flex-1 min-w-0">
              <motion.h1
                className="text-6xl md:text-7xl lg:text-8xl font-black text-[#0a0e1a] leading-[1.0] tracking-tight mb-8"
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              >
                Built for the<br />
                <span className="cn-gradient-text">cloud</span><br />
                from day one.
              </motion.h1>
              <motion.p
                className="text-[#4b5563] text-xl leading-relaxed max-w-[500px] mb-10"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              >
                Scrum-based cloud-native development on Kubernetes & Azure — production-ready, containerised, and built to scale from the first sprint.
              </motion.p>
              <motion.div
                className="flex flex-wrap items-center gap-3"
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link
                  href={Constants.PAGES.SCHEDULE_CALL}
                  className="bg-[#0a0e1a] hover:bg-[#0284c7] text-white px-8 py-4 rounded-full text-base font-semibold transition-colors whitespace-nowrap"
                >
                  Book a free call
                </Link>
                <Link
                  href={Constants.PAGES.SOLUTIONS}
                  className="bg-white border border-[#e5e7eb] hover:border-[#d1d5db] hover:bg-[#f9fafb] text-[#374151] px-8 py-4 rounded-full text-base font-medium transition-colors whitespace-nowrap"
                >
                  View all solutions
                </Link>
              </motion.div>
            </div>

            {/* Glass terminal card */}
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
                  <span className="ml-3 text-xs text-white/30">kubectl — production-cluster</span>
                </div>
                {/* Log lines */}
                <div className="p-5 flex flex-col gap-3 text-sm">
                  {[
                    { prompt: '$', cmd: 'kubectl get pods -n api', color: 'text-white/50' },
                    { prompt: '●', cmd: 'api-gateway-7d9f8b   1/1   Running   0   4d', color: 'text-[#28c840]' },
                    { prompt: '●', cmd: 'auth-service-3c6e1a   1/1   Running   0   4d', color: 'text-[#28c840]' },
                    { prompt: '●', cmd: 'payments-pod-5a2d9f   1/1   Running   0   2d', color: 'text-[#28c840]' },
                    { prompt: '$', cmd: 'kubectl rollout status deploy/api-gateway', color: 'text-white/50' },
                    { prompt: '✓', cmd: 'deployment "api-gateway" successfully rolled out', color: 'text-[#e89a78]' },
                  ].map((row, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className={`text-xs mt-0.5 shrink-0 ${row.color}`}>{row.prompt}</span>
                      <span className="text-white/70 text-xs">{row.cmd}</span>
                    </div>
                  ))}
                  <div className="flex items-start gap-3">
                    <span className="text-white/20 text-xs shrink-0">$</span>
                    <span className="text-white/30 text-xs">_</span>
                  </div>
                </div>
                {/* Status bar */}
                <div className="px-5 py-3 flex items-center justify-between border-t border-white/[0.06] text-xs" style={{ background: '#111827' }}>
                  <span className="text-white/40">3 pods · 0 restarts</span>
                  <span className="flex items-center gap-1.5 text-white/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#28c840]" style={{ boxShadow: '0 0 5px #28c840' }} />
                    healthy
                  </span>
                </div>
              </div>

              {/* Stats row */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { val: '2 wks', label: 'first sprint' },
                  { val: '99.9%', label: 'uptime SLA' },
                  { val: '0-down', label: 'deployments' },
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
          <span className="text-[11px] uppercase tracking-widest text-[#9ca3af] font-semibold shrink-0">Stack</span>
          {['Kubernetes', 'Azure AKS', 'Docker', 'Helm', 'Terraform', 'GitHub Actions', 'Azure DevOps', 'Prometheus'].map((t) => (
            <span key={t} className="text-sm text-[#6b7280] whitespace-nowrap">{t}</span>
          ))}
        </div>
      </div>

      {/* ── Three pillars ── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
            <p className="text-xs uppercase tracking-wider text-[#6b7280] font-medium">How we build</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0e1a] leading-tight mb-12 max-w-2xl">
            Three principles.<br />One production system.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Agile — blue */}
            <div className="rounded-3xl p-10 flex flex-col gap-6 relative overflow-hidden" style={{ background: 'linear-gradient(145deg, #0284c7 0%, #0369a1 100%)' }}>
              <div aria-hidden className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, white 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-white/60">01</span>
                <h3 className="text-2xl font-bold text-white leading-snug">Agile delivery</h3>
              </div>
              <p className="text-white/80 text-base leading-relaxed flex-1">
                Two-week sprints, weekly demos, and a backlog you control. You see working software every cycle — not a big reveal at the end. Scope can shift; our process absorbs it.
              </p>
              <Link href={Constants.PAGES.SCHEDULE_CALL} className="self-start inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors">
                Get started
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>

            {/* Resilient — violet */}
            <div className="rounded-3xl p-10 flex flex-col gap-6 relative overflow-hidden" style={{ background: 'linear-gradient(145deg, #7c3aed 0%, #6d28d9 100%)' }}>
              <div aria-hidden className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, white 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-white/60">02</span>
                <h3 className="text-2xl font-bold text-white leading-snug">Resilient by design</h3>
              </div>
              <p className="text-white/80 text-base leading-relaxed flex-1">
                Circuit breakers, retry logic, health checks, and multi-region failover — not added later as patches but designed in from the architecture workshop.
              </p>
              <Link href={Constants.PAGES.SCHEDULE_CALL} className="self-start inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors">
                Get started
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>

            {/* Scalable — emerald */}
            <div className="rounded-3xl p-10 flex flex-col gap-6 relative overflow-hidden" style={{ background: 'linear-gradient(145deg, #059669 0%, #047857 100%)' }}>
              <div aria-hidden className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, white 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-white/60">03</span>
                <h3 className="text-2xl font-bold text-white leading-snug">Horizontally scalable</h3>
              </div>
              <p className="text-white/80 text-base leading-relaxed flex-1">
                Kubernetes scales each microservice independently. No more all-or-nothing vertical scaling of a monolith — add capacity where demand grows, release it when it drops.
              </p>
              <Link href={Constants.PAGES.SCHEDULE_CALL} className="self-start inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors">
                Get started
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits — glass on gradient ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden
          style={{ background: 'linear-gradient(160deg, #f0f9ff 0%, #faf5ff 50%, #f0fdf4 100%)' }} />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
            <p className="text-xs uppercase tracking-wider text-[#6b7280] font-medium">Why go cloud-native</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0e1a] leading-tight mb-14 max-w-2xl">
            Five reasons to make<br />the switch.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                style={glassLight}
                className="p-7 flex flex-col gap-3 hover:shadow-lg transition-shadow duration-200"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.07 }}
                viewport={{ once: true, margin: '-40px' }}
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
                  <h3 className="text-sm font-semibold text-[#0a0e1a]">{b.title}</h3>
                </div>
                <p className="text-[#6b7280] text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process steps — glass panel ── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
            <p className="text-xs uppercase tracking-wider text-[#6b7280] font-medium">How we work</p>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a0e1a] leading-tight max-w-xl">
              From architecture<br />to production — in weeks.
            </h2>
            <Link
              href={Constants.PAGES.SCHEDULE_CALL}
              className="shrink-0 self-start lg:self-end inline-flex items-center bg-[#0a0e1a] hover:bg-[#1a2235] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors whitespace-nowrap"
            >
              Book a free call
            </Link>
          </div>

          {/* Glass timeline */}
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
            {/* Bottom CTA */}
            <div className="px-10 py-5 border-t border-black/[0.07] flex items-center justify-between" style={{ background: 'rgba(255,255,255,0.40)' }}>
              <p className="text-[13px] text-[#9A9A9A]">Ready to start your first sprint?</p>
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

      {/* ── Who is it for — two glass panels ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden
          style={{ background: 'linear-gradient(160deg, #faf5ff 0%, #f0f9ff 100%)' }} />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
            <p className="text-xs uppercase tracking-wider text-[#6b7280] font-medium">Who is it for</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0e1a] leading-tight mb-14 max-w-2xl">
            Is cloud-native right<br />for your team?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
            {/* Left — why panel */}
            <div style={glass} className="p-10 flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] shrink-0" />
                <p className="text-xs uppercase tracking-wider text-[#0284c7] font-semibold">Why cloud-native?</p>
              </div>
              <p className="text-[#0a0e1a] text-lg leading-relaxed">
                Cloud-native is especially valuable for software teams facing challenges getting applications cloud-ready, and for those who want to stay competitive in a fast-moving market.
              </p>
              <p className="text-[#6b7280] text-sm leading-relaxed">
                Whether you&apos;re on a private cloud, another public cloud, or still fully on-premises — we map a realistic path to Azure and support you every step of the way.
              </p>
            </div>

            {/* Right — use cases */}
            <div style={glass} className="overflow-hidden">
              <div className="divide-y divide-black/[0.06]">
                {useCases.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 px-8 py-5 hover:bg-black/[0.02] transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0 mt-1.5" />
                    <div>
                      <p className="text-[14px] font-semibold text-[#0E0E12] mb-0.5">{item.label}</p>
                      <p className="text-[12.5px] text-[#6B6B6B] leading-relaxed">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA glass banner */}
          <motion.div
            style={glass}
            className="px-10 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-40px' }}
          >
            <div>
              <h3 className="text-lg font-bold text-[#0a0e1a] mb-1">Ready to build cloud-native?</h3>
              <p className="text-[#6b7280] text-sm">Book a free 30-minute call. We&apos;ll review where you are today and outline a practical path forward.</p>
            </div>
            <Link
              href={Constants.PAGES.SCHEDULE_CALL}
              className="shrink-0 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0a0e1a] hover:bg-[#e89a78] text-white font-semibold text-sm transition-colors whitespace-nowrap"
            >
              Schedule a free call
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      <ServiceFooter />
    </div>
  );
}
