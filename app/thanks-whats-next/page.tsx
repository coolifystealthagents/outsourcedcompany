import type { Metadata } from 'next';
import { Header, Footer } from '../components';

export const metadata: Metadata = { title: 'Meeting confirmed', description: 'Your meeting with the StealthAgents team is confirmed.', robots: { index: false, follow: false } };

export default function ThanksWhatsNextPage() {
  return <><Header/><main id="main-content" className="legal-page"><section className="legal-hero"><div className="container"><p className="eyebrow">Meeting confirmed</p><h1>Thank you. Your time is reserved.</h1><p className="lead">Bring one representative workflow, the systems it touches, and the decisions that must remain with your team.</p></div></section><section className="section"><div className="container cards"><article className="card"><h2>Work samples</h2><p>Bring a few completed examples from the queue you want to discuss.</p></article><article className="card"><h2>Access boundaries</h2><p>List the systems involved and any permissions that should remain restricted.</p></article><article className="card"><h2>Decision owners</h2><p>Name who reviews early work and who handles exceptions.</p></article></div></section></main><Footer/></>;
}
