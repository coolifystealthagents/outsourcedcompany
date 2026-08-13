import type { ResearchPost } from './article-research-batch';

const sources = [
  { label: 'World Bank: Employment in services, Philippines', href: 'https://data.worldbank.org/indicator/SL.SRV.EMPL.ZS?locations=PH' },
  { label: 'Philippine Statistics Authority: Labor Force Survey', href: 'https://psa.gov.ph/statistics/labor-force-survey' },
  { label: 'NIST Cybersecurity Framework 2.0', href: 'https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20' },
  { label: 'CISA Cross-Sector Cybersecurity Performance Goals', href: 'https://www.cisa.gov/cybersecurity-performance-goals' },
  { label: 'Philippines National Privacy Commission: Data Privacy Act', href: 'https://privacy.gov.ph/data-privacy-act/' },
  { label: 'IANA Time Zone Database', href: 'https://www.iana.org/time-zones' },
  { label: 'NIST SP 800-34: Contingency Planning Guide', href: 'https://csrc.nist.gov/pubs/sp/800/34/r1/final' },
  { label: 'U.S. EEOC: Employment Tests and Selection Procedures', href: 'https://www.eeoc.gov/laws/guidance/employment-tests-and-selection-procedures' },
  { label: 'FTC: Data Breach Response Guide', href: 'https://www.ftc.gov/business-guidance/resources/data-breach-response-guide-business' },
  { label: 'NIST Privacy Framework', href: 'https://www.nist.gov/privacy-framework' },
];

const related = [
  { label: 'Philippines outsourcing market overview', href: '/research/philippines-outsourcing-market-overview' },
  { label: 'How to measure outsourced operations quality', href: '/research/philippines-outsourcing-quality-measurement' },
  { label: 'Outsourcing vendor due diligence checklist', href: '/research/philippines-outsourcing-vendor-due-diligence' },
];

type Topic = [slug: string, title: string, excerpt: string, stat: string, statLabel: string, angle: string, method: string];

const topics: Topic[] = [
  ['philippines-outsourcing-demand-signals-2026', 'Philippines outsourcing demand signals: how to read the data', 'Use labor and service-sector indicators as context for a staffing decision, not as a promise about a provider.', '59.5%', 'Share of employment in services, 2025', 'Separate country-level labor context from the queue, hours, language, and review system your role actually needs.', 'The headline figure is a World Bank indicator for services employment. It covers the whole economy, not BPO alone; compare it with current PSA labor data and then run your own work sample.'],
  ['philippines-outsourcing-queue-design', 'Queue design for a Philippines-based operations handoff', 'A research framework for turning a recurring operations queue into a bounded, reviewable role.', '5', 'Examples to include in a first brief', 'Define the source, normal path, stop rules, evidence, and owner before discussing headcount.', 'Five examples is a planning minimum used to expose variation in the work. It is not an industry benchmark or a hiring guarantee.'],
  ['philippines-outsourcing-mfa-access-control', 'MFA and least privilege for outsourced operations access', 'Research-backed questions for granting a remote operations role only the access it needs.', '6', 'CISA-aligned control questions', 'Start with named accounts, MFA, role-based permissions, logs, and a documented removal path.', 'The six questions are a practical synthesis of NIST CSF and CISA goals. They are a review aid, not a certification or security score.'],
  ['philippines-outsourcing-continuity-testing', 'Continuity testing for a distributed Philippines support queue', 'Build a small continuity exercise before a recurring queue depends on one person, tool, or connection.', '2', 'Failure paths to test first', 'Test both people coverage and tool/source failure, with a named decision owner for each path.', 'The two-path exercise is a compact starting point derived from contingency-planning guidance. Expand it for customer, legal, or safety-critical work.'],
  ['philippines-outsourcing-time-zone-handoffs', 'Time-zone handoffs for teams working with the Philippines', 'Plan overlap, asynchronous notes, holidays, and escalation windows around Asia/Manila time.', 'UTC+8', 'Philippine standard time', 'Write the overlap window, handoff fields, response expectation, and daylight-saving conversion for the home team.', 'The Philippines uses Asia/Manila in the IANA database. Calendar conversion and staffing commitments still need to be confirmed with the people doing the work.'],
  ['philippines-outsourcing-privacy-processor-questions', 'Privacy processor questions for Philippines outsourcing', 'A practical research checklist for discussing personal-data access with a Philippines-based partner.', '10', 'Questions to document before access', 'Clarify purpose, data fields, retention, sub-processors, incident notice, access removal, and accountable owners.', 'The questions map to privacy-governance themes in the Philippine Data Privacy Act and NIST Privacy Framework. They are not legal advice.'],

  ['philippines-outsourcing-quality-sampling', 'Quality sampling for outsourced operations', 'Turn early review into a repeatable sample that reveals process problems instead of only counting output.', '10', 'Starting items for an early review', 'Check the first batch completely, classify misses by cause, then use a stated sample after the process is stable.', 'Ten items is a controllable planning sample, not a statistical claim. Increase the sample when risk, variation, or error severity rises.'],
  ['philippines-outsourcing-vendor-sla-design', 'Vendor SLA design for a Philippines operations partner', 'Write service expectations that a manager can observe, escalate, and repair.', '4', 'SLA dimensions to define', 'Define scope, timeliness, quality, and escalation separately so a fast but unsafe result does not look successful.', 'The four dimensions are a practical scorecard structure. Contract language, remedies, and regulated obligations need specialist review.'],
  ['philippines-outsourcing-crm-data-hygiene', 'CRM data hygiene in an outsourced workflow', 'Research principles for keeping customer records accurate when updates cross teams and time zones.', '7', 'Fields to verify on each update', 'Check identity, status, date, source, owner, next action, and evidence before expanding volume.', 'The seven fields are a queue-specific control example. Adapt them to the CRM schema and customer-data obligations in scope.'],
  ['philippines-outsourcing-customer-escalation', 'Customer escalation rules for a Philippines support team', 'Give a support queue clear stop conditions for safety, money, privacy, and policy exceptions.', '4', 'Escalation classes to define', 'Separate routine resolution from safety, payment, privacy, and reputational exceptions with owner and response clocks.', 'The four classes are a planning taxonomy, not a complete incident policy. Add industry-specific requirements and counsel review where needed.'],
  ['philippines-outsourcing-backup-coverage', 'Backup coverage planning for outsourced queues', 'Make absence coverage explicit without silently granting broad access or decision rights.', '3', 'Coverage layers to document', 'Define primary, backup, and owner coverage; document access, training, handoff, and the point where work pauses.', 'Three layers keep a small team understandable. The right staffing depth depends on queue volume, risk, and contractual commitments.'],
  ['philippines-outsourcing-source-verification', 'Source verification for outsourced research tasks', 'Create a defensible research queue with source rules, evidence capture, and a human review point.', '2', 'Evidence checks before acceptance', 'Require a traceable source and a second check for interpretation, date, and unit before publication or customer use.', 'The two checks separate source existence from correct interpretation. High-stakes claims need subject-matter review.'],
  ['philippines-outsourcing-manager-capacity', 'Manager capacity when outsourcing a Philippines queue', 'Estimate the internal review work that makes an outsourced process safe to scale.', '30', 'Days for a narrow launch review', 'Budget for examples, daily questions, early review, access decisions, and a 30-day process reset before adding queues.', 'Thirty days is a planning window used in the site’s launch guidance, not a promise that every role stabilizes on that schedule.'],
];

function makePost(topic: Topic): ResearchPost & { keyStats: Array<{ value: string; label: string; note: string }>; sections: Array<{ heading: string; body: string[] }>; faqs: Array<{ question: string; answer: string }> } {
  const [slug, title, excerpt, stat, statLabel, angle, method] = topic;
  return {
    slug, title, excerpt, updated: '2026-08-08', image: '/images/operations-meeting.jpg', imageAlt: 'Operations team reviewing a work queue together', sources, related,
    cta: 'Have a recurring queue to scope? Bring the source, examples, access needs, and review owner to the staffing intake.',
    keyStats: [{ value: stat, label: statLabel, note: method }, { value: '10', label: 'Authoritative references reviewed', note: 'Sources are listed below so a reader can inspect the underlying guidance.' }, { value: '1', label: 'Internal owner required', note: 'A published framework does not replace an accountable person for the queue.' }],
    body: [
      `${title} is useful only when it changes a real decision. ${angle}`,
      'The research does not establish that every provider, worker, or arrangement will produce the same result. A buyer should compare the published context with a bounded work sample, named owner, access review, and first-batch evidence.',
      'Keep policy, money, legal, safety, and customer-exception decisions with the appropriate owner. Give the delivery role a written stop rule and a place to record the question, source, action taken, and handoff time.',
      'A practical first release is narrow: one queue, one source of truth, one review cadence, and a stated exit or repair path. Expand only when the evidence says the process is stable.',
    ],
    sections: [
      { heading: 'What the evidence can and cannot say', body: [method, 'Country-level indicators, security frameworks, and privacy guidance provide context. They do not substitute for the actual role brief, contract, controls, or review data.'] },
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

export const researchPosts2026_08_08 = topics.map(makePost);
