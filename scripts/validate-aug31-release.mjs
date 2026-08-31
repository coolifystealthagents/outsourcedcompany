import fs from 'node:fs';

const blogPath = 'app/article-blog-2026-08-31.ts';
const researchPath = 'app/article-research-batch-2026-08-31.ts';
const dataPath = 'app/data.ts';
const blog = fs.readFileSync(blogPath, 'utf8');
const research = fs.readFileSync(researchPath, 'utf8');
const data = fs.readFileSync(dataPath, 'utf8');

const blogSlugs = [...blog.matchAll(/\['([a-z0-9-]+)','[^']+','/g)].map(m => `philippines-outsourcing-${m[1]}`);
const researchSlugs = [...research.matchAll(/\{ slug: '([a-z0-9-]+)', title:/g)].map(m => `philippines-outsourcing-${m[1]}`);
const unique = values => new Set(values).size === values.length;
const fail = message => { throw new Error(message); };

if (blogSlugs.length !== 12 || !unique(blogSlugs)) fail(`Expected 12 unique Blog routes; found ${blogSlugs.length}`);
if (researchSlugs.length !== 5 || !unique(researchSlugs)) fail(`Expected 5 unique Research routes; found ${researchSlugs.length}`);
if (!blog.includes("updated: '2026-08-31'") || !blog.includes('August 31, 2026')) fail('Blog date contract missing');
if (!research.includes("const updated = '2026-08-31'") || !research.includes("displayDate: 'August 31, 2026'")) fail('Research date contract missing');
for (const token of ['blogPosts2026_08_31', 'blogDetails2026_08_31', 'researchPosts2026_08_31']) if (!data.includes(token)) fail(`Data registration missing ${token}`);

console.log(JSON.stringify({ campaignDate: '2026-08-31', blogCount: blogSlugs.length, researchCount: researchSlugs.length, blogSlugs, researchSlugs }, null, 2));
