'use client';

import { Link } from 'react-transition-progress/next';
import { Constants } from '@/Constants';
import { PlusIcon, MinusIcon, CaretDownIcon } from '@radix-ui/react-icons';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import CoomingSoon from '../ui/CoomingSoon';
import Logo from '../ui/Logo';
import { NavMenuItemCard, NavMenuItemDisabled } from './NavMenuItem';
import {
  Code2, Palette, CloudCog, CloudUpload,
  Bot, Database, Boxes, Workflow,
  Plane, Scale, Landmark, HeartPulse, ShoppingBag, Factory,
  BookOpen, GraduationCap, Library, Building2,
  GitBranch, Sparkles,
  Users,
  LucideIcon,
} from 'lucide-react';

type Pages = {
  url: string;
  title: string;
  desc?: string;
  soon?: true;
  icon?: LucideIcon;
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
          { url: '/services/custom-development',               title: 'Custom Development', desc: 'Tailored software for your workflows',  icon: Code2,       color: PALETTE.blue   },
          { url: '/services/design',                           title: 'Design',             desc: 'Interfaces your users will love',        icon: Palette,     color: PALETTE.purple },
          { url: Constants.PAGES.CLOUD_SOFTWARE_ARCHITECTURE,  title: 'Cloud Architecture', desc: 'Scalable infrastructure design',         icon: CloudCog,    color: PALETTE.teal   },
          { url: Constants.PAGES.MIGRATE_TO_AZURE,             title: 'Migrate to Azure',   desc: 'Low-risk migration to the cloud',        icon: CloudUpload, color: PALETTE.green  },
        ],
      },
      {
        url: '/services/ai-agents-rag', title: 'AI & Data', children: [
          { url: '/services/ai-agents-rag',                    title: 'AI Agents & RAG',   desc: 'Intelligent automation & LLMs',          icon: Bot,         color: PALETTE.teal   },
          { url: Constants.PAGES.DATA_LIFECYCLE_MANAGEMENT,    title: 'Data Lifecycle',    desc: 'Raw data to live dashboards',            icon: Database,    color: PALETTE.orange },
          { url: Constants.PAGES.CLOUD_NATIVE_SD,              title: 'Cloud Native Dev',  desc: 'Kubernetes & microservices',             icon: Boxes,       color: PALETTE.blue   },
          { url: Constants.PAGES.DEVOPS_ON_AZURE,              title: 'DevOps on Azure',   desc: 'CI/CD & infrastructure-as-code',         icon: Workflow,    color: PALETTE.green  },
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

const MONO: React.CSSProperties = { fontFamily: "'JetBrains Mono', monospace" };


function Navbar() {
  const pathname = usePathname();
  const [openSide, setOpenSide] = useState(false);
  const [slideMenu, setSlideMenu] = useState(false);
  const [activeNav, setActiveNav] = useState<string>('');
  const [isExpanded, setExpanded] = useState<string | null>(null);
  const [navHidden, setNavHidden] = useState(false);
  const [hamburgerRipple, setHamburgerRipple] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [allPosts, setAllPosts] = useState<IPost[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchPanelRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastScrollY = useRef(0);
  const isScrolling = useRef(false);

  const navH = 72;

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
    setExpanded(null);
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

  const openMenu = (title = '') => {
    if (isScrolling.current) return;
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (title) setActiveNav(title);
    setSlideMenu(true);
  };

  const closeMenu = () => {
    closeTimer.current = setTimeout(() => setSlideMenu(false), 150);
  };

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-[999] transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${navHidden || openSide ? '-translate-y-full' : 'translate-y-0'}`}
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >

      {/* ── Full-width nav bar ── */}
      <nav className={`w-full flex items-center justify-between px-5 sm:px-8 h-[76px] sm:h-[72px] transition-colors duration-300 ${
        pathname === '/'
          ? 'bg-transparent shadow-none'
          : pathname === '/schedule-call'
          ? 'bg-[#000000] border-b border-white/[0.08] shadow-[0_4px_32px_rgba(0,0,0,0.35)]'
          : 'bg-[#0a0e1a] border-b border-white/[0.08] shadow-[0_4px_32px_rgba(0,0,0,0.35)]'
      }`}>
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">

        {/* Logo */}
        <div
          className="shrink-0 cursor-pointer px-3 py-1.5 rounded-xl"
          style={{ background: 'linear-gradient(135deg, rgba(232,154,120,0.18) 0%, rgba(232,154,120,0.06) 60%, transparent 100%)' }}
          onClick={() => setSlideMenu(false)}
        >
          <Logo isInvert={pathname !== '/'} className="!h-13" />
        </div>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {pages.map((item) => (
            <li
              key={item.url + item.title}
              className="relative flex items-center"
              onMouseEnter={() => (item.children ? openMenu(item.title) : closeMenu())}
              onMouseLeave={closeMenu}
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
                  style={MONO}
                  className="flex items-center gap-2 bg-[#e89a78] hover:bg-[#d4836a] text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors whitespace-nowrap ml-2"
                >
                  Schedule a call
                </Link>
              ) : (
                <Link
                  href={item.url}
                  onClick={() => setSlideMenu(false)}
                  style={MONO}
                  className={`relative flex items-center gap-1 px-3 py-1.5 rounded-lg text-base font-medium transition-colors duration-150 ${
                    pathname === '/'
                      ? (!item.children && pathname === item.url)
                        ? 'text-[#0a0e1a]'
                        : 'text-[#0a0e1a]/70 hover:text-[#0a0e1a] hover:bg-black/[0.05]'
                      : (!item.children && pathname === item.url)
                      ? 'text-white'
                      : 'text-white/70 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  {item.title}
                  {item.children && (
                    <motion.span
                      animate={{ rotate: slideMenu ? 180 : 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                      className="flex items-center"
                    >
                      <CaretDownIcon className="relative top-px opacity-50" aria-hidden />
                    </motion.span>
                  )}
                  {!item.children && pathname === item.url && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[#e89a78]" />
                  )}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Right: Search + Login + Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Search icon */}
          <button
            onClick={() => { setSearchOpen(!searchOpen); setSlideMenu(false); setOpenSide(false); }}
            aria-label="Search"
            className={`flex w-9 h-9 items-center justify-center rounded-full transition-all duration-200 ${
              searchOpen
                ? 'bg-[#e89a78]/20 text-[#e89a78]'
                : pathname === '/' ? 'text-[#0a0e1a]/60 hover:text-[#0a0e1a] hover:bg-black/[0.06]' : 'text-white/60 hover:text-white hover:bg-white/[0.08]'
            }`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
          </button>

          <Link
            href="/login"
            style={MONO}
            className={`hidden lg:flex items-center gap-1.5 text-sm transition-colors ${pathname === '/' ? 'text-[#0a0e1a]/60 hover:text-[#0a0e1a]/90' : 'text-white/60 hover:text-white/90'}`}
          >
            <svg width={15} height={15}>
              <use href="/icons/all-icons.svg#icon-login" />
            </svg>
            Login
          </Link>

          {/* Hamburger */}
          <motion.button
            className={`w-11 h-11 rounded-full lg:hidden flex flex-col items-center justify-center gap-[6px] transition-colors px-3 relative overflow-hidden ${pathname === '/' ? 'bg-black/[0.07] hover:bg-black/[0.12]' : 'bg-white/[0.07] hover:bg-white/[0.12]'}`}
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
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className={`relative z-[1] ${pathname === '/' ? 'text-[#0a0e1a]' : 'text-white'}`}>
                <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
              </svg>
            ) : (
              <>
                <span className={`block h-[1.5px] w-full rounded-full transition-all relative z-[1] ${pathname === '/' ? 'bg-[#0a0e1a]' : 'bg-white'}`} />
                <span className={`block h-[1.5px] w-[65%] rounded-full transition-all self-start relative z-[1] ${pathname === '/' ? 'bg-[#0a0e1a]/60' : 'bg-white/60'}`} />
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
        <motion.div
          key="search-panel"
          ref={searchPanelRef}
          className="fixed left-0 right-0 z-[998]"
          style={{ top: navH }}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
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
              {/* Input row */}
              <div className="relative flex items-center">
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
                  className="w-full outline-none text-[16px] text-[#0a0e1a] placeholder:text-[#aaaaaa]"
                  style={{
                    background: '#F5F5F5',
                    borderRadius: 50,
                    border: 'none',
                    padding: '20px 200px 20px 32px',
                    boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.06)',
                  }}
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

              {/* Live results */}
              {searchQuery.trim().length > 0 && (() => {
                const q = searchQuery.toLowerCase();
                const hits = allPosts.filter(p =>
                  p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)
                ).slice(0, 5);
                return hits.length > 0 ? (
                  <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.90)', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
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
                  </div>
                ) : (
                  <p className="text-sm text-[#0a0e1a]/40 px-2">No articles found for &ldquo;{searchQuery}&rdquo;</p>
                );
              })()}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>

    {/* ── Mega menu dropdown ── */}
    <AnimatePresence>
        {slideMenu && (
          <>
            {/* Floating centered card */}
            <motion.div
              key="megamenu"
              className="fixed left-0 right-0 z-[998] px-5"
              style={{ top: navH }}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              onMouseEnter={() => openMenu()}
              onMouseLeave={closeMenu}
            >
              <div
                className="max-w-[1200px] mx-auto overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.72)",
                  backdropFilter: "blur(48px) saturate(200%)",
                  WebkitBackdropFilter: "blur(48px) saturate(200%)",
                  border: "1px solid rgba(255,255,255,0.90)",
                  borderRadius: 20,
                  boxShadow: "0 24px 64px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.98)",
                }}
              >
                {activeNav === 'Industries' ? (
                  <>
                    {/* Industries grid — 3 cols */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 p-6">
                      {pages.find(p => p.title === 'Industries')?.children?.[0]?.children?.map((item, j) => (
                        <NavMenuItemCard
                          key={j}
                          href={item.url}
                          title={item.title}
                          desc={item.desc}
                          icon={item.icon!}
                          color={item.color ?? PALETTE.blue}
                          onClick={() => setSlideMenu(false)}
                          compact
                        />
                      ))}
                    </div>
                    <div className="px-8 py-4 border-t border-black/[0.07] flex items-center justify-between" style={{ background: "rgba(255,255,255,0.40)" }}>
                      <p className="text-[13px] text-[#9A9A9A]">Need a tailored solution?</p>
                      <Link href={Constants.PAGES.SCHEDULE_CALL} onClick={() => setSlideMenu(false)} className="inline-flex items-center gap-2 text-[13px] font-medium text-[#e89a78] hover:text-[#d4836a] transition-colors">
                        Talk to us
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Solutions grid — 3 cols */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8 pb-6">
                      {pages[0].children?.map((col, i) => (
                        <div key={i} className="flex flex-col">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#9A9A9A] mb-4">{col.title}</p>
                          <ul className="flex flex-col gap-1">
                            {col.children?.map((item, j) => (
                              <li key={j}>
                                {item.soon ? (
                                  <CoomingSoon>
                                    <NavMenuItemDisabled
                                      title={item.title}
                                      desc={item.desc}
                                      icon={item.icon!}
                                      color={item.color ?? PALETTE.blue}
                                    />
                                  </CoomingSoon>
                                ) : (
                                  <NavMenuItemCard
                                    href={item.url}
                                    title={item.title}
                                    desc={item.desc}
                                    icon={item.icon!}
                                    color={item.color ?? PALETTE.blue}
                                    onClick={() => setSlideMenu(false)}
                                  />
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="px-8 py-4 border-t border-black/[0.07] flex items-center justify-between" style={{ background: "rgba(255,255,255,0.40)" }}>
                      <p className="text-[13px] text-[#9A9A9A]">Not sure where to start?</p>
                      <Link href={Constants.PAGES.SCHEDULE_CALL} onClick={() => setSlideMenu(false)} className="inline-flex items-center gap-2 text-[13px] font-medium text-[#e89a78] hover:text-[#d4836a] transition-colors">
                        Schedule a free call
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </motion.div>

            {/* Backdrop */}
            <motion.div
              key="megamenu-backdrop"
              className="fixed left-0 right-0 bottom-0 bg-black/10 backdrop-blur-[2px] z-[997]"
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

    {/* ── Mobile full-screen overlay ── */}
    <aside
      className={`${
        openSide ? 'translate-x-0 visible pointer-events-auto' : 'translate-x-full invisible pointer-events-none'
      } fixed inset-0 z-[100] bg-[#0a0e1a] transform transition-all duration-300 ease-in-out flex flex-col overflow-y-auto`}
      style={{ paddingTop: 'calc(env(safe-area-inset-top, 0px) + 12px)' }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between shrink-0 px-4 pb-2">
        <div
          className="flex items-center cursor-pointer px-3 py-1.5 rounded-xl"
          style={{ background: 'linear-gradient(135deg, rgba(232,154,120,0.18) 0%, rgba(232,154,120,0.06) 60%, transparent 100%)' }}
          onClick={() => setOpenSide(false)}
        >
          <Logo isInvert />
        </div>
        <motion.button
          className="w-12 h-12 rounded-full bg-[#e89a78]/15 border border-[#e89a78]/30 flex items-center justify-center text-[#e89a78] transition-all"
          whileTap={{ scale: 0.82, backgroundColor: 'rgba(232,154,120,0.30)' }}
          transition={{ type: 'spring', stiffness: 520, damping: 22 }}
          onClick={() => { setOpenSide(false); setExpanded(null); }}
          aria-label="Close menu"
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-[18px] h-[18px]" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </motion.button>
      </div>

      {/* Search bar */}
      <div className="px-4 pt-2 pb-4 shrink-0">
        <div className="relative flex items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter' && searchQuery.trim()) {
                router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
                setOpenSide(false);
              }
            }}
            placeholder="Search…"
            className="w-full outline-none text-[15px] text-white placeholder:text-white/30"
            style={{
              background: 'rgba(255,255,255,0.07)',
              borderRadius: 50,
              border: '1px solid rgba(255,255,255,0.10)',
              padding: '14px 56px 14px 20px',
            }}
          />
          <button
            onClick={() => {
              if (searchQuery.trim()) {
                router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
                setOpenSide(false);
              }
            }}
            className="absolute right-2 w-9 h-9 flex items-center justify-center rounded-full transition-all hover:bg-white/10"
            style={{ color: 'rgba(255,255,255,0.50)' }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Nav items */}
      <nav className="flex-1 flex flex-col justify-center pt-4 pb-4 px-4">
        <ul className="flex flex-col" style={{ gap: 36 }}>
          {pages
            .filter((item) => item.title !== 'Schedule a call')
            .map((item) => (
              <li key={item.url + item.title}>
                <div className="flex items-center gap-3">
                  {item.soon ? (
                    <CoomingSoon>
                      <span style={MONO} className="text-[32px] leading-none text-white/60 select-none">
                        {item.title}
                      </span>
                    </CoomingSoon>
                  ) : (
                    <Link
                      href={item.url}
                      onClick={() => { if (!item.children) setOpenSide(false); }}
                      style={MONO}
                      className="text-[32px] leading-none text-white/60 hover:text-[#e89a78] hover:translate-x-1.5 transition-all duration-200 inline-block"
                    >
                      {item.title}
                    </Link>
                  )}
                  {item.children && (
                    <motion.button
                      onClick={() => setExpanded(isExpanded === item.title ? null : item.title)}
                      className="w-8 h-8 rounded-xl bg-white/[0.07] hover:bg-white/[0.13] flex items-center justify-center shrink-0 transition-colors"
                      whileTap={{ scale: 0.82, backgroundColor: 'rgba(255,255,255,0.22)' }}
                      transition={{ type: 'spring', stiffness: 520, damping: 22 }}
                      aria-label={isExpanded === item.title ? 'Collapse' : 'Expand'}
                    >
                      {isExpanded === item.title
                        ? <MinusIcon className="size-3.5 text-[#e89a78] relative z-[1]" />
                        : <PlusIcon className="size-3.5 text-white/60 relative z-[1]" />}
                    </motion.button>
                  )}
                </div>

                {/* Sub-items accordion */}
                <AnimatePresence initial={false}>
                  {item.children && isExpanded === item.title && (
                    <motion.div
                      key={item.url + '-accordion'}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 flex flex-col gap-2.5">
                        {item.children.map((col) => (
                          <div
                            key={col.url + col.title}
                            className="rounded-2xl overflow-hidden"
                            style={{
                              background: 'rgba(255,255,255,0.05)',
                              border: '1px solid rgba(255,255,255,0.08)',
                              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
                            }}
                          >
                            <p className="px-4 pt-3 pb-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#e89a78]/60">
                              {col.title}
                            </p>
                            <ul className="flex flex-col pb-1.5">
                              {col.children?.map((child) => {
                                const Icon = child.icon;
                                return (
                                  <li key={child.url + child.title}>
                                    {child.soon ? (
                                      <CoomingSoon>
                                        <span className="flex items-center gap-3 px-4 py-2.5 opacity-30">
                                          {Icon && <Icon size={15} strokeWidth={1.5} className="shrink-0 text-white" />}
                                          <span className="text-sm text-white">{child.title}</span>
                                        </span>
                                      </CoomingSoon>
                                    ) : (
                                      <Link
                                        href={child.url}
                                        onClick={() => setOpenSide(false)}
                                        className="flex items-center gap-3 px-4 py-2.5 active:bg-white/[0.07] transition-colors"
                                      >
                                        {Icon && (
                                          <Icon size={15} strokeWidth={1.5} className="shrink-0 text-white/40" />
                                        )}
                                        <div className="flex flex-col min-w-0 flex-1">
                                          <span className="text-sm font-medium text-white/80 leading-snug">{child.title}</span>
                                          {child.desc && (
                                            <span className="text-[11px] text-white/30 leading-snug mt-0.5 truncate">{child.desc}</span>
                                          )}
                                        </div>
                                        <svg className="shrink-0 w-3 h-3 text-white/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                                          <path d="M9 18l6-6-6-6" />
                                        </svg>
                                      </Link>
                                    )}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
        </ul>
      </nav>

      {/* Bottom CTA */}
      <div className="shrink-0 px-4 pt-4 pb-6" style={{ paddingBottom: 'max(24px, env(safe-area-inset-bottom, 24px))' }}>
        <Link
          href={Constants.PAGES.SCHEDULE_CALL}
          onClick={() => setOpenSide(false)}
          className="w-full bg-[#e89a78] hover:bg-[#d4836a] text-white font-semibold text-base flex items-center justify-center gap-3 py-4 rounded-2xl shadow-lg shadow-[#e89a78]/20 hover:shadow-[#e89a78]/35 transition-all duration-200"
          style={MONO}
        >
          Schedule a free call
          <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </aside>
    </>
  );
}

export default Navbar;
