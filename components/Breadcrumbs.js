import JsonLd from './JsonLd';
import { absoluteUrl } from '@/lib/site';

// items: [{ name, href }] — last item is the current page
export default function Breadcrumbs({ items }) {
  const all = [{ name: 'Home', href: '/' }, ...items];
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: all.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: absoluteUrl(it.href) })),
  };
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {all.map((it, i) => (
          <li key={it.href}>
            {i === all.length - 1 ? <span aria-current="page">{it.name}</span> : <a href={it.href}>{it.name}</a>}
          </li>
        ))}
      </ol>
      <JsonLd data={schema} />
    </nav>
  );
}
