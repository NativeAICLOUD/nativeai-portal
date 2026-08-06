'use client';

import { motion } from 'framer-motion';
import { type LucideIcon } from 'lucide-react';

const steps: { title: string; desc: string; icon: LucideIcon | string; color: string; bg: string }[] = [
  {
    title: 'Discovery Session',
    desc: 'We use proven decision-making framework to get all stakeholders on the same page.',
    icon: '/icons/intersect-yellow.svg',
    color: '#A16207',
    bg: '#FBF7E8',
  },
  {
    title: 'Prototype & Validate',
    desc: 'We use technical POC or clickable prototypes to develop a proven product hypothesis.',
    icon: '/icons/stack-green.svg',
    color: '#166962',
    bg: '#EEF8F6',
  },
  {
    title: 'Development & Growth',
    desc: 'Ship a validated Minimum Viable Product and iteratively deliver high-impact enhancements.',
    icon: '/icons/icon-development-services.svg',
    color: '#FF4F8B',
    bg: '#FFF0F5',
  },
];

/* "What We Offer" — three-step process, one large white panel on a soft outer shell */
export default function WhatWeOfferSection() {
  return (
    <section className="font-switzer bg-white">
      <div
        className="mx-auto w-full max-w-[1200px] rounded-[24px] p-5 sm:px-8 sm:pb-8 sm:pt-12"
        style={{ background: '#FAF8F6' }}
      >
        <div
          className="rounded-[18px] bg-white p-5 sm:p-8 lg:p-10"
          style={{ boxShadow: '0 20px 60px rgba(15,23,42,.06)' }}
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-60px' }}
          >
            <p
              className="m-0 uppercase text-[#98A2B3]"
              style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.3em', marginBottom: 12 }}
            >
              What We Offer
            </p>
            <h2
              className="m-0 text-[24px] text-[#101828] sm:text-[30px] lg:text-[38px]"
              style={{ fontWeight: 700, lineHeight: 1.1, marginBottom: 32 }}
            >
              Start small and scale
            </h2>
          </motion.div>

          {/* Columns */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {steps.map(({ title, desc, icon, color, bg }, i) => {
              const GlyphIcon = typeof icon === 'string' ? null : icon;
              return (
              <motion.div
                key={title}
                className="group transition-transform duration-[250ms] ease-out hover:-translate-y-[6px]"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.1 }}
                viewport={{ once: true, margin: '-40px' }}
              >
                <span
                  className="grid h-12 w-12 place-items-center rounded-[14px] transition-[filter] duration-[250ms] ease-out group-hover:brightness-[0.97]"
                  style={{ background: bg }}
                >
                  {typeof icon === 'string' ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={icon} alt="" className="h-6 w-6 object-contain" aria-hidden="true" />
                  ) : (
                    GlyphIcon && (
                      <GlyphIcon style={{ color, height: 24, width: 24 }} strokeWidth={1.7} aria-hidden="true" />
                    )
                  )}
                </span>

                <h3
                  className="text-[#101828] transition-colors duration-[250ms] ease-out group-hover:text-black"
                  style={{ fontSize: 19, fontWeight: 600, lineHeight: 1.25, marginTop: 18, marginBottom: 0 }}
                >
                  {title}
                </h3>

                <div style={{ height: 1, background: 'rgba(15,23,42,.08)', marginTop: 18, marginBottom: 18 }} />

                <p className="m-0 text-[#475467]" style={{ fontSize: 14.5, fontWeight: 400, lineHeight: 1.55 }}>
                  {desc}
                </p>
              </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
