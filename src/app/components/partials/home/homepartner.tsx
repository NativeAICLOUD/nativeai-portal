'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { AWSPartnerImg, MicrosotPartnerImg } from '@/ImagePath';
import { Each } from '../../helpers/Each';

const partnersData = [
  { name: 'Azure AI Services', img: 'azure.svg', className: 'w-[160px] sm:w-[180px]' },
  { name: 'Kubernetes', img: 'kubernetes.svg', className: 'w-[200px] sm:w-[240px]' },
  { name: 'Semantic Kernel', img: 'skernel.svg', className: 'w-[150px] sm:w-[170px]' },
  { name: 'React', img: 'react.svg', className: 'w-[60px] sm:w-[80px]' },
  { name: 'Blazor', img: 'blazor.svg', className: 'w-[130px] sm:w-[150px]' },
  { name: 'C#', img: 'csharp.svg', className: 'w-[80px] sm:w-[80px]' },
  { name: '.Net', img: 'dotnet.svg', className: 'w-[80px] sm:w-[100px]' },
  { name: 'ChatGpt', img: 'chatgpt.svg', className: 'w-[80px] sm:w-[140px]' },
  { name: 'Amazon Web Services', img: 'aws.svg', className: 'w-[160px] sm:w-[180px]' },
  { name: 'ASP.NET Core', img: 'aspnet.svg', className: 'w-[120px] sm:w-[140px]' },
  { name: 'Docker', img: 'docker.svg', className: 'w-[80px] sm:w-[100px]' },
];


type IPartnerType = typeof partnersData[0];
const marqueCls = 'marquee-item relative flex items-center justify-center py-18 gap-16';

const HomePartner = () => {
  return (
    <div className="relative home-partner mt-10 xl:mt-14 px-4 xl:px-6">

      {/* Partnership badges */}
      <div className="font-switzer max-w-9xl mx-auto mt-20 sm:mt-24 sm:pt-20 mb-20 sm:mb-28 px-6 sm:px-12 xl:px-16">

        <motion.div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#9ca3af] mb-4">Certifications</p>
            <h2 className="text-[30px] md:text-[40px] font-medium text-[#111] leading-[1.1]">
              Our level of partnership
            </h2>
          </div>
          <p className="text-[#6b7280] text-[15px] font-light max-w-xs sm:text-right leading-relaxed">
            Certified by the platforms we build on — so you get expertise, not just familiarity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.05 }}
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col gap-6 rounded-lg border border-[#e6e6e6] bg-white p-8 sm:p-10 transition-shadow duration-300 hover:shadow-[0_4px_16px_rgba(10,14,26,0.08)]"
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#9ca3af]">Microsoft Azure</span>
            <Image
              src={MicrosotPartnerImg}
              alt="Microsoft Partner"
              className="h-14 w-auto object-contain object-left"
              placeholder="blur"
            />
            <p className="text-[15px] leading-relaxed text-[#111] max-w-sm">
              Certified Microsoft partner specialising in Azure cloud architecture, AI services, DevOps, and application modernisation.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {['Azure AI', 'AKS', 'DevOps', 'App Modernisation'].map((tag) => (
                <span key={tag} className="text-[12px] font-medium text-[#6b7280] bg-[#fafafa] border border-[#e6e6e6] px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.15 }}
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col gap-6 rounded-lg border border-[#e6e6e6] bg-white p-8 sm:p-10 transition-shadow duration-300 hover:shadow-[0_4px_16px_rgba(10,14,26,0.08)]"
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#9ca3af]">Amazon Web Services</span>
            <Image
              src={AWSPartnerImg}
              alt="AWS Partner"
              className="h-14 w-auto object-contain object-left"
              placeholder="blur"
            />
            <p className="text-[15px] leading-relaxed text-[#111] max-w-sm">
              AWS certified partner delivering scalable cloud infrastructure, serverless architectures, and managed cloud operations on AWS.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {['EC2 & ECS', 'Lambda', 'Cloud Migrations', 'Managed Ops'].map((tag) => (
                <span key={tag} className="text-[12px] font-medium text-[#6b7280] bg-[#fafafa] border border-[#e6e6e6] px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Technology marquee */}
      <div className="relative slider-partners overflow-x-clip mb-16">
        <div className="marquee-partner">
          <div className="marquee-group items-center gap-20">
            <ImageGroup marqueCls={marqueCls} />
          </div>
          <div className="marquee-group items-center gap-20">
            <ImageGroup marqueCls={marqueCls} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageGroup = ({ marqueCls }: { marqueCls: string }) => (
  <Each of={partnersData} render={({ name, img, className }: IPartnerType) =>
    <>
      <div className={marqueCls}>
        <Image
          src={`/img/partners/${img}`}
          className={`object-contain ${className}`}
          width={200}
          height={60}
          alt={name}
        />
      </div>
      <div className="divider bg-black/10 min-w-[1px] h-7.5" />
    </>
  } />
);

export default HomePartner;
