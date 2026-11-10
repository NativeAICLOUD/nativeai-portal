'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { AWSPartnerImg, MicrosotPartnerImg } from '@/ImagePath';
import { CONTAINER, SECTION_Y, H2, BODY, TAG_PILL } from './HomeUI';

const HomePartner = () => {
  return (
    <div className="relative">

      {/* Partnership badges */}
      <div className={`font-switzer ${CONTAINER} ${SECTION_Y}`}>

        <motion.div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#6B7280] mb-4">Certifications</p>
            <h2 className={H2}>
              Our level of partnership
            </h2>
          </div>
          <p className={`max-w-xs sm:text-right ${BODY}`}>
            Certified by the platforms we build on — so you get expertise, not just familiarity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.05 }}
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col gap-6 rounded-2xl border border-[#E6E6E6] bg-white p-8 sm:p-10 transition-colors duration-200 hover:border-[#111827]/15"
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#6B7280]">Microsoft Azure</span>
            <Image
              src={MicrosotPartnerImg}
              alt="Microsoft Partner"
              className="h-14 w-auto object-contain object-left"
              placeholder="blur"
            />
            <p className={`max-w-sm ${BODY}`}>
              Certified Microsoft partner specialising in Azure cloud architecture, AI services, DevOps, and application modernisation.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {['Azure AI', 'AKS', 'DevOps', 'App Modernisation'].map((tag) => (
                <span key={tag} className={TAG_PILL}>
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
            className="flex flex-col gap-6 rounded-2xl border border-[#E6E6E6] bg-white p-8 sm:p-10 transition-colors duration-200 hover:border-[#111827]/15"
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#6B7280]">Amazon Web Services</span>
            <Image
              src={AWSPartnerImg}
              alt="AWS Partner"
              className="h-14 w-auto object-contain object-left"
              placeholder="blur"
            />
            <p className={`max-w-sm ${BODY}`}>
              AWS certified partner delivering scalable cloud infrastructure, serverless architectures, and managed cloud operations on AWS.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {['EC2 & ECS', 'Lambda', 'Cloud Migrations', 'Managed Ops'].map((tag) => (
                <span key={tag} className={TAG_PILL}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.25 }}
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col gap-6 rounded-2xl border border-[#E6E6E6] bg-white p-8 sm:p-10 transition-colors duration-200 hover:border-[#111827]/15 sm:col-span-2 lg:col-span-1"
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#6B7280]">Anthropic</span>
            <div className="flex h-14 items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/partners/claude.svg" alt="" aria-hidden="true" className="h-11 w-11" />
              <p className="m-0 text-[34px] font-medium leading-none tracking-[-0.02em] text-[#111827]">Claude</p>
              <span className="mx-1 h-8 w-px bg-[#E6E6E6]" aria-hidden="true" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/partners/anthropic.svg" alt="Anthropic" className="h-6 w-6" />
            </div>
            <p className={`max-w-sm ${BODY}`}>
              Building production AI agents and applications on Anthropic&apos;s Claude models — agentic workflows, tool use, and secure enterprise deployments.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {['Claude Models', 'Agentic Workflows', 'MCP', 'Claude Code'].map((tag) => (
                <span key={tag} className={TAG_PILL}>
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
