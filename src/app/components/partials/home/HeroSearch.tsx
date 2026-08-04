'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SITE_PAGES } from '@/lib/sitePages';

const MAX_PAGES = 4;
const MAX_ARTICLES = 4;

export default function HeroSearch() {
  const [q, setQ] = useState('');
  const [posts, setPosts] = useState<IPost[]>([]);
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Load the article index once, on first focus
  const loadPosts = () => {
    if (posts.length > 0) return;
    fetch('/blogs.json')
      .then((r) => r.json())
      .then((data: IPost[]) => setPosts(data))
      .catch(() => {});
  };

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const query = q.trim().toLowerCase();

  const pageHits = useMemo(
    () =>
      query
        ? SITE_PAGES.filter(
            (p) => p.title.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query),
          ).slice(0, MAX_PAGES)
        : [],
    [query],
  );

  const articleHits = useMemo(
    () =>
      query
        ? posts
            .filter(
              (p) => p.title.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query),
            )
            .slice(0, MAX_ARTICLES)
        : [],
    [query, posts],
  );

  const hasResults = pageHits.length > 0 || articleHits.length > 0;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (q.trim()) {
      setOpen(false);
      router.push(`/search?q=${encodeURIComponent(q.trim())}`);
    }
  };

  const go = (url: string) => {
    setOpen(false);
    router.push(url);
  };

  return (
    <div ref={wrapRef} className="relative mt-7 w-full max-w-[620px]">
      {/* AI-era animated gradient ring — same treatment as the navbar AI Mode search */}
      <div className="ai-search-wrap w-full">
        <form
          onSubmit={submit}
          className="ai-search-inner flex w-full items-center gap-3 px-5 py-1"
          style={{ background: '#ffffff' }}
        >
          <svg
            width="17" height="17" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="shrink-0 text-[#9ca3af]"
          >
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="search"
            value={q}
            onChange={(e) => { setQ(e.target.value); setOpen(true); }}
            onFocus={() => { loadPosts(); setOpen(true); }}
            placeholder="Search services, solutions and articles"
            aria-label="Search the site"
            className="min-w-0 flex-1 bg-transparent py-3 text-[15px] text-[#0a0e1a] placeholder:text-[#9ca3af] outline-none"
          />
          <button
            type="submit"
            aria-label="Search"
            className="shrink-0 flex h-9 w-9 items-center justify-center rounded-full text-white transition-transform duration-150 hover:scale-105 active:scale-95"
            style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #1e4fd6 100%)' }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </form>
      </div>

      {/* Live results dropdown */}
      {open && query && (
        <div
          className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-[22px] bg-white text-left"
          style={{
            border: '1px solid #e6e6e6',
            boxShadow: '0 24px 64px rgba(0,0,0,0.14), 0 4px 12px rgba(0,0,0,0.06)',
          }}
        >
          {!hasResults ? (
            <p className="m-0 px-6 py-5 text-[14px] text-[#6b7280]">
              No matches for &ldquo;{q.trim()}&rdquo; — press Enter to search everything.
            </p>
          ) : (
            <div className="max-h-[380px] overflow-y-auto py-2">
              {pageHits.length > 0 && (
                <>
                  <p className="m-0 px-6 pb-1 pt-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#9ca3af]">
                    Pages
                  </p>
                  {pageHits.map((p) => (
                    <button
                      key={p.url}
                      type="button"
                      onClick={() => go(p.url)}
                      className="block w-full px-6 py-2.5 text-left transition-colors hover:bg-[#f6f7f9]"
                    >
                      <span className="block text-[14.5px] font-medium text-[#0a0e1a]">{p.title}</span>
                      <span className="block truncate text-[12.5px] text-[#6b7280]">{p.desc}</span>
                    </button>
                  ))}
                </>
              )}
              {articleHits.length > 0 && (
                <>
                  <p className="m-0 px-6 pb-1 pt-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#9ca3af]">
                    Articles
                  </p>
                  {articleHits.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => go(`/knowledge-base/${p.id}`)}
                      className="block w-full px-6 py-2.5 text-left transition-colors hover:bg-[#f6f7f9]"
                    >
                      <span className="block text-[14.5px] font-medium text-[#0a0e1a]">{p.title}</span>
                      <span className="block truncate text-[12.5px] text-[#6b7280]">{p.desc}</span>
                    </button>
                  ))}
                </>
              )}
              <button
                type="button"
                onClick={() => go(`/search?q=${encodeURIComponent(q.trim())}`)}
                className="mt-1 block w-full border-t border-[#f0f0f0] px-6 py-3 text-left text-[13.5px] font-semibold text-[#1e4fd6] transition-colors hover:bg-[#f6f7f9]"
              >
                See all results for &ldquo;{q.trim()}&rdquo; →
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
