'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

/*
 * Google-style "AI Overview" block: animated gradient frame, shimmer
 * "thinking" state, then a typewriter-streamed answer with source chips.
 * The answer is composed from the matching Knowledge Base articles
 * (extractive retrieval) — swap `composeAnswer` for an LLM API call later.
 */

const GRADIENT = 'linear-gradient(100deg, #4285f4 0%, #9b72cb 45%, #e89a78 100%)';

function firstSentence(text: string, max = 160): string {
  const dot = text.indexOf('. ');
  let s = dot > 30 ? text.slice(0, dot + 1) : text;
  if (s.length > max) s = s.slice(0, max).replace(/\s+\S*$/, '') + '…';
  return s.trim();
}

function composeAnswer(query: string, hits: IPost[]): string {
  const top = hits.slice(0, 3);
  const intro = `Here's a quick overview of “${query}” based on ${top.length === 1 ? 'an article' : `${top.length} articles`} from the NativeCloud Knowledge Base. `;
  return intro + top.map(p => firstSentence(p.desc)).join(' ');
}

export default function AiOverview({ query, results }: { query: string; results: IPost[] }) {
  const [phase, setPhase] = useState<'thinking' | 'typing' | 'done'>('thinking');
  const [shown, setShown] = useState('');
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const answer = results.length > 0 ? composeAnswer(query, results) : '';
  const sources = results.slice(0, 3);

  useEffect(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    if (!answer) return;

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      setShown(answer);
      setPhase('done');
      return;
    }

    setPhase('thinking');
    setShown('');

    timers.current.push(setTimeout(() => {
      setPhase('typing');
      let i = 0;
      const tick = () => {
        i = Math.min(i + 3, answer.length);
        setShown(answer.slice(0, i));
        if (i < answer.length) {
          timers.current.push(setTimeout(tick, 14));
        } else {
          setPhase('done');
        }
      };
      tick();
    }, 1100));

    return () => timers.current.forEach(clearTimeout);
  }, [answer]);

  if (!answer) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="mb-10"
    >
      {/* animated gradient frame */}
      <div
        className="ai-ov-frame rounded-2xl"
        style={{ padding: 1.5, background: GRADIENT, backgroundSize: '250% 250%' }}
      >
        <div className="rounded-[14.5px] bg-white px-5 sm:px-7 py-5 sm:py-6 relative overflow-hidden">
          {/* soft ambient glow */}
          <div
            className="absolute -top-20 -right-16 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(155,114,203,0.10) 0%, transparent 70%)' }}
          />

          {/* header */}
          <div className="flex items-center gap-2.5 mb-4 relative">
            <span className={phase === 'done' ? '' : 'ai-ov-spin'} style={{ display: 'inline-flex' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
                <defs>
                  <linearGradient id="ai-ov-star" x1="0" y1="0" x2="24" y2="24">
                    <stop offset="0%" stopColor="#4285f4" />
                    <stop offset="55%" stopColor="#9b72cb" />
                    <stop offset="100%" stopColor="#e89a78" />
                  </linearGradient>
                </defs>
                <path
                  d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z"
                  fill="url(#ai-ov-star)"
                />
              </svg>
            </span>
            <span
              className="text-[14px] font-bold"
              style={{
                background: GRADIENT,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}
            >
              AI Overview
            </span>
          </div>

          {/* thinking shimmer */}
          {phase === 'thinking' && (
            <div className="flex flex-col gap-2.5 relative" aria-label="Generating overview">
              {[100, 92, 64].map((w, i) => (
                <div
                  key={i}
                  className="ai-ov-shimmer h-[13px] rounded-full"
                  style={{ width: `${w}%`, animationDelay: `${i * 0.12}s` }}
                />
              ))}
            </div>
          )}

          {/* streamed answer */}
          {phase !== 'thinking' && (
            <p className="text-[14.5px] leading-relaxed text-[#333] relative">
              {shown}
              {phase === 'typing' && <span className="ai-ov-caret" aria-hidden />}
            </p>
          )}

          {/* sources */}
          <AnimatePresence>
            {phase === 'done' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="flex flex-wrap gap-2 mt-4">
                  {sources.map(post => (
                    <Link
                      key={post.id}
                      href={`/knowledge-base/${post.id}`}
                      className="inline-flex items-center gap-1.5 max-w-[260px] text-[12px] font-medium text-[#444] px-3 py-1.5 rounded-full border border-black/[0.08] bg-[#f8f9fb] hover:border-[#9b72cb]/40 hover:bg-[#f3f0fa] transition-colors"
                    >
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9b72cb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                        <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                      <span className="truncate">{post.title}</span>
                    </Link>
                  ))}
                </div>
                <p className="text-[11px] text-[#999] mt-3">
                  Generated from the NativeCloud Knowledge Base — AI answers may not cover everything.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        .ai-ov-frame {
          animation: ai-ov-border 6s ease infinite;
          box-shadow: 0 6px 32px rgba(66,133,244,0.10), 0 2px 12px rgba(155,114,203,0.08);
        }
        @keyframes ai-ov-border {
          0%, 100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        .ai-ov-spin {
          animation: ai-ov-pulse 1.6s ease-in-out infinite;
        }
        @keyframes ai-ov-pulse {
          0%, 100% { transform: scale(1) rotate(0deg);   opacity: 1; }
          50%      { transform: scale(0.82) rotate(90deg); opacity: 0.75; }
        }
        .ai-ov-shimmer {
          background: linear-gradient(90deg, #eef1f6 25%, #e3e9f5 37%, #eef1f6 63%);
          background-size: 400% 100%;
          animation: ai-ov-wave 1.3s ease infinite;
        }
        @keyframes ai-ov-wave {
          from { background-position: 100% 50%; }
          to   { background-position: 0% 50%; }
        }
        .ai-ov-caret {
          display: inline-block;
          width: 8px;
          height: 15px;
          margin-left: 2px;
          vertical-align: -2px;
          border-radius: 2px;
          background: ${GRADIENT};
          animation: ai-ov-blink 0.9s step-end infinite;
        }
        @keyframes ai-ov-blink {
          50% { opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ai-ov-frame, .ai-ov-spin, .ai-ov-shimmer, .ai-ov-caret { animation: none; }
        }
      `}</style>
    </motion.div>
  );
}
