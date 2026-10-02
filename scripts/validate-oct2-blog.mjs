import fs from 'node:fs';
import { createHash } from 'node:crypto';

const manifest = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-10-02/blog.json', 'utf8'));
if (manifest.articles.length !== 12 || new Set(manifest.articles.map(a => a.slug)).size !== 12) throw new Error('Expected exactly 12 unique Blog articles');
const bodies = [];
const paragraphs = new Map();
for (const article of manifest.articles) {
  const html = fs.readFileSync(`.next/server/app/blog/${article.slug}.html`, 'utf8');
  const articleHtml = html.match(/<article[^>]*>([\s\S]*?)<\/article>/)?.[1] ?? '';
  const text = articleHtml.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&[^;]+;/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length < 900) throw new Error(`Short body: ${article.slug} (${words.length})`);
  if (createHash('sha256').update(articleHtml).digest('hex') !== article.contentHash) throw new Error(`Hash mismatch: ${article.slug}`);
  for (const required of ['2026-10-02', `https://outsourcedcompany.com/blog/${article.slug}`, 'operations-meeting.jpg']) if (!html.includes(required)) throw new Error(`Missing ${required}: ${article.slug}`);
  for (const p of [...articleHtml.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map(m => m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase()).filter(p => p.split(/\s+/).length >= 20)) {
    if (!paragraphs.has(p)) paragraphs.set(p, new Set()); paragraphs.get(p).add(article.slug);
  }
  bodies.push({ slug: article.slug, words, shingles: new Set(words.slice(0, -4).map((_, i) => words.slice(i, i + 5).join(' '))) });
  console.log(`${article.slug}: ${words.length} body-only words`);
}
let maximum = 0;
for (let i = 0; i < bodies.length; i++) for (let j = i + 1; j < bodies.length; j++) {
  const intersection = [...bodies[i].shingles].filter(v => bodies[j].shingles.has(v)).length;
  maximum = Math.max(maximum, intersection / new Set([...bodies[i].shingles, ...bodies[j].shingles]).size);
}
const repeated = [...paragraphs.values()].filter(seen => seen.size > 1).length;
if (maximum >= 0.5 || repeated) throw new Error(`Originality failure: overlap ${maximum}, repeated ${repeated}`);
console.log(`PASS: 12/12; maximum five-word-shingle overlap ${(maximum * 100).toFixed(2)}%; repeated substantive paragraphs 0.`);
