import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="nav" aria-label="Primary">
      <div className="nav-inner">
        <Link to="/" aria-label="Sterlite Copper home">
          <img className="nav-logo" src="assets/logo.png" alt="Vedanta · Sterlite Copper" />
        </Link>
        <div className="nav-menu">
          <Link to="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/about" className={pathname === '/about' ? 'active' : ''}>About Us</Link>
          <Link to="/business" className={pathname === '/business' ? 'active' : ''}>Our Business</Link>
          <Link to="/investors" className={pathname === '/investors' ? 'active' : ''}>Investor Relations</Link>
          <Link to="/sustainability" className={pathname === '/sustainability' ? 'active' : ''}>Sustainability</Link>
          <Link to="/news" className={pathname === '/news' ? 'active' : ''}>News & Media</Link>
          <Link to="/careers" className={pathname === '/careers' ? 'active' : ''}>Careers</Link>
          <Link to="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link>
        </div>
        <div className="nav-right">
          <button className="search-btn" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
          </button>
          <Link className="apply-btn" to="/buy">Buy now
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </Link>
          <button className="menu-toggle" aria-label="Menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
