"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MONO: React.CSSProperties = { fontFamily: "'JetBrains Mono', monospace" };

function RAGChatDemo() {
  const ANSWER = "Customers have 30 days for full refunds. After day 14, partial refunds apply — per §4.2.";
  const [phase, setPhase] = useState<0 | 1 | 2 | 3>(0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (phase === 0)      t = setTimeout(() => setPhase(1), 1000);
    else if (phase === 1) t = setTimeout(() => setPhase(2), 1300);
    else if (phase === 2) {
      if (chars < ANSWER.length) t = setTimeout(() => setChars(c => c + 1), 22);
      else                       t = setTimeout(() => setPhase(3), 2400);
    } else t = setTimeout(() => { setPhase(0); setChars(0); }, 600);
    return () => clearTimeout(t);
  }, [phase, chars]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div style={{ ...MONO, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }} className="rounded-xl p-4 mb-4">
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/[0.07]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#9aa3af] animate-pulse" />
        <span className="text-[10px] text-white/30 uppercase tracking-widest">RAG · policy_2024.pdf</span>
      </div>
      <div className="flex justify-end mb-2">
        <span className="bg-[#9aa3af]/15 border border-[#9aa3af]/20 text-white/75 px-2.5 py-1 rounded-lg rounded-tr-none text-[11px]">
          What&apos;s our refund policy?
        </span>
      </div>
      <div className="flex gap-2">
        <span className="w-4 h-4 rounded-full bg-[#9aa3af]/20 border border-[#9aa3af]/30 flex items-center justify-center shrink-0 mt-0.5 font-bold" style={{ fontSize: 7, color: '#cfd5dc' }}>AI</span>
        <div className="text-white/60 text-[11px] leading-relaxed flex-1 min-h-[36px]">
          {phase === 0 && <span className="text-white/20">…</span>}
          {phase === 1 && (
            <span className="flex gap-1 items-center h-4">
              {[0, 150, 300].map(d => (
                <span key={d} className="w-1.5 h-1.5 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: `${d}ms` }} />
              ))}
            </span>
          )}
          {(phase === 2 || phase === 3) && (
            <>
              {ANSWER.slice(0, chars)}
              {chars < ANSWER.length && <span className="opacity-60 animate-pulse">▌</span>}
              {chars >= ANSWER.length && <span className="block mt-1 text-[9px] text-[#9aa3af]/55">↳ policy_2024.pdf §4.2</span>}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const services = [
  { w: 93, h: 68, src: '/img/Cloud.png', title: 'Cloud Solutions & Services' },
  { w: 95, h: 90, src: '/img/Layer_1.png', title: 'Platform Development' },
  { w: 89, h: 81, src: '/img/Layer_2.png', title: 'SaaS app development' },
  { w: 89, h: 67, src: '/img/Layer_3.png', title: 'End-to-end business solutions' },
  { w: 77, h: 77, src: '/img/Layer_4.png', title: 'App modernization' },
  { w: 88, h: 89, src: '/img/Layer_5.png', title: 'Enterprise application development' },
  { w: 101, h: 79, src: '/img/Layer_6.png', title: 'Digital transformation services' },
  { w: 77, h: 74, src: '/img/DevOps.png', title: 'Cloud & DevOps' },
  { w: 90, h: 90, src: '/img/Layer_8.png', title: 'UI/UX design' },
  { w: 140, h: 112, src: '/img/Layer_9.png', title: 'Cloud Migrations' }
];

const pillars = [
  {
    // Bot / autonomous agent
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="url(#cslSilver)" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M12 8V4H8" />
        <path d="M2 14h2M20 14h2M15 13v2M9 13v2" />
      </svg>
    ),
    title: 'Custom AI Agents',
  },
  {
    // Brain / LLM
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="url(#cslSilver)" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
        <path d="M12 5a3 3 0 1 1 5.997.142 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
        <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      </svg>
    ),
    title: 'LLM Integration & RAG',
  },
  {
    // Workflow / automation pipeline
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="url(#cslSilver)" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <rect width="8" height="8" x="3" y="3" rx="2" />
        <path d="M7 11v4a2 2 0 0 0 2 2h4" />
        <rect width="8" height="8" x="13" y="13" rx="2" />
      </svg>
    ),
    title: 'AI Workflow Automation',
  },
];

const CloudServicesSection = () => {
  return (
    <section className="-mt-38 bg-white">
      {/* Dark AI pillars block — full-bleed */}
      <div className="relative w-full bg-[#0a0e1a] text-white pt-14 sm:pt-24 px-8 sm:px-16 pb-10 sm:pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_70%,_rgba(154,163,175,0.10)_0%,_transparent_55%)]" />


        <motion.h2
          className="relative text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold !leading-[1.1] max-w-4xl mb-2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true, margin: '-60px' }}
        >
          We implement{' '}
          <span className="csl-shimmer-text">AI Agents &amp; LLMs</span>{' '}
          inside your business.
        </motion.h2>

        <style>{`
          .csl-shimmer-text {
            /* Static silver gradient (no animation) */
            background: linear-gradient(100deg, #9a9a9a, #ffffff 45%, #8f9aa3 90%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
          }
        `}</style>

        {/* Shared silver metallic gradient for the pillar icons */}
        <svg width="0" height="0" className="absolute" aria-hidden="true">
          <defs>
            <linearGradient id="cslSilver" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#eef2f7" />
              <stop offset="50%" stopColor="#9aa3af" />
              <stop offset="100%" stopColor="#646b76" />
            </linearGradient>
          </defs>
        </svg>

        <div className="relative text-sm sm:text-base grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mt-12 sm:mt-16">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 + i * 0.12 }}
              viewport={{ once: true, margin: '-40px' }}
              className="flex flex-col gap-4 border border-white/10 hover:border-white/25 rounded-2xl p-7 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-200 group"
            >
              {i === 1 ? (
                <RAGChatDemo />
              ) : (
                <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/15 flex items-center justify-center group-hover:bg-white/[0.09] group-hover:border-white/25 transition-colors">
                  {pillar.icon}
                </div>
              )}
              <h3 className="text-base sm:text-lg font-semibold">{pillar.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default CloudServicesSection;
