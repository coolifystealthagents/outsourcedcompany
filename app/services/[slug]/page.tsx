import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer, JsonLd } from '../../components';
import { serviceDetails, getServiceDetail } from '../../service-details';

const base = 'https://outsourcedcompany.com';
export function generateStaticParams() { return serviceDetails.map(service => ({ slug: service.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const service = getServiceDetail(slug);
  if (!service) return { title: 'Service not found' };
  return { title: `${service.title} | Outsourced Company`, description: service.summary, alternates: { canonical: `/services/${service.slug}` }, openGraph: { title: service.title, description: service.summary, url: `${base}/services/${service.slug}`, type: 'website' } };
}

function ListSection({ id, title, items }: { id: string; title: string; items: readonly string[] }) {
  return <section id={id} className="service-detail-section"><h2>{title}</h2><ul className="service-detail-list">{items.map(item => <li key={item}>{item}</li>)}</ul></section>;
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const service = getServiceDetail(slug); if (!service) notFound();
  const related = service.related.map(getServiceDetail).filter(Boolean);
  return <><Header/><main id="main-content" className="service-detail-main">
    <JsonLd data={{ '@context':'https://schema.org', '@type':'Service', name:service.title, description:service.summary, url:`${base}/services/${service.slug}`, areaServed:'Philippines', provider:{'@type':'Organization',name:'Outsourced Company',url:base} }}/>
    <section className="service-detail-hero"><div className="container service-detail-hero-grid"><div><p className="eyebrow">Operational role plan · Philippines</p><h1>{service.title}</h1><p className="lead">{service.summary}</p><div className="service-hero-actions"><a className="btn primary" href="/contact-us">Discuss this role</a><a className="text-link" href="#scope">Review the operating scope</a></div></div><figure><img src={service.heroImage} alt={service.heroAlt}/><figcaption>Plan access, evidence, and approvals before live work begins.</figcaption></figure></div></section>
    <div className="container service-document-grid"><aside className="service-toc" aria-label="On this service page"><strong>Working paper</strong>{[['who','Who this is for'],['problem','The problem'],['scope','Scope'],['inputs','Inputs'],['workflow','Workflow'],['deliverables','Deliverables'],['boundaries','Boundaries and human decisions'],['controls','Quality controls'],['scenarios','Starting scenarios'],['faq','Frequently asked questions'],['related','Related services']].map(([id,label])=><a href={`#${id}`} key={id}>{label}</a>)}</aside>
      <article className="service-detail-content">
        <ListSection id="who" title="Who this is for" items={service.audience}/>
        <section id="problem" className="service-detail-section"><h2>The problem</h2><p>{service.problem}</p></section>
        <ListSection id="scope" title="Scope" items={service.scope}/>
        <ListSection id="inputs" title="Inputs" items={service.inputs}/>
        <section id="workflow" className="service-detail-section"><h2>Workflow</h2><ol className="workflow-grid">{service.workflow.map((step,index)=><li key={step.title}><span>Stage {index+1}</span><h3>{step.title}</h3><p>{step.detail}</p></li>)}</ol></section>
        <ListSection id="deliverables" title="Deliverables" items={service.deliverables}/>
        <ListSection id="boundaries" title="Boundaries and human decisions" items={service.boundaries}/>
        <ListSection id="controls" title="Quality controls" items={service.controls}/>
        <section id="scenarios" className="service-detail-section"><h2>Starting scenarios</h2><div className="scenario-grid">{service.scenarios.map(item=><article key={item.title}><h3>{item.title}</h3><p>{item.detail}</p></article>)}</div></section>
        <section id="faq" className="service-detail-section"><h2>Frequently asked questions</h2>{service.faqs.map(item=><details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</section>
        <section id="related" className="service-detail-section"><h2>Related services</h2><div className="related-grid">{related.map(item=>item&&<a href={`/services/${item.slug}`} key={item.slug}><strong>{item.title}</strong><span>{item.summary}</span></a>)}</div></section>
        <section className="service-handoff"><p className="eyebrow">Operational handoff canvas</p><h2>Bring one real queue to the intake.</h2><p>Share representative work, the tools involved, the schedule, and the decisions that must remain with your team. We’ll use those inputs to discuss a bounded role.</p><a className="btn primary" href="/contact-us">Contact Us</a></section>
      </article>
    </div>
  </main><Footer/></>;
}
