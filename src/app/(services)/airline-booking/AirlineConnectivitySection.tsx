'use client';

import { motion } from 'framer-motion';
import {
  Database, Share2, Plug, CreditCard, Building2, Store, Calculator, KeyRound,
  type LucideIcon,
} from 'lucide-react';

const palette = [
  { color: '#A16207', bg: '#FBF7E8' },
  { color: '#166962', bg: '#EEF8F6' },
  { color: '#FF4F8B', bg: '#FFF0F5' },
  { color: '#2563EB', bg: '#EFF5FF' },
];

const integrations: { label: string; icon: LucideIcon }[] = [
  { label: 'GDS', icon: Database },
  { label: 'NDC', icon: Share2 },
  { label: 'Airline APIs', icon: Plug },
  { label: 'Payment gateways', icon: CreditCard },
  { label: 'Operating carriers', icon: Building2 },
  { label: 'Travel agencies', icon: Store },
  { label: 'Accounting / ERP', icon: Calculator },
  { label: 'Identity providers', icon: KeyRound },
];

/* "Connectivity" — same nested-shell template as the homepage's What We Offer section */
export default function AirlineConnectivitySection() {
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
                Built to connect.
              </h2>
              <p className="m-0 text-[#475467]" style={{ fontSize: 15, fontWeight: 400, lineHeight: 1.55, marginBottom: 32, maxWidth: 480 }}>
                NativeCloud is designed to work with the systems already around your airline.
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
                NativeCloud can be introduced alongside existing airline infrastructure —
                instead of requiring an immediate full-system replacement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
