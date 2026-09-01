export function Header() {
  return (
    <header className="site-nav">
      <div className="wrap site-nav-inner">

        <a className="logo" href="/">
          CLIP<span>FORGE</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <a href="/tools">Tools</a>
          <a href="/content-repurposer">Repurpose</a>
          <a href="#resources">Resources</a>
        </nav>

        <a className="desktop-create-btn" href="/content-repurposer">
          Start Creating Free
        </a>

        {/* Mobile Menu */}
        <details className="mobile-menu">
          <summary aria-label="Open navigation menu">
            <span></span>
            <span></span>
            <span></span>
          </summary>

          <div className="mobile-menu-panel">
            <a href="/tools">Tools</a>
            <a href="/content-repurposer">Repurpose</a>
            <a href="#resources">Resources</a>

            <a
              className="mobile-create-btn"
              href="/content-repurposer"
            >
              ✨ Start Creating Free
            </a>
          </div>
        </details>

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
