'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

/*
 * One word at a time in a small periwinkle pill (same organic shape as the
 * editorial headline pill), set in the site's sans, uppercase. The word slides
 * up and out as the next slides in; the pill resizes to fit.
 *
 *   <CyclingWordPill words={['AI', 'Cloud', 'Web', 'Agentic']} />
 */
export default function CyclingWordPill({
  words,
  interval = 1000,
  className = '',
}: {
  words: string[];
  /** ms between words */
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <p aria-label={words.join(', ')} className={`m-0 flex ${className}`}>
      <motion.span
        layout={!reduce}
        aria-hidden="true"
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex overflow-hidden bg-[#BECBFF] font-switzer text-[13px] font-semibold uppercase leading-none text-[#141414]"
        style={{
          padding: '0.6em 1em',
          letterSpacing: '0.14em',
          borderRadius: '0.66em 0.78em 0.6em 0.72em / 0.74em 0.62em 0.76em 0.64em',
        }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={index}
            layout={reduce ? false : 'position'}
            initial={reduce ? false : { y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { y: -16, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </p>
  );
}
