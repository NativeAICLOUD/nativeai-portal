'use client';

import { useEffect, useState } from 'react';

export const DEFAULT_CONTACT_SUBJECTS = [
  'AI Agents & Intelligent Workflows',
  'Enterprise AI & RAG',
  'Digital Products & Platforms',
  'Cloud-Native Engineering',
  'Automation & Integration',
  'Data Intelligence',
  'Managed AI & Cloud',
  'Other',
];

export function useContactSubjects(): string[] {
  const [subjects, setSubjects] = useState<string[]>(DEFAULT_CONTACT_SUBJECTS);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/contact-subjects')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && Array.isArray(data) && data.length > 0) {
          setSubjects(data);
        }
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, []);

  return subjects;
}
