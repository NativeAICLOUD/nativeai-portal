'use client';

import { Link } from 'react-transition-progress/next';
import { motion, AnimatePresence } from 'framer-motion';
import type { ReactNode } from 'react';

const ROW_EASE = [0.22, 0.61, 0.36, 1] as const;

type Props = {
  title: string;
  href: string;
  onNavigate: () => void;
  expandable?: boolean;
  isOpen?: boolean;
  onToggle?: () => void;
  reducedMotion?: boolean;
  children?: ReactNode;
};

/* A single top-level row. Expandable rows show a chevron that toggles the
   panel below; plain rows are a direct link with a trailing arrow. */
export default function MobileAccordionRow({
  title,
  href,
  onNavigate,
  expandable = false,
  isOpen = false,
  onToggle,
  reducedMotion,
  children,
}: Props) {
  const panelId = `mnav-panel-${title.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <li className="border-b border-black/[0.06]">
      {expandable ? (
        <div className="flex min-h-[96px] items-center py-6">
          <Link
            href={href}
            onClick={onNavigate}
            className="flex-1 text-[18px] font-semibold text-[#111827] transition-colors duration-200 hover:text-[#2563EB]"
          >
            {title}
          </Link>
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={isOpen}
            aria-controls={panelId}
            aria-label={isOpen ? `Collapse ${title}` : `Expand ${title}`}
            className="flex h-11 w-11 shrink-0 items-center justify-center"
          >
            <motion.svg
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={reducedMotion ? { duration: 0.01 } : { duration: 0.25, ease: ROW_EASE }}
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6B7280"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </motion.svg>
          </button>
        </div>
      ) : (
        <Link
          href={href}
          onClick={onNavigate}
          className="group flex min-h-[96px] items-center justify-between py-6 text-[18px] font-semibold text-[#111827] transition-colors duration-200 hover:text-[#2563EB]"
        >
          {title}
          <svg
            className="h-4 w-4 shrink-0 text-[#D1D5DB] transition-transform duration-200 group-hover:translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </Link>
      )}

      {expandable && (
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id={panelId}
              role="region"
              aria-label={title}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={reducedMotion ? { duration: 0.01 } : { duration: 0.3, ease: ROW_EASE }}
              className="overflow-hidden"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </li>
  );
}
