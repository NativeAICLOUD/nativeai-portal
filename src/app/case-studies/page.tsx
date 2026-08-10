import Link from 'next/link';
import { type SVGProps, type ComponentType } from 'react';
import { Constants } from '@/Constants';
import { Scale, CreditCard, Plane } from 'lucide-react';
import { CONTAINER, Eyebrow, PrimaryButton, SecondaryButton } from '@/app/components/partials/services/ServiceUI';

type Product = {
  id: string;
  category: string;
  title: string;
  tags: string[];
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  color: string;
  gradient: string;
};

const products: Product[] = [
  {
    id: 'legal-ai-workspace',
    category: 'Legal Tech',
    title: 'Legal AI Workspace',
    tags: ['Document AI', 'Deadline Tracking', 'Case Workflows'],
    href: Constants.PAGES.AI_LEGAL_WORKSPACE,
    icon: Scale,
    color: '#7C3AED',
    gradient: 'linear-gradient(135deg, #7C3AED 0%, #4C1D95 100%)',
  },
  {
    id: 'payment-automation-platform',
    category: 'FinTech',
    title: 'Payment Automation Platform',
    tags: ['Invoice AI', 'Auto-Reminders', 'Reconciliation'],
    href: Constants.PAGES.PAYMENT_AUTOMATION,
    icon: CreditCard,
    color: '#0F8B83',
    gradient: 'linear-gradient(135deg, #0F8B83 0%, #0B5C56 100%)',
  },
  {
    id: 'airline-booking-system',
    category: 'Travel Tech',
    title: 'Airline & Travel Booking System',
    tags: ['GDS Connectivity', 'PSS Integration', 'Ticketing'],
    href: Constants.PAGES.AIRLINE_BOOKING,
    icon: Plane,
    color: '#2563EB',
    gradient: 'linear-gradient(135deg, #2563EB 0%, #1E3A8A 100%)',
  },
];

const heroStats = [
  { value: '3', label: 'Ready-made products' },
  { value: '100%', label: 'Built cloud-native' },
  { value: '99.9%', label: 'Platform uptime' },
  { value: 'Weeks', label: 'Not months, to launch' },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function CaseStudiesPage() {
  return (
    <div className="font-switzer">

      {/* ── Hero ── */}
      <div className="industries-hero-bg">
        <div className={`${CONTAINER} pb-12 pt-32 lg:pt-28`}>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">

            {/* Left */}
            <div className="flex-1">
              <div className="mb-6"><Eyebrow>Our Products</Eyebrow></div>
              <h1 className="m-0 text-[40px] font-medium leading-[1.05] text-[#111] sm:text-[52px] lg:text-[64px]">
                Ready-made platforms, proven in production.
              </h1>
              <p className="mt-6 max-w-[520px] text-[18px] font-light leading-[1.6] text-[#111]">
                Purpose-built products for legal, finance, and travel teams — cloud-native,
                production-ready, and adaptable to your business in weeks, not months.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton href={Constants.PAGES.SCHEDULE_CALL}>Schedule a free call</PrimaryButton>
                <SecondaryButton href={Constants.PAGES.SOLUTIONS}>View all solutions</SecondaryButton>
              </div>
            </div>

            {/* Right — product portfolio card */}
            <div className="w-full lg:max-w-[440px] lg:flex-1">
              <div className="flex flex-col gap-5 rounded-2xl border border-[#e6e6e6] bg-white p-6">
                <div className="flex items-center justify-between">
                  <Eyebrow>Our portfolio</Eyebrow>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#059669]" />
                    <span className="text-[11px] font-medium text-[#059669]">In production</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {heroStats.map((s) => (
                    <div key={s.label} className="rounded-xl border border-[#eee] bg-[#fafafa] p-4">
                      <p className="m-0 text-[24px] font-medium leading-none text-[#111]">{s.value}</p>
                      <p className="m-0 mt-1.5 text-[11px] font-light leading-snug text-[#9ca3af]">{s.label}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Legal', 'Finance', 'Travel'].map((t) => (
                    <span key={t} className="rounded-full border border-[#e6e6e6] px-2.5 py-1 text-[11px] font-medium text-[#111]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        <hr className="m-0 h-px w-full border-0 bg-[#E6E6E6]" />
      </div>

      {/* ── Product cards ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} py-20 lg:py-24`}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {products.map(({ id, category, title, tags, href, icon: Icon, color, gradient }) => (
              <Link
                key={id}
                href={href}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#E6E6E6] bg-white shadow-[0_2px_8px_rgba(15,23,42,0.04)] transition-shadow duration-200 hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
              >
                {/* Image block */}
                <div className="relative flex aspect-video w-full items-center justify-center" style={{ backgroundImage: gradient }}>
                  <Icon className="h-12 w-12 text-white/90" strokeWidth={1.4} aria-hidden="true" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <p className="m-0 text-[12px] font-medium text-[#9CA3AF]">{category}</p>
                  <p className="m-0 mt-1 text-[12.5px] font-medium text-[#6B7280]">
                    {tags.join(' · ')}
                  </p>
                  <h3 className="m-0 mt-3 flex-1 text-[19px] font-semibold leading-[1.3] text-[#111827]">
                    {title}
                  </h3>
                  <span
                    className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold"
                    style={{ color }}
                  >
                    Learn more
                    <ArrowIcon />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a0e1a]">
        <div className={`${CONTAINER} flex flex-col gap-10 py-20 md:flex-row md:items-center md:justify-between`}>
          <div className="flex max-w-xl flex-col gap-4">
            <h2 className="m-0 text-[28px] font-medium leading-[1.1] text-white md:text-[44px]">
              Want one of these adapted to your business?
            </h2>
            <p className="m-0 text-[18px] font-light leading-[1.6] text-white/70">
              Book a free 30-minute call. We&apos;ll walk through the platform and outline what it
              would take to get you live — no obligation, no pressure.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton href={Constants.PAGES.SCHEDULE_CALL} dark>Schedule a free call</PrimaryButton>
            <SecondaryButton href={Constants.PAGES.SOLUTIONS} onDark>All solutions</SecondaryButton>
          </div>
        </div>
      </section>

    </div>
  );
}
