import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';

const manifest = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-28/research.json', 'utf8'));
const batch = fs.readFileSync('app/article-research-batch-2026-09-28.ts', 'utf8');
if (manifest.articles.length !== 5) throw new Error(`Expected 5 articles, found ${manifest.articles.length}`);
if (new Set(manifest.articles.map((article) => article.slug)).size !== 5) throw new Error('Duplicate slugs in manifest');

const bodies = [];
for (const article of manifest.articles) {
  if (article.publicationDate !== '2026-09-28') throw new Error(`Wrong date for ${article.slug}`);
  if (!batch.includes(article.slug.replace('philippines-outsourcing-', ''))) throw new Error(`Missing batch entry: ${article.slug}`);
  const htmlPath = path.join('.next/server/app/research', `${article.slug}.html`);
  if (!fs.existsSync(htmlPath)) throw new Error(`Missing built page: ${article.slug}`);
  const html = fs.readFileSync(htmlPath, 'utf8');
  const articleHtml = html.match(/<article[^>]*>([\s\S]*?)<div class="card"><h2>Sources<\/h2>/)?.[1] ?? '';
  const contentHash = createHash('sha256').update(articleHtml).digest('hex');
  if (contentHash !== article.contentHash) throw new Error(`Rendered article-body hash mismatch: ${article.slug}`);
  const text = articleHtml.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&[^;]+;/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length < 1200) throw new Error(`${article.slug} has ${words.length} body-only words`);
  if (!html.includes('2026-09-28')) throw new Error(`Publication date missing: ${article.slug}`);
  if (!html.includes(`https://outsourcedcompany.com/research/${article.slug}`)) throw new Error(`Canonical missing: ${article.slug}`);
  if (!html.includes('operations-meeting.jpg')) throw new Error(`Hero asset missing: ${article.slug}`);
  bodies.push({ slug: article.slug, words, shingles: new Set(words.slice(0, -4).map((_, i) => words.slice(i, i + 5).join(' '))) });
  console.log(`${article.slug}: ${words.length} body-only words`);
}

let maximum = 0;
for (let i = 0; i < bodies.length; i += 1) for (let j = i + 1; j < bodies.length; j += 1) {
  const intersection = [...bodies[i].shingles].filter((value) => bodies[j].shingles.has(value)).length;
  const union = new Set([...bodies[i].shingles, ...bodies[j].shingles]).size;
  const score = intersection / union;
  maximum = Math.max(maximum, score);
  console.log(`${bodies[i].slug} <> ${bodies[j].slug}: ${(score * 100).toFixed(2)}% five-word-shingle Jaccard`);
}
if (maximum >= 0.5) throw new Error(`Maximum pairwise overlap ${(maximum * 100).toFixed(2)}% is at or above 50%`);
console.log(`Validated exactly 5 September 28 Research pages; maximum overlap ${(maximum * 100).toFixed(2)}%.`);
