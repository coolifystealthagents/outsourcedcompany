'use client';

/**
 * Approved first-party review source: https://stealthagents.com/
 * Verified portfolio provenance: official StealthAgents website, 2026-10-16.
 * One DOM record is rendered per approved review. Motion translates the single
 * rail without cloning records. Reduced-motion exposes the complete static set.
 */
export const stealthAgentsReviews = [
  { id: 'chad-sublet', name: 'Chad Sublet', detail: 'Business Owner', headline: 'More room for strategic work', quote: 'Lindsay has been incredible. She handles the tactical work, which has freed me up to focus on bigger-picture initiatives.' },
  { id: 'erika-giron', name: 'Erika Giron', detail: 'CEO, Horizon Pacific Staffing', headline: 'Support that scaled with demand', quote: 'We went from 300 hours a month to over 2,500 hours with Stealth Agents.' },
  { id: 'alex-behrens', name: 'Alex Behrens', detail: 'Client since Oct 2024', headline: 'A genuine part of the team', quote: 'They have made a real difference in our day-to-day operations and truly feel like part of our internal team.' },
  { id: 'aisha-wonderfull', name: 'Aisha Wonderfull', detail: 'CEO, Publishing Startup', headline: 'Time returned to sales', quote: 'Gained time for sales and closed 3 clients within two days. Exceptional service.' },
  { id: 'owen-hone', name: 'Owen Hone', detail: 'Multiple Hire Client', headline: 'Fast placement and quality', quote: 'Outstanding service. Less than 24-hour VA placement. Fast, high-quality. I have hired multiple times.' },
  { id: 'sarah-jacoby', name: 'Sarah Jacoby', detail: 'Client', headline: 'Proactive support', quote: 'Great communication, efficient and proactive assistant, visible business growth.' },
  { id: 'martine-cadet', name: 'Martine Cadet', detail: 'Client', headline: 'A team that learned the brand', quote: 'The team learned my brand and goals and transformed my business. My dream team.' },
  { id: 'rich-cochran', name: 'Rich Cochran', detail: 'Client', headline: 'Diligent, pleasant professionals', quote: 'We especially appreciate how diligent and pleasant Evy is. True pros.' },
  { id: 'george-assi', name: 'George Assi', detail: '2-Year Partner', headline: 'Reliable talent matches', quote: 'Agents tackled diverse tasks seamlessly and manager Charm consistently provides excellent talent matches.' },
  { id: 'lee-maasen', name: 'Lee Maasen', detail: 'Business Owner', headline: 'An absolute asset', quote: 'Stealth Agents provided me with a fantastic virtual assistant who has been an absolute asset.' },
  { id: 'kevin-carabajal', name: 'Kevin Carabajal', detail: 'Client', headline: 'Operations that restored focus', quote: 'VA George eliminated late-night documentation work, restoring my sleep and enabling proper business planning.' },
  { id: 'lynda-sunshine-west', name: 'Lynda Sunshine West', detail: 'Client', headline: 'Quality work every time', quote: 'Paolo is exceptional. Communicative, fast turnaround, quality work every time.' },
] as const;

export function TestimonialsRail({ compact = false }: { compact?: boolean }) {
  return <section className={`review-rail${compact ? ' review-rail-compact' : ''}`} aria-labelledby="stealthagents-reviews-heading">
    <div className="review-rail-heading">
      <p>Verified client perspective</p>
      <h2 id="stealthagents-reviews-heading">StealthAgents reviews</h2>
    </div>
    <div className="review-rail-viewport" tabIndex={0} aria-label="StealthAgents client reviews. Focus or hover to pause motion.">
      <div className="review-rail-track">
        {stealthAgentsReviews.map(review => <article className="review-card" key={review.id} data-review-id={review.id}>
          <div className="review-stars"><span aria-hidden="true">★★★★★</span><span className="sr-only">5 out of 5 stars</span></div>
          <h3>{review.headline}</h3>
          <blockquote>“{review.quote}”</blockquote>
          <p><strong>{review.name}</strong><span>{review.detail}</span></p>
        </article>)}
      </div>
    </div>
    <p className="review-source">Approved reviews sourced from the <a href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">official StealthAgents website</a>.</p>
    <style jsx>{`
      .review-rail{display:grid;gap:14px;min-width:0}.review-rail-heading p{margin:0;color:#a62228;font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}.review-rail-heading h2{margin:4px 0 0;font-size:clamp(22px,2.2vw,32px)}
      .review-rail-viewport{overflow:hidden;outline:none;border-radius:18px}.review-rail-viewport:focus-visible{box-shadow:0 0 0 3px #2c5d85}
      .review-rail-track{display:flex;width:max-content;gap:14px;animation:reviewRail 70s linear infinite}.review-rail-viewport:hover .review-rail-track,.review-rail-viewport:focus .review-rail-track,.review-rail-viewport:focus-within .review-rail-track{animation-play-state:paused}
      .review-card{width:min(330px,76vw);flex:0 0 auto;box-sizing:border-box;padding:18px;border:1px solid #ded7ce;border-radius:16px;background:#fff;color:#20252b;box-shadow:0 8px 24px rgba(21,31,39,.08)}.review-stars{color:#d49a13;letter-spacing:.08em}.review-card h3{margin:9px 0 7px;font-size:17px}.review-card blockquote{margin:0;line-height:1.55;font-size:14px}.review-card p{display:flex;flex-direction:column;gap:2px;margin:12px 0 0;font-size:13px}.review-card p span{color:#66717b}.review-source{margin:0;font-size:12px;color:#66717b}.review-source a{color:inherit}.review-rail-compact .review-card{width:min(290px,74vw)}
      @keyframes reviewRail{from{transform:translateX(0)}to{transform:translateX(calc(-100% + min(330px,76vw)))}}
      @media(prefers-reduced-motion:reduce){.review-rail-viewport{overflow-x:auto}.review-rail-track{width:auto;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));animation:none}.review-card{width:auto}.review-rail-compact .review-card{width:auto}}
      @media(max-width:620px){.review-rail-track{animation-duration:95s}@media(prefers-reduced-motion:reduce){.review-rail-track{grid-template-columns:1fr}}}
    `}</style>
  </section>;
}
