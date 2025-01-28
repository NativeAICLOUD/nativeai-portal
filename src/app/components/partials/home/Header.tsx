'use client';

import { Constants } from "@/Constants";
import { Link } from 'react-transition-progress/next'
import Image from "next/image";

import AzureHeroIMG from "../../../../../public/img/azure-hero.png";
import { button } from "../../utils/tw-variants";
import CoomingSoon from "../../ui/CoomingSoon";

function HomeHeader() {
  return (
    <main className="relative lg:h-screen overflow-hidden flex items-center lg:pl-[50px] pt-40 lg:pt-0 pb-16 sm:pb-40 lg:pb-0">
      <div className="absolute w-full h-full z-[-1] left-0 top-0 after:absolute after:bottom-0 after:bg-main-gradient after:w-full after:h-1/5">
        <Image src="/img/BG.png" alt="Background" layout="fill" objectFit="cover" quality={100} />
        <Image src="/img/Group 32.png" alt="Design Element" className="!top-36" layout="fill" objectFit="cover" quality={100} />
      </div>
      <div className="relative max-w-9xl mx-auto w-full flex justify-center lg:justify-between text-left text-[#2A3A4A] mt-0 lg:mt-36">
        <div className="group relative z-1">
          <h1 className="text-xl sm:text-2xl ml-1.5 mb-[0.5em] sm:mb-5 bg-clip h1-linear font-semibold text-center lg:text-left">AI-Powered Azure & AWS Cloud Solutions</h1>
          <h2 className="text-3.5xl sm:text-4xl lg:text-6xl mb-[1.5em] sm:mb-8 font-black bg-clip h2-linear !leading-tight text-center lg:text-left max-w-lg lg:max-w-full mx-auto">Beyond AI Empowering Azure<br /> </h2>
          <h1 className="text-xl sm:text-2xl ml-1.5 mb-[0.5em] sm:mb-5 bg-clip h1-linear font-semibold text-center lg:text-left">We transform your vision into reality by harnessing the power of Azure</h1>
          <div className="flex justify-start gap-5 flex-col lg:flex-row items-center">
            <Link href={Constants.PAGES.AZURE} className={`${button({ size: 'lg', color: 'primary' })}`}>Going to Azure</Link>
            <Link href={Constants.PAGES.ACCELERATE_AZURE} className={`${button({ size: 'lg', color: 'secondary', icon: 'md' })} whitespace-nowrap w-full max-w-sm lg:w-auto lg:max-w-fit`}>
              <svg className={`icon-arrow-right text-secondary`} width={30} height={20}>
                <use href={`/icons/all-icons.svg#icon-arrow-right`}></use>
              </svg>
              Accelerate with Azure
            </Link>
          </div>
        </div>
        <Image src={AzureHeroIMG} alt="Azure Hero" className="absolute opacity-70 top-0 z-0 inset-x-0 mx-auto lg:relative lg:-translate-y-16 lg:opacity-100 max-h-2xl lg:max-h-max" />
      </div>
    </main>
  );
}

export default HomeHeader;