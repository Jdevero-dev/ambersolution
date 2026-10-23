import Logo from './Logo';
import { services } from '@/lib/data/services';
import { industries } from '@/lib/data/industries';

const groups = ['Build', 'Maintain & Fix', 'Automate & Integrate', 'Grow'];

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Logo />
        <nav className="nav" aria-label="Main">
          <div className="nav-item">
            <a href="/services/">Services</a>
            <div className="dropdown mega">
              {groups.map((g) => (
                <div key={g}>
                  <div className="dd-label">{g}</div>
                  {services.filter((s) => s.group === g).map((s) => (
                    <a key={s.slug} href={`/services/${s.slug}/`}>{s.short}</a>
                  ))}
                </div>
              ))}
              <div>
                <div className="dd-label">For agencies</div>
                <a href="/partners/white-label-development/">White-label Development</a>
              </div>
              <div>
                <div className="dd-label">Not sure?</div>
                <a href="/website-health-check/">Free Website Health Check<span>Speed, security & SEO basics</span></a>
              </div>
            </div>
          </div>
          <div className="nav-item">
            <a href="/industries/">Industries</a>
            <div className="dropdown">
              {industries.map((i) => <a key={i.slug} href={`/industries/${i.slug}/`}>{i.name}</a>)}
              <a href="/industries/">All industries</a>
            </div>
          </div>
          <a href="/projects/">Projects</a>
          <a href="/resources/">Resources</a>
          <div className="nav-item">
            <a href="/about/">About</a>
            <div className="dropdown">
              <a href="/about/">About Amber Solutions</a>
              <a href="/how-we-work/">How We Work</a>
            </div>
          </div>
          <a href="/contact/">Contact</a>
        </nav>
        <div className="header-cta">
          <a className="btn btn-primary" href="/request-a-quote/">Request a Quote</a>
          <details className="mobile-nav">
            <summary aria-label="Open menu">Menu</summary>
            <div className="mobile-panel">
              <div className="dd-label">Services</div>
              <a href="/services/">All services</a>
              {services.map((s) => <a key={s.slug} href={`/services/${s.slug}/`}>{s.short}</a>)}
              <a href="/partners/white-label-development/">White-label for agencies</a>
              <div className="dd-label">Company</div>
              <a href="/industries/">Industries</a>
              <a href="/projects/">Projects</a>
              <a href="/resources/">Resources</a>
              <a href="/about/">About</a>
              <a href="/how-we-work/">How We Work</a>
              <a href="/contact/">Contact</a>
              <a href="/website-health-check/">Free Website Health Check</a>
              <a className="btn btn-primary" style={{ marginTop: 18, border: 0 }} href="/request-a-quote/">Request a Quote</a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
