import { Footer, Header } from '../components';
import { blogPosts, site } from '../data';

export default function Blog() {
  return <>
    <Header />
    <main className="section">
      <div className="container">
        <p className="eyebrow">{site.brand} field notes</p>
        <h1>Plan the work before you hire Filipino talent.</h1>
        <p className="lead">Plain guides for role scope, provider calls, first-week checks, and safer tool access.</p>
        <div className="cards">
          {blogPosts.map((post) => <a className="card" href={`/blog/${post.slug}`} key={post.slug}>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <span className="text-link">Read the field note</span>
          </a>)}
        </div>
      </div>
    </main>
    <Footer />
  </>;
}
