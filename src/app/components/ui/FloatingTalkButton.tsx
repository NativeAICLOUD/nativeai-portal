'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Link } from 'react-transition-progress/next';
import { Constants } from '@/Constants';

/*
 * Floating "Let's talk" — a vertical dark pill on the right edge of the
 * viewport. Hidden at the top of the page; slides in from the right once the
 * visitor has scrolled a few hundred pixels and slides back out near the top.
 * It goes to the same contact page as every other "Let's talk" on the site.
 *
 * Sits below the navbar, menus, search panel and popovers (z 950+) and below
 * the mobile back-to-top button (z 940), so it never covers them.
 */

// Routes without the marketing chrome (same list as BackToTopButton), plus the
// contact page itself, where the button would only link to the current page.
const EXCLUDED_PREFIXES = ['/login', '/sign-up', '/dashboard', Constants.PAGES.GET_IN_TOUCH];

// Two thresholds so the button doesn't flicker when the scroll position
// hovers around a single cut-off.
const SHOW_AFTER = 350;
const HIDE_BEFORE = 240;

export default function FloatingTalkButton() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible((v) => (v ? y > HIDE_BEFORE : y > SHOW_AFTER));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (EXCLUDED_PREFIXES.some((prefix) => pathname === prefix || pathname?.startsWith(`${prefix}/`))) return null;

  return (
    <Link
      href={Constants.PAGES.GET_IN_TOUCH}
      aria-label="Let's talk — contact NativeCloud"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`group fixed top-1/2 z-[930] flex h-[128px] w-11 -translate-y-1/2 cursor-pointer flex-col items-center justify-center gap-2 rounded-[28px] border border-[#3A3A3A] bg-[#111111] font-switzer text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.45),0_2px_8px_rgba(0,0,0,0.18)] transition-[opacity,transform,background-color,border-color,box-shadow] duration-300 ease-out hover:border-[#5A5A5A] hover:bg-[#1F1F1F] hover:shadow-[0_14px_36px_-10px_rgba(0,0,0,0.55),0_3px_10px_rgba(0,0,0,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 motion-reduce:transition-opacity md:h-[170px] md:w-16 md:gap-3 md:rounded-[32px] ${
        visible ? 'translate-x-0 opacity-100' : 'pointer-events-none translate-x-6 opacity-0 motion-reduce:translate-x-0'
      }`}
      style={{ right: 'max(0.5rem, env(safe-area-inset-right))' }}
    >
      {/* Vertical text, reading bottom to top */}
      <span
        aria-hidden="true"
        className="rotate-180 whitespace-nowrap text-[13px] font-semibold leading-none tracking-[0.02em] [writing-mode:vertical-rl] md:text-[16px]"
      >
        Let&apos;s talk
      </span>
    </Link>
  );
}
