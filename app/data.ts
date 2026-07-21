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
  "heroImage": "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
  "serviceImage": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  "alt": "operations team managing outsourced departments",
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
    "title": "Outsourced Company: What does it plan?",
    "excerpt": "A plain-English guide to staffing details, scope, and hidden planning.",
    "minutes": 6
  },
  {
    "slug": "outsourced-company-tasks-to-outsource",
    "title": "Outsourced Company: What tasks should you outsource first?",
    "excerpt": "Start with recurring work that has examples and clear review rules.",
    "minutes": 7
  },
  {
    "slug": "outsourced-company-provider-questions",
    "title": "Outsourced Company: Questions to ask before hiring",
    "excerpt": "Use these questions before you sign with a provider or freelancer.",
    "minutes": 8
  },
  {
    "slug": "outsourced-company-onboarding-checklist",
    "title": "Outsourced Company: First week onboarding checklist",
    "excerpt": "A simple checklist for tools, SOPs, calls, QA, and reporting.",
    "minutes": 9
  }
] as const;

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
        body: "Remote staff often need inboxes, CRMs, drives, phones, or billing systems. That does not mean they need full access on day one. Ask for limited permissions, named accounts, password-manager use, and a rule for sensitive customer data. The FTC tells small businesses to keep only the data they need, limit access, and protect it during use and storage.",
      },
      {
        heading: "Make the provider explain the first 14 days",
        body: "The safest pilot is narrow. Give the staff member a small set of recurring tasks, examples of good work, and a daily output target. Then review quality at the end of week one and week two. If the provider cannot describe that launch plan, you may end up managing the whole handoff yourself.",
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
      { question: "How many provider questions are enough?", answer: "Use six to ten questions. Cover screening, quality review, tool access, reporting, replacement, schedule, and escalation rules." },
    ],
  },
} as const;

export const stats = [{label:'Typical savings target',value:'30-60%',note:'depends on role, management, and local hiring plan'},{label:'Best pilot length',value:'14 days',note:'enough time to test quality before scaling'},{label:'Start with',value:'5-10 tasks',note:'clear recurring tasks beat vague job descriptions'}] as const;

export const staffingOffer = {
  partner: 'our staffing team',
  promise: 'Get a managed offshore staffing plan built around the work you need removed from your plate.',
  fit: [
    'business owners who need reliable remote staff but do not want to screen alone',
    'teams that want trained support, backup coverage, and a clear manager path',
    'companies that need help with admin, operations, customer support, calls, bookkeeping, development, or marketing work',
  ],
  included: [
    'role planning call to turn your task list into a clear staffing scope',
    'candidate matching based on skills, schedule, tools, and communication needs',
    'onboarding guidance for SOPs, scorecards, reporting, and safe tool access',
    'managed support so quality, attendance, and replacement questions do not sit only on the owner',
  ],
  proof: [
    'clear task scope before hiring',
    'weekly reporting rhythm',
    'named accountability and escalation path',
    'simple handoff plan for tools, SOPs, and quality checks',
  ],
} as const;

export const leadQuestions = [
  'What work do you want off your plate first?',
  'Which tools, inboxes, phones, CRMs, or systems will the staff member use?',
  'What hours, time zone, and response time do you need?',
  'Who checks quality during the first two weeks?',
  'What should the staff member never decide without approval?',
] as const;

export const staffingProcess = [
  { step: '1', title: 'Map the role', body: 'We turn messy tasks into one clear role with outcomes, tools, limits, and a first-week checklist.' },
  { step: '2', title: 'Match the staff', body: 'our staffing team can help match remote staff to the work, schedule, communication style, and skill level you need.' },
  { step: '3', title: 'Launch with control', body: 'Start with SOPs, sample work, limited access, daily review, and a simple scorecard so quality is easy to see.' },
  { step: '4', title: 'Scale what works', body: 'Once the first tasks are stable, add more work, better reporting, and stronger delegation without guessing.' },
] as const;

export const staffingFitNote = 'Every staffing plan depends on role scope, schedule, skills, tools, and management needs. Send the role details and our staffing team can guide the best fit.';
