import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import ApplyForm from '@/app/components/partials/careers/ApplyForm';

type Job = {
  id: number;
  title: string;
  department: string;
  location: string;
  workModel: string;
  type: string;
  slug: string;
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
    title: `Apply — ${job.title} | NativeCloud`,
    description: `Apply for the ${job.title} position at NativeCloud.`,
  };
}

export default function ApplyPage({ params }: { params: { slug: string } }) {
  const job = getJobs().find((j) => j.slug === params.slug);
  if (!job) notFound();

  return (
    <main className="min-h-screen bg-[#f7f8fa] pt-28 pb-24">
      <div className="max-w-[720px] mx-auto px-5 sm:px-8">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-[12px] text-[#0a0e1a]/40 mb-8">
          <Link href="/" className="hover:text-[#0a0e1a]/70 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/careers" className="hover:text-[#0a0e1a]/70 transition-colors">Careers</Link>
          <span>/</span>
          <Link href={`/careers/${job.slug}`} className="hover:text-[#0a0e1a]/70 transition-colors">{job.title}</Link>
          <span>/</span>
          <span className="text-[#0a0e1a]/70">Apply</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0a0e1a] mb-1">Apply for this role</h1>
          <p className="text-sm text-[#0a0e1a]/45">Fill in your details below and we&apos;ll get back to you within a few business days.</p>
        </div>

        <ApplyForm
          jobTitle={job.title}
          jobSlug={job.slug}
          department={job.department}
          location={job.location}
          workModel={job.workModel}
        />

      </div>
    </main>
  );
}
