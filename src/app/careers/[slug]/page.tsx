import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import JobTabs from '@/app/components/partials/careers/JobTabs';
import { Eyebrow } from '@/app/components/partials/services/ServiceUI';
import db from '@/lib/db';
import Job from '@/models/Job';
import { getFallbackJob } from '@/lib/jobsFallback';

export const dynamic = 'force-dynamic';

async function getJob(slug: string) {
  try {
    await db.connect();
    const doc = await Job.findOne({ slug, active: true });
    if (!doc) throw new Error('not in database');
    return {
      title: doc.title,
      department: doc.department,
      location: doc.location,
      workModel: doc.workModel,
      type: doc.type,
      slug: doc.slug,
      description: doc.description,
      about: doc.about,
      responsibilities: doc.responsibilities,
      requirements: doc.requirements,
      preferredRequirements: doc.preferredRequirements,
      benefits: doc.benefits,
    };
  } catch (err) {
    console.error('[careers/[slug]] falling back to jobs.json:', err);
    return getFallbackJob(slug);
  }
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const job = await getJob(params.slug);
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

const MODEL_COLORS: Record<string, { bg: string; color: string }> = {
  Remote:    { bg: '#f3f4f6', color: '#374151' },
  Hybrid:    { bg: '#f3f4f6', color: '#374151' },
  'On-site': { bg: '#f3f4f6', color: '#374151' },
};

const TYPE_COLORS: Record<string, { bg: string; color: string }> = {
  'Full-time': { bg: '#f3f4f6', color: '#374151' },
  Contract:    { bg: '#f3f4f6', color: '#374151' },
};

export default async function JobDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const job = await getJob(params.slug);
  if (!job) notFound();

  const modelStyle = MODEL_COLORS[job.workModel] ?? MODEL_COLORS['On-site'];
  const typeStyle  = TYPE_COLORS[job.type]       ?? TYPE_COLORS['Full-time'];

  return (
    <main className="font-switzer min-h-screen bg-white pb-24">

      {/* ── Hero ── */}
      <div className="industries-hero-bg-softer">
        <div className="relative mx-auto max-w-[820px] px-5 sm:px-8 pt-32 pb-10">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-[12px] text-[#9ca3af] mb-8">
            <Link href="/" className="hover:text-[#111] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/careers" className="hover:text-[#111] transition-colors">Careers</Link>
            <span>/</span>
            <span className="text-[#6b7280]">{job.title}</span>
          </nav>

          <div className="mb-4"><Eyebrow>{job.department}</Eyebrow></div>

          <h1 className="m-0 text-[34px] sm:text-[44px] font-medium leading-[1.08] text-[#111]">
            {job.title}
          </h1>

          {/* Meta badges */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-sm font-medium" style={modelStyle}>
              {job.workModel}
            </span>
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-sm font-medium" style={typeStyle}>
              {job.type}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-[#6b7280]">
              <svg className="w-3.5 h-3.5 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 13-8 13s-8-7-8-13a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              {job.location}
            </span>
          </div>
        </div>

        {/* blue divider — matches the homepage hero/footer gradient */}
        <hr className="divider-blue m-0 h-1 w-full border-0" />
      </div>

      {/* ── Content ── */}
      <div className="max-w-[820px] mx-auto px-5 sm:px-8 pt-10">
        <JobTabs job={job} modelStyle={modelStyle} typeStyle={typeStyle} />
      </div>

    </main>
  );
}
