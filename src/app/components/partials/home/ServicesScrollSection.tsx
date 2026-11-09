'use client';

import { Fragment } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Constants } from '@/Constants';
import { CONTAINER, Eyebrow, SECTION_PB, H2, BODY } from './HomeUI';
import ServicesAccordion, { type AccordionService } from './ServicesAccordion';

const services: AccordionService[] = [
  {
    title: 'Applications',
    heading: 'Software built around your business.',
    description:
      'From custom platforms to enterprise applications, we build reliable software designed to scale with your business.',
    capabilities: ['Custom Software Development', 'SaaS Platform Engineering', 'Web & Mobile Applications', 'API Development & Integration'],
    cta: { label: 'Explore Applications', href: '/services/custom-development' },
  },
  {
    title: 'Data',
    heading: 'Turn your data into intelligence.',
    description:
      'We connect, structure, and transform business data into reliable foundations for analytics, automation, and AI.',
    capabilities: ['Data Engineering & Integration', 'Intelligent Document Processing', 'Enterprise Search & RAG', 'Analytics & Data Platforms'],
    cta: { label: 'Explore Data Solutions', href: Constants.PAGES.DATA_LIFECYCLE_MANAGEMENT },
  },
  {
    title: 'Process',
    heading: 'Make complex work simple.',
    description:
      'We automate repetitive operations, connect existing systems, and streamline workflows to help teams accomplish more with less manual effort.',
    capabilities: ['Business Process Automation', 'Intelligent Workflow Orchestration', 'Document & Invoice Automation', 'Enterprise System Integration'],
    cta: { label: 'Explore Automation', href: Constants.PAGES.PAYMENT_AUTOMATION },
  },
  {
    title: 'Agents',
    heading: 'AI that doesn’t just answer. It acts.',
    description:
      'We design intelligent AI agents that understand business context, work with enterprise systems, and execute real tasks under human supervision.',
    capabilities: ['Agentic AI Development', 'Multi-Agent Orchestration', 'Microsoft Foundry & Agent Framework', 'Enterprise RAG & Tool Integration', 'Human-in-the-Loop Workflows'],
    cta: { label: 'Explore AI Agents', href: '/services/ai-agents-rag' },
  },
  {
    title: 'Migration',
    heading: 'Modernize without slowing down.',
    description:
      'Move from legacy infrastructure to secure, scalable cloud platforms with a clear modernization strategy and minimal disruption.',
    capabilities: ['Azure & AWS Cloud Migration', 'Legacy Application Modernization', 'Cloud Architecture', 'DevOps & Infrastructure Automation', 'Kubernetes & Containerization'],
    cta: { label: 'Explore Cloud Migration', href: Constants.PAGES.MIGRATE_TO_AZURE },
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;
const VIEWPORT = { once: true, margin: '-15% 0px' } as const;
const HEADING = ['What', 'we', 'deliver'];
const HIGHLIGHT = 'deliver';

export default function ServicesScrollSection() {
  const reduce = useReducedMotion();

  return (
    <section aria-labelledby="services-heading" className="font-switzer bg-white">
      <div className={`${CONTAINER} ${SECTION_PB}`}>

        {/* Header — same treatment as "Move your industry forward" (IndustriesBusinessDomain) */}
        <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4"><Eyebrow>Services</Eyebrow></div>
            <h2 id="services-heading" className={`m-0 max-w-[560px] ${H2}`} aria-label={HEADING.join(' ')}>
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
                      <span style={{ background: 'rgba(37,99,235,0.12)', borderRadius: 0, padding: '2px 6px' }}>{word}</span>
                    ) : word}
                  </motion.span>
                </Fragment>
              ))}
            </h2>
          </div>
          <motion.p
            className={`m-0 max-w-[440px] ${BODY} lg:text-right`}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.9, ease: EASE, delay: HEADING.length * 0.08 }}
          >
            From intelligent applications to autonomous agents, we build technology that makes your business work better.
          </motion.p>
        </div>

        <ServicesAccordion services={services} />

      </div>
    </section>
  );
}
