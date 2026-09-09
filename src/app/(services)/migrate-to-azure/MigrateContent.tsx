"use client";

import { motion } from "framer-motion";
import {
  CloudUpload, Workflow, Database, Monitor, Compass, RefreshCw, Plug, GitBranch,
  DollarSign, Layers, TrendingUp, Activity, Rocket, ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { CONTAINER, Eyebrow, PrimaryButton, SecondaryButton } from "@/app/components/partials/services/ServiceUI";

/* ── content ── */
const modernization: { title: string; desc: string; icon: LucideIcon }[] = [
  { title: "Cloud Migration", desc: "Develop a comprehensive migration path appropriate for your business realm.", icon: CloudUpload },
  { title: "Desktop to Web Application Migration", desc: "The capabilities of desktop apps aren't enough to fulfill modern demands.", icon: Monitor },
  { title: "Cloud Strategy", desc: "Eliminate hidden costs, reduce technical debt, and increase the efficiency of your cloud infrastructure.", icon: Compass },
  { title: "Software Re-engineering", desc: "Reorganize the software, optimize the architecture, and add new features to your current system.", icon: RefreshCw },
  { title: "API Integrations", desc: "Whether it's on-premises or cloud platforms, solutions interoperability is crucial for businesses.", icon: Plug },
  { title: "CI/CD Strategy & Setup", desc: "Plan ahead and keep track of remaining time off with real-time updates.", icon: GitBranch },
];

const pillars: { title: string; headline: string; body: string; color: string; details: string[]; icon: LucideIcon }[] = [
  {
    title: "On-Premises to Azure",
    headline: "Move your data centre to Azure.",
    body: "Move physical servers, VMs, and databases from your data centre to Azure with Azure Migrate — minimal disruption, maximum speed.",
    color: "#0078D4",
    icon: CloudUpload,
    details: ["Azure Migrate assessment & discovery", "Lift-and-shift or replatform VMs", "Minimal-downtime cutover windows", "Post-migration right-sizing"],
  },
  {
    title: "AWS / GCP to Azure",
    headline: "Cross-cloud, handled end-to-end.",
    body: "Compute, storage, networking, and managed services re-mapped to their Azure equivalents with full data integrity.",
    color: "#2563EB",
    icon: Workflow,
    details: ["Service-to-service equivalency mapping", "Storage & network migration", "Managed service re-platforming", "Full data integrity checks"],
  },
  {
    title: "Database Migration",
    headline: "Zero data loss, full schema fidelity.",
    body: "SQL Server, Oracle, MySQL, PostgreSQL — migrated to Azure SQL, Cosmos DB, or Azure Database for PostgreSQL with schema conversion.",
    color: "#0EA5E9",
    icon: Database,
    details: ["Schema conversion & validation", "Azure SQL / Cosmos DB / PostgreSQL targets", "Zero data loss cutover", "Performance benchmarking"],
  },
];

const benefits: { tag: string; title: string; desc: string; icon: LucideIcon }[] = [
  { tag: "Cost Management", title: "Financial Flexibility", desc: "Move from capital expenses to operational expenses, paying only for the resources and services you use.", icon: DollarSign },
  { tag: "Cloud", title: "Partial or Full Migration", desc: "Migrate specific applications or entire workloads to the cloud or combine on-prem, private and public cloud resources in a hybrid cloud.", icon: Layers },
  { tag: "Scalability", title: "Scalability & Elasticity", desc: "Start small and scale up resources to meet demand, or scale down when demand decreases as your business needs evolve.", icon: TrendingUp },
  { tag: "High Availability", title: "High Availability", desc: "Azure provides a highly available cloud environment with uptime guarantees (SLAs) depending on the service.", icon: Activity },
  { tag: "Time-to-Market", title: "Faster Time-to-Market", desc: "Leverage Microsoft's newest tools and features to accelerate innovation, launch new products or services, and enhance offerings for your customers faster.", icon: Rocket },
  { tag: "Reliability", title: "Reliability", desc: "Azure's global reliable and resilient infrastructure lets systems recover from failures automatically, ensuring applications continue running even if a region experiences issues.", icon: ShieldCheck },
];

const faqs = [
  { q: "How long does a migration take?", a: "Timelines vary by estate size. A typical mid-market migration (50–200 workloads) completes in 8–16 weeks. We provide a firm schedule after the Discovery phase." },
  { q: "Will my applications need to be rewritten?", a: "Most workloads can be rehosted or replatformed with no code changes. Where refactoring adds clear value (cost, performance, scalability), we recommend it — but it is never mandatory." },
  { q: "What about compliance and data residency?", a: "Azure offers data residency in 60+ regions. We configure Azure Policy, Microsoft Defender, and regulatory compliance blueprints to meet GDPR, ISO 27001, SOC 2, and more." },
  { q: "Do you provide support after the migration?", a: "Yes. We offer Managed Services post-migration — from 8×5 monitoring up to 24×7 NOC support — so you never face Azure alone." },
];

function Check({ color }: { color?: string }) {
  return (
    <svg
      className="h-4 w-4 shrink-0"
      style={{ color: color ?? "#2563EB" }}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function FadeIn({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

export default function MigrateContent() {
  return (
    <div className="font-switzer">

      {/* ── Hero ── */}
      <div className="hero-bg-blue">
        <div className={`${CONTAINER} pb-12 pt-32 lg:pt-28`}>
          <div className="mb-6"><Eyebrow>Migrate to Azure</Eyebrow></div>
          <h1 className="m-0 max-w-3xl text-[40px] font-medium leading-[1.05] text-[#111] sm:text-[52px] lg:text-[64px]">
            Azure Migration Services
          </h1>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton href="/schedule-call">Schedule a free assessment</PrimaryButton>
            <SecondaryButton href="/solutions">View all solutions</SecondaryButton>
          </div>
        </div>

        {/* Azure-blue divider — full viewport width */}
        <hr className="divider-blue m-0 h-1 w-full border-0" />
      </div>

      {/* ── Legacy app modernization ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} py-20 lg:py-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>Migrate to Azure</Eyebrow></div>
            <h2 className="m-0 max-w-[560px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              Azure Migration Services
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
            {modernization.map(({ title, desc, icon: Icon }, i) => (
              <FadeIn key={title} className="h-full">
                <article className="group flex h-full flex-col rounded-lg border border-[#e6e6e6] bg-white p-6 transition-[border-color,transform] duration-200 hover:border-[#111827]/25 hover:-translate-y-0.5">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EFF5FF]">
                      <Icon className="h-5 w-5 text-[#2563EB]" strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <span className="text-[13px] font-light text-[#9ca3af]">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="m-0 text-[20px] font-medium leading-[1.25] text-[#111] lg:text-[22px]">{title}</h3>
                  <p className="mt-2 text-[16px] font-normal leading-[1.5] text-[#111]">{desc}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Migration types ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-16">
            <div className="mb-4"><Eyebrow>Migration types</Eyebrow></div>
            <h2 className="m-0 max-w-[560px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              We migrate from anywhere to Azure.
            </h2>
          </div>

          <div className="flex flex-col">
            {pillars.map(({ title, headline, body, color, details, icon: Icon }, i) => (
              <motion.div
                key={title}
                className={`grid grid-cols-1 gap-8 py-14 lg:grid-cols-2 lg:gap-16 ${i !== 0 ? "border-t border-[#ECECEC]" : ""}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                viewport={{ once: true, margin: "-80px" }}
              >
                {/* Left — pitch */}
                <div className="flex flex-col justify-center">
                  <div className="mb-5 flex items-center gap-3">
                    <Icon className="h-6 w-6 shrink-0" style={{ color }} strokeWidth={1.5} aria-hidden="true" />
                    <div>
                      <p className="m-0 text-[15px] font-semibold leading-[1.2] text-[#111]">{title}</p>
                      <p className="m-0 text-[12px] font-medium uppercase tracking-[0.1em] text-[#9ca3af]">Migration types</p>
                    </div>
                  </div>
                  <h3 className="m-0 max-w-[440px] text-[26px] font-medium leading-[1.15] text-[#111] md:text-[32px]">
                    {headline}
                  </h3>
                  <p className="mt-4 max-w-[440px] text-[16px] font-normal leading-[1.6] text-[#6B7280]">{body}</p>
                </div>

                {/* Right — feature card */}
                <div className="flex h-full flex-col rounded-2xl border border-[#ECECEC] bg-[#FAFAF8] p-8">
                  <div>
                    <p className="m-0 text-[15px] font-semibold leading-[1.2] text-[#111]">{title}</p>
                    <p className="m-0 text-[12px] font-medium uppercase tracking-[0.1em] text-[#9ca3af]">What&apos;s included</p>
                  </div>
                  <ul className="my-6 flex flex-1 flex-col gap-3">
                    {details.map((d) => (
                      <li key={d} className="flex items-center gap-2.5 text-[15px] font-normal leading-[1.4] text-[#111]">
                        <Check color={color} />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Azure ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="flex flex-col gap-4 rounded-lg bg-[#111] p-8 lg:p-10">
              <Eyebrow><span className="text-white/50">Why migrate</span></Eyebrow>
              <p className="m-0 text-[18px] font-light leading-[1.6] text-white/90">
                Microsoft Azure provides a flexible, scalable and secure cloud platform that lets
                organisations run critical business applications and manage data efficiently and
                securely from anywhere.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-lg border border-[#e6e6e6] bg-white p-8 lg:p-10">
              <Eyebrow>What it unlocks</Eyebrow>
              <p className="m-0 text-[18px] font-light leading-[1.6] text-[#111]">
                By migrating to Azure, your software organisation can become innovative, scalable,
                commercially successful, and secure in the long term.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>Why Azure</Eyebrow></div>
            <h2 className="m-0 max-w-[560px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              Benefits of migrating to Azure.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {benefits.map(({ tag, title, desc, icon: Icon }) => (
              <FadeIn key={title} className="h-full">
                <div className="flex h-full flex-col rounded-lg border border-[#e6e6e6] bg-white p-6">
                  <span className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EFF5FF]">
                    <Icon className="h-5 w-5 text-[#2563EB]" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#9ca3af]">{tag}</span>
                  <h3 className="mt-1.5 text-[20px] font-medium leading-[1.25] text-[#111]">{title}</h3>
                  <p className="mt-2 text-[15px] font-normal leading-[1.5] text-[#6b7280]">{desc}</p>
                </div>
              </FadeIn>
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
