import type { Metadata } from "next";
import { Boxes, Workflow, CloudCog, type LucideIcon } from "lucide-react";
import { CONTAINER, Eyebrow, PrimaryButton, SecondaryButton } from "@/app/components/partials/services/ServiceUI";

export const metadata: Metadata = {
  title: "Cloud Architecture",
  description:
    "We architect cloud-native solutions built for performance, resilience, and growth — making the right design decisions before a single line of code is written.",
};

/* ── content ── */
const pillars: { title: string; desc: string; icon: LucideIcon }[] = [
  { title: "System Design & Architecture", desc: "We design end-to-end cloud architectures tailored to your workload — choosing the right services, patterns, and topology before a single line of code is written.", icon: Boxes },
  { title: "Microservices & API Design", desc: "We decompose monoliths into well-bounded microservices with clean APIs — structured for independent deployability, scalability, and long-term maintainability.", icon: Workflow },
  { title: "Infrastructure as Code", desc: "We provision and manage all infrastructure through code — Terraform, Bicep, or Pulumi — so every environment is reproducible, auditable, and version-controlled.", icon: CloudCog },
];

const services = [
  { num: "01", title: "Well-Architected Reviews", desc: "Audit your existing cloud setup against the five pillars of the Azure or AWS Well-Architected Framework and get a prioritised improvement roadmap." },
  { num: "02", title: "Reference Architecture Blueprints", desc: "Proven, battle-tested architecture patterns — multi-region HA, event-driven systems, CQRS/ES — adapted to your domain and delivered as living documentation." },
  { num: "03", title: "Cloud Migration Architecture", desc: "Lift-and-shift, re-platform, or full re-architect — we plan the migration path that minimises risk and maximises the value of the cloud." },
  { num: "04", title: "Serverless & Container Architecture", desc: "Design containerised workloads on AKS or EKS, or go fully serverless with Azure Functions and Azure Container Apps — right-sized for cost and performance." },
  { num: "05", title: "Event-Driven Architecture", desc: "Decouple services with reliable messaging and event streaming using Azure Service Bus, Event Grid, or Kafka — built for resilience at any scale." },
  { num: "06", title: "Security & Compliance Design", desc: "Zero-trust network design, identity architecture, encryption at rest and in transit, and compliance mapping for ISO 27001, SOC 2, GDPR, and more." },
];

const reasons = [
  { stat: "3×", label: "Faster time-to-scale", desc: "Well-designed systems scale horizontally without rewrites." },
  { stat: "60%", label: "Lower incident rate", desc: "Architecture reviews catch failure modes before they hit production." },
  { stat: "40%", label: "Reduced cloud spend", desc: "Right-sized resources and optimised data flows cut waste at the source." },
];

function DiagramBox({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`flex items-center justify-center rounded-xl border border-[#eee] bg-[#fafafa] px-2 text-center ${className}`}>
      <span className="text-[11px] font-medium leading-tight text-[#111]">{label}</span>
    </div>
  );
}

function DownArrow() {
  return (
    <div className="flex justify-center">
      <svg width="22" height="14" viewBox="0 0 24 16" fill="none" aria-hidden="true">
        <path d="M12 0v12M6 8l6 6 6-6" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function CloudSoftwareArchitecturePage() {
  return (
    <div className="font-switzer">

      {/* ── Hero ── */}
      <div className="industries-hero-bg">
        <div className={`${CONTAINER} pb-12 pt-32 lg:pt-28`}>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">

            {/* Left */}
            <div className="flex-1">
              <div className="mb-6"><Eyebrow>Cloud Architecture</Eyebrow></div>
              <h1 className="m-0 text-[40px] font-medium leading-[1.05] text-[#111] sm:text-[52px] lg:text-[64px]">
                Systems that scale from day one.
              </h1>
              <p className="mt-6 max-w-[520px] text-[18px] font-light leading-[1.6] text-[#111]">
                We architect cloud-native solutions built for performance, resilience, and
                growth — making the right design decisions before a single line of code is written.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton href="/schedule-call">Schedule a free call</PrimaryButton>
                <SecondaryButton href="/solutions">View all solutions</SecondaryButton>
              </div>
            </div>

            {/* Right — architecture diagram */}
            <div className="w-full lg:max-w-[500px] lg:flex-1">
              <div className="flex flex-col gap-5 rounded-2xl border border-[#e6e6e6] bg-white p-6">
                <div className="flex items-center justify-between">
                  <Eyebrow>Cloud Architecture</Eyebrow>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#059669]" />
                    <span className="text-[11px] font-medium text-[#059669]">Live</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="grid grid-cols-2 gap-2.5">
                    <DiagramBox label="CDN / WAF" className="h-12" />
                    <DiagramBox label="API Gateway" className="h-12" />
                  </div>
                  <DownArrow />
                  <div className="grid grid-cols-3 gap-2">
                    <DiagramBox label="Auth" className="h-16" />
                    <DiagramBox label="Orders" className="h-16" />
                    <DiagramBox label="Events" className="h-16" />
                  </div>
                  <DownArrow />
                  <div className="grid grid-cols-2 gap-2.5">
                    <DiagramBox label="Azure SQL / Cosmos" className="h-12" />
                    <DiagramBox label="Blob / Redis" className="h-12" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {["Azure", "Kubernetes", "Terraform", "IaC"].map((t) => (
                    <span key={t} className="rounded-full border border-[#e6e6e6] px-2.5 py-1 text-[11px] font-medium text-[#111]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* blue divider — full viewport width */}
        <hr className="divider-blue m-0 h-1 w-full border-0" />
      </div>

      {/* ── Three pillars ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} py-20 lg:py-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>What we do</Eyebrow></div>
            <h2 className="m-0 max-w-[620px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              Three disciplines that make architecture future-proof.
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

      {/* ── Services grid ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4"><Eyebrow>Architecture services</Eyebrow></div>
              <h2 className="m-0 max-w-[560px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
                Everything your architecture needs, under one roof.
              </h2>
            </div>
            <PrimaryButton href="/schedule-call">Schedule a call</PrimaryButton>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {services.map(({ num, title, desc }) => (
              <div key={num} className="flex h-full flex-col rounded-lg border border-[#e6e6e6] bg-white p-6">
                <span className="text-[34px] font-light leading-none text-[#e6e6e6]">{num}</span>
                <h3 className="mt-4 text-[20px] font-medium leading-[1.25] text-[#111]">{title}</h3>
                <p className="mt-2 text-[16px] font-normal leading-[1.5] text-[#111]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why it matters — stats ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>Why architecture matters</Eyebrow></div>
            <h2 className="m-0 text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              Good architecture pays for itself.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-6">
            {reasons.map(({ stat, label, desc }) => (
              <div key={label} className="flex h-full flex-col rounded-lg border border-[#e6e6e6] bg-white p-8">
                <span className="text-[48px] font-medium leading-none text-[#111]">{stat}</span>
                <h3 className="mt-4 text-[18px] font-medium text-[#111]">{label}</h3>
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
              Ready to design your architecture?
            </h2>
            <p className="m-0 text-[18px] font-light leading-[1.6] text-white/70">
              Book a free 30-minute call. We&apos;ll review your current setup and outline a path
              forward — no obligation.
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
