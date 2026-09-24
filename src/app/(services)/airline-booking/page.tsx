import type { Metadata } from "next";
import {
  Plane, Users2, Share2, Settings2, BookOpen, Boxes, Tag, UserCheck,
  TicketCheck, Luggage, ChevronDown, Check, Database, Plug, CreditCard,
  Building2, Store, Calculator, KeyRound, type LucideIcon,
} from "lucide-react";
import { CONTAINER, Eyebrow } from "@/app/components/partials/services/ServiceUI";
import GetInTouchCTASection from "@/app/components/partials/services/GetInTouchCTASection";
import AirlineHero from "./AirlineHero";
import AirlineHelpWidget from "./AirlineHelpWidget";

export const metadata: Metadata = {
  title: "Airline & Travel Booking Platform",
  description:
    "The platform behind every booking. Reservations, passengers, B2B distribution and payments — one modern platform for airline commerce, designed to connect with GDS, NDC and airline systems.",
};

/* ── content ── */

const channels: { label: string; title: string; body: string; icon: LucideIcon }[] = [
  { label: "Direct", title: "Your booking experience.", body: "Web and mobile reservations directly under your brand.", icon: Plane },
  { label: "B2B", title: "Your agency network.", body: "Give travel partners controlled access to inventory, pricing and bookings.", icon: Users2 },
  { label: "Distribution", title: "Connect your ecosystem.", body: "Designed to connect with GDS, NDC, airline APIs and external inventory.", icon: Share2 },
  { label: "Operations", title: "Run the passenger journey.", body: "Reservations, passengers, fares, inventory and payments in one place.", icon: Settings2 },
];

const pssFeatures: { title: string; body: string; icon: LucideIcon }[] = [
  { title: "Reservations", body: "Every booking. One place.", icon: BookOpen },
  { title: "Inventory", body: "Know what's available. Control what sells.", icon: Boxes },
  { title: "Fares", body: "Price with clarity. Change with speed.", icon: Tag },
  { title: "Passengers", body: "Every traveler. Every detail. Connected.", icon: UserCheck },
  { title: "Ticketing", body: "Issue, change and manage tickets through your airline integrations.", icon: TicketCheck },
  { title: "Ancillaries", body: "Seats, baggage and extras — built into the journey.", icon: Luggage },
];

const agencyCan = [
  "Search and book flights",
  "Manage passengers",
  "Access negotiated fares",
  "View reservations",
  "Track commissions",
  "Download invoices",
];

const airlineControls = [
  "Control agency access",
  "Set pricing and markups",
  "Manage commissions",
  "Define credit limits",
  "Apply booking rules",
  "Control inventory",
  "See performance",
];

const bookingSteps = ["Search", "Select flight", "Choose fare", "Passenger details", "Seats & baggage", "Payment", "Confirmation"];

const controlCenterItems = ["Reservations", "Passengers", "Flights", "Inventory", "Fares", "Agencies", "Payments", "Refunds", "Reports"];

const integrations: { label: string; icon: LucideIcon }[] = [
  { label: "GDS", icon: Database },
  { label: "NDC", icon: Share2 },
  { label: "Airline APIs", icon: Plug },
  { label: "Payment gateways", icon: CreditCard },
  { label: "Operating carriers", icon: Building2 },
  { label: "Travel agencies", icon: Store },
  { label: "Accounting / ERP", icon: Calculator },
  { label: "Identity providers", icon: KeyRound },
];

const migrationSteps = [
  { num: "01", title: "Direct booking" },
  { num: "02", title: "Agency portal" },
  { num: "03", title: "PSS integration" },
  { num: "04", title: "Distribution" },
  { num: "05", title: "Full platform" },
];

const valueStatements = [
  "Own the customer relationship.",
  "Open new B2B distribution channels.",
  "Launch changes without legacy-system friction.",
  "Bring reservations, passengers and distribution together.",
];

const techTags = ["REST APIs", "Cloud-native", "Secure identity", "Event-driven", "Modular architecture", "Real-time integrations"];

/* ── shared bits ── */

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#c7cad1]">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

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

export default function AirlineBookingPage() {
  return (
    <div className="font-switzer">
      <AirlineHelpWidget />

      {/* ── Hero ── */}
      <AirlineHero />

      {/* ── Big product statement ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} py-28 lg:py-40`}>
          <div className="mx-auto max-w-[820px] text-center">
            <h2 className="m-0 text-[36px] font-medium leading-[1.15] text-[#111] sm:text-[48px] lg:text-[58px]">
              Your airline.<br />
              Your customers.<br />
              Your distribution.
            </h2>
            <p className="mx-auto mt-8 max-w-[560px] text-[18px] font-light leading-[1.6] text-[#6b7280]">
              Sell directly. Work with agencies. Connect external inventory. Manage the
              passenger journey from one platform.
            </p>
          </div>
        </div>
      </section>

      {/* ── One platform, every sales channel ── */}
      <section id="channels" className="bg-white scroll-mt-24">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <h2 className="m-0 text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              One platform.<br />Every sales channel.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {channels.map(({ label, title, body, icon: Icon }) => (
              <article
                key={label}
                className="group flex h-full flex-col rounded-lg border border-[#e6e6e6] bg-white p-6 transition-[border-color,transform] duration-200 hover:border-[#111827]/25 hover:-translate-y-0.5"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EFF5FF]">
                    <Icon className="h-5 w-5 text-[#2563EB]" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#9ca3af]">{label}</span>
                </div>
                <h3 className="m-0 text-[18px] font-medium leading-[1.3] text-[#111]">{title}</h3>
                <p className="mt-2 text-[15px] font-normal leading-[1.5] text-[#6b7280]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Visual platform architecture ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="rounded-2xl border border-[#e6e6e6] bg-[#FAFAF8] px-6 py-12 shadow-[0_24px_60px_rgba(15,23,42,0.05)] sm:px-10 lg:py-16">

            {/* row 1 */}
            <div className="mx-auto flex max-w-[560px] flex-col gap-3 sm:flex-row sm:gap-4">
              {["Passengers", "Travel Agencies"].map((label) => (
                <div key={label} className="flex-1 rounded-xl border border-[#e6e6e6] bg-white px-5 py-3.5 text-center">
                  <span className="text-[14px] font-medium text-[#111]">{label}</span>
                </div>
              ))}
            </div>

            <Connector />

            {/* row 2 */}
            <div className="mx-auto max-w-[560px] rounded-xl border border-[#e6e6e6] bg-white px-5 py-3.5 text-center">
              <span className="text-[14px] font-medium text-[#111]">Airline Experience</span>
            </div>

            <Connector />

            {/* row 3 — the platform */}
            <div
              className="relative mx-auto max-w-[720px] overflow-hidden rounded-xl px-6 py-6 text-center shadow-[0_20px_50px_rgba(37,99,235,0.25)] sm:px-8"
              style={{ background: "linear-gradient(155deg, #0a0e1a 0%, #10193a 55%, #0d1b3d 100%)" }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-0 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[70px]"
                style={{ background: "radial-gradient(circle, rgba(96,165,250,0.5) 0%, transparent 70%)" }}
              />
              <span className="relative text-[16px] font-semibold text-white">NativeCloud Airline Platform</span>
              <ul className="relative mx-auto mt-4 grid max-w-[440px] grid-cols-1 gap-3 text-left sm:grid-cols-2">
                {["Reservations", "PNR", "Inventory", "Fares", "Passengers", "Payments", "Agencies"].map((tag) => (
                  <li key={tag} className="flex items-start gap-2.5 text-[15px] leading-[1.4] text-white/90">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#60a5fa]" strokeWidth={2.2} aria-hidden="true" />
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <Connector />

            {/* row 4 */}
            <div className="mx-auto flex max-w-[720px] flex-col gap-3 sm:flex-row sm:gap-4">
              {["Airline APIs", "GDS / NDC", "Payment Providers"].map((label) => (
                <div key={label} className="flex-1 rounded-xl border border-[#e6e6e6] bg-white px-5 py-3.5 text-center">
                  <span className="text-[14px] font-medium text-[#111]">{label}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Passenger Service System ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>Passenger Service System</Eyebrow></div>
            <h2 className="m-0 max-w-[560px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              Everything behind the journey.
            </h2>
            <p className="mt-4 max-w-[520px] text-[16px] font-normal leading-[1.5] text-[#6b7280]">
              From the first booking to departure, every passenger, fare and service stays
              connected.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {pssFeatures.map(({ title, body, icon: Icon }) => (
              <article key={title} className="flex h-full flex-col rounded-lg border border-[#e6e6e6] bg-white p-6">
                <Icon className="mb-5 h-6 w-6 text-[#111]" strokeWidth={1.6} aria-hidden="true" />
                <h3 className="m-0 text-[17px] font-medium leading-[1.3] text-[#111]">{title}</h3>
                <p className="mt-2 text-[15px] font-normal leading-[1.5] text-[#6b7280]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── B2B agency distribution ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>B2B Distribution</Eyebrow></div>
            <h2 className="m-0 max-w-[620px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              More places to sell. One place to control it.
            </h2>
            <p className="mt-4 max-w-[560px] text-[16px] font-normal leading-[1.5] text-[#6b7280]">
              Give travel partners the tools to sell — while you keep control of pricing,
              inventory and rules.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="flex flex-col gap-5 rounded-2xl border border-[#e6e6e6] bg-white p-8 lg:p-10">
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#2563EB]">For agencies</span>
              <ul className="flex flex-col gap-3">
                {agencyCan.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[15px] leading-[1.4] text-[#111]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]" strokeWidth={2.2} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="relative flex flex-col gap-5 overflow-hidden rounded-2xl p-8 shadow-[0_20px_50px_rgba(37,99,235,0.18)] lg:p-10"
              style={{ background: "linear-gradient(155deg, #0a0e1a 0%, #10193a 55%, #0d1b3d 100%)" }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-0 h-[260px] w-[260px] translate-x-1/3 -translate-y-1/3 rounded-full blur-[80px]"
                style={{ background: "radial-gradient(circle, rgba(96,165,250,0.45) 0%, transparent 70%)" }}
              />
              <span className="relative text-[12px] font-semibold uppercase tracking-[0.14em] text-[#93c5fd]">For the airline</span>
              <ul className="relative grid grid-cols-1 gap-3 sm:grid-cols-2">
                {airlineControls.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[15px] leading-[1.4] text-white/90">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#60a5fa]" strokeWidth={2.2} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-12 text-center text-[22px] font-medium text-[#111] sm:text-[26px]">
            More distribution. Same control.
          </p>
        </div>
      </section>

      {/* ── Booking experience ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>Direct Booking</Eyebrow></div>
            <h2 className="m-0 max-w-[560px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              From search to confirmation.<br />Without the friction.
            </h2>
          </div>

          <div className="mb-10 flex flex-wrap items-center gap-x-2 gap-y-3">
            {bookingSteps.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-[#e6e6e6] bg-white px-4 py-2 text-[13px] font-medium text-[#111]">
                  {step}
                </span>
                {i !== bookingSteps.length - 1 && <Arrow />}
              </div>
            ))}
          </div>

          <BrowserFrame url="book.nativeai.cloud / search">
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-4">
              {["From", "To", "Depart", "Passengers"].map((label) => (
                <div key={label} className="flex flex-col gap-1.5 rounded-xl border border-[#eee] bg-[#fafafa] px-3.5 py-2.5">
                  <span className="text-[10px] font-medium uppercase tracking-wide text-[#9ca3af]">{label}</span>
                  <div className="h-2.5 w-16 rounded-full bg-[#111]/15" />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {[0, 1, 2].map((row) => (
                <div key={row} className="flex items-center gap-4 rounded-xl border border-[#eee] bg-[#fafafa] px-4 py-3.5">
                  <div className="h-2.5 w-10 rounded-full bg-[#111]/15" />
                  <div className="h-2 w-20 rounded-full bg-[#111]/10" />
                  <div className="flex-1" />
                  <div className="h-2.5 w-12 rounded-full bg-[#111]/15" />
                  <div className="h-7 w-20 shrink-0 rounded-full bg-[#2563EB]" />
                </div>
              ))}
            </div>
          </BrowserFrame>
        </div>
      </section>

      {/* ── AI-first ── */}
      <section
        className="relative overflow-hidden rounded-[32px] sm:rounded-[48px] lg:rounded-[64px]"
        style={{ background: "linear-gradient(155deg, #0a0e1a 0%, #0d1b3d 45%, #1e4fd6 130%)" }}
      >
        {/* glow orb */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/3 rounded-full blur-[110px]"
          style={{ background: "radial-gradient(circle, rgba(96,165,250,0.55) 0%, transparent 70%)" }}
        />
        {/* spark watermark */}
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="pointer-events-none absolute -right-10 -top-10 h-[220px] w-[220px] text-white/[0.06] sm:h-[280px] sm:w-[280px]"
        >
          <path fill="currentColor" d="M12 0c0 6.627-5.373 12-12 12 6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12Z" />
        </svg>

        <div className={`${CONTAINER} relative py-20 lg:py-28`}>
          <div className="mx-auto max-w-[680px] text-center">
            <div className="mb-5 flex justify-center"><Eyebrow><span className="text-white/50">AI-First Airline Platform</span></Eyebrow></div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.08] px-3.5 py-1.5 text-[12px] font-semibold text-white backdrop-blur-sm">
              <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
                <path fill="#60a5fa" d="M12 0c0 6.627-5.373 12-12 12 6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12Z" />
              </svg>
              NativeCloud Airline AI
            </span>
            <h2 className="mx-auto mt-6 max-w-[560px] text-[30px] font-medium leading-[1.15] text-white md:text-[42px]">
              Intelligence built into every journey.
            </h2>
            <p className="mx-auto mt-4 max-w-[520px] text-[16px] font-normal leading-[1.6] text-white/60">
              From passenger questions to operational decisions, AI works across
              reservations, distribution and the airline experience.
            </p>
          </div>
        </div>
      </section>

      <div className="h-20 lg:h-24" />

      {/* ── Admin / control center ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>Airline Control</Eyebrow></div>
            <h2 className="m-0 max-w-[560px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              See the whole operation.
            </h2>
            <p className="mt-4 max-w-[520px] text-[16px] font-normal leading-[1.5] text-[#6b7280]">
              One place to understand what is selling, who is travelling and what needs
              attention.
            </p>
          </div>

          <BrowserFrame url="app.nativeai.cloud / control-center">
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
                  {["Revenue", "Bookings", "Load factor"].map((label) => (
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

      {/* ── Distribution & integrations ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-10">
            <div className="mb-4"><Eyebrow>Connectivity</Eyebrow></div>
            <h2 className="m-0 text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              Built to connect.
            </h2>
            <p className="mt-4 max-w-[560px] text-[16px] font-normal leading-[1.5] text-[#6b7280]">
              NativeCloud is designed to work with the systems already around your airline.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {integrations.map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3 rounded-xl border border-[#e6e6e6] bg-white p-3.5 transition-[border-color,transform] duration-200 hover:border-[#111827]/25 hover:-translate-y-0.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#EFF5FF]">
                  <Icon className="h-4 w-4 text-[#2563EB]" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="text-[13px] font-medium leading-[1.25] text-[#111]">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex gap-5 rounded-lg bg-[#111] p-8 lg:p-10">
            <span className="mt-1 h-full w-[3px] shrink-0 rounded-full bg-[#2563EB]" />
            <p className="m-0 text-[18px] font-light leading-[1.6] text-white/90">
              NativeCloud can be introduced alongside existing airline infrastructure —
              instead of requiring an immediate full-system replacement.
            </p>
          </div>
        </div>
      </section>

      {/* ── Migration / adoption ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>Start Small</Eyebrow></div>
            <h2 className="m-0 text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              You don&apos;t have to replace everything.
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-[#e6e6e6] bg-[#FAFAF8] p-6 lg:p-8">
            {migrationSteps.map((step, i) => (
              <div key={step.num} className="flex items-center gap-3">
                <div className="flex flex-col gap-1 rounded-xl border border-[#e6e6e6] bg-white px-5 py-3.5">
                  <span className="text-[11px] font-light text-[#9ca3af]">{step.num}</span>
                  <span className="text-[14px] font-medium text-[#111]">{step.title}</span>
                </div>
                {i !== migrationSteps.length - 1 && <Arrow />}
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-[560px] text-[16px] font-normal leading-[1.5] text-[#6b7280]">
            Start with one workflow, one market or one route. Expand when it makes sense.
          </p>
        </div>
      </section>

      {/* ── Business value ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-10">
            <h2 className="m-0 text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              More control where it matters.
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

      {/* ── API / technology ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-8">
            <div className="mb-4"><Eyebrow>API-First</Eyebrow></div>
            <h2 className="m-0 text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              Designed for what comes next.
            </h2>
            <p className="mt-4 max-w-[560px] text-[16px] font-normal leading-[1.5] text-[#6b7280]">
              Modern APIs and modular architecture make NativeCloud easier to integrate,
              extend and evolve as the airline grows.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {techTags.map((tag) => (
              <span key={tag} className="rounded-full border border-[#e6e6e6] px-3.5 py-1.5 text-[13px] font-medium text-[#111]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <GetInTouchCTASection
        heading="See what this could look like for your airline."
        body="Show us how you sell today. We'll show you how NativeCloud can fit into your operation."
        topic="Airline & Travel Booking"
      />

    </div>
  );
}
