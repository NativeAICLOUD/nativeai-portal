import type { Metadata } from 'next';
import KnowledgeBasePosts from '../components/partials/knowledge-base';
import { getBlogPosts } from '@/lib/blogsPosts';
import { CONTAINER, Eyebrow } from '@/app/components/partials/services/ServiceUI';

const CATEGORIES: Record<number, string> = {
  1: 'Azure AI',
  3: 'DevOps',
  4: 'Cloud Native',
  5: 'Kubernetes',
  6: 'Cloud Costs',
  7: 'AI & RAG',
  8: 'Security',
  9: 'Infrastructure as Code',
  10: 'Azure AI',
};

export const metadata: Metadata = {
  title: 'Knowledge Base | NativeCloud',
  description: 'Guides, articles and news on Azure, AI, Kubernetes, cloud-native architecture and modern software engineering.',
  openGraph: {
    title: 'Knowledge Base | NativeCloud',
    description: 'Guides, articles and news on Azure, AI, Kubernetes, cloud-native architecture and modern software engineering.',
    url: 'https://nativeai.cloud/knowledge-base',
    images: [{ url: 'https://nativeai.cloud/nativeai.cloud-og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Knowledge Base | NativeCloud',
    description: 'Guides, articles and news on Azure, AI, Kubernetes and cloud-native architecture.',
    images: ['https://nativeai.cloud/nativeai.cloud-og.png'],
  },
};

const KnowledgeBasePage = async () => {
  const posts = await getBlogPosts();

  return (
    <div className="font-switzer">

      {/* ── Hero ── */}
      <div className="industries-hero-bg">
        <div className={`${CONTAINER} pb-12 pt-32 lg:pt-28`}>
          <div className="mb-6"><Eyebrow>Guides · Articles · News</Eyebrow></div>
          <h1 className="m-0 max-w-3xl text-[40px] font-medium leading-[1.05] text-[#111] sm:text-[52px] lg:text-[64px]">
            Knowledge base
          </h1>
          <p className="mt-6 max-w-[560px] text-[18px] font-light leading-[1.6] text-[#111]">
            Stay up-to-date with articles, guides, and news on cloud, AI, Azure, Kubernetes, and modern software architecture.
          </p>
        </div>

        {/* multicolour divider — full viewport width */}
        <hr className="linegrad-divider m-0 h-1 w-full border-0" />
      </div>

      {/* ── Articles ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pt-16 lg:pt-20`}>
          <KnowledgeBasePosts posts={posts} categories={CATEGORIES} />
        </div>
      </section>

    </div>
  );
};

export default KnowledgeBasePage;
