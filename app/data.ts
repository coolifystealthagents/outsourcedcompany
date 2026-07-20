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
    "slug": "operations-support",
    "title": "Operations Support",
    "desc": "Operations Support for teams using outsourced company with clear SOPs, weekly review, and measurable handoffs."
  },
  {
    "slug": "customer-support",
    "title": "Customer Support",
    "desc": "Customer Support for teams using outsourced company with clear SOPs, weekly review, and measurable handoffs."
  },
  {
    "slug": "admin-support",
    "title": "Admin Support",
    "desc": "Admin Support for teams using outsourced company with clear SOPs, weekly review, and measurable handoffs."
  },
  {
    "slug": "reporting-and-qa",
    "title": "Reporting and QA",
    "desc": "Reporting and QA for teams using outsourced company with clear SOPs, weekly review, and measurable handoffs."
  }
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

export const stealthOffer = {
  partner: 'Stealth Agents',
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
  { step: '2', title: 'Match the staff', body: 'Stealth Agents can help match remote staff to the work, schedule, communication style, and skill level you need.' },
  { step: '3', title: 'Launch with control', body: 'Start with SOPs, sample work, limited access, daily review, and a simple scorecard so quality is easy to see.' },
  { step: '4', title: 'Scale what works', body: 'Once the first tasks are stable, add more work, better reporting, and stronger delegation without guessing.' },
] as const;

export const staffingFitNote = 'Every staffing plan depends on role scope, schedule, skills, tools, and management needs. Send the role details and Stealth Agents can guide the best fit.';
