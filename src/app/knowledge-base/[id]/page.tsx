import RelatedArticles from '@/app/components/partials/RelatedArticles';
import { BG5Img } from '@/ImagePath';
import { getBlogPosts, getSinglePost } from '@/lib/blogsPosts';
import { formatDistanceToNow } from 'date-fns';
import { shuffle, take } from 'lodash';
import type { Metadata } from 'next';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { Link } from 'react-transition-progress/next';

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const post = await getSinglePost(+params?.id);
  if (!post?.id) return {};
  const desc = post.desc.slice(0, 160);
  const imageUrl = post.image.startsWith('http') ? post.image : `https://native.cloud${post.image}`;
  return {
    title: `${post.title} | NativeCloud`,
    description: desc,
    openGraph: {
      title: post.title,
      description: desc,
      type: 'article',
      url: `https://native.cloud/knowledge-base/${post.id}`,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: desc,
      images: [imageUrl],
    },
  };
}

const KnowledgeBaseDetailPage = async ({ params }: any) => {
  const post = await getSinglePost(+params?.id);

  if (!post.id) redirect('/not-found');

  const posts = await getBlogPosts();
  const related = take(shuffle(posts.filter(p => p.id !== post.id)), 3);

  // Split desc into paragraphs (split on double space or '. ' boundaries for readability)
  const sentences = post.desc.split('. ');
  const mid = Math.ceil(sentences.length / 2);
  const para1 = sentences.slice(0, mid).join('. ') + '.';
  const para2 = sentences.slice(mid).join('. ');

  return (
    <div className="relative min-h-full">

      {/* Background */}
      <div className="absolute w-full h-full z-[-1] top-16 inset-x-0">
        <Image src={BG5Img} alt="Background" className="!h-auto md:!-top-36" layout="fill" objectFit="cover" objectPosition="top" quality={100} />
      </div>

      {/* Hero image */}
      <div className="relative w-full h-[280px] sm:h-[380px] lg:h-[440px] overflow-hidden">
        <Image src={post.image} alt={post.title} fill objectFit="cover" quality={100} className="object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Back link */}
        <div className="absolute top-0 left-0 right-0 pt-28 px-5 sm:px-8">
          <Link
            href="/knowledge-base"
            className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-medium transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Knowledge base
          </Link>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-5 sm:px-8 pb-8 max-w-4xl mx-auto w-full" style={{ left: '50%', transform: 'translateX(-50%)' }}>
          <p className="text-white/60 text-xs font-medium uppercase tracking-widest mb-2">
            {post.date ? formatDistanceToNow(new Date(post.date), { addSuffix: true }) : ''}
          </p>
          <h1 className="text-white font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Article body */}
      <div className="relative mx-auto max-w-3xl px-5 sm:px-8 py-12">

        {/* Reading time + share row */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-black/[0.08]">
          <div className="flex items-center gap-4 text-xs text-[#0a0e1a]/40 font-medium">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
              </svg>
              {Math.ceil(post.desc.split(' ').length / 200)} min read
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
              </svg>
              {post.date ? new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : ''}
            </span>
          </div>
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
            style={{ background: 'rgba(248,146,1,0.10)', color: '#c4743c', border: '1px solid rgba(248,146,1,0.25)' }}
          >
            Azure &amp; Cloud
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-[#0a0e1a]/70 text-base sm:text-lg leading-relaxed mb-6">
            {para1}
          </p>
          <p className="text-[#0a0e1a]/70 text-base sm:text-lg leading-relaxed mb-8">
            {para2}
          </p>
        </div>

        {/* CTA block */}
        <div
          className="rounded-2xl px-6 py-6 mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          style={{ background: '#0a0e1a' }}
        >
          <div>
            <p className="text-white font-semibold text-base mb-1">Want to implement this for your business?</p>
            <p className="text-white/45 text-sm">Book a free call with our team and we will walk you through it.</p>
          </div>
          <Link
            href="/schedule-call"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-[#0a0e1a] bg-[#e89a78] hover:bg-[#d4836a] transition-colors whitespace-nowrap"
          >
            Schedule a call
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Related articles */}
      <div className="pb-24 px-5 sm:px-8 max-w-7xl mx-auto">
        <RelatedArticles posts={related} />
      </div>
    </div>
  );
};

export default KnowledgeBaseDetailPage;
