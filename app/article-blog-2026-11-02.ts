export const blogPosts2026_11_02 = [
  {
    "slug": "philippines-outsourcing-purchase-order-split-approval",
    "title": "Review Split Purchase Orders Without Approving Spend",
    "excerpt": "A bounded evidence lane for procurement requests that may have been divided across orders, with explicit thresholds, stop states, and owner decisions.",
    "minutes": 11,
    "published": "2026-11-02"
  },
  {
    "slug": "philippines-outsourcing-credit-hold-evidence-packet",
    "title": "Assemble Credit Hold Evidence Without Releasing Accounts",
    "excerpt": "A practical packet for customer credit holds: source-linked payment and order evidence, neutral summaries, and release decisions that stay with the finance owner.",
    "minutes": 10,
    "published": "2026-11-02"
  },
  {
    "slug": "philippines-outsourcing-regulatory-correspondence-register",
    "title": "Register Regulatory Correspondence Without Interpreting Rules",
    "excerpt": "An intake and routing register for regulator letters and notices that preserves deadlines, identity, and custody while legal interpretation stays with counsel.",
    "minutes": 11,
    "published": "2026-11-02"
  },
  {
    "slug": "philippines-outsourcing-vendor-due-diligence-file",
    "title": "Maintain a Vendor Due Diligence File Without Scoring Risk",
    "excerpt": "A completeness and expiry workflow for vendor onboarding documents that keeps risk rating and approval with the accountable owner.",
    "minutes": 10,
    "published": "2026-11-02"
  },
  {
    "slug": "philippines-outsourcing-service-credit-reconciliation",
    "title": "Reconcile SLA Service Credits Without Approving Refunds",
    "excerpt": "A reproducible worksheet for monthly service-credit calculations that keeps formula interpretation and credit approval with the contract owner.",
    "minutes": 11,
    "published": "2026-11-02"
  }
] as const;

export const blogDetails2026_11_02 = {
  "philippines-outsourcing-purchase-order-split-approval": {
    "updated": "2026-11-02",
    "datePublished": "2026-11-02",
    "marker": "november-2-2026-philippines-outsourcing-purchase-order-split-approval",
    "takeaway": "Use a reproducible matching rule to surface possible split purchases, keep every order linked to its originating request, and leave the commitment decision with the procurement owner.",
    "image": "/nov2/company-blog/philippines-outsourcing-purchase-order-split-approval.webp",
    "sections": [
      {
        "heading": "Define the review unit and authority boundary",
        "body": [
          "Treat split-purchase review as a bounded evidence lane, not a procurement role. The unit is one purchase request and every order created from it, linked to the requesting department, the approved catalog, the amount, the approval threshold in force, and the owner authorized to commit spend. Write the lane brief before access is granted so a coordinator knows which fields may be prepared and which conclusions belong to procurement.",
          "The central risk is a coordinator deciding that two orders are really one purchase and approving the combined commitment. That is a procurement judgment. The outsourced role may group records by the identifiers the company supplies, calculate the combined amount, and flag a pattern. It may not select a vendor, approve an exception, or tell a requester that a workaround is acceptable."
        ]
      },
      {
        "heading": "Capture request lineage before comparing orders",
        "body": [
          "Start from the originating request or requisition, not from the order list. Record the request identifier, requester, cost center, business reason, requested delivery date, and the exact catalog version used. Then attach every order that cites the request, including cancelled and revised orders, because a cancelled order can still reveal an attempt to divide a commitment.",
          "Preserve the order version, creation time, currency, and the approval record attached at the time. A later reclassification must be appended, never used to overwrite the earlier state. When two systems disagree about the amount or the requester, keep both values and name the system of record for each field. A clean comparison begins with an honest lineage, not with a tidy spreadsheet."
        ]
      },
      {
        "heading": "Detect split patterns with explicit rules",
        "body": [
          "Write the detection rule before running it. A common rule flags consecutive orders from the same requester, vendor, and cost center within a defined window where each order sits below the threshold but the combined value exceeds it. The rule should name the window, the matching keys, currency treatment, and whether cancelled orders count. The company owns those choices.",
          "Run the rule as a reproducible query and keep the query version with the result. Report matches, near misses, and suppressed cases separately. A near miss might share a vendor but not a business reason, and suppressing it without a note hides the judgment. The coordinator documents what the rule returned and routes the interpretation to procurement rather than writing a conclusion into the case."
        ]
      },
      {
        "heading": "Separate clerical checks from procurement judgment",
        "body": [
          "Clerical checks confirm that fields are present, identifiers match, totals add up, and the approval record covers the order as written. Procurement judgment covers whether the business reason justifies the purchase, whether the vendor is appropriate, and whether the combined commitment should be approved. Keep these in separate fields so a reviewer can see which part was mechanical.",
          "A neutral summary is more useful than a recommendation. State the orders, the combined amount, the threshold, the matching keys, and the open question. Do not write that the case looks like an attempted split unless the company has approved that language for the lane. The owner needs the facts and the uncertainty, not a borrowed conclusion that could later appear in an audit as the company's position."
        ]
      },
      {
        "heading": "Document stop states and owner escalation",
        "body": [
          "Stop when the request lineage is incomplete, the threshold version is unknown, currencies cannot be converted on an approved rate, or an order was changed after approval. Each stop needs a reason code, the missing evidence, the named owner, and the safe interim state. A stopped case is not a failed case; it is the control doing its job before an unauthorized commitment is made.",
          "Escalation should be short and attributable. Include the case identifier, the orders, the rule that matched, the evidence already checked, the specific decision requested, and the last safe time to act. Record the owner's response closely enough to preserve the decision, then link it to every affected order. Silence is not approval, and a verbal go-ahead should be converted into a written record by the owner."
        ]
      },
      {
        "heading": "Measure detection quality and close the loop",
        "body": [
          "Report how many requests were reviewed, how many matched the rule, how many were confirmed by procurement, and how many were closed as legitimate. Include the cases where evidence was missing and the cases that were reopened. A high match count may mean the rule is noisy, while a low count may mean intake is incomplete. Neither number is a performance score on its own.",
          "Close by reconciling the request, every linked order, the approval record, and the final commitment. Verify that the owner's decision reached the procurement system, not just the review queue. When the rule produces repeated false positives, revise the matching keys with the owner and keep the old rule version for comparison. The lane improves when the evidence changes the rule, not when the queue looks quiet."
        ]
      }
    ],
    "script": [
      "Which request identifier links these orders, and who owns that request?",
      "Which approval threshold version was in force when each order was created?",
      "Which matching keys does the split rule use, and who approved them?",
      "What evidence must reach procurement before a combined commitment is considered?"
    ],
    "sources": [
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework",
        "note": "Governance, identity, access, and recovery outcomes for accountable operating controls."
      },
      {
        "name": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework",
        "note": "Privacy-risk framing for collection, use, sharing, and retention of protected records."
      },
      {
        "name": "NIST SP 800-53 Rev. 5",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
        "note": "Control catalog for access enforcement, audit logging, and incident handling."
      },
      {
        "name": "CISA Cybersecurity Performance Goals",
        "url": "https://www.cisa.gov/cybersecurity-performance-goals",
        "note": "Practical access, logging, response, and recovery considerations for small teams."
      },
      {
        "name": "U.S. GAO Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g",
        "note": "Methods for examining provenance, completeness, and fitness for intended use."
      }
    ],
    "faqs": [
      {
        "question": "Can an outsourced coordinator decide that a split purchase was intentional?",
        "answer": "No. The coordinator can group orders and apply an approved matching rule. Intent, vendor suitability, and the commitment decision belong to the procurement owner."
      },
      {
        "question": "What should happen when one order is cancelled?",
        "answer": "Keep it linked to the request and report it separately. A cancelled order can still be evidence of an attempt to divide a commitment, but it must not be silently removed from the case."
      },
      {
        "question": "How should currencies be handled?",
        "answer": "Use the company's approved conversion method and record the rate source and date. If no approved method exists, stop the comparison and route the question to the owner."
      },
      {
        "question": "When should the matching rule be revised?",
        "answer": "Revise it when repeated false positives or missed cases show that the keys, window, or threshold logic no longer fit the operating reality. Keep the prior version for comparison."
      }
    ],
    "relatedLinks": [
      {
        "label": "Assemble Credit Hold Evidence Without Releasing Accounts",
        "href": "/blog/philippines-outsourcing-credit-hold-evidence-packet"
      },
      {
        "label": "Explore back-office operations",
        "href": "/services/back-office-operations"
      }
    ],
    "banners": [
      {
        "eyebrow": "Operating boundary",
        "heading": "Turn the workflow into a reviewable role brief",
        "body": "Bring one review split purchase orders without approving spend example, its source systems, protected decisions, and review owner.",
        "href": "/contact-us",
        "label": "Discuss the role"
      }
    ]
  },
  "philippines-outsourcing-credit-hold-evidence-packet": {
    "updated": "2026-11-02",
    "datePublished": "2026-11-02",
    "marker": "november-2-2026-philippines-outsourcing-credit-hold-evidence-packet",
    "takeaway": "Build a credit-hold packet that separates observed payment and order states from the decision to release an account, and verify the release at its destination.",
    "image": "/nov2/company-blog/philippines-outsourcing-credit-hold-evidence-packet.webp",
    "sections": [
      {
        "heading": "Name the hold event and the decision owner",
        "body": [
          "A credit hold review begins with a specific hold event: the account, the date the hold was applied, the rule or owner instruction that triggered it, and the amount or condition in dispute. Record the finance owner who can release, reduce, or maintain the hold. Without that anchor, a packet becomes a general customer history that no one can act on.",
          "The outsourced role may collect statements, invoices, order records, and correspondence that the company has approved for the lane. It may not promise a release, negotiate terms, or tell a customer that payment will restore the account. Those statements create commitments the coordinator is not authorized to make."
        ]
      },
      {
        "heading": "Build the packet from controlled sources",
        "body": [
          "Pull the account balance from the billing system of record and the order status from the order system, not from a forwarded email. Record the retrieval time, the report version, and any filter used. Attach the customer's claim separately so the packet distinguishes what the company's records show from what the customer asserts.",
          "Use stable identifiers rather than customer names where possible. Keep payment references, invoice numbers, credit memos, and disputed line items in separate fields. If a document is missing, mark it missing with the reason instead of leaving a blank that looks like a zero. The packet should let a finance reviewer reconstruct the position without opening five systems."
        ]
      },
      {
        "heading": "Reconcile conflicting payment and order states",
        "body": [
          "Conflicts are normal: a payment may be posted in one system and pending in another, or a credit memo may be applied after the statement date. Preserve both values, name each source, and record which system the company treats as authoritative for that field. Do not average the values or choose the one that supports a release.",
          "Build a short timeline from invoice, payment, dispute, hold, and review events. Use the timestamp each system displays and note the time zone. When a payment appears after the hold, say so explicitly and leave the effect on the hold to the owner. A timeline that hides the sequence invites a decision based on the wrong balance."
        ]
      },
      {
        "heading": "Keep customer communication inside approved scripts",
        "body": [
          "If the lane includes customer contact, use only approved language. The coordinator can acknowledge receipt, confirm that a review is open, and give the response window the company has authorized. The coordinator cannot characterize the debt, threaten collection, or predict the outcome.",
          "Save the exact message sent, the channel, the time, and the recipient. If a customer supplies new evidence, attach it to the packet and route it to the owner rather than debating it in the thread. Communication records are part of the evidence, and an informal promise can become a commitment the company has to honor."
        ]
      },
      {
        "heading": "Handle partial payment and promise-to-pay cases",
        "body": [
          "Partial payments need their own state. Record the amount received, the invoices it was applied to, the remaining balance, and whether the allocation was automatic or manual. A promise-to-pay is not a payment; record the promised date, the person who made the promise, and the source of the promise without treating it as cash.",
          "These cases are where unauthorized reassurance is most tempting. The coordinator should present the facts and the gap, then ask the finance owner whether the hold changes. If the owner approves a temporary release, record the scope, expiry, and conditions, and verify that the billing system reflects them."
        ]
      },
      {
        "heading": "Verify release, denial, and reopen evidence",
        "body": [
          "A decision is not complete until the destination shows it. If the owner releases the hold, confirm the account status, the effective time, and the approval reference in the billing system. If the owner maintains the hold, record the reason and the next review date. If the case reopens, link the new evidence to the original packet.",
          "Close the packet by reconciling the customer record, the hold status, the communication log, and any temporary permission used during review. Report cases where the destination did not match the decision. That mismatch is more important than the number of packets completed, because it shows whether the control actually changed the account."
        ]
      }
    ],
    "script": [
      "Which system is authoritative for the balance, and when was it last reconciled?",
      "Who can release this hold, and what evidence do they require?",
      "Which customer statements are claims rather than confirmed records?",
      "How will we verify that a release reached the billing system?"
    ],
    "sources": [
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework",
        "note": "Governance, identity, access, and recovery outcomes for accountable operating controls."
      },
      {
        "name": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework",
        "note": "Privacy-risk framing for collection, use, sharing, and retention of protected records."
      },
      {
        "name": "NIST SP 800-53 Rev. 5",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
        "note": "Control catalog for access enforcement, audit logging, and incident handling."
      },
      {
        "name": "CISA Cybersecurity Performance Goals",
        "url": "https://www.cisa.gov/cybersecurity-performance-goals",
        "note": "Practical access, logging, response, and recovery considerations for small teams."
      },
      {
        "name": "U.S. GAO Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g",
        "note": "Methods for examining provenance, completeness, and fitness for intended use."
      }
    ],
    "faqs": [
      {
        "question": "Can support tell a customer the hold will be removed after payment?",
        "answer": "No. Support can acknowledge the review and give an approved response window. Only the named finance owner can commit to a release."
      },
      {
        "question": "What if the payment system and billing system disagree?",
        "answer": "Preserve both values, identify the authoritative source for each field, and route the conflict. Do not silently pick the value that supports release."
      },
      {
        "question": "Is a promise-to-pay counted as payment?",
        "answer": "No. Record it as a separate state with the promised date and source, and keep the hold decision with the finance owner."
      },
      {
        "question": "What belongs in the close evidence?",
        "answer": "The owner decision, the destination status, the effective time, the communication record, and any temporary access cleanup."
      }
    ],
    "relatedLinks": [
      {
        "label": "Register Regulatory Correspondence Without Interpreting Rules",
        "href": "/blog/philippines-outsourcing-regulatory-correspondence-register"
      },
      {
        "label": "Explore back-office operations",
        "href": "/services/back-office-operations"
      }
    ],
    "banners": [
      {
        "eyebrow": "Operating boundary",
        "heading": "Turn the workflow into a reviewable role brief",
        "body": "Bring one assemble credit hold evidence without releasing accounts example, its source systems, protected decisions, and review owner.",
        "href": "/contact-us",
        "label": "Discuss the role"
      }
    ]
  },
  "philippines-outsourcing-regulatory-correspondence-register": {
    "updated": "2026-11-02",
    "datePublished": "2026-11-02",
    "marker": "november-2-2026-philippines-outsourcing-regulatory-correspondence-register",
    "takeaway": "Log regulatory correspondence as received, classify it with an approved taxonomy, preserve the controlling document and deadline, and route every interpretive question to the accountable legal owner.",
    "image": "/nov2/company-blog/philippines-outsourcing-regulatory-correspondence-register.webp",
    "sections": [
      {
        "heading": "Set the intake channel and identity checks",
        "body": [
          "Define the approved channel for regulatory correspondence before a letter arrives. It might be a dedicated mailbox, a registered agent address, or a portal. Record who may open items, how envelopes and attachments are preserved, and how a misdirected item is handled. An unstructured inbox is not a register.",
          "Verify the recipient entity, the sender, the reference number, and the delivery method. A notice addressed to a similarly named entity may belong to another company. If identity is unclear, stop and route the item rather than registering it as the company's correspondence. The register should not create a legal obligation by mislabeling a document."
        ]
      },
      {
        "heading": "Log the envelope and the controlling document",
        "body": [
          "Preserve the envelope, cover letter, and every attachment as received. Record the received date, the postmark or portal timestamp, the page count, and the storage location. The controlling document is the one that states the requirement or deadline; a cover note may summarize it but should not replace it.",
          "Create one register entry per matter, not one per email. Link follow-up letters, acknowledgements, and submissions to the same matter while keeping each document version distinct. If a document is illegible or incomplete, say so and request a clean copy through the approved channel rather than transcribing from memory."
        ]
      },
      {
        "heading": "Classify with the approved taxonomy only",
        "body": [
          "Use the taxonomy the legal owner has approved: for example information request, routine filing reminder, inspection notice, enforcement correspondence, or unrelated item. Do not invent a category because a letter looks urgent. If no category fits, use an unclassified state and route it for review.",
          "The coordinator may extract dates, reference numbers, and named contacts. The coordinator may not decide whether the letter creates a legal deadline, whether an extension is available, or whether the company is compliant. Those are legal judgments. A neutral register entry is more valuable than a confident misclassification."
        ]
      },
      {
        "heading": "Route deadlines and acknowledgements safely",
        "body": [
          "If the company has approved a response window, record the deadline exactly as the document states it and add the owner's review date. Do not calculate a new deadline from an assumed rule. When a document gives a date without a time zone, flag the ambiguity.",
          "Route the matter to the named legal owner with the controlling document, the register entry, and any known prior correspondence. If an acknowledgement is required, use approved language and record what was sent. An acknowledgement is not a substantive response, and support should not imply that the company accepts or disputes the content."
        ]
      },
      {
        "heading": "Protect privileged and sensitive content",
        "body": [
          "Regulatory correspondence can contain personal data, confidential commercial terms, or material prepared for legal advice. Restrict the register to the minimum fields needed for routing, and keep the documents in the approved repository with named access. Do not forward the full text to a general operations channel.",
          "Log access to sensitive entries where the repository supports it. Temporary access should expire and be removed after the matter closes. If the company treats certain correspondence as privileged, follow its handling instruction and do not create extra copies in chat, personal drives, or local downloads."
        ]
      },
      {
        "heading": "Close with owner disposition and retention",
        "body": [
          "Close a register entry only when the legal owner records the disposition: no action, response filed, extension requested, matter referred, or another approved outcome. Link the disposition to the submitted document and the destination acknowledgement. A register that closes on receipt rather than on disposition hides open obligations.",
          "Retain the entry and documents according to the company's schedule. Record the retention class, the destruction eligibility date, and any hold that suspends deletion. At the review cadence, sample closed entries to confirm that the disposition is present and that the controlling document can still be retrieved. The register is a custody tool, not a legal opinion."
        ]
      }
    ],
    "script": [
      "Which entity and reference number appear on the document?",
      "Which document controls the deadline, and where is it stored?",
      "Who is the named legal owner for this category?",
      "What disposition is required before the entry can close?"
    ],
    "sources": [
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework",
        "note": "Governance, identity, access, and recovery outcomes for accountable operating controls."
      },
      {
        "name": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework",
        "note": "Privacy-risk framing for collection, use, sharing, and retention of protected records."
      },
      {
        "name": "NIST SP 800-53 Rev. 5",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
        "note": "Control catalog for access enforcement, audit logging, and incident handling."
      },
      {
        "name": "CISA Cybersecurity Performance Goals",
        "url": "https://www.cisa.gov/cybersecurity-performance-goals",
        "note": "Practical access, logging, response, and recovery considerations for small teams."
      },
      {
        "name": "U.S. GAO Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g",
        "note": "Methods for examining provenance, completeness, and fitness for intended use."
      }
    ],
    "faqs": [
      {
        "question": "Can an outsourced coordinator decide whether a letter creates a legal deadline?",
        "answer": "No. The coordinator extracts the stated date and routes the document. Legal interpretation and deadline decisions belong to the named legal owner."
      },
      {
        "question": "What if a notice arrives through a personal email account?",
        "answer": "Preserve it, record how it arrived, and route it through the approved channel. Do not treat an informal forward as the controlling document."
      },
      {
        "question": "How should attachments be stored?",
        "answer": "Keep the complete document set in the approved repository with named access. The register should point to the documents rather than duplicate their contents."
      },
      {
        "question": "When can a register entry be closed?",
        "answer": "Only after the legal owner records a disposition and the submitted response or acknowledgement is linked to the entry."
      }
    ],
    "relatedLinks": [
      {
        "label": "Maintain a Vendor Due Diligence File Without Scoring Risk",
        "href": "/blog/philippines-outsourcing-vendor-due-diligence-file"
      },
      {
        "label": "Explore back-office operations",
        "href": "/services/back-office-operations"
      }
    ],
    "banners": [
      {
        "eyebrow": "Operating boundary",
        "heading": "Turn the workflow into a reviewable role brief",
        "body": "Bring one register regulatory correspondence without interpreting rules example, its source systems, protected decisions, and review owner.",
        "href": "/contact-us",
        "label": "Discuss the role"
      }
    ]
  },
  "philippines-outsourcing-vendor-due-diligence-file": {
    "updated": "2026-11-02",
    "datePublished": "2026-11-02",
    "marker": "november-2-2026-philippines-outsourcing-vendor-due-diligence-file",
    "takeaway": "Track each vendor artifact as present, missing, expired, or conflicting; preserve versions and access; and route the risk decision to the owner instead of producing a score.",
    "image": "/nov2/company-blog/philippines-outsourcing-vendor-due-diligence-file.webp",
    "sections": [
      {
        "heading": "Define required artifacts and versions",
        "body": [
          "List the artifacts the company requires for a vendor file, such as registration evidence, insurance certificates, security attestations, ownership disclosures, and signed terms. Record the acceptable version, the issuing authority, the validity period, and whether an original or certified copy is required. The list should come from the company's policy, not from a generic checklist.",
          "For each artifact, name the field that proves it applies to the vendor entity being onboarded. A certificate for a parent company may not cover the contracting subsidiary. If the policy is silent, record the question and route it rather than assuming the broader document is acceptable."
        ]
      },
      {
        "heading": "Track completeness as states, not opinions",
        "body": [
          "Use states such as received, verified present, missing, expired, superseded, not applicable, and awaiting owner review. Do not use a percentage complete as the only measure, because a file can be 90 percent complete and still lack the one artifact that blocks onboarding. Count the blocking items separately.",
          "Record who supplied each artifact and when it was received. A vendor's assertion that a document was sent is not the same as the company holding it. If an artifact is missing, note the request date, the follow-up owner, and the next action. A completeness view should tell a reviewer what is missing without opening every file."
        ]
      },
      {
        "heading": "Detect expired and inconsistent documents",
        "body": [
          "Compare each validity date with the planned onboarding date and the current review date. A certificate that expires during the contract term needs a renewal action, not just a green check today. Record the expiry, the renewal owner, and the reminder date.",
          "Look for inconsistencies across artifacts: legal name, address, tax identifier, signatory, and scope of coverage. When two documents disagree, preserve both and describe the difference. Do not correct one document to match the other. The inconsistency itself is the finding the owner needs to see."
        ]
      },
      {
        "heading": "Route discrepancies with a neutral summary",
        "body": [
          "Write a short discrepancy note that names the artifacts, the fields that conflict, the source of each value, and the decision requested. Avoid recommending a risk rating. The coordinator can say that the insurance certificate names a different entity; the owner decides whether that is acceptable.",
          "Route the note to the named vendor-risk owner and record the response. If the owner requests additional evidence, add the request to the file and keep the prior state. A file that is routed but never decided should remain open and appear in the aging report."
        ]
      },
      {
        "heading": "Control access to sensitive attestations",
        "body": [
          "Vendor files can contain security reports, financial statements, and personal data about owners. Restrict access by role and by vendor, and keep the documents in the approved repository. Do not paste sensitive content into the tracking sheet; use a reference and the minimum status fields.",
          "Log access where possible and remove temporary access after the review. If an auditor or another team needs a copy, use the company's approved sharing method and record the recipient. A due diligence file that spreads across inboxes and shared drives is difficult to protect and difficult to defend."
        ]
      },
      {
        "heading": "Recertify the file on a fixed cadence",
        "body": [
          "Set a review cadence based on the artifact type and the vendor's risk profile as defined by the company. At each review, confirm the document is still current, the vendor entity is unchanged, and the owner has re-accepted the file. Record the review date and the reviewer.",
          "When a vendor changes ownership, bank details, or scope, reopen the relevant artifacts rather than updating the file silently. Keep the prior version and the reason for the change. The output of this lane is a reconstructable file with an owner decision, not a score that hides which document is missing."
        ]
      }
    ],
    "script": [
      "Which artifacts are blocking this vendor, and who owns each request?",
      "Which legal entity does each certificate actually cover?",
      "What validity date matters for the planned contract term?",
      "Who makes the risk acceptance decision, and where is it recorded?"
    ],
    "sources": [
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework",
        "note": "Governance, identity, access, and recovery outcomes for accountable operating controls."
      },
      {
        "name": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework",
        "note": "Privacy-risk framing for collection, use, sharing, and retention of protected records."
      },
      {
        "name": "NIST SP 800-53 Rev. 5",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
        "note": "Control catalog for access enforcement, audit logging, and incident handling."
      },
      {
        "name": "CISA Cybersecurity Performance Goals",
        "url": "https://www.cisa.gov/cybersecurity-performance-goals",
        "note": "Practical access, logging, response, and recovery considerations for small teams."
      },
      {
        "name": "U.S. GAO Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g",
        "note": "Methods for examining provenance, completeness, and fitness for intended use."
      }
    ],
    "faqs": [
      {
        "question": "Can the coordinator assign a risk score?",
        "answer": "No. The coordinator tracks completeness, expiry, and inconsistency. The company's risk owner assigns or accepts the risk rating."
      },
      {
        "question": "What if a vendor sends an expired certificate?",
        "answer": "Record it as expired, keep the document, and request a current version. Do not mark the file complete because a document was received."
      },
      {
        "question": "How should parent-company documents be handled?",
        "answer": "Check whether the policy accepts them for the contracting entity. If it does not, mark the artifact as conflicting or missing and route the question."
      },
      {
        "question": "What is the close condition?",
        "answer": "The required artifacts are present and current for the contracting entity, and the owner has recorded acceptance or a documented exception."
      }
    ],
    "relatedLinks": [
      {
        "label": "Reconcile SLA Service Credits Without Approving Refunds",
        "href": "/blog/philippines-outsourcing-service-credit-reconciliation"
      },
      {
        "label": "Explore back-office operations",
        "href": "/services/back-office-operations"
      }
    ],
    "banners": [
      {
        "eyebrow": "Operating boundary",
        "heading": "Turn the workflow into a reviewable role brief",
        "body": "Bring one maintain a vendor due diligence file without scoring risk example, its source systems, protected decisions, and review owner.",
        "href": "/contact-us",
        "label": "Discuss the role"
      }
    ]
  },
  "philippines-outsourcing-service-credit-reconciliation": {
    "updated": "2026-11-02",
    "datePublished": "2026-11-02",
    "marker": "november-2-2026-philippines-outsourcing-service-credit-reconciliation",
    "takeaway": "Freeze the contract formula, collect outage evidence, compute the credit in a reproducible worksheet, and let the contract owner approve any credit before it is posted.",
    "image": "/nov2/company-blog/philippines-outsourcing-service-credit-reconciliation.webp",
    "sections": [
      {
        "heading": "Freeze the contract formula and measurement window",
        "body": [
          "Before calculating anything, locate the service-level clause that defines the credit, the measurement window, the excluded events, and the maximum credit. Record the contract version and the effective dates. If the clause is ambiguous, stop and route the question to the contract owner rather than choosing the reading that produces a credit.",
          "The outsourced role can transcribe the formula and apply it to supplied data. It cannot decide whether an outage counts as excused, whether a force-majeure notice is valid, or whether the company should waive a credit. Those decisions belong to the owner named in the contract."
        ]
      },
      {
        "heading": "Collect outage and ticket evidence",
        "body": [
          "Gather the incident records, monitoring timestamps, customer reports, and resolution notes that the company treats as authoritative. Record the start and end time in the source time zone, the affected service, and the severity. Do not merge two incidents because they look related unless the contract or the owner defines them as one event.",
          "Attach the evidence to each incident and note gaps. A monitoring gap is not proof that service was available, and a customer report is not proof of duration. The worksheet should show which evidence supports each minute counted and which periods remain unknown."
        ]
      },
      {
        "heading": "Calculate credits with a reproducible worksheet",
        "body": [
          "Build the worksheet in the approved tool with one row per incident and one column per input. Show the formula, the measurement window, the excluded periods, the rounding rule, and the resulting credit. Keep the source reference for every input so a reviewer can trace the number back to the contract and the incident.",
          "Run a second calculation independently where the amount is material. Compare the two results and document any difference. Do not adjust the worksheet to match an expected invoice; investigate the difference. A formula that cannot be reproduced by another reviewer is not ready to send."
        ]
      },
      {
        "heading": "Reconcile against billing and prior credits",
        "body": [
          "Compare the calculated credit with the billing system, prior credit memos, and any manual adjustments. Record the invoice, the credit reference, and the period. A credit that was already applied should not be counted twice, and a credit that was promised but not posted should remain open.",
          "If the billing system and the worksheet disagree, preserve both values and identify the source of the difference. Common causes include a different measurement window, a missed exclusion, or a manual adjustment. Route the discrepancy to the owner with the evidence rather than correcting the billing record directly."
        ]
      },
      {
        "heading": "Stop on formula ambiguity or missing evidence",
        "body": [
          "Stop when the contract version is unknown, the measurement window is disputed, an exclusion is unclear, the incident evidence is incomplete, or the calculated amount exceeds the authority of the lane. Record the reason, the missing input, the owner, and the safe interim state.",
          "A stop is especially important when the customer has already been told a credit will be issued. The coordinator should not confirm, deny, or quantify the credit to the customer until the owner approves. Keep the customer communication separate from the internal calculation."
        ]
      },
      {
        "heading": "Verify posting and customer confirmation",
        "body": [
          "After the owner approves, verify that the credit reaches the billing system with the correct amount, period, and customer. Record the posting reference and the effective date. If the customer must be notified, use approved language and record the message and recipient.",
          "Close by reconciling the contract, the incident evidence, the worksheet, the owner approval, the posted credit, and the customer record. Report unposted or partially posted credits separately. The measure of the lane is not the number of calculations completed but the number of credits that reached the right account with the right evidence."
        ]
      }
    ],
    "script": [
      "Which contract version defines this credit, and when did it take effect?",
      "Which incidents count under the clause, and which exclusions apply?",
      "Who approves the credit before it is posted?",
      "How will we verify the posted amount against the worksheet?"
    ],
    "sources": [
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework",
        "note": "Governance, identity, access, and recovery outcomes for accountable operating controls."
      },
      {
        "name": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework",
        "note": "Privacy-risk framing for collection, use, sharing, and retention of protected records."
      },
      {
        "name": "NIST SP 800-53 Rev. 5",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
        "note": "Control catalog for access enforcement, audit logging, and incident handling."
      },
      {
        "name": "CISA Cybersecurity Performance Goals",
        "url": "https://www.cisa.gov/cybersecurity-performance-goals",
        "note": "Practical access, logging, response, and recovery considerations for small teams."
      },
      {
        "name": "U.S. GAO Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g",
        "note": "Methods for examining provenance, completeness, and fitness for intended use."
      }
    ],
    "faqs": [
      {
        "question": "Can support decide whether an outage is excused?",
        "answer": "No. Support records the incident and the contract clause. The contract owner decides whether an exclusion applies."
      },
      {
        "question": "What if the customer was already promised a credit?",
        "answer": "Record the promise and its source, but do not confirm the amount. Route the case to the owner and keep customer communication within approved language."
      },
      {
        "question": "How should partial months be handled?",
        "answer": "Use the measurement window and proration rule stated in the contract. If the clause is unclear, stop and route the question."
      },
      {
        "question": "What is the close evidence?",
        "answer": "The contract reference, incident evidence, reproducible worksheet, owner approval, posted credit, and customer notification record."
      }
    ],
    "relatedLinks": [
      {
        "label": "Review Split Purchase Orders Without Approving Spend",
        "href": "/blog/philippines-outsourcing-purchase-order-split-approval"
      },
      {
        "label": "Explore back-office operations",
        "href": "/services/back-office-operations"
      }
    ],
    "banners": [
      {
        "eyebrow": "Operating boundary",
        "heading": "Turn the workflow into a reviewable role brief",
        "body": "Bring one reconcile sla service credits without approving refunds example, its source systems, protected decisions, and review owner.",
        "href": "/contact-us",
        "label": "Discuss the role"
      }
    ]
  }
} as const;
