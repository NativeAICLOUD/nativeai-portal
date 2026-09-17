'use client';

import { useState } from 'react';
import { Link } from 'react-transition-progress/next';
import { usePathname } from 'next/navigation';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { Constants } from '@/Constants';

/* ── Nav columns — every link below points at a real, existing route.
   "Industries" stands in for a generic "Technologies" column since the
   site doesn't have per-technology pages; inventing those would violate
   the no-dead-links rule. */
const footerSections: { title: string; links: { title: string; url: string }[] }[] = [
  {
    title: 'Company',
    links: [
      { title: 'About Us', url: Constants.PAGES.ABOUT_US },
      { title: 'Careers', url: Constants.PAGES.CAREERS },
      { title: 'Workshops', url: Constants.PAGES.WORKSHOPS },
      { title: 'Contact', url: Constants.PAGES.GET_IN_TOUCH },
      { title: 'Knowledge Base', url: Constants.PAGES.KNOWLEDGE_BASE },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { title: 'Artificial Intelligence', url: Constants.PAGES.AI_ACCELERATOR },
      { title: 'Application Modernization', url: Constants.PAGES.CLOUD_NATIVE_SD },
      { title: 'Cloud Migration', url: Constants.PAGES.MIGRATE_TO_AZURE },
      { title: 'Cloud Architecture', url: Constants.PAGES.CLOUD_SOFTWARE_ARCHITECTURE },
      { title: 'DevOps', url: Constants.PAGES.DEVOPS_ON_AZURE },
      { title: 'Managed Services', url: Constants.PAGES.MANAGED_SERVICES },
      { title: 'Data Lifecycle Management', url: Constants.PAGES.DATA_LIFECYCLE_MANAGEMENT },
    ],
  },
  {
    title: 'Industries',
    links: [
      { title: 'Industries Overview', url: '/industries' },
      { title: 'Travel & Aviation', url: Constants.PAGES.AIRLINE_BOOKING },
      { title: 'Legal & Compliance', url: Constants.PAGES.AI_LEGAL_WORKSPACE },
      { title: 'Finance & Banking', url: Constants.PAGES.PAYMENT_AUTOMATION },
      { title: 'Nearshore Teams', url: Constants.PAGES.NEARSHORE_TEAMS },
    ],
  },
  {
    title: 'Resources',
    links: [
      { title: 'Case Studies', url: Constants.PAGES.CASE_STUDIES },
      { title: 'AI Readiness', url: Constants.PAGES.AI_ACCELERATOR },
      { title: 'Cloud Assessment', url: Constants.PAGES.ACCELERATE_AZURE },
      { title: 'Schedule a Call', url: Constants.PAGES.SCHEDULE_CALL },
      { title: 'Privacy Policy', url: Constants.PAGES.PRIVACY },
      { title: 'Terms & Conditions', url: '/terms-and-conditions' },
    ],
  },
];

/* Only platforms with a real, configured NativeCloud URL — no Twitter/YouTube/GitHub placeholders.
   Uses the existing icon sprite (same one Navbar/old Footer used) since this lucide-react
   version doesn't ship brand icons. */
const socials: { name: string; href: string; icon: string }[] = [
  { name: 'LinkedIn', href: Constants.SOCIALS.LINKEDIN, icon: 'icon-linkedin' },
  { name: 'Instagram', href: Constants.SOCIALS.INSTAGRAM, icon: 'icon-instagram' },
];

const LANGUAGES = [{ code: 'en', label: 'English' }];
const COOKIE_KEY = 'nc_cookie_consent';

function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const current = LANGUAGES[0];

  return (
    <div className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex h-[46px] w-full items-center justify-center gap-2.5 rounded-full border border-white/25 px-6 text-[14px] font-medium text-white transition-colors duration-200 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:w-[160px]"
      >
        <Globe className="h-[16px] w-[16px]" strokeWidth={1.8} aria-hidden="true" />
        <span>{current.label}</span>
        <ChevronDown className={`h-[14px] w-[14px] transition-transform duration-200 ${open ? 'rotate-180' : ''}`} strokeWidth={1.8} aria-hidden="true" />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Language"
          className="absolute right-0 z-10 mt-2 w-full min-w-[160px] overflow-hidden rounded-2xl border border-white/15 py-1.5"
          style={{ background: '#181C22' }}
        >
          {LANGUAGES.map((lang) => (
            <li key={lang.code} role="option" aria-selected={lang.code === current.code}>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-between gap-2 px-4 py-2.5 text-left text-[14px] text-white transition-colors duration-150 hover:bg-white/[0.06]"
              >
                {lang.label}
                {lang.code === current.code && <Check className="h-[14px] w-[14px]" aria-hidden="true" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Footer() {
  const pathname = usePathname();
  if (pathname === '/login' || pathname === '/sign-up') return null;

  const clearCookiePreference = () => {
    try {
      localStorage.removeItem(COOKIE_KEY);
    } catch {
      // ignore
    }
    window.location.reload();
  };

  return (
    <footer
      className="relative rounded-t-[32px] px-6 pb-12 pt-14 font-switzer text-white sm:rounded-t-[48px] sm:px-10 sm:pb-14 sm:pt-16 lg:rounded-t-[80px] lg:px-[9vw] lg:pb-[52px] lg:pt-16"
      style={{ background: '#101419' }}
    >
      <div className="mx-auto w-full max-w-[1560px]">

        {/* ── Top row: CTA + language selector ── */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href={Constants.PAGES.SCHEDULE_CALL}
            className="flex h-[46px] w-full items-center justify-center rounded-full bg-white px-8 text-[15px] font-bold text-[#101419] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(255,255,255,0.15)] active:translate-y-0 sm:w-[220px]"
          >
            Let&apos;s talk
          </Link>
          <LanguageSelector />
        </div>

        {/* ── Nav columns ── */}
        <nav aria-label="Footer" className="mt-16 grid grid-cols-2 gap-x-10 gap-y-12 sm:mt-20 lg:grid-cols-4 lg:gap-x-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-5 text-[17px] font-bold text-white sm:text-[18px]">{section.title}</h3>
              <ul className="flex flex-col gap-5">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.url}
                      className="text-[16px] leading-normal text-[#A7ABB3] transition-colors duration-200 hover:text-white"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* ── Back to top ── */}
        <div className="mt-20 flex justify-center sm:mt-24">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-1.5 text-[14px] font-medium text-white/90 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:rounded-full"
          >
            Back to top <span aria-hidden="true">↑</span>
          </button>
        </div>

        {/* ── Bottom bar: legal + social ── */}
        <div className="mt-16 flex flex-col gap-8 sm:mt-20 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3">
            <p className="max-w-sm text-[13px] leading-relaxed text-[#A7ABB3]">
              NativeCloud delivers enterprise AI, cloud and software engineering solutions.
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-[#A7ABB3]">
              <Link href={Constants.PAGES.PRIVACY} className="transition-colors duration-200 hover:text-white">Privacy</Link>
              <Link href="/terms-and-conditions" className="transition-colors duration-200 hover:text-white">Terms</Link>
              <button type="button" onClick={clearCookiePreference} className="transition-colors duration-200 hover:text-white">
                Cookie Preferences
              </button>
            </div>
            <p className="text-[13px] text-[#A7ABB3]">© {new Date().getFullYear()} NativeCloud. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-4">
            {socials.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="text-[#A7ABB3] transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:rounded-full"
              >
                <svg className="h-[19px] w-[19px]" aria-hidden="true">
                  <use href={`/icons/all-icons.svg#${icon}`} />
                </svg>
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
