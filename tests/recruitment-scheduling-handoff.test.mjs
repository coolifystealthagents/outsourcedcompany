import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/article-blog-2026-08-23.ts', import.meta.url), 'utf8');
const slug = 'outsourcing-philippines-recruitment-scheduling-handoffs';
const target = '/services/recruitment-coordination';

assert.match(source, /updated: t\.slug === 'outsourcing-philippines-recruitment-scheduling-handoffs' \? '2026-11-04' :(?: t\.slug === '[^']+' \? '[^']+' :)* '2026-08-23'/, 'the recruitment-scheduling route must own its refreshed modified date without changing its publication date');
assert.ok(source.includes("datePublished: '2026-08-23'"), 'the August 23 publication date must remain intact');
assert.ok(source.includes(`t.slug === '${slug}' ? [{ label: 'Plan a Philippines recruitment coordination lane', href: '${target}' }] : []`), 'the recruitment-scheduling route must provide its task-specific recruitment-coordination handoff');
assert.ok(source.includes("{ label: 'See back-office operations support', href: '/services/back-office-operations' }"), 'the existing back-office route must remain available');
assert.ok(source.includes("boundary: 'ranking candidates, interpreting protected information, promising employment, or changing selection criteria'"), 'the handoff must retain the recruitment decision-owner boundary');
assert.ok(!source.includes(`t.slug === '${slug}' ? [{ label: 'See back-office operations support', href: '${target}' }] : []`), 'the recruitment-coordination handoff must not be mislabeled as back-office support');

console.log('recruitment-scheduling handoff source contract passed');
