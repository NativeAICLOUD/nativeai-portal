"use client";

import { motion } from "framer-motion";
import { Link } from "react-transition-progress/next";
import {
  Cloud, ShieldCheck, Lock, Boxes, GitBranch, Server, type LucideIcon,
} from "lucide-react";
import { Constants } from "@/Constants";
import { CONTAINER, Eyebrow, SECTION_Y } from "./HomeUI";

/* Crimson + tinted tile — same treatment as the About page's
   "Extend Delivery Capacity & Team Augmentation" card. */
const ICON_COLOR = "#BE123C";
const ICON_TINT = "rgba(190,18,60,0.08)";

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
    <section
      className="font-switzer relative overflow-hidden"
      /* NearshoreIntroSection's lavender glow, kept small in the top-right corner so the rest of the section is pure white */
      style={{
        background:
          'radial-gradient(circle at 90% 0%, rgba(224,225,255,0.6), transparent 20%), ' +
          '#ffffff',
      }}
    >

      <div className={`relative ${CONTAINER} ${SECTION_Y}`}>

        {/* Left — text + chip cloud */}
        <motion.div
          className="flex flex-col items-start gap-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Typography mirrors NearshoreIntroSection */}
          <div className="mb-1"><Eyebrow>Areas of Expertise</Eyebrow></div>
          <h2 className="m-0 max-w-[620px] text-[36px] font-medium leading-[1.05] tracking-[-0.02em] text-[#111] sm:text-[46px] lg:text-[56px]">
            Azure &amp; cloud security, done right.
          </h2>
          <p className="m-0 mt-1 max-w-[540px] text-[18px] font-light leading-[1.6] text-[#111]">
            NativeCloud is a certified Microsoft Azure partner focused on secure-by-default cloud architecture.
          </p>

          <div className="mt-2 flex flex-wrap gap-x-8 gap-y-5">
            {expertiseTags.map((tag, i) => (
              <motion.div
                key={tag.label}
                className="group flex items-center gap-3.5"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.06 }}
                viewport={{ once: true, margin: "-40px" }}
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105"
                  style={{ background: ICON_TINT }}
                  aria-hidden="true"
                >
                  <tag.icon className="h-5 w-5" style={{ color: ICON_COLOR }} strokeWidth={1.7} />
                </span>
                <Link
                  href={tag.href}
                  className="inline-flex items-center rounded-full border border-[#E6E6E6] bg-white px-5 py-2.5 transition-[transform,border-color,background-color] duration-200 group-hover:-translate-y-0.5 group-hover:border-[#BE123C]/25 group-hover:bg-[rgba(190,18,60,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111827]/20"
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
