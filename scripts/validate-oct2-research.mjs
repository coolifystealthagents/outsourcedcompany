import fs from 'node:fs';
import { createHash } from 'node:crypto';

const manifest = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-10-02/research.json', 'utf8'));
if (manifest.articles.length !== 5 || new Set(manifest.articles.map(a => a.slug)).size !== 5) throw new Error('Expected exactly five unique Research articles');
const bodies = [];
const paragraphs = new Map();
for (const article of manifest.articles) {
  if (article.publicationDate !== '2026-10-02') throw new Error(`Wrong date: ${article.slug}`);
  const html = fs.readFileSync(`.next/server/app/research/${article.slug}.html`, 'utf8');
  const articleHtml = html.match(/<article[^>]*>([\s\S]*?)<div class="card"><h2>Sources<\/h2>/)?.[1] ?? '';
  if (createHash('sha256').update(articleHtml).digest('hex') !== article.contentHash) throw new Error(`Hash mismatch: ${article.slug}`);
  if (!html.includes(`https://outsourcedcompany.com/research/${article.slug}`) || !html.includes('2026-10-02') || !html.includes('operations-meeting.jpg')) throw new Error(`Route metadata failure: ${article.slug}`);
  const visibleArticleHtml = articleHtml
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<(?:nav|header|footer|aside)\b[^>]*>[\s\S]*?<\/(?:nav|header|footer|aside)>/gi, ' ');
  const text = visibleArticleHtml.replace(/<[^>]+>/g, ' ').replace(/&[^;]+;/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length < 1200) throw new Error(`Short body: ${article.slug}`);
  for (const match of articleHtml.matchAll(/<p>([\s\S]*?)<\/p>/g)) { const p = match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(); if (p.length > 80) { const seen = paragraphs.get(p) ?? new Set(); seen.add(article.slug); paragraphs.set(p, seen); } }
  bodies.push({ slug: article.slug, words: words.length, shingles: new Set(words.slice(0, -4).map((_, i) => words.slice(i, i + 5).join(' '))) });
  console.log(`${article.slug}: ${words.length} body-only words`);
}
let maximum = 0;
for (let i=0;i<bodies.length;i+=1) for (let j=i+1;j<bodies.length;j+=1) { const a=bodies[i],b=bodies[j]; const intersection=[...a.shingles].filter(x=>b.shingles.has(x)).length; const score=intersection/new Set([...a.shingles,...b.shingles]).size; maximum=Math.max(maximum,score); }
if (maximum >= 0.5) throw new Error(`Overlap ${(maximum*100).toFixed(2)}%`);
const repeated = [...paragraphs.values()].filter(seen => seen.size > 1).length;
if (repeated) throw new Error(`${repeated} repeated substantive paragraphs`);
console.log(`PASS: 5/5; maximum five-word-shingle overlap ${(maximum*100).toFixed(2)}%; repeated substantive paragraphs 0.`);
