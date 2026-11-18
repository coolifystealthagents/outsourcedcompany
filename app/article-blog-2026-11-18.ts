export const blogPosts2026_11_18 = [
  {
    "slug": "outsourcedcompany-write-a-supplier-statement-reconciliation-script-for-an-outsourced-bookkeeping-desk",
    "title": "Write a supplier statement reconciliation script for an outsourced bookkeeping desk",
    "excerpt": "A supplier statement is only useful when the desk can explain every difference between it and the ledger. A fixed reconciliation script keeps the matching, the evidence request, and the credit decision in the same place before month-end close.",
    "minutes": 9,
    "published": "2026-11-18"
  },
  {
    "slug": "outsourcedcompany-build-a-beneficiary-change-intake-checklist-for-an-outsourced-retirement-plan-desk",
    "title": "Build a beneficiary change intake checklist for an outsourced retirement plan desk",
    "excerpt": "A beneficiary change is a legal instruction, not a profile update. The outsourced desk needs a checklist that verifies the participant, captures the form as received, and leaves approval with the plan administrator.",
    "minutes": 9,
    "published": "2026-11-18"
  },
  {
    "slug": "outsourcedcompany-set-a-prior-authorization-follow-up-cadence-for-an-outsourced-medical-billing-desk",
    "title": "Set a prior authorization follow-up cadence for an outsourced medical billing desk",
    "excerpt": "Prior authorization requests fail quietly when nobody owns the follow-up. Build a cadence from the payer's stated turnaround, write every contact into one record, and hand clinical urgency to a licensed reviewer.",
    "minutes": 10,
    "published": "2026-11-18"
  },
  {
    "slug": "outsourcedcompany-write-a-phishing-report-triage-script-for-an-outsourced-it-service-desk",
    "title": "Write a phishing report triage script for an outsourced IT service desk",
    "excerpt": "A forwarded phishing report can become a second incident if the desk clicks first. Give the service desk a triage script that contains the account, preserves the message, and tells the user what happens next.",
    "minutes": 9,
    "published": "2026-11-18"
  },
  {
    "slug": "outsourcedcompany-build-a-customs-document-checklist-for-an-outsourced-freight-desk",
    "title": "Build a customs document checklist for an outsourced freight desk",
    "excerpt": "Customs release depends on documents that agree with each other. A freight desk needs a checklist that compares the invoice, packing list, and entry before a mismatch becomes a hold at the border.",
    "minutes": 9,
    "published": "2026-11-18"
  }
];

export const blogDetails2026_11_18 = {
  "outsourcedcompany-write-a-supplier-statement-reconciliation-script-for-an-outsourced-bookkeeping-desk": {
    "updated": "2026-11-18",
    "datePublished": "2026-11-18",
    "marker": "november-18-2026-outsourcedcompany-write-a-supplier-statement-reconciliation-script-for-an-outsourced-bookkeeping-desk",
    "takeaway": "A supplier statement reconciliation works when the desk matches the opening balance, the period activity, and the closing balance in that order. Every unmatched line needs an owner, an evidence request, and a deadline before the close calendar moves on.",
    "image": "/nov18/company-blog/outsourcedcompany-write-a-supplier-statement-reconciliation-script-for-an-outsourced-bookkeeping-desk.webp",
    "sections": [
      {
        "heading": "Gather the statement and the ledger export",
        "body": [
          "Start with a complete statement for the period, not a screenshot of the balance. Save the supplier name, the statement date, the currency, and the page count. Then export the matching ledger detail for the same supplier and period. Both files should carry the time they were pulled, because a payment posted later can change the comparison.",
          "Check that the statement covers the full period in the close calendar. A statement that ends three days before month-end will leave recent invoices unexplained. If the supplier issues statements on a different cycle, ask for a cut-off statement that matches the ledger period. Record that request in the reconciliation file so the next desk can see why the dates differ."
        ]
      },
      {
        "heading": "Match the opening balance before the activity",
        "body": [
          "The opening balance tells the desk whether an old difference is still open. Agree the opening balance to the prior reconciliation, not to the current ledger. If the prior file is missing, rebuild the opening position from the last agreed statement and note the gap. Starting with activity while the opening balance is unproven usually doubles the work later.",
          "Once the opening balance agrees, compare the period invoices, credits, and payments as three separate groups. This makes a missing credit easier to spot than a single net difference. A supplier may post a credit note in the same month the desk posted a debit, which nets to zero and hides the real issue. Separating the groups prevents that illusion."
        ]
      },
      {
        "heading": "Work unmatched lines by evidence",
        "body": [
          "For each unmatched line, write the amount, the document number, the date, and the reason it does not match. Common reasons include a payment posted to the wrong supplier account, an invoice recorded at a different value, and a credit note that never arrived. The reason should point to a document the desk can request, not to a guess about the supplier. If the desk cannot name the document, the line is not ready to be worked.",
          "Set a short evidence window for each item. Ask the supplier for the missing credit note or the remittance advice by a named date. If the supplier cannot provide it, ask the internal team that approved the purchase. Do not clear a difference by posting a round-number adjustment unless the client has approved that treatment in writing. The reconciliation should explain the balance, not disguise it."
        ]
      },
      {
        "heading": "Decide when to request a credit",
        "body": [
          "A credit request is appropriate when the supplier billed more than the agreed price, billed a duplicate, or failed to apply a return. Attach the purchase order, the receiving record, and the supplier's own document to the request. The supplier should be able to verify the claim without calling the desk for context. Send the request from the client's approved address and keep the sent copy in the reconciliation file.",
          "Set a response deadline for the credit and check it on a named date. If the supplier disputes the claim, ask for the document they rely on and compare it with the purchase record. The desk should not keep resending the same request without new evidence. Escalate to the client owner when the deadline passes and the amount is above the agreed threshold.",
          "If the difference is small and old, the client may prefer to write it off rather than chase it. That is a client decision, and the desk should present the cost of chasing it. Record the decision, the approver, and the date. A write-off without an approver looks like an unexplained adjustment at audit, even when the amount is trivial."
        ]
      },
      {
        "heading": "Record the reconciliation outcome",
        "body": [
          "End the file with three numbers: the statement closing balance, the ledger closing balance, and the total of the agreed differences. The agreed differences should reconcile the two balances exactly. If they do not, the file is not finished, even when every line has a note. A reviewer should be able to follow the arithmetic without opening the supplier portal.",
          "Include a short list of open items with owners and next dates. Keep the list in the same file as the completed work so the next month starts from a known position. Send the client a summary that separates resolved differences from items still waiting on the supplier. The summary should not repeat the full detail unless the client asks for it.",
          "Name the file with the supplier, the statement period, and the reconciliation date. Store it in the shared close folder rather than a personal drive. If the client uses an audit trail, upload the final version and mark the earlier drafts as working papers. The next reviewer should not have to guess which copy was agreed."
        ]
      },
      {
        "heading": "Hand unresolved items into close",
        "body": [
          "Some differences will not close before the month-end deadline. Move those items into the close checklist with a clear description and the amount at risk. The accountant can then decide whether the balance is materially correct or whether an accrual is needed. Do not leave them only in the reconciliation file, where the close team may never look.",
          "Review the prior month's open items at the start of the next reconciliation. An item that appears for three months is not a timing difference anymore. It is a process problem, and it needs a named owner outside the desk. Raise it in the monthly review with the supplier contact and the client owner in the same conversation."
        ]
      }
    ],
    "script": [
      "Does the statement cover the same period as the ledger export?",
      "Which prior reconciliation supports the opening balance?",
      "What document would clear each unmatched line?",
      "Who approved any write-off or round-number adjustment?"
    ],
    "sources": [
      {
        "name": "IRS: Recordkeeping for small businesses",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping",
        "note": "General recordkeeping guidance for supporting business transactions and balances."
      },
      {
        "name": "IRS: Publication 583, Starting a Business and Keeping Records",
        "url": "https://www.irs.gov/publications/p583",
        "note": "Recordkeeping principles that apply to purchases, payments, and supporting documents."
      },
      {
        "name": "SBA: Manage your business finances",
        "url": "https://www.sba.gov/business-guide/manage-your-business/manage-your-finances",
        "note": "Operational guidance on tracking cash flow, payables, and financial records."
      }
    ],
    "faqs": [
      {
        "question": "Who should request the missing supplier document?",
        "answer": "The desk can send the request when the client has approved that contact path. Name the supplier contact and the internal owner in the same message so the reply does not stall."
      },
      {
        "question": "How often should statements be reconciled?",
        "answer": "Match the close calendar, usually monthly for active suppliers. High-volume or high-value suppliers may need a weekly check on payments and credits."
      },
      {
        "question": "What if the supplier statement is in another currency?",
        "answer": "Reconcile in the statement currency and show the exchange rate used by the ledger. Do not mix currencies in one total, and record the rate date."
      },
      {
        "question": "Can the desk approve a small write-off?",
        "answer": "Only if the client has set a written threshold and named the approver. Otherwise the desk should prepare the item for client review."
      }
    ],
    "relatedLinks": [
      {
        "label": "See bookkeeping support",
        "href": "/services/bookkeeping-support",
        "note": "Ledger maintenance, supplier records, and close preparation handled by a trained remote desk."
      },
      {
        "label": "Read the month-end close handoff checklist",
        "href": "/blog/outsourcedcompany-prepare-a-month-end-close-handoff-checklist-for-outsourced-bookkeeping",
        "note": "A related guide on moving reconciled balances into the close calendar."
      },
      {
        "label": "See back-office operations support",
        "href": "/services/back-office-operations",
        "note": "Recurring administrative work with written controls and review points."
      }
    ]
  },
  "outsourcedcompany-build-a-beneficiary-change-intake-checklist-for-an-outsourced-retirement-plan-desk": {
    "updated": "2026-11-18",
    "datePublished": "2026-11-18",
    "marker": "november-18-2026-outsourcedcompany-build-a-beneficiary-change-intake-checklist-for-an-outsourced-retirement-plan-desk",
    "takeaway": "A beneficiary change checklist should prove who asked, what they submitted, and when the plan received it. The outsourced desk can prepare and log the packet, but the plan administrator or a qualified reviewer must approve the change.",
    "image": "/nov18/company-blog/outsourcedcompany-build-a-beneficiary-change-intake-checklist-for-an-outsourced-retirement-plan-desk.webp",
    "sections": [
      {
        "heading": "Verify the request comes from the participant",
        "body": [
          "Begin with the identity of the person making the request. Compare the name, date of birth, and plan identifier with the record on file. Ask for the verification method the plan already uses, such as a callback to a number on record or a signed form with a matching signature. Do not accept a change because the email address looks familiar.",
          "If an authorized representative is calling, collect the authority document before discussing the account. A power of attorney or conservatorship document may limit what the representative can change. The desk should record the document type and the date it was reviewed. When the authority is unclear, stop and route the request to the plan administrator rather than guessing."
        ]
      },
      {
        "heading": "Collect the required identity and plan data",
        "body": [
          "Use a fixed intake list so every packet arrives complete. The list should include the participant's legal name, the plan number, the effective date requested, and the full legal name of each beneficiary. For a trust, ask for the trust name and the date of the trust document. For a minor, record the guardian and the custodial arrangement the plan allows.",,
          "Capture the allocation percentages and confirm that they total one hundred percent. A form that lists three beneficiaries at fifty percent each is incomplete even when the names are clear. Ask the participant to correct the arithmetic on the original form rather than editing it internally. The desk should never rewrite a participant's instruction in its own words."
        ]
      },
      {
        "heading": "Separate intake from approval",
        "body": [
          "The desk can check completeness, log the packet, and prepare a summary for review. It should not decide whether the change is valid. Approval belongs to the plan administrator or a role named in the plan document. Keeping that line clear protects the participant and gives the client one accountable decision point.",
          "Build the handoff so the approver sees the original form, the identity evidence, and any spousal consent in one place. Add a short cover note that names the missing items, if any, and the date the participant was contacted. The approver should not have to search a mailbox to reconstruct the request. A clean handoff also makes a later audit much easier to answer.",
          "Keep a separate field for the approval decision and the date it was made. Do not mark the request complete when the packet is merely submitted. The distinction matters when a participant calls to ask whether the change has taken effect. The desk should be able to say submitted, under review, approved, or returned without checking three systems."
        ]
      },
      {
        "heading": "Handle spousal consent without interpreting law",
        "body": [
          "Some plans require a spouse's consent when the participant chooses someone else as the primary beneficiary. The desk can identify that the plan document requires consent and request the form. It should not advise the participant on whether the requirement applies to their situation. That judgment belongs to the plan administrator or legal counsel.",
          "Record the consent form as received, including the signature date and the notary details where the form requires them. If the form is incomplete, return it with a specific note rather than a general rejection. Keep the note factual and avoid language that could be read as legal advice. The goal is a complete packet, not a conversation about the participant's family decisions."
        ]
      },
      {
        "heading": "Log the packet and the delivery",
        "body": [
          "Give every request a unique intake number and record the channel it arrived through. Note the date and time of receipt, because a beneficiary change can depend on the order of events. Save the original file in the plan's record system with the intake number in the file name. Do not store a copy only in a personal drive or a chat attachment.",
          "When the packet goes to the approver, record the handoff time and the name of the recipient. When the decision comes back, record the outcome and the date the participant was notified. If the participant calls to ask about status, the desk should be able to answer from the log without opening the document. That single view is the difference between a controlled process and a search through email.",
          "Keep the intake number in every later message about the request. Use the same number in the approval note, the participant letter, and the record system. A consistent identifier prevents two coordinators from working the same request under different names. It also gives the auditor one key to follow from receipt to decision."
        ]
      },
      {
        "heading": "Review rejected and incomplete requests",
        "body": [
          "Review incomplete requests each week and group them by cause. A run of missing signatures may point to an unclear form, while a run of identity failures may point to a weak verification step. Fix the intake instruction before the volume grows. The desk should not absorb the same correction call after call without telling the client.",
          "For rejected requests, keep the reason and the participant communication in the file. Do not delete the intake record after a rejection, because the participant may resubmit or dispute the outcome later. At the quarterly review, sample a few closed packets and check that the approval, the consent, and the notification are all present. A sample catches the gaps that a status report cannot show.",
          "Write the top two causes into the next intake briefing and watch whether they fall. If they do not, the problem may sit in the form or the participant instructions rather than in the desk. Ask the plan administrator to review one rejected packet and confirm the wording. A small wording change often prevents a month of repeat calls."
        ]
      }
    ],
    "script": [
      "What verification method does the plan require for a beneficiary change?",
      "Which fields make a packet complete before review?",
      "Who approves the change, and who only prepares it?",
      "Where is the original form stored after intake?"
    ],
    "sources": [
      {
        "name": "DOL: Employee Benefits Security Administration",
        "url": "https://www.dol.gov/agencies/ebsa",
        "note": "Federal agency resources on employee benefit plans and participant protections."
      },
      {
        "name": "IRS: Retirement plan and IRA required minimum distributions FAQs",
        "url": "https://www.irs.gov/retirement-plans/retirement-plan-and-ira-required-minimum-distributions-faqs",
        "note": "Plan distribution context that affects beneficiary records and timing."
      },
      {
        "name": "IRS: About Form 1099-R",
        "url": "https://www.irs.gov/forms-pubs/about-form-1099-r",
        "note": "Reporting context for distributions made to participants and beneficiaries."
      }
    ],
    "faqs": [
      {
        "question": "Can the desk confirm that a beneficiary change is legally valid?",
        "answer": "No. The desk can confirm completeness and route the packet. Validity is decided by the plan administrator or the plan's legal reviewer."
      },
      {
        "question": "What should happen when the participant submits a photocopy?",
        "answer": "Follow the plan's document rules. If an original or certified copy is required, request it and record the request date before closing intake."
      },
      {
        "question": "How long should intake records be kept?",
        "answer": "Use the plan's retention schedule and the client's recordkeeping policy. Keep the original request, the approval, and the notification together."
      },
      {
        "question": "Who speaks to the participant about a rejection?",
        "answer": "Use the channel and role named in the plan procedure. The desk can send a factual status note when the client has approved that contact."
      }
    ],
    "relatedLinks": [
      {
        "label": "See HR administration support",
        "href": "/services/hr-administration",
        "note": "Document intake, verification, and employee record work handled by a trained remote desk."
      },
      {
        "label": "Read the employee document routing guide",
        "href": "/blog/outsourcedcompany-route-employee-leave-documents-without-making-eligibility-decisions",
        "note": "A related guide on collecting documents without making policy decisions."
      },
      {
        "label": "See compliance support",
        "href": "/services/compliance-support",
        "note": "Controlled intake and evidence trails for regulated administrative processes."
      }
    ]
  },
  "outsourcedcompany-set-a-prior-authorization-follow-up-cadence-for-an-outsourced-medical-billing-desk": {
    "updated": "2026-11-18",
    "datePublished": "2026-11-18",
    "marker": "november-18-2026-outsourcedcompany-set-a-prior-authorization-follow-up-cadence-for-an-outsourced-medical-billing-desk",
    "takeaway": "A prior authorization follow-up cadence should start from the payer's stated turnaround and the service date, not from a generic reminder. Every contact belongs in one record, and anything clinically urgent goes to a licensed reviewer instead of waiting in the desk queue.",
    "image": "/nov18/company-blog/outsourcedcompany-set-a-prior-authorization-follow-up-cadence-for-an-outsourced-medical-billing-desk.webp",
    "sections": [
      {
        "heading": "Know what the payer actually received",
        "body": [
          "Before the first follow-up, confirm that the payer received the request and can identify it. Record the payer reference number, the submission channel, and the date the payer acknowledged receipt. A fax confirmation is not the same as a payer acceptance. If the only evidence is a sent status, the desk should verify the request in the payer portal or by phone.",
          "Check that the request includes the correct member identifier, the ordering provider, the servicing provider, and the procedure codes. A missing field can leave a request in a pending state that looks like a clinical review. The desk should correct administrative errors through the payer's stated process, not resubmit a duplicate that creates two open cases. Record the correction and the confirmation number so the next follow-up starts from the right case."
        ]
      },
      {
        "heading": "Build the cadence from payer rules",
        "body": [
          "Use the payer's published turnaround time as the starting point. Many requests have a standard decision window and a separate expedited window for urgent cases. Put those windows in the follow-up calendar with the service date beside them. The desk should know which deadline comes first, because a late authorization can make the service unbillable.",
          "Set the first check before the decision window closes, not after it. A check at the midpoint catches missing documents while there is still time to supply them. The second check should land near the deadline, with an escalation path if the payer has not decided. Write the cadence in the client's procedure so a new coordinator does not invent a different schedule.",
          "Use a shared task list rather than a personal calendar so the whole desk can see the next check. Assign each case to a named coordinator and a backup. If the coordinator is out, the backup should know which payer contact to call. The cadence only works when someone else can pick it up without a briefing."
        ]
      },
      {
        "heading": "Write the follow-up note",
        "body": [
          "Every contact should produce a note with the date, the payer representative or portal reference, the status, and the next action. Use the payer's own status words so the note can be matched to a portal screen later. Avoid notes such as left a message, because they do not tell the next reader what changed or who owes the next step. A note that ends with a question should name the person who must answer it.",
          "If the payer asks for more information, record the exact request and the person who will supply it. Send the request to the clinical team when it involves medical necessity, and to the client when it involves coverage or benefits. Do not paraphrase a clinical question into a billing note. The desk can move the message, but it should not answer a question that belongs to a clinician."
        ]
      },
      {
        "heading": "Escalate on clinical urgency",
        "body": [
          "A request marked urgent by the ordering provider should follow the payer's expedited path, not the routine queue. Confirm the clinical reason is documented and that the payer has accepted the expedited flag. If the payer refuses the flag, tell the provider's office the same day so a clinician can decide the next step. The desk should not sit on a refused urgent request until the next scheduled check.",
          "Keep the escalation list short and visible. It should include the patient reference, the service date, the payer, and the reason the case is urgent. Share it with the client contact at a fixed time each day. A list that lives only in one coordinator's memory disappears when that person takes leave, which is exactly when an urgent case is most exposed."
        ]
      },
      {
        "heading": "Track denials and expirations",
        "body": [
          "An authorization can be denied, partially approved, or approved with a limited number of visits. Record the approved units and the expiration date, not just the approval status. The billing team needs those details to avoid submitting a claim for a service the payer did not authorize. A vague approved note is a claim denial waiting to happen.",
          "When a denial arrives, capture the reason code and the appeal path before the file moves on. Some denials are administrative and can be corrected, while others need a clinical review. Route the case to the right owner with the deadline attached. Track the outcome so the desk can see whether the same reason keeps appearing across payers or providers.",
          "Keep a monthly count of authorizations by status and by payer. A rising pending count may mean the desk is submitting incomplete requests, while a rising denial count may point to a documentation gap. Review the counts with the client and choose one cause to fix. The number should lead to a process change, not just a longer report."
        ]
      },
      {
        "heading": "Keep patient information inside approved channels",
        "body": [
          "Use only the payer portals, secure fax lines, and client systems approved for protected health information. Do not paste member details into a personal email, a chat tool, or a spreadsheet outside the client's environment. When a payer asks for information by an unapproved channel, ask for a secure alternative and record the request. The desk should stop the exchange rather than match a bad channel because a representative asked for it.",
          "Limit access to the smallest set of records the desk needs to do the follow-up. Review access when a coordinator leaves the team, and remove portal credentials the same day. The client should be able to produce a list of who can see authorizations and why. That list is part of the control, not an administrative afterthought."
        ]
      }
    ],
    "script": [
      "What is the payer's standard and expedited decision window?",
      "Where is the payer acknowledgement stored?",
      "Which statuses require a clinical reviewer rather than the desk?",
      "What are the approved units and expiration date?"
    ],
    "sources": [
      {
        "name": "CMS: Electronic prior authorization overview",
        "url": "https://www.cms.gov/priorities/electronic-prior-authorization/overview",
        "note": "Federal overview of prior authorization exchange and transaction standards."
      },
      {
        "name": "HHS: HIPAA for professionals",
        "url": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html",
        "note": "Privacy and security requirements for handling protected health information."
      },
      {
        "name": "CMS: Medicare coverage",
        "url": "https://www.cms.gov/medicare/coverage",
        "note": "Coverage administration context for Medicare claims and authorization work."
      }
    ],
    "faqs": [
      {
        "question": "Can the billing desk decide whether a request is medically necessary?",
        "answer": "No. That decision belongs to a clinician or the payer's clinical reviewer. The desk can gather documentation and route the question."
      },
      {
        "question": "What should the desk do when the payer portal is down?",
        "answer": "Use the payer's approved phone path and record the outage. Note the representative, the time, and any reference number provided."
      },
      {
        "question": "How should a partial approval be handled?",
        "answer": "Record the approved units and dates, then tell the client and the ordering provider. Do not assume the remaining units will be approved later."
      },
      {
        "question": "Who owns an appeal after a denial?",
        "answer": "The client's billing or clinical lead, according to the plan. The desk can prepare the file and track the deadline but should not sign the appeal."
      }
    ],
    "relatedLinks": [
      {
        "label": "See medical billing support",
        "href": "/services/medical-billing-support",
        "note": "Authorization follow-up, claim preparation, and denial tracking handled by a trained remote desk."
      },
      {
        "label": "See healthcare administration support",
        "href": "/services/healthcare-administration",
        "note": "Patient and payer administrative work with documented privacy controls."
      },
      {
        "label": "Read the customer identity check guide",
        "href": "/blog/outsourcedcompany-write-a-customer-identity-check-script-for-outsourced-support",
        "note": "A related guide on verifying identity before discussing account details."
      }
    ]
  },
  "outsourcedcompany-write-a-phishing-report-triage-script-for-an-outsourced-it-service-desk": {
    "updated": "2026-11-18",
    "datePublished": "2026-11-18",
    "marker": "november-18-2026-outsourcedcompany-write-a-phishing-report-triage-script-for-an-outsourced-it-service-desk",
    "takeaway": "A phishing triage script should stop the desk from opening the message, capture the original headers, and contain any exposed account before deeper analysis. The user needs a clear next step, and the security lead needs a record that survives the shift.",
    "image": "/nov18/company-blog/outsourcedcompany-write-a-phishing-report-triage-script-for-an-outsourced-it-service-desk.webp",
    "sections": [
      {
        "heading": "Take the report without clicking anything",
        "body": [
          "Ask the user to forward the message as an attachment rather than as an inline copy. The attachment preserves the sender, the headers, the links, and any embedded files. Tell the user not to click, reply, or delete the message yet. If the message is already deleted, ask the user to recover it from the deleted items folder and forward it the same way.",
          "The desk should open the report in a controlled environment, not on a normal workstation. Use the client's approved analysis tool or a sandbox, and keep the original file unchanged. Save a copy in the case record before any link is detonated. A triage that alters the evidence makes the later investigation harder to trust."
        ]
      },
      {
        "heading": "Separate credential exposure from attachment risk",
        "body": [
          "Ask two questions first: did anyone enter credentials, and did anyone open an attachment. A credential entry is an account incident even when the page looked harmless. An opened attachment may require endpoint scanning and a malware review. The answers decide the urgency, so the desk should not bury them under a long narrative.",
          "If credentials were entered, treat the account as exposed and start containment. If an attachment was opened, isolate the device through the client's endpoint tool when that authority exists. Record the time of the user's action, because the response window matters. The desk should not wait for a full analysis before taking the first containment step."
        ]
      },
      {
        "heading": "Contain the account before the analysis",
        "body": [
          "Disable or restrict the account, revoke active sessions, and reset the password through the approved identity process. Check for new forwarding rules, mailbox delegates, and application consents that the attacker may have added. These changes can survive a password reset, so they need a separate review. Record every action with the time and the administrator who performed it.",
          "If the client uses multi-factor authentication, confirm the method and whether the attacker added a new device. Remove unknown devices and re-register the user through the approved process. Tell the user not to approve a push notification they did not initiate. A prompt that arrives after a password reset is a warning, not a routine login.",
          "If the user reused the password elsewhere, tell them to change it on the other services and report any unusual activity. Do not ask the user to send passwords or one-time codes to the desk. The service desk should never collect a secret in a ticket, a chat, or an email. Use the identity tool's reset flow so the secret stays inside the approved system."
        ]
      },
      {
        "heading": "Preserve the message for investigation",
        "body": [
          "Save the original message file, the sender address, the reply-to address, the subject, and the full header block. Extract the links without visiting them and record the domain. If the case may become a legal or HR matter, follow the client's preservation instruction before deleting anything. A clean evidence folder is more useful than a detailed description written from memory.",
          "Add the sender and the domains to the client's blocklist only after the security lead confirms the indicators. A hasty block can disrupt a legitimate sender or tip off the attacker. Document the change and the reason so the next shift knows why the rule exists. The case record should show the path from report to containment to closure.",
          "Keep the evidence folder limited to the people who need it. A phishing message can contain personal data, credentials, or a malicious file, so it should not circulate in a general channel. Share a summary with the user and the full file only with the investigator. At closure, follow the client's retention rule instead of deleting the case as soon as the ticket is resolved."
        ]
      },
      {
        "heading": "Tell the user what to do next",
        "body": [
          "Send the user a short message that names the containment step, the expected downtime, and the person who will follow up. If the user must change a password, give the approved link and a time by which to do it. Avoid blaming language, because a frightened user may hide the next mistake. The goal is a fast report, not a confession.",
          "Close the loop when the case is resolved, even if the answer is that the message was benign. A user who never hears back stops reporting. Tell them what to watch for next time in one sentence. Keep the tone matter-of-fact so the reporting habit survives a busy week.",
          "If the message came from a colleague's account, tell that colleague separately and ask them to stop using the account until it is cleared. Do not forward the suspicious message to a group as a warning. That can spread the link and create more exposure. Use the client's awareness channel if a warning is needed."
        ]
      },
      {
        "heading": "Review the week's reports for patterns",
        "body": [
          "At the end of the week, group the reports by sender domain, subject theme, and user department. A cluster aimed at finance may call for a targeted reminder, while a cluster from one external domain may call for a block. Look also at reports that arrived late, because a slow report can point to a confusing reporting route. Bring the three largest groups to the security lead with a suggested action for each.",
          "Share the pattern summary with the security lead and the client contact, not the raw message files. Keep the summary short enough to read in a meeting. If the same user reports repeatedly after clicking, address the behavior through training rather than punishment. The reporting channel only works when people believe it will be used fairly."
        ]
      }
    ],
    "script": [
      "Did anyone enter credentials or open an attachment?",
      "Is the original message preserved as an attachment?",
      "Which account and session controls were applied, and when?",
      "Who owns the follow-up with the user?"
    ],
    "sources": [
      {
        "name": "CISA: Recognize and report phishing",
        "url": "https://www.cisa.gov/secure-our-world/recognize-and-report-phishing",
        "note": "Federal guidance on identifying phishing messages and reporting them."
      },
      {
        "name": "CISA: Teach employees to avoid phishing",
        "url": "https://www.cisa.gov/secure-our-world/teach-employees-avoid-phishing",
        "note": "Awareness guidance for organizations building a phishing reporting culture."
      },
      {
        "name": "NIST: Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework",
        "note": "Framework for identifying, protecting, detecting, responding, and recovering from incidents."
      }
    ],
    "faqs": [
      {
        "question": "Should the desk click a link to see where it goes?",
        "answer": "Only in an approved sandbox or analysis tool. Never open a link on a normal workstation or from the user's mailbox."
      },
      {
        "question": "What if the user already deleted the message?",
        "answer": "Recover it from deleted items and forward it as an attachment. If it cannot be recovered, record that and proceed with containment."
      },
      {
        "question": "Does a password reset close the case?",
        "answer": "Not by itself. Check sessions, forwarding rules, delegates, and application consents before closing the account review."
      },
      {
        "question": "Who decides whether to notify regulators or customers?",
        "answer": "The client's security and legal leads. The desk should preserve evidence and escalate without making that decision."
      }
    ],
    "relatedLinks": [
      {
        "label": "See IT service desk support",
        "href": "/services/it-service-desk",
        "note": "Ticket triage, account support, and escalation handled by a trained remote desk."
      },
      {
        "label": "See cybersecurity administration support",
        "href": "/services/cybersecurity-administration",
        "note": "Routine security operations with documented evidence and escalation paths."
      },
      {
        "label": "Read the access removal checklist",
        "href": "/blog/outsourcedcompany-build-an-access-removal-checklist-for-outsourced-staff-turnover",
        "note": "A related guide on revoking access when a role changes or ends."
      }
    ]
  },
  "outsourcedcompany-build-a-customs-document-checklist-for-an-outsourced-freight-desk": {
    "updated": "2026-11-18",
    "datePublished": "2026-11-18",
    "marker": "november-18-2026-outsourcedcompany-build-a-customs-document-checklist-for-an-outsourced-freight-desk",
    "takeaway": "A customs document checklist should compare the commercial invoice, packing list, and entry for the same shipment before anything is filed. When the values, quantities, or parties disagree, hold the file and ask for a corrected document instead of guessing.",
    "image": "/nov18/company-blog/outsourcedcompany-build-a-customs-document-checklist-for-an-outsourced-freight-desk.webp",
    "sections": [
      {
        "heading": "Start with the commercial invoice",
        "body": [
          "The commercial invoice is the primary record of the sale, so check it before the other documents. Confirm the seller, the buyer, the country of origin, the currency, the terms of sale, and the total value. Each line should describe the goods clearly enough for a classification decision. A vague description such as parts or samples invites a question at the border.",
          "Check that the invoice value matches the order and the payment record. A zero value or a related-party price needs support the client can explain. Do not alter the invoice to make it match another document. If the invoice is wrong, ask the seller for a corrected version and keep the original in the file. The desk should preserve the trail, not tidy it."
        ]
      },
      {
        "heading": "Check the packing list against the invoice",
        "body": [
          "Compare the number of packages, the quantity of each item, and the gross and net weights. A packing list that shows ten cartons while the invoice bills twelve units is a mismatch that needs an explanation. Check the marks and numbers on the packages against the transport document as well. A missing mark can delay identification at the port.",
          "Look for items on the packing list that do not appear on the invoice, and the reverse. Samples, promotional material, and replacement parts are common sources of a mismatch. If the difference is legitimate, ask for a note that explains it and attach the note to the file. The broker should not have to infer why one document includes an item the other omits."
        ]
      },
      {
        "heading": "Confirm the entry and bond details",
        "body": [
          "Check the importer of record, the consignee, and the bond information against the client's records. An entry filed under the wrong importer can create a compliance problem that outlasts the shipment. Confirm the port of entry and the expected arrival date as well, because a late entry can affect storage and fees. Record the source of each detail in the checklist.",
          "If the client uses a customs broker, confirm that the broker has the current power of attorney and the right contact. Send the broker one complete package rather than a series of partial emails. Name the person who can answer a question about the goods and the person who can approve a change. A broker who cannot reach anyone will make a conservative guess, and that guess can cost time."
        ]
      },
      {
        "heading": "Watch classification and origin fields",
        "body": [
          "The desk can check that a classification code is present and consistent with the product description, but it should not assign a code without qualification. Classification is a technical decision with legal consequences. If the code looks wrong or the description is ambiguous, route the question to the client's trade compliance lead or the broker. Record the question and the answer.",
          "Country of origin needs support, especially when goods contain materials from more than one country. Ask for the supplier declaration or the production record the client relies on. Do not copy the origin from a previous shipment without checking that the product and the supplier are the same. A repeated field is not evidence, and an incorrect origin claim can lead to penalties."
        ]
      },
      {
        "heading": "Hold the file when values disagree",
        "body": [
          "Define the mismatches that require a hold: a value difference above the client's threshold, a missing invoice line, an inconsistent buyer or seller, or an unsupported origin claim. Put the hold reason in the file and notify the client contact the same day. Do not file the entry and promise to correct it later unless the client and the broker agree in writing. A verbal promise is not enough when the entry has already been accepted.",
          "A hold is not a failure. It is the control working before the shipment reaches a border where correction is slower. Give the client a short list of what is needed and who must provide it. Set a follow-up date so the file does not sit in a pending folder. The desk should be able to say which shipments are blocked and why at any point in the day."
        ]
      },
      {
        "heading": "Close the shipment with proof of entry",
        "body": [
          "After the entry is filed, save the entry number, the accepted date, and the broker's confirmation in the shipment file. Match the entered value and quantity to the documents that were filed. If the entry was corrected, keep both versions and the reason for the change. The file should tell the whole story without a call to the broker.",
          "Note any post-entry charge, exam, or hold in the same file with the date and the responsible party. These events can change the landed cost and the delivery promise. Tell the client contact when a charge appears so the customer conversation is not based on an old estimate. A shipment file that stops at entry misses the costs that arrive later.",
          "At the monthly review, sample a few completed files and check that the invoice, packing list, entry, and proof of delivery agree. Group the errors by cause and update the checklist where the same gap appears. A checklist that never changes is a form, not a control. The desk and the client should review the holds together and decide whether the threshold or the instructions need to change.",
          "Keep one page that explains the current hold rules in plain language. Give it to the client contact and the broker so everyone works from the same version. When a rule changes, replace the page and note the date in the shipment file. A shared reference prevents the desk from being blamed for a rule that only one person knew."
        ]
      }
    ],
    "script": [
      "Do the invoice, packing list, and entry describe the same goods and parties?",
      "Which classification or origin questions need the trade compliance lead?",
      "What is the client's value threshold for a hold?",
      "Where is the broker's confirmation saved after entry?"
    ],
    "sources": [
      {
        "name": "CBP: Basic import and export",
        "url": "https://www.cbp.gov/trade/basic-import-export",
        "note": "U.S. Customs and Border Protection guidance on importing and exporting goods."
      },
      {
        "name": "CBP: Entry summary",
        "url": "https://www.cbp.gov/trade/programs-administration/entry-summary",
        "note": "Official information on entry summary filing and supporting documentation."
      },
      {
        "name": "U.S. Census Bureau: Foreign trade",
        "url": "https://www.census.gov/foreign-trade/index.html",
        "note": "Foreign trade data and reference material on import and export reporting."
      }
    ],
    "faqs": [
      {
        "question": "Can the freight desk assign a tariff classification?",
        "answer": "Only when the client has documented that authority and a qualified reviewer checks the result. Otherwise route the question to the trade compliance lead or broker."
      },
      {
        "question": "What should happen when the invoice value is missing?",
        "answer": "Hold the file and ask the seller for a corrected invoice. Do not estimate a value or copy one from an earlier shipment."
      },
      {
        "question": "How long should shipment documents be kept?",
        "answer": "Follow the client's record retention policy and the broker's requirements. Keep the filed entry and any correction together."
      },
      {
        "question": "Who can approve a change after the entry is filed?",
        "answer": "The importer of record or the person the client names in writing. The desk should record the approval and the broker's confirmation."
      }
    ],
    "relatedLinks": [
      {
        "label": "See logistics administration support",
        "href": "/services/logistics-administration",
        "note": "Shipment documentation, carrier follow-up, and exception tracking handled by a trained remote desk."
      },
      {
        "label": "See procurement support",
        "href": "/services/procurement-support",
        "note": "Supplier records and purchase documentation with written review points."
      },
      {
        "label": "Read the vendor document checklist",
        "href": "/blog/outsourcedcompany-prepare-a-vendor-document-checklist-for-outsourced-administration",
        "note": "A related guide on collecting complete supplier files before a deadline."
      }
    ]
  }
};
