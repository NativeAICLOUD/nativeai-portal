'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

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
  skills?: string[];
  duration?: string;
};

const MODEL_COLORS: Record<string, { bg: string; color: string }> = {
  Remote:    { bg: '#f3f4f6', color: '#6b7280' },
  Hybrid:    { bg: '#f3f4f6', color: '#6b7280' },
  'On-site': { bg: '#f3f4f6', color: '#6b7280' },
};

const TYPE_COLORS: Record<string, { bg: string; color: string }> = {
  'Full-time': { bg: '#f3f4f6', color: '#6b7280' },
  Contract:    { bg: '#f3f4f6', color: '#6b7280' },
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
          background: '#ffffff',
          border: '1px solid rgba(0,0,0,0.06)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        }}
      >
        {/* Green glow */}
        <div
          className="absolute top-0 right-0 w-[420px] h-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(0,0,0,0) 0%, transparent 65%)' }}
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
                style={{ background: '#f3f4f6', color: '#6b7280', border: '1px solid #e6e6e6' }}
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
                style={{ color: '#111' }}
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
                      ? { background: '#111', color: '#fff' }
                      : { background: '#f3f4f6', color: '#6b7280' }
                    }
                  >
                    {m}
                    <span
                      className="text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center"
                      style={{ background: activeModel === m ? 'rgba(255,255,255,0.20)' : 'rgba(0,0,0,0.06)' }}
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
        <span style={{ color: '#111', fontWeight: 700 }}>{filtered.length}</span> open position{filtered.length !== 1 ? 's' : ''}
        {activeDept !== 'All' && ` in ${activeDept}`}
      </p>

      {/* ── Job cards ── */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-[#0a0e1a]/35 text-sm">
          No open positions match your search.
        </div>
      ) : (
        <div className="flex flex-col gap-3">
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
                    className="group flex flex-col gap-4 px-6 py-6 rounded-2xl border border-black/[0.07] bg-white hover:border-[#111]/30 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all duration-200 cursor-pointer"
                  >
                    {/* Row 1: Title + Hiring Now */}
                    <div className="flex items-start justify-between gap-3">
                      <p className="font-semibold text-[#111] text-[18px] leading-snug tracking-[-0.01em] group-hover:text-[#2563eb] transition-colors">
                        {job.title}
                      </p>
                      <span
                        className="shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wide"
                        style={{ background: 'rgba(5,150,105,0.10)', color: '#059669', border: '1px solid rgba(5,150,105,0.25)' }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#059669' }} />
                        Hiring Now
                      </span>
                    </div>

                    {/* Row 2: Description */}
                    <p className="text-[15px] text-[#4b5563] leading-[1.6] line-clamp-2">
                      {job.description}
                    </p>

                    {/* Row 3: Skills */}
                    {job.skills && job.skills.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-[#9ca3af] mr-0.5">Skills</span>
                        {job.skills.map(skill => (
                          <span
                            key={skill}
                            className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium"
                            style={{ background: '#f3f4f6', color: '#6b7280', border: '1px solid #e6e6e6' }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Row 4: Meta + CTA */}
                    <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-black/[0.05]">
                      <span
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide"
                        style={typeStyle}
                      >
                        {job.type}
                      </span>
                      {job.duration && (
                        <span className="text-[12px] text-[#6b7280] font-medium">{job.duration}</span>
                      )}
                      <span
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold"
                        style={modelStyle}
                      >
                        {job.workModel}
                      </span>
                      <span className="flex items-center gap-1 text-[12px] text-[#6b7280]">
                        <svg className="w-3 h-3 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 10c0 6-8 13-8 13s-8-7-8-13a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                        </svg>
                        {job.location}
                      </span>
                      <span className="text-[12px] text-[#6b7280]">{job.department}</span>
                      <div className="ml-auto flex items-center gap-1.5 text-sm font-bold text-[#111] group-hover:gap-2.5 transition-all">
                        View job
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
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
            style={{ background: '#111', color: '#fff' }}
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
            style={{ background: '#111', color: '#fff' }}
          >
            <LinkedInIcon className="w-5 h-5" />
          </a>
        </div>
      </div>

    </div>
  );
}
