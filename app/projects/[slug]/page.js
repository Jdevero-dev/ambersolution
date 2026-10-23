import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import ProjectVisual from '@/components/ProjectVisual';
import { ProjectCard } from '@/components/Cards';
import { projects, getProject } from '@/lib/data/projects';
import { getService } from '@/lib/data/services';
import { getIndustry, industryLabels } from '@/lib/data/industries';
import { pageMeta, absoluteUrl } from '@/lib/site';
import { orgId } from '@/lib/schema';

export const dynamicParams = false;
export function generateStaticParams() { return projects.map((p) => ({ slug: p.slug })); }

export async function generateMetadata({ params }) {
  const p = getProject((await params).slug);
  return pageMeta({
    title: `${p.name}: ${p.type}`,
    description: `How we built ${p.type.toLowerCase()} for ${p.client}: ${p.features.slice(0, 3).join(', ').toLowerCase()}. Built with ${p.stack.join(', ')}.`.slice(0, 158),
    path: `/projects/${p.slug}/`,
  });
}

export default async function CaseStudy({ params }) {
  const p = getProject((await params).slug);
  if (!p) notFound();
  const path = `/projects/${p.slug}/`;
  const ind = getIndustry(p.industry);
  const related = projects.filter((x) => x.slug !== p.slug && (x.industry === p.industry || x.services.some((s) => p.services.includes(s)))).slice(0, 3);

  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'CreativeWork', name: `${p.name}: ${p.type}`, about: p.summary, url: absoluteUrl(path), creator: { '@id': orgId }, keywords: p.stack.join(', ') }} />
      <section className="hero dark">
        <div className="wrap hero-grid">
          <div>
            <Breadcrumbs items={[{ name: 'Projects', href: '/projects/' }, { name: p.name, href: path }]} />
            <span className="tag">{industryLabels[p.industry]}</span>
            <h1 style={{ marginTop: 16, fontSize: 'clamp(2rem, 4.4vw, 3.2rem)' }}>{p.name}: {p.type.charAt(0).toLowerCase() + p.type.slice(1)}</h1>
            <p className="lead muted">{p.summary}</p>
          </div>
          <div className="cs-visual"><ProjectVisual variant={p.visual} label={p.name} image={p.image} priority /></div>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <dl className="summary-box">
            <div><dt>Client</dt><dd>{p.client}</dd></div>
            <div><dt>Industry</dt><dd>{ind ? <a href={`/industries/${ind.slug}/`}>{ind.name}</a> : industryLabels[p.industry]}</dd></div>
            <div><dt>Services</dt><dd>{p.services.map((s) => getService(s)).filter(Boolean).map((s, i) => <span key={s.slug}>{i > 0 && ', '}<a href={`/services/${s.slug}/`}>{s.short}</a></span>)}</dd></div>
            <div><dt>Stack</dt><dd>{p.stack.join(', ')}</dd></div>
          </dl>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap grid grid-2" style={{ gap: 48, alignItems: 'start' }}>
          <div>
            <p className="eyebrow">The challenge</p>
            <h2>What needed solving</h2>
            <p className="lead">{p.challenge}</p>
          </div>
          <div>
            <p className="eyebrow">The solution</p>
            <h2>What we built</h2>
            <p className="lead">{p.solution}</p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap grid grid-2" style={{ gap: 48, alignItems: 'start' }}>
          <div>
            <p className="eyebrow">Key features</p>
            <h2>Inside the build</h2>
            <ul className="check-list">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
          </div>
          <div>
            {p.insight && (<><p className="eyebrow">Why it works</p><p className="note">{p.insight}</p></>)}
            {p.results.length > 0 && (
              <>
                <h3 style={{ marginTop: 28 }}>Results</h3>
                <ul className="check-list">{p.results.map((r) => <li key={r}>{r}</li>)}</ul>
              </>
            )}
            <h3 style={{ marginTop: 28 }}>Technology</h3>
            <ul className="chips">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section">
          <div className="wrap">
            <div className="section-head"><div><p className="eyebrow">More work</p><h2>Related projects</h2></div><a className="text-link" href="/projects/">All projects</a></div>
            <div className="grid grid-3">{related.map((r) => <ProjectCard key={r.slug} p={r} />)}</div>
          </div>
        </section>
      )}
      <CtaBand title="Need something similar?" text="Tell us what you want to build. We reply within 12 hours with next steps." />
    </>
  );
}
