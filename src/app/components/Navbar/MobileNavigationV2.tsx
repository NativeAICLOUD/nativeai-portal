'use client';

import { useState } from 'react';
import { Link } from 'react-transition-progress/next';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Bot, CloudUpload, RefreshCw, Database, Workflow,
  Plane, Scale, Landmark, HeartPulse, ShoppingBag, Factory,
  type LucideIcon,
} from 'lucide-react';
import { Constants } from '@/Constants';
import MobileDrawer from './MobileDrawer';
import MobileAccordionRow from './MobileAccordionRow';

const CARD_EASE = [0.22, 0.61, 0.36, 1] as const;

/* Soft NativeCloud gradient tokens for card icon chips — cycled across cards */
const ICON_GRADIENTS = [
  { bg: 'linear-gradient(135deg, rgba(37,99,235,0.16) 0%, rgba(91,124,250,0.06) 100%)', color: '#2563EB' },   // blue
  { bg: 'linear-gradient(135deg, rgba(255,106,61,0.18) 0%, rgba(255,153,0,0.06) 100%)', color: '#FF6A3D' },   // orange
  { bg: 'linear-gradient(135deg, rgba(124,58,237,0.16) 0%, rgba(155,107,255,0.06) 100%)', color: '#7C3AED' }, // purple
];

type CardEntry = { title: string; href: string; icon: LucideIcon };

const SOLUTION_CARDS: CardEntry[] = [
  { title: 'AI Agents', href: '/services/ai-agents-rag', icon: Bot },
  { title: 'Cloud Migration', href: Constants.PAGES.MIGRATE_TO_AZURE, icon: CloudUpload },
  { title: 'Application Modernization', href: Constants.PAGES.CLOUD_NATIVE_SD, icon: RefreshCw },
  { title: 'Data & AI', href: Constants.PAGES.DATA_LIFECYCLE_MANAGEMENT, icon: Database },
  { title: 'DevOps & Platform Engineering', href: Constants.PAGES.DEVOPS_ON_AZURE, icon: Workflow },
];

const INDUSTRY_CARDS: CardEntry[] = [
  { title: 'Travel & Aviation', href: Constants.PAGES.AIRLINE_BOOKING, icon: Plane },
  { title: 'Legal & Compliance', href: Constants.PAGES.AI_LEGAL_WORKSPACE, icon: Scale },
  { title: 'Finance & Banking', href: Constants.PAGES.PAYMENT_AUTOMATION, icon: Landmark },
  { title: 'Healthcare', href: '/industries', icon: HeartPulse },
  { title: 'Retail & E-commerce', href: '/industries', icon: ShoppingBag },
  { title: 'Manufacturing', href: '/industries', icon: Factory },
];

type Section = {
  title: string;
  href: string;
  expandable: boolean;
  heading?: string;
  cards?: CardEntry[];
  viewAllHref?: string;
  viewAllLabel?: string;
};

const SECTIONS: Section[] = [
  {
    title: 'Solutions',
    href: Constants.PAGES.SOLUTIONS,
    expandable: true,
    heading: 'Solutions',
    cards: SOLUTION_CARDS,
    viewAllHref: Constants.PAGES.SOLUTIONS,
    viewAllLabel: 'View all solutions',
  },
  {
    title: 'Industries',
    href: '/industries',
    expandable: true,
    heading: 'Industries',
    cards: INDUSTRY_CARDS,
    viewAllHref: '/industries',
    viewAllLabel: 'View all industries',
  },
  { title: 'Workshops', href: Constants.PAGES.WORKSHOPS, expandable: false },
  { title: 'Knowledge Base', href: Constants.PAGES.KNOWLEDGE_BASE, expandable: false },
  { title: 'Careers', href: Constants.PAGES.CAREERS, expandable: false },
  { title: 'About', href: Constants.PAGES.ABOUT_US, expandable: false },
];

function CardSection({
  heading,
  cards,
  viewAllHref,
  viewAllLabel,
  onNavigate,
  reducedMotion,
}: {
  heading: string;
  cards: CardEntry[];
  viewAllHref: string;
  viewAllLabel: string;
  onNavigate: () => void;
  reducedMotion: boolean;
}) {
  return (
    <div style={{ background: '#FAFAFA' }} className="-mx-6 px-6 pt-12 pb-14">
      <span className="block rounded-full bg-[#2563EB]" style={{ width: 56, height: 3, marginBottom: 12 }} aria-hidden="true" />
      <h3 className="m-0 text-[30px] font-semibold leading-tight text-[#111827]" style={{ marginBottom: 48 }}>
        {heading}
      </h3>

      <motion.ul
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: reducedMotion ? 0 : 0.05 } } }}
        className="flex flex-col gap-4"
      >
        {cards.map((card, i) => {
          const Icon = card.icon;
          const gradient = ICON_GRADIENTS[i % ICON_GRADIENTS.length];
          return (
            <motion.li
              key={card.title}
              variants={{
                hidden: { opacity: 0, y: reducedMotion ? 0 : 10 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.25, ease: CARD_EASE }}
            >
              <Link
                href={card.href}
                onClick={onNavigate}
                className="group flex min-h-[84px] items-center gap-4 rounded-xl bg-white px-5 py-4 shadow-[0_1px_3px_rgba(15,23,42,0.05)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_4px_14px_rgba(15,23,42,0.08)] active:-translate-y-0.5 active:shadow-[0_4px_14px_rgba(15,23,42,0.08)]"
              >
                <span
                  className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-xl transition-transform duration-200 ease-out group-hover:scale-105 group-active:scale-105"
                  style={{ background: gradient.bg }}
                >
                  <Icon size={24} strokeWidth={1.7} style={{ color: gradient.color }} aria-hidden="true" />
                </span>
                <span className="line-clamp-2 min-w-0 flex-1 text-[18px] font-semibold leading-snug text-[#111827]">
                  {card.title}
                </span>
              </Link>
            </motion.li>
          );
        })}

        {/* Final row — same shell (width, radius, shadow) as the cards, lighter content */}
        <motion.li
          variants={{
            hidden: { opacity: 0, y: reducedMotion ? 0 : 10 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.25, ease: CARD_EASE }}
        >
          <Link
            href={viewAllHref}
            onClick={onNavigate}
            className="group flex items-center justify-between rounded-xl bg-white px-5 py-4 shadow-[0_1px_3px_rgba(15,23,42,0.05)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_4px_14px_rgba(15,23,42,0.08)] active:-translate-y-0.5 active:shadow-[0_4px_14px_rgba(15,23,42,0.08)]"
          >
            <span className="text-[16px] font-semibold text-[#111827]">{viewAllLabel}</span>
            <svg className="h-4 w-4 shrink-0 text-[#2563EB] transition-transform duration-200 ease-out group-hover:translate-x-1 group-active:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </motion.li>
      </motion.ul>
    </div>
  );
}

type Props = {
  open: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
};

/* Brand-new mobile navigation drawer — accordion-based, one section open at a
   time, rich card content only for Solutions/Industries. Built from scratch;
   does not extend or reuse the previous mobile menu implementation. */
export default function MobileNavigationV2({ open, onClose, onOpenSearch }: Props) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const reducedMotion = !!useReducedMotion();

  const handleNavigate = () => {
    setExpanded(null);
    onClose();
  };

  const handleClose = () => {
    setExpanded(null);
    onClose();
  };

  return (
    <MobileDrawer
      open={open}
      onClose={handleClose}
      footer={
        <Link
          href={Constants.PAGES.SCHEDULE_CALL}
          onClick={handleNavigate}
          className="flex h-[62px] w-full items-center justify-center rounded-lg bg-black text-[17px] font-semibold text-white transition-colors duration-200 hover:bg-[#111827]"
        >
          Let&apos;s talk
        </Link>
      }
    >
      <ul className="flex flex-col px-6">
        <li className="border-b border-black/[0.06]">
          <button
            type="button"
            onClick={onOpenSearch}
            className="flex min-h-[96px] w-full items-center gap-3 py-6 text-left text-[18px] font-semibold text-[#111827] transition-colors duration-200 hover:text-[#2563EB]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
              <defs>
                <linearGradient id="ai-mode-grad-mobile" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#1e4fd6" />
                </linearGradient>
              </defs>
              <path fill="url(#ai-mode-grad-mobile)" d="M12 0c0 6.627-5.373 12-12 12 6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12Z" />
            </svg>
            AI Mode
          </button>
        </li>

        {SECTIONS.map((section) => {
          const isOpen = expanded === section.title;
          return (
            <MobileAccordionRow
              key={section.title}
              title={section.title}
              href={section.href}
              onNavigate={handleNavigate}
              expandable={section.expandable}
              isOpen={isOpen}
              onToggle={() => setExpanded(isOpen ? null : section.title)}
              reducedMotion={reducedMotion}
            >
              {section.cards && (
                <CardSection
                  heading={section.heading ?? section.title}
                  cards={section.cards}
                  viewAllHref={section.viewAllHref ?? section.href}
                  viewAllLabel={section.viewAllLabel ?? `View all ${section.title.toLowerCase()}`}
                  onNavigate={handleNavigate}
                  reducedMotion={reducedMotion}
                />
              )}
            </MobileAccordionRow>
          );
        })}
      </ul>
    </MobileDrawer>
  );
}
