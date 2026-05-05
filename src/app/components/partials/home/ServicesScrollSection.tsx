'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import BracketFrame from '../../ui/BracketFrame';

/* ─── constants ─────────────────────────────────────── */

const CARD_COUNT = 10;
const DWELL      = 0.6; // scroll height per card as fraction of 100vh

/* ─── data ──────────────────────────────────────────── */

const services = [
  { src: '/img/Cloud.png',    w: 93,  h: 68,  title: 'Cloud Solutions & Services',     meta: 'cloud.solutions'   },
  { src: '/img/Layer_1.png',  w: 95,  h: 90,  title: 'Platform Development',           meta: 'platform.dev'      },
  { src: '/img/Layer_2.png',  w: 89,  h: 81,  title: 'SaaS App Development',          meta: 'saas.build'        },
  { src: '/img/DevOps.png',   w: 77,  h: 74,  title: 'Cloud & DevOps',                meta: 'cloud.devops'      },
  { src: '/img/Layer_4.png',  w: 77,  h: 77,  title: 'App Modernization',              meta: 'app.modern'        },
  { src: '/img/Layer_5.png',  w: 88,  h: 89,  title: 'Enterprise App Development',    meta: 'enterprise.dev'    },
  { src: '/img/Layer_6.png',  w: 101, h: 79,  title: 'Digital Transformation',        meta: 'digital.transform' },
  { src: '/img/Layer_3.png',  w: 89,  h: 67,  title: 'End-to-end Business Solutions', meta: 'biz.solutions'     },
  { src: '/img/Layer_8.png',  w: 90,  h: 90,  title: 'UI / UX Design',               meta: 'ui.ux.design'      },
  { src: '/img/Layer_9.png',  w: 140, h: 112, title: 'Cloud Migrations',              meta: 'cloud.migrate'     },
];

type Variant = {
  background:   string;
  border:       string | undefined;
  textColor:    string;
  numColor:     string;
  metaColor:    string;
  bracketColor: string;
  iconBg:       string;
  hatch:        boolean;
};

const variants: Variant[] = [
  /* 0 – orange */
  {
    background:   'linear-gradient(135deg, #F0A062 0%, #E85D2F 100%)',
    border:       undefined,
    textColor:    '#F5F2EA',
    numColor:     'rgba(245,242,234,0.65)',
    metaColor:    'rgba(245,242,234,0.48)',
    bracketColor: 'rgba(245,242,234,0.35)',
    iconBg:       'rgba(255,255,255,0.18)',
    hatch:        false,
  },
  /* 1 – cream */
  {
    background:   '#F5F2EA',
    border:       '1.5px solid #1A1A1A',
    textColor:    '#1A1A1A',
    numColor:     '#888888',
    metaColor:    '#888888',
    bracketColor: '#1A1A1A',
    iconBg:       'rgba(26,26,26,0.07)',
    hatch:        true,
  },
  /* 2 – dark */
  {
    background:   'linear-gradient(135deg, #1A1A1A 0%, #6B3A2A 130%)',
    border:       undefined,
    textColor:    '#F5F2EA',
    numColor:     '#F0A062',
    metaColor:    'rgba(240,160,98,0.58)',
    bracketColor: 'rgba(245,242,234,0.30)',
    iconBg:       'rgba(255,255,255,0.09)',
    hatch:        false,
  },
];

/* ─── math helpers ───────────────────────────────────── */

const lerp  = (a: number, b: number, t: number) => a + (b - a) * t;
const easeO = (t: number) => 1 - Math.pow(1 - Math.min(1, Math.max(0, t)), 3);
const easeI = (t: number) => Math.pow(Math.min(1, Math.max(0, t)), 2);
const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

/* ─── component ─────────────────────────────────────── */

export default function ServicesScrollSection() {
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

      const scrolled = clamp(-rect.top, 0, scrollable);
      const prog     = scrolled / scrollable; // 0 → 1
      if (Math.abs(prog - lastProg) < 0.00015) return;
      lastProg = prog;

      const cp       = prog * CARD_COUNT; // 0 → CARD_COUNT
      const activeIdx = Math.min(CARD_COUNT - 1, Math.floor(cp));

      /* counter */
      if (counterRef.current)
        counterRef.current.textContent =
          `${String(activeIdx + 1).padStart(2, '0')} / ${String(CARD_COUNT).padStart(2, '0')}`;

      /* progress fill */
      if (fillRef.current)
        fillRef.current.style.transform = `scaleX(${prog})`;

      /* dots */
      dotRefs.current.forEach((dot, i) => {
        if (!dot) return;
        const isActive = i === activeIdx;
        const isPast   = i < activeIdx;
        dot.style.opacity   = isActive || isPast ? '1' : '0.25';
        dot.style.transform = isActive ? 'scale(1.6)' : 'scale(1)';
        dot.style.background = isPast ? '#e89a78' : '#0a0e1a';
      });

      /* cards — dist: negative = incoming from right, positive = outgoing to left */
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const dist = cp - (i + 0.5);

        let tx: number, rot: number, sc: number, op: number, zi: number;

        if (dist <= -1.15) {
          tx = 115; rot = 15; sc = 0.76; op = 0; zi = 0;
        } else if (dist < -0.28) {
          const t = easeO((dist + 1.15) / (1.15 - 0.28));
          tx  = lerp(115, 0, t);
          rot = lerp(15, 0, t);
          sc  = lerp(0.76, 1, t);
          op  = clamp(t * 1.6, 0, 1);
          zi  = 1;
        } else if (dist <= 0.28) {
          tx = 0; rot = 0; sc = 1; op = 1; zi = 2;
        } else if (dist < 1.15) {
          const t = easeI((dist - 0.28) / (1.15 - 0.28));
          tx  = lerp(0, -115, t);
          rot = lerp(0, -10, t);
          sc  = lerp(1, 0.80, t);
          op  = clamp(1 - Math.max(0, (t - 0.35) / 0.65), 0, 1);
          zi  = 1;
        } else {
          tx = -115; rot = -10; sc = 0.80; op = 0; zi = 0;
        }

        card.style.transform     = `translateX(${tx}vw) rotate(${rot}deg) scale(${sc})`;
        card.style.opacity       = String(op);
        card.style.zIndex        = String(zi);
        card.style.pointerEvents = zi === 2 ? 'auto' : 'none';
      });
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(render);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    render();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  /* ── shared heading ──────────────────────────────────── */
  const headingBlock = (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <p className="text-xs uppercase tracking-wider text-[#6b6b6b] font-medium">What we deliver</p>
      </div>
      <h2 className="text-2xl lg:text-4xl font-bold text-[#0a0e1a] leading-tight">
        Every service your business needs —{' '}
        <span className="relative inline-block">
          <span className="bg-gradient-to-r from-[#f0a060] via-[#e89a78] to-[#d4845c] bg-clip-text text-transparent italic">
            under one roof
          </span>
          <span className="absolute -bottom-0.5 left-0 w-full h-[2px] rounded-full bg-gradient-to-r from-[#f0a060] via-[#e89a78] to-[#d4845c] opacity-50" />
        </span>
      </h2>
    </div>
  );

  /* ── mobile carousel ── */
  const mobileTrackRef = useRef<HTMLDivElement>(null);
  const mobileCardRefs = useRef<(HTMLDivElement | null)[]>(Array(CARD_COUNT).fill(null));
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const track = mobileTrackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = mobileCardRefs.current.indexOf(entry.target as HTMLDivElement);
            if (idx >= 0) setActiveCard(idx);
          }
        });
      },
      { threshold: 0.6, root: track },
    );

    mobileCardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ══ MOBILE  ≤ 768 px ══════════════════════════════════════ */}
      <section className="md:hidden bg-[#faf7f4] py-14">

        {/* heading */}
        <div className="px-6 mb-8">{headingBlock}</div>

        {/* counter + dots */}
        <div className="flex items-center justify-between px-6 mb-5">
          <span className="font-mono text-sm font-semibold tabular-nums text-[#0a0e1a]">
            {String(activeCard + 1).padStart(2, '0')} / {String(CARD_COUNT).padStart(2, '0')}
          </span>
          <div className="flex items-center gap-1.5">
            {Array.from({ length: CARD_COUNT }).map((_, i) => (
              <span
                key={i}
                className="rounded-full transition-all duration-200"
                style={{
                  width:      i === activeCard ? 18 : 5,
                  height:     5,
                  background: i < activeCard ? '#e89a78' : i === activeCard ? '#0a0e1a' : 'rgba(10,14,26,0.2)',
                }}
              />
            ))}
          </div>
        </div>

        {/* progress rail */}
        <div className="px-6 mb-6">
          <div className="h-[1.5px] bg-[#e8e0d8] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#f0a060] via-[#e89a78] to-[#d4845c] rounded-full transition-all duration-300"
              style={{ width: `${((activeCard + 1) / CARD_COUNT) * 100}%` }}
            />
          </div>
        </div>

        {/* horizontal snap track */}
        <div
          ref={mobileTrackRef}
          className="flex gap-4 overflow-x-auto"
          style={{
            scrollSnapType:          'x mandatory',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth:          'none',
            paddingLeft:             24,
            paddingRight:            24,
          }}
        >
          {services.map((svc, i) => {
            const v   = variants[i % 3];
            const idx = String(i + 1).padStart(2, '0');
            return (
              <div
                key={i}
                ref={(el) => { mobileCardRefs.current[i] = el; }}
                className="relative overflow-hidden shrink-0 flex flex-col justify-between"
                style={{
                  scrollSnapAlign: 'start',
                  width:           'min(72vw, 280px)',
                  aspectRatio:     '4 / 5',
                  borderRadius:    22,
                  background:      v.background,
                  border:          v.border,
                  boxShadow:       '0 20px 56px rgba(0,0,0,0.15), 0 4px 14px rgba(0,0,0,0.08)',
                  padding:         22,
                }}
              >
                {/* diagonal hatch (cream variant) */}
                {v.hatch && (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                      borderRadius: 22,
                      background:   'repeating-linear-gradient(135deg,transparent 0px 8px,rgba(232,93,47,0.08) 8px 9px)',
                    }}
                  />
                )}

                <BracketFrame color={v.bracketColor} />

                {/* top: number + meta */}
                <div className="relative flex items-start justify-between">
                  <span className="font-mono" style={{ fontSize: 10, letterSpacing: '0.14em', color: v.numColor }}>
                    {idx}
                  </span>
                  <span className="font-mono" style={{ fontSize: 9, letterSpacing: '0.10em', color: v.metaColor }}>
                    {svc.meta}
                  </span>
                </div>

                {/* centre: icon */}
                <div className="relative flex items-center justify-center">
                  <div
                    className="flex items-center justify-center"
                    style={{ width: 76, height: 76, borderRadius: 16, background: v.iconBg }}
                  >
                    <Image
                      src={svc.src} alt={svc.title}
                      width={svc.w} height={svc.h}
                      className="max-w-[44px] max-h-[44px] object-contain"
                    />
                  </div>
                </div>

                {/* bottom: title + url */}
                <div className="relative">
                  <h3
                    className="font-bold leading-tight"
                    style={{ color: v.textColor, fontSize: 16, letterSpacing: '-0.01em' }}
                  >
                    {svc.title}
                  </h3>
                  <span
                    className="font-mono mt-1.5 block"
                    style={{ fontSize: 9, letterSpacing: '0.10em', color: v.metaColor }}
                  >
                    ↗ nativecloud.service
                  </span>
                </div>
              </div>
            );
          })}

          {/* trailing spacer so last card snaps cleanly */}
          <div className="shrink-0 w-6" aria-hidden />
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

            {/* counter + dot rail */}
            <div className="shrink-0 flex flex-col items-end gap-3">
              <span
                ref={counterRef}
                className="font-mono text-base font-semibold tabular-nums text-[#0a0e1a]"
              >
                01 / 10
              </span>
              <div className="flex items-center gap-2">
                {Array.from({ length: CARD_COUNT }).map((_, i) => (
                  <span
                    key={i}
                    ref={(el) => { dotRefs.current[i] = el; }}
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
              const idx     = String(i + 1).padStart(2, '0');
              const isFirst = i === 0;
              return (
                <div
                  key={i}
                  ref={(el) => { cardRefs.current[i] = el; }}
                  aria-hidden={!isFirst}
                  style={{
                    position:           'absolute',
                    width:              'clamp(260px, 34vw, 420px)',
                    aspectRatio:        '4 / 5',
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
                    transform:          isFirst
                      ? 'translateX(0vw) rotate(0deg) scale(1)'
                      : 'translateX(115vw) rotate(15deg) scale(0.76)',
                    opacity:            isFirst ? 1 : 0,
                    zIndex:             isFirst ? 2 : 0,
                    pointerEvents:      isFirst ? 'auto' : 'none',
                    transition:         'none',
                  }}
                >
                  {/* diagonal hatch overlay (cream variant) */}
                  {v.hatch && (
                    <div
                      aria-hidden
                      style={{
                        position: 'absolute', inset: 0, borderRadius: 22, pointerEvents: 'none',
                        background: 'repeating-linear-gradient(135deg,transparent 0px 8px,rgba(232,93,47,0.08) 8px 9px)',
                      }}
                    />
                  )}

                  <BracketFrame color={v.bracketColor} />

                  {/* top row: index + meta tag */}
                  <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <span
                      className="font-mono"
                      style={{ fontSize: 11, letterSpacing: '0.14em', color: v.numColor }}
                    >
                      {idx}
                    </span>
                    <span
                      className="font-mono"
                      style={{ fontSize: 10, letterSpacing: '0.10em', color: v.metaColor }}
                    >
                      {svc.meta}
                    </span>
                  </div>

                  {/* icon */}
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div
                      style={{
                        width: 88, height: 88, borderRadius: 18,
                        background: v.iconBg,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}
                    >
                      <Image
                        src={svc.src} alt={svc.title}
                        width={svc.w} height={svc.h}
                        className="max-w-[52px] max-h-[52px] object-contain"
                      />
                    </div>
                  </div>

                  {/* title */}
                  <div style={{ position: 'relative' }}>
                    <h3
                      className="font-bold leading-tight"
                      style={{ color: v.textColor, fontSize: 'clamp(15px, 1.7vw, 23px)', letterSpacing: '-0.01em' }}
                    >
                      {svc.title}
                    </h3>
                    <span
                      className="font-mono mt-1.5 block"
                      style={{ fontSize: 9, letterSpacing: '0.10em', color: v.metaColor }}
                    >
                      ↗ nativecloud.service
                    </span>
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
