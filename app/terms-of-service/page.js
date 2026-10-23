import LegalPage from '@/components/LegalPage';
import { site, pageMeta } from '@/lib/site';

export const metadata = pageMeta({ title: 'Terms of Service', description: 'Terms for using the Amber Solutions website, including intellectual property, liability and governing law.', path: '/terms-of-service/' });

export default function Terms() {
  return (
    <LegalPage title="Terms of Service" path="/terms-of-service/" updated="October 24, 2026">
      <p>These terms apply to your use of this website. Services we provide to clients are governed by a separate written service agreement.</p>
      <h2>Use of the website</h2>
      <p>You may browse and use this website for lawful purposes. Do not attempt to disrupt it, access restricted areas or submit false or harmful information through its forms.</p>
      <h2>Content and intellectual property</h2>
      <p>Text, design, graphics and code on this website belong to {site.name} unless stated otherwise. Project names and screenshots belong to their respective clients and are shown with permission.</p>
      <h2>Information on this website</h2>
      <p>Guides and articles are general information, not professional advice for your specific situation. Service descriptions do not form an offer; scope, price and timelines are confirmed only in a written proposal.</p>
      <h2>Third-party links</h2>
      <p>We are not responsible for the content or practices of websites we link to.</p>
      <h2>Limitation of liability</h2>
      <p>To the extent permitted by law, {site.name} is not liable for indirect or consequential losses arising from use of this website.</p>
      <h2>Governing law</h2>
      <p>These terms are governed by the laws of the Republic of the Philippines.</p>
      <h2>Contact</h2>
      <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
    </LegalPage>
  );
}
