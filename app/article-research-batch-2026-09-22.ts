const published='2026-09-22', image='/images/operations-meeting.jpg';
type Study={slug:string;title:string;excerpt:string;service:string;question:string;decision:string;population:string;unit:string;fields:string;classes:string;primary:string;secondary:string;validation:string;scenario:string;boundary:string;risks:string;conclusion:string;related:Array<{label:string;href:string}>};
const sources=[
{label:'GAO, Standards for Internal Control in the Federal Government (checked September 22, 2026)',href:'https://www.gao.gov/products/gao-25-107721'},
{label:'NIST, Security and Privacy Controls for Information Systems and Organizations, SP 800-53 Rev. 5 (checked September 22, 2026)',href:'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final'},
{label:'Federal Trade Commission, Start with Security: A Guide for Business (checked September 22, 2026)',href:'https://www.ftc.gov/business-guidance/resources/start-security-guide-business'},
{label:'Philippine National Privacy Commission, Data Privacy Act of 2012 (checked September 22, 2026)',href:'https://privacy.gov.ph/data-privacy-act/'},
{label:'AAPOR, Transparency Initiative disclosure elements (checked September 22, 2026)',href:'https://aapor.org/standards-and-ethics/transparency-initiative/'}];
const studies:Study[]=[
  {
    "slug": "invoice-three-way-match-exception-study",
    "title": "Which invoice mismatches are ready for owner review?",
    "excerpt": "A prospective study of invoice, purchase-order, and receipt evidence before assigning finance-operations preparation.",
    "service": "finance operations support",
    "question": "For invoices submitted against an approved purchase order, which field differences can be reconstructed before an authorized owner decides the outcome?",
    "decision": "whether three-way-match preparation is sufficiently bounded for delegation and which exceptions require finance, procurement, tax, or fraud ownership",
    "population": "all supplier invoices entering one defined accounts-payable channel during eight consecutive weeks when a purchase order is required, including credits and resubmissions but excluding test records under a frozen rule",
    "unit": "one invoice version paired with one purchase order and the receipt records available at its first review",
    "fields": "supplier and entity identifiers, invoice number and date, order version, line description, quantity, unit basis, price, currency, tax field, receipt time, amendment link, duplicate indicator, hold reason, and owner",
    "classes": "exact match, authorized amendment, quantity difference, unit-basis difference, price or currency difference, tax-field difference, missing receipt, duplicate candidate, conflicting supplier identity, unsupported charge, credit-linkage failure, and unresolved",
    "primary": "the approved purchase-order version, attributable receipt event, and supplier invoice; email explanations and system summaries are supporting records rather than substitutes",
    "secondary": "class counts and denominators, mismatch prevalence by field, time to a reviewable packet, missing-source frequency, duplicate candidates, correction direction, owner response time, and unresolved age",
    "validation": "A second reviewer reconstructs every supplier-identity and duplicate candidate plus a random sample of matches and ordinary quantity differences without seeing the first classification.",
    "scenario": "An invoice states 24 cartons while the order records 24 units and the receipt records 24 cartons. The specialist preserves all three values and unit definitions but cannot reinterpret the order or approve payment.",
    "boundary": "Supplier bank changes, payment release, tax treatment, fraud allegations, commercial disputes, order amendments, and acceptance of goods remain with authorized owners.",
    "risks": "Receipts can be posted late, bundled invoices can span orders, tax fields may be calculated outside the visible system, and off-system amendments can make a mismatch look unexplained.",
    "conclusion": "Delegate matching and evidence preparation only after source precedence, unit definitions, hold codes, and payment authority are explicit.",
    "related": [
      {
        "label": "Service scope",
        "href": "/services/finance-operations-support"
      },
      {
        "label": "Research index",
        "href": "/research"
      },
      {
        "label": "Request an operations brief",
        "href": "/contact-us"
      }
    ]
  },
  {
    "slug": "return-status-handoff-completeness-study",
    "title": "Where does a product return lose its status?",
    "excerpt": "An event-linked study of return requests, carrier scans, warehouse receipt, inspection, and owner-authorized resolution.",
    "service": "ecommerce administration",
    "question": "For approved returns, which registered events remain traceable from request through carrier movement, warehouse receipt, inspection, and owner decision?",
    "decision": "whether return-status coordination can be delegated without delegating refunds, policy exceptions, inventory adjustments, or customer remedies",
    "population": "all return requests approved for one storefront and fulfillment path during ten consecutive weeks, followed for thirty days or until a registered terminal event",
    "unit": "one return authorization linked to one order and each expected returned item, without counting messages or scans as additional returns",
    "fields": "order and return identifiers, item and quantity, policy version, approval event, promised next step, label issue, carrier scan, delivery, warehouse receipt, inspection result, discrepancy, owner decision, customer notice, and closure evidence",
    "classes": "complete chain, awaiting carrier, delivered not received, received not inspected, item or quantity conflict, package without authorization, owner decision pending, customer notice missing, duplicate authorization, lost linkage, and unresolved",
    "primary": "the versioned return authorization, carrier event history, warehouse receipt, and attributable decision record; a customer message or delivery scan alone is not proof of a completed remedy",
    "secondary": "complete-chain proportion, elapsed time by state, scan-to-receipt gaps, inspection backlog, discrepancy classes, owner wait, missing notices, reopened cases, and censored returns",
    "validation": "A second reviewer independently traces all lost-linkage and discrepancy records plus a random sample of complete chains from original request to terminal event.",
    "scenario": "A carrier shows delivery, but the warehouse has no receipt event and the customer asks about a refund. The specialist records a delivered-not-received hold and assembles evidence; delivery alone does not authorize a refund.",
    "boundary": "Refunds, exchanges, policy exceptions, fraud conclusions, inventory adjustments, customer remedies, and carrier claims remain with authorized owners.",
    "risks": "Carrier timestamps can change, consolidated parcels can contain several returns, warehouse scans may lag physical receipt, and communications outside the registered channel may be absent.",
    "conclusion": "Staff return-status coordination only when identifiers survive every handoff and a named owner decides remedies from a complete exception packet.",
    "related": [
      {
        "label": "Service scope",
        "href": "/services/ecommerce-administration"
      },
      {
        "label": "Research index",
        "href": "/research"
      },
      {
        "label": "Request an operations brief",
        "href": "/contact-us"
      }
    ]
  },
  {
    "slug": "customer-record-merge-provenance-study",
    "title": "Can duplicate customer records be reviewed without losing provenance?",
    "excerpt": "A blinded review study of duplicate candidates, controlling fields, consent history, and reversible merge preparation.",
    "service": "data management",
    "question": "Among system-flagged duplicate customer records, which candidates contain enough attributable evidence for an owner to approve a merge, reject it, or request more information?",
    "decision": "whether duplicate-candidate preparation is reviewable and reversible without delegating identity, consent, suppression, deletion, or retention decisions",
    "population": "all duplicate candidates produced by one frozen matching rule during six weekly runs, including dismissed candidates and excluding synthetic records under a registered rule",
    "unit": "one candidate pair or cluster generated in one run, linked across later runs so repeated flags are not counted as new candidates",
    "fields": "record identifiers, source systems, creation times, normalized and original match values, account relationships, consent and suppression fields, activity history, prior merge links, owner, and decision evidence",
    "classes": "approved same entity, rejected different entity, household or business relationship, shared contact value, consent conflict, suppression conflict, controlling-source conflict, insufficient evidence, repeated candidate, already merged, and unresolved",
    "primary": "the original source records and their attributable field histories; a matching score is a review signal and never the controlling identity or consent record",
    "secondary": "candidate and decision counts, evidence-complete proportion, class distribution, repeated candidates, conflicts by field, decision time, reversal frequency, and unresolved age",
    "validation": "Two reviewers independently code a stratified sample with system confidence hidden, then compare classifications before reconciliation against a frozen field dictionary.",
    "scenario": "Two records share an email address but have different people, account histories, and marketing preferences. A score is evidence for review, not permission to merge identities or overwrite consent.",
    "boundary": "Identity resolution, consent interpretation, suppression removal, deletion, retention exceptions, irreversible merges, and restricted-history access remain authorized-owner decisions.",
    "risks": "Shared identifiers are common, historical sources can be incomplete, normalization can hide meaningful differences, and the true relationship may remain unknowable from permitted records.",
    "conclusion": "Outsource candidate preparation only with reversible steps, visible original values, privacy-minimized access, and owner approval before any destructive change.",
    "related": [
      {
        "label": "Service scope",
        "href": "/services/data-management"
      },
      {
        "label": "Research index",
        "href": "/research"
      },
      {
        "label": "Request an operations brief",
        "href": "/contact-us"
      }
    ]
  },
  {
    "slug": "project-dependency-acceptance-study",
    "title": "Do project handoffs contain usable acceptance evidence?",
    "excerpt": "A cohort study of deliverable submission, acceptance criteria, reviewer response, correction, and dependency release.",
    "service": "project coordination",
    "question": "When a deliverable is marked ready, how often can the next owner reconstruct the criteria, submitted version, decision, correction, and downstream release state?",
    "decision": "whether deliverable coordination can be delegated while scope, budget, risk acceptance, quality standards, and final acceptance remain with accountable owners",
    "population": "every deliverable first marked ready in one recurring project program during twelve weeks, including rejected, superseded, and withdrawn submissions under registered rules",
    "unit": "one deliverable at its first ready event, followed across revisions under a stable identifier",
    "fields": "deliverable identifier, scope version, acceptance criteria, artifact version, dependencies, readiness event, reviewer authority, response, cited evidence, correction, acceptance event, release event, and cutoff state",
    "classes": "accepted first submission, accepted after correction, criteria absent, wrong version, reviewer authority unclear, evidence missing, dependency blocked, scope changed, superseded, withdrawn, and unresolved",
    "primary": "the frozen scope, submitted artifact version, attributable reviewer decision, and dependency-release event; chat reactions do not count unless the project rule makes them authoritative",
    "secondary": "acceptance counts and denominators, criteria coverage, first-submit acceptance, correction cycles, review and dependency wait, authority gaps, version conflicts, and unresolved age",
    "validation": "A second reviewer reconstructs all authority and version-conflict cases plus a random sample of accepted submissions from frozen scope through downstream release.",
    "scenario": "A deliverable receives chat approval, but the linked artifact changes afterward and a dependency starts from the new file. The study preserves the approved version and treats later release as a separate event.",
    "boundary": "Scope, budget, risk acceptance, quality standards, deadline tradeoffs, stakeholder commitments, and final acceptance remain with accountable project owners.",
    "risks": "Informal approvals may be invisible, systems can overwrite versions, criteria can change during review, and delayed dependencies may reflect priorities outside the observed project.",
    "conclusion": "Delegate coordination after the buyer makes versions, acceptance authority, evidence, and dependency release observable in the same operating record.",
    "related": [
      {
        "label": "Service scope",
        "href": "/services/project-coordination"
      },
      {
        "label": "Research index",
        "href": "/research"
      },
      {
        "label": "Request an operations brief",
        "href": "/contact-us"
      }
    ]
  },
  {
    "slug": "customer-commitment-traceability-study",
    "title": "Can customer commitments be traced to an authorized source?",
    "excerpt": "A message-sample study of promised actions, policy sources, owner approval, fulfillment evidence, and correction.",
    "service": "customer experience support",
    "question": "In customer conversations containing a promised action or deadline, what proportion links the promise to current policy, an approved exception, or an attributable owner decision?",
    "decision": "whether customer-message preparation can be delegated without delegating compensation, refunds, liability statements, safety responses, or policy exceptions",
    "population": "all conversations in two support queues that close during eight consecutive weeks and contain a registered commitment phrase or promise field, including reopened conversations",
    "unit": "one customer conversation linked across channels and reopenings under one stable case identifier",
    "fields": "pseudonymous identifiers, channel, issue class, policy version, promise type, amount if applicable, deadline, approving role, approval event, fulfillment event, customer notice, reopening, and correction",
    "classes": "standard-policy commitment, approved exception, owner decision linked, ambiguous commitment, unsupported deadline, conflicting promises, fulfillment verified, fulfillment missing, corrected, reopened, and unresolved",
    "primary": "the policy version effective at message time, attributable exception decision, and fulfillment event; a draft, template, or prior conversation is supporting context",
    "secondary": "commitment counts and denominators, source-linked proportion, approval coverage, fulfillment evidence, conflicting promises, correction and reopening rates, elapsed time, and missingness",
    "validation": "Two reviewers independently classify a stratified sample of standard, exception, conflicting, corrected, and reopened conversations using the policy effective at message time.",
    "scenario": "An agent says a replacement will arrive Friday, while policy supports dispatch within two business days and no delivery date. The specialist can flag and correct the unsupported commitment through the approved route, not invent a remedy.",
    "boundary": "Compensation, refunds, liability statements, safety responses, legal positions, policy exceptions, account restrictions, and promises outside written authority remain with designated owners.",
    "risks": "Calls may lack usable transcripts, phrase rules can miss implied promises, policies can change, and fulfillment may occur in a system the study cannot inspect.",
    "conclusion": "Staff customer triage only when promises are bounded, attributable, reviewable, and connected to evidence that the approved action occurred.",
    "related": [
      {
        "label": "Service scope",
        "href": "/services/customer-experience-support"
      },
      {
        "label": "Research index",
        "href": "/research"
      },
      {
        "label": "Request an operations brief",
        "href": "/contact-us"
      }
    ]
  }
];
function body(s:Study){return [
`Decision in scope. This study is designed for a buyer considering ${s.service} support. It answers ${s.decision}. It does not estimate a universal industry benchmark, promise savings, or rate individual workers. The useful output is a reproducible description of one buyer's current queue and the controls needed before responsibility expands.`,
`Research question. ${s.question} The question is fixed before records are reviewed. A clear question prevents analysts from selecting a favorable metric after seeing the data and keeps the work tied to a real staffing decision rather than a generic outsourcing claim.`,
`Evidence base and checked sources. The protocol was prepared from current primary guidance checked on September 22, 2026. GAO's internal-control standards inform authorization, segregation, accurate recording, service-organization communication, and monitoring. NIST SP 800-53 informs attributable, time-ordered records and least-privilege boundaries. FTC guidance supports data minimization and need-based access. The Philippine Data Privacy Act provides the local privacy context. AAPOR transparency elements inform disclosure of methods, exclusions, and limitations. These sources support the research design; none supplies results for the buyer's queue.`,
`Population and study window. Include ${s.population}. Freeze the start and end dates, eligibility rules, systems, working timezone, and terminal events in a short protocol before export. Keep a screening log with counts for included records, excluded tests, missing identifiers, out-of-window events, and records withheld because access was not permitted.`,
`Unit of analysis. Count ${s.unit}. Replies, reminders, exports, edits, and status changes are events attached to that unit, not additional units. This distinction is essential: counting activity instead of cases can make a noisy process appear larger or more successful without showing whether the underlying work reached a usable outcome.`,
`Field dictionary. Capture only the minimum fields necessary for the registered question: ${s.fields}. For every field, record its allowed values, source, timestamp meaning, timezone, missing-value treatment, and whether it can change. Store stable pseudonymous identifiers in the analysis file and keep direct identifiers in the approved operating system.`,
`Controlling and supporting records. Treat ${s.primary}. When two sources disagree, retain both values, their effective times, and the conflict class. Do not silently select the value that makes the case look complete. Source precedence must come from the buyer's approved operating rule, not from analyst preference.`,
`Outcome taxonomy. Classify each unit as ${s.classes}. The classes must be mutually understandable even when they are not perfectly mutually exclusive. If multiple conditions can coexist, preserve a primary disposition and separate flags. Keep an unresolved class; forcing incomplete histories into a successful or failed state creates false precision.`,
`Measures. Report raw numerators and denominators before percentages. The primary measure is the distribution of registered outcome classes. Secondary measures are ${s.secondary}. Show medians and selected percentiles for elapsed times, because a mean can hide a long tail. Report missingness and censoring beside every affected measure.`,
`Chronology. Reconstruct events in the site's configured timezone while retaining original offsets. Record creation, first action, each material transition, owner request, response, correction, and terminal event. Establish a deterministic rule for events sharing a timestamp. Never infer active work from elapsed time: distinguish preparation, waiting, scheduled delay, system delay, and unknown time whenever the record permits.`,
`Quality checks. ${s.validation} Reviewers use the same frozen codebook and record disagreements before discussion. Publish agreement counts for the sample and list rules changed after reconciliation. If a rule changes materially, recode the affected population or label the analysis exploratory rather than mixing definitions.`,
`Operational example. ${s.scenario} This example demonstrates classification, not an observed company result. The real study must preserve the actual chronology and may reach a different distribution. Examples should be used to test whether the protocol gives two reviewers the same answer, not to manufacture evidence.`,
`Role design boundary. A Philippines-based specialist can collect permitted records, link identifiers, apply the codebook, flag conflicts, prepare exception packets, and maintain the study log. ${s.boundary} Location does not change authority. Approaching deadlines and absent owners do not convert silence into permission.`,
`Privacy and security. Use named accounts, least privilege, approved exports, encrypted transfer and storage, and a written retention period. Do not copy whole inboxes or unrestricted personnel, customer, or financial histories when a bounded event table will answer the question. Remove analysis copies when the retention purpose ends and log any access or data-quality incident through the buyer's existing route.`,
`Bias and alternative explanations. Separate description from inference. Differences can reflect case complexity, workload, system design, source quality, shift coverage, policy changes, or missing records rather than coordinator performance or an outsourcing model. Stratify only on variables registered in advance and show small groups as counts; suppress or combine cells where privacy or instability requires it.`,
`Known limitations. ${s.risks} A single buyer, short window, and operational sample do not establish causality or external validity. The study cannot prove what a person knew, why an event occurred, or how another company would perform. Record changes to systems, policy, staffing, and demand that overlap the window.`,
`Decision rule. Before collection, state what evidence would lead to each action: proceed with a narrow pilot, repair records and repeat measurement, retain the process internally, or request specialist review. The rule should consider evidence coverage and unresolved risk, not only speed. A faster queue with unclear authority or missing records is not a successful operating design.`,
`Pilot design. If the evidence is usable, test one bounded queue with a named internal owner, backup, permitted actions, stop conditions, sample review, and rollback path. Compare the pilot with the registered baseline using the same units and classifications. Do not add tasks mid-pilot without versioning the scope and explaining how the change affects comparability.`,
`Niche conclusion. ${s.conclusion} For an OutsourcedCompany.com buyer, the staffing question follows the process question: document what can be observed, keep consequential decisions with accountable owners, and expand only when the evidence path remains intact under ordinary exceptions.`]}
export const researchPosts2026_09_22=studies.map(s=>({slug:`philippines-outsourcing-${s.slug}`,title:s.title,excerpt:s.excerpt,updated:published,datePublished:published,displayDate:'September 22, 2026',image,imageAlt:'Operations colleagues reviewing a documented workflow at a meeting table',body:body(s),sources,related:s.related,cta:`Bring one ${s.service} queue, its source records, and its owner boundaries to the staffing intake.`}));
