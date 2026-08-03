'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";
import { Link } from 'react-transition-progress/next';
import { Constants } from "@/Constants";
import Logo from "../ui/Logo";
import MicrosoftPartner from "../../../../public/img/microsoft.png";
import AWSPartner from "../../../../public/img/aws.png";
import { usePathname } from 'next/navigation';

const navColumns = [
  {
    title: 'Services',
    links: [
      { url: '/services/custom-development',             title: 'Custom Development'       },
      { url: '/services/design',                         title: 'Design'                   },
      { url: Constants.PAGES.CLOUD_SOFTWARE_ARCHITECTURE, title: 'Cloud Architecture'      },
      { url: Constants.PAGES.MIGRATE_TO_AZURE,           title: 'Migrate to Azure'         },
    ],
  },
  {
    title: 'AI & Data',
    links: [
      { url: '/services/ai-agents-rag',                  title: 'AI Agents & RAG'          },
      { url: Constants.PAGES.DATA_LIFECYCLE_MANAGEMENT,  title: 'Data Lifecycle'           },
      { url: Constants.PAGES.CLOUD_NATIVE_SD,            title: 'Cloud Native Dev'         },
      { url: Constants.PAGES.DEVOPS_ON_AZURE,            title: 'DevOps on Azure'          },
    ],
  },
  {
    title: 'Products',
    links: [
      { url: Constants.PAGES.AIRLINE_BOOKING,            title: 'Airline & Travel Booking' },
      { url: Constants.PAGES.AI_LEGAL_WORKSPACE,         title: 'AI Legal Workspace'       },
      { url: Constants.PAGES.PAYMENT_AUTOMATION,         title: 'Payment Automation'       },
    ],
  },
  {
    title: 'Company',
    links: [
      { url: Constants.PAGES.CASE_STUDIES,               title: 'Case Studies'             },
      { url: Constants.PAGES.WORKSHOPS,                  title: 'Workshops'                },
      { url: Constants.PAGES.KNOWLEDGE_BASE,             title: 'Knowledge Base'           },
      { url: Constants.PAGES.CAREERS,                    title: 'Careers'                  },
      { url: Constants.PAGES.ABOUT_US,                   title: 'About Us'                 },
      { url: Constants.PAGES.PRIVACY,                    title: 'Privacy Policy'           },
    ],
  },
];

const socials = [
  { name: 'LinkedIn', icon: 'icon-linkedin', url: Constants.SOCIALS.LINKEDIN },
  { name: 'Instagram', icon: 'icon-instagram', url: Constants.SOCIALS.INSTAGRAM },
];

type NavLink = { url: string; title: string };

function Footer() {
  const pathname = usePathname();
  const [subscribeOpen, setSubscribeOpen] = useState(false);
  if (pathname === '/login' || pathname === '/sign-up') return null;

  return (
    <footer className="font-switzer bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-[1440px] px-5 md:px-12">

        {/* ── CTA band ── */}
        <div className="flex flex-col gap-6 border-b border-white/10 py-16 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="m-0 max-w-xl text-[26px] font-medium leading-[1.15] text-white sm:text-[34px]">
            Let&apos;s build something that actually lasts.
          </h2>
          <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
            <a
              href={`mailto:${Constants.MAIL}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-medium text-[#111] transition-opacity hover:opacity-90"
            >
              {Constants.MAIL}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M7 17L17 7" /><path d="M7 7h10v10" />
              </svg>
            </a>
            <p className="text-xs text-white/35">We reply within one business day.</p>
          </div>
        </div>

        {/* ── Brand + nav columns ── */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 border-b border-white/10 py-14 md:grid-cols-4 lg:grid-cols-12">
          {/* Brand */}
          <div className="col-span-2 flex flex-col gap-5 md:col-span-4 lg:col-span-4">
            <Logo isInvert={true} />
            <p className="max-w-[220px] text-[13px] font-light leading-relaxed text-white/50">
              AI Agents · LLMs · Azure &amp; AWS — we build what your business actually needs.
            </p>
            <div className="flex flex-col gap-1.5">
              <a href={`tel:${Constants.PHONE}`} className="text-[13px] text-white/45 transition-colors hover:text-white">
                {Constants.PHONE}
              </a>
              <a href={`mailto:${Constants.MAIL}`} className="text-[13px] text-white/45 transition-colors hover:text-white">
                {Constants.MAIL}
              </a>
            </div>
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors duration-200 hover:border-white/30 hover:bg-white/10"
                >
                  <svg className="text-white/60" width={14} height={14}>
                    <use href={`/icons/all-icons.svg#${s.icon}`} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.title} className="col-span-1 flex flex-col gap-4 lg:col-span-2">
              <h3 className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/45">{col.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link: NavLink) => (
                  <li key={link.title}>
                    <Link href={link.url} className="text-[14px] text-white/60 transition-colors duration-200 hover:text-white">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Newsletter band ── */}
        <div className="flex flex-col gap-8 border-b border-white/10 py-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-sm">
            <p className="m-0 mb-1 text-[16px] font-medium text-white">Stay up to date</p>
            <p className="m-0 text-[14px] font-light leading-relaxed text-white/45">
              Subscribe to our newsletter — no spam, just product updates and AI insights.
            </p>
          </div>
          {!subscribeOpen ? (
            <div className="w-full lg:max-w-xl lg:flex lg:justify-end">
              <button
                type="button"
                onClick={() => setSubscribeOpen(true)}
                className="ai-search-wrap w-full sm:max-w-sm transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99] focus-visible:outline-none"
              >
                <span className="ai-search-inner flex items-center justify-center gap-2.5 px-6 py-3.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
                    <defs>
                      <linearGradient id="footer-sub-grad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#60a5fa" />
                        <stop offset="50%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#1e4fd6" />
                      </linearGradient>
                    </defs>
                    <path fill="url(#footer-sub-grad)" d="M12 0c0 6.627-5.373 12-12 12 6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12Z" />
                  </svg>
                  <span className="text-[15px] font-medium text-[#111]">Subscribe to updates</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#111]"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </span>
              </button>
            </div>
          ) : (
            <motion.form
              className="w-full lg:max-w-xl"
              onSubmit={(e) => e.preventDefault()}
              initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  placeholder="First name"
                  className="flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-white/40"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-white/40"
                />
                <button
                  type="submit"
                  className="whitespace-nowrap rounded-full bg-white px-8 py-3 text-sm font-medium text-[#111] transition-opacity hover:opacity-90"
                >
                  Sign Up
                </button>
              </div>
              <label className="mt-3 flex cursor-pointer items-start gap-2.5">
                <input type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-white" />
                <span className="text-xs leading-relaxed text-white/40">
                  I accept the{" "}
                  <Link href={Constants.PAGES.PRIVACY} className="text-white underline transition-opacity hover:opacity-70">
                    NativeAI Privacy Policy
                  </Link>
                </span>
              </label>
            </motion.form>
          )}
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col gap-5 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-6">
            <Image src={MicrosoftPartner} alt="Microsoft" className="h-6 w-auto opacity-30 transition-opacity hover:opacity-50" />
            <Image src={AWSPartner} alt="AWS Partner" className="h-5 w-auto opacity-30 transition-opacity hover:opacity-50" />
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/30">
            <Link href={Constants.PAGES.PRIVACY} className="transition-colors hover:text-white/60">Privacy Policy</Link>
            <span className="hidden md:inline text-white/15">·</span>
            <span>© {new Date().getFullYear()} NativeCloud. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
