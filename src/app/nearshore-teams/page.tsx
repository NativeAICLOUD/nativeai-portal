import type { Metadata } from 'next';
import { Code2, Boxes, Cloud, Bot, Clock, Users, Target, Sparkles, CircleDollarSign, type LucideIcon } from 'lucide-react';
import { Constants } from '@/Constants';
import { CONTAINER, Eyebrow, PrimaryButton, SecondaryButton } from '@/app/components/partials/services/ServiceUI';

export const metadata: Metadata = {
  title: 'Dedicated Nearshore Teams | NativeCloud',
  description:
    'Senior-led nearshore engineering teams embedded in your workflow — dedicated development, managed delivery, cloud & platform engineering, and AI-native application development.',
};

/* ── content ── */
const services: { title: string; desc: string; icon: LucideIcon }[] = [
  { title: 'Dedicated Development Teams', desc: 'Senior engineers embedded in your workflow. We build, ship, and iterate — fully aligned with your product roadmap and delivery cadence.', icon: Code2 },
  { title: 'Managed Delivery Teams', desc: 'End-to-end delivery ownership with built-in accountability. We bring the team, the process, and the discipline — you focus on outcomes.', icon: Boxes },
  { title: 'Cloud & Platform Engineering', desc: 'Azure-first infrastructure built for real scale. Kubernetes, CI/CD pipelines, and infrastructure-as-code — production-ready from day one.', icon: Cloud },
  { title: 'AI-Native Application Development', desc: 'LLM integration, RAG pipelines, and autonomous agents. We build AI into your product core — not as a feature bolted on after launch.', icon: Bot },
];

const benefits: { title: string; desc: string; icon: LucideIcon }[] = [
  { title: 'European time-zone alignment', desc: 'Real overlap with UK, DACH, and Benelux hours — real-time collaboration, not async bottlenecks.', icon: Clock },
  { title: 'Senior-led delivery', desc: 'Every engagement is anchored by experienced engineers and tech leads — not delegated to juniors.', icon: Users },
  { title: 'Outcome-focused partnership', desc: 'We measure success by your results — not hours logged or tickets closed.', icon: Target },
  { title: 'Azure, DevOps, .NET & AI expertise', desc: 'Deep specialisation in the Microsoft cloud-native and AI ecosystem.', icon: Sparkles },
  { title: 'Cost-efficient without compromise', desc: 'North Macedonia talent at competitive nearshore rates — without trading quality for price.', icon: CircleDollarSign },
];

const aiTags = ['GPT-4o', 'RAG', 'Azure OpenAI', 'AI Agents', 'Fine-tuning'];

export default function NearshoreTeamsPage() {
  return (
    <div className="font-switzer">

      {/* ── Hero ── */}
      <div className="industries-hero-bg">
        <div className={`${CONTAINER} pb-12 pt-32 lg:pt-28`}>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">

            {/* Left */}
            <div className="flex-1">
              <div className="mb-6"><Eyebrow>Nearshore Teams · Senior-led delivery</Eyebrow></div>
              <h1 className="m-0 max-w-[560px] text-[40px] font-medium leading-[1.05] text-[#111] sm:text-[52px] lg:text-[64px]">
                Dedicated nearshore teams.
              </h1>
              <p className="mt-6 max-w-[540px] text-[18px] font-light leading-[1.6] text-[#111]">
                Senior-led teams embedded directly in your product organisation — covering the full
                delivery spectrum, from hands-on engineering to cloud infrastructure, AI development,
                and technical leadership.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton href={Constants.PAGES.SCHEDULE_CALL}>Book a discovery call</PrimaryButton>
                <SecondaryButton href={Constants.PAGES.SOLUTIONS}>Explore services</SecondaryButton>
              </div>
            </div>

            {/* Right — Generative AI card */}
            <div className="w-full lg:max-w-[380px] lg:flex-1">
              <div className="flex flex-col gap-5 rounded-2xl border border-[#e6e6e6] bg-white p-6">
                <div className="flex items-center justify-between">
                  <Eyebrow>Generative AI</Eyebrow>
                  <Sparkles className="h-5 w-5 text-[#111]" strokeWidth={1.6} aria-hidden="true" />
                </div>
                <p className="m-0 text-[15px] leading-[1.6] text-[#111]">
                  We build and fine-tune LLMs, AI Agents, and RAG systems that plug into your
                  real-world operations.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {aiTags.map((tag) => (
                    <span key={tag} className="rounded-md border border-[#e6e6e6] bg-[#fafafa] px-2.5 py-1 text-[11px] font-medium text-[#111]">
                      {tag}
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

      {/* ── Services ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} py-20 lg:py-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>What we deliver</Eyebrow></div>
            <h2 className="m-0 max-w-[560px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              Four areas. One team. Full delivery.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {services.map(({ title, desc, icon: Icon }) => (
              <article
                key={title}
                className="group flex h-full flex-col rounded-lg border border-[#e6e6e6] bg-white p-6 transition-[filter,box-shadow] duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:[filter:invert(1)]"
              >
                <Icon className="mb-5 h-7 w-7 text-[#111]" strokeWidth={1.6} aria-hidden="true" />
                <h3 className="m-0 text-[17px] font-medium leading-[1.3] text-[#111]">{title}</h3>
                <p className="mt-2 text-[14px] font-normal leading-[1.5] text-[#111]">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why NativeCloud ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>Why NativeCloud</Eyebrow></div>
            <h2 className="m-0 max-w-[560px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              Built different. Delivered right.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {benefits.map(({ title, desc, icon: Icon }) => (
              <div key={title} className="flex h-full flex-col rounded-lg border border-[#e6e6e6] bg-white p-6">
                <Icon className="mb-4 h-6 w-6 text-[#111]" strokeWidth={1.6} aria-hidden="true" />
                <h3 className="m-0 text-[16px] font-medium leading-[1.3] text-[#111]">{title}</h3>
                <p className="mt-2 text-[14px] font-normal leading-[1.5] text-[#6b7280]">{desc}</p>
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
              Ready to scale your engineering capacity?
            </h2>
            <p className="m-0 text-[18px] font-light leading-[1.6] text-white/70">
              Let&apos;s start with a no-pressure discovery call — we&apos;ll scope the right team and
              delivery model for your roadmap.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton href={Constants.PAGES.SCHEDULE_CALL} dark>Book a discovery call</PrimaryButton>
            <SecondaryButton href={Constants.PAGES.SOLUTIONS} onDark>Explore services</SecondaryButton>
          </div>
        </div>
      </section>

    </div>
  );
}
