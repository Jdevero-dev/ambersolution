import Breadcrumbs from '@/components/Breadcrumbs';
import Faq from '@/components/Faq';
import CtaBand from '@/components/CtaBand';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import { ProjectCard } from '@/components/Cards';
import { services } from '@/lib/data/services';
import { featuredProjects } from '@/lib/data/projects';
import { pageMeta, absoluteUrl } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Web Development, Maintenance & Automation Services',
  description: 'Everything we do: websites, custom software, maintenance, AI automation, SEO setup and white-label development. Find the right service for your business.',
  path: '/services/',
});

const guide = [
  ['I need a new website or app', '/services/web-development/', 'Web Development'],
  ['We run on spreadsheets and chat threads', '/services/custom-software/', 'Custom Software'],
  ['My website is broken, slow or unmaintained', '/services/website-maintenance/', 'Website Maintenance'],
  ['We do too much by hand', '/services/ai-automation/', 'AI & Automation'],
  ['Google can\'t find us', '/services/seo/', 'SEO & Growth Setup'],
  ['I run an agency and need extra hands', '/partners/white-label-development/', 'White-label Development'],
];

const faqs = [
  ['Can you handle a project that covers several services?', 'Yes. Most projects do: a website with booking, an automation that feeds a CRM, then maintenance after launch. One team handles all of it.'],
  ['Do you only work with Philippine businesses?', 'No. We are based in the Philippines and work with clients worldwide.'],
  ['Do you outsource any work?', 'Our core stack is built in-house. For platforms like WordPress, Wix or Shopify we may work with vetted specialists; we stay accountable for quality and say so in the agreement.'],
  ['How do I get a price?', 'Send a quote request. We reply within 12 hours and quote after a short discovery call.'],
];

export default function ServicesHub() {
  return (
    <>
      <section className="hero dark hero-simple">
        <div className="wrap">
          <Breadcrumbs items={[{ name: 'Services', href: '/services/' }]} />
          <p className="eyebrow">Services</p>
          <h1>Services</h1>
          <p className="lead muted">Five ways we help business owners: build it, keep it running, automate it, help people find it, and support agencies behind the scenes.</p>
          <a className="btn btn-primary" href="/request-a-quote/">Request a Quote</a>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid" style={{ gap: 20 }}>
          {services.map((s, i) => (
            <article key={s.slug} className="card" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.3fr)', gap: 28 }}>
              <div>
                <div className="icon-box"><Icon name={s.icon} /></div>
                <p className="eyebrow" style={{ marginBottom: 6 }}>{String(i + 1).padStart(2, '0')} · {s.group}</p>
                <h2 style={{ fontSize: '1.7rem' }}><a href={`/services/${s.slug}/`} style={{ textDecoration: 'none' }}>{s.short}</a></h2>
                <p className="muted">{s.card}</p>
                <a className="text-link" href={`/services/${s.slug}/`}>Explore {s.short.toLowerCase()}</a>
              </div>
              <ul className="check-list">
                {(s.types || s.maintains || []).slice(0, 6).map(([t]) => <li key={t}>{t}</li>)}
                {!s.types && !s.maintains && s.included.slice(0, 6).map((t) => <li key={t}>{t}</li>)}
              </ul>
            </article>
          ))}
          <article className="card" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.3fr)', gap: 28 }}>
            <div>
              <div className="icon-box"><Icon name="handshake" /></div>
              <p className="eyebrow" style={{ marginBottom: 6 }}>06 · For agencies</p>
              <h2 style={{ fontSize: '1.7rem' }}><a href="/partners/white-label-development/" style={{ textDecoration: 'none' }}>White-label Development</a></h2>
              <p className="muted">Overflow builds, maintenance and automation delivered under your agency&apos;s brand.</p>
              <a className="text-link" href="/partners/white-label-development/">Partner with us</a>
            </div>
            <ul className="check-list"><li>Website and web app builds</li><li>Maintenance for your clients&apos; sites</li><li>Automation and integrations</li><li>NDA and no direct client contact</li></ul>
          </article>
        </div>
        <style>{`@media (max-width: 760px){ .section article.card{ grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <section className="section section-alt" aria-labelledby="guide-h">
        <div className="wrap">
          <p className="eyebrow">Not sure what you need?</p>
          <h2 id="guide-h">Start from the problem.</h2>
          <div className="grid grid-3" style={{ marginTop: 28 }}>
            {guide.map(([q, href, label]) => (
              <a key={href} className="card card-link" href={href}>
                <h3 style={{ fontSize: '1.1rem' }}>&ldquo;{q}&rdquo;</h3>
                <div className="arrow">{label} →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div><p className="eyebrow">Proof</p><h2>Projects across our services</h2></div>
            <a className="text-link" href="/projects/">All projects</a>
          </div>
          <div className="grid grid-3">{featuredProjects.slice(0, 3).map((p) => <ProjectCard key={p.slug} p={p} />)}</div>
          <p style={{ marginTop: 28 }}>Want to know how a project runs? <a className="text-link" href="/how-we-work/">See how we work</a></p>
        </div>
      </section>

      <Faq items={faqs} title="Questions about our services" />
      <CtaBand />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'ItemList', name: 'Amber Solutions services', itemListElement: services.map((s, i) => ({ '@type': 'ListItem', position: i + 1, name: s.short, url: absoluteUrl(`/services/${s.slug}/`) })) }} />
    </>
  );
}
