'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import ApplyForm from './ApplyForm';

type Job = {
  title: string;
  slug: string;
  department: string;
  location: string;
  workModel: string;
  type: string;
  about: string;
  responsibilities: string[];
  requirements: string[];
  preferredRequirements?: string[];
  benefits: string[];
};

type Props = {
  job: Job;
  modelStyle: { bg: string; color: string };
  typeStyle:  { bg: string; color: string };
};

const TABS = ['Job details', 'Apply'] as const;
type Tab = typeof TABS[number];

export default function JobTabs({ job, modelStyle, typeStyle }: Props) {
  const [active, setActive] = useState<Tab>('Job details');
  const [stuck, setStuck]   = useState(false);
  const [hidden, setHidden] = useState(false);
  const applyRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  function switchTab(tab: Tab) {
    setActive(tab);
    if (tab === 'Apply') {
      requestAnimationFrame(() => {
        applyRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;
      setStuck(currentY > 120);
      if (diff > 4 && currentY > 160) {
        setHidden(true);
      } else if (diff < -4 || currentY < 160) {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* ── Tab bar ── */}
      <div className="mb-8">
        <div className="flex gap-0 w-full" style={{ borderBottom: '1px solid #e6e6e6' }}>
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => switchTab(tab)}
              className="relative px-6 py-4 text-base font-semibold transition-colors duration-150"
              style={{ color: active === tab ? '#111' : '#9ca3af' }}
            >
              {tab}
              {active === tab && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full"
                  style={{ background: '#111' }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── Job details tab ── */}
      {active === 'Job details' && (
        <div>
          <div className="mb-6 rounded-lg border border-[#e6e6e6] bg-white p-6">
            <p className="leading-[1.7] text-[15px]" style={{ color: '#374151' }}>{job.about}</p>
          </div>

          <Section title="What you'll do">
            <CheckList items={job.responsibilities} />
          </Section>

          <Section title="What we're looking for">
            <CheckList items={job.requirements} />
            {job.preferredRequirements && job.preferredRequirements.length > 0 && (
              <>
                <p className="text-[11px] font-medium uppercase tracking-widest mt-5 mb-3" style={{ color: '#9ca3af' }}>Nice to have</p>
                <CheckList items={job.preferredRequirements} muted />
              </>
            )}
          </Section>

          <Section title="What we offer">
            <CheckList items={job.benefits} />
          </Section>

          {/* Job details panel */}
          <div id="job-details" className="mb-6 rounded-lg border border-[#e6e6e6] bg-white p-6">
            <h2 className="text-[18px] font-medium leading-[1.3] text-[#111] mb-5">Job details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#eee] pt-5">
              {[
                { label: 'Department', value: job.department },
                { label: 'Location',   value: job.location   },
                { label: 'Work model', value: job.workModel  },
                { label: 'Type',       value: job.type       },
              ].map((row) => (
                <div key={row.label}>
                  <p className="text-[11px] font-medium uppercase tracking-widest mb-1" style={{ color: '#9ca3af' }}>{row.label}</p>
                  <p className="text-[15px] font-medium text-[#111]">{row.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Apply CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 mb-10">
            <div>
              <p className="text-lg font-extrabold text-[#111] mb-1">Ready to apply?</p>
              <p className="text-sm" style={{ color: '#6b7280' }}>Send your CV and a short note about why this role is a fit.</p>
            </div>
            <button
              onClick={() => switchTab('Apply')}
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.22)] active:translate-y-0"
              style={{ background: '#111' }}
            >
              Apply now
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-sm transition-colors"
            style={{ color: '#6b7280' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#111')}
            onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')}
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            Back to all positions
          </Link>
        </div>
      )}

      {/* ── Apply tab ── */}
      {active === 'Apply' && (
        <div
          ref={applyRef}
          id="apply"
          style={{ scrollMarginTop: '120px' }}
        >
          <div className="h-px mb-8" style={{ background: '#eee' }} />
          <ApplyForm
            jobTitle={job.title}
            jobSlug={job.slug}
            department={job.department}
            location={job.location}
            workModel={job.workModel}
          />
        </div>
      )}

      {/* ── Sticky bar — hides on scroll-down, reveals on scroll-up, matching the navbar ── */}
      <div
        className="fixed left-0 right-0 top-0 z-[200] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          transform: stuck && !hidden ? 'translateY(64px)' : 'translateY(-100%)',
          background: 'rgba(255,255,255,0.90)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid #eee',
          boxShadow: stuck ? '0 4px 24px rgba(0,0,0,0.08)' : 'none',
        }}
      >
        <div className="max-w-[820px] mx-auto px-5 sm:px-8 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <p className="font-bold text-[#111] text-sm truncate">{job.title}</p>
            <span
              className="shrink-0 hidden sm:inline-flex items-center px-2.5 py-0.5 rounded text-xs font-semibold"
              style={modelStyle}
            >
              {job.workModel}
            </span>
            <span className="shrink-0 hidden md:inline text-xs font-medium" style={{ color: '#9ca3af' }}>{job.department}</span>
          </div>
          <div className="flex items-center shrink-0" style={{ borderBottom: '1px solid transparent' }}>
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => switchTab(tab)}
                className="relative px-4 py-[17px] text-xs font-semibold transition-colors duration-150"
                style={{ color: active === tab ? '#111' : '#9ca3af' }}
              >
                {tab}
                {active === tab && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[2px]"
                    style={{ background: '#111' }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6 rounded-lg border border-[#e6e6e6] bg-white p-6">
      <h2 className="text-[18px] font-medium leading-[1.3] text-[#111] mb-5">{title}</h2>
      {children}
    </div>
  );
}

function CheckList({ items, muted = false }: { items: string[]; muted?: boolean }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-2.5">
          <svg className="mt-0.5 h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke={muted ? '#9ca3af' : '#111'} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span className="text-[15px] leading-relaxed" style={{ color: muted ? '#9ca3af' : '#374151' }}>{item}</span>
        </div>
      ))}
    </div>
  );
}
