import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import crypto from 'node:crypto';
import ts from 'typescript';

const root = process.cwd();
const fail = (message) => { throw new Error(message); };
const normalize = (value) => value.replace(/\s+/g, ' ').trim();
const decode = (value) => normalize(value
  .replace(/<[^>]+>/g, ' ')
  .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
  .replace(/&#([0-9]+);/g, (_, code) => String.fromCodePoint(Number.parseInt(code, 10)))
  .replace(/&#x27;|&apos;/g, "'")
  .replace(/&quot;/g, '"')
  .replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>'));
const hash = (value) => crypto.createHash('sha256').update(value).digest('hex');
const words = (value) => (value.match(/[A-Za-z0-9][A-Za-z0-9’'-]*/g) ?? []).length;

function loadTs(relative) {
  const filename = path.join(root, relative);
  const source = fs.readFileSync(filename, 'utf8');
  const compiled = ts.transpileModule(source, {
    fileName: filename,
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
    reportDiagnostics: true,
  });
  if (compiled.diagnostics?.length) fail(`${relative}: TypeScript diagnostics`);
  const module = { exports: {} };
  vm.runInNewContext(compiled.outputText, { module, exports: module.exports }, { filename });
  return module.exports;
}

const blog = [];
for (let part = 1; part <= 4; part++) {
  const exports = loadTs(`app/article-blog-2026-10-05-part-${part}.ts`);
  const posts = exports[`blogPosts2026_10_05_part${part}`];
  const details = exports[`blogDetails2026_10_05_part${part}`];
  for (const post of posts) blog.push({ ...post, ...details[post.slug] });
}
const research = loadTs('app/article-research-batch-2026-10-05.ts').researchPosts2026_10_05;
if (blog.length !== 12) fail(`expected 12 Blog articles, found ${blog.length}`);
if (research.length !== 5) fail(`expected 5 Research articles, found ${research.length}`);

const allSlugs = [...blog.map((item) => item.slug), ...research.map((item) => item.slug)];
if (new Set(allSlugs).size !== 17) fail('duplicate October 5 slug');

const results = [];
for (const item of blog) {
  const sourceParagraphs = item.sections.flatMap((section) => section.body);
  const sourceBody = normalize(sourceParagraphs.join(' '));
  const htmlPath = path.join(root, '.next/server/app/blog', `${item.slug}.html`);
  if (!fs.existsSync(htmlPath)) fail(`${item.slug}: rendered HTML missing`);
  const html = fs.readFileSync(htmlPath, 'utf8');
  const renderedParagraphs = [...html.matchAll(/<p class="article-narrative">([\s\S]*?)<\/p>/g)].map((match) => decode(match[1]));
  const renderedBody = normalize(renderedParagraphs.join(' '));
  if (sourceBody !== renderedBody) {
    let offset = 0;
    while (offset < sourceBody.length && sourceBody[offset] === renderedBody[offset]) offset++;
    fail(`${item.slug}: complete ordered source/render body mismatch at ${offset}; source=${JSON.stringify(sourceBody.slice(offset, offset + 80))}; rendered=${JSON.stringify(renderedBody.slice(offset, offset + 80))}`);
  }
  if (words(sourceBody) < 900) fail(`${item.slug}: ${words(sourceBody)} Blog body words`);
  if (!html.includes(`<h1>${item.title}</h1>`)) fail(`${item.slug}: title mismatch`);
  const canonical = `https://outsourcedcompany.com/blog/${item.slug}`;
  if (!html.includes(`rel="canonical" href="${canonical}"`)) fail(`${item.slug}: canonical mismatch`);
  if (!html.includes('"datePublished":"2026-10-05"') || !html.includes('dateTime="2026-10-05"')) fail(`${item.slug}: date mismatch`);
  if (!html.includes('src="/images/operations-meeting.jpg"')) fail(`${item.slug}: image missing`);
  for (const link of item.relatedLinks) if (!html.includes(`href="${link.href}"`)) fail(`${item.slug}: internal link missing ${link.href}`);
  for (const source of item.sources) if (!html.includes(`href="${source.url}"`)) fail(`${item.slug}: source link missing ${source.url}`);
  results.push({ family: 'blog', slug: item.slug, title: item.title, words: words(sourceBody), contentHash: hash(sourceBody), sources: item.sources.map((s) => s.url) });
}

for (const item of research) {
  const sourceBody = normalize(item.body.join(' '));
  const htmlPath = path.join(root, '.next/server/app/research', `${item.slug}.html`);
  if (!fs.existsSync(htmlPath)) fail(`${item.slug}: rendered HTML missing`);
  const html = fs.readFileSync(htmlPath, 'utf8');
  const start = html.indexOf(`<p>${item.body[0].slice(0, 80)}`);
  const end = html.indexOf('<div class="card"><h2>Sources</h2>', start);
  if (start < 0 || end < 0) fail(`${item.slug}: rendered Research body bounds missing`);
  const renderedParagraphs = [...html.slice(start, end).matchAll(/<p>([\s\S]*?)<\/p>/g)].map((match) => decode(match[1]));
  const renderedBody = normalize(renderedParagraphs.join(' '));
  if (sourceBody !== renderedBody) fail(`${item.slug}: complete ordered source/render body mismatch`);
  if (words(sourceBody) < 1200) fail(`${item.slug}: ${words(sourceBody)} Research body words`);
  if (!html.includes(`<h1>${item.title}</h1>`)) fail(`${item.slug}: title mismatch`);
  const canonical = `https://outsourcedcompany.com/research/${item.slug}`;
  if (!html.includes(`rel="canonical" href="${canonical}"`)) fail(`${item.slug}: canonical mismatch`);
  if (!html.includes('"datePublished":"2026-10-05"') || !html.includes('dateTime="2026-10-05"')) fail(`${item.slug}: date mismatch`);
  if (!html.includes('src="/images/operations-meeting.jpg"')) fail(`${item.slug}: image missing`);
  for (const link of item.related) if (!html.includes(`href="${link.href}"`)) fail(`${item.slug}: internal link missing ${link.href}`);
  for (const source of item.sources) if (!html.includes(`href="${source.href}"`)) fail(`${item.slug}: source link missing ${source.href}`);
  results.push({ family: 'research', slug: item.slug, title: item.title, words: words(sourceBody), contentHash: hash(sourceBody), sources: item.sources.map((s) => s.href) });
}

const sitemap = fs.readFileSync(path.join(root, '.next/server/app/sitemap.xml.body'), 'utf8');
for (const item of results) {
  const route = `https://outsourcedcompany.com/${item.family}/${item.slug}`;
  if (!sitemap.includes(`<loc>${route}</loc>`)) fail(`${item.slug}: sitemap missing`);
}
const blogIndex = fs.readFileSync(path.join(root, '.next/server/app/blog.html'), 'utf8');
for (const item of results.filter((row) => row.family === 'blog')) if (!blogIndex.includes(`/blog/${item.slug}`)) fail(`${item.slug}: Blog index missing`);
const researchIndex = fs.readFileSync(path.join(root, '.next/server/app/research.html'), 'utf8');
for (const item of results.filter((row) => row.family === 'research')) if (!researchIndex.includes(`/research/${item.slug}`)) fail(`${item.slug}: Research index missing`);

const imagePath = path.join(root, 'public/images/operations-meeting.jpg');
const image = fs.readFileSync(imagePath);
if (image[0] !== 0xff || image[1] !== 0xd8 || image.at(-2) !== 0xff || image.at(-1) !== 0xd9) fail('shared JPEG signature invalid');

const shingles = (value) => {
  const tokens = value.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean);
  const set = new Set();
  for (let i = 0; i <= tokens.length - 5; i++) set.add(tokens.slice(i, i + 5).join(' '));
  return set;
};
function familyOverlap(items, bodyFor) {
  let max = { a: '', b: '', overlap: 0 };
  for (let i = 0; i < items.length; i++) for (let j = i + 1; j < items.length; j++) {
    const a = shingles(bodyFor(items[i])), b = shingles(bodyFor(items[j]));
    let intersection = 0;
    for (const value of a) if (b.has(value)) intersection++;
    const overlap = intersection / (a.size + b.size - intersection);
    if (overlap > max.overlap) max = { a: items[i].slug, b: items[j].slug, overlap };
  }
  return max;
}
const blogOverlap = familyOverlap(blog, (item) => item.sections.flatMap((section) => section.body).join(' '));
const researchOverlap = familyOverlap(research, (item) => item.body.join(' '));
const paragraphs = [...blog.flatMap((item) => item.sections.flatMap((section) => section.body)), ...research.flatMap((item) => item.body)].map(normalize);
if (new Set(paragraphs).size !== paragraphs.length) fail('repeated substantive paragraph found');

console.log(JSON.stringify({ ok: true, publicationDate: '2026-10-05', timezone: 'Etc/UTC', image: { path: '/images/operations-meeting.jpg', mime: 'image/jpeg', signature: 'ffd8...ffd9', bytes: image.length }, blogOverlap, researchOverlap, repeatedParagraphs: 0, results }, null, 2));
