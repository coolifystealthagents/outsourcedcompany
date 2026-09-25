import fs from 'node:fs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
const manifest=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-25/blog.json','utf8'));
const sitemap=fs.readFileSync('.next/server/app/sitemap.xml.body','utf8');
assert.equal(manifest.required,12);
assert.equal(manifest.entries.length,12);
assert.equal(new Set(manifest.entries.map(x=>x.slug)).size,12);
for(const entry of manifest.entries){
 const route=`.next/server/app/blog/${entry.slug}.html`;
 assert.ok(fs.existsSync(route),`${entry.slug}: route missing`);
 const data=fs.readFileSync(route), html=data.toString();
 const article=html.match(/<article[\s\S]*?<\/article>/)?.[0]||'';
 const text=article.replace(/<script[\s\S]*?<\/script>/g,' ').replace(/<[^>]+>/g,' ').replace(/&[^;]+;/g,' ');
 const words=(text.match(/[A-Za-z0-9][A-Za-z0-9'-]*/g)||[]).length;
 assert.ok(words>=900,`${entry.slug}: ${words} words`);
 assert.ok(html.includes('2026-09-25'),`${entry.slug}: date missing`);
 assert.ok(html.includes('datePublished'),`${entry.slug}: structured date missing`);
 assert.ok(html.includes(entry.liveUrl),`${entry.slug}: canonical missing`);
 assert.ok(html.includes('/images/operations-meeting.jpg'),`${entry.slug}: asset missing`);
 assert.ok(sitemap.includes(entry.liveUrl),`${entry.slug}: sitemap missing`);
 assert.equal(crypto.createHash('sha256').update(data).digest('hex'),entry.contentHash,`${entry.slug}: hash mismatch`);
 console.log(`${entry.slug}: ${words} words`);
}
console.log('PASS: exactly 12 September 25 Blog routes');
