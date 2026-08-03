'use client';

import { useEffect, useState } from 'react';

// ── Edit these lists to change the rotating words ──
const WORDS = ['Cloud', 'AI', 'Azure', 'DevOps', 'Software', 'Data', 'Consulting'];
const SUFFIXES = ['Experts.', 'Engineers.', 'Solutions.'];
const INTERVAL = 2200; // ms between word changes

export default function RotatingHeadlineHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="rhh-hero" aria-label="Intro">
      <div className="rhh-inner">
        <h1 className="rhh-headline">
          {/* key={index} remounts the span each change → replays fade + un-blur */}
          <span key={`w-${index}`} className="rhh-rotating">
            {WORDS[index]}
          </span>{' '}
          <span key={`s-${index}`} className="rhh-fixed">
            {SUFFIXES[index % SUFFIXES.length]}
          </span>
        </h1>

        <p className="rhh-tagline">
          Innovate Anywhere with <span className="rhh-accent">AI</span>
        </p>
      </div>

      <style>{`
        .rhh-hero {
          background:
            radial-gradient(circle at 15% 100%, rgba(224,225,255,0.75), transparent 43%),
            radial-gradient(circle at 80% 100%, rgba(255,237,189,0.70), transparent 48%),
            radial-gradient(circle at 100% 70%, rgba(255,225,215,0.60), transparent 43%),
            #ffffff;
          color: #111;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 96px 24px;
          text-align: center;
          overflow: hidden;
        }
        .rhh-inner {
          max-width: 1100px;
          width: 100%;
        }
        .rhh-headline {
          font-weight: 600;
          letter-spacing: -0.02em;
          line-height: 1.04;
          font-size: clamp(2.8rem, 9vw, 7rem);
          margin: 0;
          color: #111;
        }
        .rhh-rotating {
          display: inline-block;
          line-height: 1.2;
          padding-bottom: 0.12em;
          color: #111;
          animation: rhh-reveal 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .rhh-fixed {
          display: inline-block;
          line-height: 1.2;
          padding-bottom: 0.12em;
          color: rgba(17,17,17,0.4);
          animation: rhh-reveal 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .rhh-tagline {
          margin: 28px 0 0;
          font-weight: 300;
          color: #6b7280;
          font-size: clamp(1rem, 2.4vw, 1.6rem);
          letter-spacing: 0.01em;
        }
        .rhh-accent {
          color: #111;
        }
        @keyframes rhh-reveal {
          from { opacity: 0; filter: blur(16px); }
          to   { opacity: 1; filter: blur(0); }
        }
        @keyframes rhh-shimmer {
          to { background-position: 250% 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .rhh-rotating {
            animation: none;
            background-position: 50% center;
          }
        }
      `}</style>
    </section>
  );
}
