'use client';

import { Link } from 'next-view-transitions';

import { Constants } from '@/Constants';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Each } from '../helpers/Each';
import LanguageSwitch from '../ui/LanguageSwitch';
import { usePathname } from 'next/navigation';
import Logo from '../ui/Logo';

type Pages = {
  url: string;
  title: string;
  children?: Pages[];
}

const motionContainer = {
  hidden: { opacity: 0, },
  show: {
    opacity: 1,
    duration: .5,
    transition: {
      delay: .3,
      staggerChildren: .5
    }
  }
};

const motionItem = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0 }
}

function Navbar() {
  const pathname = usePathname();

  const [openSide, setOpenSide] = useState(false);
  const [slideMenu, setSlideMenu] = useState(false);
  const [show, setShow] = useState(false);
  const lastScrollY = useRef(0);

  const pages: Pages[] = [
    {
      url: Constants.PAGES.SOLUTIONS, title: 'Solutions', children: [
        {
          url: '', title: 'Solutions', children: [
            { url: Constants.PAGES.AZURE_CLOUDIFY, title: 'Azure Cloudify' },
            { url: Constants.PAGES.MANAGED_SERVICES, title: 'Managed Services' }
          ]
        },
        {
          url: '', title: 'Data Lifecycle Management', children: [
            { url: Constants.PAGES.MANAGED_SERVICES, title: 'Managed Services' }
          ]
        },
        {
          url: '', title: 'Cloud Native', children: [
            { url: Constants.PAGES.CLOUD_NATIVE_SD, title: 'Software Development' },
          ]
        },
        {
          url: '', title: 'CSP Services', children: [
            { url: Constants.PAGES.CSP_ENTERPRISE, title: 'CSP Enterprise' },
          ]
        }
      ]
    },
    { url: Constants.PAGES.WORKSHOPS, title: 'Workshops' },
    { url: Constants.PAGES.KNOWLEDGE_BASE, title: 'Knowledge base' },
    { url: Constants.PAGES.ABOUT_US, title: 'About us' },
    { url: Constants.PAGES.GET_IN_TOUCH, title: 'Get in touch' },
  ];

  useEffect(() => {
    const onScroll = (e: any) => {
      const scrollTop = e.target.documentElement.scrollTop;

      // remember current page location to use in the next move
      lastScrollY.current = scrollTop;

      if (scrollTop <= 0) {
        setShow(false);
      }

      if (!show && scrollTop > 0) {
        return setShow(true);
      }
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollY.current]);


  return (
    <header
      className={`navbar overflow-x-clip w-full fixed transition-all ${
        show
          ? 'h-[88px] z-999 before:bg-white before:absolute before:-left-4 sm:before:-left-6 inset-y-0 before:w-[calc(100%+2rem)] sm:before:w-[calc(100%+3rem)] before:h-[88px]'
          : ''
      } ${slideMenu ? 'h-full' : ''}`}
    >
      <nav
        className={`relative nav-items flex justify-between gap-6 items-center px-4 sm:px-6 max-w-9xl mx-auto z-1 ${
          show
            ? 'min-h-20'
            : 'min-h-28'
        } ${slideMenu ? 'z-1 border-b border-b-black' : ''} transition-all`}
      >
        <div className="relative left flex items-center gap-20">
          <div className="main-logo py-2 flex items-center flex-col sm:flex-row gap-1.5">
            <Logo />
          </div>

          <ul className="flex items-center justify-center gap-10">
            <Each
              of={pages}
              render={(item: Pages) => (
                <li className={`relative flex items-center text-black font-light transition-all ${show ? 'h-20 before:-bottom-1' : 'h-28 before:-bottom-0'} ${
                  pathname === item.url ? 'before:absolute before:w-full before:h-0.5 before:bg-native' : ''}`}>
                  <Link className="flex items-center gap-1" href={item.url}
                    onMouseEnter={() => setSlideMenu(true)}>
                    {item.title}
                    {
                      item.children &&
                      <CaretDownIcon
                        className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                        aria-hidden
                      />
                    }
                  </Link>
                </li>
              )}
            />
          </ul>
        </div>

        <div className="relative actions flex items-center gap-4 sm:gap-8">

          <div className="search cursor-pointer">
            <svg className={`icon-search ${slideMenu ? 'text-native' : 'text-black'}`} width={24} height={24}>
              <use href={`/icons/all-icons.svg#icon-search`}></use>
            </svg>
          </div>

          <LanguageSwitch />

          <div className={`login flex items-center cursor-pointer gap-1 ${slideMenu ? 'text-native' : 'text-black'}`}>
            <svg className="icon-login" width={18} height={18}>
              <use href={`/icons/all-icons.svg#icon-login`} />
            </svg>
            Login
          </div>


          <button
            className="btn-action svg-hover w-[40px] h-[40px] md:w-[48px] md:h-[48px] bg-black/5 shadow-inner rounded-full grid sm:hidden place-items-center"
            onClick={() => setOpenSide(!openSide)}
          >
            <svg className="icon-nav fill-black" width={24} height={24}>
              <use
                href={`/icons/all-icons.svg#${openSide ? 'icon-nav-close' : 'icon-nav-menu'
                  }`}
              ></use>
            </svg>
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`${openSide ? 'w-full' : 'w-0'
          } aside-backdrop z-[99] h-full fixed inset-0 transition backdrop-blur-sm bg-black-opacity-2`}
        onClick={() => setOpenSide(false)}
      ></div>

      <aside
        className={`${openSide ? 'translate-x-[0]' : 'translate-x-[100%]'
          } sidebar  z-[100] bg-white/90 backdrop:blur-2xl text-black w-full min-h-screen md:w-[350px] p-2.5 fixed inset-y-0 right-0 transform transition duration-500 ease-in-out overflow-y-auto`}
      >
        <button
          className="svg-hover w-[50px] h-[50px] bg-black/5 shadow-inner rounded-full grid place-items-center m-2"
          onClick={() => setOpenSide(false)}
        >
          <svg className="icon-nav-close" width={24} height={24}>
            <use href={`/icons/all-icons.svg#icon-nav-close`}></use>
          </svg>
        </button>

        <hr className="nav mt-10 mb-10 opacity-10" />

        <ul className="flex flex-col items-center justify-center gap-6">
          <Each
            of={pages}
            render={(item: Pages) => (
              <li className="text-black font-light">
                <Link href={item.url}>{item.title}</Link>
              </li>
            )}
          />
        </ul>
      </aside>

      {/* Slide menu */}
      <div
        className={`${slideMenu ? 'h-full' : 'h-0'
          } aside-backdrop w-full fixed inset-0 transition bg-black/20`}
        onClick={() => setSlideMenu(false)}
      ></div>

      <aside
        className={`${slideMenu ? `translate-y-[0] ${show ? 'pt-20 h-[250px]' : 'pt-28 h-[300px]'}` : 'h-[300px] -translate-y-[100%]'
          } sidebar bg-white backdrop:blur-2xl text-black w-full p-2.5 fixed inset-y-0 right-0 transform transition-all duration-500 ease-in-out overflow-y-auto`}
      >

        <AnimatePresence>
          {slideMenu && (
            <motion.div
              className="relative grid grid-cols-4 gap-4 max-w-[55rem] ml-64 2xl:ml-[18.6rem] mt-10"
              initial="hidden"
              animate="show"
              transition={{ delay: 1 }}
              variants={motionContainer}
            >
              <Each
                of={pages[0].children}
                render={(item: Pages) => (
                  <motion.div className="relative"
                    variants={motionItem}>
                    <h2 className="mb-2 cursor-default">{item.title}</h2>
                    <ul className="flex flex-col gap-2">
                      <Each
                        of={item.children}
                        render={(item: Pages) => (
                          <li className="text-black font-light opacity-70">
                            <Link href={item.url}>{item.title}</Link>
                          </li>
                        )}
                      />
                    </ul>
                  </motion.div>
                )}
              />
            </motion.div>
          )}
        </AnimatePresence>

      </aside>
    </header>
  );
}

export default Navbar;
