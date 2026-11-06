import type { Metadata } from "next";
import {
  Repeat, QrCode, BellRing, Bot, LayoutDashboard, BarChart3,
  ShieldCheck, Lock, CreditCard, KeyRound, Landmark, Fingerprint, FileCheck, Globe,
  ScanLine, CheckCircle2, ChevronRight, Building2, School, HeartPulse, Zap, Home, Briefcase,
  TrendingDown, Receipt, Plug, Send, Wallet, Mail, MessageSquare, MessageCircle, Eye, Handshake,
  type LucideIcon,
} from "lucide-react";
import { CONTAINER, Eyebrow, PrimaryButton, SecondaryButton } from "@/app/components/partials/services/ServiceUI";

export const metadata: Metadata = {
  title: "Payment Automation",
  description:
    "Secure invoice payments for companies and institutions that still bill by invoice — QR and pay-by-link checkout, automatic reconciliation, reminders, and AI recovery. Volume-based pricing from €0.40 per transfer.",
};

const howItWorks: { n: string; t: string; d: string; icon: LucideIcon }[] = [
  { n: "01", t: "Connect", icon: Plug, d: "Plug in your billing system once — by integration or bulk import. No per-bank or per-channel setup." },
  { n: "02", t: "Send", icon: Send, d: "Every invoice goes out with a QR code and a secure pay-link, over the channel each payer prefers." },
  { n: "03", t: "Collect", icon: Wallet, d: "We route the payment over the right rail, confirm it instantly, and reconcile it to the invoice." },
];

const channels: { title: string; body: string; icon: LucideIcon; color: string; bg: string }[] = [
  { title: "QR on the invoice", body: "Printed or electronic — payers scan and pay in seconds.", icon: QrCode, color: "#2563EB", bg: "rgba(37,99,235,0.08)" },
  { title: "Email pay-link", body: "Invoice and secure payment link delivered together.", icon: Mail, color: "#7C3AED", bg: "rgba(124,58,237,0.08)" },
  { title: "SMS pay-link", body: "Reach payers on any phone, with a one-tap link.", icon: MessageSquare, color: "#0F8B83", bg: "rgba(15,139,131,0.08)" },
  { title: "WhatsApp pay-link", body: "Payment requests and reminders where people already chat.", icon: MessageCircle, color: "#16A34A", bg: "rgba(22,163,74,0.08)" },
  { title: "Card payments", body: "Tokenized, PCI DSS-compliant card checkout.", icon: CreditCard, color: "#D97706", bg: "rgba(217,119,6,0.08)" },
  { title: "Bank transfer", body: "Secure transfers matched automatically to the invoice.", icon: Landmark, color: "#DB2777", bg: "rgba(219,39,119,0.08)" },
];

const features: { title: string; body: string; icon: LucideIcon; color: string; bg: string }[] = [
  { title: "Recurring Invoices", body: "Auto-generate and send invoices on any schedule — your branding, zero manual effort.", icon: Repeat, color: "#2563EB", bg: "rgba(37,99,235,0.08)" },
  { title: "QR & Pay-by-Link", body: "Every invoice ships with a QR code and secure payment link. No login, no app.", icon: QrCode, color: "#7C3AED", bg: "rgba(124,58,237,0.08)" },
  { title: "Smart Reminders", body: "Automated nudges across email, SMS, and WhatsApp — before and after the due date.", icon: BellRing, color: "#0F8B83", bg: "rgba(15,139,131,0.08)" },
  { title: "AI Arrears Recovery", body: "AI prioritises your overdue book and runs tailored recovery journeys.", icon: Bot, color: "#D97706", bg: "rgba(217,119,6,0.08)" },
  { title: "Payer Dashboard", body: "Real-time balances — issued, paid, and outstanding — in one place.", icon: LayoutDashboard, color: "#DB2777", bg: "rgba(219,39,119,0.08)" },
  { title: "Reporting & Month-Close", body: "Live dashboards and automated reports. Close the books, fast.", icon: BarChart3, color: "#0EA5E9", bg: "rgba(14,165,233,0.08)" },
];

const payerFlow: { n: string; t: string; d: string; icon: LucideIcon }[] = [
  { n: "01", t: "Invoice with QR", icon: QrCode, d: "Every invoice carries a QR code and secure pay-link." },
  { n: "02", t: "Scan or tap", icon: ScanLine, d: "No account, no app. Pay in one scan." },
  { n: "03", t: "Card or bank transfer", icon: CreditCard, d: "Encrypted payment in seconds, instant confirmation." },
  { n: "04", t: "Auto-reconciled", icon: CheckCircle2, d: "Matched to the invoice and posted to your ledger." },
];

const capabilities = [
  "Bulk invoice import from your existing billing system",
  "QR codes on both paper and electronic invoices",
  "Pay with no account — optional payer portal, 24/7",
  "Automatic reconciliation to your ledger",
  "Multilingual SMS & email reminders",
  "AI arrears recovery for chronic non-payers",
  "Full audit trail & financial reporting",
  "Works alongside NativeInvoice and UJP e-invoicing",
];

const builtFor: { title: string; body: string; icon: LucideIcon; color: string; bg: string }[] = [
  { title: "Public Institutions & Municipalities", body: "Municipal fees, taxes, and public charges collected securely — with a full audit trail.", icon: Landmark, color: "#2563EB", bg: "rgba(37,99,235,0.08)" },
  { title: "Utilities & Telecom", body: "High-volume recurring bills settled in one scan, reconciled automatically.", icon: Zap, color: "#7C3AED", bg: "rgba(124,58,237,0.08)" },
  { title: "Schools & Universities", body: "Tuition and fees paid online, with reminders sent to parents and students.", icon: School, color: "#0F8B83", bg: "rgba(15,139,131,0.08)" },
  { title: "Clinics & Healthcare", body: "Patient invoices and co-pays collected without front-desk chasing.", icon: HeartPulse, color: "#D97706", bg: "rgba(217,119,6,0.08)" },
  { title: "Property & Rent", body: "Rent runs, service charges, and arrears recovery on autopilot.", icon: Home, color: "#DB2777", bg: "rgba(219,39,119,0.08)" },
  { title: "B2B Companies", body: "Milestones, monthly fees, and supplier invoices paid faster.", icon: Briefcase, color: "#0EA5E9", bg: "rgba(14,165,233,0.08)" },
];

const security: { title: string; body: string; icon: LucideIcon; color: string; bg: string }[] = [
  { title: "End-to-end encryption", body: "Encrypted in transit and at rest.", icon: Lock, color: "#2563EB", bg: "rgba(37,99,235,0.08)" },
  { title: "PCI DSS compliant", body: "Card processing to the highest standard.", icon: ShieldCheck, color: "#7C3AED", bg: "rgba(124,58,237,0.08)" },
  { title: "Tokenized cards", body: "Card data never touches your systems.", icon: CreditCard, color: "#0F8B83", bg: "rgba(15,139,131,0.08)" },
  { title: "2FA & access control", body: "Role-based access on every account.", icon: KeyRound, color: "#D97706", bg: "rgba(217,119,6,0.08)" },
  { title: "Bank-grade rails", body: "Regulated bank transfers with strong authentication.", icon: Building2, color: "#DB2777", bg: "rgba(219,39,119,0.08)" },
  { title: "Fraud monitoring", body: "Anomalies flagged in real time.", icon: Fingerprint, color: "#0EA5E9", bg: "rgba(14,165,233,0.08)" },
  { title: "Full audit trail", body: "Every action logged for compliance.", icon: FileCheck, color: "#2563EB", bg: "rgba(37,99,235,0.08)" },
  { title: "GDPR & data residency", body: "Data stays where it must.", icon: Globe, color: "#7C3AED", bg: "rgba(124,58,237,0.08)" },
];

const pricingPoints: { title: string; body: string; icon: LucideIcon; color: string; bg: string }[] = [
  { title: "Pay per transfer", body: "Pricing tied to the payments you actually process — not to seats or licences.", icon: Receipt, color: "#2563EB", bg: "rgba(37,99,235,0.08)" },
  { title: "Lower rate as you grow", body: "The more invoices you process each month, the lower your per-transfer rate.", icon: TrendingDown, color: "#0F8B83", bg: "rgba(15,139,131,0.08)" },
  { title: "Tailored for institutions", body: "High-volume billers and public institutions get a rate built around their volume.", icon: Landmark, color: "#7C3AED", bg: "rgba(124,58,237,0.08)" },
];

// Same card schema as the About page's engagement models: tinted icon, summary, three checked points.
const trustPillars: { title: string; body: string; icon: LucideIcon; color: string; checkbox: string; points: string[] }[] = [
  {
    title: "Secure by Design",
    body: "Every payment travels over encrypted, bank-grade rails.",
    icon: ShieldCheck,
    color: "#0F8B83",
    checkbox: "/collaborate/checkbox-green.svg",
    points: ["End-to-end encryption", "Tokenized, PCI DSS-compliant card processing", "2FA & role-based access control"],
  },
  {
    title: "Transparent Pricing",
    body: "One clear per-transfer rate, agreed upfront and based on your volume.",
    icon: Receipt,
    color: "#7C3AED",
    checkbox: "/collaborate/checkbox-purple.svg",
    points: ["Rate agreed before you go live", "Every transfer itemised on your statement", "Lower rate as your volume grows"],
  },
  {
    title: "Full Visibility & Control",
    body: "See every invoice and every payment, the moment it happens.",
    icon: Eye,
    color: "#2563EB",
    checkbox: "/collaborate/checkbox-blue.svg",
    points: ["Real-time payment dashboard", "Automatic reconciliation to each invoice", "Full audit trail on every action"],
  },
  {
    title: "A Partner, Not Just Software",
    body: "Our team sets you up, runs alongside you, and stays on call.",
    icon: Handshake,
    color: "#DB2777",
    checkbox: "/collaborate/checkbox-red.svg",
    points: ["Guided onboarding & data migration", "Parallel run before full cutover", "Support in English, Macedonian, and Albanian"],
  },
];

const deliverySteps = [
  { step: "01", title: "Account Setup & Import", body: "We onboard your payers and schedules, migrated and validated." },
  { step: "02", title: "Payment Rail Connection", body: "Card, bank transfer, and direct debit — connected securely." },
  { step: "03", title: "Invoice Configuration", body: "Templates set with your branding, tax, and payment terms." },
  { step: "04", title: "Reminder & Recovery Setup", body: "Reminder cadences and AI recovery journeys, tuned." },
  { step: "05", title: "Parallel Run & Validation", body: "One cycle alongside your process to validate before cutover." },
  { step: "06", title: "Go-Live & Training", body: "Your team is trained and live, with minimal manual work." },
];

function IconCard({ title, body, icon: Icon, color, bg }: { title: string; body: string; icon: LucideIcon; color: string; bg: string }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-[#ECECEC] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(15,23,42,0.08)]">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: bg }}>
        <Icon size={22} strokeWidth={1.8} style={{ color }} aria-hidden="true" />
      </span>
      <h3 className="text-lg font-semibold leading-snug text-[#111]">{title}</h3>
      <p className="text-sm leading-relaxed text-[#6b7280]">{body}</p>
    </div>
  );
}

export default function PaymentAutomationPage() {
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
              <path d="M9.5 11h9M9.5 15h5.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
              <rect x="9.5" y="18.5" width="5" height="5" rx="1" stroke="white" strokeWidth="1.4" />
              <circle cx="22" cy="22" r="6" fill="#34d399" />
              <path d="M22 18.8v6.4M24 20.2c-.4-.6-1.1-.9-2-.9-1.1 0-1.9.6-1.9 1.4 0 1.9 4 .9 4 2.8 0 .8-.8 1.4-2 1.4-.9 0-1.7-.4-2.1-1" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <p className="m-0 text-[18px] font-medium text-[#111]">
              Payment <span className="text-[#2563EB]">Automation</span>
            </p>
          </div>
          <h1 className="mt-6 max-w-4xl text-[40px] font-medium leading-[1.05] text-[#111] sm:text-[52px] lg:text-[64px]">
            One secure payment channel for <span className="text-[#2563EB]">every invoice</span>.
          </h1>
          <p className="mt-6 max-w-[620px] text-[18px] font-light leading-[1.6] text-[#111]">
            For companies and institutions that still bill by invoice. Connect once — we handle payment rails, delivery over QR, email, SMS, and WhatsApp, and reconciliation. You pay per transfer.
          </p>
          <p className="mt-4 max-w-[620px] text-[15px] font-medium text-[#2563EB]">
            Вашиот нов партнер за безбедна и брза наплата
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton href="/schedule-call">Book a demo</PrimaryButton>
            <SecondaryButton href="#pricing">See pricing</SecondaryButton>
          </div>
        </div>

        {/* blue divider — full viewport width */}
        <hr className="divider-blue m-0 h-1 w-full border-0" />
      </div>

      {/* ── How it works ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} py-20 lg:py-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>How it works</Eyebrow></div>
            <h2 className="m-0 max-w-[720px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              We handle the payment plumbing, so you just collect.
            </h2>
          </div>

          <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-2">
            {howItWorks.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.n} className="flex flex-1 items-stretch gap-2">
                  <div className="group relative flex-1 rounded-2xl border border-[#ECECEC] bg-[#FAFAF8] p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(15,23,42,0.08)]">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105" style={{ background: "rgba(37,99,235,0.08)" }}>
                        <Icon size={22} strokeWidth={1.9} className="text-[#2563EB]" aria-hidden="true" />
                      </span>
                      <span className="select-none text-4xl font-bold leading-none text-[#111]/[0.06]">{s.n}</span>
                    </div>
                    <h3 className="text-xl font-semibold leading-snug text-[#111]">{s.t}</h3>
                    <p className="text-sm leading-relaxed text-[#6b7280]">{s.d}</p>
                  </div>
                  {i < howItWorks.length - 1 && (
                    <div className="hidden shrink-0 items-center justify-center text-[#2563EB]/40 lg:flex" aria-hidden="true">
                      <ChevronRight size={24} strokeWidth={2.2} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Channels ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>Payment channels</Eyebrow></div>
            <h2 className="m-0 max-w-[720px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              Every way your payers want to pay — one integration.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {channels.map((c) => <IconCard key={c.title} {...c} />)}
          </div>
        </div>
      </section>

      {/* ── What's included ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>What&apos;s included</Eyebrow></div>
            <h2 className="m-0 max-w-[640px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              Everything to bill, collect, and reconcile — automated.
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

      {/* ── Spotlight: one-scan checkout ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-4"><Eyebrow>Frictionless Checkout</Eyebrow></div>
          <h2 className="max-w-[820px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
            Get paid in one scan, end to end
          </h2>
          <p className="mt-6 max-w-[620px] text-base leading-relaxed text-[#6b7280] md:text-lg">
            A QR code on every invoice. Payers settle in seconds over secure rails — and every transfer reconciles itself.
          </p>

          <div className="mt-12 flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-2">
            {payerFlow.map((s, i) => {
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
                  {i < payerFlow.length - 1 && (
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
      </section>

      {/* ── Built for ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>Built for</Eyebrow></div>
            <h2 className="m-0 max-w-[720px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              For every organisation that still bills by invoice.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {builtFor.map((b) => <IconCard key={b.title} {...b} />)}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="bg-white scroll-mt-24">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>Pricing</Eyebrow></div>
            <h2 className="m-0 max-w-[720px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              Simple, volume-based pricing.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.1fr_2fr]">
            <div className="flex flex-col justify-between gap-8 rounded-2xl border border-[#2563EB]/20 bg-[rgba(37,99,235,0.05)] p-8">
              <div>
                <p className="m-0 text-sm font-semibold uppercase tracking-[0.12em] text-[#2563EB]">Per transfer</p>
                <p className="m-0 mt-4 flex items-baseline gap-2 text-[#111]">
                  <span className="text-[15px] font-medium text-[#6b7280]">from</span>
                  <span className="text-[56px] font-medium leading-none tabular-nums">€0.40</span>
                </p>
                <p className="m-0 mt-4 text-[15px] leading-relaxed text-[#374151]">
                  Pay as you go. Your rate depends on the volume of invoices you process each month — higher volume, lower rate per transfer.
                </p>
              </div>
              <div>
                <PrimaryButton href="/schedule-call">Get your rate</PrimaryButton>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {pricingPoints.map((p) => <IconCard key={p.title} {...p} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why trust us ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>Why trust us</Eyebrow></div>
            <h2 className="m-0 max-w-[680px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              Built to earn your trust with every payment.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
            {trustPillars.map(({ title, body, icon: Icon, color, checkbox, points }) => (
              <div key={title} className="flex h-full flex-col rounded-lg border border-[#e6e6e6] bg-white p-6">
                <span className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl" style={{ background: `${color}14` }}>
                  <Icon size={20} strokeWidth={1.6} style={{ color }} aria-hidden="true" />
                </span>
                <h3 className="m-0 text-[18px] font-medium leading-[1.25] text-[#111]">{title}</h3>
                <p className="mt-2 text-[14.5px] font-normal leading-[1.55] text-[#6b7280]">{body}</p>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={checkbox} alt="" className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                      <span className="text-[14px] font-normal leading-[1.5] text-[#374151]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Security ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>Security</Eyebrow></div>
            <h2 className="m-0 max-w-[620px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              Secure, end to end.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {security.map(({ title, body, icon: Icon, color, bg }) => (
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
              Stop chasing. Start collecting.
            </h2>
            <p className="m-0 text-[18px] font-light leading-[1.6] text-[#6b7280]">
              Secure invoice payments, reminders, and AI recovery — from €0.40 per transfer, priced to your volume.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton href="/schedule-call">Book a demo</PrimaryButton>
            <SecondaryButton href="/native-invoice">Explore NativeInvoice</SecondaryButton>
          </div>
        </div>
      </section>

    </div>
  );
}
