import { Link } from "react-transition-progress/next";
import ProcessTimeline from "@/app/components/partials/services/ProcessTimeline";
import {
  Code2, Palette, CloudCog, CloudUpload,
  Bot, Database, Boxes, Workflow,
  Plane, Scale, CreditCard,
  BookOpen, GraduationCap, Library, Building2,
} from "lucide-react";

const solutions = [
  {
    label: "Services",
    items: [
      { href: "/services/custom-development",      icon: Code2,          title: "Custom Development",       desc: "Tailored software for your workflows"  },
      { href: "/services/design",                  icon: Palette,        title: "Design",                   desc: "Interfaces your users will love"        },
      { href: "/services/cloud-architecture",      icon: CloudCog,       title: "Cloud Architecture",        desc: "Scalable infrastructure design"         },
      { href: "/services/migrate-to-azure",        icon: CloudUpload,    title: "Migrate to Azure",          desc: "Low-risk migration to the cloud"        },
    ],
  },
  {
    label: "AI & Data",
    items: [
      { href: "/services/ai-agents-rag",           icon: Bot,            title: "AI Agents & RAG",           desc: "Intelligent automation & LLMs"          },
      { href: "/services/data-lifecycle",          icon: Database,       title: "Data Lifecycle",            desc: "Raw data to live dashboards"            },
      { href: "/services/cloud-native-sd",         icon: Boxes,          title: "Cloud Native Dev",          desc: "Kubernetes & microservices"             },
      { href: "/services/devops-on-azure",         icon: Workflow,       title: "DevOps on Azure",           desc: "CI/CD & infrastructure-as-code"         },
    ],
  },
  {
    label: "Products",
    items: [
      { href: "/products/airline-booking",         icon: Plane,          title: "Airline & Travel Booking",  desc: "GDS-connected booking SaaS"             },
      { href: "/products/ai-legal-workspace",      icon: Scale,          title: "AI Legal Workspace",        desc: "AI for law firms & legal teams"         },
      { href: "/products/payment-automation",      icon: CreditCard,     title: "Payment Automation",        desc: "Recurring billing & reconciliation"     },
    ],
  },
  {
    label: "Company",
    items: [
      { href: "/case-studies",                     icon: BookOpen,       title: "Case Studies",              desc: "How we deliver for clients"             },
      { href: "/workshops",                        icon: GraduationCap,  title: "Workshops",                 desc: "Azure & Kubernetes training"            },
      { href: "/knowledge-base",                   icon: Library,        title: "Knowledge Base",            desc: "Guides and articles"                    },
      { href: "/about",                            icon: Building2,      title: "About Us",                  desc: "Our team and mission"                   },
    ],
  },
];

const processSteps = [
  {
    step: "01",
    heading: "Use-Case Discovery",
    body: "We map your highest-value automation opportunities — interviewing stakeholders, auditing workflows, and pinpointing where AI agents will create measurable, lasting impact.",
  },
  {
    step: "02",
    heading: "Architecture & Data Design",
    body: "We design the agent architecture, RAG pipeline, and data connectors — selecting the right LLM, vector store, and orchestration layer for your compliance and latency requirements.",
  },
  {
    step: "03",
    heading: "Build & Integrate",
    body: "We build and deploy the agents, wiring them to your tools, SharePoint, APIs, or databases — with monitoring and observability configured from the first commit.",
  },
  {
    step: "04",
    heading: "Evaluate & Tune",
    body: "Accuracy benchmarks, hallucination testing, and latency profiling before go-live. Every metric is measured and reviewed with your team before anyone touches production.",
  },
  {
    step: "05",
    heading: "Ship & Scale",
    body: "Production deployment with feedback loops, retraining hooks, and an escalation path. We start with one high-value agent and expand from there — systematically.",
  },
];

const techStack = [
  "Azure AI Foundry",
  "AWS Bedrock",
  "Azure OpenAI",
  "GPT-4o",
  "Claude",
  "Mistral",
  "Semantic Kernel",
  "LangChain",
  "Pinecone",
  "Azure AI Search",
];

const capabilities = [
  {
    tag: "Agents",
    title: "Custom AI Agents",
    body: "Autonomous agents that monitor, decide, and act — integrated with your tools via Semantic Kernel or LangChain, deployed on Azure AI Foundry or AWS Bedrock.",
  },
  {
    tag: "RAG",
    title: "Retrieval-Augmented Generation",
    body: "RAG pipelines over your documents, SharePoint, or Confluence — accurate, cited answers with hallucination dramatically reduced.",
  },
  {
    tag: "LLMs",
    title: "LLM Integration & Fine-Tuning",
    body: "Azure OpenAI, GPT-4o, Claude, or Mistral — we select, fine-tune, and integrate the right model for your use case and data-residency requirements.",
  },
  {
    tag: "Automation",
    title: "AI Workflow Automation",
    body: "Multi-agent pipelines that trigger on events, process with AI, and push results where your team already works — email, Slack, ERP, CRM.",
  },
  {
    tag: "Knowledge",
    title: "Knowledge Base AI",
    body: "Turn internal documentation, support tickets, and tribal knowledge into a searchable, AI-powered source of truth for every team member.",
  },
  {
    tag: "Ops",
    title: "Evaluation & Observability",
    body: "Every deployment includes accuracy benchmarks, latency monitoring, and feedback loops so your AI keeps performing in production.",
  },
];

export default function AIAgentsRAGPage() {
  return (
    <>
      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .gradient-text {
          background: linear-gradient(135deg, #7c3aed 0%, #e89a78 55%, #059669 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-36 pb-16">

          {/* Pill tag */}
          <div className="inline-flex items-center gap-2.5 bg-[#f4f0ff] border border-[#e2d9ff] rounded-full px-4 py-1.5 mb-10">
            <span className="text-[11px] font-semibold text-[#7c3aed] tracking-widest uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              AI Agents · LLMs · Azure &amp; AWS
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center gap-16 xl:gap-24">

            {/* Headline block */}
            <div className="flex-1 min-w-0">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-[#0a0e1a] leading-[1.0] tracking-tight mb-8">
                AI that works<br />
                <span className="gradient-text">inside</span><br />
                your business.
              </h1>
              <p className="text-[#4b5563] text-xl leading-relaxed max-w-[500px] mb-10">
                We implement AI Agents &amp; LLMs that automate decisions, workflows, and operations — connected to your own data and tools.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/schedule-call"
                  className="bg-[#0a0e1a] hover:bg-[#1a2235] text-white px-8 py-4 rounded-full text-base font-semibold transition-colors whitespace-nowrap"
                >
                  Book an AI consultation
                </Link>
                <Link
                  href="/solutions"
                  className="bg-white border border-[#e5e7eb] hover:border-[#d1d5db] hover:bg-[#f9fafb] text-[#374151] px-8 py-4 rounded-full text-base font-medium transition-colors whitespace-nowrap"
                >
                  See all solutions
                </Link>
              </div>
            </div>

            {/* Agent terminal — dark card on white bg */}
            <div className="flex-1 lg:max-w-[480px] w-full">
              <div
                className="rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  background: "#0d1220",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {/* Window chrome */}
                <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.07]" style={{ background: "#111827" }}>
                  <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
                  <span className="ml-3 text-xs text-white/30">agent — invoice-processor-v2</span>
                </div>
                {/* Log */}
                <div className="p-5 flex flex-col gap-3 text-sm">
                  {[
                    { icon: "✓", iconColor: "#28c840", time: "09:14:02", text: "Received 43 invoices from SharePoint", textOpacity: "text-white/75" },
                    { icon: "✓", iconColor: "#28c840", time: "09:14:04", text: "Extracted vendor, amount, due date", textOpacity: "text-white/75" },
                    { icon: "✓", iconColor: "#28c840", time: "09:14:06", text: "Matched against ERP purchase orders", textOpacity: "text-white/75" },
                    { icon: "✓", iconColor: "#28c840", time: "09:14:09", text: "Flagged 2 discrepancies for review", textOpacity: "text-white/75" },
                    { icon: "→", iconColor: "#e89a78", time: "09:14:11", text: "Auto-approving 41 clean invoices", textOpacity: "text-white" },
                  ].map((row, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-xs mt-0.5 shrink-0" style={{ color: row.iconColor }}>{row.icon}</span>
                      <div>
                        <span className="text-white/30 text-xs mr-2">{row.time}</span>
                        <span className={`${row.textOpacity}`}>{row.text}</span>
                      </div>
                    </div>
                  ))}
                  <div className="flex items-start gap-3">
                    <span className="text-white/20 text-xs mt-0.5 shrink-0">○</span>
                    <div>
                      <span className="text-white/30 text-xs mr-2">09:14:12</span>
                      <span className="text-white/50">Posting to SAP AP module</span>
                      <span className="inline-block w-[3px] h-3.5 bg-white/60 ml-1 align-middle" style={{ animation: "blink 1s step-end infinite" }} />
                    </div>
                  </div>
                </div>
                {/* Status bar */}
                <div className="px-5 py-3 flex items-center justify-between border-t border-white/[0.06] text-xs" style={{ background: "#111827" }}>
                  <span className="text-white/40">95% automated · 2 flagged</span>
                  <span className="flex items-center gap-1.5 text-white/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#28c840]" style={{ boxShadow: "0 0 5px #28c840" }} />
                    running
                  </span>
                </div>
              </div>

              {/* Stats row */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { val: "95%", label: "tasks automated" },
                  { val: "< 30s", label: "avg processing" },
                  { val: "0", label: "manual handoffs" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl px-4 py-3 text-center bg-[#f9fafb] border border-[#e5e7eb]">
                    <p className="text-[#0a0e1a] text-lg font-bold leading-none mb-1">{s.val}</p>
                    <p className="text-[#9ca3af] text-[11px] leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Glass solutions panel */}
          <div className="mt-14">
            <div
              className="overflow-hidden"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                background: "rgba(255,255,255,0.72)",
                backdropFilter: "blur(48px) saturate(200%)",
                WebkitBackdropFilter: "blur(48px) saturate(200%)",
                border: "1px solid rgba(255,255,255,0.90)",
                borderRadius: 20,
                boxShadow: "0 24px 64px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.98)",
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-10 pb-8">
                {solutions.map((col) => (
                  <div key={col.label} className="flex flex-col">
                    <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#9A9A9A] mb-5">
                      {col.label}
                    </p>
                    <ul className="flex flex-col gap-5">
                      {col.items.map((item) => {
                        const Icon = item.icon;
                        return (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="group flex items-start gap-3 px-2.5 py-2 -mx-2.5 rounded-[10px] hover:bg-black/[0.05] transition-colors duration-150"
                            >
                              <Icon
                                size={20}
                                strokeWidth={1.5}
                                className="shrink-0 mt-[2px] text-[#0E0E12] group-hover:text-[#e89a78] transition-colors duration-150"
                              />
                              <div className="flex flex-col gap-[4px] min-w-0">
                                <span className="text-[14px] font-semibold leading-snug text-[#0E0E12] group-hover:text-[#e89a78] transition-colors duration-150">
                                  {item.title}
                                </span>
                                <span className="text-[12.5px] leading-snug text-[#6B6B6B] line-clamp-2">
                                  {item.desc}
                                </span>
                              </div>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
              <div
                className="px-10 py-5 border-t border-black/[0.07] flex items-center justify-between"
                style={{ background: "rgba(255,255,255,0.40)" }}
              >
                <p className="text-[13px] text-[#9A9A9A]">Not sure where to start?</p>
                <Link
                  href="/schedule-call"
                  className="inline-flex items-center gap-2 text-[13px] font-medium text-[#e89a78] hover:text-[#d4836a] transition-colors"
                >
                  Schedule a free call
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tech stack strip ───────────────────────────── */}
      <div className="bg-[#f9fafb] border-y border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-wrap items-center gap-x-8 gap-y-3">
          <span className="text-[11px] uppercase tracking-widest text-[#9ca3af] font-semibold shrink-0" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Built on
          </span>
          {techStack.map((t) => (
            <span key={t} className="text-sm text-[#6b7280] whitespace-nowrap">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── Three pillars ──────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="flex items-center gap-2 mb-6">
            <p className="text-xs uppercase tracking-wider text-[#6b7280] font-medium">What we build</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0e1a] leading-tight mb-12 max-w-2xl">
            Three capabilities.<br />One integrated system.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

            {/* Card 1 — Violet */}
            <div className="rounded-3xl p-10 flex flex-col gap-6 relative overflow-hidden" style={{ background: "linear-gradient(145deg, #7c3aed 0%, #6d28d9 100%)" }}>
              <div aria-hidden className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-20" style={{ background: "radial-gradient(circle, white 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-white/60" style={{ fontFamily: "'JetBrains Mono', monospace" }}>01</span>
                <h3 className="text-2xl font-bold text-white leading-snug">Custom AI Agents</h3>
              </div>
              <p className="text-white/80 text-base leading-relaxed flex-1">
                We build autonomous AI agents tailored to your business — agents that research, decide, and act across your tools, APIs, and data without manual intervention.
              </p>
              <Link
                href="/schedule-call"
                className="self-start inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
              >
                Get started
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>

            {/* Card 2 — Sky blue */}
            <div className="rounded-3xl p-10 flex flex-col gap-6 relative overflow-hidden" style={{ background: "linear-gradient(145deg, #0284c7 0%, #0369a1 100%)" }}>
              <div aria-hidden className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-20" style={{ background: "radial-gradient(circle, white 0%, transparent 70%)", transform: "translate(-30%, 30%)" }} />
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-white/60" style={{ fontFamily: "'JetBrains Mono', monospace" }}>02</span>
                <h3 className="text-2xl font-bold text-white leading-snug">LLM Integration &amp; RAG</h3>
              </div>
              <p className="text-white/80 text-base leading-relaxed flex-1">
                We embed large language models into your products and internal tools — connected to your own data via RAG so every answer is accurate, private, and on-brand.
              </p>
              <Link
                href="/schedule-call"
                className="self-start inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
              >
                Get started
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>

            {/* Card 3 — Emerald */}
            <div className="rounded-3xl p-10 flex flex-col gap-6 relative overflow-hidden" style={{ background: "linear-gradient(145deg, #059669 0%, #047857 100%)" }}>
              <div aria-hidden className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-20" style={{ background: "radial-gradient(circle, white 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-white/60" style={{ fontFamily: "'JetBrains Mono', monospace" }}>03</span>
                <h3 className="text-2xl font-bold text-white leading-snug">AI Workflow Automation</h3>
              </div>
              <p className="text-white/80 text-base leading-relaxed flex-1">
                We replace manual processes with multi-agent pipelines — from document processing and approvals to reporting and customer interactions, fully automated end-to-end.
              </p>
              <Link
                href="/schedule-call"
                className="self-start inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
              >
                Get started
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Capabilities grid ──────────────────────────── */}
      <section className="bg-[#f9fafb] border-t border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <p className="text-xs uppercase tracking-wider text-[#6b7280] font-medium">What&apos;s included</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0a0e1a] leading-tight max-w-xl">
                The full AI stack,<br />end to end.
              </h2>
            </div>
            <Link
              href="/schedule-call"
              className="shrink-0 self-start md:self-end inline-flex items-center bg-[#0a0e1a] hover:bg-[#1a2235] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors whitespace-nowrap"
            >
              Book an AI consultation
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 flex flex-col gap-3 border border-[#e5e7eb] hover:border-[#d1d5db] hover:shadow-sm transition-all"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#e89a78]">{cap.tag}</span>
                <h3 className="text-lg font-bold text-[#0a0e1a] leading-snug">{cap.title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{cap.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why / For whom callout ─────────────────────── */}
      <section className="bg-white border-t border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="rounded-3xl bg-[#0a0e1a] px-10 py-12 flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <p className="text-xs uppercase tracking-wider text-white/50 font-medium">Why AI Agents?</p>
              </div>
              <p className="text-white text-lg leading-relaxed">
                The difference between AI as a demo and AI as a business asset is integration. Agents connected to your real data, systems, and workflows create compounding value every month — not a one-time bump.
              </p>
            </div>
            <div className="rounded-3xl bg-[#f4f0ff] border border-[#e2d9ff] px-10 py-12 flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <p className="text-xs uppercase tracking-wider text-[#7c3aed]/70 font-medium">For whom?</p>
              </div>
              <p className="text-[#1f1035] text-lg leading-relaxed">
                Operations teams drowning in manual processing. Finance chasing approvals. Legal reviewing contracts. Support repeating answers. If your team does repetitive knowledge work, there is an agent for it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process timeline ───────────────────────────── */}
      <section className="bg-[#f9fafb] border-t border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="flex items-center gap-2 mb-10">
            <p className="text-xs uppercase tracking-wider text-[#6b7280] font-medium">How we work</p>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a0e1a] max-w-[800px] leading-tight">
              From discovery to production<br />in weeks — not months.
            </h2>
            <Link
              href="/schedule-call"
              className="shrink-0 self-start lg:self-end inline-flex items-center bg-[#0a0e1a] hover:bg-[#1a2235] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors whitespace-nowrap"
            >
              Schedule a free call
            </Link>
          </div>
          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

    </>
  );
}
