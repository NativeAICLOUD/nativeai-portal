'use client';

import { useCallback, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { toastError, toastSuccess } from '@/app/components/controls/Toast';

type Client = {
  _id: string;
  name: string;
  company?: string;
  email: string;
  addressLines: string[];
  currency: string;
  notes?: string;
};

type FormState = {
  name: string;
  company: string;
  email: string;
  address: string;
  currency: string;
  notes: string;
};

const EMPTY_FORM: FormState = { name: '', company: '', email: '', address: '', currency: 'EUR', notes: '' };

const inputCls = 'w-full outline-none rounded-lg px-3.5 py-2.5 text-sm bg-white text-[#1f2328] placeholder:text-[#6e7781] border border-[#d0d7de] hover:border-[#8c959f] focus:border-[#0969da] focus:ring-2 focus:ring-[#0969da] transition-all duration-150';

function clientToForm(c: Client): FormState {
  return {
    name: c.name,
    company: c.company || '',
    email: c.email,
    address: (c.addressLines || []).join('\n'),
    currency: c.currency || 'EUR',
    notes: c.notes || '',
  };
}

export default function ClientsPage() {
  const { data: session } = useSession();
  const token = (session?.user as any)?.accessToken;

  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);

  const loadClients = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    try {
      const res = await fetch('/api/admin/clients', { headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) throw new Error();
      setClients(await res.json());
    } catch {
      toastError('Failed to load clients');
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => { loadClients(); }, [loadClients]);

  const update = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
  };

  const startEdit = (client: Client) => {
    setEditingId(client._id);
    setForm(clientToForm(client));
  };

  const cancelEdit = () => {
    setEditingId(null);
    setForm(EMPTY_FORM);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toastError('Name and email are required');
      return;
    }
    setSaving(true);
    try {
      const payload = {
        name: form.name.trim(),
        company: form.company.trim() || undefined,
        email: form.email.trim(),
        addressLines: form.address.split('\n').map((l) => l.trim()).filter(Boolean),
        currency: form.currency,
        notes: form.notes.trim() || undefined,
      };
      const url = editingId ? `/api/admin/clients/${editingId}` : '/api/admin/clients';
      const method = editingId ? 'PATCH' : 'POST';
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      toastSuccess(editingId ? 'Client updated' : 'Client added');
      cancelEdit();
      loadClients();
    } catch {
      toastError('Something went wrong saving the client');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="text-2xl font-semibold text-[#111] mb-1">Clients</h1>
        <p className="text-sm text-[#6b7280]">Manage the clients you invoice.</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="border border-[#e6e6e6] rounded-2xl p-6 flex flex-col gap-4"
        style={{ background: '#fafafa' }}
      >
        <h2 className="text-sm font-semibold text-[#111]">{editingId ? 'Edit client' : 'Add a client'}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#1f2328]">Name *</label>
            <input className={inputCls} value={form.name} onChange={update('name')} placeholder="MÜLLER PAPARIS" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#1f2328]">Company <span className="text-[12px] font-normal text-[#6e7781]">(optional)</span></label>
            <input className={inputCls} value={form.company} onChange={update('company')} placeholder="Company name" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#1f2328]">Billing email *</label>
            <input type="email" className={inputCls} value={form.email} onChange={update('email')} placeholder="billing@client.com" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#1f2328]">Default currency</label>
            <select className={inputCls} value={form.currency} onChange={update('currency')}>
              <option value="EUR">EUR</option>
              <option value="CHF">CHF</option>
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#1f2328]">Address <span className="text-[12px] font-normal text-[#6e7781]">(one line per address line, optional)</span></label>
          <textarea rows={3} className={`${inputCls} resize-none`} value={form.address} onChange={update('address')} placeholder={'Street\nCity, Country'} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#1f2328]">Notes <span className="text-[12px] font-normal text-[#6e7781]">(optional)</span></label>
          <input className={inputCls} value={form.notes} onChange={update('notes')} placeholder="Internal notes" />
        </div>
        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#111] hover:opacity-90 text-white font-medium text-sm transition-all disabled:opacity-40"
          >
            {saving ? 'Saving…' : editingId ? 'Save changes' : 'Add client'}
          </button>
          {editingId && (
            <button type="button" onClick={cancelEdit} className="text-[13px] font-medium text-[#6e7781] hover:text-[#1f2328]">
              Cancel
            </button>
          )}
        </div>
      </form>

      <div>
        <h2 className="text-sm font-semibold text-[#111] mb-4">All clients</h2>
        {loading ? (
          <p className="text-sm text-[#6b7280]">Loading…</p>
        ) : clients.length === 0 ? (
          <p className="text-sm text-[#6b7280]">No clients yet.</p>
        ) : (
          <div className="border border-[#e6e6e6] rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#fafafa] border-b border-[#eee] text-left text-[12px] uppercase tracking-wide text-[#9ca3af]">
                  <th className="px-4 py-3 font-medium">Name</th>
                  <th className="px-4 py-3 font-medium">Email</th>
                  <th className="px-4 py-3 font-medium">Currency</th>
                  <th className="px-4 py-3 font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {clients.map((c) => (
                  <tr key={c._id} className="border-b border-[#f0f0f0] last:border-0">
                    <td className="px-4 py-3 font-medium text-[#111]">{c.name}{c.company ? <span className="text-[#6b7280] font-normal"> · {c.company}</span> : null}</td>
                    <td className="px-4 py-3 text-[#6b7280]">{c.email}</td>
                    <td className="px-4 py-3 text-[#6b7280]">{c.currency}</td>
                    <td className="px-4 py-3 text-right">
                      <button onClick={() => startEdit(c)} className="text-[13px] font-medium text-[#0969da] hover:underline">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
