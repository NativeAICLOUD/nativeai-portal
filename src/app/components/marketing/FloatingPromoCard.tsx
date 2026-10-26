'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Link } from 'react-transition-progress/next';
import { motion, AnimatePresence } from 'framer-motion';
import { Constants } from '@/Constants';
import { LogoBlue } from '@/ImagePath';

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

/* Default illustration — the NativeCloud logo on a soft brand-blue panel,
   toned for the light card. */
function DefaultVisual() {
  return (
    <div
      className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-[#e6e6e6]"
      style={{ background: 'linear-gradient(160deg, #F5F8FF 0%, #EEF2FF 100%)' }}
      aria-hidden="true"
    >
      <div
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(91,124,250,0.22) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-12 -left-8 h-36 w-36 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)' }}
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image src={LogoBlue} alt="" className="h-24 w-auto object-contain" />
      </div>
    </div>
  );
}

export default function FloatingPromoCard({
  headline = 'AI is the future. Is your business ready?',
  description = 'Find your opportunities. Make them real.',
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

  // Escape closes the card, like any other dismissible overlay.
  useEffect(() => {
    if (!shown) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismiss();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [shown]);

  return (
    <div className="pointer-events-none fixed right-4 top-[88px] z-[950] w-[calc(100%-2rem)] font-switzer sm:right-6 sm:top-[104px] sm:w-[360px]">
      <AnimatePresence>
        {shown && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-label={headline}
            className="pointer-events-auto relative overflow-hidden rounded-2xl border border-[#e6e6e6] bg-white shadow-[0_24px_60px_rgba(15,23,42,0.14),0_4px_14px_rgba(15,23,42,0.06)]"
          >
            {/* Soft blue glow + hairline top rule, same as the About page divider */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-28"
              style={{ background: 'radial-gradient(120% 100% at 100% 0%, rgba(0,102,179,0.10) 0%, rgba(255,255,255,0) 70%)' }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-x-0 top-0 h-[1.5px]"
              style={{ backgroundImage: 'linear-gradient(90deg, #fff, #E1F0FF 15%, #0066B3 50%, #E1F0FF 85%, #fff)' }}
              aria-hidden="true"
            />

            <button
              type="button"
              onClick={dismiss}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full text-[#9ca3af] transition-colors hover:bg-[#111]/[0.05] hover:text-[#111]"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            <div className="relative p-6">
              <div className="mb-4">
                <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#0066B3]">
                  AI readiness
                </span>
              </div>

              <h3 className="m-0 pr-8 text-[22px] font-medium leading-[1.15] tracking-[-0.01em] text-[#111]">
                {headline}
              </h3>
              {description && (
                <p className="mt-2 text-[14px] leading-[1.55] text-[#6b7280]">{description}</p>
              )}

              {imageSrc ? (
                <div className="relative mt-5 aspect-[16/9] w-full overflow-hidden rounded-xl border border-[#eee]">
                  <Image src={imageSrc} alt="" fill sizes="360px" className="object-cover" />
                </div>
              ) : (
                <div className="mt-5">
                  <DefaultVisual />
                </div>
              )}

              <div className="mt-6 flex flex-col gap-2">
                <Link
                  href={ctaHref}
                  onClick={dismiss}
                  className="inline-flex h-10 w-full cursor-pointer items-center justify-center whitespace-nowrap rounded-full bg-[#E1F0FF] px-5 text-[14px] font-semibold text-[#0066B3] transition-colors duration-200 hover:bg-[#CCE4FF] active:bg-[#B8D9FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3]/40 focus-visible:ring-offset-2"
                >
                  {ctaText}
                </Link>
                <button
                  type="button"
                  onClick={dismiss}
                  className="inline-flex h-10 w-full cursor-pointer items-center justify-center whitespace-nowrap rounded-full bg-[#E5E7EB] px-5 text-[14px] font-semibold text-[#374151] transition-colors duration-200 hover:bg-[#D9DCE1] active:bg-[#CBCFD5]"
                >
                  Not now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
