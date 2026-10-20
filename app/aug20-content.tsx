import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import { Header, Footer, CTA } from './components';
import { ArticleSidebar, type TocItem } from './article-sidebar';
import meta from './aug20-research-meta.json';
const SITE='https://outsourcedcompany.com';
type Item={family:'research';title:string;description:string;hero:string;heroAlt:string};
const headingId=(value:string)=>value.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
function item(slug:string):Item{return (meta as Record<string,Item>)[slug]}
function source(slug:string){return fs.readFileSync(path.join(process.cwd(),'content','research',slug+'.md'),'utf8').replace(/^---[\s\S]*?---\s*/,'').replace(/^#[^\n]+\n+/,'').replace(/^\*August 20, 2026\*\s*/,'')}
function headings(text:string):TocItem[]{return [...text.matchAll(/^## (.+)$/gm)].map(match=>({id:headingId(match[1]),label:match[1]}))}
function blocks(text:string){return text.split(/\n\n+/).filter(Boolean).map((part,i)=>{if(part.startsWith('## ')){const label=part.slice(3);return <h2 id={headingId(label)} key={i}>{label}</h2>}if(part.startsWith('- '))return <ul key={i}>{part.split('\n').map((x,j)=><li key={j}>{x.replace(/^- /,'').replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,'$1: $2')}</li>)}</ul>;return <p key={i}>{part}</p>})}
export function getAug20ResearchMetadata(slug:string):Metadata{const x=item(slug);return {title:x.title,description:x.description,alternates:{canonical:`/${x.family}/${slug}`},openGraph:{title:x.title,description:x.description,url:`${SITE}/${x.family}/${slug}`,images:[x.hero]}}}
export function renderAug20ResearchArticle(slug:string){const x=item(slug);const text=source(slug);const toc=headings(text);const schema={'@context':'https://schema.org','@type':'Article',headline:x.title,datePublished:'2026-08-20',dateModified:'2026-08-20',mainEntityOfPage:`${SITE}/research/${slug}`,image:`${SITE}${x.hero}`};return <><Header/><main id="main-content" className="article-shell"><article><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><p className="eyebrow">Research</p><h1>{x.title}</h1><p><time dateTime="2026-08-20">August 20, 2026</time></p><img src={x.hero} alt={x.heroAlt} width="1536" height="1024" className="article-hero-image"/><div className="article-layout"><ArticleSidebar items={toc} family="Research" updated="August 20, 2026"/><div className="article-reading article-body">{blocks(text)}</div></div></article><CTA/></main><Footer/></>}
