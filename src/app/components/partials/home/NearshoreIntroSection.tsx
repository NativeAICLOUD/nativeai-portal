'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Constants } from '@/Constants';
import { CONTAINER, Eyebrow, PrimaryButton, SecondaryButton, SECTION_Y } from './HomeUI';

const aiTags = ['GPT-4o', 'RAG', 'Azure OpenAI', 'AI Agents', 'Fine-tuning'];

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
                Senior-led teams embedded directly in your product organisation — covering the full
                delivery spectrum, from hands-on engineering to cloud infrastructure, AI development,
                and technical leadership.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton href={Constants.PAGES.SCHEDULE_CALL}>Book a discovery call</PrimaryButton>
                <SecondaryButton href={Constants.PAGES.NEARSHORE_TEAMS}>Explore nearshore teams</SecondaryButton>
              </div>
            </motion.div>

            {/* Right — Generative AI card */}
            <div className="w-full lg:max-w-[380px] lg:flex-1">
              <div className="flex flex-col gap-5 rounded-2xl border border-[#E6E6E6] bg-white p-6">
                <div className="flex items-center justify-between">
                  <Eyebrow>Generative AI</Eyebrow>
                  <Sparkles className="h-5 w-5 text-[#111]" strokeWidth={1.6} aria-hidden="true" />
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {aiTags.map((tag) => (
                    <span key={tag} className="rounded-md border border-[#E6E6E6] bg-[#fafafa] px-2.5 py-1 text-[11px] font-medium text-[#111]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        <hr className="m-0 h-px w-full border-0 bg-[#E6E6E6]" />
      </div>
    </section>
  );
}
