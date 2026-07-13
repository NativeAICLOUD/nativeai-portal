'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ShieldCheck, LifeBuoy, Zap, Lock, Bot, LineChart, type LucideIcon } from 'lucide-react';
import { Constants } from '@/Constants';
import { CONTAINER, Eyebrow, PrimaryButton, SecondaryButton } from '@/app/components/partials/services/ServiceUI';

/* ── content ── */
const stats = [
  { value: '3', label: 'Core modules' },
  { value: '3', label: 'Delivery phases' },
  { value: '0', label: 'Disruptions' },
  { value: '100%', label: 'Governed setup' },
];

const benefits: { title: string; body: string; icon: LucideIcon }[] = [
  { title: 'Low-risk adoption pathway', body: 'A modular, phased approach ensures your team adopts GitHub with zero disruption and full governance from day one.', icon: ShieldCheck },
  { title: 'End-to-end support', body: 'From initial assessment and discovery through full implementation and post-launch optimization — we stay with you at every step.', icon: LifeBuoy },
  { title: 'Faster implementation', body: 'Pre-built migration tooling, Copilot enablement playbooks, and battle-tested DevSecOps templates cut delivery time significantly.', icon: Zap },
  { title: 'Enterprise security by default', body: 'Secrets scanning, branch protection, CODEOWNERS, and SSO configured and governed from the very first day of implementation.', icon: Lock },
  { title: 'AI-assisted development', body: 'GitHub Copilot integration across your IDE, PR review, and CI pipelines — measurable productivity gains from week one.', icon: Bot },
  { title: 'Measurable outcomes', body: 'Every phase delivers tracked KPIs — deployment frequency, lead time, MTTR, and Copilot acceptance rates — so ROI is visible.', icon: LineChart },
];

const modules = [
  {
    tag: 'Module 01',
    title: 'GitHub Copilot Adoption',
    body: 'Enable AI pair programming across your entire engineering organization. We configure Copilot policies, integrate with your IDE and CI pipeline, and train teams to use it effectively — with measurable productivity metrics from week one.',
    items: [
      'IDE integration & policy configuration',
      'Copilot Business / Enterprise setup',
      'Team enablement & training workshops',
      'Productivity KPI dashboard & tracking',
    ],
  },
  {
    tag: 'Module 02',
    title: 'GitHub Migration',
    body: 'Move your repositories, pipelines, and commit history from Azure DevOps, Bitbucket, or any platform to GitHub — without service interruption, data loss, or team confusion.',
    items: [
      'Repository & full history migration',
      'Azure DevOps Pipelines → GitHub Actions',
      'Permissions & governance remapping',
      'Parallel-run validation before cutover',
    ],
  },
  {
    tag: 'Module 03',
    title: 'DevSecOps & Enterprise Security',
    body: 'Strengthen your security posture with GitHub Advanced Security. We implement secret scanning, code scanning, Dependabot, branch protection, and CODEOWNERS across your entire organization.',
    items: [
      'GitHub Advanced Security enablement',
      'Secret scanning & Dependabot automation',
      'Branch protection & CODEOWNERS policies',
      'SAST / SCA pipeline integration',
    ],
  },
];

const phases = [
  { number: '01', title: 'Discover & Plan', body: 'We audit your current repositories, pipelines, and team workflows. The output is a tailored GitHub adoption roadmap, risk register, and prioritised backlog — agreed with your stakeholders before a single line changes.', duration: '1–2 weeks' },
  { number: '02', title: 'Accelerate', body: 'We execute the migration and configuration in phased sprints, running parallel validation before any cutover. Your development operations continue without interruption throughout.', duration: '2–6 weeks' },
  { number: '03', title: 'Innovate', body: 'Post-migration, we optimize GitHub Actions workflows, expand Copilot adoption across teams, and establish automated security gates — so engineering velocity compounds over time.', duration: 'Ongoing' },
];

const migrationPaths = [
  { from: 'Azure DevOps', to: 'GitHub Enterprise', body: 'Full migration of repos, Pipelines → Actions, Boards → Issues/Projects, and identity federation via Microsoft Entra ID.' },
  { from: 'Hybrid DevOps', to: '+ GitHub Actions', body: 'Keep Azure DevOps Boards and Artifacts while migrating source control and CI/CD to GitHub — a low-disruption hybrid path.' },
  { from: 'GitHub.com (Team)', to: 'GitHub Enterprise Cloud', body: 'Upgrade to Enterprise with SSO, audit log streaming, Advanced Security policies, and enterprise-grade support.' },
  { from: 'Bitbucket / GitLab', to: 'GitHub Enterprise', body: 'Cross-platform migration with full commit history, PR history, and complete CI pipeline reconstruction in GitHub Actions.' },
];

const faqs = [
  { q: 'How long does a typical GitHub migration take?', a: 'Scope varies by repository count and pipeline complexity. Most migrations run 3–8 weeks end-to-end. After our discovery phase we give you a fixed timeline with milestones before any work begins.' },
  { q: 'Will our development be disrupted during migration?', a: 'No. We run all migrations in parallel — new repos and pipelines are validated in GitHub before any cutover from the source system. Teams continue working on the existing platform until we flip the switch together.' },
  { q: 'Do you support GitHub Enterprise Cloud and Server?', a: 'Yes. We work with both GitHub Enterprise Cloud (SaaS) and GitHub Enterprise Server (self-hosted), including hybrid configurations and migrations between the two.' },
  { q: "What's included in GitHub Copilot Adoption?", a: 'Policy configuration, IDE rollout, Copilot Business or Enterprise licensing guidance, team training workshops, and a metrics dashboard tracking acceptance rate, lines suggested, and developer satisfaction scores.' },
  { q: 'Can NativeCloud help with GitHub Advanced Security licensing?', a: 'Yes. We work with GitHub licensing and can advise on GHAS tier selection, seat planning, and cost optimization strategies as part of the DevSecOps module.' },
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
export default function GitHubAcceleratorPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="font-switzer">

      {/* ── Hero ── */}
      <div className="industries-hero-bg">
        <div className={`${CONTAINER} pb-12 pt-32 lg:pt-28`}>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">

            {/* Left */}
            <div className="flex-1">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#111]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden>
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <Eyebrow>GitHub Accelerator · Partner Program</Eyebrow>
              </div>
              <h1 className="m-0 max-w-[560px] text-[40px] font-medium leading-[1.05] text-[#111] sm:text-[52px] lg:text-[64px]">
                Deliver software faster with GitHub.
              </h1>
              <p className="mt-6 max-w-[520px] text-[18px] font-light leading-[1.6] text-[#111]">
                A modular program to adopt GitHub Copilot, migrate from Azure DevOps, and implement
                enterprise-grade DevSecOps — with hands-on guidance and measurable outcomes. No risks,
                minimal disruption.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton href={Constants.PAGES.SCHEDULE_CALL}>Talk to our Experts</PrimaryButton>
                <SecondaryButton href="#modules">Explore the modules</SecondaryButton>
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
                  No risks, minimal disruption — strong security &amp; governance from day one.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* GitHub-style purple divider (page-scoped) — full viewport width */}
        <hr
          className="m-0 h-1 w-full border-0"
          style={{
            backgroundImage: 'linear-gradient(260deg, #fff, #6e40c9 20%, #8957e5 50%, #ec6cb9 80%, #fff)',
            borderRadius: 100,
          }}
        />
      </div>

      {/* ── Benefits ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} py-20 lg:py-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>Why GitHub Accelerator</Eyebrow></div>
            <h2 className="m-0 max-w-[560px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              A clear path to GitHub. No guesswork.
            </h2>
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
              <div className="mb-4"><Eyebrow>Service modules</Eyebrow></div>
              <h2 className="m-0 max-w-[520px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
                Three modules. One program.
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
              Three phases. Zero surprises.
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

      {/* ── Migration paths ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>Migration paths</Eyebrow></div>
            <h2 className="m-0 max-w-[520px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              Wherever you start, we get you there.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
            {migrationPaths.map((mp) => (
              <div key={mp.from} className="rounded-lg border border-[#e6e6e6] bg-white p-6">
                <div className="mb-4 flex flex-wrap items-center gap-2.5">
                  <span className="text-[14px] font-medium text-[#111]">{mp.from}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  <span className="text-[14px] font-medium text-[#2563eb]">{mp.to}</span>
                </div>
                <p className="text-[15px] leading-relaxed text-[#6b7280]">{mp.body}</p>
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
              Ready to move faster with GitHub?
            </h2>
            <p className="m-0 text-[18px] font-light leading-[1.6] text-white/70">
              Book a free discovery call. We&apos;ll assess your setup and map a low-risk path to
              GitHub, Copilot, and DevSecOps.
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
