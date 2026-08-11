import type { ResearchPost } from './article-research-batch';

const sources = [
  { label: 'NIST Cybersecurity Framework 2.0', href: 'https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20' },
  { label: 'NIST Privacy Framework', href: 'https://www.nist.gov/privacy-framework' },
  { label: 'NIST SP 800-53 Rev. 5', href: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final' },
  { label: 'NIST SP 800-34 Contingency Planning Guide', href: 'https://csrc.nist.gov/pubs/sp/800/34/r1/final' },
  { label: 'CISA Cybersecurity Performance Goals', href: 'https://www.cisa.gov/cybersecurity-performance-goals' },
  { label: 'FTC Data Breach Response Guide', href: 'https://www.ftc.gov/business-guidance/resources/data-breach-response-guide-business' },
  { label: 'World Bank Philippines data', href: 'https://data.worldbank.org/country/philippines' },
  { label: 'Philippine Statistics Authority Labor Force Survey', href: 'https://psa.gov.ph/statistics/labor-force-survey' },
  { label: 'Philippines National Privacy Commission Data Privacy Act', href: 'https://privacy.gov.ph/data-privacy-act/' },
  { label: 'IANA Time Zone Database', href: 'https://www.iana.org/time-zones' },
  { label: 'U.S. EEOC selection procedures guidance', href: 'https://www.eeoc.gov/laws/guidance/employment-tests-and-selection-procedures' },
];

const related = [
  { label: 'Philippines outsourcing quality measurement', href: '/research/philippines-outsourcing-quality-measurement' },
  { label: 'Outsourcing vendor due diligence', href: '/research/philippines-outsourcing-vendor-due-diligence' },
  { label: 'Business continuity research for outsourced queues', href: '/research/philippines-outsourcing-business-continuity-research' },
];

type Topic = [string, string, string, string, string, string];
const sourceDates: Record<string, string> = {
  'philippines-outsourcing-order-entry-controls': '2026-08-10',
};

const topics: Topic[] = [
  ['philippines-outsourcing-order-entry-controls', 'Order-entry controls for outsourced ecommerce operations', 'A source-led framework for separating order entry, exception review, and approval in a distributed ecommerce workflow.', '5', 'Control stages to define', 'Separate intake, validation, exception handling, and final approval so a repeatable order queue does not become hidden authority.'],
  ['philippines-outsourcing-customer-data-minimization', 'Customer-data minimization in outsourced support', 'Use purpose, access, retention, and deletion questions to keep a remote support queue from collecting more data than it needs.', '4', 'Data questions to answer', 'Name the purpose, fields, access group, retention rule, and deletion evidence before the queue goes live.'],
  ['philippines-outsourcing-qa-sampling', 'Quality-assurance sampling for outsourced operations', 'Design a small, repeatable sample that shows accuracy and exception patterns without turning volume into a promise.', '10', 'Starting sample items', 'Use a stated sample, record misses by cause, and change the sample when risk or the work changes.'],
  ['philippines-outsourcing-supplier-onboarding', 'Supplier onboarding research for outsourced teams', 'Bound a vendor-intake queue with evidence requirements, ownership, and stop rules for missing or conflicting information.', '6', 'Evidence fields', 'Capture supplier identity, source, approval state, requested action, owner, and unresolved risk before activation.'],
  ['philippines-outsourcing-calendar-privacy', 'Calendar privacy controls for outsourced assistants', 'Translate calendar access into explicit rules for private events, delegates, time zones, and escalation.', '7', 'Calendar cases to test', 'Test normal invites, conflicts, private events, reschedules, time-zone changes, and unclear attendees before granting broader rights.'],
  ['philippines-outsourcing-recruitment-coordination', 'Recruitment coordination controls for outsourced teams', 'A practical research note for scheduling candidates and maintaining records while reserving hiring judgment for the employer.', '3', 'Decision layers', 'Keep scheduling and record preparation separate from evaluation, selection, compensation, and employment decisions.'],
  ['philippines-outsourcing-reporting-lineage', 'Reporting lineage for outsourced operations dashboards', 'Make recurring reports reviewable by recording source, extraction date, transformation, owner, and known limitations.', '5', 'Lineage fields', 'A report should identify its source, period, transformation, reviewer, and next correction path.'],
  ['philippines-outsourcing-refund-workflow', 'Refund-workflow boundaries for outsourced customer support', 'Define what a support role can prepare, what it can approve, and when a refund request must return to an owner.', '4', 'Boundary questions', 'Write amount, evidence, customer, policy, fraud, and approval rules before a remote queue handles refunds.'],
  ['philippines-outsourcing-backup-coverage', 'Backup coverage planning for a Philippines operations queue', 'Plan handoffs, access, time zones, and safe fallback work when the primary operator is unavailable.', '2', 'Coverage layers', 'Name primary, backup, owner, accessible documentation, and the condition that pauses work instead of inviting guesses.'],
  ['philippines-outsourcing-work-sample-rubric', 'Work-sample rubrics for outsourcing role screening', 'Use the same bounded examples and evidence-first rubric to compare candidates for a recurring operations role.', '4', 'Rubric dimensions', 'Score instruction following, accuracy, source use, escalation judgment, and handoff clarity against the same examples.'],
  ['philippines-outsourcing-access-review-cadence', 'Access-review cadence for outsourced operations', 'Set a review rhythm for permissions that reflects role changes, risk, and actual queue needs.', '3', 'Review triggers', 'Review on a cadence and after role, tool, workflow, or risk changes; remove access that no longer supports the written queue.'],
  ['philippines-outsourcing-incident-handoff', 'Incident handoff records for outsourced teams', 'Create a concise incident record that preserves evidence while moving technical, privacy, or customer decisions to the right owner.', '8', 'Handoff fields', 'Capture time, system, observed impact, evidence location, containment action, owner, and next update without unnecessary personal data.'],
  ['philippines-outsourcing-content-ops-research', 'Content-operations research checks for outsourced teams', 'A defensible checklist for briefing, sourcing, fact review, and approval in a recurring content workflow.', '10', 'Source checks', 'Verify source identity, publication date, claim context, link, reviewer, and approval state before content moves forward.'],
  ['philippines-outsourcing-queue-capacity-planning', 'Queue-capacity planning for distributed operations', 'Use arrival, age, service window, quality, and blocked-work context to plan a queue without making a staffing guarantee.', '5', 'Queue dimensions', 'Pair item count with age, complexity, available overlap, quality findings, and blocked work so capacity decisions use context.'],
];

function makePost([slug, title, excerpt, stat, statLabel, angle]: Topic): ResearchPost & { keyStats: Array<{ value: string; label: string; note: string }>; sections: Array<{ heading: string; body: string[] }>; faqs: Array<{ question: string; answer: string }> } {
  return {
    slug, title, excerpt, updated: '2026-08-10', ...(sourceDates[slug] ? { updated: sourceDates[slug] } : {}), image: '/images/operations-meeting.jpg', imageAlt: 'Operations team reviewing a work queue together', sources, related,
    cta: 'Have a recurring queue to scope? Bring the source, examples, access needs, and review owner to the staffing intake.',
    keyStats: [{ value: stat, label: statLabel, note: `${angle} This is a planning measure, not a performance promise.` }, { value: '11', label: 'Authoritative references reviewed', note: 'Sources are listed so readers can inspect the underlying guidance.' }, { value: '1', label: 'Internal owner required', note: 'A framework does not replace an accountable person for the queue.' }],
    body: [
      `${title} is useful only when it changes a real operating decision. ${angle}`,
      'The research does not establish that every provider, worker, or arrangement will produce the same result. Compare the published context with a bounded work sample, named owner, access review, and first-batch evidence.',
      'Keep policy, money, legal, safety, and customer-exception decisions with the appropriate owner. Give the delivery role a written stop rule and a place to record the question, source, action taken, and handoff time.',
      'A practical first release is narrow: one queue, one source of truth, one review cadence, and a stated exit or repair path. Expand only when the evidence says the process is stable.',
    ],
    sections: [
      { heading: 'What the evidence can and cannot say', body: [angle, 'Security frameworks, privacy guidance, labor context, and contingency guidance provide decision support. They do not substitute for the actual role brief, contract, controls, or review data.'] },
      { heading: 'A small operating test', body: ['Write the normal case, incomplete case, and escalation case. Use the same examples and rubric for every candidate or partner. Review the first batch closely, classify misses by source, rule, tool, training, or action, and repair the cause before increasing volume.'] },
      { heading: 'Questions for the owner', body: ['Which person can approve access? What evidence proves an item is done? Which event pauses the queue? How quickly must an escalation receive an answer? What is the safe fallback if the primary worker, source, or tool is unavailable?'] },
    ],
    faqs: [
      { question: 'Is this a guarantee about outsourcing in the Philippines?', answer: 'No. It is a research note and operating framework. Validate the specific queue, people, controls, schedule, and contract before relying on it.' },
      { question: 'What should be checked first?', answer: 'Start with scope, examples, access limits, a review owner, and stop rules. Those make early evidence interpretable and keep unusual decisions with the right person.' },
      { question: 'When should the work expand?', answer: 'Only after the first queue has a stable definition of done, a repeatable review, documented handoffs, and an owner who can absorb exceptions.' },
    ],
  };
}

export const researchPosts2026_08_10_run2 = topics.map(makePost);
