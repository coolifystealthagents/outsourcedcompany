export const site = {
  "domain": "OutsourcedCompany.com",
  "slug": "outsourcedcompany",
  "brand": "Outsourced Company",
  "primary": "outsourced company",
  "audience": "small businesses deciding what company functions to outsource first",
  "angle": "function-by-function outsourcing plans with risk controls",
  "style": "Boardroom monochrome",
  "dark": "#111111",
  "color": "#111827",
  "accent": "#dc2626",
  "heroImage": "/images/operations-meeting.jpg",
  "serviceImage": "/images/operations-meeting.jpg",
  "alt": "two people with laptops talking across a table in a glass-walled office",
  "badge": "Outsource map"
} as const;
export const services = [
  {
    slug: "operations-support",
    title: "Outsourced operations support",
    desc: "Hand off recurring order, project, and vendor updates while your team keeps approval over exceptions and spending.",
    bestTasks: [
      "Update order, project, and vendor records from approved source files",
      "Prepare daily queue notes and flag missing details",
      "Chase routine status updates using an approved message",
      "Keep SOPs and handoff checklists current",
    ],
    controls: [
      "Use named accounts with only the access the role needs",
      "Send price changes, refunds, and contract decisions to an internal owner",
      "Review a sample of completed records each week",
    ],
    firstWeek: [
      "Choose one recurring queue and share five good examples",
      "List the fields, deadlines, and exceptions the worker must check",
      "Run sample work before granting live access",
      "Review the first live batch together and update the SOP",
    ],
    faqs: [
      { question: "What should an outsourced operations worker handle first?", answer: "Start with a repeatable queue such as order updates, vendor follow-up, project records, or routine status reports. Keep purchasing, pricing, and exception approvals with your team." },
      { question: "How do we check operations work?", answer: "Use a short checklist for required fields and deadlines. Review the first batch in full, then sample completed work each week and track repeat errors." },
    ],
  },
  {
    slug: "customer-support",
    title: "Outsourced customer support",
    desc: "Add inbox and ticket coverage with approved replies, clear response targets, and a written list of issues that need a manager.",
    bestTasks: [
      "Sort incoming tickets by topic, urgency, and customer type",
      "Answer common questions from an approved help guide",
      "Record contact reasons and missing help articles",
      "Send product, billing, safety, and complaint issues to the right owner",
    ],
    controls: [
      "Set written limits for refunds, credits, and account changes",
      "Review early replies for accuracy and tone before full queue access",
      "Keep a named escalation owner for sensitive or angry customers",
    ],
    firstWeek: [
      "Share common tickets, approved replies, and words the team should avoid",
      "Mark the issues that always need an internal decision",
      "Practice on past tickets and review every draft",
      "Open a small live queue and check replies at the end of each shift",
    ],
    faqs: [
      { question: "Can outsourced support staff issue refunds?", answer: "Only if you give them a written limit and approval rule. Many teams begin with draft-only replies and keep refunds, credits, and account exceptions with a manager." },
      { question: "What should a customer support scorecard track?", answer: "Track reply accuracy, response time, reopened tickets, missed escalations, and the most common contact reasons. Avoid judging the role on ticket count alone." },
    ],
  },
  {
    slug: "admin-support",
    title: "Outsourced admin support",
    desc: "Move scheduling, inbox sorting, document upkeep, and follow-up off your desk without handing over sensitive decisions.",
    bestTasks: [
      "Sort inbox messages and prepare draft replies",
      "Schedule meetings from written availability rules",
      "Update CRM records, contact lists, and shared documents",
      "Prepare meeting notes and follow-up lists",
    ],
    controls: [
      "Separate draft access from send or approval access",
      "Keep payroll, legal, hiring, and banking decisions with an internal owner",
      "Use a daily handoff note for open items and blocked work",
    ],
    firstWeek: [
      "Pick two tasks that happen several times each week",
      "Share examples, naming rules, and a simple done checklist",
      "Practice with test records or draft-only access",
      "Review work daily before adding another task",
    ],
    faqs: [
      { question: "Which admin task is safest to outsource first?", answer: "Calendar upkeep, document formatting, CRM cleanup, and draft follow-up are good starting points because the work is easy to show and review." },
      { question: "Should an admin worker have access to the owner's full inbox?", answer: "Not by default. Start with a shared inbox, delegated mailbox, labels, or draft-only access. Add permissions only when the role needs them." },
    ],
  },
  {
    slug: "reporting-and-qa",
    title: "Outsourced reporting and quality checks",
    desc: "Keep routine reports and quality checks moving while your manager owns targets, policy calls, and any action taken from the findings.",
    bestTasks: [
      "Collect approved data and update recurring reports",
      "Check records, tickets, or calls against a written scorecard",
      "Tag errors and prepare a weekly exception list",
      "Track whether corrected work was reviewed again",
    ],
    controls: [
      "Lock metric definitions so the report does not change by reviewer",
      "Keep performance actions and policy decisions with the internal manager",
      "Trace every reported number to a named source or system view",
    ],
    firstWeek: [
      "Choose one report or review queue and define each field",
      "Score the same sample with the worker and compare results",
      "Fix unclear rules before checking live work",
      "Publish the first report with source notes and manager review",
    ],
    faqs: [
      { question: "Can an outsourced QA worker manage employee performance?", answer: "The worker can check samples, record errors, and prepare a trend report. Your manager should decide coaching, warnings, pay, or other performance actions." },
      { question: "How do we stop reporting errors?", answer: "Define every metric, name its source, lock the reporting period, and require a second check for totals. Keep an exception note when data is missing or late." },
    ],
  },
] as const;
export const blogPosts = [
  {
    "slug": "outsourced-company-planning",
    "title": "Plan a company function before you outsource it",
    "excerpt": "Write down the work, approval limits, tool access, and review owner before you look for Filipino talent.",
    "minutes": 6
  },
  {
    "slug": "outsourced-company-tasks-to-outsource",
    "title": "Which company tasks should you outsource first?",
    "excerpt": "Start with a queue your team can show, check, and hand back when a decision is needed.",
    "minutes": 7
  },
  {
    "slug": "outsourced-company-provider-questions",
    "title": "Questions to ask an outsourcing provider",
    "excerpt": "Ask who screens Filipino candidates, checks early work, limits access, and handles a poor fit.",
    "minutes": 8
  },
  {
    "slug": "outsourced-company-onboarding-checklist",
    "title": "Your first-week outsourcing checklist",
    "excerpt": "Give a Filipino team member examples, limited access, a review contact, and one small live queue.",
    "minutes": 9
  }
] as const;

export const guideDetails = {
  "outsourced-company-planning": {
    answer: "Choose one company function and describe the work as it happens now. Name the tools, the schedule, the approval limits, and the person who will review early work. That brief gives a Philippines-focused staffing partner something concrete to hire against.",
    prepare: [
      "Five examples of completed work from the same queue",
      "A list of tools and the lowest access level the role needs",
      "The choices a Filipino team member may make without approval",
      "The name of the person who will check the first live batch",
    ],
    questions: [
      "Can another person follow the current steps without asking the owner each time?",
      "Which mistakes are easy to spot before they reach a customer?",
      "What must come back to a manager?",
      "Which part of the work is still too unclear to hand off?",
    ],
  },
  "outsourced-company-tasks-to-outsource": {
    answer: "Start with work that repeats and leaves a record. Inbox sorting, order updates, CRM cleanup, routine reports, and first-line ticket replies are easier to teach than work built around judgment or one-off decisions.",
    prepare: [
      "A short list of tasks that return each day or week",
      "One good and one poor example for each task",
      "A clear done check for the first queue",
      "A list of money, policy, or customer decisions that stay in-house",
    ],
    questions: [
      "Does the task have a clear starting point and finish?",
      "Can your team review the result without doing the work again?",
      "Will the role need broad account access to begin?",
      "Who answers questions when the written guide is not enough?",
    ],
  },
  "outsourced-company-onboarding-checklist": {
    answer: "Keep the first week small. Let the new Filipino team member practice on past work, check every draft, and open one live queue only after the rules make sense. Add access and responsibility as the work becomes steady.",
    prepare: [
      "Named accounts with only the permissions needed for the first queue",
      "Finished examples and a short checklist for common errors",
      "A daily handoff note for open questions and blocked work",
      "A review time with the internal owner at the end of each shift",
    ],
    questions: [
      "Who can approve access changes?",
      "Where should the new hire record questions?",
      "Which issue should stop the queue and trigger a manager review?",
      "What must be true before a second task is added?",
    ],
  },
} as const;

export const blogDetails = {
  "outsourced-company-provider-questions": {
    updated: "2026-07-20",
    takeaway: "A good outsourcing provider can explain who screens the worker, who checks the work, how tool access is limited, and what happens if the fit is wrong. If the answers stay vague, do not rush the contract.",
    sections: [
      {
        heading: "Ask who owns quality after the first week",
        body: "Many buyers ask about hourly rates first. Ask about review instead. You want to know who checks the first ten tickets, reports, calls, or admin tasks before the role becomes normal. The provider should name the manager, the review window, and the replacement path. A simple answer is better than a polished one.",
      },
      {
        heading: "Check the access plan before sharing tools",
        body: "Filipino staff may need inboxes, CRMs, drives, phones, or billing systems. That does not mean they need full access on day one. Ask for limited permissions, named accounts, password-manager use, and a rule for sensitive customer data. The FTC tells small businesses to keep only the data they need, limit access, and protect it during use and storage.",
      },
      {
        heading: "Make the provider explain the first 14 days",
        body: "Keep the first assignment narrow. Give the staff member a small set of recurring tasks, examples of good work, and a clear daily target. Review the work at the end of week one and week two. If the provider cannot describe that launch plan, you may end up managing the whole handoff yourself.",
      },
      {
        heading: "Ask what happens when the fit is poor",
        body: "A provider should be calm about this question. Hiring sometimes misses. Ask how fast they can replace a worker, what notes they keep from the failed match, and whether you restart onboarding from zero. The answer shows whether the company has a real support layer or only a resume pipeline.",
      },
    ],
    comparison: [
      { weak: "We have great people.", strong: "Your first worker is reviewed by a named manager after the first five sample tasks." },
      { weak: "We can use all your tools.", strong: "Start with named accounts, limited permissions, and a written access list." },
      { weak: "We replace people if needed.", strong: "Replacement starts after a written fit review, with notes carried into the next match." },
    ],
    script: [
      "Who reviews the first week of work, and what do they check?",
      "Which tools should this role have on day one, and which should wait?",
      "If the worker is not a fit, what is the replacement process and timeline?",
      "Can you show me a sample weekly report or scorecard?",
    ],
    sources: [
      { name: "FTC", url: "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business", note: "Small-business guidance on limiting access to personal information and protecting customer data." },
      { name: "NIST Cybersecurity Framework 2.0", url: "https://www.nist.gov/cyberframework", note: "Useful for asking providers how they identify, protect, detect, respond, and recover around systems access." },
      { name: "SBA", url: "https://www.sba.gov/business-guide/manage-your-business/hire-manage-employees", note: "Plain guidance on hiring and managing workers, useful when building role expectations and review rules." },
    ],
    faqs: [
      { question: "Should I ask an outsourced company about price first?", answer: "Ask about scope and management first. Price matters, but the cheapest plan can become expensive if you have to rebuild the work yourself." },
      { question: "What is a safe first task for an outsourced worker?", answer: "Start with repeatable work that has examples, clear rules, and low account risk. Tickets, inbox sorting, reporting, and admin updates are easier to check than open-ended judgment work." },
      { question: "How many provider questions are enough?", answer: "Use enough questions to cover screening, quality review, tool access, reporting, replacement, schedule, and escalation rules. Ask for examples when an answer stays broad." },
    ],
  },
} as const;

export const stats = [
  { label: 'Talent source', value: 'Philippines', note: 'Filipino talent only' },
  { label: 'Role scope', value: 'One queue', note: 'begin with work that is easy to show and check' },
  { label: 'First review', value: 'Named owner', note: 'decide who checks the first live batch' },
] as const;

export const staffingOffer = {
  partner: 'a Philippines-focused staffing partner',
  promise: 'Get a role brief for Filipino talent built around the work you need to hand off.',
  fit: [
    'business owners who want Filipino talent but need help turning loose tasks into one role',
    'teams that want a written handoff and a clear manager path',
    'companies planning Filipino support for admin, operations, customer service, reporting, development, or marketing work',
  ],
  included: [
    'a role outline built from the queue, tools, schedule, and approval limits',
    'candidate requirements tied to the work rather than a generic wish list',
    'a first-week handoff for examples, access, review, and open questions',
    'a simple record of who owns quality checks and escalations',
  ],
  proof: [
    'clear task scope before hiring',
    'a written review rhythm',
    'named accountability and escalation paths',
    'an access list for tools and shared accounts',
  ],
} as const;

export const leadQuestions = [
  'Which queue or recurring task should move first?',
  'Which tools, inboxes, phones, CRMs, or systems does the role need?',
  'Which hours and response windows matter?',
  'Who checks the first live batch?',
  'Which decisions must always come back to your team?',
] as const;

export const staffingProcess = [
  { step: '1', title: 'Sort the work', body: 'Pull one recurring queue out of the general task pile. Bring a few examples of work that is already done well.' },
  { step: '2', title: 'Write the limits', body: 'List the tools the role needs, the choices it can make, and the issues that must come back to your team.' },
  { step: '3', title: 'Match in the Philippines', body: 'A Philippines-focused staffing partner can look for Filipino talent with the right schedule, communication style, and skill level.' },
  { step: '4', title: 'Check the first batch', body: 'Review early work closely. Fix the guide while the questions are fresh, then add more responsibility when the queue is steady.' },
] as const;

export const staffingFitNote = 'Every role depends on the work, schedule, tools, and review load. Requests may be routed to a staffing partner that recruits and hires only in the Philippines.';
