"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const industries = [
  {
    number: '01',
    title:  'Travel',
    desc:   'Tourism & mobility',
    src:    '/img/industry1.png',
    w: 81, h: 81,
    detail: 'We build booking platforms, traveller experience apps, and AI-powered operations for airlines, hotels, and mobility providers — faster journeys from search to seat.',
    tags:   ['Booking Platforms', 'AI Personalisation', 'Real-time Ops', 'Loyalty Systems'],
  },
  {
    number: '02',
    title:  'Fintech',
    desc:   'Banking & payments',
    src:    '/img/industry2.png',
    w: 77, h: 74,
    detail: 'We help financial institutions automate compliance, detect fraud in real time, and build customer-facing products that scale from startup to enterprise.',
    tags:   ['AI Fraud Detection', 'Payment Automation', 'RegTech', 'Open Banking'],
  },
  {
    number: '03',
    title:  'E-commerce & Retail',
    desc:   'Online & in-store',
    src:    '/img/industry3.png',
    w: 67, h: 74,
    detail: 'From personalised product recommendations to inventory automation and omnichannel platforms — we help retailers sell smarter and operate leaner.',
    tags:   ['AI Recommendations', 'Inventory Automation', 'Omnichannel', 'Analytics'],
  },
  {
    number: '04',
    title:  'Insurance',
    desc:   'Claims & InsurTech',
    src:    '/img/industry4.png',
    w: 78, h: 80,
    detail: 'We automate claims processing, accelerate underwriting with AI, and build digital portals that modernise the full insurance value chain.',
    tags:   ['Claims Automation', 'Underwriting AI', 'Risk Assessment', 'Customer Portal'],
  },
  {
    number: '05',
    title:  'Manufacturing',
    desc:   'Industry 4.0',
    src:    '/img/industry5.png',
    w: 72, h: 80,
    detail: 'We connect factory floors to intelligent systems — predictive maintenance, quality control AI, and supply chain visibility that cuts downtime and waste.',
    tags:   ['Predictive Maintenance', 'Quality Control AI', 'Supply Chain', 'IoT Integration'],
  },
  {
    number: '06',
    title:  'Chemical',
    desc:   'Process & compliance',
    src:    '/img/industry6.png',
    w: 80, h: 79,
    detail: 'We build compliance management systems, process optimisation tools, and safety monitoring platforms tailored to the regulatory demands of chemical industries.',
    tags:   ['Process Optimisation', 'Safety Monitoring', 'Compliance Mgmt', 'ERP Integration'],
  },
  {
    number: '07',
    title:  'Construction',
    desc:   'Build & project mgmt',
    src:    '/img/industry7.png',
    w: 79, h: 79,
    detail: 'From project management platforms to BIM integrations and on-site IoT — we deliver digital tools that keep construction projects on time and on budget.',
    tags:   ['Project Management', 'BIM Integration', 'On-site IoT', 'Document Automation'],
  },
  {
    number: '08',
    title:  'Renewable Energy',
    desc:   'Clean tech & grid',
    src:    '/img/industry8.png',
    w: 74, h: 89,
    detail: 'We develop monitoring platforms, grid optimisation tools, and data pipelines that help energy companies maximise output and manage assets at scale.',
    tags:   ['Grid Optimisation', 'Asset Monitoring', 'Data Pipelines', 'Forecasting AI'],
  },
  {
    number: '09',
    title:  'B2B Solutions',
    desc:   'Enterprise platforms',
    src:    '/img/industry9.png',
    w: 90, h: 82,
    detail: 'We build the platforms, portals, and integrations that power B2B operations — from CRM automation to partner ecosystems and self-serve customer hubs.',
    tags:   ['CRM Automation', 'Partner Portals', 'API Integrations', 'Self-serve Hubs'],
  },
];

const INTERVAL = 3500;

export default function IndustriesBusinessDomain() {
  const [active,  setActive]  = useState(0);
  const [dir,     setDir]     = useState(1);
  const [paused,  setPaused]  = useState(false);
  const activeRef             = useRef(active);
  activeRef.current           = active;

  const go = (i: number) => { setDir(i > activeRef.current ? 1 : -1); setActive(i); };
  const prev = () => go((activeRef.current - 1 + industries.length) % industries.length);
  const next = () => go((activeRef.current + 1) % industries.length);

  /* auto-advance */
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      const n = (activeRef.current + 1) % industries.length;
      setDir(1);
      setActive(n);
    }, INTERVAL);
    return () => clearInterval(id);
  }, [paused]);

  const item = industries[active];

  return (
    <section className="relative bg-white py-20 sm:py-28 overflow-hidden">
      <div className="max-w-9xl mx-auto px-6 sm:px-12 xl:px-16">

        {/* ── Header ── */}
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
            <p className="text-xs uppercase tracking-wider text-[#6b6b6b] font-medium">Industries we serve</p>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0a0e1a] leading-tight max-w-2xl">
            Move your industry{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#f0a060] via-[#e89a78] to-[#d4845c] bg-clip-text text-transparent">
                forward
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-[#f0a060] via-[#e89a78] to-[#d4845c] opacity-50" />
            </span>
          </h2>
        </motion.div>

        {/* ══ DESKTOP  lg+ ══════════════════════════════════════════ */}
        <div
          className="hidden lg:grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-16 items-start"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >

          {/* Left — industry list */}
          <div>
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.05 }}
                viewport={{ once: true, margin: '-40px' }}
                className="group flex items-center justify-between py-5 border-b cursor-pointer select-none"
                style={{ borderColor: '#f0ebe4' }}
              >
                {/* left: number + title */}
                <div className="flex items-center gap-5">
                  <span
                    className="font-mono text-[11px] tracking-widest shrink-0 transition-colors duration-200"
                    style={{ color: i === active ? '#e89a78' : '#c4bab2' }}
                  >
                    {ind.number}
                  </span>
                  <span
                    className="font-bold leading-tight transition-all duration-200"
                    style={{
                      fontSize:   'clamp(1.1rem, 2vw, 1.6rem)',
                      color:      i === active ? '#0a0e1a' : '#9b9086',
                    }}
                  >
                    {ind.title}
                  </span>
                </div>

                {/* right: desc + arrow */}
                <div className="flex items-center gap-3 shrink-0">
                  <span
                    className="text-xs font-medium transition-all duration-200"
                    style={{ color: i === active ? '#e89a78' : 'transparent' }}
                  >
                    {ind.desc}
                  </span>
                  <div
                    className="w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200"
                    style={{
                      borderColor:     i === active ? '#0a0e1a'  : '#e8e0d8',
                      backgroundColor: i === active ? '#0a0e1a'  : 'transparent',
                      color:           i === active ? '#ffffff'  : '#c4bab2',
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </div>

                {/* active line */}
                {i === active && (
                  <motion.div
                    layoutId="activeLine"
                    className="absolute left-0 w-[3px] rounded-full bg-[#e89a78]"
                    style={{ height: 40 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Right — sticky panel */}
          <div className="sticky top-24">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={active}
                custom={dir}
                variants={{
                  enter:  (d: number) => ({ y: d * 24, opacity: 0, scale: 0.97 }),
                  center: { y: 0, opacity: 1, scale: 1 },
                  exit:   (d: number) => ({ y: -d * 24, opacity: 0, scale: 0.97 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: '#0a0e1a',
                  boxShadow:  '0 24px 64px rgba(10,14,26,0.18), 0 4px 16px rgba(0,0,0,0.08)',
                }}
              >
                {/* icon area */}
                <div className="flex items-center justify-center py-12 px-8"
                  style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={item.w}
                    height={item.h}
                    className="max-w-[100px] max-h-[100px] object-contain"
                  />
                </div>

                {/* content */}
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-[11px] tracking-widest text-[#e89a78] font-semibold">{item.number}</span>
                    <span
                      className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
                      style={{ background: 'rgba(232,154,120,0.12)', border: '1px solid rgba(232,154,120,0.28)', color: '#e89a78' }}
                    >
                      {item.desc}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-5">{item.detail}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)', color: 'rgba(255,255,255,0.55)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* auto-advance progress bar */}
                <div style={{ height: 2, background: 'rgba(255,255,255,0.07)' }}>
                  {!paused && (
                    <motion.div
                      key={active}
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
                      style={{ height: '100%', background: '#e89a78' }}
                    />
                  )}
                </div>

                {/* nav */}
                <div className="flex items-center justify-between px-7 py-4" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                  <span className="font-mono text-xs text-white/25 tabular-nums">
                    {String(active + 1).padStart(2, '0')} / {String(industries.length).padStart(2, '0')}
                  </span>
                  <div className="flex gap-2">
                    {[prev, next].map((fn, j) => (
                      <button
                        key={j}
                        onClick={fn}
                        className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-white/10"
                        style={{ border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.4)' }}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                          <path d={j === 0 ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'} />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ══ MOBILE  < lg ═══════════════════════════════════════════ */}
        <div className="lg:hidden" onTouchStart={() => setPaused(true)}>

          {/* pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {industries.map((ind, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className="text-[12px] font-medium px-3.5 py-1.5 rounded-full border transition-all duration-200"
                style={{
                  background:  i === active ? '#0a0e1a' : 'transparent',
                  borderColor: i === active ? '#0a0e1a' : '#e8e0d8',
                  color:       i === active ? '#fff'    : '#6b6b6b',
                }}
              >
                {ind.title}
              </button>
            ))}
          </div>

          {/* card */}
          <div className="rounded-2xl overflow-hidden" style={{ background: '#0a0e1a', boxShadow: '0 16px 48px rgba(10,14,26,0.18)' }}>
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={active}
                custom={dir}
                variants={{
                  enter:  (d: number) => ({ x: d * 40, opacity: 0 }),
                  center: { x: 0, opacity: 1 },
                  exit:   (d: number) => ({ x: -d * 40, opacity: 0 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.26, ease: 'easeInOut' }}
              >
                {/* icon */}
                <div className="flex justify-center py-10" style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  <Image src={item.src} alt={item.title} width={item.w} height={item.h} className="max-w-[80px] max-h-[80px] object-contain" />
                </div>

                {/* content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-[11px] tracking-widest text-[#e89a78] font-semibold">{item.number}</span>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full" style={{ background: 'rgba(232,154,120,0.12)', border: '1px solid rgba(232,154,120,0.28)', color: '#e89a78' }}>
                      {item.desc}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">{item.detail}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-[11px] font-medium px-2.5 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)', color: 'rgba(255,255,255,0.55)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* nav */}
            <div className="flex items-center justify-between px-6 py-4" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="flex gap-1.5">
                {industries.map((_, i) => (
                  <button key={i} onClick={() => go(i)} className="rounded-full transition-all duration-200"
                    style={{ width: i === active ? 18 : 5, height: 5, background: i < active ? '#e89a78' : i === active ? '#fff' : 'rgba(255,255,255,0.18)' }}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                {[prev, next].map((fn, j) => (
                  <button key={j} onClick={fn} className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-white/10"
                    style={{ border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.4)' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                      <path d={j === 0 ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'} />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
