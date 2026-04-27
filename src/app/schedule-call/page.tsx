'use client';

import { useState } from 'react';
import { Link } from 'react-transition-progress/next';
import { Constants } from '@/Constants';

const topics = [
  'AI Agents & LLMs',
  'Azure Cloud Migration',
  'Managed Services',
  'Cloud Native Development',
  'DevOps on Azure',
  'Data Lifecycle Management',
  'Other',
];

const expectations = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: '30-minute session',
    desc: 'A focused, no-fluff call. We respect your time.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: 'No commitment required',
    desc: 'We talk, we listen, we advise. Zero pressure.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Talk to our experts',
    desc: 'You speak directly with our technical team — no sales middlemen.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Fast follow-up',
    desc: 'You receive a summary and next steps within one business day.',
  },
];

type FormState = {
  name: string;
  email: string;
  company: string;
  phone: string;
  topic: string;
  message: string;
};

export default function ScheduleCallPage() {
  const [form, setForm] = useState<FormState>({
    name: '', email: '', company: '', phone: '', topic: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  const inputCls =
    'w-full bg-white border border-[#e8e0d8] focus:border-[#e89a78] focus:ring-2 focus:ring-[#e89a78]/15 outline-none rounded-xl px-4 py-3.5 text-sm text-[#0a0e1a] placeholder:text-[#b8b2aa] transition-all duration-150';

  return (
    <div className="min-h-screen bg-[#0a0e1a] relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#e89a78]/[0.07] blur-[120px]" />
        <div className="absolute top-1/2 -right-60 w-[500px] h-[500px] rounded-full bg-[#e89a78]/[0.05] blur-[100px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.7) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.7) 1px,transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* ── Hero ── */}
      <div className="relative max-w-9xl mx-auto px-6 sm:px-12 pt-40 pb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/80 transition-colors mb-8 group"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform group-hover:-translate-x-0.5">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back to home
        </Link>

        <div className="inline-flex items-center gap-2 bg-[#e89a78]/15 border border-[#e89a78]/30 rounded-full px-4 py-1.5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78]" />
          <p className="text-xs uppercase tracking-widest text-[#e89a78] font-semibold">Free consultation</p>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 max-w-2xl">
          Schedule a{' '}
          <span className="bg-gradient-to-r from-[#f0a060] via-[#e89a78] to-[#d4845c] bg-clip-text text-transparent">
            free call
          </span>{' '}
          with our team
        </h1>
        <p className="text-white/50 text-base sm:text-lg max-w-xl leading-relaxed">
          Tell us where you are and where you want to go. We&apos;ll map out the best path forward — together.
        </p>
      </div>

      {/* ── Main content ── */}
      <div className="relative max-w-9xl mx-auto px-6 sm:px-12 pb-28 grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 items-start">

        {/* Left — What to expect */}
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-lg font-bold text-white mb-6">What to expect</h2>
            <div className="flex flex-col gap-5">
              {expectations.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.07] border border-white/10 flex items-center justify-center text-[#e89a78] shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-0.5">{item.title}</p>
                    <p className="text-sm text-white/45 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/[0.08]" />

          {/* Contact info */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-widest text-white/25">Prefer email or phone?</p>
            <a
              href={`mailto:${Constants.MAIL}`}
              className="inline-flex items-center gap-2.5 text-sm text-white/60 hover:text-[#e89a78] transition-colors font-medium group"
            >
              <span className="w-8 h-8 rounded-lg bg-white/[0.07] border border-white/10 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#e89a78]">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              {Constants.MAIL}
            </a>
            <a
              href={`tel:${Constants.PHONE}`}
              className="inline-flex items-center gap-2.5 text-sm text-white/60 hover:text-[#e89a78] transition-colors font-medium"
            >
              <span className="w-8 h-8 rounded-lg bg-white/[0.07] border border-white/10 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#e89a78]">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              {Constants.PHONE}
            </a>
          </div>
        </div>

        {/* Right — Form or success */}
        <div className="bg-white rounded-3xl border border-[#e8e0d8] shadow-sm p-8 sm:p-10">
          {!submitted ? (
            <>
              <h2 className="text-xl font-bold text-[#0a0e1a] mb-1">Book your session</h2>
              <p className="text-sm text-[#6b6b6b] mb-8">We reply within one business day to confirm your slot.</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name + Company */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#0a0e1a] uppercase tracking-wide">Full name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={update('name')}
                      className={inputCls}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#0a0e1a] uppercase tracking-wide">Company</label>
                    <input
                      type="text"
                      placeholder="Acme Corp"
                      value={form.company}
                      onChange={update('company')}
                      className={inputCls}
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#0a0e1a] uppercase tracking-wide">Work email *</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={update('email')}
                      className={inputCls}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#0a0e1a] uppercase tracking-wide">Phone</label>
                    <input
                      type="tel"
                      placeholder="+1 234 567 890"
                      value={form.phone}
                      onChange={update('phone')}
                      className={inputCls}
                    />
                  </div>
                </div>

                {/* Topic */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#0a0e1a] uppercase tracking-wide">What would you like to discuss? *</label>
                  <select
                    required
                    value={form.topic}
                    onChange={update('topic')}
                    className={`${inputCls} appearance-none cursor-pointer`}
                  >
                    <option value="" disabled>Select a topic…</option>
                    {topics.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#0a0e1a] uppercase tracking-wide">
                    Tell us more <span className="text-[#b8b2aa] normal-case font-normal tracking-normal">(optional)</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Brief context about your project, current setup, or challenges…"
                    value={form.message}
                    onChange={update('message')}
                    className={`${inputCls} resize-none`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-[#0a0e1a] hover:bg-[#e89a78] text-white font-semibold text-base transition-all duration-200 shadow-md hover:shadow-[#e89a78]/30 hover:shadow-lg disabled:opacity-60 disabled:pointer-events-none mt-1"
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Schedule my free call
                      <span className="w-7 h-7 rounded-full bg-white/15 group-hover:bg-white/20 flex items-center justify-center transition-all shrink-0">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </>
                  )}
                </button>

                <p className="text-xs text-center text-[#b8b2aa]">
                  By submitting you agree to our{' '}
                  <Link href={Constants.PAGES.PRIVACY} className="underline hover:text-[#0a0e1a] transition-colors">
                    Privacy Policy
                  </Link>.
                  No spam, ever.
                </p>
              </form>
            </>
          ) : (
            /* ── Success state ── */
            <div className="flex flex-col items-center text-center py-8 gap-6">
              <div className="w-16 h-16 rounded-full bg-[#e89a78]/15 border border-[#e89a78]/30 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="#e89a78" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#0a0e1a] mb-2">You&apos;re all set!</h2>
                <p className="text-[#6b6b6b] text-sm leading-relaxed max-w-xs mx-auto">
                  Thanks {form.name.split(' ')[0]}! We&apos;ve received your request and will be in touch within one business day to confirm your call.
                </p>
              </div>
              <div className="bg-[#faf7f4] rounded-2xl border border-[#e8e0d8] p-5 w-full text-left flex flex-col gap-2">
                <p className="text-xs font-bold uppercase tracking-widest text-[#b8b2aa] mb-1">Confirmation sent to</p>
                <p className="text-sm font-semibold text-[#0a0e1a]">{form.email}</p>
                <p className="text-sm text-[#6b6b6b]">Topic: <span className="font-medium text-[#0a0e1a]">{form.topic}</span></p>
              </div>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-[#6b6b6b] hover:text-[#0a0e1a] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M19 12H5M12 5l-7 7 7 7" />
                </svg>
                Back to home
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
