/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
  { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://acrtracking.stealthagents.us; script-src-attr 'none'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://acrtracking.stealthagents.us; frame-src https://go.oncehub.com; object-src 'none'; frame-ancestors 'self'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests" },
];
const nextConfig = {
  async redirects() {
    return [
      { source: '/:path*', has: [{ type: 'header', key: 'cf-visitor', value: '.*"scheme":"http".*' }], destination: 'https://outsourcedcompany.com/:path*', permanent: true },
      { source: '/:path*', has: [{ type: 'header', key: 'x-forwarded-proto', value: 'http' }], destination: 'https://outsourcedcompany.com/:path*', permanent: true },
      { source: '/:path*', has: [{ type: 'host', value: 'www.outsourcedcompany.com' }], destination: 'https://outsourcedcompany.com/:path*', permanent: true },
      { source: '/contact', destination: '/contact-us', permanent: true },
      { source: '/blog/top-50-outsourcing-companies', destination: '/blog/how-to-compare-outsourcing-companies', permanent: true },
    ];
  },
  async headers(){ return [{ source: '/:path*', headers: securityHeaders }]; },
};
export default nextConfig;
