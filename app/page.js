import Icon from '@/components/Icon';
import Faq from '@/components/Faq';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import { ServiceCard, ProjectCard } from '@/components/Cards';
import { services } from '@/lib/data/services';
import { featuredProjects } from '@/lib/data/projects';
import { industries, industryCards } from '@/lib/data/industries';
import { articles } from '@/lib/data/articles';
import { site, pageMeta, absoluteUrl } from '@/lib/site';
import { orgId } from '@/lib/schema';

export const metadata = pageMeta({
  title: 'Websites, Business Systems & Automation | Amber Solutions',
  absoluteTitle: true,
  description:
    'Websites, custom business systems, maintenance and AI automation for business owners worldwide. Founder-led studio based in the Philippines.',
  path: '/',
});

const faqs = [
  ['What does Amber Solutions build?', 'Business websites, e-commerce stores, booking systems, CRMs, client portals, mobile apps, AI chatbots and workflow automations, plus ongoing maintenance for websites and systems.'],
  ['Do you work with clients outside the Philippines?', 'Yes. We are based in the Philippines and work with clients worldwide, with flexible hours that overlap U.S., Australian, UK and European business days.'],
  ['How long does a project take?', 'A business website typically takes 3 to 6 weeks. Custom systems depend on scope; you get a timeline in the written proposal.'],
  ['How does pricing work?', 'Every project is quoted after a short discovery call. Send a request and we reply within 12 hours.'],
  ['Who owns the code and accounts?', 'You do. Domains, hosting, code and third-party accounts are set up in your name or transferred at handover.'],
  ['What happens after launch?', 'Every build includes a support period. After that you can move to a monthly maintenance plan or manage it yourself.'],
];

const industryIcons = { 'Restaurants & Food': 'food', 'Retail & E-commerce': 'cart', 'Real Estate': 'building', 'Education & Training': 'cap', 'Construction & Field Services': 'hammer', 'Marketing & Web Agencies': 'megaphone', 'Startups & SaaS': 'rocket' };

export default function Home() {
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'WebSite', name: site.name, url: absoluteUrl('/'), publisher: { '@id': orgId } }} />

      {/* Hero */}
      <section className="hero dark">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">Websites · Systems · Maintenance · Automation</p>
            <h1>Systems built by someone who&apos;s <em>done the work.</em></h1>
            <p className="lead muted">
              Websites, custom business systems, maintenance and AI automation, built and supported by an operator who
              has worked inside the workflows you&apos;re trying to fix.
            </p>
            <div className="btn-row">
              <a className="btn btn-primary" href="/request-a-quote/">Request a Quote</a>
              <a className="btn btn-ghost" href="/website-health-check/">Get a Free Website Health Check</a>
            </div>
            <div className="hero-meta">
              <span><i className="dot" /> {site.tagline}</span>
              <span>{site.responseTime}</span>
            </div>
          </div>
          <div className="status-board" aria-label="Example of systems we build and maintain" role="img">
            <header><span>OPS BOARD · TODAY</span><span>EXAMPLE</span></header>
            <div className="status-row"><b>New lead · Facebook ad</b><span className="status-warn">Urgent → staff alerted</span></div>
            <div className="status-row"><b>Booking · Chair 3, 10:30</b><span className="status-ok"><i className="dot" />Confirmed</span></div>
            <div className="status-row"><b>AI chat · 02:14 inquiry</b><span className="status-ok"><i className="dot" />Answered</span></div>
            <div className="status-row"><b>Website uptime</b><span className="status-ok"><i className="dot" />Online</span></div>
            <div className="status-row"><b>Nightly backup</b><span className="status-ok"><i className="dot" />Complete</span></div>
            <div className="status-row"><b>Plugin updates</b><span className="status-warn">2 waiting for review</span></div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="trust-strip">
        <div className="wrap">
          <ul>
            <li><Icon name="doc" /> Registered PH business</li>
            <li><Icon name="check" /> Official invoices & written agreements</li>
            <li><Icon name="user" /> Founder-led: you work with the builder</li>
            <li><Icon name="globe" /> Clients worldwide</li>
            <li><Icon name="clock" /> Replies within 12 hours</li>
          </ul>
        </div>
      </div>

      {/* Problem */}
      <section className="section">
        <div className="wrap grid grid-2" style={{ alignItems: 'start', gap: 48 }}>
          <div>
            <p className="eyebrow">Who we help</p>
            <h2>For business owners who are tired of doing everything manually.</h2>
            <p className="muted lead">
              You didn&apos;t start a business to copy data between spreadsheets or chase the developer who built your website.
              We take the technical work off your plate.
            </p>
          </div>
          <ul className="pain-list">
            <li>Bookings and inquiries arrive by chat and get lost in the thread.</li>
            <li>Customer and order data lives in five spreadsheets that never match.</li>
            <li>Your website hasn&apos;t been updated in months and nobody owns it.</li>
            <li>Leads that message after hours buy from someone else by morning.</li>
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="section section-alt" aria-labelledby="services-h">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Services</p>
              <h2 id="services-h">Build it, keep it running, make it work for you.</h2>
            </div>
            <p className="muted">One team for the website, the system behind it, and the automations around it.</p>
          </div>
          <div className="grid grid-3">
            {services.map((s) => <ServiceCard key={s.slug} s={s} />)}
            <a className="card card-link service-card" href="/partners/white-label-development/">
              <div className="icon-box"><Icon name="handshake" /></div>
              <div className="group">For agencies</div>
              <h3>White-label Development</h3>
              <p className="muted">Overflow development, maintenance and automation delivered under your brand.</p>
              <div className="arrow">Partner with us →</div>
            </a>
          </div>
        </div>
      </section>

      {/* Maintenance spotlight */}
      <section className="section dark">
        <div className="wrap grid grid-2" style={{ alignItems: 'center', gap: 48 }}>
          <div>
            <p className="eyebrow">Already have a website or system?</p>
            <h2>We&apos;ll keep it running, even if we didn&apos;t build it.</h2>
            <p className="muted lead">
              Updates, backups, security checks, fixes and a plain-English report every month. Start with a free health
              check and we&apos;ll tell you what needs attention first.
            </p>
            <div className="btn-row">
              <a className="btn btn-primary" href="/website-health-check/">Get a Free Health Check</a>
              <a className="btn btn-ghost" href="/services/website-maintenance/">See maintenance plans</a>
            </div>
          </div>
          <ul className="check-list" style={{ fontSize: '1.05rem' }}>
            <li>Speed and Core Web Vitals</li>
            <li>Security updates, SSL and backups</li>
            <li>Forms, checkout and booking flows tested</li>
            <li>CRM, integrations and automations monitored</li>
            <li>SEO basics: indexing, titles, sitemap</li>
            <li>Monthly summary you can actually read</li>
          </ul>
        </div>
      </section>

      {/* Featured projects */}
      <section className="section" aria-labelledby="projects-h">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Projects</p>
              <h2 id="projects-h">Real systems for real businesses.</h2>
            </div>
            <a className="text-link" href="/projects/">View all projects</a>
          </div>
          <div className="grid grid-3">
            {featuredProjects.map((p) => <ProjectCard key={p.slug} p={p} />)}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section section-alt" aria-labelledby="ind-h">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Industries</p>
              <h2 id="ind-h">Built for business owners in every industry.</h2>
            </div>
            <a className="text-link" href="/industries/">All industries</a>
          </div>
          <div className="grid grid-4">
            {industries.map((i) => (
              <a key={i.slug} className="card card-link" href={`/industries/${i.slug}/`}>
                <div className="icon-box"><Icon name={i.icon} /></div>
                <h3>{i.name}</h3>
                <div className="arrow">See solutions →</div>
              </a>
            ))}
          </div>
          <ul className="chips" style={{ marginTop: 24 }}>
            {industryCards.map(([name]) => <li key={name}>{name}</li>)}
          </ul>
          <p style={{ marginTop: 20 }}>
            Don&apos;t see your industry? <a className="text-link" href="/request-a-quote/">Tell us about your business.</a>
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="section dark" aria-labelledby="founder-h">
        <div className="wrap founder">
          <div className="portrait" aria-hidden="true">JD<small>Founder photo coming soon</small></div>
          <div>
            <p className="eyebrow" id="founder-h">Who you&apos;ll work with</p>
            <blockquote>
              &ldquo;I spent seven years doing the manual work: verifying insurance, chasing authorizations, working through
              100+ payer portals. Now I build the systems I wish I&apos;d had.&rdquo;
            </blockquote>
            <p className="muted">
              <strong style={{ color: 'var(--text-d)' }}>{site.founder.name}</strong>, {site.founder.role}. You talk directly to the
              person building your project, from the first call to launch and beyond.
            </p>
            <div className="btn-row">
              <a className="btn btn-ghost" href="/about/">About Amber Solutions</a>
              <a className="text-link" href={site.founder.linkedin} rel="noopener" style={{ alignSelf: 'center' }}>LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section" aria-labelledby="process-h">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">How it works</p>
              <h2 id="process-h">Clear steps, written scope, weekly updates.</h2>
            </div>
            <a className="text-link" href="/how-we-work/">How we work remotely</a>
          </div>
          <ol className="process">
            <li><strong>Discover</strong><span>A call to understand your business and goals.</span></li>
            <li><strong>Plan</strong><span>Written scope, timeline and quote.</span></li>
            <li><strong>Build</strong><span>Development with weekly progress updates.</span></li>
            <li><strong>Test</strong><span>Speed, mobile, forms and payments checked.</span></li>
            <li><strong>Launch & support</strong><span>Handover, training and maintenance.</span></li>
          </ol>
        </div>
      </section>

      {/* Resources */}
      <section className="section section-alt" aria-labelledby="res-h">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Resources</p>
              <h2 id="res-h">Practical guides for business owners.</h2>
            </div>
            <a className="text-link" href="/resources/">All resources</a>
          </div>
          <div className="grid grid-3">
            {articles.map((a) => (
              <a key={a.slug} className="card card-link" href={`/resources/${a.slug}/`}>
                <span className="tag">{a.category}</span>
                <h3 style={{ marginTop: 14 }}>{a.title}</h3>
                <p className="muted">{a.excerpt}</p>
                <div className="arrow">Read guide →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Faq items={faqs} />
      <CtaBand />
    </>
  );
}
