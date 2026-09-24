import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const manifest=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-24/research.json','utf8'));
const batch=fs.readFileSync('app/article-research-batch-2026-09-24.ts','utf8');
if(manifest.articles.length!==5) throw new Error(`Expected 5 articles, found ${manifest.articles.length}`);
if(new Set(manifest.articles.map(a=>a.slug)).size!==5) throw new Error('Duplicate slugs in manifest');
for(const article of manifest.articles){
  if(article.publicationDate!=='2026-09-24') throw new Error(`Wrong date for ${article.slug}`);
  if(!batch.includes(article.slug.replace('philippines-outsourcing-',''))) throw new Error(`Missing batch entry: ${article.slug}`);
  const htmlPath=path.join('.next/server/app/research',`${article.slug}.html`);
  if(!fs.existsSync(htmlPath)) throw new Error(`Missing built page: ${article.slug}`);
  const html=fs.readFileSync(htmlPath,'utf8');
  const articleHtml=html.match(/<article[^>]*>([\s\S]*?)<\/article>/)?.[1] ?? '';
  const words=articleHtml.replace(/<script[\s\S]*?<\/script>/g,' ').replace(/<[^>]+>/g,' ').replace(/&[^;]+;/g,' ').trim().split(/\s+/).filter(Boolean).length;
  if(words<1200) throw new Error(`${article.slug} has ${words} rendered words`);
  if(!html.includes('2026-09-24')) throw new Error(`Structured publication date missing: ${article.slug}`);
  if(!html.includes(`https://outsourcedcompany.com/research/${article.slug}`)) throw new Error(`Canonical missing: ${article.slug}`);
  if(!html.includes('operations-meeting.jpg')) throw new Error(`Hero asset missing: ${article.slug}`);
  const hash=crypto.createHash('sha256').update(html).digest('hex');
  if(hash!==article.contentHash) throw new Error(`Rendered content hash mismatch: ${article.slug}`);
  console.log(`${article.slug}: ${words} words, ${hash}`);
}
console.log('Validated exactly 5 September 24 Research pages.');
