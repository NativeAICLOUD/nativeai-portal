"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

const services = [
  { w:'93px', h:'68px', src: '/img/Cloud.png', title: 'Cloud Solutions & Services' },
  { w:'95px', h:'90px', src: '/img/Layer_1.png', title: 'Platform Development' },
  { w:'89px', h:'81px', src: '/img/Layer_2.png', title: 'SaaS app development' },
  { w:'89px', h:'67px', src: '/img/Layer_3.png', title: 'End-to-end business solutions' },
  { w:'77px', h:'77px', src: '/img/Layer_4.png', title: 'App modernization' },
  { w:'88px', h:'89px', src: '/img/Layer_5.png', title: 'Enterprise application development' },
  { w:'101px', h:'79px', src: '/img/Layer_6.png', title: 'Digital transformation services' },
  { w:'77px', h:'74px', src: '/img/DevOps.png', title: 'Cloud & DevOps' },
  { w:'90px', h:'90px', src: '/img/Layer_8.png', title: 'UI/UX design' },
  { w:'140px', h:'112px', src: '/img/Layer_9.png', title: 'Cloud Migrations' }
];

const CloudServicesSection = () => {
  const [description, setDescription] = useState([]);

  useEffect(() => {
    fetch('/description.json')
      .then(response => response.json())
      .then(data => setDescription(data.description));
  }, []);

  const topRowServices = services.slice(0, 5);
  const bottomRowServices = services.slice(5);

  return (
    <section className={'text-center p-8 bg-white text-black'}>
      <div className={'flex flex-wrap justify-between font-montserrat bg-gradient-to-r from-[#203d5d] via-[#003140] to-[#003262] text-white p-4 rounded-lg mb-8'}>
        {description.length > 0 && (
          <p className={'w-full text-center mb-4 leading-[1.5] text-white text-2xl'} dangerouslySetInnerHTML={{ __html: description[0] }} />
        )}
        {description.slice(1).map((text, index) => (
          <p key={index} className={'w-[48%] mb-4 leading-[1.5] text-white'} dangerouslySetInnerHTML={{ __html: text }} />
        ))}
      </div>
      <h2 className={'text-2xl mb-8 bg-gradient-to-r from-[#e8ffff] via-[#0167b8] to-[#e8fffe]'}>A Complete Range of End-to-End Azure and AWS Cloud Services</h2>
      <div className={'flex flex-col items-center gap-8'}>
        <div className={'flex justify-center gap-8 w-full'}>
          {topRowServices.map((service, index) => (
            <div key={index} className={'flex flex-col items-center w-36 text-center relative'}>
              <div className={'relative w-[109px] h-[89px] flex items-center justify-center'}>
                <div className={'absolute w-[89px] h-[89px] bg-[#ffeacbfb] rounded-full z-0'}></div>
                <Image
                  src={service.src}
                  alt={service.title}
                  width={service.src === '/Cloud.png' ? 93 : service.src === '/Layer_1.png' ? 95 : service.src === '/Layer_2.png' ? 89 : service.src === '/Layer_3.png' ? 89 : service.src === '/Layer_4.png' ? 77 : service.src === '/Layer_5.png' ? 88 : service.src === '/Layer_6.png' ? 101 : service.src === '/DevOps.png' ? 77 : service.src === '/Layer_8.png' ? 90 : service.src === '/Layer_9.png' ? 140 : 50}
                  height={service.src === '/Cloud.png' ? 68 : service.src === '/Layer_1.png' ? 90 : service.src === '/Layer_2.png' ? 81 : service.src === '/Layer_3.png' ? 67 : service.src === '/Layer_4.png' ? 77 : service.src === '/Layer_5.png' ? 89 : service.src === '/Layer_6.png' ? 79 : service.src === '/DevOps.png' ? 74 : service.src === '/Layer_8.png' ? 90 : service.src === '/Layer_9.png' ? 112 : 50}
                />
              </div>
              <p>{service.title}</p>
            </div>
          ))}
        </div>
        <div className={'flex justify-center gap-8 w-full'}>
          {bottomRowServices.map((service, index) => (
            <div key={index} className={'flex flex-col items-center w-36 text-center relative'}>
              <div className={'relative w-[109px] h-[89px] flex items-center justify-center'}>
                <div className={'absolute w-[89px] h-[89px] bg-[#ffeacbfb] rounded-full z-0'}></div>
                <Image
                  src={service.src}
                  alt={service.title}
                  width={service.src === '/Cloud.png' ? 93 : service.src === '/Layer_1.png' ? 95 : service.src === '/Layer_2.png' ? 89 : service.src === '/Layer_3.png' ? 89 : service.src === '/Layer_4.png' ? 77 : service.src === '/Layer_5.png' ? 88 : service.src === '/Layer_6.png' ? 101 : service.src === '/DevOps.png' ? 77 : service.src === '/Layer_8.png' ? 90 : service.src === '/Layer_9.png' ? 140 : 50}
                  height={service.src === '/Cloud.png' ? 68 : service.src === '/Layer_1.png' ? 90 : service.src === '/Layer_2.png' ? 81 : service.src === '/Layer_3.png' ? 67 : service.src === '/Layer_4.png' ? 77 : service.src === '/Layer_5.png' ? 89 : service.src === '/Layer_6.png' ? 79 : service.src === '/DevOps.png' ? 74 : service.src === '/Layer_8.png' ? 90 : service.src === '/Layer_9.png' ? 112 : 50}
                />
              </div>
              <p>{service.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudServicesSection;
