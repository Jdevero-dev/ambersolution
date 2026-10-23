import Breadcrumbs from './Breadcrumbs';

// Legal content is a starting template. Have it reviewed by a Philippine lawyer before launch.
export default function LegalPage({ title, path, updated, children }) {
  return (
    <>
      <section className="hero hero-light hero-simple">
        <div className="wrap">
          <Breadcrumbs items={[{ name: title, href: path }]} />
          <h1>{title}</h1>
          <p className="muted">Last updated: {updated}</p>
        </div>
      </section>
      <section className="section-tight"><div className="wrap legal">{children}</div></section>
    </>
  );
}
