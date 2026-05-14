'use client';

import Image from "next/image";
import { Link } from 'react-transition-progress/next';
import { Constants } from "@/Constants";
import { BGNativeWhite } from "@/ImagePath";
import Logo from "../ui/Logo";
import MicrosoftPartner from "../../../../public/img/microsoft.png";
import AWSPartner from "../../../../public/img/aws.png";

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
  return (
    <footer
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {/* ── CTA band ── */}
      <div
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #080c1a 0%, #0d1225 40%, #111828 70%, #0a0e1a 100%)' }}
      >
        {/* Ambient glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: 'absolute', top: '-20%', left: '-5%',  width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(232,154,120,0.13) 0%, transparent 65%)', filter: 'blur(1px)' }} />
          <div style={{ position: 'absolute', bottom: '-30%', right: '5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(91,124,250,0.10) 0%, transparent 65%)' }} />
          <div style={{ position: 'absolute', top: '10%', right: '20%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(155,107,255,0.07) 0%, transparent 65%)' }} />
          <div className="absolute inset-0" style={{ backgroundImage: "url('/img/noise-background.jpg')", backgroundSize: '280px 280px', opacity: 0.03 }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-10">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] max-w-lg">
                Let&apos;s build something<br className="hidden sm:block" /> that actually lasts.
              </h2>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <a
                href={`mailto:${Constants.MAIL}`}
                className="inline-flex items-center gap-2 bg-[#e89a78] hover:bg-[#d4836a] active:scale-[0.98] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 text-sm whitespace-nowrap"
              >
                {Constants.MAIL}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                </svg>
              </a>
              <p className="text-white/30 text-xs text-center">We reply within one business day.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Dark bottom bar ── */}
      <div className="relative bg-[#0a0e1a] overflow-hidden">
        <Image
          src={BGNativeWhite}
          alt=""
          aria-hidden
          className="absolute bottom-0 right-0 h-[420px] w-auto opacity-[0.07] pointer-events-none select-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-14 pb-10">

          {/* Top row: logo + nav columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 pb-12 border-b border-white/8">

            {/* Brand column */}
            <div className="col-span-2 md:col-span-3 lg:col-span-2 flex flex-col gap-5">
              <Logo isInvert={true} />
              <p className="text-white/50 text-xs leading-relaxed max-w-[200px]">
                AI Agents · LLMs · Azure &amp; AWS — we build what your business actually needs.
              </p>
              <div className="flex flex-col gap-1.5">
                <a href={`tel:${Constants.PHONE}`} className="text-white/45 hover:text-white text-xs transition-colors">
                  {Constants.PHONE}
                </a>
                <a href={`mailto:${Constants.MAIL}`} className="text-white/45 hover:text-[#e89a78] text-xs transition-colors">
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
                    className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#e89a78]/40 flex items-center justify-center transition-all duration-200"
                  >
                    <svg className="text-white/60" width={13} height={13}>
                      <use href={`/icons/all-icons.svg#${s.icon}`} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Nav columns */}
            {navColumns.map((col) => (
              <div key={col.title} className="flex flex-col gap-4">
                <h3 className="text-white text-xs font-semibold uppercase tracking-widest">{col.title}</h3>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link: NavLink) => (
                    <li key={link.title}>
                      <Link href={link.url} className="text-white/50 hover:text-white text-sm transition-colors duration-200">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter row */}
          <div className="py-10 border-b border-white/8">
            <div className="flex flex-col gap-5 w-full lg:max-w-md" style={{ fontFamily: "'FK Grotesk', sans-serif" }}>
              <div>
                <p className="text-white text-base font-semibold mb-1">Stay up to date</p>
                <p className="text-white/40 text-sm">Subscribe to our newsletter — no spam, just product updates and AI insights.</p>
              </div>
              <div className="flex flex-col gap-4 w-full">
                <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="text"
                      placeholder="First name"
                      className="flex-1 bg-white/5 border border-white/10 focus:border-[#e89a78]/50 outline-none rounded-full px-5 py-3 text-white text-sm placeholder:text-white/30 transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="flex-1 bg-white/5 border border-white/10 focus:border-[#e89a78]/50 outline-none rounded-full px-5 py-3 text-white text-sm placeholder:text-white/30 transition-colors"
                    />
                  </div>
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      className="mt-0.5 shrink-0 accent-[#e89a78] w-4 h-4 cursor-pointer"
                    />
                    <span className="text-white/40 text-xs leading-relaxed">
                      I accept the{" "}
                      <Link href={Constants.PAGES.PRIVACY} className="text-[#e89a78] hover:text-[#f0a060] underline transition-colors">
                        NativeAI Privacy Policy
                      </Link>
                    </span>
                  </label>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:w-auto bg-[#e89a78] hover:bg-[#d4836a] text-white text-sm font-medium px-8 py-3 rounded-full transition-colors whitespace-nowrap"
                    >
                      Sign Up
                    </button>
                    <p className="text-white/25 text-[10px] leading-relaxed">
                      Protected by reCAPTCHA —{" "}
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/40 transition-colors">Privacy</a>
                      {" & "}
                      <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/40 transition-colors">Terms</a>
                    </p>
                  </div>
                </form>
                {/* Socials below form */}
                <div className="flex items-center gap-2">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#e89a78]/40 flex items-center justify-center transition-all duration-200"
                    >
                      <svg className="text-white/60" width={15} height={15}>
                        <use href={`/icons/all-icons.svg#${s.icon}`} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom row: partners + copyright */}
          <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            {/* Partner logos */}
            <div className="flex items-center gap-6">
              <Image
                src={MicrosoftPartner}
                alt="Microsoft"
                className="h-7 w-auto opacity-30 hover:opacity-50 transition-opacity"
              />
              <Image
                src={AWSPartner}
                alt="AWS Partner"
                className="h-6 w-auto opacity-30 hover:opacity-50 transition-opacity"
              />
            </div>

            {/* Copyright */}
            <p className="text-white/25 text-xs">
              © {new Date().getFullYear()} NativeCloud. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
