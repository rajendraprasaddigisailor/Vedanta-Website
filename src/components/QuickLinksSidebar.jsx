import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function QuickLinksSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (selector, fallbackPath) => {
    if (location.pathname === '/') {
      const element = document.querySelector(selector);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // If we are on another page, navigate to Home and pass the target selector via query param
      navigate('/' + (selector ? `?scroll=${encodeURIComponent(selector)}` : ''));
    }
  };

  return (
    <div className={`quick-links-sidebar ${collapsed ? 'collapsed' : ''}`} role="complementary" aria-label="Quick links">
      {/* 1. Facts */}
      <button 
        className="quick-link-item" 
        onClick={() => handleScroll('#glance')} 
        aria-label="Facts about Copper"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <text x="50%" y="70%" fontSize="5.5" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="900" fill="currentColor" textAnchor="middle" letterSpacing="0.2">FACT</text>
        </svg>
        <span className="quick-link-tooltip">Facts</span>
      </button>

      {/* 2. Press */}
      <button 
        className="quick-link-item" 
        onClick={() => handleScroll('#news')} 
        aria-label="Press Releases"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <text x="50%" y="70%" fontSize="5" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="900" fill="currentColor" textAnchor="middle" letterSpacing="0.1">PRESS</text>
        </svg>
        <span className="quick-link-tooltip">Press Releases</span>
      </button>

      {/* 3. Announcements */}
      <button 
        className="quick-link-item" 
        onClick={() => handleScroll('#sustainability-dashboard')} 
        aria-label="Sustainability & ESG"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 10h4l6-5v14l-6-5H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Z" />
          <path d="M8 14v3a2 2 0 0 0 3.2 1.6" />
          <path d="M17 9c.7 1 1 2.3 1 3.5s-.3 2.5-1 3.5" />
          <path d="M20 6c1.3 1.8 2 4 2 6s-.7 4.2-2 6" />
        </svg>
        <span className="quick-link-tooltip">Sustainability</span>
      </button>

      {/* 4. Enquiry */}
      <button 
        className="quick-link-item" 
        onClick={() => navigate('/contact')} 
        aria-label="Enquire / Contact Us"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          <circle cx="9" cy="12" r="1" fill="currentColor" />
          <circle cx="13" cy="12" r="1" fill="currentColor" />
          <path d="M18.5 5.5a1.5 1.5 0 1 1 2.1 2.1L14 14.5l-3 1 1-3 6.5-6.5Z" />
        </svg>
        <span className="quick-link-tooltip">Enquiry</span>
      </button>

      {/* 5. Documents */}
      <button 
        className="quick-link-item" 
        onClick={() => handleScroll('#investor-highlights')} 
        aria-label="Reports & Documents"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
          <path d="M5 6H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1" />
        </svg>
        <span className="quick-link-tooltip">Documents</span>
      </button>

      {/* 6. Collapse/Expand Toggle */}
      <button 
        className="quick-link-toggle" 
        onClick={() => setCollapsed(!collapsed)} 
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>
    </div>
  );
}
