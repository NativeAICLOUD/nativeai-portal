'use client';

import { motion } from 'framer-motion';
import {
  KeyRound, Mail, CalendarDays, ScanLine, FileText, Cloud, Users2, Receipt,
  type LucideIcon,
} from 'lucide-react';

const palette = [
  { color: '#A16207', bg: '#FBF7E8' },
  { color: '#166962', bg: '#EEF8F6' },
  { color: '#FF4F8B', bg: '#FFF0F5' },
  { color: '#2563EB', bg: '#EFF5FF' },
];

const integrations: { label: string; icon: LucideIcon }[] = [
  { label: 'Microsoft 365 sign-in', icon: KeyRound },
  { label: 'Outlook mailboxes', icon: Mail },
  { label: 'Calendars & agenda', icon: CalendarDays },
  { label: 'Scanned post', icon: ScanLine },
  { label: 'PDF & Word files', icon: FileText },
  { label: 'Azure hosting in Europe', icon: Cloud },
  { label: 'Roles & permissions', icon: Users2 },
  { label: 'Invoices & accounting', icon: Receipt },
];

/* "Connectivity" — same nested-shell template as the airline-booking page */
export default function LegalConnectivitySection() {
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
                Connectivity
              </p>
              <h2
                className="m-0 text-[24px] text-[#101828] sm:text-[30px] lg:text-[38px]"
                style={{ fontWeight: 700, lineHeight: 1.1, marginBottom: 12 }}
              >
                Works where your lawyers already work.
              </h2>
              <p className="m-0 text-[#475467]" style={{ fontSize: 15, fontWeight: 400, lineHeight: 1.55, marginBottom: 32, maxWidth: 480 }}>
                Connected to Microsoft 365 from day one — no new inbox, no second calendar.
              </p>
            </motion.div>

            {/* Grid */}
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
              {integrations.map(({ label, icon: Icon }, i) => {
                const { color, bg } = palette[i % palette.length];
                return (
                  <motion.div
                    key={label}
                    className="group transition-transform duration-[250ms] ease-out hover:-translate-y-[6px]"
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.06 }}
                    viewport={{ once: true, margin: '-40px' }}
                  >
                    <span
                      className="grid h-11 w-11 place-items-center rounded-[12px] transition-[filter] duration-[250ms] ease-out group-hover:brightness-[0.97]"
                      style={{ background: bg }}
                    >
                      <Icon style={{ color, height: 20, width: 20 }} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <h3
                      className="text-[#101828] transition-colors duration-[250ms] ease-out group-hover:text-black"
                      style={{ fontSize: 14.5, fontWeight: 600, lineHeight: 1.3, marginTop: 12, marginBottom: 0 }}
                    >
                      {label}
                    </h3>
                  </motion.div>
                );
              })}
            </div>

            <div style={{ height: 1, background: 'rgba(15,23,42,.08)', marginTop: 36, marginBottom: 28 }} />

            <div className="flex gap-5">
              <span className="mt-1 h-full w-[3px] shrink-0 rounded-full bg-[#2563EB]" />
              <p className="m-0 text-[#475467]" style={{ fontSize: 16, fontWeight: 400, lineHeight: 1.6 }}>
                Built for the confidentiality obligations of legal work — access is tied to
                your firm&apos;s Microsoft accounts, and every team member only sees what their
                role allows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
