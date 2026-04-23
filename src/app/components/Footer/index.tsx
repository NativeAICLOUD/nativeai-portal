'use client';

import Image from "next/image";
import { Link } from 'react-transition-progress/next';
import { Constants } from "@/Constants";
import { BGNativeWhite } from "@/ImagePath";
import Logo from "../ui/Logo";
import CoomingSoon from "../ui/CoomingSoon";
import { usePathname } from "next/navigation";

import MicrosoftPartner from "../../../../public/img/microsoft.png";
import AWSPartner from "../../../../public/img/aws.png";

const navColumns = [
  {
    title: 'Solutions',
    links: [
      { url: Constants.PAGES.AZURE_CLOUDIFY, title: 'Azure Cloudify', soon: true },
      { url: Constants.PAGES.MANAGED_SERVICES, title: 'Managed Services' },
      { url: Constants.PAGES.CLOUD_NATIVE_SD, title: 'Cloud Native Dev', soon: true },
      { url: Constants.PAGES.DATA_LIFECYCLE_MANAGEMENT, title: 'Data Lifecycle Management', soon: true },
    ],
  },
  {
    title: 'Workshops',
    links: [
      { url: Constants.PAGES.AZURE_FUNDAMENTALS_FOR_ISVS, title: 'Azure Fundamentals', soon: true },
      { url: Constants.PAGES.AZURE_COST_MANAGEMENT, title: 'Cost Management', soon: true },
      { url: Constants.PAGES.DEVOPS_ON_AZURE, title: 'DevOps on Azure', soon: true },
      { url: Constants.PAGES.AZURE_KUBERNETES_SERVICES, title: 'AKS Workshop', soon: true },
      { url: Constants.PAGES.APPLICATION_INSIGHTS, title: 'Application Insights', soon: true },
      { url: Constants.PAGES.WORKSHOP_DATA_AI_SECURITY, title: 'Data & AI Security', soon: true },
    ],
  },
  {
    title: 'Company',
    links: [
      { url: Constants.PAGES.KNOWLEDGE_BASE, title: 'Knowledge Base', soon: true },
      { url: Constants.PAGES.CERTIFICATIONS, title: 'Certifications', soon: true },
      { url: Constants.PAGES.ABOUT_US, title: 'About Us' },
      { url: '/terms-and-conditions', title: 'Terms & Conditions' },
      { url: '/privacy-policy', title: 'Privacy Policy' },
    ],
  },
];

const socials = [
  { name: 'LinkedIn', icon: 'icon-linkedin', url: Constants.SOCIALS.LINKEDIN },
  { name: 'Instagram', icon: 'icon-instagram', url: Constants.SOCIALS.INSTAGRAM },
  { name: 'Facebook', icon: 'icon-facebook', url: Constants.SOCIALS.FACEBOOK },
];

type NavLink = { url: string; title: string; soon?: boolean };

function Footer() {
  const pathname = usePathname();
  if (
    pathname.startsWith('/services/') ||
    pathname.startsWith('/accelerate-azure') ||
    pathname.startsWith('/managed-services')
  ) return null;

  return (
    <footer
      className="bg-[#f4ebe8]"
      style={{
        backgroundImage: "url('/img/noise-background.jpg')",
        backgroundBlendMode: "multiply",
        backgroundSize: "300px 300px",
      }}
    >
      {/* ── CTA band ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 border-t border-black/8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-10">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
              <p className="text-xs uppercase tracking-wider text-[#6b6b6b] font-medium">
                Ready to ship?
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a0e1a] leading-[1.1] max-w-lg">
              Let&apos;s build something that actually lasts.
            </h2>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <a
              href={`mailto:${Constants.MAIL}`}
              className="inline-flex items-center gap-2 bg-[#0a0e1a] hover:bg-[#e89a78] text-white font-medium px-7 py-3.5 rounded-full transition-colors text-sm whitespace-nowrap"
            >
              {Constants.MAIL}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M7 17L17 7" /><path d="M7 7h10v10" />
              </svg>
            </a>
            <p className="text-[#6b6b6b] text-xs text-center">We reply within one business day.</p>
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
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 pb-12 border-b border-white/8">

            {/* Brand column */}
            <div className="col-span-2 md:col-span-1 lg:col-span-2 flex flex-col gap-5">
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
            </div>

            {/* Nav columns */}
            {navColumns.map((col) => (
              <div key={col.title} className="flex flex-col gap-4">
                <h3 className="text-white text-xs font-semibold uppercase tracking-widest">{col.title}</h3>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link: NavLink) => (
                    <li key={link.title}>
                      {link.soon ? (
                        <CoomingSoon>
                          <span className="text-white/35 text-sm cursor-default">{link.title}</span>
                        </CoomingSoon>
                      ) : (
                        <Link href={link.url} className="text-white/50 hover:text-white text-sm transition-colors duration-200">
                          {link.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter row */}
          <div className="py-10 border-b border-white/8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <p className="text-white text-base font-semibold mb-1">Stay up to date</p>
                <p className="text-white/40 text-sm">Subscribe to our newsletter — no spam, just product updates and AI insights.</p>
              </div>
              <form className="flex flex-col sm:flex-row gap-3 w-full lg:max-w-md" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 bg-white/5 border border-white/10 focus:border-[#e89a78]/50 outline-none rounded-full px-5 py-3 text-white text-sm placeholder:text-white/30 transition-colors"
                />
                <button
                  type="submit"
                  className="shrink-0 bg-[#e89a78] hover:bg-[#d4836a] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom row: partners + socials + copyright */}
          <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            {/* Partner logos */}
            <div className="flex items-center gap-6">
              <Image
                src={MicrosoftPartner}
                alt="Microsoft Partner"
                className="h-7 w-auto opacity-30 hover:opacity-50 transition-opacity"
              />
              <Image
                src={AWSPartner}
                alt="AWS Partner"
                className="h-6 w-auto opacity-30 hover:opacity-50 transition-opacity"
              />
            </div>

            {/* Socials */}
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
