'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-transition-progress/next';

const categories = [
  {
    label: 'AI & Data',
    services: [
      {
        num: '01',
        title: 'AI Agents & RAG',
        desc: 'Automate decisions, workflows and operations with intelligent agents and retrieval-augmented generation pipelines built on Azure OpenAI.',
        href: '/services/ai-agents-rag',
      },
      {
        num: '02',
        title: 'Data Lifecycle Management',
        desc: 'From raw ingestion to live dashboards — we architect and manage the full data pipeline so your team always has answers, not guesses.',
        href: '/services/data-lifecycle-management',
      },
    ],
  },
  {
    label: 'Cloud & Infrastructure',
    services: [
      {
        num: '03',
        title: 'Cloud Architecture',
        desc: 'Scalable, secure and cost-efficient cloud architectures designed from day one for the workloads you run today and the ones you will run tomorrow.',
        href: '/services/cloud-software-architecture',
      },
      {
        num: '04',
        title: 'Migrate to Azure',
        desc: 'Zero-disruption migrations to Azure. We handle assessment, re-platforming, testing and go-live — so your team stays focused on the product.',
        href: '/services/migrate-to-azure',
      },
      {
        num: '05',
        title: 'Cloud-Native Development',
        desc: 'Containerised microservices on Kubernetes and AKS. Built to scale, resilient by design, and deployed through automated pipelines.',
        href: '/services/cloud-native-sd',
      },
      {
        num: '06',
        title: 'DevOps on Azure',
        desc: 'CI/CD pipelines, infrastructure-as-code and GitOps workflows that ship faster, break less and give your engineers full observability.',
        href: '/services/devops-on-azure',
      },
    ],
  },
  {
    label: 'Build & Design',
    services: [
      {
        num: '07',
        title: 'Custom Development',
        desc: 'Bespoke software for the workflows off-the-shelf tools cannot handle — from MVPs through to enterprise platforms, on Azure and AWS.',
        href: '/services/custom-development',
      },
      {
        num: '08',
        title: 'Product Design',
        desc: 'Interfaces your users actually want to use. We combine UX research, design systems and rapid prototyping to ship products people love.',
        href: '/services/design',
      },
    ],
  },
];

export default function EndToEndServicesSection() {
  return (
    <section className="bg-[#fafaf8] border-t border-black/[0.06] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78]" />
              <p className="text-xs uppercase tracking-[0.18em] text-[#9a9a9a] font-medium">What we deliver</p>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-[1.08] tracking-tight text-[#0a0e1a] max-w-lg">
              End-to-end services,{' '}
              <span className="bg-gradient-to-r from-[#f0a060] via-[#e89a78] to-[#d4845c] bg-clip-text text-transparent">
                zero gaps.
              </span>
            </h2>
          </div>
          <p className="text-[#6b6b6b] text-base leading-relaxed max-w-sm lg:text-right">
            From first line of code to production cloud infrastructure — we cover every layer so you never need to stitch together five agencies.
          </p>
        </div>

        {/* Category groups */}
        <div className="flex flex-col gap-16">
          {categories.map((cat, ci) => (
            <div key={ci}>
              {/* Category label */}
              <div className="flex items-center gap-4 mb-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0a0e1a]/35 shrink-0">
                  {cat.label}
                </p>
                <div className="h-px flex-1 bg-black/[0.07]" />
              </div>

              {/* Service cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-black/[0.07] rounded-2xl overflow-hidden border border-black/[0.07]">
                {cat.services.map((s, si) => (
                  <motion.div
                    key={si}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut', delay: si * 0.07 }}
                    viewport={{ once: true, margin: '-40px' }}
                    className="bg-[#fafaf8]"
                  >
                    <Link
                      href={s.href}
                      className="group flex flex-col h-full p-7 hover:bg-white transition-colors duration-200"
                    >
                      {/* Number */}
                      <span className="text-[11px] font-bold tabular-nums text-[#e89a78]/60 mb-5 font-mono">
                        {s.num}
                      </span>

                      {/* Title */}
                      <h3 className="text-[15px] font-bold text-[#0a0e1a] mb-3 leading-snug group-hover:text-[#e89a78] transition-colors duration-200">
                        {s.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[13px] text-[#6b6b6b] leading-relaxed flex-1">
                        {s.desc}
                      </p>

                      {/* Arrow */}
                      <div className="flex items-center gap-1.5 mt-6 text-[12px] font-semibold text-[#0a0e1a]/30 group-hover:text-[#e89a78] transition-colors duration-200">
                        Learn more
                        <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-20 pt-10 border-t border-black/[0.07]">
          <p className="text-[#6b6b6b] text-sm">
            Not sure which service fits your needs?
          </p>
          <Link
            href="/schedule-call"
            className="inline-flex items-center gap-2.5 bg-[#0a0e1a] hover:bg-[#1a2235] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors duration-200"
          >
            Talk to our team
            <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
