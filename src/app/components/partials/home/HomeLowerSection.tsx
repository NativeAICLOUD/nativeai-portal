"use client";

import React from 'react';
import Image from 'next/image';
import { button } from '../../utils/tw-variants';
import { twMerge } from 'tailwind-merge';

const HomeLowerSection = () => {
  return (
    <section className={'relative pt-10'}>
      <h2 className={'text-4.5xl mb-4 text-center font-semibold leading-snug'}>Cloud DevOps Services</h2>
      <div className="relative text-white bg-main-card rounded-2xl content w-full p-4 box-border mx-auto max-w-9xl">
        <h2 className={'font-montserrat font-semibold text-[40px] text-center pt-4 mb-12'}>Achieve More With NativeCloud</h2>
        <div className={'grid grid-cols-3 gap-16 max-w-6xl mx-auto'}>
          <div className={'flex flex-col gap-10 items-center text-center'}>
            <div className="box-img h-20">
              <Image src="/img/icon-innovate.png" alt="Innovate Faster" width={89} height={67} />
            </div>
            <h3 className="text-xl">Innovate Faster</h3>
            <p>Decrease time to market and enable continuous delivery for mission-critical apps, products, and services.</p>
          </div>
          <div className={'flex flex-col gap-10 items-center text-center'}>
            <div className="box-img h-20">
              <Image src="/img/icon-tasks.png" alt="Automate Release Pipeline" width={80} height={67} />
            </div>
            <h3 className="text-xl">Automate Release Pipeline</h3>
            <p>Deliver innovative products and services to market quickly by automatically managing, monitoring, and provisioning AWS resources using IaC.</p>
          </div>
          <div className={'flex flex-col gap-10 items-center text-center'}>
            <div className="box-img h-20">
              <Image src="/img/icon-stability.png" alt="Improve Stability" width={89} height={67} />
            </div>
            <h3 className="text-xl">Improve Stability</h3>
            <p>Align your development and ops teams around a shared code base to identify problems early in the deployment process, and improve the resiliency and security of your apps.</p>
          </div>
        </div>
        <div className="card-footer-text mt-20">
          <h3 className="text-center text-lg mb-3">Increase Enterprise Agility</h3>
          <p className="text-center text-base max-w-5xl mx-auto">
            DevOps tools and principles are essential for organizations that want to streamline the development and deployment
            process to accelerate innovation. ClearScale will help you implement DevOps best practices and leverage powerful AWS solutions
            to automate your cloud infrastructure.
          </p>
        </div>
        <div className={'flex justify-center mt-12 mb-8'}>
          <button className={twMerge(`${button({ size: 'lg', color: 'primary', icon: 'md' })} border-2 border-white`)}>
            Let`s get started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeLowerSection;
