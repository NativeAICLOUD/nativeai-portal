"use client";

import { motion } from "framer-motion";
import { Link } from "react-transition-progress/next";
import {
  Cloud, ShieldCheck, Lock, Boxes, GitBranch, Server, type LucideIcon,
} from "lucide-react";
import { Constants } from "@/Constants";

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

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">

        {/* Left — text + chip cloud */}
        <motion.div
          className="flex flex-col items-start gap-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#9ca3af]">
            Areas of Expertise
          </p>
          <h2 className="text-[30px] md:text-[40px] font-medium text-[#111] leading-[1.1]">
            Azure &amp; cloud security, done right
          </h2>
          <p className="text-[#6b7280] text-[15px] font-light leading-relaxed max-w-[440px]">
            NativeCloud is a certified Microsoft Azure partner focused on secure-by-default cloud
            architecture — from Azure Security posture and DevSecOps pipelines to enterprise-grade
            cloud infrastructure design.
          </p>

          <div className="flex flex-wrap gap-3 mt-2">
            {expertiseTags.map((tag, i) => (
              <motion.div
                key={tag.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.06 }}
                viewport={{ once: true, margin: "-40px" }}
              >
                <Link
                  href={tag.href}
                  className="group inline-flex items-center gap-2.5 rounded-full border border-[#e6e6e6] bg-white px-5 py-2.5 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[#111]/20 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111]/20"
                >
                  <tag.icon className="h-4 w-4 text-[#2563eb]" strokeWidth={1.75} aria-hidden="true" />
                  <span className="text-[15px] font-medium text-[#111]">{tag.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — precision/architecture illustration */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 80% 55% at 48% 92%, rgba(37,99,235,0.13) 0%, rgba(59,130,246,0.04) 48%, transparent 68%)',
            }}
          />
          <video
            src="/img/digital-control.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-label="Precision cloud architecture"
            className="relative block w-full h-auto rounded-[24px]"
            style={{ aspectRatio: '1 / 1', objectFit: 'cover' }}
          />
        </div>

      </div>
    </section>
  );
}
