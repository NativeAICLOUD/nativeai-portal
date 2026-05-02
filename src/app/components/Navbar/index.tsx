'use client';

import { Link } from 'react-transition-progress/next';
import { Constants } from '@/Constants';
import { Transition } from '@headlessui/react';
import { PlusIcon, MinusIcon, CaretDownIcon } from '@radix-ui/react-icons';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import CoomingSoon from '../ui/CoomingSoon';
import Logo from '../ui/Logo';
import {
  Code2, Palette, CloudCog, CloudUpload,
  Bot, Database, Boxes, Workflow,
  Plane, Scale, Landmark, HeartPulse, ShoppingBag, Factory,
  BookOpen, GraduationCap, Library, Building2,
  LucideIcon,
} from 'lucide-react';

type Pages = {
  url: string;
  title: string;
  desc?: string;
  soon?: true;
  icon?: LucideIcon;
  children?: Pages[];
};

const pages: Pages[] = [
  {
    url: Constants.PAGES.SOLUTIONS, title: 'Solutions', children: [
      {
        url: Constants.PAGES.SOLUTIONS, title: 'Services', children: [
          { url: '/services/custom-development',            title: 'Custom Development',      desc: 'Tailored software for your workflows',  icon: Code2        },
          { url: '/services/design',                        title: 'Design',                  desc: 'Interfaces your users will love',        icon: Palette      },
          { url: Constants.PAGES.CLOUD_SOFTWARE_ARCHITECTURE, title: 'Cloud Architecture',   desc: 'Scalable infrastructure design',         icon: CloudCog     },
          { url: Constants.PAGES.MIGRATE_TO_AZURE,          title: 'Migrate to Azure',        desc: 'Low-risk migration to the cloud',        icon: CloudUpload  },
        ],
      },
      {
        url: '/services/ai-agents-rag', title: 'AI & Data', children: [
          { url: '/services/ai-agents-rag',                 title: 'AI Agents & RAG',         desc: 'Intelligent automation & LLMs',          icon: Bot          },
          { url: Constants.PAGES.DATA_LIFECYCLE_MANAGEMENT, title: 'Data Lifecycle',          desc: 'Raw data to live dashboards',            icon: Database     },
          { url: Constants.PAGES.CLOUD_NATIVE_SD,           title: 'Cloud Native Dev',        desc: 'Kubernetes & microservices',             icon: Boxes        },
          { url: Constants.PAGES.DEVOPS_ON_AZURE,           title: 'DevOps on Azure',         desc: 'CI/CD & infrastructure-as-code',         icon: Workflow     },
        ],
      },
      {
        url: Constants.PAGES.SOLUTIONS, title: 'Industries', children: [
          { url: Constants.PAGES.AIRLINE_BOOKING,           title: 'Travel & Aviation',       desc: 'GDS booking & airline platforms',        icon: Plane        },
          { url: Constants.PAGES.AI_LEGAL_WORKSPACE,        title: 'Legal & Compliance',      desc: 'AI for law firms & legal teams',         icon: Scale        },
          { url: Constants.PAGES.PAYMENT_AUTOMATION,        title: 'Finance & Banking',       desc: 'Payments, billing & reconciliation',     icon: Landmark     },
          { url: Constants.PAGES.SOLUTIONS,                 title: 'Healthcare',              desc: 'Secure data & clinical workflows',       icon: HeartPulse   },
          { url: Constants.PAGES.SOLUTIONS,                 title: 'Retail & E-commerce',     desc: 'Scalable storefronts & logistics',       icon: ShoppingBag  },
          { url: Constants.PAGES.SOLUTIONS,                 title: 'Manufacturing',           desc: 'IoT, automation & supply chain',         icon: Factory      },
        ],
      },
      {
        url: Constants.PAGES.ABOUT_US, title: 'Company', children: [
          { url: Constants.PAGES.CASE_STUDIES,              title: 'Case Studies',            desc: 'How we deliver for clients',             icon: BookOpen     },
          { url: Constants.PAGES.WORKSHOPS,                 title: 'Workshops',               desc: 'Azure & Kubernetes training',            icon: GraduationCap},
          { url: Constants.PAGES.KNOWLEDGE_BASE,            title: 'Knowledge Base',          desc: 'Guides and articles',                   icon: Library      },
          { url: Constants.PAGES.ABOUT_US,                  title: 'About Us',                desc: 'Our team and mission',                  icon: Building2    },
        ],
      },
    ],
  },
  { url: Constants.PAGES.WORKSHOPS,    title: 'Workshops'     },
  { url: Constants.PAGES.KNOWLEDGE_BASE, title: 'Knowledge base' },
  { url: Constants.PAGES.ABOUT_US,     title: 'About'         },
  { url: Constants.PAGES.SCHEDULE_CALL, title: 'Schedule a call' },
];

const MONO: React.CSSProperties = { fontFamily: "'JetBrains Mono', monospace" };


function Navbar() {
  const pathname = usePathname();
  const [openSide, setOpenSide] = useState(false);
  const [slideMenu, setSlideMenu] = useState(false);
  const [isExpanded, setExpanded] = useState<string | null>(null);
  const [navHidden, setNavHidden] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastScrollY = useRef(0);
  const isScrolling = useRef(false);

  const navH = 92;

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;
      if (diff > 4 && currentY > 60) {
        setNavHidden(true);
        setSlideMenu(false);
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

  const openMenu = () => {
    if (isScrolling.current) return;
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setSlideMenu(true);
  };

  const closeMenu = () => {
    closeTimer.current = setTimeout(() => setSlideMenu(false), 120);
  };

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-[999] pb-2 sm:px-3 sm:pb-3 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${navHidden && !openSide ? '-translate-y-full' : 'translate-y-0'}`}
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >

      {/* ── Floating nav pill ── */}
      <nav className="max-w-7xl mx-auto bg-[#0a0e1a] border border-white/[0.08] rounded-none sm:rounded-2xl flex items-center justify-between px-5 sm:px-6 h-[58px] sm:h-[72px] shadow-[0_4px_32px_rgba(0,0,0,0.35)] overflow-hidden">

        {/* Logo */}
        <div
          className="shrink-0 cursor-pointer px-3 py-1.5 rounded-xl"
          style={{ background: 'linear-gradient(135deg, rgba(232,154,120,0.18) 0%, rgba(232,154,120,0.06) 60%, transparent 100%)' }}
          onClick={() => setSlideMenu(false)}
        >
          <Logo isInvert />
        </div>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {pages.map((item) => (
            <li
              key={item.url + item.title}
              className="relative flex items-center"
              onMouseEnter={() => (item.children ? openMenu() : closeMenu())}
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
                    pathname === item.url
                      ? 'text-white'
                      : 'text-white/55 hover:text-white hover:bg-white/[0.06]'
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
                  {pathname === item.url && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[#e89a78]" />
                  )}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Right: Login + Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            style={MONO}
            className="hidden lg:flex items-center gap-1.5 text-white/40 hover:text-white/80 text-sm transition-colors"
          >
            <svg width={15} height={15}>
              <use href="/icons/all-icons.svg#icon-login" />
            </svg>
            Login
          </button>

          {/* Hamburger */}
          <button
            className="w-9 h-9 rounded-lg bg-white/[0.07] hover:bg-white/[0.12] lg:hidden flex flex-col items-center justify-center gap-[5px] transition-colors px-2"
            onClick={() => setOpenSide(!openSide)}
            aria-label="Toggle menu"
          >
            {openSide ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white">
                <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
              </svg>
            ) : (
              <>
                <span className="block h-[1.5px] w-full rounded-full bg-white transition-all" />
                <span className="block h-[1.5px] w-[65%] rounded-full bg-white/60 transition-all self-start" />
              </>
            )}
          </button>
        </div>
      </nav>

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
              onMouseEnter={openMenu}
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
                {/* Grid — 4 equal cols */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-10 pb-8">
                  {pages[0].children?.map((col, i) => (
                    <div key={i} className="flex flex-col">

                      {/* Column header — all identical */}
                      <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#9A9A9A] mb-5">
                        {col.title}
                      </p>

                      {/* Items — 20px gap between rows */}
                      <ul className="flex flex-col gap-5">
                        {col.children?.map((item, j) => {
                          const Icon = item.icon;
                          return (
                            <li key={j}>
                              {item.soon ? (
                                <CoomingSoon>
                                  <span className="flex items-start gap-3 opacity-35 cursor-default select-none">
                                    {Icon && <Icon size={20} strokeWidth={1.5} className="shrink-0 mt-[2px] text-[#0E0E12]" />}
                                    <div className="flex flex-col gap-[4px]">
                                      <span className="text-[14px] font-semibold leading-snug text-[#0E0E12]">{item.title}</span>
                                      {item.desc && <span className="text-[12.5px] leading-snug text-[#6B6B6B] line-clamp-2">{item.desc}</span>}
                                    </div>
                                  </span>
                                </CoomingSoon>
                              ) : (
                                <Link
                                  href={item.url}
                                  onClick={() => setSlideMenu(false)}
                                  className="group flex items-start gap-3 px-2.5 py-2 -mx-2.5 rounded-[10px] hover:bg-black/[0.05] transition-colors duration-150"
                                >
                                  {Icon && (
                                    <Icon
                                      size={20}
                                      strokeWidth={1.5}
                                      className="shrink-0 mt-[2px] text-[#0E0E12] group-hover:text-[#e89a78] transition-colors duration-150"
                                    />
                                  )}
                                  <div className="flex flex-col gap-[4px] min-w-0">
                                    <span className="text-[14px] font-semibold leading-snug text-[#0E0E12] group-hover:text-[#e89a78] transition-colors duration-150">
                                      {item.title}
                                    </span>
                                    {item.desc && (
                                      <span className="text-[12.5px] leading-snug text-[#6B6B6B] line-clamp-2">
                                        {item.desc}
                                      </span>
                                    )}
                                  </div>
                                </Link>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Bottom CTA row */}
                <div className="px-10 py-5 border-t border-black/[0.07] flex items-center justify-between" style={{ background: "rgba(255,255,255,0.40)" }}>
                  <p className="text-[13px] text-[#9A9A9A]">Not sure where to start?</p>
                  <Link
                    href={Constants.PAGES.SCHEDULE_CALL}
                    onClick={() => setSlideMenu(false)}
                    className="inline-flex items-center gap-2 text-[13px] font-medium text-[#e89a78] hover:text-[#d4836a] transition-colors"
                  >
                    Schedule a free call
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
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

    </header>

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
        <button
          className="w-10 h-10 rounded-xl bg-[#e89a78]/15 border border-[#e89a78]/30 flex items-center justify-center text-[#e89a78] hover:bg-[#e89a78]/25 hover:border-[#e89a78]/50 transition-all"
          onClick={() => { setOpenSide(false); setExpanded(null); }}
          aria-label="Close menu"
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-[18px] h-[18px]" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
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
                    <button
                      onClick={() => setExpanded(isExpanded === item.url ? null : item.url)}
                      className="w-7 h-7 rounded-lg bg-white/[0.07] hover:bg-white/[0.13] flex items-center justify-center transition-colors shrink-0"
                      aria-label={isExpanded === item.url ? 'Collapse' : 'Expand'}
                    >
                      {isExpanded === item.url
                        ? <MinusIcon className="size-3.5 text-[#e89a78]" />
                        : <PlusIcon className="size-3.5 text-white/40" />}
                    </button>
                  )}
                </div>

                {/* Sub-items accordion */}
                {item.children && (
                  <Transition
                    show={isExpanded === item.url}
                    appear
                    enter="transition-opacity duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="mt-5 pl-1 flex flex-col gap-5">
                      {item.children.map((col) => (
                        <div key={col.url + col.title}>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-[#e89a78] mb-2 flex items-center gap-1.5">
                            <span className="w-[3px] h-3 rounded-full bg-[#e89a78]" />
                            {col.title}
                          </p>
                          <ul className="flex flex-col gap-0.5">
                            {col.children?.map((child) => (
                              <li key={child.url + child.title}>
                                {child.soon ? (
                                  <CoomingSoon>
                                    <span className="flex items-center gap-2 px-2 py-1.5 text-sm text-[#555]">
                                      {child.title}
                                    </span>
                                  </CoomingSoon>
                                ) : (
                                  <Link
                                    href={child.url}
                                    onClick={() => setOpenSide(false)}
                                    className="flex items-start gap-2 px-2 py-1.5 group"
                                  >
                                    <span className="w-1 h-1 rounded-full bg-[#e89a78]/50 shrink-0 mt-[6px]" />
                                    <div className="flex flex-col">
                                      <span className="text-sm text-white/40 group-hover:text-[#e89a78] transition-colors leading-snug">
                                        {child.title}
                                      </span>
                                      {child.desc && (
                                        <span className="text-[11px] text-white/20 leading-snug mt-0.5">
                                          {child.desc}
                                        </span>
                                      )}
                                    </div>
                                  </Link>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </Transition>
                )}
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
