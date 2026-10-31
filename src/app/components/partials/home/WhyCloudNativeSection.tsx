'use client';

import { motion } from 'framer-motion';
import { CONTAINER, Eyebrow, SECTION_PB, H2, BODY, FeatureCard } from './HomeUI';

const benefits = [
  {
    icon: '/img/faster-development.svg',
    color: '#2563EB',
    bg: 'rgba(37,99,235,0.08)',
    title: 'Ship faster',
    desc: 'Go from idea to production in days, not months. Automated pipelines and infrastructure-as-code replace slow, manual releases.',
  },
  {
    icon: '/img/scalability-peach.svg',
    color: '#7C3AED',
    bg: 'rgba(124,58,237,0.08)',
    title: 'Scale on demand',
    desc: 'Capacity grows and shrinks with real usage — peak traffic, new users or new markets never mean a re-architecture.',
  },
  {
    icon: '/img/continue-integratie-en-delivery.svg',
    color: '#0F8B83',
    bg: 'rgba(15,139,131,0.08)',
    title: 'Release continuously',
    desc: 'Every change is tested, versioned and deployed the same way. Smaller releases, fewer surprises.',
  },
  {
    icon: '/img/cost-effectiveness.svg',
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.08)',
    title: 'Pay for what you use',
    desc: 'Managed services and right-sized workloads cut idle infrastructure and the hours spent keeping servers alive.',
  },
  {
    icon: '/img/improved-security.svg',
    color: '#E11D48',
    bg: 'rgba(225,29,72,0.08)',
    title: 'Secure by design',
    desc: 'Identity, encryption, policy and monitoring are built in from day one — not bolted on before go-live.',
  },
];

/* Five cards: 2 + 3 on desktop (6-col grid) and 2 + 2 + 1-wide on tablet,
   so no row ever ends with a lone orphan card. */
const spanFor = (i: number, total: number) =>
  [
    i < 2 ? 'lg:col-span-3' : 'lg:col-span-2',
    i === total - 1 && total % 2 === 1 ? 'sm:col-span-2' : '',
  ].join(' ');

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
            Designed for today. Ready for tomorrow.
          </h2>
          <p className={`mt-4 max-w-xl ${BODY}`}>
            Great software is simple, powerful, and made to evolve. Cloud-native from day one.
            Fast, scalable, and ready for what&apos;s next.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {benefits.map(({ icon, color, bg, title, desc }, i) => (
          <motion.div
            key={title}
            className={spanFor(i, benefits.length)}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.08 }}
            viewport={{ once: true, margin: '-40px' }}
          >
            <FeatureCard icon={icon} iconColor={color} iconBg={bg} title={title} desc={desc} iconOutside hoverTint revealOnHover />
          </motion.div>
        ))}
      </div>

      </div>
    </section>
  );
}
