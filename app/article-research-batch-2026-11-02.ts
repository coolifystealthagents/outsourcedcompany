export const researchPosts2026_11_02 = [
  {
    "slug": "philippines-outsourcing-queue-age-anomaly-study",
    "title": "Queue Age Anomalies in Outsourced Back-Office Work",
    "excerpt": "A descriptive protocol for finding items whose recorded age does not match their event history, with explicit denominators and reconciliation rules.",
    "updated": "2026-11-02",
    "datePublished": "2026-11-02",
    "displayDate": "November 2, 2026",
    "image": "/nov2/company-research/philippines-outsourcing-queue-age-anomaly-study.webp",
    "imageAlt": "Queue Age Anomalies in Outsourced Back-Office Work evidence map",
    "body": [
      "This protocol asks how often the age shown in an outsourced work queue disagrees with the event history of the underlying item. Define the population as items open at any point during a declared observation window in one workflow. The unit is one item linked to its creation event, state changes, owner transitions, and close event. Freeze the window, systems, and inclusion rules before viewing results.",
      "Age anomalies matter because a queue can look healthy while items are older than reported. A reset timestamp, a reopened case, or a migrated record can make an aging item appear new. The study describes the frequency and shape of those disagreements; it does not rank a team or prove that a specific cause produced a specific delay.",
      "Build the frame from the queue export and the audit history, not from the current status field alone. Include open, closed, reopened, cancelled, and transferred items so the denominator is explicit. Record every exclusion with its reason. If an item appears in two queues, define whether it is one unit or two before counting, and keep that rule stable.",
      "For each item, capture the created time, the first owner assignment, every state change, the current owner, and the close time. Preserve the timestamp each system displays and note the time zone. Where a migration changed the identifier, keep a crosswalk. Do not replace an earlier timestamp with a later one because the later value looks more consistent.",
      "Define an age anomaly before measuring it. Examples include a current age shorter than the time since the last owner change, a close time earlier than the last update, or a reopened item whose age restarted at zero. Record which rule flagged the item, the conflicting fields, and the reviewer who confirmed the conflict. A rule that depends on private knowledge is not reproducible.",
      "Report the eligible count, the observed count, the number with complete event history, and the number that could not be classified. Present anomalies by workflow, owner group, age band, and reopen status. Show the share of items whose age could not be verified separately from the share whose age was verified and found inconsistent.",
      "Build a chronology for a protected sample of anomalies from creation through each state change and close. Separate waiting on the company owner, waiting on a customer or vendor, system delay, and time outside the service window. If the queue records only the current state, the chronology may be incomplete; say so rather than inferring missing intervals.",
      "Use a second reviewer on the same protected subset with the same definitions and event export. Compare the classification of each anomaly and the treatment of missing timestamps. Disagreements about what counts as an anomaly return to the owner who can clarify the workflow rule. Do not resolve them by majority vote.",
      "Protect the extract with stable study keys, named access, and approved storage. Keep the identity crosswalk in a separate restricted location. NIST and CISA sources inform access and logging practice, while GAO guidance supports examination of provenance and completeness. None of them validates this queue or certifies a provider.",
      "A queue-age study is descriptive. Results depend on the event history the systems retained, the observation window, the workflow mix, and the reviewer's classification. Test the findings against alternative windows and against a sample that includes records with missing history. If the conclusion changes, report both readings and name the decision that depends on the definition."
    ],
    "sources": [
      {
        "label": "NIST Cybersecurity Framework 2.0",
        "href": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "NIST Privacy Framework",
        "href": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "NIST SP 800-53 Rev. 5",
        "href": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "label": "CISA Cybersecurity Performance Goals",
        "href": "https://www.cisa.gov/cybersecurity-performance-goals"
      },
      {
        "label": "U.S. GAO Assessing Data Reliability",
        "href": "https://www.gao.gov/products/gao-20-283g"
      },
      {
        "label": "Philippine Statistics Authority Labor Force Survey",
        "href": "https://psa.gov.ph/statistics/labor-force-survey"
      },
      {
        "label": "International Labour Organization Data",
        "href": "https://www.ilo.org/data"
      },
      {
        "label": "World Bank Philippines Overview",
        "href": "https://www.worldbank.org/en/country/philippines/overview"
      }
    ],
    "related": [
      {
        "label": "Where Missing Evidence Clusters in Outsourced Queues",
        "href": "/research/philippines-outsourcing-missing-evidence-clustering-study"
      },
      {
        "label": "Destination Confirmation Lag After Outsourced Completion",
        "href": "/research/philippines-outsourcing-destination-confirmation-lag-study"
      },
      {
        "label": "Request an operations brief",
        "href": "/contact-us"
      }
    ],
    "cta": "Bring one queue export, its event history, and the owner who can clarify the age rule to a bounded review."
  },
  {
    "slug": "philippines-outsourcing-owner-switch-cost-study",
    "title": "Owner Switch Cost in Outsourced Exception Handling",
    "excerpt": "A measurement protocol for the rework and delay that appear when an exception changes owner, with a declared unit and honest limits.",
    "updated": "2026-11-02",
    "datePublished": "2026-11-02",
    "displayDate": "November 2, 2026",
    "image": "/nov2/company-research/philippines-outsourcing-owner-switch-cost-study.webp",
    "imageAlt": "Owner Switch Cost in Outsourced Exception Handling evidence map",
    "body": [
      "This protocol asks what happens to an outsourced exception when its owner changes before the case closes. Define the population as exceptions that changed owner at least once during a declared window in one workflow. The unit is one exception linked to every owner period, handoff note, decision, and close event. Record the inclusion rule before extracting records.",
      "Owner switches are not inherently defects. A case may move to the right specialist, a backup may cover an absence, or a manager may take a policy decision. The study separates ordinary routing from switches that repeat, stall, or lose evidence. It does not assume that fewer switches are always better.",
      "Build the frame from the exception log and the assignment history. Include cases that moved between people, teams, and queues. Exclude cases that were reassigned before any substantive review only if the protocol says so, and report the number excluded. Keep a stable key so a case that changes systems does not become two cases.",
      "For each owner period, record the start and end time, the owner role, the handoff note, the pending decision, and the evidence available at the switch. Preserve the note as written and note whether the receiving owner acknowledged it. A switch without an acknowledgement is a different event from a switch with one.",
      "Define the measures in advance: switches per exception, repeated switches, time to first substantive action after a switch, evidence lost or recreated, owner wait, and reopen rate. A switch that transfers a complete packet may cost little; a switch that forces the new owner to rebuild the case may cost a great deal. Report the distribution, not only the average.",
      "Reconstruct a protected sample of cases across one-switch, multi-switch, and same-owner comparisons. Separate time spent waiting for the previous owner, the new owner, a customer, or a system. Do not count parallel intervals twice. When the handoff note is missing, mark the interval as unclassified rather than assigning it to a cause.",
      "Use an independent reviewer to classify the same cases with the same codebook. Compare whether the switch was necessary, whether the note was sufficient, and whether the new owner repeated work. Disagreements about necessity return to the workflow owner. The study can describe patterns but cannot prove that a particular switch caused a later error.",
      "Protect the extract and the handoff notes. Handoff text can contain customer, employee, or commercial details, so keep only the fields the study needs and restrict access. NIST privacy and access concepts support the handling design; they do not make the notes accurate. Report the fields that were unavailable or redacted.",
      "Owner-switch cost is sensitive to workflow, case mix, staffing model, and the definition of a substantive action. Test the results with a narrower window and with cases that have complete handoff notes. If the direction changes, present both results and explain which decision depends on the choice. Avoid turning a descriptive finding into a claim about worker quality.",
      "The practical output is a short list of repair options: require an acknowledgement for high-consequence switches, standardize the handoff packet, name a backup before absence, or reduce the number of queues a case can enter. Each option needs an owner, a success signal, and a review date. The study supports a decision; it does not make it."
    ],
    "sources": [
      {
        "label": "NIST Cybersecurity Framework 2.0",
        "href": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "NIST Privacy Framework",
        "href": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "NIST SP 800-53 Rev. 5",
        "href": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "label": "CISA Cybersecurity Performance Goals",
        "href": "https://www.cisa.gov/cybersecurity-performance-goals"
      },
      {
        "label": "U.S. GAO Assessing Data Reliability",
        "href": "https://www.gao.gov/products/gao-20-283g"
      },
      {
        "label": "Philippine Statistics Authority Labor Force Survey",
        "href": "https://psa.gov.ph/statistics/labor-force-survey"
      },
      {
        "label": "International Labour Organization Data",
        "href": "https://www.ilo.org/data"
      },
      {
        "label": "World Bank Philippines Overview",
        "href": "https://www.worldbank.org/en/country/philippines/overview"
      }
    ],
    "related": [
      {
        "label": "Reason Code Drift in Outsourced Exception Logs",
        "href": "/research/philippines-outsourcing-exception-reason-code-drift-study"
      },
      {
        "label": "Queue Age Anomalies in Outsourced Back-Office Work",
        "href": "/research/philippines-outsourcing-queue-age-anomaly-study"
      },
      {
        "label": "Request an operations brief",
        "href": "/contact-us"
      }
    ],
    "cta": "Bring one exception log and its assignment history to a review that separates routing from rework."
  },
  {
    "slug": "philippines-outsourcing-missing-evidence-clustering-study",
    "title": "Where Missing Evidence Clusters in Outsourced Queues",
    "excerpt": "A protocol for locating repeated gaps in source evidence by workflow, owner, and case type without treating a missing field as a zero.",
    "updated": "2026-11-02",
    "datePublished": "2026-11-02",
    "displayDate": "November 2, 2026",
    "image": "/nov2/company-research/philippines-outsourcing-missing-evidence-clustering-study.webp",
    "imageAlt": "Where Missing Evidence Clusters in Outsourced Queues evidence map",
    "body": [
      "This protocol asks where missing evidence concentrates in an outsourced queue. Define the population as items that reached a review state during a declared window in one or more workflows. The unit is one item linked to its required evidence checklist, the evidence present, the evidence missing, and the disposition. Freeze the checklist version before extraction.",
      "Missing evidence is not a single condition. A document may be absent, unreadable, expired, restricted, or awaiting an owner. Collapsing those states into one blank field hides the difference between a vendor delay and a permissions problem. The study keeps them separate and reports each count.",
      "Build the frame from the queue and the evidence checklist. Include items that were closed, returned, reopened, and cancelled. If an item was reviewed twice, use the review event that triggered the evidence check and record later events separately. Report the eligible count and every exclusion before drawing a sample.",
      "For each item, record the required evidence class, the state observed, the source system, the observation time, and the reviewer. Use a stable key rather than a customer or employee identifier. If the checklist changed during the window, keep the earlier version for earlier items and apply the new version only to later ones.",
      "Define clusters in advance: by workflow, owner group, case type, channel, time period, and evidence class. A cluster is a count and a share, not a conclusion. Report the denominator for every cluster and show the cases that could not be classified. A high missing rate in a small workflow may be less material than a low rate in a high-consequence one.",
      "Build a chronology for a protected sample of missing-evidence cases from intake through the first request, follow-up, owner response, and disposition. Note whether the gap was created at intake, during preparation, or after a handoff. Do not assume that the first missing field caused the eventual delay.",
      "Use an independent reviewer on the same sample with the same checklist and definitions. Compare the evidence state, the cluster assignment, and the disposition. Disagreements about whether a document satisfies the checklist return to the checklist owner. The study should not resolve policy ambiguity by reviewer consensus.",
      "Protect the extract and the documents. Keep the evidence references in the approved repository and restrict the study file to the minimum fields. NIST privacy and access concepts inform the handling, while GAO data-reliability guidance supports provenance checks. None of these sources certifies the workflow or the provider.",
      "Missing-evidence studies are sensitive to the checklist, the workflow mix, and the observation window. Test the findings with a stricter checklist and with a sample that includes items closed without review. If the ranking of clusters changes, report both rankings and name the decision that depends on the definition.",
      "The useful output is a repair target: simplify an intake form, move a required field earlier, add a named owner for a restricted document, or change a follow-up rule. State the expected signal and the review date. A cluster is only actionable when it points to a control the company can change."
    ],
    "sources": [
      {
        "label": "NIST Cybersecurity Framework 2.0",
        "href": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "NIST Privacy Framework",
        "href": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "NIST SP 800-53 Rev. 5",
        "href": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "label": "CISA Cybersecurity Performance Goals",
        "href": "https://www.cisa.gov/cybersecurity-performance-goals"
      },
      {
        "label": "U.S. GAO Assessing Data Reliability",
        "href": "https://www.gao.gov/products/gao-20-283g"
      },
      {
        "label": "Philippine Statistics Authority Labor Force Survey",
        "href": "https://psa.gov.ph/statistics/labor-force-survey"
      },
      {
        "label": "International Labour Organization Data",
        "href": "https://www.ilo.org/data"
      },
      {
        "label": "World Bank Philippines Overview",
        "href": "https://www.worldbank.org/en/country/philippines/overview"
      }
    ],
    "related": [
      {
        "label": "Destination Confirmation Lag After Outsourced Completion",
        "href": "/research/philippines-outsourcing-destination-confirmation-lag-study"
      },
      {
        "label": "Owner Switch Cost in Outsourced Exception Handling",
        "href": "/research/philippines-outsourcing-owner-switch-cost-study"
      },
      {
        "label": "Request an operations brief",
        "href": "/contact-us"
      }
    ],
    "cta": "Bring one evidence checklist and a sample of reviewed items to a session that locates the gap rather than blaming the queue."
  },
  {
    "slug": "philippines-outsourcing-destination-confirmation-lag-study",
    "title": "Destination Confirmation Lag After Outsourced Completion",
    "excerpt": "A protocol for measuring the time between an outsourced item being marked complete and the accountable destination confirming receipt.",
    "updated": "2026-11-02",
    "datePublished": "2026-11-02",
    "displayDate": "November 2, 2026",
    "image": "/nov2/company-research/philippines-outsourcing-destination-confirmation-lag-study.webp",
    "imageAlt": "Destination Confirmation Lag After Outsourced Completion evidence map",
    "body": [
      "This protocol asks how long it takes for an outsourced item marked complete to be confirmed at its destination. Define the population as items completed in a declared window that were supposed to produce a downstream record, approval, or acknowledgement. The unit is one item linked to its completion event, handoff, destination receipt, and any correction.",
      "A local complete status is not the same as an accepted outcome. The gap between the two can hide unread messages, wrong destinations, and work that another team quietly repairs. The study measures the interval and the evidence of receipt; it does not assume that a slow confirmation is a support failure.",
      "Build the frame from the completion log and the destination system. Include items sent to another team, a customer, a vendor, or a regulated portal. Record the destination class and the acknowledgement rule. Exclude items with no destination requirement only when the protocol defines them as out of scope, and report the count.",
      "For each item, capture the completion time, the handoff time, the destination change time, the acknowledgement time, and the reviewer. Preserve the timestamp each system displays and note the time zone. If the destination has no acknowledgement event, record the absence rather than substituting the sender's confirmation.",
      "Report the distribution of confirmation lag, the share confirmed within the declared window, the share with no confirmation, and the share confirmed after a correction. Segment by destination class, workflow, urgency, and owner group. Show the cases that could not be classified separately; a missing destination record is a result, not a zero.",
      "Reconstruct a protected sample from completion through handoff, destination change, acknowledgement, and any rework. Separate time waiting for the destination, waiting for an internal owner, and time outside the service window. Do not count the same interval twice. If the destination event is ambiguous, describe the ambiguity instead of inferring a clean timeline.",
      "Use an independent reviewer on the same sample with the same definitions. Compare the completion event, the destination event, and the classification of no-confirmation cases. Disagreements about what counts as confirmation return to the process owner. The study should not treat an automated read receipt as proof that the destination accepted the content.",
      "Protect the extract and the destination records. Keep customer, employee, and commercial details out of the analysis file where a reference is enough. NIST and CISA sources inform logging and access practice; GAO guidance supports provenance checks. None of them proves that a destination accepted an item.",
      "Confirmation lag depends on the destination team's capacity, the acknowledgement rule, the workflow, and the observation window. Test the results with a stricter definition of confirmation and with a sample that includes items completed near the end of the window. If the conclusion changes, report both readings and the decision that depends on them.",
      "The practical output is a confirmation rule: which destinations must acknowledge, what counts as acknowledgement, who follows up, and when the item becomes an exception. Set the rule with the destination owner, then measure whether it reduces unconfirmed completions without creating a new queue of empty acknowledgements."
    ],
    "sources": [
      {
        "label": "NIST Cybersecurity Framework 2.0",
        "href": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "NIST Privacy Framework",
        "href": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "NIST SP 800-53 Rev. 5",
        "href": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "label": "CISA Cybersecurity Performance Goals",
        "href": "https://www.cisa.gov/cybersecurity-performance-goals"
      },
      {
        "label": "U.S. GAO Assessing Data Reliability",
        "href": "https://www.gao.gov/products/gao-20-283g"
      },
      {
        "label": "Philippine Statistics Authority Labor Force Survey",
        "href": "https://psa.gov.ph/statistics/labor-force-survey"
      },
      {
        "label": "International Labour Organization Data",
        "href": "https://www.ilo.org/data"
      },
      {
        "label": "World Bank Philippines Overview",
        "href": "https://www.worldbank.org/en/country/philippines/overview"
      }
    ],
    "related": [
      {
        "label": "Where Missing Evidence Clusters in Outsourced Queues",
        "href": "/research/philippines-outsourcing-missing-evidence-clustering-study"
      },
      {
        "label": "Queue Age Anomalies in Outsourced Back-Office Work",
        "href": "/research/philippines-outsourcing-queue-age-anomaly-study"
      },
      {
        "label": "Request an operations brief",
        "href": "/contact-us"
      }
    ],
    "cta": "Bring one completion log and its destination records to a review of what complete actually means."
  },
  {
    "slug": "philippines-outsourcing-exception-reason-code-drift-study",
    "title": "Reason Code Drift in Outsourced Exception Logs",
    "excerpt": "A protocol for detecting when the meaning of an exception reason code changes over time, and for keeping the trend readable.",
    "updated": "2026-11-02",
    "datePublished": "2026-11-02",
    "displayDate": "November 2, 2026",
    "image": "/nov2/company-research/philippines-outsourcing-exception-reason-code-drift-study.webp",
    "imageAlt": "Reason Code Drift in Outsourced Exception Logs evidence map",
    "body": [
      "This protocol asks whether the meaning of an exception reason code stayed stable during a declared observation window. Define the population as exception records that carry a reason code in one workflow. The unit is one exception linked to its code, the codebook version, the reviewer, the free-text note, and the disposition. Freeze the codebook before sampling.",
      "Reason codes are useful only when people apply them the same way. A code may drift because the definition changed, because reviewers interpret it differently, or because a new failure mode was forced into an old category. Drift can make a trend look better or worse without any change in the underlying work.",
      "Build the frame from the exception log and the codebook history. Include records across teams, shifts, and case types. If a code was added, renamed, or retired during the window, record the effective date and keep the old and new labels separate. Report the eligible count, exclusions, and records with no code.",
      "For each record, capture the code, the codebook version, the reviewer, the free-text note, and the case context. Compare the note with the code definition and record whether they agree, conflict, or are too vague to classify. A record with no note may be unclassifiable; do not assume the code is correct because a value is present.",
      "Define the drift measures in advance: share of records whose note conflicts with the code, share of codes applied outside their stated scope, share of new failure modes forced into an existing code, and reviewer agreement. Report the distribution by code and by period. A high conflict rate in one code may indicate a definition problem rather than a reviewer problem.",
      "Reconstruct a protected sample of conflicting records and trace how the case was handled. Note whether the code affected routing, priority, or the owner's decision. A code that never changes an action may be harmless bookkeeping; a code that routes a high-consequence case to the wrong queue is a material defect.",
      "Use an independent reviewer on the same sample with the same codebook. Compare the code assignment and the note assessment. Disagreements about the definition return to the codebook owner. Do not let the reviewers invent a new code during the exercise; record the gap and route it.",
      "Protect the extract and the free-text notes. Notes can contain personal or commercial details, so keep only the fields needed and restrict access. NIST privacy and access concepts inform the handling design; GAO guidance supports provenance checks. None of these sources validates the codebook.",
      "Code drift is sensitive to the codebook version, the workflow mix, and the reviewers included. Test the findings with a stricter definition of conflict and with a sample restricted to one team. If the ranking of codes changes, report both results and explain which decision depends on the definition.",
      "The practical output is a codebook repair: clarify a definition, split an overloaded code, add a new failure mode, or require a short note for a high-consequence code. Assign an owner and a review date, then measure whether agreement improves. The aim is a readable log, not a perfect taxonomy."
    ],
    "sources": [
      {
        "label": "NIST Cybersecurity Framework 2.0",
        "href": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "NIST Privacy Framework",
        "href": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "NIST SP 800-53 Rev. 5",
        "href": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "label": "CISA Cybersecurity Performance Goals",
        "href": "https://www.cisa.gov/cybersecurity-performance-goals"
      },
      {
        "label": "U.S. GAO Assessing Data Reliability",
        "href": "https://www.gao.gov/products/gao-20-283g"
      },
      {
        "label": "Philippine Statistics Authority Labor Force Survey",
        "href": "https://psa.gov.ph/statistics/labor-force-survey"
      },
      {
        "label": "International Labour Organization Data",
        "href": "https://www.ilo.org/data"
      },
      {
        "label": "World Bank Philippines Overview",
        "href": "https://www.worldbank.org/en/country/philippines/overview"
      }
    ],
    "related": [
      {
        "label": "Owner Switch Cost in Outsourced Exception Handling",
        "href": "/research/philippines-outsourcing-owner-switch-cost-study"
      },
      {
        "label": "Where Missing Evidence Clusters in Outsourced Queues",
        "href": "/research/philippines-outsourcing-missing-evidence-clustering-study"
      },
      {
        "label": "Request an operations brief",
        "href": "/contact-us"
      }
    ],
    "cta": "Bring one exception log and its codebook history to a review of whether the labels still mean what the report says."
  }
] as const;
