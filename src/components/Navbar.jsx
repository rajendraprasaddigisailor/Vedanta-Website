import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Close search on escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsSearchOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent scroll when search is open
  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isSearchOpen]);

  return (
    <>
      <nav className="nav" aria-label="Primary">
        <div className="nav-inner">
          <Link to="/" aria-label="Sterlite Copper home">
            <img className="nav-logo" src="assets/logo.png" alt="Vedanta · Sterlite Copper" />
          </Link>
          <div className="nav-menu">
            <Link to="/" className={pathname === '/' ? 'active' : ''}><span className="roll-text"><span data-text="Home">Home</span></span></Link>
            <Link to="/about" className={pathname === '/about' ? 'active' : ''}><span className="roll-text"><span data-text="About Us">About Us</span></span></Link>
            <Link to="/business" className={pathname === '/business' ? 'active' : ''}><span className="roll-text"><span data-text="Our Business">Our Business</span></span></Link>
            <Link to="/investors" className={pathname === '/investors' ? 'active' : ''}><span className="roll-text"><span data-text="Investor Relations">Investor Relations</span></span></Link>
            <Link to="/sustainability" className={pathname === '/sustainability' ? 'active' : ''}><span className="roll-text"><span data-text="Sustainability">Sustainability</span></span></Link>
            <Link to="/news" className={pathname === '/news' ? 'active' : ''}><span className="roll-text"><span data-text="News & Media">News & Media</span></span></Link>
            <Link to="/careers" className={pathname === '/careers' ? 'active' : ''}><span className="roll-text"><span data-text="Careers">Careers</span></span></Link>
            <Link to="/contact" className={pathname === '/contact' ? 'active' : ''}><span className="roll-text"><span data-text="Contact">Contact</span></span></Link>
          </div>
          <div className="nav-right">
            <button 
              className="search-btn" 
              aria-label="Search"
              onClick={() => setIsSearchOpen(true)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
            </button>
            <Link className="apply-btn" to="/buy">
              <span className="roll-text">
                <span data-text="Buy now">Buy now</span>
              </span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </Link>
            <button className="menu-toggle" aria-label="Menu">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Search Overlay */}
      <div className={`search-overlay ${isSearchOpen ? 'active' : ''}`} aria-hidden={!isSearchOpen}>
        <div className="search-overlay-bg" onClick={() => setIsSearchOpen(false)}></div>
        <div className="search-container">
          <div className="search-header">
            <div className="search-input-wrap">
              <svg className="search-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
              <input 
                type="text" 
                placeholder="Search products, reports, news..." 
                autoFocus={isSearchOpen}
                id="search-input"
              />
            </div>
            <button className="search-close" onClick={() => setIsSearchOpen(false)} aria-label="Close search">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>
          </div>
          
          <div className="search-results-mock">
            <div className="search-hint">Quick Links</div>
            <div className="quick-links">
              <Link to="/buy" onClick={() => setIsSearchOpen(false)}><span className="roll-text"><span data-text="Procurement Portal">Procurement Portal</span></span></Link>
              <Link to="/investors" onClick={() => setIsSearchOpen(false)}><span className="roll-text"><span data-text="FY24 Annual Report">FY24 Annual Report</span></span></Link>
              <Link to="/sustainability" onClick={() => setIsSearchOpen(false)}><span className="roll-text"><span data-text="ESG Dashboard">ESG Dashboard</span></span></Link>
              <Link to="/careers" onClick={() => setIsSearchOpen(false)}><span className="roll-text"><span data-text="Current Openings">Current Openings</span></span></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
