'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ContactUsFooter from '@/app/components/partials/ContactUsFooter';
import { Constants } from '@/Constants';

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
    desc: 'We provision, configure, and manage all infrastructure through code — Terraform, Bicep, or Pulumi — so every environment is reproducible, auditable, and version-controlled.',
  },
];

const services = [
  { title: 'Well-Architected Reviews', desc: 'Audit your existing cloud setup against the five pillars of the Azure or AWS Well-Architected Framework and get a prioritised improvement roadmap.' },
  { title: 'Reference Architecture Blueprints', desc: 'Proven, battle-tested architecture patterns — multi-region HA, event-driven systems, CQRS/ES — adapted to your domain and delivered as living documentation.' },
  { title: 'Cloud Migration Architecture', desc: 'Lift-and-shift, re-platform, or full re-architect — we plan the migration path that minimises risk and maximises the value of the cloud.' },
  { title: 'Serverless & Container Architecture', desc: 'Design containerised workloads on AKS or EKS, or go fully serverless with Azure Functions and Azure Container Apps — right-sized for cost and performance.' },
  { title: 'Event-Driven Architecture', desc: 'Decouple services with reliable messaging and event streaming using Azure Service Bus, Event Grid, or Kafka — built for resilience at any scale.' },
  { title: 'Security & Compliance Design', desc: 'Zero-trust network design, identity architecture, encryption at rest and in transit, and compliance mapping for ISO 27001, SOC 2, GDPR, and more.' },
];

const reasons = [
  { stat: '3×', label: 'Faster time-to-scale', desc: 'Well-designed systems scale horizontally without rewrites.' },
  { stat: '60%', label: 'Lower incident rate', desc: 'Architecture reviews catch failure modes before they hit production.' },
  { stat: '40%', label: 'Reduced cloud spend', desc: 'Right-sized resources and optimised data flows cut waste at the source.' },
];

export default function CloudSoftwareArchitecturePage() {
  return (
    <div className="relative min-h-full overflow-x-clip bg-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#0a0e1a] pt-36 pb-20 sm:pt-44 sm:pb-28 px-5 sm:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_60%,_rgba(232,154,120,0.12)_0%,_transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_rgba(240,160,80,0.07)_0%,_transparent_55%)] pointer-events-none" />

        <div className="relative max-w-9xl mx-auto">
          <motion.div
            className="inline-flex items-center gap-2 bg-[#e89a78]/10 border border-[#e89a78]/25 rounded-full px-4 py-1.5 mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78]" />
            <p className="text-xs uppercase tracking-widest text-[#e89a78] font-semibold">Solutions · Architecture</p>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black !leading-[1.05] text-white max-w-4xl mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Design systems that{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#f0a060] via-[#e89a78] to-[#d4845c] bg-clip-text text-transparent">
                scale from day one
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-[#f0a060] via-[#e89a78] to-[#d4845c] opacity-60" />
            </span>
          </motion.h1>

          <motion.p
            className="text-white/55 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We architect cloud-native solutions built for performance, resilience, and growth. Whether you&apos;re building from scratch or rethinking an existing stack, we make the right design decisions before a single line of code is written.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href={Constants.PAGES.SCHEDULE_CALL}
              className="inline-flex items-center justify-center gap-3 px-7 min-h-[52px] rounded-full bg-[#e89a78] hover:bg-[#f0a060] text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#e89a78]/25 w-full sm:w-auto"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
                <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              Schedule a free call
            </Link>
            <Link
              href={Constants.PAGES.SOLUTIONS}
              className="inline-flex items-center justify-center gap-2 px-7 min-h-[52px] rounded-full border border-white/20 hover:border-[#e89a78]/50 text-white/70 hover:text-white font-semibold text-sm transition-all duration-200 w-full sm:w-auto"
            >
              View all solutions
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Three pillars ── */}
      <section className="max-w-9xl mx-auto px-5 sm:px-10 py-20 sm:py-28">
        <motion.div
          className="flex items-center gap-2 mb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78]" />
          <p className="text-xs uppercase tracking-wider text-[#6b6b6b] font-medium">What we do</p>
        </motion.div>

        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0a0e1a] max-w-xl mb-14 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: '-60px' }}
        >
          Three disciplines that make architecture{' '}
          <span className="bg-gradient-to-r from-[#f0a060] via-[#e89a78] to-[#d4845c] bg-clip-text text-transparent">
            future-proof
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
              viewport={{ once: true, margin: '-40px' }}
              className="group flex flex-col gap-4 p-7 rounded-2xl border border-[#e8e0d8] hover:border-[#e89a78]/40 bg-[#faf7f4] hover:bg-[#f4ebe8] transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-xl bg-[#e89a78]/10 border border-[#e89a78]/20 flex items-center justify-center text-[#e89a78] group-hover:bg-[#e89a78]/15 transition-colors">
                {pillar.icon}
              </div>
              <h3 className="text-base font-semibold text-[#0a0e1a]">{pillar.title}</h3>
              <p className="text-[#6b6b6b] text-sm leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Services grid ── */}
      <section className="bg-[#faf7f4] py-20 sm:py-28 px-5 sm:px-10">
        <div className="max-w-9xl mx-auto">
          <motion.div
            className="flex items-center gap-2 mb-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-60px' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78]" />
            <p className="text-xs uppercase tracking-wider text-[#6b6b6b] font-medium">Architecture services</p>
          </motion.div>

          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0a0e1a] max-w-2xl mb-12 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: '-60px' }}
          >
            Everything your architecture needs —{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#f0a060] via-[#e89a78] to-[#d4845c] bg-clip-text text-transparent">
                under one roof
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-[2px] rounded-full bg-gradient-to-r from-[#f0a060] via-[#e89a78] to-[#d4845c] opacity-50" />
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.07 }}
                viewport={{ once: true, margin: '-40px' }}
                className="group flex flex-col gap-3 p-6 rounded-2xl border border-[#e8e0d8] hover:border-[#e89a78]/40 bg-white hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78]/30 group-hover:bg-[#e89a78] transition-colors shrink-0" />
                  <h3 className="text-sm font-semibold text-[#0a0e1a]">{service.title}</h3>
                </div>
                <p className="text-[#6b6b6b] text-sm leading-relaxed pl-4">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why it matters ── */}
      <section className="max-w-9xl mx-auto px-5 sm:px-10 py-20 sm:py-28">
        <motion.div
          className="flex items-center gap-2 mb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78]" />
          <p className="text-xs uppercase tracking-wider text-[#6b6b6b] font-medium">Why architecture matters</p>
        </motion.div>

        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0a0e1a] max-w-xl mb-14 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: '-60px' }}
        >
          Good architecture pays for itself
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: '-40px' }}
              className="flex flex-col gap-2 p-7 rounded-2xl bg-[#0a0e1a] text-white"
            >
              <span className="text-4xl font-black bg-gradient-to-r from-[#f0a060] via-[#e89a78] to-[#d4845c] bg-clip-text text-transparent">
                {r.stat}
              </span>
              <h3 className="text-base font-semibold">{r.label}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between p-8 rounded-2xl bg-[#faf7f4] border border-[#e8e0d8]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-40px' }}
        >
          <div className="max-w-lg">
            <h3 className="text-lg font-bold text-[#0a0e1a] mb-1">Ready to design your architecture?</h3>
            <p className="text-[#6b6b6b] text-sm">Book a free 30-minute call. We&apos;ll review your current setup and outline a path forward — no obligation.</p>
          </div>
          <Link
            href={Constants.PAGES.SCHEDULE_CALL}
            className="shrink-0 inline-flex items-center justify-center gap-2 px-6 min-h-[48px] rounded-full bg-[#0a0e1a] hover:bg-[#e89a78] text-white font-semibold text-sm transition-all duration-200 shadow-sm w-full sm:w-auto"
          >
            Schedule a free call
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </section>

      <ContactUsFooter />
    </div>
  );
}
