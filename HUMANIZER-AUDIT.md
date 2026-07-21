# Site-wide humanizer audit

Date: 2026-07-21

## Scope reviewed

- `app/page.tsx`: homepage hero, function files, decision table, handoff steps, field notes, and final CTA
- `app/data.ts`: service descriptions, task lists, controls, first-week steps, FAQs, guide data, staffing offer, and contact prompts
- `app/services/[slug]/page.tsx`: service metadata, visible role guidance, FAQs, and shared CTA placement
- `app/blog/page.tsx` and `app/blog/[slug]/page.tsx`: guide titles, summaries, article modules, source notes, and fallback guide copy
- `/blog/outsource-to-the-philippines-guide`: 1,992 rendered page words, including the article, shared navigation, CTA, footer, number cards, sample briefs, provider scripts, workflow, table, FAQs, source notes, and related links
- `app/contact/page.tsx` and `app/thank-you/page.tsx`: form labels, routing notes, confirmation copy, and Philippines-only language
- `app/components.tsx`: header, footer, and shared CTA copy
- `app/layout.tsx`: default metadata and Open Graph description

## What changed

- Repaired the damaged guide title `Outsourced Company: What does it plan?` and removed the vague phrase `hidden planning`.
- Replaced four repetitive, template-like guide titles and summaries with direct questions and Philippines-specific descriptions.
- Replaced one generic fallback article used by three routes with distinct planning, task-selection, and onboarding guidance.
- Removed the unsupported claim that one pilot format is the "safest" and changed an arbitrary provider-question count into a practical coverage rule.
- Kept the writing concrete: examples, access limits, approval lines, review owners, and queue handoffs.
- Shortened two homepage headings after visual QA found awkward desktop line breaks, and raised the contrast of small routing and footer notes.
- Shortened the planning-guide H1 and separated the shared CTA from the article card after detail-route visual QA found an orphaned word and cramped section boundary.
- Added the first Ahrefs-led commercial guide in plain language. It uses short paragraphs, states when a number is a planning example, and separates sourced facts from advice.
- Kept the article specific without invented proof. The page has no testimonials, client results, market-rate claims, savings claims, or provider rankings.
- Replaced vague sales claims with work the buyer can check: five finished samples, the first ten records, named access, written stop rules, and a 30-day launch sequence.

## Final anti-AI pass

The remaining lists are functional checklists rather than decorative groups. Headings are direct, paragraph lengths vary, and the copy does not use significance claims, chatbot language, vague expert attribution, forced contrasts, or generic upbeat conclusions. A pattern scan of the new article found none of the watched terms such as “delve,” “crucial,” “landscape,” “pivotal,” “showcase,” “at its core,” or “the real question.” The article averages about 13.5 words per sentence. Necessary terms such as “multi-factor,” “Data Privacy Act,” and “outsourcing” raise automated grade estimates, but each is explained with short, direct steps.

## Exclusions and guardrails

- Privacy, terms, and cancellation pages were excluded. Their legal meaning was not changed.
- Route slugs, citations, schema types, conversion paths, and the Philippines-only staffing model were preserved.
- No testimonials, credentials, pricing, guarantees, first-person stories, or other proof claims were added. The new article's statistics are tied to visible World Bank, Lawphil, and IANA sources; operational numbers are labeled as planning examples rather than industry facts.