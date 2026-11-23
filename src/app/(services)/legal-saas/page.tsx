import type { Metadata } from "next";
import {
  Briefcase, FileSearch, Mail, CalendarClock, MessageSquareText, Timer,
  CheckCircle2, BarChart3, ShieldCheck, ScanLine, Upload, Users2, Receipt,
  FolderOpen, Scale, ChevronDown, Check, Landmark, BookOpen, Library, FileText, ShieldQuestion,
  type LucideIcon,
} from "lucide-react";
import { CONTAINER, Eyebrow } from "@/app/components/partials/services/ServiceUI";
import LegalHero from "./LegalHero";
import LegalConnectivitySection from "./LegalConnectivitySection";
import LegalRolloutSection from "./LegalRolloutSection";
import LegalCTASection from "./LegalCTASection";

export const metadata: Metadata = {
  title: "Agentic Legal AI — Legal Research Assistants for Law Firms",
  description:
    "Agentic AI research assistants for lawyers: statutes, case law, doctrine and your own files — every answer backed by its source, every result reviewed by a lawyer.",
};

/* ── content ── */

/* Research assistants — the core of the platform */
const research: { title: string; body: string; icon: LucideIcon }[] = [
  { title: "Case law research", body: "Searches federal and cantonal decisions and brings the leading cases forward first.", icon: Landmark },
  { title: "Statutes & materials", body: "Federal and cantonal law, with the legislative materials behind each provision.", icon: BookOpen },
  { title: "Doctrine & commentary", body: "Brings in the commentary and literature that shape how a norm is applied.", icon: Library },
  { title: "Every source checked", body: "Each citation is retrieved and linked — no invented references, nothing you can't verify.", icon: ShieldQuestion },
  { title: "Research memo", body: "Norm, leading case, doctrine and application — structured and ready for the file.", icon: FileText },
  { title: "Your own files", body: "Connects the research to the facts in the matter's documents and correspondence.", icon: FolderOpen },
];

/* The wider suite — specialised agents beyond research, grouped by the work they do.
   One short line each; edit here to add or remove a feature. */
const suite: { label: string; heading: string; items: { title: string; body: string }[] }[] = [
  {
    label: "Drafting",
    heading: "From blank page to first draft.",
    items: [
      { title: "Court submissions", body: "Claims, answers, appeals and applications." },
      { title: "Correspondence", body: "Client letters, opposing counsel, reminders." },
      { title: "Contracts", body: "Drafted from your clause library. Reviewed with redlines." },
      { title: "Playbook review", body: "Every clause checked against your firm's positions." },
      { title: "Firm format", body: "Finished Word documents in your own layout." },
      { title: "Exhibits", body: "Numbered, stamped and checked against the text." },
    ],
  },
  {
    label: "Strategy",
    heading: "Know the case before the other side does.",
    items: [
      { title: "Fact-finding", body: "A sourced chronology, built from the file." },
      { title: "Case strategy", body: "Your theory of the case, tested from three sides." },
      { title: "Litigation risk", body: "Chances, costs and a settlement range in numbers." },
      { title: "Deadlines", body: "Procedural and limitation periods, court holidays included." },
      { title: "Due diligence", body: "A data room turned into a red-flag report." },
      { title: "Document matrix", body: "The same questions asked of every contract." },
    ],
  },
  {
    label: "Practice areas",
    heading: "An agent that knows the field.",
    items: [
      { title: "Employment", body: "Dismissal, pay and references." },
      { title: "Tenancy", body: "Termination, rent and defects." },
      { title: "Family", body: "Divorce, children and maintenance calculations." },
      { title: "Inheritance", body: "Wills, forced shares and estates." },
      { title: "Debt enforcement", body: "Collection, bankruptcy and attachment." },
      { title: "And more", body: "Construction, criminal, administrative, sports and company law." },
    ],
  },
  {
    label: "The firm",
    heading: "Everything around the mandate.",
    items: [
      { title: "Conflict check", body: "Before a new matter is opened." },
      { title: "Matter files", body: "Records and deadlines from Microsoft 365." },
      { title: "Billing", body: "Fee notes, final invoices and reminders." },
      { title: "Legal expenses insurers", body: "Cover requests and objections." },
      { title: "Firm knowledge", body: "Your clauses, templates and precedents, searchable." },
      { title: "Quality gate", body: "Citations, facts and risk checked before anything goes out." },
    ],
  },
];

/* Grid View mock — documents down the side, questions across the top. Placeholder cells only. */
const gridColumns = ["Parties", "Term", "Notice period", "Liability cap"];
const gridRows = ["Supply agreement", "Lease", "Service contract", "NDA"];

/* Agent mock — the steps of one task; the last one waits for the lawyer. */
const agentSteps: { text: string; state: "done" | "waiting" }[] = [
  { text: "Read the file", state: "done" },
  { text: "Built the chronology", state: "done" },
  { text: "Researched the law", state: "done" },
  { text: "Drafted the submission", state: "done" },
  { text: "Checked every citation", state: "done" },
  { text: "Waiting for your approval", state: "waiting" },
];

const agentPoints: { title: string; body: string }[] = [
  { title: "You assign.", body: "Hand it a case, like you would a colleague." },
  { title: "It plans.", body: "One goal becomes clear steps." },
  { title: "It works.", body: "Reads, researches, drafts and checks." },
  { title: "It asks.", body: "Nothing goes out without a lawyer." },
];

// Same organic pill as the editorial headlines on the homepage.
const PILL_RADIUS = "0.9em 1.05em 0.85em 1em / 1em 0.9em 1.05em 0.9em";

const modules: { title: string; body: string; icon: LucideIcon }[] = [
  { title: "Case Cockpit", body: "Every matter in one place — parties, documents, emails, deadlines, time and notes.", icon: Briefcase },
  { title: "Document Intelligence", body: "OCR, classification and case matching for every upload and scan.", icon: FileSearch },
  { title: "Mail Agent", body: "Incoming mail read, classified and filed to the right case.", icon: Mail },
  { title: "Deadlines & My Day", body: "Court and contract deadlines, agenda and tasks — with a daily plan.", icon: CalendarClock },
  { title: "Ask Legal AI", body: "Plain-language questions, answered from your own files.", icon: MessageSquareText },
  { title: "Time & Billing", body: "Time and expenses per matter, turned into invoice drafts.", icon: Timer },
  { title: "Agent Approvals", body: "Every AI proposal waits in a queue for a lawyer to confirm.", icon: CheckCircle2 },
  { title: "Reports & Pipeline", body: "Caseload, billable hours, overdue invoices and new mandates at a glance.", icon: BarChart3 },
  { title: "Roles & Access", body: "Microsoft 365 sign-in and permissions per team member.", icon: ShieldCheck },
];

const lawyerGets = [
  "Mail filed to the right case",
  "Documents searchable and classified",
  "Deadlines extracted and tracked",
  "A daily plan of what matters",
  "Answers from your own files",
  "Time recorded per matter",
];

const partnerControls = [
  "Approve agent proposals",
  "Review invoice drafts",
  "Set roles and permissions",
  "See caseload and hours",
  "Track overdue invoices",
  "Follow the mandate pipeline",
];

const controlCenterItems = ["My Day", "Cases", "Documents", "Mail", "Deadlines", "Time", "Invoices", "Approvals", "Reports"];

const valueStatements = [
  "Hours of research, done in minutes.",
  "Every citation retrieved and checkable.",
  "Less time filing. More time advising.",
  "Every billable hour captured.",
  "A lawyer signs off on every AI action.",
];

/* ── shared bits ── */

function Connector() {
  return (
    <div className="flex flex-col items-center py-2">
      <div className="h-5 w-px bg-[#d8dae0]" />
      <ChevronDown className="-mt-0.5 h-4 w-4 text-[#c7cad1]" strokeWidth={2} aria-hidden="true" />
    </div>
  );
}

function BrowserFrame({ children, url }: { children: React.ReactNode; url: string }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-[#e6e6e6] bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <div className="ml-2 flex h-6 flex-1 items-center rounded-full border border-[#eee] bg-[#fafafa] px-3">
          <span className="text-[10px] font-medium text-[#9ca3af]">{url}</span>
        </div>
      </div>
      {children}
    </div>
  );
}

export default function LegalSaasPage() {
  return (
    <div className="font-switzer">

      {/* ── Hero ── */}
      <LegalHero />

      {/* ── The Challenge / Our Approach ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="w-full rounded-2xl bg-[#FAFAF8] p-3 sm:p-5">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

              <div className="flex flex-col rounded-lg border border-[#ECECEC] bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] sm:p-8">
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: "#FBF7E8" }}>
                  <FolderOpen className="h-5 w-5" style={{ color: "#A16207" }} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <div className="mb-6"><Eyebrow>The Challenge</Eyebrow></div>
                <div className="flex flex-col gap-5 text-[16px] font-normal leading-[1.7] text-[#374151] sm:text-[17px]">
                  <p className="m-0 text-[19px] font-medium leading-[1.4] text-[#111] sm:text-[21px]">
                    Good research takes hours a client rarely sees.
                  </p>
                  <p className="m-0">
                    Searching decisions. Checking the statute and its materials. Reading the
                    commentary. Matching it all to the facts in the file — and then
                    double-checking every citation before it goes out.
                  </p>
                  <p className="m-0 font-medium text-[#111]">
                    The answer matters — but the hours go to searching, not advising.
                  </p>
                </div>
              </div>

              <div className="flex flex-col rounded-lg border border-[#ECECEC] bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] sm:p-8">
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: "#EEF8F6" }}>
                  <Scale className="h-5 w-5" style={{ color: "#166962" }} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <div className="mb-6"><Eyebrow>Our Approach</Eyebrow></div>
                <div className="flex flex-col gap-5 text-[16px] font-normal leading-[1.7] text-[#374151] sm:text-[17px]">
                  <p className="m-0 text-[19px] font-medium leading-[1.4] text-[#111] sm:text-[21px]">
                    Research assistants built inside a working law firm.
                  </p>
                  <p className="m-0">
                    Agents that search the law, retrieve every source, and return a
                    structured research memo — connected to the matter, its documents and
                    its deadlines.
                  </p>
                  <p className="m-0 font-medium text-[#111]">
                    The AI researches. A lawyer reviews. Nothing leaves the firm unchecked.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Research assistants ── */}
      <section id="research" className="bg-white scroll-mt-24">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>Legal Research Assistants</Eyebrow></div>
            <h2 className="m-0 max-w-[620px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              From question to sourced answer.
            </h2>
            <p className="mt-4 max-w-[560px] text-[16px] font-normal leading-[1.5] text-[#6b7280]">
              Ask in plain language. The agents search, retrieve and check — then hand you a
              memo you can rely on.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {research.map(({ title, body, icon: Icon }) => (
              <article key={title} className="flex h-full flex-col rounded-2xl border border-[#e6e6e6] bg-white p-6">
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(37,99,235,0.07)]">
                  <Icon className="h-[22px] w-[22px] text-[#2563EB]" strokeWidth={1.7} aria-hidden="true" />
                </span>
                <h3 className="m-0 text-[17px] font-medium leading-[1.3] text-[#111]">{title}</h3>
                <p className="mt-2 text-[15px] font-normal leading-[1.5] text-[#6b7280]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── The wider suite — specialised agents ── */}
      <section id="suite" className="scroll-mt-24 bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>The Legal Suite</Eyebrow></div>
            <h2 className="m-0 max-w-[620px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              More than research. An agent.
            </h2>
            <p className="mt-4 max-w-[560px] text-[16px] font-normal leading-[1.5] text-[#6b7280]">
              Assign it a case. It takes the work from start to finish. A lawyer approves the result.
            </p>
          </div>

          {/* Two headline features: the Agent leads, Grid View follows */}
          <div className="mb-4 grid grid-cols-1 gap-4 lg:mb-6 lg:grid-cols-2 lg:gap-6">

            {/* Agent — the lead feature: full width, on white with the periwinkle fog */}
            <article className="relative isolate grid grid-cols-1 gap-10 overflow-hidden rounded-[28px] border border-[#BECBFF] bg-white p-7 lg:col-span-2 lg:grid-cols-2 lg:items-center lg:gap-14 lg:p-12">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-[15%] -top-[35%] -z-10 h-[110%] w-[60%] rounded-full"
                style={{ background: "radial-gradient(closest-side, rgba(190,203,255,0.60) 0%, transparent 100%)", filter: "blur(48px)" }}
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-[45%] right-[-10%] -z-10 h-[110%] w-[55%] rounded-full"
                style={{ background: "radial-gradient(closest-side, rgba(190,203,255,0.50) 0%, transparent 100%)", filter: "blur(48px)" }}
              />

              <div>
                <span
                  className="inline-block bg-[#BECBFF] px-3 py-1.5 text-[11px] font-semibold uppercase leading-none tracking-[0.14em] text-[#141414]"
                  style={{ borderRadius: PILL_RADIUS }}
                >
                  Agent
                </span>
                <h3 className="m-0 mt-6 text-[32px] font-medium leading-[1.08] tracking-[-0.02em] text-[#111] sm:text-[42px] lg:text-[48px]">
                  Assign the case. It does the work.
                </h3>
                <ul role="list" className="m-0 mt-8 list-none border-b border-[#e6e6e6] p-0">
                  {agentPoints.map(({ title, body }) => (
                    <li key={title} className="grid grid-cols-[110px_minmax(0,1fr)] items-baseline gap-4 border-t border-[#e6e6e6] py-4">
                      <span className="text-[17px] font-medium text-[#111]">{title}</span>
                      <span className="text-[15px] leading-[1.5] text-[#6b7280]">{body}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div aria-hidden="true" className="flex flex-col gap-2 rounded-2xl border border-[#e6e6e6] bg-white p-5 shadow-[0_24px_60px_-20px_rgba(15,23,42,0.18)]">
                {/* the case, assigned to the agent */}
                <div className="flex items-center justify-between gap-3 border-b border-[#EEF1F2] pb-3">
                  <div className="min-w-0">
                    <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#9ca3af]">Case</p>
                    <p className="m-0 truncate text-[14px] font-medium text-[#111]">Dismissal dispute</p>
                  </div>
                  <span className="flex shrink-0 items-center gap-1.5 rounded-md bg-[#EEF1FF] px-2.5 py-1.5 text-[11px] font-semibold text-[#141414]">
                    Assigned to Agent
                  </span>
                </div>
                <div className="mb-1 mt-1 rounded-xl bg-[#F4F5F7] px-4 py-3.5 text-[14px] font-medium text-[#111]">
                  Prepare the answer to the claim.
                </div>
                {agentSteps.map(({ text, state }) => (
                  <div key={text} className="flex items-center gap-3 px-1 py-1.5">
                    {state === "done" ? (
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#141414]">
                        <Check className="h-3 w-3 text-white" strokeWidth={3} />
                      </span>
                    ) : (
                      <span className="h-5 w-5 shrink-0 rounded-full border-2 border-[#BECBFF] bg-[#EEF1FF]" />
                    )}
                    <span className={`text-[14px] ${state === "done" ? "text-[#4B5563]" : "font-medium text-[#111]"}`}>{text}</span>
                    {state === "waiting" && (
                      <span className="ml-auto rounded-md bg-black px-3 py-1.5 text-[12px] font-semibold text-white">Approve</span>
                    )}
                  </div>
                ))}
              </div>
            </article>

            {/* Grid View */}
            <article className="grid grid-cols-1 gap-8 rounded-[28px] border border-[#e6e6e6] bg-[#FAFAF8] p-7 lg:col-span-2 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center lg:gap-14 lg:p-10">
              <div>
              <span
                className="w-fit bg-[#BECBFF] px-3 py-1.5 text-[11px] font-semibold uppercase leading-none tracking-[0.14em] text-[#141414]"
                style={{ borderRadius: PILL_RADIUS }}
              >
                Grid View
              </span>
              <h3 className="m-0 mt-6 text-[24px] font-medium leading-[1.15] tracking-[-0.01em] text-[#111] sm:text-[28px]">
                Many documents. One table.
              </h3>
              <p className="m-0 mt-3 max-w-[420px] text-[16px] leading-[1.5] text-[#6b7280]">
                Ask every document the same questions. Every cell shows its source.
              </p>
              </div>

              <div aria-hidden="true" className="overflow-hidden rounded-2xl border border-[#e6e6e6] bg-white">
                <div className="grid grid-cols-[1.3fr_repeat(4,1fr)] border-b border-[#e6e6e6] bg-[#FAFAFA]">
                  <span className="px-3 py-2.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#9ca3af]">Document</span>
                  {gridColumns.map((c) => (
                    <span key={c} className="truncate border-l border-[#e6e6e6] px-3 py-2.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#9ca3af]">
                      {c}
                    </span>
                  ))}
                </div>
                {gridRows.map((row, ri) => (
                  <div key={row} className={`grid grid-cols-[1.3fr_repeat(4,1fr)] ${ri !== 0 ? "border-t border-[#EEF1F2]" : ""}`}>
                    <span className="truncate px-3 py-3 text-[12px] font-medium text-[#111]">{row}</span>
                    {gridColumns.map((c, ci) => (
                      <span key={c} className="flex items-center border-l border-[#EEF1F2] px-3 py-3">
                        <span
                          className={`h-2 rounded-full ${(ri + ci) % 4 === 3 ? "bg-[#BECBFF]" : "bg-[#111]/12"}`}
                          style={{ width: `${45 + ((ri * 3 + ci * 5) % 4) * 14}%` }}
                        />
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
            {suite.map(({ label, heading, items }) => (
              <article
                key={label}
                className="group relative isolate flex h-full flex-col overflow-hidden rounded-[28px] border border-[#e6e6e6] bg-white p-7 transition-[border-color] duration-300 hover:border-[#BECBFF] motion-reduce:transition-none lg:p-10"
              >
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
                <h3 className="m-0 mt-6 max-w-[420px] text-[24px] font-medium leading-[1.15] tracking-[-0.01em] text-[#111] sm:text-[28px]">
                  {heading}
                </h3>

                <ul role="list" className="m-0 mt-8 grid list-none grid-cols-1 gap-x-8 border-b border-[#e6e6e6] p-0 sm:grid-cols-2">
                  {items.map(({ title, body }) => (
                    <li key={title} className="border-t border-[#e6e6e6] py-4">
                      <p className="m-0 text-[16px] font-medium leading-[1.3] text-[#111]">{title}</p>
                      <p className="m-0 mt-1 text-[14px] leading-[1.5] text-[#6b7280]">{body}</p>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modules ── */}
      <section id="modules" className="bg-white scroll-mt-24">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>The Workspace</Eyebrow></div>
            <h2 className="m-0 max-w-[560px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              Research, connected to every case.
            </h2>
            <p className="mt-4 max-w-[520px] text-[16px] font-normal leading-[1.5] text-[#6b7280]">
              The research assistants live inside the workspace — so every answer sits with the
              matter, its documents, deadlines and time.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {modules.map(({ title, body, icon: Icon }) => (
              <article key={title} className="flex h-full flex-col rounded-lg border border-[#e6e6e6] bg-white p-6">
                <Icon className="mb-5 h-6 w-6 text-[#111]" strokeWidth={1.6} aria-hidden="true" />
                <h3 className="m-0 text-[17px] font-medium leading-[1.3] text-[#111]">{title}</h3>
                <p className="mt-2 text-[15px] font-normal leading-[1.5] text-[#6b7280]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it flows ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>How It Works</Eyebrow></div>
            <h2 className="m-0 max-w-[620px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              From inbox to case file. Automatically.
            </h2>
          </div>

          <div className="rounded-2xl border border-[#e6e6e6] bg-[#FAFAF8] px-6 py-12 shadow-[0_24px_60px_rgba(15,23,42,0.05)] sm:px-10 lg:py-16">

            {/* row 1 — inputs */}
            <div className="mx-auto flex max-w-[720px] flex-col gap-3 sm:flex-row sm:gap-4">
              {[
                { label: "Email", icon: Mail },
                { label: "Scanned post", icon: ScanLine },
                { label: "Uploads", icon: Upload },
              ].map(({ label, icon: Icon }) => (
                <div key={label} className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#e6e6e6] bg-white px-5 py-3.5">
                  <Icon className="h-4 w-4 text-[#6b7280]" strokeWidth={1.8} aria-hidden="true" />
                  <span className="text-[14px] font-medium text-[#111]">{label}</span>
                </div>
              ))}
            </div>

            <Connector />

            {/* row 2 — the platform */}
            <div className="relative mx-auto max-w-[720px] overflow-hidden rounded-xl border-2 border-[#2563EB]/25 bg-white px-6 py-7 text-center shadow-[0_20px_50px_rgba(37,99,235,0.14)] sm:px-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-0 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[70px]"
                style={{ background: "radial-gradient(circle, rgba(37,99,235,0.14) 0%, transparent 70%)" }}
              />
              <span className="relative text-[16px] font-semibold text-[#111]">NativeCloud AI Legal Workspace</span>
              <div className="relative mx-auto mt-6 grid max-w-[520px] grid-cols-3 gap-x-4 gap-y-5 sm:grid-cols-4">
                {[
                  { tag: "Read & OCR", icon: ScanLine, color: "#A16207", bg: "#FBF7E8" },
                  { tag: "Classify", icon: FileSearch, color: "#166962", bg: "#EEF8F6" },
                  { tag: "Match case", icon: Briefcase, color: "#FF4F8B", bg: "#FFF0F5" },
                  { tag: "Deadlines", icon: CalendarClock, color: "#2563EB", bg: "#EFF5FF" },
                  { tag: "Tasks", icon: CheckCircle2, color: "#A16207", bg: "#FBF7E8" },
                  { tag: "Time", icon: Timer, color: "#166962", bg: "#EEF8F6" },
                  { tag: "Invoices", icon: Receipt, color: "#FF4F8B", bg: "#FFF0F5" },
                ].map(({ tag, icon: Icon, color, bg }) => (
                  <div key={tag} className="flex flex-col items-center gap-2">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px]" style={{ background: bg }}>
                      <Icon className="h-5 w-5" style={{ color }} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <span className="text-[12.5px] font-medium leading-[1.2] text-[#111]">{tag}</span>
                  </div>
                ))}
              </div>
            </div>

            <Connector />

            {/* row 3 — approval */}
            <div className="mx-auto flex max-w-[560px] items-center justify-center gap-2 rounded-xl border border-[#e6e6e6] bg-white px-5 py-3.5">
              <Users2 className="h-4 w-4 text-[#6b7280]" strokeWidth={1.8} aria-hidden="true" />
              <span className="text-[14px] font-medium text-[#111]">Lawyer reviews &amp; approves</span>
            </div>

          </div>
        </div>
      </section>

      {/* ── Lawyers / partners ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>Human in the Loop</Eyebrow></div>
            <h2 className="m-0 max-w-[620px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              AI proposes. Lawyers decide.
            </h2>
            <p className="mt-4 max-w-[560px] text-[16px] font-normal leading-[1.5] text-[#6b7280]">
              Agents take the admin off your team&apos;s desk — partners keep the final word
              on everything that leaves the firm.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="flex flex-col gap-5 rounded-2xl border border-[#e6e6e6] bg-white p-8 lg:p-10">
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#2563EB]">For lawyers</span>
              <ul className="flex flex-col gap-3">
                {lawyerGets.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[15px] leading-[1.4] text-[#111]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]" strokeWidth={2.2} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-white/[0.08] p-8 shadow-[0_20px_50px_rgba(37,99,235,0.18)] lg:p-10"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1.4px) 0 0/18px 18px, #0a0e1a",
              }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-0 h-[260px] w-[260px] translate-x-1/3 -translate-y-1/3 rounded-full blur-[80px]"
                style={{ background: "radial-gradient(circle, rgba(96,165,250,0.45) 0%, transparent 70%)" }}
              />
              <span className="relative text-[12px] font-semibold uppercase tracking-[0.14em] text-[#93c5fd]">For partners</span>
              <ul className="relative grid grid-cols-1 gap-3 sm:grid-cols-2">
                {partnerControls.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[15px] leading-[1.4] text-white/90">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#60a5fa]" strokeWidth={2.2} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ask Legal AI ── */}
      <section
        className="relative overflow-hidden rounded-[32px] sm:rounded-[48px] lg:rounded-[64px]"
        style={{ background: "linear-gradient(155deg, #0a0e1a 0%, #0d1b3d 45%, #1e4fd6 130%)" }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/3 rounded-full blur-[110px]"
          style={{ background: "radial-gradient(circle, rgba(96,165,250,0.55) 0%, transparent 70%)" }}
        />
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="pointer-events-none absolute -right-10 -top-10 h-[220px] w-[220px] text-white/[0.06] sm:h-[280px] sm:w-[280px]"
        >
          <path fill="currentColor" d="M12 0c0 6.627-5.373 12-12 12 6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12Z" />
        </svg>

        <div className={`${CONTAINER} relative py-20 lg:py-28`}>
          <div className="mx-auto max-w-[680px] text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.08] px-3.5 py-1.5 text-[12px] font-semibold text-white backdrop-blur-sm">
              <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
                <path fill="#60a5fa" d="M12 0c0 6.627-5.373 12-12 12 6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12Z" />
              </svg>
              Ask Legal AI
            </span>
            <h2 className="mx-auto mt-6 max-w-[560px] text-[30px] font-medium leading-[1.15] text-white md:text-[42px]">
              Ask the law. Ask your files.
            </h2>
            <p className="mx-auto mt-4 max-w-[520px] text-[16px] font-normal leading-[1.6] text-white/60">
              &ldquo;Which leading cases apply to a dismissal after a single warning?&rdquo;
              &ldquo;What did the other side propose in their last letter?&rdquo; Every answer
              comes with the source to check.
            </p>
          </div>
        </div>
      </section>

      <div className="h-20 lg:h-24" />

      {/* ── Firm overview ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>My Day</Eyebrow></div>
            <h2 className="m-0 max-w-[560px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              Start every day knowing what matters.
            </h2>
            <p className="mt-4 max-w-[520px] text-[16px] font-normal leading-[1.5] text-[#6b7280]">
              Deadlines, documents to review and open invoices — in one view, for every
              lawyer and the whole firm.
            </p>
          </div>

          <BrowserFrame url="app.nativeai.cloud / legal-saas / my-day">
            <div className="flex gap-4">
              <div className="hidden w-[160px] shrink-0 flex-col gap-1.5 sm:flex">
                {controlCenterItems.map((item, i) => (
                  <div
                    key={item}
                    className={`rounded-lg px-3 py-2 text-[12px] font-medium ${i === 0 ? "bg-[#2563EB] text-white" : "text-[#6b7280]"}`}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex flex-1 flex-col gap-2.5">
                <div className="grid grid-cols-3 gap-2.5">
                  {["Deadlines this week", "Documents to review", "Overdue invoices"].map((label) => (
                    <div key={label} className="flex flex-col gap-2 rounded-xl border border-[#eee] bg-[#fafafa] p-3">
                      <span className="text-[9px] font-medium uppercase tracking-wide text-[#9ca3af]">{label}</span>
                      <span className="h-3.5 w-12 rounded-full bg-[#111]/15" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-1 flex-col gap-2 rounded-xl border border-[#eee] bg-[#fafafa] p-3">
                  {[0, 1, 2].map((row) => (
                    <div key={row} className="flex items-center gap-3 rounded-lg bg-white px-3 py-2">
                      <div className="h-2 w-14 rounded-full bg-[#111]/15" />
                      <div className="h-2 w-10 rounded-full bg-[#111]/10" />
                      <div className="ml-auto h-2 w-8 rounded-full bg-[#2563EB]/40" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </BrowserFrame>
        </div>
      </section>

      {/* ── Integrations ── */}
      <LegalConnectivitySection />

      {/* ── Rollout ── */}
      <LegalRolloutSection />

      {/* ── Business value ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-10">
            <h2 className="m-0 text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              More time for the work that matters.
            </h2>
          </div>

          <div className="flex flex-col">
            {valueStatements.map((statement, i) => (
              <div
                key={statement}
                className={`py-6 ${i !== 0 ? "border-t border-[#ECECEC]" : ""}`}
              >
                <p className="m-0 text-[22px] font-medium leading-[1.3] text-[#111] sm:text-[26px]">
                  {statement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <LegalCTASection />

    </div>
  );
}
