import Image from "next/image";
import { Link } from "react-transition-progress/next";
import { KCSP, KTP, MSP } from "@/ImagePath";
import ServiceFooter from "@/app/components/partials/services/ServiceFooter";

const services = [
  {
    title: "Custom Development",
    body: "Tailored software built precisely for your business workflows — from API design to production-ready delivery.",
    href: "/services/custom-development",
    tag: "Engineering",
  },
  {
    title: "Design",
    body: "Beautiful, intuitive interfaces that users love — from UX research and wireframes through to pixel-perfect UI.",
    href: "/services/design",
    tag: "Design",
  },
  {
    title: "AI Agents & RAG",
    body: "Intelligent automation and retrieval-augmented generation connected to your data, documents, and workflows.",
    href: "/services/ai-agents-rag",
    tag: "AI & LLMs",
  },
  {
    title: "Data Lifecycle Management",
    body: "End-to-end data platforms on Azure — from raw ingestion and transformation to analytics layers and Power BI dashboards.",
    href: "/data-lifecycle-management",
    tag: "Data",
  },
  {
    title: "Cloud Architecture",
    body: "Scalable, resilient cloud-native architectures designed for your team's size, traffic patterns, and growth trajectory.",
    href: "/cloud-software-architecture",
    tag: "Cloud",
  },
  {
    title: "Migrate to Azure",
    body: "A structured, low-risk migration from on-premises or any cloud provider to Microsoft Azure — without disrupting your operations.",
    href: "/migrate-to-azure",
    tag: "Cloud",
  },
  {
    title: "Cloud Native Development",
    body: "Microservices, containers, and Kubernetes — modern application architectures built to scale on Azure from day one.",
    href: "/cloud-native-sd",
    tag: "Engineering",
  },
  {
    title: "DevOps on Azure",
    body: "CI/CD pipelines, infrastructure-as-code, and automated testing workflows that let your team ship faster and safer.",
    href: "/devops-on-azure",
    tag: "DevOps",
  },
];

const products = [
  {
    title: "Airline & Travel Booking",
    body: "A cloud-based platform for airlines, travel agencies, and tour operators — reservations, ticketing, GDS connectivity, and passenger management in one system.",
    href: "/airline-booking",
    label: "NativeCloud Product",
  },
  {
    title: "AI Legal Workspace",
    body: "AI-powered document analysis, contract review, and legal research — built for law firms and in-house legal teams that want to move faster.",
    href: "/ai-legal-workspace",
    label: "NativeCloud Product",
  },
  {
    title: "Payment Automation",
    body: "Recurring billing, rent collection, and payment reconciliation — automated end-to-end so your finance team focuses on decisions, not data entry.",
    href: "/payment-automation",
    label: "NativeCloud Product",
  },
];

const certifications = [
  {
    src: MSP,
    alt: "Microsoft Solutions Partner",
    title: "Microsoft Solutions Partner",
    body: "Recognised by Microsoft for consistent delivery of Azure solutions across cloud adoption, migration, and modern application development.",
  },
  {
    src: KCSP,
    alt: "Kubernetes Certified Service Provider",
    title: "KCSP",
    body: "Certified by the CNCF to deliver Kubernetes production support, consulting, and professional services at enterprise scale.",
  },
  {
    src: KTP,
    alt: "Kubernetes Training Partner",
    title: "Kubernetes Training Partner",
    body: "Authorised to deliver official Kubernetes training — from fundamentals to advanced cluster operations and application deployment.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <div className="bg-[#f4ebe8] relative">

        {/* Noise overlay */}
        <div
          aria-hidden
          className="fixed inset-0 pointer-events-none select-none"
          style={{
            zIndex: 0,
            backgroundImage: "url('/img/noisy-background.png'), url('/img/noise-background.jpg')",
            backgroundSize: "cover, cover",
            mixBlendMode: "multiply",
          }}
        />

        <div className="relative" style={{ zIndex: 1 }}>

          {/* ── Hero ── */}
          <section className="max-w-7xl mx-auto px-6 md:px-12 pt-40 pb-20">
            <div className="flex items-center gap-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
              <p className="text-xs uppercase tracking-wider text-[#1a1a1a] font-medium">
                What we build
              </p>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0a0e1a] leading-[1.05] max-w-2xl">
                Solutions built to last
              </h1>
              <div className="flex flex-col gap-5 lg:max-w-md">
                <p className="text-[#1a1a1a] text-base leading-relaxed">
                  From AI agents and cloud infrastructure to fully managed SaaS products — we design, build, and ship software that scales with your business.
                </p>
                <Link
                  href="/schedule-call"
                  className="self-start inline-flex items-center gap-2 bg-[#0a0e1a] hover:bg-[#e89a78] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors whitespace-nowrap"
                >
                  Schedule a free call
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>

          {/* ── Services grid ── */}
          <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
            <div className="flex items-center gap-2 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
              <p className="text-xs uppercase tracking-wider text-[#1a1a1a] font-medium">
                Services
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((s, i) => (
                <Link key={i} href={s.href} className="group block">
                  <div className="relative bg-[#ece8e0] hover:bg-[#e4dfd6] rounded-xl p-7 h-full flex flex-col gap-4 transition-colors duration-200">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#e89a78]">
                      {s.tag}
                    </span>
                    <h3 className="text-lg font-semibold text-[#0a0e1a] leading-snug group-hover:text-[#e89a78] transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-[#1a1a1a] text-sm leading-relaxed flex-1">
                      {s.body}
                    </p>
                    <div className="flex items-center gap-1.5 text-[#0a0e1a]/40 group-hover:text-[#e89a78] transition-colors text-xs font-medium mt-2">
                      Learn more
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ── Products ── */}
          <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
            <div className="flex items-center gap-2 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
              <p className="text-xs uppercase tracking-wider text-[#1a1a1a] font-medium">
                Products
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {products.map((p, i) => (
                <Link key={i} href={p.href} className="group block">
                  <div className="relative bg-[#0a0e1a] hover:bg-[#141824] rounded-xl p-8 h-full flex flex-col gap-5 transition-colors duration-200">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#e89a78]">
                      {p.label}
                    </span>
                    <h3 className="text-xl font-semibold text-white leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed flex-1">
                      {p.body}
                    </p>
                    <div className="flex items-center gap-1.5 text-white/30 group-hover:text-[#e89a78] transition-colors text-xs font-medium mt-auto">
                      See the product
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ── Certifications ── */}
          <section className="max-w-7xl mx-auto px-6 md:px-12 pb-32">
            <div className="flex items-center gap-2 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
              <p className="text-xs uppercase tracking-wider text-[#1a1a1a] font-medium">
                Certifications
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((c, i) => (
                <div key={i} className="flex flex-col gap-5 bg-white/50 rounded-xl p-8 border border-black/5">
                  <Image
                    src={c.src}
                    alt={c.alt}
                    className="h-14 w-auto object-contain self-start"
                  />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-base font-semibold text-[#0a0e1a]">{c.title}</h3>
                    <p className="text-[#1a1a1a] text-sm leading-relaxed">{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      <ServiceFooter />
    </>
  );
}
