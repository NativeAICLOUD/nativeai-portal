'use client';

import { useCallback, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { Link } from 'react-transition-progress/next';
import { toastError, toastSuccess } from '@/app/components/controls/Toast';

type Invoice = {
  _id: string;
  invoiceNumber: string;
  client: { name: string; company?: string } | null;
  issueDate: string;
  dueDate: string;
  total: number;
  currency: string;
  status: 'draft' | 'sent' | 'paid';
};

const CURRENCY_SYMBOLS: Record<string, string> = { EUR: '€', CHF: 'CHF', USD: '$', GBP: '£' };

function formatMoney(amount: number, currency: string) {
  const symbol = CURRENCY_SYMBOLS[currency] || currency;
  return `${symbol} ${(amount ?? 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function StatusBadge({ status }: { status: Invoice['status'] }) {
  const styles: Record<Invoice['status'], string> = {
    draft: 'bg-[#eaeef2] text-[#57606a]',
    sent: 'bg-[#ddf4ff] text-[#0969da]',
    paid: 'bg-emerald-100 text-emerald-700',
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide ${styles[status]}`}>
      {status}
    </span>
  );
}

export default function InvoicesPage() {
  const { data: session } = useSession();
  const token = (session?.user as any)?.accessToken;

  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState<string | null>(null);

  const loadInvoices = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    try {
      const res = await fetch('/api/admin/invoices', { headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) throw new Error();
      setInvoices(await res.json());
    } catch {
      toastError('Failed to load invoices');
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => { loadInvoices(); }, [loadInvoices]);

  const downloadPdf = async (invoice: Invoice) => {
    setBusyId(invoice._id);
    try {
      const res = await fetch(`/api/admin/invoices/${invoice._id}/pdf`, { headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) throw new Error();
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Invoice-${invoice.invoiceNumber}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      toastError('Failed to download PDF');
    } finally {
      setBusyId(null);
    }
  };

  const resend = async (invoice: Invoice) => {
    setBusyId(invoice._id);
    try {
      const res = await fetch(`/api/admin/invoices/${invoice._id}/send`, { method: 'POST', headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) throw new Error();
      toastSuccess(`Invoice ${invoice.invoiceNumber} resent`);
      loadInvoices();
    } catch {
      toastError('Failed to resend invoice');
    } finally {
      setBusyId(null);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-[#111] mb-1">Invoices</h1>
          <p className="text-sm text-[#6b7280]">History of every invoice you&apos;ve generated.</p>
        </div>
        <Link
          href="/dashboard/invoices/new"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111] hover:opacity-90 text-white font-medium text-sm transition-all"
        >
          New invoice
        </Link>
      </div>

      {loading ? (
        <p className="text-sm text-[#6b7280]">Loading…</p>
      ) : invoices.length === 0 ? (
        <p className="text-sm text-[#6b7280]">No invoices yet.</p>
      ) : (
        <div className="border border-[#e6e6e6] rounded-2xl overflow-hidden overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#fafafa] border-b border-[#eee] text-left text-[12px] uppercase tracking-wide text-[#9ca3af]">
                <th className="px-4 py-3 font-medium">Invoice #</th>
                <th className="px-4 py-3 font-medium">Client</th>
                <th className="px-4 py-3 font-medium">Issue date</th>
                <th className="px-4 py-3 font-medium">Total</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((inv) => (
                <tr key={inv._id} className="border-b border-[#f0f0f0] last:border-0">
                  <td className="px-4 py-3 font-medium text-[#111]">
                    <Link href={`/dashboard/invoices/${inv._id}`} className="hover:underline">{inv.invoiceNumber}</Link>
                  </td>
                  <td className="px-4 py-3 text-[#6b7280]">{inv.client?.name || '—'}</td>
                  <td className="px-4 py-3 text-[#6b7280]">{new Date(inv.issueDate).toLocaleDateString('en-GB')}</td>
                  <td className="px-4 py-3 text-[#111] tabular-nums">{formatMoney(inv.total, inv.currency)}</td>
                  <td className="px-4 py-3"><StatusBadge status={inv.status} /></td>
                  <td className="px-4 py-3 text-right whitespace-nowrap">
                    <button
                      onClick={() => downloadPdf(inv)}
                      disabled={busyId === inv._id}
                      className="text-[13px] font-medium text-[#0969da] hover:underline mr-4 disabled:opacity-40"
                    >
                      Download
                    </button>
                    {inv.status === 'sent' && (
                      <button
                        onClick={() => resend(inv)}
                        disabled={busyId === inv._id}
                        className="text-[13px] font-medium text-[#0969da] hover:underline disabled:opacity-40"
                      >
                        Resend
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
