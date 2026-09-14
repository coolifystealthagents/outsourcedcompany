import assert from 'node:assert/strict';
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const campaignDate = '2026-08-23';
const visibleDate = 'August 23, 2026';
const sourcePath = 'app/article-blog-2026-08-23.ts';
const manifestPath = '.paperclip/daily-content/2026-08-23/blog.json';
const source = fs.readFileSync(sourcePath, 'utf8');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

assert.equal(manifest.campaignDate, campaignDate);
assert.equal(manifest.family, 'blog');
assert.equal(manifest.entries.length, 12, 'manifest must contain exactly 12 entries');

const routes = manifest.entries.map((entry) => entry.route);
assert.equal(new Set(routes).size, 12, 'routes must be unique');
for (const entry of manifest.entries) {
  assert.match(entry.route, /^\/blog\/[a-z0-9-]+$/);
  assert.deepEqual(entry.sourcePaths, [sourcePath]);
  const slug = entry.route.slice('/blog/'.length);
  assert.ok(source.includes(`slug: '${slug}'`), `missing route source for ${slug}`);
}

const detailsFactoryStart = source.indexOf('export const blogDetails2026_08_23');
assert.ok(detailsFactoryStart >= 0, 'August 23 detail factory is missing');
const detailsFactory = source.slice(detailsFactoryStart);
const structuredBindings = detailsFactory.match(/datePublished: '2026-08-23'/g) || [];
assert.equal(structuredBindings.length, 1, 'batch must use one direct literal published-date binding');
assert.match(detailsFactory, /updated:\s*[^,]+,\s*datePublished:/, 'each detail record must provide an updated value before its published date');
assert.ok(source.includes(visibleDate), 'source must include the visible reader date');
assert.ok(!/datePublished:\s*'(?!2026-08-23')\d{4}-\d{2}-\d{2}'/.test(detailsFactory), 'a record changed the immutable August 23 publication date');
assert.ok(!/[—–]/.test(source), 'Humanizer audit: em or en dash found');

const preRunTree = execFileSync('git', ['ls-tree', '-r', '--name-only', '4aa50c47501b760f750c414662998b3f4c5c01ba'], { encoding: 'utf8' });
assert.ok(!preRunTree.split('\n').includes(sourcePath), 'route-specific source existed at pre-run head');

const data = fs.readFileSync('app/data.ts', 'utf8');
const routePage = fs.readFileSync('app/blog/[slug]/page.tsx', 'utf8');
const sitemap = fs.readFileSync('app/sitemap.xml/route.ts', 'utf8');
assert.ok(data.includes('...blogPosts2026_08_23'), 'family index loader is missing the batch');
assert.ok(data.includes('...blogDetails2026_08_23'), 'article detail loader is missing the batch');
assert.ok(routePage.includes('datePublished: details.datePublished ?? details.updated'), 'structured date renderer must preserve an explicit publication date');
assert.ok(routePage.includes('publishedTime: details.datePublished ?? details.updated, modifiedTime: details.updated'), 'Open Graph article dates must preserve the publication date and expose the modified date');
assert.ok(routePage.includes('formatReaderDate(details.updated)'), 'visible date renderer is missing');
assert.ok(sitemap.includes('allBlogPosts.map'), 'sitemap does not enumerate blog records');

console.log(JSON.stringify({
  campaignDate,
  family: 'blog',
  articleCount: manifest.entries.length,
  dateBinding: 'PASS',
  visibleDate: 'PASS',
  structuredDate: 'PASS',
  familyIndex: 'PASS',
  sitemap: 'PASS',
  preRunSourceAbsence: 'PASS',
  humanizerDashCheck: 'PASS'
}, null, 2));
