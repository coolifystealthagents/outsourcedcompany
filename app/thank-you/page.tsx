import type { Metadata } from 'next';
import { Header, Footer } from '../components';
import { TestimonialsRail } from '../booking-components';

export const metadata: Metadata = { title: 'Request received | Choose a meeting time', description: 'Choose a convenient time to discuss your operating brief with the StealthAgents team.', robots: { index: false, follow: false } };

export default function ThankYouPage() {
  return <><Header/><main id="main-content" className="sa-booking-page"><div className="container sa-booking-grid">
    <div className="sa-booking-left"><p className="sa-booking-kicker">Request received</p><h1>Choose a meeting time.</h1><p className="sa-booking-lead">Your form was delivered. Select a convenient time to discuss the workload, operating boundaries, and review plan.</p><img className="sa-booking-image" src="/brand/stealth-agents-team-bacolod.png" alt="StealthAgents operations team in Bacolod" width="619" height="402"/><TestimonialsRail compact/></div>
    <section className="sa-booking-calendar" aria-labelledby="booking-calendar-title"><h2 id="booking-calendar-title">Available meeting times</h2><iframe src="https://go.oncehub.com/StealthAgentsTeam?brdr=1pxd8d8d8&amp;dt=&amp;em=1&amp;Si=1" id="SOI_StealthAgentsTeam" name="ScheduleOnceIframe" title="Schedule a meeting with Stealth Agents" scrolling="yes" frameBorder="0" height="850" width="100%" className="sa-oncehub-frame" referrerPolicy="strict-origin-when-cross-origin"/></section>
  </div></main><Footer/></>;
}
