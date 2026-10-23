import { absoluteUrl } from '@/lib/site';

export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/', '/thank-you/'] }],
    sitemap: absoluteUrl('/sitemap.xml'),
  };
}
