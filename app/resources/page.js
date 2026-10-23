import Breadcrumbs from '@/components/Breadcrumbs';
import CtaBand from '@/components/CtaBand';
import { articles } from '@/lib/data/articles';
import { pageMeta } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Guides for Business Websites, Systems & Automation',
  description: 'Practical guides on website maintenance, custom software, automation and SEO, written for business owners.',
  path: '/resources/',
});

const categories = ['Maintenance', 'Custom Software', 'AI & Automation', 'SEO & Growth', 'Working with us'];

export default function Resources() {
  const [featured, ...rest] = articles;
  return (
    <>
      <section className="hero hero-light hero-simple">
        <div className="wrap">
          <Breadcrumbs items={[{ name: 'Resources', href: '/resources/' }]} />
          <p className="eyebrow">Resources</p>
          <h1>Resources</h1>
          <p className="lead muted">Practical guides for business owners on keeping websites healthy, choosing systems and automating the busywork.</p>
          <ul className="chips" aria-label="Topics">{categories.map((c) => <li key={c}>{c}</li>)}</ul>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <a className="card card-link" href={`/resources/${featured.slug}/`} style={{ padding: 'clamp(24px,4vw,44px)', marginBottom: 24 }}>
            <span className="tag">Featured · {featured.category}</span>
            <h2 style={{ marginTop: 16, maxWidth: '24ch' }}>{featured.title}</h2>
            <p className="muted lead">{featured.excerpt}</p>
            <div className="arrow">Read the guide · {featured.readTime} →</div>
          </a>
          <div className="grid grid-2">
            {rest.map((a) => (
              <a key={a.slug} className="card card-link" href={`/resources/${a.slug}/`}>
                <span className="tag">{a.category}</span>
                <h3 style={{ marginTop: 14 }}>{a.title}</h3>
                <p className="muted">{a.excerpt}</p>
                <div className="arrow">{a.readTime} →</div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
