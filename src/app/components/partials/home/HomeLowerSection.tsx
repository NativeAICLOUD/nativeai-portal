"use client";

import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import CoomingSoon from '../../ui/CoomingSoon';
import { button } from '../../utils/tw-variants';
import { Each } from '../../helpers/Each';

const services = [
  {
    title: 'Generative AI',
    desc: 'We create and fine-tune Language Models (LLMs) for companies. We specialize in crafting AI assistants and custom seamlessly integrate into your real-world operations, unlocking new possibilities for your business',
    icon: '/img/icon-genai.svg',
  },
  {
    title: 'DevOps',
    desc: 'Accelerate application development and deployment by implementing DevOps practices on the cloud.',
    icon: '/img/icon-devops.svg',
  },
  {
    title: '.NET',
    desc: 'We solve problems and create unique value through custom development. We work closely with you to deliver solutions that exceed your expectations and help your business achieve its goals. ',
    icon: '/img/icon-net.svg',
  },
  {
    title: 'Azure & AWS',
    desc: 'Native Cloud will help you implement DevOps best practices and leverage powerful Azure and AWS solutions to automate your cloud infrastructure.',
    icon: '/img/icon-azure-aws.svg',
  },
];
type IServices = typeof services[0];

const HomeLowerSection = () => {
  return (
    <section className={'relative pt-10 px-2 sm:px-4 2xl:px-0'}>
      <div className={'relative max-w-9xl mx-auto'}>
        <h2 className={'text-2.5xl sm:text-3.5xl lg:text-4.5xl mb-15 text-center font-semibold leading-snug px-2 lg:px-0'}>Services we provide</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 xl:gap-x-20 xl:gap-y-12">
          <Each
            of={services}
            render={(item: IServices, index: number) => (
              <div className="card rounded-xl shadow-xl">
                <div className={`card-header rounded-t-xl h-6  ${index === 1 ? 'bg-service-header-linear' : 'bg-[#352F5D]'}`}></div>
                <div className="card-content relative flex flex-col-reverse lg:flex-row items-start md:gap-6 p-4 lg:py-5 sm:px-6 lg:px-10">
                  <div className="group pb-16 lg:pb-20 after:bg-black after:absolute after:w-[calc(100%-48px)] lg:after:w-[calc(100%-80px)] after:h-[1px] after:mt-4">
                    <h3 className={`text-4xl lg:text-5xl xl:text-6xl font-bold mt-4 mb-6 bg-clip-text ${
                      index === 0 || index === 2
                        ? 'bg-service-header-title-linear'
                        : index === 1
                          ? 'bg-service-header-title1-linear'
                          : 'bg-service-header-title2-linear' }`}>{item.title}</h3>
                    <p className="font-medium opacity-80 text-sm sm:text-base">{item.desc}</p>
                  </div>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    className='object-contain max-w-[120px] sm:max-w-[140px] xl:max-w-[160px] ml-auto lg:ml-0'
                    width={170}
                    height={150} />
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeLowerSection;
