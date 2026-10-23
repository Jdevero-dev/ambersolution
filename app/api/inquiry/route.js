// Receives form submissions and forwards them to INQUIRY_WEBHOOK_URL
// (an n8n / Make / Zapier webhook that emails you and saves to Airtable/Sheets/Supabase).
import { NextResponse } from 'next/server';

const hits = new Map(); // simple in-memory rate limit per IP

export async function POST(req) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 60_000);
  if (recent.length >= 5) return NextResponse.json({ error: 'Too many requests. Please wait a minute.' }, { status: 429 });
  hits.set(ip, [...recent, now]);

  let body;
  try { body = await req.json(); } catch { return NextResponse.json({ error: 'Invalid request.' }, { status: 400 }); }

  if (body.company_website) return NextResponse.json({ ok: true }); // honeypot: silently drop bots
  const email = String(body.email || '').trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: 'Please enter a valid email.' }, { status: 400 });
  if (!body.consent) return NextResponse.json({ error: 'Please accept the privacy policy.' }, { status: 400 });

  const clean = Object.fromEntries(
    Object.entries(body).filter(([k]) => k !== 'company_website').map(([k, v]) => [k, typeof v === 'string' ? v.slice(0, 5000) : v])
  );
  const payload = { ...clean, receivedAt: new Date().toISOString() };

  const hook = process.env.INQUIRY_WEBHOOK_URL;
  if (hook) {
    const r = await fetch(hook, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }).catch(() => null);
    if (!r || !r.ok) return NextResponse.json({ error: 'We could not send your message right now.' }, { status: 502 });
  } else {
    console.log('[inquiry] INQUIRY_WEBHOOK_URL not set; submission:', payload);
  }
  return NextResponse.json({ ok: true });
}
