import type { Metadata } from "next";
import Link from "next/link";
import {
  Code2, Workflow, Sparkles, Database, Palette, CloudCog,
  type LucideIcon,
} from "lucide-react";
import { CONTAINER, Eyebrow, SecondaryButton } from "@/app/components/partials/services/ServiceUI";

/* Page-scoped blue-concept primary button (matches the cloud-native-sd redesign) */
const BLUE_GRADIENT = "linear-gradient(135deg, #3b82f6 0%, #1e4fd6 100%)";
const BLUE_GLOW = "0 6px 24px rgba(37,99,235,0.35)";

function BlueButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-full px-6 py-3 text-[15px] font-medium text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
      style={{ background: BLUE_GRADIENT, boxShadow: BLUE_GLOW }}
    >
      {children}
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

const faqs = [
  { q: "How long does it take to build an MVP?", a: "Most MVPs take 6–10 weeks from signed charter to live product. We set a fixed scope, ship in sprints, and cut nothing from the core user journey." },
  { q: "Do you work with our existing codebase?", a: "Yes. We start with a code audit, agree on what stays and what gets rebuilt, then work alongside your team without disrupting ongoing delivery." },
  { q: "What tech stack do you use?", a: "We choose the stack that fits your product — React, Next.js, .NET, Node, Python, PostgreSQL, Azure. We don't sell a stack; we match one to your problem." },
  { q: "Can you take over after a failed project?", a: "We specialise in rescues. We'll do a fast technical audit, identify what can be salvaged, and give you an honest plan — no glossing over the hard parts." },
];

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
                <span
                  style={{
                    background: "linear-gradient(120deg, #2563eb 0%, #3b82f6 45%, #1e4fd6 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                >
                  don&apos;t break.
                </span>
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

        {/* blue-concept divider — full viewport width */}
        <hr
          className="m-0 h-1 w-full border-0"
          style={{
            backgroundImage: "linear-gradient(260deg, #fff, #60a5fa 15%, #3b82f6 50%, #1e4fd6 85%, #fff)",
            borderRadius: 100,
          }}
        />
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
                className="group flex h-full flex-col rounded-lg border border-[#e6e6e6] bg-white p-6 transition-[filter,box-shadow] duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:[filter:invert(1)]"
              >
                <div className="mb-5 flex items-center justify-between">
                  <Icon className="h-7 w-7 text-[#111]" strokeWidth={1.6} aria-hidden="true" />
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
