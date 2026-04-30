import { Link } from "react-transition-progress/next";
import ProcessTimeline from "@/app/components/partials/services/ProcessTimeline";
import ServiceFooter from "@/app/components/partials/services/ServiceFooter";

const features = [
  {
    title: "Recurring Invoice Generation",
    body: "Automatically generate and send invoices on any schedule — monthly, quarterly, or custom — with your branding, your client's payment terms, and zero manual effort.",
    decoration: "top-left" as const,
  },
  {
    title: "Rent Collection & Tracking",
    body: "Purpose-built for property managers — collect rent, track payment status across your entire portfolio, and generate per-property financial summaries each month.",
  },
  {
    title: "Smart Payment Reminders",
    body: "Automated reminder sequences by email and SMS — gentle pre-due nudges, day-of notices, and escalating overdue reminders, all configurable per client or contract.",
  },
  {
    title: "Overdue & Collections Tracking",
    body: "Full visibility into aging receivables — days overdue, outstanding amount, reminder history, and one-click escalation to your collections workflow.",
  },
  {
    title: "Client Balance Dashboard",
    body: "Every client has a real-time balance view — invoices issued, payments received, credits applied, and outstanding balance — accessible to you and optionally to them.",
  },
  {
    title: "Monthly Financial Reports",
    body: "Automated end-of-month reports covering total billed, collected, outstanding, and overdue — broken down by client, property, or service line.",
    decoration: "bottom-right" as const,
  },
];

const processSteps = [
  {
    step: "01",
    heading: "Account Setup & Client Import",
    body: "We onboard your client list, payment schedules, and billing configurations — migrating from spreadsheets or your existing billing system with full data validation.",
  },
  {
    step: "02",
    heading: "Payment Gateway Connection",
    body: "We connect your preferred payment gateway — Stripe, PayPal, bank transfer, or direct debit — and configure your payment collection rules and currency settings.",
  },
  {
    step: "03",
    heading: "Invoice Template Configuration",
    body: "Your invoice templates are configured with your branding, tax settings, payment terms, and any custom fields your clients or accountants require.",
  },
  {
    step: "04",
    heading: "Reminder Workflow Setup",
    body: "We configure your reminder cadences — how many days before due, on the due date, and the escalation sequences for amounts that go overdue.",
  },
  {
    step: "05",
    heading: "Parallel Run & Validation",
    body: "We run the platform in parallel with your existing process for one billing cycle to validate all invoices, amounts, and recipient details before full cutover.",
  },
  {
    step: "06",
    heading: "Go-Live & Team Training",
    body: "Your finance and operations team receives training. After go-live, monthly reviews ensure your billing runs with zero manual intervention.",
  },
];

export default function PaymentAutomationPage() {
  return (
    <>
      <div
        className="bg-[#f4ebe8] min-h-screen"
        style={{
          backgroundImage: "url('/img/noise-background.jpg')",
          backgroundBlendMode: "multiply",
          backgroundSize: "300px 300px",
        }}
      >
        {/* Hero */}
        <section className="relative min-h-[85vh] overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20 min-h-[85vh] flex flex-col">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#e89a78] mb-4">
              NativeCloud Product
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-[#0a0e1a] leading-[1.05] max-w-3xl">
              Payment Automation Platform
            </h1>
            <p className="mt-8 text-lg text-[#0a0e1a] max-w-[560px] font-normal">
              A SaaS platform that automates invoices, recurring payments, rent collection, payment reminders, overdue tracking, client balances, and monthly financial reporting — so your team stops chasing and starts growing.
            </p>
            <p className="mt-4 text-sm text-[#6b6b6b] max-w-[500px]">
              Best for: Property managers, landlords, service businesses, legal offices with retainers, B2B companies, and travel agencies collecting deposits or installments.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="/schedule-call"
                className="bg-[#0a0e1a] text-white px-7 py-3.5 rounded-full text-base font-medium whitespace-nowrap hover:opacity-90 transition-opacity"
              >
                Book a demo
              </Link>
              <Link
                href="/schedule-call"
                aria-label="Book a demo"
                className="w-12 h-12 rounded-full bg-[#0a0e1a] flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </Link>
            </div>
            <p className="mt-auto pt-20 text-base text-[#0a0e1a] font-normal">
              Recurring Billing, Rent Collection & Invoice Tracking — fully automated.
            </p>
          </div>
        </section>

        {/* What's included */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16">
          <div className="flex items-center gap-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
            <p className="text-xs uppercase tracking-wider text-[#6b6b6b] font-medium">
              WHAT&apos;S INCLUDED
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <p className="text-[#1a1d2e] text-base leading-relaxed max-w-[650px]">
              Stop spending hours every month generating invoices, chasing late payments, and reconciling bank statements. The platform handles the entire billing cycle — you review exceptions, not every transaction.
            </p>
            <Link
              href="/schedule-call"
              className="shrink-0 self-start inline-flex items-center bg-[#0a0a0a] hover:bg-[#1a1d2e] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors whitespace-nowrap"
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
                className="relative rounded-xl overflow-hidden bg-[#ece8e0] p-8 min-h-[280px] flex flex-col gap-4"
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
            <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
            <p className="text-xs uppercase tracking-wider text-[#6b6b6b] font-medium">HOW WE DELIVER</p>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <h2 className="text-4xl md:text-5xl font-normal text-[#1a1d2e] max-w-[900px] leading-tight">
              Live in one billing cycle — your existing data migrated, your workflows automated
            </h2>
            <Link
              href="/schedule-call"
              className="shrink-0 self-start lg:self-end inline-flex items-center bg-[#0a0a0a] hover:bg-[#1a1d2e] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors whitespace-nowrap"
            >
              Book a demo
            </Link>
          </div>
          <ProcessTimeline steps={processSteps} />
        </section>
      </div>

      <ServiceFooter />
    </>
  );
}
