'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { CONTAINER, Eyebrow, SecondaryButton } from "@/app/components/partials/services/ServiceUI";

/* Page-scoped blue-gradient primary CTA (matches the custom-development / cloud-native-sd pattern) */
function BlueButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="ai-search-wrap inline-block transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none"
    >
      <span className="ai-search-inner flex items-center gap-2.5 px-6 py-3">
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
          <defs>
            <linearGradient id="hero-spark-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1e4fd6" />
            </linearGradient>
          </defs>
          <path fill="url(#hero-spark-grad)" d="M12 0c0 6.627-5.373 12-12 12 6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12Z" />
        </svg>
        <span className="text-[15px] font-medium text-[#111]">{children}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0 text-[#111]">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}

const reservations = [
  { code: "NC1024", route: "ZRH → PRN", passengers: "2 passengers", status: "Confirmed" as const },
  { code: "NC1048", route: "BSL → PRN", passengers: "4 passengers", status: "Confirmed" as const },
  { code: "NC1082", route: "ZRH → SKP", passengers: "1 passenger", status: "Pending" as const },
  { code: "NC1120", route: "GVA → PRN", passengers: "3 passengers", status: "Confirmed" as const },
];

const statusStyle = {
  Confirmed: { bg: "rgba(5,150,105,0.10)", color: "#059669" },
  Pending: { bg: "rgba(217,119,6,0.10)", color: "#d97706" },
};

const stats = [
  { label: "Reservations", value: "1,284" },
  { label: "Load factor", value: "82%" },
  { label: "Revenue", value: "€148K" },
];

export default function AirlineHero() {
  return (
    <div className="hero-bg-blue">
      <div className={`${CONTAINER} pb-16 pt-32 lg:pt-28`}>
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-14">

          {/* Left — 52% */}
          <motion.div
            className="w-full lg:basis-[52%]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mb-6"><Eyebrow>NativeCloud Airline Platform</Eyebrow></div>
            <h1 className="m-0 text-[36px] font-medium leading-[1.08] text-[#111] sm:text-[46px] lg:text-[60px]">
              The platform behind every booking.
            </h1>
            <p className="mt-6 max-w-[520px] text-[18px] font-normal leading-[1.6] text-[#111]">
              One system for reservations, passengers and distribution.
            </p>
            <p className="mt-3 max-w-[480px] text-[15px] font-normal leading-[1.5] text-[#6b7280]">
              Built for airlines, virtual airlines, charter operators and travel networks.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <BlueButton href="/schedule-call">Book a demo</BlueButton>
              <SecondaryButton href="#channels">Explore the platform</SecondaryButton>
            </div>
            <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[13px] font-medium tracking-[0.01em] text-[#4b5563]">
              <span>PSS</span>
              <span className="text-[#c7cad1]">·</span>
              <span>B2B Distribution</span>
              <span className="text-[#c7cad1]">·</span>
              <span>Payments</span>
              <span className="text-[#c7cad1]">·</span>
              <span>APIs</span>
            </p>
          </motion.div>

          {/* Right — 48%, product visual */}
          <motion.div
            className="w-full lg:basis-[48%]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
              className="flex flex-col gap-4 rounded-2xl border border-[#e2e4e9] bg-white p-5 shadow-[0_28px_80px_rgba(15,23,42,0.14)]"
            >
              {/* browser chrome */}
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <div className="ml-2 flex h-6 flex-1 items-center rounded-full border border-[#eee] bg-[#f7f8fa] px-3">
                  <span className="text-[10px] font-medium text-[#9ca3af]">app.nativeai.cloud / reservations</span>
                </div>
              </div>

              {/* toolbar */}
              <div className="flex h-11 items-center gap-3 rounded-xl border border-[#eee] bg-[#fafafa] px-4">
                <span className="text-[13px] font-semibold text-[#111]">Reservations</span>
                <div className="flex-1" />
                <span className="rounded-full border border-[#e6e6e6] bg-white px-3 py-1 text-[11px] font-medium text-[#6b7280]">Today</span>
                <span className="rounded-full bg-[#2563EB] px-3.5 py-1.5 text-[11px] font-semibold text-white">+ New</span>
              </div>

              {/* stat tiles */}
              <div className="grid grid-cols-3 gap-2.5">
                {stats.map(({ label, value }) => (
                  <div key={label} className="flex flex-col gap-1.5 rounded-xl border border-[#eee] bg-[#fafafa] p-3.5">
                    <span className="text-[9.5px] font-semibold uppercase tracking-wide text-[#9ca3af]">{label}</span>
                    <span className="text-[17px] font-semibold leading-none text-[#111]">{value}</span>
                  </div>
                ))}
              </div>

              {/* reservation table */}
              <div className="overflow-hidden rounded-xl border border-[#eee]">
                <div className="flex items-center gap-3 bg-[#fafafa] px-4 py-2 text-[10px] font-semibold uppercase tracking-wide text-[#9ca3af]">
                  <span className="w-[62px]">Booking</span>
                  <span className="w-[70px]">Route</span>
                  <span className="flex-1">Passengers</span>
                  <span>Status</span>
                </div>
                <div className="flex flex-col divide-y divide-[#f0f0f0]">
                  {reservations.map((r) => (
                    <div key={r.code} className="flex items-center gap-3 bg-white px-4 py-2.5">
                      <span className="w-[62px] shrink-0 text-[11.5px] font-medium text-[#9ca3af]">{r.code}</span>
                      <span className="w-[70px] shrink-0 text-[12px] font-semibold text-[#111]">{r.route}</span>
                      <span className="flex-1 truncate text-[12px] text-[#6b7280]">{r.passengers}</span>
                      <span
                        className="shrink-0 rounded-full px-2.5 py-0.5 text-[10.5px] font-semibold"
                        style={{ background: statusStyle[r.status].bg, color: statusStyle[r.status].color }}
                      >
                        {r.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* blue divider — full viewport width */}
      <hr className="divider-blue m-0 h-1 w-full border-0" />
    </div>
  );
}
