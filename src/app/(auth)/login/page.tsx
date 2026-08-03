'use client'

import { useState, useEffect } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Logo from '@/app/components/ui/Logo'

type Step = 'email' | 'code'

export default function LoginPage() {
  const [step, setStep]           = useState<Step>('email')
  const [email, setEmail]         = useState('')
  const [code, setCode]           = useState('')
  const [error, setError]         = useState('')
  const [loading, setLoading]     = useState(false)
  const [lastUsed, setLastUsed]   = useState(false)
  const [lastEmail, setLastEmail] = useState('')
  const router = useRouter()

  useEffect(() => {
    const method = localStorage.getItem('nc_last_method')
    const saved  = localStorage.getItem('nc_last_email') || ''
    setLastUsed(method === 'email' && !!saved)
    setLastEmail(saved)
  }, [])

  const sendCode = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!email) { setError('Please enter your email.'); return }
    setLoading(true)
    try {
      const res = await fetch('/api/auth/otp/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error || 'Failed to send code.'); return }
      setStep('code')
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const verifyCode = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (code.length !== 6) { setError('Enter the 6-digit code from your email.'); return }
    setLoading(true)
    try {
      const res = await signIn('otp', { email, code, redirect: false })
      if (res?.error === null) {
        localStorage.setItem('nc_last_method', 'email')
        localStorage.setItem('nc_last_email', email)
        router.push('/')
      } else {
        setError('Invalid or expired code. Please try again.')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#000', fontFamily: "'Geist', 'Inter', -apple-system, sans-serif" }}>

      {/* Auth header */}
      <header
        className="flex items-center justify-between px-5 sm:px-8 h-[72px] shrink-0"
        style={{ borderBottom: '1px solid #1a1a1a' }}
      >
        <div
          className="shrink-0 px-3 py-1.5 rounded-xl"
          style={{ background: 'linear-gradient(135deg, rgba(232,154,120,0.18) 0%, rgba(232,154,120,0.06) 60%, transparent 100%)' }}
        >
          <Logo isInvert />
        </div>
        <Link
          href="/sign-up"
          className="text-[13px] font-medium transition-colors px-3 py-1.5 rounded-lg"
          style={{ color: '#666', letterSpacing: '-0.01em' }}
          onMouseEnter={e => { e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.color = '#666'; }}
        >
          Sign up
        </Link>
      </header>

      {/* Form area */}
      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full" style={{ maxWidth: 320 }}>

          {step === 'email' ? (
            <>
              <h1
                className="mb-8 font-semibold text-white"
                style={{ fontSize: 24, letterSpacing: '-0.03em' }}
              >
                Log in
              </h1>

              <form onSubmit={sendCode} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>

                {lastUsed && lastEmail && (
                  <button
                    type="button"
                    onClick={() => setEmail(lastEmail)}
                    className="w-full flex items-center justify-between transition-colors"
                    style={{
                      background: '#0a0a0a',
                      border: '1px solid #2a2a2a',
                      borderRadius: 8,
                      padding: '11px 14px',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#444'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#2a2a2a'; }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
                      <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#1a1a1a', border: '1px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                        </svg>
                      </div>
                      <span style={{ fontSize: 13, color: '#888', letterSpacing: '-0.01em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{lastEmail}</span>
                    </div>
                    <span style={{ fontSize: 10, fontWeight: 600, background: '#0070f3', color: '#fff', borderRadius: 99, padding: '2px 7px', letterSpacing: '0.02em', flexShrink: 0, marginLeft: 8 }}>
                      Last Used
                    </span>
                  </button>
                )}

                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Email Address"
                  autoComplete="email"
                  autoFocus
                  required
                  style={{
                    width: '100%',
                    background: '#0a0a0a',
                    border: '1px solid #2a2a2a',
                    borderRadius: 8,
                    padding: '12px 14px',
                    fontSize: 14,
                    color: '#fff',
                    letterSpacing: '-0.01em',
                    outline: 'none',
                    transition: 'border-color 0.15s',
                    boxSizing: 'border-box',
                  }}
                  onFocus={e => { e.currentTarget.style.borderColor = '#fff'; }}
                  onBlur={e => { e.currentTarget.style.borderColor = '#2a2a2a'; }}
                  className="placeholder-[#666]"
                />

                {error && (
                  <p style={{ fontSize: 13, color: '#f87171', margin: 0, letterSpacing: '-0.01em' }}>{error}</p>
                )}

                <div className="relative">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-lg font-semibold text-black disabled:cursor-not-allowed transition-colors"
                    style={{
                      background: loading ? '#e0e0e0' : '#fafafa',
                      padding: '12px 14px',
                      fontSize: 14,
                      letterSpacing: '-0.01em',
                    }}
                    onMouseEnter={e => { if (!loading) (e.currentTarget as HTMLButtonElement).style.background = '#e6e6e6'; }}
                    onMouseLeave={e => { if (!loading) (e.currentTarget as HTMLButtonElement).style.background = '#fafafa'; }}
                  >
                    {loading ? 'Sending…' : 'Continue with Email'}
                  </button>
                  {lastUsed && (
                    <span className="absolute -top-2 right-2.5 pointer-events-none rounded-full bg-[#0070f3] px-2 py-0.5 text-[10px] font-semibold text-white" style={{ letterSpacing: '0.02em' }}>
                      Last Used
                    </span>
                  )}
                </div>
              </form>
            </>
          ) : (
            <>
              <div style={{ marginBottom: 32 }}>
                <h1
                  className="font-semibold text-white"
                  style={{ fontSize: 24, letterSpacing: '-0.03em', marginBottom: 8 }}
                >
                  Check your email
                </h1>
                <p style={{ fontSize: 14, color: '#666', letterSpacing: '-0.01em', lineHeight: 1.5, margin: 0 }}>
                  We sent a code to{' '}
                  <span style={{ color: '#999' }}>{email}</span>
                </p>
              </div>

              <form onSubmit={verifyCode} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <input
                  type="text"
                  inputMode="numeric"
                  value={code}
                  onChange={e => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  placeholder="000000"
                  autoFocus
                  autoComplete="one-time-code"
                  style={{
                    width: '100%',
                    background: '#0a0a0a',
                    border: '1px solid #2a2a2a',
                    borderRadius: 8,
                    padding: '12px 14px',
                    fontSize: 20,
                    color: '#fff',
                    letterSpacing: '0.35em',
                    textAlign: 'center',
                    fontFamily: 'monospace',
                    outline: 'none',
                    transition: 'border-color 0.15s',
                    boxSizing: 'border-box',
                  }}
                  onFocus={e => { e.currentTarget.style.borderColor = '#fff'; }}
                  onBlur={e => { e.currentTarget.style.borderColor = '#2a2a2a'; }}
                  className="placeholder-[#333]"
                />

                {error && (
                  <p style={{ fontSize: 13, color: '#f87171', margin: 0, letterSpacing: '-0.01em' }}>{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading || code.length !== 6}
                  style={{
                    width: '100%',
                    background: loading || code.length !== 6 ? '#1a1a1a' : '#fafafa',
                    color: loading || code.length !== 6 ? '#444' : '#000',
                    border: '1px solid transparent',
                    borderRadius: 8,
                    padding: '12px 14px',
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: '-0.01em',
                    cursor: loading || code.length !== 6 ? 'not-allowed' : 'pointer',
                    transition: 'background 0.15s, color 0.15s',
                  }}
                  onMouseEnter={e => { if (code.length === 6 && !loading) (e.currentTarget as HTMLButtonElement).style.background = '#e6e6e6'; }}
                  onMouseLeave={e => { if (code.length === 6 && !loading) (e.currentTarget as HTMLButtonElement).style.background = '#fafafa'; }}
                >
                  {loading ? 'Verifying…' : 'Verify code'}
                </button>

                <button
                  type="button"
                  onClick={() => { setStep('email'); setCode(''); setError(''); }}
                  style={{ fontSize: 13, color: '#444', background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0', letterSpacing: '-0.01em', transition: 'color 0.15s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = '#fff'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = '#444'; }}
                >
                  Use a different email
                </button>
              </form>
            </>
          )}

          <p style={{ marginTop: 28, fontSize: 13, color: '#444', letterSpacing: '-0.01em' }}>
            Don&apos;t have an account?{' '}
            <Link
              href="/sign-up"
              style={{ color: '#666', fontWeight: 500, textDecoration: 'none', transition: 'color 0.15s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#666'; }}
            >
              Sign up
            </Link>
          </p>

        </div>
      </div>
    </div>
  )
}
