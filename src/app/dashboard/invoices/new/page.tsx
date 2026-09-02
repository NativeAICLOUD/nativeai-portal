'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Link } from 'react-transition-progress/next';
import { toastError, toastSuccess } from '@/app/components/controls/Toast';
import { COMPANY_INFO, formatInvoiceNumber } from '@/lib/invoice-data';

type Client = { _id: string; name: string; company?: string; email: string; currency: string };

type LineItem = { description: string; unitCost: string; qty: string; amount: string; amountTouched: boolean };

const inputCls = 'w-full outline-none rounded-lg px-3.5 py-2.5 text-sm bg-white text-[#1f2328] placeholder:text-[#6e7781] border border-[#d0d7de] hover:border-[#8c959f] focus:border-[#0969da] focus:ring-2 focus:ring-[#0969da] transition-all duration-150';

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function addDays(dateStr: string, days: number) {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

function emptyLineItem(): LineItem {
  return { description: '', unitCost: '1', qty: '1', amount: '', amountTouched: false };
}

function num(v: string) {
  const n = parseFloat(v);
  return isNaN(n) ? 0 : n;
}

const CURRENCY_SYMBOLS: Record<string, string> = { EUR: '€', CHF: 'CHF', USD: '$', GBP: '£' };

function formatMoney(amount: number, currency: string) {
  const symbol = CURRENCY_SYMBOLS[currency] || currency;
  return `${symbol} ${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export default function NewInvoicePage() {
  const { data: session } = useSession();
  const token = (session?.user as any)?.accessToken;
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get('edit');

  const [clients, setClients] = useState<Client[]>([]);
  const [clientId, setClientId] = useState('');
  const [showAddClient, setShowAddClient] = useState(false);
  const [newClientName, setNewClientName] = useState('');
  const [newClientEmail, setNewClientEmail] = useState('');
  const [addingClient, setAddingClient] = useState(false);

  const [issueDate, setIssueDate] = useState(todayStr());
  const [dueDate, setDueDate] = useState(addDays(todayStr(), 5));
  const [invoiceNumber, setInvoiceNumber] = useState(formatInvoiceNumber(new Date()));
  const [numberTouched, setNumberTouched] = useState(false);

  const [lineItems, setLineItems] = useState<LineItem[]>([emptyLineItem()]);
  const [taxRate, setTaxRate] = useState('0');
  const [shipping, setShipping] = useState('0');
  const [currency, setCurrency] = useState('EUR');
  const [exchangeRateNote, setExchangeRateNote] = useState('');
  const [terms, setTerms] = useState(COMPANY_INFO.defaultTerms);

  const [loadingInvoice, setLoadingInvoice] = useState(!!editId);
  const [readOnlyNotice, setReadOnlyNotice] = useState(false);
  const [saving, setSaving] = useState<'draft' | 'send' | null>(null);

  const loadClients = useCallback(async () => {
    if (!token) return;
    try {
      const res = await fetch('/api/admin/clients', { headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) throw new Error();
      setClients(await res.json());
    } catch {
      toastError('Failed to load clients');
    }
  }, [token]);

  useEffect(() => { loadClients(); }, [loadClients]);

  useEffect(() => {
    if (!numberTouched) setInvoiceNumber(formatInvoiceNumber(new Date(issueDate)));
  }, [issueDate, numberTouched]);

  useEffect(() => {
    if (!editId || !token) return;
    (async () => {
      try {
        const res = await fetch(`/api/admin/invoices/${editId}`, { headers: { Authorization: `Bearer ${token}` } });
        if (!res.ok) throw new Error();
        const inv = await res.json();
        if (inv.status !== 'draft') {
          setReadOnlyNotice(true);
          return;
        }
        setClientId(inv.client?._id || '');
        setIssueDate(new Date(inv.issueDate).toISOString().slice(0, 10));
        setDueDate(new Date(inv.dueDate).toISOString().slice(0, 10));
        setInvoiceNumber(inv.invoiceNumber);
        setNumberTouched(true);
        setLineItems(inv.lineItems.map((li: any) => ({
          description: li.description, unitCost: String(li.unitCost), qty: String(li.qty), amount: String(li.amount), amountTouched: true,
        })));
        setTaxRate(String(inv.taxRate));
        setShipping(String(inv.shipping));
        setCurrency(inv.currency);
        setExchangeRateNote(inv.exchangeRateNote || '');
        setTerms(inv.terms);
      } catch {
        toastError('Failed to load invoice');
      } finally {
        setLoadingInvoice(false);
      }
    })();
  }, [editId, token]);

  const selectedClient = clients.find((c) => c._id === clientId);

  useEffect(() => {
    if (selectedClient && !editId) setCurrency(selectedClient.currency || 'EUR');
  }, [selectedClient, editId]);

  const updateLineItem = (index: number, patch: Partial<LineItem>) => {
    setLineItems((items) => items.map((item, i) => {
      if (i !== index) return item;
      const next = { ...item, ...patch };
      if ((patch.unitCost !== undefined || patch.qty !== undefined) && !next.amountTouched) {
        next.amount = String(Math.round(num(next.unitCost) * num(next.qty) * 100) / 100);
      }
      if (patch.amount !== undefined) next.amountTouched = true;
      return next;
    }));
  };

  const addLineItem = () => setLineItems((items) => [...items, emptyLineItem()]);
  const removeLineItem = (index: number) => setLineItems((items) => items.filter((_, i) => i !== index));

  const subtotal = useMemo(() => lineItems.reduce((sum, li) => sum + num(li.amount), 0), [lineItems]);
  const tax = useMemo(() => subtotal * (num(taxRate) / 100), [subtotal, taxRate]);
  const total = useMemo(() => subtotal + tax + num(shipping), [subtotal, tax, shipping]);

  const handleAddClient = async () => {
    if (!newClientName.trim() || !newClientEmail.trim()) {
      toastError('Client name and email are required');
      return;
    }
    setAddingClient(true);
    try {
      const res = await fetch('/api/admin/clients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ name: newClientName.trim(), email: newClientEmail.trim() }),
      });
      if (!res.ok) throw new Error();
      const client = await res.json();
      setClients((c) => [...c, client]);
      setClientId(client._id);
      setShowAddClient(false);
      setNewClientName('');
      setNewClientEmail('');
      toastSuccess('Client added');
    } catch {
      toastError('Failed to add client');
    } finally {
      setAddingClient(false);
    }
  };

  const buildPayload = () => ({
    client: clientId,
    issueDate,
    dueDate,
    invoiceNumber,
    lineItems: lineItems.map((li) => ({
      description: li.description,
      unitCost: num(li.unitCost),
      qty: num(li.qty),
      amount: num(li.amount),
    })),
    taxRate: num(taxRate),
    shipping: num(shipping),
    currency,
    exchangeRateNote: exchangeRateNote.trim() || undefined,
    terms,
  });

  const validate = () => {
    if (!clientId) return 'Select a client';
    if (!issueDate || !dueDate) return 'Issue date and due date are required';
    if (lineItems.length === 0 || lineItems.some((li) => !li.description.trim())) return 'Every line item needs a description';
    return null;
  };

  const handleSave = async (send: boolean) => {
    const error = validate();
    if (error) { toastError(error); return; }
    setSaving(send ? 'send' : 'draft');
    try {
      if (editId) {
        const patchRes = await fetch(`/api/admin/invoices/${editId}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
          body: JSON.stringify(buildPayload()),
        });
        if (!patchRes.ok) throw new Error();
        if (send) {
          const sendRes = await fetch(`/api/admin/invoices/${editId}/send`, { method: 'POST', headers: { Authorization: `Bearer ${token}` } });
          if (!sendRes.ok) throw new Error();
        }
        toastSuccess(send ? 'Invoice sent' : 'Draft saved');
        router.push(`/dashboard/invoices/${editId}`);
      } else {
        const res = await fetch('/api/admin/invoices', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
          body: JSON.stringify({ ...buildPayload(), send }),
        });
        if (!res.ok) {
          const body = await res.json().catch(() => null);
          throw new Error(body?.error || 'failed');
        }
        const invoice = await res.json();
        toastSuccess(send ? 'Invoice sent' : 'Draft saved');
        router.push(`/dashboard/invoices/${invoice._id}`);
      }
    } catch (e: any) {
      toastError(e?.message && e.message !== 'failed' ? e.message : 'Failed to save invoice');
    } finally {
      setSaving(null);
    }
  };

  if (readOnlyNotice) {
    return (
      <div className="flex flex-col items-start gap-4">
        <p className="text-sm text-[#6b7280]">This invoice has already been sent and can no longer be edited.</p>
        <Link href={`/dashboard/invoices/${editId}`} className="text-[13px] font-medium text-[#0969da] hover:underline">
          Back to invoice
        </Link>
      </div>
    );
  }

  if (loadingInvoice) {
    return <p className="text-sm text-[#6b7280]">Loading…</p>;
  }

  return (
    <div className="flex flex-col gap-8 max-w-4xl">
      <div>
        <h1 className="text-2xl font-semibold text-[#111] mb-1">{editId ? 'Edit invoice' : 'New invoice'}</h1>
        <p className="text-sm text-[#6b7280]">Fill in the details below and generate the PDF.</p>
      </div>

      <div className="border border-[#e6e6e6] rounded-2xl p-6 flex flex-col gap-6" style={{ background: '#fff' }}>

        {/* Client */}
        <div className="flex flex-col gap-2">
          <label className="text-[13px] font-semibold text-[#1f2328]">Client *</label>
          <div className="flex gap-2">
            <select className={inputCls} value={clientId} onChange={(e) => setClientId(e.target.value)}>
              <option value="">Select a client…</option>
              {clients.map((c) => (
                <option key={c._id} value={c._id}>{c.name}{c.company ? ` · ${c.company}` : ''}</option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => setShowAddClient((s) => !s)}
              className="shrink-0 px-4 py-2.5 rounded-lg border border-[#d0d7de] text-[13px] font-medium text-[#1f2328] hover:border-[#8c959f] transition-colors"
            >
              + New
            </button>
          </div>
          {showAddClient && (
            <div className="mt-2 p-4 rounded-xl border border-[#e6e6e6]" style={{ background: '#fafafa' }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <input className={inputCls} placeholder="Client name" value={newClientName} onChange={(e) => setNewClientName(e.target.value)} />
                <input className={inputCls} placeholder="Billing email" value={newClientEmail} onChange={(e) => setNewClientEmail(e.target.value)} />
              </div>
              <button
                type="button"
                onClick={handleAddClient}
                disabled={addingClient}
                className="px-4 py-2 rounded-full bg-[#111] hover:opacity-90 text-white font-medium text-[13px] transition-all disabled:opacity-40"
              >
                {addingClient ? 'Adding…' : 'Add client'}
              </button>
            </div>
          )}
        </div>

        {/* Dates + number */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-semibold text-[#1f2328]">Date of issue</label>
            <input type="date" className={inputCls} value={issueDate} onChange={(e) => setIssueDate(e.target.value)} />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-semibold text-[#1f2328]">Due date</label>
            <input type="date" className={inputCls} value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-semibold text-[#1f2328]">Invoice number</label>
            <input
              className={inputCls}
              value={invoiceNumber}
              onChange={(e) => { setInvoiceNumber(e.target.value); setNumberTouched(true); }}
            />
          </div>
        </div>

        {/* Line items */}
        <div className="flex flex-col gap-3">
          <label className="text-[13px] font-semibold text-[#1f2328]">Line items</label>
          <div className="border border-[#e6e6e6] rounded-xl overflow-hidden">
            <div className="grid grid-cols-[1fr_110px_80px_120px_32px] gap-2 px-3 py-2 bg-[#fafafa] border-b border-[#eee] text-[11px] uppercase tracking-wide text-[#9ca3af] font-medium">
              <span>Description</span><span>Unit cost</span><span>Qty</span><span>Amount</span><span></span>
            </div>
            {lineItems.map((li, i) => (
              <div key={i} className="grid grid-cols-[1fr_110px_80px_120px_32px] gap-2 px-3 py-2.5 border-b border-[#f0f0f0] last:border-0 items-center">
                <input
                  className={inputCls}
                  placeholder="Software and Development Services"
                  value={li.description}
                  onChange={(e) => updateLineItem(i, { description: e.target.value })}
                />
                <input type="number" step="0.01" className={inputCls} value={li.unitCost} onChange={(e) => updateLineItem(i, { unitCost: e.target.value })} />
                <input type="number" step="1" className={inputCls} value={li.qty} onChange={(e) => updateLineItem(i, { qty: e.target.value })} />
                <input type="number" step="0.01" className={inputCls} value={li.amount} onChange={(e) => updateLineItem(i, { amount: e.target.value })} />
                <button
                  type="button"
                  onClick={() => removeLineItem(i)}
                  disabled={lineItems.length === 1}
                  className="text-[#cf222e] disabled:opacity-30 disabled:cursor-not-allowed text-lg leading-none"
                  aria-label="Remove line item"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          <button type="button" onClick={addLineItem} className="self-start text-[13px] font-medium text-[#0969da] hover:underline">
            + Add line item
          </button>
        </div>

        {/* Tax / shipping / currency */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-semibold text-[#1f2328]">Tax rate (%)</label>
            <input type="number" step="0.01" className={inputCls} value={taxRate} onChange={(e) => setTaxRate(e.target.value)} />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-semibold text-[#1f2328]">Shipping</label>
            <input type="number" step="0.01" className={inputCls} value={shipping} onChange={(e) => setShipping(e.target.value)} />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-semibold text-[#1f2328]">Currency</label>
            <select className={inputCls} value={currency} onChange={(e) => setCurrency(e.target.value)}>
              <option value="EUR">EUR</option>
              <option value="CHF">CHF</option>
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
        </div>

        {/* Totals preview */}
        <div className="self-end w-full sm:w-72 flex flex-col gap-1.5 text-sm">
          <div className="flex justify-between text-[#6b7280]"><span>Subtotal</span><span>{formatMoney(subtotal, currency)}</span></div>
          <div className="flex justify-between text-[#6b7280]"><span>Tax</span><span>{formatMoney(tax, currency)}</span></div>
          <div className="flex justify-between text-[#6b7280]"><span>Shipping</span><span>{formatMoney(num(shipping), currency)}</span></div>
          <div className="flex justify-between text-[#111] font-semibold pt-1.5 border-t border-[#eee]"><span>Total</span><span>{formatMoney(total, currency)}</span></div>
        </div>

        {/* Exchange note + terms */}
        <div className="flex flex-col gap-2">
          <label className="text-[13px] font-semibold text-[#1f2328]">Exchange rate note <span className="text-[12px] font-normal text-[#6e7781]">(optional)</span></label>
          <textarea rows={2} className={`${inputCls} resize-none`} value={exchangeRateNote} onChange={(e) => setExchangeRateNote(e.target.value)} placeholder="Based on ECB official reference rate: 1 EUR = 0.9173 CHF…" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[13px] font-semibold text-[#1f2328]">Terms</label>
          <textarea rows={2} className={`${inputCls} resize-none`} value={terms} onChange={(e) => setTerms(e.target.value)} />
        </div>

        <div className="flex items-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => handleSave(false)}
            disabled={!!saving}
            className="px-6 py-3 rounded-full border border-[#d0d7de] text-[#1f2328] font-medium text-sm hover:border-[#8c959f] transition-all disabled:opacity-40"
          >
            {saving === 'draft' ? 'Saving…' : 'Save draft'}
          </button>
          <button
            type="button"
            onClick={() => handleSave(true)}
            disabled={!!saving}
            className="px-6 py-3 rounded-full bg-[#111] hover:opacity-90 text-white font-medium text-sm transition-all disabled:opacity-40"
          >
            {saving === 'send' ? 'Sending…' : 'Save & send'}
          </button>
        </div>
      </div>
    </div>
  );
}
