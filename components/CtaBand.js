export default function CtaBand({
  title = 'Tell us what you need to build, fix or automate.',
  text = 'We reply within 12 hours with next steps. Every project is quoted after we understand your needs.',
  primary = { label: 'Request a Quote', href: '/request-a-quote/' },
  secondary = { label: 'Free Website Health Check', href: '/website-health-check/' },
}) {
  return (
    <section className="section-tight">
      <div className="wrap">
        <div className="cta-band">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="btn-row">
            <a className="btn btn-primary" href={primary.href}>{primary.label}</a>
            {secondary && <a className="btn btn-ghost" href={secondary.href}>{secondary.label}</a>}
          </div>
        </div>
      </div>
    </section>
  );
}
