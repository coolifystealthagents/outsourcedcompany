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
  return <html lang="en"><body>{children}</body></html>;
}
