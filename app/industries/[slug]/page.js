import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import Faq from '@/components/Faq';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import { ProjectCard } from '@/components/Cards';
import { industries, getIndustry } from '@/lib/data/industries';
import { projects } from '@/lib/data/projects';
import { pageMeta, site } from '@/lib/site';
import { serviceSchema } from '@/lib/schema';

export const dynamicParams = false;
export function generateStaticParams() { return industries.map((i) => ({ slug: i.slug })); }

export async function generateMetadata({ params }) {
  const i = getIndustry((await params).slug);
  return pageMeta({ title: i.title, description: i.metaDescription, path: `/industries/${i.slug}/` });
}

export default async function IndustryPage({ params }) {
  const i = getIndustry((await params).slug);
  if (!i) notFound();
  const path = `/industries/${i.slug}/`;
  const cases = projects.filter((p) => p.industry === i.slug);

  return (
    <>
      <JsonLd data={serviceSchema({ name: i.h1, description: i.metaDescription, path, audience: i.name })} />
      <section className="hero dark hero-simple">
        <div className="wrap">
          <Breadcrumbs items={[{ name: 'Industries', href: '/industries/' }, { name: i.name, href: path }]} />
          <p className="eyebrow">{i.name}</p>
          <h1 style={{ maxWidth: '18ch' }}>{i.h1}</h1>
          <p className="lead muted">{i.lead}</p>
          <div className="btn-row">
            <a className="btn btn-primary" href="/request-a-quote/">Request a Quote</a>
            <a className="btn btn-ghost" href="#case-studies">See {i.name.toLowerCase()} projects</a>
          </div>
        </div>
      </section>

      {i.slug === 'healthcare' && (
        <section className="section-tight dark" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="facts">
              <div><strong>7+ yrs</strong><span>U.S. healthcare operations experience</span></div>
              <div><strong>100+</strong><span>U.S. insurance payer portals navigated</span></div>
              <div><strong>{cases.length}</strong><span>Healthcare projects delivered</span></div>
              <div><strong>U.S. & PH</strong><span>Clinics we have built for</span></div>
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Challenges</p>
          <h2>What slows {i.name.toLowerCase()} businesses down</h2>
          <div className="grid grid-2" style={{ marginTop: 28 }}>
            {i.challenges.map(([t, d]) => <div key={t} className="card"><h3>{t}</h3><p className="muted">{d}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <p className="eyebrow">Solutions</p>
          <h2>What we build for {i.name.toLowerCase()}</h2>
          <div className="grid grid-3" style={{ marginTop: 28 }}>
            {i.solutions.map(([t, d, svc]) => {
              const href = svc ? `/services/${svc}/` : '/partners/white-label-development/';
              return (
                <a key={t} className="card card-link" href={href}>
                  <h3>{t}</h3><p className="muted">{d}</p><div className="arrow">Learn more →</div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap">
          <p className="eyebrow">How it fits together</p>
          <h2>A typical workflow</h2>
          <ol className="flow" style={{ marginTop: 28 }}>
            {i.workflow.map((w, n) => <li key={w}><small>STEP {n + 1}</small>{w}</li>)}
          </ol>
        </div>
      </section>

      <section className="section" id="case-studies">
        <div className="wrap">
          <p className="eyebrow">Case studies</p>
          <h2>{i.name} projects</h2>
          <div className="grid grid-3" style={{ marginTop: 28 }}>{cases.map((p) => <ProjectCard key={p.slug} p={p} />)}</div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap grid grid-2" style={{ gap: 48 }}>
          <div>
            <p className="eyebrow">Features</p>
            <h2>Recommended features</h2>
            <ul className="check-list">{i.features.map((f) => <li key={f}>{f}</li>)}</ul>
          </div>
          <div>
            <p className="eyebrow">Integrations</p>
            <h2>Works with</h2>
            <ul className="chips">{i.integrations.map((f) => <li key={f}>{f}</li>)}</ul>
            {i.note && <p className="note" style={{ marginTop: 28 }}>{i.note}</p>}
          </div>
        </div>
      </section>

      <Faq items={i.faqs} title={`${i.name}: common questions`} />
      <CtaBand title={`Let's fix the slowest part of your ${i.name.split(' ')[0].toLowerCase()} workflow.`} />
    </>
  );
}
