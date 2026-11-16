'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

/*
 * Mobile-only "back to top" button. Appears in the bottom-right corner once
 * the visitor has scrolled past roughly one screen, and scrolls smoothly back
 * to the header. Hidden from md up, where the header stays within easy reach.
 */

// Routes without the marketing chrome — same list as FloatingPromoCard.
const EXCLUDED_PREFIXES = ['/login', '/sign-up', '/dashboard'];

export default function BackToTopButton() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (EXCLUDED_PREFIXES.some((prefix) => pathname === prefix || pathname?.startsWith(`${prefix}/`))) return null;

  const toTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`fixed bottom-5 right-4 z-[940] flex h-12 w-12 items-center justify-center rounded-full border border-[#E6E6E6] bg-white/90 text-[#111827] shadow-[0_6px_20px_rgba(15,23,42,0.14)] backdrop-blur-sm transition-[opacity,transform] duration-300 active:scale-95 motion-reduce:transition-none md:hidden ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
      style={{ marginBottom: 'env(safe-area-inset-bottom)' }}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
