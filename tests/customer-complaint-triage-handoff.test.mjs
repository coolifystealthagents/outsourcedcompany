import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/article-research-batch-2026-08-23.ts', import.meta.url), 'utf8');
const route = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');
const slug = 'philippines-outsourcing-customer-complaint-triage';
const target = '/services/customer-experience-support';
const selectedStart = source.indexOf(`post('${slug}'`);
const selectedEnd = source.indexOf("post('philippines-outsourcing-work-instruction-change-adoption'", selectedStart);
const selected = source.slice(selectedStart, selectedEnd);

assert.ok(selectedStart >= 0 && selectedEnd > selectedStart, 'the complaint-triage record must remain data-owned');
assert.ok(selected.includes(`updated: '2026-10-04'`), 'the changed record must own its refreshed modified date');
assert.ok(selected.includes(`label: 'Plan a Philippines customer-experience triage lane', href: '${target}'`), 'the record must provide the task-specific service handoff');
assert.ok(source.includes("The internal owner retains authority over refunds, legal or safety concerns, account sanctions, public responses, accessibility accommodations, and any new promise."), 'the handoff must preserve customer remedy and safety decisions for the authorized owner');
assert.ok(route.includes('modifiedTime: p.updated'), 'research metadata must expose the record modified date');
assert.ok(route.includes('<time dateTime={p.updated}>'), 'the visible updated label must use the record modified date');

console.log('customer complaint triage handoff source contract passed');