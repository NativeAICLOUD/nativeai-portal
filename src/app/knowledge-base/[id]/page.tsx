import { getBlogPosts, getSinglePost } from '@/lib/blogsPosts';
import { shuffle, take } from 'lodash';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleClient from '@/app/components/partials/knowledge-base/ArticleClient';
import richArticles from '@/data/richArticles';

type PageProps = { params: { id: string } };

// Prerender every article at build time so production requests are served
// statically instead of rendering on-demand in a serverless function.
export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ id: String(post.id) }));
}

function parseArticleId(raw: unknown): number | undefined {
  if (typeof raw !== 'string' || !/^\d+$/.test(raw)) return undefined;
  return Number(raw);
}

function resolveOgImage(imagePath: string): string {
  const base = 'https://nativeai.cloud';
  // Already absolute
  if (imagePath.startsWith('http')) return imagePath;
  // Encode spaces and special chars in the path, preserving slashes
  const encoded = imagePath.split('/').map(encodeURIComponent).join('/');
  return `${base}${encoded}`;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const id = parseArticleId(params?.id);
  const post = id !== undefined ? await getSinglePost(id) : undefined;
  if (!post) return {};
  const desc = post.desc.slice(0, 160);
  const imageUrl = resolveOgImage(post.image);
  const articleUrl = `https://nativeai.cloud/knowledge-base/${post.id}`;
  const publishedTime = post.date ? new Date(post.date).toISOString() : undefined;
  return {
    title: `${post.title} | NativeCloud`,
    description: desc,
    openGraph: {
      title: post.title,
      description: desc,
      type: 'article',
      url: articleUrl,
      siteName: 'NativeCloud',
      locale: 'en_US',
      images: [{ url: imageUrl, width: 1200, height: 630, alt: post.title }],
      ...(publishedTime && {
        publishedTime,
        authors: ['https://nativeai.cloud/about-us'],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: desc,
      images: [imageUrl],
      creator: '@nativecloud_',
      site: '@nativecloud_',
    },
  };
}

const SECTION_HEADINGS: Record<number, string[]> = {
  1: ['Introduction', 'Setting Up Azure OpenAI', 'Making Your First API Call', 'Production Tips'],
  2: ['Overview', 'Migration Strategies', 'Step-by-Step Walkthrough', 'Post-Migration Validation'],
  3: ['Introduction', 'Azure DevOps vs GitHub Actions', 'Building the Pipeline', 'Secrets & Rollback Strategies'],
  4: ['From Monolith to Microservices', 'Architecture Design', 'Distributed Tracing & Messaging', 'Avoiding Common Pitfalls'],
  5: ['Introduction', 'Cluster Configuration', 'Workload Identity & Secrets', 'High Availability & Autoscaling'],
  6: ['Why Cloud Costs Spiral', 'Right-Sizing & Reserved Instances', 'Auto-Shutdown & Serverless', 'Cost Alerts & Budgets'],
  7: ['What is RAG?', 'Indexing Your Data', 'Retrieval & Prompt Assembly', 'Evaluation & Quality'],
  8: ['The Zero Trust Mindset', 'Identity & Access Controls', 'Network Hardening', 'Security Monitoring'],
  10: ['Claude Opus 5 Arrives in Microsoft Foundry', 'Built for Complex Workflows', 'Agentic AI, Natively', 'Deploying Claude Opus 5 in Foundry', 'What This Means for Developers'],
};

const CATEGORIES: Record<number, string> = {
  1: 'Azure AI',
  2: 'Migration',
  3: 'DevOps',
  4: 'Cloud Native',
  5: 'Kubernetes',
  6: 'Cloud Costs',
  7: 'AI & RAG',
  8: 'Security',
  9: 'Infrastructure as Code',
  10: 'Azure AI',
};

function buildSections(desc: string, id: number) {
  const sentences = desc.match(/[^.!?]+[.!?]+\s*/g) ?? [desc];
  const headings = SECTION_HEADINGS[id] ?? ['Overview', 'Core Concepts', 'Implementation', 'Key Takeaways'];
  const count = headings.length;
  const chunkSize = Math.ceil(sentences.length / count);

  return headings.map((heading, i) => ({
    id: heading.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    heading,
    content: sentences.slice(i * chunkSize, (i + 1) * chunkSize).join('').trim(),
  })).filter((s) => s.content.length > 0);
}

const KnowledgeBaseDetailPage = async ({ params }: PageProps) => {
  const id = parseArticleId(params?.id);
  if (id === undefined) {
    console.error(`[knowledge-base] Invalid article id in URL: "${params?.id}"`);
    notFound();
  }

  const post = await getSinglePost(id);
  if (!post) {
    console.error(`[knowledge-base] No article found for id ${id}`);
    notFound();
  }

  const posts = await getBlogPosts();
  const related = take(shuffle(posts.filter((p) => p.id !== post.id)), 3);

  const richSections = richArticles[post.id];
  const sections = richSections ?? buildSections(post.desc, post.id);
  const wordCount = richSections
    ? richSections.flatMap(s => s.blocks).filter(b => b.type === 'paragraph' || b.type === 'heading3').map(b => ('text' in b ? b.text : '')).join(' ').split(' ').length
    : post.desc.split(' ').length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));
  const publishDate = post.date
    ? new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    : '';
  const category = CATEGORIES[post.id] ?? 'Azure & Cloud';

  return (
    <ArticleClient
      post={post}
      sections={sections}
      related={related}
      readingTime={readingTime}
      publishDate={publishDate}
      category={category}
    />
  );
};

export default KnowledgeBaseDetailPage;
