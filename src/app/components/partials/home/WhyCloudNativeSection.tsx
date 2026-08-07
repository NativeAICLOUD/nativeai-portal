'use client';

import { motion } from 'framer-motion';
import { CONTAINER, Eyebrow, PrimaryButton, SECTION_PB, H2, FeatureCard } from './HomeUI';

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
    <section className="font-switzer bg-white">
      <div className={`${CONTAINER} ${SECTION_PB}`}>

      {/* Section header */}
      <motion.div
        className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-60px' }}
      >
        <div>
          <div className="mb-4"><Eyebrow>Why go cloud-native</Eyebrow></div>
          <h2 className={`max-w-xl ${H2}`}>
            Why should you consider cloud-native software development?
          </h2>
        </div>
        <PrimaryButton href="/schedule-call">Schedule a call</PrimaryButton>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map(({ icon, color, bg, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.08 }}
            viewport={{ once: true, margin: '-40px' }}
          >
            <FeatureCard icon={icon} iconColor={color} iconBg={bg} title={title} desc={desc} iconOutside />
          </motion.div>
        ))}
      </div>

      </div>
    </section>
  );
}
