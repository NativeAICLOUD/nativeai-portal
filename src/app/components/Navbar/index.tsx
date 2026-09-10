'use client';

import { Link } from 'react-transition-progress/next';
import { Constants } from '@/Constants';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import CoomingSoon from '../ui/CoomingSoon';
import Logo from '../ui/Logo';
import { SITE_PAGES } from '@/lib/sitePages';
import { NavMenuItemCard, NavMenuItemDisabled } from './NavMenuItem';
import MobileNavigationV2 from './MobileNavigationV2';
import {
  Code2, Palette, CloudCog, CloudUpload,
  Bot, Boxes,
  Plane, Scale, Landmark, HeartPulse, ShoppingBag, Factory,
  BookOpen, GraduationCap, Library, Building2,
  GitBranch, Sparkles,
  Users, UserCog, Rocket, RefreshCw,
  LucideIcon,
} from 'lucide-react';

type Pages = {
  url: string;
  title: string;
  desc?: string;
  soon?: true;
  icon?: LucideIcon | string; // Lucide component or a glyph image path
  color?: string;
  children?: Pages[];
};

const PALETTE = {
  blue:   '#5B7CFA',
  green:  '#59C28A',
  purple: '#9B6BFF',
  orange: '#E59B47',
  teal:   '#46B5B0',
} as const;

const pages: Pages[] = [
  {
    url: Constants.PAGES.SOLUTIONS, title: 'Solutions', children: [
      {
        url: Constants.PAGES.SOLUTIONS, title: 'Services', children: [
          { url: '/services/custom-development',               title: 'Custom Development', desc: 'Tailored software for your workflows',  icon: '/icons/web-frontend.svg', color: PALETTE.blue   },
          { url: '/services/design',                           title: 'Design',             desc: 'Interfaces your users will love',        icon: Palette,     color: PALETTE.purple },
          { url: Constants.PAGES.CLOUD_SOFTWARE_ARCHITECTURE,  title: 'Cloud Architecture', desc: 'Scalable infrastructure design',         icon: CloudCog,    color: PALETTE.teal   },
          { url: Constants.PAGES.MIGRATE_TO_AZURE,             title: 'Migrate to Azure',   desc: 'Low-risk migration to the cloud',        icon: CloudUpload, color: PALETTE.green  },
        ],
      },
      {
        url: '/services/ai-agents-rag', title: 'AI & Data', children: [
          { url: '/services/ai-agents-rag',                    title: 'AI Agents & RAG',   desc: 'Intelligent automation & LLMs',          icon: Bot,         color: PALETTE.teal   },
          { url: Constants.PAGES.DATA_LIFECYCLE_MANAGEMENT,    title: 'Data Lifecycle',    desc: 'Raw data to live dashboards',            icon: '/icons/api-and-integrations.svg', color: PALETTE.orange },
          { url: Constants.PAGES.CLOUD_NATIVE_SD,              title: 'Cloud Native Dev',  desc: 'Kubernetes & microservices',             icon: '/icons/web-backend.svg', color: PALETTE.blue   },
          { url: Constants.PAGES.DEVOPS_ON_AZURE,              title: 'DevOps on Azure',   desc: 'CI/CD & infrastructure-as-code',         icon: '/icons/cloud-and-devops.svg', color: PALETTE.green  },
        ],
      },
      {
        url: Constants.PAGES.ABOUT_US, title: 'Innovate', children: [
          { url: Constants.PAGES.CASE_STUDIES,                 title: 'Case Studies',      desc: 'How we deliver for clients',             icon: BookOpen,    color: PALETTE.orange },
          { url: Constants.PAGES.GITHUB_ACCELERATOR,           title: 'GitHub Accelerator', desc: 'Copilot, migration & DevSecOps',        icon: GitBranch,   color: PALETTE.purple },
          { url: Constants.PAGES.AI_ACCELERATOR,               title: 'AI Accelerator',    desc: 'Azure AI from use case to production',   icon: Sparkles,    color: PALETTE.blue   },
        ],
      },
      {
        url: Constants.PAGES.NEARSHORE_TEAMS, title: 'Nearshore', children: [
          { url: Constants.PAGES.NEARSHORE_TEAMS,              title: 'Dedicated Dev Teams',    desc: 'Senior engineers in your workflow',       icon: Users,       color: PALETTE.blue   },
        ],
      },
    ],
  },
  {
    url: Constants.PAGES.SOLUTIONS, title: 'Industries', children: [
      {
        url: Constants.PAGES.SOLUTIONS, title: 'Industries', children: [
          { url: Constants.PAGES.AIRLINE_BOOKING,    title: 'Travel & Aviation',   desc: 'GDS booking & airline platforms',     icon: Plane,       color: PALETTE.blue   },
          { url: Constants.PAGES.AI_LEGAL_WORKSPACE, title: 'Legal & Compliance',  desc: 'AI for law firms & legal teams',      icon: Scale,       color: PALETTE.purple },
          { url: Constants.PAGES.PAYMENT_AUTOMATION, title: 'Finance & Banking',   desc: 'Payments, billing & reconciliation',  icon: Landmark,    color: PALETTE.green  },
          { url: Constants.PAGES.SOLUTIONS,          title: 'Healthcare',          desc: 'Secure data & clinical workflows',    icon: HeartPulse,  color: PALETTE.orange },
          { url: Constants.PAGES.SOLUTIONS,          title: 'Retail & E-commerce', desc: 'Scalable storefronts & logistics',    icon: ShoppingBag, color: PALETTE.teal   },
          { url: Constants.PAGES.SOLUTIONS,          title: 'Manufacturing',       desc: 'IoT, automation & supply chain',      icon: Factory,     color: PALETTE.blue   },
        ],
      },
    ],
  },
  { url: Constants.PAGES.WORKSHOPS,    title: 'Workshops'     },
  { url: Constants.PAGES.KNOWLEDGE_BASE, title: 'Knowledge base' },
  { url: Constants.PAGES.CAREERS,     title: 'Careers'       },
  { url: Constants.PAGES.ABOUT_US,     title: 'About'         },
  { url: Constants.PAGES.SCHEDULE_CALL, title: 'Schedule a call' },
];

const MONO: React.CSSProperties = { fontFamily: "'Switzer', sans-serif" };

/* ── Solutions mega menu — curated 2×2 grid + contextual detail panel ── */
type SolutionEntry = {
  title: string;
  href: string;
  color: string;
  bg: string;
  icon: LucideIcon;
  details: string[];
  desc?: string;
};

const INDUSTRIES_MENU: SolutionEntry[] = [
  {
    title: 'Travel & Aviation',
    href: Constants.PAGES.AIRLINE_BOOKING,
    color: '#2563EB',
    bg: 'rgba(37,99,235,0.08)',
    icon: Plane,
    details: ['GDS Booking Platforms', 'Airline Reservation Systems', 'Fare & Ancillary Management', 'Loyalty Programmes', 'Operations Dashboards', 'NDC Integrations'],
  },
  {
    title: 'Legal & Compliance',
    href: Constants.PAGES.AI_LEGAL_WORKSPACE,
    color: '#7C3AED',
    bg: 'rgba(124,58,237,0.08)',
    icon: Scale,
    details: ['AI Document Analysis', 'Case & Matter Workflows', 'Deadline Tracking', 'Client Portals', 'Contract Intelligence', 'Compliance Reporting'],
  },
  {
    title: 'Finance & Banking',
    href: Constants.PAGES.PAYMENT_AUTOMATION,
    color: '#0F8B83',
    bg: 'rgba(15,139,131,0.08)',
    icon: Landmark,
    details: ['Payment Automation', 'Billing & Reconciliation', 'Risk & Fraud Analytics', 'Open Banking APIs', 'Regulatory Compliance', 'Reporting Dashboards'],
  },
  {
    title: 'Healthcare',
    href: '/industries',
    color: '#E11D48',
    bg: 'rgba(225,29,72,0.08)',
    icon: HeartPulse,
    details: ['Patient Portals', 'Clinical Workflows', 'Secure Health Data', 'Telehealth Integrations', 'Appointment Management', 'Compliance & Audit'],
  },
  {
    title: 'Retail & E-commerce',
    href: '/industries',
    color: '#FF6A3D',
    bg: 'rgba(255,106,61,0.08)',
    icon: ShoppingBag,
    details: ['Scalable Storefronts', 'Order & Inventory Management', 'Personalisation & AI Search', 'Payment Integrations', 'Logistics & Fulfilment', 'Commerce Analytics'],
  },
  {
    title: 'Manufacturing',
    href: '/industries',
    color: '#DB2777',
    bg: 'rgba(219,39,119,0.08)',
    icon: Factory,
    details: ['IoT & Telemetry', 'Supply Chain Visibility', 'Production Planning', 'Quality Management', 'Predictive Maintenance', 'ERP Integrations'],
  },
];

const SOLUTIONS_MENU: SolutionEntry[] = [
  {
    title: 'Digital Solutions',
    href: Constants.PAGES.SOLUTIONS,
    color: '#E11D48',
    bg: 'rgba(225,29,72,0.08)',
    icon: Bot,
    details: ['Customer Portals', 'Workflow Automation', 'Data & Analytics Dashboards', 'Secure Data Management', 'Third-Party Integrations', 'Reporting & Compliance'],
    desc: 'Custom software to improve customer experience and operational efficiency.',
  },
  {
    title: 'HR Management Systems',
    href: Constants.PAGES.SOLUTIONS,
    color: '#2563EB',
    bg: 'rgba(37,99,235,0.08)',
    icon: UserCog,
    details: ['Employee Management', 'Recruitment & Onboarding', 'Time & Attendance', 'Leave & Holiday Management', 'Employee Experience', 'Reporting & Analytics'],
    desc: 'People platform for effective employee management and compliance.',
  },
  {
    title: 'Launching New Products',
    href: '/services/custom-development',
    color: '#0F8B83',
    bg: 'rgba(15,139,131,0.08)',
    icon: Rocket,
    details: ['Product Discovery', 'UX & Prototyping', 'MVP Development', 'Architecture & Engineering', 'Product Launch', 'Iterative Improvement'],
    desc: 'Design, prototype, and deliver beloved products for your users.',
  },
  {
    title: 'Legacy Software Modernization',
    href: Constants.PAGES.MIGRATE_TO_AZURE,
    color: '#7C3AED',
    bg: 'rgba(124,58,237,0.08)',
    icon: RefreshCw,
    details: ['Legacy Assessment', 'Cloud Migration', 'Application Refactoring', 'API Modernization', 'Database Modernization', 'DevOps Enablement'],
    desc: 'Modernize and innovate on critical business applications.',
  },
];

function Navbar() {
  const pathname = usePathname();
  const [openSide, setOpenSide] = useState(false);
  const [slideMenu, setSlideMenu] = useState(false);
  const [activeNav, setActiveNav] = useState<string>('');
  const [navHidden, setNavHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hamburgerRipple, setHamburgerRipple] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSolution, setActiveSolution] = useState(1); // default: HR Management Systems
  const [activeIndustry, setActiveIndustry] = useState(0); // default: Travel & Aviation
  const [allPosts, setAllPosts] = useState<IPost[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchPanelRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastScrollY = useRef(0);
  const isScrolling = useRef(false);

  const navH = 76; // matches the nav bar's h-[76px] — keeps the mega menu/search panel flush with no gap or overlap

  const isAuthPage = pathname === '/login' || pathname === '/sign-up';
  // Light nav (Fresha-style): transparent over light heroes, frosted white on scroll.
  const lightNav = true;

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;
      if (Math.abs(diff) > 2) setSlideMenu(false);
      if (diff > 4 && currentY > 60) {
        setNavHidden(true);
      } else if (diff < -4 || currentY < 60) {
        setNavHidden(false);
      }
      setScrolled(currentY > 60);
      lastScrollY.current = currentY;
      isScrolling.current = true;
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
      scrollTimer.current = setTimeout(() => { isScrolling.current = false; }, 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setSlideMenu(false);
    setOpenSide(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
      if (allPosts.length === 0) {
        fetch('/blogs.json')
          .then(r => r.json())
          .then((data: IPost[]) =>
            setAllPosts(data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()))
          )
          .catch(() => {});
      }
    } else {
      setSearchQuery('');
    }
  }, [searchOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSearchOpen(false); };
    const onClickOutside = (e: MouseEvent) => {
      if (searchPanelRef.current && !searchPanelRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    };
    if (searchOpen) {
      document.addEventListener('keydown', onKey);
      document.addEventListener('mousedown', onClickOutside);
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, [searchOpen]);

  useEffect(() => {
    if (!slideMenu) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSlideMenu(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [slideMenu]);

  const openMenu = (title = '') => {
    if (isScrolling.current) return;
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (title) setActiveNav(title);
    setSlideMenu(true);
  };

  const closeMenu = () => {
    closeTimer.current = setTimeout(() => setSlideMenu(false), 150);
  };

  if (isAuthPage) return null;

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-[999] transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${navHidden || openSide ? '-translate-y-full' : 'translate-y-0'}`}
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >

      <style>{`
        :root { --nc-navh: 76px; }
        @media (max-width: 767px) { :root { --nc-navh: 60px; } }
      `}</style>

      {/* ── Full-width nav bar ── */}
      <nav className={`w-full flex items-center justify-between px-6 max-md:px-5 h-[76px] max-md:h-auto max-md:py-2 max-md:border-b-2 max-md:border-[#E1E6E8] max-md:shadow-none max-md:backdrop-blur-none transition-colors duration-300 ${
        lightNav
          ? scrolled
            ? 'bg-white/90 backdrop-blur-xl'
            : 'bg-transparent'
          : scrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_32px_rgba(0,0,0,0.35)]'
          : 'bg-[#0a0a0a] border-b border-white/[0.06]'
      } max-md:!bg-white`}>
        <div className="max-w-[1240px] mx-auto w-full flex items-center justify-between">

        {/* Logo */}
        <div
          className="shrink-0 cursor-pointer px-3 py-1.5 rounded-xl max-md:px-0"
          onClick={() => setSlideMenu(false)}
        >
          <Logo isInvert={!lightNav} animated={false} className="!h-8 max-md:!h-7" />
        </div>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-7">
          {pages.map((item) => {
            const isOpen = slideMenu && activeNav === item.title;
            const isParentActive = !!item.children?.some(
              (col) => col.children?.some((c) => !c.soon && c.url === pathname)
            );
            return (
            <li
              key={item.url + item.title}
              className="relative flex items-center"
              onPointerEnter={(e) => {
                if (e.pointerType !== 'mouse') return;
                if (item.children) openMenu(item.title);
                else closeMenu();
              }}
              onPointerLeave={(e) => { if (e.pointerType === 'mouse') closeMenu(); }}
            >
              {item.soon ? (
                <CoomingSoon>
                  <span style={MONO} className="px-3 py-1.5 text-sm text-white/25 cursor-default select-none">
                    {item.title}
                  </span>
                </CoomingSoon>
              ) : item.title === 'Schedule a call' ? (
                <Link
                  href={item.url}
                  onClick={() => setSlideMenu(false)}
                  className="flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#2563EB] px-9 text-[14px] font-semibold text-white shadow-[0_6px_16px_rgba(37,99,235,0.16)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:shadow-[0_10px_24px_rgba(37,99,235,0.28)] active:translate-y-0 active:shadow-[0_6px_16px_rgba(37,99,235,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]/60 focus-visible:ring-offset-2"
                  style={MONO}
                >
                  Let&apos;s talk
                </Link>
              ) : item.children ? (
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                  onClick={() => {
                    if (item.title === 'Solutions') {
                      setSlideMenu(false);
                      router.push(item.url);
                      return;
                    }
                    if (isOpen) { setSlideMenu(false); return; }
                    if (closeTimer.current) clearTimeout(closeTimer.current);
                    setActiveNav(item.title);
                    setSlideMenu(true);
                  }}
                  style={MONO}
                  className={`relative flex items-center gap-1 py-1.5 text-[14px] font-medium transition-colors duration-[180ms] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a0e1a]/25 ${
                    lightNav
                      ? isOpen || isParentActive
                        ? 'text-[#111111]'
                        : 'text-[#4B5563] hover:text-[#111111]'
                      : isOpen || isParentActive
                      ? 'text-white bg-white/[0.06]'
                      : 'text-white/70 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  {item.title}
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="flex items-center"
                  >
                    <CaretDownIcon className="relative top-px h-3.5 w-3.5 text-[#9CA3AF]" aria-hidden />
                  </motion.span>
                  {(isParentActive || isOpen) && (
                    <span className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full ${lightNav ? (isOpen ? 'bg-[#2563EB]' : 'bg-[#111827]') : 'bg-white'}`} />
                  )}
                </button>
              ) : (
                <Link
                  href={item.url}
                  onClick={() => setSlideMenu(false)}
                  aria-current={pathname === item.url ? 'page' : undefined}
                  style={MONO}
                  className={`relative flex items-center gap-1 py-1.5 text-[14px] font-medium transition-colors duration-[180ms] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a0e1a]/25 ${
                    lightNav
                      ? pathname === item.url
                        ? 'text-[#111111]'
                        : 'text-[#4B5563] hover:text-[#111111]'
                      : pathname === item.url
                      ? 'text-white'
                      : 'text-white/70 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  {item.title}
                  {pathname === item.url && (
                    <span className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full ${lightNav ? 'bg-[#111827]' : 'bg-white'}`} />
                  )}
                </Link>
              )}
            </li>
            );
          })}
        </ul>

        {/* Right: Search + Login + Hamburger */}
        <div className="flex items-center gap-3 max-md:gap-2 shrink-0">
          {/* AI Mode search toggle — Google-style gradient pill. Hidden on mobile; lives inside the mobile menu instead. */}
          <button
            onClick={() => { setSearchOpen(!searchOpen); setSlideMenu(false); setOpenSide(false); }}
            aria-label="Search"
            aria-expanded={searchOpen}
            className="hidden md:flex h-10 items-center gap-2 rounded-full border border-[#2563EB] bg-white px-[18px] transition-colors duration-200 hover:bg-[#F8FAFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]/40"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
              <defs>
                <linearGradient id="ai-mode-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#1e4fd6" />
                </linearGradient>
              </defs>
              <path fill="url(#ai-mode-grad)" d="M12 0c0 6.627-5.373 12-12 12 6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12Z" />
            </svg>
            <span className="text-[14px] font-medium text-[#111827]">AI Mode</span>
          </button>

          <Link
            href="/login"
            style={MONO}
            className={`hidden lg:flex items-center gap-1.5 text-[14px] font-medium transition-colors duration-[180ms] rounded-lg px-2 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a0e1a]/25 ${lightNav ? 'text-[#4B5563] hover:text-[#111111]' : 'text-white/60 hover:text-white/90'}`}
          >
            <svg width={15} height={15}>
              <use href="/icons/all-icons.svg#icon-login" />
            </svg>
            Login
          </Link>

          {/* Hamburger */}
          <motion.button
            className={`w-10 h-10 max-md:w-11 max-md:h-11 rounded-full max-md:rounded-none lg:hidden flex flex-col items-center justify-center gap-[6px] max-md:gap-[7px] transition-colors px-3 max-md:px-0 relative overflow-hidden max-md:!bg-transparent ${lightNav ? 'bg-[#2563EB]/[0.06] hover:bg-[#2563EB]/[0.12]' : 'bg-white/[0.07] hover:bg-white/[0.12]'}`}
            whileTap={{ scale: 0.82 }}
            transition={{ type: 'spring', stiffness: 520, damping: 22 }}
            onClick={() => {
              setOpenSide(!openSide);
              setHamburgerRipple(true);
              setTimeout(() => setHamburgerRipple(false), 380);
            }}
            aria-label="Toggle menu"
          >
            <AnimatePresence>
              {hamburgerRipple && (
                <motion.span
                  key="ripple"
                  className="absolute inset-0 rounded-full pointer-events-none"
                  initial={{ scale: 0, opacity: 0.55 }}
                  animate={{ scale: 2.8, opacity: 0 }}
                  exit={{}}
                  transition={{ duration: 0.38, ease: 'easeOut' }}
                  style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.55) 0%, transparent 65%)' }}
                />
              )}
            </AnimatePresence>
            {openSide ? (
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className={`relative z-[1] max-md:h-[18px] max-md:w-[18px] ${lightNav ? 'text-[#0a0e1a]' : 'text-white'}`}>
                <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
              </svg>
            ) : (
              <>
                <span className={`block h-[1.5px] max-md:h-[2px] w-full max-md:w-[27px] rounded-full max-md:rounded-none transition-all relative z-[1] ${lightNav ? 'bg-[#0a0e1a]' : 'bg-white'}`} />
                <span className={`block h-[1.5px] max-md:h-[2px] w-[65%] max-md:w-[27px] rounded-full max-md:rounded-none transition-all self-start max-md:self-center relative z-[1] ${lightNav ? 'bg-[#0a0e1a]' : 'bg-white'}`} />
              </>
            )}
          </motion.button>
        </div>
        </div>
      </nav>

    </header>

    {/* ── Search panel ── */}
    <AnimatePresence>
      {searchOpen && (
        <>
          {/* Blurred backdrop */}
          <motion.div
            key="search-backdrop"
            className="fixed left-0 right-0 bottom-0 z-[997]"
            style={{
              top: 'var(--nc-navh)',
              background: 'rgba(10,14,26,0.28)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={() => setSearchOpen(false)}
          />
          <motion.div
            key="search-panel"
            ref={searchPanelRef}
            className="fixed left-0 right-0 z-[998]"
            style={{ top: 'var(--nc-navh)', transformOrigin: 'top center' }}
            initial={{ opacity: 0, y: -28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 320, damping: 30, mass: 0.85 }}
          >
          <div
            className="w-full py-12 px-5 sm:px-8 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 40%, #edfaf4 100%)',
              borderBottom: '1px solid rgba(0,0,0,0.06)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
            }}
          >
            {/* Right green glow */}
            <div className="absolute top-0 right-0 w-[500px] h-full pointer-events-none" style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(52,211,153,0.18) 0%, transparent 65%)' }} />

            <div className="relative max-w-[1200px] mx-auto flex flex-col gap-4">
              {/* Input row — Google "AI Mode" animated gradient ring */}
              <div className="ai-search-wrap">
                <div className="ai-search-inner relative flex items-center">
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && searchQuery.trim()) {
                        router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
                        setSearchOpen(false);
                      }
                    }}
                    placeholder="Add your search term"
                    className="w-full bg-transparent py-5 pl-8 pr-[84px] outline-none text-[16px] text-[#0a0e1a] placeholder:text-[#aaaaaa] sm:pr-[200px]"
                    style={{ border: 'none' }}
                  />
                  <button
                    onClick={() => {
                      if (searchQuery.trim()) {
                        router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
                        setSearchOpen(false);
                      }
                    }}
                    className="absolute right-2 flex items-center gap-2 text-white text-sm font-semibold px-6 py-3.5 transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
                    style={{ background: '#0a0e1a', borderRadius: 50 }}
                  >
                    <span className="hidden sm:inline">Find results</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Live results */}
              {searchQuery.trim().length > 0 && (() => {
                const q = searchQuery.toLowerCase();
                const pageHits = SITE_PAGES.filter(p =>
                  p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)
                ).slice(0, 6);
                const hits = allPosts.filter(p =>
                  p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)
                ).slice(0, 5);
                return (pageHits.length > 0 || hits.length > 0) ? (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.99 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="max-h-[62vh] overflow-y-auto thin-scroll rounded-2xl"
                    style={{ background: 'rgba(255,255,255,0.97)', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 12px 48px rgba(0,0,0,0.12)' }}
                  >
                    {/* AI Overview entry — full experience lives on /search */}
                    <button
                      onClick={() => { router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`); setSearchOpen(false); }}
                      className="w-full flex items-center gap-4 px-5 py-3.5 text-left transition-colors border-b border-black/[0.05]"
                      style={{ background: 'linear-gradient(90deg, rgba(66,133,244,0.05) 0%, rgba(155,114,203,0.05) 50%, rgba(37,99,235,0.05) 100%)' }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" className="shrink-0" aria-hidden>
                        <defs>
                          <linearGradient id="nav-ai-star" x1="0" y1="0" x2="24" y2="24">
                            <stop offset="0%" stopColor="#4285f4" />
                            <stop offset="55%" stopColor="#9b72cb" />
                            <stop offset="100%" stopColor="#2563EB" />
                          </linearGradient>
                        </defs>
                        <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z" fill="url(#nav-ai-star)" />
                      </svg>
                      <div className="min-w-0">
                        <p
                          className="text-[13.5px] font-semibold leading-snug"
                          style={{
                            background: 'linear-gradient(100deg, #4285f4 0%, #9b72cb 45%, #2563EB 100%)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            color: 'transparent',
                          }}
                        >
                          AI Overview for &ldquo;{searchQuery.trim()}&rdquo;
                        </p>
                        <p className="text-[11.5px] text-[#0a0e1a]/45 mt-0.5 leading-snug">Get an AI-generated answer with sources</p>
                      </div>
                      <svg className="shrink-0 ml-auto w-3.5 h-3.5 text-[#9b72cb]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6"/>
                      </svg>
                    </button>
                    {pageHits.length > 0 && (
                      <>
                        <p className="px-5 pt-3 pb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0a0e1a]/35">Pages</p>
                        {pageHits.map((page) => (
                          <button
                            key={page.url}
                            onClick={() => { router.push(page.url); setSearchOpen(false); }}
                            className="w-full flex items-center gap-4 px-5 py-3 text-left hover:bg-[#f5f5f5] transition-colors"
                          >
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-black/[0.06] bg-[#fafafa] text-[#0a0e1a]/55">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>
                              </svg>
                            </span>
                            <div className="min-w-0 flex-1">
                              <p className="text-[13.5px] font-semibold text-[#0a0e1a] leading-snug truncate">{page.title}</p>
                              <p className="text-[11.5px] text-[#0a0e1a]/45 mt-0.5 leading-snug line-clamp-1">{page.desc}</p>
                            </div>
                            <svg className="shrink-0 w-3.5 h-3.5 text-[#cccccc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M9 18l6-6-6-6"/>
                            </svg>
                          </button>
                        ))}
                      </>
                    )}
                    {hits.length > 0 && (
                      <p className="px-5 pt-3 pb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0a0e1a]/35 border-t border-black/[0.05]">Articles</p>
                    )}
                    {hits.map((post, i) => (
                      <button
                        key={post.id}
                        onClick={() => { router.push(`/knowledge-base/${post.id}`); setSearchOpen(false); }}
                        className={`w-full flex items-start gap-4 px-5 py-3.5 text-left hover:bg-[#f5f5f5] transition-colors ${i > 0 ? 'border-t border-black/[0.05]' : ''}`}
                      >
                        <div className="w-5 h-5 mt-0.5 shrink-0 text-[#aaaaaa]">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                          </svg>
                        </div>
                        <div className="min-w-0">
                          <p className="text-[13.5px] font-semibold text-[#0a0e1a] leading-snug truncate">{post.title}</p>
                          <p className="text-[11.5px] text-[#0a0e1a]/45 mt-0.5 leading-snug line-clamp-1">{post.desc}</p>
                        </div>
                        <svg className="shrink-0 mt-1 w-3.5 h-3.5 text-[#cccccc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 18l6-6-6-6"/>
                        </svg>
                      </button>
                    ))}
                    <div className="px-5 py-3 border-t border-black/[0.05]" style={{ background: 'rgba(248,249,255,0.80)' }}>
                      <button
                        onClick={() => { router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`); setSearchOpen(false); }}
                        className="text-[12px] font-medium text-[#0a0e1a] hover:opacity-75 transition-opacity"
                      >
                        See all results for &ldquo;{searchQuery}&rdquo; →
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <p className="text-sm text-[#0a0e1a]/40 px-2">No results for &ldquo;{searchQuery}&rdquo;</p>
                );
              })()}
            </div>
          </div>
        </motion.div>
        </>
      )}
    </AnimatePresence>

    {/* ── Mega menu dropdown — full-width layer attached to the header, desktop only ── */}
    <AnimatePresence>
        {slideMenu && (
          <>
            <motion.div
              key="megamenu"
              className="mega-menu-full-width fixed left-0 right-0 z-[998] hidden overflow-visible rounded-none lg:block"
              style={{
                top: navH,
                background: '#ffffff',
                borderTop: '1px solid #ECEDEF',
                borderBottom: '1px solid #E5E7EB',
                boxShadow: '0 14px 30px rgba(15,23,42,0.06)',
              }}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              onMouseEnter={() => openMenu()}
              onMouseLeave={closeMenu}
            >
              <div className="mega-menu-inner mx-auto min-h-[260px] w-full max-w-[1180px] px-6 font-switzer">
                {activeNav === 'Industries' ? (
                  /* Industries — compact 3-part layout: label | 2×3 grid | detail panel */
                  <div className="grid grid-cols-[150px_minmax(400px,1fr)_270px] lg:grid-cols-[160px_minmax(520px,1fr)_320px]">

                    {/* Left — section label */}
                    <div className="px-6 pt-8">
                      <span className="mb-2 block h-[2px] w-8 rounded-full bg-[#2563EB]" aria-hidden="true" />
                      <p className="m-0 text-[16px] font-semibold text-[#111827]">Industries</p>
                    </div>

                    {/* Center — 2×3 industries grid */}
                    <div className="px-[18px] pb-[18px] pt-8">
                      <div className="grid grid-cols-2 gap-3.5">
                        {INDUSTRIES_MENU.map((s, i) => {
                          const isActiveCard = activeIndustry === i;
                          const SIcon = s.icon;
                          return (
                            <Link
                              key={s.title}
                              href={s.href}
                              onClick={() => setSlideMenu(false)}
                              onMouseEnter={() => setActiveIndustry(i)}
                              onFocus={() => setActiveIndustry(i)}
                              className={`flex min-h-[58px] cursor-pointer items-center gap-3.5 rounded-md border px-3.5 py-2.5 transition-all duration-[180ms] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]/40 ${
                                isActiveCard
                                  ? 'border-[#DDE7FA] bg-[#F7F9FD]'
                                  : 'border-transparent bg-[#FAFAF9] hover:border-[#E8EAF0] hover:bg-[#F6F7F9]'
                              }`}
                            >
                              <span
                                className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[6px]"
                                style={{ background: s.bg }}
                              >
                                <SIcon className="h-[18px] w-[18px]" style={{ color: s.color }} strokeWidth={1.8} aria-hidden="true" />
                              </span>
                              <span className="text-[13.5px] font-medium leading-[1.2] text-[#111827]">{s.title}</span>
                            </Link>
                          );
                        })}
                      </div>

                      {/* All Industries */}
                      <Link
                        href="/industries"
                        onClick={() => setSlideMenu(false)}
                        className="mt-3.5 flex h-[56px] items-center justify-between rounded-md bg-[#FAFAF9] px-4 text-[13px] font-semibold text-[#111827] transition-colors duration-[180ms] hover:bg-[#F4F6F8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]/40"
                      >
                        All Industries
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>

                    {/* Right — contextual detail panel */}
                    <div className="border-l border-[#E3E6EA] bg-white px-8 py-8 lg:px-[42px]">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeIndustry}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.16, ease: 'easeOut' }}
                        >
                          <p className="m-0 mb-4 text-[14px] font-medium text-[#1C1F24]">
                            {INDUSTRIES_MENU[activeIndustry].title}
                          </p>
                          <div className="mb-6 h-px w-full bg-[#E4E7EB]" />
                          <ul className="m-0 flex list-disc flex-col gap-1.5 p-0 pl-[18px] text-[13px] leading-[1.45] text-[#484D56]">
                            {INDUSTRIES_MENU[activeIndustry].details.map((d) => (
                              <li key={d}>{d}</li>
                            ))}
                          </ul>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                  </div>
                ) : (
                  /* Solutions — compact 3-part layout: label | 2×2 grid | detail panel */
                  <div className="grid grid-cols-[150px_minmax(400px,1fr)_270px] lg:grid-cols-[160px_minmax(520px,1fr)_320px]">

                    {/* Left — section label */}
                    <div className="px-6 pt-8">
                      <span className="mb-2 block h-[2px] w-8 rounded-full bg-[#2563EB]" aria-hidden="true" />
                      <p className="m-0 text-[16px] font-semibold text-[#111827]">Solutions</p>
                    </div>

                    {/* Center — 2×2 solutions grid */}
                    <div className="px-[18px] pb-[18px] pt-8">
                      <div className="grid grid-cols-2 gap-3.5">
                        {SOLUTIONS_MENU.map((s, i) => {
                          const isActiveCard = activeSolution === i;
                          const SIcon = s.icon;
                          return (
                            <Link
                              key={s.title}
                              href={s.href}
                              onClick={() => setSlideMenu(false)}
                              onMouseEnter={() => setActiveSolution(i)}
                              onFocus={() => setActiveSolution(i)}
                              className={`flex min-h-[64px] cursor-pointer items-center gap-3.5 rounded-md border px-3.5 py-3 transition-all duration-[180ms] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]/40 ${
                                isActiveCard
                                  ? 'border-[#DDE7FA] bg-[#F7F9FD]'
                                  : 'border-transparent bg-[#FAFAF9] hover:border-[#E8EAF0] hover:bg-[#F6F7F9]'
                              }`}
                            >
                              <span
                                className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[6px]"
                                style={{ background: s.bg }}
                              >
                                <SIcon className="h-[18px] w-[18px]" style={{ color: s.color }} strokeWidth={1.8} aria-hidden="true" />
                              </span>
                              <span className="text-[13.5px] font-medium leading-[1.2] text-[#111827]">{s.title}</span>
                            </Link>
                          );
                        })}
                      </div>

                      {/* All Solutions */}
                      <Link
                        href={Constants.PAGES.SOLUTIONS}
                        onClick={() => setSlideMenu(false)}
                        className="mt-3.5 flex h-[56px] items-center justify-between rounded-md bg-[#FAFAF9] px-4 text-[13px] font-semibold text-[#111827] transition-colors duration-[180ms] hover:bg-[#F4F6F8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]/40"
                      >
                        All Solutions
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>

                    {/* Right — contextual detail panel */}
                    <div className="border-l border-[#E3E6EA] bg-white px-8 py-8 lg:px-[42px]">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeSolution}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.16, ease: 'easeOut' }}
                        >
                          <p className="m-0 mb-4 text-[14px] font-medium text-[#1C1F24]">
                            {SOLUTIONS_MENU[activeSolution].title}
                          </p>
                          <div className="mb-6 h-px w-full bg-[#E4E7EB]" />
                          <ul className="m-0 flex list-disc flex-col gap-1.5 p-0 pl-[18px] text-[13px] leading-[1.45] text-[#484D56]">
                            {SOLUTIONS_MENU[activeSolution].details.map((d) => (
                              <li key={d}>{d}</li>
                            ))}
                          </ul>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                  </div>
                )}
              </div>
            </motion.div>

            {/* Backdrop */}
            <motion.div
              key="megamenu-backdrop"
              className="fixed left-0 right-0 bottom-0 bg-black/10 z-[997]"
              style={{ top: navH }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSlideMenu(false)}
            />
          </>
        )}
    </AnimatePresence>

    {/* ── Mobile navigation — brand new, built from scratch ── */}
    <MobileNavigationV2
      open={openSide}
      onClose={() => setOpenSide(false)}
      onOpenSearch={() => { setSearchOpen(true); setOpenSide(false); }}
    />
    </>
  );
}

export default Navbar;
