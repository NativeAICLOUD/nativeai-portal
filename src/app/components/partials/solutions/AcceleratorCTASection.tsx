'use client';

import { useRef, useState } from 'react';
import { Link } from 'react-transition-progress/next';
import { Constants } from '@/Constants';
import { CONTAINER } from '@/app/components/partials/services/ServiceUI';

const checklist = [
  'Expert guidance to choose the right Azure AI service for your use case.',
  'Technical support to deploy a proven model or fine-tune your own.',
  'Lower complexity and risk when bringing AI into production.',
  'A governed AI Landing Zone, set up and secured on your behalf.',
  'Fast validation of ideas through focused, production-aligned proofs of concept.',
  'Clear, measurable business value from every AI solution we build.',
  'Confidence in data governance, privacy, and compliance from day one.',
  'A roadmap and ongoing guidance to scale AI safely across your teams.',
];

export default function AcceleratorCTASection() {
  const acceleratorCardRef = useRef<HTMLDivElement>(null);
  const [leadForm, setLeadForm] = useState({ company: '', firstName: '', lastName: '', phone: '', email: '' });
  const [agreed, setAgreed] = useState(false);
  const [leadStatus, setLeadStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');

  const updateLeadField = (field: keyof typeof leadForm) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setLeadForm((f) => ({ ...f, [field]: e.target.value }));
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    setLeadStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${leadForm.firstName} ${leadForm.lastName}`.trim(),
          email: leadForm.email,
          company: leadForm.company,
          phone: leadForm.phone,
          topic: 'AI Accelerator',
        }),
      });
      if (!res.ok) throw new Error('server');
      setLeadStatus('submitted');
      setLeadForm({ company: '', firstName: '', lastName: '', phone: '', email: '' });
      setAgreed(false);
    } catch {
      setLeadStatus('error');
    }
  };

  return (
    <section className="bg-white">
      <div className={`${CONTAINER} py-16 lg:py-20`}>
        <div ref={acceleratorCardRef} className="relative">
          {/* Top-center arrow notch — sits outside the card's own overflow-hidden
              clipping context (below) so the ring renders in full, not cut off. */}
          <button
            type="button"
            onClick={() => acceleratorCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })}
            aria-label="Scroll down"
            className="absolute left-1/2 top-0 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:h-16 sm:w-16"
            style={{ background: '#17182d', border: '4px solid #ffffff' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 4v14m0 0-6-6m6 6 6-6" />
            </svg>
          </button>

          <div
            className="overflow-hidden rounded-[22px] px-6 py-16 sm:rounded-[28px] sm:px-10 sm:py-20 lg:px-16 lg:py-24"
            style={{
              background:
                'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1.4px) 0 0/18px 18px, #17182d',
            }}
          >
          <div className="relative grid grid-cols-1 gap-14 lg:grid-cols-[1.45fr_1fr] lg:gap-10">

            {/* Left column */}
            <div>
              <h2
                className="m-0 max-w-[540px] text-[32px] font-bold leading-[1.08] sm:text-[42px] lg:text-[54px]"
                style={{
                  background: 'linear-gradient(90deg, #15803D 0%, #59C28A 55%, #EAFBF0 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                }}
              >
                Choosing AI Accelerator
              </h2>
              <p className="mt-5 max-w-[460px] text-[18px] leading-[1.6] text-white/90">
                Not sure if AI Accelerator is the right fit for your organisation? Here&apos;s what
                you get when you work with us:
              </p>

              <ul className="mt-9 flex flex-col gap-4">
                {checklist.map((item) => (
                  <li key={item} className="flex items-center gap-3.5">
                    <span className="flex h-[27px] w-[27px] shrink-0 items-center justify-center rounded-full" style={{ background: '#59C28A' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0B1220" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-[17px] leading-snug text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right column — lead form */}
            <div className="lg:pt-2">
              <h3 className="m-0 text-[28px] font-bold leading-[1.15] sm:text-[32px]" style={{ color: '#59C28A' }}>
                Ready to get started?
              </h3>

              <form onSubmit={handleLeadSubmit} className="mt-8 flex flex-col gap-4">
                <div>
                  <label htmlFor="accel-company" className="sr-only">Company name</label>
                  <input
                    id="accel-company"
                    type="text"
                    required
                    placeholder="Company name *"
                    value={leadForm.company}
                    onChange={updateLeadField('company')}
                    className="h-11 w-full rounded-14 border-0 bg-[#F7F7F9] px-[18px] text-[14px] text-[#111827] placeholder:text-[#9CA3AF] outline-none transition-shadow focus:ring-2 focus:ring-[#59C28A]"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="accel-firstname" className="sr-only">First name</label>
                    <input
                      id="accel-firstname"
                      type="text"
                      required
                      placeholder="First name *"
                      value={leadForm.firstName}
                      onChange={updateLeadField('firstName')}
                      className="h-11 w-full rounded-14 border-0 bg-[#F7F7F9] px-[18px] text-[14px] text-[#111827] placeholder:text-[#9CA3AF] outline-none transition-shadow focus:ring-2 focus:ring-[#59C28A]"
                    />
                  </div>
                  <div>
                    <label htmlFor="accel-lastname" className="sr-only">Last name</label>
                    <input
                      id="accel-lastname"
                      type="text"
                      required
                      placeholder="Last name *"
                      value={leadForm.lastName}
                      onChange={updateLeadField('lastName')}
                      className="h-11 w-full rounded-14 border-0 bg-[#F7F7F9] px-[18px] text-[14px] text-[#111827] placeholder:text-[#9CA3AF] outline-none transition-shadow focus:ring-2 focus:ring-[#59C28A]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="accel-phone" className="sr-only">Phone number</label>
                  <input
                    id="accel-phone"
                    type="tel"
                    required
                    placeholder="Phone number *"
                    value={leadForm.phone}
                    onChange={updateLeadField('phone')}
                    className="h-11 w-full rounded-14 border-0 bg-[#F7F7F9] px-[18px] text-[14px] text-[#111827] placeholder:text-[#9CA3AF] outline-none transition-shadow focus:ring-2 focus:ring-[#59C28A]"
                  />
                </div>

                <div>
                  <label htmlFor="accel-email" className="sr-only">Email</label>
                  <input
                    id="accel-email"
                    type="email"
                    required
                    placeholder="Email *"
                    value={leadForm.email}
                    onChange={updateLeadField('email')}
                    className="h-11 w-full rounded-14 border-0 bg-[#F7F7F9] px-[18px] text-[14px] text-[#111827] placeholder:text-[#9CA3AF] outline-none transition-shadow focus:ring-2 focus:ring-[#59C28A]"
                  />
                </div>

                <label htmlFor="accel-privacy" className="mt-1 flex items-start gap-2.5 text-[13px] leading-snug text-white/85">
                  <input
                    id="accel-privacy"
                    type="checkbox"
                    required
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 h-4 w-4 shrink-0 rounded border-0 accent-[#59C28A]"
                  />
                  <span>
                    <span className="text-red-400">*</span> By submitting this form, I accept NativeCloud&apos;s{' '}
                    <Link href={Constants.PAGES.PRIVACY} className="underline hover:text-white">privacy policy</Link>.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={leadStatus === 'submitting' || !agreed}
                  className="mt-1 inline-flex h-10 w-fit items-center justify-center rounded-full bg-[#2563EB] px-8 text-[14px] font-bold text-white transition-colors hover:bg-[#1e4fd6] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {leadStatus === 'submitting' ? 'Sending…' : 'Submit'}
                </button>

                {leadStatus === 'submitted' && (
                  <p className="text-[13px] text-[#59C28A]">Thanks — we&apos;ll be in touch shortly.</p>
                )}
                {leadStatus === 'error' && (
                  <p className="text-[13px] text-red-400">Something went wrong. Please email us at {Constants.MAIL}.</p>
                )}
              </form>
            </div>

          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
