# October 2 Research qualitative integration audit

Status: failed pending substantive rewrite. The quantitative validator passes 5/5, 2,020–2,061 body words, 38.40% maximum five-word-shingle overlap, and zero repeated substantive paragraphs, but those metrics do not satisfy the qualitative gate.

## Blocking findings

- `app/article-research-batch-2026-10-02.ts` builds all five articles from the same imported `body(study)` method and applies noun substitutions at selected paragraph indexes. This is the shared-argument engine prohibited by the release contract.
- The shipment-damage study contains a grammatically and topically invalid scenario beginning “An report artifact quantity…” and discussing a warehouse quantity and payment approval.
- The cash-forecast supplement begins “Forecast input-specific system map” but inventories campaign platforms, CRM automations, webinar tools, audience destinations, agency senders, and marketing messages. This is cross-topic residue rather than cash-forecast research.
- Shared method sections follow substantially the same argument order even though the five research questions concern compensation disputes, report delivery, shipment evidence, forecast timing, and taxonomy drift.

## Required repair before push

Replace the shared imported method body with five independently authored bodies. Each must retain its registered population, unit, fields, outcome classes, decision boundary, sources, and limitations while using a topic-specific study design, failure analysis, scenario set, and reader decision. Rerun body length, shingle, repeated-paragraph, source-link, image, canonical, date, index, and sitemap validation after the rewrite. No Research article may count until this repair passes.
