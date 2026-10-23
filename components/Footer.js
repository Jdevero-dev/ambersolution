import Logo from './Logo';
import { site } from '@/lib/site';
import { services } from '@/lib/data/services';
import { industries } from '@/lib/data/industries';

export default function Footer() {
  const year = 2026;
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo />
            <p style={{ marginTop: 16, maxWidth: 34 + 'ch' }}>
              Websites, business systems, maintenance and automation for business owners worldwide.
            </p>
            <p style={{ fontSize: '0.85rem' }}>Registered business in the Philippines · {site.registration}</p>
          </div>
          <div>
            <h2>Services</h2>
            <ul>
              {services.map((s) => <li key={s.slug}><a href={`/services/${s.slug}/`}>{s.short}</a></li>)}
              <li><a href="/partners/white-label-development/">White-label Development</a></li>
            </ul>
          </div>
          <div>
            <h2>Industries</h2>
            <ul>
              {industries.map((i) => <li key={i.slug}><a href={`/industries/${i.slug}/`}>{i.name}</a></li>)}
              <li><a href="/industries/">All industries</a></li>
            </ul>
          </div>
          <div>
            <h2>Company</h2>
            <ul>
              <li><a href="/about/">About</a></li>
              <li><a href="/how-we-work/">How We Work</a></li>
              <li><a href="/projects/">Projects</a></li>
              <li><a href="/resources/">Resources</a></li>
              <li><a href="/website-health-check/">Free Health Check</a></li>
              <li><a href="/request-a-quote/">Request a Quote</a></li>
              <li><a href="/contact/">Contact</a></li>
            </ul>
          </div>
          <div>
            <h2>Contact</h2>
            <ul>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><a href={site.whatsapp}>WhatsApp {site.phoneDisplay}</a></li>
              <li><a href={site.viber}>Viber {site.phoneDisplay}</a></li>
              <li><a href={`tel:${site.phoneE164}`}>Call {site.phoneDisplay}</a></li>
            </ul>
            <p style={{ marginTop: 14 }}>{site.locality}, {site.region}, {site.country}<br />Serving clients worldwide</p>
            {site.social.length > 0 && (
              <ul style={{ display: 'flex', gap: 14 }}>
                {site.social.map((s) => <li key={s.href}><a href={s.href} rel="me noopener">{s.label}</a></li>)}
              </ul>
            )}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} {site.name}. All rights reserved.</span>
          <nav aria-label="Legal">
            <a href="/privacy-policy/">Privacy Policy</a>
            <a href="/terms-of-service/">Terms of Service</a>
            <a href="/payment-and-refund-policy/">Payment & Refund Policy</a>
            <a href="/sitemap.xml">Sitemap</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
