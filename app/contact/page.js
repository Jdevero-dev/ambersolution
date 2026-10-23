import Breadcrumbs from '@/components/Breadcrumbs';
import InquiryForm from '@/components/InquiryForm';
import ContactAside from '@/components/ContactAside';
import JsonLd from '@/components/JsonLd';
import { site, pageMeta, absoluteUrl } from '@/lib/site';
import { orgId } from '@/lib/schema';

export const metadata = pageMeta({
  title: 'Contact Amber Solutions',
  description: 'Email, WhatsApp, Viber or send a message. Amber Solutions is based in Marikina City, Philippines and works with clients worldwide.',
  path: '/contact/',
});

export default function Contact() {
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'ContactPage', url: absoluteUrl('/contact/'), mainEntity: { '@id': orgId, contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: site.email, telephone: site.phoneE164, availableLanguage: ['English', 'Filipino'], areaServed: 'Worldwide' } } }} />
      <section className="hero hero-light hero-simple">
        <div className="wrap">
          <Breadcrumbs items={[{ name: 'Contact', href: '/contact/' }]} />
          <h1>Contact Us</h1>
          <p className="lead muted">{site.tagline}. {site.responseTime}.</p>
        </div>
      </section>
      <section className="section-tight">
        <div className="wrap two-col">
          <div className="form-card">
            <h2 style={{ fontSize: '1.5rem' }}>Send a message</h2>
            <InquiryForm kind="contact" />
            <p className="muted" style={{ marginTop: 18, fontSize: '0.92rem' }}>Have a project in mind? The <a href="/request-a-quote/">quote form</a> gets you a faster, more detailed reply.</p>
          </div>
          <ContactAside title="Reach us directly" />
        </div>
      </section>
    </>
  );
}
