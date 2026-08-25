import { AcrClient } from './acr-client';
import Script from 'next/script';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://outsourcedcompany.com'),
  title: {
    default: 'Outsourced Company | Plan roles for Filipino talent',
    template: '%s | Outsourced Company',
  },
  description: 'Turn recurring work into clear roles for Filipino talent recruited and hired in the Philippines.',
  openGraph: {
    title: 'Outsourced Company',
    description: 'Practical role briefs for companies hiring Filipino talent from the Philippines.',
    url: 'https://outsourcedcompany.com',
    siteName: 'Outsourced Company',
    type: 'website',
    images: [{ url: '/images/operations-meeting.jpg', alt: 'Two people with laptops talking across a table in an office' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}<AcrClient/><Script id="acr-tracker-config" strategy="beforeInteractive">{`window.ACR_TRACKER_CONFIG={siteId:'outsourced-company',endpoint:'/ingest/track',debug:false,funnelSteps:[{path:'/contact-us',step:1,label:'Form Page',event:'funnel_form_page'},{path:'/contact',step:1,label:'Form Page',event:'funnel_form_page'},{path:'/thank-you',step:2,label:'Form Submitted',event:'funnel_form_submitted'},{path:'/thanks-whats-next',step:3,label:'Booking Confirmed',event:'funnel_booking_confirmed'}]};`}</Script><Script src="https://acrtracking.stealthagents.us/v1/tracker.js" strategy="afterInteractive"/></body></html>;
}
