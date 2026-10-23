import { site, absoluteUrl } from './site';

export const orgId = absoluteUrl('/#organization');

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': orgId,
  name: site.name,
  url: absoluteUrl('/'),
  logo: absoluteUrl('/logo.png'),
  image: absoluteUrl('/og-image.png'),
  description: site.description,
  email: site.email,
  telephone: site.phoneE164,
  address: { '@type': 'PostalAddress', addressLocality: site.locality, addressRegion: site.region, addressCountry: site.countryCode },
  areaServed: 'Worldwide',
  knowsLanguage: ['en', 'fil'],
  founder: {
    '@type': 'Person',
    name: site.founder.name,
    jobTitle: site.founder.role,
    sameAs: [site.founder.linkedin, site.founder.portfolio],
  },
  sameAs: site.social.map((s) => s.href),
});

export const serviceSchema = ({ name, description, path, audience }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  serviceType: name,
  url: absoluteUrl(path),
  provider: { '@id': orgId },
  areaServed: 'Worldwide',
  ...(audience ? { audience: { '@type': 'BusinessAudience', name: audience } } : {}),
});
