import Icon from './Icon';
import ProjectVisual from './ProjectVisual';
import { industryLabels } from '@/lib/data/industries';
import { getService } from '@/lib/data/services';

export function ServiceCard({ s, dark }) {
  return (
    <a className="card card-link service-card" href={`/services/${s.slug}/`}>
      <div className="icon-box"><Icon name={s.icon} /></div>
      <div className="group">{s.group}</div>
      <h3>{s.short}</h3>
      <p className={dark ? 'muted' : 'muted'}>{s.card}</p>
      <div className="arrow">Explore {s.short.toLowerCase()} →</div>
    </a>
  );
}

export function ProjectCard({ p, priority }) {
  const svc = p.services.map((x) => getService(x)?.short).filter(Boolean).slice(0, 2).join(' · ');
  return (
    <a className="project-card" href={`/projects/${p.slug}/`}>
      <ProjectVisual variant={p.visual} label={p.name} image={p.image} priority={priority} />
      <div className="pc-body">
        <span className="tag">{industryLabels[p.industry]}</span>
        <h3>{p.name}</h3>
        <p>{p.type}{svc ? ` · ${svc}` : ''}</p>
      </div>
    </a>
  );
}
