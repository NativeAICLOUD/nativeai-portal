'use client';

import { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { Link } from 'react-transition-progress/next';
import { Constants } from '@/Constants';

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
  value, onChange, onBlur, className,
}: {
  value: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  className?: string;
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
        className="flex items-center gap-1.5 shrink-0 px-3 py-4 sm:py-3.5 rounded-l-2xl transition-all duration-150 focus:outline-none"
        style={{
          minWidth: 84,
          background: open ? '#ece9e5' : '#f5f3f0',
          border: '1px solid #f5f3f0',
          borderRight: '1px solid #e8e4df',
          borderRadius: '16px 0 0 16px',
          transition: 'background 0.15s',
        }}
      >
        <span className="text-[17px] leading-none">{country.flag}</span>
        <span className="text-[12px] font-semibold text-[#0a0e1a]/55 tabular-nums">{country.dial}</span>
        <svg
          width="9" height="9" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          className={`shrink-0 text-[#0a0e1a]/25 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* ── Number input ── */}
      <input
        type="tel"
        value={number}
        onChange={e => setNumber(e.target.value)}
        onBlur={onBlur}
        placeholder="79 123 45 67"
        className={className}
        style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderLeft: 'none' }}
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
                    ? 'rgba(240,160,96,0.12)'
                    : 'transparent',
                }}
                onMouseEnter={e => {
                  if (c.code !== country.code)
                    (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.04)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background =
                    c.code === country.code ? 'rgba(240,160,96,0.12)' : 'transparent';
                }}
              >
                <span className="text-[17px] leading-none">{c.flag}</span>
                <span className="flex-1 text-[13px] text-[#0a0e1a] font-medium">{c.name}</span>
                <span
                  className="text-[11px] tabular-nums px-1.5 py-0.5 rounded-md"
                  style={{
                    color: c.code === country.code ? '#c4743c' : '#b8b2aa',
                    background: c.code === country.code ? 'rgba(240,160,96,0.15)' : 'transparent',
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

const MONO = "'JetBrains Mono', monospace";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = Object.fromEntries(
      (Object.keys(form) as FieldKey[]).map((k) => [k, true])
    ) as Record<FieldKey, boolean>;
    setTouched(allTouched);
    if (!isFormValid) return;
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

  const inputCls = (field: FieldKey, extra = '') => {
    const { err, valid } = fieldState(field);
    /* text-base on mobile (≥16px) prevents iOS Safari from zooming on focus */
    const base = `w-full outline-none rounded-2xl px-4 py-4 sm:py-3.5 text-base sm:text-sm text-[#0a0e1a] placeholder:text-[#0a0e1a]/30 transition-all duration-200 ${extra}`;
    if (err) return `${base} bg-red-50 border border-red-200 focus:border-red-400 focus:shadow-[0_0_0_3px_rgba(248,113,113,0.12)]`;
    if (valid) return `${base} bg-emerald-50/50 border border-emerald-200 focus:border-emerald-400 focus:shadow-[0_0_0_3px_rgba(52,211,153,0.10)]`;
    return `${base} bg-[#f5f3f0] border border-[#f5f3f0] focus:bg-white focus:border-[#e89a78] focus:shadow-[0_0_0_3px_rgba(232,154,120,0.13)]`;
  };

  return (
    <div className="min-h-screen bg-[#06080f] relative overflow-hidden" style={{ fontFamily: MONO }}>
      {/* Background — mesh gradient design */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Base diagonal gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1630] via-[#06080f] to-[#0f0c18]" />

        {/* Warm focal glow — center-top, behind the hero */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-[#e89a78]/[0.11] blur-[160px]" />

        {/* Cool accent — bottom-left */}
        <div className="absolute bottom-0 -left-40 w-[700px] h-[500px] rounded-full bg-[#3b6fd4]/[0.09] blur-[140px]" />

        {/* Secondary warm — right edge */}
        <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full bg-[#e89a78]/[0.07] blur-[120px]" />

        {/* Tight hot-spot glow behind form area */}
        <div className="absolute top-1/2 right-1/4 w-[280px] h-[280px] rounded-full bg-[#f0a060]/[0.08] blur-[80px]" />

        {/* Dot-matrix pattern */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.45) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Edge vignette — darkens corners for depth */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 90% 80% at 50% 40%, transparent 40%, rgba(6,8,15,0.7) 100%)',
          }}
        />

        {/* Infinity mark — large, centered, faint */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[920px] opacity-[0.055] select-none">
          <svg viewBox="21 1 97 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M109.088 8.57212C106.515 5.58012 102.965 3.33773 99.0229 2.31032C97.0446 1.79468 94.9567 1.45887 92.8976 1.60776C91.3139 1.72185 89.7534 2.11502 88.2375 2.54107C84.3481 3.63487 80.6244 5.26107 76.9974 6.95624C73.1175 8.76935 69.3226 10.741 65.5777 12.7881C63.955 13.675 62.3425 14.5787 60.7389 15.4952C58.7805 16.64 56.8227 17.784 54.865 18.9287C54.6951 18.8295 54.5253 18.7302 54.3561 18.6303C52.3682 17.4643 50.3954 16.2809 48.3575 15.1923C44.5284 13.1478 40.4793 10.9898 36.146 10.072C32.1148 9.21861 27.7589 11.2908 25.471 14.3995C22.3083 18.6961 21.9199 24.9211 24.5736 29.5348C26.5827 33.0283 30.6496 35.7534 35.0267 35.3886C37.0194 35.2223 39.0086 34.454 40.8266 33.7121C42.9885 32.8298 45.0839 31.8036 47.1458 30.7317C49.7768 29.3634 52.3422 27.8822 54.8924 26.3785C59.5312 29.0972 64.1796 31.794 68.9493 34.3096C72.6038 36.2368 76.311 38.0848 80.1148 39.738C83.4967 41.2083 86.9881 42.5773 90.6357 43.343C98.5714 45.0098 106.624 40.7139 110.762 34.4585C115.896 26.6994 115.192 15.6751 109.088 8.57212ZM39.569 26.9695C37.8421 27.6624 36.3508 28.2908 34.5287 28.3127C32.5463 28.336 30.7092 27.7036 29.1255 26.5776C28.7069 26.2805 27.9856 25.5586 27.4945 24.916C27.4945 24.9018 27.2616 24.5512 27.241 24.5157C27.1218 24.3088 27.0225 24.0942 26.9108 23.8847C26.9054 23.8744 26.8999 23.8615 26.8944 23.8492C26.9047 23.8802 26.9136 23.906 26.9259 23.9459C26.8485 23.7074 26.5978 23.2833 26.6362 23.0332C26.6636 23.1589 26.691 23.2853 26.719 23.4109C26.6875 23.2517 26.6601 23.0925 26.6375 22.932C26.6307 22.9005 26.6259 22.8792 26.6197 22.8547C26.6149 22.6813 26.5766 22.4177 26.6129 22.2359C26.617 22.2288 26.6225 22.2211 26.6286 22.2069C26.6211 22.3384 26.6136 22.4699 26.6067 22.6014C26.6252 22.4396 26.6478 22.2785 26.6752 22.118C26.6773 22.1032 26.6779 22.0948 26.6793 22.0819C26.6862 22.0632 26.6923 22.0484 26.6999 22.0258C26.7458 21.8937 26.7889 21.7609 26.8321 21.6281C26.8595 21.5695 26.978 21.2672 27.015 21.1931C27.1321 20.9617 27.267 20.738 27.404 20.5163C27.4643 20.437 27.6397 20.1843 27.663 20.1553C27.7623 20.0322 27.8651 19.9104 27.9705 19.7918C28.2671 19.4592 28.5905 19.1395 28.9391 18.8527C28.9823 18.8288 29.3481 18.5588 29.3248 18.5749C29.5262 18.4389 29.7324 18.3106 29.944 18.1894C30.4407 17.9046 30.9647 17.6622 31.5079 17.465C33.095 16.8894 34.8884 16.8443 36.5536 17.269C37.0899 17.4057 38.2818 17.8201 39.0408 18.1127C40.1786 18.551 41.2945 19.0396 42.3966 19.552C44.4647 20.5131 46.4861 21.5624 48.4808 22.6517C45.6244 24.2688 42.6268 25.7429 39.569 26.9695ZM110.23 24.3978C110.199 24.5866 110.182 24.8122 110.128 25.0069C110.1 25.0823 110.074 25.1557 110.062 25.2009C109.936 25.6617 109.791 26.1181 109.626 26.568C109.584 26.6853 109.261 27.4117 109.568 26.7336C109.502 26.878 109.44 27.0236 109.373 27.1674C109.139 27.6682 108.88 28.1581 108.598 28.6363C108.477 28.8406 108.348 29.0392 108.223 29.2409C108.192 29.2899 108.17 29.3273 108.151 29.3589C108.129 29.3879 108.102 29.422 108.067 29.4678C107.779 29.8461 107.493 30.2232 107.182 30.5854C106.526 31.3492 105.801 32.066 105.015 32.7124C104.955 32.7595 104.786 32.8936 104.753 32.9187C104.592 33.0386 104.43 33.1578 104.264 33.2732C103.868 33.551 103.46 33.8146 103.041 34.0621C102.128 34.6023 101.165 35.067 100.166 35.4492C96.9692 36.6738 93.4668 36.9098 90.0946 36.1241C89.6473 36.0196 89.0438 35.852 88.2992 35.6226C87.3875 35.3416 86.4867 35.0309 85.5934 34.7015C83.7631 34.0273 81.9657 33.2758 80.1895 32.4849C76.3247 30.7646 72.5538 28.858 68.8363 26.8728C66.2737 25.5044 63.7454 24.0832 61.2328 22.6388C61.402 22.5402 61.5705 22.4415 61.7397 22.3423C68.9788 18.2062 76.4014 14.1726 84.2323 11.1046C87.3148 9.89667 90.1048 8.78482 93.3579 8.68427C97.3727 8.55988 101.281 9.86251 104.462 12.1552C104.935 12.4961 104.962 12.5219 105.331 12.8429C105.693 13.1574 106.042 13.4855 106.376 13.8265C107.002 14.464 107.576 15.1465 108.095 15.8639C108.135 15.9271 108.332 16.2178 108.351 16.2481C108.477 16.4492 108.599 16.6522 108.717 16.8578C108.953 17.2703 109.172 17.6925 109.372 18.1211C109.402 18.1849 109.516 18.4576 109.555 18.5427C109.606 18.6767 109.658 18.8102 109.705 18.9455C109.858 19.3819 110.103 19.9188 110.165 20.3964C110.17 20.4911 110.177 20.5917 110.188 20.6516C110.217 20.8108 110.243 20.9713 110.267 21.1312C110.303 21.3729 110.326 21.6159 110.359 21.8582C110.361 21.8737 110.363 21.8834 110.364 21.8969C110.364 21.8969 110.364 21.8969 110.364 21.8975C110.374 22.3964 110.374 22.8921 110.364 23.391C110.364 23.391 110.364 23.391 110.364 23.3916C110.362 23.4058 110.361 23.4148 110.359 23.4303C110.316 23.7532 110.283 24.0761 110.23 24.3978Z" fill="#e89a78"/>
            <path d="M48.4809 22.6504L54.8918 26.3804L51.686 28.2451L44.9319 24.5454L48.4809 22.6504Z" fill="#e89a78"/>
          </svg>
        </div>
      </div>

      {/* Hero */}
      <div className="relative max-w-9xl mx-auto px-5 sm:px-12 pt-28 sm:pt-40 pb-8 sm:pb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/80 transition-colors mb-8 group"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform group-hover:-translate-x-0.5">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back to home
        </Link>

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

      {/* Main content */}
      <div className="relative max-w-9xl mx-auto px-5 sm:px-12 pb-20 grid lg:grid-cols-[1fr_1.6fr] gap-8 lg:gap-20 items-start">

        {/* Left — What to expect — shows BELOW form on mobile */}
        <div className="flex flex-col gap-8 order-2 lg:order-1">
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

          <div className="border-t border-white/[0.08]" />

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

        {/* Right — Form or success — shows FIRST on mobile */}
        <div
          className="overflow-hidden order-1 lg:order-2"
          style={{
            background: '#ffffff',
            borderRadius: 28,
            boxShadow:
              '0 0 0 1px rgba(0,0,0,0.06), ' +
              '0 4px 16px rgba(0,0,0,0.06), ' +
              '0 20px 60px rgba(0,0,0,0.12)',
          }}
        >
          {!submitted ? (
            <>
              {/* Sticky progress header */}
              <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-black/[0.06] px-5 sm:px-8 pt-5 sm:pt-7 pb-4">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg sm:text-xl font-bold text-[#0a0e1a]">Book your session</h2>
                  <span className={`text-xs font-semibold tabular-nums transition-colors duration-300 ${completionScore === 100 ? 'text-emerald-500' : 'text-[#e89a78]'}`}>
                    {completionScore}% complete
                  </span>
                </div>
                <div className="h-1.5 bg-[#f0ece8] rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ease-out ${completionScore === 100 ? 'bg-emerald-400' : 'bg-gradient-to-r from-[#f0a060] to-[#d4845c]'}`}
                    style={{ width: `${completionScore}%` }}
                  />
                </div>
              </div>

              {/* Form body */}
              <div className="px-5 sm:px-8 pt-5 pb-7 sm:pb-10">
                <p className="text-sm text-[#0a0e1a]/45 mb-6">We reply within one business day to confirm your slot.</p>

              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

                {/* Row 1: Name + Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="flex items-center gap-1 text-xs font-semibold text-[#0a0e1a]/50 uppercase tracking-wide">
                      Full name <span className="text-[#e89a78] not-uppercase">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        autoComplete="name"
                        placeholder="Jane Smith"
                        value={form.name}
                        onChange={update('name')}
                        onBlur={handleBlur('name')}
                        className={inputCls('name', 'pr-10')}
                      />
                      {fieldState('name').valid && (
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                          <CheckIcon />
                        </span>
                      )}
                      {fieldState('name').err && (
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                          <ErrorIcon />
                        </span>
                      )}
                    </div>
                    {fieldState('name').err && (
                      <p className="text-xs text-red-500 flex items-center gap-1">
                        {fieldState('name').err}
                      </p>
                    )}
                  </div>

                  {/* Company */}
                  <div className="flex flex-col gap-1.5">
                    <label className="flex items-center gap-1.5 text-xs font-semibold text-[#0a0e1a]/50 uppercase tracking-wide">
                      Company
                      <span className="text-[#0a0e1a]/35 normal-case font-normal tracking-normal text-[11px]">optional</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        autoComplete="organization"
                        placeholder="Acme Corp"
                        value={form.company}
                        onChange={update('company')}
                        onBlur={handleBlur('company')}
                        className={inputCls('company', 'pr-10')}
                      />
                      {fieldState('company').valid && (
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                          <CheckIcon />
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Row 2: Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Work email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="flex items-center gap-1 text-xs font-semibold text-[#0a0e1a]/50 uppercase tracking-wide">
                      Work email <span className="text-[#e89a78] not-uppercase">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        autoComplete="email"
                        placeholder="jane@company.com"
                        value={form.email}
                        onChange={update('email')}
                        onBlur={handleBlur('email')}
                        className={inputCls('email', 'pr-10')}
                      />
                      {fieldState('email').valid && (
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                          <CheckIcon />
                        </span>
                      )}
                      {fieldState('email').err && (
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                          <ErrorIcon />
                        </span>
                      )}
                    </div>
                    {fieldState('email').err && (
                      <p className="text-xs text-red-500">{fieldState('email').err}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label className="flex items-center gap-1.5 text-xs font-semibold text-[#0a0e1a]/50 uppercase tracking-wide">
                      Phone
                      <span className="text-[#0a0e1a]/35 normal-case font-normal tracking-normal text-[11px]">optional</span>
                    </label>
                    <PhoneInputField
                      value={form.phone}
                      onChange={(v) => setForm(f => ({ ...f, phone: v }))}
                      onBlur={handleBlur('phone')}
                      className={inputCls('phone')}
                    />
                    {fieldState('phone').err && (
                      <p className="text-xs text-red-500">{fieldState('phone').err}</p>
                    )}
                  </div>
                </div>

                {/* Topic */}
                <div className="flex flex-col gap-1.5">
                  <label className="flex items-center gap-1 text-xs font-semibold text-[#0a0e1a]/50 uppercase tracking-wide">
                    What would you like to discuss? <span className="text-[#e89a78] not-uppercase">*</span>
                  </label>
                  <div className="relative">
                    <select
                      value={form.topic}
                      onChange={update('topic')}
                      onBlur={handleBlur('topic')}
                      className={`${inputCls('topic', 'pr-10')} appearance-none cursor-pointer`}
                    >
                      <option value="" disabled>Select a topic…</option>
                      {topics.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    {/* Show chevron when no validation icon is present */}
                    {!fieldState('topic').valid && !fieldState('topic').err && (
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#0a0e1a]/30">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    )}
                    {fieldState('topic').valid && (
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <CheckIcon />
                      </span>
                    )}
                    {fieldState('topic').err && (
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <ErrorIcon />
                      </span>
                    )}
                  </div>
                  {fieldState('topic').err && (
                    <p className="text-xs text-red-500">{fieldState('topic').err}</p>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-1.5 text-xs font-semibold text-[#0a0e1a]/50 uppercase tracking-wide">
                      Tell us more
                      <span className="text-[#0a0e1a]/35 normal-case font-normal tracking-normal text-[11px]">optional</span>
                    </label>
                    <span
                      className={`text-xs tabular-nums transition-colors ${
                        form.message.length > MSG_MAX
                          ? 'text-red-500 font-semibold'
                          : form.message.length > MSG_MAX * 0.8
                          ? 'text-amber-500'
                          : 'text-[#0a0e1a]/28'
                      }`}
                    >
                      {form.message.length}/{MSG_MAX}
                    </span>
                  </div>
                  <textarea
                    rows={4}
                    placeholder="Brief context about your project, current setup, or key challenges you're facing…"
                    value={form.message}
                    onChange={update('message')}
                    onBlur={handleBlur('message')}
                    className={`${inputCls('message')} resize-none`}
                  />
                  {fieldState('message').err && (
                    <p className="text-xs text-red-500">{fieldState('message').err}</p>
                  )}
                </div>

                {/* Server error */}
                {error && (
                  <div className="flex items-start gap-3 text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0 mt-0.5">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    {error}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full inline-flex items-center justify-center gap-3 px-7 py-4 sm:py-4 rounded-full bg-gradient-to-r from-[#f0a060] to-[#d4845c] hover:from-[#f5aa6c] hover:to-[#dc8e6a] text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-[#e89a78]/20 hover:shadow-[#e89a78]/35 disabled:opacity-60 disabled:pointer-events-none mt-2 min-h-[56px]"
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

                <p className="text-xs text-center text-[#0a0e1a]/35">
                  By submitting you agree to our{' '}
                  <Link href={Constants.PAGES.PRIVACY} className="underline hover:text-[#0a0e1a] transition-colors">
                    Privacy Policy
                  </Link>
                  . No spam, ever.
                </p>
              </form>
              </div>{/* end form body */}
            </>
          ) : (
            /* Success state */
            <div className="flex flex-col items-center text-center px-5 sm:px-8 py-10 gap-6">
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
              <div className="bg-[#f5f3f0] rounded-2xl p-5 w-full text-left flex flex-col gap-2">
                <p className="text-xs font-bold uppercase tracking-widest text-[#0a0e1a]/30 mb-1">Confirmation sent to</p>
                <p className="text-sm font-semibold text-[#0a0e1a]">{form.email}</p>
                <p className="text-sm text-[#0a0e1a]/50">Topic: <span className="font-medium text-[#0a0e1a]">{form.topic}</span></p>
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
