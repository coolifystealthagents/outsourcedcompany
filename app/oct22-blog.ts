// Drop-in blog module for coolifystealthagents/outsourcedcompany.
// Exports the two objects that app/data.ts expects: a lightweight post list for
// cards and a details map for the article route. All entries dated 2026-10-22.
// Hero images are 1200x630 WebP files copied to public/oct22/ during integration.

export const blogPosts2026_10_22 = [
  { "slug": "philippines-outsourcing-first-30-day-onboarding-plan", "title": "A First 30 Day Onboarding Plan for a Philippines Hire", "excerpt": "A week-by-week plan that starts with one real queue, named checks, and a written authority line instead of a long orientation deck.", "minutes": 10 },
  { "slug": "offshore-role-scorecard-before-hiring", "title": "Write the Role Scorecard Before You Interview", "excerpt": "Define outcomes, evidence, tools, and stop rules first. A scorecard keeps a Philippines search from drifting into a personality contest.", "minutes": 9 },
  { "slug": "philippines-shift-coverage-planning", "title": "Plan Philippines Shift Coverage Around Customer Hours", "excerpt": "Map the work to the customer clock, not to a generic night shift. Include handoffs, breaks, and the decisions each shift can make.", "minutes": 9 },
  { "slug": "outsourced-team-backup-coverage-map", "title": "Build a Backup Coverage Map for an Outsourced Team", "excerpt": "Name a second person for every critical task, test the handoff, and decide what waits when both are unavailable.", "minutes": 8 },
  { "slug": "remote-workstation-security-baseline", "title": "Set a Remote Workstation Baseline Before Day One", "excerpt": "Device state, patching, screen privacy, and account separation are part of the job design, not an afterthought.", "minutes": 9 },
  { "slug": "philippines-holiday-coverage-calendar", "title": "Build a Philippines Holiday Coverage Calendar", "excerpt": "Regular and special holidays affect different teams in different ways. Plan the queue, the backups, and the customer message in advance.", "minutes": 8 },
  { "slug": "va-task-sop-writing-from-screen-recording", "title": "Turn a Screen Recording Into a Usable SOP", "excerpt": "A recording is raw material. Extract decisions, evidence, stop points, and a test case before calling it a procedure.", "minutes": 9 },
  { "slug": "outsourced-team-meeting-cadence", "title": "Set a Meeting Cadence That Respects the Work", "excerpt": "Daily huddles, weekly reviews, and monthly planning should each answer a different question. Protect the focus time between them.", "minutes": 8 },
  { "slug": "philippines-payroll-document-boundaries", "title": "Handle Payroll Documents Without Becoming the Payroll Owner", "excerpt": "A Philippines support role can collect and route payroll paperwork. It should not interpret entitlements or promise statutory outcomes.", "minutes": 9 },
  { "slug": "offshore-hiring-work-sample-design", "title": "Design a Paid Work Sample for an Offshore Role", "excerpt": "Use a real, sanitized task with a rubric, a time limit, and the same tools the role will use. Score evidence, not presentation.", "minutes": 9 },
  { "slug": "remote-access-offboarding-checklist", "title": "A Remote Access Offboarding Checklist That Closes Gaps", "excerpt": "Removing the main account is not enough. Check sessions, tokens, shared drives, devices, and the accounts nobody remembers.", "minutes": 8 },
  { "slug": "outsourced-team-quality-review-cadence", "title": "Run a Quality Review Cadence for an Outsourced Team", "excerpt": "Sample the work, review the evidence with the owner, choose one correction, and check whether it held.", "minutes": 9 }
];

const sharedSources = {
  worldBank: {
    "name": "World Bank, Philippines Overview",
    "url": "https://www.worldbank.org/en/country/philippines/overview",
    "note": "Country context for Philippines-based service work. Checked October 22, 2026."
  },
  psa: {
    "name": "Philippine Statistics Authority, Labor Force Survey",
    "url": "https://psa.gov.ph/statistics/labor-force-survey",
    "note": "Official labor statistics and survey methodology. Checked October 22, 2026."
  },
  ilo: {
    "name": "International Labour Organization, Data",
    "url": "https://www.ilo.org/data",
    "note": "International labor standards and data context. Checked October 22, 2026."
  },
  dole: {
    "name": "Department of Labor and Employment, Philippines",
    "url": "https://www.dole.gov.ph/",
    "note": "Philippine labor policy source. Checked October 22, 2026."
  },
  nistCsf: {
    "name": "NIST Cybersecurity Framework 2.0",
    "url": "https://www.nist.gov/cyberframework",
    "note": "Governance, identity, and risk outcomes. Checked October 22, 2026."
  },
  cisa: {
    "name": "CISA Cybersecurity Performance Goals",
    "url": "https://www.cisa.gov/cybersecurity-performance-goals",
    "note": "Practical access, logging, and recovery goals. Checked October 22, 2026."
  },
  privacy: {
    "name": "NIST Privacy Framework",
    "url": "https://www.nist.gov/privacy-framework",
    "note": "Privacy risk framing for collection, use, and retention. Checked October 22, 2026."
  },
  npc: {
    "name": "National Privacy Commission, Philippines",
    "url": "https://privacy.gov.ph/",
    "note": "Philippine data privacy regulator. Checked October 22, 2026."
  },
  gao: {
    "name": "U.S. GAO, Assessing Data Reliability",
    "url": "https://www.gao.gov/products/gao-20-283g",
    "note": "Provenance and fitness-for-use questions. Checked October 22, 2026."
  },
  wcag: {
    "name": "W3C Web Content Accessibility Guidelines 2.2",
    "url": "https://www.w3.org/TR/WCAG22/",
    "note": "Testable accessibility criteria. Checked October 22, 2026."
  }
};

export const blogDetails2026_10_22 = {
  "philippines-outsourcing-first-30-day-onboarding-plan": {
    "updated": "2026-10-22",
    "datePublished": "2026-10-22",
    "marker": "october-22-2026-philippines-outsourcing-first-30-day-onboarding-plan",
    "takeaway": "The first month should prove that one real queue can be handled with evidence, clear authority, and a named reviewer. Breadth comes later.",
    "image": "/oct22/philippines-outsourcing-first-30-day-onboarding-plan.webp",
    "sections": [
      {
        "heading": "Week one: orient around one queue",
        "body": [
          "Start with the work, not the company history. Pick one recurring queue with a stable volume and a visible output. Show the new hire five finished examples, one unfinished example, and one example that went wrong. Explain who receives the output and what evidence proves acceptance. Give them read access first and a narrow practice lane second. By the end of the week they should be able to describe the request types, the tools, the owner of each exception, and the point where they must stop."
        ]
      },
      {
        "heading": "Week two: shadow and reverse-shadow",
        "body": [
          "During shadowing, the new hire watches real work and writes down every decision they do not understand. The list becomes the training agenda. During reverse-shadowing, they do the work while an experienced reviewer watches the same screen and checks the source, the note, and the customer message. Correct one thing at a time. Do not bury feedback in a long review document. The goal is a repeatable path, not perfect speed. Keep a daily done list so the new hire can see progress that is not measured only by ticket count."
        ]
      },
      {
        "heading": "Week three: own the lane with a review gate",
        "body": [
          "Hand over the queue with a named reviewer and a sample rule. For example, review every item for the first two days, then a random half, then a risk-weighted sample. The reviewer checks accuracy, evidence, authority, and the customer-facing message. Failed items return with a reason code, not just a correction. Track how often the new hire asks for information that should be in the brief. Repeated questions usually indicate a missing source or an unclear rule, not a weak hire."
        ]
      },
      {
        "heading": "Week four: test the edge cases",
        "body": [
          "Run a small set of adverse cases: missing information, an angry customer, a request outside the lane, a system outage, and a conflict between two owners. Ask the new hire to state the next action and the stop condition before acting. Then review the record. The purpose is to make the authority line concrete. A person who can explain when to stop is safer than one who has memorized every routine step but freezes at the first exception."
        ]
      },
      {
        "heading": "Close the month with an evidence review",
        "body": [
          "Meet with the new hire, the reviewer, and the business owner. Review the first month's sample, the error pattern, the questions that recurred, and the tasks that still need supervision. Decide what moves into the standard lane, what stays gated, and what must be redesigned. Set the next review date. Do not declare the hire fully productive because the calendar says thirty days have passed. Declare the lane ready because the evidence shows it."
        ]
      }
    ],
    "script": [
      "Which queue are we proving this month?",
      "What does a finished item look like, and who accepts it?",
      "Which decisions must stop and return to the owner?",
      "What evidence will we review at the end of week four?"
    ],
    "sources": [sharedSources.nistCsf, sharedSources.ilo, sharedSources.psa],
    "faqs": [
      { "question": "Should onboarding start with several task types?", "answer": "No. One stable queue gives the new hire and the reviewer a fair basis for evidence. Add task types after the first lane is accepted." },
      { "question": "How much review is enough in week three?", "answer": "Use a declared sample that starts broad and narrows as evidence improves. Keep risk-weighted review for access, money, and customer commitments." },
      { "question": "What if the new hire asks the same question repeatedly?", "answer": "Check the brief, the source, and the tool access before treating it as a performance issue. Repetition often points to an unowned rule." }
    ],
    "relatedLinks": [
      { "label": "Write the Role Scorecard Before You Interview", "href": "/blog/offshore-role-scorecard-before-hiring" },
      { "label": "Turn a Screen Recording Into a Usable SOP", "href": "/blog/va-task-sop-writing-from-screen-recording" }
    ]
  },
  "offshore-role-scorecard-before-hiring": {
    "updated": "2026-10-22",
    "datePublished": "2026-10-22",
    "marker": "october-22-2026-offshore-role-scorecard-before-hiring",
    "takeaway": "A scorecard turns a vague role into observable outcomes. It also gives every interviewer the same evidence to compare.",
    "image": "/oct22/offshore-role-scorecard-before-hiring.webp",
    "sections": [
      {
        "heading": "Start with the output, not the title",
        "body": [
          "A title such as virtual assistant or operations support describes a category, not a job. Write the outputs the role must produce in the first ninety days. For example: invoices matched to purchase orders within one business day, customer replies that use approved language, or a weekly report delivered by Tuesday morning. Each output needs a quality standard and an owner who accepts it. If you cannot describe the output, you are not ready to interview. You are still designing the work."
        ]
      },
      {
        "heading": "Separate must-have evidence from trainable knowledge",
        "body": [
          "List the evidence you need at the start: written English, spreadsheet accuracy, comfort with a ticketing tool, or experience handling confidential records. Then list what you are willing to teach. Mixing the two produces interviews that test whether a candidate already knows your internal system, which is not the same as whether they can learn it. For each must-have, write a question or a short exercise that produces evidence. Avoid adjectives such as proactive or detail-oriented unless you define the observable behavior."
        ]
      },
      {
        "heading": "Score the work sample, not the story",
        "body": [
          "Use a small, sanitized task that resembles the real queue. Give the same instructions, the same time limit, and the same tools to every candidate. Score accuracy, source use, note quality, and the ability to flag uncertainty. A candidate who completes the task quickly but invents a missing fact should score lower than one who completes less and asks the right question. Keep the rubric in front of you during the review. Memory drifts toward the most recent or most confident conversation."
        ]
      },
      {
        "heading": "Test the authority boundary",
        "body": [
          "Include one scenario where the correct action is to stop. For a support role, that might be a refund request without approval or a password reset that fails verification. For a reporting role, it might be a request to publish a number that conflicts with the source. Ask the candidate what they would do and why. You are looking for a clear description of the limit, the owner, and the safe next step. A candidate who promises to handle everything is not demonstrating flexibility. They are demonstrating that they have not understood the risk."
        ]
      },
      {
        "heading": "Agree before you open the search",
        "body": [
          "Have the hiring manager, the reviewer, and the business owner sign off on the scorecard. Include the weighting and the minimum evidence for a yes. Decide in advance what happens when a candidate is strong on one axis and weak on another. Without that agreement, the decision becomes a negotiation after the interviews, and the scorecard becomes decoration. Keep the scored examples and the panel notes for the first ninety days so the onboarding plan can target the gaps you actually observed."
        ]
      }
    ],
    "script": [
      "What output must this role produce in the first ninety days?",
      "Which evidence must exist on day one, and what will we teach?",
      "What does a correct stop look like in this role?",
      "Who agrees to the scorecard before the search begins?"
    ],
    "sources": [sharedSources.ilo, sharedSources.worldBank, sharedSources.gao],
    "faqs": [
      { "question": "Can a scorecard include culture fit?", "answer": "Only if you define the observable behavior. Replace vague fit with specific examples such as how the person handles a conflicting instruction or a missed deadline." },
      { "question": "Should the work sample be paid?", "answer": "Pay for substantive work that produces value. A short, clearly bounded exercise can be part of the process, but it should not become free production work." },
      { "question": "How many interviewers are needed?", "answer": "Use as few as needed to cover the evidence. Each interviewer should score a distinct part of the rubric, not repeat the same conversation." }
    ],
    "relatedLinks": [
      { "label": "Design a Paid Work Sample for an Offshore Role", "href": "/blog/offshore-hiring-work-sample-design" },
      { "label": "A First 30 Day Onboarding Plan for a Philippines Hire", "href": "/blog/philippines-outsourcing-first-30-day-onboarding-plan" }
    ]
  },
  "philippines-shift-coverage-planning": {
    "updated": "2026-10-22",
    "datePublished": "2026-10-22",
    "marker": "october-22-2026-philippines-shift-coverage-planning",
    "takeaway": "Coverage is a customer promise. Build it from the customer clock, the decision rights, and the real handoff cost.",
    "image": "/oct22/philippines-shift-coverage-planning.webp",
    "sections": [
      {
        "heading": "Map the customer clock first",
        "body": [
          "List the hours when customers actually need a response, not the hours when the office is open. Separate live needs such as phone calls and urgent chat from asynchronous needs such as email and data cleanup. A Philippines-based team can cover US, UK, or Australian hours, but the shift has to be designed around the customer window and the handoff. Write the target response time for each channel and each request type. Then check whether the proposed shift can meet it without relying on someone staying late every day."
        ]
      },
      {
        "heading": "Decide what each shift may do",
        "body": [
          "A shift that can answer but cannot act is not full coverage. List the decisions available during each window: password resets, standard refunds, access changes, incident declarations, and customer credits. If a decision needs an owner who is offline, either delegate a bounded rule with evidence or state the wait. Do not tell customers that support is available around the clock when the only overnight action is to take a message. The service description should match the authority map."
        ]
      },
      {
        "heading": "Plan the handoff at the boundary",
        "body": [
          "Every shift change needs a fixed handoff point and a template. The outgoing team records open items, verified facts, next actions, promised updates, and any owner waiting. The incoming team acknowledges the high-consequence items. Avoid a handoff that is only a list of ticket numbers. Include the customer's time zone and the next update time in the customer's local clock. If the handoff happens during a live incident, use a verbal or synchronous bridge in addition to the written note."
        ]
      },
      {
        "heading": "Protect breaks, leave, and holidays",
        "body": [
          "A coverage plan that assumes every seat is filled every day will fail. Build a bench for planned leave, sick days, and Philippine holidays. Cross-train at least one person on each critical task. Decide which work can wait and which must be covered by an on-call owner. Publish the holiday calendar to customers in advance, with the expected response time. A clear holiday notice is better than a silent queue that looks open."
        ]
      },
      {
        "heading": "Review the plan against actual work",
        "body": [
          "Each month, compare the planned coverage with the actual arrivals and responses. Look at first response, resolution, handoff loss, and missed updates by hour and by channel. A gap at 2 a.m. may be acceptable if the work is asynchronous. A gap at 9 a.m. in the customer's busiest window is not. Adjust the shift or the promise, not just the staffing number. The plan is working when the customer experience matches the published expectation."
        ]
      }
    ],
    "script": [
      "Which customer hours require a live response?",
      "What decisions can each shift make without waking an owner?",
      "Where is the handoff point, and who acknowledges it?",
      "What happens during leave, illness, and Philippine holidays?"
    ],
    "sources": [sharedSources.psa, sharedSources.dole, sharedSources.worldBank],
    "faqs": [
      { "question": "Is a night shift always required?", "answer": "No. Many tasks are better handled asynchronously. Use a night shift only where the customer needs a live response or a same-window decision." },
      { "question": "How do we avoid handoff errors?", "answer": "Use a fixed template, require acknowledgment for high-consequence items, and include the next action and promised update in the customer's time zone." },
      { "question": "Should the holiday calendar include local special holidays?", "answer": "Yes, where they affect staffing. Confirm the official dates for the year and publish the coverage plan before the month begins." }
    ],
    "relatedLinks": [
      { "label": "Build a Backup Coverage Map for an Outsourced Team", "href": "/blog/outsourced-team-backup-coverage-map" },
      { "label": "Build a Philippines Holiday Coverage Calendar", "href": "/blog/philippines-holiday-coverage-calendar" }
    ]
  },
  "outsourced-team-backup-coverage-map": {
    "updated": "2026-10-22",
    "datePublished": "2026-10-22",
    "marker": "october-22-2026-outsourced-team-backup-coverage-map",
    "takeaway": "A backup map names a second person, the evidence they need, and the work that waits. It is not a list of names on a slide.",
    "image": "/oct22/outsourced-team-backup-coverage-map.webp",
    "sections": [
      {
        "heading": "List the critical tasks, not the job titles",
        "body": [
          "Start with the tasks that would stop a customer, a payment, or a compliance obligation if they were missed for a day. Examples include invoice submission, payroll document routing, incident intake, and daily order reconciliation. For each task, name the primary owner, the backup, and the person who can authorize an exception. Then mark the tasks that genuinely can wait. A backup map that treats every task as critical is not a priority system. It is a source of anxiety."
        ]
      },
      {
        "heading": "Give the backup the same evidence",
        "body": [
          "A name is not a backup. The second person needs access to the source, the current procedure, the open items, and the owner map. Test that access before an emergency. If the backup cannot open the queue or find the latest version, the plan is theoretical. Keep a short handoff pack for each critical task: where the work lives, what good looks like, what to do when the source is missing, and who to call. Review the pack when the system or policy changes."
        ]
      },
      {
        "heading": "Decide the wait rule in advance",
        "body": [
          "When both the primary and the backup are unavailable, the team needs a documented wait rule. Does the task pause, does another team take it, or does the customer receive a revised expectation? Write the answer for each critical task. Include the maximum wait and the person who communicates it. A wait rule protects the team from improvising and protects the customer from a promise nobody can keep."
        ]
      },
      {
        "heading": "Test with a real absence",
        "body": [
          "Run a planned backup day at least twice a year. The primary is unavailable, and the backup handles the queue using only the written pack and the granted access. Observe where they get stuck and what they have to ask. Update the pack and the access. A test that happens only on paper does not prove coverage. If the test reveals a single point of failure, fix it before the next busy period rather than noting it in a risk register."
        ]
      },
      {
        "heading": "Keep the map current",
        "body": [
          "Review the map when someone joins, leaves, changes shift, or changes role. Review it after a system migration or a policy change. Store it where the team can find it, not in a manager's private notes. Show the date of the last review on the map. The goal is not a perfect plan. It is a plan that the team can use on the day the unexpected happens."
        ]
      }
    ],
    "script": [
      "Which tasks cannot wait a full day?",
      "Who is the named backup, and do they have access today?",
      "What is the wait rule when both people are unavailable?",
      "When did we last test the plan with a real absence?"
    ],
    "sources": [sharedSources.cisa, sharedSources.nistCsf, sharedSources.gao],
    "faqs": [
      { "question": "How many backups does each task need?", "answer": "One named backup is a minimum. For tasks with legal, safety, or payment impact, add a second route through an owner or another team." },
      { "question": "Should the backup be in the same shift?", "answer": "Not always. A same-shift backup helps with volume. A cross-shift backup helps with absence. Use both where the task is critical." },
      { "question": "What if the backup has less access than the primary?", "answer": "Then the task is not fully covered. Either grant the minimum access needed for the backup or document the narrower scope and the escalation path." }
    ],
    "relatedLinks": [
      { "label": "Plan Philippines Shift Coverage Around Customer Hours", "href": "/blog/philippines-shift-coverage-planning" },
      { "label": "A Remote Access Offboarding Checklist That Closes Gaps", "href": "/blog/remote-access-offboarding-checklist" }
    ]
  },
  "remote-workstation-security-baseline": {
    "updated": "2026-10-22",
    "datePublished": "2026-10-22",
    "marker": "october-22-2026-remote-workstation-security-baseline",
    "takeaway": "A remote workstation baseline is a set of testable conditions, not a policy paragraph. Check the device, the account, and the room.",
    "image": "/oct22/remote-workstation-security-baseline.webp",
    "sections": [
      {
        "heading": "Define the minimum device state",
        "body": [
          "Write the conditions a device must meet before it touches company work: supported operating system, current security patches, disk encryption, screen lock, endpoint protection, and a separate work account. Decide whether the device is company-issued or personally owned, and what the company can inspect. A personally owned device needs a clear boundary between work and personal data. Test the conditions on a real device rather than assuming the policy was followed. Record the date and the result."
        ]
      },
      {
        "heading": "Separate accounts and privileges",
        "body": [
          "The worker should not use a shared admin account for daily work. Give a standard account for routine tasks and a separate, time-bound path for elevated actions. Use a password manager and multifactor authentication. Do not send passwords through chat or store them in a spreadsheet. If the role handles protected data, restrict local downloads and define where files may be saved. The goal is to reduce the blast radius of a lost device or a mistaken click."
        ]
      },
      {
        "heading": "Make the physical workspace part of the check",
        "body": [
          "Remote work introduces risks that a login screen cannot see. Ask about a private space for calls, a locked screen when stepping away, and a plan for confidential documents. For roles that discuss customer or employee data by phone, use a headset and avoid speakerphone in public places. If the home has unreliable power or internet, plan a backup. These are not perks. They are conditions for handling certain types of work."
        ]
      },
      {
        "heading": "Set the evidence and the review",
        "body": [
          "Keep a simple attestation with the device state, the date, and the worker's confirmation. Spot-check a sample each quarter, especially after an operating system upgrade or a role change. Review access at the same time. A device that passes in January may fail in July if patching stopped. If a check fails, define the safe interim state: no protected data, no live customer channel, or no elevated access until the issue is fixed."
        ]
      },
      {
        "heading": "Handle loss and departure",
        "body": [
          "Write the steps for a lost or stolen device: report, revoke sessions, rotate credentials, check recent activity, and document the timeline. For departure, combine the device return with account removal and a review of local files. Do not rely on the worker to delete everything. Verify the important steps from the company side. A baseline that only covers onboarding is half a control."
        ]
      }
    ],
    "script": [
      "What device state is required before access is granted?",
      "Which work uses a separate account or elevated path?",
      "Where will confidential calls and documents be handled?",
      "What happens when a device is lost or a worker leaves?"
    ],
    "sources": [sharedSources.nistCsf, sharedSources.cisa, sharedSources.npc],
    "faqs": [
      { "question": "Can a personal laptop be used for support work?", "answer": "Only if the role and the data allow it. Define the minimum device state, separate the work account, and state what the company may inspect." },
      { "question": "Is a password manager enough?", "answer": "No. Use it with multifactor authentication, least privilege, and a review of shared credentials. A manager alone does not fix a shared admin account." },
      { "question": "How often should the baseline be checked?", "answer": "At onboarding, after a material device or role change, and on a periodic sample. Quarterly is a practical starting point for many teams." }
    ],
    "relatedLinks": [
      { "label": "A Remote Access Offboarding Checklist That Closes Gaps", "href": "/blog/remote-access-offboarding-checklist" },
      { "label": "Handle Payroll Documents Without Becoming the Payroll Owner", "href": "/blog/philippines-payroll-document-boundaries" }
    ]
  },
  "philippines-holiday-coverage-calendar": {
    "updated": "2026-10-22",
    "datePublished": "2026-10-22",
    "marker": "october-22-2026-philippines-holiday-coverage-calendar",
    "takeaway": "Holiday coverage is a queue plan and a customer message, not only a list of dates. Confirm the official calendar and decide what waits.",
    "image": "/oct22/philippines-holiday-coverage-calendar.webp",
    "sections": [
      {
        "heading": "Confirm the official dates for the year",
        "body": [
          "Philippine holidays include regular holidays and special non-working days, and the official list can change. Confirm the current proclamation from the official government source before publishing the calendar. Do not rely on last year's list or a social media graphic. Record the source and the date you checked. If a local holiday affects only part of the team, note that separately. The calendar should distinguish company closures from reduced coverage."
        ]
      },
      {
        "heading": "Map the work that cannot pause",
        "body": [
          "List the queues and tasks that must continue during a holiday: incident intake, urgent customer support, payment operations, and any contractual deadline. For each one, name the coverage owner and the backup. Decide which work will pause and when it resumes. A holiday plan that says everything is closed is simple but may break a customer promise. A plan that says everything continues may burn out the team. The useful plan is specific about both."
        ]
      },
      {
        "heading": "Tell customers early",
        "body": [
          "Publish the coverage window at least two weeks in advance, with the local dates, the channels that remain open, and the expected response time. Use the customer's time zone as well as the team's. If a deadline falls on a holiday, state the last business day for a response. A clear notice prevents the customer from interpreting a planned closure as an outage. Update the notice if the official calendar changes."
        ]
      },
      {
        "heading": "Protect the team around the holiday",
        "body": [
          "Holiday coverage can concentrate work on a few people. Check the leave plan, the overtime rules, and the backup map before the week begins. Avoid making the same person cover every holiday. If the role requires live coverage, schedule it in advance and confirm the handoff. The legal and contractual details of holiday pay and scheduling belong with the employer's HR and counsel. A support lead should not improvise them from memory."
        ]
      },
      {
        "heading": "Review after the period",
        "body": [
          "After the holiday, compare the planned coverage with the actual arrivals, response times, and missed updates. Ask the team what broke and what was easier than expected. Update the calendar and the customer notice for the next period. Keep the record of the dates and the coverage decisions so the next planner does not start from zero."
        ]
      }
    ],
    "script": [
      "Which official holidays affect this team this year?",
      "What work must continue, and who covers it?",
      "What will we tell customers, and when?",
      "What did we learn from the last holiday period?"
    ],
    "sources": [sharedSources.dole, sharedSources.psa, sharedSources.worldBank],
    "faqs": [
      { "question": "Are Philippine holidays the same every year?", "answer": "No. Regular holidays are relatively stable, but special non-working days can change. Confirm the official proclamation for the current year." },
      { "question": "Should the whole team take the same holiday?", "answer": "Only if the work can pause. Critical queues need planned coverage, a backup, and a customer notice." },
      { "question": "Where should the calendar live?", "answer": "In a shared operations calendar linked from the team's runbook, with the official source and the coverage owner recorded." }
    ],
    "relatedLinks": [
      { "label": "Plan Philippines Shift Coverage Around Customer Hours", "href": "/blog/philippines-shift-coverage-planning" },
      { "label": "Build a Backup Coverage Map for an Outsourced Team", "href": "/blog/outsourced-team-backup-coverage-map" }
    ]
  },
  "va-task-sop-writing-from-screen-recording": {
    "updated": "2026-10-22",
    "datePublished": "2026-10-22",
    "marker": "october-22-2026-va-task-sop-writing-from-screen-recording",
    "takeaway": "A screen recording shows motion, not judgment. Turn it into a procedure by naming the decisions, evidence, and stop points.",
    "image": "/oct22/va-task-sop-writing-from-screen-recording.webp",
    "sections": [
      {
        "heading": "Watch for decisions, not clicks",
        "body": [
          "A recording of a task often shows a sequence of clicks. The useful procedure explains why each click happens and what would change the path. Watch the recording with the person who did the work and pause at every branch. Ask what they checked, what they ignored, and what would make them stop. Those answers become the decision points. Without them, the written steps work only for the exact example in the video."
        ]
      },
      {
        "heading": "Write the trigger and the finish line",
        "body": [
          "Start the procedure with the event that creates the task and the evidence that proves it is finished. For example: a new order appears in the queue, and completion means the order is matched, the exception is routed, and the confirmation is recorded. A procedure without a finish line encourages endless polishing or premature closure. Include the system of record and the person who accepts the output. If there are two possible owners, say how to choose."
        ]
      },
      {
        "heading": "Capture the evidence fields",
        "body": [
          "List the fields the worker must record: source, date, amount, customer reference, action taken, exception, and destination. Explain which fields are mandatory and which can be marked unknown. A procedure that says 'update the record' without naming the fields produces inconsistent notes. Show one completed example and one example with a missing field. The contrast teaches more than another paragraph of instructions."
        ]
      },
      {
        "heading": "Add stop rules and escalation",
        "body": [
          "Every procedure needs a list of conditions that require a stop: missing approval, conflicting records, a request outside the lane, a security concern, or a customer threat. For each stop, name the reason code, the owner, the safe interim state, and the response time. A worker should not have to invent an escalation path under pressure. Test the stop rules with someone who has not done the task before. If they cannot find the owner, the procedure is incomplete."
        ]
      },
      {
        "heading": "Publish, test, and version",
        "body": [
          "Give the procedure to a new person and ask them to complete one real or realistic task using only the document. Watch where they pause. Update the document, then test again. Add a version, an owner, and a review trigger. When the system or policy changes, update the procedure and archive the old version. A procedure that lives only in a chat thread will be forgotten the next time someone new joins."
        ]
      }
    ],
    "script": [
      "What starts this task, and what proves it is finished?",
      "Where does the worker have to make a judgment?",
      "Which fields must be recorded, and which can be unknown?",
      "What conditions require a stop and an owner?"
    ],
    "sources": [sharedSources.wcag, sharedSources.gao, sharedSources.ilo],
    "faqs": [
      { "question": "Can we use the recording as the SOP?", "answer": "Use it as source material. A recording is hard to search, update, and test. The written procedure should name decisions, evidence, and stops." },
      { "question": "How long should an SOP be?", "answer": "As short as it can be while still letting a new person complete the task and recognize when to stop. Length is not a quality measure." },
      { "question": "Who owns the SOP?", "answer": "The person who owns the underlying process or policy, not only the person who performs the task. That owner approves changes." }
    ],
    "relatedLinks": [
      { "label": "A First 30 Day Onboarding Plan for a Philippines Hire", "href": "/blog/philippines-outsourcing-first-30-day-onboarding-plan" },
      { "label": "Run a Quality Review Cadence for an Outsourced Team", "href": "/blog/outsourced-team-quality-review-cadence" }
    ]
  },
  "outsourced-team-meeting-cadence": {
    "updated": "2026-10-22",
    "datePublished": "2026-10-22",
    "marker": "october-22-2026-outsourced-team-meeting-cadence",
    "takeaway": "Each meeting needs one question and one decision. If it has neither, replace it with a written update.",
    "image": "/oct22/outsourced-team-meeting-cadence.webp",
    "sections": [
      {
        "heading": "Give each meeting a distinct job",
        "body": [
          "A daily huddle can surface blockers and staffing gaps. A weekly review can examine quality, volume, and open decisions. A monthly planning session can look at capacity, process changes, and the next month's risks. When all three cover the same status updates, the team spends hours repeating information. Write the purpose and the expected output for each meeting. Cancel or shorten any meeting that cannot state its output."
        ]
      },
      {
        "heading": "Respect the time-zone cost",
        "body": [
          "A meeting that is convenient for the client may fall in the middle of the Philippines team's night. Rotate the burden where possible, or use asynchronous updates for routine status. Record decisions and action items in a shared place so people who cannot attend can still act. Do not make attendance a proxy for commitment. The work and the evidence show commitment more reliably than a camera on at 2 a.m."
        ]
      },
      {
        "heading": "Use a short, stable agenda",
        "body": [
          "A practical weekly agenda includes: customer-impacting issues, quality findings, capacity and leave, decisions needed, and one improvement item. Keep the same order so people can prepare. Put the data in the pre-read and use the meeting for interpretation and decisions. If a topic needs deep analysis, schedule a separate session with the right owner. A meeting that tries to solve everything produces vague actions."
        ]
      },
      {
        "heading": "End with owners and dates",
        "body": [
          "Every decision should have an owner, a due date, and a place where the result will be recorded. Read the actions back at the end. If an action has no owner, it is a wish. If it has no date, it will drift. The next meeting should start with the prior actions, not with a fresh status round. That simple habit turns a recurring meeting into a control rather than a ritual."
        ]
      },
      {
        "heading": "Review the cadence itself",
        "body": [
          "Every quarter, ask the team which meetings help them do the work and which ones they attend out of habit. Look at the decisions produced, the actions closed, and the time spent. Reduce the cadence or change the format where the evidence supports it. A smaller number of well-prepared meetings is usually better than a full calendar of updates."
        ]
      }
    ],
    "script": [
      "What decision does this meeting need to produce?",
      "Who cannot attend because of time zone, and how will they contribute?",
      "Which actions from last time are still open?",
      "Should this meeting be shorter or less frequent?"
    ],
    "sources": [sharedSources.ilo, sharedSources.worldBank, sharedSources.psa],
    "faqs": [
      { "question": "How often should a remote team meet?", "answer": "As often as the work needs a live decision. Daily may help a new lane. Weekly is often enough for a stable team. Use written updates for status." },
      { "question": "Should cameras be mandatory?", "answer": "Only if there is a clear reason. Camera requirements can exclude people with bandwidth or privacy constraints. Focus on participation and evidence." },
      { "question": "How do we include the client?", "answer": "Give the client a short decision-focused agenda and a written summary. Do not require attendance at every internal huddle." }
    ],
    "relatedLinks": [
      { "label": "Run a Quality Review Cadence for an Outsourced Team", "href": "/blog/outsourced-team-quality-review-cadence" },
      { "label": "Plan Philippines Shift Coverage Around Customer Hours", "href": "/blog/philippines-shift-coverage-planning" }
    ]
  },
  "philippines-payroll-document-boundaries": {
    "updated": "2026-10-22",
    "datePublished": "2026-10-22",
    "marker": "october-22-2026-philippines-payroll-document-boundaries",
    "takeaway": "Support can collect and route payroll paperwork. It should not interpret entitlements, calculate statutory contributions, or promise an outcome.",
    "image": "/oct22/philippines-payroll-document-boundaries.webp",
    "sections": [
      {
        "heading": "Separate collection from decision",
        "body": [
          "A payroll support role can request a missing form, check that a document is complete, log the date received, and route it to the payroll owner. It should not decide whether an employee is entitled to a benefit, how much should be deducted, or whether a statutory contribution is correct. Those decisions belong to the employer's payroll, HR, or legal owner. Write the boundary in the procedure so the worker can point to it when an employee asks for an exception."
        ]
      },
      {
        "heading": "Protect the documents",
        "body": [
          "Payroll files often contain government identifiers, bank details, and family information. Collect only what the process requires. Use the approved repository, restrict access to the payroll lane, and avoid email attachments when a secure upload is available. Do not copy documents into chat to speed up a question. The Philippine Data Privacy Act and the organization's own retention policy both matter here. When in doubt, route the document through the approved channel and record the reference."
        ]
      },
      {
        "heading": "Use neutral status language",
        "body": [
          "Replace 'approved' and 'qualified' with states the support team can actually verify: received, incomplete, routed, awaiting employee response, awaiting payroll review, and recorded. If an employee asks whether a benefit will be paid, the safe answer is that the payroll owner will review the document and the employee will receive a response by a stated date. Do not estimate an amount or a statutory outcome. A wrong estimate creates a dispute that the support team cannot resolve."
        ]
      },
      {
        "heading": "Handle sensitive questions",
        "body": [
          "Some questions involve hardship, illness, family status, or a dispute with the employer. The support worker should acknowledge the message, collect the relevant document reference, and route it to the named HR or payroll owner. Do not ask for unnecessary medical details or family information. If the employee is upset, preserve their words and escalate. A support role is not a counselling or legal service, and pretending otherwise can cause harm."
        ]
      },
      {
        "heading": "Review the lane for drift",
        "body": [
          "Sample the payroll document queue each month. Check completeness, routing time, access, and the customer-facing messages. Look for cases where the support worker answered a question outside the lane or promised an outcome. Review the official source for any statutory rate or deadline before publishing a customer-facing explanation. The employer remains responsible for compliance. The support team's job is a clean, timely, privacy-aware handoff."
        ]
      }
    ],
    "script": [
      "Which payroll decisions are outside this role?",
      "Where may payroll documents be stored and sent?",
      "What status words can the team use with employees?",
      "Who reviews sensitive or disputed cases?"
    ],
    "sources": [sharedSources.npc, sharedSources.dole, sharedSources.privacy],
    "faqs": [
      { "question": "Can a VA answer questions about statutory benefits?", "answer": "Only with approved, current information and within a defined lane. Entitlement decisions and calculations should stay with the payroll or HR owner." },
      { "question": "How should payroll documents be shared?", "answer": "Use the approved secure repository or upload channel. Avoid chat attachments and personal email. Restrict access to the payroll lane." },
      { "question": "What if an employee sends too much personal data?", "answer": "Do not copy it further. Record the receipt, route it through the approved privacy or payroll process, and follow the retention rule." }
    ],
    "relatedLinks": [
      { "label": "Set a Remote Workstation Baseline Before Day One", "href": "/blog/remote-workstation-security-baseline" },
      { "label": "A Remote Access Offboarding Checklist That Closes Gaps", "href": "/blog/remote-access-offboarding-checklist" }
    ]
  },
  "offshore-hiring-work-sample-design": {
    "updated": "2026-10-22",
    "datePublished": "2026-10-22",
    "marker": "october-22-2026-offshore-hiring-work-sample-design",
    "takeaway": "A work sample is useful when it is real, bounded, scored against a rubric, and paid if it produces value.",
    "image": "/oct22/offshore-hiring-work-sample-design.webp",
    "sections": [
      {
        "heading": "Choose a task from the real queue",
        "body": [
          "Select a task the role will actually perform in the first month. Use sanitized data or a synthetic case that preserves the decisions. Avoid puzzles and trivia. The sample should show whether the candidate can find the source, follow a rule, record evidence, and stop when something is missing. If the role involves customer writing, include a customer message. If it involves spreadsheets, include a reconciliation with one deliberate discrepancy."
        ]
      },
      {
        "heading": "Bound the time and the scope",
        "body": [
          "Give a clear time limit and a clear finish line. A task that takes four hours is not a sample. It is unpaid work. Decide whether the candidate may use the tools they would use on the job and whether they may ask questions. Tell them how to flag uncertainty. A candidate who spends the whole limit polishing the formatting and misses the discrepancy has shown something useful about prioritization. That is the point."
        ]
      },
      {
        "heading": "Score against a written rubric",
        "body": [
          "Use four or five dimensions: accuracy, source use, evidence quality, communication, and boundary awareness. Define what a strong, acceptable, and weak response looks like for each. Score independently before discussing the candidate with the other interviewers. Keep the completed sample and the score sheet for the onboarding plan. If the candidate is hired, the sample becomes a baseline for coaching. If not, the record supports a fair comparison."
        ]
      },
      {
        "heading": "Pay for substantive work",
        "body": [
          "If the sample produces value the company could use, pay for it. A short exercise that is clearly for assessment may be unpaid in some contexts, but the boundary should be explicit and fair. Do not build a production backlog out of candidate submissions. Do not ask candidates to solve a live customer problem without a confidentiality and payment arrangement. The hiring process is also a signal about how the company treats people."
        ]
      },
      {
        "heading": "Calibrate before the real round",
        "body": [
          "Run the sample with a current team member or a colleague who is not a candidate. Check the time limit, the instructions, and the rubric. Remove ambiguity before the first candidate sees it. After the first two candidates, review whether the rubric is discriminating on the right things. Do not change the rubric between candidates unless the earlier scores are re-reviewed. A consistent process is more valuable than a perfect one."
        ]
      }
    ],
    "script": [
      "Which real task will the sample simulate?",
      "What is the time limit and the finish line?",
      "How will accuracy, evidence, and boundaries be scored?",
      "Will the sample be paid, and who owns the output?"
    ],
    "sources": [sharedSources.ilo, sharedSources.gao, sharedSources.worldBank],
    "faqs": [
      { "question": "How long should a work sample take?", "answer": "Usually under two hours for a screening sample. Keep it focused on the decisions the role will make, not on volume." },
      { "question": "Can we use a real customer case?", "answer": "Only with sanitization, a confidentiality arrangement, and a clear payment or assessment boundary. Never expose live customer data to a candidate." },
      { "question": "Should candidates use AI tools?", "answer": "Decide in advance and state it in the instructions. If the role uses approved tools, allow them and score the verification and evidence, not just the output." }
    ],
    "relatedLinks": [
      { "label": "Write the Role Scorecard Before You Interview", "href": "/blog/offshore-role-scorecard-before-hiring" },
      { "label": "A First 30 Day Onboarding Plan for a Philippines Hire", "href": "/blog/philippines-outsourcing-first-30-day-onboarding-plan" }
    ]
  },
  "remote-access-offboarding-checklist": {
    "updated": "2026-10-22",
    "datePublished": "2026-10-22",
    "marker": "october-22-2026-remote-access-offboarding-checklist",
    "takeaway": "Offboarding is a verification process. Disable the main account, then hunt the sessions, tokens, devices, and shared links.",
    "image": "/oct22/remote-access-offboarding-checklist.webp",
    "sections": [
      {
        "heading": "Start before the last day",
        "body": [
          "Prepare the offboarding before the final shift. List every system the person can access, including the ones they use occasionally. Include shared mailboxes, file drives, project tools, password vaults, payment portals, and any client-specific accounts. Name the owner who will verify each removal. If the person is leaving abruptly, use the same list under the incident path. A calm final week is easier than an emergency, but the checklist should work for both."
        ]
      },
      {
        "heading": "Disable, revoke, and rotate",
        "body": [
          "Disable the primary identity first. Then revoke active sessions, refresh tokens, API keys, and connected apps. Rotate shared credentials the person could see. Check devices for local copies and remote management. Remove the person from groups, distribution lists, and approval chains. If they were a backup owner, assign a new one. Do not stop at the admin console's disable button. Many systems keep a separate session or token alive after the main account is closed."
        ]
      },
      {
        "heading": "Recover the work, not just the access",
        "body": [
          "Check the queue for items assigned to the person. Reassign them with a short note about the state and the next action. Review drafts, scheduled messages, and pending approvals. A departing worker may have promised a customer something that no one else knows about. Read the sent messages for the last week where the role involves customer commitments. Recover the files that belong to the company and confirm the return of devices."
        ]
      },
      {
        "heading": "Verify from the other side",
        "body": [
          "Ask a second person to test that the access is actually gone. Try the account, the shared link, and the device enrollment. Check the audit log for activity after the disable time. Record who verified each system and when. If a removal fails, keep the task open and escalate. A checklist with unchecked boxes is not evidence. The verification step is what turns the list into a control."
        ]
      },
      {
        "heading": "Review the departure for patterns",
        "body": [
          "After the offboarding, review what access existed, how long it took to remove, and whether any account was missed. If the same system is missed repeatedly, fix the inventory or the integration. If the person had more access than the role required, revisit the least-privilege design. The next departure will be easier if this one produced a better map."
        ]
      }
    ],
    "script": [
      "Which systems and shared credentials can this person access?",
      "Who owns the removal and the verification for each one?",
      "What work must be reassigned before the last day?",
      "How will we prove the access is gone?"
    ],
    "sources": [sharedSources.nistCsf, sharedSources.cisa, sharedSources.npc],
    "faqs": [
      { "question": "Is disabling the email account enough?", "answer": "No. Check sessions, tokens, shared drives, devices, password vaults, and any client-specific tools." },
      { "question": "How quickly should access be removed?", "answer": "Immediately for involuntary departures. For planned departures, agree a time on the final day and verify it. Do not wait for the next business day." },
      { "question": "Who should verify the removal?", "answer": "Someone other than the person who performed it, ideally the system or security owner. Record the verification time." }
    ],
    "relatedLinks": [
      { "label": "Set a Remote Workstation Baseline Before Day One", "href": "/blog/remote-workstation-security-baseline" },
      { "label": "Build a Backup Coverage Map for an Outsourced Team", "href": "/blog/outsourced-team-backup-coverage-map" }
    ]
  },
  "outsourced-team-quality-review-cadence": {
    "updated": "2026-10-22",
    "datePublished": "2026-10-22",
    "marker": "october-22-2026-outsourced-team-quality-review-cadence",
    "takeaway": "A quality review should end with one correction and a retest, not a long list of observations.",
    "image": "/oct22/outsourced-team-quality-review-cadence.webp",
    "sections": [
      {
        "heading": "Pick the unit and the sample",
        "body": [
          "Define what a reviewed unit is: a ticket, a report, a call, or a completed task. Then define the population and the sample. Include routine work, adverse cases, and work from each shift. A sample drawn only from easy tickets will produce a comforting score and miss the failures that matter. Write the selection rule before you look. If the sample is too small to support a conclusion, say so rather than presenting a percentage with false confidence."
        ]
      },
      {
        "heading": "Review against observable criteria",
        "body": [
          "Use a short rubric: source accuracy, evidence completeness, authority compliance, customer clarity, and correct stop behavior. For each criterion, write what a pass and a fail look like. Cite the specific passage or field in the record. A review that says 'needs improvement' without pointing to evidence cannot guide a correction. It also makes disagreement between reviewers more likely. Keep the rubric stable for the review cycle."
        ]
      },
      {
        "heading": "Separate person, process, and product",
        "body": [
          "A failure may come from the worker, the brief, the tool, or the product. Classify the proximate cause before assigning an action. If the source was outdated, the repair is a source update. If the permission was missing, the repair is access. If the worker skipped a step they knew, the repair is coaching. Treating every failure as a training issue hides the system defects that will produce the next failure. Treating every failure as a system issue avoids the conversation that a person may need."
        ]
      },
      {
        "heading": "Choose one correction",
        "body": [
          "A review that produces ten actions usually produces none. Pick the correction with the highest risk reduction or the strongest evidence. Name the owner, the due date, and the evidence of completion. If the correction is a rewritten procedure, test it with someone who did not write it. If it is a coaching conversation, observe the next sample. One correction that holds is worth more than a long improvement plan that nobody reads."
        ]
      },
      {
        "heading": "Retest and publish the result",
        "body": [
          "After the correction, review a new sample that includes the same case type. Compare the result with the baseline. If the failure persists, ask whether the correction addressed the cause. If it improved, record what changed so the team can repeat it. Share a short summary with the team: what was reviewed, what was found, what changed, and what will be checked next. Keep individual performance conversations private, but keep the quality lesson visible."
        ]
      }
    ],
    "script": [
      "What is the reviewed unit and the population?",
      "Which criteria are observable in the record?",
      "Is the cause the person, the process, or the product?",
      "What is the one correction, and when will we retest?"
    ],
    "sources": [sharedSources.gao, sharedSources.nistCsf, sharedSources.wcag],
    "faqs": [
      { "question": "How many items should we review each month?", "answer": "Enough to cover the main request types and shifts, with a declared rule. A small stratified sample is better than a large convenience sample." },
      { "question": "Should the outsourced team see the rubric?", "answer": "Yes. The rubric should describe the work, not surprise the team. Keep individual scores private where appropriate." },
      { "question": "What if the same failure keeps appearing?", "answer": "Check whether the correction addressed the cause. If not, revisit the process, the source, the tool, or the authority line before adding more training." }
    ],
    "relatedLinks": [
      { "label": "Turn a Screen Recording Into a Usable SOP", "href": "/blog/va-task-sop-writing-from-screen-recording" },
      { "label": "Set a Meeting Cadence That Respects the Work", "href": "/blog/outsourced-team-meeting-cadence" }
    ]
  }
};
