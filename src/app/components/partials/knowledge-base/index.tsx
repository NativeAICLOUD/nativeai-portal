'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import KBCard from './KBCard';

const Categories = [
  'Migration', 'Native', 'Azure', 'AWS', 'Cloud Native', 'Infrastructure', 'AI', 'Cloud Costs'
];

function KnowledgeBasePosts({ posts }: { posts: IPost[] }) {
  const [search, setSearch] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const toggleCategory = (cat: string) => {
    setSelected(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
  };

  const filtered = posts.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.desc.toLowerCase().includes(search.toLowerCase());
    return matchSearch;
  });

  return (
    <div className="pb-32">

      {/* Search */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
        <div className="relative w-full sm:max-w-[260px]">
          <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0a0e1a]/30 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-full text-sm bg-white/80 border border-black/[0.08] placeholder:text-[#0a0e1a]/30 text-[#0a0e1a] focus:outline-none focus:border-[#e89a78] focus:ring-2 focus:ring-[#e89a78]/20 transition-all"
            type="text"
            placeholder="Search articles…"
          />
        </div>
      </div>

      {/* Filter row */}
      <div className="options flex items-center gap-3 mb-2">
        <button
          onClick={() => setFilterOpen(o => !o)}
          className={`btn-action mr-2 svg-hover min-w-[40px] h-[40px] md:w-[48px] md:h-[48px] hover:bg-black/5 hover:shadow-inner rounded-full grid place-items-center transition-colors ${filterOpen ? 'bg-black/5' : ''}`}
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
                style={{ background: 'rgba(248,146,1,0.10)', color: '#c4743c', border: '1px solid rgba(248,146,1,0.25)' }}
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

      {/* Filter panel */}
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
              <button onClick={() => setSelected([])} className="text-xs text-[#e89a78] hover:text-[#d4836a] font-medium transition-colors">
                Clear all
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {Categories.map((cat) => (
              <button
                key={cat}
                onClick={() => toggleCategory(cat)}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150"
                style={
                  selected.includes(cat)
                    ? { background: '#0a0e1a', color: '#fff' }
                    : { background: 'rgba(10,14,26,0.06)', color: 'rgba(10,14,26,0.55)' }
                }
              >
                {cat}
              </button>
            ))}
          </div>
          {selected.length > 0 && (
            <p className="text-xs text-[#0a0e1a]/35 mt-3">
              Showing results for: {selected.join(', ')}
            </p>
          )}
        </div>
      </motion.div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-[#0a0e1a]/35 text-sm">
          No articles found for &ldquo;{search}&rdquo;
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut', delay: i * 0.05 }}
            >
              <KBCard {...item} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

export default KnowledgeBasePosts;
