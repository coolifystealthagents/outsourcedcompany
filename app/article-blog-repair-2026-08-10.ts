type RepairTopic = { slug: string; title: string; keyword: string; focus: string };

const topics: RepairTopic[] = [
  { slug: 'philippines-outsourcing-inbox-triage', title: 'Philippines outsourcing inbox triage workflow', keyword: 'Philippines outsourcing inbox triage', focus: 'inbox triage' },
  { slug: 'outsourcing-work-queue-documentation-philippines', title: 'Outsourcing work queue documentation to the Philippines', keyword: 'outsourcing work queue documentation Philippines', focus: 'work queue documentation' },
];

const makeDetails = (topic: RepairTopic, index: number) => ({
  updated: '2026-08-10',
  marker: `daily-blog-repair-2026-08-10-${String(index + 1).padStart(2, '0')}`,
  takeaway: `A safe ${topic.focus} handoff gives Filipino staff one source of truth, a clear finish rule, and a named owner for exceptions.`,
  comparison: [
    { weak: `We need help with ${topic.focus}.`, strong: `We need a Filipino specialist to complete the written ${topic.focus} queue and record each result.` },
    { weak: 'Quality matters to us.', strong: 'The internal owner will review the first ten items against the same written fields.' },
    { weak: 'Use the tools as needed.', strong: 'Start with a named account and only the permissions required for this queue.' },
  ],
  sections: [
    { heading: `Define the ${topic.focus} queue`, body: [`Name what enters the queue, where it comes from, what finished means, and where the result is recorded.`, 'Keep the first lane narrow so the worker and reviewer can identify missing rules quickly.'] },
    { heading: 'Write the normal path', body: [`Document the source, the required fields, the allowed action, and the handoff note for ${topic.focus}.`, 'Include normal, incomplete, and escalation examples.'] },
    { heading: 'Keep decisions with the owner', body: ['Stop when the source conflicts, a sensitive decision is required, or the written rule does not apply. Record the evidence and route it to the named owner.'] },
    { heading: 'Review the first batch', body: ['Check source, record, action, note, and escalation for every early item. Repair the guide when the same question repeats.'] },
  ],
  workflow: [
    { step: 'Days 1–3', title: 'Map the queue', body: `Write the source, examples, access needs, and stop rules for ${topic.focus}.` },
    { step: 'Days 4–10', title: 'Test the work', body: 'Use the same normal and exception cases for every work sample.' },
    { step: 'Days 11–30', title: 'Open one lane', body: 'Start with limited access, small volume, and a named reviewer.' },
  ],
  script: [`Which exact ${topic.focus} cases will this role handle first?`, 'What proves that an item is complete?', 'Which decisions must return to the internal owner?'],
  sourcesNumbered: true,
  sources: [{ name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework', note: 'Authoritative guidance for managing cybersecurity risk.' }],
  faqs: [{ question: 'What should be outsourced first?', answer: 'Start with recurring work that has examples, a clear finish rule, limited access, and a named reviewer.' }, { question: 'When should the worker stop?', answer: 'Stop when the source is incomplete, the rule is ambiguous, or the case requires a business decision.' }],
  relatedLinks: [{ label: 'Read the Philippines outsourcing buyer guide', href: '/blog/outsource-to-the-philippines-guide' }, { label: 'See back-office operations support', href: '/services/back-office-operations' }],
});

export const blogRepair2026_08_10Posts = topics.map(({ slug, title }) => ({ slug, title, excerpt: `Set up ${title.toLowerCase().replace(/^.*?: /, '')} with a written queue, limited access, and a clear owner for exceptions.`, minutes: 8 }));
export const blogRepair2026_08_10Details = Object.fromEntries(topics.map((topic, index) => [topic.slug, makeDetails(topic, index)]));
