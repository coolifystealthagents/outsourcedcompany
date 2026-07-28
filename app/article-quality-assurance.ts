export const philippinesOutsourcingQualityAssuranceChecklist = {
  updated: '2026-07-28',
  keyword: 'philippines outsourcing quality assurance checklist',
  marker: 'philippines-outsourcing-qa-checklist-2026',
  takeaway: 'A Philippines outsourcing quality assurance checklist should test the result, the source, the stop rule, and the handoff record. Start with a small batch and name the person who can fix a bad rule. Filipino staff can prepare and review routine work, while your company keeps policy, access, money, legal, and customer-exception decisions.',
  stats: [
    { value: '59.55%', label: 'Philippine jobs in services', note: 'World Bank estimate for 2025, rounded from 59.548%. Source 1.' },
    { value: '745,000', label: 'Deaths tied to long hours', note: 'WHO and ILO global estimate for 2016, published in 2021. Source 2.' },
    { value: '35%', label: 'Higher stroke risk', note: 'Global estimate for 55+ hours versus 35–40 hours a week. Source 2.' },
    { value: '17%', label: 'Higher heart-disease death risk', note: 'Global estimate for the same weekly-hour groups. Source 2.' },
  ],
  comparison: [
    { weak: 'Please make sure the Filipino team does high-quality work.', strong: 'For the first 25 records, check the approved source, required fields, stop rule, saved evidence, and named next owner.' },
    { weak: 'The reviewer should catch every mistake.', strong: 'Record each miss as a source, rule, access, training, tool, or action problem, then send it to the person who can fix that cause.' },
    { weak: 'The team can correct anything that looks wrong.', strong: 'The reviewer may return a record for a listed defect, but changes to policy, permissions, money, or customer promises stay with our internal owner.' },
  ],
  sections: [
    {
      heading: 'Define a good result before you sample it',
      body: [
        'Quality review starts with a result that two people can judge the same way. Name the source, required fields, due time, allowed action, saved evidence, and final status for the work item.',
        'A broad label such as accurate is not enough. For a vendor record, accuracy might mean the legal name matches the approved file, the tax form is present, the bank-change flag is clear, and the record shows who reviewed it.',
        'Use a few real examples with private details removed. Mark one good result, one fixable miss, and one item that must stop and return to your company.',
      ],
    },
    {
      heading: 'Start with a small reviewed batch',
      body: [
        'Review every item while the Filipino team learns the first queue. A batch of 20 or 25 items can expose a bad source or a confusing rule before the same problem reaches hundreds of records.',
        'The batch size is a planning choice, not an industry standard. Pick a number your owner can check closely, state the dates it covers, and keep the source items so another reviewer can repeat the check.',
        'Move to a sample only after the work is steady. Write how items enter the sample, because choosing only easy or successful work can hide the cases that need attention.',
      ],
    },
    {
      heading: 'Record what caused the miss',
      body: [
        'A pass count tells you how much work met the check. It does not tell you what to repair, and it can punish a worker for a source page or tool setting the worker cannot change.',
        'Give every miss one main cause: source, rule, access, training, tool, or action. Add a short note that points to the exact field or step, then assign the repair to a person with the right authority.',
        'Keep worker coaching separate from process repair when the facts differ. If three people miss the same field, check the guide and form before treating the pattern as three unrelated performance problems.',
      ],
    },
    {
      heading: 'Keep the reviewer inside written limits',
      body: [
        'A reviewer should not gain broad power simply because the role checks other people. State whether the person may return work, correct listed fields, pause a queue, or only mark the issue for an internal owner.',
        'Money movement, access changes, legal judgments, staff discipline, policy choices, and sensitive customer exceptions should stay with approved owners. The quality sheet should name those owners and the response window for a stopped item.',
        'Use named accounts and the smallest useful set of rights. The Philippine Data Privacy Act requires reasonable organizational, physical, and technical safeguards, and it keeps responsibility with the controller when personal-information processing is subcontracted.',
      ],
    },
    {
      heading: 'Sample work in a way you can explain',
      body: [
        'A simple sample can use every fifth completed item or a computer-generated list of record numbers. Save the rule, date range, queue size, selected items, and any exclusions so the next review does not quietly use a different method.',
        'Add targeted checks for known risks without pretending that they are random. For example, review every bank-detail change, every missing-source case, and a separate general sample of normal records.',
        'Do not mix the two results into one vague score. Report the general sample and the high-risk review separately, since they answer different questions.',
      ],
    },
    {
      heading: 'Protect the evidence behind the review',
      body: [
        'A quality record may contain customer details, employee notes, account identifiers, or screenshots. Keep only the evidence needed to explain the decision, place it in an approved tool, and set an owner and removal rule.',
        'Do not copy live personal data into a private chat or an unapproved sheet to make review easier. If the approved system cannot hold a useful audit note, fix the system or reduce the review rather than building a hidden second record.',
        'NIST control guidance treats assessment as a planned activity and least privilege as a limit on access. Those ideas are useful here, but your contracts, laws, and internal security rules decide the controls your company must use.',
      ],
    },
    {
      heading: 'Build a review pace people can sustain',
      body: [
        'Quality checks get weaker when one person reviews a full shift and then stays late to clear another queue. Fatigue can turn a careful check into a quick box tick, especially when the standard has too many fields.',
        'WHO and ILO estimates linked working at least 55 hours a week with a 35% higher stroke risk and a 17% higher risk of dying from ischemic heart disease than working 35 to 40 hours. Those are global population estimates, not a forecast for one Filipino reviewer.',
        'Use relief cover, a firm shift end, and a handoff for open reviews. If the queue grows beyond the planned sample, the internal owner should reduce the scope or add approved capacity instead of asking one person to keep going.',
      ],
    },
  ],
  decisionTable: {
    heading: 'Quality check and owner-control table',
    intro: 'Use this as a starting split. Change it to match the work, systems, contracts, customer promises, and legal duties.',
    columns: ['Quality issue', 'Filipino reviewer may handle', 'Internal owner keeps'],
    rows: [
      ['Missing required field', 'Mark the field, return the item, and link the approved source', 'Change which fields are required'],
      ['Conflicting source records', 'Stop the item and save the two source references', 'Choose the source of truth and approve the correction'],
      ['Sensitive customer exception', 'Record the facts and send the case to the named owner', 'Decide the response or change the customer rule'],
      ['Access problem', 'Report the blocked step and current permission', 'Grant, remove, or broaden account rights'],
      ['Repeated miss', 'Group the examples and identify the written check that failed', 'Change training, policy, staffing, or the process'],
    ],
  },
  expertQuote: {
    text: 'Working 55 hours or more per week is a serious health hazard',
    attribution: 'Dr Maria Neira, Director, Department of Environment, Climate Change and Health, World Health Organization',
    sourceNumber: 2,
  },
  chart: {
    title: 'Philippine employment in services, 2021–2025',
    description: 'A labeled bar chart showing the share of total Philippine employment in services rising from 56.81 percent in 2021 to 59.55 percent in 2025.',
    data: [
      { year: '2021', value: 56.81 },
      { year: '2022', value: 58.72 },
      { year: '2023', value: 59.02 },
      { year: '2024', value: 59.32 },
      { year: '2025', value: 59.55 },
    ],
    methods: 'Method: World Bank indicator SL.SRV.EMPL.ZS, modeled ILO estimate, checked July 28, 2026. Values are shares of all Philippine employment. They do not count quality reviewers or measure outsourcing work.',
  },
  processGraphic: {
    title: 'A quality issue needs one repair path',
    description: 'A separate four-step graphic that moves a sampled item through a written check, a cause record, an owner repair, and a repeated test.',
    steps: [
      { label: '1. Check', note: 'Compare the item with the named source and fields' },
      { label: '2. Classify', note: 'Record the miss and its main cause' },
      { label: '3. Repair', note: 'Send the cause to the person who can fix it' },
      { label: '4. Recheck', note: 'Test the changed rule on a fresh batch' },
    ],
  },
  workflow: [
    { step: 'Days 1–3', title: 'Write the check', body: 'Choose one queue. Name the source, required fields, due time, allowed actions, stop rules, evidence, and internal owner.' },
    { step: 'Days 4–8', title: 'Build the examples', body: 'Prepare good, fixable, and stopped items with private details removed. Have two reviewers test the same written check.' },
    { step: 'Days 9–14', title: 'Review the first batch', body: 'Check every item in a small batch. Record the result and whether each miss came from the source, rule, access, training, tool, or action.' },
    { step: 'Days 15–21', title: 'Repair the causes', body: 'Fix weak source pages, clarify limits, remove unused access, and repeat any failed check before the queue grows.' },
    { step: 'Days 22–30', title: 'Set the sample', body: 'Choose a repeatable sample rule and separate high-risk checks. Save the method, owner, review date, and next repair.' },
  ],
  script: [
    'Show us the written quality check for the first Filipino team, including the source, required fields, stop rule, and saved evidence.',
    'How do you choose items for review, and how do you keep normal samples separate from high-risk checks?',
    'Which corrections may the reviewer make, and which access, money, policy, legal, or customer decisions return to our company?',
    'How will you record the cause of a miss and send the repair to someone who can change the source, rule, tool, or training?',
  ],
  banners: [
    { eyebrow: 'Quality scope', heading: 'Turn one outsourced queue into a check two people can repeat.', body: 'Bring the source, required fields, stop rules, examples, and review owner to the staffing intake.', href: '/contact', label: 'Write the check' },
    { eyebrow: 'Owner limits', heading: 'Separate routine review from company decisions.', body: 'Keep access, money, policy, legal, and sensitive customer choices with approved owners.', href: '/contact', label: 'Set the limits' },
    { eyebrow: 'Philippines staffing', heading: 'Test the review before the first live sample.', body: 'Plan the first batch, cause labels, evidence record, relief cover, and repair path.', href: '/contact', label: 'Start the brief' },
  ],
  sourcesNumbered: true,
  sources: [
    { name: 'World Bank: Employment in services, Philippines', url: 'https://api.worldbank.org/v2/country/PH/indicator/SL.SRV.EMPL.ZS?format=json&per_page=10', note: 'The 2025 modeled ILO estimate is 59.548005% of Philippine employment. This broad series is not a count of outsourced quality reviewers.' },
    { name: 'WHO and ILO: Long working hours and health', url: 'https://www.who.int/news/item/17-05-2021-long-working-hours-increasing-deaths-from-heart-disease-and-stroke-who-ilo', note: 'The May 17, 2021 release reports 745,000 deaths in 2016 and global risks tied to working at least 55 hours a week.' },
    { name: 'Lawphil: Philippine Data Privacy Act of 2012', url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html', note: 'Sections 14 and 20 cover subcontracted processing and safeguards for personal information.' },
    { name: 'NIST SP 800-53 Rev. 5: Security and Privacy Controls', url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final', note: 'The US government control catalog includes least privilege and assessment-related controls.' },
    { name: 'NIST SP 800-53A Rev. 5: Assessing Security and Privacy Controls', url: 'https://csrc.nist.gov/pubs/sp/800/53/a/r5/final', note: 'The US government guide describes customizable procedures for assessing controls.' },
  ],
  faqs: [
    { question: 'What should a Philippines outsourcing quality checklist include?', answer: 'Name the approved source, required fields, due time, allowed action, stop rule, saved evidence, final status, and owner who can repair a bad source or rule.' },
    { question: 'How large should the first quality sample be?', answer: 'Review every item in a small first batch that your owner can check closely. A batch of 20 or 25 may work for planning, but the right size depends on the queue, risk, volume, and reviewer time.' },
    { question: 'Can a Filipino reviewer correct another worker’s item?', answer: 'The reviewer may correct listed fields or return work when the written process allows it. Access changes, money movement, policy, legal judgment, staff discipline, and sensitive customer exceptions should stay with approved owners.' },
    { question: 'How should quality misses be reported?', answer: 'Record the exact item and check that failed, then give the miss one main cause such as source, rule, access, training, tool, or action. Assign the repair to a named person and test the changed process on fresh work.' },
  ],
  relatedLinks: [
    { label: 'Read the Philippines outsourcing buyer guide', href: '/blog/outsource-to-the-philippines-guide' },
    { label: 'See quality assurance support', href: '/services/quality-assurance-support' },
    { label: 'Plan one safe back-office queue', href: '/services/back-office-operations' },
    { label: 'See data management support', href: '/services/data-management' },
    { label: 'Use the Philippines continuity plan', href: '/blog/philippines-outsourcing-business-continuity-plan' },
  ],
} as const;
