import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/article-blog-2026-08-23.ts', import.meta.url), 'utf8');
const slug = 'philippines-outsourcing-calendar-coordination-controls';
const target = '/services/executive-administration';

assert.ok(source.includes(`updated: t.slug === '${slug}' ? '2026-09-30' : '2026-08-23'`), 'the calendar route must own its refreshed modified date without changing its publication date');
assert.ok(source.includes("datePublished: '2026-08-23'"), 'the August 23 publication date must remain intact');
assert.ok(source.includes(`t.slug === '${slug}' ? [{ label: 'Plan a Philippines executive administration lane', href: '${target}' }] : []`), 'the calendar route must provide its task-specific executive-administration handoff');
assert.ok(source.includes("{ label: 'See back-office operations support', href: '/services/back-office-operations' }"), 'the existing back-office route must remain available');
assert.ok(source.includes("boundary: 'making a strategic commitment, exposing private calendar details, or moving a protected meeting without approval'"), 'the handoff must retain the calendar decision-owner boundary');
assert.ok(!source.includes(`t.slug === '${slug}' ? [{ label: 'See back-office operations support', href: '${target}' }] : []`), 'the executive-administration handoff must not be mislabeled as back-office support');

console.log('calendar executive-administration handoff source contract passed');
