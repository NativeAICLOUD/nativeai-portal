import { BG5Img } from '@/ImagePath';
import type { Metadata } from 'next';
import Image from 'next/image';
import KnowledgeBasePosts from '../components/partials/knowledge-base';
import { getBlogPosts } from '@/lib/blogsPosts';

export const metadata: Metadata = {
  title: 'Knowledge Base | NativeCloud',
  description: 'Guides, articles and news on Azure, AI, Kubernetes, cloud-native architecture and modern software engineering.',
  openGraph: {
    title: 'Knowledge Base | NativeCloud',
    description: 'Guides, articles and news on Azure, AI, Kubernetes, cloud-native architecture and modern software engineering.',
    url: 'https://native.cloud/knowledge-base',
    images: [{ url: 'https://native.cloud/native.cloud-og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Knowledge Base | NativeCloud',
    description: 'Guides, articles and news on Azure, AI, Kubernetes and cloud-native architecture.',
    images: ['https://native.cloud/native.cloud-og.png'],
  },
};

const KnowledgeBasePage = async () => {
  const posts = await getBlogPosts();

  return (
    <div className="relative min-h-full overflow-hidden">
      <div className="absolute w-full h-full z-[-1] top-16 inset-x-0">
        <Image src={BG5Img} alt="Background" className="!h-auto md:!-top-36" layout="fill" objectFit="cover" objectPosition="top" quality={100} />
      </div>

      {/* Decorative grid lines */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        {/* Vertical lines */}
        <div className="absolute inset-0 flex justify-between px-[10%]">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-px h-full bg-gradient-to-b from-transparent via-black/[0.055] to-transparent" />
          ))}
        </div>
        {/* Horizontal accent lines */}
        <div className="absolute top-[22%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.07] to-transparent" />
        <div className="absolute top-[55%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 2xl:px-0">

        {/* Hero */}
        <div className="pt-40 pb-12 lg:pt-48 lg:pb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(248,146,1,0.10)', color: '#c4743c', border: '1px solid rgba(248,146,1,0.25)' }}
          >
            Guides · Articles · News
          </div>
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight text-[#0a0e1a] max-w-3xl mb-5">
            Knowledge{' '}
            <span className="bg-gradient-to-r from-[#f0a060] via-[#e89a78] to-[#d4845c] bg-clip-text text-transparent">
              base
            </span>
          </h1>
          <p className="text-[#0a0e1a]/55 text-base lg:text-lg max-w-xl leading-relaxed">
            Stay up-to-date with articles, guides, and news on cloud, AI, Azure, Kubernetes, and modern software architecture.
          </p>

        </div>

        <KnowledgeBasePosts posts={posts} />
      </div>
    </div>
  );
};

export default KnowledgeBasePage;
