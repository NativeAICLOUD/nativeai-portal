'use client';

import { motion } from 'framer-motion';
import { Bot, type LucideIcon } from 'lucide-react';

/* Reference pairing: icon colour and tile tint are intentionally different hues */
const useCases: { title: string; desc: string; icon: LucideIcon | string; color: string; bg: string }[] = [
  { title: 'Digital Solutions',                         icon: Bot,                                  color: '#E11D48', bg: 'rgba(225,29,72,0.07)',  desc: 'Custom software to improve customer experience and operational efficiency.' },
  { title: 'HR Management Systems',                     icon: '/icons/hr-management-systems.svg',   color: '#FF6A3D', bg: 'rgba(79,70,229,0.07)',  desc: 'People platform for effective employee management and compliance.' },
  { title: 'Launching New Products (from zero-to-one)', icon: '/icons/launching-new-products.svg',  color: '#FF4F8B', bg: 'rgba(15,139,131,0.08)', desc: 'Design, prototype, and deliver beloved products for your users.' },
  { title: 'Legacy Software Modernization',             icon: '/icons/legacy-software-modernization.svg', color: '#7C3AED', bg: 'rgba(124,58,237,0.08)', desc: 'Modernize and innovate on critical business applications.' },
];

/* “What we do” — centred 2×2 grid on a soft panel */
export default function ProductDevelopmentSection() {
  return (
    <section className="font-switzer bg-white">
      <div className="mx-auto w-full max-w-[1240px] px-5 pb-20 pt-6 sm:px-6 lg:pb-24 lg:pt-8">
        {/* header — aligned to the cards container's left edge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <p className="m-0 mb-4 text-[12px] font-medium uppercase tracking-[0.18em] text-[#64748B]">
            What we do
          </p>
          <h2 className="m-0 mb-9 text-[28px] font-medium leading-[1.15] tracking-[-0.01em] text-[#111827] md:whitespace-nowrap md:text-[34px] lg:text-[38px]">
            End-to-end product development
          </h2>
        </motion.div>

        {/* grouped warm-gray wrapper hugging the cards */}
        <div className="w-full rounded-2xl bg-[#FAFAF8] p-3 sm:p-5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {useCases.map(({ title, desc, icon, color, bg }, i) => {
              const GlyphIcon = typeof icon === 'string' ? null : icon;
              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  className="group flex min-h-[146px] w-full flex-col rounded-lg border border-[#ECECEC] bg-white p-[18px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(37,99,235,0.2)] hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
                >
                  {/* top: icon + title */}
                  <div className="flex min-h-[56px] items-center gap-3.5">
                    <span
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[12px] transition-transform duration-200 group-hover:scale-105"
                      style={{ background: bg }}
                    >
                      {typeof icon === 'string' ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={icon} alt="" className="h-8 w-auto object-contain" aria-hidden="true" />
                      ) : (
                        GlyphIcon && (
                          <GlyphIcon className="h-8 w-8" style={{ color }} strokeWidth={1.7} aria-hidden="true" />
                        )
                      )}
                    </span>
                    <h3 className="m-0 text-[15.5px] font-semibold leading-[1.25] text-[#111827]">{title}</h3>
                  </div>

                  {/* divider */}
                  <div className="my-3 h-px w-full bg-[#EAEAEA]" />

                  {/* description */}
                  <p className="m-0 text-[14px] font-normal leading-[1.5] text-[#6B7280]">
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
