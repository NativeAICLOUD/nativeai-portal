'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Link } from 'react-transition-progress/next';
import { motion, AnimatePresence } from 'framer-motion';
import { Constants } from '@/Constants';
import { LogoBlue } from '@/ImagePath';
import Logo from '@/app/components/ui/Logo';

/*
 * Floating promo card — a corner alert that pitches a single offer after
 * the visitor has been on the page a few seconds. Dismissing it hides it
 * for the rest of the browser session (sessionStorage), same lifecycle
 * pattern as CookieBanner's localStorage flag.
 *
 * Layout/interaction is modeled on Intercept.cloud's corner popup; all
 * colors, type and spacing come from the site's own tokens (tw-variants
 * button colors, HomeUI typography scale, existing gradients) — none of
 * Intercept's visual style was carried over.
 */

const DISMISS_KEY = 'nc_promo_dismissed';

// Routes where the marketing chrome (Footer, etc.) already opts out — skip the popup there too.
const EXCLUDED_PREFIXES = ['/login', '/sign-up', '/dashboard'];

export type FloatingPromoCardProps = {
  headline?: string;
  description?: string;
  /** Optional custom illustration. Falls back to a brand-toned abstract visual when omitted. */
  imageSrc?: string;
  ctaText?: string;
  ctaHref?: string;
  /** Milliseconds to wait before the card slides in. */
  delay?: number;
  enabled?: boolean;
};

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

/* Default illustration — reuses the same dark navy gradient as the
   "get in touch" section (bg-gtouch-bg-linear) plus the brand blue
   (#2563EB family) already used for accents across the site. */
function DefaultVisual() {
  return (
    <div
      className="relative aspect-[16/9] w-full overflow-hidden rounded-xl"
      style={{ background: 'linear-gradient(160deg, #0B1220 0%, #17233A 55%, #223652 100%)' }}
      aria-hidden="true"
    >
      <div
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.5) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-12 -left-8 h-36 w-36 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)' }}
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image src={LogoBlue} alt="" className="h-24 w-auto object-contain" />
      </div>
    </div>
  );
}

export default function FloatingPromoCard({
  headline = 'Is your business ready for AI?',
  description,
  imageSrc,
  ctaText = 'Discover your AI readiness',
  ctaHref = Constants.PAGES.AI_ACCELERATOR,
  delay = 4000,
  enabled = true,
}: FloatingPromoCardProps) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  // Timer starts once, independent of route changes — the card should
  // appear a few seconds into the session, not reset on every navigation.
  useEffect(() => {
    if (!enabled) return;
    try {
      if (sessionStorage.getItem(DISMISS_KEY) === '1') return;
    } catch {
      // sessionStorage unavailable (e.g. privacy mode) — fall through and show anyway.
    }
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [enabled, delay]);

  const isExcludedRoute = EXCLUDED_PREFIXES.some(
    (prefix) => pathname === prefix || pathname?.startsWith(`${prefix}/`)
  );
  const shown = enabled && visible && !isExcludedRoute;

  const dismiss = () => {
    setVisible(false);
    try {
      sessionStorage.setItem(DISMISS_KEY, '1');
    } catch {
      // ignore — worst case it can reappear this session
    }
  };

  return (
    <div className="pointer-events-none fixed right-4 top-[88px] z-[950] w-[calc(100%-2rem)] sm:right-6 sm:top-[104px] sm:w-[380px] lg:w-[400px]">
      <AnimatePresence>
        {shown && (
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 32 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-label={headline}
            className="pointer-events-auto relative overflow-hidden rounded-2xl border border-[#E6E6E6] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.16),0_4px_16px_rgba(15,23,42,0.08)]"
          >
            <button
              type="button"
              onClick={dismiss}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full text-[#6B7280] transition-colors hover:bg-black/[0.05] hover:text-[#111827]"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            <div className="px-6 pb-4 pt-6">
              <div className="mb-3">
                <Logo className="h-6" animated={false} />
              </div>
              <h3 className="m-0 pr-8 text-[24px] font-medium leading-[1.15] tracking-[-0.02em] text-[#111827]">
                {headline}
              </h3>
              {description && (
                <p className="mt-2 text-[14px] leading-[1.6] text-[#6B7280]">{description}</p>
              )}
            </div>

            <div className="px-6 pb-6">
              {imageSrc ? (
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                  <Image src={imageSrc} alt="" fill sizes="400px" className="object-cover" />
                </div>
              ) : (
                <DefaultVisual />
              )}
            </div>

            <Link
              href={ctaHref}
              className="group flex items-center justify-between gap-3 bg-btn-color px-6 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-btn-color-hover"
            >
              {ctaText}
              <ArrowIcon />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
