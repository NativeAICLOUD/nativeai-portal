'use client';

import { motion } from 'framer-motion';
import { Scale, Landmark, Plane, CreditCard, ShoppingBag, type LucideIcon } from 'lucide-react';
import { Constants } from '@/Constants';
import { CONTAINER, Eyebrow, PrimaryButton, SecondaryButton, SECTION_Y } from './HomeUI';

const industries: { label: string; icon: LucideIcon }[] = [
  { label: 'Legal & Compliance', icon: Scale },
  { label: 'Finance & Banking', icon: Landmark },
  { label: 'Travel & Aviation', icon: Plane },
  { label: 'Payments', icon: CreditCard },
  { label: 'E-commerce', icon: ShoppingBag },
];

/* Same design as the nearshore intro, themed for industries */
export default function IndustriesIntroSection() {
  return (
    <section className="font-switzer">
      <div className="industries-intro-bg-animated">
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">

            {/* Left */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-60px' }}
            >
              <div className="mb-6"><Eyebrow>Industries · Sector expertise</Eyebrow></div>
              <h2 className="m-0 max-w-[560px] text-[36px] font-medium leading-[1.05] tracking-[-0.02em] text-[#111] sm:text-[46px] lg:text-[56px]">
                Solutions built for your industry.
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton href="/industries">Explore our industries</PrimaryButton>
                <SecondaryButton href={Constants.PAGES.SCHEDULE_CALL}>Book a discovery call</SecondaryButton>
              </div>
            </motion.div>

            {/* Right — Industry focus card */}
            <div className="w-full lg:max-w-[380px] lg:flex-1">
              <div className="rounded-2xl border border-[#E6E6E6] bg-white p-6">
                <div className="mb-1 pl-[50px]"><Eyebrow>Industry focus</Eyebrow></div>
                <ul role="list" className="mt-3 divide-y divide-[#EAEAEA]">
                  {industries.map(({ label, icon: Icon }) => (
                    <li key={label} className="flex items-center gap-3.5 py-3 first:pt-0 last:pb-0">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[rgba(37,99,235,0.07)]">
                        <Icon className="h-[18px] w-[18px] text-[#2563EB]" strokeWidth={1.7} aria-hidden="true" />
                      </span>
                      <span className="text-[14.5px] font-medium text-[#111827]">{label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>

        <hr className="m-0 h-px w-full border-0 bg-[#E6E6E6]" />
      </div>
    </section>
  );
}
