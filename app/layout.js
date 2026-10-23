import '@fontsource-variable/bricolage-grotesque';
import '@fontsource-variable/instrument-sans';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Analytics from '@/components/Analytics';
import ClickTracker from '@/components/ClickTracker';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import { site } from '@/lib/site';
import { organizationSchema } from '@/lib/schema';

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'Websites, Business Systems & Automation | Amber Solutions', template: '%s | Amber Solutions' },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.founder.name, url: site.founder.linkedin }],
  formatDetection: { telephone: false },
  icons: { icon: '/favicon.svg' },
};

export const viewport = { themeColor: '#15120e', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <a className="float-wa" href={site.whatsapp} aria-label="Chat with us on WhatsApp">
          <Icon name="chat" />
        </a>
        <JsonLd data={organizationSchema()} />
        <ClickTracker />
        <Analytics />
      </body>
    </html>
  );
}
