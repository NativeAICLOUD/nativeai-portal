'use client';

import { useId, useRef, useState, type KeyboardEvent } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, CircleArrowUp, Plus, RefreshCw, type LucideIcon, type LucideProps } from 'lucide-react';
import { Link } from 'react-transition-progress/next';
import { Constants } from '@/Constants';

/* The "Launching New Products" rocket (public/icons/launching-new-products.svg) redrawn as a
   stroked line icon, so it takes the same strokeWidth and colour as the Lucide icons beside it. */
function LaunchRocketIcon({ strokeWidth = 1.5, ...props }: LucideProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 16.5 7.5 12l5.38-5.38c2.72-2.72 5.5-2.93 6.65-2.86a.75.75 0 0 1 .71.71c.07 1.16-.14 3.93-2.86 6.65Z" />
      <path d="M12.75 6.75H6.97a.75.75 0 0 0-.53.22L3.22 10.19a.75.75 0 0 0 .42 1.27L7.5 12" />
      <path d="M17.25 11.25v5.78a.75.75 0 0 1-.22.53l-3.22 3.22a.75.75 0 0 1-1.27-.42L12 16.5" />
      <path d="M6.75 15s-3 .75-3 5.25c4.5 0 5.25-3 5.25-3" />
    </svg>
  );
}

type Capability = {
  title: string;
  icon: LucideIcon | typeof LaunchRocketIcon;
  description: string;
  cta: { label: string; href: string };
};

const capabilities: Capability[] = [
  {
    title: 'Innovate',
    icon: LaunchRocketIcon,
    description: 'Turn ideas into useful AI agents and digital products.',
    cta: { label: 'Explore AI Solutions', href: '/services/ai-agents-rag' },
  },
  {
    title: 'Modernize',
    icon: RefreshCw,
    description: 'Upgrade legacy applications and move to reliable cloud platforms.',
    cta: { label: 'Explore Cloud Services', href: Constants.PAGES.CLOUD_NATIVE_SD },
  },
  {
    title: 'Accelerate',
    icon: CircleArrowUp,
    description: 'Improve delivery with DevOps, automation, and scalable architecture.',
    cta: { label: 'Explore Engineering', href: Constants.PAGES.DEVOPS_ON_AZURE },
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

// Hover-to-open only when the cards sit in one row with a real mouse. In the stacked layout an
// opening card pushes the next card under the cursor, which would open/close in a loop.
const hoverOpens = () => window.matchMedia('(min-width: 1024px) and (hover: hover)').matches;

/*
 * Home services intro — three compact capability cards (stacked below lg, one row from lg).
 * Each card header is an accordion button with the icon and title on one row: hovering (mouse)
 * or clicking (touch/keyboard) reveals a short description and the service link.
 * items-start keeps closed cards at their own height when a neighbour in the row opens.
 */
export default function EngineeredYourWaySection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();
  const baseId = useId();
  const triggers = useRef<(HTMLButtonElement | null)[]>([]);

  // WAI-ARIA accordion keys: arrows move between cards, Home/End jump to the ends.
  const onTriggerKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const last = capabilities.length - 1;
    const next = e.key === 'ArrowDown' || e.key === 'ArrowRight';
    const prev = e.key === 'ArrowUp' || e.key === 'ArrowLeft';
    const target =
      next ? (i === last ? 0 : i + 1)
      : prev ? (i === 0 ? last : i - 1)
      : e.key === 'Home' ? 0
      : e.key === 'End' ? last
      : null;
    if (target === null) return;
    e.preventDefault();
    triggers.current[target]?.focus();
  };

  const duration = reduceMotion ? 0 : 0.28;

  return (
    <section className="bg-white font-switzer" aria-labelledby={`${baseId}-heading`}>
      <div className="mx-auto w-full max-w-[1240px] px-5 py-16 sm:px-6 lg:py-24">
        <header>
          <h2
            id={`${baseId}-heading`}
            className="m-0 max-w-[720px] text-[28px] text-[#202124] sm:text-[34px] lg:text-[40px]"
            style={{ fontWeight: 700, lineHeight: 1.12, letterSpacing: '-0.015em' }}
          >
         Engineered Your Way.
          </h2>
          <p className="m-0 mt-4 max-w-[560px] text-[16px] leading-[1.6] text-[#202124] sm:mt-5 sm:text-[17px]">
            From AI agents and modern applications to cloud platforms, we help you innovate,
            modernize your systems, and accelerate delivery.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 items-start gap-4 sm:gap-5 lg:mt-12 lg:grid-cols-3">
          {capabilities.map(({ title, icon: Icon, description, cta }, i) => {
            const isOpen = openIndex === i;
            const triggerId = `${baseId}-trigger-${i}`;
            const panelId = `${baseId}-panel-${i}`;

            return (
              <div
                key={title}
                className={`rounded-[28px] bg-[#EEF1F2] transition-colors duration-300 ${
                  isOpen ? '' : 'hover:bg-[#E7EBEC]'
                }`}
                // Desktop row: hovering a card opens it, leaving closes it. Elsewhere, click/tap toggles.
                onPointerEnter={(e) => e.pointerType === 'mouse' && hoverOpens() && setOpenIndex(i)}
                onPointerLeave={(e) => e.pointerType === 'mouse' && hoverOpens() && setOpenIndex(null)}
              >
                <h3 className="m-0">
                  <button
                    ref={(el) => {
                      triggers.current[i] = el;
                    }}
                    id={triggerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    // A mouse click on a card that hover already opened keeps it open instead of toggling it shut.
                    onClick={(e) => {
                      const hoverOpened = (e.nativeEvent as PointerEvent).pointerType === 'mouse' && hoverOpens();
                      setOpenIndex(hoverOpened ? i : isOpen ? null : i);
                    }}
                    onKeyDown={(e) => onTriggerKeyDown(e, i)}
                    className="flex w-full cursor-pointer items-center gap-4 rounded-[inherit] px-5 py-8 text-left outline-none focus-visible:ring-2 focus-visible:ring-[#202124] focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:gap-5 sm:px-6"
                  >
                    <Icon
                      className="h-9 w-9 shrink-0 text-[#202124] min-[380px]:h-10 min-[380px]:w-10 sm:h-11 sm:w-11"
                      strokeWidth={1.4}
                      aria-hidden="true"
                    />
                    <span className="min-w-0 flex-1 text-[26px] font-semibold leading-none tracking-[-0.02em] text-[#202124] min-[380px]:text-[28px] sm:text-[32px] lg:text-[28px] xl:text-[32px]">
                      {title}
                    </span>
                    <Plus
                      className={`h-5 w-5 shrink-0 text-[#202124]/55 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      key="panel"
                      // marginTop tucks the panel into the header's bottom padding; animating it avoids a jump.
                      initial={{ height: 0, marginTop: 0, opacity: 0 }}
                      animate={{ height: 'auto', marginTop: -12, opacity: 1 }}
                      exit={{ height: 0, marginTop: 0, opacity: 0 }}
                      transition={{ duration, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: reduceMotion ? 0 : 6 }}
                        animate={{ y: 0 }}
                        exit={{ y: reduceMotion ? 0 : 3 }}
                        transition={{ duration, ease: EASE }}
                        className="px-5 pb-7 sm:px-6"
                      >
                        <p className="m-0 text-[15px] leading-[1.6] text-[#202124]/75 sm:text-[16px]">
                          {description}
                        </p>
                        <Link
                          href={cta.href}
                          className="group/cta mt-4 inline-flex items-center gap-2 rounded-sm text-[15px] font-semibold text-[#202124] underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-[#202124] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EEF1F2]"
                        >
                          {cta.label}
                          <ArrowRight
                            className="h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-1"
                            strokeWidth={2}
                            aria-hidden="true"
                          />
                        </Link>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-[760px] lg:mt-24">
          <p
            className="m-0 text-[24px] text-[#101828] sm:text-[30px] lg:text-[38px]"
            style={{ fontWeight: 700, lineHeight: 1.1 }}
          >
            Technology, made simple.
          </p>
          <p className="m-0 mt-4 max-w-[560px] text-[16px] leading-[1.6] text-[#646B76] sm:text-[17px]">
            We build intelligent software that solves real problems. Thoughtfully designed. Built to
            make a difference.
          </p>
        </div>
      </div>
    </section>
  );
}
