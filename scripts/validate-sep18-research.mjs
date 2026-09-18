import fs from 'node:fs';
import path from 'node:path';

const manifest=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-18/research.json','utf8'));
const batch=fs.readFileSync('app/article-research-batch-2026-09-18.ts','utf8');
if(manifest.articles.length!==5) throw new Error(`Expected 5 articles, found ${manifest.articles.length}`);
const slugs=new Set(manifest.articles.map(a=>a.slug));
if(slugs.size!==5) throw new Error('Duplicate slugs in manifest');
for(const article of manifest.articles){
  if(article.publicationDate!=='2026-09-18') throw new Error(`Wrong date for ${article.slug}`);
  if(!batch.includes(article.slug.replace('philippines-outsourcing-',''))) throw new Error(`Missing batch entry: ${article.slug}`);
  const htmlPath=path.join('.next/server/app/research',`${article.slug}.html`);
  if(!fs.existsSync(htmlPath)) throw new Error(`Missing built page: ${article.slug}`);
  const html=fs.readFileSync(htmlPath,'utf8');
  const articleHtml=html.match(/<article[^>]*>([\s\S]*?)<\/article>/)?.[1] ?? '';
  const words=articleHtml.replace(/<script[\s\S]*?<\/script>/g,' ').replace(/<[^>]+>/g,' ').replace(/&[^;]+;/g,' ').trim().split(/\s+/).filter(Boolean).length;
  if(words<1200) throw new Error(`${article.slug} has ${words} rendered words`);
  if(!html.includes(`<title>${article.title ?? ''}`) && !html.includes(article.liveUrl)) {
    if(!html.includes(article.slug)) throw new Error(`Built page identity missing: ${article.slug}`);
  }
  if(!html.includes('2026-09-18')) throw new Error(`Structured publication date missing: ${article.slug}`);
  if(!html.includes('operations-meeting.jpg')) throw new Error(`Hero asset missing: ${article.slug}`);
}
console.log(`Validated 5 September 18 Research pages; each has at least 1,200 rendered article words.`);
