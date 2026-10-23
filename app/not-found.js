export const metadata = { title: 'Page not found', robots: { index: false } };

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap" style={{ maxWidth: 760 }}>
        <p className="eyebrow">404</p>
        <h1>This page doesn&apos;t exist.</h1>
        <p className="lead muted">It may have moved. Try one of these instead:</p>
        <div className="btn-row">
          <a className="btn btn-dark" href="/">Home</a>
          <a className="btn btn-ghost" href="/services/">Services</a>
          <a className="btn btn-ghost" href="/projects/">Projects</a>
          <a className="btn btn-ghost" href="/contact/">Contact</a>
        </div>
      </div>
    </section>
  );
}
