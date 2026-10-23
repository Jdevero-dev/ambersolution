import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import Faq from '@/components/Faq';
import CtaBand from '@/components/CtaBand';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import ProjectVisual from '@/components/ProjectVisual';
import { ProjectCard, ServiceCard } from '@/components/Cards';
import { services, getService } from '@/lib/data/services';
import { getProject } from '@/lib/data/projects';
import { getIndustry } from '@/lib/data/industries';
import { getArticle } from '@/lib/data/articles';
import { pageMeta } from '@/lib/site';
import { serviceSchema } from '@/lib/schema';

export const dynamicParams = false;
export function generateStaticParams() { return services.map((s) => ({ slug: s.slug })); }

export async function generateMetadata({ params }) {
  const s = getService((await params).slug);
  return pageMeta({ title: s.title, description: s.metaDescription, path: `/services/${s.slug}/` });
}

function MaintenanceHeroBoard() {
  return (
    <div className="status-board" role="img" aria-label="Example monthly maintenance report">
      <header><span>MONTHLY CARE REPORT</span><span>yourbusiness.com</span></header>
      <div className="status-row"><b>Uptime monitoring</b><span className="status-ok"><i className="dot" />Online</span></div>
      <div className="status-row"><b>Backups</b><span className="status-ok"><i className="dot" />Restore tested</span></div>
      <div className="status-row"><b>Security updates</b><span className="status-ok"><i className="dot" />Applied</span></div>
      <div className="status-row"><b>Contact & booking forms</b><span className="status-ok"><i className="dot" />Delivering</span></div>
      <div className="status-row"><b>Mobile speed</b><span className="status-warn">2 images to compress</span></div>
      <div className="status-row"><b>SSL certificate</b><span className="status-ok"><i className="dot" />Valid</span></div>
    </div>
  );
}

export default async function ServicePage({ params }) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const path = `/services/${s.slug}/`;
  const isMaint = s.slug === 'website-maintenance';
  const projects = s.relatedProjects.map(getProject).filter(Boolean);
  const heroProject = projects[0];

  return (
    <>
      <JsonLd data={serviceSchema({ name: s.h1, description: s.metaDescription, path })} />
      <section className="hero dark">
        <div className="wrap hero-grid">
          <div>
            <Breadcrumbs items={[{ name: 'Services', href: '/services/' }, { name: s.short, href: path }]} />
            <p className="eyebrow">{s.group}</p>
            <h1>{s.h1}</h1>
            <p className="lead muted">{s.lead}</p>
            <div className="btn-row">
              {isMaint ? (
                <>
                  <a className="btn btn-primary" href="/website-health-check/">Get a Free Website Health Check</a>
                  <a className="btn btn-ghost" href="/request-a-quote/">Ask for plan pricing</a>
                </>
              ) : (
                <>
                  <a className="btn btn-primary" href="/request-a-quote/">Request a Quote</a>
                  <a className="btn btn-ghost" href="#projects">See related projects</a>
                </>
              )}
            </div>
          </div>
          {isMaint ? <MaintenanceHeroBoard /> : heroProject && (
            <div className="cs-visual"><ProjectVisual variant={heroProject.visual} label={heroProject.name} image={heroProject.image} priority /></div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="wrap grid grid-2" style={{ gap: 48, alignItems: 'start' }}>
          <div>
            <p className="eyebrow">Problems we solve</p>
            <h2>Sound familiar?</h2>
            <p className="muted">These are the situations that usually bring business owners to us.</p>
          </div>
          <ul className="pain-list">{s.problems.map((p) => <li key={p}>{p}</li>)}</ul>
        </div>
      </section>

      {s.types && (
        <section className="section section-alt">
          <div className="wrap">
            <p className="eyebrow">What we build</p>
            <h2>{s.slug === 'ai-automation' ? 'What we automate' : 'What we build'}</h2>
            <div className="grid grid-3" style={{ marginTop: 28 }}>
              {s.types.map(([t, d]) => <div key={t} className="card"><h3>{t}</h3><p className="muted">{d}</p></div>)}
            </div>
          </div>
        </section>
      )}

      {s.maintains && (
        <section className="section section-alt">
          <div className="wrap">
            <p className="eyebrow">What we maintain</p>
            <h2>Websites and the systems behind them</h2>
            <div className="grid grid-3" style={{ marginTop: 28 }}>
              {s.maintains.map(([t, d]) => <div key={t} className="card"><h3>{t}</h3><p className="muted">{d}</p></div>)}
            </div>
          </div>
        </section>
      )}

      {s.plans && (
        <section className="section" aria-labelledby="plans-h">
          <div className="wrap">
            <p className="eyebrow">Plans</p>
            <h2 id="plans-h">Choose the level of support you need</h2>
            <p className="muted measure">Pricing depends on your platform and size, so every plan is quoted after a free health check. Plans are month to month after the first term.</p>
            <div className="table-wrap" style={{ marginTop: 24 }}>
              <table>
                <thead><tr><th scope="col">Included</th>{s.plans.columns.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
                <tbody>
                  {s.plans.rows.map(([label, ...vals]) => (
                    <tr key={label}><td>{label}</td>{vals.map((v, i) => <td key={i}>{v}</td>)}</tr>
                  ))}
                  <tr><td>Pricing</td>{s.plans.columns.map((c) => <td key={c}><a className="text-link" href="/request-a-quote/">Request pricing</a></td>)}</tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {s.workflow && (
        <section className="section dark">
          <div className="wrap">
            <p className="eyebrow">Example workflow</p>
            <h2>From ad lead to booked appointment, without anyone copying data</h2>
            <ol className="flow" style={{ marginTop: 28 }}>
              {s.workflow.map((w, i) => <li key={w}><small>STEP {i + 1}</small>{w}</li>)}
            </ol>
            <p className="muted" style={{ marginTop: 20 }}>Based on our <a className="text-link" href="/projects/clinic-lead-to-appointment-automation/">clinic lead-to-appointment automation</a>.</p>
          </div>
        </section>
      )}

      <section className="section">
        <div className="wrap grid grid-2" style={{ gap: 40, alignItems: 'start' }}>
          <div>
            <p className="eyebrow">Scope</p>
            <h2>What&apos;s included</h2>
            <ul className="check-list">{s.included.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
          <div>
            <h3 style={{ marginTop: 8 }}>Not included</h3>
            <ul className="x-list" style={{ marginBottom: 32 }}>{s.notIncluded.map((x) => <li key={x}>{x}</li>)}</ul>
            <h3>What you receive</h3>
            <ul className="check-list">{s.deliverables.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        </div>
      </section>

      {s.comparison && (
        <section className="section section-alt">
          <div className="wrap">
            <p className="eyebrow">Off-the-shelf vs custom</p>
            <h2>When custom software is worth it</h2>
            <div className="table-wrap" style={{ marginTop: 24 }}>
              <table>
                <thead><tr><th scope="col"></th><th scope="col">Off-the-shelf tool</th><th scope="col">Custom system</th></tr></thead>
                <tbody>{s.comparison.map(([a, b, c]) => <tr key={a}><td>{a}</td><td>{b}</td><td>{c}</td></tr>)}</tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      <section className="section dark">
        <div className="wrap">
          <div className="grid grid-2" style={{ gap: 48 }}>
            <div>
              <p className="eyebrow">Who it&apos;s for</p>
              <h2>A good fit if you are&hellip;</h2>
              <ul className="check-list">{s.whoFor.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
            <div>
              <p className="eyebrow">Technology</p>
              <h2>Tools we use</h2>
              <ul className="chips">{s.tech.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
          </div>
          <h2 style={{ marginTop: 64 }}>How it works</h2>
          <ol className="process" style={{ marginTop: 20 }}>
            {s.process.map(([t, d]) => <li key={t}><strong>{t}</strong><span>{d}</span></li>)}
          </ol>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="wrap">
          <div className="section-head">
            <div><p className="eyebrow">Related projects</p><h2>Work we&apos;ve done</h2></div>
            <a className="text-link" href="/projects/">All projects</a>
          </div>
          <div className="grid grid-3">{projects.slice(0, 3).map((p) => <ProjectCard key={p.slug} p={p} />)}</div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <p className="eyebrow">Related</p>
          <h2>Related services & industries</h2>
          <div className="grid grid-3" style={{ marginTop: 24 }}>
            {s.relatedServices.map(getService).filter(Boolean).map((r) => <ServiceCard key={r.slug} s={r} />)}
          </div>
          <ul className="chips" style={{ marginTop: 24 }}>
            {s.relatedIndustries.map(getIndustry).filter(Boolean).map((i) => (
              <li key={i.slug}><a href={`/industries/${i.slug}/`} style={{ textDecoration: 'none' }}>{i.name} →</a></li>
            ))}
            {s.articles.map(getArticle).filter(Boolean).map((a) => (
              <li key={a.slug}><a href={`/resources/${a.slug}/`} style={{ textDecoration: 'none' }}>Guide: {a.title}</a></li>
            ))}
          </ul>
        </div>
      </section>

      <Faq items={s.faqs} title={`${s.short}: common questions`} />
      <CtaBand
        title={isMaint ? 'Find out what your website needs first.' : `Let's talk about your ${s.short.toLowerCase()} project.`}
        primary={isMaint ? { label: 'Get a Free Health Check', href: '/website-health-check/' } : { label: 'Request a Quote', href: '/request-a-quote/' }}
        secondary={isMaint ? { label: 'Request pricing', href: '/request-a-quote/' } : { label: 'Free Website Health Check', href: '/website-health-check/' }}
      />
    </>
  );
}
