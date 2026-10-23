// Projects & case studies. Only real facts. Add verified numbers to `results`
// (PageSpeed scores, delivery time, time saved reported by the client) as they are collected.
// Add real screenshots to /public/projects/[slug].webp and set `image`.

export const projects = [
  {
    slug: 'clinic-crm-infusion-scheduling',
    name: 'Clinic CRM',
    type: 'Custom CRM & scheduling system',
    client: 'U.S.-based infusion clinic',
    industry: 'healthcare',
    services: ['custom-software'],
    stack: ['Next.js', 'Node.js', 'PostgreSQL'],
    visual: 'crm',
    featured: true,
    summary:
      'A CRM for a U.S. infusion clinic: patient records, insurance management, order tracking and a live multi-chair scheduling grid.',
    challenge:
      'Clinic staff were juggling patient details, insurance status, infusion orders and chair availability across separate tools. Seeing the whole day at once meant opening several screens and asking around.',
    solution:
      'A single web application that brings patients, insurance, orders and scheduling together. The centrepiece is a live scheduling grid that shows every infusion chair across the day, so staff can book, move and confirm appointments from one view.',
    features: [
      'Patient records with insurance details',
      'Insurance management and status tracking',
      'Order tracking from referral to treatment',
      'Live multi-chair scheduling grid',
      'Real-time view of daily operations for staff',
    ],
    insight:
      'Built by someone who spent years verifying insurance and clearing patients for appointments, so the screens follow how intake staff actually work.',
    results: [],
  },
  {
    slug: 'veehive-events-booth-booking',
    name: 'Veehive Events',
    type: 'Event website & booth booking system',
    client: 'Veehive Events Management (Veehive PH)',
    industry: 'weddings-events',
    services: ['web-development', 'ai-automation', 'website-maintenance'],
    stack: ['React', 'Node.js', 'Supabase'],
    visual: 'booking',
    featured: true,
    summary:
      'Website and multi-step booth booking flow for an exhibitor platform with 98,000+ social media followers.',
    challenge:
      'Exhibitors needed a clear way to choose an event, pick a package, select a booth and pay, without long message threads with the organiser.',
    solution:
      'We built and optimised the website with a guided booking flow: event details, package selection, booth picking and payment. Integrations and automations keep the exhibitor journey fast and reduce manual follow-up for the team.',
    features: [
      'Multi-step booth booking: event → package → booth → payment',
      'Booth selection with availability',
      'Payment integration',
      'Automations for confirmations and follow-ups',
      'Ongoing optimisation of the live site',
    ],
    insight: 'Context: the platform serves an audience of 98,000+ social media followers, so the flow had to work smoothly on mobile.',
    results: [],
  },
  {
    slug: 'brides-list-wedding-marketplace',
    name: "Bride's List PH",
    type: 'Wedding supplier marketplace',
    client: "Bride's List PH (Veehives PH)",
    industry: 'weddings-events',
    services: ['custom-software', 'web-development'],
    stack: ['Next.js', 'Supabase', 'Flutter', 'Firebase'],
    visual: 'marketplace',
    featured: true,
    summary:
      'A marketplace connecting couples with trusted wedding suppliers across Metro Manila, Central Luzon and CALABARZON.',
    challenge:
      'Couples needed one place to find suppliers and plan their wedding, while suppliers needed a way to be listed and stand out.',
    solution:
      'A multi-role platform with a supplier directory and tiered supplier memberships, plus planning tools for couples: RSVP builder, budget tracker and guest list.',
    features: [
      'Supplier directory by region and category',
      'Tiered supplier memberships',
      'RSVP builder',
      'Budget tracker and guest list',
      'Multi-role dashboards for couples, suppliers and admins',
    ],
    insight: 'Built as both a web platform and a Flutter mobile app on a shared backend.',
    results: [],
  },
  {
    slug: 'designproof-client-portal',
    name: 'DesignProof',
    type: 'Client portal for design approvals & payments',
    client: 'Interior design businesses',
    industry: 'professional-services',
    services: ['custom-software'],
    stack: ['Next.js', 'Vercel'],
    visual: 'portal',
    featured: true,
    summary:
      'A secure portal where clients review watermarked designs, request revisions and unlock high-resolution files only after payment.',
    challenge:
      'Interior designers were sending full-resolution files before being paid, and tracking feedback and revisions across chat and email.',
    solution:
      'A client portal with role-based access. Clients see low-resolution, watermarked previews and submit feedback in one place. High-resolution files unlock automatically once payment is confirmed.',
    features: [
      'Watermarked previews and revision requests',
      'Automatic file unlock after confirmed payment',
      'Milestone payment plans (percentage or fixed)',
      'Manual payment verification for GCash, BPI and Maya',
      'Private file storage and a full project activity log',
    ],
    insight: 'Payment status, not trust, decides when files are released, which protects the designer\'s work.',
    results: [],
  },
  {
    slug: 'aurelia-jewelry-ecommerce',
    name: 'Aurelia Jewelry',
    type: 'E-commerce store & admin system',
    client: 'Aurelia Jewelry',
    industry: 'retail',
    services: ['web-development'],
    stack: ['Next.js', 'Supabase', 'PayMongo'],
    visual: 'shop',
    featured: true,
    summary:
      'A jewelry store with variants, wishlist, reviews, GCash and card checkout via PayMongo, and a full admin dashboard.',
    challenge:
      'The brand needed a store that looked premium, handled product variants and accepted local payment methods, with an admin the owner could run alone.',
    solution:
      'A full storefront and admin system: product catalog with variants, wishlist and reviews, checkout with GCash and cards through PayMongo, and a dashboard for products, inventory, orders and shipping rules.',
    features: [
      'Product catalog with variants',
      'Wishlist and product reviews',
      'Checkout with GCash and card via PayMongo',
      'Inventory and order management',
      'Configurable shipping rules',
    ],
    insight: 'Local payment methods at checkout matter for Philippine shoppers; PayMongo covers GCash and cards in one integration.',
    results: [],
  },
  {
    slug: 'medcare-clinic-booking-chatbot',
    name: 'MedCare Clinics',
    type: 'Clinic website, booking system & AI chat',
    client: 'MedCare Clinics',
    industry: 'healthcare',
    services: ['web-development', 'ai-automation'],
    stack: ['Next.js', 'n8n', 'AI chatbot', 'Airtable', 'Google Sheets'],
    visual: 'chat',
    featured: true,
    summary:
      'A clinic website with online booking, cancellation and rescheduling, plus 24/7 AI chat support.',
    challenge:
      'Patients called or messaged to book, change or cancel appointments, and questions outside clinic hours went unanswered.',
    solution:
      'A full clinic website with a booking system for appointments, cancellations and rescheduling, paired with an AI chatbot that answers patient questions around the clock. Appointments and inquiries are saved automatically to Airtable or Google Sheets.',
    features: [
      'Online appointment booking',
      'Self-service cancellation and rescheduling',
      '24/7 AI customer chat support',
      'Automatic saving of appointments and inquiries',
      'Workflows built in n8n',
    ],
    insight: 'The chatbot answers from approved clinic information and passes anything it can\'t handle to staff.',
    results: [],
  },
  {
    slug: 'instara-rsvp-automation',
    name: 'Instara',
    type: 'RSVP & wedding guest automation platform',
    client: 'Instara',
    industry: 'weddings-events',
    services: ['custom-software', 'ai-automation'],
    stack: ['React', 'Node.js'],
    visual: 'marketplace',
    summary: 'Automated RSVP tracking, plus-one approvals, seating and guest analytics for weddings.',
    challenge: 'Couples tracked RSVPs, plus-ones and seating by hand across spreadsheets and messages.',
    solution:
      'A platform with three sides: a couple dashboard, a guest-facing RSVP flow, and an admin panel for reviewing new wedding registrations. RSVP tracking, plus-one approvals, seating and guest analytics run automatically.',
    features: ['Guest RSVP flow', 'Plus-one approvals', 'Seating management', 'Guest analytics', 'Admin review of new registrations'],
    results: [],
  },
  {
    slug: 'cmb-staffing-platform',
    name: 'CMB Searching & Staffing',
    type: 'Recruitment & staffing platform',
    client: 'CMB Searching & Staffing',
    industry: 'professional-services',
    services: ['custom-software', 'ai-automation'],
    stack: ['Next.js', 'PostgreSQL'],
    visual: 'crm',
    summary: 'An automated staffing platform for recruitment, candidate management and workforce operations.',
    challenge: 'Recruitment involved heavy manual work to track candidates and match them with businesses.',
    solution:
      'A full-stack platform that streamlines recruitment and candidate management, with automations and integrations that reduce manual hiring effort and connect businesses with talent faster.',
    features: ['Candidate management', 'Recruitment pipeline', 'Workforce operations tools', 'Automations and integrations'],
    results: [],
  },
  {
    slug: 'chico-stays-property-platform',
    name: 'Chico Stays',
    type: 'Property & accommodation platform',
    client: 'Chico Stays',
    industry: 'hospitality',
    services: ['web-development'],
    stack: ['React', 'Supabase'],
    visual: 'booking',
    summary: 'Property listings with galleries, amenities and pricing, plus a guest dashboard for stays and booking status.',
    challenge: 'The owner needed a way to present several properties and let guests follow their bookings, and to add new listings easily.',
    solution:
      'A property platform with rich listings and a guest dashboard. A reusable property-page structure means new listings can be added without rebuilding the site.',
    features: ['Listings with galleries, amenities and pricing', 'Guest dashboard with booking status', 'Reusable listing structure'],
    results: [],
  },
  {
    slug: 'tion-wellness-ecommerce',
    name: 'Tion Wellness',
    type: 'Wellness e-commerce website',
    client: 'Tion Wellness',
    industry: 'retail',
    services: ['web-development', 'seo'],
    stack: ['Next.js', 'Vercel'],
    visual: 'shop',
    summary: 'A responsive wellness store with an organised catalog, policy pages and SEO-ready structure.',
    challenge: 'The business needed a professional online store that customers could trust and Google could understand.',
    solution:
      'A responsive e-commerce site for desktop, tablet and mobile, with an organised product catalog, intuitive navigation and pages for company info, FAQs, contact, shipping, returns and policies. Deployed on Vercel with room for payments, APIs and automation.',
    features: ['Responsive UI for all devices', 'Organised product catalog', 'Shipping, returns and policy pages', 'Meta titles, descriptions, alt text, sitemap and robots.txt'],
    results: [],
  },
  {
    slug: 'surgeon-clinic-website',
    name: 'Dr. Jose Antonio dela Fuente',
    type: 'Surgeon clinic website & appointment requests',
    client: 'Dr. Jose Antonio dela Fuente, surgeon',
    industry: 'healthcare',
    services: ['web-development', 'seo'],
    stack: ['Next.js', 'Vercel', 'Google Analytics'],
    visual: 'site',
    summary: 'A multi-page website showcasing surgical services, clinic schedules and a detailed appointment request form.',
    challenge: 'Patients needed clear information on services, clinic locations and schedules, and an easy way to request appointments.',
    solution:
      'A professional healthcare website with a doctor profile, structured service pages (General Surgery, Laparoscopic & Robotic Surgery, Cancer Screening, Medical Clearance), multi-clinic schedules with click-to-message hotlines, and an appointment form covering location, patient info, HMO coverage and reason for consultation.',
    features: ['Doctor profile and service pages', 'Multi-clinic schedules and hotlines', 'Detailed appointment request form with HMO coverage', 'SEO structure and Google Analytics'],
    results: [],
  },
  {
    slug: 'staycation-haven-website',
    name: 'Staycation Haven PH',
    type: 'Staycation website',
    client: 'Staycation Haven PH',
    industry: 'hospitality',
    services: ['web-development', 'seo'],
    stack: ['Vercel'],
    visual: 'site',
    summary: 'A staycation website that guides guests from property details to a reservation inquiry.',
    challenge: 'Potential guests asked the same questions about amenities, rules and booking by message.',
    solution:
      'A responsive site with property info, guest guidelines and booking details, structured navigation and inquiry pathways that guide guests to reserve. Built ready for future reservation management and automated guest notifications.',
    features: ['Property and amenity pages', 'Guest guidelines', 'Inquiry pathways to reservation', 'SEO-ready metadata and sitemap'],
    results: [],
  },
  {
    slug: 'chickexpress-ai-chat-support',
    name: 'ChickExpress AI',
    type: '24/7 AI customer chat support',
    client: 'ChickExpress (small food business)',
    industry: 'restaurants',
    services: ['ai-automation'],
    stack: ['AI chatbot'],
    visual: 'chat',
    summary: 'An AI chat assistant that answers every customer inquiry, day or night.',
    challenge: 'The owner was losing customers who messaged outside business hours.',
    solution: 'A 24/7 AI customer chat system that captures and responds to every inquiry automatically.',
    features: ['Always-on customer replies', 'Inquiry capture', 'Answers based on the business\'s own information'],
    results: [],
  },
  {
    slug: 'clinic-lead-to-appointment-automation',
    name: 'Clinic Lead to Appointment',
    type: 'AI lead intake & booking automation',
    client: 'Healthcare clinic',
    industry: 'healthcare',
    services: ['ai-automation'],
    stack: ['n8n', 'OpenAI / Groq', 'Airtable', 'Facebook Lead Ads', 'Gmail'],
    visual: 'flow',
    summary: 'Facebook leads classified by AI, routed by urgency, and sent a booking link or an emergency alert automatically.',
    challenge: 'Leads from ads arrived as a list, and urgent cases waited in the same queue as general questions.',
    solution:
      'A full lead-to-appointment pipeline: Facebook Ads leads are classified by AI by service type and urgency, saved to Airtable, then trigger either an emergency alert or a personalised booking link. After the visit, a follow-up automatically requests a review or a reschedule.',
    features: ['AI classification by service and urgency', 'Emergency alerts', 'Personalised booking links', 'Post-visit review or reschedule follow-up'],
    results: [],
  },
  {
    slug: 'palmetto-infusion-appointment-sorter',
    name: 'Palmetto Infusion Sorter',
    type: 'Appointment sorting automation',
    client: 'Palmetto Infusion',
    industry: 'healthcare',
    services: ['ai-automation'],
    stack: ['Excel / XLSX', 'Workflow automation'],
    visual: 'sheet',
    summary: 'A tool that sorts clinic appointments into the right Excel sheets by date and time, cutting daily agent workload.',
    challenge: 'Agents spent part of every day manually sorting appointments before they could answer inquiries.',
    solution: 'An automation that sorts appointments into the correct sheets, organised by date and time, so agents process inquiries faster.',
    features: ['Automatic sorting into the right sheets', 'Organised by date and time', 'Faster inquiry processing'],
    results: [],
  },
];

// Smaller builds shown as cards only (no individual page).
export const passionProjects = {
  name: 'Local & passion projects',
  summary: 'Portfolio sites with built-in AI assistants, a wedding invitation website and a court booking system, built for real people.',
  stack: ['Web design', 'AI integration', 'Booking system'],
};

export const labProjects = [
  {
    name: 'Job Search Automation',
    summary: 'Fetches remote listings every 6 hours, filters and deduplicates them, and drafts a tailored cover letter and Gmail draft per job.',
    stack: ['n8n', 'Remotive API', 'Google Sheets', 'Gmail'],
  },
  {
    name: 'Remotive → Airtable pipeline',
    summary: 'A staffing data pipeline with field mapping, deduplication against existing records and full error logging.',
    stack: ['n8n', 'Remotive API', 'Airtable'],
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
export const featuredProjects = projects.filter((p) => p.featured);
