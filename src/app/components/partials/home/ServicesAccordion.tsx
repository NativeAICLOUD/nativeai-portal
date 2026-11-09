'use client';

import { useId, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-transition-progress/next';

export type AccordionService = {
  title: string;
  heading: string;
  description: string;
  capabilities: string[];
  cta: { label: string; href: string };
};

/* Number column width — the expanded content is indented by the same amount
   so it lines up under the service title, not under the index. */
const INDEX_COL = 'w-10 sm:w-[52px] lg:w-16';

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`h-5 w-5 shrink-0 justify-self-end text-[#111827] transition-transform duration-300 ease-out motion-reduce:transition-none sm:h-6 sm:w-6 ${
        open ? 'rotate-180' : 'group-hover:translate-y-1'
      }`}
    >
      <path d="M12 4v16M5 13l7 7 7-7" />
    </svg>
  );
}

export default function ServicesAccordion({ services }: { services: AccordionService[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();
  const baseId = useId();

  return (
    <ul className="m-0 list-none border-b border-[#E6E6E6] p-0">
      {services.map((service, i) => {
        const open = openIndex === i;
        const triggerId = `${baseId}-trigger-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        const index = String(i + 1).padStart(2, '0');

        return (
          <li key={service.title} className="border-t border-[#E6E6E6]">
            <h3 className="m-0">
              <button
                type="button"
                id={triggerId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : i)}
                className="group grid min-h-[64px] w-full cursor-pointer grid-cols-[40px_minmax(0,1fr)_28px] items-center py-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]/40 focus-visible:ring-offset-4 sm:min-h-[76px] sm:grid-cols-[52px_minmax(0,1fr)_36px] lg:min-h-[88px] lg:grid-cols-[64px_minmax(0,1fr)_40px]"
              >
                <span className={`text-[12px] font-normal tabular-nums tracking-[0.04em] text-[#6B7280] sm:text-[13px]`}>
                  {index}
                </span>
                <span
                  className={`text-[22px] font-normal uppercase leading-[1.1] tracking-[-0.015em] transition-colors duration-200 sm:text-[26px] lg:text-[30px] ${
                    open ? 'text-[#2563EB]' : 'text-[#111827] group-hover:text-[#2563EB]'
                  }`}
                >
                  {service.title}
                </span>
                <ChevronDown open={open} />
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  key="panel"
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  initial={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  animate={reduceMotion ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                  exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="flex pb-8 sm:pb-10">
                    <span className={`${INDEX_COL} hidden shrink-0 sm:block`} aria-hidden="true" />
                    <div className="grid flex-1 grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-20 sm:pr-14">
                      <div>
                        <p className="m-0 text-[18px] font-normal leading-[1.3] tracking-[-0.01em] text-[#111827] sm:text-[19px]">
                          {service.heading}
                        </p>
                        <p className="mt-4 max-w-[460px] text-[15px] font-normal leading-[1.65] text-[#6B7280]">
                          {service.description}
                        </p>
                      </div>
                      <div>
                        <ul className="m-0 list-none space-y-2.5 p-0">
                          {service.capabilities.map((c) => (
                            <li key={c} className="text-[15px] font-normal leading-[1.5] text-[#111827]">
                              {c}
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={service.cta.href}
                          className="group/cta mt-7 inline-flex min-h-[44px] items-center gap-2 text-[14px] font-medium text-[#111827] transition-colors duration-200 hover:text-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]/40 focus-visible:ring-offset-2"
                        >
                          {service.cta.label}
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-1 motion-reduce:transition-none">
                            <path d="M5 12h14M13 6l6 6-6 6" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
