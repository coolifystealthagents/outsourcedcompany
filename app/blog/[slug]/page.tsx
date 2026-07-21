import { Header, Footer, CTA, JsonLd } from '../../components';
import { blogDetails, blogPosts, guideDetails, site } from '../../data';

export function generateStaticParams(){
  return blogPosts.map((p)=>({slug:p.slug}));
}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const p=blogPosts.find((x)=>x.slug===slug);
  return {title:p?.title||'Guide',description:p?.excerpt};
}

export default async function Post({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const p=blogPosts.find((x)=>x.slug===slug)||blogPosts[0];
  const details = blogDetails[slug as keyof typeof blogDetails] as any;
  const guide = guideDetails[slug as keyof typeof guideDetails];
  const base = `https://${site.domain.toLowerCase()}`;
  const url = `${base}/blog/${p.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Article', 'BlogPosting'],
        headline: p.title,
        description: p.excerpt,
        url,
        datePublished: details?.updated,
        dateModified: details?.updated,
        author: { '@type': 'Organization', name: site.brand, url: base },
        publisher: { '@type': 'Organization', name: site.brand, url: base },
        mainEntityOfPage: url,
        citation: details?.sources?.map((source: any)=>source.url),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: base },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${base}/blog` },
          { '@type': 'ListItem', position: 3, name: p.title, item: url },
        ],
      },
      ...(details ? [{
        '@type': 'FAQPage',
        mainEntity: details.faqs.map((faq: any)=>({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      }] : []),
    ],
  };

  return <>
    <Header/>
    <main className='section'>
      <JsonLd data={schema} />
      <article className='container' style={{maxWidth:920}}>
        <p className='eyebrow'>{site.brand} guide</p>
        <h1>{p.title}</h1>
        <p className='lead'>{p.excerpt}</p>
        {details ? <>
          <div className='card'>
            <h2>The short answer</h2>
            <p>{details.takeaway}</p>
          </div>
          {details.stats ? <section className='article-stats' aria-label='Philippines outsourcing numbers'>
            {details.stats.map((stat: any)=><div key={stat.label}>
              <strong>{stat.value}</strong>
              <h2>{stat.label}</h2>
              <p>{stat.note}</p>
            </div>)}
          </section> : null}
          <div className='cards' style={{gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',margin:'24px 0'}}>
            {details.comparison.map((row: any)=><div className='card' key={row.weak}>
              <p className='eyebrow'>Weak answer</p>
              <p>"{row.weak}"</p>
              <p className='eyebrow'>Better answer</p>
              <p><b>{row.strong}</b></p>
            </div>)}
          </div>
          <div className='card'>
            {details.sections.map((section: any)=><section key={section.heading} style={{marginBottom:22}}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </section>)}
          </div>
          {details.decisionTable ? <section className='card article-table-wrap'>
            <h2>{details.decisionTable.heading}</h2>
            <p>{details.decisionTable.intro}</p>
            <table className='article-table'>
              <thead><tr>{details.decisionTable.columns.map((column: string)=><th key={column} scope='col'>{column}</th>)}</tr></thead>
              <tbody>{details.decisionTable.rows.map((row: string[])=><tr key={row[0]}>{row.map((cell, index)=><td key={cell}>{index === 0 ? <strong>{cell}</strong> : cell}</td>)}</tr>)}</tbody>
            </table>
          </section> : null}
          {details.workflow ? <section className='card'>
            <h2>A realistic 30-day workflow</h2>
            <div className='article-workflow'>{details.workflow.map((item: any)=><div key={item.step}>
              <span>{item.step}</span><div><h3>{item.title}</h3><p>{item.body}</p></div>
            </div>)}</div>
          </section> : null}
          <div className='card'>
            <h2>Copy-ready questions for the sales call</h2>
            <ul className='list article-scripts'>{details.script.map((line: string)=><li key={line}>"{line}"</li>)}</ul>
          </div>
          <div className='card'>
            <h2>Sources used</h2>
            <ul className='list'>{details.sources.map((source: any)=><li key={source.url}><a className='source-link' href={source.url} rel='noreferrer'>{source.name}</a>: {source.note}</li>)}</ul>
          </div>
          <div className='card'>
            <h2>FAQ</h2>
            {details.faqs.map((faq: any)=><div key={faq.question} style={{marginBottom:18}}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}
          </div>
          {details.relatedLinks ? <nav className='card' aria-label='Related guides and services'>
            <h2>Related guides and services</h2>
            <ul className='list related-links'>{details.relatedLinks.map((link: any)=><li key={link.href}><a href={link.href}>{link.label}</a></li>)}</ul>
          </nav> : null}
        </> : <div className='card'>
          <h2>The short answer</h2>
          <p>{guide.answer}</p>
          <h2>What to prepare</h2>
          <ul>{guide.prepare.map((item)=><li key={item}>{item}</li>)}</ul>
          <h2>Questions for your team</h2>
          <ul>{guide.questions.map((item)=><li key={item}>{item}</li>)}</ul>
        </div>}
      </article>
      <CTA/>
    </main>
    <Footer/>
  </>;
}
