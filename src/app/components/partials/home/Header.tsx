'use client';

import { Constants } from "@/Constants";
import { Link } from 'next-view-transitions'
import Image from "next/image";

import AzureHeroIMG from "../../../../../public/img/azure-hero.png";
import { button } from "../../utils/tw-variants";

function HomeHeader() {
  return (
    <main className="relative h-screen overflow-hidden flex items-center pl-[50px]">
      <div className="absolute w-full h-full z-[-1] left-0 top-0 after:absolute after:bottom-0 after:bg-main-gradient after:w-full after:h-1/5">
        <Image src="/img/BG.png" alt="Background" layout="fill" objectFit="cover" quality={100} />
        <Image src="/img/Group 32.png" alt="Design Element" className="!top-36" layout="fill" objectFit="cover" quality={100} />
      </div>
      <div className="relative max-w-9xl mx-auto w-full flex justify-between text-left text-[#2A3A4A] mt-36">
        <div className="group">
          <h1 className="text-2xl ml-1.5 mb-[0.5em] sm:mb-5 bg-clip h1-linear font-semibold">Azure & AWS Consulting Company</h1>
          <h2 className="text-6xl mb-[1.5em] sm:mb-8 font-black bg-clip h2-linear leading-tight">Beyond Limits, <br /> Empowering Azure Clouds Solutions</h2>
          <div className="flex justify-start gap-5">
            <Link href={Constants.PAGES.AZURE} className={`${button({ size: 'lg', color: 'primary' })}`}>Going to Azure</Link>
            <Link href={Constants.PAGES.ACCELERATE_AZURE} className={`${button({ size: 'lg', color: 'secondary', icon: 'md' })}`}>
              <svg className={`icon-arrow-right text-secondary`} width={30} height={20}>
                <use href={`/icons/all-icons.svg#icon-arrow-right`}></use>
              </svg>
              Accelerate with Azure
            </Link>
          </div>
        </div>
        <Image src={AzureHeroIMG} alt="Azure Hero" className="-translate-y-16" />
      </div>
    </main>
  );
}

export default HomeHeader;