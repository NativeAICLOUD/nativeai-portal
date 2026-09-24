'use client';

import { useState } from 'react';
import { CONTAINER, Eyebrow } from '@/app/components/partials/services/ServiceUI';

type FormState = {
  name: string;
  email: string;
  company: string;
  role: string;
  interest: string;
  message: string;
};

const EMPTY_FORM: FormState = { name: '', email: '', company: '', role: '', interest: '', message: '' };

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

const inputCls = "w-full rounded-lg border border-[#e6e6e6] bg-white px-4 py-3 text-sm text-[#111] outline-none transition-all placeholder:text-[#9ca3af] focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]";

export default function AirlineContactSection() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');

  const updateField = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
          message: form.role ? `Role: ${form.role}\n\n${form.message}` : form.message,
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
    <section
      className="mb-8 rounded-b-[32px] border-t border-[#eee] sm:mb-10 sm:rounded-b-[48px] lg:mb-14 lg:rounded-b-[80px]"
      style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #EAF2FF 55%, #DBEAFE 100%)' }}
    >
      <div className={`${CONTAINER} py-20 lg:py-24`}>
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          <div className="flex-1">
            <div className="mb-4"><Eyebrow>Contact</Eyebrow></div>
            <h2 className="m-0 text-[28px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              Let&apos;s talk about your airline.
            </h2>
            <p className="mt-4 max-w-md text-[16px] font-light leading-[1.6] text-[#374151]">
              Tell us where you want to start. We&apos;ll show you how NativeCloud can fit
              into your operation.
            </p>
          </div>

          <div className="flex-1">
            {status === 'submitted' ? (
              <div className="rounded-lg border border-[#e6e6e6] bg-white p-6 sm:p-8">
                <p className="m-0 text-[18px] font-medium leading-[1.3] text-[#111]">Thanks — we&apos;ll be in touch shortly.</p>
                <p className="mt-2 text-sm text-[#6b7280]">We usually reply within one business day.</p>
              </div>
            ) : (
              <div className="rounded-lg border border-[#e6e6e6] bg-white p-6 sm:p-8">
                <div className="mb-6"><Eyebrow>Contact form</Eyebrow></div>
                <h3 className="m-0 mb-6 text-[18px] font-medium leading-[1.25] text-[#111]">Send us a message</h3>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="ac-name" className="text-[13px] font-medium text-[#374151]">Name</label>
                    <input
                      id="ac-name" type="text" required placeholder="Your full name"
                      value={form.name} onChange={updateField('name')} className={inputCls}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="ac-email" className="text-[13px] font-medium text-[#374151]">Work email</label>
                    <input
                      id="ac-email" type="email" required placeholder="you@airline.com"
                      value={form.email} onChange={updateField('email')} className={inputCls}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="ac-company" className="text-[13px] font-medium text-[#374151]">Company / Airline</label>
                    <input
                      id="ac-company" type="text" placeholder="Your airline or company name"
                      value={form.company} onChange={updateField('company')} className={inputCls}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="ac-role" className="text-[13px] font-medium text-[#374151]">Role</label>
                    <input
                      id="ac-role" type="text" placeholder="Your role"
                      value={form.role} onChange={updateField('role')} className={inputCls}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label htmlFor="ac-interest" className="text-[13px] font-medium text-[#374151]">What are you interested in?</label>
                    <select id="ac-interest" value={form.interest} onChange={updateField('interest')} className={inputCls}>
                      <option value="" disabled>Choose an option…</option>
                      {interests.map((item) => (
                        <option key={item} value={item}>{item}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label htmlFor="ac-message" className="text-[13px] font-medium text-[#374151]">Message</label>
                    <textarea
                      id="ac-message" rows={5} placeholder="Tell us about your operation, timeline, or any questions…"
                      value={form.message} onChange={updateField('message')} className={`${inputCls} resize-none`}
                    />
                  </div>
                  <div className="flex flex-col gap-4 pt-2 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-[#9ca3af]">
                      {status === 'error' ? 'Something went wrong. Please try again.' : 'We reply within one business day.'}
                    </p>
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111] px-6 py-3 text-[15px] font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.22)] active:translate-y-0 active:shadow-none disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {status === 'submitting' ? 'Sending…' : 'Talk to our team'}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
