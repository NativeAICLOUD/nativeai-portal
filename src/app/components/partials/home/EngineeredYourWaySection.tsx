'use client';

import { useId, useRef, useState, type KeyboardEvent } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Check, CircleArrowUp, Plus, RefreshCw, Rocket, type LucideIcon } from 'lucide-react';
import { Link } from 'react-transition-progress/next';
import { Constants } from '@/Constants';

type Capability = {
  title: string;
  icon: LucideIcon;
  description: string;
  services: string[];
  cta: { label: string; href: string };
};

const capabilities: Capability[] = [
  {
    title: 'Innovate',
    icon: Rocket,
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

/* "Engineered Your Way." — three stacked capability cards working as a single-open accordion */
export default function EngineeredYourWaySection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();
  const baseId = useId();
  const triggers = useRef<(HTMLButtonElement | null)[]>([]);

  // WAI-ARIA accordion keys: arrows move between headers, Home/End jump to the ends.
  const onTriggerKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const last = capabilities.length - 1;
    const target =
      e.key === 'ArrowDown' ? (i === last ? 0 : i + 1)
      : e.key === 'ArrowUp' ? (i === 0 ? last : i - 1)
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
      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-6 lg:py-28">
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

        <div className="mt-12 flex flex-col gap-3 sm:gap-4 lg:mt-16">
          {capabilities.map(({ title, icon: Icon, description, services, cta }, i) => {
            const isOpen = openIndex === i;
            const triggerId = `${baseId}-trigger-${i}`;
            const panelId = `${baseId}-panel-${i}`;

            return (
              <div
                key={title}
                className={`rounded-[24px] bg-[#E8EBF0] transition-colors duration-300 sm:rounded-[32px] lg:rounded-[40px] ${
                  isOpen ? '' : 'hover:bg-[#E1E5EC]'
                }`}
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
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    onKeyDown={(e) => onTriggerKeyDown(e, i)}
                    className="group flex w-full cursor-pointer items-center gap-5 rounded-[inherit] px-6 py-6 text-left outline-none focus-visible:ring-2 focus-visible:ring-[#4F6B91] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAFA] sm:gap-7 sm:px-10 sm:py-9 lg:gap-9 lg:px-14 lg:py-11"
                  >
                    <Icon
                      className="h-9 w-9 shrink-0 text-[#202124] sm:h-12 sm:w-12 lg:h-14 lg:w-14"
                      strokeWidth={1.4}
                      aria-hidden="true"
                    />
                    <span className="flex-1 text-[26px] font-semibold leading-none tracking-[-0.02em] text-[#202124] sm:text-[34px] lg:text-[42px]">
                      {title}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:h-11 sm:w-11 ${
                        isOpen
                          ? 'rotate-45 border-[#4F6B91] bg-[#4F6B91] text-white'
                          : 'border-[#202124]/15 text-[#646B76] group-hover:border-[#4F6B91]/50 group-hover:text-[#4F6B91]'
                      }`}
                      aria-hidden="true"
                    >
                      <Plus className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.8} />
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
                        // Indent aligns content with the title, past the icon column.
                        className="px-6 pb-7 sm:pl-[116px] sm:pr-10 sm:pb-10 lg:pl-[148px] lg:pr-14 lg:pb-12"
                      >
                        <p className="m-0 max-w-[640px] text-[15px] leading-[1.6] text-[#646B76] sm:text-[16px]">
                          {description}
                        </p>
                        <ul className="m-0 mt-6 grid list-none grid-cols-1 gap-x-10 gap-y-3 p-0 md:grid-cols-2 md:max-w-[640px]">
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
                          className="group/cta mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-[#4F6B91] transition-colors hover:text-[#202124]"
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
