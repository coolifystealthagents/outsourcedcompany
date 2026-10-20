import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const components = read('app/components.tsx');
const home = read('app/page.tsx');
const contact = read('app/contact-us/page.tsx');
const contactStyles = read('app/contact-us/contact.module.css');
const form = read('app/contact-us/StandardContactForm.tsx');
const servicePage = read('app/services/[slug]/page.tsx');
const serviceData = read('app/service-details.ts');
const booking = read('app/booking-components.tsx');
const config = read('next.config.mjs');
const thankYou = read('app/thank-you/page.tsx');
const whatsNext = read('app/thanks-whats-next/page.tsx');
const registry = JSON.parse(read('design-registry.json'));

assert.match(components, /className="skip-link"[^>]*href="#main-content"/);
assert.equal((components.match(/>Home</g) || []).length >= 1, true);
assert.match(components, />Services</);
assert.match(components, /href="\/contact-us">Contact Us</);
assert.doesNotMatch(components, /href="\/contact"/);
assert.equal((components.match(/Powered by StealthAgents/g) || []).length, 2);
assert.equal((components.match(/src="\/logo\.svg"/g) || []).length >= 3, true);
assert.match(components, /position/i);

assert.doesNotMatch(home, /padStart|file-number|OC \/ 01/);
assert.doesNotMatch(contact, />0\{index/);
assert.match(contact, /id="main-content"/);
assert.match(contact, /Official team, Bacolod/);
assert.match(contact, /stealthagents-logo/);
assert.match(contact, /stealthagents-team/);
assert.match(contact, /TestimonialsRail/);
assert.match(contactStyles, /grid-template-columns/);

assert.match(booking, /StealthAgents reviews/);
const reviewNames = [...booking.matchAll(/name:\s*["']([^"']+)["']/g)].map((match) => match[1]);
assert.equal(new Set(reviewNames).size >= 10, true, 'at least 10 unique approved review records');
assert.doesNotMatch(booking, /<button|useState|Pause testimonials|Play testimonials/);
assert.match(booking, /★★★★★/);
assert.match(booking, /animation:/);
assert.match(booking, /prefers-reduced-motion/);

assert.doesNotMatch(form, /if \(tracker\)[\s\S]{0,180}location\.assign/);
assert.equal((form.match(/trackLead\?\.\(payload\)/g) || []).length, 1);
assert.equal((form.match(/location\.assign\("\/thank-you"\)/g) || []).length, 1);

assert.match(config, /source:\s*["']\/contact["']/);
assert.match(config, /destination:\s*["']\/contact-us["']/);
assert.match(config, /permanent:\s*true/);
assert.match(thankYou, /https:\/\/go\.oncehub\.com\/StealthAgentsTeam\?brdr=1pxd8d8d8&amp;dt=&amp;em=1&amp;Si=1/);
assert.doesNotMatch(thankYou, /Step 2|one step away/i);
assert.match(whatsNext, /id="main-content"/);

for (const heading of ['Who this is for', 'The problem', 'Scope', 'Inputs', 'Workflow', 'Deliverables', 'Boundaries and human decisions', 'Quality controls', 'Starting scenarios', 'Frequently asked questions', 'Related services']) {
  assert.match(servicePage, new RegExp(heading, 'i'), `missing service section: ${heading}`);
}
assert.match(servicePage, /href="\/contact-us"/);
assert.match(servicePage, /id="main-content"/);
assert.equal((serviceData.match(/slug:/g) || []).length, 12);
assert.match(serviceData, /heroImage:/);

const commercialFiles = ['app/components.tsx', 'app/page.tsx', 'app/services/[slug]/page.tsx', 'app/services/page.tsx'];
for (const file of commercialFiles) assert.doesNotMatch(read(file), /href="\/contact"/, `${file} has legacy contact CTA`);
const claims = [components, home, contact, servicePage, booking, thankYou, whatsNext].join('\n');
assert.doesNotMatch(claims, /35\+\s*industries|Forbes|top[ -]rated/i);

assert.equal(registry.designVariance, 8);
assert.equal(registry.motion, 4);
assert.equal(registry.density, 7);
assert.equal(registry.change, 'evolve');
assert.equal(registry.theme, 'light');
assert.equal(registry.signatureElement, 'operational handoff canvas');

console.log('V3 core contract checks passed');
