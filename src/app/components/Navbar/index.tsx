'use client';

import { Link } from 'next-view-transitions';

import Flag from 'react-flagpack'

import { Constants } from '@/Constants';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Each } from '../helpers/Each';
import { CaretDownIcon } from '@radix-ui/react-icons';

type Pages = {
  url: string;
  title: string;
  children?: Pages[];
}

function Navbar() {
  const [openSide, setOpenSide] = useState(false);
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
        ? `fixed bg-step1/10 border-b-border-line/20 backdrop-blur-2xl`
        : 'absolute border-b-border-line/5'
        } transition-all`}
    >
      <nav
        className={`nav-items flex justify-between gap-6 items-center px-4 sm:px-6 max-w-9xl mx-auto ${show ? 'min-h-20' : 'min-h-28'
          } transition-all`}
      >
        <div className="main-logo flex items-center flex-col sm:flex-row gap-1.5">
          <Link href={'/'}>
            <Image
              src="/logo.svg"
              alt="Logo"
              className="logo"
              width={195}
              height={95}
              priority
              sizes="(max-width: 768px) 100vw, 100vw"
              quality={100}
            />
          </Link>
        </div>

        <ul className="flex items-center justify-center gap-6">
          <Each
            of={pages}
            render={(item: any) => (
              <li className="text-black font-light">
                <Link className="flex items-center gap-1" href={item.url}>
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

        <div className="actions flex items-center gap-2 sm:gap-4">
          
          <svg className="icon-search" width={24} height={24}>
            <use href={`/icons/all-icons.svg#icon-search`}></use>
          </svg> 

          <Flag code="GB-UKM" size="m" />
          <Flag code="ES" size="m" />
          <Flag code="FR" size="m" />

          <div className="login flex items-center gap-0.5">
            <svg className="icon-login" width={18} height={18}>
              <use href={`/icons/all-icons.svg#icon-login`}></use>
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
