import { site, pageMeta } from '@/lib/site';
import { articles } from '@/lib/data/articles';

export const metadata = pageMeta({ title: 'Thank You', description: 'Your message has been received.', path: '/thank-you/', noindex: true });

export default function ThankYou() {
  return (
    <section className="section">
      <div className="wrap" style={{ maxWidth: 760 }}>
        <p className="eyebrow">Received</p>
        <h1>Thank you. Your message is in.</h1>
        <p className="lead muted">{site.responseTime}. Check your inbox (and spam folder) for our reply. If it&apos;s urgent, message us on <a href={site.whatsapp}>WhatsApp</a>.</p>
        <h2 style={{ fontSize: '1.4rem', marginTop: 40 }}>While you wait</h2>
        <ul>{articles.slice(0, 2).map((a) => <li key={a.slug}><a href={`/resources/${a.slug}/`}>{a.title}</a></li>)}</ul>
        <a className="btn btn-dark" href="/projects/">See our projects</a>
      </div>
    </section>
  );
}
