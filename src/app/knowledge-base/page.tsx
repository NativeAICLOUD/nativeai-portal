import { BG5Img } from '@/ImagePath';
import Image from 'next/image';
import KnowledgeBasePosts from '../components/partials/knowledge-base';
import { getBlogPosts } from '@/lib/blogsPosts';

const stats = [
  { value: '50+', label: 'Articles' },
  { value: 'Weekly', label: 'New content' },
  { value: 'Free', label: 'Always' },
];

const KnowledgeBasePage = async () => {
  const posts = await getBlogPosts();

  return (
    <div className="relative min-h-full">
      <div className="absolute w-full h-full z-[-1] top-16 inset-x-0">
        <Image src={BG5Img} alt="Background" className="!h-auto md:!-top-36" layout="fill" objectFit="cover" objectPosition="top" quality={100} />
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
          <p className="text-[#0a0e1a]/55 text-base lg:text-lg max-w-xl leading-relaxed mb-10">
            Stay up-to-date with articles, guides, and news on cloud, AI, Azure, Kubernetes, and modern software architecture.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 sm:gap-10">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-2xl font-extrabold text-[#0a0e1a]">{s.value}</span>
                <span className="text-xs text-[#0a0e1a]/40 font-medium uppercase tracking-wider mt-0.5">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <KnowledgeBasePosts posts={posts} />
      </div>
    </div>
  );
};

export default KnowledgeBasePage;
