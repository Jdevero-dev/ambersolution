import Breadcrumbs from '@/components/Breadcrumbs';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import { ServiceCard } from '@/components/Cards';
import { services } from '@/lib/data/services';
import { site, pageMeta, absoluteUrl } from '@/lib/site';
import { orgId } from '@/lib/schema';

export const metadata = pageMeta({
  title: 'About Amber Solutions: Founder-Led Digital Studio, Philippines',
  description: 'Meet Jun Michael Devero, founder of Amber Solutions: 7+ years in U.S. healthcare operations, now building websites, systems and automation for businesses worldwide.',
  path: '/about/',
});

const practices = [
  ['Written scope before work', 'You know what you are getting, by when, and for how much, before anything starts.'],
  ['Weekly updates', 'Progress you can see, with a preview link, not silence until launch day.'],
  ['You own everything', 'Domains, hosting, code and accounts are set up in your name or transferred at handover.'],
  ['Confidential by default', 'Client data is handled with the care learned in healthcare operations. NDAs on request.'],
  ['Tested, not guessed', 'AI-assisted development with manual QA and testing; prompts are written deliberately and checked.'],
  ['Honest claims', 'No fake reviews, invented numbers or promised rankings. Only what we can show.'],
];

const tools = ['Next.js', 'React', 'Node.js', 'Supabase', 'PostgreSQL', 'Firebase', 'Flutter', 'n8n', 'Make', 'Zapier', 'OpenAI', 'Claude', 'Gemini', 'Groq', 'Airtable', 'Google Sheets', 'PayMongo', 'Vercel', 'Google Analytics', 'Search Console'];

export default function About() {
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'AboutPage', url: absoluteUrl('/about/'), about: { '@id': orgId } }} />
      <section className="hero dark">
        <div className="wrap founder">
          <div className="portrait" aria-hidden="true">JD<small>Founder photo coming soon</small></div>
          <div>
            <Breadcrumbs items={[{ name: 'About', href: '/about/' }]} />
            <p className="eyebrow">About Amber Solutions</p>
            <h1>About Amber Solutions</h1>
            <p className="lead muted">We build and maintain the websites, systems and automations that business owners depend on, so they can spend their time on the business.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid grid-2" style={{ gap: 56, alignItems: 'start' }}>
          <div>
            <p className="eyebrow">The founder</p>
            <h2>From doing the manual work to building the systems</h2>
          </div>
          <div className="measure">
            <p>Before building software, <strong>{site.founder.name}</strong> spent 7+ years inside U.S. healthcare operations: verifying insurance eligibility and benefits, chasing prior authorizations, working claims and appeals, and navigating 100+ payer portals for Medicare Advantage, Medicaid, commercial and government plans.</p>
            <p>That work is repetitive, deadline-driven and unforgiving of mistakes. It is also exactly the kind of work good systems can take off people&apos;s plates.</p>
            <p>Over the last 3+ years he has built AI-powered workflows, chatbots, CRMs, booking systems, APIs and web applications for business clients, from a U.S. infusion clinic&apos;s scheduling grid to wedding marketplaces and e-commerce stores. Amber Solutions is the studio built around that work.</p>
            <p>He builds systems the way operators wish they were built: fewer clicks, fewer handoffs, and fewer things that break at 5pm on a Friday.</p>
            <a className="text-link" href={site.founder.linkedin} rel="noopener">Connect on LinkedIn</a>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap">
          <p className="eyebrow">How we work</p>
          <h2>Values, written as practices</h2>
          <div className="grid grid-3" style={{ marginTop: 28 }}>
            {practices.map(([t, d]) => <div key={t} className="card"><h3>{t}</h3><p className="muted">{d}</p></div>)}
          </div>
          <p style={{ marginTop: 28 }}><a className="text-link" href="/how-we-work/">See our full process and how we work across timezones</a></p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">What we do</p>
          <h2>Services</h2>
          <div className="grid grid-3" style={{ marginTop: 24 }}>{services.map((s) => <ServiceCard key={s.slug} s={s} />)}</div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap grid grid-2" style={{ gap: 48, alignItems: 'start' }}>
          <div>
            <p className="eyebrow">Technology</p>
            <h2>Tools we actually use</h2>
            <ul className="chips">{tools.map((t) => <li key={t}>{t}</li>)}</ul>
            <p className="note" style={{ marginTop: 24 }}>For WordPress, Wix and Shopify work we partner with vetted specialists. We manage the project, check the quality and stay accountable to you.</p>
          </div>
          <div>
            <p className="eyebrow">Business details</p>
            <h2>Who you&apos;re contracting with</h2>
            <div className="table-wrap">
              <table>
                <tbody>
                  <tr><td>Business name</td><td>{site.name}</td></tr>
                  <tr><td>Type</td><td>Sole proprietorship, Philippines</td></tr>
                  <tr><td>Registration</td><td>{site.registration}</td></tr>
                  <tr><td>Location</td><td>{site.locality}, {site.region}, {site.country}</td></tr>
                  <tr><td>Area served</td><td>Worldwide</td></tr>
                  <tr><td>Invoicing</td><td>Official invoices; payments via PayMongo (PH) and Wise (international)</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <CtaBand title="Discuss your project with the person who'll build it." primary={{ label: 'Discuss your project', href: '/request-a-quote/' }} />
    </>
  );
}
