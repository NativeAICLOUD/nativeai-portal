'use client';

import { Link } from 'react-transition-progress/next';
import { Constants } from '@/Constants';

const MONO: React.CSSProperties = { fontFamily: "'JetBrains Mono', monospace" };

/* ── Apple liquid glass tiers ── */
const lg1: React.CSSProperties = {
  background: 'rgba(255,255,255,0.18)',
  backdropFilter: 'blur(80px) saturate(220%) brightness(110%)',
  WebkitBackdropFilter: 'blur(80px) saturate(220%) brightness(110%)',
  border: '1px solid rgba(255,255,255,0.55)',
  borderRadius: 26,
  boxShadow:
    '0 0 0 0.5px rgba(255,255,255,0.22), ' +
    '0 32px 80px rgba(0,0,0,0.10), ' +
    '0 4px 12px rgba(0,0,0,0.05), ' +
    'inset 0 2px 0 rgba(255,255,255,0.88), ' +
    'inset 0 -1px 0 rgba(0,0,0,0.04)',
};

const lg2: React.CSSProperties = {
  background: 'rgba(255,255,255,0.14)',
  backdropFilter: 'blur(60px) saturate(200%) brightness(108%)',
  WebkitBackdropFilter: 'blur(60px) saturate(200%) brightness(108%)',
  border: '1px solid rgba(255,255,255,0.46)',
  borderRadius: 20,
  boxShadow:
    '0 0 0 0.5px rgba(255,255,255,0.16), ' +
    '0 16px 48px rgba(0,0,0,0.07), ' +
    'inset 0 1.5px 0 rgba(255,255,255,0.80), ' +
    'inset 0 -1px 0 rgba(0,0,0,0.03)',
};

const lg3: React.CSSProperties = {
  background: 'rgba(255,255,255,0.10)',
  backdropFilter: 'blur(40px) saturate(180%) brightness(106%)',
  WebkitBackdropFilter: 'blur(40px) saturate(180%) brightness(106%)',
  border: '1px solid rgba(255,255,255,0.38)',
  borderRadius: 18,
  boxShadow:
    '0 0 0 0.5px rgba(255,255,255,0.12), ' +
    '0 8px 32px rgba(0,0,0,0.05), ' +
    'inset 0 1px 0 rgba(255,255,255,0.72)',
};

const lgDark: React.CSSProperties = {
  background: 'rgba(8,11,20,0.72)',
  backdropFilter: 'blur(80px) saturate(200%) brightness(90%)',
  WebkitBackdropFilter: 'blur(80px) saturate(200%) brightness(90%)',
  border: '1px solid rgba(255,255,255,0.10)',
  borderRadius: 26,
  boxShadow:
    '0 0 0 0.5px rgba(0,0,0,0.25), ' +
    '0 40px 100px rgba(0,0,0,0.28), ' +
    '0 4px 12px rgba(0,0,0,0.12), ' +
    'inset 0 1.5px 0 rgba(255,255,255,0.08)',
};

const stats = [
  { value: '5+',    label: 'Years on Azure & AWS' },
  { value: '20+',   label: 'AI projects shipped' },
  { value: '97.8%', label: 'Avg. agent accuracy' },
  { value: '<8s',   label: 'Avg. AI response time' },
];

const pillars = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
    tag: 'AI Agents',
    title: 'We build AI agents that actually work',
    body: 'Not demos. Production agents handling real business workflows — document review, data extraction, contract analysis — running on Azure OpenAI and GPT-4o.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    tag: 'RAG & LLMs',
    title: 'We connect LLMs to your data',
    body: 'RAG pipelines grounded in your knowledge base. Azure AI Search, vector stores, semantic chunking — accurate, context-aware answers instead of hallucinations.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
    tag: 'Cloud Native',
    title: 'We architect for scale',
    body: 'Azure and AWS workloads designed from day one for security, resilience, and cost-efficiency. Infrastructure that grows with your business.',
  },
];

const values = [
  { num: '01', title: 'Practical over theoretical', body: 'We ship working software. Every engagement ends with something deployed and measurable — not a slide deck.' },
  { num: '02', title: 'Speed without shortcuts', body: "We move fast without cutting corners. You'll see results in weeks, built on a foundation that won't need rebuilding." },
  { num: '03', title: 'Built to last', body: 'We design systems you can own and extend. No black-box dependencies, no vendor lock-in surprises.' },
];

export default function AboutUsPage() {
  return (
    <main
      className="relative overflow-hidden min-h-screen"
      style={{ ...MONO, background: 'linear-gradient(145deg, #fff5ee 0%, #fdf0e8 30%, #fef6f0 60%, #fff8f2 100%)' }}
    >

      {/* ── Vivid ambient blobs ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* main warm glow — top right */}
        <div style={{ position: 'absolute', top: '-15%', right: '-10%', width: 820, height: 820, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(240,140,60,0.38) 0%, rgba(232,154,120,0.18) 45%, transparent 70%)', filter: 'blur(2px)' }} />
        {/* secondary amber — mid left */}
        <div style={{ position: 'absolute', top: '28%', left: '-18%', width: 680, height: 680, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(250,180,80,0.28) 0%, rgba(240,160,96,0.12) 50%, transparent 70%)' }} />
        {/* soft rose — bottom center */}
        <div style={{ position: 'absolute', bottom: '-8%', left: '20%', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(255,160,100,0.22) 0%, rgba(240,120,80,0.10) 50%, transparent 70%)' }} />
        {/* cool accent — far bottom right */}
        <div style={{ position: 'absolute', bottom: '5%', right: '-5%', width: 460, height: 460, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(255,200,120,0.18) 0%, transparent 65%)' }} />
        {/* noise texture */}
        <div className="absolute inset-0" style={{ backgroundImage: "url('/img/noise-background.jpg')", backgroundSize: '280px 280px', opacity: 0.04 }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-10 lg:px-8">

        {/* ── Hero ── */}
        <div className="pt-32 pb-16 lg:pt-40 lg:pb-20">

          {/* Glass tag pills */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-10">
            {['AI Agents', 'LLMs', 'Azure & AWS'].map(t => (
              <span
                key={t}
                className="inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-semibold"
                style={{
                  ...lg3,
                  borderRadius: 999,
                  color: '#b86a30',
                  padding: '6px 16px',
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-20">
            <h1 className="flex-1 text-4xl sm:text-5xl lg:text-[3.8rem] font-extrabold leading-[1.06] tracking-tight text-[#0a0e1a]">
              We make AI<br />
              <span className="bg-gradient-to-r from-[#f0a060] via-[#e89a78] to-[#d4845c] bg-clip-text text-transparent">
                work for you
              </span>
            </h1>
            <p className="lg:max-w-[360px] text-[14px] text-[#0a0e1a]/52 leading-relaxed lg:pb-2">
              NativeCloud is an AI and cloud engineering studio. We help businesses move from "AI could be useful" to production systems that create real, measurable impact.
            </p>
          </div>
        </div>

        {/* ── Stats ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-14">
          {stats.map(s => (
            <div key={s.label} style={lg1} className="px-5 py-5">
              <p className="text-2xl sm:text-[1.85rem] font-extrabold text-[#0a0e1a] tracking-tight">{s.value}</p>
              <p className="text-[11px] text-[#0a0e1a]/40 mt-1.5 leading-tight">{s.label}</p>
            </div>
          ))}
        </div>

        {/* ── Partner credentials ── */}
        <div className="mb-14">
          <div style={lg1} className="px-6 sm:px-8 py-6">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0a0e1a]/35">Partners & credentials</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Microsoft Partner', sub: 'Certified partner network' },
                { label: 'AWS Partner', sub: 'Amazon Web Services' },
                { label: 'Microsoft AI Tour', sub: 'Official member & partner' },
              ].map(p => (
                <div
                  key={p.label}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl"
                  style={lg2}
                >
                  <span
                    className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(240,160,96,0.15)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.70)' }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c4743c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </span>
                  <div>
                    <p className="text-[12.5px] font-semibold text-[#0a0e1a]">{p.label}</p>
                    <p className="text-[10.5px] text-[#0a0e1a]/40 mt-0.5">{p.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Mission ── */}
        <div className="mb-14">
          <div style={{ ...lg1, padding: '44px 48px' }}>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#e89a78]">Our mission</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
              <p className="flex-1 text-[18px] sm:text-[20px] font-semibold text-[#0a0e1a] leading-[1.55]">
                "Most businesses know AI can help them. The hard part is making it actually work — reliably, accurately, at production scale."
              </p>
              <p className="flex-1 text-[13.5px] text-[#0a0e1a]/50 leading-relaxed lg:pt-1">
                That's the gap NativeCloud fills. We combine deep cloud engineering with hands-on AI implementation — RAG pipelines, autonomous agents, LLM integrations — built on Azure and AWS, designed to slot into your existing workflows without disruption.
              </p>
            </div>
          </div>
        </div>

        {/* ── What we do ── */}
        <div className="mb-14">
          <div className="flex items-center gap-2.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0a0e1a]/35">What we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {pillars.map(p => (
              <div key={p.tag} style={lg2} className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span
                    className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      ...lg3,
                      borderRadius: 10,
                      width: 32,
                      height: 32,
                      color: '#c4743c',
                    }}
                  >
                    {p.icon}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.10em] text-[#c4743c]">{p.tag}</span>
                </div>
                <h3 className="text-[14.5px] font-bold text-[#0a0e1a] leading-snug">{p.title}</h3>
                <p className="text-[12.5px] text-[#0a0e1a]/48 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── How we work ── */}
        <div className="mb-14">
          <div className="flex items-center gap-2.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0a0e1a]/35">How we work</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {values.map(v => (
              <div key={v.num} style={lg3} className="flex flex-col gap-4 px-6 py-6">
                <span className="text-[32px] font-extrabold leading-none" style={{ color: 'rgba(240,140,60,0.28)' }}>{v.num}</span>
                <h3 className="text-[14.5px] font-bold text-[#0a0e1a]">{v.title}</h3>
                <p className="text-[12.5px] text-[#0a0e1a]/48 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="mb-24">
          <div style={lgDark} className="px-8 py-12 sm:px-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#e89a78]/80">Ready to start?</p>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug max-w-sm">
                Let's build something that actually works.
              </h2>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <Link
                href={Constants.PAGES.SCHEDULE_CALL}
                className="inline-flex items-center justify-center gap-2 bg-[#e89a78] hover:bg-[#d4836a] text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-200 text-sm whitespace-nowrap"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
                  <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                Schedule a free call
              </Link>
              <p className="text-white/28 text-xs text-center">We reply within one business day.</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
