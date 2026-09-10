'use client';

import Link from 'next/link';
import KBCard from './knowledge-base/KBCard';

function RelatedArticles({ posts }: { posts: IPost[] }) {
  if (!posts.length) return null;

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a0e1a]">More articles</h2>
        <Link href="/knowledge-base" className="text-sm font-medium text-[#2563EB] hover:text-[#d4836a] transition-colors inline-flex items-center gap-1">
          View all
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((item) => (
          <KBCard key={item.id} id={item.id} image={item.image} title={item.title} desc={item.desc} date={item.date} />
        ))}
      </div>
    </div>
  );
}

export default RelatedArticles;
