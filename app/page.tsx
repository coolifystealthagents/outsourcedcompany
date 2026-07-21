import { Footer, Header, JsonLd } from './components';
import { blogPosts, services, site, staffingProcess } from './data';

const serviceNumber = (index: number) => String(index + 1).padStart(2, '0');

export default function Home() {
  const siteUrl = `https://${site.domain.toLowerCase()}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        name: site.brand,
        url: siteUrl,
        description: 'Practical role planning for companies hiring Filipino talent from the Philippines.',
      },
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: site.brand,
        url: siteUrl,
      },
    ],
  };

  return <>
    <Header />
    <main className="ops-home" data-design="philippines-operations-brief-2026-07">
      <JsonLd data={schema} />

      <section className="ops-hero">
        <div className="container ops-hero-grid">
          <div className="ops-hero-copy">
            <p className="eyebrow">The Philippines operations brief</p>
            <h1>Build the operating brief. Then hire Filipino talent.</h1>
            <p className="lead">Sort the work, name the approval limits, and decide how the first batch gets checked. That gives a Filipino hire something better than a vague job description.</p>
            <div className="actions">
              <a className="btn primary" href="/contact">Request an operations brief</a>
              <a className="text-link" href="#functions">Browse the function files <span aria-hidden="true">↘</span></a>
            </div>
            <p className="routing-note">Outsourced Company is an independent information site. Requests may be passed to a staffing partner that recruits and hires only in the Philippines.</p>
          </div>

          <div className="ops-visual">
            <div className="ops-photo-frame">
              <img src="/images/operations-meeting.jpg" alt="Two people with laptops talking across a table in a glass-walled office" />
              <span className="photo-label">Working session / role scope</span>
            </div>
            <aside className="handoff-sheet" aria-label="Example handoff sheet">
              <div className="sheet-top"><span>OC / 01</span><span>Draft brief</span></div>
              <h2>Start with one queue</h2>
              <ul>
                <li><span>Owner</span><b>Named before access</b></li>
                <li><span>Decision line</span><b>Written, not assumed</b></li>
                <li><span>First review</span><b>Set before live work</b></li>
              </ul>
              <p>Talent source</p>
              <strong>Philippines only</strong>
            </aside>
          </div>
        </div>
        <div className="container hero-index" aria-label="Planning sequence">
          <span>Role file</span>
          <span>Access list</span>
          <span>Review rule</span>
          <span>Filipino match</span>
        </div>
      </section>

      <section className="container function-section" id="functions">
        <div className="section-intro">
          <div>
            <p className="eyebrow">Function files</p>
            <h2>Choose the queue that keeps coming back.</h2>
          </div>
          <p>Good first roles have visible work and a clear finish line. If a task depends on founder judgment every hour, it probably is not ready to hand off.</p>
        </div>
        <div className="function-files">
          {services.map((service, index) => <a className="function-file" href={`/services/${service.slug}`} key={service.slug}>
            <div className="file-number">{serviceNumber(index)}</div>
            <div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
            <span className="file-arrow" aria-hidden="true">↗</span>
          </a>)}
        </div>
      </section>

      <section className="boundary-section">
        <div className="container boundary-grid">
          <div className="boundary-copy">
            <p className="eyebrow">Draw the decision line</p>
            <h2>The hire can run the queue. Your team still owns the call.</h2>
            <p>Routine work moves faster when everyone knows what can be completed, what needs a draft, and what must come back to a manager.</p>
          </div>
          <div className="decision-ledger">
            <div className="ledger-head"><span>Work type</span><span>Filipino team member</span><span>Internal owner</span></div>
            <div><strong>Known request</strong><span>Complete from the guide</span><span>Review samples</span></div>
            <div><strong>Missing detail</strong><span>Flag and pause</span><span>Supply the answer</span></div>
            <div><strong>Money or policy</strong><span>Prepare the record</span><span>Approve the decision</span></div>
            <div><strong>Unhappy customer</strong><span>Capture the facts</span><span>Choose the response</span></div>
          </div>
        </div>
      </section>

      <section className="container process-section" id="process">
        <div className="process-heading">
          <p className="eyebrow">A steadier handoff</p>
          <h2>Four moves from loose tasks to a working role.</h2>
        </div>
        <div className="process-track">
          {staffingProcess.map((item) => <article key={item.step}>
            <span>{item.step}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>)}
        </div>
      </section>

      <section className="notes-section">
        <div className="container notes-grid">
          <div>
            <p className="eyebrow">Field notes</p>
            <h2>Read these before the provider call.</h2>
            <p>The useful questions are usually plain: who checks the first batch, who can change a record, and what happens when the fit is wrong?</p>
            <a className="text-link" href="/blog">Open all guides <span aria-hidden="true">↗</span></a>
          </div>
          <div className="note-stack">
            {blogPosts.slice(0, 3).map((post, index) => <a href={`/blog/${post.slug}`} key={post.slug}>
              <span>{serviceNumber(index)}</span>
              <div><strong>{post.title}</strong><p>{post.excerpt}</p></div>
              <b>{post.minutes} min</b>
            </a>)}
          </div>
        </div>
      </section>

      <section className="container brief-cta">
        <div>
          <p className="eyebrow">Bring the messy list</p>
          <h2>Turn it into a role a Filipino hire can actually run.</h2>
        </div>
        <div>
          <p>Share the recurring work, tools, schedule, and decisions that stay with your team. A Philippines-focused staffing partner may follow up with a practical role scope.</p>
          <a className="btn primary" href="/contact">Request an operations brief</a>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
