'use client';

import { motion } from 'framer-motion';
import { Scale, Landmark, Plane, CreditCard, ShoppingBag, type LucideIcon } from 'lucide-react';
import { Constants } from '@/Constants';
import { CONTAINER, Eyebrow, PrimaryButton, SecondaryButton, SECTION_Y } from './HomeUI';

const industries: { label: string; icon: LucideIcon; color: string; bg: string }[] = [
  { label: 'Legal & Compliance', icon: Scale, color: '#7C3AED', bg: '#F4F0FE' },
  { label: 'Finance & Banking', icon: Landmark, color: '#15803D', bg: '#EBF7EE' },
  { label: 'Travel & Aviation', icon: Plane, color: '#0284C7', bg: '#E8F6FD' },
  { label: 'Payments', icon: CreditCard, color: '#B45309', bg: '#FDF3E7' },
  { label: 'E-commerce', icon: ShoppingBag, color: '#E11D48', bg: '#FDEEF1' },
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

            {/* Right — Industry focus card (frosted glass, blends with the animated gradient) */}
            <div className="w-full lg:max-w-[380px] lg:flex-1">
              <div
                className="rounded-2xl border border-white/60 p-6"
                style={{
                  background: 'rgba(255,255,255,0.65)',
                  backdropFilter: 'blur(24px) saturate(160%)',
                  WebkitBackdropFilter: 'blur(24px) saturate(160%)',
                  boxShadow: '0 8px 32px rgba(15,23,42,0.08)',
                }}
              >
                <div className="mb-1"><Eyebrow>Industry focus</Eyebrow></div>
                <ul role="list" className="mt-3 divide-y divide-black/[0.06]">
                  {industries.map(({ label, icon: Icon, color, bg }) => (
                    <li key={label} className="flex items-center gap-4 py-3.5 first:pt-0 last:pb-0">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[14px]" style={{ background: bg }}>
                        <Icon style={{ color, height: 24, width: 24 }} strokeWidth={1.7} aria-hidden="true" />
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
