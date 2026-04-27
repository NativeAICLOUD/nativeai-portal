'use client';

import { Link } from 'react-transition-progress/next';
import { Constants } from '@/Constants';
import { Transition } from '@headlessui/react';
import { PlusIcon, MinusIcon, CaretDownIcon } from '@radix-ui/react-icons';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Each } from '../helpers/Each';
import CoomingSoon from '../ui/CoomingSoon';
import LanguageSwitch from '../ui/LanguageSwitch';
import Logo from '../ui/Logo';

type Pages = {
  url: string;
  title: string;
  soon?: true;
  children?: Pages[];
};

const pages: Pages[] = [
  {
    url: Constants.PAGES.SOLUTIONS, title: 'Solutions', children: [
      {
        url: Constants.PAGES.SOLUTIONS, title: 'Solutions', children: [
          { url: Constants.PAGES.MANAGED_SERVICES, title: 'Managed Services' },
          { url: Constants.PAGES.CLOUD_SOFTWARE_ARCHITECTURE, title: 'Cloud Software Architecture' },
          { url: Constants.PAGES.MIGRATE_TO_AZURE, title: 'Migrate to Azure' },
          { url: Constants.PAGES.CASE_STUDIES, title: 'Case Studies' },
        ],
      },
      {
        url: Constants.PAGES.DATA_LIFECYCLE_MANAGEMENT, title: 'Data Lifecycle Management', children: [
          { url: Constants.PAGES.MANAGED_SERVICES, title: 'Managed Services', soon: true },
        ],
      },
      {
        url: Constants.PAGES.CLOUD_NATIVE_SD, title: 'Cloud Native', children: [
          { url: Constants.PAGES.CLOUD_NATIVE_SD, title: 'Software Development' },
        ],
      },
    ],
  },
  { url: Constants.PAGES.WORKSHOPS, title: 'Workshops' },
  { url: Constants.PAGES.KNOWLEDGE_BASE, title: 'Knowledge base' },
  { url: Constants.PAGES.ABOUT_US, title: 'About us' },
  { url: Constants.PAGES.GET_IN_TOUCH, title: 'Get in touch' },
];

function Navbar() {
  const pathname = usePathname();
  const [openSide, setOpenSide] = useState(false);
  const [slideMenu, setSlideMenu] = useState(false);
  const [show, setShow] = useState(false);
  const [isExpanded, setExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 0);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setSlideMenu(true);
  };

  const closeMenu = () => {
    closeTimer.current = setTimeout(() => setSlideMenu(false), 120);
  };

  const navH = show ? 88 : 112;

  return (
    <header
      className={`navbar overflow-x-clip w-full fixed z-999 transition-all ${
        show
          ? 'h-[88px] before:bg-white before:absolute before:-left-4 sm:before:-left-6 inset-y-0 before:w-[calc(100%+2rem)] sm:before:w-[calc(100%+3rem)] before:h-[88px] before:shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'
          : ''
      }`}
    >
      {/* ── Main nav bar ── */}
      <nav
        className={`relative flex justify-between gap-6 items-center px-4 sm:px-6 max-w-9xl mx-auto z-1 transition-all ${
          show ? 'h-[88px]' : 'min-h-28'
        }`}
      >
        {/* Logo */}
        <div
          className="main-logo py-2 flex items-center flex-col sm:flex-row gap-1.5 shrink-0"
          onClick={() => setSlideMenu(false)}
        >
          <Logo />
        </div>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center justify-center gap-1 xl:gap-2">
          {pages.map((item) => (
            <li
              key={item.url}
              className="relative flex items-center"
              onMouseEnter={() => (item.children ? openMenu() : closeMenu())}
              onMouseLeave={closeMenu}
            >
              {item.soon ? (
                <CoomingSoon>
                  <span className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-[#0a0e1a]/40 cursor-default select-none">
                    {item.title}
                  </span>
                </CoomingSoon>
              ) : item.title === 'Get in touch' ? (
                <Link
                  href={item.url}
                  onClick={() => setSlideMenu(false)}
                  className="group relative flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a0e1a] hover:bg-[#e89a78] text-white text-sm font-semibold transition-all duration-200 overflow-hidden shadow-sm hover:shadow-md hover:shadow-[#e89a78]/25"
                >
                  <span className="relative z-10">Get in touch</span>
                  <svg
                    className="relative z-10 w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}
                    strokeLinecap="round" strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                  </svg>
                </Link>
              ) : (
                <Link
                  href={item.url}
                  onClick={() => setSlideMenu(false)}
                  className={`relative flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                    pathname === item.url
                      ? 'text-[#e89a78]'
                      : 'text-[#0a0e1a] hover:text-[#e89a78] hover:bg-[#f4ebe8]/60'
                  }`}
                >
                  {item.title}
                  {item.children && (
                    <motion.span
                      animate={{ rotate: slideMenu ? 180 : 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                      className="flex items-center"
                    >
                      <CaretDownIcon className="relative top-px opacity-60" aria-hidden />
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

        {/* Right actions */}
        <div className="relative flex items-center gap-3 sm:gap-6 shrink-0">
          <NavSettings slideMenu={slideMenu} />

          {/* Hamburger */}
          <button
            className="w-[40px] h-[40px] hover:bg-black/5 rounded-full grid lg:hidden place-items-center transition-colors"
            onClick={() => setOpenSide(!openSide)}
            aria-label="Toggle menu"
          >
            <svg className="text-black" width={24} height={18}>
              <use href={`/icons/all-icons.svg#${openSide ? 'icon-nav-close' : 'icon-nav-menu'}`} />
            </svg>
          </button>
        </div>
      </nav>

      {/* ── Mega menu dropdown ── */}
      <AnimatePresence>
        {slideMenu && (
          <>
            <motion.div
              key="megamenu"
              className="fixed left-0 right-0 bg-white z-[998]"
              style={{
                top: navH,
                boxShadow: '0 8px 32px rgba(0,0,0,0.08), 0 1px 0 rgba(0,0,0,0.06) inset',
              }}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              onMouseEnter={openMenu}
              onMouseLeave={closeMenu}
            >
              <div className="max-w-9xl mx-auto px-6 sm:px-10 py-8 pb-10">
                <div className="grid grid-cols-3 gap-x-10 max-w-2xl">
                  {pages[0].children?.map((col, i) => (
                    <div key={i}>
                      {/* Column header */}
                      <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-[#f0ece8]">
                        <span className="w-[3px] h-[14px] rounded-full bg-[#e89a78] shrink-0" />
                        <Link
                          href={col.url}
                          onClick={() => setSlideMenu(false)}
                          className="text-[11px] font-bold uppercase tracking-widest text-[#0a0e1a] hover:text-[#e89a78] transition-colors"
                        >
                          {col.title}
                        </Link>
                      </div>

                      {/* Column links */}
                      <ul className="flex flex-col gap-0.5">
                        {col.children?.map((item, j) => (
                          <li key={j}>
                            {item.soon ? (
                              <CoomingSoon>
                                <span className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm text-[#c0b8b0] cursor-default select-none">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#e8e0d8] shrink-0" />
                                  {item.title}
                                </span>
                              </CoomingSoon>
                            ) : (
                              <Link
                                href={item.url}
                                onClick={() => setSlideMenu(false)}
                                className="group flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm text-[#444] hover:bg-[#f4ebe8] hover:text-[#0a0e1a] transition-all duration-150"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78]/25 group-hover:bg-[#e89a78] transition-colors shrink-0" />
                                {item.title}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Backdrop */}
            <motion.div
              key="megamenu-backdrop"
              className="fixed left-0 right-0 bottom-0 bg-black/20 backdrop-blur-[2px] z-[997]"
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
          openSide ? 'translate-x-0' : 'translate-x-full'
        } fixed inset-0 z-[100] bg-[#0a0e1a] transform transition-transform duration-300 ease-in-out flex flex-col p-4 overflow-y-auto`}
      >
        {/* ── Top bar ── */}
        <div className="flex items-center justify-between shrink-0">
          {/* Brand logo */}
          <div className="flex items-center cursor-pointer" onClick={() => setOpenSide(false)}>
            <Logo isInvert />
          </div>

          <div className="flex items-center gap-2">
            {/* Moon icon */}
            <button
              className="w-10 h-10 rounded-xl bg-white/[0.08] flex items-center justify-center text-white/50 hover:bg-white/[0.13] hover:text-white transition-all"
              aria-label="Toggle theme"
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-[18px] h-[18px]" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </button>

            {/* Close X */}
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
        </div>

        {/* ── Nav items — vertically centered ── */}
        <nav className="flex-1 flex flex-col justify-center py-8">
          <ul className="flex flex-col" style={{ gap: 36 }}>
            {pages
              .filter((item) => item.title !== 'Get in touch')
              .map((item) => (
                <li key={item.url}>
                  <div className="flex items-center gap-3">
                    {item.soon ? (
                      <CoomingSoon>
                        <span
                          className="text-[32px] leading-none text-white/60 select-none"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          {item.title}
                        </span>
                      </CoomingSoon>
                    ) : (
                      <Link
                        href={item.url}
                        onClick={() => { if (!item.children) setOpenSide(false); }}
                        className="text-[32px] leading-none text-white/60 hover:text-[#e89a78] hover:translate-x-1.5 transition-all duration-200 inline-block"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
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
                      <div className="mt-5 pl-1 flex flex-col gap-4">
                        {item.children.map((col) => (
                          <div key={col.url}>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#e89a78] mb-2 flex items-center gap-1.5">
                              <span className="w-[3px] h-3 rounded-full bg-[#e89a78]" />
                              {col.title}
                            </p>
                            <ul className="flex flex-col gap-0.5">
                              {col.children?.map((child) => (
                                <li key={child.url}>
                                  {child.soon ? (
                                    <CoomingSoon>
                                      <span className="flex items-center gap-2 px-2 py-1.5 text-sm text-[#444]">
                                        {child.title}
                                      </span>
                                    </CoomingSoon>
                                  ) : (
                                    <Link
                                      href={child.url}
                                      onClick={() => setOpenSide(false)}
                                      className="flex items-center gap-2 px-2 py-1.5 text-sm text-white/35 hover:text-[#e89a78] transition-colors"
                                    >
                                      <span className="w-1 h-1 rounded-full bg-[#e89a78]/50 shrink-0" />
                                      {child.title}
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

        {/* ── Bottom: sign in + CTA ── */}
        <div className="shrink-0 flex flex-col gap-3 pt-4">
          <div className="flex justify-center">
            <button className="text-sm text-white/30 hover:text-white/55 transition-colors">
              Sign in
            </button>
          </div>
          <Link
            href={Constants.PAGES.SCHEDULE_CALL}
            onClick={() => setOpenSide(false)}
            className="w-full bg-[#e89a78] hover:bg-[#d4836a] text-white font-semibold text-base flex items-center justify-center gap-3 py-4 rounded-2xl shadow-lg shadow-[#e89a78]/20 hover:shadow-[#e89a78]/35 transition-all duration-200"
          >
            Get Started
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </aside>
    </header>
  );
}

const NavSettings = ({
  slideMenu,
  isMobile = false,
}: {
  slideMenu: boolean;
  isMobile?: boolean;
}) => (
  <>
    <div className={`search cursor-pointer ${isMobile ? '' : 'hidden sm:block'}`}>
      <svg
        className={`icon-search transition-colors ${slideMenu ? 'text-[#e89a78]' : 'text-[#0a0e1a] hover:text-[#e89a78]'}`}
        width={22}
        height={22}
      >
        <use href="/icons/all-icons.svg#icon-search" />
      </svg>
    </div>

    <LanguageSwitch className={`${isMobile ? '' : 'hidden sm:flex'}`} />

    <div
      className={`login ${isMobile ? 'flex' : 'hidden sm:flex'} items-center cursor-pointer gap-1.5 text-sm font-medium transition-colors ${
        slideMenu ? 'text-[#e89a78]' : 'text-[#0a0e1a] hover:text-[#e89a78]'
      }`}
    >
      <svg className="icon-login" width={17} height={17}>
        <use href="/icons/all-icons.svg#icon-login" />
      </svg>
      Login
    </div>
  </>
);

export default Navbar;
