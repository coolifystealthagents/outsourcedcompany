export const philippinesOutsourcingBusinessContinuityPlan = {
  updated: '2026-07-26',
  keyword: 'philippines outsourcing business continuity plan',
  marker: 'philippines-continuity-owner-map-2026',
  takeaway: 'A Philippines outsourcing business continuity plan should protect one customer or operations queue at a time. Write the backup channel, access limits, stop rules, and internal owner before a storm, outage, illness, or security event interrupts work. Filipino staff can follow the plan, but your company should keep policy, risk, and recovery decisions.',
  stats: [
    { value: '20', label: 'Cyclones in the region each year', note: 'PAGASA climatological average for the Philippine region. Source 1.' },
    { value: '8 or 9', label: 'Cyclones crossing the Philippines', note: 'PAGASA average for a year. Source 1.' },
    { value: '59.55%', label: 'Philippine jobs in services', note: 'World Bank estimate for 2025, rounded from 59.548%. Source 2.' },
    { value: '745,000', label: 'Deaths tied to long hours', note: 'WHO and ILO global estimate for 2016, published in 2021. Source 3.' },
  ],
  comparison: [
    { weak: 'Our Filipino team can keep working if anything goes wrong.', strong: 'If the main support tool is unavailable, the team records urgent cases in the approved backup log and the internal support owner decides when normal work resumes.' },
    { weak: 'Everyone knows who to contact during an outage.', strong: 'The handoff sheet names a primary owner, a backup owner, their approved contact channels, and the issues each person can decide.' },
    { weak: 'People can stay late until the queue is clear.', strong: 'The plan has relief coverage, a shift handoff, and a rule for reducing the queue when staffing or systems are limited.' },
  ],
  sections: [
    {
      heading: 'Protect one business queue first',
      body: [
        'A continuity plan becomes hard to use when it tries to cover the whole company in one page. Start with the queue that would hurt customers or daily operations most if it stopped for a full shift.',
        'Name the queue, normal owner, hours, tools, incoming channels, and expected result. Then list the minimum work that must continue during a disruption and the work that can wait until normal service returns.',
      ],
    },
    {
      heading: 'Plan for real conditions in the Philippines',
      body: [
        'PAGASA says an average of 20 tropical cyclones enter the Philippine region each year, and about eight or nine cross the country. That does not mean every Filipino worker faces the same risk because weather, power, transport, and internet conditions vary by city and neighborhood.',
        'Do not ask people to travel through dangerous conditions to protect a routine queue. The plan should reduce work, move it to approved relief staff, or pause it when safety or reliable access is in doubt.',
      ],
    },
    {
      heading: 'Separate continuity work from recovery decisions',
      body: [
        'Filipino staff can use an approved backup source, record open cases, send a prepared notice, and move urgent items to a named manager. They should not have to decide that a system is safe, a data event is contained, or a customer promise has changed.',
        'Write two columns in the plan. One says what the role may do without new approval, while the other names decisions that stay with an internal owner or qualified specialist.',
        'Useful stop rules include suspected account takeover, missing source data, conflicting instructions, a legal threat, a safety issue, and any request to move customer information into an unapproved tool. Each stop rule needs an owner and a response window.',
      ],
    },
    {
      heading: 'Choose backup tools before the main tool fails',
      body: [
        'A personal chat thread or private spreadsheet is not a safe backup just because it is quick. Choose the approved secondary channel, case log, file location, and contact list while the normal systems still work.',
        'Keep the backup small. It should capture the case ID, time, customer need, action taken, current owner, and next check without copying more personal information than the queue needs.',
        'Test whether staff can reach the backup with their normal named accounts and limited rights. Store recovery instructions where the right people can reach them during an outage, but do not place passwords or secret recovery codes in the continuity sheet.',
      ],
    },
    {
      heading: 'Protect access during an emergency',
      body: [
        'Urgency can make weak access choices sound reasonable. Shared passwords, broad exports, personal devices, and new admin rights may create a second incident while the team is trying to solve the first one.',
        'The Philippine Data Privacy Act requires reasonable organizational, physical, and technical safeguards for personal information. It also says a personal information controller remains responsible when processing is subcontracted.',
        'Keep named accounts, multi-factor login where available, the smallest useful set of rights, and a record of temporary access. An approved owner should set an end time for emergency permissions and check that the rights were removed after recovery.',
      ],
    },
    {
      heading: 'Do not make overtime the backup plan',
      body: [
        'A plan that depends on one person staying online for every delay is not a continuity plan. The WHO and ILO linked long working hours to 745,000 deaths from stroke and heart disease in 2016, and reported a 35% higher stroke risk for people working at least 55 hours a week compared with 35 to 40 hours.',
        'Those are global health estimates, not a prediction about one Filipino worker. They are still a clear reason to use relief coverage, smaller emergency queues, firm shift ends, and handoffs instead of repeated long days.',
        'Ask the provider how it covers breaks, illness, power loss, and a second missed shift. Keep employment, leave, safety, and staffing choices with the proper employer and manager.',
      ],
    },
    {
      heading: 'Run a short test and fix what breaks',
      body: [
        'A document can look complete and still fail in use. Run a tabletop test with one normal case, one missing source, one system outage, and one sensitive issue that must return to your company.',
        'Watch where people wait, guess, copy data, or contact the wrong owner. Check whether the backup log is reachable, the source is current, the relief worker can understand the handoff, and the internal owner responds inside the stated window.',
        'Record each miss and change the plan. Repeat the test after a major tool, owner, provider, location, or customer-policy change rather than treating the first version as permanent.',
      ],
    },
  ],
  decisionTable: {
    heading: 'Continuity task and owner-control table',
    intro: 'Use this as a planning start. Change the split to match your systems, contracts, legal duties, and customer promises.',
    columns: ['Disruption', 'Filipino staff may handle', 'Internal owner keeps'],
    rows: [
      ['Main tool unavailable', 'Open the approved backup log, record new work, and follow the outage notice', 'Confirm the outage, approve recovery, and decide when the main tool is safe'],
      ['Power or internet loss', 'Send the safety check, stop live work, and hand off open items when possible', 'Move the queue, reduce demand, or pause service'],
      ['Worker absence', 'Use the standard handoff and give the relief worker the current queue record', 'Approve coverage and change priorities or staffing'],
      ['Suspected data event', 'Stop the affected task, preserve the record, and contact the named owner', 'Investigate, contain, notify, and seek legal or security advice'],
      ['Large queue spike', 'Sort work by the written priority and report the oldest open item', 'Change customer promises, add capacity, or remove low-priority work'],
    ],
  },
  expertQuote: {
    text: 'Working 55 hours or more per week is a serious health hazard',
    attribution: 'Dr Maria Neira, Director, Department of Environment, Climate Change and Health, World Health Organization',
    sourceNumber: 3,
  },
  chart: {
    title: 'Philippine employment in services, 2021–2025',
    description: 'A bar chart showing the share of total Philippine employment in services rising from 56.81 percent in 2021 to 59.55 percent in 2025.',
    data: [
      { year: '2021', value: 56.81 },
      { year: '2022', value: 58.72 },
      { year: '2023', value: 59.02 },
      { year: '2024', value: 59.32 },
      { year: '2025', value: 59.55 },
    ],
    methods: 'Method: World Bank indicator SL.SRV.EMPL.ZS, modeled ILO estimate, checked July 26, 2026. Values are shares of total Philippine employment. They do not measure outsourcing, disaster exposure, or continuity quality.',
  },
  processGraphic: {
    title: 'A disruption needs one controlled path',
    description: 'A four-step diagram that moves a disrupted queue through a safety check, an approved backup, an owner decision, and a recorded return to normal work.',
    steps: [
      { label: '1. Check', note: 'Confirm people are safe and able to respond' },
      { label: '2. Switch', note: 'Use the approved backup channel and log' },
      { label: '3. Decide', note: 'Send exceptions to the named owner' },
      { label: '4. Recover', note: 'Reconcile records before normal work resumes' },
    ],
  },
  workflow: [
    { step: 'Days 1–3', title: 'Choose the queue', body: 'Name the first queue, minimum service, normal owner, tools, channels, incoming volume, and the work that may wait.' },
    { step: 'Days 4–8', title: 'Write the limits', body: 'List safe actions, stop rules, sensitive decisions, approved backup tools, and primary and backup owners.' },
    { step: 'Days 9–14', title: 'Build the handoff', body: 'Create the backup log and contact sheet. Test access with fake or old cases that contain no live personal information.' },
    { step: 'Days 15–21', title: 'Run the exercise', body: 'Simulate an outage, an absent worker, a missing source, and a sensitive case. Record delays, guesses, and access problems.' },
    { step: 'Days 22–30', title: 'Repair and approve', body: 'Fix the plan, repeat failed steps, confirm relief coverage, and have the internal owner approve the working version.' },
  ],
  script: [
    'Which Philippine locations support this role, and what happens when a local weather, power, or internet event interrupts the shift?',
    'Show us the approved backup channel, case log, handoff fields, and the person who decides when normal work resumes.',
    'Which actions may Filipino staff take during a disruption, and which security, customer, or policy decisions must return to our company?',
    'How do you cover a missed shift or a second disrupted day without relying on one person to work longer hours?',
  ],
  banners: [
    { eyebrow: 'Continuity scope', heading: 'Choose the one queue that needs a working backup first.', body: 'Bring the tools, incoming work, owners, and customer promises to the staffing intake.', href: '/contact', label: 'Map the queue' },
    { eyebrow: 'Owner controls', heading: 'Write the actions Filipino staff can take during a disruption.', body: 'Separate routine backup work from security, policy, and recovery decisions.', href: '/contact', label: 'Set the limits' },
    { eyebrow: 'Philippines staffing', heading: 'Test the handoff before the first live interruption.', body: 'Plan relief coverage, backup access, stop rules, and the return to normal work.', href: '/contact', label: 'Start the brief' },
  ],
  sourcesNumbered: true,
  sources: [
    { name: 'PAGASA: Tropical cyclone information', url: 'https://www.pagasa.dost.gov.ph/climate/tropical-cyclone-information', note: 'The Philippine weather agency reports an average of 20 tropical cyclones in the region each year, with about eight or nine crossing the Philippines.' },
    { name: 'World Bank: Employment in services, Philippines', url: 'https://api.worldbank.org/v2/country/PH/indicator/SL.SRV.EMPL.ZS?format=json&per_page=10', note: 'The 2025 modeled ILO estimate is 59.548005% of total Philippine employment. This broad service-economy series is not an outsourcing measure.' },
    { name: 'WHO and ILO: Long working hours and health', url: 'https://www.who.int/news/item/17-05-2021-long-working-hours-increasing-deaths-from-heart-disease-and-stroke-who-ilo', note: 'The May 17, 2021 release reports 745,000 deaths in 2016 and global risk estimates for people working at least 55 hours a week.' },
    { name: 'Lawphil: Philippine Data Privacy Act of 2012', url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html', note: 'Sections 14 and 20 cover subcontracted processing and safeguards for personal information.' },
    { name: 'NIST SP 800-34 Rev. 1: Contingency planning guide', url: 'https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final', note: 'US government guidance on contingency planning, business impact analysis, recovery methods, testing, training, and plan maintenance.' },
  ],
  faqs: [
    { question: 'What should a Philippines outsourcing continuity plan cover first?', answer: 'Start with one customer or operations queue. Name the minimum work, normal and backup tools, safe actions, stop rules, relief worker, handoff fields, and internal owner who can change priorities or approve recovery.' },
    { question: 'Should Filipino staff keep working during a typhoon?', answer: 'Safety comes first. Conditions differ by location, so use official local alerts and the provider or employer safety plan. Move, reduce, or pause work when travel, power, internet, or home conditions are unsafe or unreliable.' },
    { question: 'Who decides when normal work can resume?', answer: 'Your company should name an internal owner for the affected queue. Technical, security, legal, and provider specialists may advise, but the plan should state who accepts the recovery and customer-service decision.' },
    { question: 'How often should the continuity plan be tested?', answer: 'Test it before relying on it and after major changes to tools, owners, providers, locations, or customer rules. Use a short exercise with normal, blocked, and sensitive cases, then repair every failed step.' },
  ],
  relatedLinks: [
    { label: 'Read the Philippines outsourcing buyer guide', href: '/blog/outsource-to-the-philippines-guide' },
    { label: 'Plan the company function first', href: '/blog/outsourced-company-planning' },
    { label: 'Use the first-week outsourcing checklist', href: '/blog/outsourced-company-onboarding-checklist' },
    { label: 'See back-office operations support', href: '/services/back-office-operations' },
    { label: 'See data management support', href: '/services/data-management' },
  ],
} as const;
