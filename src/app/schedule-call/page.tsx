'use client';

import { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-transition-progress/next';
import { Constants } from '@/Constants';
import { Eyebrow } from '@/app/components/partials/services/ServiceUI';

/* ── Country codes ── */
type Country = { code: string; dial: string; name: string; flag: string };
const COUNTRIES: Country[] = [
  { code: 'CH', dial: '+41',  name: 'Switzerland',      flag: '🇨🇭' },
  { code: 'DE', dial: '+49',  name: 'Germany',           flag: '🇩🇪' },
  { code: 'AT', dial: '+43',  name: 'Austria',           flag: '🇦🇹' },
  { code: 'FR', dial: '+33',  name: 'France',            flag: '🇫🇷' },
  { code: 'IT', dial: '+39',  name: 'Italy',             flag: '🇮🇹' },
  { code: 'GB', dial: '+44',  name: 'United Kingdom',    flag: '🇬🇧' },
  { code: 'US', dial: '+1',   name: 'United States',     flag: '🇺🇸' },
  { code: 'CA', dial: '+1',   name: 'Canada',            flag: '🇨🇦' },
  { code: 'NL', dial: '+31',  name: 'Netherlands',       flag: '🇳🇱' },
  { code: 'BE', dial: '+32',  name: 'Belgium',           flag: '🇧🇪' },
  { code: 'SE', dial: '+46',  name: 'Sweden',            flag: '🇸🇪' },
  { code: 'NO', dial: '+47',  name: 'Norway',            flag: '🇳🇴' },
  { code: 'DK', dial: '+45',  name: 'Denmark',           flag: '🇩🇰' },
  { code: 'FI', dial: '+358', name: 'Finland',           flag: '🇫🇮' },
  { code: 'ES', dial: '+34',  name: 'Spain',             flag: '🇪🇸' },
  { code: 'PT', dial: '+351', name: 'Portugal',          flag: '🇵🇹' },
  { code: 'PL', dial: '+48',  name: 'Poland',            flag: '🇵🇱' },
  { code: 'CZ', dial: '+420', name: 'Czech Republic',    flag: '🇨🇿' },
  { code: 'SK', dial: '+421', name: 'Slovakia',          flag: '🇸🇰' },
  { code: 'HU', dial: '+36',  name: 'Hungary',           flag: '🇭🇺' },
  { code: 'RO', dial: '+40',  name: 'Romania',           flag: '🇷🇴' },
  { code: 'AL', dial: '+355', name: 'Albania',           flag: '🇦🇱' },
  { code: 'XK', dial: '+383', name: 'Kosovo',            flag: '🇽🇰' },
  { code: 'RS', dial: '+381', name: 'Serbia',            flag: '🇷🇸' },
  { code: 'HR', dial: '+385', name: 'Croatia',           flag: '🇭🇷' },
  { code: 'SI', dial: '+386', name: 'Slovenia',          flag: '🇸🇮' },
  { code: 'BA', dial: '+387', name: 'Bosnia',            flag: '🇧🇦' },
  { code: 'GR', dial: '+30',  name: 'Greece',            flag: '🇬🇷' },
  { code: 'TR', dial: '+90',  name: 'Turkey',            flag: '🇹🇷' },
  { code: 'IL', dial: '+972', name: 'Israel',            flag: '🇮🇱' },
  { code: 'AE', dial: '+971', name: 'UAE',               flag: '🇦🇪' },
  { code: 'SA', dial: '+966', name: 'Saudi Arabia',      flag: '🇸🇦' },
  { code: 'AU', dial: '+61',  name: 'Australia',         flag: '🇦🇺' },
  { code: 'NZ', dial: '+64',  name: 'New Zealand',       flag: '🇳🇿' },
  { code: 'IN', dial: '+91',  name: 'India',             flag: '🇮🇳' },
  { code: 'SG', dial: '+65',  name: 'Singapore',         flag: '🇸🇬' },
  { code: 'JP', dial: '+81',  name: 'Japan',             flag: '🇯🇵' },
  { code: 'KR', dial: '+82',  name: 'South Korea',       flag: '🇰🇷' },
  { code: 'CN', dial: '+86',  name: 'China',             flag: '🇨🇳' },
  { code: 'BR', dial: '+55',  name: 'Brazil',            flag: '🇧🇷' },
  { code: 'MX', dial: '+52',  name: 'Mexico',            flag: '🇲🇽' },
  { code: 'ZA', dial: '+27',  name: 'South Africa',      flag: '🇿🇦' },
];

function detectCountry(): Country {
  try {
    const lang = navigator.language || '';
    const regionCode = lang.split('-')[1]?.toUpperCase();
    if (regionCode) {
      const match = COUNTRIES.find(c => c.code === regionCode);
      if (match) return match;
    }
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz.includes('Zurich') || tz.includes('Geneva')) return COUNTRIES[0];
    if (tz.includes('Berlin') || tz.includes('Vienna')) return COUNTRIES.find(c => c.code === 'DE')!;
    if (tz.includes('London')) return COUNTRIES.find(c => c.code === 'GB')!;
    if (tz.includes('New_York') || tz.includes('Chicago') || tz.includes('Los_Angeles'))
      return COUNTRIES.find(c => c.code === 'US')!;
  } catch { /* ignore */ }
  return COUNTRIES[0];
}

function PhoneInputField({
  value, onChange, onBlur, className, id,
}: {
  value: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  className?: string;
  id?: string;
}) {
  const [country, setCountry] = useState<Country>(COUNTRIES[0]);
  const [number, setNumber] = useState('');
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => { setCountry(detectCountry()); }, []);

  useEffect(() => {
    onChange(number ? `${country.dial} ${number}` : '');
  }, [country, number]);

  useEffect(() => {
    if (open) setTimeout(() => searchRef.current?.focus(), 50);
  }, [open]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false); setSearch('');
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const filtered = useMemo(() =>
    search.trim()
      ? COUNTRIES.filter(c =>
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.dial.includes(search) ||
          c.code.toLowerCase().includes(search.toLowerCase()))
      : COUNTRIES,
    [search]
  );

  return (
    <div className="relative flex" ref={dropdownRef}>

      {/* ── Country selector button — liquid glass ── */}
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-1.5 shrink-0 px-3 py-4 sm:py-3.5 rounded-l-lg transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0969da] focus-visible:border-[#0969da]"
        style={{
          minWidth: 84,
          background: open ? 'rgba(0,0,0,0.04)' : '#ffffff',
          border: '1px solid #d0d7de',
          borderRight: '1px solid #eeeeee',
          borderRadius: '8px 0 0 8px',
          transition: 'background 0.15s',
        }}
      >
        <span className="text-[17px] leading-none">{country.flag}</span>
        <span className="text-[12px] font-semibold text-[#6b7280] tabular-nums">{country.dial}</span>
        <svg
          width="9" height="9" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          className={`shrink-0 text-[#9ca3af] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* ── Number input ── */}
      <input
        id={id}
        type="tel"
        value={number}
        onChange={e => setNumber(e.target.value)}
        onBlur={onBlur}
        placeholder="79 123 45 67"
        className={className}
        style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderLeft: 'none', borderTopRightRadius: 8, borderBottomRightRadius: 8 }}
      />

      {/* ── Dropdown — Apple liquid glass ── */}
      {open && (
        <div
          className="absolute top-full left-0 z-50 mt-2 w-72 overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.72)',
            backdropFilter: 'blur(64px) saturate(200%) brightness(110%)',
            WebkitBackdropFilter: 'blur(64px) saturate(200%) brightness(110%)',
            border: '1px solid rgba(255,255,255,0.65)',
            borderRadius: 20,
            boxShadow:
              '0 0 0 0.5px rgba(255,255,255,0.20), ' +
              '0 24px 60px rgba(0,0,0,0.13), ' +
              '0 4px 12px rgba(0,0,0,0.07), ' +
              'inset 0 1.5px 0 rgba(255,255,255,0.90)',
          }}
        >
          {/* Search field */}
          <div className="p-2.5">
            <div
              className="flex items-center gap-2 px-3 py-2 rounded-xl"
              style={{
                background: 'rgba(255,255,255,0.55)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(255,255,255,0.60)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.80)',
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-[#c0bab3] shrink-0">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
              <input
                ref={searchRef}
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Country or code…"
                className="flex-1 bg-transparent text-[13px] text-[#0a0e1a] placeholder:text-[#c0bab3] outline-none"
              />
              {search && (
                <button type="button" onClick={() => setSearch('')} className="text-[#c0bab3] hover:text-[#0a0e1a] transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
                </button>
              )}
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: 'rgba(0,0,0,0.05)', margin: '0 12px' }} />

          {/* Country list */}
          <div className="max-h-52 overflow-y-auto py-1.5">
            {filtered.length === 0 ? (
              <p className="text-[12px] text-[#b8b2aa] text-center py-4">No results</p>
            ) : filtered.map(c => (
              <button
                key={`${c.code}-${c.dial}`}
                type="button"
                onClick={() => { setCountry(c); setOpen(false); setSearch(''); }}
                className="w-full flex items-center gap-3 px-3.5 py-2 text-left transition-all duration-100"
                style={{
                  background: c.code === country.code
                    ? 'rgba(37,99,235,0.12)'
                    : 'transparent',
                }}
                onMouseEnter={e => {
                  if (c.code !== country.code)
                    (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.04)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background =
                    c.code === country.code ? 'rgba(37,99,235,0.12)' : 'transparent';
                }}
              >
                <span className="text-[17px] leading-none">{c.flag}</span>
                <span className="flex-1 text-[13px] text-[#0a0e1a] font-medium">{c.name}</span>
                <span
                  className="text-[11px] tabular-nums px-1.5 py-0.5 rounded-md"
                  style={{
                    color: c.code === country.code ? '#c4743c' : '#b8b2aa',
                    background: c.code === country.code ? 'rgba(37,99,235,0.15)' : 'transparent',
                  }}
                >
                  {c.dial}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

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
        <path d="M22 2 11 13" />
        <path d="M22 2 15 22l-4-9-9-4 20-7z" />
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

type FieldKey = keyof FormState;

const REQUIRED_FIELDS: FieldKey[] = ['name', 'email', 'topic'];
const MSG_MAX = 500;
const PERSONAL_DOMAINS = new Set([
  'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com',
  'icloud.com', 'aol.com', 'live.com', 'msn.com', 'googlemail.com',
]);

function validateField(field: FieldKey, value: string): string | undefined {
  switch (field) {
    case 'name':
      if (!value.trim()) return 'Full name is required';
      if (value.trim().split(/\s+/).filter(Boolean).length < 2)
        return 'Please enter your first and last name';
      return undefined;
    case 'email': {
      if (!value.trim()) return 'Work email is required';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim()))
        return 'Please enter a valid email address';
      const domain = value.split('@')[1]?.toLowerCase();
      if (domain && PERSONAL_DOMAINS.has(domain))
        return 'Please use your work or company email';
      return undefined;
    }
    case 'phone':
      if (!value) return undefined;
      if (value.replace(/\D/g, '').length < 6) return 'Phone number appears too short';
      return undefined;
    case 'topic':
      if (!value) return 'Please select a topic';
      return undefined;
    case 'message':
      if (value.length > MSG_MAX) return `${value.length - MSG_MAX} characters over limit`;
      return undefined;
    default:
      return undefined;
  }
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-emerald-500">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ErrorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-red-400">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

export default function ScheduleCallPage() {
  const [form, setForm] = useState<FormState>({
    name: '', email: '', company: '', phone: '', topic: '', message: '',
  });
  const [touched, setTouched] = useState<Partial<Record<FieldKey, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState<0 | 1>(0);

  const errors = useMemo<Partial<Record<FieldKey, string | undefined>>>(() => {
    const result: Partial<Record<FieldKey, string | undefined>> = {};
    (Object.keys(form) as FieldKey[]).forEach((key) => {
      result[key] = validateField(key, form[key]);
    });
    return result;
  }, [form]);

  const isFormValid = REQUIRED_FIELDS.every((f) => !errors[f] && form[f]);

  const completionScore = useMemo(() => {
    const weights: Partial<Record<FieldKey, number>> = {
      name: 3, email: 3, topic: 3, company: 1, phone: 1, message: 1,
    };
    let filled = 0;
    let total = 0;
    (Object.entries(weights) as [FieldKey, number][]).forEach(([key, w]) => {
      total += w;
      if (form[key] && !errors[key]) filled += w;
    });
    return Math.round((filled / total) * 100);
  }, [form, errors]);

  const update = useCallback((field: FieldKey) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    let { value } = e.target;
    if (field === 'name') {
      value = value.replace(/(?:^|\s)\S/g, (c) => c.toUpperCase());
    }
    setForm((f) => ({ ...f, [field]: value }));
  }, []);

  const handleBlur = useCallback((field: FieldKey) => () => {
    setTouched((t) => ({ ...t, [field]: true }));
    if (field === 'name' || field === 'email' || field === 'company') {
      setForm((f) => ({ ...f, [field]: f[field].trim() }));
    }
  }, []);

  const handleContinue = useCallback(() => {
    setTouched((t) => ({ ...t, name: true, email: true }));
    if (!validateField('name', form.name) && !validateField('email', form.email)) {
      setStep(1);
    }
  }, [form.name, form.email]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = Object.fromEntries(
      (Object.keys(form) as FieldKey[]).map((k) => [k, true])
    ) as Record<FieldKey, boolean>;
    setTouched(allTouched);
    if (!isFormValid) {
      // Required fields live on the first tab — bring the user back to them
      if (errors.name || errors.email) setStep(0);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('server');
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please email us directly at artan@nativeai.cloud');
    } finally {
      setLoading(false);
    }
  };

  const fieldState = (field: FieldKey) => {
    const isTouched = !!touched[field];
    const err = isTouched ? errors[field] : undefined;
    const valid = isTouched && !!form[field] && !errors[field];
    return { err, valid };
  };

  // GitHub-style inputs: 8px radius, #d0d7de border, hairline inset shadow,
  // blue focus ring; validation switches the border/ring colour, not the bg
  const inputCls = (field: FieldKey, extra = '') => {
    const { err, valid } = fieldState(field);
    const base = `w-full outline-none rounded-lg px-3.5 py-3 text-sm bg-white text-[#1f2328] placeholder:text-[#6e7781] shadow-[inset_0_1px_2px_rgba(31,35,40,0.04)] transition-all duration-150 ${extra}`;
    if (err) return `${base} border border-[#cf222e] focus:border-[#cf222e] focus:ring-2 focus:ring-[#cf222e]`;
    if (valid) return `${base} border border-[#1a7f37] focus:border-[#1a7f37] focus:ring-2 focus:ring-[#1a7f37]`;
    return `${base} border border-[#d0d7de] hover:border-[#8c959f] focus:border-[#0969da] focus:ring-2 focus:ring-[#0969da]`;
  };

  return (
    <div className="font-switzer min-h-screen bg-white relative overflow-hidden">
      {/* Background layers (white-on-white → subtle/none, kept harmless) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Vercel-style subtle top radial */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full" style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.04) 0%, transparent 70%)' }} />

        {/* NativeCloud infinity mark — white ghost watermark */}
        <svg
          viewBox="24 1 88 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -right-16 top-1/2 -translate-y-1/2 w-[520px] sm:w-[720px] lg:w-[860px] opacity-[0.028]"
          aria-hidden="true"
        >
          <path d="M109.088 8.57212C106.515 5.58012 102.965 3.33773 99.0229 2.31032C97.0446 1.79468 94.9567 1.45887 92.8976 1.60776C91.3139 1.72185 89.7534 2.11502 88.2375 2.54107C84.3481 3.63487 80.6244 5.26107 76.9974 6.95624C73.1175 8.76935 69.3226 10.741 65.5777 12.7881C63.955 13.675 62.3425 14.5787 60.7389 15.4952C58.7805 16.64 56.8227 17.784 54.865 18.9287C54.6951 18.8295 54.5253 18.7302 54.3561 18.6303C52.3682 17.4643 50.3954 16.2809 48.3575 15.1923C44.5284 13.1478 40.4793 10.9898 36.146 10.072C32.1148 9.21861 27.7589 11.2908 25.471 14.3995C22.3083 18.6961 21.9199 24.9211 24.5736 29.5348C26.5827 33.0283 30.6496 35.7534 35.0267 35.3886C37.0194 35.2223 39.0086 34.454 40.8266 33.7121C42.9885 32.8298 45.0839 31.8036 47.1458 30.7317C49.7768 29.3634 52.3422 27.8822 54.8924 26.3785C59.5312 29.0972 64.1796 31.794 68.9493 34.3096C72.6038 36.2368 76.311 38.0848 80.1148 39.738C83.4967 41.2083 86.9881 42.5773 90.6357 43.343C98.5714 45.0098 106.624 40.7139 110.762 34.4585C115.896 26.6994 115.192 15.6751 109.088 8.57212Z" fill="white"/>
        </svg>

        {/* Subtle grid pattern — Vercel style */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
      </div>

      {/* Hero */}
      <div className="hero-bg-blue">
        <div className="relative max-w-6xl mx-auto px-5 sm:px-12 pt-28 sm:pt-36 pb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#6b7280] hover:text-[#111] transition-colors mb-8 group"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform group-hover:-translate-x-0.5">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to home
          </Link>

          <div className="mb-6"><Eyebrow>Schedule a call</Eyebrow></div>
          <h1 className="m-0 max-w-2xl text-[40px] font-medium leading-[1.05] text-[#111] sm:text-[52px] lg:text-[60px]">
            Schedule a free call with our team.
          </h1>
          <p className="mt-5 max-w-xl text-[18px] font-light leading-[1.6] text-[#111]">
            Tell us where you are and where you want to go. We&apos;ll map out the best path forward — together.
          </p>
        </div>

        {/* blue → midnight divider — full viewport width */}
        <hr className="divider-blue-midnight m-0 h-1 w-full border-0" />
      </div>

      {/* Main content */}
      <div className="relative max-w-6xl mx-auto px-5 sm:px-12 pt-12 pb-20 grid lg:grid-cols-[1fr_1.6fr] gap-8 lg:gap-20 items-start">

        {/* Left — What to expect — shows BELOW form on mobile */}
        <div className="flex flex-col gap-8 order-2 lg:order-1">
          <div>
            <h2 className="text-lg font-semibold text-[#111] mb-6">What to expect</h2>
            <div className="flex flex-col gap-5">
              {expectations.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#fafafa] border border-[#e6e6e6] flex items-center justify-center text-[#111] shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#111] mb-0.5">{item.title}</p>
                    <p className="text-sm text-[#6b7280] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-[#eee]" />

          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#9ca3af]">Prefer email or phone?</p>
            <a
              href={`mailto:${Constants.MAIL}`}
              className="inline-flex items-center gap-2.5 text-sm text-[#6b7280] hover:text-[#111] transition-colors font-medium group"
            >
              <span className="w-8 h-8 rounded-lg bg-[#fafafa] border border-[#e6e6e6] flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#111]">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              {Constants.MAIL}
            </a>
            <a
              href={`tel:${Constants.PHONE}`}
              className="inline-flex items-center gap-2.5 text-sm text-[#6b7280] hover:text-[#111] transition-colors font-medium"
            >
              <span className="w-8 h-8 rounded-lg bg-[#fafafa] border border-[#e6e6e6] flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#111]">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              {Constants.PHONE}
            </a>
          </div>
        </div>

        {/* Right — Form or success — shows FIRST on mobile */}
        <div
          className="order-1 lg:order-2"
          style={{
            background: '#ffffff',
            border: '1px solid #e6e6e6',
            borderRadius: 28,
            boxShadow: '0 24px 64px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)',
          }}
        >
          {!submitted ? (
            <motion.div
              key="form-reveal"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Progress header */}
              <div className="border-b border-[#eee] px-6 sm:px-8 pt-7 pb-5" style={{ background: '#fafafa', borderRadius: '27px 27px 0 0' }}>
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-base font-semibold text-[#111] tracking-tight">Book your session</h2>
                  <span className={`text-[11px] font-medium tabular-nums transition-colors duration-300 ${completionScore === 100 ? 'text-emerald-500' : 'text-[#9ca3af]'}`}>
                    {completionScore}%
                  </span>
                </div>
                <div className="h-[2px] bg-[#eee] rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ease-out ${completionScore === 100 ? 'bg-emerald-500' : 'bg-[#111]'}`}
                    style={{ width: `${completionScore}%` }}
                  />
                </div>
              </div>

              {/* Tabs — GitHub underline nav */}
              <div className="flex items-end gap-1 border-b border-[#eee] px-4 sm:px-6" style={{ background: '#fafafa' }}>
                {['Your details', 'Your project'].map((label, i) => {
                  const active = step === i;
                  const detailsDone = !!form.name && !errors.name && !!form.email && !errors.email;
                  return (
                    <button
                      key={label}
                      type="button"
                      onClick={() => (i === 0 ? setStep(0) : handleContinue())}
                      className={`relative flex items-center gap-2 px-3 py-3 text-[13px] transition-colors ${active ? 'font-semibold text-[#1f2328]' : 'font-medium text-[#6e7781] hover:text-[#1f2328]'}`}
                    >
                      <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-semibold tabular-nums ${
                        i === 0 && detailsDone && !active
                          ? 'bg-emerald-100 text-emerald-600'
                          : active ? 'bg-[linear-gradient(135deg,#3b82f6_0%,#1e4fd6_100%)] text-white' : 'bg-[#eaeef2] text-[#57606a]'
                      }`}>
                        {i === 0 && detailsDone && !active ? '✓' : i + 1}
                      </span>
                      {label}
                      {active && <span className="absolute inset-x-2 bottom-0 h-[2px] rounded-full bg-[linear-gradient(135deg,#3b82f6_0%,#1e4fd6_100%)]" />}
                    </button>
                  );
                })}
              </div>

              {/* Form body */}
              <div className="px-6 sm:px-8 pt-7 pb-8 sm:pb-10">
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">

                {step === 0 ? (
                <motion.div
                  key="step-details"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="flex flex-col gap-6"
                >

                {/* Row 1: Name + Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="sc-name" className="text-[13px] font-semibold text-[#1f2328]">
                      Full name <span className="text-[#cf222e]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="sc-name"
                        type="text"
                        aria-invalid={!!fieldState('name').err}
                        autoComplete="name"
                        placeholder="Jane Smith"
                        value={form.name}
                        onChange={update('name')}
                        onBlur={handleBlur('name')}
                        className={inputCls('name', 'pr-10')}
                      />
                      {fieldState('name').valid && <span className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"><CheckIcon /></span>}
                      {fieldState('name').err   && <span className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"><ErrorIcon /></span>}
                    </div>
                    {fieldState('name').err && <p className="text-[12px] font-medium text-[#cf222e]">{fieldState('name').err}</p>}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="sc-company" className="text-[13px] font-semibold text-[#1f2328]">
                      Company <span className="text-[12px] font-normal text-[#6e7781]">(optional)</span>
                    </label>
                    <div className="relative">
                      <input
                        id="sc-company"
                        type="text"
                        autoComplete="organization"
                        placeholder="Acme Corp"
                        value={form.company}
                        onChange={update('company')}
                        onBlur={handleBlur('company')}
                        className={inputCls('company', 'pr-10')}
                      />
                      {fieldState('company').valid && <span className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"><CheckIcon /></span>}
                    </div>
                  </div>
                </div>

                {/* Row 2: Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="sc-email" className="text-[13px] font-semibold text-[#1f2328]">
                      Work email <span className="text-[#cf222e]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="sc-email"
                        type="email"
                        aria-invalid={!!fieldState('email').err}
                        autoComplete="email"
                        placeholder="jane@company.com"
                        value={form.email}
                        onChange={update('email')}
                        onBlur={handleBlur('email')}
                        className={inputCls('email', 'pr-10')}
                      />
                      {fieldState('email').valid && <span className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"><CheckIcon /></span>}
                      {fieldState('email').err   && <span className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"><ErrorIcon /></span>}
                    </div>
                    {fieldState('email').err && <p className="text-[12px] font-medium text-[#cf222e]">{fieldState('email').err}</p>}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="sc-phone" className="text-[13px] font-semibold text-[#1f2328]">
                      Phone <span className="text-[12px] font-normal text-[#6e7781]">(optional)</span>
                    </label>
                    <PhoneInputField
                      id="sc-phone"
                      value={form.phone}
                      onChange={(v) => setForm(f => ({ ...f, phone: v }))}
                      onBlur={handleBlur('phone')}
                      className={inputCls('phone')}
                    />
                    {fieldState('phone').err && <p className="text-[12px] font-medium text-[#cf222e]">{fieldState('phone').err}</p>}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleContinue}
                  className="group w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#111] hover:opacity-90 text-white font-medium text-sm transition-all duration-150 mt-1"
                >
                  Continue
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>

                </motion.div>
                ) : (
                <motion.div
                  key="step-project"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="flex flex-col gap-6"
                >

                {/* Topic — pill grid */}
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-semibold text-[#1f2328]">
                    What would you like to discuss? <span className="text-[#cf222e]">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {topics.map((t) => {
                      const selected = form.topic === t;
                      return (
                        <button
                          key={t}
                          type="button"
                          onClick={() => { setForm(f => ({ ...f, topic: t })); setTouched(tt => ({ ...tt, topic: true })); }}
                          className={`flex items-center justify-between gap-2 px-4 py-3 rounded-xl text-[13px] text-left transition-all duration-150 ${
                            selected
                              ? 'bg-[#111] text-white border border-[#111]'
                              : 'bg-white border border-[#e6e6e6] text-[#6b7280] hover:border-[#111] hover:text-[#111]'
                          }`}
                        >
                          <span className="font-medium">{t}</span>
                          {selected && (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 shrink-0">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </button>
                      );
                    })}
                  </div>
                  {fieldState('topic').err && <p className="text-[12px] font-medium text-[#cf222e]">{fieldState('topic').err}</p>}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="sc-message" className="text-[13px] font-semibold text-[#1f2328]">
                      Tell us more <span className="text-[12px] font-normal text-[#6e7781]">(optional)</span>
                    </label>
                    <span className={`text-[11px] tabular-nums transition-colors ${form.message.length > MSG_MAX ? 'text-red-500 font-semibold' : form.message.length > MSG_MAX * 0.8 ? 'text-amber-500' : 'text-[#9ca3af]'}`}>
                      {form.message.length}/{MSG_MAX}
                    </span>
                  </div>
                  <textarea
                    id="sc-message"
                    rows={4}
                    placeholder="Brief context about your project or challenges…"
                    value={form.message}
                    onChange={update('message')}
                    onBlur={handleBlur('message')}
                    className={`${inputCls('message')} resize-none`}
                  />
                  {fieldState('message').err && <p className="text-[12px] font-medium text-[#cf222e]">{fieldState('message').err}</p>}
                </div>

                {error && (
                  <div className="flex items-start gap-3 text-[13px] text-red-600 bg-red-50 border border-red-200 rounded-2xl px-4 py-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0 mt-0.5">
                      <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    {error}
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setStep(0)}
                  className="self-start inline-flex items-center gap-1.5 text-[13px] font-medium text-[#6e7781] hover:text-[#1f2328] transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <path d="M19 12H5M12 5l-7 7 7 7" />
                  </svg>
                  Back to your details
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#111] hover:opacity-90 text-white font-medium text-sm transition-all duration-150 disabled:opacity-40 disabled:pointer-events-none mt-1"
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
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-[#9ca3af]">
                  By submitting you agree to our{' '}
                  <Link href={Constants.PAGES.PRIVACY} className="underline hover:text-[#111] transition-colors">Privacy Policy</Link>.
                </p>

                </motion.div>
                )}
              </form>
              </div>
            </motion.div>
          ) : (
            /* Success state */
            <div className="flex flex-col items-center text-center px-5 sm:px-8 py-10 gap-6">
              <div className="w-16 h-16 rounded-full bg-[#2563EB]/15 border border-[#2563EB]/30 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#111] mb-2">You&apos;re all set!</h2>
                <p className="text-[#6b7280] text-sm leading-relaxed max-w-xs mx-auto">
                  Thanks {form.name.split(' ')[0]}! We&apos;ve received your request and will be in touch within one business day to confirm your call.
                </p>
              </div>
              <div className="rounded-xl p-5 w-full text-left flex flex-col gap-2" style={{ background: '#fafafa', border: '1px solid #e6e6e6' }}>
                <p className="text-xs font-bold uppercase tracking-widest text-[#9ca3af] mb-1">Confirmation sent to</p>
                <p className="text-sm font-semibold text-[#111]">{form.email}</p>
                <p className="text-sm text-[#6b7280]">Topic: <span className="font-medium text-[#111]">{form.topic}</span></p>
              </div>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-[#6b7280] hover:text-[#111] transition-colors"
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
