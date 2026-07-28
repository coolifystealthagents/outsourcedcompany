import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { blogDetails, blogPosts, guideDetails, site } from '../../data';

const base = `https://${site.domain.toLowerCase()}`;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) return { title: 'Guide not found' };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: 'article',
    },
  };
}

function paragraphChunks(body: string | readonly string[]) {
  const paragraphs: readonly string[] = typeof body === 'string' ? [body] : body;

  return paragraphs.flatMap((paragraph: string) => {
    const sentences = paragraph.match(/[^.!?]+[.!?]+(?:["']|$)?|[^.!?]+$/g)?.map((sentence: string) => sentence.trim()) ?? [paragraph];
    const chunks: string[] = [];

    let index = 0;
    while (index < sentences.length) {
      const remaining = sentences.length - index;
      const size = remaining === 4 ? 2 : Math.min(3, remaining);
      chunks.push(sentences.slice(index, index + size).join(' '));
      index += size;
    }

    return chunks;
  });
}

function ArticleChart({ chart }: { chart: any }) {
  return <section className="card article-visual" data-visual="service-employment-chart" tabIndex={0} aria-label={`${chart.title}. Scroll horizontally on a small screen to view the full chart.`}>
    <h2>{chart.title}</h2>
    <p className="visual-swipe-cue">Swipe to view the full chart.</p>
    <svg role="img" viewBox="0 0 760 380" aria-labelledby="service-chart-title service-chart-desc">
      <title id="service-chart-title">{chart.title}</title>
      <desc id="service-chart-desc">{chart.description}</desc>
      <line x1="70" y1="310" x2="730" y2="310" className="chart-axis" />
      {[55, 60].map((tick) => {
        const y = 310 - ((tick - 50) * 25);
        return <g key={tick}><line x1="70" y1={y} x2="730" y2={y} className="chart-grid" /><text x="58" y={y + 5} textAnchor="end">{tick}%</text></g>;
      })}
      {chart.data.map((item: any, index: number) => {
        const height = (item.value - 50) * 25;
        const x = 105 + index * 125;
        const y = 310 - height;
        return <g key={item.year}>
          <rect x={x} y={y} width="74" height={height} rx="4" className="chart-bar" />
          <text x={x + 37} y={y - 10} textAnchor="middle" className="chart-value">{item.value.toFixed(2)}%</text>
          <text x={x + 37} y="338" textAnchor="middle">{item.year}</text>
        </g>;
      })}
    </svg>
    <p className="visual-methods">{chart.methods}</p>
  </section>;
}

function ProcessGraphic({ graphic }: { graphic: any }) {
  return <section className="card article-visual" data-visual="customer-case-path" tabIndex={0} aria-label={`${graphic.title}. Scroll horizontally on a small screen to view the full graphic.`}>
    <h2>{graphic.title}</h2>
    <p className="visual-swipe-cue">Swipe to view the full graphic.</p>
    <svg role="img" viewBox="0 0 840 260" aria-labelledby="case-path-title case-path-desc">
      <title id="case-path-title">{graphic.title}</title>
      <desc id="case-path-desc">{graphic.description}</desc>
      {graphic.steps.map((step: any, index: number) => {
        const x = 20 + index * 205;
        return <g key={step.label}>
          <rect x={x} y="48" width="170" height="142" rx="8" className="process-box" />
          <text x={x + 18} y="84" className="process-label">{step.label}</text>
          <foreignObject x={x + 18} y="100" width="134" height="72"><p className="process-note">{step.note}</p></foreignObject>
          {index < graphic.steps.length - 1 ? <path d={`M ${x + 174} 119 H ${x + 198}`} className="process-arrow" /> : null}
        </g>;
      })}
    </svg>
  </section>;
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) notFound();

  const details = blogDetails[slug as keyof typeof blogDetails] as any;
  const guide = guideDetails[slug as keyof typeof guideDetails] as any;
  const url = `${base}/blog/${post.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Article', 'BlogPosting'],
        headline: post.title,
        description: post.excerpt,
        url,
        ...(details?.updated ? { datePublished: details.updated, dateModified: details.updated } : {}),
        author: { '@type': 'Organization', name: site.brand, url: base },
        publisher: { '@type': 'Organization', name: site.brand, url: base },
        mainEntityOfPage: url,
        ...(details?.sources ? { citation: details.sources.map((source: any) => source.url) } : {}),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: base },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${base}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: url },
        ],
      },
      ...(details?.faqs ? [{
        '@type': 'FAQPage',
        mainEntity: details.faqs.map((faq: any) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      }] : []),
    ],
  };

  return <>
    <Header hideCommercialTerms />
    <main className="section">
      <JsonLd data={schema} />
      <article className="container guide-article" data-article-marker={details?.marker}>
        <p className="eyebrow">Philippines staffing guide</p>
        <h1>{post.title}</h1>
        <p className="lead">{post.excerpt}</p>

        {details ? <>
          <section className="card">
            <h2>The short answer</h2>
            <p>{details.takeaway}</p>
          </section>

          {details.stats ? <section className="article-stats" aria-label="Philippines outsourcing numbers">
            {details.stats.map((stat: any) => <div key={stat.label}>
              <strong>{stat.value}</strong>
              <h2>{stat.label}</h2>
              <p>{stat.note}</p>
            </div>)}
          </section> : null}

          <section className="cards" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', margin: '24px 0' }} aria-label="Weak and useful provider answers">
            {details.comparison.map((row: any) => <div className="card" key={row.weak}>
              <p className="eyebrow">Weak answer</p>
              <p>"{row.weak}"</p>
              <p className="eyebrow">Useful answer</p>
              <p><strong>{row.strong}</strong></p>
            </div>)}
          </section>

          <div className="card">
            {details.sections.map((section: any) => <section key={section.heading} style={{ marginBottom: 22 }}>
              <h2>{section.heading}</h2>
              {paragraphChunks(section.body).map((paragraph, index) => <p className="article-narrative" key={`${section.heading}-${index}`}>{paragraph}</p>)}
            </section>)}
          </div>

          {details.decisionTable ? <section className="card article-table-wrap" tabIndex={0} aria-label={`${details.decisionTable.heading}. Scroll horizontally on a small screen to view all columns.`}>
            <h2>{details.decisionTable.heading}</h2>
            <p className="visual-swipe-cue">Swipe to view all columns.</p>
            <p>{details.decisionTable.intro}</p>
            <table className="article-table">
              <thead><tr>{details.decisionTable.columns.map((column: string) => <th key={column} scope="col">{column}</th>)}</tr></thead>
              <tbody>{details.decisionTable.rows.map((row: string[]) => <tr key={row[0]}>{row.map((cell, index) => <td key={cell}>{index === 0 ? <strong>{cell}</strong> : cell}</td>)}</tr>)}</tbody>
            </table>
          </section> : null}

          {details.expertQuote ? <figure className="article-quote">
            <blockquote>“{details.expertQuote.text}”</blockquote>
            <figcaption>{details.expertQuote.attribution}. Source {details.expertQuote.sourceNumber}.</figcaption>
          </figure> : null}

          {details.chart ? <ArticleChart chart={details.chart} /> : null}

          {details.processGraphic ? <ProcessGraphic graphic={details.processGraphic} /> : null}

          {details.banners ? <section className="article-banner-stack" aria-label="Staffing planning next steps">
            {details.banners.map((banner: any) => <aside className="article-rotating-banner" data-rotating-banner key={banner.heading}>
              <div><p className="eyebrow">{banner.eyebrow}</p><h2>{banner.heading}</h2><p>{banner.body}</p></div>
              <a className="btn primary" href={banner.href}>{banner.label}</a>
            </aside>)}
          </section> : null}

          {details.workflow ? <section className="card">
            <h2>A realistic 30-day plan</h2>
            <div className="article-workflow">{details.workflow.map((item: any) => <div key={item.step}>
              <span>{item.step}</span><div><h3>{item.title}</h3><p>{item.body}</p></div>
            </div>)}</div>
          </section> : null}

          <section className="card">
            <h2>Questions to copy for the sales call</h2>
            <ul className="list article-scripts">{details.script.map((line: string) => <li key={line}>"{line}"</li>)}</ul>
          </section>

          <section className="card">
            <h2>Sources</h2>
            {details.sourcesNumbered
              ? <ol className="list numbered-sources">{details.sources.map((source: any) => <li key={source.url}><a className="source-link" href={source.url} rel="noreferrer">{source.name}</a>: {source.note}</li>)}</ol>
              : <ul className="list">{details.sources.map((source: any) => <li key={source.url}><a className="source-link" href={source.url} rel="noreferrer">{source.name}</a>: {source.note}</li>)}</ul>}
          </section>

          <section className="card">
            <h2>Common questions</h2>
            {details.faqs.map((faq: any) => <div key={faq.question} style={{ marginBottom: 18 }}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}
          </section>

          {details.relatedLinks ? <nav className="card" aria-label="Related guides and services">
            <h2>Related guides and services</h2>
            <ul className="list related-links">{details.relatedLinks.map((link: any) => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}</ul>
          </nav> : null}
        </> : guide ? <section className="card">
          <h2>The short answer</h2>
          <p>{guide.answer}</p>
          <h2>What to prepare</h2>
          <ul>{guide.prepare.map((item: string) => <li key={item}>{item}</li>)}</ul>
          <h2>Questions for your team</h2>
          <ul>{guide.questions.map((item: string) => <li key={item}>{item}</li>)}</ul>
        </section> : null}
      </article>
      <CTA />
    </main>
    <Footer hideCommercialTerms />
  </>;
}
