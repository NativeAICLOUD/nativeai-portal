'use client';

import { Constants } from "@/Constants";
import { Link } from 'next-view-transitions'
import Image from "next/image";

import AzureHeroIMG from "../../../../../public/img/azure-hero.png";
import { button } from "../../utils/tw-variants";

function HomeHeader() {
  return (
    <div className="relative h-screen overflow-hidden flex items-center pl-[50px]">
      <div className="absolute w-full h-full z-[-1] left-0 top-0">
        <Image src="/img/BG.png" alt="Background" layout="fill" objectFit="cover" quality={100} />
        <Image src="/img/Group 32.png" alt="Design Element" layout="fill" objectFit="cover" quality={100} />
        <Image src={AzureHeroIMG} alt="Azure Hero" placeholder="blur" />
      </div>
      <main className="relative text-left text-[#2A3A4A]">
        <h1 className="text-lg mb-[0.5em] sm:mb-5 font-primary bg-clip h1-linear">Azure & AWS Consulting Company</h1>
        <h2 className="text-[42px] mb-[1.5em] sm:mb-[90px] font-primary bg-clip h2-linear">Beyond Limits, Empowering Azure Clouds Solutions</h2>
        <div className="flex justify-start gap-5">
          <Link href={Constants.PAGES.AZURE} className={`${button({ size: 'lg', color: 'primary' })}`}>Going to Azure</Link>
          <Link href={Constants.PAGES.ACCELERATE_AZURE} className={`${button({ size: 'lg', color: 'secondary' })}`}>Accelerate with Azure</Link>
        </div>
      </main>
    </div>
  );
}

export default HomeHeader;