'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import BracketFrame from '../../ui/BracketFrame';

/* ── constants ── */
const CARD_COUNT = 4;
const DWELL      = 0.9;

/* ── data ── */
const services = [
  {
    number: '01',
    title:  'Generative AI',
    tag:    'AI & LLMs',
    meta:   'genai.llms',
    icon:   '/img/icon-genai.svg',
    desc:   'We build and fine-tune LLMs, AI Agents, and RAG systems that plug into your real-world operations.',
    chips:  ['GPT-4o', 'RAG', 'Azure OpenAI', 'AI Agents', 'Fine-tuning'],
  },
  {
    number: '02',
    title:  'DevOps',
    tag:    'Automation',
    meta:   'devops.cicd',
    icon:   '/img/icon-devops.svg',
    desc:   'CI/CD pipelines, infrastructure as code, and automated testing on Azure and AWS — ship faster, break less.',
    chips:  ['CI/CD', 'Terraform', 'GitHub Actions', 'Azure DevOps', 'IaC'],
  },
  {
    number: '03',
    title:  '.NET',
    tag:    'Custom Dev',
    meta:   'dotnet.dev',
    icon:   '/img/icon-net.svg',
    desc:   'Robust, scalable .NET solutions — from APIs and microservices to full enterprise platforms.',
    chips:  ['.NET 8', 'C#', 'Microservices', 'REST APIs', 'EF Core'],
  },
  {
    number: '04',
    title:  'Azure & AWS',
    tag:    'Cloud',
    meta:   'cloud.infra',
    icon:   '/img/icon-azure-aws.svg',
    desc:   'Architecture, migration, and managed operations — secure by default, cost-optimised from day one.',
    chips:  ['Azure', 'AWS', 'Kubernetes', 'Serverless', 'Cost optimisation'],
  },
];

/* ── variants (matches ServicesScrollSection) ── */
const variants = [
  {
    background:   'linear-gradient(135deg, #F0A062 0%, #E85D2F 100%)',
    border:       undefined,
    textColor:    '#F5F2EA',
    numColor:     'rgba(245,242,234,0.65)',
    metaColor:    'rgba(245,242,234,0.48)',
    bracketColor: 'rgba(245,242,234,0.35)',
    iconBg:       'rgba(255,255,255,0.18)',
    chipBg:       'rgba(255,255,255,0.15)',
    chipColor:    'rgba(245,242,234,0.80)',
    hatch:        false,
  },
  {
    background:   '#F5F2EA',
    border:       '1.5px solid #1A1A1A',
    textColor:    '#1A1A1A',
    numColor:     '#888888',
    metaColor:    '#888888',
    bracketColor: '#1A1A1A',
    iconBg:       'rgba(26,26,26,0.07)',
    chipBg:       'rgba(26,26,26,0.07)',
    chipColor:    '#555555',
    hatch:        true,
  },
  {
    background:   'linear-gradient(135deg, #1A1A1A 0%, #6B3A2A 130%)',
    border:       undefined,
    textColor:    '#F5F2EA',
    numColor:     '#F0A062',
    metaColor:    'rgba(240,160,98,0.58)',
    bracketColor: 'rgba(245,242,234,0.30)',
    iconBg:       'rgba(255,255,255,0.09)',
    chipBg:       'rgba(255,255,255,0.08)',
    chipColor:    'rgba(245,242,234,0.65)',
    hatch:        false,
  },
];

/* ── helpers ── */
const lerp  = (a: number, b: number, t: number) => a + (b - a) * t;
const easeO = (t: number) => 1 - Math.pow(1 - Math.min(1, Math.max(0, t)), 3);
const easeI = (t: number) => Math.pow(Math.min(1, Math.max(0, t)), 2);
const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

/* ── heading block ── */
const headingBlock = (
  <div>
    <div className="flex items-center gap-2 mb-3">
      <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
      <p className="text-xs uppercase tracking-wider text-[#6b6b6b] font-medium">What we specialise in</p>
    </div>
    <h2 className="text-2xl lg:text-4xl font-bold text-[#0a0e1a] leading-tight">
      Four areas. One team.{' '}
      <span className="relative inline-block">
        <span className="bg-gradient-to-r from-[#f0a060] via-[#e89a78] to-[#d4845c] bg-clip-text text-transparent italic">
          Full delivery.
        </span>
        <span className="absolute -bottom-0.5 left-0 w-full h-[2px] rounded-full bg-gradient-to-r from-[#f0a060] via-[#e89a78] to-[#d4845c] opacity-50" />
      </span>
    </h2>
  </div>
);

/* ── component ── */
export default function HomeLowerSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs   = useRef<(HTMLDivElement | null)[]>(Array(CARD_COUNT).fill(null));
  const counterRef = useRef<HTMLSpanElement>(null);
  const fillRef    = useRef<HTMLDivElement>(null);
  const dotRefs    = useRef<(HTMLSpanElement | null)[]>(Array(CARD_COUNT).fill(null));

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth < 768) return;

    const section = sectionRef.current;
    if (!section) return;

    let rafId    = 0;
    let lastProg = -1;

    const render = () => {
      const rect       = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const scrolled  = clamp(-rect.top, 0, scrollable);
      const prog      = scrolled / scrollable;
      if (Math.abs(prog - lastProg) < 0.00015) return;
      lastProg = prog;

      const cp        = prog * CARD_COUNT;
      const activeIdx = Math.min(CARD_COUNT - 1, Math.floor(cp));

      if (counterRef.current)
        counterRef.current.textContent =
          `${String(activeIdx + 1).padStart(2, '0')} / ${String(CARD_COUNT).padStart(2, '0')}`;

      if (fillRef.current)
        fillRef.current.style.transform = `scaleX(${prog})`;

      dotRefs.current.forEach((dot, i) => {
        if (!dot) return;
        dot.style.opacity    = i === activeIdx || i < activeIdx ? '1' : '0.25';
        dot.style.transform  = i === activeIdx ? 'scale(1.6)' : 'scale(1)';
        dot.style.background = i < activeIdx ? '#e89a78' : '#0a0e1a';
      });

      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const dist = cp - (i + 0.5);
        let tx: number, rot: number, sc: number, op: number, zi: number;

        if (dist <= -1.15) {
          tx = 115; rot = 15; sc = 0.76; op = 0; zi = 0;
        } else if (dist < -0.28) {
          const t = easeO((dist + 1.15) / (1.15 - 0.28));
          tx = lerp(115, 0, t); rot = lerp(15, 0, t); sc = lerp(0.76, 1, t);
          op = clamp(t * 1.6, 0, 1); zi = 1;
        } else if (dist <= 0.28) {
          tx = 0; rot = 0; sc = 1; op = 1; zi = 2;
        } else if (dist < 1.15) {
          const t = easeI((dist - 0.28) / (1.15 - 0.28));
          tx = lerp(0, -115, t); rot = lerp(0, -10, t); sc = lerp(1, 0.80, t);
          op = clamp(1 - Math.max(0, (t - 0.35) / 0.65), 0, 1); zi = 1;
        } else {
          tx = -115; rot = -10; sc = 0.80; op = 0; zi = 0;
        }

        card.style.transform     = `translateX(${tx}vw) rotate(${rot}deg) scale(${sc})`;
        card.style.opacity       = String(op);
        card.style.zIndex        = String(zi);
        card.style.pointerEvents = zi === 2 ? 'auto' : 'none';
      });
    };

    const onScroll = () => { cancelAnimationFrame(rafId); rafId = requestAnimationFrame(render); };
    window.addEventListener('scroll', onScroll, { passive: true });
    render();
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(rafId); };
  }, []);

  return (
    <>
      {/* ══ MOBILE  < 768 px ══════════════════════════════════════ */}
      <section className="md:hidden bg-[#faf7f4] px-6 py-14">
        <div className="mb-8">{headingBlock}</div>
        <div className="grid grid-cols-1 gap-4">
          {services.map((svc, i) => {
            const v = variants[i % 3];
            return (
              <div
                key={i}
                className="relative overflow-hidden flex flex-col gap-4 p-6"
                style={{ background: v.background, border: v.border, borderRadius: 20 }}
              >
                {v.hatch && (
                  <div aria-hidden className="pointer-events-none absolute inset-0"
                    style={{ borderRadius: 20, background: 'repeating-linear-gradient(135deg,transparent 0px 8px,rgba(232,93,47,0.08) 8px 9px)' }} />
                )}
                <BracketFrame color={v.bracketColor} />
                <div className="relative flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-widest" style={{ color: v.numColor }}>{svc.number}</span>
                  <span className="font-mono text-[9px] tracking-widest" style={{ color: v.metaColor }}>{svc.meta}</span>
                </div>
                <div className="relative flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: v.iconBg }}>
                    <Image src={svc.icon} alt={svc.title} width={28} height={28} className="object-contain" />
                  </div>
                  <h3 className="font-bold text-lg leading-tight" style={{ color: v.textColor }}>{svc.title}</h3>
                </div>
                <p className="relative text-sm leading-relaxed" style={{ color: v.textColor, opacity: 0.7 }}>{svc.desc}</p>
                <div className="relative flex flex-wrap gap-1.5">
                  {svc.chips.map(c => (
                    <span key={c} className="text-[11px] font-medium px-2.5 py-0.5 rounded-full"
                      style={{ background: v.chipBg, color: v.chipColor, border: `1px solid ${v.chipColor}30` }}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ══ DESKTOP  ≥ 768 px ══════════════════════════════════════ */}
      <div
        ref={sectionRef}
        className="hidden md:block relative"
        style={{ height: `${CARD_COUNT * DWELL * 100}vh` }}
      >
        <div className="sticky top-0 h-screen bg-[#faf7f4] flex flex-col overflow-hidden">

          {/* Header row */}
          <div className="max-w-9xl mx-auto w-full px-8 sm:px-12 xl:px-16 pt-12 pb-5 flex items-end justify-between gap-8 shrink-0">
            {headingBlock}
            <div className="shrink-0 flex flex-col items-end gap-3">
              <span ref={counterRef} className="font-mono text-base font-semibold tabular-nums text-[#0a0e1a]">
                01 / 04
              </span>
              <div className="flex items-center gap-2">
                {Array.from({ length: CARD_COUNT }).map((_, i) => (
                  <span
                    key={i}
                    ref={el => { dotRefs.current[i] = el; }}
                    className="block w-1.5 h-1.5 rounded-full bg-[#0a0e1a] transition-all duration-150"
                    style={{ opacity: i === 0 ? 1 : 0.25 }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Progress rail */}
          <div className="max-w-9xl mx-auto w-full px-8 sm:px-12 xl:px-16 shrink-0 mb-1">
            <div className="h-[1.5px] bg-[#e8e0d8] rounded-full overflow-hidden">
              <div
                ref={fillRef}
                className="h-full bg-gradient-to-r from-[#f0a060] via-[#e89a78] to-[#d4845c] origin-left"
                style={{ transform: 'scaleX(0)' }}
              />
            </div>
          </div>

          {/* Card stage */}
          <div className="flex-1 relative flex items-center justify-center overflow-hidden">
            {services.map((svc, i) => {
              const v       = variants[i % 3];
              const isFirst = i === 0;
              return (
                <div
                  key={i}
                  ref={el => { cardRefs.current[i] = el; }}
                  aria-hidden={!isFirst}
                  style={{
                    position:           'absolute',
                    width:              'clamp(280px, 36vw, 440px)',
                    aspectRatio:        '3 / 4',
                    borderRadius:       22,
                    background:         v.background,
                    border:             v.border,
                    boxShadow:          '0 28px 72px rgba(0,0,0,0.16), 0 6px 18px rgba(0,0,0,0.08)',
                    padding:            28,
                    display:            'flex',
                    flexDirection:      'column',
                    justifyContent:     'space-between',
                    overflow:           'hidden',
                    willChange:         'transform, opacity',
                    backfaceVisibility: 'hidden',
                    transform:          isFirst ? 'translateX(0vw) rotate(0deg) scale(1)' : 'translateX(115vw) rotate(15deg) scale(0.76)',
                    opacity:            isFirst ? 1 : 0,
                    zIndex:             isFirst ? 2 : 0,
                    pointerEvents:      isFirst ? 'auto' : 'none',
                    transition:         'none',
                  }}
                >
                  {v.hatch && (
                    <div aria-hidden style={{
                      position: 'absolute', inset: 0, borderRadius: 22, pointerEvents: 'none',
                      background: 'repeating-linear-gradient(135deg,transparent 0px 8px,rgba(232,93,47,0.08) 8px 9px)',
                    }} />
                  )}

                  <BracketFrame color={v.bracketColor} />

                  {/* top: number + meta */}
                  <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between' }}>
                    <span className="font-mono" style={{ fontSize: 11, letterSpacing: '0.14em', color: v.numColor }}>{svc.number}</span>
                    <span className="font-mono" style={{ fontSize: 10, letterSpacing: '0.10em', color: v.metaColor }}>{svc.meta}</span>
                  </div>

                  {/* icon */}
                  <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: 80, height: 80, borderRadius: 16, background: v.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Image src={svc.icon} alt={svc.title} width={44} height={44} className="max-w-[44px] max-h-[44px] object-contain" />
                    </div>
                  </div>

                  {/* title + desc */}
                  <div style={{ position: 'relative' }}>
                    <h3 className="font-bold leading-tight mb-2" style={{ color: v.textColor, fontSize: 'clamp(16px, 1.8vw, 22px)', letterSpacing: '-0.01em' }}>
                      {svc.title}
                    </h3>
                    <p style={{ color: v.textColor, opacity: 0.6, fontSize: 12, lineHeight: 1.6 }}>{svc.desc}</p>
                  </div>

                  {/* chips */}
                  <div style={{ position: 'relative', display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {svc.chips.map(c => (
                      <span key={c} style={{
                        fontSize: 10, fontWeight: 500, padding: '3px 10px', borderRadius: 999,
                        background: v.chipBg, color: v.chipColor, border: `1px solid ${v.chipColor}30`,
                      }}>{c}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
