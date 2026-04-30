import Image from "next/image";
import { Link } from "react-transition-progress/next";
import { AzureHero } from "@/ImagePath";
import ProcessTimeline from "@/app/components/partials/services/ProcessTimeline";
import ServiceFooter from "@/app/components/partials/services/ServiceFooter";

const features = [
  {
    title: "Azure Landing Zone",
    body: "Enterprise-grade cloud foundation in Azure — networking, security, RBAC, Key Vault, and storage tiers — provisioned and compliant before your first byte of data arrives.",
    decoration: "top-left" as const,
  },
  {
    title: "Data Extraction & Ingestion",
    body: "Connect and offload data from any source — databases, APIs, flat files, or event streams — into your Azure Data Lake with automated, monitored pipelines.",
  },
  {
    title: "Data Transformation & Cleaning",
    body: "Bronze → Silver → Gold layer pipelines that normalize, deduplicate, validate, and enrich your raw data before it reaches any analytics or ML workload.",
  },
  {
    title: "Data Science & Analysis",
    body: "Surface patterns, trends, and predictions from your cleaned data using Azure Synapse Analytics and Databricks — turning historical records into forward-looking insight.",
  },
  {
    title: "Data Visualisation",
    body: "Power BI reports and dashboards that translate complex datasets into clear, actionable views — built with your business users, not just your data team.",
  },
  {
    title: "AI & Machine Learning",
    body: "Embed predictive models and real-time intelligence into your data workflows — automate decisions, detect anomalies, and respond to events as they happen.",
    decoration: "bottom-right" as const,
  },
];

const processSteps = [
  {
    step: "01",
    heading: "Discovery & Data Audit",
    body: "We map your data sources, understand volumes, formats, and access patterns — then design the target architecture before a single resource is provisioned.",
  },
  {
    step: "02",
    heading: "Azure Landing Zone Setup",
    body: "We provision the full foundation: networking, IAM, Key Vault, storage tiers, and compliance controls — your data platform starts secure from day one.",
  },
  {
    step: "03",
    heading: "Extraction & Pipeline Build",
    body: "We connect your sources, build ingestion pipelines, and land raw data in the bronze layer of your Data Lake — with alerting and monitoring in place.",
  },
  {
    step: "04",
    heading: "Transformation & Enrichment",
    body: "We build the silver and gold layer pipelines that clean, join, and enrich your data — making it ready for reporting, analytics, and machine learning.",
  },
  {
    step: "05",
    heading: "Visualisation & Validation",
    body: "We build Power BI reports and dashboards, then validate every metric with your business stakeholders before the platform is handed over.",
  },
  {
    step: "06",
    heading: "Handover, Training & Support",
    body: "Your team gets full ownership, thorough documentation, and access to our support desk — so you can scale the platform confidently without depending on us.",
  },
];

export default function DataLifecycleManagementPage() {
  return (
    <>
      <div className="bg-white">

        {/* ── Hero — keeps the AzureHero background image ── */}
        <section className="relative min-h-[85vh] overflow-hidden bg-white">
          {/* Background image with gradient fade */}
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 z-10"
              style={{
                background:
                  "linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.75) 50%, rgba(255,255,255,0.1) 100%), linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 25%)",
              }}
            />
            <Image
              src={AzureHero}
              alt=""
              fill
              className="object-cover object-[85%] sm:object-top opacity-60 sm:opacity-100"
              priority
              quality={100}
            />
          </div>

          {/* Hero content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-36 pb-20 min-h-[85vh] flex flex-col">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#e89a78] mb-4">
              Data Lifecycle Management
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#0a0e1a] leading-[1.05] max-w-2xl">
              Turn your data into a business asset
            </h1>
            <p className="mt-8 text-lg text-[#0a0e1a] max-w-[540px] font-normal leading-relaxed">
              We design and build end-to-end data platforms on Azure — from raw ingestion to clean analytics layers — so your organisation can act on data instead of just storing it.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="/schedule-call"
                className="bg-[#0a0e1a] text-white px-7 py-3.5 rounded-full text-base font-medium whitespace-nowrap hover:opacity-90 transition-opacity"
              >
                Schedule a free call
              </Link>
              <Link
                href="/schedule-call"
                aria-label="Schedule a free call"
                className="w-12 h-12 rounded-full bg-[#0a0e1a] flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </Link>
            </div>
            <p className="mt-auto pt-20 text-sm text-[#0a0e1a]/60 font-normal">
              Trusted by data-driven organisations across Europe — built on Microsoft Azure.
            </p>
          </div>
        </section>

        {/* ── Section A — What's included ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16">
          <div className="flex items-center gap-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
            <p className="text-xs uppercase tracking-wider text-[#1a1a1a] font-medium">
              What&apos;s included
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <p className="text-[#1a1d2e] text-base leading-relaxed max-w-[650px]">
              A complete data journey — from landing zone to live dashboard. We handle every layer of the stack so your team gets clean data, reliable pipelines, and insights they can act on from day one.
            </p>
            <Link
              href="/schedule-call"
              className="shrink-0 self-start inline-flex items-center bg-[#0a0a0a] hover:bg-[#1a1d2e] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors whitespace-nowrap"
            >
              Start your data journey
            </Link>
          </div>
        </section>

        {/* ── Section B — Feature cards ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-32">
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden bg-[#f0ece4] p-8 min-h-[280px] flex flex-col gap-4"
              >
                {feature.decoration === "top-left" && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src="/decorations/blob-orange-corner.svg"
                    width={220}
                    height={220}
                    alt=""
                    aria-hidden="true"
                    className="absolute top-0 left-0 pointer-events-none select-none"
                  />
                )}
                {feature.decoration === "bottom-right" && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src="/decorations/blob-sage-corner.svg"
                    width={220}
                    height={220}
                    alt=""
                    aria-hidden="true"
                    className="absolute bottom-0 right-0 pointer-events-none select-none"
                  />
                )}
                <h3 className="relative text-xl font-semibold text-[#1a1d2e] leading-snug z-10">
                  {feature.title}
                </h3>
                <p className="relative text-[#1a1a1a] text-sm leading-relaxed z-10">
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Why DLM — two-column callout ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-[#0a0e1a] text-white rounded-xl px-10 py-12 flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
                <p className="text-xs uppercase tracking-wider text-white/50 font-medium">Why DLM?</p>
              </div>
              <p className="text-white/80 text-base leading-relaxed">
                Data is one of the most valuable elements of your organisation. It shows you what your situation was, what it is, and what it could be. DLM lets you make that data more accessible — to serve customers better, create business opportunities, and power decisions with real intelligence: from Data Science and Machine Learning through to real-time AI.
              </p>
            </div>
            <div className="bg-[#0a0e1a] text-white rounded-xl px-10 py-12 flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
                <p className="text-xs uppercase tracking-wider text-white/50 font-medium">For whom?</p>
              </div>
              <p className="text-white/80 text-base leading-relaxed">
                Data solutions work for any organisation in any sector — whether you have hundreds of records or billions. There is no minimum or maximum. Whether you are already on Azure, partly on-premises, or not yet in the cloud at all, we tailor the journey to where you are today and where you need to go.
              </p>
            </div>
          </div>
        </section>

        {/* ── Section C — How we work ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mt-20 py-20 md:py-32">
          <div className="flex items-center gap-2 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
            <p className="text-xs uppercase tracking-wider text-[#1a1a1a] font-medium">
              How we work
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <h2 className="text-4xl md:text-5xl font-normal text-[#1a1d2e] max-w-[900px] leading-tight">
              A structured journey from raw data to reliable insight — without disrupting your operations
            </h2>
            <Link
              href="/schedule-call"
              className="shrink-0 self-start lg:self-end inline-flex items-center bg-[#0a0a0a] hover:bg-[#1a1d2e] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors whitespace-nowrap"
            >
              Schedule a free call
            </Link>
          </div>
          <ProcessTimeline steps={processSteps} />
        </section>

      </div>

      <ServiceFooter />
    </>
  );
}
