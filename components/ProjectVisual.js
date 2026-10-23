// Illustrated UI previews used until real project screenshots are added.
// To use a real screenshot: put /public/projects/[slug].webp and pass `image`.
import Image from 'next/image';

const C = { bg: '#1f1a14', panel: '#2b241b', line: '#3a3126', amber: '#f4a30d', soft: '#5a4a35', text: '#cbbfac', light: '#f7f0e4', green: '#3fae6a' };

function Chrome({ children, label }) {
  return (
    <>
      <rect width="400" height="250" fill={C.bg} />
      <rect width="400" height="24" fill={C.panel} />
      <circle cx="14" cy="12" r="3.5" fill="#e0614a" /><circle cx="26" cy="12" r="3.5" fill={C.amber} /><circle cx="38" cy="12" r="3.5" fill={C.green} />
      <rect x="120" y="6" width="160" height="12" rx="6" fill={C.bg} />
      {label && <text x="200" y="15.5" fontSize="7" fill={C.text} textAnchor="middle" fontFamily="monospace">{label}</text>}
      {children}
    </>
  );
}

const bars = (x, y, ws, h = 5, gap = 10, fill = C.soft) => ws.map((w, i) => <rect key={i} x={x} y={y + i * gap} width={w} height={h} rx="2.5" fill={fill} />);

const variants = {
  crm: () => (
    <>
      <rect x="0" y="24" width="70" height="226" fill={C.panel} />
      {bars(12, 44, [46, 38, 42, 30, 40], 6, 18, C.soft)}
      <rect x="12" y="40" width="46" height="14" rx="4" fill={C.amber} opacity="0.25" />
      {Array.from({ length: 6 }).map((_, r) => (
        <g key={r}>
          <text x="84" y={62 + r * 30} fontSize="7" fill={C.text} fontFamily="monospace">CH{r + 1}</text>
          <rect x="104" y={50 + r * 30} width="284" height="20" rx="3" fill={C.panel} />
        </g>
      ))}
      {[[110, 50, 70], [200, 80, 90], [130, 110, 60], [250, 140, 100], [110, 170, 120], [300, 200, 70], [240, 50, 50]].map(([x, y, w], i) => (
        <rect key={i} x={x} y={y + 2} width={w} height="16" rx="3" fill={i % 3 === 0 ? C.amber : i % 3 === 1 ? '#c98a2a' : C.green} opacity={i % 3 === 2 ? 0.7 : 0.85} />
      ))}
    </>
  ),
  booking: () => (
    <>
      {['Event', 'Package', 'Booth', 'Pay'].map((s, i) => (
        <g key={s}>
          <circle cx={70 + i * 88} cy="48" r="9" fill={i < 3 ? C.amber : C.panel} stroke={C.line} />
          <text x={70 + i * 88} y="70" fontSize="8" fill={C.text} textAnchor="middle" fontFamily="sans-serif">{s}</text>
          {i < 3 && <rect x={80 + i * 88} y="47" width="68" height="2" fill={i < 2 ? C.amber : C.line} />}
        </g>
      ))}
      {Array.from({ length: 24 }).map((_, i) => {
        const x = 40 + (i % 8) * 42, y = 90 + Math.floor(i / 8) * 42;
        const taken = [2, 5, 9, 14, 19, 20].includes(i), picked = i === 11;
        return <rect key={i} x={x} y={y} width="34" height="34" rx="5" fill={picked ? C.amber : taken ? C.soft : C.panel} stroke={picked ? C.light : C.line} />;
      })}
      <rect x="250" y="222" width="110" height="18" rx="9" fill={C.amber} />
    </>
  ),
  marketplace: () => (
    <>
      <rect x="20" y="38" width="250" height="20" rx="10" fill={C.panel} />
      <rect x="280" y="38" width="100" height="20" rx="10" fill={C.amber} />
      {Array.from({ length: 6 }).map((_, i) => {
        const x = 20 + (i % 3) * 124, y = 72 + Math.floor(i / 3) * 88;
        return (
          <g key={i}>
            <rect x={x} y={y} width="112" height="78" rx="8" fill={C.panel} />
            <circle cx={x + 20} cy={y + 20} r="10" fill={i % 2 ? C.soft : C.amber} opacity="0.8" />
            {bars(x + 36, y + 14, [56, 38], 5, 10)}
            {bars(x + 12, y + 44, [88, 70], 4, 9, C.line)}
            {i === 0 && <rect x={x + 76} y={y + 60} width="28" height="10" rx="5" fill={C.amber} />}
          </g>
        );
      })}
    </>
  ),
  portal: () => (
    <>
      <rect x="20" y="40" width="240" height="190" rx="8" fill={C.panel} />
      <rect x="36" y="56" width="208" height="130" rx="6" fill={C.soft} opacity="0.6" />
      <path d="M36 186l60-60 40 36 40-50 68 74z" fill={C.line} />
      <text x="140" y="130" fontSize="20" fill={C.light} opacity="0.35" textAnchor="middle" transform="rotate(-20 140 120)" fontFamily="sans-serif" fontWeight="700">PREVIEW</text>
      <rect x="36" y="198" width="90" height="18" rx="9" fill={C.amber} />
      <rect x="134" y="198" width="90" height="18" rx="9" fill="none" stroke={C.text} />
      <rect x="276" y="40" width="104" height="190" rx="8" fill={C.panel} />
      <rect x="296" y="60" width="64" height="52" rx="8" fill={C.bg} />
      <rect x="318" y="80" width="20" height="18" rx="3" fill={C.amber} />
      <path d="M322 80v-5a6 6 0 0112 0v5" stroke={C.amber} strokeWidth="2.5" fill="none" />
      {bars(292, 130, [72, 56, 64, 48], 5, 14)}
    </>
  ),
  shop: () => (
    <>
      <rect x="20" y="36" width="80" height="10" rx="5" fill={C.amber} />
      <rect x="340" y="34" width="40" height="14" rx="7" fill={C.panel} />
      {Array.from({ length: 4 }).map((_, i) => {
        const x = 20 + i * 92;
        return (
          <g key={i}>
            <rect x={x} y="60" width="82" height="110" rx="8" fill={C.panel} />
            <circle cx={x + 41} cy="105" r={i === 1 ? 22 : 18} fill="none" stroke={C.amber} strokeWidth="3" opacity={0.6 + i * 0.1} />
            {bars(x + 10, 180, [60, 34], 5, 11)}
            <rect x={x + 10} y="180" width="0" height="0" />
          </g>
        );
      })}
      <rect x="20" y="214" width="360" height="22" rx="11" fill={C.panel} />
      <rect x="270" y="214" width="110" height="22" rx="11" fill={C.amber} />
    </>
  ),
  chat: () => (
    <>
      <rect x="20" y="36" width="210" height="200" rx="8" fill={C.panel} />
      {bars(36, 52, [150, 120, 170, 90, 140, 110, 160, 130], 6, 20, C.line)}
      <rect x="244" y="36" width="140" height="200" rx="10" fill={C.bg} stroke={C.line} />
      <rect x="244" y="36" width="140" height="26" rx="10" fill={C.amber} />
      <circle cx="260" cy="49" r="6" fill={C.bg} />
      <rect x="254" y="74" width="96" height="26" rx="8" fill={C.panel} />
      <rect x="282" y="108" width="92" height="20" rx="8" fill={C.amber} opacity="0.85" />
      <rect x="254" y="136" width="104" height="34" rx="8" fill={C.panel} />
      <rect x="296" y="178" width="78" height="20" rx="8" fill={C.amber} opacity="0.85" />
      <rect x="254" y="208" width="120" height="18" rx="9" fill={C.panel} stroke={C.line} />
    </>
  ),
  flow: () => (
    <>
      {[[30, 60, 'Lead'], [150, 60, 'AI triage'], [270, 60, 'Airtable'], [90, 160, 'Alert'], [210, 160, 'Booking'], [320, 160, 'Follow-up']].map(([x, y, t], i) => (
        <g key={t}>
          <rect x={x} y={y} width="88" height="40" rx="8" fill={i === 1 ? C.amber : C.panel} stroke={C.line} />
          <text x={x + 44} y={y + 24} fontSize="10" fill={i === 1 ? C.bg : C.light} textAnchor="middle" fontFamily="sans-serif" fontWeight="600">{t}</text>
        </g>
      ))}
      <path d="M118 80h32M238 80h32M314 100v30H134v30M254 130v30M298 180h22" stroke={C.amber} strokeWidth="2" fill="none" />
    </>
  ),
  sheet: () => (
    <>
      <rect x="20" y="36" width="360" height="200" rx="6" fill={C.panel} />
      {Array.from({ length: 9 }).map((_, r) => (
        <g key={r}>
          <rect x="20" y={36 + r * 22} width="360" height="1" fill={C.line} />
          {r > 0 && bars(30, 44 + r * 22, [40], 5, 0, C.soft)}
          {r > 0 && <rect x="100" y={44 + r * 22} width={50 + ((r * 37) % 60)} height="5" rx="2.5" fill={r % 3 === 0 ? C.amber : C.soft} />}
          {r > 0 && <rect x="250" y={44 + r * 22} width="60" height="5" rx="2.5" fill={C.soft} />}
        </g>
      ))}
      <rect x="20" y="36" width="360" height="22" fill={C.amber} opacity="0.25" />
      {['Sheet: Mon', 'Tue', 'Wed'].map((t, i) => (
        <rect key={t} x={20 + i * 64} y="238" width="60" height="10" rx="2" fill={i === 0 ? C.amber : C.line} />
      ))}
    </>
  ),
  site: () => (
    <>
      <rect x="20" y="34" width="70" height="10" rx="5" fill={C.amber} />
      {bars(250, 36, [24, 24, 24], 5, 0, C.soft).map((b, i) => <rect key={i} x={250 + i * 32} y="36" width="24" height="5" rx="2.5" fill={C.soft} />)}
      <rect x="20" y="64" width="210" height="16" rx="4" fill={C.light} opacity="0.85" />
      <rect x="20" y="86" width="170" height="16" rx="4" fill={C.light} opacity="0.85" />
      {bars(20, 116, [190, 160, 120], 5, 11)}
      <rect x="20" y="160" width="90" height="22" rx="11" fill={C.amber} />
      <rect x="250" y="60" width="130" height="130" rx="12" fill={C.panel} />
      <circle cx="315" cy="112" r="26" fill={C.soft} />
      <rect x="275" y="150" width="80" height="6" rx="3" fill={C.line} />
      {[0, 1, 2].map((i) => <rect key={i} x={20 + i * 124} y="206" width="112" height="30" rx="6" fill={C.panel} />)}
    </>
  ),
};

export default function ProjectVisual({ variant = 'site', label, image, alt, priority = false }) {
  if (image) {
    return <Image src={image} alt={alt || label || ''} width={1600} height={1000} className="pv" priority={priority} sizes="(max-width: 900px) 100vw, 50vw" />;
  }
  const V = variants[variant] || variants.site;
  return (
    <svg className="pv" viewBox="0 0 400 250" role="img" aria-label={alt || `Illustration of ${label}`}>
      <Chrome label={label}><V /></Chrome>
    </svg>
  );
}
