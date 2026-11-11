'use client';

import { useEffect, useRef, useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { AnimatePresence, motion, useReducedMotion, type Variants } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-transition-progress/next';
import { Constants } from '@/Constants';

/* Claude partnership pill that opens a compact floating card.
   Desktop: opens on hover (badge or card keeps it open, closes after a short delay).
   Touch: tap to toggle. Keyboard: Enter/Space toggles. Escape / outside click close.
   Radix Popover portals and positions the card: 12px above the badge, shifted to stay
   inside the viewport, flipped below when there's no room above. */

type PartnerLink = { label: string; href: string };

type Props = {
  /** Set only once an official Anthropic partnership is approved. */
  official?: boolean;
  badgeLabel?: string;
  label?: string;
  heading?: string;
  description?: string[];
  /** Small live chip in the card's top-right corner. */
  modelNote?: string;
  links?: PartnerLink[];
  className?: string;
};

const DEFAULT_DESCRIPTION = [
  'NativeCloud builds production-grade Claude AI solutions for Swiss and European businesses. We integrate AI into existing workflows with security, audit trails, and human approval — from pilot to production.',
];

const DEFAULT_LINKS: PartnerLink[] = [
  { label: 'Explore AI Solutions', href: Constants.PAGES.SOLUTIONS },
  { label: 'Let’s talk', href: Constants.PAGES.GET_IN_TOUCH },
];

const CLOSE_DELAY = 160;

const BORDER_GRADIENT =
  'conic-gradient(from 0deg, #E5E7EB 0deg, #D97757 50deg, #E5E7EB 110deg, #E5E7EB 180deg, #5B7CFA 230deg, #E5E7EB 290deg, #E5E7EB 360deg)';

/* Card springs out of the badge (scale + blur), then its rows cascade in. */
const CARD: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.92, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 380, damping: 26, staggerChildren: 0.06, delayChildren: 0.08 },
  },
  exit: { opacity: 0, y: 6, scale: 0.96, filter: 'blur(4px)', transition: { duration: 0.15, ease: 'easeIn' } },
};

const REDUCED_CARD: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.1 } },
  exit: { opacity: 0, transition: { duration: 0.1 } },
};

const ITEM: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] } },
};

function ClaudeMark({ className }: { className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/img/partners/claude.svg" alt="" aria-hidden="true" className={className} />;
}

const canHover = () => typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

export default function PartnerHoverCard({
  official = false,
  badgeLabel,
  label = 'Anthropic · Claude AI',
  heading = 'Build smarter businesses with Claude AI',
  description = DEFAULT_DESCRIPTION,
  modelNote = 'Latest Claude models',
  links = DEFAULT_LINKS,
  className = '',
}: Props) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduce = useReducedMotion();

  const text = badgeLabel ?? (official ? 'Official Claude Partner' : 'Claude AI Solutions');

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };
  const onEnter = () => {
    if (!canHover()) return;
    cancelClose();
    setOpen(true);
  };
  const onLeave = () => {
    if (!canHover()) return;
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), CLOSE_DELAY);
  };

  const onSpotlightMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  useEffect(() => cancelClose, []);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button
          type="button"
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          onClick={(e) => {
            // A mouse click on a hover device keeps the card open instead of toggling it shut;
            // keyboard (detail === 0) and touch fall through to Radix's toggle.
            if (e.detail !== 0 && canHover()) {
              e.preventDefault();
              setOpen(true);
            }
          }}
          className={`inline-flex h-10 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full border border-[#E5E7EB] bg-white px-4 text-[14px] font-semibold text-[#2E2B2B] transition-colors duration-200 hover:bg-[#F7F7F8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D97757]/40 data-[state=open]:bg-[#F7F7F8] ${className}`}
        >
          <ClaudeMark
            className={`h-[18px] w-[18px] transition-transform duration-500 ease-out motion-reduce:transition-none ${open ? 'rotate-90' : ''}`}
          />
          {text}
          <ChevronDown
            size={16}
            strokeWidth={1.75}
            aria-hidden="true"
            className={`-mr-1 text-[#6B7280] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          />
        </button>
      </Popover.Trigger>

      <AnimatePresence>
        {open && (
          <Popover.Portal forceMount>
            <Popover.Content
              forceMount
              asChild
              side="top"
              align="center"
              sideOffset={12}
              collisionPadding={16}
              onOpenAutoFocus={(e) => e.preventDefault()}
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
              className="z-[1000]"
            >
              <motion.div
                variants={reduce ? REDUCED_CARD : CARD}
                initial="hidden"
                animate="show"
                exit="exit"
                style={{ transformOrigin: 'var(--radix-popover-content-transform-origin)' }}
                className="relative w-[calc(100vw-32px)] max-w-[calc(100vw-32px)] overflow-hidden rounded-[24px] p-[1.5px] text-left font-switzer shadow-[0_24px_60px_-12px_rgba(217,119,87,0.28),0_10px_30px_rgba(15,23,42,0.10),0_1px_4px_rgba(15,23,42,0.05)] outline-none sm:w-[440px] lg:w-[520px]"
              >
                {/* Orbiting border light — a coral and a blue comet circling the card edge */}
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-[-60%]"
                  style={{ backgroundImage: BORDER_GRADIENT }}
                  animate={reduce ? undefined : { rotate: 360 }}
                  transition={{ duration: 7, ease: 'linear', repeat: Infinity }}
                />

                <div
                  onMouseMove={onSpotlightMove}
                  className="group/card relative overflow-hidden rounded-[22.5px] bg-white p-5 sm:px-8 sm:py-7"
                >
                  {/* Soft ambient wash + a glow that follows the cursor */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0"
                    style={{
                      backgroundImage:
                        'radial-gradient(120% 80% at 0% 0%, rgba(217,119,87,0.07), transparent 55%), radial-gradient(100% 70% at 100% 100%, rgba(91,124,250,0.06), transparent 55%)',
                    }}
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
                    style={{
                      backgroundImage:
                        'radial-gradient(260px circle at var(--mx, 50%) var(--my, 0%), rgba(217,119,87,0.13), transparent 70%)',
                    }}
                  />

                  <div className="relative">
                    <motion.div variants={ITEM} className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                      <div className="flex items-center gap-2">
                        <motion.span
                          className="inline-flex"
                          initial={reduce ? false : { rotate: -120, scale: 0.4 }}
                          animate={{ rotate: 0, scale: 1 }}
                          transition={{ type: 'spring', stiffness: 220, damping: 14, delay: 0.08 }}
                        >
                          <ClaudeMark className="h-4 w-4" />
                        </motion.span>
                        <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#6B7280]">
                          {label}
                        </span>
                      </div>

                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#F3D9CE] bg-[#FDF5F1] px-2.5 py-1 text-[11px] font-semibold text-[#9A4A2E]">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D97757] opacity-60 motion-reduce:animate-none" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#D97757]" />
                        </span>
                        {modelNote}
                      </span>
                    </motion.div>

                    <motion.h3
                      variants={ITEM}
                      className="m-0 mt-4 text-[20px] font-semibold leading-[1.25] tracking-[-0.015em] text-[#111] sm:text-[23px]"
                    >
                      {reduce ? (
                        heading
                      ) : (
                        /* One-shot light sweep across the heading as the card opens */
                        <motion.span
                          className="bg-clip-text text-transparent"
                          style={{
                            backgroundImage: 'linear-gradient(110deg, #111 40%, #D97757 50%, #111 60%)',
                            backgroundSize: '300% 100%',
                          }}
                          initial={{ backgroundPosition: '100% 0%' }}
                          animate={{ backgroundPosition: '0% 0%' }}
                          transition={{ duration: 1.3, ease: 'easeInOut', delay: 0.2 }}
                        >
                          {heading}
                        </motion.span>
                      )}
                    </motion.h3>

                    <motion.div variants={ITEM} className="mt-3.5 flex flex-col gap-3">
                      {description.map((p) => (
                        <p key={p} className="m-0 text-[14px] font-normal leading-[1.55] text-[#3F3F46] sm:text-[16px]">
                          {p}
                        </p>
                      ))}
                    </motion.div>

                    <motion.div variants={ITEM} className="mt-[22px] flex flex-wrap items-center gap-x-6 gap-y-3">
                      {links.map((l) => (
                        <Link
                          key={l.href}
                          href={l.href}
                          onClick={() => setOpen(false)}
                          className="group inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#9A4A2E] underline decoration-1 underline-offset-[4px] transition-colors duration-200 hover:text-[#7A3720]"
                        >
                          {l.label}
                          <ArrowRight
                            size={15}
                            strokeWidth={1.5}
                            aria-hidden="true"
                            className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                          />
                        </Link>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </Popover.Content>
          </Popover.Portal>
        )}
      </AnimatePresence>
    </Popover.Root>
  );
}
