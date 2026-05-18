'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

type Props = {
  jobTitle: string;
  jobSlug: string;
  department: string;
  location: string;
  workModel: string;
};

type Status = 'idle' | 'loading' | 'success' | 'error';

const MODEL_COLORS: Record<string, { bg: string; color: string }> = {
  Remote:    { bg: 'rgba(10,14,26,0.07)',    color: 'rgba(10,14,26,0.55)' },
  Hybrid:    { bg: 'rgba(232,154,120,0.14)', color: '#c4743c' },
  'On-site': { bg: 'rgba(91,124,250,0.12)',  color: '#4a5fd4' },
};

export default function ApplyForm({ jobTitle, jobSlug, department, location, workModel }: Props) {
  const [name,   setName]   = useState('');
  const [email,  setEmail]  = useState('');
  const [phone,  setPhone]  = useState('');
  const [why,    setWhy]    = useState('');
  const [cover,  setCover]  = useState('');
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [dragOver, setDragOver] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const modelStyle = MODEL_COLORS[workModel] ?? MODEL_COLORS['On-site'];

  const handleFile = (file: File) => {
    const allowed = ['application/pdf', 'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'image/jpeg', 'image/png'];
    if (!allowed.includes(file.type)) return;
    if (file.size > 10 * 1024 * 1024) return;
    setCvFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !cvFile) return;

    setStatus('loading');
    try {
      const fd = new FormData();
      fd.append('name', name);
      fd.append('email', email);
      fd.append('phone', phone);
      fd.append('jobTitle', jobTitle);
      fd.append('jobSlug', jobSlug);
      fd.append('why', why);
      fd.append('cover', cover);
      fd.append('cv', cvFile);

      const res = await fetch('/api/careers/apply', { method: 'POST', body: fd });
      if (!res.ok) throw new Error();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-black/[0.07] bg-white px-8 py-14 text-center">
        <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: 'rgba(52,211,153,0.12)' }}>
          <svg className="w-7 h-7" style={{ color: '#0d9f6e' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h2 className="text-xl font-extrabold text-[#0a0e1a] mb-2">Application sent!</h2>
        <p className="text-[#0a0e1a]/50 text-sm mb-8 max-w-sm mx-auto">
          Thanks {name.split(' ')[0]} — we&apos;ve received your application for <strong>{jobTitle}</strong>. We&apos;ll be in touch within a few business days.
        </p>
        <Link
          href="/careers"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all hover:opacity-90"
          style={{ background: '#0a0e1a', color: '#fff' }}
        >
          View all positions
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">

      {/* Job summary card */}
      <div className="rounded-2xl border border-black/[0.07] bg-white px-6 py-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#0a0e1a]/30 mb-1">{department}</p>
          <p className="font-extrabold text-[#0a0e1a] text-base">{jobTitle}</p>
          <p className="text-xs text-[#0a0e1a]/40 mt-0.5">{location}</p>
        </div>
        <span
          className="shrink-0 inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold"
          style={modelStyle}
        >
          {workModel}
        </span>
      </div>

      {/* My information */}
      <div className="rounded-2xl border border-black/[0.07] bg-white px-8 py-7">
        <h2 className="text-[11px] font-extrabold uppercase tracking-widest text-[#0a0e1a]/30 mb-6">My information</h2>

        <div className="flex flex-col gap-5">
          {/* Name */}
          <Field label="Full name" required>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              placeholder="Jane Smith"
              className="w-full px-4 py-3 rounded-xl border border-black/[0.09] bg-[#fafafa] text-[#0a0e1a] text-sm placeholder:text-[#0a0e1a]/25 focus:outline-none focus:border-[#e89a78] focus:ring-2 focus:ring-[#e89a78]/15 transition-all"
            />
          </Field>

          {/* Email + Phone row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Email address" required>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="jane@example.com"
                className="w-full px-4 py-3 rounded-xl border border-black/[0.09] bg-[#fafafa] text-[#0a0e1a] text-sm placeholder:text-[#0a0e1a]/25 focus:outline-none focus:border-[#e89a78] focus:ring-2 focus:ring-[#e89a78]/15 transition-all"
              />
            </Field>
            <Field label="Phone number">
              <input
                type="tel"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="+389 70 000 000"
                className="w-full px-4 py-3 rounded-xl border border-black/[0.09] bg-[#fafafa] text-[#0a0e1a] text-sm placeholder:text-[#0a0e1a]/25 focus:outline-none focus:border-[#e89a78] focus:ring-2 focus:ring-[#e89a78]/15 transition-all"
              />
            </Field>
          </div>

          {/* CV upload */}
          <Field label="CV / Resume" required>
            <div
              onDragOver={e => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              onClick={() => fileRef.current?.click()}
              className="relative flex flex-col items-center justify-center gap-3 px-6 py-8 rounded-xl border-2 border-dashed cursor-pointer transition-all"
              style={{
                borderColor: dragOver ? '#e89a78' : cvFile ? 'rgba(52,211,153,0.5)' : 'rgba(10,14,26,0.12)',
                background: dragOver ? 'rgba(232,154,120,0.04)' : cvFile ? 'rgba(52,211,153,0.04)' : '#fafafa',
              }}
            >
              <input
                ref={fileRef}
                type="file"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                className="hidden"
                onChange={e => { if (e.target.files?.[0]) handleFile(e.target.files[0]); }}
              />
              {cvFile ? (
                <>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(52,211,153,0.12)' }}>
                    <svg className="w-5 h-5" style={{ color: '#0d9f6e' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-[#0a0e1a]">{cvFile.name}</p>
                    <p className="text-xs text-[#0a0e1a]/40 mt-0.5">{(cvFile.size / 1024).toFixed(0)} KB · click to change</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(10,14,26,0.05)' }}>
                    <svg className="w-5 h-5 text-[#0a0e1a]/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-[#0a0e1a]">Drop your CV here or <span style={{ color: '#e89a78' }}>browse</span></p>
                    <p className="text-xs text-[#0a0e1a]/35 mt-0.5">PDF, DOC, DOCX · max 10 MB</p>
                  </div>
                </>
              )}
            </div>
          </Field>
        </div>
      </div>

      {/* Questions */}
      <div className="rounded-2xl border border-black/[0.07] bg-white px-8 py-7">
        <h2 className="text-[11px] font-extrabold uppercase tracking-widest text-[#0a0e1a]/30 mb-6">A few questions</h2>

        <div className="flex flex-col gap-5">
          <Field label={`Why are you interested in the ${jobTitle} role?`} required>
            <textarea
              value={why}
              onChange={e => setWhy(e.target.value)}
              required
              rows={4}
              placeholder="Tell us what draws you to this role and what you'd bring to the team…"
              className="w-full px-4 py-3 rounded-xl border border-black/[0.09] bg-[#fafafa] text-[#0a0e1a] text-sm placeholder:text-[#0a0e1a]/25 focus:outline-none focus:border-[#e89a78] focus:ring-2 focus:ring-[#e89a78]/15 transition-all resize-none"
            />
          </Field>

          <Field label="Cover letter" hint="Optional">
            <textarea
              value={cover}
              onChange={e => setCover(e.target.value)}
              rows={5}
              placeholder="Anything else you'd like us to know…"
              className="w-full px-4 py-3 rounded-xl border border-black/[0.09] bg-[#fafafa] text-[#0a0e1a] text-sm placeholder:text-[#0a0e1a]/25 focus:outline-none focus:border-[#e89a78] focus:ring-2 focus:ring-[#e89a78]/15 transition-all resize-none"
            />
          </Field>
        </div>
      </div>

      {/* Submit */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs text-[#0a0e1a]/35">Fields marked <span className="text-[#e89a78]">*</span> are required.</p>
        <div className="flex items-center gap-3">
          <Link
            href={`/careers/${jobSlug}`}
            className="text-sm text-[#0a0e1a]/40 hover:text-[#0a0e1a]/70 transition-colors"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={status === 'loading' || !name || !email || !cvFile}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold transition-all hover:opacity-90 active:scale-[0.97] disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ background: '#0a0e1a', color: '#fff' }}
          >
            {status === 'loading' ? (
              <>
                <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                </svg>
                Sending…
              </>
            ) : (
              <>
                Send application
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </>
            )}
          </button>
        </div>
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-500 text-right">Something went wrong — please try again or email careers@nativeai.cloud.</p>
      )}

    </form>
  );
}

function Field({ label, required, hint, children }: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-[#0a0e1a]/60 flex items-center gap-1.5">
        {label}
        {required && <span style={{ color: '#e89a78' }}>*</span>}
        {hint && <span className="text-[#0a0e1a]/30 font-normal">· {hint}</span>}
      </label>
      {children}
    </div>
  );
}
