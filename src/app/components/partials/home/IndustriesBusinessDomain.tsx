import Link from 'next/link';
import {
  Zap, Landmark, ShieldCheck, CreditCard, Truck, Cpu, Plane,
  Scale, Wallet, ShoppingBag, HardHat, Boxes,
  type LucideIcon,
} from 'lucide-react';
import { Eyebrow } from '@/app/components/partials/services/ServiceUI';

/* Premium icon tile — solid Azure icon on an 8% Azure tint */
const TILE_STYLE: React.CSSProperties = {
  background: 'rgba(37,99,235,0.08)',
  border: '1px solid rgba(8,27,58,0.06)',
  boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
};

type Industry = {
  title: string;
  desc: string;
  href: string;
  icon: LucideIcon;
};

const industries: Industry[] = [
  { title: 'Energy and Resources',       desc: 'Data platforms and automation for energy, utilities and resource operations.', href: '/industries',         icon: Zap },
  { title: 'Finance and Banking',        desc: 'Secure, compliant platforms for banks and financial institutions.',            href: '/industries',         icon: Landmark },
  { title: 'Insurance',                  desc: 'Claims automation, risk analytics and policy workflows.',                      href: '/industries',         icon: ShieldCheck },
  { title: 'Payments',                   desc: 'Billing, reconciliation and payment automation at scale.',                     href: '/payment-automation', icon: CreditCard },
  { title: 'Supply Chain and Logistics', desc: 'Visibility, tracking and optimisation across the whole chain.',               href: '/industries',         icon: Truck },
  { title: 'Technology',                 desc: 'Product engineering for software and SaaS companies.',                         href: '/industries',         icon: Cpu },
  { title: 'Travel',                     desc: 'GDS-connected booking and travel platforms.',                                  href: '/airline-booking',    icon: Plane },
  { title: 'Legal & Compliance',         desc: 'AI document and case workflows for legal teams.',                              href: '/ai-legal-workspace', icon: Scale },
  { title: 'Fintech',                    desc: 'Modern rails for lending, payments and wealth products.',                      href: '/payment-automation', icon: Wallet },
  { title: 'E-commerce & Retail',        desc: 'Scalable storefronts, logistics and personalisation.',                         href: '/industries',         icon: ShoppingBag },
  { title: 'Construction',               desc: 'Project, site and resource management systems.',                               href: '/industries',         icon: HardHat },
  { title: 'B2B Solutions',              desc: 'Portals, integrations and workflow platforms for B2B.',                        href: '/industries',         icon: Boxes },
];

export default function IndustriesBusinessDomain() {
  return (
    <section className="font-switzer bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">

        {/* Header */}
        <div className="mb-12">
          <div className="mb-4"><Eyebrow>Industries we serve</Eyebrow></div>
          <h2 className="m-0 max-w-[560px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
            Move your industry forward
          </h2>
        </div>

        {/* Industry cards — same design as the delivery-spectrum sections */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {industries.map(({ title, desc, href, icon: Icon }) => (
            <Link
              key={title}
              href={href}
              className="group flex h-full flex-col rounded-lg border border-[#e6e6e6] bg-white p-6 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-[#111]/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111]/20"
            >
              <div
                className="mb-5 flex h-16 w-16 items-center justify-center rounded-[18px] transition-transform duration-200 group-hover:scale-105"
                style={TILE_STYLE}
              >
                <Icon className="h-7 w-7 text-[#2563EB]" strokeWidth={2} aria-hidden="true" />
              </div>
              <h3 className="m-0 text-[16px] font-medium leading-[1.3] text-[#111]">{title}</h3>
              <p className="mt-2 text-[14px] font-normal leading-[1.5] text-[#6b7280]">{desc}</p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
