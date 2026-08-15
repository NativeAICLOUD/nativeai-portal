import Image from "next/image";
import Link from "next/link";
import {
  Zap, Landmark, ShieldCheck, CreditCard, Truck, Cpu, Plane, Scale,
  Wallet, ShoppingBag, HardHat, Network, type LucideIcon,
} from "lucide-react";
import { Constants } from "@/Constants";
import { Eyebrow } from "@/app/components/partials/services/ServiceUI";

type Industry = {
  title: string;
  description: string;
  details: string[];
  href: string;
  color: string;
  bg: string;
  icon: LucideIcon;
};

const industries: Industry[] = [
  { title: "Energy and Resources",       description: "Data platforms and automation for energy, utilities and resource operations.", details: ["Smart Grid Analytics", "Asset & Resource Tracking", "Usage & Consumption Insights", "Regulatory Reporting"], href: "/industries", color: "#F59E0B", bg: "rgba(245,158,11,0.08)",  icon: Zap },
  { title: "Finance and Banking",        description: "Secure, compliant platforms for banks and financial institutions.",             details: ["Core Banking Integrations", "Regulatory Compliance", "Risk & Fraud Monitoring", "Open Banking APIs"], href: "/industries", color: "#0F8B83", bg: "rgba(15,139,131,0.08)", icon: Landmark },
  { title: "Insurance",                  description: "Claims automation, risk analytics and policy workflows.",                       details: ["Claims Automation", "Risk Analytics", "Policy Administration", "Underwriting Workflows"], href: "/industries", color: "#E11D48", bg: "rgba(225,29,72,0.08)",  icon: ShieldCheck },
  { title: "Payments",                   description: "Billing, reconciliation and payment automation at scale.",                      details: ["Payment Automation", "Billing & Reconciliation", "Fraud & Risk Analytics", "Reporting Dashboards"], href: Constants.PAGES.PAYMENT_AUTOMATION, color: "#16A34A", bg: "rgba(22,163,74,0.08)",  icon: CreditCard },
  { title: "Supply Chain and Logistics", description: "Visibility, tracking and optimisation across the whole chain.",                 details: ["Shipment Tracking", "Inventory Visibility", "Route Optimisation", "Supplier Integrations"], href: "/industries", color: "#0EA5E9", bg: "rgba(14,165,233,0.08)", icon: Truck },
  { title: "Technology",                 description: "Product engineering for software and SaaS companies.",                          details: ["Product Engineering", "API & SDK Development", "Cloud-Native Architecture", "DevOps Enablement"], href: "/industries", color: "#DB2777", bg: "rgba(219,39,119,0.08)", icon: Cpu },
  { title: "Travel",                     description: "GDS-connected booking and travel platforms.",                                   details: ["GDS Booking Platforms", "Airline Reservation Systems", "Fare & Ancillary Management", "Loyalty Programmes"], href: Constants.PAGES.AIRLINE_BOOKING, color: "#2563EB", bg: "rgba(37,99,235,0.08)",  icon: Plane },
  { title: "Legal & Compliance",         description: "AI document and case workflows for legal teams.",                               details: ["AI Document Analysis", "Case & Matter Workflows", "Deadline Tracking", "Compliance Reporting"], href: Constants.PAGES.AI_LEGAL_WORKSPACE, color: "#7C3AED", bg: "rgba(124,58,237,0.08)", icon: Scale },
  { title: "Fintech",                    description: "Modern rails for lending, payments and wealth products.",                       details: ["Lending Platforms", "Payments Infrastructure", "Wealth & Investment Tools", "Regulatory Compliance"], href: "/industries", color: "#0369A1", bg: "rgba(3,105,161,0.08)",  icon: Wallet },
  { title: "E-commerce & Retail",        description: "Scalable storefronts, logistics and personalisation.",                          details: ["Scalable Storefronts", "Order & Inventory Management", "Personalisation & AI Search", "Payment Integrations"], href: "/industries", color: "#FF6A3D", bg: "rgba(255,106,61,0.08)", icon: ShoppingBag },
  { title: "Construction",               description: "Project, site and resource management systems.",                                details: ["Project Management Systems", "Site & Resource Tracking", "Procurement Workflows", "Compliance & Safety Reporting"], href: "/industries", color: "#9333EA", bg: "rgba(147,51,234,0.08)", icon: HardHat },
  { title: "B2B Solutions",              description: "Portals, integrations and workflow platforms for B2B.",                         details: ["Partner & Client Portals", "Workflow Automation", "Third-Party Integrations", "Reporting & Analytics"], href: "/industries", color: "#475569", bg: "rgba(71,85,105,0.08)",  icon: Network },
];

function CheckIcon({ color }: { color: string }) {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0" style={{ color }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IndustryCard({ title, description, details, href, color, bg, icon: Icon }: Industry) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-lg border border-[#e6e6e6] bg-white p-6 transition-[border-color,transform,background-color] duration-200 hover:border-transparent hover:-translate-y-0.5 hover:bg-[var(--hover-tint)]"
      style={{ '--hover-tint': bg } as React.CSSProperties}
    >
      <span className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl" style={{ background: bg }}>
        <Icon aria-hidden="true" strokeWidth={1.8} className="h-5 w-5" style={{ color }} />
      </span>
      <h2 className="m-0 text-[18px] font-medium leading-[1.3] text-[#111]">
        {title}
      </h2>
      <p className="mt-2 text-[14.5px] font-normal leading-[1.55] text-[#6b7280]">
        {description}
      </p>
      <div className="mt-4 flex flex-col gap-2.5 border-t border-[#eee] pt-4">
        {details.map((d) => (
          <div key={d} className="flex items-start gap-2.5">
            <CheckIcon color={color} />
            <span className="text-[13.5px] leading-relaxed text-[#6b7280]">{d}</span>
          </div>
        ))}
      </div>
    </Link>
  );
}

export default function IndustriesSection() {
  return (
    <section className="font-switzer">
      {/* ── Hero: heading + image + full-bleed gradient divider ── */}
      <div className="hero-bg-blue">
        <div className="mx-auto w-full max-w-[1440px] px-5 pb-16 pt-32 md:px-12 lg:pt-28">
          <div className="mb-4"><Eyebrow>Industries · Sector expertise</Eyebrow></div>
          <h1 className="m-0 max-w-2xl text-[40px] font-medium leading-[1.05] tracking-[-0.02em] text-[#111] sm:text-[52px] lg:text-[60px]">
            Industries we serve.
          </h1>

          {/* hero image */}
          <div className="relative mt-6 h-[280px] w-full overflow-hidden rounded-2xl md:h-[440px]">
            <Image
              src="/img/HeroLarge.png"
              alt="Immersive data visualisation representing the industries we serve"
              fill
              priority
              sizes="(max-width: 1344px) 100vw, 1344px"
              className="object-cover"
            />
          </div>
        </div>

        {/* multicolour divider — full viewport width */}
        <hr className="divider-blue m-0 h-1 w-full border-0" />
      </div>

      {/* ── Industry cards ── */}
      <div className="bg-white">
        <div className="mx-auto w-full max-w-[1536px] px-5 pb-20 pt-16 md:px-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {industries.map((industry) => (
              <IndustryCard key={industry.title} {...industry} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
