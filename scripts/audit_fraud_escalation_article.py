#!/usr/bin/env python3
import json
import re
import sys
from html.parser import HTMLParser
from pathlib import Path

SLUG = 'philippines-outsourcing-fraud-escalation-checklist'
MARKER = 'philippines-outsourcing-fraud-escalation-2026'
OLD_SLUG = 'philippines-outsourcing-quality-assurance-checklist'
OLD_MARKER = 'philippines-outsourcing-qa-checklist-2026'

class AuditParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack = []
        self.article_depth = None
        self.in_ignored = 0
        self.text = []
        self.page_text = []
        self.h1 = []
        self.current_h1 = False
        self.links = []
        self.banner_count = 0
        self.tables = 0
        self.visuals = []
        self.methods = 0
        self.quotes = 0
        self.narratives = []
        self.current_narrative = None
        self.json_ld = []
        self.current_json = None
        self.article_marker = None

    @property
    def in_article(self):
        return self.article_depth is not None and len(self.stack) >= self.article_depth

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        self.stack.append(tag)
        classes = set((attrs.get('class') or '').split())
        if tag == 'article' and attrs.get('data-article-marker'):
            self.article_depth = len(self.stack)
            self.article_marker = attrs.get('data-article-marker')
        if tag in {'script', 'style', 'noscript'}:
            self.in_ignored += 1
        if tag == 'script' and attrs.get('type') == 'application/ld+json':
            self.current_json = []
        if self.in_article:
            if tag == 'h1': self.current_h1 = True
            if tag == 'a': self.links.append(attrs.get('href', ''))
            if 'article-rotating-banner' in classes and 'data-rotating-banner' in attrs: self.banner_count += 1
            if tag == 'table': self.tables += 1
            if 'article-visual' in classes: self.visuals.append(attrs.get('data-visual', ''))
            if 'visual-methods' in classes: self.methods += 1
            if tag == 'blockquote': self.quotes += 1
            if 'article-narrative' in classes: self.current_narrative = []

    def handle_endtag(self, tag):
        if tag == 'script' and self.current_json is not None:
            raw = ''.join(self.current_json).strip()
            if raw:
                try: self.json_ld.append(json.loads(raw))
                except json.JSONDecodeError: pass
            self.current_json = None
        if self.in_article:
            if tag == 'h1': self.current_h1 = False
            if tag == 'p' and self.current_narrative is not None:
                self.narratives.append(' '.join(self.current_narrative))
                self.current_narrative = None
        if tag in {'script', 'style', 'noscript'} and self.in_ignored:
            self.in_ignored -= 1
        if self.article_depth is not None and len(self.stack) == self.article_depth and tag == 'article':
            self.article_depth = None
        if self.stack: self.stack.pop()

    def handle_data(self, data):
        if self.current_json is not None:
            self.current_json.append(data)
        if not self.in_ignored:
            clean = re.sub(r'\s+', ' ', data).strip()
            if clean: self.page_text.append(clean)
            if self.in_article and clean:
                self.text.append(clean)
                if self.current_h1: self.h1.append(clean)
                if self.current_narrative is not None: self.current_narrative.append(clean)

def parse(path):
    p = AuditParser()
    p.feed(Path(path).read_text(encoding='utf-8'))
    return p

def schema_types(nodes):
    found = set()
    def walk(x):
        if isinstance(x, dict):
            t = x.get('@type')
            if isinstance(t, list): found.update(t)
            elif isinstance(t, str): found.add(t)
            for v in x.values(): walk(v)
        elif isinstance(x, list):
            for v in x: walk(v)
    walk(nodes)
    return found

def sentences(text):
    normalized = re.sub(r'\b(?:Dr|No|Rev)\.', lambda m: m.group(0)[:-1], text)
    return [x for x in re.split(r'(?<=[.!?])\s+', normalized.strip()) if x]

root = Path('.next/server/app/blog')
new_path = root / f'{SLUG}.html'
old_path = root / f'{OLD_SLUG}.html'
if not new_path.exists() or not old_path.exists():
    print(json.dumps({'ok': False, 'error': 'built article artifacts missing'}))
    sys.exit(1)

p = parse(new_path)
old = parse(old_path)
article_text = ' '.join(p.text)
page_text = ' '.join(p.page_text)
words = re.findall(r"\b[\w’'-]+\b", article_text)
internal = [x for x in p.links if x.startswith('/')]
external = [x for x in p.links if x.startswith('http')]
paragraph_counts = [len(sentences(x)) for x in p.narratives]
types = schema_types(p.json_ld)
checks = {
    'marker': p.article_marker == MARKER,
    'h1': ' '.join(p.h1) == 'Philippines outsourcing fraud escalation checklist',
    'words_1500_2000': 1500 <= len(words) <= 2000,
    'exact_three_banners': p.banner_count == 3,
    'table': p.tables >= 1,
    'two_distinct_visuals': len(p.visuals) == 2 and len(set(p.visuals)) == 2,
    'methods_note': p.methods == 1 and 'Method:' in article_text,
    'exact_quote': p.quotes == 1 and 'The data we’re releasing today shows that scammers’ tactics are constantly evolving' in article_text,
    'dated_stats': all(x in article_text for x in ['$12.5B', '25%', '38%', '59.55%']),
    'internal_links': len(set(internal)) >= 3,
    'external_links': len(set(external)) >= 4,
    'numbered_sources': all(f'Source {n}' in article_text for n in (1, 2)),
    'schemas': {'Article', 'BlogPosting', 'FAQPage', 'BreadcrumbList'}.issubset(types),
    'paragraphs_two_or_three_sentences': bool(paragraph_counts) and all(n in (2, 3) for n in paragraph_counts),
    'no_commercial_terms': not re.search(r'\b(?:pricing|rates|tiers)\b', page_text, re.I) and not any('/pricing' in x for x in p.links),
    'philippines_scope': 'Philippines' in article_text and 'Filipino' in article_text,
    'old_route_regression': old.article_marker == OLD_MARKER and 'Define a good result before you sample it' in ' '.join(old.text),
}
result = {
    'ok': all(checks.values()),
    'slug': SLUG,
    'word_count': len(words),
    'banner_count': p.banner_count,
    'internal_links': len(set(internal)),
    'external_links': len(set(external)),
    'visuals': p.visuals,
    'paragraph_sentence_counts': paragraph_counts,
    'checks': checks,
}
print(json.dumps(result, indent=2, sort_keys=True))
sys.exit(0 if result['ok'] else 1)
