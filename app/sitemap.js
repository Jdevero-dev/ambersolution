import { absoluteUrl } from '@/lib/site';
import { services } from '@/lib/data/services';
import { industries } from '@/lib/data/industries';
import { projects } from '@/lib/data/projects';
import { articles } from '@/lib/data/articles';

export default function sitemap() {
  const now = new Date('2026-10-24');
  const page = (path, priority = 0.7, lastModified = now) => ({ url: absoluteUrl(path), lastModified, priority });
  return [
    page('/', 1),
    page('/services/', 0.9),
    ...services.map((s) => page(`/services/${s.slug}/`, 0.9)),
    page('/partners/white-label-development/', 0.7),
    page('/industries/', 0.8),
    ...industries.map((i) => page(`/industries/${i.slug}/`, 0.8)),
    page('/projects/', 0.8),
    ...projects.map((p) => page(`/projects/${p.slug}/`, p.featured ? 0.7 : 0.6)),
    page('/resources/', 0.7),
    ...articles.map((a) => page(`/resources/${a.slug}/`, 0.6, new Date(a.updated))),
    page('/about/', 0.7),
    page('/how-we-work/', 0.6),
    page('/website-health-check/', 0.8),
    page('/request-a-quote/', 0.8),
    page('/contact/', 0.6),
    page('/privacy-policy/', 0.2),
    page('/terms-of-service/', 0.2),
    page('/payment-and-refund-policy/', 0.3),
  ];
}
