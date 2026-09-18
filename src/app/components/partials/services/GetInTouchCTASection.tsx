'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTAINER, Eyebrow } from './ServiceUI';

type FormState = { name: string; email: string; subject: string; message: string };
const EMPTY_FORM: FormState = { name: '', email: '', subject: '', message: '' };

export default function GetInTouchCTASection({
  heading,
  body,
  topic,
}: {
  heading: string;
  body?: string;
  topic: string;
}) {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');

  const updateField = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          topic: form.subject || topic,
          message: form.message,
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
    <motion.section
      className="mb-8 rounded-b-[32px] border-t border-[#eee] sm:mb-10 sm:rounded-b-[48px] lg:mb-14 lg:rounded-b-[80px]"
      style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #EAF2FF 55%, #DBEAFE 100%)' }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-60px' }}
    >
      <div className={`${CONTAINER} py-20 lg:py-24`}>
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          <div className="flex-1">
            <div className="mb-4"><Eyebrow>Get in touch</Eyebrow></div>
            <h2 className="m-0 text-[28px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              {heading}
            </h2>
            {body && (
              <p className="mt-4 max-w-md text-[16px] font-light leading-[1.6] text-[#374151]">
                {body}
              </p>
            )}
          </div>

          <div className="flex-1">
            <div className="rounded-lg border border-[#e6e6e6] bg-white p-6 sm:p-8">
              <div className="mb-6"><Eyebrow>Contact form</Eyebrow></div>
              <h3 className="m-0 mb-6 text-[18px] font-medium leading-[1.25] text-[#111]">Send us a message</h3>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="git-name" className="text-[13px] font-medium text-[#374151]">Name</label>
                  <input
                    id="git-name"
                    type="text"
                    required
                    placeholder="Your full name"
                    value={form.name}
                    onChange={updateField('name')}
                    className="w-full rounded-lg border border-[#e6e6e6] bg-white px-4 py-3 text-sm text-[#111] outline-none transition-all placeholder:text-[#9ca3af] focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="git-email" className="text-[13px] font-medium text-[#374151]">Email</label>
                  <input
                    id="git-email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={updateField('email')}
                    className="w-full rounded-lg border border-[#e6e6e6] bg-white px-4 py-3 text-sm text-[#111] outline-none transition-all placeholder:text-[#9ca3af] focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]"
                  />
                </div>
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label htmlFor="git-subject" className="text-[13px] font-medium text-[#374151]">Subject</label>
                  <input
                    id="git-subject"
                    type="text"
                    placeholder="What are you working on?"
                    value={form.subject}
                    onChange={updateField('subject')}
                    className="w-full rounded-lg border border-[#e6e6e6] bg-white px-4 py-3 text-sm text-[#111] outline-none transition-all placeholder:text-[#9ca3af] focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]"
                  />
                </div>
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label htmlFor="git-message" className="text-[13px] font-medium text-[#374151]">Message</label>
                  <textarea
                    id="git-message"
                    rows={5}
                    placeholder="Tell us about your project, timeline, or any questions…"
                    value={form.message}
                    onChange={updateField('message')}
                    className="w-full resize-none rounded-lg border border-[#e6e6e6] bg-white px-4 py-3 text-sm text-[#111] outline-none transition-all placeholder:text-[#9ca3af] focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]"
                  />
                </div>
                <div className="flex flex-col gap-4 pt-2 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-[#9ca3af]">
                    {status === 'submitted'
                      ? "Thanks — we'll be in touch shortly."
                      : status === 'error'
                        ? 'Something went wrong. Please try again.'
                        : 'We reply within one business day.'}
                  </p>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111] px-6 py-3 text-[15px] font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.22)] active:translate-y-0 active:shadow-none disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === 'submitting' ? 'Sending…' : 'Send message'}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
