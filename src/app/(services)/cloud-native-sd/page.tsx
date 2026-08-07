import type { Metadata } from "next";
import { GitBranch, ShieldCheck, Network, type LucideIcon } from "lucide-react";
import { CONTAINER, Eyebrow, PrimaryButton, SecondaryButton } from "@/app/components/partials/services/ServiceUI";

export const metadata: Metadata = {
  title: "Cloud Native Development",
  description:
    "Scrum-based cloud-native development on Kubernetes & Azure — production-ready, containerised, and built to scale from the first sprint.",
};

/* ── content ── */
const pillars: { title: string; desc: string; icon: LucideIcon }[] = [
  { title: "Agile delivery", desc: "Two-week sprints, weekly demos, and a backlog you control. You see working software every cycle — not a big reveal at the end. Scope can shift; our process absorbs it.", icon: GitBranch },
  { title: "Resilient by design", desc: "Circuit breakers, retry logic, health checks, and multi-region failover — not added later as patches but designed in from the architecture workshop.", icon: ShieldCheck },
  { title: "Horizontally scalable", desc: "Kubernetes scales each microservice independently. No more all-or-nothing vertical scaling of a monolith — add capacity where demand grows, release it when it drops.", icon: Network },
];

const processSteps = [
  { step: "01", heading: "Architecture workshop", body: "We map your services, data flows, and team topology — then design a target architecture your engineers can ship against in sprints." },
  { step: "02", heading: "Environment setup", body: "Azure landing zone, Kubernetes cluster, container registry, and CI/CD pipelines — standing and verified before the first feature starts." },
  { step: "03", heading: "Sprint-based delivery", body: "Two-week sprints. Working software every cycle. Scope can shift; our process absorbs it without derailing delivery." },
  { step: "04", heading: "Observability first", body: "Metrics, distributed tracing, and log aggregation configured at the start — not tacked on after something breaks in production." },
  { step: "05", heading: "Production rollout", body: "Zero-downtime deployments, automated rollbacks, and a runbook your team owns. We stay alongside until the system is stable." },
];

const audience = [
  { title: "MVP delivery", desc: "Sprint-based delivery of a working product in weeks, not months." },
  { title: "Existing Azure customers", desc: "Optimise your current Azure environment and adopt modern cloud-native patterns." },
  { title: "Legacy modernisation", desc: "Break apart monoliths into maintainable microservices at a pace your team can absorb." },
  { title: "Greenfield projects", desc: "Start right — with proper architecture, CI/CD, and observability from commit one." },
];

export default function CloudNativeSD() {
  return (
    <div className="font-switzer">

      {/* ── Hero ── */}
      <div className="industries-hero-bg">
        <div className={`${CONTAINER} pb-12 pt-32 lg:pt-28`}>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">

            {/* Left */}
            <div className="flex-1">
              <div className="mb-6"><Eyebrow>Cloud Native Development</Eyebrow></div>
              <h1 className="m-0 text-[40px] font-medium leading-[1.05] text-[#111] sm:text-[52px] lg:text-[64px]">
                Built for the cloud from day one.
              </h1>
              <p className="mt-6 max-w-[520px] text-[18px] font-light leading-[1.6] text-[#111]">
                Scrum-based cloud-native development on Kubernetes &amp; Azure — production-ready,
                containerised, and built to scale from the first sprint.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton href="/schedule-call">Book a free call</PrimaryButton>
                <SecondaryButton href="/solutions">View all solutions</SecondaryButton>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Kubernetes", "Azure AKS", "Docker", "Helm", "Terraform", "GitHub Actions"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#e6e6e6] px-3 py-1 text-[12px] font-medium text-[#111]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* multicolour divider — full viewport width */}
        <hr className="linegrad-divider m-0 h-1 w-full border-0" />
      </div>

      {/* ── Three pillars ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} py-20 lg:py-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>How we build</Eyebrow></div>
            <h2 className="m-0 max-w-[620px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              Three principles. One production system.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
            {pillars.map(({ title, desc, icon: Icon }) => (
              <article
                key={title}
                className="group flex h-full flex-col rounded-lg border border-[#e6e6e6] bg-white p-6 transition-[filter,box-shadow] duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:[filter:invert(1)]"
              >
                <Icon className="mb-5 h-7 w-7 text-[#111]" strokeWidth={1.6} aria-hidden="true" />
                <h3 className="m-0 text-[20px] font-medium leading-[1.25] text-[#111] lg:text-[22px]">{title}</h3>
                <p className="mt-2 text-[16px] font-normal leading-[1.5] text-[#111]">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} py-20 lg:py-24`}>
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-4"><Eyebrow>How we work</Eyebrow></div>
              <h2 className="m-0 max-w-[720px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
                From architecture to production — in weeks.
              </h2>
            </div>
            <PrimaryButton href="/schedule-call">Book a free call</PrimaryButton>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {processSteps.map(({ step, heading, body }) => (
              <div key={step} className="flex h-full flex-col rounded-lg border border-[#e6e6e6] bg-white p-6">
                <span className="text-[34px] font-light leading-none text-[#e6e6e6]">{step}</span>
                <h3 className="mt-4 text-[20px] font-medium leading-[1.25] text-[#111]">{heading}</h3>
                <p className="mt-2 text-[16px] font-normal leading-[1.5] text-[#111]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who is it for ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>Who is it for</Eyebrow></div>
            <h2 className="m-0 text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              Is cloud-native right for your team?
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {audience.map(({ title, desc }) => (
              <div key={title} className="flex h-full flex-col rounded-lg border border-[#e6e6e6] bg-white p-6">
                <h3 className="m-0 text-[18px] font-medium leading-[1.25] text-[#111]">{title}</h3>
                <p className="mt-2 text-[16px] font-normal leading-[1.5] text-[#111]">{desc}</p>
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
              Ready to build cloud-native?
            </h2>
            <p className="m-0 text-[18px] font-light leading-[1.6] text-white/70">
              Book a free 30-minute call. We&apos;ll review where you are today and outline a
              practical path forward — no obligation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton href="/schedule-call" dark>Schedule a free call</PrimaryButton>
            <SecondaryButton href="/solutions" onDark>All solutions</SecondaryButton>
          </div>
        </div>
      </section>

    </div>
  );
}
