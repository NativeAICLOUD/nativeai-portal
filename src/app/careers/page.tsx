import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';
import CareersClient from '../components/partials/careers/CareersClient';
import { CONTAINER, Eyebrow } from '@/app/components/partials/services/ServiceUI';

export const metadata: Metadata = {
  title: 'Careers | NativeCloud',
  description: 'Join NativeCloud — a team of cloud engineers, architects, and AI specialists building the future of enterprise cloud. View open positions and apply today.',
  openGraph: {
    title: 'Careers | NativeCloud',
    description: 'Join NativeCloud — a team of cloud engineers, architects, and AI specialists building the future of enterprise cloud.',
    url: 'https://nativeai.cloud/careers',
    images: [{ url: 'https://nativeai.cloud/nativeai.cloud-og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers | NativeCloud',
    description: 'Join NativeCloud — a team of cloud engineers, architects, and AI specialists.',
    images: ['https://nativeai.cloud/nativeai.cloud-og.png'],
  },
};

const perks = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Azure-first culture',
    desc: 'Work with the latest Microsoft cloud technologies every day.',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: 'Flexible working',
    desc: 'Hybrid and remote options across all engineering roles.',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    title: 'Learning budget',
    desc: 'Microsoft certifications and conference attendance covered.',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Small, senior team',
    desc: 'Work alongside architects and engineers with deep domain expertise.',
  },
];

export default function CareersPage() {
  const filePath = path.join(process.cwd(), 'public', 'jobs.json');
  const jobs = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  return (
    <div className="font-switzer">

      {/* ── Hero ── */}
      <div className="industries-hero-bg">
        <div className={`${CONTAINER} pb-12 pt-32 lg:pt-28`}>
          <div className="mb-6"><Eyebrow>Careers · We&apos;re hiring</Eyebrow></div>
          <h1 className="m-0 max-w-3xl text-[40px] font-medium leading-[1.05] text-[#111] sm:text-[52px] lg:text-[64px]">
            Build the future of enterprise cloud.
          </h1>
          <p className="mt-6 max-w-[560px] text-[18px] font-light leading-[1.6] text-[#111]">
            Join a small, senior team of cloud engineers, architects, and AI specialists — solving
            real problems for real businesses on Azure and AWS.
          </p>
          <div className="mt-8">
            <a
              href="https://www.linkedin.com/company/nativecloud"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#111] px-6 py-3 text-[15px] font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.22)] active:translate-y-0"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Follow us on LinkedIn
            </a>
          </div>
        </div>

        {/* blue divider — full viewport width */}
        <hr className="divider-blue m-0 h-1 w-full border-0" />
      </div>

      {/* ── Open positions ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pt-16 lg:pt-20`}>
          <div className="mb-8">
            <div className="mb-4"><Eyebrow>Open positions</Eyebrow></div>
            <h2 className="m-0 text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              Find your role.
            </h2>
            <p className="mt-3 text-[16px] font-normal leading-[1.5] text-[#6b7280]">
              Filter by department or work model, or search by role name.
            </p>
          </div>

          <CareersClient jobs={jobs} />

          {/* ── Perks ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 mb-24">
            {perks.map((p) => (
              <div
                key={p.title}
                className="flex flex-col gap-3 px-5 py-5 rounded-lg border border-[#e6e6e6] bg-white"
              >
                <span
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: '#f5f4f2', color: '#111' }}
                >
                  {p.icon}
                </span>
                <div>
                  <p className="font-medium text-[#111] text-[15px] mb-0.5">{p.title}</p>
                  <p className="text-[13px] text-[#6b7280] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
