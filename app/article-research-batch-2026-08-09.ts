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
  ['philippines-outsourcing-inbox-triage', 'Inbox triage controls for outsourced operations', 'A research framework for routing recurring inbox work without giving a delivery role unchecked authority.', '4', 'Triage decisions to define', 'Define sender, intent, urgency, and owner rules before a shared inbox is handed off.'],
  ['philippines-outsourcing-knowledge-base-maintenance', 'Knowledge-base maintenance in an outsourced workflow', 'Use evidence, ownership, and review dates to keep operational answers useful as a queue changes.', '3', 'Fields for each article review', 'Record the source, accountable owner, and next review date so stale instructions can be found.'],
  ['philippines-outsourcing-invoice-processing-controls', 'Invoice processing controls for outsourced teams', 'Separate data entry from approval and build an evidence trail before finance work crosses teams.', '5', 'Control points to document', 'Document intake, matching, exception, approval, and payment handoff; keep approval authority with the owner.'],
  ['philippines-outsourcing-calendar-coordination', 'Calendar coordination controls for outsourced assistants', 'A bounded system for scheduling, privacy, time zones, and escalation when calendars are managed remotely.', '6', 'Calendar rules to write down', 'Define invite, reschedule, conflict, private-event, timezone, and escalation rules before access is granted.'],
  ['philippines-outsourcing-crm-permission-design', 'CRM permission design for outsourced operations', 'Translate least-privilege guidance into a reviewable CRM access plan for a recurring role.', '4', 'Permission layers to review', 'Separate view, create, edit, export, and administrative rights; start with the narrowest layer that supports the queue.'],
  ['philippines-outsourcing-returns-escalation', 'Returns escalation research for outsourced ecommerce teams', 'Give a returns queue clear evidence requirements and stop rules for refunds, exceptions, and suspected abuse.', '4', 'Exception classes to separate', 'Keep routine status updates distinct from refund, fraud, policy, and safety exceptions that need an owner.'],
  ['philippines-outsourcing-document-control', 'Document control for distributed outsourcing teams', 'Create a simple revision and access trail so the team can tell which operating instruction is current.', '5', 'Document-control fields', 'Use title, owner, version, effective date, and change note as the minimum review record.'],
  ['philippines-outsourcing-training-evidence', 'Training evidence for a new outsourced operations role', 'Measure readiness with consistent examples and observed work rather than vague completion claims.', '3', 'Readiness evidence types', 'Use a knowledge check, a bounded work sample, and observed escalation judgment before expanding live access.'],
  ['philippines-outsourcing-service-desk-routing', 'Service-desk routing for a Philippines support queue', 'Build a routing taxonomy that protects urgent work while leaving normal tickets easy to measure.', '5', 'Routing dimensions', 'Write category, impact, urgency, owner, and response expectation rules, then test them on real historical tickets.'],
  ['philippines-outsourcing-offboarding-access-review', 'Offboarding access review for outsourced workers', 'A practical checklist for removing access, preserving evidence, and confirming ownership at role exit.', '4', 'Exit checks to confirm', 'Confirm account removal, token revocation, asset return, record ownership, and manager sign-off.'],
  ['philippines-outsourcing-daily-handoff-metrics', 'Daily handoff metrics for outsourced operations', 'Choose a small set of measures that reveal queue health without turning activity into a misleading performance promise.', '4', 'Metrics to pair', 'Pair volume with age, quality, and blocked-work context so an owner can see what the count hides.'],
];

function makePost([slug, title, excerpt, stat, statLabel, angle]: Topic): ResearchPost & { keyStats: Array<{ value: string; label: string; note: string }>; sections: Array<{ heading: string; body: string[] }>; faqs: Array<{ question: string; answer: string }> } {
  return {
    slug, title, excerpt, updated: '2026-08-09', image: '/images/operations-meeting.jpg', imageAlt: 'Operations team reviewing a work queue together', sources, related,
    cta: 'Have a recurring queue to scope? Bring the source, examples, access needs, and review owner to the staffing intake.',
    keyStats: [{ value: stat, label: statLabel, note: angle }, { value: '11', label: 'Authoritative references reviewed', note: 'Sources are listed so readers can inspect the underlying guidance.' }, { value: '1', label: 'Internal owner required', note: 'A framework does not replace an accountable person for the queue.' }],
    body: [
      `${title} is useful only when it changes a real operating decision. ${angle}`,
      'The research does not establish that every provider, worker, or arrangement will produce the same result. Compare the published context with a bounded work sample, named owner, access review, and first-batch evidence.',
      'Keep policy, money, legal, safety, and customer-exception decisions with the appropriate owner. Give the delivery role a written stop rule and a place to record the question, source, action taken, and handoff time.',
      'A practical first release is narrow: one queue, one source of truth, one review cadence, and a stated exit or repair path. Expand only when the evidence says the process is stable.',
    ],
    sections: [
      { heading: 'What the evidence can and cannot say', body: [angle, 'Security frameworks, privacy guidance, and labor context provide decision support. They do not substitute for the actual role brief, contract, controls, or review data.'] },
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

export const researchPosts2026_08_09 = topics.map(makePost);
