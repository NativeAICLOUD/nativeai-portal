'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AzureHero } from '@/ImagePath';
import ContactUsFooter from '@/app/components/partials/ContactUsFooter';
import { Constants } from '@/Constants';

const benefits = [
  {
    title: 'Faster deployment',
    desc: 'Deploy applications and services with minimal set-up and configuration — cutting the time and cost of manual releases significantly.',
  },
  {
    title: 'Elastic scalability',
    desc: 'Scale horizontally on demand without manual reconfiguration. Add capacity as load grows and release it when it drops.',
  },
  {
    title: 'CI / CD by default',
    desc: 'Ship from development to production continuously and reliably. Automated pipelines mean every commit is a potential release.',
  },
  {
    title: 'Cost-effectiveness',
    desc: 'Pay only for what you use. Cloud-native architectures eliminate the overhead of over-provisioned, idle on-premises infrastructure.',
  },
  {
    title: 'Improved security',
    desc: 'Built-in security tooling, identity-based access, and automated compliance checks protect data and workloads at every layer.',
  },
];

const principles = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Agile',
    desc: 'Short sprints, continuous feedback, and incremental delivery — we work alongside your team in scrum cadences that keep stakeholders aligned.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: 'Resilient',
    desc: 'Fault-tolerant by design — circuit breakers, retry logic, health checks, and multi-region redundancy ensure your services stay up.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
      </svg>
    ),
    title: 'Scalable',
    desc: 'Container-based microservices on Kubernetes scale each component independently — no more all-or-nothing vertical scaling of a monolith.',
  },
];

export default function CloudNativeSD() {
  return (
    <div className="relative min-h-full overflow-x-clip bg-white">

      {/* ── Hero with background image ── */}
      <section className="relative overflow-hidden min-h-[520px] sm:min-h-[620px] flex items-center pt-36 pb-20 sm:pt-44 sm:pb-28 px-5 sm:px-10">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={AzureHero}
            alt="Background"
            fill
            className="object-cover object-[85%] sm:object-top"
            quality={100}
          />
          {/* Gradient overlay so text stays legible */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a]/90 via-[#0a0e1a]/70 to-[#0a0e1a]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/60 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-9xl mx-auto w-full">
          <motion.div
            className="inline-flex items-center gap-2 bg-[#e89a78]/15 border border-[#e89a78]/30 rounded-full px-4 py-1.5 mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78]" />
            <p className="text-xs uppercase tracking-widest text-[#e89a78] font-semibold">Solutions · Cloud Native</p>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black !leading-[1.05] text-white max-w-4xl mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Cloud-Native{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#f0a060] via-[#e89a78] to-[#d4845c] bg-clip-text text-transparent">
                Software Development
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-[#f0a060] via-[#e89a78] to-[#d4845c] opacity-60" />
            </span>
          </motion.h1>

          <motion.p
            className="text-white/60 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our scrum-based cloud-native development delivers a production-ready MVP that is easy to iterate on and built to scale — from day one.
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
              className="inline-flex items-center justify-center gap-2 px-7 min-h-[52px] rounded-full border border-white/25 hover:border-[#e89a78]/60 text-white/70 hover:text-white font-semibold text-sm transition-all duration-200 w-full sm:w-auto"
            >
              View all solutions
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── What is cloud-native ── */}
      <section className="max-w-9xl mx-auto px-5 sm:px-10 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78]" />
              <p className="text-xs uppercase tracking-wider text-[#6b6b6b] font-medium">What we build</p>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0a0e1a] leading-tight mb-6">
              Software built for the cloud —{' '}
              <span className="bg-gradient-to-r from-[#f0a060] via-[#e89a78] to-[#d4845c] bg-clip-text text-transparent">
                not just running on it
              </span>
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-5">
              Cloud-native development means building applications that fully exploit the advantages of cloud infrastructure — containers, microservices, serverless functions, and event-driven pipelines — rather than simply lifting legacy software onto virtual machines.
            </p>
            <p className="text-[#4a4a4a] text-base leading-relaxed">
              We help you modernise your development practice step by step, working alongside your architects and engineering teams to adopt agile delivery and continuous deployment at a pace that makes sense for your organisation.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-4"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true, margin: '-60px' }}
          >
            {principles.map((p, i) => (
              <div key={i} className="group flex gap-4 p-5 rounded-2xl border border-[#e8e0d8] hover:border-[#e89a78]/40 bg-[#faf7f4] hover:bg-[#f4ebe8] transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-[#e89a78]/10 border border-[#e89a78]/20 flex items-center justify-center text-[#e89a78] shrink-0 group-hover:bg-[#e89a78]/15 transition-colors">
                  {p.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#0a0e1a] mb-1">{p.title}</h3>
                  <p className="text-[#6b6b6b] text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="bg-[#0a0e1a] py-20 sm:py-28 px-5 sm:px-10">
        <div className="max-w-9xl mx-auto">
          <motion.div
            className="inline-flex items-center gap-2 bg-[#e89a78]/10 border border-[#e89a78]/25 rounded-full px-4 py-1.5 mb-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-60px' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78]" />
            <p className="text-xs uppercase tracking-widest text-[#e89a78] font-semibold">Why go cloud-native</p>
          </motion.div>

          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white max-w-2xl mb-14 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: '-60px' }}
          >
            Five reasons organisations choose cloud-native development
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.07 }}
                viewport={{ once: true, margin: '-40px' }}
                className="group flex flex-col gap-3 p-6 rounded-2xl border border-white/8 hover:border-[#e89a78]/30 bg-white/[0.04] hover:bg-white/[0.07] transition-all duration-200"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78]/40 group-hover:bg-[#e89a78] transition-colors shrink-0" />
                  <h3 className="text-sm font-semibold text-white">{b.title}</h3>
                </div>
                <p className="text-white/50 text-sm leading-relaxed pl-4">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why NativeCloud ── */}
      <section className="max-w-9xl mx-auto px-5 sm:px-10 py-20 sm:py-28">
        <motion.div
          className="flex items-center gap-2 mb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78]" />
          <p className="text-xs uppercase tracking-wider text-[#6b6b6b] font-medium">Why NativeCloud</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-60px' }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0a0e1a] leading-tight mb-6">
              Is cloud-native development{' '}
              <span className="bg-gradient-to-r from-[#f0a060] via-[#e89a78] to-[#d4845c] bg-clip-text text-transparent">
                right for you?
              </span>
            </h2>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-5">
              It is especially valuable for software organisations facing challenges getting existing applications cloud-ready, and for those who want to stay competitive in a fast-moving market.
            </p>
            <p className="text-[#4a4a4a] text-base leading-relaxed">
              Whether you&apos;re currently on a private cloud, another public cloud, or still fully on-premises — we can map a realistic path to Azure and support you every step of the way, from first migration to full cloud-native maturity.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: '-60px' }}
          >
            {[
              { label: 'MVP delivery', value: 'Sprint-based delivery of a working product in weeks, not months.' },
              { label: 'Existing Azure customers', value: 'Optimise your current Azure environment and adopt modern cloud-native patterns.' },
              { label: 'Legacy modernisation', value: 'Break apart monoliths into maintainable microservices at a pace your team can absorb.' },
              { label: 'Greenfield projects', value: 'Start right — with proper architecture, CI/CD, and observability from commit one.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-2xl border border-[#e8e0d8] bg-[#faf7f4]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0 mt-1.5" />
                <div>
                  <p className="text-sm font-semibold text-[#0a0e1a] mb-0.5">{item.label}</p>
                  <p className="text-[#6b6b6b] text-sm leading-relaxed">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CTA banner */}
        <motion.div
          className="flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between p-8 rounded-2xl bg-[#faf7f4] border border-[#e8e0d8] mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-40px' }}
        >
          <div className="max-w-lg">
            <h3 className="text-lg font-bold text-[#0a0e1a] mb-1">Ready to build cloud-native?</h3>
            <p className="text-[#6b6b6b] text-sm">Book a free 30-minute call. We&apos;ll review where you are today and outline a practical path forward — no obligation.</p>
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
