import type { Metadata } from "next";
import Link from "next/link";
import {
  Code2, Palette, CloudCog, CloudUpload,
  Bot, Database, Boxes, Workflow, Sparkles,
  Plane, Scale, CreditCard,
  BookOpen, GraduationCap, Library, Building2,
  type LucideIcon,
} from "lucide-react";
import { CONTAINER, Eyebrow, PrimaryButton, SecondaryButton } from "@/app/components/partials/services/ServiceUI";

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
];

const capabilities = [
  { tag: "Agents", title: "Custom AI Agents", body: "Autonomous agents that monitor, decide, and act — integrated with your tools via Semantic Kernel or LangChain, deployed on Azure AI Foundry or AWS Bedrock." },
  { tag: "RAG", title: "Retrieval-Augmented Generation", body: "RAG pipelines over your documents, SharePoint, or Confluence — accurate, cited answers with hallucination dramatically reduced." },
  { tag: "LLMs", title: "LLM Integration & Fine-Tuning", body: "Azure OpenAI, GPT-4o, Claude, or Mistral — we select, fine-tune, and integrate the right model for your use case and data-residency requirements." },
  { tag: "Automation", title: "AI Workflow Automation", body: "Multi-agent pipelines that trigger on events, process with AI, and push results where your team already works — email, Slack, ERP, CRM." },
  { tag: "Knowledge", title: "Knowledge Base AI", body: "Turn internal documentation, support tickets, and tribal knowledge into a searchable, AI-powered source of truth for every team member." },
  { tag: "Ops", title: "Evaluation & Observability", body: "Every deployment includes accuracy benchmarks, latency monitoring, and feedback loops so your AI keeps performing in production." },
];

const processSteps = [
  { step: "01", heading: "Use-Case Discovery", body: "We map your highest-value automation opportunities — interviewing stakeholders, auditing workflows, and pinpointing where AI agents will create measurable, lasting impact." },
  { step: "02", heading: "Architecture & Data Design", body: "We design the agent architecture, RAG pipeline, and data connectors — selecting the right LLM, vector store, and orchestration layer for your compliance and latency requirements." },
  { step: "03", heading: "Build & Integrate", body: "We build and deploy the agents, wiring them to your tools, SharePoint, APIs, or databases — with monitoring and observability configured from the first commit." },
  { step: "04", heading: "Evaluate & Tune", body: "Accuracy benchmarks, hallucination testing, and latency profiling before go-live. Every metric is measured and reviewed with your team before anyone touches production." },
  { step: "05", heading: "Ship & Scale", body: "Production deployment with feedback loops, retraining hooks, and an escalation path. We start with one high-value agent and expand from there — systematically." },
];

const techStack = [
  "Azure AI Foundry", "AWS Bedrock", "Azure OpenAI", "GPT-4o", "Claude",
  "Mistral", "Semantic Kernel", "LangChain", "Pinecone", "Azure AI Search",
];

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
      { href: "/ai-legal-workspace", icon: Scale, title: "AI Legal Workspace", desc: "AI for law firms & legal teams" },
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

export default function AIAgentsRAGPage() {
  return (
    <div className="font-switzer">

      {/* ── Hero ── */}
      <div className="industries-hero-bg">
        <div className={`${CONTAINER} pb-12 pt-32 lg:pt-28`}>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">

            {/* Left */}
            <div className="flex-1">
              <div className="mb-6"><Eyebrow>AI Agents · LLMs · Azure &amp; AWS</Eyebrow></div>
              <h1 className="m-0 text-[40px] font-medium leading-[1.05] text-[#111] sm:text-[52px] lg:text-[64px]">
                AI that works inside your business.
              </h1>
              <p className="mt-6 max-w-[520px] text-[18px] font-light leading-[1.6] text-[#111]">
                We implement AI Agents &amp; LLMs that automate decisions, workflows, and
                operations — connected to your own data and tools.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton href="/schedule-call">Book an AI consultation</PrimaryButton>
                <SecondaryButton href="/solutions">See all solutions</SecondaryButton>
              </div>
            </div>

            {/* Right — LLM Integration & RAG icon */}
            <div className="relative hidden flex-1 items-center justify-center lg:flex">
              <svg width="0" height="0" className="absolute" aria-hidden="true">
                <defs>
                  <linearGradient id="llm-rag-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#1e4fd6" />
                  </linearGradient>
                </defs>
              </svg>
              <Sparkles className="h-40 w-40 xl:h-52 xl:w-52" stroke="url(#llm-rag-grad)" strokeWidth={1.4} aria-hidden="true" />
            </div>

          </div>
        </div>

        {/* multicolour divider — full viewport width */}
        <hr className="linegrad-divider m-0 h-1 w-full border-0" />
      </div>

      {/* ── Tech stack strip ── */}
      <div className="border-b border-[#eee] bg-[#fafafa]">
        <div className={`${CONTAINER} flex flex-wrap items-center gap-x-8 gap-y-3 py-5`}>
          <span className="shrink-0 text-[11px] font-medium uppercase tracking-[0.14em] text-[#9ca3af]">Built on</span>
          {techStack.map((t) => (
            <span key={t} className="whitespace-nowrap text-[15px] font-normal text-[#6b7280]">{t}</span>
          ))}
        </div>
      </div>

      {/* ── Three pillars ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} py-20 lg:py-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>What we build</Eyebrow></div>
            <h2 className="m-0 max-w-[560px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              Three capabilities. One integrated system.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
            {pillars.map(({ num, title, body, icon: Icon }) => (
              <article
                key={num}
                className="group flex h-full flex-col rounded-lg border border-[#e6e6e6] bg-white p-6 transition-[filter,box-shadow] duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:[filter:invert(1)]"
              >
                <div className="mb-5 flex items-center justify-between">
                  <Icon className="h-7 w-7 text-[#111]" strokeWidth={1.6} aria-hidden="true" />
                  <span className="text-[13px] font-light text-[#9ca3af]">{num}</span>
                </div>
                <h3 className="m-0 text-[20px] font-medium leading-[1.25] text-[#111] lg:text-[22px]">{title}</h3>
                <p className="mt-2 text-[16px] font-normal leading-[1.5] text-[#111]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4"><Eyebrow>What&apos;s included</Eyebrow></div>
              <h2 className="m-0 max-w-[520px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
                The full AI stack, end to end.
              </h2>
            </div>
            <PrimaryButton href="/schedule-call">Book an AI consultation</PrimaryButton>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {capabilities.map(({ tag, title, body }) => (
              <div key={title} className="flex h-full flex-col rounded-lg border border-[#e6e6e6] bg-white p-6">
                <span className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em] text-[#9ca3af]">{tag}</span>
                <h3 className="m-0 text-[20px] font-medium leading-[1.25] text-[#111]">{title}</h3>
                <p className="mt-2 text-[16px] font-normal leading-[1.5] text-[#111]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why / For whom ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="flex flex-col gap-4 rounded-lg bg-[#111] p-8 lg:p-10">
              <Eyebrow><span className="text-white/50">Why AI Agents?</span></Eyebrow>
              <p className="m-0 text-[18px] font-light leading-[1.6] text-white/90">
                The difference between AI as a demo and AI as a business asset is integration.
                Agents connected to your real data, systems, and workflows create compounding
                value every month — not a one-time bump.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-lg border border-[#e6e6e6] bg-white p-8 lg:p-10">
              <Eyebrow>For whom?</Eyebrow>
              <p className="m-0 text-[18px] font-light leading-[1.6] text-[#111]">
                Operations teams drowning in manual processing. Finance chasing approvals. Legal
                reviewing contracts. Support repeating answers. If your team does repetitive
                knowledge work, there is an agent for it.
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
                From discovery to production in weeks — not months.
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

      {/* ── Explore more (solutions directory) ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="overflow-hidden rounded-lg border border-[#e6e6e6] bg-white">
            <div className="grid grid-cols-1 gap-8 p-8 sm:grid-cols-2 lg:grid-cols-4 lg:p-10">
              {solutions.map((col) => (
                <div key={col.label} className="flex flex-col">
                  <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#9ca3af]">{col.label}</p>
                  <ul className="flex flex-col gap-4">
                    {col.items.map(({ href, icon: Icon, title, desc }) => (
                      <li key={href}>
                        <Link href={href} className="group -mx-2.5 flex items-start gap-3 rounded-[10px] px-2.5 py-2 transition-colors hover:bg-[#fafafa]">
                          <Icon size={20} strokeWidth={1.5} className="mt-0.5 shrink-0 text-[#111]" aria-hidden="true" />
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
            <div className="flex items-center justify-between border-t border-[#eee] bg-[#fafafa] px-8 py-5 lg:px-10">
              <p className="m-0 text-[13px] text-[#9ca3af]">Not sure where to start?</p>
              <Link href="/schedule-call" className="inline-flex items-center gap-2 text-[13px] font-medium text-[#111] transition-opacity hover:opacity-70">
                Schedule a free call
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a0e1a]">
        <div className={`${CONTAINER} flex flex-col gap-10 py-20 md:flex-row md:items-center md:justify-between`}>
          <div className="flex max-w-xl flex-col gap-4">
            <h2 className="m-0 text-[28px] font-medium leading-[1.1] text-white md:text-[44px]">
              Ready to put AI to work?
            </h2>
            <p className="m-0 text-[18px] font-light leading-[1.6] text-white/70">
              Book a free consultation. We&apos;ll pinpoint your highest-value automation and
              outline a path to production — no obligation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton href="/schedule-call" dark>Book an AI consultation</PrimaryButton>
            <SecondaryButton href="/solutions" onDark>All solutions</SecondaryButton>
          </div>
        </div>
      </section>

    </div>
  );
}
