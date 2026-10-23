export default function Logo() {
  return (
    <a href="/" className="logo" aria-label="Amber Solutions home">
      <svg className="logo-mark" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 2l12 7v14l-12 7-12-7V9z" fill="#f4a30d" />
        <path d="M16 9l5.5 13h-3l-1.1-2.8h-2.8L13.5 22h-3L16 9zm0 5.2l-.9 2.7h1.8z" fill="#15120e" />
      </svg>
      <span>Amber Solutions<small>Build · Maintain · Automate</small></span>
    </a>
  );
}
