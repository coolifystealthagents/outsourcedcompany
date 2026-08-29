# Service-led topic map

**Scope:** Outsourced Company publishes Philippines-only staffing guidance for small businesses deciding which company function to hand off first. This working map connects existing guides and research to the service page that answers the next practical question. It does not make a ranking or performance claim.

## Service pillars and supporting routes

| Service pillar | Buyer intent | Existing supporting route | Next useful reader path | Status |
| --- | --- | --- | --- | --- |
| Back-office operations | Set up a repeatable operations queue with written owner limits. | `/research/philippines-outsourcing-onboarding-evidence-sufficiency` | Explain how a buyer can move from a reviewed handoff sample to a narrowly scoped operations lane. | Candidate for a route-local handoff |
| Executive administration | Coordinate meetings without creating commitments by accident. | `/blog/philippines-outsourcing-calendar-coordination-controls` | Help a reader turn calendar controls into an executive administration brief. | Candidate for a route-local handoff |
| Customer experience support | Triage a customer complaint while preserving remedy and safety decisions for the owner. | `/research/philippines-outsourcing-customer-complaint-triage` | Send readers who need a staffed triage lane to the matching service page. | Candidate for a route-local handoff |
| Sales administration | Keep CRM changes traceable and reversible. | `/blog/outsourcing-philippines-crm-field-governance` | Give a buyer a sales-administration next step after field rules and ownership are clear. | Candidate for a route-local handoff |
| Finance operations support | Prepare invoice differences without approving payment or changing supplier details. | `/blog/philippines-outsourcing-invoice-exception-preparation` | Move from an evidence packet to a bounded finance-operations staffing discussion. | Candidate for a route-local handoff |
| Recruitment coordination | Arrange interviews without making selection or employment decisions. | `/blog/outsourcing-philippines-recruitment-scheduling-handoffs` | Connect scheduling requirements to recruitment-coordination support. | Candidate for a route-local handoff |
| Ecommerce administration | Reconcile order states without promising delivery or a refund. | `/blog/philippines-outsourcing-order-status-reconciliation` | Route a reader from reconciliation controls to ecommerce administration support. | Candidate for a route-local handoff |
| Project coordination | Prepare dated risk evidence while the project owner retains tradeoff decisions. | `/blog/outsourcing-philippines-project-risk-evidence-packets` | Connect a reviewable risk packet to project-coordination support. | Candidate for a route-local handoff |
| Data management | Check whether a stated permission still matches the work. | `/blog/outsourcing-philippines-access-review-preparation` | Explain the boundary between access-review preparation and data-management support. | Candidate for a route-local handoff |
| Vendor administration | Follow up on renewal documents without negotiating terms or accepting a commitment. | `/blog/philippines-outsourcing-renewal-document-chasing` | Connect document follow-up to vendor-administration support. | Candidate for a route-local handoff |
| Quality assurance support | Find the cause of a repeated operating error without treating a sample as a judgment about a worker. | `/research/philippines-outsourcing-exception-aging-evidence` | Help readers apply an exception-age review before choosing a QA support lane. | Candidate for a route-local handoff |
| Marketing operations | Keep knowledge guidance current through source, reviewer, and effective-date checks. | `/blog/outsourcing-philippines-knowledge-article-maintenance` | Connect a controlled content-maintenance queue to marketing-operations support. | Candidate for a route-local handoff |

## First execution candidate

**Route:** `/blog/philippines-outsourcing-invoice-exception-preparation`  
**Destination:** `/services/finance-operations-support`  
**Reader need:** The guide already explains the evidence and approval boundary for an invoice mismatch. A reader who has defined that queue may need help staffing the preparation work, rather than a generic outsourcing overview.

Before changing this public route, confirm all of the following from a clean, synchronized baseline:

1. The related-links block does not already contain the finance-operations destination in the route-local article.
2. The destination still has the Philippines-only service scope and a working canonical route.
3. The article's real modified date, Article JSON-LD date, Open Graph metadata, and sitemap contract can be verified after the build.
4. The handoff copy keeps payment approval, bank-detail changes, tax treatment, and supplier allegations with the authorized owner.

## Guardrails

- One URL serves one reader question. Do not create a near-duplicate page merely to occupy a cluster label.
- A contextual link must help a reader take the next task-specific step. It is not a sitewide navigation substitute.
- Use the existing `relatedLinks` data model instead of a renderer exception, and verify the link inside the generated route-local `<article>`.
- Keep the Philippines boundary and decision-owner limits in any reader-facing addition.
- Review the linked source page, service page, rendered HTML, and sitemap before treating a future handoff as ready to release.
