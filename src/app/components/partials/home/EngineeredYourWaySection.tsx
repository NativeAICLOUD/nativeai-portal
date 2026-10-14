'use client';

import { useId, useRef, useState, type KeyboardEvent } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Check, CircleArrowUp, Plus, RefreshCw, type LucideIcon, type LucideProps } from 'lucide-react';
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
  services: string[];
  cta: { label: string; href: string };
};

const capabilities: Capability[] = [
  {
    title: 'Innovate',
    icon: LaunchRocketIcon,
    description:
      'Turn emerging technologies into real business value. We design AI agents, intelligent applications, and enterprise AI solutions built around your business.',
    services: [
      'AI Agents & LLM Integration',
      'Enterprise Generative AI',
      'Intelligent Business Automation',
      'AI Product Engineering',
    ],
    cta: { label: 'Explore AI Solutions', href: '/services/ai-agents-rag' },
  },
  {
    title: 'Modernize',
    icon: RefreshCw,
    description:
      "Transform legacy systems into secure, scalable cloud platforms. Modernize applications, improve architecture, and build the foundation for what's next.",
    services: [
      'Azure Cloud Migration',
      'Application Modernization',
      'Cloud-Native Architecture',
      'Database Modernization',
    ],
    cta: { label: 'Explore Cloud Services', href: Constants.PAGES.CLOUD_NATIVE_SD },
  },
  {
    title: 'Accelerate',
    icon: CircleArrowUp,
    description:
      'Move from ideas to production faster. We combine DevOps, automation, and modern engineering practices to help your business deliver with confidence.',
    services: [
      'DevOps & CI/CD',
      'Infrastructure as Code',
      'Kubernetes & Cloud Platforms',
      'Managed Cloud Services',
    ],
    cta: { label: 'Explore Engineering', href: Constants.PAGES.DEVOPS_ON_AZURE },
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

/*
 * "Engineered Your Way." — three capability cards in one row (2 on tablet, 1 on mobile).
 * Each card is an accordion header: hovering (mouse) or clicking (touch/keyboard) reveals its details.
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

  const duration = reduceMotion ? 0 : 0.32;

  return (
    <section className="bg-[#FAFAFA] font-switzer" aria-labelledby={`${baseId}-heading`}>
      <div className="mx-auto w-full max-w-[1440px] px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
        <header className="max-w-[760px]">
          {/* Same eyebrow + heading treatment as "What We Offer" */}
          <p
            className="m-0 uppercase text-[#98A2B3]"
            style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.3em', marginBottom: 12 }}
          >
            Our Capabilities
          </p>
          <h2
            id={`${baseId}-heading`}
            className="m-0 text-[24px] text-[#101828] sm:text-[30px] lg:text-[38px]"
            style={{ fontWeight: 700, lineHeight: 1.1 }}
          >
            Engineered Your Way.
          </h2>
          <p className="m-0 mt-5 max-w-[620px] text-[16px] leading-[1.6] text-[#646B76] sm:text-[17px]">
            From AI strategy and intelligent automation to cloud modernization and software
            engineering, we build technology that moves your business forward.
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 items-start gap-4 md:grid-cols-2 md:gap-5 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {capabilities.map(({ title, icon: Icon, description, services, cta }, i) => {
            const isOpen = openIndex === i;
            const triggerId = `${baseId}-trigger-${i}`;
            const panelId = `${baseId}-panel-${i}`;

            return (
              <div
                key={title}
                // On tablet the third card spans both columns so the grid has no orphan gap.
                className={`flex min-h-[200px] flex-col rounded-[24px] bg-[#E9EBF0] transition-colors duration-300 md:min-h-[280px] md:rounded-[30px] lg:min-h-[320px] lg:rounded-[34px] ${
                  i === capabilities.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''
                } ${isOpen ? '' : 'hover:bg-[#E1E4EB]'}`}
                // Mouse users: hovering a card opens it, leaving closes it. Touch and keyboard use click below.
                onPointerEnter={(e) => e.pointerType === 'mouse' && setOpenIndex(i)}
                onPointerLeave={(e) => e.pointerType === 'mouse' && setOpenIndex(null)}
              >
                <h3 className="m-0 flex flex-1 flex-col">
                  <button
                    ref={(el) => {
                      triggers.current[i] = el;
                    }}
                    id={triggerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    // A mouse click lands on a card hover already opened, so it keeps it open instead of toggling.
                    onClick={(e) => {
                      const viaMouse = (e.nativeEvent as PointerEvent).pointerType === 'mouse';
                      setOpenIndex(viaMouse ? i : isOpen ? null : i);
                    }}
                    onKeyDown={(e) => onTriggerKeyDown(e, i)}
                    className="group flex flex-1 cursor-pointer flex-col justify-between gap-8 rounded-[inherit] p-7 text-left outline-none focus-visible:ring-2 focus-visible:ring-[#4F6B91] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAFA] md:p-10 lg:p-12"
                  >
                    <span className="flex items-start justify-between gap-4">
                      <Icon
                        className="h-10 w-10 shrink-0 text-[#202124] md:h-14 md:w-14 lg:h-16 lg:w-16"
                        strokeWidth={1.3}
                        aria-hidden="true"
                      />
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 md:h-10 md:w-10 ${
                          isOpen
                            ? 'rotate-45 border-[#4F6B91] bg-[#4F6B91] text-white'
                            : 'border-[#202124]/15 text-[#646B76] group-hover:border-[#4F6B91]/50 group-hover:text-[#4F6B91]'
                        }`}
                        aria-hidden="true"
                      >
                        <Plus className="h-4 w-4 md:h-5 md:w-5" strokeWidth={1.8} />
                      </span>
                    </span>
                    <span className="text-[28px] font-semibold leading-none tracking-[-0.02em] text-[#202124] md:text-[34px] lg:text-[40px]">
                      {title}
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      key="panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: reduceMotion ? 0 : 8 }}
                        animate={{ y: 0 }}
                        exit={{ y: reduceMotion ? 0 : 4 }}
                        transition={{ duration, ease: EASE }}
                        className="px-7 pb-8 md:px-10 md:pb-10 lg:px-12 lg:pb-12"
                      >
                        <p className="m-0 text-[15px] leading-[1.6] text-[#646B76]">{description}</p>
                        <ul className="m-0 mt-5 grid list-none grid-cols-1 gap-y-2.5 p-0">
                          {services.map((service) => (
                            <li
                              key={service}
                              className="flex items-center gap-3 text-[15px] font-medium text-[#202124]"
                            >
                              <Check className="h-4 w-4 shrink-0 text-[#4F6B91]" strokeWidth={2.4} aria-hidden="true" />
                              {service}
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={cta.href}
                          className="group/cta mt-7 inline-flex items-center gap-2 text-[15px] font-semibold text-[#4F6B91] transition-colors hover:text-[#202124]"
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

        <div className="mt-20 max-w-[760px] lg:mt-28">
          <p
            className="m-0 text-[24px] text-[#101828] sm:text-[30px] lg:text-[38px]"
            style={{ fontWeight: 700, lineHeight: 1.1 }}
          >
            Tailored Technology. Real Results.
          </p>
          <p className="m-0 mt-4 max-w-[560px] text-[16px] leading-[1.6] text-[#646B76] sm:text-[17px]">
            AI-first thinking. Cloud-native engineering. Solutions designed to perform, evolve, and
            scale.
          </p>
        </div>
      </div>
    </section>
  );
}
