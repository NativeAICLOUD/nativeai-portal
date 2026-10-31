import type { Metadata } from "next";
import Link from "next/link";
import {
  Code2, Palette, CloudCog, CloudUpload,
  Bot, Database, Boxes, Workflow, Sparkles, AudioLines,
  Plane, Scale, CreditCard,
  BookOpen, GraduationCap, Library, Building2,
  type LucideIcon,
} from "lucide-react";
import { CONTAINER, Eyebrow } from "@/app/components/partials/services/ServiceUI";
import { SECTION_Y, SECTION_PB, H2, H3, BODY, RADIUS_MD, CARD_SURFACE } from "@/app/components/partials/home/HomeUI";
import Reveal from "@/app/components/partials/services/Reveal";
import GetInTouchCTASection from "@/app/components/partials/services/GetInTouchCTASection";
import AIRibbonVisual from "@/app/components/marketing/AIRibbonVisual";
import { VoiceVisual } from "@/app/components/partials/home/AIInnovationSection";

export const metadata: Metadata = {
  title: "AI Agents & RAG",
  description:
    "We implement AI Agents & LLMs that automate decisions, workflows, and operations — connected to your own data and tools.",
};

/* ── content ── */
const pillars: { num: string; title: string; body: string; icon: LucideIcon }[] = [
  { num: "01", title: "Custom AI Agents", body: "We build autonomous AI agents tailored to your business — agents that research, decide, and act across your tools, APIs, and data without manual intervention.", icon: Bot },
  { num: "02", title: "LLM Integration & RAG", body: "We embed large language models into your products and internal tools — connected to your own data via RAG so every answer is accurate, private, and on-brand.", icon: Sparkles },
  { num: "03", title: "AI Workflow Automation", body: "We replace manual processes with multi-agent pipelines — from document processing and approvals to reporting and customer interactions, fully automated end-to-end.", icon: Workflow },
  { num: "04", title: "Realtime Voice AI", body: "We let people talk to their business systems — ask a question out loud, get an answer in seconds, and have the agent look things up or take the next step, securely inside your cloud.", icon: AudioLines },
];

const capabilities = [
  { tag: "Agents", title: "Custom AI Agents", body: "Autonomous agents that monitor, decide, and act — integrated with your tools via MCP, Semantic Kernel or LangGraph, deployed on Azure AI Foundry or AWS Bedrock." },
  { tag: "RAG", title: "Retrieval-Augmented Generation", body: "RAG pipelines over your documents, SharePoint, or Confluence — accurate, cited answers with hallucination dramatically reduced." },
  { tag: "LLMs", title: "LLM Integration & Fine-Tuning", body: "Claude, GPT, Gemini, Mistral or open-weight Llama — we select, fine-tune, and integrate the right model for your use case and data-residency requirements." },
  { tag: "Automation", title: "AI Workflow Automation", body: "Multi-agent pipelines that trigger on events, process with AI, and push results where your team already works — email, Slack, ERP, CRM." },
  { tag: "Knowledge", title: "Knowledge Base AI", body: "Turn internal documentation, support tickets, and tribal knowledge into a searchable, AI-powered source of truth for every team member." },
  { tag: "Voice", title: "Realtime Voice AI", body: "Low-latency speech-to-speech assistants connected to your agents and data — for hands-free lookups, service desks, and daily workflows, with every action logged." },
  { tag: "Ops", title: "Evaluation & Observability", body: "Every deployment includes accuracy benchmarks, latency monitoring, and feedback loops so your AI keeps performing in production." },
];

const processSteps = [
  { step: "01", heading: "Use-Case Discovery", body: "We map your highest-value automation opportunities — interviewing stakeholders, auditing workflows, and pinpointing where AI agents will create measurable, lasting impact." },
  { step: "02", heading: "Architecture & Data Design", body: "We design the agent architecture, RAG pipeline, and data connectors — selecting the right LLM, vector store, and orchestration layer for your compliance and latency requirements." },
  { step: "03", heading: "Build & Integrate", body: "We build and deploy the agents, wiring them to your tools, SharePoint, APIs, or databases — with monitoring and observability configured from the first commit." },
  { step: "04", heading: "Evaluate & Tune", body: "Accuracy benchmarks, hallucination testing, and latency profiling before go-live. Every metric is measured and reviewed with your team before anyone touches production." },
  { step: "05", heading: "Ship & Scale", body: "Production deployment with feedback loops, retraining hooks, and an escalation path. We start with one high-value agent and expand from there — systematically." },
];

/* Frontier models + the platforms, orchestration and retrieval layers we build on */
const techStack: { name: string; kind: "Model" | "Platform" | "Agents" | "Retrieval" }[] = [
  { name: "Anthropic Claude", kind: "Model" },
  { name: "OpenAI GPT", kind: "Model" },
  { name: "Google Gemini", kind: "Model" },
  { name: "Mistral", kind: "Model" },
  { name: "Meta Llama", kind: "Model" },
  { name: "Azure AI Foundry", kind: "Platform" },
  { name: "AWS Bedrock", kind: "Platform" },
  { name: "Azure OpenAI", kind: "Platform" },
  { name: "Model Context Protocol", kind: "Agents" },
  { name: "Semantic Kernel", kind: "Agents" },
  { name: "LangGraph", kind: "Agents" },
  { name: "Azure AI Search", kind: "Retrieval" },
  { name: "Pinecone", kind: "Retrieval" },
];

const voicePoints = ["Low-latency speech-to-speech", "Connected to your agents & RAG", "Confirmation before any action"];

const solutions: { label: string; items: { href: string; icon: LucideIcon; title: string; desc: string }[] }[] = [
  {
    label: "Services",
    items: [
      { href: "/services/custom-development", icon: Code2, title: "Custom Development", desc: "Tailored software for your workflows" },
      { href: "/services/design", icon: Palette, title: "Design", desc: "Interfaces your users will love" },
      { href: "/cloud-software-architecture", icon: CloudCog, title: "Cloud Architecture", desc: "Scalable infrastructure design" },
      { href: "/migrate-to-azure", icon: CloudUpload, title: "Migrate to Azure", desc: "Low-risk migration to the cloud" },
    ],
  },
  {
    label: "AI & Data",
    items: [
      { href: "/services/ai-agents-rag", icon: Bot, title: "AI Agents & RAG", desc: "Intelligent automation & LLMs" },
      { href: "/data-lifecycle-management", icon: Database, title: "Data Lifecycle", desc: "Raw data to live dashboards" },
      { href: "/cloud-native-sd", icon: Boxes, title: "Cloud Native Dev", desc: "Kubernetes & microservices" },
      { href: "/devops-on-azure", icon: Workflow, title: "DevOps on Azure", desc: "CI/CD & infrastructure-as-code" },
    ],
  },
  {
    label: "Products",
    items: [
      { href: "/airline-booking", icon: Plane, title: "Airline & Travel Booking", desc: "GDS-connected booking SaaS" },
      { href: "/legal-saas", icon: Scale, title: "AI Legal Workspace", desc: "AI for law firms & legal teams" },
      { href: "/payment-automation", icon: CreditCard, title: "Payment Automation", desc: "Recurring billing & reconciliation" },
    ],
  },
  {
    label: "Company",
    items: [
      { href: "/case-studies", icon: BookOpen, title: "Case Studies", desc: "How we deliver for clients" },
      { href: "/workshops", icon: GraduationCap, title: "Workshops", desc: "Azure & Kubernetes training" },
      { href: "/knowledge-base", icon: Library, title: "Knowledge Base", desc: "Guides and articles" },
      { href: "/about", icon: Building2, title: "About Us", desc: "Our team and mission" },
    ],
  },
];

/* CTA styles — same pills as the homepage hero and Realtime AI section */
const CTA_DARK =
  "inline-flex h-10 min-w-[160px] cursor-pointer items-center justify-center whitespace-nowrap rounded-full bg-[#2E2B2B] px-5 text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-[#242121] active:bg-[#1A1818]";
const CTA_LINK =
  "group inline-flex h-10 cursor-pointer items-center gap-1.5 whitespace-nowrap px-2 text-[14px] font-semibold text-[#2E2B2B] transition-colors duration-200 hover:text-[#0066B3]";

function Arrow() {
  return <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">&rarr;</span>;
}

export default function AIAgentsRAGPage() {
  return (
    <div className="font-switzer">

      {/* ── Hero ── airy About-style gradient, white wash under the navbar */}
      <div
        style={{
          background: [
            "linear-gradient(180deg, #ffffff 0, #ffffff 96px, rgba(255,255,255,0) 260px)",
            "radial-gradient(circle at 15% 100%, rgba(224, 225, 255, 0.75), transparent 43%)",
            "radial-gradient(circle at 80% 100%, rgba(191, 219, 254, 0.55), transparent 48%)",
            "radial-gradient(circle at 100% 70%, rgba(219, 234, 254, 0.5), transparent 43%)",
            "#ffffff",
          ].join(", "),
        }}
      >
        <div className={`${CONTAINER} pb-16 pt-32 lg:pb-24 lg:pt-36`}>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="mb-6"><Eyebrow>AI Agents · LLMs · Azure &amp; AWS</Eyebrow></div>
              <h1 className="m-0 text-[40px] font-medium leading-[1.05] tracking-[-0.03em] text-[#111] sm:text-[52px] lg:text-[64px]">
                AI that works inside your business.
              </h1>
              <p className="mt-6 max-w-[520px] text-[19px] font-normal leading-[1.6] text-[#4B5563]">
                Agents, LLMs and voice assistants connected to your own data and tools — built to
                automate real decisions, workflows and operations.
              </p>
              <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <Link href="/schedule-call" className={CTA_DARK}>Book an AI consultation</Link>
                <Link href="/solutions" className={CTA_LINK}>See all solutions <Arrow /></Link>
              </div>
            </Reveal>

            <AIRibbonVisual
              className="rounded-3xl shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
              sizes="(min-width: 1024px) 50vw, 100vw"
              delay={0.1}
              priority
            />
          </div>
        </div>

        <hr className="divider-blue m-0 h-1 w-full border-0" />
      </div>

      {/* ── Built on — frontier models & platforms, slow seamless marquee (pauses for reduced motion) ── */}
      <div className="border-b border-[#E6E6E6] bg-[#FAFAFA] py-8 lg:py-10">
        <div className={`${CONTAINER} mb-6 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between`}>
          <Eyebrow>Built on</Eyebrow>
          <p className="m-0 text-[15px] font-medium text-[#111827]">
            The most advanced LLMs and AI platforms — chosen per use case, not per vendor.
          </p>
        </div>
        <div
          className="marquee-partner"
          style={{
            ["--duration" as string]: "55s",
            ["--space" as string]: "12px",
            maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
            WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          }}
        >
          {[0, 1].map((copy) => (
            <ul key={copy} role="list" aria-hidden={copy === 1} className="marquee-group m-0 list-none p-0">
              {techStack.map(({ name, kind }) => (
                <li
                  key={name}
                  className="flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-full border border-[#E6E6E6] bg-white py-2 pl-4 pr-2"
                >
                  <span className="text-[14px] font-medium text-[#111827]">{name}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em] ${
                      kind === "Model" ? "bg-[#E1F0FF] text-[#0066B3]" : "bg-[#F3F4F6] text-[#6B7280]"
                    }`}
                  >
                    {kind}
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* ── Four pillars ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <Reveal className="mb-12 lg:mb-16">
            <div className="mb-6"><Eyebrow>What we build</Eyebrow></div>
            <h2 className={`m-0 max-w-[640px] ${H2}`}>Four capabilities. One integrated system.</h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6 xl:grid-cols-4">
            {pillars.map(({ num, title, body, icon: Icon }, i) => (
              <Reveal key={num} delay={i * 0.06} className="h-full">
                <article className={`flex h-full flex-col ${RADIUS_MD} ${CARD_SURFACE} p-6 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-[#2563EB]/30`}>
                  <div className="mb-6 flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(37,99,235,0.07)]">
                      <Icon className="h-[22px] w-[22px] text-[#2563EB]" strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <span className="text-[13px] font-medium text-[#9ca3af]">{num}</span>
                  </div>
                  <h3 className={`m-0 ${H3}`}>{title}</h3>
                  <p className={`mt-2 ${BODY}`}>{body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured: Realtime Voice AI (same card + live demo as the homepage) ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} ${SECTION_PB}`}>
          <Reveal>
            <div className="grid grid-cols-1 gap-10 rounded-3xl border border-[#E6E6E6] bg-[#FAFBFF] p-6 sm:p-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14 lg:p-14">
              <div className="flex flex-col justify-center">
                <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#0066B3]">
                  Featured · Realtime Voice AI
                </span>
                <h3 className="m-0 mt-4 text-[28px] font-medium leading-[1.12] tracking-[-0.02em] text-[#111827] sm:text-[34px]">
                  Beyond chat. Talk to your business systems.
                </h3>
                <p className="mt-5 text-[16px] leading-[1.6] text-[#374151]">
                  Ask a question out loud, get an answer in seconds, and let the agent look things up or
                  take the next step — connected to your data, running securely inside your cloud, with
                  every action logged.
                </p>
                <ul role="list" className="m-0 mt-6 flex list-none flex-col gap-2.5 p-0">
                  {voicePoints.map((t) => (
                    <li key={t} className="text-[15px] text-[#111827]">
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link href="/schedule-call" className={CTA_DARK}>See it on your data</Link>
                </div>
              </div>
              <VoiceVisual />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── What's included — editorial list with sticky intro ── */}
      <section className="border-t border-[#E6E6E6] bg-white">
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
            <Reveal className="lg:sticky lg:top-32 lg:self-start">
              <div className="mb-6"><Eyebrow>What&apos;s included</Eyebrow></div>
              <h2 className={`m-0 ${H2}`}>The full AI stack, end to end.</h2>
              <p className="mt-6 max-w-[440px] text-[17px] leading-[1.6] text-[#4B5563]">
                From the first agent to production observability — one team designs, builds and runs it.
              </p>
              <div className="mt-8">
                <Link href="/schedule-call" className={CTA_DARK}>Book an AI consultation</Link>
              </div>
            </Reveal>

            <ul role="list" className="m-0 list-none border-b border-[#E6E6E6] p-0">
              {capabilities.map(({ tag, title, body }) => (
                <li key={title} className="grid grid-cols-1 gap-3 border-t border-[#E6E6E6] py-7 sm:grid-cols-[120px_minmax(0,1fr)] sm:gap-8">
                  <span className="w-fit self-start rounded-full bg-[#E1F0FF] px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-[#0066B3]">
                    {tag}
                  </span>
                  <div>
                    <h3 className="m-0 text-[20px] font-medium leading-[1.3] text-[#111827]">{title}</h3>
                    <p className={`mt-2 ${BODY}`}>{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Why / For whom ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} ${SECTION_PB}`}>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <Reveal className="h-full">
              <div className={`flex h-full flex-col gap-5 ${RADIUS_MD} bg-[#2E2B2B] p-8 lg:p-12`}>
                <p className="m-0 text-[12px] font-medium uppercase tracking-[0.14em] text-white/50">Why AI agents?</p>
                <p className="m-0 text-[22px] font-medium leading-[1.4] tracking-[-0.01em] text-white lg:text-[26px]">
                  The difference between AI as a demo and AI as a business asset is integration.
                </p>
                <p className="m-0 text-[16px] leading-[1.6] text-white/70">
                  Agents connected to your real data, systems, and workflows create compounding value
                  every month — not a one-time bump.
                </p>
              </div>
            </Reveal>
            <Reveal className="h-full" delay={0.08}>
              <div className={`flex h-full flex-col gap-5 ${RADIUS_MD} border border-[#E6E6E6] bg-[#FAFBFF] p-8 lg:p-12`}>
                <Eyebrow>For whom?</Eyebrow>
                <p className="m-0 text-[22px] font-medium leading-[1.4] tracking-[-0.01em] text-[#111827] lg:text-[26px]">
                  If your team does repetitive knowledge work, there is an agent for it.
                </p>
                <p className="m-0 text-[16px] leading-[1.6] text-[#4B5563]">
                  Operations teams drowning in manual processing. Finance chasing approvals. Legal
                  reviewing contracts. Support repeating answers.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Process — numbered steps on a fading hairline ── */}
      <section className="border-t border-[#E6E6E6] bg-white">
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <Reveal className="mb-12 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-6"><Eyebrow>How we work</Eyebrow></div>
              <h2 className={`m-0 max-w-[720px] ${H2}`}>From discovery to production in weeks — not months.</h2>
            </div>
            <Link href="/schedule-call" className={CTA_LINK}>Schedule a free call <Arrow /></Link>
          </Reveal>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
            {processSteps.map(({ step, heading, body }, i) => (
              <Reveal key={step} delay={i * 0.06}>
                <div className="mb-6 flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E1F0FF] text-[13px] font-semibold text-[#0066B3]">
                    {step}
                  </span>
                  <span
                    className="hidden h-px flex-1 lg:block"
                    style={{ backgroundImage: "linear-gradient(90deg, #BECBFF, rgba(190,203,255,0))" }}
                    aria-hidden="true"
                  />
                </div>
                <h3 className={`m-0 ${H3}`}>{heading}</h3>
                <p className={`mt-2 ${BODY}`}>{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Explore more (solutions directory) ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} ${SECTION_PB}`}>
          <div className={`overflow-hidden ${RADIUS_MD} border border-[#E6E6E6] bg-white`}>
            <div className="grid grid-cols-1 gap-8 p-8 sm:grid-cols-2 lg:grid-cols-4 lg:p-10">
              {solutions.map((col) => (
                <div key={col.label} className="flex flex-col">
                  <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#9ca3af]">{col.label}</p>
                  <ul className="flex flex-col gap-2">
                    {col.items.map(({ href, icon: Icon, title, desc }) => (
                      <li key={href}>
                        <Link href={href} className="group -mx-2.5 flex items-start gap-3 rounded-xl px-2.5 py-2 transition-colors hover:bg-[#F5F8FF]">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[rgba(37,99,235,0.07)] transition-colors group-hover:bg-[#E1F0FF]">
                            <Icon size={16} strokeWidth={1.7} className="text-[#2563EB]" aria-hidden="true" />
                          </span>
                          <div className="flex min-w-0 flex-col gap-0.5">
                            <span className="text-[14px] font-medium leading-snug text-[#111]">{title}</span>
                            <span className="text-[12.5px] leading-snug text-[#6b7280]">{desc}</span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#E6E6E6] bg-[#FAFAFA] px-8 py-4 lg:px-10">
              <p className="m-0 text-[13px] text-[#6B7280]">Not sure where to start?</p>
              <Link href="/schedule-call" className={CTA_LINK}>Schedule a free call <Arrow /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Get in touch — same light-blue CTA as Careers / Solutions ── */}
      <GetInTouchCTASection
        heading="Ready to put AI to work?"
        body="Book a free consultation. We'll pinpoint your highest-value automation and outline a path to production — no obligation."
        topic="AI Agents & RAG"
      />

    </div>
  );
}
