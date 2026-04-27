'use client';

import { Constants } from "@/Constants";
import { Link } from 'react-transition-progress/next'
import Image from "next/image";

import { button } from "../../utils/tw-variants";
import CoomingSoon from "../../ui/CoomingSoon";

function HomeHeader() {
  return (
    <main className="relative overflow-hidden lg:pl-[50px] pt-40 lg:pt-36 pb-16 sm:pb-40 lg:pb-16">
      <div className="absolute w-full h-full z-[-1] left-0 top-0 after:absolute after:bottom-0 after:bg-main-gradient after:w-full after:h-1/5">
        <Image src="/img/BG.png" alt="Background" layout="fill" objectFit="cover" quality={100} />
        <Image src="/img/Group 32.png" alt="Design Element" className="!top-36" layout="fill" objectFit="cover" quality={100} />
      </div>
      <div className="relative max-w-9xl mx-auto w-full flex justify-center text-left text-[#2A3A4A] px-5 sm:px-10 lg:px-0">
        <div className="group relative z-1 w-full max-w-3xl">
          <p className="text-lg sm:text-2xl ml-1.5 mb-3 sm:mb-5 font-semibold text-center lg:text-left bg-gradient-to-r from-[#f0a060] via-[#e89a78] to-[#d4845c] bg-clip-text text-transparent">
            AI Agents <span className="opacity-40 font-light">/</span> LLMs
          </p>
          <h1 className="text-[1.85rem] sm:text-4xl lg:text-6xl mb-6 sm:mb-8 font-black !leading-tight text-center lg:text-left max-w-lg lg:max-w-full mx-auto text-[#0a0e1a]">
            We make{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#f0a060] via-[#e89a78] to-[#d4845c] bg-clip-text text-transparent">
                AI work
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-[#f0a060] via-[#e89a78] to-[#d4845c] opacity-60" />
            </span>
            {' '}inside your business
          </h1>
          <div className="flex justify-start gap-5 flex-col lg:flex-row items-center mt-8 lg:mt-6">
            <Link
              href={Constants.PAGES.SCHEDULE_CALL}
              className="group inline-flex items-center justify-center gap-3 whitespace-nowrap w-full max-w-sm lg:w-auto px-7 min-h-[56px] rounded-full bg-[#0a0e1a] hover:bg-[#e89a78] text-white font-semibold text-base transition-all duration-200 shadow-md hover:shadow-[#e89a78]/30 hover:shadow-lg"
            >
              <span className="w-5 h-5 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                  <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
                </svg>
              </span>
              Schedule a free call
            </Link>
            <Link
              href={Constants.PAGES.SOLUTIONS}
              className="group relative inline-flex items-center justify-center gap-3 whitespace-nowrap w-full max-w-sm lg:w-auto px-7 min-h-[56px] rounded-full border-2 border-[#0a0e1a]/25 hover:border-[#e89a78] text-[#0a0e1a] hover:text-[#e89a78] font-semibold text-base transition-all duration-200 bg-white/60 hover:bg-[#fff8f5] backdrop-blur-sm"
            >
              Explore our solutions
              <span className="w-7 h-7 rounded-full bg-[#0a0e1a]/8 group-hover:bg-[#e89a78]/15 flex items-center justify-center transition-all duration-200 shrink-0">
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}
                  strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomeHeader;
