'use client';

import React from 'react';
import Image from 'next/image';
import { Link } from 'react-transition-progress/next';
import { motion } from 'framer-motion';

import { Constants } from '@/Constants';
import { AWSPartnerImg, MicrosotPartnerImg } from '@/ImagePath';
import { Each } from '../../helpers/Each';
import { OrbitalServicesMap } from '../../ui/OrbitalServicesMap';

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

const serviceGroups = [
  {
    label: 'Services',
    items: [
      {
        title: 'Custom Development', sub: 'Tailored software for your workflows',
        href: '/services/custom-development',
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16"/></svg>,
      },
      {
        title: 'Cloud Architecture', sub: 'Scalable infrastructure design',
        href: Constants.PAGES.CLOUD_SOFTWARE_ARCHITECTURE,
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7-7H4a2 2 0 0 0-2 2Z"/><path d="M9 22V12h6v10M14 4l6 6"/></svg>,
      },
      {
        title: 'Migrate to Azure', sub: 'Low-risk, zero-downtime migration',
        href: Constants.PAGES.MIGRATE_TO_AZURE,
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9M8 17l4-4 4 4"/></svg>,
      },
      {
        title: 'Design', sub: 'Interfaces your users will love',
        href: '/services/design',
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>,
      },
    ],
  },
  {
    label: 'AI & Data',
    items: [
      {
        title: 'AI Agents & RAG', sub: 'Intelligent automation & LLMs',
        href: '/services/ai-agents-rag',
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2M20 14h2M15 13v2M9 13v2"/></svg>,
      },
      {
        title: 'Data Lifecycle', sub: 'Raw data to live dashboards',
        href: Constants.PAGES.DATA_LIFECYCLE_MANAGEMENT,
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>,
      },
      {
        title: 'Cloud Native Dev', sub: 'Kubernetes & microservices',
        href: Constants.PAGES.CLOUD_NATIVE_SD,
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"/><path d="m7 16.5-4.74-2.85M7 16.5l5-3M7 16.5v5.17M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"/><path d="m17 16.5-5-3M17 16.5 21.74 13.65M17 16.5v5.17M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"/><path d="M12 8 7.26 5.15M12 8l4.74-2.85M12 13.5V8"/></svg>,
      },
      {
        title: 'DevOps on Azure', sub: 'CI/CD & infrastructure-as-code',
        href: Constants.PAGES.DEVOPS_ON_AZURE,
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M7.5 4.27l9 5.15M3.29 7 12 12l8.71-5M12 22V12"/></svg>,
      },
    ],
  },
  {
    label: 'Innovate',
    items: [
      {
        title: 'Case Studies', sub: 'How we deliver for clients',
        href: Constants.PAGES.CASE_STUDIES,
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
      },
      {
        title: 'GitHub Accelerator', sub: 'Copilot, migration & DevSecOps',
        href: Constants.PAGES.GITHUB_ACCELERATOR,
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>,
      },
      {
        title: 'AI Accelerator', sub: 'Azure AI from use case to production',
        href: Constants.PAGES.AI_ACCELERATOR,
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>,
      },
    ],
  },
];

type IPartnerType = typeof partnersData[0];
const marqueCls = 'marquee-item relative flex items-center justify-center py-18 gap-16';

const HomePartner = () => {
  return (
    <div className="relative home-partner mt-10 xl:mt-14 px-4 xl:px-6">
      <div className="relative max-w-screen-2xl mx-auto bg-[#0a0e1a] rounded-[32px] text-white overflow-hidden">

        {/* Animated orbital services map */}
        <OrbitalServicesMap />

        {/* Headline + right visual */}
        <div className="relative z-[1] grid grid-cols-1 lg:grid-cols-[1fr_auto] items-start gap-8 lg:gap-16 pt-12 px-6 sm:px-14 xl:px-16">

          {/* Left: badge + headline */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#e89a78]/10 border border-[#e89a78]/25 rounded-full px-3.5 py-1 mb-4">
              <p className="text-[11px] uppercase tracking-widest text-[#e89a78] font-semibold">
                Start your AI &amp; cloud journey
              </p>
            </div>
            <h2 className="text-2xl sm:text-2xl lg:text-3xl font-bold leading-snug max-w-sm text-white">
              Everything your business needs —{' '}
              <span className="text-[#e89a78]">in one place</span>
            </h2>
          </div>

          {/* Right: service panel — desktop only */}
          <div className="hidden lg:block relative w-[256px] xl:w-[272px] shrink-0">
            <div
              className="absolute -inset-16 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(91,139,245,0.06) 0%, transparent 70%)' }}
            />
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(16px)',
              }}
            >
              {([
                {
                  label: 'Services', color: '#e89a78',
                  items: ['Custom Development', 'Cloud Architecture', 'Migrate to Azure'],
                },
                {
                  label: 'AI & Data', color: '#5B8BF5',
                  items: ['AI Agents & RAG', 'Data Lifecycle', 'DevOps on Azure'],
                },
              ] as const).map(({ label, color, items }, gi) => (
                <div key={label}>
                  {gi > 0 && (
                    <div className="mx-4" style={{ height: 1, background: 'rgba(255,255,255,0.06)' }} />
                  )}
                  <div className="px-4 py-4">
                    <span
                      className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-[0.13em] mb-3"
                      style={{ background: `${color}18`, color }}
                    >
                      {label}
                    </span>
                    <ul className="flex flex-col gap-0.5">
                      {items.map((item) => (
                        <li key={item} className="flex items-center justify-between py-1.5">
                          <span className="text-[12.5px] text-white/50 leading-snug">{item}</span>
                          <svg className="w-3 h-3 shrink-0 text-white/15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18l6-6-6-6" />
                          </svg>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Mobile service list */}
        <div className="relative z-[1] lg:hidden px-6 pt-8 pb-4">
          {[
            { label: 'Services',  color: '#e89a78', items: ['Custom Development', 'Cloud Architecture', 'Migrate to Azure', 'Design'] },
            { label: 'AI & Data', color: '#7B9CFF', items: ['AI Agents & RAG', 'Data Lifecycle', 'Cloud Native Dev', 'DevOps on Azure'] },
            { label: 'Innovate',  color: '#59C28A', items: ['Case Studies', 'GitHub Accelerator', 'AI Accelerator'] },
          ].map((group) => (
            <div key={group.label} className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ background: group.color }} />
                <span className="text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: group.color }}>
                  {group.label}
                </span>
              </div>
              <ul className="flex flex-col">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 py-3.5 border-b border-white/[0.07] last:border-0">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: group.color, opacity: 0.6 }} />
                    <span className="text-[15px] font-medium text-white leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Desktop spacer */}
        <div className="relative z-[1] hidden lg:block h-28 xl:h-36" />

        {/* CTA */}
        <div className="relative z-[1] px-6 sm:px-14 xl:px-16 py-12 sm:py-16 lg:py-20">
          <div>
            <motion.div
              className="flex flex-col items-start gap-5 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-60px' }}
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug">
                Ready to automate and<br className="hidden sm:block" /> modernize your business?
              </h3>

              <p className="text-white/40 text-sm sm:text-base max-w-md leading-relaxed">
                Let&apos;s find where AI and cloud can make the biggest impact for your team.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-1">
                <Link
                  href={Constants.PAGES.SCHEDULE_CALL}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                  style={{ background: '#e89a78', boxShadow: '0 8px 32px rgba(232,154,120,0.45)' }}
                >
                  Book a Call
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
                  </svg>
                </Link>
                <a
                  href={`mailto:${Constants.MAIL}`}
                  className="text-sm text-white/35 hover:text-[#e89a78] transition-colors"
                >
                  {Constants.MAIL}
                </a>
              </div>
            </motion.div>

          </div>
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
