'use client';

import { motion } from 'framer-motion';
import { Constants } from '@/Constants';
import { CONTAINER, Eyebrow, PrimaryButton, SecondaryButton, SECTION_Y } from './HomeUI';

/* Same design as the /nearshore-teams hero, embedded as a homepage section */
export default function NearshoreIntroSection() {
  return (
    <section className="font-switzer">
      <div
        style={{
          background:
            'radial-gradient(circle at 15% 100%, rgba(224,225,255,0.75), transparent 43%), ' +
            '#ffffff',
        }}
      >
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">

            {/* Left */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-60px' }}
            >
              <div className="mb-6"><Eyebrow>Nearshore Teams · Senior-led delivery</Eyebrow></div>
              <h2 className="m-0 max-w-[560px] text-[36px] font-medium leading-[1.05] tracking-[-0.02em] text-[#111] sm:text-[46px] lg:text-[56px]">
                Dedicated nearshore teams.
              </h2>
              <p className="mt-6 max-w-[540px] text-[18px] font-light leading-[1.6] text-[#111]">
                Let us help you establish a dedicated team of highly skilled profiles!
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton href={Constants.PAGES.GET_IN_TOUCH}>Let&apos;s talk</PrimaryButton>
                <SecondaryButton href={Constants.PAGES.NEARSHORE_TEAMS}>Explore nearshore teams</SecondaryButton>
              </div>
            </motion.div>

          </div>
        </div>

        <hr className="m-0 h-px w-full border-0 bg-[#E6E6E6]" />
      </div>
    </section>
  );
}
