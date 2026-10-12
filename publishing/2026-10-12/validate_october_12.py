#!/usr/bin/env python3
"""Scoped contract validator for OutsourcedCompany's October 12 release."""

import hashlib
import json
import re
import sys
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
errors = []


def check(condition, message):
    if not condition:
        errors.append(message)


def read(relative):
    return (ROOT / relative).read_text()


def extract(text, prefix):
    start = text.find(prefix)
    end = text.find(" as const;", start + len(prefix))
    if start < 0 or end < 0:
        raise ValueError(f"cannot extract {prefix}")
    return json.loads(text[start + len(prefix):end])


def normalized(text):
    return re.sub(r"[^a-z0-9]+", " ", text.lower()).strip()


blog_text = read("app/article-blog-2026-10-12.ts")
research_text = read("app/article-research-batch-2026-10-12.ts")
blogs = extract(blog_text, "export const blogPosts2026_10_12 = ")
details = extract(blog_text, "export const blogDetails2026_10_12 = ")
research = extract(research_text, "export const researchPosts2026_10_12 = ")
manifest = json.loads(read("publishing/2026-10-12/manifest.json"))

check(manifest.get("site") == "OutsourcedCompany.com", "manifest site mismatch")
check(manifest.get("date") == "2026-10-12", "manifest date mismatch")
check(len(blogs) == 12 and len(details) == 12, f"expected 12 Blog records/bodies, found {len(blogs)}/{len(details)}")
check(len(research) == 5, f"expected 5 Research records, found {len(research)}")
check(len(manifest.get("blog", [])) == 12 and len(manifest.get("research", [])) == 5, "manifest must contain 12 Blog + 5 Research")

all_records = [(item, "blog", details.get(item.get("slug"), {}).get("image")) for item in blogs] + [(item, "research", item.get("image")) for item in research]
check(len({item[0].get("slug") for item in all_records}) == 17, "slugs are not unique")
check(len({item[0].get("title") for item in all_records}) == 17, "titles are not unique")
check(len({item[2] for item in all_records}) == 17, "thumbnail paths are not unique")
date_pattern = re.compile(r"\b(?:2026|oct(?:ober)?\s+12)\b", re.I)
paragraphs = []

for item in blogs:
    slug = item.get("slug", "unknown")
    body = details.get(slug)
    check(body is not None, f"{slug}: Blog body missing")
    if body is None:
        continue
    check(body.get("updated") == "2026-10-12" and body.get("datePublished") == "2026-10-12", f"{slug}: Blog date mismatch")
    check(not date_pattern.search(item.get("title", "")), f"{slug}: title contains publication date")
    check(len(body.get("sections", [])) == 10, f"{slug}: expected 10 Blog sections")
    check(all(len(section.get("body", [])) == 1 and len(section["body"][0]) >= 650 for section in body.get("sections", [])), f"{slug}: thin Blog section")
    check(len(body.get("sources", [])) >= 4 and all(source.get("url", "").startswith("https://") for source in body.get("sources", [])), f"{slug}: Blog source depth invalid")
    check(len(body.get("faqs", [])) == 4 and len(body.get("script", [])) == 4, f"{slug}: Blog FAQ/script depth invalid")
    check(len(body.get("relatedLinks", [])) == 3 and any(link.get("href", "").startswith("/services/") for link in body.get("relatedLinks", [])), f"{slug}: Blog related/service links invalid")
    check(len(body.get("banners", [])) >= 1, f"{slug}: Blog sidebar banner missing")
    entry = next((record for record in manifest["blog"] if record.get("slug") == slug), None)
    check(entry and entry.get("title") == item.get("title") and entry.get("route") == f"/blog/{slug}" and entry.get("thumbnail") == body.get("image"), f"{slug}: Blog manifest mismatch")
    paragraphs.extend((slug, section["body"][0]) for section in body.get("sections", []))

research_slugs = {item.get("slug") for item in research}
authority_hosts = ("nist.gov", "cisa.gov", "gao.gov", "psa.gov.ph", "ilo.org", "worldbank.org", "itu.int", "w3.org")
for item in research:
    slug = item.get("slug", "unknown")
    check(item.get("updated") == "2026-10-12" and item.get("datePublished") == "2026-10-12" and item.get("displayDate") == "October 12, 2026", f"{slug}: Research date mismatch")
    check(not date_pattern.search(item.get("title", "")), f"{slug}: title contains publication date")
    check(len(item.get("body", [])) == 12 and all(len(paragraph) >= 550 for paragraph in item.get("body", [])), f"{slug}: Research depth invalid")
    sources = item.get("sources", [])
    check(len(sources) >= 10 and all(source.get("href", "").startswith("https://") for source in sources), f"{slug}: requires 10 authoritative HTTPS sources")
    check(len({source.get("href") for source in sources}) == len(sources), f"{slug}: duplicate Research source")
    check(all(any(host in source.get("href", "") for host in authority_hosts) for source in sources), f"{slug}: unrecognized Research source authority")
    internal_related = [link for link in item.get("related", []) if link.get("href", "").startswith("/research/")]
    check(len(internal_related) == 3 and all(link["href"].split("/")[-1] in research_slugs and link["href"].split("/")[-1] != slug for link in internal_related), f"{slug}: related Research invalid")
    check(any(link.get("href") == "/contact-us" for link in item.get("related", [])), f"{slug}: Research service handoff missing")
    entry = next((record for record in manifest["research"] if record.get("slug") == slug), None)
    check(entry and entry.get("title") == item.get("title") and entry.get("route") == f"/research/{slug}" and entry.get("thumbnail") == item.get("image"), f"{slug}: Research manifest mismatch")
    paragraphs.extend((slug, paragraph) for paragraph in item.get("body", []))

seen = {}
for slug, paragraph in paragraphs:
    key = normalized(paragraph)
    if len(key) < 160:
        continue
    if key in seen:
        errors.append(f"duplicate substantive paragraph: {seen[key]} and {slug}")
    else:
        seen[key] = slug

old_files = [path for path in (ROOT / "app").rglob("*") if path.is_file() and path.suffix in {".ts", ".tsx", ".json"} and path.name not in {"article-blog-2026-10-12.ts", "article-research-batch-2026-10-12.ts"}]
old_source = "\n".join(path.read_text(errors="ignore") for path in old_files)
for item, _, _ in all_records:
    check(f'"{item["slug"]}"' not in old_source and f"'{item['slug']}'" not in old_source, f"{item['slug']}: slug collision")
    check(f'"{item["title"]}"' not in old_source and f"'{item['title']}'" not in old_source, f"{item['slug']}: title collision")
for slug, paragraph in paragraphs:
    check(paragraph not in old_source, f"{slug}: substantive paragraph duplicates existing repository content")

data = read("app/data.ts")
check(data.count("import { blogPosts2026_10_12, blogDetails2026_10_12 } from './article-blog-2026-10-12';") == 1, "Blog import invalid")
check(data.count("import { researchPosts2026_10_12 } from './article-research-batch-2026-10-12';") == 1, "Research import invalid")
check(data.count("...blogPosts2026_10_12") == 1 and data.count("...blogDetails2026_10_12") == 1, "Blog registry integration invalid")
check(data.count("researchPosts2026_10_12") == 2, "Research registry integration invalid")
check(data.count("blogPosts2026_10_08") == 2 and data.count("blogDetails2026_10_08") == 2, "pre-existing October 8 Blog integration changed")
check(data.count("researchPosts2026_10_08") == 2, "pre-existing October 8 Research integration changed")

blog_route = read("app/blog/[slug]/page.tsx")
blog_index = read("app/blog/page.tsx")
research_route = read("app/research/[slug]/page.tsx")
research_index = read("app/research/page.tsx")
sitemap = read("app/sitemap.xml/route.ts")
check("<time dateTime={details.updated}>Published" in blog_route and "details?.image" in blog_route, "Blog route lacks visible date or custom thumbnail")
check("details.relatedLinks" in blog_route and "details.banners" in blog_route and "<aside" in blog_route, "Blog route lacks related/sidebar behavior")
check("allBlogPosts" in blog_index and "Published" in blog_index, "Blog index/date integration missing")
check("Philippines staffing research · Published" in research_route and "datePublished" in research_route and "p.image" in research_route, "Research route lacks visible publication date or thumbnail")
check("p.related" in research_route and "<aside" in research_route, "Research route lacks related/sidebar behavior")
check("allResearchPosts" in research_index and "Published" in research_index, "Research index/date integration missing")
check("allBlogPosts.map" in sitemap and "allResearchPosts.map" in sitemap, "sitemap lacks separate Blog/Research registries")

hashes = []
for item, _, image_path in all_records:
    target = ROOT / "public" / image_path.lstrip("/")
    check(target.exists(), f"{item['slug']}: thumbnail missing")
    if not target.exists():
        continue
    with Image.open(target) as image:
        check(image.size == (1536, 1024), f"{item['slug']}: expected 1536x1024, found {image.size}")
        check(image.format == "WEBP", f"{item['slug']}: expected WEBP, found {image.format}")
    hashes.append(hashlib.sha256(target.read_bytes()).hexdigest())
check(len(set(hashes)) == 17, "thumbnail hashes are not unique")
renderer = read("publishing/2026-10-12/render_thumbnails.py")
check('item["title"]' in renderer and "OCTOBER 12" not in renderer and "2026-10-12" not in renderer, "renderer must use exact titles without date text")

if errors:
    print(f"FAIL ({len(errors)})")
    for error in errors:
        print(f"- {error}")
    sys.exit(1)
print("PASS: 12 Blog + 5 Research; dates, sources, registries, routes, related systems, prose, and 17 thumbnails verified.")
