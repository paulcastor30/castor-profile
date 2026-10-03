import { Link, NavLink, Outlet } from "react-router-dom";

export default function LabLayout() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <a className="skip-link" href="/lab/contact">Go directly to lab contact</a>
      <header className="site-header">
        <nav className="portfolio-container navigation lab-navigation" aria-label="Laboratory navigation">
          <Link className="wordmark" to="/lab">Edge Intelligence &amp; AIoT<span aria-hidden="true">.</span></Link>
          <div className="navigation-links">
            <NavLink to="/lab/research">Research</NavLink>
            <NavLink to="/lab/people">People</NavLink>
            <NavLink to="/lab/contact">Contact</NavLink>
          </div>
        </nav>
      </header>
      <main id="main-content" tabIndex={-1}><Outlet /></main>
      <footer className="portfolio-container site-footer">
        <p>Edge Intelligence and AIoT Research Laboratory</p>
        <Link to="/">Paul Castor’s personal portfolio</Link>
      </footer>
    </>
  );
}
