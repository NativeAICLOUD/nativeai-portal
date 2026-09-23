'use client';

import { useCallback, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { toastError, toastSuccess } from '@/app/components/controls/Toast';

type Job = {
  _id: string;
  title: string;
  slug: string;
  department: string;
  location: string;
  workModel: string;
  type: string;
  duration?: string;
  description: string;
  about: string;
  responsibilities: string[];
  requirements: string[];
  preferredRequirements: string[];
  benefits: string[];
  skills: string[];
  order: number;
  active: boolean;
};

type FormState = {
  title: string;
  slug: string;
  department: string;
  location: string;
  workModel: string;
  type: string;
  duration: string;
  description: string;
  about: string;
  responsibilities: string;
  requirements: string;
  preferredRequirements: string;
  benefits: string;
  skills: string;
};

const EMPTY_FORM: FormState = {
  title: '', slug: '', department: '', location: '', workModel: 'Hybrid', type: 'Full-time', duration: '',
  description: '', about: '', responsibilities: '', requirements: '', preferredRequirements: '', benefits: '', skills: '',
};

const inputCls = 'w-full outline-none rounded-lg px-3.5 py-2.5 text-sm bg-white text-[#1f2328] placeholder:text-[#6e7781] border border-[#d0d7de] hover:border-[#8c959f] focus:border-[#0969da] focus:ring-2 focus:ring-[#0969da] transition-all duration-150';
const textareaCls = `${inputCls} resize-none`;

function slugify(s: string) {
  return s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function linesToArray(s: string) {
  return s.split('\n').map((l) => l.trim()).filter(Boolean);
}

function jobToForm(j: Job): FormState {
  return {
    title: j.title,
    slug: j.slug,
    department: j.department,
    location: j.location,
    workModel: j.workModel,
    type: j.type,
    duration: j.duration || '',
    description: j.description,
    about: j.about,
    responsibilities: (j.responsibilities || []).join('\n'),
    requirements: (j.requirements || []).join('\n'),
    preferredRequirements: (j.preferredRequirements || []).join('\n'),
    benefits: (j.benefits || []).join('\n'),
    skills: (j.skills || []).join('\n'),
  };
}

export default function JobsPage() {
  const { data: session } = useSession();
  const token = (session?.user as any)?.accessToken;

  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [seeding, setSeeding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [slugTouched, setSlugTouched] = useState(false);

  const authHeaders = useCallback(
    () => ({ 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }),
    [token]
  );

  const loadJobs = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    try {
      const res = await fetch('/api/admin/jobs', { headers: authHeaders() });
      if (!res.ok) throw new Error();
      setJobs(await res.json());
    } catch {
      toastError('Failed to load jobs');
    } finally {
      setLoading(false);
    }
  }, [token, authHeaders]);

  useEffect(() => { loadJobs(); }, [loadJobs]);

  const update = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
  };

  const updateTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setForm((f) => ({ ...f, title, slug: slugTouched ? f.slug : slugify(title) }));
  };

  const startEdit = (job: Job) => {
    setEditingId(job._id);
    setSlugTouched(true);
    setForm(jobToForm(job));
  };

  const cancelEdit = () => {
    setEditingId(null);
    setSlugTouched(false);
    setForm(EMPTY_FORM);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim() || !form.slug.trim() || !form.department.trim() || !form.location.trim() || !form.description.trim() || !form.about.trim()) {
      toastError('Title, slug, department, location, description, and about are required');
      return;
    }
    setSaving(true);
    try {
      const payload = {
        title: form.title.trim(),
        slug: slugify(form.slug),
        department: form.department.trim(),
        location: form.location.trim(),
        workModel: form.workModel,
        type: form.type,
        duration: form.duration.trim() || undefined,
        description: form.description.trim(),
        about: form.about.trim(),
        responsibilities: linesToArray(form.responsibilities),
        requirements: linesToArray(form.requirements),
        preferredRequirements: linesToArray(form.preferredRequirements),
        benefits: linesToArray(form.benefits),
        skills: linesToArray(form.skills),
      };
      const url = editingId ? `/api/admin/jobs/${editingId}` : '/api/admin/jobs';
      const method = editingId ? 'PATCH' : 'POST';
      const res = await fetch(url, { method, headers: authHeaders(), body: JSON.stringify(payload) });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || 'save failed');
      }
      toastSuccess(editingId ? 'Job updated' : 'Job added');
      cancelEdit();
      loadJobs();
    } catch (err: any) {
      toastError(err?.message || 'Something went wrong saving the job');
    } finally {
      setSaving(false);
    }
  };

  const toggleActive = async (job: Job) => {
    try {
      const res = await fetch(`/api/admin/jobs/${job._id}`, {
        method: 'PATCH',
        headers: authHeaders(),
        body: JSON.stringify({ active: !job.active }),
      });
      if (!res.ok) throw new Error();
      loadJobs();
    } catch {
      toastError('Failed to update job');
    }
  };

  const remove = async (job: Job) => {
    if (!confirm(`Delete "${job.title}"?`)) return;
    try {
      const res = await fetch(`/api/admin/jobs/${job._id}`, { method: 'DELETE', headers: authHeaders() });
      if (!res.ok) throw new Error();
      toastSuccess('Job deleted');
      loadJobs();
    } catch {
      toastError('Failed to delete job');
    }
  };

  const seedDefaults = async () => {
    setSeeding(true);
    try {
      const res = await fetch('/api/admin/jobs/seed', { method: 'POST', headers: authHeaders() });
      if (!res.ok) throw new Error();
      const { imported } = await res.json();
      toastSuccess(`Imported ${imported} job${imported === 1 ? '' : 's'} from jobs.json`);
      loadJobs();
    } catch {
      toastError('Failed to import jobs.json');
    } finally {
      setSeeding(false);
    }
  };

  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="text-2xl font-semibold text-[#111] mb-1">Jobs</h1>
        <p className="text-sm text-[#6b7280]">Manage the open positions shown on /careers.</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="border border-[#e6e6e6] rounded-2xl p-6 flex flex-col gap-6"
        style={{ background: '#fafafa' }}
      >
        <h2 className="text-sm font-semibold text-[#111]">{editingId ? 'Edit job' : 'Add a job'}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#1f2328]">Title *</label>
            <input className={inputCls} value={form.title} onChange={updateTitle} placeholder="Azure Cloud Engineer" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#1f2328]">Slug *</label>
            <input className={inputCls} value={form.slug} onChange={(e) => { setSlugTouched(true); update('slug')(e); }} placeholder="azure-cloud-engineer" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#1f2328]">Department *</label>
            <input className={inputCls} value={form.department} onChange={update('department')} placeholder="Cloud Engineering" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#1f2328]">Location *</label>
            <input className={inputCls} value={form.location} onChange={update('location')} placeholder="Skopje, MK" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#1f2328]">Work model</label>
            <select className={inputCls} value={form.workModel} onChange={update('workModel')}>
              <option value="Hybrid">Hybrid</option>
              <option value="Remote">Remote</option>
              <option value="On-site">On-site</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#1f2328]">Type</label>
            <select className={inputCls} value={form.type} onChange={update('type')}>
              <option value="Full-time">Full-time</option>
              <option value="Contract">Contract</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <label className="text-[13px] font-semibold text-[#1f2328]">Duration <span className="text-[12px] font-normal text-[#6e7781]">(optional, e.g. contract length)</span></label>
            <input className={inputCls} value={form.duration} onChange={update('duration')} placeholder="3–6 months" />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#1f2328]">Card description *</label>
          <textarea rows={2} className={textareaCls} value={form.description} onChange={update('description')} placeholder="Short blurb shown on the job listing card." />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#1f2328]">About the role *</label>
          <textarea rows={3} className={textareaCls} value={form.about} onChange={update('about')} placeholder="Longer intro paragraph shown on the job detail page." />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#1f2328]">Responsibilities <span className="text-[12px] font-normal text-[#6e7781]">(one per line)</span></label>
            <textarea rows={5} className={textareaCls} value={form.responsibilities} onChange={update('responsibilities')} placeholder={'Design and deploy...\nBuild and maintain...'} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#1f2328]">Requirements <span className="text-[12px] font-normal text-[#6e7781]">(one per line)</span></label>
            <textarea rows={5} className={textareaCls} value={form.requirements} onChange={update('requirements')} placeholder={'3+ years of...\nExperience with...'} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#1f2328]">Nice to have <span className="text-[12px] font-normal text-[#6e7781]">(one per line, optional)</span></label>
            <textarea rows={4} className={textareaCls} value={form.preferredRequirements} onChange={update('preferredRequirements')} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#1f2328]">Benefits <span className="text-[12px] font-normal text-[#6e7781]">(one per line)</span></label>
            <textarea rows={4} className={textareaCls} value={form.benefits} onChange={update('benefits')} />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#1f2328]">Skills <span className="text-[12px] font-normal text-[#6e7781]">(one per line, shown as tags on the card)</span></label>
          <textarea rows={3} className={textareaCls} value={form.skills} onChange={update('skills')} placeholder={'Azure\nTerraform\nBicep\nIaC'} />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#111] hover:opacity-90 text-white font-medium text-sm transition-all disabled:opacity-40"
          >
            {saving ? 'Saving…' : editingId ? 'Save changes' : 'Add job'}
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
          <h2 className="text-sm font-semibold text-[#111]">All jobs</h2>
          {!loading && jobs.length === 0 && (
            <button
              onClick={seedDefaults}
              disabled={seeding}
              className="text-[13px] font-medium text-[#0969da] hover:underline disabled:opacity-40"
            >
              {seeding ? 'Importing…' : 'Import from jobs.json'}
            </button>
          )}
        </div>
        {loading ? (
          <p className="text-sm text-[#6b7280]">Loading…</p>
        ) : jobs.length === 0 ? (
          <p className="text-sm text-[#6b7280]">No jobs yet. Add one above, or import the existing jobs.json set.</p>
        ) : (
          <div className="border border-[#e6e6e6] rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#fafafa] border-b border-[#eee] text-left text-[12px] uppercase tracking-wide text-[#9ca3af]">
                  <th className="px-4 py-3 font-medium">Title</th>
                  <th className="px-4 py-3 font-medium">Department</th>
                  <th className="px-4 py-3 font-medium">Location</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((j) => (
                  <tr key={j._id} className="border-b border-[#f0f0f0] last:border-0">
                    <td className={`px-4 py-3 font-medium ${j.active ? 'text-[#111]' : 'text-[#9ca3af]'}`}>{j.title}</td>
                    <td className="px-4 py-3 text-[#6b7280]">{j.department}</td>
                    <td className="px-4 py-3 text-[#6b7280]">{j.location}</td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => toggleActive(j)}
                        className={`text-[12px] font-medium px-2.5 py-1 rounded-full ${j.active ? 'bg-[#dcfce7] text-[#166534]' : 'bg-[#f3f4f6] text-[#6b7280]'}`}
                      >
                        {j.active ? 'Live' : 'Hidden'}
                      </button>
                    </td>
                    <td className="px-4 py-3 text-right whitespace-nowrap">
                      <button onClick={() => startEdit(j)} className="text-[13px] font-medium text-[#0969da] hover:underline mr-4">
                        Edit
                      </button>
                      <button onClick={() => remove(j)} className="text-[13px] font-medium text-[#dc2626] hover:underline">
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
