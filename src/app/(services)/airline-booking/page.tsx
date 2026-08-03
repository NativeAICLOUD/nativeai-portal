import { Link } from "react-transition-progress/next";
import ProcessTimeline from "@/app/components/partials/services/ProcessTimeline";

const features = [
  {
    title: "Reservation & Ticketing Engine",
    body: "Multi-channel reservation system with real-time availability, seat selection, and instant e-ticket generation for airlines, agencies, and tour operators.",
    decoration: "top-left" as const,
  },
  {
    title: "GDS Integration",
    body: "Native connectivity to Amadeus, Sabre, and Travelport GDS networks — access global fare inventory and distribute your seats to travel agents worldwide.",
  },
  {
    title: "Passenger Management",
    body: "Full passenger lifecycle from booking to post-flight — check-in, boarding passes, passport verification, special service requests, and loyalty program tracking.",
  },
  {
    title: "Payment & Invoicing",
    body: "Multi-currency payment processing, installment plans, agency billing, and automated invoicing with reconciliation dashboards for your finance team.",
  },
  {
    title: "Reporting & Analytics",
    body: "Real-time dashboards tracking revenue per route, load factors, booking trends, agency performance, and yield management metrics — all in one place.",
  },
  {
    title: "Travel Agency Portal",
    body: "A white-labeled portal for your agency partners to search, book, manage, and issue tickets — with role-based access and commission tracking built in.",
    decoration: "bottom-right" as const,
  },
];

const processSteps = [
  {
    step: "01",
    heading: "Requirements & Integration Audit",
    body: "We assess your current systems, GDS connections, and booking workflows to design the right integration architecture before a single line of code is written.",
  },
  {
    step: "02",
    heading: "Platform Configuration",
    body: "We configure the platform for your routes, fares, passenger rules, payment gateways, and agency structure — tailored to your operation, not a generic template.",
  },
  {
    step: "03",
    heading: "GDS & Payment Integration",
    body: "We handle all GDS API connections and payment gateway integrations — tested end-to-end in a staging environment before any cutover to production.",
  },
  {
    step: "04",
    heading: "Staff Training & UAT",
    body: "Your operations, reservations, and finance teams receive hands-on training. User acceptance testing is run against real booking scenarios before go-live.",
  },
  {
    step: "05",
    heading: "Go-Live & Cutover",
    body: "We manage the migration from your legacy system — booking data transfer, parallel running, and a dedicated go-live support window until everything is stable.",
  },
  {
    step: "06",
    heading: "Ongoing Support & Updates",
    body: "Post-launch support, quarterly feature releases, and dedicated account management ensure the platform scales with your routes, fleet, and partner network.",
  },
];

export default function AirlineBookingPage() {
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
              Airline & Travel Booking SaaS
            </h1>
            <p className="mt-8 text-lg text-[#0a0e1a]/70 max-w-[560px] font-normal">
              A cloud-based platform for airlines, travel agencies, and tour operators to manage reservations, ticketing, passengers, payments, and GDS-connected workflows — from one centralised system.
            </p>
            <p className="mt-4 text-sm text-[#6b6b6b] max-w-[500px]">
              Best for: Airlines, travel agencies, tour operators, corporate travel companies, and booking businesses.
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
              Reservation, Ticketing & GDS Platform — built for modern travel operations.
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
              Everything your travel operation needs — from the first seat search to the final reconciliation report — in a single platform built for scale and connected to the global distribution network.
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
              From discovery to go-live — a structured delivery that keeps your operation running throughout
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
