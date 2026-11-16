import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogPosts } from '@/lib/blogsPosts';
import { CONTAINER, Eyebrow } from '@/app/components/partials/services/ServiceUI';
import { FOUNDER_PROFILE } from '@/app/components/partials/about/FounderProfileSection';
import { CONTRIBUTION_GROUPS, type Contribution } from '@/data/contributions';
import { Constants } from '@/Constants';

/*
 * Community contributions — one public page listing everything the founder
 * has given to the community: articles (read from the knowledge base) plus
 * the groups maintained by hand in src/data/contributions.ts.
 */

const SITE = 'https://nativeai.cloud';
const TITLE = `Community contributions — ${FOUNDER_PROFILE.name} | NativeCloud`;
const DESCRIPTION =
  `Articles, community leadership, talks and open-source work by ${FOUNDER_PROFILE.name} on Azure, .NET, Microsoft Foundry and agentic AI.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE}${Constants.PAGES.CONTRIBUTIONS}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'profile',
    url: `${SITE}${Constants.PAGES.CONTRIBUTIONS}`,
    images: [{ url: `${SITE}/nativeai.cloud-og.png`, width: 1200, height: 630 }],
  },
};

const MONTH_DATE = new Intl.DateTimeFormat('en-GB', { month: 'short', year: 'numeric', timeZone: 'UTC' });
const FULL_DATE = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });

/** Accepts an ISO date, a year-month or a bare year; returns display text and a sortable number. */
function readDate(raw?: string): { label: string; sort: number } {
  if (!raw) return { label: '', sort: 0 };
  if (/^\d{4}$/.test(raw)) return { label: raw, sort: Date.UTC(Number(raw), 0, 1) };
  if (/^\d{4}-\d{2}$/.test(raw)) {
    const time = Date.parse(`${raw}-01`);
    return Number.isNaN(time) ? { label: raw, sort: 0 } : { label: MONTH_DATE.format(new Date(time)), sort: time };
  }
  const time = Date.parse(raw);
  return Number.isNaN(time) ? { label: raw, sort: 0 } : { label: FULL_DATE.format(new Date(time)), sort: time };
}

function Row({ item, internal = false }: { item: Contribution; internal?: boolean }) {
  const { label } = readDate(item.date);
  const content = (
    <>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 text-[12px] font-medium uppercase tracking-[0.08em] text-[#6B7280]">
        {label && <span>{label}</span>}
        {item.where && <span>{item.where}</span>}
      </div>
      <p className={`m-0 mt-1 text-[17px] font-medium leading-[1.35] text-[#111827] ${item.url ? 'transition-colors duration-200 group-hover:text-[#0066B3]' : ''}`}>
        {item.title}
      </p>
      {item.summary && (
        <p className="m-0 mt-1.5 max-w-[640px] text-[15px] font-normal leading-[1.6] text-[#6B7280]">{item.summary}</p>
      )}
    </>
  );

  if (!item.url) return <div className="py-5">{content}</div>;
  return internal ? (
    <Link href={item.url} className="group block py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111827]/20">{content}</Link>
  ) : (
    <a href={item.url} target="_blank" rel="noopener noreferrer" className="group block py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111827]/20">{content}</a>
  );
}

function Group({ id, label, blurb, items, internal }: { id: string; label: string; blurb: string; items: Contribution[]; internal?: boolean }) {
  return (
    <section aria-labelledby={`${id}-heading`} className="grid grid-cols-1 gap-x-16 gap-y-4 lg:grid-cols-[300px_minmax(0,1fr)]">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <h2 id={`${id}-heading`} className="m-0 text-[24px] font-medium leading-[1.2] tracking-[-0.01em] text-[#111827]">
          {label}
          <span className="ml-2 align-middle text-[14px] font-normal text-[#6B7280]">{items.length}</span>
        </h2>
        <p className="m-0 mt-2 text-[15px] leading-[1.6] text-[#6B7280]">{blurb}</p>
      </div>
      <ul className="m-0 list-none border-t border-[#111827] p-0">
        {items.map((item) => (
          <li key={`${item.title}-${item.date ?? ''}`} className="border-b border-[#E6E6E6]">
            <Row item={item} internal={internal} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function ContributionsPage() {
  const posts = await getBlogPosts();

  const articles: Contribution[] = posts.map((post) => ({
    title: post.title,
    where: 'NativeCloud knowledge base',
    date: post.date,
    url: `${Constants.PAGES.KNOWLEDGE_BASE}/${post.id}`,
  }));

  const groups = CONTRIBUTION_GROUPS
    .filter((group) => group.items.length > 0)
    .map((group) => ({
      ...group,
      items: [...group.items].sort((a, b) => readDate(b.date).sort - readDate(a.date).sort),
    }));

  const contributed = groups.filter((group) => !group.notCounted);
  const attended = groups.filter((group) => group.notCounted);
  const total = articles.length + contributed.reduce((sum, group) => sum + group.items.length, 0);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: FOUNDER_PROFILE.name,
      jobTitle: FOUNDER_PROFILE.role,
      url: `${SITE}${Constants.PAGES.CONTRIBUTIONS}`,
      image: `${SITE}${FOUNDER_PROFILE.portrait}`,
      worksFor: { '@type': 'Organization', name: 'NativeCloud', url: SITE },
    },
  };

  return (
    <div className="font-switzer">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />

      {/* ── Hero ── */}
      <div
        style={{
          background:
            'radial-gradient(circle at 80% 100%, rgba(191, 219, 254, 0.55), transparent 48%), radial-gradient(circle at 100% 70%, rgba(219, 234, 254, 0.5), transparent 43%), #ffffff',
        }}
      >
        <div className={`${CONTAINER} pb-12 pt-32 lg:pt-28`}>
          <div className="mb-6"><Eyebrow>Community · Articles · Talks</Eyebrow></div>
          <h1 className="m-0 max-w-3xl text-[40px] font-medium leading-[1.05] text-[#111] sm:text-[52px] lg:text-[64px]">
            Community contributions
          </h1>

          <div className="mt-8 flex items-center gap-4">
            <Image
              src={FOUNDER_PROFILE.portrait}
              alt={`Portrait of ${FOUNDER_PROFILE.name}`}
              width={128}
              height={128}
              sizes="64px"
              className="h-16 w-16 rounded-2xl object-cover"
            />
            <div>
              <p className="m-0 text-[18px] font-medium leading-[1.3] text-[#111]">{FOUNDER_PROFILE.name}</p>
              <p className="m-0 mt-0.5 text-[15px] leading-[1.4] text-[#6b7280]">{FOUNDER_PROFILE.role}</p>
            </div>
          </div>

          <p className="mt-6 max-w-[600px] text-[17px] font-normal leading-[1.6] text-[#4B5563]">
            What I share with the Azure, .NET and AI community: articles, community leadership, talks and code.
            {' '}{total} contributions listed, newest first.
          </p>
          <Link
            href={Constants.PAGES.ABOUT_US}
            className="group mt-6 inline-flex items-center gap-1.5 text-[15px] font-medium text-[#111] transition-colors hover:text-[#2563EB]"
          >
            About {FOUNDER_PROFILE.name.split(' ')[0]}
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">&rarr;</span>
          </Link>
        </div>

        <hr className="divider-blue m-0 h-1 w-full border-0" />
      </div>

      {/* ── Groups ── */}
      <div className={`${CONTAINER} flex flex-col gap-20 py-16 lg:gap-24 lg:py-24`}>
        {contributed.map((group) => (
          <Group key={group.key} id={group.key} label={group.label} blurb={group.blurb} items={group.items} />
        ))}
        {articles.length > 0 && (
          <Group
            id="articles"
            label="Articles"
            blurb="Guides and field notes published in the NativeCloud knowledge base."
            items={articles}
            internal
          />
        )}
        {attended.map((group) => (
          <Group key={group.key} id={group.key} label={group.label} blurb={group.blurb} items={group.items} />
        ))}
      </div>
    </div>
  );
}
