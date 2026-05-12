import { Link } from "react-transition-progress/next";
import ProcessTimeline from "@/app/components/partials/services/ProcessTimeline";

const features = [
  {
    title: "Contract Analysis & Risk Detection",
    body: "AI reads contracts and flags risk clauses, unusual terms, missing protections, and deviations from your standard templates — in seconds, not hours.",
    decoration: "top-left" as const,
  },
  {
    title: "Document Summarisation",
    body: "Upload any legal document and receive a structured executive summary — key parties, obligations, deadlines, governing law, and a risk score your team can act on.",
  },
  {
    title: "Deadline & Obligation Extraction",
    body: "Automatically extracts critical dates, renewal windows, and contractual obligations into a tracked calendar with configurable alert notifications for your team.",
  },
  {
    title: "AI-Assisted Drafting",
    body: "Suggest clauses, generate first drafts from templates, and flag gaps in existing drafts — always with lawyer review before any document leaves the firm.",
  },
  {
    title: "Legal File Management",
    body: "Centralised matter management — organise documents, correspondence, versions, and notes by client, matter, and jurisdiction with full audit trails.",
  },
  {
    title: "Secure & Compliant",
    body: "End-to-end encryption, role-based access control, full audit logs, and data residency options to meet legal professional privilege and data protection requirements.",
    decoration: "bottom-right" as const,
  },
];

const processSteps = [
  {
    step: "01",
    heading: "Onboarding & Template Import",
    body: "We import your existing contract templates, clause libraries, and naming conventions so the AI learns your firm's standards from day one — not from scratch.",
  },
  {
    step: "02",
    heading: "Document Configuration",
    body: "We configure document categories, risk scoring weights, jurisdiction rules, and deadline alert thresholds to match your practice areas and client types.",
  },
  {
    step: "03",
    heading: "Integration & Data Migration",
    body: "Connect to your existing DMS, email, and matter management systems. Migrate active matter files with full version history preserved.",
  },
  {
    step: "04",
    heading: "Lawyer Training & Pilot",
    body: "Your lawyers and paralegals run a structured pilot — reviewing AI outputs against real files to calibrate accuracy and build confidence in the system.",
  },
  {
    step: "05",
    heading: "Firm-Wide Rollout",
    body: "Phased rollout by practice group with dedicated onboarding sessions. Customisation continues based on feedback from your team during the rollout period.",
  },
  {
    step: "06",
    heading: "Continuous Model Improvement",
    body: "The AI improves with every review your lawyers make — the longer you use it, the more accurately it reflects your firm's standards and risk thresholds.",
  },
];

export default function AILegalWorkspacePage() {
  return (
    <>
      <div className="relative min-h-screen overflow-x-hidden" style={{ background: '#ffffff' }}>
        {/* ambient glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(232,154,120,0.10) 0%, transparent 65%)' }} />
          <div style={{ position: 'absolute', top: '40%', left: '-8%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(91,124,250,0.06) 0%, transparent 65%)' }} />
          <div className="absolute inset-0" style={{ backgroundImage: "url('/img/noise-background.jpg')", backgroundSize: '280px 280px', opacity: 0.03 }} />
        </div>

        {/* Hero */}
        <section className="relative min-h-[85vh] overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20 min-h-[85vh] flex flex-col">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#e89a78] mb-4">
              NativeCloud Product
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-[#0a0e1a] leading-[1.05] max-w-3xl">
              AI Legal Workspace
            </h1>
            <p className="mt-8 text-lg text-[#0a0e1a]/70 max-w-[560px] font-normal">
              An AI-powered workspace for law firms and legal teams to analyse documents, summarise contracts, detect risks, extract deadlines, manage legal files, and support drafting — while keeping lawyers fully in control.
            </p>
            <p className="mt-4 text-sm text-[#6b6b6b] max-w-[500px]">
              Best for: Law firms, legal departments, notary offices, consulting firms, and companies working with contracts or legal documents.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="/schedule-call"
                className="bg-[#e89a78] hover:bg-[#d4836a] text-white px-7 py-3.5 rounded-full text-base font-medium whitespace-nowrap hover:opacity-90 transition-opacity"
              >
                Book a demo
              </Link>
              <Link
                href="/schedule-call"
                aria-label="Book a demo"
                className="w-12 h-12 rounded-full bg-[#e89a78] hover:bg-[#d4836a] flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </Link>
            </div>
            <p className="mt-auto pt-20 text-base text-[#6b6b6b] font-normal">
              LegalTech SaaS for Law Firms — AI precision, lawyer control.
            </p>
          </div>
        </section>

        {/* What's included */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16">
          <div className="flex items-center gap-2 mb-8">
            <p className="text-xs uppercase tracking-wider text-[#6b6b6b] font-medium">
              WHAT&apos;S INCLUDED
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <p className="text-[#1a1d2e] text-base leading-relaxed max-w-[650px]">
              Contract analysis that used to take a paralegal two hours now takes seconds. Your lawyers stay in control — the AI does the reading, the flagging, and the first draft. Your team makes the decisions.
            </p>
            <Link
              href="/schedule-call"
              className="shrink-0 self-start inline-flex items-center bg-[#e89a78] hover:bg-[#d4836a] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors whitespace-nowrap"
            >
              See the platform
            </Link>
          </div>
        </section>

        {/* Feature cards */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-32">
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden p-8 min-h-[280px] flex flex-col gap-4"
                style={{ background: '#f0ede8', border: 'none' }}
              >
                {feature.decoration === "top-left" && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src="/decorations/blob-orange-corner.svg" width={220} height={220} alt="" aria-hidden="true" className="absolute top-0 left-0 pointer-events-none select-none" />
                )}
                {feature.decoration === "bottom-right" && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src="/decorations/blob-sage-corner.svg" width={220} height={220} alt="" aria-hidden="true" className="absolute bottom-0 right-0 pointer-events-none select-none" />
                )}
                <h3 className="relative text-xl font-semibold text-[#1a1d2e] leading-snug z-10">{feature.title}</h3>
                <p className="relative text-[#6b6b6b] text-sm leading-relaxed z-10">{feature.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How we work */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mt-40 py-20 md:py-32">
          <div className="flex items-center gap-2 mb-10">
            <p className="text-xs uppercase tracking-wider text-[#6b6b6b] font-medium">HOW WE DELIVER</p>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <h2 className="text-4xl md:text-5xl font-normal text-[#1a1d2e] max-w-[900px] leading-tight">
              Onboarded in weeks, not months — calibrated to your firm from the first document
            </h2>
            <Link
              href="/schedule-call"
              className="shrink-0 self-start lg:self-end inline-flex items-center bg-[#e89a78] hover:bg-[#d4836a] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors whitespace-nowrap"
            >
              Book a demo
            </Link>
          </div>
          <ProcessTimeline steps={processSteps} />
        </section>
      </div>

    </>
  );
}
