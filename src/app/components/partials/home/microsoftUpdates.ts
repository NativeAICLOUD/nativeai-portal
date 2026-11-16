/*
 * Latest news straight from Microsoft's public RSS feeds.
 * Fetched on the server and cached by Next for REVALIDATE_SECONDS, so the
 * homepage stays static and refreshes itself in the background.
 */

// ── Edit this list to add / remove Microsoft sources ──
export const MICROSOFT_FEEDS = [
  {
    key: 'azure-updates',
    label: 'Azure updates',
    blurb: 'Service launches, previews and retirements',
    url: 'https://www.microsoft.com/releasecommunications/api/v2/azure/rss',
    more: 'https://azure.microsoft.com/updates',
  },
  {
    key: 'azure-blog',
    label: 'Azure Blog',
    blurb: 'Announcements and strategy',
    url: 'https://azure.microsoft.com/en-us/blog/feed/',
    more: 'https://azure.microsoft.com/en-us/blog/',
  },
  {
    key: 'foundry',
    label: 'Microsoft Foundry',
    blurb: 'Models, agents and AI tooling',
    url: 'https://devblogs.microsoft.com/foundry/feed/',
    more: 'https://devblogs.microsoft.com/foundry/',
  },
] as const;

const REVALIDATE_SECONDS = 60 * 60; // refresh hourly
const ITEMS_PER_FEED = 4;
const FETCH_TIMEOUT_MS = 8000;

export type MicrosoftUpdate = {
  title: string;
  link: string;
  /** ISO date, or null when the feed gave no parseable date. */
  date: string | null;
};

export type MicrosoftFeed = {
  key: string;
  label: string;
  blurb: string;
  more: string;
  items: MicrosoftUpdate[];
};

const ENTITIES: Record<string, string> = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ',
};

function decode(raw: string): string {
  return raw
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)))
    .replace(/&([a-z]+);/gi, (m, name) => ENTITIES[name.toLowerCase()] ?? m)
    .replace(/\s+/g, ' ')
    .trim();
}

function tag(block: string, name: string): string {
  const m = block.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`, 'i'));
  return m ? decode(m[1]) : '';
}

/** Only ever link out to Microsoft-owned https pages, whatever the feed says. */
function safeLink(raw: string): string | null {
  try {
    const url = new URL(raw);
    if (url.protocol !== 'https:') return null;
    const host = url.hostname.toLowerCase();
    return host === 'microsoft.com' || host.endsWith('.microsoft.com') ? url.toString() : null;
  } catch {
    return null;
  }
}

function parseItems(xml: string): MicrosoftUpdate[] {
  const items: MicrosoftUpdate[] = [];
  for (const [, block] of xml.matchAll(/<item\b[^>]*>([\s\S]*?)<\/item>/gi)) {
    const title = tag(block, 'title');
    const link = safeLink(tag(block, 'link'));
    if (!title || !link) continue;
    const time = Date.parse(tag(block, 'pubDate'));
    items.push({ title, link, date: Number.isNaN(time) ? null : new Date(time).toISOString() });
    if (items.length === ITEMS_PER_FEED) break;
  }
  return items;
}

async function fetchFeed(url: string): Promise<MicrosoftUpdate[]> {
  try {
    const res = await fetch(url, {
      next: { revalidate: REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
      headers: { Accept: 'application/rss+xml, application/xml;q=0.9, */*;q=0.8' },
    });
    if (!res.ok) return [];
    return parseItems(await res.text());
  } catch {
    // A feed being down must never break the homepage — that column just disappears.
    return [];
  }
}

/** Feeds that returned at least one item, in the order configured above. */
export async function getMicrosoftUpdates(): Promise<MicrosoftFeed[]> {
  const results = await Promise.all(MICROSOFT_FEEDS.map((f) => fetchFeed(f.url)));
  return MICROSOFT_FEEDS.map(({ key, label, blurb, more }, i) => ({ key, label, blurb, more, items: results[i] }))
    .filter((feed) => feed.items.length > 0);
}
