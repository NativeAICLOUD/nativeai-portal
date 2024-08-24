"use client";

import React from 'react';
import Image from 'next/image';

const HomeLowerSection = () => {
  return (
    <section className={'flex flex-col items-center justify-between flex-wrap font-montserrat bg-gradient-to-r from-[#131c2a] via-[#204f77] to-[#243a5e] text-white w-full h-[595px] p-4 box-border mx-auto max-w-[1440px]'}>
      <h2 className={'font-montserrat font-semibold text-[40px] text-center mb-8'}>Achieve More With NativeCloud</h2>
      <div className={'flex flex-wrap justify-around w-full max-w-[1200px]'}>
        <div className={'flex flex-col items-center text-center m-4 flex-[1_1_30%] min-w-[200px]'}>
          <Image src="/img/icon-innovate.png" alt="Innovate Faster" width={89} height={67} />
          <h3>Innovate Faster</h3>
          <p>Decrease time to market and enable continuous delivery for mission-critical apps, products, and services.</p>
        </div>
        <div className={'flex flex-col items-center text-center m-4 flex-[1_1_30%] min-w-[200px]'}>
          <Image src="/img/icon-tasks.png" alt="Automate Release Pipeline" width={80} height={67} />
          <h3>Automate Release Pipeline</h3>
          <p>Deliver innovative products and services to market quickly by automatically managing, monitoring, and provisioning AWS resources using IaC.</p>
        </div>
        <div className={'flex flex-col items-center text-center m-4 flex-[1_1_30%] min-w-[200px]'}>
          <Image src="/img/icon-stability.png" alt="Improve Stability" width={89} height={67} />
          <h3>Improve Stability</h3>
          <p>Align your development and ops teams around a shared code base to identify problems early in the deployment process, and improve the resiliency and security of your apps.</p>
        </div>
      </div>
      <div className={'mt-8'}>
        <button className={'bg-white text-[#283D3B] text-[18px] font-montserrat font-semibold w-[271px] h-[55px] rounded-[30px] border-none cursor-pointer'}>Let`s get started</button>
      </div>
    </section>
  );
};

export default HomeLowerSection;
