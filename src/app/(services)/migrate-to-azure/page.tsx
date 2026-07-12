import type { Metadata } from "next";
import { CloudUpload, Workflow, Database, type LucideIcon } from "lucide-react";
import { CONTAINER, Eyebrow, PrimaryButton, SecondaryButton } from "@/app/components/partials/services/ServiceUI";

export const metadata: Metadata = {
  title: "Migrate to Azure",
  description:
    "We migrate your workloads, databases, and infrastructure to Azure — on time, on budget, and with zero unplanned downtime. Every stage handled end-to-end.",
};

/* ── content ── */
const pillars: { title: string; desc: string; icon: LucideIcon }[] = [
  { title: "On-Premises to Azure", desc: "Move physical servers, VMs, and databases from your data centre to Azure with Azure Migrate — minimal disruption, maximum speed.", icon: CloudUpload },
  { title: "AWS / GCP to Azure", desc: "Cross-cloud migrations handled end-to-end — compute, storage, networking, and managed services re-mapped to their Azure equivalents with full data integrity.", icon: Workflow },
  { title: "Database Migration", desc: "SQL Server, Oracle, MySQL, PostgreSQL — migrated to Azure SQL, Cosmos DB, or Azure Database for PostgreSQL with schema conversion and zero data loss.", icon: Database },
];

const steps = [
  { number: "01", title: "Discovery & Assessment", desc: "We map your entire estate — workloads, dependencies, data, and integrations — and produce a migration readiness report with a risk-scored inventory of every asset." },
  { number: "02", title: "Migration Strategy", desc: "We select the right strategy for each workload: Rehost, Replatform, Refactor, Rearchitect, or Retire. No one-size-fits-all approach — every decision is justified." },
  { number: "03", title: "Landing Zone Setup", desc: "We build a secure, governance-ready Azure Landing Zone following Microsoft CAF best practices — networking, identity, policies, and cost management configured from day one." },
  { number: "04", title: "Migration & Cutover", desc: "We execute migrations in waves with parallel-run validation, automated rollback plans, and zero-downtime cutovers — keeping your business running throughout." },
  { number: "05", title: "Optimise & Handover", desc: "Post-migration we right-size resources, implement monitoring and alerting, and hand over full documentation and runbooks so your team is confident on day one." },
];

const reasons = [
  { stat: "99.99%", label: "Azure SLA uptime", desc: "Global redundancy and geo-replication keep your workloads available." },
  { stat: "35%", label: "Average cost saving", desc: "Azure Hybrid Benefit, Reserved Instances, and right-sizing deliver measurable savings." },
  { stat: "0 h", label: "Target downtime", desc: "We plan every cutover for zero business impact using live migration techniques." },
];

const faqs = [
  { q: "How long does a migration take?", a: "Timelines vary by estate size. A typical mid-market migration (50–200 workloads) completes in 8–16 weeks. We provide a firm schedule after the Discovery phase." },
  { q: "Will my applications need to be rewritten?", a: "Most workloads can be rehosted or replatformed with no code changes. Where refactoring adds clear value (cost, performance, scalability), we recommend it — but it is never mandatory." },
  { q: "What about compliance and data residency?", a: "Azure offers data residency in 60+ regions. We configure Azure Policy, Microsoft Defender, and regulatory compliance blueprints to meet GDPR, ISO 27001, SOC 2, and more." },
  { q: "Do you provide support after the migration?", a: "Yes. We offer Managed Services post-migration — from 8×5 monitoring up to 24×7 NOC support — so you never face Azure alone." },
];

const migration: { label: string; state: "done" | "active" | "pending"; progress?: number }[] = [
  { label: "Discovery complete", state: "done" },
  { label: "Landing Zone deployed", state: "done" },
  { label: "Wave 1 — 18 / 43 workloads", state: "active", progress: 42 },
  { label: "Wave 2 — pending", state: "pending" },
  { label: "Cutover — scheduled", state: "pending" },
];

export default function MigrateToAzurePage() {
  return (
    <div className="font-switzer">

      {/* ── Hero ── */}
      <div className="industries-hero-bg">
        <div className={`${CONTAINER} pb-12 pt-32 lg:pt-28`}>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">

            {/* Left */}
            <div className="flex-1">
              <div className="mb-6"><Eyebrow>Cloud Migration</Eyebrow></div>
              <h1 className="m-0 text-[40px] font-medium leading-[1.05] text-[#111] sm:text-[52px] lg:text-[64px]">
                Move to Azure without the risk.
              </h1>
              <p className="mt-6 max-w-[520px] text-[18px] font-light leading-[1.6] text-[#111]">
                We migrate your workloads, databases, and infrastructure to Azure — on time, on
                budget, and with zero unplanned downtime. Every stage handled end-to-end.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton href="/schedule-call">Schedule a free assessment</PrimaryButton>
                <SecondaryButton href="/solutions">View all solutions</SecondaryButton>
              </div>
            </div>

            {/* Right — migration progress dashboard */}
            <div className="w-full lg:max-w-[480px] lg:flex-1">
              <div className="flex flex-col gap-5 rounded-2xl border border-[#e6e6e6] bg-white p-6">
                <div className="flex items-center justify-between">
                  <Eyebrow>Migration Progress</Eyebrow>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#059669]" />
                    <span className="text-[11px] font-medium text-[#059669]">Active</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {migration.map((row) => (
                    <div key={row.label} className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-3">
                        <span
                          className={
                            "h-3 w-3 shrink-0 rounded-full " +
                            (row.state === "done"
                              ? "bg-[#111]"
                              : row.state === "active"
                                ? "border-2 border-[#111]"
                                : "bg-[#e6e6e6]")
                          }
                        />
                        <span className={`text-[13px] ${row.state === "pending" ? "font-light text-[#9ca3af]" : "font-normal text-[#111]"}`}>
                          {row.label}
                        </span>
                      </div>
                      {row.progress !== undefined && (
                        <div className="ml-6 flex items-center gap-2">
                          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#eee]">
                            <div className="h-full rounded-full bg-[#111]" style={{ width: `${row.progress}%` }} />
                          </div>
                          <span className="text-[11px] font-medium text-[#111]">{row.progress}%</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 border-t border-[#eee] pt-4">
                  {["Azure Migrate", "CAF", "Terraform", "Azure Policy"].map((t) => (
                    <span key={t} className="rounded-full border border-[#e6e6e6] px-2.5 py-1 text-[11px] font-medium text-[#111]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* multicolour divider — full viewport width */}
        <hr className="linegrad-divider m-0 h-1 w-full border-0" />
      </div>

      {/* ── Migration types ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} py-20 lg:py-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>Migration types</Eyebrow></div>
            <h2 className="m-0 max-w-[560px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              We migrate from anywhere to Azure.
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

      {/* ── How it works ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>How it works</Eyebrow></div>
            <h2 className="m-0 text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              A proven five-step migration process.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {steps.map(({ number, title, desc }) => (
              <div key={number} className="flex h-full flex-col rounded-lg border border-[#e6e6e6] bg-white p-6">
                <span className="text-[34px] font-light leading-none text-[#e6e6e6]">{number}</span>
                <h3 className="mt-4 text-[20px] font-medium leading-[1.25] text-[#111]">{title}</h3>
                <p className="mt-2 text-[16px] font-normal leading-[1.5] text-[#111]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>Why Azure</Eyebrow></div>
            <h2 className="m-0 text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              The numbers speak for themselves.
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

      {/* ── FAQ ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>Common questions</Eyebrow></div>
            <h2 className="m-0 text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              Frequently asked questions.
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
              Ready to start your migration?
            </h2>
            <p className="m-0 text-[18px] font-light leading-[1.6] text-white/70">
              Book a free 30-minute assessment. We&apos;ll review your current estate and give you
              a clear migration roadmap — no obligation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton href="/schedule-call" dark>Schedule a free assessment</PrimaryButton>
            <SecondaryButton href="/solutions" onDark>All solutions</SecondaryButton>
          </div>
        </div>
      </section>

    </div>
  );
}
