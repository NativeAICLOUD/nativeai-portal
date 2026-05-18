import { BG3Img, BG_INVERSE, BGGroupLogo } from '@/ImagePath';
import type { Metadata } from 'next';
import WorkshopCards from '../components/partials/workshop';
import Image from 'next/image';

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

const stats = [
  { value: '6', label: 'Workshops' },
  { value: '19h', label: 'Total content' },
  { value: '100%', label: 'Hands-on' },
  { value: 'Live', label: 'Online sessions' },
];

const WorkshopPage = () => {
  return (
    <div className="relative min-h-full">
      {/* Background */}
      <div className="absolute w-full h-full z-[-1] top-16 inset-x-0">
        <Image src={BG3Img} alt="Background" className="!h-auto md:!-top-36" layout="fill" objectFit="cover" objectPosition="top" quality={100} />
        <Image src={BGGroupLogo} alt="Design Element" layout="fill" objectFit="contain" objectPosition="top right" quality={100} />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 2xl:px-0">

        {/* Hero */}
        <div className="pt-40 pb-12 lg:pt-48 lg:pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(248,146,1,0.10)', color: '#c4743c', border: '1px solid rgba(248,146,1,0.25)' }}>
            Azure & AI Training
          </div>
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight text-[#0a0e1a] max-w-3xl mb-5">
            Hands-on{' '}
            <span className="bg-gradient-to-r from-[#f0a060] via-[#e89a78] to-[#d4845c] bg-clip-text text-transparent">
              workshops
            </span>{' '}
            for your team
          </h1>
          <p className="text-[#0a0e1a]/55 text-base lg:text-lg max-w-xl leading-relaxed mb-10">
            Master Microsoft Azure, Kubernetes, and AI in live online sessions — designed for developers and architects who learn by doing.
          </p>

          {/* Stats strip */}
          <div className="flex flex-wrap gap-6 sm:gap-10">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-2xl font-extrabold text-[#0a0e1a]">{s.value}</span>
                <span className="text-xs text-[#0a0e1a]/40 font-medium uppercase tracking-wider mt-0.5">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cards */}
        <WorkshopCards data={cards} />
      </div>

      <Image
        src={BG_INVERSE}
        alt="Design Element"
        className="absolute bottom-0 left-0 w-full h-full max-w-[800px] z-[-1] object-contain object-left-bottom"
        quality={100}
      />
    </div>
  );
};

export default WorkshopPage;
