import fs from 'fs';
import path from 'path';

export type FallbackJob = {
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
  preferredRequirements?: string[];
  benefits: string[];
  skills?: string[];
};

let cache: FallbackJob[] | null = null;

export function getFallbackJobs(): FallbackJob[] {
  if (cache) return cache;
  const filePath = path.join(process.cwd(), 'public', 'jobs.json');
  cache = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  return cache!;
}

export function getFallbackJob(slug: string): FallbackJob | null {
  return getFallbackJobs().find((j) => j.slug === slug) ?? null;
}
