"use client";

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
      <div className={'relative max-w-9xl mx-auto bg-main-card text-white pt-14 sm:pt-24 px-8 sm:px-16 pb-10 sm:pb-16 xl:rounded-2xl'}>
        <h2 className='relative flex text-lg sm:text-2xl md:text-3xl xl:text-3.5xl !leading-snug text-left before:bg-white before:w-3 before:h-auto before:my-1 sm:before:my-2 before:mr-5'>
          NativeCloud specializes in delivering smart, innovative, <br className='hidden xl:block' /> and highly resilient cloud solutions to support our customers to achieve their business transformation initiatives.
        </h2>
        <div className="relative text-sm sm:text-base grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-8 sm:mt-12">
        </div>
      </div>

      <div className="relative services mb-4 mt-15">
        <h2 className={'text-2xl sm:text-3.5xl lg:text-4.5xl text-center font-semibold leading-snug pb-6 px-2 lg:px-0'}>
          A Complete Range of End-to-End Azure and AWS Cloud Services
        </h2>
        <div className="relative py-8 content before:absolute before:inset-0 before:bg-orange-gradient before:w-full before:h-full before:bg-cover before:bg-center before:opacity-80">
          <div className={'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-8xl mx-auto px-2 lg:px-0'}>
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
