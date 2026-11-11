'use client';

import { useEffect, useRef, useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
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
          <ClaudeMark className="h-[18px] w-[18px]" />
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
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: 6 }}
                transition={{ duration: reduce ? 0.1 : 0.18, ease: 'easeOut' }}
                className="w-[calc(100vw-32px)] max-w-[calc(100vw-32px)] rounded-[24px] bg-white p-5 text-left font-switzer shadow-[0_10px_30px_rgba(15,23,42,0.08),0_1px_4px_rgba(15,23,42,0.04)] outline-none sm:w-[440px] sm:px-8 sm:py-7 lg:w-[520px]"
              >
                <div className="flex items-center gap-2">
                  <ClaudeMark className="h-4 w-4" />
                  <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#6B7280]">
                    {label}
                  </span>
                </div>

                <h3 className="m-0 mt-4 text-[20px] font-semibold leading-[1.25] tracking-[-0.015em] text-[#111] sm:text-[23px]">
                  {heading}
                </h3>

                <div className="mt-3.5 flex flex-col gap-3">
                  {description.map((p) => (
                    <p key={p} className="m-0 text-[14px] font-normal leading-[1.55] text-[#3F3F46] sm:text-[16px]">
                      {p}
                    </p>
                  ))}
                </div>

                <div className="mt-[22px] flex flex-wrap items-center gap-x-6 gap-y-3">
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
                </div>
              </motion.div>
            </Popover.Content>
          </Popover.Portal>
        )}
      </AnimatePresence>
    </Popover.Root>
  );
}
