'use client';

import { motion } from 'framer-motion';
import { Compass, Plug, FolderInput, TrendingUp, type LucideIcon } from 'lucide-react';

const steps: { num: string; title: string; desc: string; icon: LucideIcon; color: string; bg: string }[] = [
  { num: '01', title: 'Set up your firm', desc: 'Practice areas, team members, roles and billing rules.', icon: Compass, color: '#A16207', bg: '#FBF7E8' },
  { num: '02', title: 'Connect Microsoft 365', desc: 'Sign-in, mailboxes and calendars — so the Mail Agent starts filing.', icon: Plug, color: '#FF4F8B', bg: '#FFF0F5' },
  { num: '03', title: 'Bring your cases', desc: 'Import clients, open matters and files. Document AI links them up.', icon: FolderInput, color: '#166962', bg: '#EEF8F6' },
  { num: '04', title: 'Roll out firm-wide', desc: 'Start with one practice group, then expand team by team.', icon: TrendingUp, color: '#2563EB', bg: '#EFF5FF' },
];

/* "Rollout" — same nested-shell template as the airline-booking page */
export default function LegalRolloutSection() {
  return (
    <section className="font-switzer bg-white">
      <div className="mx-auto w-full max-w-[1200px] px-5 pb-20 md:px-12 lg:pb-24">
        <div
          className="rounded-[24px] p-5 sm:px-8 sm:pb-8 sm:pt-12"
          style={{ background: '#FAF8F6' }}
        >
          <div
            className="rounded-[18px] bg-white p-5 sm:p-8 lg:p-10"
            style={{ boxShadow: '0 20px 60px rgba(15,23,42,.06)' }}
          >
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-60px' }}
            >
              <p
                className="m-0 uppercase text-[#98A2B3]"
                style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.3em', marginBottom: 12 }}
              >
                Rollout
              </p>
              <h2
                className="m-0 text-[24px] text-[#101828] sm:text-[30px] lg:text-[38px]"
                style={{ fontWeight: 700, lineHeight: 1.1, marginBottom: 12 }}
              >
                Onboarded in weeks, not months.
              </h2>
              <p className="m-0 text-[#475467]" style={{ fontSize: 15, fontWeight: 400, lineHeight: 1.55, marginBottom: 32, maxWidth: 480 }}>
                A guided setup, calibrated to how your firm already works.
              </p>
            </motion.div>

            {/* Columns */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">
              {steps.map(({ num, title, desc, icon: Icon, color, bg }, i) => (
                <motion.div
                  key={num}
                  className="group transition-transform duration-[250ms] ease-out hover:-translate-y-[6px]"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.1 }}
                  viewport={{ once: true, margin: '-40px' }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="grid h-12 w-12 place-items-center rounded-[14px] transition-[filter] duration-[250ms] ease-out group-hover:brightness-[0.97]"
                      style={{ background: bg }}
                    >
                      <Icon style={{ color, height: 24, width: 24 }} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <span style={{ fontSize: 13, fontWeight: 400, color: '#98A2B3' }}>{num}</span>
                  </div>

                  <h3
                    className="text-[#101828] transition-colors duration-[250ms] ease-out group-hover:text-black"
                    style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.25, marginTop: 18, marginBottom: 0 }}
                  >
                    {title}
                  </h3>

                  <div style={{ height: 1, background: 'rgba(15,23,42,.08)', marginTop: 18, marginBottom: 18 }} />

                  <p className="m-0 text-[#475467]" style={{ fontSize: 14.5, fontWeight: 400, lineHeight: 1.55 }}>
                    {desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
