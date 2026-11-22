import type { Metadata } from "next";
import Link from "next/link";
import {
  Code2, Palette, CloudCog, CloudUpload,
  Bot, Database, Boxes, Workflow, Sparkles, AudioLines, BrainCircuit, ShieldCheck,
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
    "AI agents, RAG and voice assistants grounded in your own data and governed end to end — built on Microsoft Foundry, Microsoft IQ and Agent 365.",
};

/* ── content ── */
const pillars: { num: string; title: string; body: string; icon: LucideIcon }[] = [
  { num: "01", title: "Custom AI Agents", body: "Agents that research, decide and act across your tools.", icon: Bot },
  { num: "02", title: "LLM Integration & RAG", body: "Answers grounded in your own data. Accurate and private.", icon: Sparkles },
  { num: "03", title: "AI Workflow Automation", body: "Manual processes, automated end to end.", icon: Workflow },
  { num: "04", title: "Realtime Voice AI", body: "Ask out loud. Get an answer in seconds.", icon: AudioLines },
];

const capabilities = [
  { tag: "Agents", title: "Custom AI Agents", body: "Agents that monitor, decide and act, connected to your tools." },
  { tag: "RAG", title: "Retrieval-Augmented Generation", body: "Accurate, cited answers from your own documents." },
  { tag: "LLMs", title: "LLM Integration & Fine-Tuning", body: "The right model for your use case and your data rules." },
  { tag: "Automation", title: "AI Workflow Automation", body: "Triggered by events. Delivered where your team works." },
  { tag: "Knowledge", title: "Knowledge Base AI", body: "Everything your company knows, one question away." },
  { tag: "Voice", title: "Realtime Voice AI", body: "Speech-to-speech assistants, with every action logged." },
  { tag: "Ops", title: "Evaluation & Observability", body: "Measured before launch. Monitored after." },
  { tag: "Governance", title: "Agent Governance & Cost Control", body: "Every agent has an identity, an owner and a budget." },
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
  { name: "Microsoft Foundry", kind: "Platform" },
  { name: "Microsoft IQ", kind: "Platform" },
  { name: "Agent 365", kind: "Platform" },
  { name: "Copilot Studio", kind: "Platform" },
  { name: "AWS Bedrock", kind: "Platform" },
  { name: "Model Context Protocol", kind: "Agents" },
  { name: "Microsoft Agent Framework", kind: "Agents" },
  { name: "LangGraph", kind: "Agents" },
  { name: "Foundry IQ", kind: "Retrieval" },
  { name: "Azure AI Search", kind: "Retrieval" },
  { name: "Pinecone", kind: "Retrieval" },
];

/* ── The Frontier Firm ── Microsoft's name for a human-led organisation where agents
   carry a growing share of the execution. Three layers make it practical. */
const frontierLayers: { num: string; layer: string; title: string; body: string; built: string; icon: LucideIcon }[] = [
  {
    num: "01",
    layer: "Intelligence",
    title: "It knows your business.",
    body: "Your data. Your documents. Your context.",
    built: "Microsoft IQ",
    icon: BrainCircuit,
  },
  {
    num: "02",
    layer: "Agents",
    title: "It finishes the work.",
    body: "Plans, acts, and asks you first when it matters.",
    built: "Microsoft Foundry",
    icon: Bot,
  },
  {
    num: "03",
    layer: "Control",
    title: "You stay in charge.",
    body: "See what every agent does, reaches and costs.",
    built: "Agent 365",
    icon: ShieldCheck,
  },
];

/* ── What's new on the Microsoft AI platform ── status as published in the Ignite 2026 Book of News (Nov 2026).
   Edit here when a preview reaches general availability. */
type IgniteStatus = "Generally available" | "Preview" | "Frontier";
const igniteUpdates: { status: IgniteStatus; area: string; title: string; body: string }[] = [
  { status: "Generally available", area: "Microsoft IQ", title: "One context for every agent.", body: "Work, business, documents and web. Connected once." },
  { status: "Generally available", area: "Foundry IQ", title: "SharePoint, ready to answer.", body: "Your documents, with their permissions intact." },
  { status: "Preview", area: "Foundry IQ", title: "Answers that connect the dots.", body: "Knowledge graphs link what your documents share." },
  { status: "Generally available", area: "Microsoft Foundry", title: "Quality you can measure.", body: "Whole conversations scored, before and after launch." },
  { status: "Preview", area: "Agent 365", title: "Every cost in view.", body: "Budgets, limits and alerts for every agent." },
  { status: "Preview", area: "Microsoft Foundry", title: "Runs where you need it.", body: "Models and agents inside your own Kubernetes." },
];

/* ── Data services for generative AI ── two groups, same minimal copy as the cards above. */
const dataServices: { label: string; heading: string; items: { title: string; body: string }[] }[] = [
  {
    label: "Data Engineering",
    heading: "Our Data Engineering for Generative AI Services",
    items: [
      { title: "Every source, one pipeline.", body: "Files, databases, APIs and SharePoint, flowing in." },
      { title: "Clean data in. Good answers out.", body: "Parsed, chunked and enriched for retrieval." },
      { title: "Searchable by meaning.", body: "Embeddings and indexes, always up to date." },
      { title: "Fresh, tested, monitored.", body: "Pipelines that tell you when something breaks." },
    ],
  },
  {
    label: "Data Architecture",
    heading: "Our Data Architecture for Generative AI Services",
    items: [
      { title: "One home for your data.", body: "A governed lakehouse your agents can trust." },
      { title: "Built for retrieval.", body: "Vector, keyword and graph search, combined." },
      { title: "Private by design.", body: "Permissions follow the data into every answer." },
      { title: "Ready to grow.", body: "Scales with demand, and with your budget." },
    ],
  },
];

/* ── Agent Factory ── */
const factoryPoints: { title: string; body: string }[] = [
  { title: "Built for you.", body: "Your data. Your tools. Your rules." },
  { title: "Ready for production.", body: "Tested, secured and monitored from the first release." },
  { title: "Live in weeks.", body: "One agent first. Then the next." },
];

const STATUS_STYLE: Record<IgniteStatus, string> = {
  "Generally available": "bg-[#E1F0FF] text-[#0066B3]",
  Preview: "bg-[#F3F4F6] text-[#4B5563]",
  Frontier: "bg-[#BECBFF] text-[#141414]",
};

// Same organic pill as the editorial headlines on the homepage.
const PILL_RADIUS = "0.9em 1.05em 0.85em 1em / 1em 0.9em 1.05em 0.9em";
const IGNITE_SOURCE = "https://news.microsoft.com/events/ignite/2026/book-of-news/";

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
      { href: "/legal-saas", icon: Scale, title: "Agentic Legal AI", desc: "Legal research assistants for law firms" },
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

/* CTA styles — the squared black button and text link of the homepage hero */
const CTA_DARK =
  "inline-flex h-11 min-w-[160px] cursor-pointer items-center justify-center whitespace-nowrap rounded-md bg-black px-5 text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-[#1A1818] active:bg-[#2E2B2B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2";
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
              <h1 className="m-0 text-[40px] font-medium leading-[1.05] tracking-[-0.03em] text-[#111] sm:text-[52px] lg:text-[64px]">
                Agents that work{" "}
                <span className="rounded-[2px] bg-[#2563EB]/10 px-1.5 pb-[3px] text-[#171717]">inside</span>{" "}
                your business.
              </h1>
              <p className="mt-6 max-w-[520px] text-[19px] font-normal leading-[1.6] text-[#4B5563]">
                Agents, RAG and voice assistants grounded in your own data, connected to your tools
                and governed end to end. Built on Microsoft Foundry, Microsoft IQ and Agent 365.
              </p>
              <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <Link href="/schedule-call" className={CTA_DARK}>Book an AI consultation</Link>
                <Link href="#whats-new" className={CTA_LINK}>See what&apos;s new <Arrow /></Link>
              </div>
            </Reveal>

            <AIRibbonVisual
              className="aspect-[16/9] rounded-3xl border border-[#e6e6e6] shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
              sizes="(min-width: 1024px) 50vw, 100vw"
              delay={0.1}
              priority
            />
          </div>
        </div>

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

      {/* ── The Frontier Firm — three layers, fog on hover like the homepage cards ── */}
      <section aria-labelledby="frontier-heading" className="bg-white">
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <Reveal className="mb-12 grid grid-cols-1 gap-6 lg:mb-16 lg:grid-cols-2 lg:items-end lg:gap-16">
            <div>
              <div className="mb-6"><Eyebrow>The Frontier Firm</Eyebrow></div>
              <h2 id="frontier-heading" className={`m-0 max-w-[560px] ${H2}`}>Human-led. Agent-operated.</h2>
            </div>
            <p className="m-0 max-w-[520px] text-[17px] leading-[1.6] text-[#4B5563]">
              People set the direction. Agents do the work. It takes three things.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
            {frontierLayers.map(({ num, layer, title, body, built, icon: Icon }, i) => (
              <Reveal key={num} delay={i * 0.06} className="h-full">
                <article className="group relative isolate flex h-full flex-col overflow-hidden rounded-[28px] border border-[#E6E6E6] bg-white p-7 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-[#BECBFF] motion-reduce:transition-none motion-reduce:hover:translate-y-0 lg:p-8">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 motion-reduce:transition-none"
                  >
                    <span
                      className="absolute left-[-30%] top-[-25%] h-[85%] w-[95%] rounded-full"
                      style={{ background: "radial-gradient(closest-side, rgba(190,203,255,0.60) 0%, transparent 100%)", filter: "blur(36px)" }}
                    />
                    <span
                      className="absolute left-[35%] top-[35%] h-[90%] w-[95%] rounded-full"
                      style={{ background: "radial-gradient(closest-side, rgba(190,203,255,0.75) 0%, transparent 100%)", filter: "blur(36px)" }}
                    />
                  </span>

                  <div className="mb-8 flex items-center justify-between">
                    <span
                      className="bg-[#BECBFF] px-3 py-1.5 text-[11px] font-semibold uppercase leading-none tracking-[0.14em] text-[#141414]"
                      style={{ borderRadius: PILL_RADIUS }}
                    >
                      {layer}
                    </span>
                    <span className="text-[13px] font-medium text-[#9ca3af]">{num}</span>
                  </div>
                  <Icon className="h-7 w-7 text-[#141414]" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="m-0 mt-5 text-[24px] font-medium leading-[1.2] tracking-[-0.01em] text-[#111827]">{title}</h3>
                  <p className={`mt-3 ${BODY}`}>{body}</p>
                  <p className="m-0 mt-auto pt-8 text-[12px] font-medium uppercase tracking-[0.12em] text-[#6B7280]">{built}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's new on the platform ── */}
      <section id="whats-new" aria-labelledby="ignite-heading" className="scroll-mt-24 border-y border-[#E6E6E6] bg-[#FAFAFA]">
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <Reveal className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-6"><Eyebrow>What&apos;s new</Eyebrow></div>
              <h2 id="ignite-heading" className={`m-0 max-w-[680px] ${H2}`}>The latest, and what it means for you.</h2>
            </div>
            <p className="m-0 max-w-[400px] text-[15px] leading-[1.6] text-[#4B5563]">
              We build on what is ready. We pilot what is next.
            </p>
          </Reveal>

          <ul role="list" className="m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {igniteUpdates.map(({ status, area, title, body }, i) => (
              <li key={title} className="h-full">
                <Reveal delay={(i % 3) * 0.06} className="h-full">
                  <article className="flex h-full flex-col rounded-[24px] border border-[#E6E6E6] bg-white p-6 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-[#BECBFF] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                    <div className="mb-5 flex items-center justify-between gap-3">
                      <span className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#6B7280]">{area}</span>
                      <span className={`rounded-md px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] ${STATUS_STYLE[status]}`}>
                        {status}
                      </span>
                    </div>
                    <h3 className="m-0 text-[22px] font-medium leading-[1.2] tracking-[-0.01em] text-[#111827]">{title}</h3>
                    <p className={`mt-2 ${BODY}`}>{body}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>

          <p className="m-0 mt-8 text-[13px] leading-[1.6] text-[#6B7280]">
            Availability as published by{" "}
            <a href={IGNITE_SOURCE} target="_blank" rel="noopener noreferrer" className="font-medium text-[#2563EB] underline underline-offset-2 hover:text-[#1D4ED8]">
              Microsoft
            </a>
            . Preview features can change before general availability.
          </p>
        </div>
      </section>

      {/* ── Data Engineering & Data Architecture for Generative AI ── */}
      <section aria-labelledby="data-services-heading" className="bg-white">
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <Reveal className="mb-12 grid grid-cols-1 gap-6 lg:mb-16 lg:grid-cols-2 lg:items-end lg:gap-16">
            <div>
              <div className="mb-6"><Eyebrow>Data for generative AI</Eyebrow></div>
              <h2 id="data-services-heading" className={`m-0 max-w-[560px] ${H2}`}>Great AI starts with great data.</h2>
            </div>
            <p className="m-0 max-w-[520px] text-[17px] leading-[1.6] text-[#4B5563]">
              We build the pipelines. We design the foundation. Your agents get the rest right.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
            {dataServices.map(({ label, heading, items }, i) => (
              <Reveal key={label} delay={i * 0.06} className="h-full">
                <article className="group relative isolate flex h-full flex-col overflow-hidden rounded-[28px] border border-[#E6E6E6] bg-white p-7 transition-[border-color] duration-300 hover:border-[#BECBFF] motion-reduce:transition-none lg:p-10">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 motion-reduce:transition-none"
                  >
                    <span
                      className="absolute left-[-30%] top-[-25%] h-[85%] w-[95%] rounded-full"
                      style={{ background: "radial-gradient(closest-side, rgba(190,203,255,0.45) 0%, transparent 100%)", filter: "blur(40px)" }}
                    />
                    <span
                      className="absolute left-[35%] top-[35%] h-[90%] w-[95%] rounded-full"
                      style={{ background: "radial-gradient(closest-side, rgba(190,203,255,0.55) 0%, transparent 100%)", filter: "blur(40px)" }}
                    />
                  </span>

                  <span
                    className="w-fit bg-[#BECBFF] px-3 py-1.5 text-[11px] font-semibold uppercase leading-none tracking-[0.14em] text-[#141414]"
                    style={{ borderRadius: PILL_RADIUS }}
                  >
                    {label}
                  </span>
                  <h3 className="m-0 mt-6 max-w-[440px] text-[26px] font-medium leading-[1.15] tracking-[-0.02em] text-[#111827] sm:text-[30px]">
                    {heading}
                  </h3>

                  <ol role="list" className="m-0 mt-8 list-none border-b border-[#E6E6E6] p-0">
                    {items.map(({ title, body }, n) => (
                      <li key={title} className="grid grid-cols-[36px_minmax(0,1fr)] gap-3 border-t border-[#E6E6E6] py-5">
                        <span className="pt-0.5 text-[13px] font-medium text-[#9ca3af]">{String(n + 1).padStart(2, "0")}</span>
                        <div>
                          <p className="m-0 text-[18px] font-medium leading-[1.3] text-[#111827]">{title}</p>
                          <p className="m-0 mt-1 text-[15px] leading-[1.55] text-[#4B5563]">{body}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Agent Factory ── light card with the periwinkle fog, like the rest of the page */}
      <section aria-labelledby="agent-factory-heading" className="bg-white">
        <div className={`${CONTAINER} ${SECTION_PB}`}>
          <Reveal>
            <div className="relative isolate overflow-hidden rounded-[28px] border border-[#E6E6E6] bg-white p-7 sm:p-10 lg:p-14">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-[10%] -top-[40%] -z-10 h-[120%] w-[60%] rounded-full"
                style={{ background: "radial-gradient(closest-side, rgba(190,203,255,0.70) 0%, transparent 100%)", filter: "blur(48px)" }}
              />
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-16">
                <div>
                  <span
                    className="inline-block bg-[#BECBFF] px-3 py-1.5 text-[11px] font-semibold uppercase leading-none tracking-[0.14em] text-[#141414]"
                    style={{ borderRadius: PILL_RADIUS }}
                  >
                    Agent Factory
                  </span>
                  <h2
                    id="agent-factory-heading"
                    className="m-0 mt-6 max-w-[620px] text-[32px] font-medium leading-[1.08] tracking-[-0.02em] text-[#111827] sm:text-[42px] lg:text-[52px]"
                  >
                    Customized, Production-Ready GenAI From Day One
                  </h2>
                  <div className="mt-9">
                    <Link
                      href="/schedule-call"
                      className={CTA_DARK}
                    >
                      Start your first agent
                    </Link>
                  </div>
                </div>

                <ol role="list" className="m-0 list-none border-b border-[#E6E6E6] p-0">
                  {factoryPoints.map(({ title, body }, n) => (
                    <li key={title} className="grid grid-cols-[36px_minmax(0,1fr)] gap-3 border-t border-[#E6E6E6] py-5">
                      <span className="pt-0.5 text-[13px] font-medium text-[#9ca3af]">{String(n + 1).padStart(2, "0")}</span>
                      <div>
                        <p className="m-0 text-[18px] font-medium leading-[1.3] text-[#111827]">{title}</p>
                        <p className="m-0 mt-1 text-[15px] leading-[1.55] text-[#4B5563]">{body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Four pillars ── */}
      <section className="border-t border-[#E6E6E6] bg-white">
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <Reveal className="mb-12 lg:mb-16">
            <div className="mb-6"><Eyebrow>What we build</Eyebrow></div>
            <h2 className={`m-0 max-w-[640px] ${H2}`}>Four capabilities. One integrated system.</h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6 xl:grid-cols-4">
            {pillars.map(({ num, title, body, icon: Icon }, i) => (
              <Reveal key={num} delay={i * 0.06} className="h-full">
                <article className={`flex h-full flex-col ${RADIUS_MD} ${CARD_SURFACE} p-6 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-[#BECBFF]`}>
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
        heading="Start leveraging GenAI in your business, today."
        body="Book a free consultation. We'll pinpoint your highest-value automation and outline a path to production — no obligation."
        topic="AI Agents & RAG"
      />

    </div>
  );
}
