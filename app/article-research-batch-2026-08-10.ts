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
  { label: 'Philippines outsourcing market overview', href: '/research/philippines-outsourcing-market-overview' },
  { label: 'How to measure outsourced operations quality', href: '/research/philippines-outsourcing-quality-measurement' },
  { label: 'Outsourcing vendor due diligence checklist', href: '/research/philippines-outsourcing-vendor-due-diligence' },
];

type Topic = [string, string, string, string, string, string];
const topics: Topic[] = [
  ['philippines-outsourcing-access-recertification', 'Access recertification for outsourced operations', 'A repeatable review for checking whether a remote operations role still needs each permission it holds.', '5', 'Access questions to answer', 'Review the person, system, permission, business purpose, owner, and removal path on a fixed cadence.'],
  ['philippines-outsourcing-approval-matrix', 'Approval matrices for outsourced finance operations', 'Separate preparation, review, and approval so routine finance support does not silently become authorization.', '3', 'Decision layers to separate', 'Keep data entry, exception review, and final approval distinct; document who owns each handoff.'],
  ['philippines-outsourcing-inbox-service-levels', 'Inbox service levels for an outsourced support queue', 'Define urgency, evidence, response windows, and escalation instead of measuring a shared inbox by volume alone.', '4', 'Queue dimensions to define', 'Write category, impact, due time, and owner rules before asking a remote team to manage the queue.'],
  ['philippines-outsourcing-holiday-calendar-planning', 'Holiday calendar planning for Philippines support coverage', 'A planning method for holidays, overlap, backup coverage, and customer-facing commitments across time zones.', '2', 'Calendars to reconcile', 'Compare the customer calendar with the team calendar and record the fallback owner for each constrained day.'],
  ['philippines-outsourcing-knowledge-article-review', 'Knowledge article review for outsourced support teams', 'Keep operating answers current with a named owner, source note, revision date, and retirement rule.', '5', 'Review fields to capture', 'Record source, owner, version, effective date, and next review date so stale guidance is visible.'],
  ['philippines-outsourcing-data-retention-questions', 'Data retention questions for Philippines outsourcing', 'A source-led checklist for deciding what a recurring remote workflow should keep, archive, or delete.', '6', 'Retention questions', 'Define purpose, fields, location, access, retention period, deletion evidence, and exception owner before launch.'],
  ['philippines-outsourcing-escalation-evidence', 'Escalation evidence in outsourced customer support', 'Make unusual customer cases easier to resolve by requiring a concise, traceable handoff record.', '4', 'Handoff fields', 'Capture customer, issue, source, action, risk, requested decision, and next owner without copying unnecessary personal data.'],
  ['philippines-outsourcing-shift-handoff-design', 'Shift handoff design for distributed operations', 'A practical structure for passing open work between Philippines-based staff and an internal team.', '7', 'Handoff fields to test', 'Use status, owner, due time, blocker, source, next action, and escalation state; test the note on real examples.'],
  ['philippines-outsourcing-research-source-log', 'Source logs for outsourced research workflows', 'Create a defensible record of URLs, dates, units, interpretations, and reviewer decisions before a research claim is reused.', '2', 'Checks before acceptance', 'Verify that the source exists and that the extracted claim matches its date, unit, population, and context.'],
  ['philippines-outsourcing-return-to-owner-rules', 'Return-to-owner rules for outsourced workflows', 'Stop routine work safely when a policy, money, legal, privacy, or customer exception exceeds the role boundary.', '5', 'Stop-rule categories', 'Name the trigger, evidence to preserve, owner to notify, response clock, and safe interim state.'],
  ['philippines-outsourcing-first-month-review', 'First-month review for a Philippines outsourcing launch', 'Use a bounded first month to inspect quality, access, questions, continuity, and manager workload before expanding.', '30', 'Days in a narrow review window', 'Treat thirty days as a planning window, then use observed evidence rather than the calendar alone to decide what changes.'],
];

function makePost([slug, title, excerpt, stat, statLabel, angle]: Topic): ResearchPost & { keyStats: Array<{ value: string; label: string; note: string }>; sections: Array<{ heading: string; body: string[] }>; faqs: Array<{ question: string; answer: string }> } {
  return {
    slug, title, excerpt, updated: '2026-08-10', image: '/images/operations-meeting.jpg', imageAlt: 'Operations team reviewing a work queue together', sources, related,
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

export const researchPosts2026_08_10 = topics.map(makePost);
