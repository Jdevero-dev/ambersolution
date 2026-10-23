import Breadcrumbs from '@/components/Breadcrumbs';
import Faq from '@/components/Faq';
import JsonLd from '@/components/JsonLd';
import InquiryForm from '@/components/InquiryForm';
import { whiteLabel as w } from '@/lib/data/services';
import { pageMeta } from '@/lib/site';
import { serviceSchema } from '@/lib/schema';

const path = '/partners/white-label-development/';
export const metadata = pageMeta({ title: w.title, description: w.metaDescription, path });

const faqs = [
  ['Will you contact our clients?', 'No, unless you ask us to. We work through you and your tools, under your brand.'],
  ['Do you sign NDAs?', 'Yes. An NDA and a partner agreement are signed before any client details are shared.'],
  ['How do you handle timezones?', 'We are based in the Philippines with flexible hours, so work often progresses overnight for U.S. and European agencies.'],
  ['What does it cost?', 'Per project or as a monthly retainer for maintenance work. Tell us about your typical projects and we will propose a structure.'],
];

export default function WhiteLabel() {
  return (
    <>
      <JsonLd data={serviceSchema({ name: w.h1, description: w.metaDescription, path, audience: 'Marketing and web agencies' })} />
      <section className="hero dark hero-simple">
        <div className="wrap">
          <Breadcrumbs items={[{ name: 'Services', href: '/services/' }, { name: 'White-label Development', href: path }]} />
          <p className="eyebrow">For agencies</p>
          <h1>{w.h1}</h1>
          <p className="lead muted">{w.lead}</p>
          <a className="btn btn-primary" href="#partner-form">Become a partner</a>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid grid-3">
          <div className="card"><h3>What we take on</h3><ul className="check-list"><li>Website and web app builds (<a href="/services/web-development/">web development</a>)</li><li>Monthly <a href="/services/website-maintenance/">maintenance</a> for your clients</li><li><a href="/services/ai-automation/">Automation</a>, chatbots and integrations</li><li>Bug fixes and rescue work</li></ul></div>
          <div className="card"><h3>How it works</h3><ol className="muted" style={{ paddingLeft: 18 }}><li>You send a brief or ticket</li><li>We confirm scope, timeline and price</li><li>We build in your repo or ours</li><li>You review, then deliver to your client</li></ol></div>
          <div className="card"><h3>Confidentiality</h3><ul className="check-list"><li>NDA before any client details</li><li>No direct client contact unless requested</li><li>Your branding on everything</li><li>Code and access handed to you</li></ul></div>
        </div>
      </section>

      <section className="section section-alt" id="partner-form">
        <div className="wrap two-col">
          <div>
            <p className="eyebrow">Partner inquiry</p>
            <h2>Tell us about your agency</h2>
            <p className="muted">What kind of projects do you take on, and where do you need extra hands? We reply within 12 hours.</p>
          </div>
          <div className="form-card"><InquiryForm kind="partner" /></div>
        </div>
      </section>
      <Faq items={faqs} title="Partner questions" />
    </>
  );
}
