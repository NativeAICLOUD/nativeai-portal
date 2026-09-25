'use client';

import { motion } from 'framer-motion';
import { Constants } from '@/Constants';
import { EditorialGlow, SerifAccent } from '@/app/components/ui/EditorialGlow';
import { CONTAINER, Eyebrow, PrimaryButton, SecondaryButton } from './HomeUI';

/* Industries intro — minimal editorial hero with a soft cyan glow
   rising from the upper-right (same treatment as /airline-booking). */
export default function IndustriesIntroSection() {
  return (
    <section
      aria-labelledby="industries-intro-heading"
      className="font-switzer relative isolate overflow-hidden bg-white"
    >
      <EditorialGlow />

      <div
        className={`${CONTAINER} flex min-h-[78svh] flex-col justify-center pb-[10vh] pt-[22vh] md:min-h-[90vh] md:pt-[26vh] lg:px-20`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <div className="mb-8"><Eyebrow>Industries · Sector expertise</Eyebrow></div>
          <h2
            id="industries-intro-heading"
            className="m-0 max-w-[1100px] text-[44px] font-light leading-[1.02] tracking-[-0.035em] text-[#141414] sm:text-[64px] md:text-[80px] lg:text-[96px] xl:text-[108px]"
          >
            Move your <SerifAccent>business</SerifAccent>
            <br />
            forward.
          </h2>
          <div className="mt-10 flex flex-wrap gap-3 md:mt-12">
            <PrimaryButton href="/industries">Explore our industries</PrimaryButton>
            <SecondaryButton href={Constants.PAGES.SCHEDULE_CALL}>Book a discovery call</SecondaryButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
