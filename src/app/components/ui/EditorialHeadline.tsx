'use client';

import { Instrument_Serif } from 'next/font/google';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

/*
 * Editorial headline — one keyword in italic serif inside a soft, slightly
 * organic pill, with the rest of the headline set in oversized serif below it.
 *
 *   <EditorialHeadline
 *     highlightText="Intelligence"
 *     headlineLines={['at every layer', 'of your business']}
 *   />
 *
 * Colours are the site's own: the pill is the hero fog periwinkle (#BECBFF),
 * shifting to the light-blue hover surface (#CCE4FF); the text is the
 * near-black used by the editorial headlines (#141414). Nothing new is added
 * and the global theme is untouched.
 */

// Instrument Serif — upright for the headline, italic for the highlighted word.
const serif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

/* Eight slightly different radii. They are all larger than half the pill's
   height, so the browser scales them down together and the shape reads as a
   capsule whose curves are a little uneven — organic, not geometric. */
const ORGANIC_RADIUS = '0.66em 0.78em 0.6em 0.72em / 0.74em 0.62em 0.76em 0.64em';

const EASE = [0.16, 1, 0.3, 1] as const;

const CONTAINER: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const LINE: Variants = {
  hidden: { opacity: 0, y: '0.3em' },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export type EditorialHeadlineProps = {
  /** The keyword shown inside the pill, on its own first line. */
  highlightText: string;
  /** The rest of the headline, one entry per line. */
  headlineLines: string[];
  className?: string;
  alignment?: 'left' | 'center';
  /** Heading level. Defaults to h2. */
  as?: 'h1' | 'h2' | 'h3';
};

export default function EditorialHeadline({
  highlightText,
  headlineLines,
  className = '',
  alignment = 'left',
  as = 'h2',
}: EditorialHeadlineProps) {
  const reduce = useReducedMotion();
  const Heading = motion[as];
  const sentence = `${highlightText} ${headlineLines.join(' ')}`;

  return (
    <Heading
      aria-label={sentence}
      className={`${serif.className} m-0 font-normal text-[#141414] ${alignment === 'center' ? 'text-center' : 'text-left'} ${className}`}
      style={{
        fontSize: 'clamp(2.75rem, 9vw, 9rem)',
        lineHeight: 1,
        letterSpacing: '-0.02em',
      }}
      variants={CONTAINER}
      initial={reduce ? false : 'hidden'}
      whileInView={reduce ? undefined : 'show'}
      viewport={{ once: true, margin: '-80px' }}
    >
      {/* Highlighted keyword */}
      <motion.span aria-hidden="true" className="block" variants={LINE}>
        <span
          className="inline-block bg-[#BECBFF] italic transition-[transform,background-color] duration-500 ease-out hover:scale-[1.02] hover:bg-[#CCE4FF] motion-reduce:transition-none motion-reduce:hover:scale-100"
          style={{
            borderRadius: ORGANIC_RADIUS,
            padding: '0.04em 0.36em 0.16em 0.3em',
            letterSpacing: '-0.025em',
            transformOrigin: alignment === 'center' ? 'center' : 'left center',
          }}
        >
          {highlightText}
        </span>
      </motion.span>

      {/* Remaining headline */}
      {headlineLines.map((line, i) => (
        <motion.span
          key={line}
          aria-hidden="true"
          className="block"
          style={{ marginTop: i === 0 ? '0.1em' : '0.02em' }}
          variants={LINE}
        >
          {line}
        </motion.span>
      ))}
    </Heading>
  );
}
