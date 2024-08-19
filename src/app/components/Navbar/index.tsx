'use client';

import { Link } from 'next-view-transitions';

import { Constants } from '@/Constants';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Each } from '../helpers/Each';

function Navbar() {
  const [openSide, setOpenSide] = useState(false);
  const [show, setShow] = useState(false);
  const lastScrollY = useRef(0);

  const pages = [
    { url: Constants.PAGES.ABOUT, title: 'About' },
    { url: Constants.PAGES.DOCS, title: 'Docs' },
    { url: Constants.PAGES.BLOG, title: 'Blog' },
    // { url: '#', title: 'Privacy' },
    // { url: '#', title: 'Terms' },
  ];

  useEffect(() => {
    const onScroll = (e: any) => {
      const scrollTop = e.target.documentElement.scrollTop;
      setShow(!(scrollTop > lastScrollY.current));

      // remember current page location to use in the next move
      lastScrollY.current = scrollTop;

      if (scrollTop <= 0) {
        setShow(false);
      }
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollY.current]);

  return (
    <header
      className={`navbar overflow-x-clip w-full z-999 border-b ${show
          ? `fixed bg-step1/10 border-b-border-line/20 backdrop-blur-2xl sm:top-8`
          : 'absolute border-b-border-line/5 top-20 sm:top-8'
        } transition-all`}
    >
      <nav
        className={`nav-items flex justify-between gap-6 items-center px-4 sm:px-6 max-w-9xl mx-auto ${show ? 'min-h-20' : 'min-h-28'
          } transition-all`}
      >
        <div className="main-logo flex items-center flex-col sm:flex-row gap-1.5">
          <Link href={'/'}>
            <Image
              src="/img/logo/black.svg"
              alt="Logo"
              className="logo"
              width={100}
              height={24}
              priority
              sizes="(max-width: 768px) 100vw, 100vw"
              quality={100}
            />
          </Link>
        </div>

        <div className="actions flex items-center gap-2 sm:gap-4">
          <button
            className="btn-action svg-hover w-[40px] h-[40px] md:w-[48px] md:h-[48px] bg-black/5 shadow-inner rounded-full grid sm:hidden place-items-center"
            onClick={() => setOpenSide(!openSide)}
          >
            <svg className="icon-nav fill-black" width={24} height={24}>
              <use
                href={`/icons/icons.svg#${openSide ? 'icon-nav-close' : 'icon-nav-menu'
                  }`}
              ></use>
            </svg>
          </button>
        </div>
      </nav>

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
            <use href={`/icons/icons.svg#icon-nav-close`}></use>
          </svg>
        </button>

        <hr className="nav mt-10 mb-10 opacity-10" />

        <ul className="flex flex-col items-center justify-center gap-6">
          <Each
            of={pages}
            render={(item: any) => (
              <li className="text-black font-light">
                <Link href={item.url}>{item.title}</Link>
              </li>
            )}
          />
        </ul>
      </aside>
    </header>
  );
}

export default Navbar;
