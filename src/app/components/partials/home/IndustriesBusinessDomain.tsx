'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Zap, Landmark, ShieldCheck, CreditCard, Truck, Cpu, Plane,
  Scale, Wallet, ShoppingBag, HardHat, Boxes, ArrowRight,
  type LucideIcon,
} from 'lucide-react';

type Industry = {
  title: string;
  description?: string;
  href: string;
  icon: LucideIcon;
};

const industries: Industry[] = [
  { title: 'Energy and Resources',       href: '/industries',          icon: Zap },
  { title: 'Finance and Banking',        href: '/industries',          icon: Landmark },
  { title: 'Insurance',                  href: '/industries',          icon: ShieldCheck },
  { title: 'Payments',                   href: '/payment-automation',  icon: CreditCard },
  { title: 'Supply Chain and Logistics', href: '/industries',          icon: Truck },
  { title: 'Technology',                 href: '/industries',          icon: Cpu },
  { title: 'Travel',                     href: '/airline-booking',     icon: Plane },
  { title: 'Legal & Compliance',         href: '/ai-legal-workspace',  icon: Scale },
  { title: 'Fintech',                    href: '/payment-automation',  icon: Wallet },
  { title: 'E-commerce & Retail',        href: '/industries',          icon: ShoppingBag },
  { title: 'Construction',               href: '/industries',          icon: HardHat },
  { title: 'B2B Solutions',              href: '/industries',          icon: Boxes },
];

function IndustryCard({ title, href, icon: Icon, duplicate = false }: Industry & { duplicate?: boolean }) {
  return (
    <Link
      href={href}
      aria-hidden={duplicate || undefined}
      tabIndex={duplicate ? -1 : undefined}
      className="group mb-6 flex items-center gap-6 rounded-[24px] border border-[#e6e6e6] bg-white px-7 py-9 transition-[transform,background-color,border-color,box-shadow] duration-200 hover:translate-x-1 hover:border-[#111]/20 hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111]/20 sm:px-9 sm:py-11 lg:mb-8"
    >
      <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#e6e6e6] bg-[#f3f4f6] transition-transform duration-200 group-hover:scale-105 sm:h-[70px] sm:w-[70px]">
        <Icon className="h-7 w-7 text-[#2563eb] sm:h-8 sm:w-8" strokeWidth={1.6} aria-hidden="true" />
      </span>
      <span className="text-[21px] font-semibold leading-tight text-[#111] sm:text-[25px]">{title}</span>
    </Link>
  );
}

function IndustryScroller() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    let last = performance.now();
    let paused = false;
    const SPEED = 55; // px per second — one pass in ~24–30s, then stops at the last card

    const pause = () => { paused = true; };
    const resume = () => { paused = false; };
    el.addEventListener('pointerenter', pause);
    el.addEventListener('pointerleave', resume);

    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      const max = el.scrollHeight - el.clientHeight;
      if (!paused && el.scrollTop < max - 0.5) {
        el.scrollTop = Math.min(max, el.scrollTop + (dt / 1000) * SPEED);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('pointerenter', pause);
      el.removeEventListener('pointerleave', resume);
    };
  }, []);

  return (
    <div ref={ref} className="industry-scroller relative h-[460px] sm:h-[560px] lg:h-[720px]">
      <div className="flex flex-col pb-2">
        {industries.map((ind) => (
          <IndustryCard key={ind.title} {...ind} />
        ))}
      </div>
    </div>
  );
}

export default function IndustriesBusinessDomain() {
  return (
    <section className="font-switzer relative overflow-hidden bg-[#f6f7f9]">

      {/* Decorative glow — top-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[6%] h-80 w-80 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)' }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">

            {/* Left — static content */}
            <div className="flex flex-col">
              <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.14em] text-[#9ca3af]">
                Industries we serve
              </p>
              <h2 className="m-0 text-[clamp(2.4rem,5vw,4.4rem)] font-medium leading-[1.04] tracking-tight text-[#111]">
                Move your industry forward
              </h2>
              <p className="mt-6 max-w-[440px] text-[16px] font-light leading-[1.7] text-[#6b7280]">
                From legal intelligence and financial services to healthcare and technology, our
                sector-specific expertise allows us to build AI-powered solutions that address what
                is happening in your industry today — and prepare you for what comes next.
              </p>
              <Link
                href="/industries"
                className="ai-search-wrap group mt-9 inline-block w-fit transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none"
              >
                <span className="ai-search-inner flex items-center gap-2.5 px-6 py-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
                    <defs>
                      <linearGradient id="ind-cta-grad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#60a5fa" />
                        <stop offset="50%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#1e4fd6" />
                      </linearGradient>
                    </defs>
                    <path fill="url(#ind-cta-grad)" d="M12 0c0 6.627-5.373 12-12 12 6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12Z" />
                  </svg>
                  <span className="text-[15px] font-medium text-[#111]">Explore our industries</span>
                  <ArrowRight className="h-4 w-4 text-[#111] transition-transform duration-200 group-hover:translate-x-1.5" aria-hidden="true" />
                </span>
              </Link>
            </div>

            {/* Right — auto-scrolling industry cards */}
            <IndustryScroller />

      </div>
    </section>
  );
}
