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

function ArrowLink({ children }: { children: React.ReactNode }) {
  return (
    <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-[#111]">
      {children}
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
    </span>
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

      {/* ── Industry blocks ── */}
      <div className="bg-white">
        <div className="mx-auto w-full max-w-[1536px] px-5 pb-20 pt-16 md:px-12">
          <div className="flex flex-col">
            {industries.map(({ title, description, details, href, color, icon: Icon }, i) => (
              <div
                key={title}
                className={`grid grid-cols-1 gap-8 py-14 lg:grid-cols-2 lg:gap-16 ${i !== 0 ? "border-t border-[#ECECEC]" : ""}`}
              >
                {/* Left — pitch */}
                <div className="flex flex-col justify-center">
                  <div className="mb-5 flex items-center gap-3">
                    <Icon className="h-6 w-6 shrink-0" style={{ color }} strokeWidth={1.5} aria-hidden="true" />
                    <div>
                      <p className="m-0 text-[15px] font-semibold leading-[1.2] text-[#111]">{title}</p>
                      <p className="m-0 text-[12px] font-medium uppercase tracking-[0.1em] text-[#9ca3af]">Industries</p>
                    </div>
                  </div>
                  <h3 className="m-0 max-w-[440px] text-[26px] font-medium leading-[1.15] text-[#111] md:text-[32px]">
                    {description}
                  </h3>
                </div>

                {/* Right — feature card */}
                <Link
                  href={href}
                  className="group flex h-full flex-col rounded-2xl border border-[#ECECEC] bg-[#FAFAF8] p-8 transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[rgba(37,99,235,0.2)] hover:shadow-[0_10px_28px_rgba(15,23,42,0.06)]"
                >
                  <div>
                    <p className="m-0 text-[15px] font-semibold leading-[1.2] text-[#111]">{title}</p>
                    <p className="m-0 text-[12px] font-medium uppercase tracking-[0.1em] text-[#9ca3af]">Industries</p>
                  </div>
                  <ul className="my-6 flex flex-1 flex-col gap-3">
                    {details.map((d) => (
                      <li key={d} className="flex items-center gap-2.5 text-[15px] font-normal leading-[1.4] text-[#111]">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: color }} />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <ArrowLink>Learn more</ArrowLink>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
