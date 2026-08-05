'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Logo from '../ui/Logo';

const DRAWER_EASE = [0.22, 0.61, 0.36, 1] as const;

type Props = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  footer?: ReactNode;
};

/* Full-screen mobile drawer shell — header (logo + close) is fixed,
   everything passed as children scrolls independently underneath it. */
export default function MobileDrawer({ open, onClose, children, footer }: Props) {
  const prefersReducedMotion = useReducedMotion();
  const previousOverflow = useRef<string | null>(null);

  useEffect(() => {
    if (open) {
      previousOverflow.current = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    } else if (previousOverflow.current !== null) {
      document.body.style.overflow = previousOverflow.current;
    }
    return () => {
      if (previousOverflow.current !== null) document.body.style.overflow = previousOverflow.current;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <motion.aside
      role="dialog"
      aria-modal="true"
      aria-label="Main menu"
      aria-hidden={!open}
      initial={false}
      animate={{ x: open ? 0 : '100%', opacity: open ? 1 : 0 }}
      transition={prefersReducedMotion ? { duration: 0.01 } : { duration: 0.28, ease: DRAWER_EASE }}
      style={{ background: '#FCF9FA', pointerEvents: open ? 'auto' : 'none' }}
      className="fixed inset-0 z-[100] flex h-screen flex-col lg:hidden"
    >
      {/* Header — fixed, 88px */}
      <div className="flex h-[88px] shrink-0 items-center justify-between px-6">
        <div className="cursor-pointer" onClick={onClose}>
          <Logo className="!h-7" />
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-transparent text-[#111827] transition-colors duration-200 hover:bg-black/[0.05]"
        >
          <svg viewBox="0 0 24 24" fill="none" width="18" height="18" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Scrollable body — the drawer itself scrolls, not the page behind it */}
      <div className="flex-1 overflow-y-auto overscroll-contain">
        {children}
      </div>

      {footer && <div className="shrink-0 px-6 pb-8 pt-4">{footer}</div>}
    </motion.aside>
  );
}
