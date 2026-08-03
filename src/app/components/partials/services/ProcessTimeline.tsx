"use client";

import { motion } from "framer-motion";
import type { ProcessStep } from "@/lib/services-data";
import {
  UserPlus, Plug, FileText, BellRing, ClipboardCheck, Rocket,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  setup: UserPlus,
  connect: Plug,
  template: FileText,
  reminder: BellRing,
  validate: ClipboardCheck,
  launch: Rocket,
};

function TextBlock({ step, index }: { step: ProcessStep; index: number }) {
  const Icon = step.icon ? ICONS[step.icon] : undefined;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      className="max-w-[320px]"
    >
      {Icon && (
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4" style={{ background: "rgba(255,107,74,0.12)", color: "#ff6b4a" }}>
          <Icon size={22} strokeWidth={1.8} aria-hidden />
        </span>
      )}
      <p className="text-sm text-[#ff6b4a] uppercase tracking-wide font-medium mb-3">
        Step {step.step}
      </p>
      <h3 className="text-4xl md:text-5xl font-normal text-[#1a1d2e] leading-tight mb-4">
        {step.heading}
      </h3>
      <p className="text-[#6b6b6b] text-sm leading-relaxed">
        {step.body}
      </p>
    </motion.div>
  );
}

function TimelineStep({ step, index }: { step: ProcessStep; index: number }) {
  const isLeft = index % 2 === 0;

  return (
    /*
     * Mobile  → flex row: [line+dot (order-first, ml-4)] [text (order-2)]
     * Desktop → 3-col grid: [left-text | empty] [line+dot] [empty | right-text]
     */
    <div className="flex gap-8 items-start md:grid md:grid-cols-[1fr_auto_1fr] md:gap-0 mb-[200px] last:mb-0">

      {/* ── Left text slot ── */}
      <div
        className={[
          "order-2 md:order-1",
          "md:pr-16 md:flex md:justify-end",
          /* hide on mobile when text belongs to the right slot */
          isLeft ? "" : "hidden md:block",
        ].join(" ")}
      >
        {isLeft && <TextBlock step={step} index={index} />}
      </div>

      {/* ── Center: line + dot ── */}
      <div className="order-first md:order-2 flex-shrink-0 flex flex-col items-center ml-4 md:ml-0">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-30%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
          className="w-0.5 h-[260px] bg-[#ff6b4a]"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-30%" }}
          transition={{ duration: 0.3, delay: 0.7, ease: "easeOut" }}
          className="w-3.5 h-3.5 rounded-full bg-[#ff6b4a] mx-auto -mt-[6px]"
        />
      </div>

      {/* ── Right text slot ── */}
      <div
        className={[
          "order-2 md:order-3",
          "md:pl-16",
          /* hide on mobile when text belongs to the left slot */
          isLeft ? "hidden md:block" : "",
        ].join(" ")}
      >
        {!isLeft && <TextBlock step={step} index={index} />}
      </div>

    </div>
  );
}

export default function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="mt-32 pb-20 md:pb-32 relative">
      {/* Continuous vertical guide on mobile — fills the gaps between steps */}
      <motion.div
        className="absolute md:hidden w-0.5 rounded-full bg-[#ff6b4a]"
        style={{ left: "calc(1rem + 7px)", top: 0, bottom: 0, transformOrigin: "top" }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />
      {steps.map((step, i) => (
        <TimelineStep key={step.step} step={step} index={i} />
      ))}
    </div>
  );
}
