'use client';

import React from 'react';
import Image from 'next/image';
import { Link } from 'react-transition-progress/next';
import { motion } from 'framer-motion';

import { Constants } from '@/Constants';
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

const navLinks = [
  {
    label:    'Going to Azure',
    sub:      'Migrate with confidence',
    href:     '/azure',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M3 15a4 4 0 0 0 4 4h9a5 5 0 0 0 1.8-9.7A7 7 0 1 0 3 15Z"/>
        <path d="M12 12v6M9 15l3-3 3 3"/>
      </svg>
    ),
  },
  {
    label:    'Accelerate with Azure',
    sub:      'Ship faster on the cloud',
    href:     '/accelerate-azure',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
  {
    label:    'Managed Services',
    sub:      'We run it, you focus',
    href:     '/managed-services',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/>
        <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
      </svg>
    ),
  },
  {
    label:    'Cloud Native Dev',
    sub:      'Build cloud-first apps',
    href:     '/cloud-native-sd',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    label:    'DevOps on Azure',
    sub:      'CI/CD that never sleeps',
    href:     '/devops-on-azure',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M8 12h8M12 8l4 4-4 4"/>
      </svg>
    ),
  },
  {
    label:    'Data Lifecycle Mgmt',
    sub:      'Data at every stage',
    href:     '/data-lifecycle-management',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M3 5v5c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
        <path d="M3 10v5c0 1.66 4.03 3 9 3s9-1.34 9-3v-5"/>
        <path d="M3 15v4c0 1.66 4.03 3 9 3s9-1.34 9-3v-4"/>
      </svg>
    ),
  },
];

type IPartnerType = typeof partnersData[0];
const marqueCls = 'marquee-item relative flex items-center justify-center py-18 gap-16';

const HomePartner = () => {
  return (
    <div className="relative home-partner mt-16 xl:mt-32">
      <div className="relative max-w-9xl mx-auto bg-[#0a0e1a] 2xl:rounded-2xl text-white overflow-hidden">

        {/* Warm ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(232,154,120,0.10)_0%,_transparent_60%)] pointer-events-none" />


        {/* Headline */}
        <div className="relative pt-16 pb-8 text-center px-4">
          <div className="inline-flex items-center gap-2 bg-[#e89a78]/10 border border-[#e89a78]/25 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
            <p className="text-xs uppercase tracking-widest text-[#e89a78] font-semibold">
              Start your AI &amp; cloud journey
            </p>
          </div>
          <h2 className="text-2xl sm:text-3.5xl lg:text-4.5xl font-bold leading-snug">
            Everything your business needs —{' '}
            <span className="text-[#e89a78]">in one place</span>
          </h2>
          <p className="text-white/45 text-sm mt-4 max-w-lg mx-auto leading-relaxed">
            Pick the service that fits where you are today. We handle the rest.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto px-4 mb-10 sm:mb-16">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.07 }}
              viewport={{ once: true, margin: '-40px' }}
            >
              <Link
                href={link.href}
                className="group flex items-start gap-3.5 p-4 rounded-xl border border-white/[0.08] bg-white/[0.03] hover:bg-[#e89a78]/[0.08] hover:border-[#e89a78]/35 transition-all duration-200 no-underline"
              >
                {/* icon */}
                <div className="shrink-0 w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.08] group-hover:bg-[#e89a78]/15 group-hover:border-[#e89a78]/30 flex items-center justify-center text-white/45 group-hover:text-[#e89a78] transition-all duration-200">
                  {link.icon}
                </div>

                {/* text */}
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-semibold text-white/80 group-hover:text-white leading-tight transition-colors">
                    {link.label}
                  </p>
                  <p className="text-[11px] text-white/35 group-hover:text-white/55 mt-0.5 transition-colors">
                    {link.sub}
                  </p>
                </div>

                {/* arrow */}
                <svg
                  className="shrink-0 w-3.5 h-3.5 text-white/20 group-hover:text-[#e89a78] mt-0.5 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Circle CTA */}
        <div className="flex justify-center items-center sm:mb-52 pt-8 sm:pt-0">
          <a
            href={`mailto:${Constants.MAIL}`}
            className="group sm:-mb-52 sm:size-[450px] rounded-full sm:border-2 sm:border-white/15 hover:sm:border-[#e89a78]/40 flex items-center flex-col justify-around relative sm:pt-8 pb-12 text-center transition-all duration-300 cursor-pointer"
          >
            {/* Glow on hover */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle,_rgba(232,154,120,0.10)_0%,_transparent_70%)]" />

            <p className="relative text-sm sm:text-base text-white/60 text-center w-full px-8 sm:px-16 leading-relaxed group-hover:text-white/85 transition-colors">
              <span className="block text-white font-semibold text-base sm:text-lg mb-3">
                Ready to build something great?
              </span>
              We love helping ambitious teams. Reach us at
              <br />
              <span className="text-[#e89a78] font-semibold mt-1 inline-block">
                {Constants.MAIL}
              </span>
            </p>

            <span className="relative text-4xl sm:text-5xl font-black bg-text-linear bg-clip-text text-transparent pt-10 sm:pt-0 group-hover:opacity-80 transition-opacity">
              Get in touch!
            </span>
          </a>
        </div>
      </div>

      {/* Partnership badges */}
      <div className="max-w-9xl mx-auto mt-20 sm:mt-24 sm:pt-20 mb-20 sm:mb-28 px-6 sm:px-12 xl:px-16">

        <motion.div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
              <p className="text-xs uppercase tracking-widest text-[#6b6b6b] font-semibold">Certifications</p>
            </div>
            <h2 className="text-2xl sm:text-3.5xl lg:text-4xl font-bold text-[#0a0e1a] leading-tight">
              Our level of partnership
            </h2>
          </div>
          <p className="text-[#6b6b6b] text-sm max-w-xs sm:text-right leading-relaxed">
            Certified by the platforms we build on — so you get expertise, not just familiarity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.05 }}
            viewport={{ once: true, margin: '-60px' }}
            className="group relative rounded-2xl border border-[#e8e0d8] bg-[#faf7f4] hover:border-[#e89a78] hover:shadow-lg transition-all duration-300 overflow-hidden p-8 sm:p-10 flex flex-col gap-6"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[radial-gradient(circle,_rgba(232,154,120,0.08)_0%,_transparent_70%)] pointer-events-none" />
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78]" />
              <span className="text-xs uppercase tracking-widest text-[#e89a78] font-semibold">Microsoft Azure</span>
            </div>
            <Image
              src={MicrosotPartnerImg}
              alt="Microsoft Partner"
              className="h-14 w-auto object-contain object-left"
              placeholder="blur"
            />
            <p className="text-[#6b6b6b] text-sm leading-relaxed max-w-sm">
              Certified Microsoft partner specialising in Azure cloud architecture, AI services, DevOps, and application modernisation.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {['Azure AI', 'AKS', 'DevOps', 'App Modernisation'].map((tag) => (
                <span key={tag} className="text-xs font-medium text-[#b8714e] bg-[#f4ebe8] border border-[#e8d0c4] px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.15 }}
            viewport={{ once: true, margin: '-60px' }}
            className="group relative rounded-2xl border border-[#e8e0d8] bg-[#faf7f4] hover:border-[#e89a78] hover:shadow-lg transition-all duration-300 overflow-hidden p-8 sm:p-10 flex flex-col gap-6"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[radial-gradient(circle,_rgba(232,154,120,0.08)_0%,_transparent_70%)] pointer-events-none" />
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78]" />
              <span className="text-xs uppercase tracking-widest text-[#e89a78] font-semibold">Amazon Web Services</span>
            </div>
            <Image
              src={AWSPartnerImg}
              alt="AWS Partner"
              className="h-14 w-auto object-contain object-left"
              placeholder="blur"
            />
            <p className="text-[#6b6b6b] text-sm leading-relaxed max-w-sm">
              AWS certified partner delivering scalable cloud infrastructure, serverless architectures, and managed cloud operations on AWS.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {['EC2 & ECS', 'Lambda', 'Cloud Migrations', 'Managed Ops'].map((tag) => (
                <span key={tag} className="text-xs font-medium text-[#b8714e] bg-[#f4ebe8] border border-[#e8d0c4] px-3 py-1 rounded-full">
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
