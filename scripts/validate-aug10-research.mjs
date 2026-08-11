import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const root = process.cwd();
const manifestPath = '.paperclip/aug10-2026/research.json';
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
assert.equal(manifest.contract, 'sites3-aug10-public-date-v6');
assert.equal(manifest.family, 'research');
assert.ok(manifest.entries.length >= manifest.minimum);
assert.equal(new Set(manifest.entries.map(e => e.slug)).size, manifest.entries.length);

const routeSource = fs.readFileSync('app/research/[slug]/page.tsx', 'utf8');
assert.match(routeSource, /datePublished:\s*p\.updated/);
assert.match(routeSource, /<time dateTime=\{p\.updated\}>\{p\.updated\}<\/time>/);
assert.match(routeSource, /canonical:/);
const sitemapSource = fs.readFileSync('app/sitemap.xml/route.ts', 'utf8');
assert.match(sitemapSource, /allResearchPosts\.map\(\(post\) => `\/research\/\$\{post\.slug\}`\)/);
assert.match(fs.readFileSync('app/data.ts', 'utf8'), /allResearchPosts = .*sort\(\(a, b\) => b\.updated\.localeCompare\(a\.updated\)\)/s);

for (const entry of manifest.entries) {
  assert.match(entry.route, /^\/research\/[a-z0-9-]+$/);
  assert.equal(entry.route, `/research/${entry.slug}`);
  assert.equal(entry.sourceDate, '2026-08-10');
  assert.equal(entry.renderedDate, '2026-08-10');
  assert.ok(fs.existsSync(entry.sourcePath), entry.sourcePath);
  const source = fs.readFileSync(entry.sourcePath, 'utf8');
  assert.match(source, new RegExp(`['"]${entry.slug}['"]`));
  assert.match(source, /updated:\s*['"]2026-08-10['"]/);
  const parent = `${entry.introducedByCommit}^`;
  let before = '';
  try { before = execFileSync('git', ['show', `${parent}:${entry.sourcePath}`], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }); } catch { /* file was introduced by the commit */ }
  assert.ok(!before.includes(entry.slug), `${entry.slug} was already present before introducing commit`);
  const after = execFileSync('git', ['show', `${entry.introducedByCommit}:${entry.sourcePath}`], { encoding: 'utf8' });
  assert.match(after, new RegExp(`['"]${entry.slug}['"]`));
  assert.match(after, /updated:\s*['"]2026-08-10['"]/);
}

for (const entry of manifest.entries) {
  const builtPath = `.next/server/app${entry.route}.html`;
  if (fs.existsSync(builtPath)) {
    const built = fs.readFileSync(builtPath, 'utf8');
    assert.match(built, /datePublished/);
    assert.match(built, /2026-08-10/);
    assert.match(built, new RegExp(`https://outsourcedcompany\\.com${entry.route}`));
  }
}
console.log(`PASS: ${manifest.entries.length} August 10 research routes, provenance, rendering, canonical, sitemap, and index checks`);
console.log(`Manifest SHA-256: ${crypto.createHash('sha256').update(fs.readFileSync(manifestPath)).digest('hex')}`);
