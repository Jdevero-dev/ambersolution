import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import { articles, getArticle } from '@/lib/data/articles';
import { getService } from '@/lib/data/services';
import { site, pageMeta, absoluteUrl } from '@/lib/site';
import { orgId } from '@/lib/schema';

export const dynamicParams = false;
export function generateStaticParams() { return articles.map((a) => ({ slug: a.slug })); }

export async function generateMetadata({ params }) {
  const a = getArticle((await params).slug);
  const m = pageMeta({ title: a.metaTitle, description: a.metaDescription, path: `/resources/${a.slug}/` });
  m.openGraph.type = 'article';
  m.openGraph.publishedTime = a.published;
  m.openGraph.modifiedTime = a.updated;
  return m;
}

const fmt = (d) => new Date(d + 'T00:00:00Z').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

function InlineCta({ type }) {
  return type === 'health' ? (
    <div className="inline-cta"><p>Not sure how your site is doing? Get a free health check.</p><a className="btn btn-dark" href="/website-health-check/">Free Health Check</a></div>
  ) : (
    <div className="inline-cta"><p>Want help with this? We reply within 12 hours.</p><a className="btn btn-dark" href="/request-a-quote/">Request a Quote</a></div>
  );
}

export default async function Article({ params }) {
  const a = getArticle((await params).slug);
  if (!a) notFound();
  const path = `/resources/${a.slug}/`;
  const svc = a.service && getService(a.service);
  const related = a.related.map(getArticle).filter(Boolean);

  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org', '@type': 'BlogPosting', headline: a.title, description: a.metaDescription,
        datePublished: a.published, dateModified: a.updated, mainEntityOfPage: absoluteUrl(path),
        author: { '@type': 'Person', name: site.founder.name, url: site.founder.linkedin },
        publisher: { '@id': orgId },
      }} />
      <section className="hero hero-light hero-simple">
        <div className="wrap">
          <Breadcrumbs items={[{ name: 'Resources', href: '/resources/' }, { name: a.title, href: path }]} />
          <span className="tag">{a.category}</span>
          <h1 style={{ marginTop: 16, maxWidth: '22ch', fontSize: 'clamp(2rem,4.4vw,3.2rem)' }}>{a.title}</h1>
          <div className="article-meta">
            <span>By {site.founder.name}</span>
            <span>Updated <time dateTime={a.updated}>{fmt(a.updated)}</time></span>
            <span>{a.readTime}</span>
          </div>
        </div>
      </section>
      <section className="section-tight">
        <div className="wrap">
          <article className="article">
            {a.body.map((b, i) => {
              if (b.h2) return <h2 key={i}>{b.h2}</h2>;
              if (b.p) return <p key={i}>{b.p}</p>;
              if (b.ul) return <ul key={i}>{b.ul.map((x) => <li key={x}>{x}</li>)}</ul>;
              if (b.ol) return <ol key={i}>{b.ol.map((x) => <li key={x}>{x}</li>)}</ol>;
              if (b.cta) return <InlineCta key={i} type={b.cta} />;
              return null;
            })}
            {svc && <p className="note" style={{ marginTop: 32 }}>Related service: <a className="text-link" href={`/services/${svc.slug}/`}>{svc.h1}</a></p>}
            <div className="author-box">
              <div className="avatar" aria-hidden="true">JD</div>
              <p><strong>{site.founder.name}</strong>, {site.founder.role}. 7+ years in U.S. healthcare operations, now building websites, systems and automation for businesses worldwide. <a href={site.founder.linkedin} rel="noopener">LinkedIn</a></p>
            </div>
          </article>
        </div>
      </section>
      {related.length > 0 && (
        <section className="section section-alt">
          <div className="wrap">
            <h2>Keep reading</h2>
            <div className="grid grid-2" style={{ marginTop: 24 }}>
              {related.map((r) => (
                <a key={r.slug} className="card card-link" href={`/resources/${r.slug}/`}><span className="tag">{r.category}</span><h3 style={{ marginTop: 12 }}>{r.title}</h3><p className="muted">{r.excerpt}</p></a>
              ))}
            </div>
          </div>
        </section>
      )}
      <CtaBand />
    </>
  );
}
