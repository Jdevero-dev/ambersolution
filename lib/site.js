// Single source of truth for business (NAP) details.
// Keep these identical to Google Business Profile, directories and social profiles.

export const site = {
  name: 'Amber Solutions',
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ambersolutions.com').replace(/\/$/, ''),
  tagline: 'Based in the Philippines · Serving clients worldwide',
  description:
    'Websites, custom business systems, maintenance and AI automation for business owners worldwide. Founder-led studio based in the Philippines.',
  email: 'ambersolutions@gmail.com', // switch to hello@[domain] once the domain is live
  phoneDisplay: '+63 938 794 4493',
  phoneE164: '+639387944493',
  whatsapp: 'https://wa.me/639387944493',
  viber: 'viber://chat?number=%2B639387944493',
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || '',
  locality: 'Marikina City',
  region: 'Metro Manila',
  country: 'Philippines',
  countryCode: 'PH',
  registration: 'DTI No. pending', // replace with the DTI number once issued
  responseTime: 'Replies within 12 hours, 7 days a week',
  founder: {
    name: 'Jun Michael Devero',
    role: 'Founder & Lead Solutions Builder',
    linkedin: 'https://www.linkedin.com/in/jun-michael-a-devero-jr-691644298/',
    portfolio: 'https://jdevero-dev.vercel.app/',
  },
  // Add profile URLs as they are created; they also feed Organization schema "sameAs".
  social: [
    // { label: 'LinkedIn', href: 'https://www.linkedin.com/company/...' },
    // { label: 'Facebook', href: 'https://www.facebook.com/...' },
    // { label: 'Instagram', href: 'https://www.instagram.com/...' },
  ],
};

export const absoluteUrl = (path = '/') => `${site.url}${path}`;

// Shared page metadata builder: unique title, description, canonical, Open Graph.
export function pageMeta({ title, description, path, absoluteTitle = false, noindex = false }) {
  const url = absoluteUrl(path);
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: absoluteTitle ? title : `${title} | ${site.name}`,
      description,
      url,
      siteName: site.name,
      type: 'website',
      images: [{ url: absoluteUrl('/og-image.png'), width: 1200, height: 630, alt: site.name }],
    },
    twitter: { card: 'summary_large_image', title, description },
    robots: noindex ? { index: false, follow: true } : undefined,
  };
}
