import { Fragment } from "react";
import { Link } from "react-transition-progress/next";
import ProcessTimeline from "@/app/components/partials/services/ProcessTimeline";
import {
  Repeat, QrCode, BellRing, Bot, LayoutDashboard, BarChart3,
  ShieldCheck, Lock, CreditCard, KeyRound, Landmark, Fingerprint, FileCheck, Globe,
  ScanLine, CheckCircle2, ChevronRight, Zap,
  Layers, Eye, Languages, ArrowLeftRight, Network,
  type LucideIcon,
} from "lucide-react";

const outcomes: { title: string; body: string; icon: LucideIcon }[] = [
  { title: "Get paid faster", body: "One-scan checkout and timely reminders shorten the time to cash.", icon: Zap },
  { title: "Chase less", body: "AI recovery works your overdue book so your team doesn't have to.", icon: Bot },
  { title: "Stay compliant", body: "Secure rails, full audit trails, and e-invoicing built in.", icon: ShieldCheck },
];

const features: { title: string; body: string; icon: LucideIcon; decoration?: "top-left" | "bottom-right" }[] = [
  {
    title: "Recurring Invoices",
    icon: Repeat,
    body: "Auto-generate and send invoices on any schedule — your branding, zero manual effort.",
    decoration: "top-left",
  },
  {
    title: "QR & Pay-by-Link",
    icon: QrCode,
    body: "Every invoice ships with a QR code and payment link. No login, no app.",
  },
  {
    title: "Smart Reminders",
    icon: BellRing,
    body: "Automated nudges across email, SMS, and WhatsApp — before and after due.",
  },
  {
    title: "AI Arrears Recovery",
    icon: Bot,
    body: "AI prioritises your overdue book and runs tailored recovery journeys.",
  },
  {
    title: "Payer Dashboard",
    icon: LayoutDashboard,
    body: "Real-time balances — issued, paid, and outstanding — in one place.",
  },
  {
    title: "Reporting & Month-Close",
    icon: BarChart3,
    body: "Live dashboards and automated reports. Close the books, fast.",
    decoration: "bottom-right",
  },
];

const payerFlow: { n: string; t: string; d: string; icon: LucideIcon }[] = [
  { n: "01", t: "Invoice with QR", icon: QrCode, d: "Every invoice carries a QR code and pay-link." },
  { n: "02", t: "Scan or tap", icon: ScanLine, d: "No account, no app. Pay in one scan." },
  { n: "03", t: "Card or Open Banking", icon: CreditCard, d: "Secure payment in seconds, instant confirmation." },
  { n: "04", t: "Auto-reconciled", icon: CheckCircle2, d: "Matched and posted to your ledger automatically." },
];

const paymentCapabilities = [
  "Bulk invoice import from your existing billing system",
  "QR codes on both paper and electronic invoices",
  "Pay with no account — optional payer portal, 24/7",
  "Automatic reconciliation to your ledger",
  "Multilingual SMS & email reminders",
  "AI arrears recovery for chronic non-payers",
  "Full audit trail & financial reporting",
  "Open Banking + card rails, encrypted",
];

const markets: { title: string; body: string; icon: LucideIcon }[] = [
  { title: "Integrate once, add markets without limits", icon: Layers, body: "A single standard data model standardizes inputs and lets you expand into new markets with minimal effort." },
  { title: "Full visibility across every submission", icon: Eye, body: "Track every invoice in one place. Errors flagged, rejections logged, resolutions triggered automatically." },
  { title: "One input handles every local format", icon: Languages, body: "Submit transaction data once — the platform translates and delivers it in the format each jurisdiction requires." },
  { title: "Accredited connections to tax authorities", icon: Landmark, body: "Direct government connections in every mandated market, built for high throughput with automated retries." },
  { title: "AR and AP e-invoicing both covered", icon: ArrowLeftRight, body: "Submit outgoing invoices automatically; receive, validate, and share incoming invoices from suppliers." },
  { title: "Connects to the rest of your stack", icon: Network, body: "One shared data model, so invoice data flows straight into reporting and returns." },
];

const verticals = [
  { name: "Property & Rent", note: "Rent runs & arrears recovery" },
  { name: "Utilities & Telecom", note: "High-volume recurring bills" },
  { name: "Clinics & Healthcare", note: "Patient invoices & co-pays" },
  { name: "Memberships & Gyms", note: "Subscriptions & renewals" },
  { name: "B2B Services", note: "Milestones & monthly fees" },
  { name: "Schools & Public Fees", note: "Tuition & municipal charges" },
];

const security: { title: string; body: string; icon: LucideIcon }[] = [
  { title: "End-to-end encryption", icon: Lock, body: "Encrypted in transit and at rest." },
  { title: "PCI DSS compliant", icon: ShieldCheck, body: "Card processing to the highest standard." },
  { title: "Tokenized cards", icon: CreditCard, body: "Card data never touches your systems." },
  { title: "2FA & access control", icon: KeyRound, body: "Role-based access on every account." },
  { title: "Regulated Open Banking", icon: Landmark, body: "Bank-grade rails with strong auth." },
  { title: "Fraud monitoring", icon: Fingerprint, body: "Anomalies flagged in real time." },
  { title: "Full audit trail", icon: FileCheck, body: "Every action logged for compliance." },
  { title: "GDPR & data residency", icon: Globe, body: "Data stays where it must." },
];

const processSteps = [
  { step: "01", heading: "Account Setup & Import", icon: "setup", body: "We onboard your payers and schedules, migrated and validated." },
  { step: "02", heading: "Payment Rail Connection", icon: "connect", body: "Card, bank transfer, direct debit, and Open Banking — connected." },
  { step: "03", heading: "Invoice Configuration", icon: "template", body: "Templates set with your branding, tax, and terms." },
  { step: "04", heading: "Reminder & Recovery Setup", icon: "reminder", body: "Reminder cadences and AI recovery journeys, tuned." },
  { step: "05", heading: "Parallel Run & Validation", icon: "validate", body: "One cycle alongside your process to validate before cutover." },
  { step: "06", heading: "Go-Live & Training", icon: "launch", body: "Your team is trained and live, with minimal manual work." },
];

const ACCENT = "#2563EB";
const ACCENT_DARK = "#d4836a";
const iconTile = { background: "rgba(37,99,235,0.14)", color: ACCENT_DARK } as const;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 mb-6">
      <span className="w-6 h-px bg-[#2563EB]" />
      <p className="text-xs uppercase tracking-[0.14em] text-[#6b6b6b] font-semibold">{children}</p>
    </div>
  );
}

export default function PaymentAutomationPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: "#ffffff" }}>
      {/* ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div style={{ position: "absolute", top: "-10%", right: "-5%", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(37,99,235,0.10) 0%, transparent 65%)" }} />
        <div style={{ position: "absolute", top: "40%", left: "-8%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(91,124,250,0.06) 0%, transparent 65%)" }} />
        <div className="absolute inset-0" style={{ backgroundImage: "url('/img/noise-background.jpg')", backgroundSize: "280px 280px", opacity: 0.03 }} />
      </div>

      {/* ── Hero ── */}
      <section className="relative">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-36 pb-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#2563EB] mb-5">
            NativeCloud Product
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#0a0e1a] leading-[1.03] max-w-4xl">
            Payment Automation Platform
          </h1>
          <p className="mt-7 text-lg md:text-xl text-[#0a0e1a]/70 max-w-[600px] font-normal leading-relaxed">
            The whole bill-to-cash cycle in one platform — invoicing, QR &amp; pay-by-link checkout, reminders, AI recovery, and reporting.
          </p>

          {/* Macedonian tagline pill */}
          <div className="mt-7 inline-flex items-center gap-2.5 rounded-full pl-2 pr-5 py-2" style={{ background: "rgba(37,99,235,0.10)", border: "1px solid rgba(37,99,235,0.30)" }}>
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full" style={iconTile}>
              <ShieldCheck size={16} strokeWidth={2} aria-hidden />
            </span>
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full -ml-4" style={{ ...iconTile, background: "rgba(37,99,235,0.20)" }}>
              <Zap size={16} strokeWidth={2} aria-hidden />
            </span>
            <span className="text-sm md:text-base font-medium text-[#1a1d2e]">
              Вашиот нов партнер за безбедна и брза наплата
            </span>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="/schedule-call"
              className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#d4836a] text-white px-7 py-3.5 rounded-full text-base font-medium transition-colors"
            >
              Book a demo
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/schedule-call"
              className="inline-flex items-center bg-white hover:bg-[#f7f6f3] text-[#1a1d2e] text-base font-medium px-7 py-3.5 rounded-full transition-colors"
              style={{ border: "1px solid rgba(10,14,26,0.12)" }}
            >
              See the platform
            </Link>
          </div>

          {/* outcomes strip */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
            {outcomes.map((o, i) => {
              const Icon = o.icon;
              return (
                <div key={i} className="flex flex-col gap-3">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl" style={iconTile}>
                    <Icon size={20} strokeWidth={1.9} aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-[#1a1d2e]">{o.title}</h3>
                  <p className="text-[#6b6b6b] text-sm leading-relaxed">{o.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Core capabilities ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-20 md:pb-28">
        <SectionLabel>What&apos;s included</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-normal text-[#1a1d2e] max-w-[640px] leading-tight mb-12">
          Everything to bill, collect, and reconcile — automated.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden p-8 min-h-[260px] flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1"
                style={{ background: "#f0ede8" }}
              >
                {feature.decoration === "top-left" && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src="/decorations/blob-orange-corner.svg" width={220} height={220} alt="" aria-hidden="true" className="absolute top-0 left-0 pointer-events-none select-none" />
                )}
                {feature.decoration === "bottom-right" && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src="/decorations/blob-sage-corner.svg" width={220} height={220} alt="" aria-hidden="true" className="absolute bottom-0 right-0 pointer-events-none select-none" />
                )}
                <span className="relative z-10 inline-flex items-center justify-center w-12 h-12 rounded-xl" style={iconTile}>
                  <Icon size={22} strokeWidth={1.8} aria-hidden />
                </span>
                <h3 className="relative z-10 text-xl font-semibold text-[#1a1d2e] leading-snug">{feature.title}</h3>
                <p className="relative z-10 text-[#6b6b6b] text-sm leading-relaxed">{feature.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Spotlight: frictionless checkout ── */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-28">
        <div className="relative rounded-3xl overflow-hidden p-8 md:p-14" style={{ background: "#0a0e1a" }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 80% at 85% 10%, rgba(37,99,235,0.16) 0%, transparent 60%)" }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 70% at 0% 100%, rgba(91,124,250,0.12) 0%, transparent 60%)" }} />

          <div className="relative z-10">
            <p className="text-xs uppercase tracking-widest text-[#2563EB] font-semibold mb-4">
              Frictionless Checkout
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.08] max-w-[820px]">
              Get paid in one scan, end to end
            </h2>
            <p className="mt-6 text-base md:text-lg text-white/70 max-w-[600px] leading-relaxed">
              A QR code on every invoice. Payers settle in seconds — and it reconciles itself.
            </p>

            <div className="mt-12 flex flex-col lg:flex-row lg:items-stretch gap-4 lg:gap-2">
              {payerFlow.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Fragment key={i}>
                    <div
                      className="group relative flex-1 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)" }}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className="inline-flex items-center justify-center w-12 h-12 rounded-full text-white transition-transform duration-300 group-hover:scale-105"
                          style={{ background: "linear-gradient(135deg, #3b82f6 0%, #2563EB 55%, #d4836a 100%)", boxShadow: "0 8px 22px rgba(37,99,235,0.35)" }}
                        >
                          <Icon size={22} strokeWidth={1.9} aria-hidden />
                        </span>
                        <span className="text-4xl font-bold leading-none select-none text-white/10">{s.n}</span>
                      </div>
                      <h3 className="text-white font-semibold text-base leading-snug">{s.t}</h3>
                      <p className="text-white/55 text-sm leading-relaxed">{s.d}</p>
                    </div>
                    {i < payerFlow.length - 1 && (
                      <div className="hidden lg:flex items-center justify-center shrink-0 text-[#2563EB]/45" aria-hidden>
                        <ChevronRight size={24} strokeWidth={2.2} />
                      </div>
                    )}
                  </Fragment>
                );
              })}
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3.5 max-w-[920px]">
              {paymentCapabilities.map((c, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={20} strokeWidth={2} className="shrink-0 mt-0.5 text-[#2563EB]" aria-hidden />
                  <p className="text-white/80 text-sm leading-relaxed">{c}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── E-invoicing & compliance ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-28">
        <SectionLabel>E-invoicing &amp; compliance</SectionLabel>
        <h2 className="text-3xl md:text-5xl font-normal text-[#1a1d2e] max-w-[720px] leading-tight mb-12">
          Increase your markets, not your workload.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {markets.map((m, i) => {
            const Icon = m.icon;
            return (
              <div
                key={i}
                className="rounded-2xl p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1"
                style={{ background: "#ffffff", border: "1px solid rgba(10,14,26,0.08)" }}
              >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl" style={iconTile}>
                  <Icon size={22} strokeWidth={1.8} aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-[#1a1d2e] leading-snug">{m.title}</h3>
                <p className="text-[#6b6b6b] text-sm leading-relaxed">{m.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── One engine, every vertical ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-28">
        <SectionLabel>One engine, every vertical</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-normal text-[#1a1d2e] max-w-[640px] leading-tight mb-12">
          One core, dressed for your industry.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {verticals.map((v, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 flex flex-col gap-2 transition-all duration-300 hover:-translate-y-1"
              style={{ background: "#ffffff", border: "1px solid rgba(10,14,26,0.08)" }}
            >
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
                <h3 className="text-base font-semibold text-[#1a1d2e]">{v.name}</h3>
              </div>
              <p className="text-[#6b6b6b] text-sm leading-relaxed pl-[18px]">{v.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Security ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-28">
        <SectionLabel>Security</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-normal text-[#1a1d2e] max-w-[620px] leading-tight mb-12">
          Secure, end to end.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {security.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="rounded-2xl p-6 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1"
                style={{ background: "#ffffff", border: "1px solid rgba(10,14,26,0.08)" }}
              >
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl" style={iconTile}>
                  <Icon size={20} strokeWidth={1.8} aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-[#1a1d2e] leading-snug">{s.title}</h3>
                <p className="text-[#6b6b6b] text-sm leading-relaxed">{s.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── How we deliver ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-4 pb-12">
        <SectionLabel>How we deliver</SectionLabel>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <h2 className="text-4xl md:text-5xl font-normal text-[#1a1d2e] max-w-[680px] leading-tight">
            Live in one billing cycle.
          </h2>
          <Link
            href="/schedule-call"
            className="shrink-0 self-start lg:self-end inline-flex items-center bg-[#2563EB] hover:bg-[#d4836a] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors"
          >
            Book a demo
          </Link>
        </div>
        <ProcessTimeline steps={processSteps} />
      </section>

      {/* ── Final CTA ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center"
          style={{ background: `linear-gradient(120deg, #3b82f6 0%, ${ACCENT} 55%, ${ACCENT_DARK} 100%)` }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-[680px] mx-auto">
            Stop chasing. Start collecting.
          </h2>
          <p className="mt-5 text-base md:text-lg text-white/85 max-w-[520px] mx-auto">
            One platform for invoicing, payments, reminders, and AI recovery — for any business.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/schedule-call"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#f7f6f3] text-[#1a1d2e] px-7 py-3.5 rounded-full text-base font-semibold transition-colors"
            >
              Book a demo
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
