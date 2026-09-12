'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";
import { Link } from 'react-transition-progress/next';
import { Constants } from "@/Constants";
import { Eyebrow } from "@/app/components/partials/services/ServiceUI";
import Logo from "../ui/Logo";
import MicrosoftPartner from "../../../../public/img/microsoft-partner.png";
import AWSPartner from "../../../../public/img/aws-partner.png";
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
    <footer className="font-switzer relative overflow-hidden text-[#111827]">
      <style>{`
        .footer-gradient-bg {
          background:
            radial-gradient(circle at 50% 0%, rgba(37,99,235,0.18), transparent 55%),
            radial-gradient(circle at 15% 0%, rgba(37,99,235,0.1), transparent 50%),
            #FAFAF8;
        }
      `}</style>
      <div className="footer-gradient-bg absolute inset-0" aria-hidden="true" />
      <Image
        src="/img/logo-blue.png"
        alt=""
        width={960}
        height={960}
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 w-[960px] max-w-none -translate-x-1/2 opacity-[0.1] select-none"
      />

      {/* Gradient divider — same signature as the hero/industries transitions */}
      <hr
        className="relative m-0 h-1 w-full border-0"
        style={{
          backgroundImage: 'linear-gradient(260deg, #fff, #BECBFF 20%, #5B7CFA 50%, #2563EB 80%, #fff)',
          borderRadius: 100,
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-12">

        {/* ── CTA band ── */}
        <motion.div
          className="flex flex-col gap-6 border-b border-[#ECECEC] py-16 sm:py-20 sm:flex-row sm:items-center sm:justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <div><Eyebrow>Get in touch</Eyebrow></div>
          <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
            <a
              href={`mailto:${Constants.MAIL}`}
              className="inline-flex items-center gap-2 rounded-full bg-black px-7 py-3.5 text-[15px] font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2563EB] hover:shadow-[0_10px_28px_rgba(37,99,235,0.25)] active:translate-y-0 active:shadow-none"
            >
              {Constants.MAIL}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M7 17L17 7" /><path d="M7 7h10v10" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* ── Brand + nav columns ── */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 border-b border-[#ECECEC] py-14 sm:py-16 md:grid-cols-4 lg:grid-cols-12">
          {/* Brand */}
          <motion.div
            className="col-span-2 flex flex-col gap-5 md:col-span-4 lg:col-span-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-40px' }}
          >
            <Logo animated={false} />
            <div className="flex flex-col gap-1.5">
              <a href={`tel:${Constants.PHONE}`} className="text-[13px] text-[#6B7280] transition-colors hover:text-[#111827]">
                {Constants.PHONE}
              </a>
              <a href={`mailto:${Constants.MAIL}`} className="text-[13px] text-[#6B7280] transition-colors hover:text-[#111827]">
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
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E6E6E6] bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(37,99,235,0.3)]"
                >
                  <svg className="text-[#6B7280]" width={15} height={15}>
                    <use href={`/icons/all-icons.svg#${s.icon}`} />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Nav columns */}
          {navColumns.map((col, i) => (
            <motion.div
              key={col.title}
              className="col-span-1 flex flex-col gap-4 lg:col-span-2"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.08 }}
              viewport={{ once: true, margin: '-40px' }}
            >
              <h3 className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#6B7280]">{col.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link: NavLink) => (
                  <li key={link.title}>
                    <Link href={link.url} className="text-[14px] text-[#6B7280] transition-colors duration-200 hover:text-[#111827]">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ── Newsletter band ── */}
        <div className="flex flex-col gap-8 border-b border-[#ECECEC] py-12 sm:py-14 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-sm">
            <p className="m-0 mb-1 text-[16px] font-medium text-[#101828]">Stay up to date</p>
            <p className="m-0 text-[14px] font-normal leading-relaxed text-[#6B7280]">
              Subscribe to our newsletter — no spam, just product updates and AI insights.
            </p>
          </div>
          {!subscribeOpen ? (
            <div className="w-full lg:max-w-xl lg:flex lg:justify-end">
              <button
                type="button"
                onClick={() => setSubscribeOpen(true)}
                className="flex w-full items-center justify-center gap-2.5 rounded-full border border-[#E6E6E6] bg-white px-6 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(37,99,235,0.25)] sm:max-w-sm"
              >
                <span className="text-[15px] font-medium text-[#111]">Subscribe to updates</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#111]"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
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
                  className="flex-1 rounded-full border border-[#e6e6e6] bg-white px-5 py-3 text-sm text-[#111827] shadow-[0_1px_4px_rgba(15,23,42,0.03)] outline-none transition-colors placeholder:text-[#9CA3AF] focus:border-[rgba(37,99,235,0.4)]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 rounded-full border border-[#e6e6e6] bg-white px-5 py-3 text-sm text-[#111827] shadow-[0_1px_4px_rgba(15,23,42,0.03)] outline-none transition-colors placeholder:text-[#9CA3AF] focus:border-[rgba(37,99,235,0.4)]"
                />
                <button
                  type="submit"
                  className="whitespace-nowrap rounded-full bg-black px-8 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2563EB] hover:shadow-[0_10px_28px_rgba(37,99,235,0.25)] active:translate-y-0 active:shadow-none"
                >
                  Sign Up
                </button>
              </div>
              <label className="mt-3 flex cursor-pointer items-start gap-2.5">
                <input type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-black" />
                <span className="text-xs leading-relaxed text-[#6B7280]">
                  I accept the{" "}
                  <Link href={Constants.PAGES.PRIVACY} className="text-[#111827] underline transition-opacity hover:opacity-70">
                    NativeAI Privacy Policy
                  </Link>
                </span>
              </label>
            </motion.form>
          )}
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col gap-5 py-8 sm:py-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-6">
            <Image src={MicrosoftPartner} alt="Microsoft Partner" className="h-8 w-auto grayscale opacity-70 transition-all duration-200 hover:grayscale-0 hover:opacity-100" />
            <Image src={AWSPartner} alt="AWS Partner" className="h-9 w-auto grayscale opacity-70 transition-all duration-200 hover:grayscale-0 hover:opacity-100" />
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#6B7280]">
            <Link href={Constants.PAGES.PRIVACY} className="transition-colors hover:text-[#111827]">Privacy Policy</Link>
            <span className="hidden md:inline text-[#D1D5DB]">·</span>
            <span>© {new Date().getFullYear()} NativeCloud. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
