'use client';

import { useEffect, useState } from 'react';

export type TocItem = { id: string; label: string };

export function ArticleSidebar({ items, family, updated, related }: { items: TocItem[]; family: string; updated?: string; related?: { href: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id ?? '');
  useEffect(() => {
    const headings = items.map(item => document.getElementById(item.id)).filter((node): node is HTMLElement => Boolean(node));
    if (!headings.length) return;
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]?.target.id) setActive(visible[0].target.id);
    }, { rootMargin: '-100px 0px -65% 0px', threshold: [0, 1] });
    headings.forEach(heading => observer.observe(heading));
    return () => observer.disconnect();
  }, [items]);

  return <aside className="article-sidebar" aria-label="Article navigation and details">
    <details className="article-toc-disclosure"><summary>Table of contents</summary>
      <nav aria-label="Table of contents">{items.map(item => <a key={item.id} href={`#${item.id}`} onClick={(event) => { const d = event.currentTarget.closest('details'); if (d) d.removeAttribute('open'); }} aria-current={active === item.id ? 'location' : undefined}>{item.label}</a>)}</nav>
    </details>
    <section className="article-side-module"><h2>Article details</h2><dl><div><dt>Publisher</dt><dd>Outsourced Company</dd></div><div><dt>Collection</dt><dd>{family}</dd></div>{updated ? <div><dt>Updated</dt><dd>{updated}</dd></div> : null}</dl></section>
    {related?.length ? <nav className="article-side-module" aria-label="Related reading"><h2>Related reading</h2>{related.slice(0,3).map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</nav> : null}
    <section className="article-side-module article-side-cta"><h2>Planning a role?</h2><p>Bring the queue, tools, review rules, and human decisions to the staffing intake.</p><a href="/contact-us">Contact Us</a></section>
  </aside>;
}
