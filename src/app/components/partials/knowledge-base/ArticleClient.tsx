'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import RelatedArticles from '../RelatedArticles';
import { AnimatePresence, motion } from 'framer-motion';

type Section = { id: string; heading: string; content?: string; blocks?: ContentBlock[] };

interface Props {
  post: IPost;
  sections: Section[];
  related: IPost[];
  readingTime: number;
  publishDate: string;
  category: string;
}

export default function ArticleClient({ post, sections, related, readingTime, publishDate, category }: Props) {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? '');
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min(100, (window.scrollY / total) * 100) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(s.id); },
        { rootMargin: '-15% 0px -70% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ── Header ── */}
      <div
        className="relative overflow-hidden pt-28 pb-14"
        style={{
          background:
            'radial-gradient(circle at 15% 100%, rgba(190,203,255,0.5), transparent 48%), #ffffff',
        }}
      >

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-[12px] text-[#0a0e1a]/40 mb-8">
            <Link href="/" className="hover:text-[#1d4ed8] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/knowledge-base" className="hover:text-[#1d4ed8] transition-colors">Knowledge base</Link>
            <span>/</span>
            <span className="text-[#0a0e1a]/60 truncate max-w-[200px]">{post.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16">
            {/* Title + tags */}
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap mb-5">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest" style={{ background: 'rgba(0,0,0,0.07)', color: 'rgba(10,14,26,0.5)' }}>Blog</span>
                <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest" style={{ background: 'rgba(37,99,235,0.10)', color: '#1d4ed8', border: '1px solid rgba(37,99,235,0.25)' }}>{category}</span>
              </div>
              <h1 className="text-[2.2rem] sm:text-[2.8rem] lg:text-[3rem] font-extrabold leading-[1.1] tracking-tight text-[#0a0e1a] mb-6">{post.title}</h1>
              <p className="text-[15px] text-[#0a0e1a]/55 leading-relaxed max-w-2xl italic">
                {(() => {
                  const s = sections[0] as any;
                  const text = s?.content ?? (s?.blocks?.find((b: ContentBlock) => b.type === 'paragraph') as { type: 'paragraph'; text: string } | undefined)?.text ?? '';
                  return text.split('. ')[0] + '.';
                })()}
              </p>
            </div>

            {/* Author card */}
            <div className="lg:shrink-0 lg:w-[240px]">
              <div className="rounded-2xl p-5 flex flex-col gap-3" style={{ background: 'rgba(255,255,255,0.72)', border: '1px solid rgba(255,255,255,0.90)', backdropFilter: 'blur(20px)', boxShadow: '0 4px 24px rgba(37,99,235,0.12)' }}>
                <p className="text-[10px] font-bold uppercase tracking-[0.12em]" style={{ color: '#2563EB' }}>Author</p>
                <div className="flex items-center gap-3">
                  <Image src="/img/Artan.png" alt="Artan Ajredini" width={64} height={64} className="w-16 h-16 rounded-full object-cover shrink-0" style={{ border: '1.5px solid rgba(37,99,235,0.35)' }} />
                  <div>
                    <p className="text-[13px] font-bold text-[#0a0e1a]">Artan Ajredini</p>
                    <p className="text-[11px] text-[#0a0e1a]/45 mt-0.5">Founder/CEO AI Architect</p>
                  </div>
                </div>
                <div className="border-t border-black/[0.07] pt-3 flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-[11px] text-[#0a0e1a]/45">
                    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                    {readingTime} min read
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-[#0a0e1a]/45">
                    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                    {publishDate}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reading progress bar */}
          <div className="mt-10 h-1 rounded-full overflow-hidden" style={{ background: 'rgba(0,0,0,0.07)' }}>
            <div className="h-full rounded-full transition-all duration-150" style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #3b82f6, #2563EB)' }} />
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-12">

        {/* Mobile TOC */}
        <div className="lg:hidden mb-8">
          <button
            onClick={() => setMobileTocOpen(o => !o)}
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl transition-colors"
            style={{ background: '#F7F7F7' }}
          >
            <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#0a0e1a]/40">Contents</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: mobileTocOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
          <AnimatePresence initial={false}>
            {mobileTocOpen && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22, ease: 'easeInOut' }} className="overflow-hidden">
                <nav className="flex flex-col gap-1 px-4 py-3" style={{ background: '#F7F7F7', borderTop: '1px solid rgba(0,0,0,0.05)', borderRadius: '0 0 12px 12px' }}>
                  {sections.map((s) => (
                    <button key={s.id} onClick={() => { scrollTo(s.id); setMobileTocOpen(false); }} className="text-left text-[13px] py-1.5 px-2 rounded-lg transition-all" style={activeSection === s.id ? { color: '#1d4ed8', fontWeight: 700 } : { color: '#0a0e1a', opacity: 0.5 }}>
                      {s.heading}
                    </button>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex gap-12 lg:gap-14 items-start">

          {/* Desktop sticky TOC */}
          <aside className="hidden lg:block w-[210px] shrink-0 sticky top-24 self-start">
            <div className="rounded-2xl p-5" style={{ background: '#F7F7F7' }}>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#0a0e1a]/40 mb-4">Content</p>
              <nav className="flex flex-col gap-0.5">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className="text-left text-[12.5px] leading-snug py-1.5 px-2.5 rounded-lg transition-all duration-150"
                    style={activeSection === s.id ? { color: '#1d4ed8', fontWeight: 700, background: 'rgba(37,99,235,0.08)' } : { color: '#0a0e1a', opacity: 0.45 }}
                  >
                    {s.heading}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Article */}
          <article className="flex-1 min-w-0 max-w-[720px]">
            {sections.map((s, idx) => (
              <div key={s.id} id={s.id} className="mb-14">
                <h2 className="text-[1.4rem] sm:text-[1.6rem] font-extrabold leading-snug mb-6" style={{ color: '#1d4ed8' }}>
                  {s.heading}
                </h2>

                {'blocks' in s ? (
                  /* Rich content */
                  <div className="flex flex-col gap-5">
                    {(s as RichSection).blocks.map((block, bi) => {
                      if (block.type === 'paragraph') return (
                        <p key={bi} className="text-[15.5px] text-[#3a3a3a] leading-[1.85]">{block.text}</p>
                      );
                      if (block.type === 'heading3') return (
                        <h3 key={bi} className="text-[1.05rem] font-bold text-[#0a0e1a] mt-3">{block.text}</h3>
                      );
                      if (block.type === 'quote') return (
                        <div key={bi} className="my-10">
                          {block.illustration ? (
                            /* Intercept-style: illustration left + decorative line + quote text */
                            <div className="flex flex-col gap-4">
                              {/* Top row: image + horizontal line + dot */}
                              <div className="flex items-center gap-4">
                                <div className="shrink-0 w-[100px] h-[72px] rounded-xl overflow-hidden" style={{ background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.16)' }}>
                                  <Image src={block.illustration} alt="" width={100} height={72} className="w-full h-full object-contain p-2" />
                                </div>
                                {/* Decorative line + circle */}
                                <div className="flex-1 flex items-center gap-0">
                                  <div className="flex-1 h-px" style={{ background: '#E0E0E0' }} />
                                  <div className="w-2 h-2 rounded-full shrink-0" style={{ background: '#2563EB' }} />
                                </div>
                              </div>
                              {/* Quote text below, indented to align with illustration */}
                              <div className="pl-[116px]">
                                <p className="text-[16px] italic leading-relaxed" style={{ color: '#666' }}>&ldquo;{block.text}&rdquo;</p>
                                {block.author && <cite className="block mt-2 text-[12px] not-italic" style={{ color: '#aaa' }}>— {block.author}</cite>}
                              </div>
                            </div>
                          ) : (
                            /* Simple quote without illustration */
                            <blockquote className="pl-5 border-l-4 border-[#2563EB]">
                              <p className="text-[16px] italic leading-relaxed" style={{ color: '#666' }}>&ldquo;{block.text}&rdquo;</p>
                              {block.author && (
                                <cite className="flex items-center gap-2.5 mt-3 not-italic">
                                  {block.authorPhoto && (
                                    <Image
                                      src={block.authorPhoto}
                                      alt={block.author}
                                      width={32}
                                      height={32}
                                      className="rounded-full object-cover shrink-0"
                                      style={{ border: '1.5px solid rgba(37,99,235,0.35)' }}
                                    />
                                  )}
                                  <span className="text-[12px]" style={{ color: '#aaa' }}>— {block.author}</span>
                                </cite>
                              )}
                            </blockquote>
                          )}
                        </div>
                      );
                      if (block.type === 'list') return (
                        block.ordered
                          ? <ol key={bi} className="list-decimal list-inside flex flex-col gap-2 pl-2">{block.items.map((item, ii) => <li key={ii} className="text-[15px] text-[#3a3a3a] leading-relaxed">{item}</li>)}</ol>
                          : <ul key={bi} className="flex flex-col gap-2 pl-2">{block.items.map((item, ii) => <li key={ii} className="flex gap-2.5 text-[15px] text-[#3a3a3a] leading-relaxed"><span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#2563EB' }} />{item}</li>)}</ul>
                      );
                      if (block.type === 'image') return block.size === 'small' ? (
                        <div key={bi} className="my-2">
                          <Image src={block.src} alt={block.alt ?? ''} width={480} height={200} className="h-48 w-auto object-contain" />
                        </div>
                      ) : (
                        <div key={bi} className="rounded-2xl overflow-hidden my-2">
                          <Image src={block.src} alt={block.alt ?? ''} width={800} height={450} className="w-full h-auto object-cover" />
                        </div>
                      );
                      if (block.type === 'code') return (
                        <div key={bi} className="rounded-xl overflow-hidden">
                          <div className="flex items-center justify-between px-4 py-2" style={{ background: '#1e1e2e' }}>
                            <span className="text-[11px] font-mono text-white/40 uppercase tracking-widest">{block.language}</span>
                          </div>
                          <pre className="overflow-x-auto p-5 text-[13px] leading-relaxed font-mono text-[#cdd6f4]" style={{ background: '#181825' }}>
                            <code>{block.code}</code>
                          </pre>
                        </div>
                      );
                      if (block.type === 'cta') return (
                        <div key={bi} className="rounded-2xl px-6 py-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4" style={{ background: '#0a0e1a' }}>
                          <div>
                            <p className="text-white font-semibold text-base mb-1">{block.title}</p>
                            <p className="text-white/45 text-sm">{block.desc}</p>
                          </div>
                          <Link href={block.buttonUrl} className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90 whitespace-nowrap" style={{ background: '#2563EB' }}>
                            {block.buttonText}
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                          </Link>
                        </div>
                      );
                      return null;
                    })}
                  </div>
                ) : (
                  /* Plain text fallback */
                  <>
                    <p className="text-[15.5px] text-[#3a3a3a] leading-[1.85]">{(s as any).content}</p>
                    {idx === 1 && (
                      <div className="mt-10 rounded-2xl px-6 py-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4" style={{ background: '#0a0e1a' }}>
                        <div>
                          <p className="text-white font-semibold text-base mb-1">Want to implement this for your business?</p>
                          <p className="text-white/45 text-sm">Book a free call and we will walk you through it.</p>
                        </div>
                        <Link href="/schedule-call" className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90 whitespace-nowrap" style={{ background: '#2563EB' }}>
                          Schedule a call
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </Link>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </article>
        </div>
      </div>

      {/* ── Related ── */}
      <div className="border-t border-[#f0ede8] pt-16 pb-24 px-5 sm:px-8 max-w-7xl mx-auto">
        <RelatedArticles posts={related} />
      </div>
    </div>
  );
}
