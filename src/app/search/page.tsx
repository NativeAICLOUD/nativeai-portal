'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import AiOverview from '../components/ui/AiOverview';

const DOMAIN = 'nativeai.cloud';

const CATEGORIES: Record<number, string> = {
  1: 'Azure AI',
  3: 'DevOps',
  4: 'Cloud Native',
  5: 'Kubernetes',
  6: 'Cloud Costs',
  7: 'AI & RAG',
  8: 'Security',
  9: 'Infrastructure as Code',
};

function SearchResults() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const initialQ = searchParams.get('q') ?? '';
  const [query, setQuery] = useState(initialQ);
  const [inputVal, setInputVal] = useState(initialQ);
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    fetch('/blogs.json')
      .then(r => r.json())
      .then((data: IPost[]) =>
        setPosts(data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()))
      )
      .catch(() => {});
  }, []);

  useEffect(() => {
    const q = searchParams.get('q') ?? '';
    setQuery(q);
    setInputVal(q);
  }, [searchParams]);

  const results = query.trim()
    ? posts.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.desc.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const submitSearch = () => {
    if (inputVal.trim()) {
      router.push(`/search?q=${encodeURIComponent(inputVal.trim())}`);
    }
  };

  return (
    <main className="min-h-screen bg-white pt-28 pb-24">
      <div className="max-w-[900px] mx-auto px-5 sm:px-8">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-[12px] text-[#888] mb-8">
          <Link href="/" className="hover:text-[#555] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#555]">Search</span>
        </nav>

        {/* Results header */}
        {query.trim() && (
          <h1 className="text-[22px] sm:text-[26px] font-bold text-[#0a0e1a] mb-6 leading-snug">
            <span style={{ color: '#2563EB' }}>{results.length} result{results.length !== 1 ? 's' : ''} found for:</span>{' '}
            <span className="text-[#0a0e1a]">&lsquo;{query}&rsquo;</span>
          </h1>
        )}

        {/* Search bar */}
        <div className="relative flex items-center mb-10">
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') submitSearch(); }}
            placeholder="Search articles…"
            className="w-full outline-none text-[15px] text-[#0a0e1a] placeholder:text-[#aaaaaa]"
            style={{
              background: '#F5F5F5',
              borderRadius: 50,
              border: 'none',
              padding: '16px 180px 16px 28px',
              boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.06)',
            }}
          />
          <button
            onClick={submitSearch}
            className="absolute right-2 flex items-center gap-2 text-white text-sm font-semibold px-5 py-3 transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
            style={{ background: '#0a0e1a', borderRadius: 50 }}
          >
            <span className="hidden sm:inline">Find results</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
          </button>
        </div>

        {/* AI Overview */}
        {query.trim() && results.length > 0 && (
          <AiOverview query={query} results={results} />
        )}

        {/* Results list */}
        {query.trim() && results.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-[18px] font-semibold text-[#0a0e1a] mb-2">No results found for &lsquo;{query}&rsquo;</p>
            <p className="text-[14px] text-[#888] mb-6">Try different keywords or browse the Knowledge Base directly.</p>
            <Link
              href="/knowledge-base"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-full transition-opacity hover:opacity-90"
              style={{ background: '#2563EB' }}
            >
              Browse Knowledge Base
            </Link>
          </div>
        ) : (
          <div className="flex flex-col">
            {results.map((post, i) => {
              const url = `${DOMAIN}/knowledge-base/${post.id}`;
              const excerpt = post.desc.length > 200 ? post.desc.slice(0, 200) + '…' : post.desc;
              const category = CATEGORIES[post.id];
              const publishDate = post.date
                ? new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
                : '';
              return (
                <div key={post.id}>
                  <div className="py-6">
                    <div className="flex items-center gap-2 mb-1.5">
                      {category && (
                        <span
                          className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide"
                          style={{ background: 'rgba(37,99,235,0.12)', color: '#c4743c', border: '1px solid rgba(37,99,235,0.25)' }}
                        >
                          {category}
                        </span>
                      )}
                      {publishDate && (
                        <span className="text-[11px] text-[#aaa]">{publishDate}</span>
                      )}
                    </div>
                    <Link
                      href={`/knowledge-base/${post.id}`}
                      className="block text-[17px] sm:text-[18px] font-bold leading-snug mb-1 transition-colors hover:underline"
                      style={{ color: '#1a73e8' }}
                    >
                      {post.title}
                    </Link>
                    <p className="text-[12px] text-[#2563EB] mb-2 font-medium">{url}</p>
                    <p className="text-[13.5px] text-[#444] leading-relaxed">{excerpt}</p>
                  </div>
                  {i < results.length - 1 && <div className="h-px bg-[#eeeeee]" />}
                </div>
              );
            })}
          </div>
        )}

        {/* Empty state when no query */}
        {!query.trim() && (
          <div className="py-16 text-center">
            <p className="text-[15px] text-[#888]">Enter a search term above to find articles.</p>
          </div>
        )}

      </div>
    </main>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white pt-28" />}>
      <SearchResults />
    </Suspense>
  );
}
