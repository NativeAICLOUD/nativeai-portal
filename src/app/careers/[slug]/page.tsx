import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { BGNativeWhite } from '@/ImagePath';
import JobTabs from '@/app/components/partials/careers/JobTabs';

type Job = {
  id: number;
  title: string;
  department: string;
  location: string;
  workModel: string;
  type: string;
  slug: string;
  description: string;
  about: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
};

function getJobs(): Job[] {
  const filePath = path.join(process.cwd(), 'public', 'jobs.json');
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

export async function generateStaticParams() {
  return getJobs().map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const job = getJobs().find((j) => j.slug === params.slug);
  if (!job) return {};
  return {
    title: `${job.title} | Careers | NativeCloud`,
    description: job.description,
    openGraph: {
      title: `${job.title} | NativeCloud`,
      description: job.description,
      url: `https://nativeai.cloud/careers/${job.slug}`,
      images: [{ url: 'https://nativeai.cloud/nativeai.cloud-og.png', width: 1200, height: 630 }],
    },
  };
}

const MODEL_COLORS_DARK: Record<string, { bg: string; color: string }> = {
  Remote:    { bg: 'rgba(255,255,255,0.08)',  color: 'rgba(255,255,255,0.70)' },
  Hybrid:    { bg: 'rgba(232,154,120,0.20)', color: '#e89a78' },
  'On-site': { bg: 'rgba(91,124,250,0.18)',  color: '#818cf8' },
};

const MODEL_COLORS: Record<string, { bg: string; color: string }> = {
  Remote:    { bg: 'rgba(10,14,26,0.07)',    color: 'rgba(10,14,26,0.55)' },
  Hybrid:    { bg: 'rgba(232,154,120,0.14)', color: '#c4743c' },
  'On-site': { bg: 'rgba(91,124,250,0.12)',  color: '#4a5fd4' },
};

const TYPE_COLORS: Record<string, { bg: string; color: string }> = {
  'Full-time': { bg: 'rgba(10,14,26,0.06)',  color: 'rgba(10,14,26,0.5)' },
  Contract:    { bg: 'rgba(248,146,1,0.10)', color: '#b86a30' },
};

const TYPE_COLORS_DARK: Record<string, { bg: string; color: string }> = {
  'Full-time': { bg: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.55)' },
  Contract:    { bg: 'rgba(248,146,1,0.18)',   color: '#fbbf24' },
};

export default function JobDetailPage({ params }: { params: { slug: string } }) {
  const job = getJobs().find((j) => j.slug === params.slug);
  if (!job) notFound();

  const modelStyle     = MODEL_COLORS[job.workModel]     ?? MODEL_COLORS['On-site'];
  const modelStyleDark = MODEL_COLORS_DARK[job.workModel] ?? MODEL_COLORS_DARK['On-site'];
  const typeStyle      = TYPE_COLORS[job.type]            ?? TYPE_COLORS['Full-time'];
  const typeStyleDark  = TYPE_COLORS_DARK[job.type]       ?? TYPE_COLORS_DARK['Full-time'];

  return (
    <main className="min-h-screen pb-24" style={{ background: 'linear-gradient(135deg, #080c1a 0%, #0d1225 40%, #111828 70%, #0a0e1a 100%)' }}>

      {/* ── Hero header (footer gradient) ── */}
      <div className="relative overflow-hidden pt-28 pb-12" style={{ background: 'linear-gradient(135deg, #080c1a 0%, #0d1225 40%, #111828 70%, #0a0e1a 100%)' }}>

        {/* Ambient glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: 'absolute', top: '-20%', left: '-5%',  width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(232,154,120,0.13) 0%, transparent 65%)', filter: 'blur(1px)' }} />
          <div style={{ position: 'absolute', bottom: '-30%', right: '5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(91,124,250,0.10) 0%, transparent 65%)' }} />
          <div style={{ position: 'absolute', top: '10%', right: '20%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(155,107,255,0.07) 0%, transparent 65%)' }} />
          <div className="absolute inset-0" style={{ backgroundImage: "url('/img/noise-background.jpg')", backgroundSize: '280px 280px', opacity: 0.03 }} />
        </div>

        {/* Big watermark logo */}
        <Image
          src={BGNativeWhite}
          alt=""
          aria-hidden
          className="absolute right-0 top-1/2 -translate-y-1/2 h-[340px] w-auto opacity-[0.07] pointer-events-none select-none"
        />

        <div className="relative max-w-[800px] mx-auto px-5 sm:px-8">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-[12px] text-white/30 mb-10">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/careers" className="hover:text-white/60 transition-colors">Careers</Link>
            <span>/</span>
            <span className="text-white/50">{job.title}</span>
          </nav>

          {/* Department */}
          <p className="text-[11px] font-bold uppercase tracking-widest text-white/30 mb-3">{job.department}</p>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
            {job.title}
          </h1>

          {/* Meta badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-sm font-semibold" style={modelStyleDark}>
              {job.workModel}
            </span>
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-sm font-semibold" style={typeStyleDark}>
              {job.type}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-white/35">
              <svg className="w-3.5 h-3.5 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 13-8 13s-8-7-8-13a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              {job.location}
            </span>
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-[800px] mx-auto px-5 sm:px-8 pt-8">
        <JobTabs job={job} modelStyle={modelStyle} typeStyle={typeStyle} />
      </div>

    </main>
  );
}
