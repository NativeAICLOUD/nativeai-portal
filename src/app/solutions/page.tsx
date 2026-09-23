import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Code2, Palette, Bot, Database, CloudCog, CloudUpload, Boxes, Workflow,
  BookOpen, GitBranch, Sparkles, Plane, Scale, CreditCard, Receipt,
  type LucideIcon,
} from "lucide-react";
import { KCSP, KTP, MSP } from "@/ImagePath";
import { CONTAINER, Eyebrow, PrimaryButton, SecondaryButton } from "@/app/components/partials/services/ServiceUI";
import GetInTouchCTASection from "@/app/components/partials/services/GetInTouchCTASection";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "From AI agents and cloud infrastructure to fully managed SaaS products — we design, build, and ship software that scales with your business.",
};

/* ── content ── */
const services: { title: string; headline: string; body: string; href: string; icon: LucideIcon; color: string; bg: string; features: string[] }[] = [
  { title: "Custom Development", headline: "Software that moves with your business.", body: "From MVPs to full-scale platforms — reliable software that grows with your business. Fast to launch, easy to scale, built to last.", href: "/services/custom-development", icon: Code2, color: "#2563EB", bg: "rgba(37,99,235,0.08)", features: ["API Design & Integration", "Full-Stack Web & Mobile Development", "AI-Powered Feature Integration", "Backend Engineering & Data Architecture", "Production Deployment & DevOps"] },
  { title: "Design", headline: "Design interfaces people love to use.", body: "We turn rough ideas into refined, market-ready products, research-backed, pixel-perfect, and consistent across every device.", href: "/services/design", icon: Palette, color: "#DB2777", bg: "rgba(219,39,119,0.08)", features: ["UX Research & Discovery", "Wireframing & Prototyping", "Visual & Interaction Design", "Design Systems", "Pixel-Perfect UI Implementation"] },
  { title: "AI Agents & RAG", headline: "Your data. Smarter decisions.", body: "We bring AI into the way your business actually works.", href: "/services/ai-agents-rag", icon: Bot, color: "#7C3AED", bg: "rgba(124,58,237,0.08)", features: ["Retrieval-Augmented Generation Pipelines", "Custom AI Agents & Copilots", "Azure OpenAI Integration", "Workflow Automation", "Document Intelligence"] },
  { title: "Data Lifecycle", headline: "Your business, always in view.", body: "We build the data platform — ingestion to dashboards — that turns raw data into decisions your team can act on.", href: "/data-lifecycle-management", icon: Database, color: "#0F8B83", bg: "rgba(15,139,131,0.08)", features: ["Data Ingestion & Pipelines", "Transformation & Modelling", "Analytics Layers", "Power BI Dashboards", "Data Governance"] },
  { title: "Cloud Architecture", headline: "Built to grow with you.", body: "We design cloud-native architectures matched to your team's size, traffic patterns, and growth trajectory — built to flex, not to break.", href: "/cloud-software-architecture", icon: CloudCog, color: "#0EA5E9", bg: "rgba(14,165,233,0.08)", features: ["Scalable System Design", "Resilience & Failover Planning", "Cost Optimization", "Multi-Region Architecture", "Capacity Planning"] },
  { title: "Migrate to Azure", headline: "Move to Azure. Keep your business moving.", body: "A structured, low-risk migration from on-premises or any cloud provider — assessed, planned, and executed without downtime.", href: "/migrate-to-azure", icon: CloudUpload, color: "#16A34A", bg: "rgba(22,163,74,0.08)", features: ["Cloud Readiness Assessment", "Migration Planning & Strategy", "Zero-Downtime Cutover", "Re-platforming & Modernisation", "Post-Migration Optimization"] },
  { title: "Cloud Native Development", headline: "Made for the cloud. From the start.", body: "Microservices, containers, and Kubernetes — modern application architecture built to scale on Azure from the first sprint.", href: "/cloud-native-sd", icon: Boxes, color: "#F59E0B", bg: "rgba(245,158,11,0.08)", features: ["Microservices Architecture", "Kubernetes & Container Orchestration", "CI/CD for Cloud-Native Apps", "Observability & Monitoring", "Sprint-Based Delivery"] },
  { title: "DevOps on Azure", headline: "Move faster. Deliver with confidence.", body: "CI/CD pipelines, infrastructure-as-code, and automated testing workflows that let your team release with confidence.", href: "/devops-on-azure", icon: Workflow, color: "#E11D48", bg: "rgba(225,29,72,0.08)", features: ["CI/CD Pipeline Design", "Infrastructure as Code", "Automated Testing", "Release Management", "Monitoring & Alerting"] },
];

const products: { title: string; tagline?: string; body: string; href: string; icon: LucideIcon; color: string; bg: string; tags: string[]; cta?: string }[] = [
  { title: "Airline & Travel Booking", tagline: "Travel operations, all in one place.", body: "Manage reservations, ticketing, GDS connections, and passenger journeys from one streamlined platform.", cta: "Explore the platform", href: "/airline-booking", icon: Plane, color: "#2563EB", bg: "rgba(37,99,235,0.07)", tags: ["GDS Connectivity", "Ticketing", "Passenger Management"] },
  { title: "AI Legal Workspace", tagline: "Legal work, intelligently accelerated.", body: "Review documents, analyze contracts, research cases, and surface the information that matters — all in one AI-powered workspace.", cta: "Explore AI Legal Workspace", href: "/ai-legal-workspace", icon: Scale, color: "#7C3AED", bg: "rgba(124,58,237,0.07)", tags: ["Document AI", "Contract Review", "Legal Research"] },
  { title: "Payment Automation", tagline: "Payments, without the busywork.", body: "Automate recurring billing, collections, reconciliation, and reporting — so your finance team can focus on what matters.", cta: "Explore Payment Automation", href: "/payment-automation", icon: CreditCard, color: "#0F8B83", bg: "rgba(15,139,131,0.08)", tags: ["Recurring Billing", "Auto-Reconciliation", "Reporting"] },
  { title: "NativeInvoice", tagline: "Electronic invoicing, made simple.", body: "Create, sign, send, and track invoices in one place — fully connected to Macedonia’s official UJP e-Invoice system.", cta: "Explore NativeInvoice", href: "/native-invoice", icon: Receipt, color: "#D97706", bg: "rgba(217,119,6,0.08)", tags: ["UJP e-Invoicing", "Multi-Tenant", "Macedonia"] },
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
      <div className="hero-bg-blue">
        <div className={`${CONTAINER} pb-12 pt-32 lg:pt-28`}>
          <div className="flex flex-col gap-10">

            {/* Left */}
            <div className="flex-1">
              <div className="mb-6"><Eyebrow>What we build</Eyebrow></div>
              <h1 className="m-0 text-[40px] font-medium leading-[1.05] text-[#111] sm:text-[52px] lg:text-[64px]">
                Made to make a difference.
              </h1>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton href="/schedule-call">Schedule a free call</PrimaryButton>
                <SecondaryButton href="/about">About us</SecondaryButton>
              </div>
            </div>

          </div>
        </div>

        {/* blue divider — full viewport width */}
        <hr className="divider-blue m-0 h-1 w-full border-0" />
      </div>

      {/* ── Services ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} py-20 lg:py-24`}>
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4"><Eyebrow>Services</Eyebrow></div>
              <h2 className="m-0 max-w-[520px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
                Everything you need to grow.
              </h2>
            </div>
            <PrimaryButton href="/schedule-call">Schedule a free call</PrimaryButton>
          </div>

          <div className="flex flex-col">
            {services.map(({ title, headline, body, href, icon: Icon, color, features }, i) => (
              <div
                key={title}
                className={`grid grid-cols-1 gap-8 py-14 lg:grid-cols-2 lg:gap-16 ${i !== 0 ? "border-t border-[#ECECEC]" : ""}`}
              >
                {/* Left — pitch */}
                <div className="flex flex-col justify-center">
                  <div className="mb-5 flex items-center gap-3">
                    <Icon className="h-12 w-12 shrink-0" style={{ color }} strokeWidth={1.5} aria-hidden="true" />
                    <div>
                      <p className="m-0 text-[15px] font-semibold leading-[1.2] text-[#111]">{title}</p>
                      <p className="m-0 text-[12px] font-medium uppercase tracking-[0.1em] text-[#9ca3af]">Services</p>
                    </div>
                  </div>
                  <h3 className="m-0 max-w-[440px] text-[26px] font-medium leading-[1.15] text-[#111] md:text-[32px]">
                    {headline}
                  </h3>
                  <p className="m-0 mt-3 max-w-[440px] text-[16px] font-light leading-[1.6] text-[#4b5563]">
                    {body}
                  </p>
                </div>

                {/* Right — feature card */}
                <Link
                  href={href}
                  className="group flex h-full flex-col rounded-2xl border border-[#ECECEC] bg-[#FAFAF8] p-8 transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[rgba(37,99,235,0.2)] hover:shadow-[0_10px_28px_rgba(15,23,42,0.06)]"
                >
                  <div>
                    <p className="m-0 text-[15px] font-semibold leading-[1.2] text-[#111]">{title}</p>
                    <p className="m-0 text-[12px] font-medium uppercase tracking-[0.1em] text-[#9ca3af]">Services</p>
                  </div>
                  <ul className="my-6 flex flex-1 flex-col gap-3">
                    {features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-[15px] font-normal leading-[1.4] text-[#111]">
                        <svg className="h-4 w-4 shrink-0" style={{ color }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <ArrowLink>Learn more</ArrowLink>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>Products</Eyebrow></div>
            <h2 className="m-0 text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              Made for real work.
            </h2>
            <p className="mt-4 max-w-[520px] text-[18px] font-light leading-[1.6] text-[#111]">
              Practical software, built around real business needs — ready to use, easy to scale.
            </p>
          </div>

          <div className="rounded-2xl bg-[#FAFAF8] p-3 sm:p-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {products.map(({ title, tagline, body, href, icon: Icon, color, bg, tags, cta }) => (
                <Link
                  key={title}
                  href={href}
                  className="group flex h-full flex-col rounded-xl border border-[#ECECEC] bg-white p-6 transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-0.5 hover:border-[#DEDEDE] hover:shadow-[0_12px_32px_rgba(15,23,42,0.08)]"
                >
                  <span
                    className="mb-5 flex h-14 w-14 items-center justify-center rounded-[12px] transition-transform duration-200 group-hover:scale-105"
                    style={{ background: bg }}
                  >
                    {title === "NativeInvoice" ? (
                      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                        <rect x="5" y="3" width="18" height="26" rx="3" fill="#2563EB" />
                        <path d="M23 3h2a3 3 0 0 1 3 3v2l-5-5Z" fill="#1e4fd6" />
                        <path d="M9.5 11h9M9.5 15h9M9.5 19h5.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                        <circle cx="22" cy="22" r="6" fill="#34d399" />
                        <path d="m19.4 22 1.8 1.8 3.4-3.6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <Icon className="h-8 w-8" style={{ color }} strokeWidth={1.7} aria-hidden="true" />
                    )}
                  </span>
                  <span className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-[#9ca3af]">NativeCloud Product</span>
                  <h3 className="m-0 mt-1.5 text-[17px] font-semibold leading-[1.25] text-[#111827]">{title}</h3>
                  {tagline && (
                    <p className="m-0 mt-1 text-[14px] font-medium leading-[1.4] text-[#111]">{tagline}</p>
                  )}
                  <p className="m-0 mt-2 flex-1 text-[14px] font-normal leading-[1.55] text-[#6B7280]">{body}</p>
                  <p className="m-0 mt-4 text-[12.5px] font-medium text-[#9ca3af]">{tags.join(" · ")}</p>
                  <ArrowLink>{cta ?? "Explore solution"}</ArrowLink>
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
      <GetInTouchCTASection
        heading="Let's make it real."
        topic="Solutions"
      />

    </div>
  );
}
