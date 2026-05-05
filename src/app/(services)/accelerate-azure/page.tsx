import { Link } from "react-transition-progress/next";
import ProcessTimeline from "@/app/components/partials/services/ProcessTimeline";
import ServiceFooter from "@/app/components/partials/services/ServiceFooter";

const features = [
  {
    title: "Cloud Migration & Lift-Shift",
    body: "We move your workloads to Azure with zero downtime — assessing your environment first, then executing a phased migration that keeps your business running throughout.",
    decoration: "top-left" as const,
  },
  {
    title: "IaaS to PaaS Transition",
    body: "Stop managing infrastructure. We migrate your VMs and legacy services to Azure-native PaaS — reducing operational overhead, improving reliability, and cutting costs.",
  },
  {
    title: "AKS & Container Orchestration",
    body: "We design and deploy production-grade AKS environments with our managed landing zone — covering governance, security, autoscaling, and full-stack monitoring out of the box.",
  },
  {
    title: "Azure DevOps & CI/CD",
    body: "Automated pipelines, infrastructure as code, and GitOps workflows that let your team ship faster with confidence — and roll back instantly if anything goes wrong.",
  },
  {
    title: "Application Modernization",
    body: "We scan your codebase for cloud-readiness, security gaps, and obsolete dependencies — then help you refactor towards cloud-native architecture step by step.",
  },
  {
    title: "Cost Optimisation & FinOps",
    body: "Continuous analysis of your Azure spend with actionable recommendations — reserved instances, right-sizing, auto-shutdown policies, and budget alerts from day one.",
    decoration: "bottom-right" as const,
  },
];

const processSteps = [
  {
    step: "01",
    heading: "Discovery & Assessment",
    body: "We audit your current environment — infrastructure, applications, dependencies, and costs. You get a clear readiness report with a prioritised modernisation roadmap before any work begins.",
  },
  {
    step: "02",
    heading: "Architecture Design",
    body: "We design the target Azure architecture for your workloads — choosing the right services, defining the network topology, and aligning with your security and compliance requirements.",
  },
  {
    step: "03",
    heading: "Pilot Migration",
    body: "We start with a low-risk workload to validate the approach, tooling, and runbook. Learnings from the pilot are applied before the full migration begins.",
  },
  {
    step: "04",
    heading: "Full Migration & Modernisation",
    body: "Phased migration of all workloads with continuous testing. Where relevant, we refactor applications to use managed Azure services — reducing technical debt as we migrate.",
  },
  {
    step: "05",
    heading: "Optimisation & Handover",
    body: "Post-migration tuning of performance, costs, and security posture. We configure monitoring dashboards, alerting, and documentation so your team has full visibility from day one.",
  },
  {
    step: "06",
    heading: "Ongoing Support",
    body: "We stay engaged after go-live — managing incidents, advising on Azure updates, and continuously optimising your environment as your business evolves.",
  },
];

export default function AccelerateAzurePage() {
  return (
    <>
      <div
        className="bg-[#f4ebe8] min-h-screen"
        style={{
          backgroundImage: "url('/img/noise-background.jpg')",
          backgroundBlendMode: "multiply",
          backgroundSize: "300px 300px",
        }}
      >
        {/* ── Hero ── */}
        <section className="relative min-h-[85vh] overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20 min-h-[85vh] flex flex-col">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-[#0a0e1a] leading-[1.05] max-w-2xl">
              Accelerate with Azure
            </h1>
            <p className="mt-8 text-lg text-[#0a0e1a] max-w-[560px] font-normal">
              From legacy infrastructure to cloud-native Azure — we migrate, modernise, and optimise your environment so you can focus on building product, not managing servers.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="/get-in-touch"
                className="bg-[#0a0e1a] text-white px-7 py-3.5 rounded-full text-base font-medium whitespace-nowrap hover:opacity-90 transition-opacity"
              >
                Book a cloud assessment
              </Link>
              <Link
                href="/get-in-touch"
                aria-label="Get started"
                className="w-12 h-12 rounded-full bg-[#0a0e1a] flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </Link>
            </div>
            <p className="mt-auto pt-20 text-base text-[#0a0e1a] font-normal">
              Azure migrations completed — on time, on budget, zero downtime.
            </p>
          </div>
        </section>

        {/* ── Section A — What's included ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16">
          <div className="flex items-center gap-2 mb-8">
            <p className="text-xs uppercase tracking-wider text-[#6b6b6b] font-medium">
              HERE&apos;S WHAT&apos;S INCLUDED
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <p className="text-[#1a1d2e] text-base leading-relaxed max-w-[650px]">
              We don&apos;t just move your workloads — we improve them. Every migration is an opportunity to reduce complexity, close security gaps, and build a foundation that scales with your business.
            </p>
            <Link
              href="/get-in-touch"
              className="shrink-0 self-start inline-flex items-center bg-[#0a0a0a] hover:bg-[#1a1d2e] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors whitespace-nowrap"
            >
              Start your migration
            </Link>
          </div>
        </section>

        {/* ── Section B — Feature cards ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-32">
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden bg-[#ece8e0] p-8 min-h-[280px] flex flex-col gap-4"
              >
                {feature.decoration === "top-left" && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src="/decorations/blob-orange-corner.svg" width={220} height={220} alt="" aria-hidden="true" className="absolute top-0 left-0 pointer-events-none select-none" />
                )}
                {feature.decoration === "bottom-right" && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src="/decorations/blob-sage-corner.svg" width={220} height={220} alt="" aria-hidden="true" className="absolute bottom-0 right-0 pointer-events-none select-none" />
                )}
                <h3 className="relative text-xl font-semibold text-[#1a1d2e] leading-snug z-10">{feature.title}</h3>
                <p className="relative text-[#6b6b6b] text-sm leading-relaxed z-10">{feature.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section C — How we work ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mt-40 py-20 md:py-32">
          <div className="flex items-center gap-2 mb-10">
            <p className="text-xs uppercase tracking-wider text-[#6b6b6b] font-medium">HOW WE WORK</p>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <h2 className="text-4xl md:text-5xl font-normal text-[#1a1d2e] max-w-[900px] leading-tight">
              We migrate with precision — every phase validated before the next one starts
            </h2>
            <Link
              href="/get-in-touch"
              className="shrink-0 self-start lg:self-end inline-flex items-center bg-[#0a0a0a] hover:bg-[#1a1d2e] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors whitespace-nowrap"
            >
              Grow with us
            </Link>
          </div>
          <ProcessTimeline steps={processSteps} />
        </section>
      </div>

      <ServiceFooter />
    </>
  );
}
