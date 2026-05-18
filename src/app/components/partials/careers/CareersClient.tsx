'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const LINKEDIN_COMPANY_URL = 'https://www.linkedin.com/company/nativecloud';

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

type Job = {
  id: number;
  title: string;
  department: string;
  location: string;
  workModel: string;
  type: string;
  slug: string;
  description: string;
};

const MODEL_COLORS: Record<string, { bg: string; color: string }> = {
  Remote:    { bg: 'rgba(10,14,26,0.07)',    color: 'rgba(10,14,26,0.55)' },
  Hybrid:    { bg: 'rgba(232,154,120,0.14)', color: '#c4743c' },
  'On-site': { bg: 'rgba(91,124,250,0.12)',  color: '#4a5fd4' },
};

const TYPE_COLORS: Record<string, { bg: string; color: string }> = {
  'Full-time': { bg: 'rgba(10,14,26,0.06)',  color: 'rgba(10,14,26,0.5)' },
  Contract:    { bg: 'rgba(248,146,1,0.10)', color: '#b86a30' },
};

export default function CareersClient({ jobs }: { jobs: Job[] }) {
  const router = useRouter();
  const [inputVal, setInputVal] = useState('');
  const [search, setSearch]     = useState('');
  const [activeDept, setActiveDept]   = useState('All');
  const [activeModel, setActiveModel] = useState('All');
  const [activeType, setActiveType]   = useState('All');
  const [filterOpen, setFilterOpen]   = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const departments = ['All', ...Array.from(new Set(jobs.map(j => j.department))).sort()];
  const models      = ['All', ...Array.from(new Set(jobs.map(j => j.workModel)))];
  const types       = ['All', ...Array.from(new Set(jobs.map(j => j.type)))];

  const deptCounts  = Object.fromEntries(departments.filter(d => d !== 'All').map(d => [d, jobs.filter(j => j.department === d).length]));
  const modelCounts = Object.fromEntries(models.filter(m => m !== 'All').map(m => [m, jobs.filter(j => j.workModel === m).length]));
  const typeCounts  = Object.fromEntries(types.filter(t => t !== 'All').map(t => [t, jobs.filter(j => j.type === t).length]));

  const activePills = [
    activeDept  !== 'All' ? { label: activeDept,  clear: () => setActiveDept('All')  } : null,
    activeModel !== 'All' ? { label: activeModel, clear: () => setActiveModel('All') } : null,
    activeType  !== 'All' ? { label: activeType,  clear: () => setActiveType('All')  } : null,
  ].filter(Boolean) as { label: string; clear: () => void }[];

  /* live dropdown hits (up to 5) */
  const liveHits = inputVal.trim().length > 0
    ? jobs.filter(j =>
        j.title.toLowerCase().includes(inputVal.toLowerCase()) ||
        j.department.toLowerCase().includes(inputVal.toLowerCase())
      ).slice(0, 5)
    : [];

  const applySearch = () => setSearch(inputVal.trim());

  const filtered = jobs.filter(j => {
    const matchSearch = search === '' ||
      j.title.toLowerCase().includes(search.toLowerCase()) ||
      j.department.toLowerCase().includes(search.toLowerCase());
    const matchDept  = activeDept  === 'All' || j.department === activeDept;
    const matchModel = activeModel === 'All' || j.workModel  === activeModel;
    const matchType  = activeType  === 'All' || j.type       === activeType;
    return matchSearch && matchDept && matchModel && matchType;
  });

  return (
    <div className="pb-32">

      {/* ── Search panel ── */}
      <div
        className="w-full rounded-2xl py-8 px-6 sm:px-10 mb-4 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 40%, #edfaf4 100%)',
          border: '1px solid rgba(0,0,0,0.06)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        }}
      >
        {/* Green glow */}
        <div
          className="absolute top-0 right-0 w-[420px] h-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(52,211,153,0.18) 0%, transparent 65%)' }}
        />

        <div className="relative flex flex-col gap-3">
          {/* Input row */}
          <div className="relative flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={e => setInputVal(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') applySearch(); }}
              placeholder="Search roles…"
              className="w-full outline-none text-[16px] text-[#0a0e1a] placeholder:text-[#aaaaaa]"
              style={{
                background: '#F5F5F5',
                borderRadius: 50,
                border: 'none',
                padding: '18px 190px 18px 28px',
                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.06)',
              }}
            />
            <button
              onClick={applySearch}
              className="absolute right-2 flex items-center gap-2 text-white text-sm font-semibold px-6 py-3.5 transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
              style={{ background: '#0a0e1a', borderRadius: 50 }}
            >
              <span className="hidden sm:inline">Find results</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
              </svg>
            </button>
          </div>

          {/* Live dropdown */}
          <AnimatePresence>
            {liveHits.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18 }}
                className="rounded-2xl overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.90)', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
              >
                {liveHits.map((job, i) => {
                  const modelStyle = MODEL_COLORS[job.workModel] ?? MODEL_COLORS['On-site'];
                  return (
                    <Link
                      key={job.id}
                      href={`/careers/${job.slug}`}
                      className={`flex items-center gap-4 px-5 py-3.5 hover:bg-[#f5f5f5] transition-colors ${i > 0 ? 'border-t border-black/[0.05]' : ''}`}
                    >
                      <div className="w-5 h-5 shrink-0 text-[#aaaaaa]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[13.5px] font-semibold text-[#0a0e1a] leading-snug truncate">{job.title}</p>
                        <p className="text-[11.5px] text-[#0a0e1a]/45 mt-0.5">{job.department} · {job.location}</p>
                      </div>
                      <span
                        className="shrink-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold"
                        style={modelStyle}
                      >
                        {job.workModel}
                      </span>
                      <svg className="shrink-0 w-3.5 h-3.5 text-[#cccccc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6"/>
                      </svg>
                    </Link>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>

          {inputVal.trim().length > 0 && liveHits.length === 0 && (
            <p className="text-sm text-[#0a0e1a]/40 px-2">No positions found for &ldquo;{inputVal}&rdquo;</p>
          )}
        </div>
      </div>

      {/* ── Filter toggle row ── */}
      <div className="flex items-center gap-3 mb-2">
        <button
          onClick={() => setFilterOpen(o => !o)}
          className={`w-10 h-10 md:w-12 md:h-12 rounded-full grid place-items-center transition-colors hover:bg-black/5 ${filterOpen ? 'bg-black/5' : ''}`}
        >
          <svg className="icon fill-primary size-6 sm:size-8">
            <use href="/icons/all-icons.svg#icon-filter" />
          </svg>
        </button>

        {activePills.length > 0 && (
          <div className="flex items-center gap-1.5 overflow-x-auto">
            {activePills.map(pill => (
              <span
                key={pill.label}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium shrink-0"
                style={{ background: 'rgba(232,154,120,0.10)', color: '#c4743c', border: '1px solid rgba(232,154,120,0.25)' }}
              >
                {pill.label}
                <button onClick={pill.clear} className="hover:opacity-70 transition-opacity">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18M6 6l12 12"/>
                  </svg>
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* ── Filter panel ── */}
      <motion.div
        initial={false}
        animate={{ height: filterOpen ? 'auto' : 0, opacity: filterOpen ? 1 : 0 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div
          className="rounded-2xl px-5 py-5 mb-4 backdrop-blur-sm"
          style={{ background: 'rgba(255,255,255,0.80)', border: '1px solid rgba(0,0,0,0.07)' }}
        >
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold text-[#0a0e1a]">Filter positions</p>
            {activePills.length > 0 && (
              <button
                onClick={() => { setActiveDept('All'); setActiveModel('All'); setActiveType('All'); }}
                className="text-xs font-medium transition-colors"
                style={{ color: '#e89a78' }}
              >
                Clear all
              </button>
            )}
          </div>

          <div className="flex flex-col gap-4">

            {/* Department */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#0a0e1a]/30 mb-2">Department</p>
              <div className="flex flex-wrap gap-2">
                {departments.filter(d => d !== 'All').map(d => (
                  <button
                    key={d}
                    onClick={() => setActiveDept(activeDept === d ? 'All' : d)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150"
                    style={activeDept === d
                      ? { background: '#0a0e1a', color: '#fff' }
                      : { background: 'rgba(10,14,26,0.06)', color: 'rgba(10,14,26,0.55)' }
                    }
                  >
                    {d}
                    <span
                      className="text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center"
                      style={{ background: activeDept === d ? 'rgba(255,255,255,0.15)' : 'rgba(10,14,26,0.08)' }}
                    >
                      {deptCounts[d]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Work model */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#0a0e1a]/30 mb-2">Work model</p>
              <div className="flex flex-wrap gap-2">
                {models.filter(m => m !== 'All').map(m => (
                  <button
                    key={m}
                    onClick={() => setActiveModel(activeModel === m ? 'All' : m)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150"
                    style={activeModel === m
                      ? { background: '#e89a78', color: '#fff' }
                      : { background: 'rgba(232,154,120,0.10)', color: '#c4743c' }
                    }
                  >
                    {m}
                    <span
                      className="text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center"
                      style={{ background: activeModel === m ? 'rgba(255,255,255,0.20)' : 'rgba(232,154,120,0.15)' }}
                    >
                      {modelCounts[m]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Type */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#0a0e1a]/30 mb-2">Type</p>
              <div className="flex flex-wrap gap-2">
                {types.filter(t => t !== 'All').map(t => (
                  <button
                    key={t}
                    onClick={() => setActiveType(activeType === t ? 'All' : t)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150"
                    style={activeType === t
                      ? { background: '#0a0e1a', color: '#fff' }
                      : { background: 'rgba(10,14,26,0.06)', color: 'rgba(10,14,26,0.55)' }
                    }
                  >
                    {t}
                    <span
                      className="text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center"
                      style={{ background: activeType === t ? 'rgba(255,255,255,0.15)' : 'rgba(10,14,26,0.08)' }}
                    >
                      {typeCounts[t]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </motion.div>

      {/* ── Results count ── */}
      <p className="text-sm text-[#0a0e1a]/40 mb-4">
        <span style={{ color: '#e89a78', fontWeight: 700 }}>{filtered.length}</span> open position{filtered.length !== 1 ? 's' : ''}
        {activeDept !== 'All' && ` in ${activeDept}`}
      </p>

      {/* ── Table header ── */}
      <div
        className="hidden md:grid grid-cols-[1fr_160px_160px_140px_120px] gap-4 px-6 py-3 rounded-xl mb-2 text-[12px] font-bold uppercase tracking-widest"
        style={{ background: '#0a0e1a', color: 'rgba(255,255,255,0.75)' }}
      >
        <span>Position</span>
        <span>Department</span>
        <span>Location</span>
        <span>Work model</span>
        <span />
      </div>

      {/* ── Job rows ── */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-[#0a0e1a]/35 text-sm">
          No open positions match your search.
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((job, i) => {
              const modelStyle = MODEL_COLORS[job.workModel] ?? MODEL_COLORS['On-site'];
              const typeStyle  = TYPE_COLORS[job.type] ?? TYPE_COLORS['Full-time'];
              return (
                <motion.div
                  key={job.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, delay: i * 0.04 }}
                >
                  <div
                    onClick={() => router.push(`/careers/${job.slug}`)}
                    className="group flex flex-col md:grid md:grid-cols-[1fr_160px_160px_140px_120px] gap-4 items-start md:items-center px-6 py-5 rounded-2xl border border-black/[0.07] bg-white hover:border-[#e89a78]/40 hover:shadow-[0_4px_24px_rgba(232,154,120,0.12)] transition-all duration-200 cursor-pointer"
                  >
                    {/* Title + type */}
                    <div>
                      <p className="font-bold text-[#0a0e1a] text-[15px] leading-snug group-hover:text-[#e89a78] transition-colors">
                        {job.title}
                      </p>
                      <span
                        className="inline-block mt-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide"
                        style={typeStyle}
                      >
                        {job.type}
                      </span>
                    </div>

                    {/* Department */}
                    <p className="text-sm text-[#0a0e1a]/55">
                      <span className="md:hidden text-[10px] font-bold uppercase tracking-widest text-[#0a0e1a]/30 mr-1">Dept </span>
                      {job.department}
                    </p>

                    {/* Location */}
                    <p className="text-sm text-[#0a0e1a]/55 flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 shrink-0 opacity-40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 13-8 13s-8-7-8-13a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                      {job.location}
                    </p>

                    {/* Work model badge */}
                    <span
                      className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold"
                      style={modelStyle}
                    >
                      {job.workModel}
                    </span>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-base font-bold text-[#e89a78] group-hover:gap-3 transition-all">
                      View job
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}

      {/* ── Spontaneous application ── */}
      <div
        className="mt-16 rounded-2xl px-8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        style={{ background: '#0a0e1a' }}
      >
        <div>
          <p className="text-white font-extrabold text-xl mb-1">Don&apos;t see the right role?</p>
          <p className="text-white/45 text-sm">Send us a spontaneous application — we are always looking for exceptional people.</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="mailto:careers@nativeai.cloud"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all hover:opacity-90"
            style={{ background: '#e89a78', color: '#fff' }}
          >
            Get in touch
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a
            href={LINKEDIN_COMPANY_URL}
            target="_blank"
            rel="noopener noreferrer"
            title="Follow us on LinkedIn"
            className="w-11 h-11 flex items-center justify-center rounded-full transition-all hover:scale-105"
            style={{ background: '#0077b5', color: '#fff' }}
          >
            <LinkedInIcon className="w-5 h-5" />
          </a>
        </div>
      </div>

    </div>
  );
}
