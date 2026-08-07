import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Code2, Palette, Bot, Database, CloudCog, CloudUpload, Boxes, Workflow,
  BookOpen, GitBranch, Sparkles, Plane, Scale, CreditCard,
  type LucideIcon,
} from "lucide-react";
import { KCSP, KTP, MSP } from "@/ImagePath";
import { CONTAINER, Eyebrow, PrimaryButton, SecondaryButton } from "@/app/components/partials/services/ServiceUI";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "From AI agents and cloud infrastructure to fully managed SaaS products — we design, build, and ship software that scales with your business.",
};

/* ── content ── */
const services: { title: string; body: string; href: string; icon: LucideIcon; color: string; bg: string; tags: string[] }[] = [
  { title: "Custom Development", body: "Tailored software built precisely for your business workflows — from API design to production-ready delivery.", href: "/services/custom-development", icon: Code2, color: "#2563EB", bg: "rgba(37,99,235,0.08)", tags: ["API Design", "Full-Stack", "Production-Ready"] },
  { title: "Design", body: "Beautiful, intuitive interfaces that users love — from UX research and wireframes through to pixel-perfect UI.", href: "/services/design", icon: Palette, color: "#DB2777", bg: "rgba(219,39,119,0.08)", tags: ["UX Research", "Wireframes", "Pixel-Perfect UI"] },
  { title: "AI Agents & RAG", body: "Intelligent automation and retrieval-augmented generation connected to your data, documents, and workflows.", href: "/services/ai-agents-rag", icon: Bot, color: "#7C3AED", bg: "rgba(124,58,237,0.08)", tags: ["Automation", "RAG Pipelines", "Azure OpenAI"] },
  { title: "Data Lifecycle", body: "End-to-end data platforms on Azure — from raw ingestion and transformation to analytics layers and Power BI dashboards.", href: "/data-lifecycle-management", icon: Database, color: "#0F8B83", bg: "rgba(15,139,131,0.08)", tags: ["Ingestion", "Analytics", "Power BI"] },
  { title: "Cloud Architecture", body: "Scalable, resilient cloud-native architectures designed for your team's size, traffic patterns, and growth trajectory.", href: "/cloud-software-architecture", icon: CloudCog, color: "#0EA5E9", bg: "rgba(14,165,233,0.08)", tags: ["Scalability", "Resilience", "Cost Optimization"] },
  { title: "Migrate to Azure", body: "A structured, low-risk migration from on-premises or any cloud provider to Microsoft Azure — without disrupting your operations.", href: "/migrate-to-azure", icon: CloudUpload, color: "#16A34A", bg: "rgba(22,163,74,0.08)", tags: ["Zero Downtime", "Assessment", "Re-platforming"] },
  { title: "Cloud Native Development", body: "Microservices, containers, and Kubernetes — modern application architectures built to scale on Azure from day one.", href: "/cloud-native-sd", icon: Boxes, color: "#F59E0B", bg: "rgba(245,158,11,0.08)", tags: ["Microservices", "Kubernetes", "Containers"] },
  { title: "DevOps on Azure", body: "CI/CD pipelines, infrastructure-as-code, and automated testing workflows that let your team ship faster and safer.", href: "/devops-on-azure", icon: Workflow, color: "#E11D48", bg: "rgba(225,29,72,0.08)", tags: ["CI/CD", "IaC", "Automated Testing"] },
];

const products: { title: string; body: string; href: string; icon: LucideIcon; color: string; bg: string; tags: string[] }[] = [
  { title: "Airline & Travel Booking", body: "A cloud-based platform for airlines, travel agencies, and tour operators — reservations, ticketing, GDS connectivity, and passenger management in one system.", href: "/airline-booking", icon: Plane, color: "#2563EB", bg: "rgba(37,99,235,0.07)", tags: ["GDS Connectivity", "Ticketing", "Passenger Mgmt"] },
  { title: "AI Legal Workspace", body: "AI-powered document analysis, contract review, and legal research — built for law firms and in-house legal teams that want to move faster.", href: "/ai-legal-workspace", icon: Scale, color: "#7C3AED", bg: "rgba(124,58,237,0.07)", tags: ["Document AI", "Contract Review", "Legal Research"] },
  { title: "Payment Automation", body: "Recurring billing, rent collection, and payment reconciliation — automated end-to-end so your finance team focuses on decisions, not data entry.", href: "/payment-automation", icon: CreditCard, color: "#0F8B83", bg: "rgba(15,139,131,0.08)", tags: ["Recurring Billing", "Auto-Reconciliation", "Reporting"] },
];

const innovate: { title: string; body: string; href: string; icon: LucideIcon; color: string; bg: string }[] = [
  { title: "Case Studies", body: "How we've delivered measurable outcomes for clients — real projects, real results.", href: "/case-studies", icon: BookOpen, color: "#2563EB", bg: "rgba(37,99,235,0.08)" },
  { title: "GitHub Accelerator", body: "GitHub Copilot adoption, migration, and DevSecOps — ship faster with AI-assisted engineering.", href: "/solutions/github-accelerator", icon: GitBranch, color: "#7C3AED", bg: "rgba(124,58,237,0.08)" },
  { title: "AI Accelerator", body: "Adopt Azure AI services from use case to production, backed by a proven delivery framework.", href: "/solutions/ai-accelerator", icon: Sparkles, color: "#0F8B83", bg: "rgba(15,139,131,0.08)" },
];

const certifications = [
  { src: MSP, alt: "Microsoft Solutions Partner", title: "Microsoft Solutions Partner", body: "Recognised by Microsoft for consistent delivery of Azure solutions across cloud adoption, migration, and modern application development." },
  { src: KCSP, alt: "Kubernetes Certified Service Provider", title: "KCSP", body: "Certified by the CNCF to deliver Kubernetes production support, consulting, and professional services at enterprise scale." },
  { src: KTP, alt: "Kubernetes Training Partner", title: "Kubernetes Training Partner", body: "Authorised to deliver official Kubernetes training — from fundamentals to advanced cluster operations and application deployment." },
];

function ArrowLink({ children }: { children: React.ReactNode }) {
  return (
    <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-[#111]">
      {children}
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
    </span>
  );
}

export default function SolutionsPage() {
  return (
    <div className="font-switzer">

      {/* ── Hero ── */}
      <div className="industries-hero-bg">
        <div className={`${CONTAINER} pb-12 pt-32 lg:pt-28`}>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">

            {/* Left */}
            <div className="flex-1">
              <div className="mb-6"><Eyebrow>What we build</Eyebrow></div>
              <h1 className="m-0 text-[40px] font-medium leading-[1.05] text-[#111] sm:text-[52px] lg:text-[64px]">
                Solutions built to last.
              </h1>
              <p className="mt-6 max-w-[520px] text-[18px] font-light leading-[1.6] text-[#111]">
                From AI agents and cloud infrastructure to fully managed SaaS products — we
                design, build, and ship software that scales with your business.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton href="/schedule-call">Schedule a free call</PrimaryButton>
                <SecondaryButton href="/about">About us</SecondaryButton>
              </div>
            </div>

            {/* Right — portfolio card */}
            <div className="w-full lg:max-w-[380px] lg:flex-1">
              <div className="flex flex-col gap-5 rounded-2xl border border-[#e6e6e6] bg-white p-6">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#111]">
                    <Boxes className="h-4 w-4 text-white" strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <p className="m-0 text-[14px] font-medium text-[#111]">Our portfolio</p>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { n: "8", l: "Services" },
                    { n: "3", l: "Products" },
                    { n: "3", l: "Certifications" },
                    { n: "∞", l: "Scale" },
                  ].map((item) => (
                    <div key={item.l} className="flex flex-col gap-0.5 rounded-xl border border-[#eee] bg-[#fafafa] px-4 py-3">
                      <p className="m-0 text-[20px] font-medium leading-none text-[#111]">{item.n}</p>
                      <p className="m-0 text-[11px] font-normal text-[#6b7280]">{item.l}</p>
                    </div>
                  ))}
                </div>
                <Link href="/schedule-call" className="flex items-center justify-center gap-2 rounded-full bg-[#111] py-3 text-[14px] font-medium text-white transition-opacity hover:opacity-90">
                  Schedule a free call
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* multicolour divider — full viewport width */}
        <hr className="linegrad-divider m-0 h-1 w-full border-0" />
      </div>

      {/* ── Services ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} py-20 lg:py-24`}>
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4"><Eyebrow>Services</Eyebrow></div>
              <h2 className="m-0 max-w-[520px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
                Everything you need to build at scale.
              </h2>
            </div>
            <PrimaryButton href="/schedule-call">Schedule a free call</PrimaryButton>
          </div>

          <div className="rounded-2xl bg-[#FAFAF8] p-3 sm:p-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map(({ title, body, href, icon: Icon, color, bg, tags }) => (
                <Link
                  key={title}
                  href={href}
                  className="group flex h-full flex-col rounded-[10px] border border-[#ECECEC] bg-white p-[18px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:border-[rgba(37,99,235,0.2)] hover:shadow-[0_10px_28px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex min-h-[56px] items-center gap-3.5">
                    <span
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[12px] transition-transform duration-200 group-hover:scale-105"
                      style={{ background: bg }}
                    >
                      <Icon className="h-8 w-8" style={{ color }} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <h3 className="m-0 text-[15.5px] font-semibold leading-[1.25] text-[#111827]">{title}</h3>
                  </div>
                  <div className="my-3 h-px w-full bg-[#EAEAEA]" />
                  <p className="m-0 flex-1 text-[14px] font-normal leading-[1.5] text-[#6B7280]">{body}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-[#e6e6e6] bg-[#fafafa] px-2.5 py-0.5 text-[11px] font-medium text-[#6b7280]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowLink>Learn more</ArrowLink>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>Products</Eyebrow></div>
            <h2 className="m-0 text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              Ready-made platforms. Production-ready today.
            </h2>
          </div>

          <div className="rounded-2xl bg-[#FAFAF8] p-3 sm:p-5">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {products.map(({ title, body, href, icon: Icon, color, bg, tags }) => (
                <Link
                  key={title}
                  href={href}
                  className="group flex h-full flex-col rounded-[10px] border border-[#ECECEC] bg-white p-[18px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:border-[rgba(37,99,235,0.2)] hover:shadow-[0_10px_28px_rgba(15,23,42,0.08)]"
                >
                  <span className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em] text-[#9ca3af]">NativeCloud Product</span>
                  <div className="flex min-h-[56px] items-center gap-3.5">
                    <span
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[12px] transition-transform duration-200 group-hover:scale-105"
                      style={{ background: bg }}
                    >
                      <Icon className="h-8 w-8" style={{ color }} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <h3 className="m-0 text-[15.5px] font-semibold leading-[1.25] text-[#111827]">{title}</h3>
                  </div>
                  <div className="my-3 h-px w-full bg-[#EAEAEA]" />
                  <p className="m-0 flex-1 text-[14px] font-normal leading-[1.5] text-[#6B7280]">{body}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-[#e6e6e6] bg-[#fafafa] px-2.5 py-0.5 text-[11px] font-medium text-[#6b7280]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowLink>Explore solution</ArrowLink>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Innovate ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>Innovate</Eyebrow></div>
            <h2 className="m-0 text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              Accelerate delivery. See the proof.
            </h2>
          </div>

          <div className="rounded-2xl bg-[#FAFAF8] p-3 sm:p-5">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {innovate.map(({ title, body, href, icon: Icon, color, bg }) => (
                <Link
                  key={title}
                  href={href}
                  className="group flex h-full flex-col rounded-[10px] border border-[#ECECEC] bg-white p-[18px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:border-[rgba(37,99,235,0.2)] hover:shadow-[0_10px_28px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex min-h-[56px] items-center gap-3.5">
                    <span
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[12px] transition-transform duration-200 group-hover:scale-105"
                      style={{ background: bg }}
                    >
                      <Icon className="h-8 w-8" style={{ color }} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <h3 className="m-0 text-[15.5px] font-semibold leading-[1.25] text-[#111827]">{title}</h3>
                  </div>
                  <div className="my-3 h-px w-full bg-[#EAEAEA]" />
                  <p className="m-0 flex-1 text-[14px] font-normal leading-[1.5] text-[#6B7280]">{body}</p>
                  <ArrowLink>Learn more</ArrowLink>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>Certifications</Eyebrow></div>
            <h2 className="m-0 text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              Recognised expertise. Trusted by industry.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
            {certifications.map(({ src, alt, title, body }) => (
              <div key={title} className="flex h-full flex-col gap-6 rounded-lg border border-[#e6e6e6] bg-white p-8">
                <Image src={src} alt={alt} className="h-14 w-auto self-start object-contain" />
                <div className="flex flex-col gap-2">
                  <h3 className="m-0 text-[18px] font-medium text-[#111]">{title}</h3>
                  <p className="m-0 text-[16px] font-normal leading-[1.5] text-[#111]">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a0e1a]">
        <div className={`${CONTAINER} flex flex-col gap-10 py-20 md:flex-row md:items-center md:justify-between`}>
          <div className="flex max-w-xl flex-col gap-4">
            <h2 className="m-0 text-[28px] font-medium leading-[1.1] text-white md:text-[44px]">
              Ready to build something that lasts?
            </h2>
            <p className="m-0 text-[18px] font-light leading-[1.6] text-white/70">
              Talk to our team about your project — we&apos;ll map out the right solution in a
              free 15-minute call.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton href="/schedule-call" dark>Book a free call</PrimaryButton>
            <SecondaryButton href="/about" onDark>About us</SecondaryButton>
          </div>
        </div>
      </section>

    </div>
  );
}
