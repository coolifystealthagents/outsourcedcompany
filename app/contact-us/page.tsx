import type { Metadata } from "next";
import { Header, Footer } from "../components";
import { site, services } from "../data";
import StandardContactForm from "./StandardContactForm";
import styles from "./contact.module.css";


const pageUrl = "https://outsourcedcompany.com/contact-us";
const prep = [
  "The function, tasks, and finished examples",
  "Systems, coverage hours, and access boundaries",
  "Decision owners, service levels, and review rhythm",
];


export const metadata: Metadata = {
  title: "Contact Outsourced Company | Plan Business Support",
  description: "Plan outsourced business support around clear functions, accountable handoffs, controlled access, and owner review.",
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: { title: "Contact Outsourced Company", description: "Turn a business function into a controlled outsourcing brief.", url: pageUrl, type: "website" },
};


export default function ContactUsPage() {
  return <><Header/><main className={styles.page}>
    <section className={styles.hero}><div className={styles.shellGrid}>
      <div><p className={styles.eyebrow}>Build a practical outsourcing brief</p><h1>Decide what to outsource—and what stays with your team.</h1><p className={styles.lead}>Tell us which function is absorbing time, which outcomes matter, and where approvals belong. We’ll prepare a focused consultation around a controlled support role.</p><div className={styles.checks}>{prep.map(item => <span key={item}>✓ {item}</span>)}</div><a className={styles.powered} href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">Powered by StealthAgents ↗</a></div>
      <div id="consultation-form"><StandardContactForm endpoint="/api/contact" encoding="form"/></div>
    </div></section>
    <section className={styles.section}><div className={styles.shell}><p className={styles.kicker}>Prepare the conversation</p><h2>Start with one business function and its real work.</h2><div className={styles.cards}>{prep.map((item, index) => <article key={item}><b>0{index + 1}</b><h3>{item}</h3><p>Concrete inputs and examples make responsibilities, quality, and handoffs easier to assess.</p></article>)}</div></div></section>
    <section className={`${styles.section} ${styles.soft}`}><div className={styles.shellGrid}><div><p className={styles.kicker}>Function map</p><h2>Scope support around an accountable outcome.</h2><p className={styles.sub}>Start with bounded recurring work and a named internal reviewer. Keep strategy, contractual authority, regulated judgment, and sensitive exceptions with qualified owners.</p><a className={styles.textLink} href="#consultation-form">Build my outsourcing brief →</a></div><div className={styles.tags}>{services.slice(0, 8).map(service => <span key={service.slug}>{service.title}</span>)}</div></div></section>
    <section className={`${styles.section} ${styles.about}`}><div className={styles.shellGrid}><img src={site.serviceImage} alt={site.alt}/><div><p className={styles.kicker}>The staffing partner</p><h2>About Stealth Agents</h2><p>Stealth Agents works with over 35+ different industries. We&apos;re featured on Forbes as the top rated virtual assistant company.</p><a className={styles.textLink} href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">Powered by StealthAgents ↗</a></div></div></section>
    <section className={styles.section}><div className={styles.shell}><p className={styles.kicker}>Control the handoff</p><h2>Three foundations for a dependable launch.</h2><div className={styles.cards}><article><h3>Clear ownership</h3><p>Name who provides inputs, checks output, and decides exceptions.</p></article><article><h3>Visible evidence</h3><p>Require links, notes, or records that make completed work reviewable.</p></article><article><h3>Measured expansion</h3><p>Stabilize one function before adding access or adjacent responsibilities.</p></article></div></div></section>
    <section className={styles.final}><div className={styles.shell}><h2>Ready to scope the right support?</h2><p>Share the function, workload, tools, and approval boundaries you need covered.</p><a href="#consultation-form">Book a free consultation</a></div></section>
  </main><Footer/></>;
}

