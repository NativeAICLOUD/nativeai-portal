import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import type { Metadata } from 'next';
import { BG3Img, BGGroupLogo, BG_INVERSE } from '@/ImagePath';
import CareersClient from '../components/partials/careers/CareersClient';

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
    <div className="relative min-h-full">
      {/* Background */}
      <div className="absolute w-full h-full z-[-1] top-16 inset-x-0">
        <Image src={BG3Img} alt="Background" className="!h-auto md:!-top-36" layout="fill" objectFit="cover" objectPosition="top" quality={100} />
        <Image src={BGGroupLogo} alt="Design Element" layout="fill" objectFit="contain" objectPosition="top right" quality={100} />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 2xl:px-0">

        {/* ── Hero ── */}
        <div className="pt-40 pb-14 lg:pt-48 lg:pb-20">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(248,146,1,0.10)', color: '#c4743c', border: '1px solid rgba(248,146,1,0.25)' }}
          >
            We&apos;re hiring
          </div>

          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight text-[#0a0e1a] max-w-3xl mb-5">
            Build the future of{' '}
            <span className="bg-gradient-to-r from-[#f0a060] via-[#e89a78] to-[#d4845c] bg-clip-text text-transparent">
              enterprise cloud
            </span>
          </h1>

          <p className="text-[#0a0e1a]/55 text-base lg:text-lg max-w-xl leading-relaxed mb-8">
            We build cloud infrastructure for enterprise clients across Europe. If you want to work with the best Azure and AI stack, ship real solutions, and grow fast alongside a senior team — this is your place.
          </p>

          <a
            href="https://www.linkedin.com/company/nativecloud"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:opacity-90 hover:scale-[1.02] mb-10"
            style={{ background: '#0077b5', color: '#fff' }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Follow us on LinkedIn
          </a>

        </div>

        {/* ── Open positions ── */}
        <div className="mb-6">
          <h2 className="text-2xl font-extrabold text-[#0a0e1a] mb-1">Open positions</h2>
          <p className="text-sm text-[#0a0e1a]/60">Filter by department or work model, or search by role name.</p>
        </div>

        <CareersClient jobs={jobs} />

        {/* ── Perks ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 mb-24">
          {perks.map((p) => (
            <div
              key={p.title}
              className="flex flex-col gap-3 px-5 py-5 rounded-2xl border border-black/[0.07] bg-white/70 backdrop-blur-sm"
            >
              <span
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: 'rgba(232,154,120,0.12)', color: '#e89a78' }}
              >
                {p.icon}
              </span>
              <div>
                <p className="font-bold text-[#0a0e1a] text-sm mb-0.5">{p.title}</p>
                <p className="text-xs text-[#0a0e1a]/50 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Image
        src={BG_INVERSE}
        alt="Design Element"
        className="absolute bottom-0 left-0 w-full h-full max-w-[800px] z-[-1] object-contain object-left-bottom"
        quality={100}
      />
    </div>
  );
}
