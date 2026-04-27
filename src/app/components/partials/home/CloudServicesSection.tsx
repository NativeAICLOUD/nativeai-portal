"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const services = [
  { w: 93, h: 68, src: '/img/Cloud.png', title: 'Cloud Solutions & Services' },
  { w: 95, h: 90, src: '/img/Layer_1.png', title: 'Platform Development' },
  { w: 89, h: 81, src: '/img/Layer_2.png', title: 'SaaS app development' },
  { w: 89, h: 67, src: '/img/Layer_3.png', title: 'End-to-end business solutions' },
  { w: 77, h: 77, src: '/img/Layer_4.png', title: 'App modernization' },
  { w: 88, h: 89, src: '/img/Layer_5.png', title: 'Enterprise application development' },
  { w: 101, h: 79, src: '/img/Layer_6.png', title: 'Digital transformation services' },
  { w: 77, h: 74, src: '/img/DevOps.png', title: 'Cloud & DevOps' },
  { w: 90, h: 90, src: '/img/Layer_8.png', title: 'UI/UX design' },
  { w: 140, h: 112, src: '/img/Layer_9.png', title: 'Cloud Migrations' }
];

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
      </svg>
    ),
    title: 'Custom AI Agents',
    desc: 'We build autonomous AI agents tailored to your business — agents that research, decide, and act across your tools, APIs, and data without manual intervention.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    title: 'LLM Integration & RAG',
    desc: 'We embed large language models into your products and internal tools — connected to your own data via RAG so every answer is accurate, private, and on-brand.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    title: 'AI Workflow Automation',
    desc: 'We replace manual processes with multi-agent pipelines — from document processing and approvals to reporting and customer interactions, fully automated end-to-end.',
  },
];

const CloudServicesSection = () => {
  return (
    <section className="-mt-38 bg-white">
      {/* Dark AI pillars block */}
      <div className="relative max-w-9xl mx-auto bg-[#0a0e1a] text-white pt-14 sm:pt-24 px-8 sm:px-16 pb-10 sm:pb-14 xl:rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_70%,_rgba(232,154,120,0.10)_0%,_transparent_55%)]" />

        {/* Label pill */}
        <motion.div
          className="relative inline-flex items-center gap-2 bg-[#e89a78]/10 border border-[#e89a78]/25 rounded-full px-4 py-1.5 mb-7"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78]" />
          <p className="text-xs uppercase tracking-widest text-[#e89a78] font-semibold">AI Agents · LLMs · Azure &amp; AWS</p>
        </motion.div>

        <motion.h2
          className="relative text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold !leading-[1.1] max-w-4xl mb-2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true, margin: '-60px' }}
        >
          We implement{' '}
          <span className="text-[#e89a78]">AI Agents &amp; LLMs</span>{' '}
          inside your business —{' '}
          <span className="text-white/50 font-normal">automating decisions, workflows, and operations.</span>
        </motion.h2>

        <div className="relative text-sm sm:text-base grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mt-12 sm:mt-16">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 + i * 0.12 }}
              viewport={{ once: true, margin: '-40px' }}
              className="flex flex-col gap-4 border border-white/10 hover:border-[#e89a78]/35 rounded-2xl p-7 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-200 group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#e89a78]/10 border border-[#e89a78]/20 flex items-center justify-center text-[#e89a78] group-hover:bg-[#e89a78]/15 transition-colors">
                {pillar.icon}
              </div>
              <h3 className="text-base sm:text-lg font-semibold">{pillar.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default CloudServicesSection;
