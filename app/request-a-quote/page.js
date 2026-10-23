import Breadcrumbs from '@/components/Breadcrumbs';
import InquiryForm from '@/components/InquiryForm';
import ContactAside from '@/components/ContactAside';
import JsonLd from '@/components/JsonLd';
import { pageMeta, absoluteUrl } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Request a Quote',
  description: 'Tell us about your website, system or automation project. We reply within 12 hours with next steps and a custom quote.',
  path: '/request-a-quote/',
});

export default function Quote() {
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'ContactPage', url: absoluteUrl('/request-a-quote/') }} />
      <section className="hero hero-light hero-simple">
        <div className="wrap">
          <Breadcrumbs items={[{ name: 'Request a Quote', href: '/request-a-quote/' }]} />
          <h1>Request a Quote</h1>
          <p className="lead muted">Tell us what you need. Every project is quoted after we understand your needs; there is no obligation.</p>
        </div>
      </section>
      <section className="section-tight">
        <div className="wrap two-col">
          <div className="form-card"><InquiryForm kind="quote" /></div>
          <div className="grid" style={{ gap: 20 }}>
            <div className="card">
              <h3>What happens next</h3>
              <ol className="muted" style={{ paddingLeft: 18, margin: 0 }}>
                <li>We reply within 12 hours.</li>
                <li>A short discovery call or chat.</li>
                <li>A written proposal with scope, timeline and price.</li>
              </ol>
            </div>
            <ContactAside />
            <div className="card">
              <h3>Already have a website?</h3>
              <p className="muted">Start with a free check of its speed, security and SEO basics.</p>
              <a className="text-link" href="/website-health-check/">Get a free health check</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
