'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

type Step = 'email' | 'code'

export default function LoginPage() {
  const [step, setStep]         = useState<Step>('email')
  const [email, setEmail]       = useState('')
  const [code, setCode]         = useState('')
  const [error, setError]       = useState('')
  const [loading, setLoading]   = useState(false)
  const router = useRouter()

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
    <div className="min-h-screen bg-[#fafafa] flex flex-col items-center justify-center px-4">

      {/* Logo */}
      <div className="mb-8 flex flex-col items-center gap-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#0a0e1a' }}>
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
        </div>
        <span className="text-[15px] font-bold text-[#0a0e1a] tracking-tight">NativeCloud</span>
      </div>

      {/* Card */}
      <div
        className="w-full max-w-[380px] rounded-2xl bg-white px-8 py-8"
        style={{ border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
      >
        {step === 'email' ? (
          <>
            <h1 className="text-[22px] font-bold text-[#0a0e1a] mb-1 text-center">Log in</h1>
            <p className="text-sm text-[#0a0e1a]/45 text-center mb-7">to continue to NativeCloud</p>

            <form onSubmit={sendCode} className="flex flex-col gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#0a0e1a]/60">Email address</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  autoFocus
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-black/[0.09] bg-[#fafafa] text-[#0a0e1a] text-sm placeholder:text-[#0a0e1a]/25 focus:outline-none focus:border-[#0a0e1a]/40 focus:ring-2 focus:ring-[#0a0e1a]/[0.06] transition-all"
                />
              </div>

              {error && <p className="text-xs text-red-500 px-1">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="mt-1 w-full py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ background: '#0a0e1a' }}
              >
                {loading ? 'Sending…' : 'Continue with Email'}
              </button>
            </form>
          </>
        ) : (
          <>
            {/* Check email header */}
            <div className="flex flex-col items-center mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ background: 'rgba(10,14,26,0.06)' }}>
                <svg className="w-5 h-5 text-[#0a0e1a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <h1 className="text-[20px] font-bold text-[#0a0e1a] mb-1">Check your email</h1>
              <p className="text-sm text-[#0a0e1a]/45 text-center">
                We sent a 6-digit code to<br />
                <span className="font-semibold text-[#0a0e1a]/70">{email}</span>
              </p>
            </div>

            <form onSubmit={verifyCode} className="flex flex-col gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#0a0e1a]/60">Verification code</label>
                <input
                  type="text"
                  inputMode="numeric"
                  value={code}
                  onChange={e => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  placeholder="000000"
                  autoFocus
                  autoComplete="one-time-code"
                  className="w-full px-4 py-2.5 rounded-xl border border-black/[0.09] bg-[#fafafa] text-[#0a0e1a] text-sm text-center tracking-[0.3em] font-mono placeholder:tracking-normal placeholder:text-[#0a0e1a]/25 focus:outline-none focus:border-[#0a0e1a]/40 focus:ring-2 focus:ring-[#0a0e1a]/[0.06] transition-all"
                />
              </div>

              {error && <p className="text-xs text-red-500 px-1">{error}</p>}

              <button
                type="submit"
                disabled={loading || code.length !== 6}
                className="mt-1 w-full py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ background: '#0a0e1a' }}
              >
                {loading ? 'Verifying…' : 'Verify code'}
              </button>

              <button
                type="button"
                onClick={() => { setStep('email'); setCode(''); setError(''); }}
                className="text-xs text-[#0a0e1a]/40 hover:text-[#0a0e1a]/70 transition-colors text-center"
              >
                Use a different email
              </button>
            </form>
          </>
        )}
      </div>

      {/* Footer */}
      <p className="mt-5 text-sm text-[#0a0e1a]/40">
        Don&apos;t have an account?{' '}
        <Link href="/sign-up" className="font-semibold text-[#0a0e1a]/70 hover:text-[#0a0e1a] transition-colors">
          Sign up
        </Link>
      </p>

    </div>
  )
}
