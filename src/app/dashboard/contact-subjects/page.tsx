'use client';

import { useCallback, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { toastError, toastSuccess } from '@/app/components/controls/Toast';

type Subject = {
  _id: string;
  label: string;
  order: number;
  active: boolean;
};

const DEFAULT_SUBJECTS = [
  'AI Agents & Intelligent Workflows',
  'Enterprise AI & RAG',
  'Digital Products & Platforms',
  'Cloud-Native Engineering',
  'Automation & Integration',
  'Data Intelligence',
  'Managed AI & Cloud',
  'Other',
];

const inputCls = 'w-full outline-none rounded-lg px-3.5 py-2.5 text-sm bg-white text-[#1f2328] placeholder:text-[#6e7781] border border-[#d0d7de] hover:border-[#8c959f] focus:border-[#0969da] focus:ring-2 focus:ring-[#0969da] transition-all duration-150';

export default function ContactSubjectsPage() {
  const { data: session } = useSession();
  const token = (session?.user as any)?.accessToken;

  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [seeding, setSeeding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [label, setLabel] = useState('');

  const authHeaders = useCallback(
    () => ({ 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }),
    [token]
  );

  const loadSubjects = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    try {
      const res = await fetch('/api/admin/contact-subjects', { headers: authHeaders() });
      if (!res.ok) throw new Error();
      setSubjects(await res.json());
    } catch {
      toastError('Failed to load subjects');
    } finally {
      setLoading(false);
    }
  }, [token, authHeaders]);

  useEffect(() => { loadSubjects(); }, [loadSubjects]);

  const cancelEdit = () => {
    setEditingId(null);
    setLabel('');
  };

  const startEdit = (subject: Subject) => {
    setEditingId(subject._id);
    setLabel(subject.label);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!label.trim()) {
      toastError('Label is required');
      return;
    }
    setSaving(true);
    try {
      const url = editingId ? `/api/admin/contact-subjects/${editingId}` : '/api/admin/contact-subjects';
      const method = editingId ? 'PATCH' : 'POST';
      const res = await fetch(url, {
        method,
        headers: authHeaders(),
        body: JSON.stringify({ label: label.trim() }),
      });
      if (!res.ok) throw new Error();
      toastSuccess(editingId ? 'Subject updated' : 'Subject added');
      cancelEdit();
      loadSubjects();
    } catch {
      toastError('Something went wrong saving the subject');
    } finally {
      setSaving(false);
    }
  };

  const toggleActive = async (subject: Subject) => {
    try {
      const res = await fetch(`/api/admin/contact-subjects/${subject._id}`, {
        method: 'PATCH',
        headers: authHeaders(),
        body: JSON.stringify({ active: !subject.active }),
      });
      if (!res.ok) throw new Error();
      loadSubjects();
    } catch {
      toastError('Failed to update subject');
    }
  };

  const move = async (index: number, direction: -1 | 1) => {
    const target = index + direction;
    if (target < 0 || target >= subjects.length) return;
    const a = subjects[index];
    const b = subjects[target];
    try {
      await Promise.all([
        fetch(`/api/admin/contact-subjects/${a._id}`, { method: 'PATCH', headers: authHeaders(), body: JSON.stringify({ order: b.order }) }),
        fetch(`/api/admin/contact-subjects/${b._id}`, { method: 'PATCH', headers: authHeaders(), body: JSON.stringify({ order: a.order }) }),
      ]);
      loadSubjects();
    } catch {
      toastError('Failed to reorder subjects');
    }
  };

  const remove = async (subject: Subject) => {
    if (!confirm(`Delete "${subject.label}"?`)) return;
    try {
      const res = await fetch(`/api/admin/contact-subjects/${subject._id}`, { method: 'DELETE', headers: authHeaders() });
      if (!res.ok) throw new Error();
      toastSuccess('Subject deleted');
      loadSubjects();
    } catch {
      toastError('Failed to delete subject');
    }
  };

  const seedDefaults = async () => {
    setSeeding(true);
    try {
      for (let i = 0; i < DEFAULT_SUBJECTS.length; i++) {
        await fetch('/api/admin/contact-subjects', {
          method: 'POST',
          headers: authHeaders(),
          body: JSON.stringify({ label: DEFAULT_SUBJECTS[i], order: i }),
        });
      }
      toastSuccess('Default subjects added');
      loadSubjects();
    } catch {
      toastError('Failed to seed defaults');
    } finally {
      setSeeding(false);
    }
  };

  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="text-2xl font-semibold text-[#111] mb-1">Contact Subjects</h1>
        <p className="text-sm text-[#6b7280]">
          Manage the topic options shown in the contact, schedule-call, and engineer forms across the site.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="border border-[#e6e6e6] rounded-2xl p-6 flex flex-col gap-4"
        style={{ background: '#fafafa' }}
      >
        <h2 className="text-sm font-semibold text-[#111]">{editingId ? 'Edit subject' : 'Add a subject'}</h2>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#1f2328]">Label *</label>
          <input className={inputCls} value={label} onChange={(e) => setLabel(e.target.value)} placeholder="e.g. Enterprise AI & RAG" />
        </div>
        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#111] hover:opacity-90 text-white font-medium text-sm transition-all disabled:opacity-40"
          >
            {saving ? 'Saving…' : editingId ? 'Save changes' : 'Add subject'}
          </button>
          {editingId && (
            <button type="button" onClick={cancelEdit} className="text-[13px] font-medium text-[#6e7781] hover:text-[#1f2328]">
              Cancel
            </button>
          )}
        </div>
      </form>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-[#111]">All subjects</h2>
          {!loading && subjects.length === 0 && (
            <button
              onClick={seedDefaults}
              disabled={seeding}
              className="text-[13px] font-medium text-[#0969da] hover:underline disabled:opacity-40"
            >
              {seeding ? 'Adding…' : 'Add default subjects'}
            </button>
          )}
        </div>
        {loading ? (
          <p className="text-sm text-[#6b7280]">Loading…</p>
        ) : subjects.length === 0 ? (
          <p className="text-sm text-[#6b7280]">No subjects yet. Add one above, or use the default set.</p>
        ) : (
          <div className="border border-[#e6e6e6] rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#fafafa] border-b border-[#eee] text-left text-[12px] uppercase tracking-wide text-[#9ca3af]">
                  <th className="px-4 py-3 font-medium w-20">Order</th>
                  <th className="px-4 py-3 font-medium">Label</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((s, i) => (
                  <tr key={s._id} className="border-b border-[#f0f0f0] last:border-0">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5">
                        <button onClick={() => move(i, -1)} disabled={i === 0} className="text-[#6b7280] hover:text-[#111] disabled:opacity-20" title="Move up">↑</button>
                        <button onClick={() => move(i, 1)} disabled={i === subjects.length - 1} className="text-[#6b7280] hover:text-[#111] disabled:opacity-20" title="Move down">↓</button>
                      </div>
                    </td>
                    <td className={`px-4 py-3 font-medium ${s.active ? 'text-[#111]' : 'text-[#9ca3af]'}`}>{s.label}</td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => toggleActive(s)}
                        className={`text-[12px] font-medium px-2.5 py-1 rounded-full ${s.active ? 'bg-[#dcfce7] text-[#166534]' : 'bg-[#f3f4f6] text-[#6b7280]'}`}
                      >
                        {s.active ? 'Active' : 'Hidden'}
                      </button>
                    </td>
                    <td className="px-4 py-3 text-right whitespace-nowrap">
                      <button onClick={() => startEdit(s)} className="text-[13px] font-medium text-[#0969da] hover:underline mr-4">
                        Edit
                      </button>
                      <button onClick={() => remove(s)} className="text-[13px] font-medium text-[#dc2626] hover:underline">
                        Delete
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
