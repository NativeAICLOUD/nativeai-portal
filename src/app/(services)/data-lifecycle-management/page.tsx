import type { Metadata } from "next";
import { CONTAINER, Eyebrow, PrimaryButton, SecondaryButton } from "@/app/components/partials/services/ServiceUI";

export const metadata: Metadata = {
  title: "Data Lifecycle Management",
  description:
    "We design and build end-to-end data platforms on Azure — from raw ingestion to clean analytics layers — so your organisation can act on data instead of just storing it.",
};

/* ── content ── */
const features = [
  { num: "01", title: "Azure Landing Zone", body: "Enterprise-grade cloud foundation — networking, security, RBAC, Key Vault, and storage tiers provisioned and compliant before your first byte arrives." },
  { num: "02", title: "Data Extraction & Ingestion", body: "Connect any source — databases, APIs, flat files, event streams — into your Azure Data Lake with automated, monitored pipelines." },
  { num: "03", title: "Transformation & Cleaning", body: "Bronze → Silver → Gold pipelines that normalise, deduplicate, validate, and enrich raw data before it reaches any analytics or ML workload." },
  { num: "04", title: "Data Science & Analysis", body: "Surface patterns, trends, and predictions using Azure Synapse Analytics and Databricks — turning historical records into forward-looking insight." },
  { num: "05", title: "Data Visualisation", body: "Power BI reports and dashboards that translate complex datasets into clear, actionable views — built with your business users, not just your data team." },
  { num: "06", title: "AI & Machine Learning", body: "Embed predictive models and real-time intelligence into your data workflows — automate decisions, detect anomalies, and respond to events as they happen." },
];

const processSteps = [
  { step: "01", heading: "Discovery & Data Audit", body: "We map your data sources, understand volumes, formats, and access patterns — then design the target architecture before a single resource is provisioned." },
  { step: "02", heading: "Azure Landing Zone Setup", body: "We provision the full foundation: networking, IAM, Key Vault, storage tiers, and compliance controls — your data platform starts secure from day one." },
  { step: "03", heading: "Extraction & Pipeline Build", body: "We connect your sources, build ingestion pipelines, and land raw data in the bronze layer of your Data Lake — with alerting and monitoring in place." },
  { step: "04", heading: "Transformation & Enrichment", body: "We build silver and gold layer pipelines that clean, join, and enrich your data — making it ready for reporting, analytics, and machine learning." },
  { step: "05", heading: "Visualisation & Validation", body: "We build Power BI reports and dashboards, then validate every metric with your business stakeholders before the platform is handed over." },
  { step: "06", heading: "Handover, Training & Support", body: "Your team gets full ownership, thorough documentation, and access to our support desk — so you can scale the platform confidently without depending on us." },
];

const techStack = ["Azure Data Lake", "Data Factory", "Synapse Analytics", "Databricks", "Power BI", "Azure ML", "Key Vault"];

export default function DataLifecycleManagementPage() {
  return (
    <div className="font-switzer">

      {/* ── Hero ── */}
      <div className="hero-bg-blue">
        <div className={`${CONTAINER} pb-12 pt-32 lg:pt-28`}>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">

            {/* Left */}
            <div className="flex-1">
              <div className="mb-6"><Eyebrow>Data Lifecycle · Azure · Power BI</Eyebrow></div>
              <h1 className="m-0 text-[40px] font-medium leading-[1.05] text-[#111] sm:text-[52px] lg:text-[64px]">
                Raw data to live insight on Azure.
              </h1>
              <p className="mt-6 max-w-[520px] text-[18px] font-light leading-[1.6] text-[#111]">
                We design and build end-to-end data platforms — from raw ingestion to clean
                analytics layers — so your organisation can act on data instead of just storing it.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton href="/schedule-call">Start your data journey</PrimaryButton>
                <SecondaryButton href="/solutions">View all solutions</SecondaryButton>
              </div>
            </div>

          </div>
        </div>

        {/* blue divider — full viewport width */}
        <hr className="divider-blue m-0 h-1 w-full border-0" />
      </div>

      {/* ── Tech strip ── */}
      <div className="border-b border-[#eee] bg-[#fafafa]">
        <div className={`${CONTAINER} flex flex-wrap items-center gap-x-8 gap-y-3 py-5`}>
          <span className="shrink-0 text-[11px] font-medium uppercase tracking-[0.14em] text-[#9ca3af]">Built on</span>
          {techStack.map((t) => (
            <span key={t} className="whitespace-nowrap text-[15px] font-normal text-[#6b7280]">{t}</span>
          ))}
        </div>
      </div>

      {/* ── What's included ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} py-20 lg:py-24`}>
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4"><Eyebrow>What&apos;s included</Eyebrow></div>
              <h2 className="m-0 max-w-[520px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
                The full data stack, end to end.
              </h2>
            </div>
            <PrimaryButton href="/schedule-call">Start your data journey</PrimaryButton>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {features.map(({ num, title, body }) => (
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

      {/* ── Why DLM / For whom ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="flex flex-col gap-4 rounded-lg bg-[#111] p-8 lg:p-10">
              <Eyebrow><span className="text-white/50">Why DLM?</span></Eyebrow>
              <p className="m-0 text-[18px] font-light leading-[1.6] text-white/90">
                Data is one of the most valuable elements of your organisation. It shows you what
                your situation was, what it is, and what it could be — and DLM lets you make it
                accessible to serve customers better, create business opportunities, and power
                decisions with real intelligence.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-lg border border-[#e6e6e6] bg-white p-8 lg:p-10">
              <Eyebrow>For whom?</Eyebrow>
              <p className="m-0 text-[18px] font-light leading-[1.6] text-[#111]">
                Any organisation in any sector — whether you have hundreds of records or billions.
                Whether you are already on Azure, partly on-premises, or not yet in the cloud at
                all, we tailor the journey to where you are today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-4"><Eyebrow>How we work</Eyebrow></div>
              <h2 className="m-0 max-w-[720px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
                From raw data to reliable insight — without disruption.
              </h2>
            </div>
            <PrimaryButton href="/schedule-call">Schedule a free call</PrimaryButton>
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

      {/* ── CTA ── */}
      <section className="bg-[#0a0e1a]">
        <div className={`${CONTAINER} flex flex-col gap-10 py-20 md:flex-row md:items-center md:justify-between`}>
          <div className="flex max-w-xl flex-col gap-4">
            <h2 className="m-0 text-[28px] font-medium leading-[1.1] text-white md:text-[44px]">
              Ready to put your data to work?
            </h2>
            <p className="m-0 text-[18px] font-light leading-[1.6] text-white/70">
              Book a free call. We&apos;ll review your data sources and map out a platform that
              turns raw records into reliable insight — no obligation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton href="/schedule-call" dark>Start your data journey</PrimaryButton>
            <SecondaryButton href="/solutions" onDark>All solutions</SecondaryButton>
          </div>
        </div>
      </section>

    </div>
  );
}
