'use client';

import { useRef, useState } from 'react';
import { Constants } from '@/Constants';
import { CONTAINER } from '@/app/components/partials/services/ServiceUI';

const checklist = [
  { title: 'Start small', body: 'One route, market or workflow.' },
  { title: 'Integrate first', body: 'Work with the systems you already have.' },
  { title: 'Built for airline operations', body: 'Reservations, passengers, distribution and payments connected.' },
  { title: 'Scale when it works', body: 'Expand across routes, agencies and markets.' },
];

const interests = [
  'Airline Booking System',
  'Ticketing & Reservations',
  'PSS Integration',
  'GDS / NDC Integration',
  'B2B Agency Portal',
  'Passenger Management',
  'Payments & Refunds',
  'Start a Pilot',
  'Book a Demo',
  'Partnership Opportunity',
];

type FormState = {
  name: string;
  email: string;
  company: string;
  role: string;
  interest: string;
};

const EMPTY_FORM: FormState = { name: '', email: '', company: '', role: '', interest: '' };

const fieldCls = "h-11 w-full rounded-14 border-0 bg-[#F7F7F9] px-[18px] text-[14px] text-[#111827] placeholder:text-[#9CA3AF] outline-none transition-shadow focus:ring-2 focus:ring-[#60a5fa]";

export default function AirlineAcceleratorCTASection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');

  const updateField = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          topic: form.interest || 'Airline & Travel Booking',
          message: form.role ? `Role: ${form.role}` : undefined,
        }),
      });
      if (!res.ok) throw new Error('server');
      setStatus('submitted');
      setForm(EMPTY_FORM);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="bg-white">
      <div className={`${CONTAINER} py-16 lg:py-20`}>
        <div ref={cardRef} className="relative">
          <button
            type="button"
            onClick={() => cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })}
            aria-label="Scroll down"
            className="absolute left-1/2 top-0 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:h-16 sm:w-16"
            style={{ background: '#0a0e1a', border: '4px solid #ffffff' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 4v14m0 0-6-6m6 6 6-6" />
            </svg>
          </button>

          <div
            className="overflow-hidden rounded-[22px] px-6 py-14 sm:rounded-[28px] sm:px-10 sm:py-16 lg:px-16 lg:py-20"
            style={{
              background:
                'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1.4px) 0 0/18px 18px, #0a0e1a',
            }}
          >
            <div className="relative flex flex-col items-center gap-8">

              {/* Heading + checklist */}
              <div className="w-full max-w-[640px] text-center">
                <h2
                  className="m-0 text-[32px] font-bold leading-[1.08] sm:text-[42px] lg:text-[52px]"
                  style={{
                    background: 'linear-gradient(90deg, #1e4fd6 0%, #60a5fa 55%, #dbeafe 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent',
                  }}
                >
                  Ready to modernize your airline operation?
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-6 text-left sm:grid-cols-2">
                  {checklist.map(({ title, body }) => (
                    <div key={title} className="flex items-start gap-3.5">
                      <span className="mt-0.5 flex h-[27px] w-[27px] shrink-0 items-center justify-center rounded-full" style={{ background: '#60a5fa' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0a0e1a" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <div>
                        <p className="m-0 text-[16px] font-semibold leading-snug text-white">{title}</p>
                        <p className="m-0 mt-0.5 text-[14px] leading-snug text-white/60">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-[15px] font-medium text-white/50">
                  One conversation can be the first step.
                </p>
              </div>

              {/* Form */}
              <div className="-mt-4 w-full max-w-[480px]">
                {status === 'submitted' ? (
                  <p className="text-center text-[15px] text-[#60a5fa]">Thanks — we&apos;ll be in touch shortly.</p>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                      <label htmlFor="aacc-name" className="sr-only">Name</label>
                      <input
                        id="aacc-name" type="text" required placeholder="Your name *"
                        value={form.name} onChange={updateField('name')} className={fieldCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="aacc-email" className="sr-only">Work email</label>
                      <input
                        id="aacc-email" type="email" required placeholder="Work email *"
                        value={form.email} onChange={updateField('email')} className={fieldCls}
                      />
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="aacc-company" className="sr-only">Company / Airline</label>
                        <input
                          id="aacc-company" type="text" placeholder="Company / Airline"
                          value={form.company} onChange={updateField('company')} className={fieldCls}
                        />
                      </div>
                      <div>
                        <label htmlFor="aacc-role" className="sr-only">Role</label>
                        <input
                          id="aacc-role" type="text" placeholder="Role"
                          value={form.role} onChange={updateField('role')} className={fieldCls}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="aacc-interest" className="sr-only">What are you interested in?</label>
                      <select id="aacc-interest" value={form.interest} onChange={updateField('interest')} className={fieldCls}>
                        <option value="" disabled>What are you interested in?</option>
                        {interests.map((item) => (
                          <option key={item} value={item}>{item}</option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="mt-1 inline-flex h-10 w-fit items-center justify-center self-center rounded-full bg-[#2563EB] px-8 text-[14px] font-bold text-white transition-colors hover:bg-[#1e4fd6] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {status === 'submitting' ? 'Sending…' : 'Talk to our team'}
                    </button>

                    {status === 'error' && (
                      <p className="text-center text-[13px] text-red-400">Something went wrong. Please email us at {Constants.MAIL}.</p>
                    )}
                  </form>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
