import type { Metadata } from "next";
import Link from "next/link";
import {
  Code2, Workflow, Sparkles, Database, Palette, CloudCog, Server,
  type LucideIcon,
} from "lucide-react";
import { CONTAINER, Eyebrow, SecondaryButton } from "@/app/components/partials/services/ServiceUI";

/* Page-scoped blue-concept primary button (matches the cloud-native-sd redesign) */
function BlueButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="ai-search-wrap inline-block transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none"
    >
      <span className="ai-search-inner flex items-center gap-2.5 px-6 py-3">
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
          <defs>
            <linearGradient id="cd-spark-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1e4fd6" />
            </linearGradient>
          </defs>
          <path fill="url(#cd-spark-grad)" d="M12 0c0 6.627-5.373 12-12 12 6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12Z" />
        </svg>
        <span className="text-[15px] font-medium text-[#111]">{children}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0 text-[#111]">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}

export const metadata: Metadata = {
  title: "Custom Development",
  description:
    "From MVPs to full-scale platforms — reliable software that grows with your business. Fast to launch, easy to scale, built to last.",
};

/* ── content ── */
const capabilities: { num: string; title: string; body: string; icon: LucideIcon }[] = [
  { num: "01", title: "Web & App Development", body: "We build web and mobile applications that perform smoothly, scale easily, and work perfectly across devices — from MVP to enterprise level.", icon: Code2 },
  { num: "02", title: "API Development & Integration", body: "We connect systems, automate data exchange, and make your tools talk to each other securely and efficiently.", icon: Workflow },
  { num: "03", title: "AI-Powered Features", body: "We integrate AI components — copilots, chatbots, recommendation engines, and data processing — directly into your product architecture.", icon: Sparkles },
  { num: "04", title: "Backend Engineering", body: "Reliable backends built for speed, data integrity, and stability — supporting both complex workflows and fast iteration.", icon: Database },
  { num: "05", title: "Frontend Development", body: "Modern, responsive, and pixel-perfect interfaces — built with React, Vue, Angular, or Blazor to match the design vision exactly.", icon: Palette },
  { num: "06", title: "Maintenance & DevOps", body: "We handle monitoring, updates, and optimisation to keep your product running smoothly — 24/7, with full visibility.", icon: CloudCog },
];

const processSteps = [
  { step: "01", heading: "Discovery & Scoping", body: "We start by understanding your business inside out — mapping requirements, constraints, and goals before writing a single line of code. Stakeholder interviews, workflow audits, and a clear project charter that both teams sign off on." },
  { step: "02", heading: "Architecture & Design", body: "System design with your team — cloud-native by default, scalable by intent. We choose the right stack for your use case, document the architecture, and get buy-in before the build starts. No surprises halfway through." },
  { step: "03", heading: "Iterative Build", body: "Agile delivery in two-week sprints with weekly demos. You see working software every step of the way, not a big reveal at the end. Scope can shift — we're built to absorb it without derailing the project." },
  { step: "04", heading: "Testing & QA", body: "Every feature is tested before it ships: automated unit and integration tests, manual QA, and performance benchmarks baked into the pipeline. Testing is part of development, not an afterthought." },
  { step: "05", heading: "Deployment", body: "Production deployment on Azure or AWS with zero-downtime releases, automated rollbacks, and monitoring from day one. Alerting, logging, and dashboards configured before go-live." },
  { step: "06", heading: "Support & Growth", body: "We don't disappear after launch. Continuous support, performance optimisation, and feature development as your product evolves. Most clients stay with us long past the initial build." },
];

const technologies: { title: string; headline: string; body: string; icon: LucideIcon; color: string; groups: { label: string; items: string[] }[] }[] = [
  {
    title: "Backend", headline: "Powering robust digital operations.",
    body: "APIs and services built with .NET, Node.js, and Python — engineered for security, reliability, and the throughput real products need.",
    icon: Server, color: "#2563EB",
    groups: [
      { label: "Frameworks", items: ["ASP.NET Core Web API", "ASP.NET Core SignalR", "ASP.NET Core MVC", "Node.js / Express", "FastAPI (Python)"] },
      { label: "Data stores", items: ["PostgreSQL", "SQL Server", "Redis", "Azure Blob Storage"] },
      { label: "Libraries", items: ["Entity Framework Core", "Swagger (OpenAPI)", "Serilog", "FluentValidation", "Polly", "MassTransit"] },
    ],
  },
  {
    title: "Frontend", headline: "Interfaces that feel as good as they look.",
    body: "Modern, responsive UIs built with the framework that fits your product — accessible, fast, and pixel-perfect on every device.",
    icon: Palette, color: "#DB2777",
    groups: [
      { label: "Frameworks", items: ["React", "Next.js", "TypeScript", "Vue", "Angular", "Blazor"] },
      { label: "Styling", items: ["Tailwind CSS", "Radix UI", "Framer Motion"] },
      { label: "Tooling", items: ["Vite", "ESLint", "Storybook"] },
    ],
  },
  {
    title: "Data", headline: "Data infrastructure that scales with demand.",
    body: "From ingestion to dashboards — pipelines and platforms built to handle growth without a rewrite.",
    icon: Database, color: "#0F8B83",
    groups: [
      { label: "Ingestion & pipelines", items: ["Azure Data Factory", "Apache Kafka", "Azure Event Hubs"] },
      { label: "Storage & warehousing", items: ["PostgreSQL", "Azure Synapse", "Snowflake"] },
      { label: "Analytics & BI", items: ["Power BI", "dbt", "Azure Databricks"] },
    ],
  },
  {
    title: "Cloud & DevOps", headline: "Cloud infrastructure your team can trust.",
    body: "Containerised, automated, and observable from day one — infrastructure that ships changes safely and scales on demand.",
    icon: CloudCog, color: "#F59E0B",
    groups: [
      { label: "Infrastructure", items: ["Azure", "AWS", "Terraform", "Docker", "Kubernetes (AKS)"] },
      { label: "CI/CD", items: ["GitHub Actions", "Azure DevOps Pipelines", "ArgoCD"] },
      { label: "Observability", items: ["Application Insights", "Grafana", "Prometheus"] },
    ],
  },
  {
    title: "API & Integrations", headline: "Bridging systems with smart integrations.",
    body: "We connect payments, messaging, authentication, and IoT into one coherent system — so your platform talks to the tools your business already runs on.",
    icon: Workflow, color: "#BE123C",
    groups: [
      { label: "Auth & security", items: ["OAuth & OpenID Providers", "BankID Login", "Active Directory (LDAP)", "Google reCAPTCHA"] },
      { label: "Payments & billing", items: ["Stripe", "PayPal", "Braintree", "Quaderno Taxation"] },
      { label: "Messaging & notifications", items: ["SendGrid Email", "Twilio SMS", "Firebase Cloud Messaging"] },
      { label: "Devices & edge", items: ["IoT Device Integrations", "Payment Terminal Integrations", "Edge Computing Devices"] },
    ],
  },
];

const trustPoints = [
  { num: "01", title: "You own the code", body: "No proprietary frameworks, no vendor lock-in. Every repository, pipeline, and credential transfers to you — full ownership, from day one." },
  { num: "02", title: "Fixed scope, fixed price", body: "We agree the charter before a single sprint starts. What we quote is what you pay — no surprise change orders halfway through the build." },
  { num: "03", title: "Senior engineers, not juniors", body: "The engineers on your discovery call are the engineers who ship your product. No bait-and-switch, no offshore hand-off." },
  { num: "04", title: "Partners past launch", body: "Most clients stay with us long after go-live — for support, growth features, and the next product line." },
];

const faqs = [
  { q: "How long does it take to build an MVP?", a: "Most MVPs take 6–10 weeks from signed charter to live product. We set a fixed scope, ship in sprints, and cut nothing from the core user journey." },
  { q: "Do you work with our existing codebase?", a: "Yes. We start with a code audit, agree on what stays and what gets rebuilt, then work alongside your team without disrupting ongoing delivery." },
  { q: "What tech stack do you use?", a: "We choose the stack that fits your product — React, Next.js, .NET, Node, Python, PostgreSQL, Azure. We don't sell a stack; we match one to your problem." },
  { q: "Can you take over after a failed project?", a: "We specialise in rescues. We'll do a fast technical audit, identify what can be salvaged, and give you an honest plan — no glossing over the hard parts." },
];

function ArrowLink({ children }: { children: React.ReactNode }) {
  return (
    <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-[#111]">
      {children}
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
    </span>
  );
}

export default function CustomDevelopmentPage() {
  return (
    <div className="font-switzer">

      {/* ── Hero ── */}
      <div className="industries-hero-bg">
        <div className={`${CONTAINER} pb-12 pt-32 lg:pt-28`}>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">

            {/* Left */}
            <div className="flex-1">
              <div className="mb-6">
                <Eyebrow>Custom Development</Eyebrow>
              </div>
              <h1 className="m-0 text-[40px] font-medium leading-[1.05] text-[#111] sm:text-[52px] lg:text-[64px]">
                We build products that{" "}
                <span className="text-[#111]">don&apos;t break.</span>
              </h1>
              <p className="mt-6 max-w-[520px] text-[18px] font-light leading-[1.6] text-[#111]">
                From MVPs to full-scale platforms — reliable software that grows with your
                business. Fast to launch, easy to scale, built to last.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <BlueButton href="/schedule-call">Book a 15-min call</BlueButton>
                <SecondaryButton href="/solutions">All solutions</SecondaryButton>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {["React", "Next.js", ".NET", "Node.js", "Azure", "PostgreSQL"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#e6e6e6] px-3 py-1 text-[12px] font-medium text-[#111]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — tech stack card */}
            <div className="w-full lg:max-w-[440px] lg:flex-1">
              <div className="flex flex-col gap-5 rounded-2xl border border-[#e6e6e6] bg-white p-6">
                <div className="flex items-center justify-between">
                  <p className="m-0 text-[11px] font-medium uppercase tracking-[0.12em] text-[#9ca3af]">
                    Our modern stack
                  </p>
                  <div className="flex items-center gap-1.5 rounded-full border border-[#059669]/30 px-3 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#059669]" />
                    <span className="text-[12px] font-medium text-[#059669]">Production-ready</span>
                  </div>
                </div>

                {[
                  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
                  { label: "Backend", items: [".NET 9", "Node.js", "Python"] },
                  { label: "Data", items: ["PostgreSQL", "Redis"] },
                  { label: "Cloud & DevOps", items: ["Azure", "Docker", "Kubernetes"] },
                ].map((group) => (
                  <div key={group.label}>
                    <p className="m-0 mb-2 text-[12px] font-light text-[#6b7280]">{group.label}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((t) => (
                        <span key={t} className="rounded-lg border border-[#e6e6e6] bg-[#fafafa] px-3 py-1.5 text-[12.5px] font-medium text-[#111]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* blue divider — full viewport width */}
        <hr className="divider-blue m-0 h-1 w-full border-0" />
      </div>

      {/* ── Capabilities ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} py-20 lg:py-24`}>
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4"><Eyebrow>What we deliver</Eyebrow></div>
              <h2 className="m-0 max-w-[520px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
                Every layer of the stack, covered.
              </h2>
            </div>
            <BlueButton href="/schedule-call">Schedule a quick intro</BlueButton>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {capabilities.map(({ num, title, body, icon: Icon }) => (
              <article
                key={num}
                className="group flex h-full flex-col rounded-lg border border-[#e6e6e6] bg-white p-6 transition-[border-color,transform] duration-200 hover:border-[#111827]/25 hover:-translate-y-0.5"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EFF5FF]">
                    <Icon className="h-5 w-5 text-[#2563EB]" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="text-[13px] font-light text-[#9ca3af]">{num}</span>
                </div>
                <h3 className="m-0 text-[20px] font-medium leading-[1.25] text-[#111] lg:text-[22px]">
                  {title}
                </h3>
                <p className="mt-2 text-[16px] font-normal leading-[1.5] text-[#111]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technologies ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-16">
            <div className="mb-4"><Eyebrow>Technologies</Eyebrow></div>
            <h2 className="m-0 max-w-[620px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              The stack behind every build.
            </h2>
          </div>

          <div className="flex flex-col">
            {technologies.map(({ title, headline, body, icon: Icon, color, groups }, i) => (
              <div
                key={title}
                className={`grid grid-cols-1 gap-8 py-14 lg:grid-cols-2 lg:gap-16 ${i !== 0 ? "border-t border-[#ECECEC]" : ""}`}
              >
                {/* Left — pitch */}
                <div className="flex flex-col justify-center">
                  <div className="mb-5 flex items-center gap-3">
                    <Icon className="h-6 w-6 shrink-0" style={{ color }} strokeWidth={1.5} aria-hidden="true" />
                    <div>
                      <p className="m-0 text-[15px] font-semibold leading-[1.2] text-[#111]">{title}</p>
                      <p className="m-0 text-[12px] font-medium uppercase tracking-[0.1em] text-[#9ca3af]">Technologies</p>
                    </div>
                  </div>
                  <h3 className="m-0 max-w-[440px] text-[26px] font-medium leading-[1.15] text-[#111] md:text-[32px]">
                    {headline}
                  </h3>
                  <p className="mt-4 max-w-[440px] text-[16px] font-normal leading-[1.6] text-[#6B7280]">{body}</p>
                </div>

                {/* Right — tech list card */}
                <Link
                  href="/schedule-call"
                  className="group flex h-full flex-col rounded-2xl border border-[#ECECEC] bg-[#FAFAF8] p-8 transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[rgba(37,99,235,0.2)] hover:shadow-[0_10px_28px_rgba(15,23,42,0.06)]"
                >
                  <div>
                    <p className="m-0 text-[15px] font-semibold leading-[1.2] text-[#111]">{title}</p>
                    <p className="m-0 text-[12px] font-medium uppercase tracking-[0.1em] text-[#9ca3af]">Technologies</p>
                  </div>
                  <div className="my-6 flex flex-1 flex-col gap-5">
                    {groups.map((group) => (
                      <div key={group.label}>
                        <p className="m-0 mb-2 text-[12px] font-medium uppercase tracking-[0.08em] text-[#9ca3af]">{group.label}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {group.items.map((item) => (
                            <span key={item} className="rounded-lg border border-[#e6e6e6] bg-white px-2.5 py-1 text-[13px] font-medium text-[#111]">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <ArrowLink>Learn more</ArrowLink>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Approach / Who we work with ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="flex flex-col gap-4 rounded-lg bg-[#111] p-8 lg:p-10">
              <Eyebrow><span className="text-white/50">Our approach</span></Eyebrow>
              <p className="m-0 text-[18px] font-light leading-[1.6] text-white/90">
                We don&apos;t just write code — we engineer solutions that move your business
                forward. Every build phase keeps product logic and user experience in sync, so
                what ships matches what was designed and what was needed.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-lg border border-[#e6e6e6] bg-white p-8 lg:p-10">
              <Eyebrow>Who we work with</Eyebrow>
              <p className="m-0 text-[18px] font-light leading-[1.6] text-[#111]">
                Startups building their first product. Scale-ups replacing legacy systems.
                Enterprises launching new business lines. If the problem requires real
                engineering — not a template — we&apos;re the right team.
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
                We move fast but stay precise — every phase keeps product and UX in sync.
              </h2>
            </div>
            <BlueButton href="/schedule-call">Grow with us</BlueButton>
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

      {/* ── Why clients trust us ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>Why us</Eyebrow></div>
            <h2 className="m-0 text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              Why clients trust us with their product.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {trustPoints.map(({ num, title, body }) => (
              <div key={num} className="flex h-full flex-col rounded-lg border border-[#e6e6e6] bg-white p-6">
                <span className="text-[34px] font-light leading-none text-[#e6e6e6]">{num}</span>
                <h3 className="mt-4 text-[18px] font-medium leading-[1.25] text-[#111]">{title}</h3>
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
              Ready to build something that lasts?
            </h2>
            <p className="m-0 text-[18px] font-light leading-[1.6] text-white/70">
              Let&apos;s talk about your product, your timeline, and what real engineering looks
              like for your team.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <BlueButton href="/schedule-call">Book a discovery call</BlueButton>
            <SecondaryButton href="/solutions" onDark>All solutions</SecondaryButton>
          </div>
        </div>
      </section>

    </div>
  );
}
