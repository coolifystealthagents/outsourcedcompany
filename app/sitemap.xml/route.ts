import { site, services, allBlogPosts, allResearchPosts } from '../data';

export function GET() {
  const base = `https://${String(site.domain).toLowerCase()}`;
  const pages = Math.max(1, Math.ceil(allBlogPosts.length / 20));
  const paths = ['', '/services', '/blog', '/blog/top-50-outsourcing-companies', '/research', '/contact', '/privacy', '/terms', '/cancellation-policy', ...services.map((service) => `/services/${service.slug}`), ...allBlogPosts.map((post) => `/blog/${post.slug}`), ...allResearchPosts.map((post) => `/research/${post.slug}`), ...Array.from({ length: Math.max(0, pages - 1) }, (_, i) => `/blog/page/${i + 2}`)];
  const body = paths.map((path) => `<url><loc>${base}${path}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>`, { headers: { 'content-type': 'application/xml' } });
}
