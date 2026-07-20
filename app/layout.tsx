import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { metadataBase: new URL('https://outsourcedcompany.com'), title: { default: 'Outsourced Company | Offshore outsourcing guides', template: '%s | Outsourced Company' }, description: 'our staffing team-style guides for outsourced company: services, onboarding, role scope, and provider questions.', openGraph: { title: 'Outsourced Company', description: 'Practical outsourcing guides for business teams.', url: 'https://outsourcedcompany.com', siteName: 'Outsourced Company', type:'website' } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
