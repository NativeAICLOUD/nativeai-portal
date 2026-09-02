import type { Metadata } from "next";
import {
  FileText, Layers, FileSignature, Users, BellRing, BarChart3,
  Building2, Landmark, Store, Calculator,
  FileEdit, PenLine, Send, CheckCircle2, ChevronRight, KeyRound, FileCheck,
  type LucideIcon,
} from "lucide-react";
import { CONTAINER, Eyebrow, PrimaryButton, SecondaryButton } from "@/app/components/partials/services/ServiceUI";

export const metadata: Metadata = {
  title: "NativeInvoice",
  description:
    "Multi-tenant electronic invoicing for companies, accountants, and finance teams in North Macedonia — create, sign, send, and track every invoice, connected to the official UJP e-Invoice system.",
};

const features: { title: string; body: string; icon: LucideIcon; color: string; bg: string }[] = [
  { title: "Invoices Workspace", body: "Create, sign, send, and track every invoice from one searchable table — filter by UJP status, customer, or date range.", icon: FileText, color: "#2563EB", bg: "rgba(37,99,235,0.08)" },
  { title: "Three-Badge Status System", body: "UJP, delivery, and payment tracked independently, each with a plain-language tooltip so nothing is ambiguous.", icon: Layers, color: "#7C3AED", bg: "rgba(124,58,237,0.08)" },
  { title: "Electronic Signing & UJP Submission", body: "Sign invoices with your certificate and submit straight to the UJP e-Invoice system — accepted, rejected, or cancelled, tracked automatically.", icon: FileSignature, color: "#0F8B83", bg: "rgba(15,139,131,0.08)" },
  { title: "Customers & Products", body: "A shared catalogue of customers, products, and services — reused across every invoice you raise.", icon: Users, color: "#D97706", bg: "rgba(217,119,6,0.08)" },
  { title: "Payments & Reminders", body: "Record payments and chase overdue balances with escalating reminders — friendly, firm, and final notice.", icon: BellRing, color: "#DB2777", bg: "rgba(219,39,119,0.08)" },
  { title: "Dashboard & Reporting", body: "Monthly revenue, invoice status, certificate expiry, and upcoming deadlines — at a glance.", icon: BarChart3, color: "#0EA5E9", bg: "rgba(14,165,233,0.08)" },
];

const statusFlow: { n: string; t: string; d: string; icon: LucideIcon }[] = [
  { n: "01", t: "Draft", icon: FileEdit, d: "Editable until you're ready to finalise." },
  { n: "02", t: "Signed", icon: PenLine, d: "Electronically signed with your certificate." },
  { n: "03", t: "Submitted", icon: Send, d: "Sent to the UJP e-Invoice system for validation." },
  { n: "04", t: "Accepted", icon: CheckCircle2, d: "Legally valid — and visible on your dashboard." },
];

const capabilities = [
  "Searchable invoices table with UJP, customer, and date-range filters",
  "Bulk import from your existing billing system",
  "Certificate expiry and UJP integration health on the dashboard",
  "Escalating reminder templates — friendly, firm, final notice",
  "Payment recording by bank transfer, card, or cash",
  "Company switcher for accountants managing multiple clients",
  "English, Macedonian, and Albanian out of the box",
  "Full activity trail on every invoice",
];

const builtFor: { title: string; body: string; icon: LucideIcon; color: string; bg: string }[] = [
  { title: "Accounting & Bookkeeping Firms", body: "Manage e-invoicing for every client company from one login, with a company switcher built in.", icon: Landmark, color: "#2563EB", bg: "rgba(37,99,235,0.08)" },
  { title: "SMEs & Retailers", body: "Issue compliant e-invoices without hiring in-house finance operations.", icon: Store, color: "#7C3AED", bg: "rgba(124,58,237,0.08)" },
  { title: "Finance & Operations Teams", body: "Centralise invoicing, payments, and reporting in one workspace.", icon: Calculator, color: "#0F8B83", bg: "rgba(15,139,131,0.08)" },
];

const architecture: { title: string; body: string; icon: LucideIcon; color: string; bg: string }[] = [
  { title: "Direct UJP connection", body: "Submissions go straight to the official UJP e-Invoice system — no manual re-entry.", icon: Landmark, color: "#2563EB", bg: "rgba(37,99,235,0.08)" },
  { title: "Certificate-based signing", body: "Every invoice is signed with your own electronic certificate before submission.", icon: KeyRound, color: "#7C3AED", bg: "rgba(124,58,237,0.08)" },
  { title: "Company-level data isolation", body: "Every company and subsidiary keeps its own invoices, customers, and users.", icon: Building2, color: "#0F8B83", bg: "rgba(15,139,131,0.08)" },
  { title: "Full audit trail", body: "Every action — signed, sent, viewed, paid — is logged against the invoice.", icon: FileCheck, color: "#D97706", bg: "rgba(217,119,6,0.08)" },
];

const deliverySteps = [
  { step: "01", title: "Company & Team Setup", body: "We onboard your company, subsidiaries, and team with role-based access." },
  { step: "02", title: "UJP Certificate Connection", body: "Connect your electronic signing certificate for UJP submission." },
  { step: "03", title: "Customers, Products & Templates", body: "Import your customers, products, and invoice templates in your branding." },
  { step: "04", title: "Reminders & Payment Terms", body: "Configure payment terms and escalating reminder journeys." },
  { step: "05", title: "Parallel Run & Validation", body: "One billing cycle alongside your current process before full cutover." },
  { step: "06", title: "Go-Live & Training", body: "Your team is trained and issuing compliant e-invoices from day one." },
];

export default function NativeInvoicePage() {
  return (
    <div className="font-switzer">

      {/* ── Hero ── */}
      <div className="hero-bg-blue">
        <div className={`${CONTAINER} pb-16 pt-32 lg:pt-28`}>
          <div className="mb-6"><Eyebrow>NativeCloud Product</Eyebrow></div>
          <div className="flex items-center gap-4">
            <svg width="52" height="52" viewBox="0 0 32 32" fill="none" aria-hidden="true" className="shrink-0">
              <rect x="5" y="3" width="18" height="26" rx="3" fill="#2563EB" />
              <path d="M23 3h2a3 3 0 0 1 3 3v2l-5-5Z" fill="#1e4fd6" />
              <path d="M9.5 11h9M9.5 15h9M9.5 19h5.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
              <circle cx="22" cy="22" r="6" fill="#34d399" />
              <path d="m19.4 22 1.8 1.8 3.4-3.6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h1 className="m-0 max-w-3xl text-[40px] font-medium leading-[1.05] text-[#111] sm:text-[52px] lg:text-[64px]">
              Native<span className="text-[#2563EB]">Invoice</span>
            </h1>
          </div>
          <p className="mt-6 max-w-[620px] text-[18px] font-light leading-[1.6] text-[#111]">
            Multi-tenant electronic invoicing for companies, accountants, and finance teams in North Macedonia — create, sign, send, and track every invoice, connected to the official UJP e-Invoice system.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton href="/schedule-call">Book a demo</PrimaryButton>
            <SecondaryButton href="/schedule-call">See the platform</SecondaryButton>
          </div>
        </div>

        {/* blue divider — full viewport width */}
        <hr className="divider-blue m-0 h-1 w-full border-0" />
      </div>

      {/* ── What's included ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} py-20 lg:py-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>What&apos;s included</Eyebrow></div>
            <h2 className="m-0 max-w-[640px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              Everything to create, sign, and track e-invoices.
            </h2>
          </div>

          <div className="rounded-2xl bg-[#FAFAF8] p-3 sm:p-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map(({ title, body, icon: Icon, color, bg }) => (
                <div
                  key={title}
                  className="flex h-full flex-col rounded-[10px] border border-[#ECECEC] bg-white p-[18px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex min-h-[56px] items-center gap-3.5">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[12px]" style={{ background: bg }}>
                      <Icon className="h-8 w-8" style={{ color }} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <h3 className="m-0 text-[15.5px] font-semibold leading-[1.25] text-[#111827]">{title}</h3>
                  </div>
                  <div className="my-3 h-px w-full bg-[#EAEAEA]" />
                  <p className="m-0 flex-1 text-[14px] font-normal leading-[1.5] text-[#6B7280]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Spotlight: three-badge status system ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
            <div>
              <div className="mb-4"><Eyebrow>Three-Badge Status System</Eyebrow></div>
              <h2 className="max-w-[820px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
                Know exactly where every invoice stands
              </h2>
              <p className="mt-6 max-w-[620px] text-base leading-relaxed text-[#6b7280] md:text-lg">
                Every invoice tracks three independent lifecycles — UJP, delivery, and payment — so a rejected submission never gets confused with an unpaid balance.
              </p>

              <div className="mt-12 flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-2">
                {statusFlow.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <div key={i} className="flex flex-1 items-stretch gap-2">
                      <div className="group relative flex-1 rounded-2xl border border-[#ECECEC] bg-[#FAFAF8] p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(15,23,42,0.08)]">
                        <div className="flex items-center justify-between">
                          <span
                            className="inline-flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                            style={{ background: "rgba(37,99,235,0.08)" }}
                          >
                            <Icon size={22} strokeWidth={1.9} className="text-[#2563EB]" aria-hidden="true" />
                          </span>
                          <span className="select-none text-4xl font-bold leading-none text-[#111]/[0.06]">{s.n}</span>
                        </div>
                        <h3 className="text-base font-semibold leading-snug text-[#111]">{s.t}</h3>
                        <p className="text-sm leading-relaxed text-[#6b7280]">{s.d}</p>
                      </div>
                      {i < statusFlow.length - 1 && (
                        <div className="hidden shrink-0 items-center justify-center text-[#2563EB]/40 lg:flex" aria-hidden="true">
                          <ChevronRight size={24} strokeWidth={2.2} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-12 grid max-w-[920px] grid-cols-1 gap-x-10 gap-y-3.5 md:grid-cols-2">
                {capabilities.map((c, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} strokeWidth={2} className="mt-0.5 shrink-0 text-[#2563EB]" aria-hidden="true" />
                    <p className="text-sm leading-relaxed text-[#374151]">{c}</p>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </section>

      {/* ── Built for ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>Built for</Eyebrow></div>
            <h2 className="m-0 text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              One platform, every finance workflow.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {builtFor.map(({ title, body, icon: Icon, color, bg }) => (
              <div key={title} className="flex flex-col gap-4 rounded-2xl border border-[#ECECEC] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(15,23,42,0.08)]">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: bg }}>
                  <Icon size={22} strokeWidth={1.8} style={{ color }} aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold leading-snug text-[#111]">{title}</h3>
                <p className="text-sm leading-relaxed text-[#6b7280]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it connects ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>How it connects</Eyebrow></div>
            <h2 className="m-0 max-w-[620px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              Built around the way UJP e-invoicing actually works.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {architecture.map(({ title, body, icon: Icon, color, bg }) => (
              <div key={title} className="flex flex-col gap-3 rounded-2xl border border-[#ECECEC] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(15,23,42,0.08)]">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: bg }}>
                  <Icon size={20} strokeWidth={1.8} style={{ color }} aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold leading-snug text-[#111]">{title}</h3>
                <p className="text-sm leading-relaxed text-[#6b7280]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How we deliver ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4"><Eyebrow>How we deliver</Eyebrow></div>
              <h2 className="m-0 max-w-[600px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
                Live in one billing cycle.
              </h2>
            </div>
            <PrimaryButton href="/schedule-call">Book a demo</PrimaryButton>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {deliverySteps.map((s) => (
              <div key={s.step} className="flex flex-col gap-3 rounded-2xl border border-[#ECECEC] bg-[#FAFAF8] p-6">
                <span className="text-sm font-semibold tabular-nums text-[#2563EB]">{s.step}</span>
                <h3 className="text-base font-semibold leading-snug text-[#111]">{s.title}</h3>
                <p className="text-sm leading-relaxed text-[#6b7280]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-[#FAFAF8] border-t border-[#eee]">
        <div className={`${CONTAINER} flex flex-col gap-10 py-20 md:flex-row md:items-center md:justify-between`}>
          <div className="flex max-w-xl flex-col gap-4">
            <h2 className="m-0 text-[28px] font-medium leading-[1.1] text-[#111] md:text-[44px]">
              Stop managing invoices in spreadsheets.
            </h2>
            <p className="m-0 text-[18px] font-light leading-[1.6] text-[#6b7280]">
              One platform to create, sign, submit, and track every invoice — built for North Macedonia&apos;s UJP e-Invoice system.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton href="/schedule-call">Book a demo</PrimaryButton>
            <SecondaryButton href="/about-us">About us</SecondaryButton>
          </div>
        </div>
      </section>

    </div>
  );
}
