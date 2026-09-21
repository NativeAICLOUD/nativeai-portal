'use client';

import { useState } from 'react';

const checklist = [
  "Book 30 minutes with one of our AWS-certified engineers — no sales rep involved.",
  'Get a clear picture of our AI, cloud, and engineering services.',
  'Walk away with a solution mapped to your actual goals, not a generic pitch.',
];

const subjectOptions = [
  'AI Agents & LLMs',
  'Azure Cloud Migration',
  'Managed Services',
  'Cloud Native Development',
  'DevOps on Azure',
  'Data Lifecycle Management',
  'Other',
];

type FormState = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  subject: string;
  message: string;
};

const EMPTY_FORM: FormState = { firstName: '', lastName: '', company: '', email: '', subject: '', message: '' };

const inputCls =
  'h-12 w-full rounded-[16px] border border-[#D3D9E1] bg-[#F7F8FA] px-4 text-[15px] text-[#1A1A1A] outline-none transition-colors placeholder:text-[15px] placeholder:text-[#9AA3AF] focus:border-[#2563EB] focus:bg-white focus:ring-2 focus:ring-[#2563EB] 2xl:h-14 2xl:rounded-[20px] 2xl:px-5 2xl:text-[20px] 2xl:placeholder:text-[20px]';

export default function ContactEngineerSection() {
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
          name: `${form.firstName} ${form.lastName}`.trim(),
          email: form.email,
          company: form.company,
          topic: form.subject || 'Talk to an Engineer',
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
    <section className="rounded-t-[32px] bg-white sm:rounded-t-[48px] lg:rounded-t-[80px]">
      <div className="mx-auto max-w-[1500px] px-5 pb-14 pt-10 sm:px-8 sm:pb-16 sm:pt-12 lg:px-10 lg:pb-20 xl:px-16 xl:pb-24 2xl:px-[90px] 2xl:pb-28 2xl:pt-20">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[47%_1fr] lg:gap-14 xl:gap-20 2xl:gap-24">

          {/* Left column */}
          <div>
            <span
              className="inline-flex h-9 items-center rounded-lg border border-[#1A1A1A]/70 px-3 text-[14px] text-[#1A1A1A] 2xl:h-11 2xl:px-4 2xl:text-[18px]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Contact Us
            </span>

            <h2 className="m-0 mt-6 font-light leading-[0.98] tracking-tight text-[#1A1A1A] text-[34px] sm:text-[42px] lg:text-[48px] xl:text-[58px] 2xl:mt-10 2xl:text-[84px]">
              Speak With Our
              <br />
              Engineering Team
            </h2>

            <p className="mt-5 max-w-[640px] text-[15px] leading-[1.4] text-[#1A1A1A] sm:text-[16px] xl:text-[18px] 2xl:mt-8 2xl:text-[22px]">
              Whether you&apos;re evaluating cloud for the first time, planning a migration, or
              exploring what AI could do for your product, our engineers are ready to help you cut
              through the noise and find a clear way forward.
            </p>

            <p className="mb-4 mt-5 text-[15px] font-bold text-[#1A1A1A] xl:text-[17px] 2xl:mb-7 2xl:mt-8 2xl:text-[21px]">Fill out the form to:</p>

            <ul className="flex flex-col gap-4 2xl:gap-7">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-3 2xl:gap-5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1A1A1A] 2xl:h-7 2xl:w-7">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="2xl:h-[14px] 2xl:w-[14px]">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-[15px] font-semibold leading-snug text-[#1A1A1A] xl:text-[17px] 2xl:text-[20px]">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-[#1A1A1A]/10 pt-5 2xl:mt-14 2xl:pt-8">
              <h3 className="m-0 text-[19px] font-medium leading-[1.1] text-[#1A1A1A] 2xl:text-[26px]">
                Get in touch with us
              </h3>
              <p className="mt-2 max-w-[480px] text-[14px] font-light leading-[1.5] text-[#1A1A1A]/80 2xl:text-[16px]">
                We&apos;re always happy to help! Please choose a way to contact us below.
              </p>
            </div>
          </div>

          {/* Right column — form */}
          <div className="mt-8 lg:mt-0">
            <h3 className="m-0 max-w-[440px] text-[19px] font-bold leading-[1.2] text-[#1A1A1A] 2xl:text-[26px]">
              Share a few details and one of our engineers will follow up directly.
            </h3>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4 2xl:mt-12 2xl:gap-6">
              <div>
                <label htmlFor="ce-firstname" className="sr-only">First Name</label>
                <input
                  id="ce-firstname"
                  type="text"
                  required
                  placeholder="First Name*"
                  value={form.firstName}
                  onChange={updateField('firstName')}
                  onInvalid={(e) => e.currentTarget.setCustomValidity('Please complete this required field.')}
                  onInput={(e) => e.currentTarget.setCustomValidity('')}
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="ce-lastname" className="sr-only">Last Name</label>
                <input
                  id="ce-lastname"
                  type="text"
                  required
                  placeholder="Last Name*"
                  value={form.lastName}
                  onChange={updateField('lastName')}
                  onInvalid={(e) => e.currentTarget.setCustomValidity('Please complete this required field.')}
                  onInput={(e) => e.currentTarget.setCustomValidity('')}
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="ce-company" className="sr-only">Company name</label>
                <input
                  id="ce-company"
                  type="text"
                  required
                  placeholder="Company name*"
                  value={form.company}
                  onChange={updateField('company')}
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="ce-email" className="sr-only">Work Email</label>
                <input
                  id="ce-email"
                  type="email"
                  required
                  placeholder="Work Email*"
                  value={form.email}
                  onChange={updateField('email')}
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="ce-subject" className="sr-only">Subject</label>
                <select
                  id="ce-subject"
                  value={form.subject}
                  onChange={updateField('subject')}
                  className={`${inputCls} ${form.subject ? '!text-[#2563EB] font-semibold' : '!text-[#1A1A1A]'}`}
                >
                  <option value="">Subject</option>
                  {subjectOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="ce-message" className="sr-only">Message</label>
                <textarea
                  id="ce-message"
                  rows={3}
                  placeholder="Message"
                  value={form.message}
                  onChange={updateField('message')}
                  className={`${inputCls} h-[76px] resize-none pt-3 2xl:h-[96px] 2xl:pt-[18px]`}
                />
              </div>

              <div className="mt-4 flex flex-col items-start gap-3 2xl:mt-6">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex h-12 w-[120px] items-center justify-center rounded-[16px] bg-black text-[15px] font-bold text-white transition-colors hover:bg-[#1A1A1A]/90 disabled:cursor-not-allowed disabled:opacity-60 2xl:h-14 2xl:w-[135px] 2xl:rounded-[19px] 2xl:text-[16px]"
                >
                  {status === 'submitting' ? 'Sending…' : 'Submit'}
                </button>
                {status === 'submitted' && (
                  <p className="text-[14px] text-[#15803D]">Thanks — we&apos;ll be in touch shortly.</p>
                )}
                {status === 'error' && (
                  <p className="text-[14px] text-red-600">Something went wrong. Please try again.</p>
                )}
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
