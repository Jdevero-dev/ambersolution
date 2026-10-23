import Breadcrumbs from '@/components/Breadcrumbs';
import Faq from '@/components/Faq';
import CtaBand from '@/components/CtaBand';
import { site, pageMeta } from '@/lib/site';

export const metadata = pageMeta({
  title: 'How We Work: Remote Development Process',
  description: 'How projects run with Amber Solutions: discovery, written scope, weekly updates, testing, launch and support. Remote-first, with hours that overlap U.S., AU and EU teams.',
  path: '/how-we-work/',
});

const steps = [
  ['Discovery call', 'A 30-minute video call (or chat, if you prefer) about your business, goals and current setup.'],
  ['Written proposal', 'Scope, deliverables, timeline, milestones and price, in writing, before work starts.'],
  ['Build with weekly updates', 'Progress shared every week with a preview link. Questions answered within 12 hours.'],
  ['Testing & QA', 'Speed, mobile, forms, payments and integrations tested against real scenarios.'],
  ['Launch & handover', 'Go-live, a walkthrough call and documentation. Every account stays in your name.'],
  ['Support & maintenance', 'A support period after launch, then an optional monthly maintenance plan.'],
];

const zones = [
  ['Philippines (PHT)', 'UTC+8', 'Home base'],
  ['Australia (AEST/AEDT)', 'UTC+10/+11', 'Same business day, 2–3 hours ahead of us'],
  ['UK & Europe (GMT–CET)', 'UTC+0/+2', 'Your morning = our afternoon/evening'],
  ['U.S. East (ET)', 'UTC−5/−4', 'Your morning = our late evening'],
  ['U.S. West (PT)', 'UTC−8/−7', 'Your afternoon = our early morning'],
];

const faqs = [
  ['What tools do you use to communicate?', 'Email, WhatsApp, Viber, Google Meet or Zoom, and Slack if your team uses it. You choose.'],
  ['How do payments work?', 'Usually a deposit to start, then payments at agreed milestones. Philippine clients can pay via PayMongo (GCash, Maya, cards, online banking); international clients via Wise in USD.'],
  ['Do you issue official invoices?', 'Yes, as a registered Philippine business.'],
  ['Will you sign an NDA?', 'Yes. Confidentiality is part of our service agreement, and a separate NDA can be signed before you share details.'],
  ['What if I need changes after launch?', 'Small fixes during the support period are included. Larger changes are quoted separately or covered by a maintenance plan.'],
];

export default function HowWeWork() {
  return (
    <>
      <section className="hero hero-light hero-simple">
        <div className="wrap">
          <Breadcrumbs items={[{ name: 'How We Work', href: '/how-we-work/' }]} />
          <p className="eyebrow">Process</p>
          <h1>How We Work</h1>
          <p className="lead muted">Remote-first, founder-led and written down. Here is exactly what happens from the first message to the months after launch.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <ol className="process" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {steps.map(([t, d]) => <li key={t}><strong>{t}</strong><span>{d}</span></li>)}
          </ol>
          <style>{`@media (max-width: 860px){ .process{ grid-template-columns: 1fr !important; } }`}</style>
          {site.bookingUrl && <p style={{ marginTop: 24 }}><a className="btn btn-primary" href={site.bookingUrl}>Book a discovery call</a></p>}
        </div>
      </section>

      <section className="section dark">
        <div className="wrap grid grid-2" style={{ gap: 48, alignItems: 'start' }}>
          <div>
            <p className="eyebrow">Timezones</p>
            <h2>Working across timezones</h2>
            <p className="muted">We are based in the Philippines and keep flexible hours. {site.responseTime}.</p>
          </div>
          <div className="table-wrap" style={{ background: 'var(--ink-2)', borderColor: 'var(--line-d)' }}>
            <table style={{ color: 'var(--text-d)' }}>
              <thead><tr><th style={{ background: 'var(--ink-3)' }}>Your location</th><th style={{ background: 'var(--ink-3)' }}>UTC</th><th style={{ background: 'var(--ink-3)' }}>Overlap</th></tr></thead>
              <tbody>{zones.map(([a, b, c]) => <tr key={a}><td style={{ borderColor: 'var(--line-d)' }}>{a}</td><td style={{ borderColor: 'var(--line-d)' }}>{b}</td><td style={{ borderColor: 'var(--line-d)', color: 'var(--muted-d)' }}>{c}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid grid-3">
          <div className="card"><h3>Payments & invoicing</h3><p className="muted">Deposit plus milestone payments. PayMongo for Philippine clients (GCash, Maya, cards, online banking) and Wise for international clients in USD. Official invoices issued. Details in our <a href="/payment-and-refund-policy/">Payment & Refund Policy</a>.</p></div>
          <div className="card"><h3>Contracts & confidentiality</h3><p className="muted">Every project has a written service agreement covering scope, ownership, confidentiality and support. NDAs available before you share details.</p></div>
          <div className="card"><h3>Ownership</h3><p className="muted">Your domain, hosting, code repository and third-party accounts are in your name. Nothing is held hostage.</p></div>
        </div>
      </section>

      <Faq items={faqs} title="Working with us remotely" />
      <CtaBand />
    </>
  );
}
