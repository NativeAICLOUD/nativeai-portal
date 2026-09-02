'use client';

import { useCallback, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useParams } from 'next/navigation';
import { Link } from 'react-transition-progress/next';
import { toastError, toastSuccess } from '@/app/components/controls/Toast';

type Invoice = {
  _id: string;
  invoiceNumber: string;
  client: { name: string; company?: string; email: string } | null;
  issueDate: string;
  dueDate: string;
  lineItems: { description: string; unitCost: number; qty: number; amount: number }[];
  subtotal: number;
  taxRate: number;
  tax: number;
  shipping: number;
  total: number;
  currency: string;
  exchangeRateNote?: string;
  terms: string;
  status: 'draft' | 'sent' | 'paid';
  sentAt?: string;
};

const CURRENCY_SYMBOLS: Record<string, string> = { EUR: '€', CHF: 'CHF', USD: '$', GBP: '£' };

function formatMoney(amount: number, currency: string) {
  const symbol = CURRENCY_SYMBOLS[currency] || currency;
  return `${symbol} ${(amount ?? 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export default function InvoiceDetailPage() {
  const { data: session } = useSession();
  const token = (session?.user as any)?.accessToken;
  const params = useParams();
  const id = params?.id as string;

  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    if (!token || !id) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/invoices/${id}`, { headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) throw new Error();
      setInvoice(await res.json());
    } catch {
      toastError('Failed to load invoice');
    } finally {
      setLoading(false);
    }
  }, [token, id]);

  useEffect(() => { load(); }, [load]);

  const downloadPdf = async () => {
    if (!invoice) return;
    setBusy(true);
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
      setBusy(false);
    }
  };

  const resend = async () => {
    if (!invoice) return;
    setBusy(true);
    try {
      const res = await fetch(`/api/admin/invoices/${invoice._id}/send`, { method: 'POST', headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) throw new Error();
      toastSuccess('Invoice resent');
      load();
    } catch {
      toastError('Failed to resend invoice');
    } finally {
      setBusy(false);
    }
  };

  if (loading) return <p className="text-sm text-[#6b7280]">Loading…</p>;
  if (!invoice) return <p className="text-sm text-[#6b7280]">Invoice not found.</p>;

  return (
    <div className="flex flex-col gap-8 max-w-3xl">
      <div className="flex items-start justify-between">
        <div>
          <Link href="/dashboard/invoices" className="text-[13px] font-medium text-[#6b7280] hover:text-[#111] mb-3 inline-block">← Back to invoices</Link>
          <h1 className="text-2xl font-semibold text-[#111]">Invoice {invoice.invoiceNumber}</h1>
          <p className="text-sm text-[#6b7280]">{invoice.client?.name}{invoice.client?.company ? ` · ${invoice.client.company}` : ''}</p>
        </div>
        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide bg-[#eaeef2] text-[#57606a]">
          {invoice.status}
        </span>
      </div>

      <div className="border border-[#e6e6e6] rounded-2xl p-6 flex flex-col gap-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
          <div><p className="text-[11px] uppercase tracking-wide text-[#9ca3af] mb-1">Date of issue</p><p className="text-[#111]">{new Date(invoice.issueDate).toLocaleDateString('en-GB')}</p></div>
          <div><p className="text-[11px] uppercase tracking-wide text-[#9ca3af] mb-1">Due date</p><p className="text-[#111]">{new Date(invoice.dueDate).toLocaleDateString('en-GB')}</p></div>
          <div><p className="text-[11px] uppercase tracking-wide text-[#9ca3af] mb-1">Billed to</p><p className="text-[#111]">{invoice.client?.email}</p></div>
        </div>

        <div className="border border-[#eee] rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#fafafa] border-b border-[#eee] text-left text-[11px] uppercase tracking-wide text-[#9ca3af]">
                <th className="px-4 py-2.5 font-medium">Description</th>
                <th className="px-4 py-2.5 font-medium text-right">Unit cost</th>
                <th className="px-4 py-2.5 font-medium text-right">Qty</th>
                <th className="px-4 py-2.5 font-medium text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {invoice.lineItems.map((li, i) => (
                <tr key={i} className="border-b border-[#f0f0f0] last:border-0">
                  <td className="px-4 py-2.5 text-[#111]">{li.description}</td>
                  <td className="px-4 py-2.5 text-right text-[#6b7280]">{li.unitCost}</td>
                  <td className="px-4 py-2.5 text-right text-[#6b7280]">{li.qty}</td>
                  <td className="px-4 py-2.5 text-right text-[#111] tabular-nums">{formatMoney(li.amount, invoice.currency)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="self-end w-full sm:w-72 flex flex-col gap-1.5 text-sm">
          <div className="flex justify-between text-[#6b7280]"><span>Subtotal</span><span>{formatMoney(invoice.subtotal, invoice.currency)}</span></div>
          <div className="flex justify-between text-[#6b7280]"><span>Tax ({invoice.taxRate}%)</span><span>{formatMoney(invoice.tax, invoice.currency)}</span></div>
          <div className="flex justify-between text-[#6b7280]"><span>Shipping</span><span>{formatMoney(invoice.shipping, invoice.currency)}</span></div>
          <div className="flex justify-between text-[#111] font-semibold pt-1.5 border-t border-[#eee]"><span>Total</span><span>{formatMoney(invoice.total, invoice.currency)}</span></div>
        </div>

        {invoice.exchangeRateNote && (
          <p className="text-[12px] text-[#6b7280] leading-relaxed">{invoice.exchangeRateNote}</p>
        )}
        <p className="text-[13px] text-[#111]">Terms: {invoice.terms}</p>

        <div className="flex items-center gap-3 pt-2 border-t border-[#eee]">
          <button
            onClick={downloadPdf}
            disabled={busy}
            className="px-6 py-3 rounded-full border border-[#d0d7de] text-[#1f2328] font-medium text-sm hover:border-[#8c959f] transition-all disabled:opacity-40"
          >
            Download PDF
          </button>
          {invoice.status === 'draft' ? (
            <Link
              href={`/dashboard/invoices/new?edit=${invoice._id}`}
              className="px-6 py-3 rounded-full bg-[#111] hover:opacity-90 text-white font-medium text-sm transition-all"
            >
              Edit
            </Link>
          ) : (
            <button
              onClick={resend}
              disabled={busy}
              className="px-6 py-3 rounded-full bg-[#111] hover:opacity-90 text-white font-medium text-sm transition-all disabled:opacity-40"
            >
              Resend email
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
