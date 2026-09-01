import fs from 'node:fs';
import crypto from 'node:crypto';

const blog = fs.readFileSync('app/article-blog-2026-09-01.ts', 'utf8');
const research = fs.readFileSync('app/article-research-batch-2026-09-01.ts', 'utf8');
const data = fs.readFileSync('app/data.ts', 'utf8');
const sitemap = fs.readFileSync('app/sitemap.xml/route.ts', 'utf8');
const blogRoute = fs.readFileSync('app/blog/[slug]/page.tsx', 'utf8');
const researchRoute = fs.readFileSync('app/research/[slug]/page.tsx', 'utf8');

const blogSlugs = [...blog.matchAll(/slug: '([a-z0-9-]+)', title:/g)].map(m => `philippines-outsourcing-${m[1]}`);
const researchSlugs = [...research.matchAll(/slug: '([a-z0-9-]+)', title:/g)].map(m => `philippines-outsourcing-${m[1]}`);
const titles = [...blog.matchAll(/title: '([^']+)', excerpt:/g), ...research.matchAll(/title: '([^']+)', excerpt:/g)].map(m => m[1]);
const bodySeeds = [...blog.matchAll(/exception: '([^']+)'/g), ...research.matchAll(/question: '([^']+)'/g)].map(m => m[1]);
const hashes = bodySeeds.map(value => crypto.createHash('sha256').update(value).digest('hex'));
const unique = values => new Set(values).size === values.length;
const fail = message => { throw new Error(message); };

if (blogSlugs.length !== 12 || !unique(blogSlugs)) fail(`Expected 12 unique Blog routes; found ${blogSlugs.length}`);
if (researchSlugs.length !== 5 || !unique(researchSlugs)) fail(`Expected 5 unique Research routes; found ${researchSlugs.length}`);
if (!unique([...blogSlugs, ...researchSlugs]) || !unique(titles) || !unique(hashes)) fail('Slug, title, or body-seed uniqueness failed');
if (!blog.includes("updated: '2026-09-01'") || !blog.includes('September 1, 2026')) fail('Blog date contract missing');
if (!research.includes("const updated = '2026-09-01'") || !research.includes("displayDate: 'September 1, 2026'")) fail('Research date contract missing');
for (const token of ['blogPosts2026_09_01', 'blogDetails2026_09_01', 'researchPosts2026_09_01']) if (!data.includes(token)) fail(`Data registration missing ${token}`);
if (!sitemap.includes('allBlogPosts.map') || !sitemap.includes('allResearchPosts.map')) fail('Sitemap registry mapping missing');
if (!blogRoute.includes('alternates: { canonical:') || !researchRoute.includes('alternates: { canonical:')) fail('Canonical metadata missing');

console.log(JSON.stringify({ campaignDate: '2026-09-01', blogCount: blogSlugs.length, researchCount: researchSlugs.length, uniqueTitles: titles.length, uniqueBodyHashes: hashes.length, blogSlugs, researchSlugs }, null, 2));
