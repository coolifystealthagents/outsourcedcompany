import * as data from './data';
const d = data as any;
const site = d.site || {};
const services = d.services || [];
const year = new Date().getFullYear();

export function JsonLd({ data }: { data: any }) { return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/>; }

export function LogoMark(){ return <span className="logo-mark-wrap"><img className="logo-img logo-img-desktop" src="/logo.svg" alt="Outsourced Company logo"/><img className="logo-img logo-img-mobile" src="/logo.svg" alt="Outsourced Company logo"/><span className="logo-name">{site.brand}</span></span>; }

function ParentAttribution({ location }: { location: 'header' | 'footer' }) {
  return <a className={`parent-attribution parent-attribution-${location}`} href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer" aria-label="Powered by StealthAgents, opens official website">
    <span>Powered by StealthAgents</span>
    <img src="/brand/stealth-agents-logo-black.png" alt="StealthAgents logo"/>
  </a>;
}

export function Header(){ return <header className="nav">
  <a className="skip-link" href="#main-content">Skip to content</a>
  <div className="nav-inner">
    <a className="logo" href="/" aria-label={`${site.brand} home`}><LogoMark/></a>
    <nav className="links fleet-links" aria-label="Main navigation"><a href="/">Home</a><a href="/services">Services</a><a href="/contact-us">Contact Us</a></nav>
    <ParentAttribution location="header"/>
  </div>
</header>; }

export function Footer(){ return <footer className="legit-footer"><div className="footer-grid"><div className="footer-brand"><a className="footer-logo" href="/" aria-label={`${site.brand} home`}><span className="logo-mark-wrap"><img className="logo-img" src="/logo.svg" alt="Outsourced Company logo"/><span className="logo-name">{site.brand}</span></span></a><p>Plan Philippines-based business support with role scope, access boundaries, and review steps written clearly.</p><ParentAttribution location="footer"/></div><div><h2>Services</h2><div className="footer-links">{services.slice(0,6).map((s:any)=><a href={`/services/${s.slug}`} key={s.slug}>{s.title}</a>)}</div></div><div><h2>Explore</h2><div className="footer-links"><a href="/services">Services</a><a href="/blog">Blog</a><a href="/research">Research</a><a href="/contact-us">Contact Us</a><a href="/privacy">Privacy policy</a></div></div></div><div className="footer-bottom"><span>© {year} {site.brand}. All rights reserved.</span><span>Philippines-focused role planning</span></div></footer>; }

export function CTA(){ return <section className="final-cta"><p className="eyebrow">Philippines staffing intake</p><h2>Define the position before hiring begins.</h2><p>Share the tasks, tools, schedule, and approval limits for your Filipino team member. The intake turns those details into a practical staffing brief.</p><a className="btn primary" href="/contact-us">Contact Us</a></section>; }
