import { Link } from "react-transition-progress/next";
import ProcessTimeline from "@/app/components/partials/services/ProcessTimeline";
import ServiceFooter from "@/app/components/partials/services/ServiceFooter";

const features = [
  {
    title: "24/7 Monitoring & Alerting",
    body: "Round-the-clock visibility across your entire Azure environment — infrastructure, applications, and costs — with intelligent alerting that catches problems before your users do.",
    decoration: "top-left" as const,
  },
  {
    title: "Incident Response",
    body: "When something breaks, we're already on it. Defined SLAs, escalation paths, and runbooks mean incidents are contained and resolved fast — with a full post-mortem every time.",
  },
  {
    title: "Azure Cost Management",
    body: "We actively manage your Azure spend — right-sizing resources, eliminating waste, and providing monthly FinOps reports so you always know what you're paying for and why.",
  },
  {
    title: "Security & Compliance",
    body: "Continuous security posture management, patch management, and compliance audits aligned to your industry standards — so your environment stays hardened without slowing down your team.",
  },
  {
    title: "Performance Optimisation",
    body: "Ongoing tuning of your applications and infrastructure — database query optimisation, caching strategies, autoscaling policies, and CDN configuration that keeps response times fast.",
  },
  {
    title: "Customer Portal Access",
    body: "Every managed services client gets access to our portal — real-time dashboards, incident history, cost breakdowns, and direct access to your dedicated Azure engineers.",
    decoration: "bottom-right" as const,
  },
];

const processSteps = [
  {
    step: "01",
    heading: "Onboarding & Discovery",
    body: "We audit your existing Azure environment, document the architecture, and identify risks, optimisation opportunities, and monitoring gaps before we take over management.",
  },
  {
    step: "02",
    heading: "SLA & Service Plan",
    body: "We agree on the right service tier for your needs — from advisory-level support to fully managed operations — with clear SLAs, escalation paths, and communication cadences.",
  },
  {
    step: "03",
    heading: "Monitoring Setup",
    body: "We instrument your environment with Azure Monitor, Application Insights, and custom dashboards. Alerting thresholds are tuned to your workloads so you only hear from us when it matters.",
  },
  {
    step: "04",
    heading: "Active Management",
    body: "From this point we own the environment — patching, scaling, incident response, and cost control. You get a monthly report covering health, spend, incidents, and recommendations.",
  },
  {
    step: "05",
    heading: "Continuous Improvement",
    body: "Every quarter we review the environment against your evolving business goals — proposing architectural improvements, Azure service upgrades, and cost reduction opportunities.",
  },
  {
    step: "06",
    heading: "Knowledge Transfer",
    body: "Everything we do is documented and shared. Your team always has full visibility and can take over any part of the operation at any time — we work transparently, not as a black box.",
  },
];

export default function ManagedServicesPage() {
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
              Managed Services
            </h1>
            <p className="mt-8 text-lg text-[#0a0e1a] max-w-[560px] font-normal">
              You focus on building product. We keep your Azure environment running — monitored, secured, optimised, and ready to scale — 24 hours a day, every day of the year.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="/get-in-touch"
                className="bg-[#0a0e1a] text-white px-7 py-3.5 rounded-full text-base font-medium whitespace-nowrap hover:opacity-90 transition-opacity"
              >
                Talk to an Azure engineer
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
              Your Azure environment — always up, always secure, always optimised.
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
              We take full ownership of your Azure operations — so your engineering team can stop context-switching between firefighting and feature work. Three service tiers, one dedicated team, full transparency.
            </p>
            <Link
              href="/get-in-touch"
              className="shrink-0 self-start inline-flex items-center bg-[#0a0a0a] hover:bg-[#1a1d2e] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors whitespace-nowrap"
            >
              View service plans
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
              We take over cleanly — full visibility, defined SLAs, and no black-box operations
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
