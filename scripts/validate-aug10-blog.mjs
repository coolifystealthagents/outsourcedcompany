import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const manifestPath = path.join(root, '.paperclip/aug10-2026/blog.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
if (manifest.entries.length < manifest.minimum || manifest.entries.length !== 22) throw new Error(`accepted count ${manifest.entries.length}`);
const seen = new Set();
const data = fs.readFileSync(path.join(root, 'app/data.ts'), 'utf8');
const sitemap = fs.readFileSync(path.join(root, 'app/sitemap.xml/route.ts'), 'utf8');
const index = fs.readFileSync(path.join(root, 'app/blog/page.tsx'), 'utf8');
if (!data.includes('allBlogPosts = [...blogRepair2026_08_10Posts, ...blogBatch2026_08_10Posts')) throw new Error('target articles are not newest-first');
if (!sitemap.includes('...allBlogPosts.map((post) => `/blog/${post.slug}`)')) throw new Error('sitemap source missing');
for (const entry of manifest.entries) {
  if (seen.has(entry.slug)) throw new Error(`duplicate ${entry.slug}`);
  seen.add(entry.slug);
  if (!/^\/blog\/[a-z0-9-]+$/.test(entry.route) || entry.route !== `/blog/${entry.slug}`) throw new Error(`bad route ${entry.slug}`);
  const sourcePath = path.join(root, entry.sourcePath);
  if (!fs.existsSync(sourcePath)) throw new Error(`missing source ${entry.sourcePath}`);
  const source = fs.readFileSync(sourcePath, 'utf8');
  if (!source.includes(entry.slug) || !source.includes("updated: '2026-08-10'")) throw new Error(`source date/slug ${entry.slug}`);
  if (entry.sourceDate !== '2026-08-10' || entry.renderedDate !== '2026-08-10' || !entry.renderedDateFields.includes('datePublished')) throw new Error(`manifest date ${entry.slug}`);
  if (!/^[0-9a-f]{40}$/.test(entry.introducedByCommit)) throw new Error(`bad provenance ${entry.slug}`);
  const built = path.join(root, '.next/server/app/blog', `${entry.slug}.html`);
  if (!fs.existsSync(built)) throw new Error(`missing built route ${entry.route}`);
  const html = fs.readFileSync(built, 'utf8');
  if (!html.includes('datePublished') || !html.includes('2026-08-10')) throw new Error(`rendered date ${entry.slug}`);
  if (!html.includes(`https://outsourcedcompany.com${entry.route}`)) throw new Error(`canonical ${entry.slug}`);
}
if (!index.includes('allBlogPosts.slice(0,20)')) throw new Error('index route missing');
console.log(`PASS: ${manifest.entries.length} accepted Blog routes, source dates, rendered dates, canonicals, sitemap eligibility, and newest-first index`);
