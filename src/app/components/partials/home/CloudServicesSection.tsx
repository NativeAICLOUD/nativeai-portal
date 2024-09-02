"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

const services = [
  { w: 93, h: 68, src: '/img/Cloud.png', title: 'Cloud Solutions & Services' },
  { w: 95, h: 90, src: '/img/Layer_1.png', title: 'Platform Development' },
  { w: 89, h: 81, src: '/img/Layer_2.png', title: 'SaaS app development' },
  { w: 89, h: 67, src: '/img/Layer_3.png', title: 'End-to-end business solutions' },
  { w: 77, h: 77, src: '/img/Layer_4.png', title: 'App modernization' },
  { w: 88, h: 89, src: '/img/Layer_5.png', title: 'Enterprise application development' },
  { w: 101, h: 79, src: '/img/Layer_6.png', title: 'Digital transformation services' },
  { w: 77, h: 74, src: '/img/DevOps.png', title: 'Cloud & DevOps' },
  { w: 90, h: 90, src: '/img/Layer_8.png', title: 'UI/UX design' },
  { w: 140, h: 112, src: '/img/Layer_9.png', title: 'Cloud Migrations' }
];

const CloudServicesSection = () => {
  return (
    <section className={'-mt-38 bg-white'}>
      <div className={'relative max-w-9xl mx-auto bg-main-card text-white pt-24 px-4 sm:px-16 pb-16 rounded-2xl'}>
        <h2 className='relative flex text-3.5xl leading-snug text-left before:bg-white before:w-3 before:h-auto before:my-2 before:mr-5'>
          NativeCloud specializes in delivering smart, innovative, <br /> and highly resilient cloud solutions to support our customers to achieve their business transformation initiatives.
        </h2>
        <div className="relative grid grid-cols-2 gap-10 mt-12">
          <p>
            Our core focus lies in Microsoft Azure, and we`re proud to hold certification from Microsoft as an Azure Expert Managed Service Provider. We empower businesses with cutting-edge cloud services designed for maximum efficiency and reliability.
            <br /><br />
            Azure provides essential tools enabling organizations to securely access their critical applications and data from anywhere, swiftly and securely. Through daily design, implementation, and management of infrastructures and workloads on Azure, we have amassed invaluable knowledge and expertise on the platform.
          </p>
          <p>
            Our continuous engagement with Azure empowers us to deliver tailored solutions that optimize performance, security, and accessibility for our clients. Continuous refinement of designs and robust Managed Services have made us leaders in integrating new Azure features into customer solutions.
            <br /><br />
            We ensure clients leverage Azure`s latest innovations for enhanced efficiency and competitiveness. As a result of the continuous improvement of these designs and our Managed Services, we have become a leader in integrating new Azure functionalities into customer solutions.
          </p>
        </div>
      </div>

      <div className="relative services mb-4 mt-15">
        <h2 className={'text-4.5xl text-center font-semibold leading-snug pb-6'}>A Complete Range of End-to-End Azure and AWS Cloud Services</h2>
        <div className="relative py-8 content before:absolute before:inset-0 before:bg-orange-gradient before:w-full before:h-full before:bg-cover before:bg-center before:opacity-80">
          <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-8xl mx-auto'}>
            {services.map((service, index) => (
              <div key={index} className={'flex flex-col items-center max-w-48 text-center relative'}>
                <div className={'relative w-[109px] h-[89px] flex items-center justify-center'}>
                  <div className={'absolute w-[89px] h-[89px] bg-[#ffeacbfb] rounded-full z-0'}></div>
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
      </div>
    </section>
  );
};

export default CloudServicesSection;
