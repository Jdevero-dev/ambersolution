import JsonLd from './JsonLd';

export default function Faq({ items, title = 'Frequently asked questions', id = 'faq' }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  };
  return (
    <section className="section" aria-labelledby={id}>
      <div className="wrap">
        <p className="eyebrow">FAQ</p>
        <h2 id={id}>{title}</h2>
        <div className="faq" style={{ marginTop: 28 }}>
          {items.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
      <JsonLd data={schema} />
    </section>
  );
}
