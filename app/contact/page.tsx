import { Footer, Header, JsonLd } from '../components';
import { leadQuestions, site, staffingFitNote, staffingOffer } from '../data';

export const metadata = {
  title: `Contact ${site.brand}`,
  description: 'Request an operations brief for Filipino talent recruited and hired in the Philippines.',
};

export default function Contact() {
  const siteUrl = `https://${String(site.domain).toLowerCase()}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'ContactPage', name: `Contact ${site.brand}`, url: `${siteUrl}/contact` },
      { '@type': 'Organization', name: site.brand, url: siteUrl },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Contact', item: `${siteUrl}/contact` },
        ],
      },
    ],
  };

  return <>
    <Header />
    <main className="section">
      <JsonLd data={schema} />
      <div className="container two">
        <div>
          <p className="eyebrow">Operations brief</p>
          <h1>Show us the work that keeps coming back.</h1>
          <p className="lead">List the queue, tools, schedule, and decisions that stay with your team. The result is a tighter role for Filipino talent, not a generic job description.</p>
          <div className="card">
            <h2>What the brief can cover</h2>
            <ul className="list">{staffingOffer.included.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div className="card">
            <h2>Useful details to bring</h2>
            <ul className="list">{leadQuestions.map((question) => <li key={question}>{question}</li>)}</ul>
          </div>
          <p className="callout"><b>Philippines only:</b> {staffingFitNote}</p>
        </div>
        <form className="card" action="/thank-you">
          <p className="eyebrow">Your working notes</p>
          <h2>Request the brief</h2>
          <label>Name<br /><input required name="name" style={{ width: '100%', padding: 12, margin: '6px 0 14px' }} /></label>
          <label>Email<br /><input required name="email" type="email" style={{ width: '100%', padding: 12, margin: '6px 0 14px' }} /></label>
          <label>Company or website<br /><input name="company" style={{ width: '100%', padding: 12, margin: '6px 0 14px' }} /></label>
          <label>Which role or queue do you want to hand off?<br /><textarea name="tasks" rows={6} style={{ width: '100%', padding: 12, margin: '6px 0 14px' }} /></label>
          <label>What needs the most thought?<br />
            <select name="concern" style={{ width: '100%', padding: 12, margin: '6px 0 14px' }}>
              <option>Defining the role</option>
              <option>Quality checks and reporting</option>
              <option>Schedule and coverage</option>
              <option>Tool access and data safety</option>
              <option>Adding another Filipino team member</option>
            </select>
          </label>
          <p className="routing-note">Submitting this form does not create an employment or service agreement. Your request may be sent to a staffing partner that sources talent only in the Philippines.</p>
          <button className="btn primary" type="submit">Request an operations brief</button>
        </form>
      </div>
    </main>
    <Footer />
  </>;
}
