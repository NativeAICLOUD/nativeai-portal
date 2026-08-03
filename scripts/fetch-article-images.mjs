/**
 * Fetches cover images from Unsplash for each Knowledge Base article.
 * Downloads them into public/img/ and prints a summary of what was saved.
 *
 * Usage:
 *   UNSPLASH_ACCESS_KEY=your_key node scripts/fetch-article-images.mjs
 *
 * Optional flags:
 *   --dry-run   Print results without downloading files
 *   --force     Re-download even if the output file already exists
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.resolve(__dirname, '../public/img');
const DRY_RUN = process.argv.includes('--dry-run');
const FORCE = process.argv.includes('--force');

const ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
if (!ACCESS_KEY) {
  console.error('Error: set UNSPLASH_ACCESS_KEY environment variable.');
  console.error('  Get a free key at https://unsplash.com/developers');
  process.exit(1);
}

// ─── Article definitions ────────────────────────────────────────────────────

const articles = [
  {
    id: 1,
    slug: 'azure-openai',
    outputFile: 'cover-openai.jpg',
    queries: ['neural network abstract', 'AI language model visualization', 'glowing brain circuit'],
  },
  {
    id: 2,
    slug: 'azure-migration',
    outputFile: 'cover-migration.jpg',
    queries: ['data center migration', 'cloud server room blue', 'server racks blue light'],
  },
  {
    id: 3,
    slug: 'cicd-pipelines',
    outputFile: 'cover-cicd.jpg',
    queries: ['software deployment pipeline', 'code terminal dark screen', 'developer workflow automation'],
  },
  {
    id: 4,
    slug: 'microservices',
    outputFile: 'cover-microservices.jpg',
    queries: ['distributed network nodes', 'hexagon grid technology', 'microchip architecture abstract'],
  },
  {
    id: 5,
    slug: 'kubernetes-aks',
    outputFile: 'cover-kubernetes.jpg',
    queries: ['container ship overhead', 'orchestration logistics aerial', 'server cluster overhead'],
  },
  {
    id: 6,
    slug: 'cost-optimisation',
    outputFile: 'cover-cost.jpg',
    queries: ['cloud cost savings', 'financial graph downward trend', 'server efficiency green'],
  },
  {
    id: 7,
    slug: 'rag-pipelines',
    outputFile: 'cover-rag.jpg',
    queries: ['search database retrieval', 'document indexing AI', 'data pipeline visualization'],
  },
  {
    id: 8,
    slug: 'zero-trust-security',
    outputFile: 'cover-security.jpg',
    queries: ['cybersecurity lock digital', 'firewall network protection', 'zero trust padlock abstract'],
  },
  {
    id: 9,
    slug: 'infrastructure-as-code',
    outputFile: 'cover-iac.jpg',
    queries: ['code infrastructure blueprint', 'DevOps terminal green', 'cloud architecture diagram'],
  },
];

// ─── Gradient fallback (SVG data URI written as a .svg file) ────────────────

const GRADIENTS = [
  ['#667eea', '#764ba2'],
  ['#f093fb', '#f5576c'],
  ['#4facfe', '#00f2fe'],
  ['#43e97b', '#38f9d7'],
  ['#fa709a', '#fee140'],
  ['#a18cd1', '#fbc2eb'],
  ['#fccb90', '#d57eeb'],
  ['#e0c3fc', '#8ec5fc'],
  ['#f77062', '#fe5196'],
];

function buildGradientSvg(id, title) {
  const [from, to] = GRADIENTS[(id - 1) % GRADIENTS.length];
  const label = title.replace(/&/g, '&amp;').slice(0, 40);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${from}"/>
      <stop offset="100%" style="stop-color:${to}"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <text x="600" y="315" font-family="sans-serif" font-size="36"
        font-weight="bold" fill="white" text-anchor="middle"
        dominant-baseline="middle">${label}</text>
</svg>`;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'Accept-Version': 'v1', Authorization: `Client-ID ${ACCESS_KEY}` } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return resolve(get(res.headers.location));
      }
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => resolve({ statusCode: res.statusCode, body }));
      res.on('error', reject);
    }).on('error', reject);
  });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlinkSync(dest);
        return resolve(download(res.headers.location, dest));
      }
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function searchUnsplash(query) {
  const encoded = encodeURIComponent(query);
  const url = `https://api.unsplash.com/search/photos?query=${encoded}&orientation=landscape&per_page=5&order_by=relevant`;
  const { statusCode, body } = await get(url);
  if (statusCode !== 200) return null;
  const data = JSON.parse(body);
  return data.results?.[0] ?? null;
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function processArticle(article) {
  const destPath = path.join(OUTPUT_DIR, article.outputFile);

  if (!FORCE && fs.existsSync(destPath)) {
    console.log(`  [skip]     ${article.outputFile} — already exists (use --force to overwrite)`);
    return { article, status: 'skipped' };
  }

  // Try each query in order; stop at first hit
  let photo = null;
  let usedQuery = null;
  for (const query of article.queries) {
    photo = await searchUnsplash(query);
    if (photo) { usedQuery = query; break; }
  }

  if (!photo) {
    // Write gradient SVG fallback
    const fallbackPath = path.join(OUTPUT_DIR, article.outputFile.replace('.jpg', '-fallback.svg'));
    const svg = buildGradientSvg(article.id, article.slug);
    if (!DRY_RUN) fs.writeFileSync(fallbackPath, svg, 'utf8');
    console.log(`  [fallback] ${article.outputFile.replace('.jpg', '-fallback.svg')} — no Unsplash result for any query`);
    return { article, status: 'fallback', path: fallbackPath };
  }

  const imageUrl = photo.urls.regular; // ~1080px wide
  const credit = `${photo.user.name} on Unsplash (${photo.links.html})`;

  if (DRY_RUN) {
    console.log(`  [dry-run]  ${article.outputFile}`);
    console.log(`             query: "${usedQuery}"`);
    console.log(`             url:   ${imageUrl}`);
    console.log(`             by:    ${credit}`);
    return { article, status: 'dry-run', url: imageUrl, credit };
  }

  await download(imageUrl, destPath);
  console.log(`  [saved]    ${article.outputFile}`);
  console.log(`             query: "${usedQuery}"`);
  console.log(`             credit: ${credit}`);
  return { article, status: 'saved', path: destPath, credit };
}

async function main() {
  console.log(`\nFetching article cover images from Unsplash${DRY_RUN ? ' (dry run)' : ''}...\n`);

  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const results = [];
  for (const article of articles) {
    process.stdout.write(`[${article.id}] ${article.slug}\n`);
    const result = await processArticle(article);
    results.push(result);
    // Respect Unsplash rate limit (50 req/hour on free tier)
    await new Promise((r) => setTimeout(r, 300));
  }

  // Print summary
  console.log('\n─── Summary ───────────────────────────────────────────────');
  const saved = results.filter((r) => r.status === 'saved');
  const fallbacks = results.filter((r) => r.status === 'fallback');
  const skipped = results.filter((r) => r.status === 'skipped');
  console.log(`  Saved:     ${saved.length}`);
  console.log(`  Fallbacks: ${fallbacks.length}`);
  console.log(`  Skipped:   ${skipped.length}`);

  if (saved.length > 0) {
    console.log('\nUpdate blogs.json "image" fields to:');
    saved.forEach(({ article }) => {
      console.log(`  id ${article.id}: "/img/${article.outputFile}"`);
    });
  }
  console.log('');
}

main().catch((err) => { console.error(err); process.exit(1); });
