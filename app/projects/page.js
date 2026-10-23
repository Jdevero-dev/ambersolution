import Breadcrumbs from '@/components/Breadcrumbs';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import { ProjectCard } from '@/components/Cards';
import { projects, featuredProjects, labProjects, passionProjects } from '@/lib/data/projects';
import { pageMeta, absoluteUrl } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Projects & Case Studies',
  description: 'Real projects for clinics, events, hospitality, e-commerce and service businesses: CRMs, booking systems, websites and AI automations.',
  path: '/projects/',
});

const groups = [
  ['Websites & e-commerce', (p) => p.services.includes('web-development')],
  ['Custom software', (p) => p.services.includes('custom-software')],
  ['Automation & AI', (p) => p.services.includes('ai-automation')],
];

export default function ProjectsHub() {
  const others = projects.filter((p) => !p.featured);
  return (
    <>
      <section className="hero hero-light hero-simple">
        <div className="wrap">
          <Breadcrumbs items={[{ name: 'Projects', href: '/projects/' }]} />
          <p className="eyebrow">Projects</p>
          <h1>Projects</h1>
          <p className="lead muted">{projects.length} client projects across healthcare, events, hospitality, e-commerce and service businesses. Real builds, explained.</p>
          <nav className="filters" aria-label="Jump to">
            <a href="#featured" aria-current="true">Featured</a>
            {groups.map(([g]) => <a key={g} href={`#${g.split(' ')[0].toLowerCase()}`}>{g}</a>)}
            <a href="#lab">Lab</a>
          </nav>
        </div>
      </section>

      <section className="section" id="featured">
        <div className="wrap">
          <h2>Featured case studies</h2>
          <div className="grid grid-3" style={{ marginTop: 24 }}>{featuredProjects.map((p, i) => <ProjectCard key={p.slug} p={p} priority={i < 3} />)}</div>
        </div>
      </section>

      {groups.map(([g, fn]) => (
        <section key={g} className="section-tight" id={g.split(' ')[0].toLowerCase()}>
          <div className="wrap">
            <h2>{g}</h2>
            <div className="grid grid-3" style={{ marginTop: 24 }}>{others.filter(fn).map((p) => <ProjectCard key={p.slug} p={p} />)}</div>
          </div>
        </section>
      ))}

      <section className="section dark" id="lab">
        <div className="wrap">
          <p className="eyebrow">Lab & internal tools</p>
          <h2>Things we built for ourselves</h2>
          <p className="muted measure">Internal automations that show how we work with n8n, APIs and AI.</p>
          <div className="grid grid-3" style={{ marginTop: 24 }}>
            {[...labProjects, passionProjects].map((l) => (
              <div key={l.name} className="card">
                <h3>{l.name}</h3>
                <p className="muted">{l.summary}</p>
                <ul className="chips">{l.stack.map((s) => <li key={s}>{s}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Have a similar project in mind?" />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'ItemList', name: 'Amber Solutions projects', itemListElement: projects.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.name, url: absoluteUrl(`/projects/${p.slug}/`) })) }} />
    </>
  );
}
