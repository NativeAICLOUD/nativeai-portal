'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { AWSPartnerImg, MicrosotPartnerImg } from '@/ImagePath';

const HomePartner = () => {
  return (
    <div className="relative">

      {/* Partnership badges */}
      <div className="font-switzer max-w-9xl mx-auto px-6 py-16 sm:px-12 sm:py-20 lg:py-24 xl:px-16">

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
            className="flex flex-col gap-6 rounded-lg border border-[#e6e6e6] bg-white p-8 sm:p-10 transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
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
            className="flex flex-col gap-6 rounded-lg border border-[#e6e6e6] bg-white p-8 sm:p-10 transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
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
    </div>
  );
};

export default HomePartner;
