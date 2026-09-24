import fs from 'node:fs';
import assert from 'node:assert/strict';

const manifest=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-24/blog.json','utf8'));
const source=fs.readFileSync('app/article-blog-2026-09-24.ts','utf8');
const sitemap=fs.readFileSync('.next/server/app/sitemap.xml.body','utf8');
assert.equal(manifest.required,12);
assert.equal(manifest.entries.length,12);
assert.equal(new Set(manifest.entries.map((entry)=>entry.slug)).size,12);
assert.equal((source.match(/[—–]/g)||[]).length,0,'public copy contains an em or en dash');

for(const entry of manifest.entries){
  const route=`.next/server/app/blog/${entry.slug}.html`;
  assert.ok(fs.existsSync(route),`${entry.slug}: static route missing`);
  const html=fs.readFileSync(route,'utf8');
  const article=html.match(/<article[\s\S]*?<\/article>/)?.[0]||'';
  const text=article.replace(/<script[\s\S]*?<\/script>/g,' ').replace(/<style[\s\S]*?<\/style>/g,' ').replace(/<[^>]+>/g,' ').replace(/&[a-z#0-9]+;/gi,' ');
  const words=(text.match(/[A-Za-z0-9][A-Za-z0-9'-]*/g)||[]).length;
  assert.ok(words>=900,`${entry.slug}: ${words} words`);
  assert.ok(html.includes(entry.slug),`${entry.slug}: slug missing`);
  assert.ok(html.includes('2026-09-24'),`${entry.slug}: date missing`);
  assert.ok(html.includes('datePublished'),`${entry.slug}: structured date missing`);
  assert.ok(html.includes(`https://outsourcedcompany.com/blog/${entry.slug}`),`${entry.slug}: self canonical missing`);
  assert.ok(html.includes('/images/operations-meeting.jpg'),`${entry.slug}: image missing`);
  assert.ok(sitemap.includes(entry.liveUrl),`${entry.slug}: sitemap entry missing`);
}
console.log('PASS: 12 September 24 Blog routes, 900+ words, dates, canonicals, image, and sitemap entries');
