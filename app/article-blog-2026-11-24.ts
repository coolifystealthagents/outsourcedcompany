export const blogPosts2026_11_24 = [
  {
    "slug": "outsourcedcompany-write-a-customer-address-change-verification-note-for-an-outsourced-support-desk",
    "title": "Write a customer address change verification note for an outsourced support desk",
    "excerpt": "An address change note for an outsourced support desk records the identity check, the address sources, the open orders, and the approval before any record is updated.",
    "minutes": 9,
    "published": "2026-11-24"
  },
  {
    "slug": "outsourcedcompany-build-a-returned-mail-recontact-log-for-an-outsourced-billing-desk",
    "title": "Build a returned mail recontact log for an outsourced billing desk",
    "excerpt": "A returned mail recontact log for an outsourced billing desk preserves the postal evidence, the identity check, the contact attempts, and the address correction decision.",
    "minutes": 8,
    "published": "2026-11-24"
  },
  {
    "slug": "outsourcedcompany-write-a-software-license-renewal-inventory-note-for-an-outsourced-it-admin-desk",
    "title": "Write a software license renewal inventory note for an outsourced IT admin desk",
    "excerpt": "A software license renewal inventory note for an outsourced IT admin desk ties the register, the usage, the contract dates, and the purchase approval together.",
    "minutes": 9,
    "published": "2026-11-24"
  },
  {
    "slug": "outsourcedcompany-build-a-freight-claim-evidence-packet-for-an-outsourced-logistics-desk",
    "title": "Build a freight claim evidence packet for an outsourced logistics desk",
    "excerpt": "A freight claim evidence packet for an outsourced logistics desk records the shipment, the damage proof, the value calculation, the carrier deadline, and the settlement path.",
    "minutes": 9,
    "published": "2026-11-24"
  },
  {
    "slug": "outsourcedcompany-write-a-bank-detail-change-callback-record-for-an-outsourced-accounts-payable-desk",
    "title": "Write a bank detail change callback record for an outsourced accounts payable desk",
    "excerpt": "A bank detail change callback record for an outsourced accounts payable desk captures the freeze, the independent call, the dual approval, and the payment test.",
    "minutes": 9,
    "published": "2026-11-24"
  }
];

export const blogDetails2026_11_24 = {
  "outsourcedcompany-write-a-customer-address-change-verification-note-for-an-outsourced-support-desk": {
    "updated": "2026-11-24",
    "datePublished": "2026-11-24",
    "marker": "november-24-2026-outsourcedcompany-write-a-customer-address-change-verification-note-for-an-outsourced-support-desk",
    "takeaway": "An address change is an identity and fulfillment decision, so the note must record the verification, the address sources, the open orders, and the approval before any system is updated.",
    "takeaways": [
      "Verify the customer with a factor already on file before discussing the new address.",
      "Compare the new address with billing, shipping, and payment sources.",
      "Check open orders and in-flight parcels before promising a change.",
      "Route unusual requests to a named fraud or account owner."
    ],
    "image": "/nov24/company-blog/outsourcedcompany-write-a-customer-address-change-verification-note-for-an-outsourced-support-desk.webp",
    "sections": [
      {
        "heading": "Capture the request and the identity check",
        "body": [
          "A customer address change note begins with the request exactly as it arrived, including the channel, the timestamp, and the account it concerns. Record the customer name, the account number, and the contact detail used for the request. Ask for a verification factor that is already on file, such as the last invoice amount or a registered phone number. Never treat the new address itself as proof of identity.",
          "Write down which verification steps passed and which were skipped, because a partial check changes the risk. If the customer cannot verify, mark the request as pending rather than rejected. Record the reason and the next permitted contact method. The note should let a second agent continue without repeating the whole conversation."
        ]
      },
      {
        "heading": "Confirm the address source",
        "body": [
          "Compare the new address with the billing address, the shipping address, and the address on the most recent payment instrument. A change that affects only shipping may not need the same approval as a change to billing. Record each source, its date, and whether it agrees with the request. A mismatch is a question for the customer, not a reason to guess.",
          "Check whether the address exists in the postal validation tool and whether the unit or suite is complete. Record the normalized result and any override the customer requested. If the address is a business or a mail-forwarding location, note that fact for the fraud reviewer. The evidence should show what was checked, not only what was entered."
        ]
      },
      {
        "heading": "Check open orders and shipments",
        "body": [
          "List every open order, subscription, and shipment that will use the address. Record the order number, the status, and the promised date for each one. Some orders can be changed before dispatch, while others must be held or cancelled. The desk should show the options rather than promise an outcome it cannot control.",
          "Contact the fulfillment desk before releasing a changed address on a shipped order. Record the carrier, the tracking number, and whether an intercept is available. If the intercept fails, document the next step and the customer message. An address change that ignores an in-flight parcel creates a second complaint."
        ]
      },
      {
        "heading": "Route exceptions and fraud signals",
        "body": [
          "Escalate a change when the request arrives from a new device, a new phone number, or an unusual location. Record the signal, the evidence, and the person who reviewed it. Do not tell the customer which fraud rule was triggered. The note should give the reviewer enough context to decide without exposing the control.",
          "Name the owner who can approve a high-risk change and the time expected for a decision. If the approval is conditional, record the condition and the expiry. Confirm a verbal approval in the case note. A change that waits without an owner becomes a silent backlog item."
        ]
      },
      {
        "heading": "Update systems and tell the customer",
        "body": [
          "Update the account, the billing record, and the shipping profile only after the approval is recorded. Add the source of the new address and the date it takes effect. Check that the next invoice and the next order use the correct record. A partial update leaves two addresses in conflict.",
          "Send a short confirmation that states what changed and when it applies. Do not repeat the full address in an insecure channel if the policy forbids it. Give the customer a reference and a contact for questions. Record the message and the delivery result in the case."
        ]
      },
      {
        "heading": "Review repeat changes",
        "body": [
          "Review address changes each week by account, channel, and outcome. A cluster on one account may indicate a compromise, while a cluster on one channel may indicate a confusing form. Record the finding and the owner who will act on it. The pattern is often more useful than a single case.",
          "Check whether any change was later reversed or disputed. Record the reversal, the reason, and the time to resolve it. Share the lesson with the desk and the client owner. The process should become harder to abuse and easier to use."
        ]
      }
    ],
    "script": [
      "What is the current scope, and who owns the decision?",
      "Which evidence shows the request arrived and who approved it?",
      "Which systems were updated, and when was each confirmed?",
      "Which items are still open past the promised date?"
    ],
    "sources": [
      {
        "name": "FTC: Protecting Personal Information",
        "url": "https://www.ftc.gov/business-guidance/privacy-security",
        "note": "Official business guidance on handling consumer and client information."
      },
      {
        "name": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework",
        "note": "Risk-based privacy practices referenced in the record design."
      },
      {
        "name": "CISA Cyber Essentials",
        "url": "https://www.cisa.gov/cyber-essentials",
        "note": "Small business operational and access guidance."
      }
    ],
    "faqs": [
      {
        "question": "Who owns this process?",
        "answer": "The client-side service owner confirms the policy and the escalation authority, while the desk maintains the record and the evidence."
      },
      {
        "question": "What evidence should be kept?",
        "answer": "Keep the request, the approval, the system update, and the confirmation in one place so a later reviewer can follow the decision."
      },
      {
        "question": "When should it be reviewed?",
        "answer": "Review it at the next service meeting and after any change in policy, ownership, or system."
      }
    ],
    "relatedLinks": [
      {
        "label": "See customer experience support",
        "href": "/services/customer-experience-support"
      },
      {
        "label": "Read the order hold release guide",
        "href": "/blog/outsourcedcompany-build-an-order-hold-release-note-for-an-outsourced-fulfillment-desk"
      }
    ]
  },
  "outsourcedcompany-build-a-returned-mail-recontact-log-for-an-outsourced-billing-desk": {
    "updated": "2026-11-24",
    "datePublished": "2026-11-24",
    "marker": "november-24-2026-outsourcedcompany-build-a-returned-mail-recontact-log-for-an-outsourced-billing-desk",
    "takeaway": "Returned mail is a billing and privacy event, so the log must preserve the artifact, verify the customer, control the contact attempts, and record the address decision in one place.",
    "takeaways": [
      "Record the returned piece, the carrier reason, and the date it arrived.",
      "Verify identity before discussing any account detail on a recontact attempt.",
      "Set a contact cadence and a secure channel that match the account policy.",
      "Close the case only when the address is corrected or an exception is approved."
    ],
    "image": "/nov24/company-blog/outsourcedcompany-build-a-returned-mail-recontact-log-for-an-outsourced-billing-desk.webp",
    "sections": [
      {
        "heading": "Record the returned piece and the reason",
        "body": [
          "A returned mail log starts with the piece itself, the mail date, and the date it came back. Record the customer, the account, the address used, and the carrier return reason. Scan or photograph the envelope so the postal marking is preserved. A note that says mail came back without the artifact is hard to defend.",
          "Separate an address problem from a refusal, a vacancy, or a sorting error. Record the exact reason code and any handwritten note from the carrier. If the piece contains a cheque, a card, or personal data, record how it was secured. The handling rule depends on what the envelope holds."
        ]
      },
      {
        "heading": "Verify the customer before recontact",
        "body": [
          "Before calling or emailing, confirm that the contact detail belongs to the customer on the account. Use a factor already on file and record which one was used. Do not read the full account balance or the document contents to an unverified person. A recontact attempt can become a disclosure if the identity check is skipped.",
          "If the customer cannot be reached, record each attempt with the time, the channel, and the result. Leave a neutral message that does not reveal the account status. Mark the account for the next permitted step rather than calling repeatedly. The log should show a calm and documented sequence."
        ]
      },
      {
        "heading": "Choose the contact channel and cadence",
        "body": [
          "Use the channel the customer has agreed to for account contact, and record any preference. A phone call may be appropriate for a time-sensitive billing item, while a secure message may suit a document request. Set the number of attempts and the interval before the case moves to another owner. A vague instruction to follow up produces inconsistent contact.",
          "Write the message in plain language and state what the customer needs to do. Ask for a confirmation of the address rather than a full repeat of sensitive details. Give a reference and a deadline that reflects the account rules. Record what was sent and when the next review is due."
        ]
      },
      {
        "heading": "Protect the account and billing data",
        "body": [
          "Do not include the full account number, the balance, or the document image in an ordinary email. Use the approved secure channel and the minimum data needed for the customer to respond. Record who accessed the returned piece and when it was destroyed or archived. The privacy rule applies even when the mail was undeliverable.",
          "If the piece contains a payment instrument, follow the replacement or cancellation process rather than mailing it again. Record the cancellation reference and the date. Tell the finance owner when a cheque or card may be exposed. A returned payment item is a financial control event, not only a mailing problem."
        ]
      },
      {
        "heading": "Update the address and the billing record",
        "body": [
          "When the customer confirms a new address, route the change through the address verification process. Record the source, the effective date, and the systems updated. Check the next statement and the next shipment against the new record. A billing address and a shipping address may need separate confirmation.",
          "Remove the old address only after the new one is verified and the change is approved. Keep the history so a later reviewer can see what happened. If the customer asks to suppress mail, record the request and the channel. A suppression rule that is not recorded will be missed on the next cycle."
        ]
      },
      {
        "heading": "Read the pattern and close",
        "body": [
          "Review returned mail each month by reason, address type, and carrier. A cluster in one building may point to a labeling problem, while a cluster on one statement may point to a data error. Record the finding and the owner. The log should reduce returns, not only document them.",
          "Close the case when the customer is reached, the address is corrected, or the account is moved to the approved exception path. Record the outcome and the date. If the case is closed without contact, state why. A clear closure rule prevents the log from becoming a permanent list."
        ]
      }
    ],
    "script": [
      "What is the current scope, and who owns the decision?",
      "Which evidence shows the request arrived and who approved it?",
      "Which systems were updated, and when was each confirmed?",
      "Which items are still open past the promised date?"
    ],
    "sources": [
      {
        "name": "FTC: Protecting Personal Information",
        "url": "https://www.ftc.gov/business-guidance/privacy-security",
        "note": "Official business guidance on handling consumer and client information."
      },
      {
        "name": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework",
        "note": "Risk-based privacy practices referenced in the record design."
      },
      {
        "name": "CISA Cyber Essentials",
        "url": "https://www.cisa.gov/cyber-essentials",
        "note": "Small business operational and access guidance."
      }
    ],
    "faqs": [
      {
        "question": "Who owns this process?",
        "answer": "The client-side service owner confirms the policy and the escalation authority, while the desk maintains the record and the evidence."
      },
      {
        "question": "What evidence should be kept?",
        "answer": "Keep the request, the approval, the system update, and the confirmation in one place so a later reviewer can follow the decision."
      },
      {
        "question": "When should it be reviewed?",
        "answer": "Review it at the next service meeting and after any change in policy, ownership, or system."
      }
    ],
    "relatedLinks": [
      {
        "label": "See finance operations support",
        "href": "/services/finance-operations-support"
      },
      {
        "label": "Read the billing dispute intake guide",
        "href": "/blog/outsourcedcompany-write-a-client-billing-dispute-intake-note-for-an-outsourced-finance-desk"
      }
    ]
  },
  "outsourcedcompany-write-a-software-license-renewal-inventory-note-for-an-outsourced-it-admin-desk": {
    "updated": "2026-11-24",
    "datePublished": "2026-11-24",
    "marker": "november-24-2026-outsourcedcompany-write-a-software-license-renewal-inventory-note-for-an-outsourced-it-admin-desk",
    "takeaway": "A license renewal is a contract and access decision, so the note must connect the register, the real usage, the renewal terms, and a named purchase approval before the order is placed.",
    "takeaways": [
      "Reconcile the license register with invoices and the vendor portal before renewal.",
      "Compare purchased seats with actual usage and remove stale accounts.",
      "Record the notice date, the price basis, and the renewal clause.",
      "Route the purchase decision to a named owner with a written limit."
    ],
    "image": "/nov24/company-blog/outsourcedcompany-write-a-software-license-renewal-inventory-note-for-an-outsourced-it-admin-desk.webp",
    "sections": [
      {
        "heading": "Start from the license register",
        "body": [
          "A license renewal note begins with the register, not the vendor email. Record the product, the publisher, the contract number, the seats purchased, and the renewal date. Note whether the license is perpetual, subscription, or usage-based. The register should show the owner and the cost center for each line.",
          "Check the register against the invoice and the vendor portal. A seat count that differs between sources needs a reconciliation before the renewal is discussed. Record the source date and the person who checked it. A renewal based on a stale register can buy seats the company no longer needs."
        ]
      },
      {
        "heading": "Confirm actual usage and seats",
        "body": [
          "Pull the usage report for the last full period and compare it with the purchased seats. Record the active users, the inactive users, and the peak concurrent use. Distinguish a named-user license from a device or a shared license. The comparison shows whether the company is over-licensed or exposed.",
          "Check for duplicate installations and for access held by departed staff. Record the accounts that should be removed before the renewal count is final. If the tool is critical but lightly used, note the business reason rather than assuming waste. Usage is evidence, not a verdict on value."
        ]
      },
      {
        "heading": "Check the renewal terms and dates",
        "body": [
          "Read the renewal clause, the notice period, and the price basis before the deadline. Record whether the price is fixed, indexed, or subject to a list increase. Note any auto-renewal and the last date to cancel or change seats. A missed notice window can lock in a cost for another year.",
          "Compare the quoted renewal with the prior invoice and the contract terms. Record the difference and the vendor explanation. If the quote includes new products or support tiers, separate them from the base renewal. The reviewer should see what is being renewed and what is being added."
        ]
      },
      {
        "heading": "Route the purchase decision",
        "body": [
          "Set the approval by annual value, contract length, and business criticality. The desk can prepare the comparison but should not commit the company to a new term. Record the approver, the limit, and the date of the decision. A verbal approval should be confirmed in writing before the order is placed.",
          "Give the approver a short recommendation with the usage, the price change, and the risk of not renewing. Record the alternative options, such as reducing seats or moving to a lower tier. If the decision is to cancel, write the notice date and the migration plan. The note should support a decision rather than only describe a renewal."
        ]
      },
      {
        "heading": "Update the record and remove unused access",
        "body": [
          "After the renewal, update the register with the new term, the seat count, and the cost. Record the purchase order and the invoice reference. Remove access for users who no longer need the tool and confirm the change. An updated contract with stale access still carries unnecessary risk.",
          "Check that the vendor portal and the internal register agree on the renewal date. Record the next review date and the owner who will check usage. If the license includes support, record the support contact and the entitlement. The record should be usable at the next renewal without a search."
        ]
      },
      {
        "heading": "Review for shelfware and drift",
        "body": [
          "Review the license portfolio each quarter for tools with low usage, overlapping features, and unclear owners. Record the candidate for consolidation and the business owner who must agree. Do not cancel a tool only because the seat count is low. Some tools are used rarely but carry a critical process.",
          "Compare the renewal decisions with the actual invoices paid. Look for a renewal that was approved but not ordered, or a charge that does not match the contract. Record the exception and the follow-up. The portfolio review is how the register stays honest."
        ]
      }
    ],
    "script": [
      "What is the current scope, and who owns the decision?",
      "Which evidence shows the request arrived and who approved it?",
      "Which systems were updated, and when was each confirmed?",
      "Which items are still open past the promised date?"
    ],
    "sources": [
      {
        "name": "FTC: Protecting Personal Information",
        "url": "https://www.ftc.gov/business-guidance/privacy-security",
        "note": "Official business guidance on handling consumer and client information."
      },
      {
        "name": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework",
        "note": "Risk-based privacy practices referenced in the record design."
      },
      {
        "name": "CISA Cyber Essentials",
        "url": "https://www.cisa.gov/cyber-essentials",
        "note": "Small business operational and access guidance."
      }
    ],
    "faqs": [
      {
        "question": "Who owns this process?",
        "answer": "The client-side service owner confirms the policy and the escalation authority, while the desk maintains the record and the evidence."
      },
      {
        "question": "What evidence should be kept?",
        "answer": "Keep the request, the approval, the system update, and the confirmation in one place so a later reviewer can follow the decision."
      },
      {
        "question": "When should it be reviewed?",
        "answer": "Review it at the next service meeting and after any change in policy, ownership, or system."
      }
    ],
    "relatedLinks": [
      {
        "label": "See vendor administration",
        "href": "/services/vendor-administration"
      },
      {
        "label": "Read the access removal guide",
        "href": "/blog/outsourcedcompany-build-an-access-removal-checklist-for-outsourced-staff-turnover"
      }
    ]
  },
  "outsourcedcompany-build-a-freight-claim-evidence-packet-for-an-outsourced-logistics-desk": {
    "updated": "2026-11-24",
    "datePublished": "2026-11-24",
    "marker": "november-24-2026-outsourcedcompany-build-a-freight-claim-evidence-packet-for-an-outsourced-logistics-desk",
    "takeaway": "A freight claim is won or lost on the evidence packet, so the desk must capture the shipment facts, the damage proof, the value calculation, and the carrier deadline before the window closes.",
    "takeaways": [
      "Preserve the packaging, labels, and delivery receipt before anything moves.",
      "Build the claimed value from the invoice and separate repair from replacement.",
      "Work backward from the carrier deadline and keep the submission receipt.",
      "Route the settlement decision to a named owner and reconcile the recovery."
    ],
    "image": "/nov24/company-blog/outsourcedcompany-build-a-freight-claim-evidence-packet-for-an-outsourced-logistics-desk.webp",
    "sections": [
      {
        "heading": "Record the shipment and the exception",
        "body": [
          "A freight claim packet begins with the shipment identity, the carrier, the tracking number, and the delivery date. Record the shipper, the consignee, the number of pieces, and the declared value. State the exception in plain terms, such as damage, shortage, delay, or loss. The claim should not start with a conclusion about fault.",
          "Note when the exception was discovered and who reported it. Record the receiving location and the condition of the packaging at arrival. If the driver was present, record the name and any notation on the delivery receipt. The first observation is often the strongest evidence in the file."
        ]
      },
      {
        "heading": "Preserve delivery and damage evidence",
        "body": [
          "Photograph the outer packaging, the label, the seal, and the damaged item before anything is moved or repaired. Keep the original boxes and packing material until the carrier responds. Record the photo date and the person who took each image. A clean photo set is more useful than a long description.",
          "Save the delivery receipt, the bill of lading, the inspection report, and any carrier correspondence in one folder. Record the file names and the dates in the claim log. If a third party inspected the goods, attach the report and the inspector details. The packet should let a reviewer follow the shipment without asking for another document."
        ]
      },
      {
        "heading": "Build the cost and value calculation",
        "body": [
          "List the claimed amount by line, including the unit cost, the quantity affected, and the freight or handling cost. Record the currency and the source of each value, such as the commercial invoice or the purchase order. Separate a repair cost from a replacement cost and a lost-sale claim. The calculation should match the evidence in the packet.",
          "Check the carrier liability limit and any declared-value coverage before submitting the amount. Record the limit and the clause that applies. If the claim exceeds the limit, note the gap and the internal owner who accepts it. A claim that ignores the limit will be reduced or rejected."
        ]
      },
      {
        "heading": "Meet the carrier deadline and format",
        "body": [
          "Record the claim window from the carrier rules and the date the clock started. Build the packet early enough to allow a review before the deadline. Use the carrier form and file format rather than an informal email when one is required. A complete packet filed late is still a lost claim.",
          "Keep a copy of everything submitted, including the timestamp and the confirmation number. Record the carrier acknowledgement and the assigned claim reference. If the carrier asks for more evidence, log the request and the due date. The file should show a full chain from discovery to decision."
        ]
      },
      {
        "heading": "Route the claim and track the response",
        "body": [
          "Name the internal owner who approves the claim and the person who speaks with the carrier. Record each contact, the position taken, and the next action. Do not let the desk accept a settlement outside its authority. A settlement is a commercial decision, not only a logistics update.",
          "Track the response against the promised date and escalate when it slips. Record the carrier decision, the amount approved, and any deduction. If the claim is denied, save the reason and the appeal window. The log should make the next claim faster and stronger."
        ]
      },
      {
        "heading": "Close and learn from the pattern",
        "body": [
          "Close the claim when the payment, the credit, or the denial is recorded and reconciled with the accounts. Record the final amount and the person who closed the file. Compare the recovery with the original claim and note the difference. A closed claim without a financial check is only a correspondence file.",
          "Review claims each quarter by carrier, lane, packaging type, and cause. A cluster on one lane may point to a handling problem, while a cluster on one product may point to weak packaging. Share the pattern with the logistics owner and the carrier. The packet should reduce future losses, not only recover the last one."
        ]
      }
    ],
    "script": [
      "What is the current scope, and who owns the decision?",
      "Which evidence shows the request arrived and who approved it?",
      "Which systems were updated, and when was each confirmed?",
      "Which items are still open past the promised date?"
    ],
    "sources": [
      {
        "name": "FTC: Protecting Personal Information",
        "url": "https://www.ftc.gov/business-guidance/privacy-security",
        "note": "Official business guidance on handling consumer and client information."
      },
      {
        "name": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework",
        "note": "Risk-based privacy practices referenced in the record design."
      },
      {
        "name": "CISA Cyber Essentials",
        "url": "https://www.cisa.gov/cyber-essentials",
        "note": "Small business operational and access guidance."
      }
    ],
    "faqs": [
      {
        "question": "Who owns this process?",
        "answer": "The client-side service owner confirms the policy and the escalation authority, while the desk maintains the record and the evidence."
      },
      {
        "question": "What evidence should be kept?",
        "answer": "Keep the request, the approval, the system update, and the confirmation in one place so a later reviewer can follow the decision."
      },
      {
        "question": "When should it be reviewed?",
        "answer": "Review it at the next service meeting and after any change in policy, ownership, or system."
      }
    ],
    "relatedLinks": [
      {
        "label": "See back-office operations",
        "href": "/services/back-office-operations"
      },
      {
        "label": "Read the inventory variance guide",
        "href": "/blog/outsourcedcompany-write-an-inventory-cycle-count-variance-note-for-an-outsourced-warehouse-desk"
      }
    ]
  },
  "outsourcedcompany-write-a-bank-detail-change-callback-record-for-an-outsourced-accounts-payable-desk": {
    "updated": "2026-11-24",
    "datePublished": "2026-11-24",
    "marker": "november-24-2026-outsourcedcompany-write-a-bank-detail-change-callback-record-for-an-outsourced-accounts-payable-desk",
    "takeaway": "A bank detail change is a payment fraud control point, so the record must show the independent callback, the two approvals, the vendor master update, and a tested payment.",
    "takeaways": [
      "Freeze the vendor master until the change is independently verified.",
      "Call a number already on file rather than the number in the request.",
      "Require two approvers and record the evidence each one reviewed.",
      "Test the new record before the next payment run and log near misses."
    ],
    "image": "/nov24/company-blog/outsourcedcompany-write-a-bank-detail-change-callback-record-for-an-outsourced-accounts-payable-desk.webp",
    "sections": [
      {
        "heading": "Freeze the change on arrival",
        "body": [
          "A bank detail change request should stop at the desk until it is verified, even when it looks routine. Record the vendor, the old details, the new details, and the date the request arrived. Do not update the vendor master on the strength of an email alone. The freeze is the control that prevents a fraudulent payment.",
          "Check whether the request came from a known contact and a known domain. Record the sender, the reply-to address, and any attachment metadata. If the message asks for urgency or secrecy, treat that as a risk signal. A hurried change is a common pattern in payment fraud."
        ]
      },
      {
        "heading": "Use an independent callback",
        "body": [
          "Call the vendor on a number already held in the master record, not the number in the request. Record the person reached, the time, and the number dialed. Ask them to confirm the change in their own words without reading the new details first. The callback should be independent of the message that triggered it.",
          "If the callback cannot be completed, keep the change on hold and record the attempts. Do not accept a callback arranged by the requester or a voicemail as confirmation. Route the case to the finance owner with the evidence collected. A hold without an owner will be released by someone under pressure."
        ]
      },
      {
        "heading": "Record the verification evidence",
        "body": [
          "Write down each verification step, the result, and the person who performed it. Include the old account, the new account, the bank name, and the country. Record whether the vendor provided a bank letter or a portal confirmation and how it was validated. The evidence should be specific enough for an auditor to repeat the check.",
          "Compare the new bank details with any prior record and flag a change of country or bank. Record the mismatch and the explanation. If the vendor is new, apply the full onboarding check rather than the change process. A first payment to a new bank account deserves more scrutiny, not less."
        ]
      },
      {
        "heading": "Route the approval and dual control",
        "body": [
          "Require two people to approve a bank detail change, with at least one from the finance owner team. Record both approvers, the time, and the evidence each reviewed. The desk can prepare the packet but should not be the only approver. Dual control is meaningful only when the second person actually checks the evidence.",
          "If the approval is conditional, record the condition and the expiry before the update. Confirm a verbal approval in writing and attach it to the case. Do not split the change into smaller edits to avoid the limit. A split change is a control bypass, not a shortcut."
        ]
      },
      {
        "heading": "Update the vendor master and test",
        "body": [
          "Update the vendor master only after the approval is recorded, and use the approved source. Record the effective date and the person who made the change. Run a test payment or a validation check before the next regular run. A changed record that has never been tested can fail at the worst moment.",
          "Confirm that the old bank details are removed or marked inactive. Check the payment run and the remittance advice against the new record. Record the confirmation and any exception. The change is not complete until a payment can use the new details correctly."
        ]
      },
      {
        "heading": "Review attempts and near misses",
        "body": [
          "Review bank detail changes each month for volume, source, and outcome. Record any attempt that was blocked and the reason. A cluster of attempts on one vendor may indicate a targeted fraud. Share the pattern with the finance owner and the vendor contact.",
          "Test the callback process with a controlled exercise and record what failed. Update the script and the contact list when a gap appears. Keep the evidence for the audit trail. The control should improve with each near miss rather than wait for a loss."
        ]
      }
    ],
    "script": [
      "What is the current scope, and who owns the decision?",
      "Which evidence shows the request arrived and who approved it?",
      "Which systems were updated, and when was each confirmed?",
      "Which items are still open past the promised date?"
    ],
    "sources": [
      {
        "name": "FTC: Protecting Personal Information",
        "url": "https://www.ftc.gov/business-guidance/privacy-security",
        "note": "Official business guidance on handling consumer and client information."
      },
      {
        "name": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework",
        "note": "Risk-based privacy practices referenced in the record design."
      },
      {
        "name": "CISA Cyber Essentials",
        "url": "https://www.cisa.gov/cyber-essentials",
        "note": "Small business operational and access guidance."
      }
    ],
    "faqs": [
      {
        "question": "Who owns this process?",
        "answer": "The client-side service owner confirms the policy and the escalation authority, while the desk maintains the record and the evidence."
      },
      {
        "question": "What evidence should be kept?",
        "answer": "Keep the request, the approval, the system update, and the confirmation in one place so a later reviewer can follow the decision."
      },
      {
        "question": "When should it be reviewed?",
        "answer": "Review it at the next service meeting and after any change in policy, ownership, or system."
      }
    ],
    "relatedLinks": [
      {
        "label": "See finance operations support",
        "href": "/services/finance-operations-support"
      },
      {
        "label": "Read the invoice exception guide",
        "href": "/blog/outsourcedcompany-build-an-invoice-exception-register-for-outsourced-operations"
      }
    ]
  }
};
