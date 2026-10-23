# Amber Solutions website

Next.js 15 (App Router) site built from the SEO Page Blueprint. 48 static pages, SEO metadata,
JSON-LD schema, sitemap.xml and robots.txt included.

## Run locally
    npm install
    npm run dev        # http://localhost:3000
    npm run build && npm start

## Deploy (Vercel)
1. Push this folder to a GitHub repo and import it in Vercel.
2. Add environment variables (see `.env.example`):
   - `NEXT_PUBLIC_SITE_URL`: your final domain, e.g. https://www.ambersolutions.dev
   - `INQUIRY_WEBHOOK_URL`: an n8n / Make / Zapier webhook. All forms POST JSON here
     (email yourself + save to Airtable/Sheets/Supabase).
   - `NEXT_PUBLIC_BOOKING_URL`: Cal.com or Calendly link (shows a "Book a call" option)
   - `NEXT_PUBLIC_GA_ID`: Google Analytics 4 ID (enables GA + conversion events)
3. Connect the domain, then submit `/sitemap.xml` in Google Search Console and Bing Webmaster Tools.

## Where to edit content
| What | File |
| --- | --- |
| Business details (email, phone, DTI no., social links) | `lib/site.js` |
| Services | `lib/data/services.js` |
| Industries | `lib/data/industries.js` |
| Projects / case studies | `lib/data/projects.js` |
| Articles | `lib/data/articles.js` |
| Design tokens (colors, fonts) | `app/globals.css` |

## Before launch
- [ ] Domain bought; set `NEXT_PUBLIC_SITE_URL`; switch email to hello@[domain] in `lib/site.js`
- [ ] DTI number in `lib/site.js` (`registration`)
- [ ] Founder photo: replace the "JD" placeholder (`.portrait` on Home and About)
- [ ] Real project screenshots: save to `public/projects/[slug].webp` and add `image: '/projects/[slug].webp'` in `lib/data/projects.js`
- [ ] Verified results per project (`results: []`): PageSpeed scores, delivery time, client-reported time saved
- [ ] Testimonials (with permission)
- [ ] Social profile URLs in `lib/site.js` (`social`)
- [ ] Lawyer review of Privacy Policy, Terms, Payment & Refund Policy
- [ ] Test every form end to end once the webhook is connected

.
