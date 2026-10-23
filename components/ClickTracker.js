'use client';
import { useEffect } from 'react';

// Sends GA4 events for contact link clicks (WhatsApp, Viber, email, phone, booking).
export default function ClickTracker() {
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest && e.target.closest('a[href]');
      if (!a || !window.gtag) return;
      const h = a.getAttribute('href');
      const ev = h.includes('wa.me') ? 'whatsapp_click' : h.startsWith('viber:') ? 'viber_click' : h.startsWith('mailto:') ? 'email_click' : h.startsWith('tel:') ? 'phone_click' : /cal\.com|calendly/.test(h) ? 'booking_click' : null;
      if (ev) window.gtag('event', ev, { link_url: h, page_path: window.location.pathname });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
  return null;
}
