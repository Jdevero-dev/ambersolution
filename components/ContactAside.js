import Icon from './Icon';
import { site } from '@/lib/site';

export default function ContactAside({ title = 'Other ways to reach us' }) {
  return (
    <aside className="side-card">
      <h3>{title}</h3>
      <ul className="contact-list">
        <li><Icon name="mail" /><div><a href={`mailto:${site.email}`}>{site.email}</a><small>Email</small></div></li>
        <li><Icon name="chat" /><div><a href={site.whatsapp}>{site.phoneDisplay}</a><small>WhatsApp · <a href={site.viber}>Viber</a></small></div></li>
        <li><Icon name="phone" /><div><a href={`tel:${site.phoneE164}`}>{site.phoneDisplay}</a><small>Phone</small></div></li>
        {site.bookingUrl && <li><Icon name="calendar" /><div><a href={site.bookingUrl}>Book a call</a><small>Shows times in your timezone</small></div></li>}
        <li><Icon name="clock" /><div>{site.responseTime}<small>Flexible hours for U.S., AU, UK and EU clients</small></div></li>
        <li><Icon name="pin" /><div>{site.locality}, {site.region}, {site.country}<small>Serving clients worldwide</small></div></li>
      </ul>
    </aside>
  );
}
