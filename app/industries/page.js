import Breadcrumbs from '@/components/Breadcrumbs';
import CtaBand from '@/components/CtaBand';
import Icon from '@/components/Icon';
import { ProjectCard } from '@/components/Cards';
import { industries, industryCards } from '@/lib/data/industries';
import { projects } from '@/lib/data/projects';
import { pageMeta } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Industries We Serve',
  description: 'Websites, systems and automation for clinics, events, hospitality, e-commerce, service businesses and more. See solutions built for your industry.',
  path: '/industries/',
});

const cardIcons = { 'Restaurants & Food': 'food', 'Retail & E-commerce': 'cart', 'Real Estate': 'building', 'Education & Training': 'cap', 'Construction & Field Services': 'hammer', 'Marketing & Web Agencies': 'megaphone', 'Startups & SaaS': 'rocket' };

export default function IndustriesHub() {
  return (
    <>
      <section className="hero hero-light hero-simple">
        <div className="wrap">
          <Breadcrumbs items={[{ name: 'Industries', href: '/industries/' }]} />
          <p className="eyebrow">Industries</p>
          <h1>Industries We Serve</h1>
          <p className="lead muted">Built for business owners in every industry. Where we have delivered real projects, you&apos;ll find a full page of solutions and case studies.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid grid-2">
          {industries.map((i) => {
            const count = projects.filter((p) => p.industry === i.slug).length;
            return (
              <a key={i.slug} className="card card-link" href={`/industries/${i.slug}/`} style={{ padding: 32 }}>
                <div className="icon-box"><Icon name={i.icon} /></div>
                <h2 style={{ fontSize: '1.6rem' }}>{i.name}</h2>
                <p className="muted">{i.solutions.slice(0, 4).map((s) => s[0]).join(' · ')}</p>
                <span className="tag">{count} project{count === 1 ? '' : 's'}</span>
                <div className="arrow">See solutions →</div>
              </a>
            );
          })}
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="more-h">
        <div className="wrap">
          <p className="eyebrow">Also serving</p>
          <h2 id="more-h">More industries</h2>
          <div className="grid grid-3" style={{ marginTop: 28 }}>
            {industryCards.map(([name, text, href]) => (
              <a key={name} className="card card-link" href={href}>
                <div className="icon-box"><Icon name={cardIcons[name]} /></div>
                <h3>{name}</h3>
                <p className="muted">{text}</p>
                <div className="arrow">Learn more →</div>
              </a>
            ))}
            <a className="card card-link" href="/request-a-quote/" style={{ background: 'var(--ink)', color: 'var(--text-d)', borderColor: 'var(--ink)' }}>
              <h3>Don&apos;t see your industry?</h3>
              <p style={{ color: 'var(--muted-d)' }}>Most business problems look alike: bookings, data, follow-ups and a website that works. Tell us about yours.</p>
              <div className="arrow" style={{ color: 'var(--amber-2)' }}>Tell us about your business →</div>
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head"><div><p className="eyebrow">Featured</p><h2>Recent projects</h2></div><a className="text-link" href="/projects/">All projects</a></div>
          <div className="grid grid-3">{projects.filter((p) => p.featured).slice(0, 3).map((p) => <ProjectCard key={p.slug} p={p} />)}</div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
