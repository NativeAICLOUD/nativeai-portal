'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Target, Code2, Zap, Boxes, ShieldCheck, LineChart, type LucideIcon } from 'lucide-react';
import { Constants } from '@/Constants';
import { CONTAINER, Eyebrow, PrimaryButton, SecondaryButton } from '@/app/components/partials/services/ServiceUI';

/* ── content ── */
const stats = [
  { value: '3', label: 'Core modules' },
  { value: '4wk', label: 'Avg. PoC delivery' },
  { value: '100%', label: 'Data stays yours' },
  { value: '0', label: 'Vendor lock-in' },
];

const benefits: { title: string; body: string; icon: LucideIcon }[] = [
  { title: 'Expert AI use case identification', body: 'We help you cut through the noise — identifying AI use cases that are realistic, impactful, and aligned with your actual business goals.', icon: Target },
  { title: 'End-to-end technical support', body: 'From first discovery workshop to production deployment — hands-on engineering guidance at every step, with no deep in-house AI expertise required.', icon: Code2 },
  { title: 'Production-grade PoC delivery', body: 'Every proof of concept is built with production in mind — scalable Azure services, proper architecture, no throwaway prototypes.', icon: Zap },
  { title: 'AI Landing Zone infrastructure', body: 'We design and deploy a proven Azure AI Landing Zone — secure, cost-efficient, and compliant from day one.', icon: Boxes },
  { title: 'Data governance & compliance', body: 'Privacy, compliance, and security are baked into every solution from the start — not bolted on afterwards.', icon: ShieldCheck },
  { title: 'Long-term scalability guidance', body: 'Post-deployment, we provide an advice report covering how to run, optimise, and scale your AI solutions over time.', icon: LineChart },
];

const modules = [
  {
    tag: 'Module 01',
    title: 'Use Case Discovery & PoC',
    body: 'We run focused discovery workshops to identify your most impactful AI use cases and validate them rapidly. Every PoC is designed for scalability — built on Azure OpenAI, Cognitive Services, and Document Intelligence with production architecture from day one.',
    items: [
      'AI use case workshop & prioritisation',
      'Azure OpenAI & Cognitive Services integration',
      'PoC delivery with production-ready architecture',
      'Business value measurement & KPI definition',
    ],
  },
  {
    tag: 'Module 02',
    title: 'AI Infrastructure & Landing Zone',
    body: 'We design and implement a proven Azure AI Landing Zone that gives your teams a secure, governed, and cost-optimised foundation — so AI solutions can be deployed and scaled without starting from scratch each time.',
    items: [
      'Azure AI Landing Zone design & deployment',
      'Private networking & identity configuration',
      'Cost guardrails & budget alerting',
      'Monitoring, logging & observability setup',
    ],
  },
  {
    tag: 'Module 03',
    title: 'Governance, Privacy & Compliance',
    body: 'Every AI solution we deliver respects your data residency requirements and regulatory obligations. We implement role-based access, audit logging, responsible AI policies, and data classification — giving you complete confidence in your AI operations.',
    items: [
      'Responsible AI policy & guardrails',
      'Data classification & residency controls',
      'RBAC, audit logging & access governance',
      'GDPR / compliance alignment review',
    ],
  },
];

const phases = [
  { number: '01', title: 'Discover', body: 'A structured workshop to understand your business goals, identify realistic AI use cases, and produce a prioritised roadmap — with clear criteria for what success looks like before any code is written.', duration: '1–2 weeks' },
  { number: '02', title: 'Build', body: 'We develop your proof of concept using the right Azure AI services, deploying on a governed Landing Zone. Parallel validation ensures every PoC is production-aligned before handover.', duration: '3–6 weeks' },
  { number: '03', title: 'Scale', body: 'Post-PoC, we help you move from validated concept to live product — expanding AI adoption across teams, optimising costs, and providing ongoing advisory to keep your AI running efficiently.', duration: 'Ongoing' },
];

const pillars = [
  { title: 'Your data stays yours', body: 'We configure Azure AI services with private endpoints and your own data residency requirements. Your data never leaves your tenant and is never used to train shared models.' },
  { title: 'Compliance from day one', body: 'Governance and compliance measures — GDPR alignment, audit trails, role-based access — are embedded into the architecture from the very beginning, not added later.' },
  { title: 'Responsible AI by design', body: "We implement Microsoft's Responsible AI principles: fairness, reliability, transparency, and accountability — with guardrails that enforce safe outputs across every use case." },
];

const faqs = [
  { q: 'What Azure AI services do you work with?', a: 'We work across the full Azure AI portfolio — Azure OpenAI Service, Azure AI Search, Document Intelligence, Language Service, Azure Machine Learning, and Azure Cognitive Services. We select the right service for each use case rather than defaulting to one.' },
  { q: 'Do we need an in-house AI team to get started?', a: 'No. The AI Accelerator is specifically designed for teams without deep in-house AI expertise. We provide the engineering, architecture, and guidance — your team focuses on the product and business outcomes.' },
  { q: 'How long does a typical PoC take to deliver?', a: 'Most proofs of concept are delivered in 3–6 weeks after the discovery phase. The timeline depends on integration complexity and data readiness — we give you a fixed estimate after the discovery workshop.' },
  { q: 'How do you handle data privacy and GDPR compliance?', a: 'All AI solutions are deployed within your own Azure tenant using private networking. We configure data residency, access controls, and audit logging to meet your compliance requirements from day one — no data is shared externally.' },
  { q: "What if our systems aren't fully on Azure yet?", a: 'No problem. We can connect your existing on-premises or multi-cloud systems to Azure using our Cloud Native development and migration capabilities, so you can start adopting AI even before a full migration is complete.' },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-[#eee] last:border-0">
      <button className="w-full flex items-center justify-between gap-4 py-5 text-left" onClick={onToggle}>
        <span className="text-base font-medium text-[#111] leading-snug">{q}</span>
        <span
          className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200"
          style={{ background: isOpen ? '#111' : '#f3f4f6', border: '1px solid #e6e6e6' }}
        >
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            {isOpen
              ? <path d="M1 6h10" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
              : <path d="M6 1v10M1 6h10" stroke="#111" strokeWidth="1.6" strokeLinecap="round" />}
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-[#6b7280] text-sm leading-relaxed pb-5 pr-10">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── page ── */
export default function AIAcceleratorPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="font-switzer">

      {/* ── Hero ── */}
      <div className="industries-hero-bg">
        <div className={`${CONTAINER} pb-12 pt-32 lg:pt-28`}>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">

            {/* Left */}
            <div className="flex-1">
              <div className="mb-6"><Eyebrow>AI Accelerator</Eyebrow></div>
              <h1 className="m-0 max-w-[560px] text-[40px] font-medium leading-[1.05] text-[#111] sm:text-[52px] lg:text-[64px]">
                Build AI solutions with confidence.
              </h1>
              <p className="mt-6 max-w-[520px] text-[18px] font-light leading-[1.6] text-[#111]">
                Adopt Azure AI services quickly and cost-efficiently — without the compliance risk.
                We guide you from use case to proof of concept to production, embedding governance
                from day one.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton href={Constants.PAGES.SCHEDULE_CALL}>Talk to our Experts</PrimaryButton>
                <SecondaryButton href="#modules">Explore the approach</SecondaryButton>
              </div>
            </div>

            {/* Right — stat card */}
            <div className="w-full lg:max-w-[380px] lg:flex-1">
              <div className="rounded-2xl border border-[#e6e6e6] bg-white p-6">
                <p className="m-0 mb-5"><Eyebrow>What you get</Eyebrow></p>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((s) => (
                    <div key={s.label} className="rounded-xl border border-[#eee] bg-[#fafafa] p-4">
                      <p className="m-0 text-[28px] font-medium leading-none text-[#111]">{s.value}</p>
                      <p className="m-0 mt-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-[#9ca3af]">{s.label}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-5 border-t border-[#eee] pt-4 text-[13px] leading-relaxed text-[#6b7280]">
                  Use case to production — secure, compliant, and built to scale.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* AI-era blue divider (page-scoped) — full viewport width */}
        <hr
          className="m-0 h-1 w-full border-0"
          style={{
            backgroundImage: 'linear-gradient(260deg, #fff, #60a5fa 20%, #3b82f6 50%, #1e4fd6 80%, #fff)',
            borderRadius: 100,
          }}
        />
      </div>

      {/* ── Benefits ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} py-20 lg:py-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>Why AI Accelerator</Eyebrow></div>
            <h2 className="m-0 max-w-[560px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              AI that actually works for your business.
            </h2>
            <p className="mt-3 max-w-[520px] text-[16px] font-normal leading-[1.5] text-[#6b7280]">
              We reduce the complexity, risk, and guesswork of AI adoption — so you can focus on
              outcomes, not infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {benefits.map(({ title, body, icon: Icon }) => (
              <article
                key={title}
                className="group flex h-full flex-col rounded-lg border border-[#e6e6e6] bg-white p-6 transition-[filter,box-shadow] duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:[filter:invert(1)]"
              >
                <Icon className="mb-5 h-7 w-7 text-[#111]" strokeWidth={1.6} aria-hidden="true" />
                <h3 className="m-0 text-[18px] font-medium leading-[1.3] text-[#111]">{title}</h3>
                <p className="mt-2 text-[15px] font-normal leading-[1.5] text-[#111]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modules ── */}
      <section id="modules" className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4"><Eyebrow>Our approach</Eyebrow></div>
              <h2 className="m-0 max-w-[520px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
                Three modules. One complete program.
              </h2>
            </div>
            <PrimaryButton href={Constants.PAGES.SCHEDULE_CALL}>Book a discovery call</PrimaryButton>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
            {modules.map((m) => (
              <div key={m.tag} className="flex h-full flex-col rounded-lg border border-[#e6e6e6] bg-white p-6">
                <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#9ca3af]">{m.tag}</span>
                <h3 className="mt-3 text-[20px] font-medium leading-[1.25] text-[#111]">{m.title}</h3>
                <p className="mt-2 text-[15px] font-normal leading-[1.5] text-[#111]">{m.body}</p>
                <div className="mt-5 flex flex-col gap-2.5 border-t border-[#eee] pt-5">
                  {m.items.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#111]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-[13.5px] leading-relaxed text-[#6b7280]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Delivery phases ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>How we deliver</Eyebrow></div>
            <h2 className="m-0 max-w-[520px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              From idea to production, in three clear steps.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-6">
            {phases.map((p) => (
              <div key={p.number} className="flex h-full flex-col rounded-lg border border-[#e6e6e6] bg-white p-6">
                <span className="text-[34px] font-light leading-none text-[#e6e6e6]">{p.number}</span>
                <h3 className="mt-4 text-[20px] font-medium leading-[1.25] text-[#111]">{p.title}</h3>
                <p className="mt-2 flex-1 text-[15px] font-normal leading-[1.5] text-[#111]">{p.body}</p>
                <span className="mt-5 inline-flex w-fit items-center rounded-full border border-[#e6e6e6] bg-[#fafafa] px-3 py-1 text-[12px] font-medium text-[#6b7280]">
                  {p.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Data & governance ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>Data &amp; governance</Eyebrow></div>
            <h2 className="m-0 max-w-[560px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              Innovate freely. Stay in control.
            </h2>
            <p className="mt-3 max-w-[520px] text-[16px] font-normal leading-[1.5] text-[#6b7280]">
              Security, privacy, and compliance are never an afterthought — they are the foundation
              every solution is built on.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="flex h-full flex-col rounded-lg border border-[#e6e6e6] bg-white p-6">
                <h3 className="m-0 text-[18px] font-medium leading-[1.3] text-[#111]">{p.title}</h3>
                <p className="mt-2 text-[15px] font-normal leading-[1.5] text-[#111]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-5 pb-20 md:px-12 lg:pb-24">
          <div className="mb-10">
            <div className="mb-4"><Eyebrow>FAQ</Eyebrow></div>
            <h2 className="m-0 text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              Common questions.
            </h2>
          </div>
          <div className="rounded-2xl border border-[#e6e6e6] bg-white px-6 sm:px-8">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                q={faq.q}
                a={faq.a}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a0e1a]">
        <div className={`${CONTAINER} flex flex-col gap-10 py-20 md:flex-row md:items-center md:justify-between`}>
          <div className="flex max-w-xl flex-col gap-4">
            <h2 className="m-0 text-[28px] font-medium leading-[1.1] text-white md:text-[44px]">
              Ready to accelerate your AI adoption?
            </h2>
            <p className="m-0 text-[18px] font-light leading-[1.6] text-white/70">
              Book a free discovery call. We&apos;ll identify your highest-value use cases and outline
              a practical path to production.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton href={Constants.PAGES.SCHEDULE_CALL} dark>Talk to our Experts</PrimaryButton>
            <SecondaryButton href="/solutions" onDark>All solutions</SecondaryButton>
          </div>
        </div>
      </section>

    </div>
  );
}
