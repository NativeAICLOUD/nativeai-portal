'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useContactSubjects } from '@/lib/useContactSubjects';
import { toast } from '@/app/components/ui/notification-toast';

const checklist = [
  "Book 30 minutes with one of our AWS-certified engineers — no sales rep involved.",
  'Get a clear picture of our AI, cloud, and engineering services.',
  'Walk away with a solution mapped to your actual goals, not a generic pitch.',
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

// One field per screen, in the style of the NativeInvoice login: answer, Continue, next field.
const STEPS: { key: 'firstName' | 'lastName' | 'company' | 'email'; label: string; type: string; autoComplete: string }[] = [
  { key: 'firstName', label: 'First Name', type: 'text', autoComplete: 'given-name' },
  { key: 'lastName', label: 'Last Name', type: 'text', autoComplete: 'family-name' },
  { key: 'company', label: 'Company name', type: 'text', autoComplete: 'organization' },
  { key: 'email', label: 'Work Email', type: 'email', autoComplete: 'email' },
];
const FINAL_STEP = STEPS.length;

// Tall white pill fields, matching the buttons; solid blue border on focus.
const inputCls =
  'h-12 w-full rounded-full border border-[#D3D9E1] bg-white px-5 text-[15px] text-[#1A1A1A] outline-none transition-colors placeholder:text-[#9AA3AF] focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6]';
const primaryCls =
  'inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#2E2B2B] px-5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#242121] active:bg-[#1A1818] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60';

const stepMotion = {
  initial: { opacity: 0, x: 8 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -8 },
  transition: { duration: 0.2 },
};

export default function ContactEngineerSection() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');
  const subjectOptions = useContactSubjects();
  const [step, setStep] = useState(0);

  const updateField = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
  };

  // After Continue, jump to the first field still empty (matters after "Change" on an earlier one).
  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    const key = STEPS[step].key;
    const next = { ...form, [key]: form[key].trim() };
    setForm(next);
    const empty = STEPS.findIndex((s) => !next[s.key]);
    setStep(empty === -1 ? FINAL_STEP : empty);
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
      setStep(0);
      toast.success("Thanks — we'll be in touch shortly.");
    } catch {
      setStatus('error');
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <section
      className="rounded-t-[32px] sm:rounded-t-[48px] lg:rounded-t-[80px]"
      style={{
        background:
          'radial-gradient(circle at 80% 100%, rgba(191, 219, 254, 0.55), transparent 48%), radial-gradient(circle at 100% 70%, rgba(219, 234, 254, 0.5), transparent 43%), #ffffff',
      }}
    >
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
              Talk to an
              <br />
              Engineer
            </h2>

            <p className="mt-5 max-w-[640px] text-[15px] leading-[1.4] text-[#1A1A1A] sm:text-[16px] xl:text-[18px] 2xl:mt-8 2xl:text-[22px]">
              Whether you’re just starting your cloud journey, ready to take the next step in migration or modernization, looking for tailored GenAI solutions, or something else, our team is here to help you cut through the chaos and get the clear results you need.
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

            <div className="mt-6 max-w-[440px] 2xl:mt-12">
              {/* answers so far — each can be reopened, like the email row on the NativeInvoice login */}
              {STEPS.some((s, i) => i !== step && form[s.key]) && (
                <div className="mb-3 divide-y divide-[#E5E7EB] overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-white">
                  {STEPS.map((s, i) =>
                    i !== step && form[s.key] ? (
                      <div key={s.key} className="flex items-center justify-between gap-3 px-5 py-2.5 text-sm">
                        <span className="min-w-0 truncate text-[#1A1A1A]" title={form[s.key]}>
                          <span className="text-[#6B7280]">{s.label}: </span>
                          {form[s.key]}
                        </span>
                        <button
                          type="button"
                          onClick={() => setStep(i)}
                          className="shrink-0 cursor-pointer text-[#6B7280] underline-offset-4 hover:text-[#1A1A1A] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3]/40"
                        >
                          Change
                        </button>
                      </div>
                    ) : null,
                  )}
                </div>
              )}

              <AnimatePresence mode="wait" initial={false}>
                {step < FINAL_STEP ? (
                  <motion.form key={STEPS[step].key} onSubmit={handleContinue} {...stepMotion} className="space-y-3">
                    <label htmlFor={`ce-${STEPS[step].key}`} className="sr-only">{STEPS[step].label}</label>
                    <input
                      id={`ce-${STEPS[step].key}`}
                      type={STEPS[step].type}
                      required
                      // only grab focus once the user has started, not on page load
                      autoFocus={step > 0}
                      autoComplete={STEPS[step].autoComplete}
                      placeholder={`${STEPS[step].label}*`}
                      value={form[STEPS[step].key]}
                      onChange={updateField(STEPS[step].key)}
                      onInvalid={(e) => e.currentTarget.setCustomValidity(
                        STEPS[step].type === 'email' && e.currentTarget.value
                          ? 'Please enter a valid email address.'
                          : 'Please complete this required field.',
                      )}
                      onInput={(e) => e.currentTarget.setCustomValidity('')}
                      className={inputCls}
                    />
                    <button type="submit" className={primaryCls}>Continue</button>
                  </motion.form>
                ) : (
                  <motion.form key="final" onSubmit={handleSubmit} {...stepMotion} className="space-y-3">
                    <label htmlFor="ce-subject" className="sr-only">Subject</label>
                    {/* native arrow hidden — it hugs the pill's curve; a chevron sits inside the padding instead */}
                    <div className="relative">
                      <select
                        id="ce-subject"
                        autoFocus
                        value={form.subject}
                        onChange={updateField('subject')}
                        className={`${inputCls} cursor-pointer appearance-none pr-12 ${form.subject ? '' : '!text-[#9AA3AF]'}`}
                      >
                        <option value="">Subject</option>
                        {subjectOptions.map((option) => (
                          <option key={option} value={option} className="text-[#1A1A1A]">{option}</option>
                        ))}
                      </select>
                      <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B7280]" />
                    </div>
                    <label htmlFor="ce-message" className="sr-only">Message</label>
                    <textarea
                      id="ce-message"
                      rows={3}
                      placeholder="Message"
                      value={form.message}
                      onChange={updateField('message')}
                      className={`${inputCls} h-[96px] !rounded-[24px] resize-none py-3`}
                    />
                    <button type="submit" disabled={status === 'submitting'} className={primaryCls}>
                      {status === 'submitting' ? 'Sending…' : 'Submit'}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
