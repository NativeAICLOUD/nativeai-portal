'use client';

import { motion } from 'framer-motion';
import {
  Zap, Landmark, ShieldCheck, CreditCard, Truck, Cpu, Plane,
  Scale, Wallet, ShoppingBag, HardHat, Boxes,
  type LucideIcon,
} from 'lucide-react';
import { CONTAINER, Eyebrow, SECTION_Y, H2, FeatureCard } from './HomeUI';

const ICON_TINT = 'rgba(37,99,235,0.08)';

type Industry = {
  title: string;
  desc: string;
  href: string;
  icon: LucideIcon;
};

const industries: Industry[] = [
  { title: 'Energy and Resources',       desc: 'Data platforms and automation for energy, utilities and resource operations.', href: '/industries',         icon: Zap },
  { title: 'Finance and Banking',        desc: 'Secure, compliant platforms for banks and financial institutions.',            href: '/industries',         icon: Landmark },
  { title: 'Insurance',                  desc: 'Claims automation, risk analytics and policy workflows.',                      href: '/industries',         icon: ShieldCheck },
  { title: 'Payments',                   desc: 'Billing, reconciliation and payment automation at scale.',                     href: '/payment-automation', icon: CreditCard },
  { title: 'Supply Chain and Logistics', desc: 'Visibility, tracking and optimisation across the whole chain.',               href: '/industries',         icon: Truck },
  { title: 'Technology',                 desc: 'Product engineering for software and SaaS companies.',                         href: '/industries',         icon: Cpu },
  { title: 'Travel',                     desc: 'GDS-connected booking and travel platforms.',                                  href: '/airline-booking',    icon: Plane },
  { title: 'Legal & Compliance',         desc: 'AI document and case workflows for legal teams.',                              href: '/ai-legal-workspace', icon: Scale },
  { title: 'Fintech',                    desc: 'Modern rails for lending, payments and wealth products.',                      href: '/payment-automation', icon: Wallet },
  { title: 'E-commerce & Retail',        desc: 'Scalable storefronts, logistics and personalisation.',                         href: '/industries',         icon: ShoppingBag },
  { title: 'Construction',               desc: 'Project, site and resource management systems.',                               href: '/industries',         icon: HardHat },
  { title: 'B2B Solutions',              desc: 'Portals, integrations and workflow platforms for B2B.',                        href: '/industries',         icon: Boxes },
];

export default function IndustriesBusinessDomain() {
  return (
    <section className="font-switzer bg-white">
      <div className={`${CONTAINER} ${SECTION_Y}`}>

        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <div className="mb-4"><Eyebrow>Industries we serve</Eyebrow></div>
          <h2 className={`m-0 max-w-[560px] ${H2}`}>
            Move your{' '}
            <span style={{ background: 'rgba(37,99,235,0.14)', borderRadius: 0, padding: '2px 6px' }}>
              industry
            </span>{' '}
            forward
          </h2>
        </motion.div>

        {/* Industry cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {industries.map(({ title, desc, href, icon }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: (i % 4) * 0.1 }}
              viewport={{ once: true, margin: '-40px' }}
            >
              <FeatureCard href={href} icon={icon} iconColor="#2563EB" iconBg={ICON_TINT} title={title} desc={desc} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
