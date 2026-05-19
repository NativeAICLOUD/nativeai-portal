'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]       = useState('')
  const [loading, setLoading]   = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email || !password) { setError('Please fill in all fields.'); return }
    if (password.length < 6)  { setError('Password must be at least 6 characters.'); return }

    setLoading(true)
    try {
      const res = await signIn('credentials', { email, password, redirect: false })
      if (res?.error === null) {
        router.push('/')
      } else {
        setError('Invalid email or password.')
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
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: '#0a0e1a' }}
        >
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
        <h1 className="text-[22px] font-bold text-[#0a0e1a] mb-1 text-center">Log in</h1>
        <p className="text-sm text-[#0a0e1a]/45 text-center mb-7">to continue to NativeCloud</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-[#0a0e1a]/60">Email address</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              required
              className="w-full px-4 py-2.5 rounded-xl border border-black/[0.09] bg-[#fafafa] text-[#0a0e1a] text-sm placeholder:text-[#0a0e1a]/25 focus:outline-none focus:border-[#0a0e1a]/40 focus:ring-2 focus:ring-[#0a0e1a]/08 transition-all"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-[#0a0e1a]/60">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
              required
              className="w-full px-4 py-2.5 rounded-xl border border-black/[0.09] bg-[#fafafa] text-[#0a0e1a] text-sm placeholder:text-[#0a0e1a]/25 focus:outline-none focus:border-[#0a0e1a]/40 focus:ring-2 focus:ring-[#0a0e1a]/08 transition-all"
            />
          </div>

          {/* Error */}
          {error && (
            <p className="text-xs text-red-500 px-1">{error}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="mt-1 w-full py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ background: '#0a0e1a' }}
          >
            {loading ? 'Signing in…' : 'Continue'}
          </button>

        </form>
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
