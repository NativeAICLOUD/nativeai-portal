'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Link } from 'react-transition-progress/next';
import { formatDistanceToNow } from 'date-fns';
import KBCard from './KBCard';

type SortOption = 'newest' | 'oldest' | 'az';

const NEW_THRESHOLD_DAYS = 60;

function isNewArticle(date: string) {
  return (Date.now() - new Date(date).getTime()) / (1000 * 60 * 60 * 24) <= NEW_THRESHOLD_DAYS;
}

function calcReadingTime(desc: string) {
  return Math.max(1, Math.ceil(desc.split(' ').length / 200));
}

function KnowledgeBasePosts({
  posts,
  categories,
}: {
  posts: IPost[];
  categories: Record<number, string>;
}) {
  const [search, setSearch] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [sort, setSort] = useState<SortOption>('newest');
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const uniqueCategories = Array.from(new Set(Object.values(categories))).sort();

  // Count articles per category
  const categoryCounts = uniqueCategories.reduce<Record<string, number>>((acc, cat) => {
    acc[cat] = posts.filter(p => categories[p.id] === cat).length;
    return acc;
  }, {});

  // Press / to focus search
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const toggleCategory = (cat: string) => {
    setSelected(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
  };

  const submitSearch = useCallback(() => {
    if (search.trim()) router.push(`/search?q=${encodeURIComponent(search.trim())}`);
  }, [search, router]);

  const sortedPosts = [...posts].sort((a, b) => {
    if (sort === 'newest') return new Date(b.date).getTime() - new Date(a.date).getTime();
    if (sort === 'oldest') return new Date(a.date).getTime() - new Date(b.date).getTime();
    return a.title.localeCompare(b.title);
  });

  const filtered = sortedPosts.filter((p) => {
    const matchSearch =
      search === '' ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.desc.toLowerCase().includes(search.toLowerCase());
    const postCategory = categories[p.id];
    const matchCategory = selected.length === 0 || (postCategory ? selected.includes(postCategory) : false);
    return matchSearch && matchCategory;
  });

  // Featured = latest article (before filtering)
  const featured = sortedPosts[0];
  const gridPosts = filtered.filter(p => p.id !== featured?.id);
  const featuredVisible = filtered.some(p => p.id === featured?.id);

  const liveHits = search.trim().length > 0
    ? posts.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.desc.toLowerCase().includes(search.toLowerCase())
      ).slice(0, 5)
    : [];

  return (
    <div className="pb-32">

      {/* ── Search bar ── */}
      <div className="relative mb-8">
        <div
          className="w-full rounded-2xl py-8 px-6 sm:px-8 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 40%, #edfaf4 100%)',
            border: '1px solid rgba(0,0,0,0.06)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
          }}
        >
          <div className="absolute top-0 right-0 w-[400px] h-full pointer-events-none" style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(52,211,153,0.15) 0%, transparent 65%)' }} />

          <div className="relative flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') submitSearch(); }}
              placeholder="Search articles… (press / to focus)"
              className="w-full outline-none text-[15px] text-[#0a0e1a] placeholder:text-[#aaaaaa]"
              style={{
                background: '#F5F5F5',
                borderRadius: 50,
                border: 'none',
                padding: '18px 190px 18px 28px',
                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.06)',
              }}
            />
            <button
              onClick={submitSearch}
              className="absolute right-2 flex items-center gap-2 text-white text-sm font-semibold px-6 py-3.5 transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
              style={{ background: '#0a0e1a', borderRadius: 50 }}
            >
              <span className="hidden sm:inline">Find results</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
              </svg>
            </button>
          </div>

          {/* Live results */}
          <AnimatePresence>
            {liveHits.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18 }}
                className="relative mt-3 rounded-2xl overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.95)', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}
              >
                {liveHits.map((post, i) => (
                  <button
                    key={post.id}
                    onClick={() => router.push(`/knowledge-base/${post.id}`)}
                    className={`w-full flex items-start gap-4 px-5 py-3.5 text-left hover:bg-[#f5f5f5] transition-colors ${i > 0 ? 'border-t border-black/[0.05]' : ''}`}
                  >
                    <div className="w-5 h-5 mt-0.5 shrink-0 text-[#aaaaaa]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[13.5px] font-semibold text-[#0a0e1a] leading-snug truncate">{post.title}</p>
                      <p className="text-[11.5px] text-[#0a0e1a]/45 mt-0.5 leading-snug line-clamp-1">{post.desc}</p>
                    </div>
                    {categories[post.id] && (
                      <span
                        className="shrink-0 self-center px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide"
                        style={{ background: '#f3f4f6', color: '#6b7280', border: '1px solid #e6e6e6' }}
                      >
                        {categories[post.id]}
                      </span>
                    )}
                    <svg className="shrink-0 mt-1 w-3.5 h-3.5 text-[#cccccc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                  </button>
                ))}
                <div className="px-5 py-3 border-t border-black/[0.05]" style={{ background: 'rgba(248,249,255,0.80)' }}>
                  <button onClick={submitSearch} className="text-[12px] font-medium text-[#0a0e1a] hover:opacity-60 transition-opacity">
                    See all results for &ldquo;{search}&rdquo; →
                  </button>
                </div>
              </motion.div>
            )}
            {search.trim().length > 0 && liveHits.length === 0 && (
              <p className="relative mt-3 text-sm text-[#0a0e1a]/40 px-1">No articles found for &ldquo;{search}&rdquo;</p>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Filter + Sort row ── */}
      <div className="flex items-center justify-between gap-3 mb-2">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setFilterOpen(o => !o)}
            className={`min-w-[40px] h-[40px] md:w-[48px] md:h-[48px] hover:bg-black/5 rounded-full grid place-items-center transition-colors ${filterOpen ? 'bg-black/5' : ''}`}
          >
            <svg className="icon fill-primary size-6 sm:size-8">
              <use href="/icons/all-icons.svg#icon-filter" />
            </svg>
          </button>
          {selected.length > 0 && (
            <div className="flex items-center gap-1.5 overflow-x-auto">
              {selected.map((cat) => (
                <span
                  key={cat}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium shrink-0"
                  style={{ background: '#f3f4f6', color: '#6b7280', border: '1px solid #e6e6e6' }}
                >
                  {cat}
                  <button onClick={() => toggleCategory(cat)} className="hover:opacity-70">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Sort toggle */}
        <div className="flex items-center gap-1 shrink-0 rounded-full p-1" style={{ background: 'rgba(10,14,26,0.05)' }}>
          {(['newest', 'oldest', 'az'] as SortOption[]).map((opt) => (
            <button
              key={opt}
              onClick={() => setSort(opt)}
              className="px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all duration-150"
              style={
                sort === opt
                  ? { background: '#0a0e1a', color: '#fff' }
                  : { color: 'rgba(10,14,26,0.45)' }
              }
            >
              {opt === 'newest' ? 'Newest' : opt === 'oldest' ? 'Oldest' : 'A–Z'}
            </button>
          ))}
        </div>
      </div>

      {/* ── Filter panel ── */}
      <motion.div
        initial={false}
        animate={{ height: filterOpen ? 'auto' : 0, opacity: filterOpen ? 1 : 0 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="bg-white/80 border border-black/[0.07] rounded-2xl px-5 py-5 mb-4 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold text-[#0a0e1a]">Filter by category</p>
            {selected.length > 0 && (
              <button onClick={() => setSelected([])} className="text-xs text-[#111] hover:opacity-70 font-medium transition-colors">
                Clear all
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {uniqueCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => toggleCategory(cat)}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150 flex items-center gap-1.5"
                style={
                  selected.includes(cat)
                    ? { background: '#0a0e1a', color: '#fff' }
                    : { background: 'rgba(10,14,26,0.06)', color: 'rgba(10,14,26,0.55)' }
                }
              >
                {cat}
                <span
                  className="text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center"
                  style={{ background: selected.includes(cat) ? 'rgba(255,255,255,0.15)' : 'rgba(10,14,26,0.08)' }}
                >
                  {categoryCounts[cat]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Featured hero card ── */}
      {featuredVisible && featured && !search && selected.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="mb-6"
        >
          <Link
            href={`/knowledge-base/${featured.id}`}
            className="group relative flex flex-col sm:flex-row overflow-hidden rounded-2xl border border-black/[0.07] shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-200 bg-white"
          >
            {/* Image */}
            <div className="relative sm:w-[55%] aspect-video sm:aspect-auto overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
              {isNewArticle(featured.date) && (
                <span
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide"
                  style={{ background: '#111', color: '#fff' }}
                >
                  New
                </span>
              )}
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center px-7 py-8 sm:w-[45%]">
              <div
                className="inline-flex self-start items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest mb-4"
                style={{ background: '#f3f4f6', color: '#6b7280', border: '1px solid #e6e6e6' }}
              >
                ★ Featured
              </div>
              {categories[featured.id] && (
                <span className="text-[11px] font-semibold text-[#0a0e1a]/40 uppercase tracking-wider mb-2">
                  {categories[featured.id]}
                </span>
              )}
              <h2 className="text-[#0a0e1a] font-extrabold text-xl sm:text-2xl leading-snug mb-3 group-hover:text-[#111] transition-colors duration-200">
                {featured.title}
              </h2>
              <p className="text-[#0a0e1a]/50 text-sm leading-relaxed line-clamp-3 mb-5">
                {featured.desc}
              </p>
              <div className="flex items-center gap-3 text-[12px] text-[#0a0e1a]/35 font-medium">
                <span>{formatDistanceToNow(new Date(featured.date), { addSuffix: true })}</span>
                <span className="w-1 h-1 rounded-full bg-[#0a0e1a]/20" />
                <span>{calcReadingTime(featured.desc)} min read</span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#111] mt-5">
                Read article
                <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        </motion.div>
      )}

      {/* ── Grid ── */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-[#0a0e1a]/35 text-sm">
          No articles found{search ? ` for "${search}"` : ' in this category'}.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {(search || selected.length > 0 ? filtered : gridPosts).map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut', delay: i * 0.05 }}
            >
              <KBCard {...item} category={categories[item.id]} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

export default KnowledgeBasePosts;
