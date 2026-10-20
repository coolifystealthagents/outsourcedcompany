import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = (path) => readFileSync(new URL(path, import.meta.url), 'utf8');
const css = read('../app/globals.css');
const contact = read('../app/contact-us/page.tsx');
const services = read('../app/services/page.tsx');
const blog = read('../app/blog/[slug]/page.tsx');
const research = read('../app/research/[slug]/page.tsx');
const aug19 = read('../app/aug19-content.tsx');
const aug20 = read('../app/aug20-content.tsx');
const sidebar = read('../app/article-sidebar.tsx');
const blogLayout = read('../app/blog/layout.tsx');

assert.match(css, /\.nav\{[^}]*position:sticky[^}]*top:0/, 'header must remain sticky');
assert.doesNotMatch(blogLayout, /BlogBanner/, 'blog shell must not inject content before the page header or after the footer');
assert.ok(contact.indexOf('<TestimonialsRail') < contact.indexOf('stealth-agents-team-bacolod.png'), 'approved reviews must be in the first fold before the immediate team section');
assert.ok(services.match(/<section/g)?.length >= 4, 'service index must contain substantial decision support');
for (const [name, source] of Object.entries({blog, research, aug19, aug20})) {
  assert.ok(source.includes('ArticleSidebar'), `${name} renderer must include the populated article sidebar`);
  assert.ok(source.includes('id="main-content"'), `${name} renderer must expose the skip-link target`);
}
assert.ok(sidebar.includes('Table of contents'));
assert.ok(sidebar.includes('IntersectionObserver'), 'TOC must track active headings');
assert.ok(css.includes('.service-toc{position:sticky;top:105px'), 'service TOC must clear the sticky header');
assert.ok(css.includes('.service-detail-section{scroll-margin-top:105px'), 'service anchors must clear the sticky header');
assert.ok(css.includes('.article-sidebar{position:sticky'), 'complete sidebar must follow desktop scrolling');
assert.ok(css.includes('.article-reading section[id],.article-reading .card[id],.article-reading aside[id]{scroll-margin-top:105px}'), 'nested article anchors must clear the desktop sticky header');
assert.ok(css.includes('@media(max-width:940px)') && css.includes('.article-reading section[id],.article-reading .card[id],.article-reading aside[id],.article-reading :where(h1,h2,h3)[id]{scroll-margin-top:165px}'), 'nested and heading article anchors must clear the header at its wrapped breakpoint');
assert.ok(css.includes('@media(max-width:940px)') && css.includes('.article-sidebar{position:static'), 'sidebar must return to normal flow when the header wraps');
console.log('V3 editorial and route-shell contract passed');
