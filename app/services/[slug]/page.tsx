import { CTA, Footer, Header, JsonLd } from '../../components';
import { services, site } from '../../data';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  const base = `https://${site.domain.toLowerCase()}`;
  const url = service ? `${base}/services/${service.slug}` : base;

  return {
    title: service?.title || 'Outsourcing service',
    description: service?.desc,
    alternates: { canonical: url },
    openGraph: {
      title: service?.title || 'Outsourcing service',
      description: service?.desc,
      url,
      type: 'website',
    },
  };
}

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug) || services[0];
  const base = `https://${site.domain.toLowerCase()}`;
  const url = `${base}/services/${service.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: service.title,
        description: service.desc,
        mainEntity: { '@id': `${url}#service` },
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: service.title,
        description: service.desc,
        url,
        provider: {
          '@type': 'Organization',
          name: site.brand,
          url: base,
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Good first tasks',
          itemListElement: service.bestTasks.map((task) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: task },
          })),
        },
      },
      {
        '@type': 'HowTo',
        '@id': `${url}#first-week`,
        name: `How to launch ${service.title.toLowerCase()} in the first week`,
        step: service.firstWeek.map((step, index) => ({
          '@type': 'HowToStep',
          position: index + 1,
          name: step,
          text: step,
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: service.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: base },
          { '@type': 'ListItem', position: 2, name: service.title, item: url },
        ],
      },
    ],
  };

  return <>
    <Header />
    <main>
      <JsonLd data={schema} />
      <section className="service-hero">
        <div className="container two">
          <div>
            <p className="eyebrow">{site.brand} service guide</p>
            <h1>{service.title}</h1>
            <p className="lead">{service.desc}</p>
            <a className="btn" href="/contact">Plan this role</a>
          </div>
          <div className="hero-card">
            <img src={site.serviceImage} alt={`${service.title} team reviewing a work queue`} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cards">
          <div className="card">
            <p className="eyebrow">Start narrow</p>
            <h2>Good first tasks</h2>
            <ul className="list">{service.bestTasks.map((task) => <li key={task}>{task}</li>)}</ul>
          </div>
          <div className="card">
            <p className="eyebrow">Keep control</p>
            <h2>Quality and approval rules</h2>
            <ul className="list">{service.controls.map((control) => <li key={control}>{control}</li>)}</ul>
          </div>
          <div className="card">
            <p className="eyebrow">First week</p>
            <h2>A four-step launch</h2>
            <ol className="list">{service.firstWeek.map((step) => <li key={step}>{step}</li>)}</ol>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 920 }}>
          <div className="card">
            <p className="eyebrow">Buyer questions</p>
            <h2>What teams ask before the handoff</h2>
            {service.faqs.map((faq) => <div key={faq.question} style={{ marginBottom: 20 }}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>)}
          </div>
        </div>
      </section>
      <CTA />
    </main>
    <Footer />
  </>;
}
