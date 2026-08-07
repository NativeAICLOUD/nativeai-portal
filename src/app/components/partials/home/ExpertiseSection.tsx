"use client";

import { motion } from "framer-motion";
import { Link } from "react-transition-progress/next";
import {
  Cloud, ShieldCheck, Lock, Boxes, GitBranch, Server, type LucideIcon,
} from "lucide-react";
import { Constants } from "@/Constants";
import { CONTAINER, SECTION_Y, H2, BODY } from "./HomeUI";

type ExpertiseTag = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const expertiseTags: ExpertiseTag[] = [
  { label: "Azure",               href: Constants.PAGES.AZURE,                      icon: Cloud },
  { label: "Microsoft Azure",     href: Constants.PAGES.AZURE_CLOUDIFY,             icon: Server },
  { label: "Azure Security",      href: Constants.PAGES.WORKSHOP_DATA_AI_SECURITY,  icon: Lock },
  { label: "Cloud Security",      href: Constants.PAGES.WORKSHOP_DATA_AI_SECURITY,  icon: ShieldCheck },
  { label: "Cloud Architecture",  href: Constants.PAGES.CLOUD_SOFTWARE_ARCHITECTURE, icon: Boxes },
  { label: "DevSecOps",           href: Constants.PAGES.DEVOPS_ON_AZURE,            icon: GitBranch },
];

export default function ExpertiseSection() {
  return (
    <section className="font-switzer relative overflow-hidden bg-[#f6f7f9]">

      {/* Decorative glow — top-left, mirrors Industries section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-[6%] h-80 w-80 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 70%)' }}
      />

      <div className={`relative ${CONTAINER} ${SECTION_Y}`}>

        {/* Left — text + chip cloud */}
        <motion.div
          className="flex flex-col items-start gap-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#6B7280]">
            Areas of Expertise
          </p>
          <h2 className={H2}>
            Azure &amp; cloud security, done right
          </h2>
          <p className={`max-w-[440px] ${BODY}`}>
            NativeCloud is a certified Microsoft Azure partner focused on secure-by-default cloud architecture.
          </p>

          <div className="mt-2 flex flex-wrap gap-x-8 gap-y-5">
            {expertiseTags.map((tag, i) => (
              <motion.div
                key={tag.label}
                className="flex items-center gap-3.5"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.06 }}
                viewport={{ once: true, margin: "-40px" }}
              >
                <tag.icon className="h-12 w-12 shrink-0 text-[#2563eb]" strokeWidth={1.3} aria-hidden="true" />
                <Link
                  href={tag.href}
                  className="group inline-flex items-center rounded-full border border-[#E6E6E6] bg-white px-5 py-2.5 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[#111827]/20 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111827]/20"
                >
                  <span className="text-[15px] font-medium text-[#111]">{tag.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
