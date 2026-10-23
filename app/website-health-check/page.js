import Breadcrumbs from '@/components/Breadcrumbs';
import InquiryForm from '@/components/InquiryForm';
import Faq from '@/components/Faq';
import JsonLd from '@/components/JsonLd';
import { pageMeta, absoluteUrl } from '@/lib/site';
import { orgId } from '@/lib/schema';

export const metadata = pageMeta({
  title: 'Free Website Health Check',
  description: "Get a free check of your website's speed, mobile experience, SEO basics and security essentials, with a short report of what to fix first.",
  path: '/website-health-check/',
});

const checks = [
  ['Speed & Core Web Vitals', 'How fast your key pages load on mobile and desktop.'],
  ['Mobile experience', 'Layout, tap targets and readability on phones.'],
  ['SEO basics', 'Indexing, titles, descriptions, sitemap and robots.txt.'],
  ['Security essentials', 'HTTPS, SSL, outdated software and exposed admin areas.'],
  ['Forms & key flows', 'Contact, booking and checkout tested end to end.'],
  ['Broken links & errors', 'Pages and links that return errors.'],
];

const faqs = [
  ['Is it really free?', 'Yes. There is no obligation to buy anything afterwards.'],
  ['What do you need from me?', 'Just your website address. We only look at what is publicly visible; no logins are needed.'],
  ['What will I receive?', 'A short report listing what we found, ranked by priority, with plain-English explanations.'],
  ['Which platforms do you check?', 'Any public website: custom-built, WordPress, Wix, Shopify, Squarespace and others.'],
];

export default function HealthCheck() {
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Service', name: 'Free Website Health Check', url: absoluteUrl('/website-health-check/'), provider: { '@id': orgId }, areaServed: 'Worldwide', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } }} />
      <section className="hero dark">
        <div className="wrap hero-grid">
          <div>
            <Breadcrumbs items={[{ name: 'Website Health Check', href: '/website-health-check/' }]} />
            <p className="eyebrow">Free · No obligation</p>
            <h1>Free Website Health Check</h1>
            <p className="lead muted">Find out what is slowing your website down, what might break next and what Google can&apos;t see, with a short report of what to fix first.</p>
            <ul className="check-list">
              <li>Takes 1 minute to request</li>
              <li>No logins or access needed</li>
              <li>Plain-English report, ranked by priority</li>
            </ul>
          </div>
          <div className="form-card" style={{ color: 'var(--text)' }}><InquiryForm kind="health" /></div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">What we check</p>
          <h2>Six areas that decide whether a website works for your business</h2>
          <div className="grid grid-3" style={{ marginTop: 28 }}>
            {checks.map(([t, d]) => <div key={t} className="card"><h3>{t}</h3><p className="muted">{d}</p></div>)}
          </div>
          <p className="note" style={{ marginTop: 32 }}>After the report, you can fix things yourself, or ask us about a <a href="/services/website-maintenance/">maintenance plan</a>. Either is fine.</p>
        </div>
      </section>
      <Faq items={faqs} title="About the health check" />
    </>
  );
}
