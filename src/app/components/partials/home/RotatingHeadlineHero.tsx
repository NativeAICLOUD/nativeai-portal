'use client';

import { useEffect, useState } from 'react';
import { Manrope } from 'next/font/google';

// Manrope is scoped to this hero only (applied via className) so it
// doesn't override the app-wide Montserrat font.
const manrope = Manrope({
  weight: ['400', '500', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
});

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
    <section className={`${manrope.className} rhh-hero`} aria-label="Intro">
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
          background: #060606;
          color: #fff;
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
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.04;
          font-size: clamp(2.8rem, 9vw, 7rem);
          margin: 0;
        }
        .rhh-rotating {
          display: inline-block;
          /* room for descenders (g, p, y) so background-clip:text doesn't cut them */
          line-height: 1.2;
          padding-bottom: 0.12em;
          /* Metallic gradient text, animated shimmer */
          background: linear-gradient(
            100deg,
            #8a7b6b 0%,
            #cfc4ba 18%,
            #ffffff 38%,
            #b9c3c9 58%,
            #7d8b96 78%,
            #d8cfc6 100%
          );
          background-size: 250% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          /* fade + un-blur in, then a continuous shimmer */
          animation:
            rhh-reveal 0.7s cubic-bezier(0.16, 1, 0.3, 1) both,
            rhh-shimmer 6s linear infinite;
        }
        .rhh-fixed {
          display: inline-block;
          /* room for descenders (g, p, y) so background-clip:text doesn't cut them */
          line-height: 1.2;
          padding-bottom: 0.12em;
          /* Static silver gradient */
          background: linear-gradient(100deg, #9a9a9a, #ffffff 45%, #8f9aa3 90%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          animation: rhh-reveal 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .rhh-tagline {
          margin: 28px 0 0;
          font-weight: 500;
          color: #cfcfcf;
          font-size: clamp(1rem, 2.4vw, 1.6rem);
          letter-spacing: 0.01em;
        }
        .rhh-accent {
          color: #9fb4c9;
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
