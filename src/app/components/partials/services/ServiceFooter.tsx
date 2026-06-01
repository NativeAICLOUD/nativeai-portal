import Image from "next/image";
import { Link } from "react-transition-progress/next";
import { Constants } from "@/Constants";
import Logo from "@/app/components/ui/Logo";
import { BGNativeWhite } from "@/ImagePath";

const footerLinks = [
  { label: "About us", href: "/about-us" },
  { label: "Workshops", href: "/workshops" },
  { label: "Knowledge base", href: "/knowledge-base" },
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms-and-conditions" },
];

const socials = [
  { name: "LinkedIn", icon: "icon-linkedin", url: Constants.SOCIALS.LINKEDIN },
  { name: "Instagram", icon: "icon-instagram", url: Constants.SOCIALS.INSTAGRAM },
  { name: "Facebook", icon: "icon-facebook", url: Constants.SOCIALS.FACEBOOK },
];

export default function ServiceFooter() {
  return (
    <footer
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {/* ── CTA band ── */}
      <div className="bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 border-t border-white/[0.06]">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-10">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <p className="text-xs uppercase tracking-wider text-[#e89a78]/80 font-medium">
                  Ready to ship?
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] max-w-lg">
                Let&apos;s build something that actually lasts.
              </h2>
            </div>

            <div className="flex flex-col gap-3 shrink-0">
              <a
                href={`mailto:${Constants.MAIL}`}
                className="inline-flex items-center gap-2 bg-[#e89a78] hover:bg-[#d4836a] text-white font-medium px-7 py-3.5 rounded-full transition-colors text-sm whitespace-nowrap"
              >
                {Constants.MAIL}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
              <p className="text-white/30 text-xs text-center">
                We reply within one business day.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Dark bottom bar ── */}
      <div className="relative bg-[#0a0e1a] overflow-hidden min-h-[420px]">
        <Image
          src={BGNativeWhite}
          alt=""
          aria-hidden
          className="absolute bottom-0 right-0 h-[420px] w-auto opacity-20 pointer-events-none select-none"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

            {/* Logo + tagline */}
            <div className="flex flex-col gap-3">
              <Logo isInvert={true} />
              <p className="text-white/60 text-xs font-medium tracking-wide max-w-[240px]">
                AI Agents · LLMs · Azure &amp; AWS
              </p>
              <p className="text-white/35 text-xs max-w-[240px] leading-relaxed">
                <a
                  href="https://refive.ch/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/60 transition-colors"
                >
                  We make AI work inside your business.
                </a>
              </p>
            </div>

            {/* Nav links */}
            <nav className="flex flex-wrap gap-x-8 gap-y-3">
              {footerLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* Social + copyright */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/15 hover:bg-white/10 hover:border-white/40 flex items-center justify-center transition-all duration-200"
                  >
                    <svg className="text-white/70" width={15} height={15}>
                      <use href={`/icons/all-icons.svg#${s.icon}`} />
                    </svg>
                  </a>
                ))}
              </div>
              <p className="text-white/30 text-xs">
                © {new Date().getFullYear()} NativeCloud. All rights reserved.
              </p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
