export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">

        <a className="site-logo" href="/">
          CLIP<span>FORGE</span>
        </a>

        <nav className="site-nav">
          <a href="/tools">Tools</a>
          <a href="/content-repurposer">Repurpose</a>
          <a href="#resources">Resources</a>
        </nav>

        <a className="header-cta" href="/content-repurposer">
          Start Creating Free
        </a>

      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        © {new Date().getFullYear()} ClipForge · Create Once. Repurpose Everywhere.
      </div>
    </footer>
  );
}
