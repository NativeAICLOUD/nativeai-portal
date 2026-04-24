'use client';

import { Constants } from "@/Constants";
import { Link } from 'react-transition-progress/next'
import Image from "next/image";

import AIHeroIMG from "../../../../../public/img/icon-genai.svg";
import { button } from "../../utils/tw-variants";
import CoomingSoon from "../../ui/CoomingSoon";

function HomeHeader() {
  return (
    <main className="relative lg:h-screen overflow-hidden flex items-center lg:pl-[50px] pt-40 lg:pt-0 pb-16 sm:pb-40 lg:pb-0">
      <div className="absolute w-full h-full z-[-1] left-0 top-0 after:absolute after:bottom-0 after:bg-main-gradient after:w-full after:h-1/5">
        <Image src="/img/BG.png" alt="Background" layout="fill" objectFit="cover" quality={100} />
        <Image src="/img/Group 32.png" alt="Design Element" className="!top-36" layout="fill" objectFit="cover" quality={100} />
      </div>
      <div className="relative max-w-9xl mx-auto w-full flex justify-center lg:justify-between text-left text-[#2A3A4A] mt-0 lg:mt-36 px-5 sm:px-10 lg:px-0">
        <div className="group relative z-1">
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
            <Link href={Constants.PAGES.AZURE} className={`${button({ size: 'lg', color: 'primary' })}`}>Book a consultation</Link>
            <Link href={Constants.PAGES.ACCELERATE_AZURE} className={`${button({ size: 'lg', color: 'secondary', icon: 'md' })} whitespace-nowrap w-full max-w-sm lg:w-auto lg:max-w-fit`}>
              <svg className={`icon-arrow-right text-secondary`} width={30} height={20}>
                <use href={`/icons/all-icons.svg#icon-arrow-right`}></use>
              </svg>
              Explore our solutions
            </Link>
          </div>
        </div>
        <div className="hidden lg:block lg:relative lg:-translate-y-16 lg:max-h-max animate-float shrink-0">
          {/* Warm radial glow backdrop */}
          <div
            className="absolute inset-0 -m-20 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 55%, rgba(240,160,80,0.20) 0%, rgba(232,154,120,0.12) 50%, transparent 72%)',
              filter: 'blur(28px)',
            }}
          />
          <Image src={AIHeroIMG} alt="AI" className="animate-azure-glow w-[320px] lg:w-[480px] xl:w-[560px] relative" />
        </div>
      </div>
    </main>
  );
}

export default HomeHeader;
