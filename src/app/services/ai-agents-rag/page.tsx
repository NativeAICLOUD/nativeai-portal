import { Link } from "react-transition-progress/next";
import ServiceFooter from "@/app/components/partials/services/ServiceFooter";
import ProcessTimeline from "@/app/components/partials/services/ProcessTimeline";

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

const capabilities = [
  {
    title: "Custom AI Agents",
    body: "Autonomous agents that monitor, decide, and act — integrated with your tools via Semantic Kernel or LangChain, running on Azure AI Foundry or AWS Bedrock.",
    tag: "Agents",
    decoration: "top-left" as const,
  },
  {
    title: "Retrieval-Augmented Generation",
    body: "RAG pipelines over your documents, SharePoint, Confluence, or any data source — cited answers with hallucination dramatically reduced.",
    tag: "RAG",
  },
  {
    title: "LLM Integration & Fine-Tuning",
    body: "Azure OpenAI, GPT-4o, Claude, or Mistral — we select, fine-tune, and integrate the right model for your use case and data-residency requirements.",
    tag: "LLMs",
  },
  {
    title: "AI Workflow Automation",
    body: "Multi-agent pipelines that trigger on events, process with AI, and push results where your team already works — email, Slack, ERP, CRM.",
    tag: "Automation",
  },
  {
    title: "Knowledge Base AI",
    body: "Turn internal documentation, support tickets, and tribal knowledge into a searchable, AI-powered source of truth for every team member.",
    tag: "Knowledge",
  },
  {
    title: "Evaluation & Observability",
    body: "Every deployment includes accuracy benchmarks, latency monitoring, and feedback loops so your AI keeps performing in production — not just in demos.",
    tag: "Ops",
    decoration: "bottom-right" as const,
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

export default function AIAgentsRAGPage() {
  return (
    <>
      {/* ── Hero ── */}
      <div className="bg-[#06080f] relative overflow-hidden">

        {/* Subtle grid */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Orange radial glow */}
        <div
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            top: "10%",
            right: "-10%",
            width: 700,
            height: 700,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(232,154,120,0.12) 0%, transparent 65%)",
          }}
        />
        <div
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            bottom: "0%",
            left: "-5%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(232,154,120,0.06) 0%, transparent 65%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-40 pb-28">
          <div className="flex flex-col lg:flex-row lg:items-center gap-16 xl:gap-24">

            {/* Left column */}
            <div className="flex-1 min-w-0">
              {/* Pill tag */}
              <div className="inline-flex items-center gap-2.5 bg-white/[0.05] border border-white/[0.08] rounded-full px-4 py-1.5 mb-10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" style={{ boxShadow: "0 0 6px #e89a78" }} />
                <span className="text-[11px] font-medium text-white/40 tracking-widest uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  AI Agents · LLMs · Azure &amp; AWS
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.04] mb-7">
                We implement<br />
                AI Agents &amp;<br />
                <span style={{ color: "#e89a78" }}>LLMs</span> inside<br />
                your business
              </h1>

              <p className="text-white/45 text-lg leading-relaxed max-w-[480px] mb-12">
                Automating decisions, workflows, and operations — connected to your own data, tools, and team.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/schedule-call"
                  className="bg-[#e89a78] hover:bg-[#d4836a] text-white px-7 py-3.5 rounded-full text-base font-medium transition-colors whitespace-nowrap"
                >
                  Book an AI consultation
                </Link>
                <Link
                  href="/solutions"
                  className="bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.08] text-white/70 hover:text-white px-7 py-3.5 rounded-full text-base font-medium transition-colors whitespace-nowrap"
                >
                  See all solutions
                </Link>
              </div>
            </div>

            {/* Right column — agent terminal */}
            <div className="flex-1 lg:max-w-[480px] w-full">
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "#0d1220",
                  border: "1px solid rgba(255,255,255,0.07)",
                  boxShadow: "0 32px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03)",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {/* Window chrome */}
                <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06]" style={{ background: "rgba(255,255,255,0.02)" }}>
                  <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
                  <span className="ml-3 text-xs text-white/20">agent — invoice-processor-v2</span>
                </div>

                {/* Agent log */}
                <div className="p-5 flex flex-col gap-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-[#28c840] text-xs mt-0.5 shrink-0">✓</span>
                    <div>
                      <span className="text-white/35 text-xs mr-2">09:14:02</span>
                      <span className="text-white/60">Received 43 invoices from SharePoint</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#28c840] text-xs mt-0.5 shrink-0">✓</span>
                    <div>
                      <span className="text-white/35 text-xs mr-2">09:14:04</span>
                      <span className="text-white/60">Extracted vendor, amount, due date</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#28c840] text-xs mt-0.5 shrink-0">✓</span>
                    <div>
                      <span className="text-white/35 text-xs mr-2">09:14:06</span>
                      <span className="text-white/60">Matched against ERP purchase orders</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#28c840] text-xs mt-0.5 shrink-0">✓</span>
                    <div>
                      <span className="text-white/35 text-xs mr-2">09:14:09</span>
                      <span className="text-white/60">Flagged 2 discrepancies for review</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#e89a78] text-xs mt-0.5 shrink-0">→</span>
                    <div>
                      <span className="text-white/35 text-xs mr-2">09:14:11</span>
                      <span className="text-white/80">Auto-approving 41 clean invoices</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-white/20 text-xs mt-0.5 shrink-0">○</span>
                    <div>
                      <span className="text-white/35 text-xs mr-2">09:14:12</span>
                      <span className="text-white/30">Posting to SAP AP module</span>
                      <span className="inline-block w-1 h-3.5 bg-white/40 ml-1 align-middle" style={{ animation: "blink 1s step-end infinite" }} />
                    </div>
                  </div>
                </div>

                {/* Status bar */}
                <div
                  className="px-5 py-3 flex items-center justify-between border-t border-white/[0.05] text-xs text-white/25"
                  style={{ background: "rgba(255,255,255,0.015)" }}
                >
                  <span>95% automated · 2 flagged</span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#28c840]" style={{ boxShadow: "0 0 5px #28c840" }} />
                    running
                  </span>
                </div>
              </div>

              {/* Mini stats below terminal */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { val: "95%", label: "tasks automated" },
                  { val: "< 30s", label: "avg processing" },
                  { val: "0", label: "manual handoffs" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl px-4 py-3 text-center"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <p className="text-white text-lg font-bold leading-none mb-1">{s.val}</p>
                    <p className="text-white/30 text-[11px] leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Three main services ── */}
      <div className="bg-[#0a0e1a]">
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="flex items-center gap-2 mb-12">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
            <p className="text-xs uppercase tracking-wider text-white/30 font-medium">What we build</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

            {/* Card 1 — Custom AI Agents */}
            <div
              className="lg:col-span-1 rounded-2xl p-8 flex flex-col gap-5 relative overflow-hidden"
              style={{ background: "#0f1623", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div aria-hidden className="absolute -top-12 -right-12 w-40 h-40 rounded-full" style={{ background: "radial-gradient(circle, rgba(232,154,120,0.12) 0%, transparent 70%)" }} />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#e89a78]">Custom AI Agents</span>
              <h3 className="text-2xl font-bold text-white leading-snug">
                Autonomous agents built for your workflows
              </h3>
              <p className="text-white/45 text-sm leading-relaxed flex-1">
                We build AI agents that perceive, plan, and act inside your systems — integrated with your APIs, databases, and tools via Semantic Kernel or LangChain, deployed on Azure AI Foundry or AWS Bedrock.
              </p>
              <Link
                href="/schedule-call"
                className="self-start inline-flex items-center gap-2 text-sm text-[#e89a78] hover:text-[#d4836a] font-medium transition-colors"
              >
                Get started
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Card 2 — LLM Integration & RAG */}
            <div
              className="lg:col-span-1 rounded-2xl p-8 flex flex-col gap-5 relative overflow-hidden"
              style={{ background: "#0f1623", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div aria-hidden className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full" style={{ background: "radial-gradient(circle, rgba(232,154,120,0.08) 0%, transparent 70%)" }} />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#e89a78]">LLM Integration &amp; RAG</span>
              <h3 className="text-2xl font-bold text-white leading-snug">
                LLMs connected to your own data
              </h3>
              <p className="text-white/45 text-sm leading-relaxed flex-1">
                We embed large language models into your products and internal tools — connected to your own data via RAG so every answer is accurate, private, and grounded in your context, not generic internet knowledge.
              </p>
              <Link
                href="/schedule-call"
                className="self-start inline-flex items-center gap-2 text-sm text-[#e89a78] hover:text-[#d4836a] font-medium transition-colors"
              >
                Get started
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Card 3 — AI Workflow Automation */}
            <div
              className="lg:col-span-1 rounded-2xl p-8 flex flex-col gap-5 relative overflow-hidden"
              style={{ background: "#0f1623", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div aria-hidden className="absolute -top-8 -left-8 w-32 h-32 rounded-full" style={{ background: "radial-gradient(circle, rgba(232,154,120,0.08) 0%, transparent 70%)" }} />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#e89a78]">AI Workflow Automation</span>
              <h3 className="text-2xl font-bold text-white leading-snug">
                Replace manual processes end-to-end
              </h3>
              <p className="text-white/45 text-sm leading-relaxed flex-1">
                We replace manual processes with multi-agent pipelines — from document processing and approvals to reporting and customer interactions, fully automated end-to-end with no human bottleneck in the loop.
              </p>
              <Link
                href="/schedule-call"
                className="self-start inline-flex items-center gap-2 text-sm text-[#e89a78] hover:text-[#d4836a] font-medium transition-colors"
              >
                Get started
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* ── Tech stack strip ── */}
      <div className="bg-[#0a0e1a] border-y border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-wrap items-center gap-x-8 gap-y-3">
          <span className="text-[11px] uppercase tracking-widest text-white/20 font-medium shrink-0" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Built on
          </span>
          {techStack.map((t) => (
            <span key={t} className="text-sm text-white/30 hover:text-white/55 transition-colors cursor-default whitespace-nowrap">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── Capabilities — what's included ── */}
      <div className="bg-[#f4ebe8] relative">
        {/* Noise overlay */}
        <div
          aria-hidden
          className="fixed inset-0 pointer-events-none select-none"
          style={{
            zIndex: 0,
            backgroundImage: "url('/img/noisy-background.png'), url('/img/noise-background.jpg')",
            backgroundSize: "cover, cover",
            mixBlendMode: "multiply",
          }}
        />

        <div className="relative" style={{ zIndex: 1 }}>
          <section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16">
            <div className="flex items-center gap-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
              <p className="text-xs uppercase tracking-wider text-[#1a1a1a] font-medium">What&apos;s included</p>
            </div>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              <p className="text-[#1a1d2e] text-base leading-relaxed max-w-[650px]">
                Every engagement covers the full AI stack — from agent architecture and RAG pipelines to fine-tuning, observability, and production support. We don&apos;t hand you a notebook and call it done.
              </p>
              <Link
                href="/schedule-call"
                className="shrink-0 self-start inline-flex items-center bg-[#0a0a0a] hover:bg-[#1a1d2e] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors whitespace-nowrap"
              >
                Book an AI consultation
              </Link>
            </div>
          </section>

          {/* Capability cards */}
          <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {capabilities.map((cap, i) => (
                <div
                  key={i}
                  className="relative rounded-xl overflow-hidden bg-[#ece8e0] p-8 min-h-[260px] flex flex-col gap-3"
                >
                  {cap.decoration === "top-left" && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src="/decorations/blob-orange-corner.svg"
                      width={220}
                      height={220}
                      alt=""
                      aria-hidden="true"
                      className="absolute top-0 left-0 pointer-events-none select-none"
                    />
                  )}
                  {cap.decoration === "bottom-right" && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src="/decorations/blob-sage-corner.svg"
                      width={220}
                      height={220}
                      alt=""
                      aria-hidden="true"
                      className="absolute bottom-0 right-0 pointer-events-none select-none"
                    />
                  )}
                  <span className="relative text-[10px] font-bold uppercase tracking-widest text-[#e89a78] z-10">
                    {cap.tag}
                  </span>
                  <h3 className="relative text-xl font-semibold text-[#1a1d2e] leading-snug z-10">
                    {cap.title}
                  </h3>
                  <p className="relative text-[#1a1a1a] text-sm leading-relaxed z-10">
                    {cap.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Two-column callout */}
          <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="bg-[#0a0e1a] text-white rounded-xl px-10 py-12 flex flex-col gap-5">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
                  <p className="text-xs uppercase tracking-wider text-white/40 font-medium">Why AI Agents?</p>
                </div>
                <p className="text-white/70 text-base leading-relaxed">
                  The difference between AI as a demo and AI as a business asset is integration. Agents that connect to your real data, your real systems, and your real workflows create compounding value that grows every month — not a one-time productivity bump.
                </p>
              </div>
              <div className="bg-[#0a0e1a] text-white rounded-xl px-10 py-12 flex flex-col gap-5">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
                  <p className="text-xs uppercase tracking-wider text-white/40 font-medium">For whom?</p>
                </div>
                <p className="text-white/70 text-base leading-relaxed">
                  Operations teams drowning in manual processing. Finance teams chasing approvals. Legal teams reviewing thousands of contracts. Customer support teams repeating the same answers. If your team does repetitive knowledge work, there is almost certainly an agent for it.
                </p>
              </div>
            </div>
          </section>

          {/* Process timeline */}
          <section className="max-w-7xl mx-auto px-6 md:px-12 mt-10 py-20 md:py-32">
            <div className="flex items-center gap-2 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
              <p className="text-xs uppercase tracking-wider text-[#1a1a1a] font-medium">How we work</p>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
              <h2 className="text-4xl md:text-5xl font-normal text-[#1a1d2e] max-w-[900px] leading-tight">
                From discovery to production in weeks — not months
              </h2>
              <Link
                href="/schedule-call"
                className="shrink-0 self-start lg:self-end inline-flex items-center bg-[#0a0a0a] hover:bg-[#1a1d2e] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors whitespace-nowrap"
              >
                Schedule a free call
              </Link>
            </div>
            <ProcessTimeline steps={processSteps} />
          </section>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>

      <ServiceFooter />
    </>
  );
}
