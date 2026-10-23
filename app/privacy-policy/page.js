import LegalPage from '@/components/LegalPage';
import { site, pageMeta } from '@/lib/site';

export const metadata = pageMeta({ title: 'Privacy Policy', description: 'How Amber Solutions collects, uses, stores and protects personal information submitted through this website.', path: '/privacy-policy/' });

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" path="/privacy-policy/" updated="October 24, 2026">
      <p>{site.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is a sole proprietorship based in {site.locality}, {site.country}. This policy explains how we handle personal information in line with the Philippine Data Privacy Act of 2012 (Republic Act No. 10173) and, where applicable, the privacy laws of our clients&apos; countries.</p>
      <h2>Information we collect</h2>
      <ul>
        <li><strong>Information you give us</strong> through our forms, email, WhatsApp or Viber: name, email, phone number, business name, website address, country and project details.</li>
        <li><strong>Usage information</strong> collected by analytics tools (such as Google Analytics) if enabled: pages visited, device and browser type, approximate location and referring website.</li>
      </ul>
      <h2>How we use it</h2>
      <ul>
        <li>To reply to your inquiry and prepare proposals</li>
        <li>To deliver and support services you hire us for</li>
        <li>To send invoices and keep business records required by law</li>
        <li>To understand how visitors use the website and improve it</li>
      </ul>
      <p>We do not sell your personal information or use it for unrelated marketing without your consent.</p>
      <h2>Where it is stored</h2>
      <p>Form submissions are processed through our website host and stored in secure business tools (such as email, spreadsheets, Airtable or a database) with access limited to people who need it. Some of these providers store data outside the Philippines.</p>
      <h2>How long we keep it</h2>
      <p>Inquiries that do not become projects are kept for up to 24 months. Client records are kept for as long as required for tax and legal purposes.</p>
      <h2>Your rights</h2>
      <p>You may ask to access, correct or delete your personal information, object to its processing, or withdraw consent at any time by emailing <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
      <h2>Cookies</h2>
      <p>Essential cookies keep the site working. Analytics cookies are used only if analytics is enabled; you can block them in your browser settings.</p>
      <h2>Client data in projects</h2>
      <p>When we build or maintain systems that hold your customers&apos; data, we handle it only to deliver the agreed service, under the confidentiality terms of our service agreement.</p>
      <h2>Contact</h2>
      <p>{site.name}, {site.locality}, {site.region}, {site.country} · <a href={`mailto:${site.email}`}>{site.email}</a> · {site.phoneDisplay}</p>
    </LegalPage>
  );
}
