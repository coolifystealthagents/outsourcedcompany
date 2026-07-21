import * as data from './data';

const dataAny = data as any;
const site = dataAny.site || {};
const footerItems = (dataAny.services || []).slice(0, 4);
const domain = site.domain || 'OutsourcedCompany.com';
const year = new Date().getFullYear();

export function JsonLd({ data }: { data: any }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function LogoMark() {
  return <span className="logo-mark-wrap">
    <img className="logo-img" src="/logo.svg" alt="" aria-hidden="true" />
    <span className="logo-name">{site.brand || domain}</span>
  </span>;
}

export function Header() {
  return <header className="nav">
    <div className="nav-inner">
      <a className="logo" href="/" aria-label={`${site.brand || domain} home`}><LogoMark /></a>
      <nav className="links" aria-label="Main navigation">
        <a href="/#functions">Functions</a>
        <a href="/#process">Handoff</a>
        <a href="/blog">Field notes</a>
        <a href="/contact">Contact</a>
      </nav>
      <a className="btn nav-cta" href="/contact">Request an operations brief</a>
    </div>
  </header>;
}

export function Footer() {
  return <footer className="legit-footer">
    <div className="footer-grid">
      <div className="footer-brand">
        <a className="footer-logo" href="/" aria-label={`${site.brand || domain} home`}><LogoMark /></a>
        <p>Outsourced Company helps business owners turn recurring work into clear roles for Filipino talent. The public guides cover task scope, access limits, onboarding, and review.</p>
        <p className="footer-note">This is an independent information and lead-generation site. Requests may be routed to a staffing partner that recruits and hires only in the Philippines.</p>
      </div>
      <div>
        <h3>Function files</h3>
        <div className="footer-links">
          {footerItems.map((item: any) => <a href={`/services/${item.slug}`} key={item.slug}>{item.title}</a>)}
        </div>
      </div>
      <div>
        <h3>Company</h3>
        <div className="footer-links">
          <a href="/contact">Contact</a>
          <a href="/blog">Field notes</a>
          <a href="/privacy">Privacy policy</a>
          <a href="/terms">Terms and conditions</a>
          <a href="/cancellation-policy">Cancellation policy</a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© {year} {site.brand || domain}. All rights reserved.</span>
      <span>Filipino talent, recruited and hired in the Philippines.</span>
    </div>
  </footer>;
}

export function CTA() {
  return <section className="final-cta">
    <p className="eyebrow">Start with the work</p>
    <h2>Write the role before you meet the candidates.</h2>
    <p>Share the queue, tools, schedule, and approval limits. A Philippines-focused staffing partner may follow up with a role brief.</p>
    <a className="btn primary" href="/contact">Request an operations brief</a>
  </section>;
}
