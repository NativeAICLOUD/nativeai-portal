'use client';

import { Fragment } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-transition-progress/next';
import {
  Lightbulb, Landmark, ShieldCheck, CreditCard, Route, Cpu, Plane,
  Scale, Wallet, ShoppingBag, Building2, Network,
  type LucideIcon,
} from 'lucide-react';
import { CONTAINER, Eyebrow, SECTION_Y, H2 } from './HomeUI';

type Industry = {
  title: string;
  desc: string;
  href: string;
  icon: LucideIcon;
};

type IndustryGroup = {
  label: string;
  color: string;
  bg: string;
  items: Industry[];
};

/* Three themed rows, each with its own tint and label,
   so the 12 industries read as groups instead of a wall of equal boxes. */
const groups: IndustryGroup[] = [
  {
    label: 'Financial services',
    color: '#0369A1',
    bg: 'rgba(3,105,161,0.08)',
    items: [
      { title: 'Finance',             desc: 'Secure, compliant platforms for finance teams and financial services.', href: '/industries',         icon: Landmark },
      { title: 'Fintech',             desc: 'Modern rails for lending, payments and wealth products.',           href: '/payment-automation', icon: Wallet },
      { title: 'Payments',            desc: 'Billing, reconciliation and payment automation at scale.',          href: '/payment-automation', icon: CreditCard },
      { title: 'Insurance',           desc: 'Claims automation, risk analytics and policy workflows.',           href: '/industries',         icon: ShieldCheck },
    ],
  },
  {
    label: 'Physical operations',
    color: '#0F766E',
    bg: 'rgba(15,118,110,0.08)',
    items: [
      { title: 'Energy and Resources',       desc: 'Data platforms and automation for energy, utilities and resources.', href: '/industries', icon: Lightbulb },
      { title: 'Construction',               desc: 'Project, site and resource management systems.',                     href: '/industries', icon: Building2 },
      { title: 'Supply Chain and Logistics', desc: 'Visibility, tracking and optimisation across the whole chain.',     href: '/industries', icon: Route },
      { title: 'E-commerce & Retail',        desc: 'Scalable storefronts, logistics and personalisation.',               href: '/industries', icon: ShoppingBag },
    ],
  },
  {
    label: 'Digital & services',
    color: '#BE123C',
    bg: 'rgba(190,18,60,0.08)',
    items: [
      { title: 'Technology',         desc: 'Product engineering for software and SaaS companies.',  href: '/industries',      icon: Cpu },
      { title: 'B2B Solutions',      desc: 'Portals, integrations and workflow platforms for B2B.', href: '/industries',      icon: Network },
      { title: 'Legal AI',           desc: 'AI document and case workflows for legal teams.',       href: '/legal-saas',      icon: Scale },
      { title: 'Travel',             desc: 'GDS-connected booking and travel platforms.',           href: '/airline-booking', icon: Plane },
    ],
  },
];

/* Same choreography as the About page's Zurich / Skopje section:
   heading words rise out of a soft blur one after another, then each row's
   label and cards rise in with the same expo-out ease. Off under reduced motion. */
const EASE = [0.16, 1, 0.3, 1] as const;
const VIEWPORT = { once: true, margin: '-15% 0px' } as const;
const HEADING = ['Move', 'your', 'industry', 'forward'];
const HIGHLIGHT = 'industry';

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

export default function IndustriesBusinessDomain() {
  const reduce = useReducedMotion();

  return (
    <section className="font-switzer bg-white">
      <div className={`${CONTAINER} ${SECTION_Y}`}>

        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4"><Eyebrow>Industries we serve</Eyebrow></div>
            <h2 className={`m-0 max-w-[560px] ${H2}`} aria-label={HEADING.join(' ')}>
              {HEADING.map((word, i) => (
                <Fragment key={word}>
                {i > 0 && ' '}
                <motion.span
                  className="inline-block"
                  aria-hidden="true"
                  initial={reduce ? false : { opacity: 0, y: '0.45em', filter: 'blur(8px)' }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.9, ease: EASE, delay: i * 0.08 }}
                >
                  {word === HIGHLIGHT ? (
                    <span style={{ background: 'rgba(3,105,161,0.14)', borderRadius: 0, padding: '2px 6px' }}>{word}</span>
                  ) : word}
                </motion.span>
                </Fragment>
              ))}
            </h2>
          </div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.9, ease: EASE, delay: HEADING.length * 0.08 }}
          >
            <Link
              href="/industries"
              className="group inline-flex items-center gap-1.5 text-[14px] font-medium text-[#111827] hover:text-[#0369A1]"
            >
              All industries
              <ArrowIcon />
            </Link>
          </motion.div>
        </div>

        {/* Grouped rows */}
        <div className="flex flex-col">
          {groups.map(({ label, color, bg, items }) => (
            <div
              key={label}
              className="grid grid-cols-1 gap-6 border-t border-[#E6E6E6] py-10 lg:grid-cols-12 lg:gap-10 lg:py-12"
            >
              {/* Group label */}
              <motion.div
                className="lg:col-span-3"
                initial={reduce ? false : { opacity: 0, y: 28, filter: 'blur(8px)' }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={VIEWPORT}
                transition={{ duration: 1, ease: EASE }}
              >
                <h3 className="m-0 text-[22px] font-medium leading-[1.2] tracking-[-0.01em] text-[#111827]">{label}</h3>
              </motion.div>

              {/* Industries */}
              <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 lg:col-span-9 xl:grid-cols-4">
                {items.map(({ title, desc, href, icon: Icon }, i) => (
                  <motion.li
                    key={title}
                    initial={reduce ? false : { opacity: 0, y: 28, filter: 'blur(8px)' }}
                    whileInView={reduce ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={VIEWPORT}
                    transition={{ duration: 0.9, ease: EASE, delay: 0.1 + i * 0.08 }}
                  >
                    <Link
                      href={href}
                      className="group flex h-full flex-col rounded-2xl border border-[#E6E6E6] bg-white p-5 transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-transparent hover:bg-[var(--tint)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111827]/20"
                      style={{ '--tint': bg } as React.CSSProperties}
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: bg }}>
                          <Icon className="h-5 w-5" style={{ color }} strokeWidth={1.8} aria-hidden="true" />
                        </span>
                        <span className="text-[#9CA3AF] transition-colors duration-200 group-hover:text-[#111827]">
                          <ArrowIcon />
                        </span>
                      </div>
                      <p className="m-0 text-[16px] font-medium leading-[1.3] text-[#111827]">{title}</p>
                      <p className="mt-1.5 text-[14px] leading-[1.55] text-[#6B7280]">{desc}</p>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
