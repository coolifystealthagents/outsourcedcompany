import { Footer, Header } from '../components';

export default function Thanks() {
  return <>
    <Header />
    <main className="section">
      <div className="container" style={{ maxWidth: 820 }}>
        <p className="eyebrow">Request received</p>
        <h1>Your operations brief starts with this task list.</h1>
        <p className="lead">A Philippines-focused staffing partner may review the role details and follow up. They will recruit and hire only in the Philippines.</p>
        <div className="card">
          <h2>What to gather next</h2>
          <ul className="list">
            <li>Two or three examples of finished work</li>
            <li>The tools and permissions the role needs</li>
            <li>The decisions that must stay with your team</li>
            <li>A simple check for the first live batch</li>
          </ul>
        </div>
        <a className="btn primary" href="/">Back to the operations desk</a>
      </div>
    </main>
    <Footer />
  </>;
}
