type Section = { heading: string; body: string[] };

export const blogPosts2026_10_02 = [{
  slug: 'philippines-outsourcing-sales-commission-statement-preparation',
  title: 'Outsource sales commission statement preparation without outsourcing pay decisions',
  excerpt: 'Build traceable commission statements from approved plans and source transactions while keeping plan interpretation, disputes, payroll approval, and payment with accountable owners.',
  minutes: 12,
}] as const;

const commissionSections: Section[] = [
  {
    heading: 'Start with the earning event, not the spreadsheet',
    body: [
      `A commission statement can look like routine arithmetic, yet most difficult cases begin before anyone multiplies a rate by an amount. The operating question is which event creates eligible credit under the approved plan. A signed order, booked revenue, collected cash, completed service, or end of a return window can each be the trigger. A Philippines-based sales administration specialist should not choose among them. The role needs the plan identifier, effective period, approved definition, and source system that records the event. Without those anchors, a tidy statement may apply the right formula to the wrong population.`,
      `Walk through one complete period before assigning the queue. Trace an ordinary transaction from CRM ownership to the billing or collection event and then into the prior statement. Note adjustments, cancellations, territory changes, and split-credit approvals. The walk-through should expose manual steps that a manager currently performs from memory. Turn those steps into source rules or owner decisions. If two systems disagree, preserve both values and their observation times; do not silently select the value that produces the expected total.`,
    ],
  },
  {
    heading: 'Freeze the plan and eligible population',
    body: [
      `Every preparation run needs a cutoff and a versioned plan. Record the participant, role, plan version, currency, period, and approved source for rates and thresholds. Then define the eligible transaction population in terms another reviewer can reproduce. “All closed deals” is too loose if reopened, cancelled, unpaid, test, house, or partner transactions follow different rules. The internal compensation owner must approve the inclusion and exclusion logic before the specialist uses it.`,
      `Keep late-arriving transactions visible. A deal recorded after cutoff may belong in a later statement, require an approved adjustment, or expose a source delay. It should not disappear because it missed the export. Store the received time, source event time, proposed treatment, and decision owner. This makes timing differences reviewable without allowing the preparer to invent an accrual rule. The same discipline applies when a person changes roles during the period: retain both assignments and route the effective-date question rather than prorating from an assumption.`,
    ],
  },
  {
    heading: 'Build a line-level statement that can be reconstructed',
    body: [
      `The working record should contain participant ID, period, transaction ID, customer or opportunity identifier where permitted, earning-event date, eligible basis, rate source, calculated amount, currency, adjustment reference, approval state, and statement version. A summary total is the result, not the evidence. Each line should point back to the approved source so a reviewer can reproduce it without asking the preparer to remember which export or worksheet was used.`,
      `Separate source facts from calculations. Preserve the source amount and currency exactly as recorded, then show any approved conversion, cap, tier, or split in distinct fields. Avoid formulas that embed business rules inside nested spreadsheet expressions with no label. Where a calculation depends on a cumulative threshold, expose the ordered transactions and running basis. Protect prior versions instead of overwriting them. A correction should state the earlier value, corrected value, reason, approving owner, and date it becomes effective.`,
    ],
  },
  {
    heading: 'Treat split credit and reversals as owner decisions',
    body: [
      `Consider a deal that closed under one representative, was transferred after signature, and was later divided between two teams in a chat message. The specialist can assemble the CRM history, order event, plan provision, existing ownership record, and attributable approval. The specialist cannot decide that the chat message controls, infer a fair percentage, or edit ownership to make the statement balance. The correct output is an exception packet with one bounded question for the compensation owner.`,
      `Reversals require the same care. A cancelled order, refunded invoice, chargeback, or corrected billing entry may affect commission only according to the applicable plan and an authorized decision. Link the original earning line to the later event, preserve both accounting states, and show whether a prior statement or payment was affected. Do not net unrelated transactions merely because they involve the same person. A visible relationship between original, reversal, and decision is more useful than a total that conceals the sequence.`,
    ],
  },
  {
    heading: 'Give disputes their own evidence path',
    body: [
      `A dispute register should not be a free-text inbox. Record the statement and line identifiers, disputed field, participant wording, evidence supplied, plan version, received time, response owner, decision, correction if any, and notice state. Keep the submitted account intact even if the claim is mistaken. The preparer may acknowledge receipt and check whether required identifiers are present, but cannot characterize the participant as wrong, interpret ambiguous plan language, award credit, or promise a payment date.`,
      `Set a service rule for preparation rather than for the decision itself. For example, complete evidence can reach the named owner within one business day while incomplete submissions receive a specific request for missing identifiers. Report owner waiting separately from preparation time. This prevents a slow policy decision from appearing as administrative delay and prevents a fast but unsupported answer from looking successful. Reopened disputes deserve their own state because they often reveal a missing source, unclear explanation, or incomplete correction.`,
    ],
  },
  {
    heading: 'Protect compensation data and approval access',
    body: [
      `Commission records can reveal pay, performance, customer, and financial information. Give the outsourced role access only to the participants and periods needed for preparation. Where tools allow it, separate export, calculation, approval, payroll handoff, and payment permissions. Named accounts and event logs matter; shared credentials prevent the company from reconstructing who viewed or changed a statement. Keep sensitive values in the approved system and use identifiers or secure links in tracking tools rather than copying full records into chat.`,
      `Review access when territories, plans, managers, or assignments change. Remove temporary exports on the documented schedule and control who may download a complete population. The Philippine National Privacy Commission publishes the Data Privacy Act as an official starting point for personal-data obligations, but the company must determine the rules that apply to its contracts, workforce, systems, and jurisdictions. Administrative staff should follow the approved handling procedure, not make legal conclusions.`,
    ],
  },
  {
    heading: 'Review accuracy without hiding the hard cases',
    body: [
      `During a pilot, review every exception and a sample of ordinary lines. Reopen the source transaction, confirm the plan version, recalculate the line, inspect adjustments, and verify that the specialist stopped at the authority boundary. Classify findings as missing source, wrong population, incorrect rate reference, arithmetic error, duplicate line, missed reversal, unapproved split, stale ownership, currency issue, or unclear plan. Different causes need different repairs; generic “accuracy” feedback does not improve the system.`,
      `Publish counts with denominators: eligible lines, prepared lines, source-complete lines, owner holds, corrected lines, disputed lines, reopened disputes, and approved handoffs. Show value bands without exposing unnecessary individual pay. A low dispute rate is not automatically evidence of quality because people may not understand their statements or may raise concerns elsewhere. Pair operational measures with sampled reconstruction and track whether corrections reach the statement and downstream payroll record.`,
    ],
  },
  {
    heading: 'Run a bounded first month',
    body: [
      `In week one, the compensation owner approves the event definitions, eligible population, plan register, statement fields, and exception routes. In week two, the specialist reconstructs a closed historical period that includes an ordinary line, threshold crossing, split-credit request, cancellation, and dispute. The reviewer compares every line with its source and records instruction gaps. In week three, prepare a limited current-period shadow statement without sending it to participants or payroll.`,
      `In week four, compare the shadow statement with the authorized internal result. Review missing transactions, owner response times, correction history, access use, and the clarity of participant-facing explanations. Expand only when another reviewer can reproduce the statement and exceptions reliably stop with the right owner. OutsourcedCompany.com can help shape the resulting Philippines-based sales administration role around this demonstrated queue. The company retains plan interpretation, compensation decisions, payroll approval, and payment control.`,
    ],
  },
];

export const blogDetails2026_10_02 = {
  'philippines-outsourcing-sales-commission-statement-preparation': {
    updated: '2026-10-02',
    datePublished: '2026-10-02',
    marker: 'daily-blog-2026-10-02-sales-commission-statement-preparation',
    takeaway: 'Delegate source-linked statement assembly, not the decisions that define earnings, resolve disputes, approve payroll, or move money.',
    comparison: [
      { weak: 'Calculate commission from the CRM total.', strong: 'Freeze the plan, earning event, eligible population, cutoff, and source record before calculating each line.' },
      { weak: 'Fix ownership questions so payroll stays on time.', strong: 'Preserve competing ownership evidence and route one bounded decision to the compensation owner.' },
    ],
    sections: commissionSections,
    script: [
      'Which approved event creates eligible credit under each current plan?',
      'Who decides split credit, reversals, and ambiguous effective dates?',
      'Can a reviewer reconstruct every statement line from retained source evidence?',
      'Which permissions separate preparation from approval, payroll handoff, and payment?',
    ],
    sources: [
      { name: 'U.S. Department of Labor: Recordkeeping and Reporting', note: 'Official overview of federal recordkeeping resources; applicability depends on the employment arrangement and jurisdiction.', url: 'https://www.dol.gov/general/topic/wages/wagesrecordkeeping' },
      { name: 'Philippine National Privacy Commission: Data Privacy Act of 2012', note: 'Official Philippine privacy-law resource relevant to handling personal information.', url: 'https://privacy.gov.ph/data-privacy-act/' },
    ],
    faqs: [
      { question: 'Can an outsourced specialist decide who receives commission credit?', answer: 'No. The specialist can assemble source evidence and apply an unambiguous approved rule, but ownership, split credit, plan interpretation, and disputes stay with authorized owners.' },
      { question: 'What should a commission statement show?', answer: 'Show the participant, period, plan version, transaction, earning event, eligible basis, rate source, calculation, adjustments, approvals, and statement version.' },
      { question: 'Should the specialist send statements directly to payroll?', answer: 'Only through a documented handoff after the designated owner has approved the completed statement and exceptions.' },
    ],
    relatedLinks: [{ label: 'Explore sales administration support', href: '/services/sales-administration' }, { label: 'Request an operations brief', href: '/contact-us' }],
  },
} as const;
