'use client';

import Image from "next/image";
import { Link } from "next-view-transitions";
import { Each } from "../helpers/Each";
import SocialIcons from "../ui/SocialIcons";
import { useRef } from "react";
import { Constants } from "@/Constants";

function Footer() {
  const pages = [
    { url: Constants.PAGES.ABOUT, title: 'About' },
    { url: Constants.PAGES.DOCS, title: 'Docs' },
    { url: Constants.PAGES.BLOG, title: 'Blog' },
    // { url: '#', title: 'Privacy' },
    // { url: '#', title: 'Terms' },
  ];
  
  return (
    <footer
      className="footer w-full pt-9 pb-10 border-t border-t-footer-border">
      <div className="fbody flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 max-w-9xl mx-auto">
        <div className="info flex flex-col md:flex-row items-center">
          <Image
            src="/img/logo/black.svg"
            alt="Logo"
            // className="dark:invert"
            width={100}
            height={24}
          />

          <div className="line hidden md:block w-[1px] h-6 mx-6 bg-footer-border"></div>

          <SocialIcons className="mt-6 md:mt-0 mb-10 md:mb-0" />
        </div>

        <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-10 justify-center">
          <Each of={pages} render={(item: any) =>
            <li className="text-black/70 font-light text-sm">
              <Link href={item.url}>{item.title}</Link>
            </li>
          } />
        </ul>
      </div>
    </footer>
  );
}

export default Footer;