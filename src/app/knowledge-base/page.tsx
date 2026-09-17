import type { Metadata } from 'next';
import KnowledgeBasePosts from '../components/partials/knowledge-base';
import { getBlogPosts } from '@/lib/blogsPosts';
import { CONTAINER, Eyebrow, PrimaryButton } from '@/app/components/partials/services/ServiceUI';
import { Constants } from '@/Constants';

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
      <div
        style={{
          background:
            'radial-gradient(circle at 80% 100%, rgba(191, 219, 254, 0.55), transparent 48%), radial-gradient(circle at 100% 70%, rgba(219, 234, 254, 0.5), transparent 43%), #ffffff',
        }}
      >
        <div className={`${CONTAINER} pb-12 pt-32 lg:pt-28`}>
          <div className="mb-6"><Eyebrow>Guides · Articles · News</Eyebrow></div>
          <h1 className="m-0 max-w-3xl text-[40px] font-medium leading-[1.05] text-[#111] sm:text-[52px] lg:text-[64px]">
            Knowledge base
          </h1>
          <p className="mt-6 max-w-[560px] text-[17px] font-normal leading-[1.6] text-[#4B5563]">
            Practical guides and field notes on Azure, AI, Kubernetes and cloud-native
            architecture — written by the engineers who build it.
          </p>
          <div className="mt-8">
            <PrimaryButton href={Constants.PAGES.SCHEDULE_CALL}>
              <span className="text-[12px] font-medium uppercase tracking-[0.14em]">Talk to an engineer</span>
            </PrimaryButton>
          </div>
        </div>

        {/* blue divider — full viewport width */}
        <hr className="divider-blue m-0 h-1 w-full border-0" />
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
