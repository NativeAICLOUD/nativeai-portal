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

/* Illustrative research result shown in the product visual */
const sources = [
  { kind: "Statute", ref: "Art. 337 OR", note: "Termination with immediate effect" },
  { kind: "Leading case", ref: "Federal Supreme Court", note: "Prior warning required for lesser misconduct" },
  { kind: "Commentary", ref: "Doctrine on Art. 337 OR", note: "When a single warning is sufficient" },
  { kind: "Your file", ref: "Warning letter, 12 March", note: "Matched in the matter documents" },
];

export default function LegalHero() {
  return (
    <section
      aria-labelledby="legal-hero-heading"
      className="relative isolate overflow-hidden bg-white"
    >
      <EditorialGlow />

      <div className={`${CONTAINER} pb-20 pt-[24vh] md:pt-[30vh] lg:px-20 lg:pb-28`}>

        {/* Text block */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-8"><Eyebrow>NativeCloud Legal AI · Agentic research</Eyebrow></div>
          <h1
            id="legal-hero-heading"
            className="m-0 max-w-[1100px] text-[44px] font-light leading-[1.02] tracking-[-0.035em] text-[#141414] sm:text-[64px] md:text-[80px] lg:text-[96px] xl:text-[108px]"
          >
            Research the law.
            <br />
            Answer with <SerifAccent>confidence.</SerifAccent>
          </h1>
          <p className="mt-8 max-w-[520px] text-[17px] font-light leading-[1.6] text-[#4B5563] sm:text-[18px] md:mt-10">
            Agentic AI research assistants for lawyers — statutes, case law, doctrine and your own
            files, with every answer backed by its source.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <BlueButton href="/schedule-call">Book a demo</BlueButton>
            <SecondaryButton href="#research">See how it works</SecondaryButton>
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
                <span className="text-[10px] font-medium text-[#9ca3af]">app.nativeai.cloud / legal-saas / research</span>
              </div>
            </div>

            {/* research question */}
            <div className="flex items-start gap-3 rounded-xl border border-[#eee] bg-[#fafafa] px-4 py-3">
              <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#9ca3af]">Question</span>
              <span className="flex-1 text-[13px] font-medium leading-[1.45] text-[#111]">
                Can the employer dismiss with immediate effect after a single written warning?
              </span>
            </div>

            {/* agent answer */}
            <div className="flex flex-col gap-3 rounded-xl border border-[#2563EB]/20 bg-white px-4 py-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[13px] font-semibold text-[#111]">Research memo</span>
                <span className="rounded-full bg-[rgba(5,150,105,0.10)] px-2.5 py-0.5 text-[10.5px] font-semibold text-[#059669]">
                  4 sources checked
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="h-2 w-[92%] rounded-full bg-[#111]/10" />
                <span className="h-2 w-[84%] rounded-full bg-[#111]/10" />
                <span className="h-2 w-[60%] rounded-full bg-[#111]/10" />
              </div>
              <div className="mt-1 overflow-hidden rounded-lg border border-[#eee]">
                {sources.map((src) => (
                  <div key={src.ref} className="flex items-center gap-3 border-b border-[#f0f0f0] bg-white px-3 py-2 last:border-b-0">
                    <span className="w-[86px] shrink-0 text-[10px] font-semibold uppercase tracking-wide text-[#2563EB]">{src.kind}</span>
                    <span className="shrink-0 text-[12px] font-semibold text-[#111]">{src.ref}</span>
                    <span className="hidden flex-1 truncate text-[12px] text-[#6b7280] sm:block">{src.note}</span>
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
