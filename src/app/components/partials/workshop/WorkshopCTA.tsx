'use client';

import { motion } from 'framer-motion';
import { CONTAINER, PrimaryButton, SecondaryButton } from '@/app/components/partials/services/ServiceUI';

export default function WorkshopCTA() {
  return (
    <motion.section
      className="mb-8 rounded-b-[32px] sm:mb-10 sm:rounded-b-[48px] lg:mb-14 lg:rounded-b-[80px]"
      style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #EAF2FF 55%, #DBEAFE 100%)' }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-60px' }}
    >
      <div className={`${CONTAINER} flex flex-col gap-10 py-20 md:flex-row md:items-center md:justify-between`}>
        <div className="flex max-w-xl flex-col gap-4">
          <h2 className="m-0 text-[28px] font-medium leading-[1.1] text-[#0a0e1a] md:text-[44px]">
            Bring the workshop to your team.
          </h2>
          <p className="m-0 text-[18px] font-light leading-[1.6] text-[#0a0e1a]/70">
            We tailor the session around your technology, challenges, and goals — then run it
            live with your engineers.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <PrimaryButton href="/schedule-call">Book a private workshop</PrimaryButton>
          <SecondaryButton href="/solutions">Explore all solutions</SecondaryButton>
        </div>
      </div>
    </motion.section>
  );
}
