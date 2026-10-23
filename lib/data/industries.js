// Full industry pages exist only where real projects exist (avoids thin/doorway pages).

export const industries = [
  {
    slug: 'healthcare',
    name: 'Healthcare & Clinics',
    icon: 'cross',
    title: 'Clinic Websites, CRMs & Booking Systems',
    metaDescription:
      'Clinic websites, appointment booking, patient CRMs and AI lead intake, built by a founder with 7+ years in U.S. healthcare operations.',
    h1: 'Software & Websites for Clinics and Healthcare Practices',
    lead:
      'Before building software, our founder spent 7+ years inside U.S. healthcare operations: verifying insurance, chasing prior authorizations and working through 100+ payer portals. We build clinic systems from that side of the desk.',
    challenges: [
      ['Phone-tag booking', 'Front desks spend hours confirming, moving and cancelling appointments by phone and chat.'],
      ['Scattered patient information', 'Demographics, insurance and orders live in different places, so staff re-type the same details.'],
      ['Leads with no triage', 'Ad and website leads arrive in one list; urgent cases wait behind general questions.'],
      ['After-hours silence', 'Patients who message at night often book elsewhere by morning.'],
      ['Manual scheduling admin', 'Agents sort appointments and chairs by hand before they can help anyone.'],
    ],
    solutions: [
      ['Clinic websites', 'Service pages, doctor profiles, schedules and appointment requests.', 'web-development'],
      ['Appointment booking', 'Online booking, rescheduling and cancellations.', 'web-development'],
      ['Clinic CRM & scheduling', 'Patients, insurance, orders and live chair or room grids.', 'custom-software'],
      ['AI lead intake', 'Classify leads by service and urgency, then route them.', 'ai-automation'],
      ['24/7 AI chat', 'Answer common questions and capture inquiries after hours.', 'ai-automation'],
      ['Maintenance', 'Keep forms, bookings and integrations working.', 'website-maintenance'],
    ],
    workflow: ['Lead or patient inquiry', 'AI triage by service & urgency', 'Booking link or staff alert', 'Appointment on the schedule', 'Reminder & post-visit follow-up'],
    features: [
      'Appointment requests with HMO / insurance details',
      'Multi-clinic schedules and locations',
      'Role-based access for staff',
      'Insurance and order tracking',
      'Automated reminders and review requests',
      'Analytics on inquiries and bookings',
    ],
    integrations: ['Google Sheets', 'Airtable', 'Gmail', 'Facebook Lead Ads', 'Google Analytics', 'Messaging apps'],
    note:
      'We are trained in healthcare data confidentiality. Any regulatory requirements for your practice (such as HIPAA in the U.S. or the Data Privacy Act in the Philippines) are scoped and agreed in writing before work begins.',
    faqs: [
      ['Do you understand U.S. insurance workflows?', 'Yes. Our founder has 7+ years of hands-on experience in eligibility and benefits verification, prior authorizations, claims and appeals across Medicare Advantage, Medicaid, commercial and government plans.'],
      ['Can patients book without calling?', 'Yes. Booking, rescheduling and cancellations can all be done online, with confirmations sent automatically.'],
      ['Is an AI chatbot safe for a clinic?', 'It is limited to approved, non-diagnostic information such as services, schedules and booking, and hands over to staff when needed.'],
      ['Do you work with clinics outside the Philippines?', 'Yes. We have built for U.S. clinics and Philippine practices.'],
    ],
  },
  {
    slug: 'weddings-events',
    name: 'Weddings & Events',
    icon: 'ticket',
    title: 'Event & Wedding Booking Platforms',
    metaDescription:
      'Booth booking systems, wedding supplier marketplaces and RSVP automation for event organisers, venues and wedding businesses.',
    h1: 'Platforms for Weddings, Events and Exhibitors',
    lead:
      'Events run on deadlines, payments and long guest lists. We build the booking flows, marketplaces and RSVP tools that take that load off organisers, suppliers and couples.',
    challenges: [
      ['Booking by chat', 'Exhibitors and clients reserve slots through long message threads.'],
      ['Payment follow-ups', 'Organisers chase deposits and proofs of payment one by one.'],
      ['Supplier discovery', 'Couples struggle to find trusted suppliers in one place.'],
      ['Guest list chaos', 'RSVPs, plus-ones and seating live in separate spreadsheets.'],
    ],
    solutions: [
      ['Booth & slot booking', 'Event → package → booth → payment, in one guided flow.', 'web-development'],
      ['Supplier marketplaces', 'Directories with tiered memberships and dashboards.', 'custom-software'],
      ['RSVP automation', 'Guest responses, plus-ones and seating handled automatically.', 'ai-automation'],
      ['Event websites', 'Fast, mobile-first sites for large social audiences.', 'web-development'],
      ['Ongoing optimisation', 'Keep the site fast before every big event.', 'website-maintenance'],
    ],
    workflow: ['Visitor picks an event', 'Chooses package', 'Selects booth or slot', 'Pays online', 'Confirmation & reminders'],
    features: ['Live availability', 'Online payments', 'Membership tiers', 'Couple and supplier dashboards', 'Budget tracker and guest list', 'Admin approvals'],
    integrations: ['Supabase', 'Firebase', 'Payment gateways', 'Email automation', 'Google Sheets'],
    faqs: [
      ['Can exhibitors pay online?', 'Yes. Payment can be integrated into the booking flow, with confirmations sent automatically.'],
      ['Do you build mobile apps for events?', 'Yes. We build cross-platform apps with Flutter, as with the Bride\'s List app.'],
      ['Can the site handle traffic spikes before an event?', 'Sites built on Next.js and Vercel scale well; maintenance plans include performance checks before major launches.'],
    ],
  },
  {
    slug: 'hospitality',
    name: 'Hospitality & Property',
    icon: 'home',
    title: 'Staycation & Rental Booking Websites',
    metaDescription:
      'Websites and booking systems for staycations, vacation rentals and property owners: listings, galleries, guest dashboards and inquiry automation.',
    h1: 'Websites & Booking Systems for Staycations and Rentals',
    lead:
      'Guests decide in minutes. Clear listings, honest details and an easy path to reserve turn browsers into bookings, without relying only on third-party platforms.',
    challenges: [
      ['Repeated questions', 'Owners answer the same amenity and rules questions every day.'],
      ['Platform dependence', 'All bookings come through marketplaces that take a commission.'],
      ['Hard-to-update listings', 'Adding a new unit means rebuilding pages.'],
      ['No booking visibility', 'Guests message to ask about their booking status.'],
    ],
    solutions: [
      ['Property websites', 'Galleries, amenities, pricing and guest guidelines.', 'web-development'],
      ['Booking & inquiry flows', 'Guide guests from listing to reservation.', 'web-development'],
      ['Guest dashboards', 'Let guests track stays and booking status.', 'custom-software'],
      ['Inquiry automation', 'Instant replies and notifications.', 'ai-automation'],
      ['Local SEO setup', 'Help nearby travellers find you.', 'seo'],
    ],
    workflow: ['Guest finds the listing', 'Checks amenities & rules', 'Sends inquiry or books', 'Confirmation sent', 'Guest dashboard & reminders'],
    features: ['Reusable listing pages', 'Galleries and amenities', 'Guest guidelines', 'Booking status dashboard', 'Inquiry notifications', 'SEO-ready pages'],
    integrations: ['Supabase', 'Email notifications', 'Google Analytics', 'Messaging apps'],
    faqs: [
      ['Can I add new properties myself?', 'Yes. Listing pages use a reusable structure so new units can be added without a rebuild.'],
      ['Will this replace Airbnb or booking platforms?', 'It works alongside them, giving you a direct channel for repeat and referred guests.'],
      ['Can guests pay online?', 'Online payment can be added using a gateway such as PayMongo for Philippine guests.'],
    ],
  },
  {
    slug: 'professional-services',
    name: 'Professional & Creative Services',
    icon: 'briefcase',
    title: 'Client Portals & Systems for Service Businesses',
    metaDescription:
      'Client portals, approval and payment workflows, recruitment platforms and CRMs for designers, agencies, consultants and staffing firms.',
    h1: 'Systems for Professional & Creative Service Businesses',
    lead:
      'When your product is your expertise, the admin around it should be invisible: approvals, files, payments and pipelines that run without chasing.',
    challenges: [
      ['Unpaid work released early', 'Final files go out before the invoice is settled.'],
      ['Feedback everywhere', 'Revisions arrive through chat, email and calls.'],
      ['Manual pipelines', 'Candidates, leads or projects are tracked by hand.'],
      ['No single view', 'Owners can\'t see project status without asking.'],
    ],
    solutions: [
      ['Client portals', 'Previews, feedback and file delivery in one place.', 'custom-software'],
      ['Approval & payment workflows', 'Milestones and automatic file release.', 'custom-software'],
      ['Recruitment platforms', 'Candidate and placement management.', 'custom-software'],
      ['Automations', 'Reminders, data syncing and reports.', 'ai-automation'],
      ['White-label support', 'Overflow development for agencies.', null],
    ],
    workflow: ['Client uploads brief', 'You share previews', 'Client approves or requests changes', 'Payment confirmed', 'Files unlocked'],
    features: ['Role-based access', 'Watermarked previews', 'Milestone payments', 'Activity log', 'Private file storage', 'Pipeline views'],
    integrations: ['GCash, BPI, Maya verification', 'Email', 'Google Sheets', 'Airtable'],
    faqs: [
      ['Can clients pay by GCash or bank transfer?', 'Yes. Portals can support online payments or manual verification of GCash, BPI and Maya transfers.'],
      ['Can I use my own branding?', 'Yes. Portals are built under your brand and domain.'],
    ],
  },
];

// Industries shown as cards on the hub (no page yet). `href` points to the closest real page.
export const industryCards = [
  ['Restaurants & Food', 'Ordering, AI chat for customer inquiries, menus and promos.', '/projects/chickexpress-ai-chat-support/'],
  ['Retail & E-commerce', 'Online stores with GCash, cards and inventory management.', '/services/web-development/'],
  ['Real Estate', 'Listing sites, inquiry routing and lead CRMs.', '/request-a-quote/'],
  ['Education & Training', 'Registration, learner portals and admin automation.', '/request-a-quote/'],
  ['Construction & Field Services', 'Job dashboards, quote requests and internal tools.', '/request-a-quote/'],
  ['Marketing & Web Agencies', 'White-label development and maintenance.', '/partners/white-label-development/'],
  ['Startups & SaaS', 'MVPs, web apps and integrations.', '/services/custom-software/'],
];

export const industryLabels = {
  healthcare: 'Healthcare',
  'weddings-events': 'Weddings & Events',
  hospitality: 'Hospitality',
  'professional-services': 'Professional Services',
  retail: 'E-commerce',
  restaurants: 'Food & Restaurants',
};

export const getIndustry = (slug) => industries.find((i) => i.slug === slug);
