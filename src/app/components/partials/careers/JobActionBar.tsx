'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type Props = {
  title: string;
  slug: string;
  workModel: string;
  department: string;
  modelStyle: { bg: string; color: string };
};

export default function JobActionBar({ title, slug, workModel, department, modelStyle }: Props) {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 120);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* ── Inline action row (always visible) ── */}
      <div className="flex items-center gap-3 mb-8">
        <a
          href="#job-details"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold border transition-all hover:bg-[#f5f5f5]"
          style={{ border: '1.5px solid #e0e0e0', color: '#0a0e1a', borderRadius: 6 }}
        >
          <svg className="w-4 h-4 opacity-40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
          </svg>
          Job details
        </a>
        <Link
          href={`/careers/${slug}/apply`}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:opacity-85"
          style={{ background: '#0a0e1a', color: '#fff' }}
        >
          Apply now
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>

      {/* ── Sticky bar ── */}
      <div
        className="fixed left-0 right-0 z-[200] transition-all duration-300"
        style={{
          top: stuck ? 64 : -80,
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(0,0,0,0.08)',
          boxShadow: stuck ? '0 4px 24px rgba(0,0,0,0.07)' : 'none',
        }}
      >
        <div className="max-w-[800px] mx-auto px-5 sm:px-8 h-14 flex items-center justify-between gap-4">
          {/* Left: title + badge */}
          <div className="flex items-center gap-3 min-w-0">
            <p className="font-bold text-[#0a0e1a] text-sm truncate">{title}</p>
            <span
              className="shrink-0 hidden sm:inline-flex items-center px-2.5 py-0.5 rounded text-xs font-semibold"
              style={modelStyle}
            >
              {workModel}
            </span>
            <span className="shrink-0 hidden md:inline text-xs text-[#0a0e1a]/35 font-medium">{department}</span>
          </div>

          {/* Right: actions */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="#job-details"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold border transition-all hover:bg-[#f5f5f5]"
              style={{ border: '1px solid #e0e0e0', color: '#0a0e1a', borderRadius: 5 }}
            >
              Job details
            </a>
            <Link
              href={`/careers/${slug}/apply`}
              className="inline-flex items-center gap-1.5 px-5 py-1.5 rounded-full text-xs font-bold transition-all hover:opacity-85"
              style={{ background: '#0a0e1a', color: '#fff' }}
            >
              Apply now
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
