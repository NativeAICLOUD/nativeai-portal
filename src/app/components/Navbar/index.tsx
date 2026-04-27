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

      {/* ── Mobile sidebar backdrop ── */}
      <div
        className={`${openSide ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} fixed inset-0 z-[99] transition-opacity duration-300 backdrop-blur-sm bg-black/25`}
        onClick={() => setOpenSide(false)}
      />

      {/* ── Mobile sidebar ── */}
      <aside
        className={`${
          openSide ? 'translate-x-0' : 'translate-x-full'
        } fixed inset-y-0 right-0 z-[100] w-full md:w-[360px] bg-white/98 backdrop-blur-xl text-black transform transition-transform duration-300 ease-in-out overflow-y-auto flex flex-col`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-black/[0.06]">
          <Logo />
          <button
            className="w-9 h-9 rounded-full hover:bg-black/5 flex items-center justify-center transition-colors"
            onClick={() => setOpenSide(false)}
            aria-label="Close menu"
          >
            <svg width={20} height={20}>
              <use href="/icons/all-icons.svg#icon-nav-close" />
            </svg>
          </button>
        </div>

        {/* Actions row */}
        <div className="flex items-center gap-5 px-5 py-3 border-b border-black/[0.06]">
          <NavSettings slideMenu={false} isMobile />
        </div>

        {/* Nav links */}
        <ul className="flex flex-col gap-1 px-3 pt-4 flex-1">
          {pages.map((item) => (
            <li key={item.url} className="flex flex-col">
              <div
                className={`flex items-center justify-between rounded-xl px-3 py-3 transition-colors ${
                  pathname === item.url ? 'bg-[#f4ebe8]' : 'hover:bg-[#faf7f4]'
                }`}
              >
                {item.soon ? (
                  <CoomingSoon>
                    <span className="text-base font-medium text-[#b8b2aa]">{item.title}</span>
                  </CoomingSoon>
                ) : item.title === 'Get in touch' ? (
                  <Link
                    href={item.url}
                    onClick={() => setOpenSide(false)}
                    className="group flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a0e1a] hover:bg-[#e89a78] text-white text-sm font-semibold transition-all duration-200"
                  >
                    Get in touch
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}
                      strokeLinecap="round" strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                    </svg>
                  </Link>
                ) : (
                  <Link
                    href={item.url}
                    onClick={() => { if (!item.children) setOpenSide(false); }}
                    className={`text-base font-medium flex-1 ${
                      pathname === item.url ? 'text-[#e89a78]' : 'text-[#0a0e1a]'
                    }`}
                  >
                    {item.title}
                  </Link>
                )}
                {item.children && (
                  <button
                    onClick={() => setExpanded(isExpanded === item.url ? null : item.url)}
                    className="w-7 h-7 rounded-lg bg-black/[0.05] hover:bg-[#f4ebe8] flex items-center justify-center transition-colors shrink-0"
                    aria-label={isExpanded === item.url ? 'Collapse' : 'Expand'}
                  >
                    {isExpanded === item.url
                      ? <MinusIcon className="size-3.5 text-[#e89a78]" />
                      : <PlusIcon className="size-3.5 text-[#0a0e1a]/60" />}
                  </button>
                )}
              </div>

              {/* Mobile accordion */}
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
                  <div className="pl-4 pr-2 py-2 flex flex-col gap-3">
                    {item.children.map((col) => (
                      <div key={col.url}>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#e89a78] px-2 mb-1.5 flex items-center gap-1.5">
                          <span className="w-[3px] h-3 rounded-full bg-[#e89a78]" />
                          {col.title}
                        </p>
                        <ul className="flex flex-col gap-0.5">
                          {col.children?.map((child) => (
                            <li key={child.url}>
                              {child.soon ? (
                                <CoomingSoon>
                                  <span className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[#c0b8b0]">
                                    {child.title}
                                  </span>
                                </CoomingSoon>
                              ) : (
                                <Link
                                  href={child.url}
                                  onClick={() => setOpenSide(false)}
                                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[#4a4a4a] hover:bg-[#f4ebe8] hover:text-[#0a0e1a] transition-colors"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78]/30 shrink-0" />
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

        {/* Sidebar footer */}
        <div className="px-5 py-6 border-t border-black/[0.06] mt-auto">
          <p className="text-xs text-[#b8b2aa] text-center">
            © {new Date().getFullYear()} NativeCloud
          </p>
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
