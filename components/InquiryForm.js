'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SERVICE_OPTIONS = [
  'New website',
  'Custom software / CRM / portal',
  'Website or system maintenance',
  'Fix a broken or slow website',
  'AI chatbot or automation',
  'SEO & growth setup',
  'White-label (I\'m an agency)',
  'Not sure yet',
];

function Field({ label, hint, children, id }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label} {hint && <span className="hint">{hint}</span>}</label>
      {children}
    </div>
  );
}

export default function InquiryForm({ kind = 'quote', defaultService = '' }) {
  const router = useRouter();
  const twoStep = kind === 'quote';
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [data, setData] = useState({ service: defaultService });

  const set = (e) => setData((d) => ({ ...d, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }));

  async function submit(e) {
    e.preventDefault();
    if (twoStep && step === 1) {
      if (!e.currentTarget.checkValidity()) return e.currentTarget.reportValidity();
      setStep(2);
      if (typeof window !== 'undefined' && window.gtag) window.gtag('event', 'quote_step1');
      return;
    }
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/inquiry/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ kind, page: window.location.pathname, ...data }),
      });
      if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error || 'Something went wrong.');
      if (window.gtag) window.gtag('event', `${kind === 'health' ? 'health_check' : kind}_submit`);
      router.push(`/thank-you/?type=${kind}`);
    } catch (err) {
      setStatus('idle');
      setError(err.message + ' You can also email ambersolutions@gmail.com or WhatsApp +63 938 794 4493.');
    }
  }

  const consent = (
    <label className="consent">
      <input type="checkbox" name="consent" required onChange={set} checked={!!data.consent} />
      <span>I agree to the <a href="/privacy-policy/">Privacy Policy</a>. My details are used only to reply to this inquiry.</span>
    </label>
  );
  const honeypot = (
    <div className="hp" aria-hidden="true">
      <label htmlFor="company_website">Leave this empty</label>
      <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" onChange={set} />
    </div>
  );
  const submitBtn = (label) => (
    <button className="btn btn-primary" type="submit" disabled={status === 'sending'} style={{ width: '100%' }}>
      {status === 'sending' ? 'Sending…' : label}
    </button>
  );

  return (
    <form className="form" onSubmit={submit} noValidate={false}>
      {honeypot}
      {twoStep && (
        <div className="steps-indicator" aria-hidden="true">
          <span className={step >= 1 ? 'on' : ''}>01 · The basics</span>
          <span className={step >= 2 ? 'on' : ''}>02 · Project details</span>
        </div>
      )}

      {kind === 'quote' && step === 1 && (
        <>
          <Field label="What do you need help with?" id="service">
            <select id="service" name="service" required value={data.service || ''} onChange={set}>
              <option value="" disabled>Select a service</option>
              {SERVICE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
            </select>
          </Field>
          <div className="form-row">
            <Field label="Your name" id="name"><input id="name" name="name" required autoComplete="name" value={data.name || ''} onChange={set} /></Field>
            <Field label="Email" id="email"><input id="email" name="email" type="email" required autoComplete="email" value={data.email || ''} onChange={set} /></Field>
          </div>
          {submitBtn('Continue')}
          <p className="muted" style={{ fontSize: '0.88rem', margin: 0 }}>Takes about 2 minutes. No payment details needed.</p>
        </>
      )}

      {kind === 'quote' && step === 2 && (
        <>
          <div className="form-row">
            <Field label="Business name" id="business"><input id="business" name="business" autoComplete="organization" value={data.business || ''} onChange={set} /></Field>
            <Field label="Country" id="country"><input id="country" name="country" autoComplete="country-name" value={data.country || ''} onChange={set} /></Field>
          </div>
          <Field label="Current website or system" hint="(optional)" id="website"><input id="website" name="website" type="url" placeholder="https://" value={data.website || ''} onChange={set} /></Field>
          <Field label="Tell us about the project" id="details">
            <textarea id="details" name="details" required placeholder="What should it do? What's not working today?" value={data.details || ''} onChange={set} />
          </Field>
          <div className="form-row">
            <Field label="Timeline" id="timeline">
              <select id="timeline" name="timeline" value={data.timeline || ''} onChange={set}>
                <option value="">Select</option>
                <option>As soon as possible</option><option>Within 1 month</option><option>1–3 months</option><option>Just exploring</option>
              </select>
            </Field>
            <Field label="Budget range" hint="(optional)" id="budget">
              <select id="budget" name="budget" value={data.budget || ''} onChange={set}>
                <option value="">Prefer to discuss</option>
                <option>Under $1,000 / ₱50,000</option><option>$1,000–$3,000 / ₱50,000–₱170,000</option><option>$3,000–$8,000 / ₱170,000–₱450,000</option><option>$8,000+ / ₱450,000+</option>
              </select>
            </Field>
          </div>
          <Field label="Preferred way to reach you" id="contactPref">
            <select id="contactPref" name="contactPref" value={data.contactPref || 'Email'} onChange={set}>
              <option>Email</option><option>WhatsApp</option><option>Viber</option><option>Video call</option>
            </select>
          </Field>
          <Field label="Phone / WhatsApp" hint="(optional)" id="phone"><input id="phone" name="phone" type="tel" autoComplete="tel" value={data.phone || ''} onChange={set} /></Field>
          {consent}
          <div className="btn-row">
            <button type="button" className="btn btn-ghost" onClick={() => setStep(1)}>Back</button>
            <div style={{ flex: 1 }}>{submitBtn('Send my request')}</div>
          </div>
        </>
      )}

      {kind === 'health' && (
        <>
          <Field label="Website URL" id="website"><input id="website" name="website" type="url" required placeholder="https://" value={data.website || ''} onChange={set} /></Field>
          <div className="form-row">
            <Field label="Your name" id="name"><input id="name" name="name" required autoComplete="name" value={data.name || ''} onChange={set} /></Field>
            <Field label="Email" id="email"><input id="email" name="email" type="email" required autoComplete="email" value={data.email || ''} onChange={set} /></Field>
          </div>
          <Field label="Main concern" id="concern">
            <select id="concern" name="concern" value={data.concern || ''} onChange={set}>
              <option value="">Select</option>
              <option>It's slow</option><option>Something is broken</option><option>Not showing on Google</option><option>Security worries</option><option>No one maintains it</option><option>Just want a check-up</option>
            </select>
          </Field>
          {consent}
          {submitBtn('Get my free health check')}
        </>
      )}

      {(kind === 'contact' || kind === 'partner') && (
        <>
          <div className="form-row">
            <Field label="Your name" id="name"><input id="name" name="name" required autoComplete="name" value={data.name || ''} onChange={set} /></Field>
            <Field label="Email" id="email"><input id="email" name="email" type="email" required autoComplete="email" value={data.email || ''} onChange={set} /></Field>
          </div>
          {kind === 'partner' && (
            <Field label="Agency name & website" id="business"><input id="business" name="business" required value={data.business || ''} onChange={set} /></Field>
          )}
          <Field label={kind === 'partner' ? 'What kind of work would you send us?' : 'Message'} id="details">
            <textarea id="details" name="details" required value={data.details || ''} onChange={set} />
          </Field>
          {consent}
          {submitBtn(kind === 'partner' ? 'Send partner inquiry' : 'Send message')}
        </>
      )}

      {error && <p className="form-error" role="alert">{error}</p>}
    </form>
  );
}
