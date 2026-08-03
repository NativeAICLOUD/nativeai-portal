import type { Metadata } from "next";
import Image from "next/image";
import { CONTAINER, Eyebrow, PrimaryButton, SecondaryButton } from "@/app/components/partials/services/ServiceUI";

export const metadata: Metadata = {
  title: "DevOps on Azure",
  description:
    "We design and implement world-class DevOps practices on Azure — CI/CD pipelines, Infrastructure as Code, and automated testing that lets your team deploy with confidence.",
};

/* ── content ── */
const capabilities = [
  { num: "01", title: "CI/CD Pipelines", body: "End-to-end automated pipelines from code commit to production — with parallel jobs, caching, and zero-downtime release strategies." },
  { num: "02", title: "Azure Boards", body: "Agile planning with Kanban boards, sprint backlogs, and work item tracking integrated directly with your repos and pipelines for full traceability." },
  { num: "03", title: "Azure Repos", body: "Git repositories with branch policies, pull request workflows, code review gates, and fine-grained access control for every team." },
  { num: "04", title: "Infrastructure as Code", body: "Terraform, Bicep, and ARM templates version-controlled and deployed through pipelines — your infrastructure defined, tested, and shipped like code." },
  { num: "05", title: "Test Automation", body: "Automated unit, integration, and end-to-end tests built into every pipeline stage — quality gates that prevent broken code from reaching production." },
  { num: "06", title: "Monitoring & Observability", body: "Azure Monitor, Application Insights, and Log Analytics configured from day one — custom dashboards and proactive alerting for every environment." },
];

const steps = [
  { step: "01", heading: "Assessment & Planning", body: "We audit your current SDLC — tools, workflows, team structure, and pain points — and produce a DevOps transformation roadmap aligned to your delivery goals." },
  { step: "02", heading: "Azure DevOps Setup", body: "We configure your Azure DevOps organisation: projects, repos, boards, pipelines, and artifact feeds — all with RBAC, branch policies, and security best practices from day one." },
  { step: "03", heading: "CI/CD Pipeline Build", body: "We build automated build and release pipelines for your applications — from commit to production — with quality gates, automated tests, and environment-specific approvals baked in." },
  { step: "04", heading: "Infrastructure as Code", body: "We define your Azure infrastructure in Terraform or Bicep, version-controlled and pipeline-deployed — so your environments are reproducible, auditable, and consistent." },
  { step: "05", heading: "Monitoring & Optimisation", body: "Azure Monitor, Application Insights, and custom dashboards give you full observability. We tune pipelines for speed, set up alerting, and continuously optimise your delivery flow." },
];

const faqs = [
  { q: "Can you migrate us from Jenkins / GitLab CI?", a: "Yes. We handle full migrations from Jenkins, GitLab CI, GitHub Actions, or Bamboo — mapping your existing pipelines to Azure DevOps equivalents with minimal disruption." },
  { q: "Do we need to be on Azure to use Azure DevOps?", a: "No. Azure DevOps is a standalone SaaS platform. We can deploy to any cloud or on-premises environment — Azure, AWS, GCP, or hybrid." },
  { q: "What happens to our existing source code and history?", a: "All git history is preserved. We import repositories, branches, tags, and commit history into Azure Repos with zero data loss." },
  { q: "How long does a DevOps transformation take?", a: "Initial setup and first pipelines typically take 2–4 weeks. A full transformation covering all teams usually completes within 8–12 weeks." },
];

const tags = ["Azure Pipelines", "Azure Repos", "Terraform", "Bicep", "Azure Monitor"];

export default function DevOpsOnAzurePage() {
  return (
    <div className="font-switzer">

      {/* ── Hero ── */}
      <div className="industries-hero-bg">
        <div className={`${CONTAINER} pb-12 pt-32 lg:pt-28`}>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">

            {/* Left */}
            <div className="flex-1">
              <div className="mb-6"><Eyebrow>DevOps on Azure</Eyebrow></div>
              <h1 className="m-0 text-[40px] font-medium leading-[1.05] text-[#111] sm:text-[52px] lg:text-[60px]">
                Automate delivery. Eliminate risk. Scale with confidence.
              </h1>
              <p className="mt-6 max-w-[520px] text-[18px] font-light leading-[1.6] text-[#111]">
                We design and implement world-class DevOps practices on Azure — CI/CD pipelines,
                Infrastructure as Code, and automated testing that lets your team deploy with
                confidence, every time.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton href="/schedule-call">Book a 15-min call</PrimaryButton>
                <SecondaryButton href="/solutions">All solutions</SecondaryButton>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="rounded-full border border-[#e6e6e6] px-3 py-1 text-[12px] font-medium text-[#111]">{t}</span>
                ))}
              </div>
            </div>

            {/* Right — devops image */}
            <div className="w-full lg:max-w-[500px] lg:flex-1">
              <div className="relative h-[340px] w-full overflow-hidden rounded-2xl border border-[#e6e6e6] sm:h-[420px]">
                <Image
                  src="/img/devops1.jpeg"
                  alt="DevOps engineering on Azure"
                  fill
                  priority
                  sizes="(max-width: 500px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,16,43,0.75) 0%, rgba(5,16,43,0.05) 55%, transparent 80%)" }} />
                <div className="absolute bottom-6 left-6">
                  <p className="m-0 text-[14px] font-medium text-white">DevOps on Azure</p>
                  <p className="m-0 mt-0.5 text-[12px] text-white/60">From commit to production — automated.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* multicolour divider — full viewport width */}
        <hr className="linegrad-divider m-0 h-1 w-full border-0" />
      </div>

      {/* ── Capabilities ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} py-20 lg:py-24`}>
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4"><Eyebrow>What we deliver</Eyebrow></div>
              <h2 className="m-0 max-w-[520px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
                Every layer of your DevOps pipeline, covered.
              </h2>
            </div>
            <PrimaryButton href="/schedule-call">Schedule a quick intro</PrimaryButton>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {capabilities.map(({ num, title, body }) => (
              <article
                key={num}
                className="group flex h-full flex-col rounded-lg border border-[#e6e6e6] bg-white p-6 transition-[filter,box-shadow] duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:[filter:invert(1)]"
              >
                <span className="mb-3 text-[13px] font-light text-[#9ca3af]">{num}</span>
                <h3 className="m-0 text-[20px] font-medium leading-[1.25] text-[#111]">{title}</h3>
                <p className="mt-2 text-[16px] font-normal leading-[1.5] text-[#111]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy / image callout ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="flex flex-col gap-4 rounded-lg bg-[#111] p-8 lg:p-10">
              <Eyebrow><span className="text-white/50">Our philosophy</span></Eyebrow>
              <p className="m-0 text-[18px] font-light leading-[1.6] text-white/90">
                DevOps isn&apos;t a tool — it&apos;s a culture. We don&apos;t just configure
                pipelines; we work alongside your team to embed the practices, habits, and
                automation that make fast, reliable delivery the norm — not the exception.
              </p>
            </div>
            <div className="relative min-h-[320px] overflow-hidden rounded-lg border border-[#e6e6e6]">
              <Image
                src="/img/devops1.jpeg"
                alt="DevOps engineering team"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,16,43,0.55) 0%, transparent 60%)" }} />
              <div className="absolute bottom-6 left-8">
                <p className="m-0 text-[14px] font-medium text-white">DevOps engineering, done right.</p>
                <p className="m-0 mt-1 text-[12px] text-white/60">Faster delivery. Less friction. Every time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-4"><Eyebrow>How it works</Eyebrow></div>
              <h2 className="m-0 max-w-[720px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
                From assessment to fully automated delivery.
              </h2>
            </div>
            <PrimaryButton href="/schedule-call">Start the journey</PrimaryButton>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {steps.map(({ step, heading, body }) => (
              <div key={step} className="flex h-full flex-col rounded-lg border border-[#e6e6e6] bg-white p-6">
                <span className="text-[34px] font-light leading-none text-[#e6e6e6]">{step}</span>
                <h3 className="mt-4 text-[20px] font-medium leading-[1.25] text-[#111]">{heading}</h3>
                <p className="mt-2 text-[16px] font-normal leading-[1.5] text-[#111]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>Common questions</Eyebrow></div>
            <h2 className="m-0 text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              Questions we hear every day.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
            {faqs.map(({ q, a }) => (
              <div key={q} className="flex flex-col gap-2 rounded-lg border border-[#e6e6e6] bg-white p-6">
                <h3 className="m-0 text-[18px] font-medium leading-[1.3] text-[#111]">{q}</h3>
                <p className="m-0 text-[16px] font-normal leading-[1.5] text-[#111]">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a0e1a]">
        <div className={`${CONTAINER} flex flex-col gap-10 py-20 md:flex-row md:items-center md:justify-between`}>
          <div className="flex max-w-xl flex-col gap-4">
            <h2 className="m-0 text-[28px] font-medium leading-[1.1] text-white md:text-[44px]">
              Ready to transform your delivery pipeline?
            </h2>
            <p className="m-0 text-[18px] font-light leading-[1.6] text-white/70">
              Let&apos;s talk about your current setup and map out what modern DevOps looks like
              for your team.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton href="/schedule-call" dark>Book a discovery call</PrimaryButton>
            <SecondaryButton href="/solutions" onDark>All solutions</SecondaryButton>
          </div>
        </div>
      </section>

    </div>
  );
}
