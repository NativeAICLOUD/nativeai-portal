'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { CONTAINER, Eyebrow, SecondaryButton } from "@/app/components/partials/services/ServiceUI";
import { EditorialGlow, SerifAccent } from "@/app/components/ui/EditorialGlow";

/* Page-scoped blue-gradient primary CTA (matches the airline-booking hero) */
function BlueButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="ai-search-wrap inline-block transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none"
    >
      <span className="ai-search-inner flex items-center gap-2.5 px-6 py-3">
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
          <defs>
            <linearGradient id="legal-hero-spark-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1e4fd6" />
            </linearGradient>
          </defs>
          <path fill="url(#legal-hero-spark-grad)" d="M12 0c0 6.627-5.373 12-12 12 6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12Z" />
        </svg>
        <span className="text-[15px] font-medium text-[#111]">{children}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0 text-[#111]">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}

const cases = [
  { ref: "2026-0142", title: "Muster AG ./. Beispiel GmbH", area: "Contract law", status: "Deadline in 3 days" as const },
  { ref: "2026-0156", title: "Estate of R. Keller", area: "Inheritance", status: "Needs review" as const },
  { ref: "2026-0161", title: "Tenancy dispute — Bahnhofstrasse", area: "Tenancy", status: "Up to date" as const },
  { ref: "2026-0170", title: "Dismissal claim — L. Berisha", area: "Employment", status: "Up to date" as const },
];

const statusStyle = {
  "Deadline in 3 days": { bg: "rgba(217,119,6,0.10)", color: "#d97706" },
  "Needs review": { bg: "rgba(37,99,235,0.10)", color: "#2563EB" },
  "Up to date": { bg: "rgba(5,150,105,0.10)", color: "#059669" },
};

export default function LegalHero() {
  return (
    <section
      aria-labelledby="legal-hero-heading"
      className="relative isolate overflow-hidden bg-white"
    >
      <EditorialGlow />

      <div className={`${CONTAINER} pb-20 pt-[18vh] md:pt-[22vh] lg:px-20 lg:pb-28`}>

        {/* Text block */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-8"><Eyebrow>NativeCloud Legal SaaS</Eyebrow></div>
          <h1
            id="legal-hero-heading"
            className="m-0 max-w-[1100px] text-[44px] font-light leading-[1.02] tracking-[-0.035em] text-[#141414] sm:text-[64px] md:text-[80px] lg:text-[96px] xl:text-[108px]"
          >
            Legal work,
            <br />
            without the <SerifAccent>paperwork.</SerifAccent>
          </h1>
          <p className="mt-8 max-w-[520px] text-[17px] font-light leading-[1.6] text-[#4B5563] sm:text-[18px] md:mt-10">
            One AI workspace for cases, documents, mail, deadlines and billing.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <BlueButton href="/schedule-call">Book a demo</BlueButton>
            <SecondaryButton href="#modules">See how it works</SecondaryButton>
          </div>
        </motion.div>

        {/* Product visual */}
        <motion.div
          className="mt-20 max-w-[960px] lg:ml-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
            className="flex flex-col gap-4 rounded-2xl border border-[#e2e4e9] bg-white p-5 shadow-[0_28px_80px_rgba(15,23,42,0.14)] sm:p-6"
          >
            {/* browser chrome */}
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <div className="ml-2 flex h-6 flex-1 items-center rounded-full border border-[#eee] bg-[#f7f8fa] px-3">
                <span className="text-[10px] font-medium text-[#9ca3af]">app.nativeai.cloud / legal-saas / cases</span>
              </div>
            </div>

            {/* toolbar */}
            <div className="flex h-11 items-center gap-3 rounded-xl border border-[#eee] bg-[#fafafa] px-4">
              <span className="text-[13px] font-semibold text-[#111]">Case Cockpit</span>
              <div className="flex-1" />
              <span className="hidden rounded-full border border-[#e6e6e6] bg-white px-3 py-1 text-[11px] font-medium text-[#6b7280] sm:inline">3 agent proposals</span>
              <span className="rounded-full bg-[#2563EB] px-3.5 py-1.5 text-[11px] font-semibold text-white">+ New case</span>
            </div>

            {/* case table */}
            <div className="overflow-hidden rounded-xl border border-[#eee]">
              <div className="flex items-center gap-3 bg-[#fafafa] px-4 py-2 text-[10px] font-semibold uppercase tracking-wide text-[#9ca3af]">
                <span className="w-[62px]">Ref.</span>
                <span className="flex-1">Case</span>
                <span className="hidden w-[90px] sm:block">Area</span>
                <span>Status</span>
              </div>
              <div className="flex flex-col divide-y divide-[#f0f0f0]">
                {cases.map((c) => (
                  <div key={c.ref} className="flex items-center gap-3 bg-white px-4 py-2.5">
                    <span className="w-[62px] shrink-0 text-[11.5px] font-medium text-[#9ca3af]">{c.ref}</span>
                    <span className="flex-1 truncate text-[12px] font-semibold text-[#111]">{c.title}</span>
                    <span className="hidden w-[90px] shrink-0 truncate text-[12px] text-[#6b7280] sm:block">{c.area}</span>
                    <span
                      className="shrink-0 rounded-full px-2.5 py-0.5 text-[10.5px] font-semibold"
                      style={{ background: statusStyle[c.status].bg, color: statusStyle[c.status].color }}
                    >
                      {c.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
