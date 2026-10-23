import { notFound } from 'next/navigation';
import { Header, Footer, CTA } from '../../components';
import { ArticleSidebar, type TocItem } from '../../article-sidebar';
import { allResearchPosts } from '../../data';

const headingId = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
export function generateStaticParams() { return allResearchPosts.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const p = allResearchPosts.find(x => x.slug === slug);
  return p ? { title: p.title, description: p.excerpt, alternates: { canonical: `https://outsourcedcompany.com/research/${p.slug}` }, openGraph: { title: p.title, description: p.excerpt, url: `https://outsourcedcompany.com/research/${p.slug}`, type: 'article', publishedTime: (p as typeof p & { datePublished?: string }).datePublished ?? p.updated, modifiedTime: p.updated, images: [p.image] } } : {};
}
export default async function ResearchPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const p = allResearchPosts.find(x => x.slug === slug); if (!p) notFound();
  const rich = p as typeof p & { keyStats?: Array<{ value: string; label: string; note: string }>; sections?: Array<{ heading: string; body: string[] }>; faqs?: Array<{ question: string; answer: string }> };
  const toc: TocItem[] = [{ id:'findings', label:'Research findings' }, { id:'discussion', label:'Discussion' }, { id:'limits', label:'Implications and limits' }, ...(rich.sections ?? []).map((s: { heading: string }) => ({ id:headingId(s.heading), label:s.heading })), ...(rich.faqs ? [{ id:'questions', label:'Questions' }] : []), { id:'sources', label:'Sources and related reports' }, { id:'related-research', label:'Related research' }];
  const published = (p as typeof p & { datePublished?: string }).datePublished ?? p.updated;
  return <><Header/><main id="main-content" className="section"><article className="container guide-article">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context':'https://schema.org','@type':'Article',headline:p.title,datePublished:published,dateModified:p.updated,mainEntityOfPage:`https://outsourcedcompany.com/research/${p.slug}` }) }}/>
    <p className="eyebrow">Philippines staffing research · Published <time dateTime={published}>{new Date(`${published}T00:00:00Z`).toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric',timeZone:'UTC'})}</time> · Updated <time dateTime={p.updated}>{new Date(`${p.updated}T00:00:00Z`).toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric',timeZone:'UTC'})}</time></p>
    <h1>{p.title}</h1><p className="lead">{p.excerpt}</p><img src={p.image} alt={p.imageAlt} width="1536" height="1024" className="article-hero-image"/>
    <div className="article-layout"><ArticleSidebar items={toc} family="Research" updated={p.updated} related={(p.related as any) ?? []}/><div className="article-reading">
      <section><h2 id="findings">Research findings</h2>{rich.keyStats ? <div className="cards">{rich.keyStats.map((s: { value: string; label: string; note: string }) => <div className="card" key={s.label}><strong>{s.value}</strong><h3>{s.label}</h3><p>{s.note}</p></div>)}</div> : null}{p.body.slice(0, Math.max(1, Math.floor(p.body.length / 2))).map((x: string) => <p key={x}>{x}</p>)}</section><section><h2 id="discussion">Discussion</h2>{p.body.slice(Math.max(1, Math.floor(p.body.length / 2)), Math.max(2, p.body.length - 3)).map((x: string) => <p key={x}>{x}</p>)}</section><section><h2 id="limits">Implications and limits</h2>{p.body.slice(Math.max(2, p.body.length - 3)).map((x: string) => <p key={x}>{x}</p>)}</section>
      {rich.sections?.map((s: { heading: string; body: string[] }) => <section id={headingId(s.heading)} key={s.heading}><h2>{s.heading}</h2>{s.body.map((x: string) => <p key={x}>{x}</p>)}</section>)}
      {rich.faqs ? <section id="questions"><h2>Questions</h2>{rich.faqs.map((f: { question: string; answer: string }) => <div key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></div>)}</section> : null}
      <aside className="card" aria-label="Research sources and related reports"><h2 id="sources">Sources</h2><ol>{p.sources.map((s: { href: string; label: string }) => <li key={s.href}><a href={s.href} rel="noreferrer">{s.label}</a></li>)}</ol><h2 id="related-research">Continue the research</h2><ul>{(p.related ?? []).map((s: { href: string; label: string }) => <li key={s.href}><a href={s.href}>{s.label}</a></li>)}</ul></aside>
    </div></div>
  </article><CTA/></main><Footer/></>;
}
