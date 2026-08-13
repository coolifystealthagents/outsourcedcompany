import { notFound } from 'next/navigation';
import { Header, Footer, CTA } from '../../components';
import { allResearchPosts } from '../../data';

export function generateStaticParams() { return allResearchPosts.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = allResearchPosts.find(x => x.slug === slug);
  return p ? { title: p.title, description: p.excerpt, alternates: { canonical: `https://outsourcedcompany.com/research/${p.slug}` } } : {};
}

export default async function ResearchPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = allResearchPosts.find(x => x.slug === slug);
  if (!p) notFound();
  const rich = p as typeof p & { displayDate?: string; keyStats?: Array<{ value: string; label: string; note: string }>; sections?: Array<{ heading: string; body: string[] }>; faqs?: Array<{ question: string; answer: string }> };
  return <><Header /><main className="section"><article className="container guide-article">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: p.title, datePublished: p.updated, dateModified: p.updated, mainEntityOfPage: `https://outsourcedcompany.com/research/${p.slug}` }) }} />
    <p className="eyebrow">Philippines staffing research · Updated <time dateTime={p.updated}>{rich.displayDate ?? new Date(`${p.updated}T00:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })}</time></p><h1>{p.title}</h1><p className="lead">{p.excerpt}</p>
    <img src={p.image} alt={p.imageAlt} style={{ width: '100%', height: 'auto', borderRadius: 12, margin: '1.5rem 0' }} />
    {rich.keyStats && <div className="cards">{rich.keyStats.map(s => <div className="card" key={s.label}><strong>{s.value}</strong><h2>{s.label}</h2><p>{s.note}</p></div>)}</div>}
    {p.body.map(x => <p key={x}>{x}</p>)}
    {rich.sections?.map(s => <section key={s.heading}><h2>{s.heading}</h2>{s.body.map(x => <p key={x}>{x}</p>)}</section>)}
    {rich.faqs && <section><h2>FAQs</h2>{rich.faqs.map(f => <div key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></div>)}</section>}
    <div className="card"><h2>Sources</h2><ol>{p.sources.map(s => <li key={s.href}><a href={s.href} rel="noreferrer">{s.label}</a></li>)}</ol><h2>Continue the research</h2><ul>{p.related.map(s => <li key={s.href}><a href={s.href}>{s.label}</a></li>)}</ul></div>
  </article><CTA /></main><Footer /></>;
}
