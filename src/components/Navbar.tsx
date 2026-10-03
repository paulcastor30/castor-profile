export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="portfolio-container navigation" aria-label="Main navigation">
        <a className="wordmark" href="#home" aria-label="Paul Castor — back to the beginning">Paul Castor<span aria-hidden="true">.</span></a>
        <div className="navigation-links">
          <a href="#about">About</a>
          <a href="#projects">My work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}
