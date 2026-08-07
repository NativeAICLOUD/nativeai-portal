'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-transition-progress/next';

const benefits = [
  {
    icon: '/img/faster-development.svg',
    color: '#2563EB',
    bg: 'rgba(37,99,235,0.08)',
    title: 'Faster deployment',
    desc: 'Quickly deploy applications and services with minimal set-up and configuration — reducing time and cost versus manual deployments.',
  },
  {
    icon: '/img/scalability-blue-purple.svg',
    color: '#7C3AED',
    bg: 'rgba(124,58,237,0.08)',
    title: 'Scalability',
    desc: 'Highly scalable solutions that adjust to changing demand — add extra users or features without manual reconfiguration.',
  },
  {
    icon: '/img/continue-integratie-en-delivery.svg',
    color: '#0F8B83',
    bg: 'rgba(15,139,131,0.08)',
    title: 'Continuous integration and delivery',
    desc: 'Built for CI/CD, so applications and services move from development to production with ease.',
  },
  {
    icon: '/img/cost-effectiveness.svg',
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.08)',
    title: 'Cost-effectiveness',
    desc: 'More cost-effective than traditional software solutions — less overhead, less maintenance.',
  },
  {
    icon: '/img/improved-security-blue-purple.svg',
    color: '#E11D48',
    bg: 'rgba(225,29,72,0.08)',
    title: 'Improved security',
    desc: 'Designed with the tools and processes organisations need to protect data and applications.',
  },
];

export default function WhyCloudNativeSection() {
  return (
    <section className="font-switzer max-w-9xl mx-auto px-6 sm:px-12 xl:px-16 pb-20 sm:pb-28">

      {/* Section header */}
      <motion.div
        className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-60px' }}
      >
        <div>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#9ca3af] mb-4">Why go cloud-native</p>
          <h2 className="text-[30px] md:text-[40px] font-medium text-[#111] leading-[1.1] max-w-xl">
            Why should you consider cloud-native software development?
          </h2>
        </div>
        <Link
          href="/schedule-call"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#111] px-6 py-3 text-[14px] font-medium text-white transition-opacity hover:opacity-90"
        >
          Schedule a call
        </Link>
      </motion.div>

      {/* Grouped warm-gray wrapper hugging the cards — same schema as "What we do" */}
      <div className="w-full rounded-2xl bg-[#FAFAF8] p-3 sm:p-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon, color, bg, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.08 }}
              viewport={{ once: true, margin: '-40px' }}
              className="group flex h-full flex-col rounded-lg border border-[#ECECEC] bg-white p-[18px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(37,99,235,0.2)] hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
            >
              <div className="flex min-h-[56px] items-center gap-3.5">
                <span
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[12px] transition-transform duration-200 group-hover:scale-105"
                  style={{ background: bg, color }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={icon} alt="" className="h-8 w-8 object-contain" aria-hidden="true" />
                </span>
                <h3 className="m-0 text-[15.5px] font-semibold leading-[1.25] text-[#111827]">{title}</h3>
              </div>
              <div className="my-3 h-px w-full bg-[#EAEAEA]" />
              <p className="m-0 flex-1 text-[14px] font-normal leading-[1.5] text-[#6B7280]">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
