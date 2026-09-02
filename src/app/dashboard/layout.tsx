'use client';

import { useSession, signOut } from 'next-auth/react';
import { Link } from 'react-transition-progress/next';
import { usePathname } from 'next/navigation';
import { isAdminSession } from '@/lib/admin';

const NAV = [
  { href: '/dashboard/invoices', label: 'Invoices' },
  { href: '/dashboard/clients', label: 'Clients' },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const pathname = usePathname();

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-sm text-[#6b7280]">Loading…</p>
      </div>
    );
  }

  const admin = isAdminSession(session?.user?.email);

  if (status === 'unauthenticated' || !admin) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white gap-4 px-5 text-center">
        <h1 className="text-2xl font-bold text-[#111]">Access Denied</h1>
        <p className="text-sm text-[#6b7280] max-w-sm">
          This dashboard is restricted. Sign in with the account authorized to manage invoices.
        </p>
        <Link href="/login" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111] hover:opacity-90 text-white font-medium text-sm transition-all">
          Go to login
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-switzer">
      <div className="border-b border-[#eee] bg-[#fafafa]">
        <div className="max-w-6xl mx-auto px-5 sm:px-12 flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <span className="text-sm font-semibold text-[#111] tracking-tight">Invoice Dashboard</span>
            <nav className="flex items-center gap-1">
              {NAV.map((item) => {
                const active = pathname?.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 rounded-full text-[13px] font-medium transition-colors ${
                      active ? 'bg-[#111] text-white' : 'text-[#6b7280] hover:text-[#111]'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
          <button
            type="button"
            onClick={() => signOut({ callbackUrl: '/login' })}
            className="text-[13px] font-medium text-[#6b7280] hover:text-[#111] transition-colors"
          >
            Sign out
          </button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-5 sm:px-12 py-10">
        {children}
      </div>
    </div>
  );
}
