"use client";

import React from 'react';
import Image from 'next/image';


const services = [
  { w: 81, h: 81, src: '/img/industry1.png', title: 'Reliable' },
  { w: 77, h: 74, src: '/img/industry2.png', title: 'Fintech' },
  { w: 67, h: 74, src: '/img/industry3.png', title: 'E-commerce & retail' },
  { w: 78, h: 80, src: '/img/industry4.png', title: 'Insurance' },
  { w: 72, h: 80, src: '/img/industry5.png', title: 'Manufacturing' },
  { w: 80, h: 79, src: '/img/industry6.png', title: 'Chimical' },
  { w: 79, h: 79, src: '/img/industry7.png', title: 'Construction' },
  { w: 74, h: 89, src: '/img/industry8.png', title: 'Renewable energy' },
  { w: 90, h: 82, src: '/img/industry9.png', title: 'B2B solutions' },
];

const IndustriesBusinessDomain = () => {
  return (
    <section className="relative text-white bg-main-light-card p-4">
      <div className="content w-full mx-auto max-w-9xl mb-20">
        <h2 className={'text-2xl sm:text-3.5xl lg:text-4.5xl text-center font-semibold leading-snug mt-10 mb-16'}>
          Industries & Business Domains We Serve
        </h2>
        <div className={'grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-y-12 gap-x-4 sm:gap-y-20 sm:gap-x-36 max-w-7xl mx-auto items-center text-center'}>
          {services.map((service, index) => (
            <div key={index} className={'flex flex-col items-center max-w-48 text-center relative'}>
              <div className={'relative h-[89px] flex items-center justify-center'}>
                <div className={'absolute w-[80px] h-[80px] bg-circle-grey rounded-full z-0'}></div>
                <Image
                  src={service.src}
                  alt={service.title}
                  width={service.w}
                  height={service.h}
                  className='z-1 opacity-70'
                />
              </div>
              <p className="font-sm sm:text-base">{service.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesBusinessDomain;
