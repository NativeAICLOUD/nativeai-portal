import type { Metadata } from 'next';
import WorkshopCards from '../components/partials/workshop';
import { CONTAINER, Eyebrow, PrimaryButton, SecondaryButton } from '@/app/components/partials/services/ServiceUI';

export const metadata: Metadata = {
  title: 'Workshops | NativeCloud',
  description: 'Hands-on Azure, Kubernetes and AI workshops for engineering teams. Live sessions, real workloads, expert instructors.',
  openGraph: {
    title: 'Workshops | NativeCloud',
    description: 'Hands-on Azure, Kubernetes and AI workshops for engineering teams. Live sessions, real workloads, expert instructors.',
    url: 'https://nativeai.cloud/workshops',
    images: [{ url: 'https://nativeai.cloud/nativeai.cloud-og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workshops | NativeCloud',
    description: 'Hands-on Azure, Kubernetes and AI workshops for engineering teams.',
    images: ['https://nativeai.cloud/nativeai.cloud-og.png'],
  },
};

const cards = [
  {
    id: 1,
    level: 'Basic',
    color: 'orange',
    link: '',
    title: 'Azure Cloud Fundamentals',
    desc: 'Get up to speed with Microsoft Azure. Learn core services, resource management, and how to architect your first cloud workload — no prior cloud experience required.',
    date: '24 May 2025',
    duration: '2 hours',
    language: 'English',
    format: 'Online',
    tags: ['Azure', 'Beginner'],
  },
  {
    id: 2,
    level: 'Deep Dive',
    color: 'red',
    link: '',
    title: 'Kubernetes on AKS',
    desc: 'Go deep on Azure Kubernetes Service. Cover cluster design, workload scheduling, autoscaling, and production-grade observability for containerised applications.',
    date: '31 May 2025',
    duration: '4 hours',
    language: 'English',
    format: 'Online',
    tags: ['Kubernetes', 'AKS'],
  },
  {
    id: 3,
    level: 'Special',
    color: 'blue',
    link: '',
    title: 'AI Agents & RAG on Azure',
    desc: 'Build production-ready AI Agents powered by GPT-4o and Azure AI Search. Implement Retrieval-Augmented Generation pipelines connected to your own data.',
    date: '7 Jun 2025',
    duration: '3 hours',
    language: 'English',
    format: 'Online',
    tags: ['AI', 'RAG', 'GPT-4o'],
  },
  {
    id: 4,
    level: 'Basic',
    color: 'orange',
    link: '',
    title: 'DevOps on Azure Bootcamp',
    desc: 'Set up CI/CD pipelines with Azure DevOps and GitHub Actions. Automate builds, tests, and deployments to Azure with infrastructure-as-code using Bicep and Terraform.',
    date: '14 Jun 2025',
    duration: '3 hours',
    language: 'English',
    format: 'Online',
    tags: ['DevOps', 'CI/CD'],
  },
  {
    id: 5,
    level: 'Deep Dive',
    color: 'red',
    link: '',
    title: 'Cloud-Native Architecture',
    desc: 'Design scalable, resilient microservices on Azure. Cover event-driven patterns, service mesh, distributed tracing, and zero-downtime deployment strategies.',
    date: '21 Jun 2025',
    duration: '4 hours',
    language: 'English',
    format: 'Online',
    tags: ['Architecture', 'Microservices'],
  },
  {
    id: 6,
    level: 'Special',
    color: 'blue',
    link: '',
    title: 'Azure Security & Compliance',
    desc: 'Harden your Azure environment. Implement Zero Trust, manage identities with Entra ID, configure Defender for Cloud, and meet compliance requirements in regulated industries.',
    date: '28 Jun 2025',
    duration: '3 hours',
    language: 'English',
    format: 'Online',
    tags: ['Security', 'Compliance'],
  },
];

export default function WorkshopPage() {
  return (
    <div className="font-switzer">

      {/* ── Hero ── */}
      <div className="hero-bg-blue">
        <div className={`${CONTAINER} pb-12 pt-32 lg:pt-28`}>
          <div className="flex flex-col gap-10">

            {/* Left */}
            <div className="flex-1">
              <div className="mb-6"><Eyebrow>Workshops · Azure &amp; AI Training</Eyebrow></div>
              <h1 className="m-0 max-w-3xl text-[40px] font-medium leading-[1.05] text-[#111] sm:text-[52px] lg:text-[64px]">
                Hands-on workshops for your team.
              </h1>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton href="/schedule-call">Book a private workshop</PrimaryButton>
                <SecondaryButton href="/solutions">All solutions</SecondaryButton>
              </div>
            </div>

          </div>
        </div>

        {/* orange/red divider — full viewport width */}
        <hr className="divider-orange-red m-0 h-1 w-full border-0" />
      </div>

      {/* ── Workshops grid ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pt-16 lg:pt-20`}>
          <div className="mb-10">
            <div className="mb-4"><Eyebrow>Upcoming sessions</Eyebrow></div>
            <h2 className="m-0 max-w-[560px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              Live, hands-on, and built around real workloads.
            </h2>
          </div>
          <WorkshopCards data={cards} />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a0e1a]">
        <div className={`${CONTAINER} flex flex-col gap-10 py-20 md:flex-row md:items-center md:justify-between`}>
          <div className="flex max-w-xl flex-col gap-4">
            <h2 className="m-0 text-[28px] font-medium leading-[1.1] text-white md:text-[44px]">
              Want a private workshop for your team?
            </h2>
            <p className="m-0 text-[18px] font-light leading-[1.6] text-white/70">
              We tailor the agenda to your stack and goals, and run it live for your engineers —
              on your schedule.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton href="/schedule-call" dark>Book a private workshop</PrimaryButton>
            <SecondaryButton href="/solutions" onDark>All solutions</SecondaryButton>
          </div>
        </div>
      </section>

    </div>
  );
}
