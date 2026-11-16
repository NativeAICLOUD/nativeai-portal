'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Link } from 'react-transition-progress/next';
import { motion, AnimatePresence, useReducedMotion, type Variants } from 'framer-motion';
import AIRibbonVisual from './AIRibbonVisual';
import { SerifAccent } from '@/app/components/ui/EditorialGlow';

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

const BORDER_GRADIENT =
  'conic-gradient(from 0deg, #E5E7EB 0deg, #2563EB 50deg, #E5E7EB 110deg, #E5E7EB 180deg, #7FB2FF 230deg, #E5E7EB 290deg, #E5E7EB 360deg)';

// The cookie banner sits bottom-centre; the card waits until consent is stored so the two never overlap.
const COOKIE_KEY = 'nc_cookie_consent';

// ── Change the default `position` prop below to move the card to another corner ──
export type PromoPosition = 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';

const POSITION_CLASSES: Record<PromoPosition, { wrapper: string; origin: string }> = {
  'bottom-right': { wrapper: 'right-4 bottom-4 sm:right-6 sm:bottom-6', origin: 'origin-bottom-right' },
  'bottom-left': { wrapper: 'left-4 bottom-4 sm:left-6 sm:bottom-6', origin: 'origin-bottom-left' },
  'top-right': { wrapper: 'right-4 top-[88px] sm:right-6 sm:top-[104px]', origin: 'origin-top-right' },
  'top-left': { wrapper: 'left-4 top-[88px] sm:left-6 sm:top-[104px]', origin: 'origin-top-left' },
};

/* Card springs in from its corner (scale + blur), then its rows cascade in.
   `dir` is 1 when anchored to the bottom (rises in), -1 when anchored to the top (drops in). */
const cardVariants = (dir: 1 | -1): Variants => ({
  hidden: { opacity: 0, y: 14 * dir, scale: 0.92, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 300, damping: 24, staggerChildren: 0.08, delayChildren: 0.15 },
  },
  exit: { opacity: 0, y: 8 * dir, scale: 0.96, filter: 'blur(4px)', transition: { duration: 0.2, ease: 'easeIn' } },
});

const REDUCED_CARD: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.15 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

const ITEM: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
};

export type FloatingPromoCardProps = {
  headline?: string;
  /** Second headline line, set in the editorial italic serif (same treatment as the page heroes). */
  headlineAccent?: string;
  description?: string;
  /** Optional custom illustration. Falls back to a brand-toned abstract visual when omitted. */
  imageSrc?: string;
  ctaText?: string;
  ctaHref?: string;
  /** Milliseconds to wait before the card slides in. */
  delay?: number;
  enabled?: boolean;
  /** Screen corner the card is pinned to. */
  position?: PromoPosition;
};

export default function FloatingPromoCard({
  headline = "AI that doesn't just answer.",
  headlineAccent = 'It acts.',
  description,
  imageSrc,
  ctaText = 'Explore agentic AI',
  ctaHref = '/services/ai-agents-rag',
  delay = 4000,
  enabled = true,
  position = 'bottom-right',
}: FloatingPromoCardProps) {
  const pos = POSITION_CLASSES[position];
  const atBottom = position.startsWith('bottom');
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  const onSpotlightMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  // Timer starts once, independent of route changes — the card should
  // appear a few seconds into the session, not reset on every navigation.
  useEffect(() => {
    if (!enabled) return;
    try {
      if (sessionStorage.getItem(DISMISS_KEY) === '1') return;
    } catch {
      // sessionStorage unavailable (e.g. privacy mode) — fall through and show anyway.
    }
    // A bottom-anchored card would sit under the cookie banner — hold it until consent is stored.
    const cookiePending = () => {
      if (!atBottom) return false;
      try {
        return !localStorage.getItem(COOKIE_KEY);
      } catch {
        return false;
      }
    };
    let poll: ReturnType<typeof setInterval> | undefined;
    const timer = setTimeout(() => {
      if (!cookiePending()) return setVisible(true);
      poll = setInterval(() => {
        if (cookiePending()) return;
        clearInterval(poll);
        setVisible(true);
      }, 1000);
    }, delay);
    return () => {
      clearTimeout(timer);
      clearInterval(poll);
    };
  }, [enabled, delay, atBottom]);

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
    <div className={`pointer-events-none fixed z-[950] w-[calc(100%-2rem)] font-switzer sm:w-[360px] ${pos.wrapper}`}>
      <AnimatePresence>
        {shown && (
          <motion.div
            variants={reduce ? REDUCED_CARD : cardVariants(atBottom ? 1 : -1)}
            initial="hidden"
            animate="show"
            exit="exit"
            role="dialog"
            aria-label={headlineAccent ? `${headline} ${headlineAccent}` : headline}
            className={`pointer-events-auto relative ${pos.origin} overflow-hidden rounded-[22px] p-[1.5px] shadow-[0_32px_80px_-12px_rgba(37,99,235,0.32),0_12px_30px_rgba(15,23,42,0.14),0_2px_6px_rgba(15,23,42,0.06)]`}
          >
            {/* Orbiting border light — two blue comets circling the card edge */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute inset-[-60%]"
              style={{ backgroundImage: BORDER_GRADIENT }}
              animate={reduce ? undefined : { rotate: 360 }}
              transition={{ duration: 7, ease: 'linear', repeat: Infinity }}
            />

            <div className="relative overflow-hidden rounded-[20.5px] bg-white">
            {/* Full-bleed AI ribbon — the card opens on the visual, edge to edge */}
            {imageSrc ? (
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image src={imageSrc} alt="" fill sizes="360px" className="object-cover" />
              </div>
            ) : (
              <AIRibbonVisual src="/img/ai-infinity-ribbon-cutout.webp" className="aspect-[16/10] bg-[#EEF3FF]" sizes="(min-width: 640px) 360px, 100vw" />
            )}

            <button
              type="button"
              onClick={dismiss}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/75 text-[#374151] shadow-[0_2px_8px_rgba(15,23,42,0.12)] backdrop-blur-sm transition-colors hover:bg-white hover:text-[#111]"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            <div onMouseMove={onSpotlightMove} className="group/body relative px-6 pb-6 pt-5">
              {/* Glow that follows the cursor across the text area */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/body:opacity-100"
                style={{
                  backgroundImage:
                    'radial-gradient(240px circle at var(--mx, 50%) var(--my, 0%), rgba(37,99,235,0.11), transparent 70%)',
                }}
              />

              <motion.div variants={ITEM} className="relative mb-3 flex items-center">
                <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#0066B3]">
                  Agentic AI
                </span>
              </motion.div>

              <motion.h3
                variants={ITEM}
                className="relative m-0 text-[28px] font-light leading-[1.05] tracking-[-0.03em] text-[#141414] [text-wrap:balance]"
              >
                {reduce ? (
                  headline
                ) : (
                  /* One-shot light sweep across the first line as the card lands */
                  <motion.span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage: 'linear-gradient(110deg, #141414 40%, #2563EB 50%, #141414 60%)',
                      backgroundSize: '300% 100%',
                    }}
                    initial={{ backgroundPosition: '100% 0%' }}
                    animate={{ backgroundPosition: '0% 0%' }}
                    transition={{ duration: 1.3, ease: 'easeInOut', delay: 0.35 }}
                  >
                    {headline}
                  </motion.span>
                )}
                {headlineAccent && (
                  <>
                    <br />
                    {/* The punchline arrives a beat after the first line */}
                    <motion.span
                      className="inline-block"
                      initial={reduce ? false : { opacity: 0, y: 10, filter: 'blur(6px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.9 }}
                    >
                      <SerifAccent>{headlineAccent}</SerifAccent>
                    </motion.span>
                  </>
                )}
              </motion.h3>
              {description && (
                <motion.p variants={ITEM} className="relative mt-2 text-[14px] leading-[1.55] text-[#6b7280]">
                  {description}
                </motion.p>
              )}

              <motion.div variants={ITEM} className="relative mt-6 flex flex-col gap-2">
                <Link
                  href={ctaHref}
                  onClick={dismiss}
                  className="relative inline-flex h-10 w-full cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap rounded-full bg-[#E1F0FF] px-5 text-[14px] font-semibold text-[#0066B3] transition-colors duration-200 hover:bg-[#CCE4FF] active:bg-[#B8D9FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3]/40 focus-visible:ring-offset-2"
                >
                  {/* Periodic shine across the primary action */}
                  {!reduce && (
                    <motion.span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/80 to-transparent"
                      initial={{ x: '-150%' }}
                      animate={{ x: '450%' }}
                      transition={{ duration: 1.1, ease: 'easeInOut', delay: 1.4, repeat: Infinity, repeatDelay: 3.2 }}
                    />
                  )}
                  <span className="relative">{ctaText}</span>
                </Link>
                <button
                  type="button"
                  onClick={dismiss}
                  className="inline-flex h-10 w-full cursor-pointer items-center justify-center whitespace-nowrap rounded-full bg-[#E5E7EB] px-5 text-[14px] font-semibold text-[#374151] transition-colors duration-200 hover:bg-[#D9DCE1] active:bg-[#CBCFD5]"
                >
                  Not now
                </button>
              </motion.div>
            </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
