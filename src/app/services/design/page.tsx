import type { Metadata } from "next";
import {
  Users, Palette, Boxes, Sparkles, Workflow, GitBranch,
  type LucideIcon,
} from "lucide-react";
import { CONTAINER, Eyebrow, PrimaryButton, SecondaryButton } from "@/app/components/partials/services/ServiceUI";

export const metadata: Metadata = {
  title: "Design",
  description:
    "Great design is how your product communicates its value — reducing friction and driving measurable outcomes. UX research, UI design, and design systems.",
};

/* ── content ── */
const features: { num: string; title: string; body: string; icon: LucideIcon }[] = [
  { num: "01", title: "UX Research & Strategy", body: "User interviews, usability testing, and journey mapping to uncover what your users actually need — not what you assume.", icon: Users },
  { num: "02", title: "UI Design", body: "Pixel-perfect, responsive interfaces built in Figma — with full interaction states, accessibility baked in, and developer-ready specs.", icon: Palette },
  { num: "03", title: "Design Systems", body: "Scalable component libraries and design tokens that keep your product consistent and fast to iterate as it grows.", icon: Boxes },
  { num: "04", title: "Brand Identity", body: "Logo, colour system, typography, and brand guidelines — everything needed to show up consistently across every touchpoint.", icon: Sparkles },
  { num: "05", title: "Prototyping & Validation", body: "Clickable prototypes to validate flows before a single line of code is written — saving time, budget, and rework.", icon: Workflow },
  { num: "06", title: "Design-to-Code Handoff", body: "We bridge the gap between design and engineering with clear documentation, annotated specs, and implementation support.", icon: GitBranch },
];

const processSteps = [
  { step: "01", heading: "Discovery & Research", body: "User interviews, heuristic audits, and competitive analysis to understand what your users actually need — not what you assume. We map the full journey before touching Figma." },
  { step: "02", heading: "Strategy & Architecture", body: "We define the sitemap, user flows, and content hierarchy — so every design decision is grounded in clear product logic before any visual work begins." },
  { step: "03", heading: "Wireframes & Prototyping", body: "Low and high-fidelity wireframes, validated with clickable prototypes. We test flows with real users before a single pixel is polished." },
  { step: "04", heading: "Visual Design", body: "Pixel-perfect UI with full interaction states, responsive layouts, and accessibility baked in — designed to the level of detail engineers need to ship without guesswork." },
  { step: "05", heading: "Design System", body: "Component libraries and design tokens that keep your product consistent as it scales — a living system, not a one-time deliverable." },
  { step: "06", heading: "Handoff & Support", body: "Developer-ready specs, annotated components, and ongoing support during implementation — so what ships matches what was designed, every time." },
];

export default function DesignPage() {
  return (
    <div className="font-switzer">

      {/* ── Hero ── */}
      <div className="industries-hero-bg">
        <div className={`${CONTAINER} pb-12 pt-32 lg:pt-28`}>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">

            {/* Left */}
            <div className="flex-1">
              <div className="mb-6"><Eyebrow>Design</Eyebrow></div>
              <h1 className="m-0 text-[40px] font-medium leading-[1.05] text-[#111] sm:text-[52px] lg:text-[64px]">
                Interfaces that convert, delight.
              </h1>
              <p className="mt-6 max-w-[520px] text-[18px] font-light leading-[1.6] text-[#111]">
                Great design is not decoration. It is how your product communicates its value —
                reducing friction and driving measurable outcomes.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton href="/schedule-call">Start your design project</PrimaryButton>
                <SecondaryButton href="/solutions">See all solutions</SecondaryButton>
              </div>
            </div>

            {/* Right — Figma mockup */}
            <div className="w-full lg:max-w-[500px] lg:flex-1">
              <div className="flex flex-col gap-5 rounded-2xl border border-[#e6e6e6] bg-white p-6">
                {/* browser bar */}
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                  <div className="ml-2 flex h-6 flex-1 items-center rounded-full border border-[#eee] bg-[#fafafa] px-3">
                    <span className="text-[10px] font-medium text-[#9ca3af]">figma.com / nativecloud-ui</span>
                  </div>
                </div>
                {/* nav mock */}
                <div className="flex h-10 items-center gap-3 rounded-xl border border-[#eee] bg-[#fafafa] px-4">
                  <div className="h-2.5 w-16 rounded-full bg-[#111]/15" />
                  <div className="flex-1" />
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="h-2 w-8 rounded-full bg-[#111]/10" />
                  ))}
                  <div className="h-7 w-20 rounded-full bg-[#111]" />
                </div>
                {/* hero mock */}
                <div className="flex h-32 items-center gap-4 rounded-xl border border-[#eee] bg-[#fafafa] px-5">
                  <div className="flex flex-1 flex-col gap-2.5">
                    <div className="h-4 w-3/4 rounded-full bg-[#111]/25" />
                    <div className="h-3 w-1/2 rounded-full bg-[#111]/12" />
                    <div className="mt-1 h-7 w-28 rounded-full bg-[#111]" />
                  </div>
                  <div className="h-24 w-24 shrink-0 rounded-xl border border-[#eee] bg-white" />
                </div>
                {/* card grid mock */}
                <div className="grid grid-cols-3 gap-2.5">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="flex h-[72px] flex-col justify-end rounded-xl border border-[#eee] bg-[#fafafa] p-3">
                      <div className="mb-1.5 h-2 w-full rounded-full bg-[#111]/15" />
                      <div className="h-1.5 w-2/3 rounded-full bg-[#111]/10" />
                    </div>
                  ))}
                </div>
                {/* design tokens */}
                <div className="flex items-center gap-2.5 pt-1">
                  {["#c084fc", "#f472b6", "#60a5fa", "#34d399", "#3b82f6"].map((c) => (
                    <div key={c} className="h-6 w-6 shrink-0 rounded-full ring-2 ring-white" style={{ background: c }} />
                  ))}
                  <div className="mx-1 h-px flex-1 bg-[#eee]" />
                  <span className="text-[10px] font-medium text-[#9ca3af]">Design System v2</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* blue divider — full viewport width */}
        <hr className="divider-blue m-0 h-1 w-full border-0" />
      </div>

      {/* ── What's included ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} py-20 lg:py-24`}>
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4"><Eyebrow>What&apos;s included</Eyebrow></div>
              <h2 className="m-0 max-w-[520px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
                Every layer of the design process.
              </h2>
            </div>
            <PrimaryButton href="/schedule-call">Start your project</PrimaryButton>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {features.map(({ num, title, body, icon: Icon }) => (
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

      {/* ── Why design first / Who we design for ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="flex flex-col gap-4 rounded-lg bg-[#111] p-8 lg:p-10">
              <Eyebrow><span className="text-white/50">Why design first?</span></Eyebrow>
              <p className="m-0 text-[18px] font-light leading-[1.6] text-white/90">
                Design decisions made early are cheap. Made in production they are expensive.
                Every hour in research and wireframes saves days of engineering rework — and
                ships a product your users actually want to use.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-lg border border-[#e6e6e6] bg-white p-8 lg:p-10">
              <Eyebrow>Who we design for</Eyebrow>
              <p className="m-0 text-[18px] font-light leading-[1.6] text-[#111]">
                Startups finding product-market fit. Scale-ups overhauling legacy UX.
                Enterprises launching new digital products. If your users struggle to navigate
                it, we design the version they won&apos;t want to close.
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
                Every decision traced back to a user need or business goal.
              </h2>
            </div>
            <PrimaryButton href="/schedule-call">Grow with us</PrimaryButton>
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
              Ready to design something people love?
            </h2>
            <p className="m-0 text-[18px] font-light leading-[1.6] text-white/70">
              Let&apos;s map the flows, polish the pixels, and ship an interface your users
              actually enjoy using.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton href="/schedule-call" dark>Start your design project</PrimaryButton>
            <SecondaryButton href="/solutions" onDark>All solutions</SecondaryButton>
          </div>
        </div>
      </section>

    </div>
  );
}
