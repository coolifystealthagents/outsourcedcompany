import { notFound, redirect } from 'next/navigation';
import { Header, Footer } from '../../../components';
import { allBlogPosts } from '../../../data';

export function generateStaticParams() {
  const total = Math.max(1, Math.ceil(allBlogPosts.length / 20));
  return Array.from({ length: total }, (_, i) => ({ page: String(i + 1) }));
}

export default async function BlogPage({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  const number = Number(page);
  const total = Math.max(1, Math.ceil(allBlogPosts.length / 20));
  if (page === '1') redirect('/blog');
  if (!Number.isInteger(number) || number < 1 || number > total) notFound();
  const posts = allBlogPosts.slice((number - 1) * 20, number * 20);

  return <><Header/><main className="section"><div className="container"><p className="eyebrow">Philippines staffing blog</p><h1>Blog page {number}</h1><div className="cards">{posts.map((post) => <a className="card" href={`/blog/${post.slug}`} key={post.slug}><h2>{post.title}</h2><p>{post.excerpt}</p></a>)}</div><nav className="pagination" aria-label="Blog pages">{Array.from({ length: total }, (_, i) => <a aria-current={i + 1 === number ? 'page' : undefined} href={i === 0 ? '/blog' : `/blog/page/${i + 1}`} key={i}>{i + 1}</a>)}</nav></div></main><Footer/></>;
}
