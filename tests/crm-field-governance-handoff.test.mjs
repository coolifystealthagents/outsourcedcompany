import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/article-blog-2026-08-23.ts', import.meta.url), 'utf8');
const recordStart = source.indexOf("slug: 'outsourcing-philippines-crm-field-governance'");
const recordEnd = source.indexOf("slug: 'philippines-outsourcing-invoice-exception-preparation'", recordStart);
const record = source.slice(recordStart, recordEnd);
const detailsStart = source.indexOf('export const blogDetails2026_08_23');
const details = source.slice(detailsStart);

assert.ok(recordStart >= 0 && recordEnd > recordStart, 'CRM governance topic record must remain in the August 23 data set');
assert.match(record, /question: 'Which source supports this CRM value, and is the proposed change reversible\?'/);
assert.match(record, /boundary: 'merging records, changing consent, assigning ownership, deleting history, or making a sales judgment'/);
assert.match(details, /t\.slug === 'outsourcing-philippines-crm-field-governance' \? '2026-10-27'/);
assert.match(details, /Plan a Philippines sales administration lane/);
assert.match(details, /href: '\/services\/sales-administration'/);
assert.doesNotMatch(details, /outsourcing-philippines-crm-field-governance' \? \[\{ label: 'See back-office operations support'/);

console.log('CRM field-governance to sales-administration handoff source contract passed');
