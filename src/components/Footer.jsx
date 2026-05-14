import React from 'react';

export default function Footer() {
  return (
    <footer>
  <div className="foot-inner">

    {/*  Manifesto + CTA  */}
    <div className="foot-manifesto">
      <h2 className="reveal delay-1">Copper is the <em>quiet infrastructure</em> of a country moving forward.</h2>
      <div className="cta-card reveal delay-2">
        <div className="eyebrow">Let's build together</div>
        <p className="reveal">Procurement, partnerships, community initiatives or press — we respond within two working days.</p>
        <div className="btns">
          <a href="#" className="primary">Contact us <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg></a>
          <a href="#" className="ghost">Buy copper</a>
        </div>
      </div>
    </div>

    {/*  Sitemap grid  */}
    <div className="foot-grid">
      <div className="foot-col foot-brand reveal">
        <img className="foot-logo" src="assets/logo.png" alt="Sterlite Copper · a Vedanta company" />
        <p className="reveal tag delay-1">India's leading copper producer, manufacturing continuous cast rod, cathodes, sulphuric acid and phosphoric acid for customers across the subcontinent.</p>
        <span className="since reveal delay-2">◦ Transforming for good · since 1996</span>
        <div className="socials">
          <a href="#" aria-label="Facebook"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.87v-6.99h-2.54V12h2.54V9.8c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.88h-2.33v6.99A10 10 0 0 0 22 12z"/></svg></a>
          <a href="#" aria-label="Instagram"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/></svg></a>
          <a href="#" aria-label="LinkedIn"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14M8.339 18.338V9.846H5.692v8.492h2.647zM7.015 8.71a1.533 1.533 0 1 0-.015-3.065 1.533 1.533 0 0 0 .015 3.065z"/></svg></a>
          <a href="#" aria-label="X"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z"/></svg></a>
          <a href="#" aria-label="YouTube"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
        </div>
      </div>

      <div className="foot-col reveal delay-1">
        <h4>Company</h4>
        <ul>
          <li className="reveal"><a href="#">About Sterlite</a></li>
          <li className="reveal"><a href="#">Leadership</a></li>
          <li className="reveal"><a href="#">Our history</a></li>
          <li className="reveal"><a href="#">Vedanta Group</a></li>
          <li className="reveal"><a href="#">Newsroom</a></li>
        </ul>
      </div>

      <div className="foot-col reveal delay-2">
        <h4>Business</h4>
        <ul>
          <li className="reveal"><a href="#">Copper rod</a></li>
          <li className="reveal"><a href="#">Copper cathodes</a></li>
          <li className="reveal"><a href="#">Sulphuric acid</a></li>
          <li className="reveal"><a href="#">Phosphoric acid</a></li>
          <li className="reveal"><a href="#">Procurement <span className="plus">BUY</span></a></li>
        </ul>
      </div>

      <div className="foot-col reveal delay-3">
        <h4>Stakeholders</h4>
        <ul>
          <li className="reveal"><a href="#">Investors</a></li>
          <li className="reveal"><a href="#">Sustainability</a></li>
          <li className="reveal"><a href="#">Community</a></li>
          <li className="reveal"><a href="#">Tender zone</a></li>
          <li className="reveal"><a href="#">Careers <span className="plus">12 OPEN</span></a></li>
        </ul>
      </div>

      <div className="foot-col foot-contact reveal delay-4">
        <h4>Reach us</h4>
        <div className="row">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <div>
            <strong>Registered office</strong>
            SIPCOT Industrial Complex,<br/>Madurai Bypass Road,<br/>Thoothukudi — 628 002, TN
          </div>
        </div>
        <div className="row">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          <div>
            <strong>Customer care</strong>
            <a href="tel:+914612242210">+91 461 224 2210</a>
          </div>
        </div>
        <div className="row">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          <div>
            <strong>Email</strong>
            <a href="mailto:reachus@sterlitecopper.com">reachus@sterlitecopper.com</a>
          </div>
        </div>
      </div>
    </div>

    {/*  Certifications  */}
    <div className="foot-certs reveal delay-5">
      <span className="label">Certifications</span>
      <span className="cert-chip"><span className="dot"></span>ISO 9001:2015</span>
      <span className="cert-chip"><span className="dot"></span>ISO 14001:2015</span>
      <span className="cert-chip"><span className="dot"></span>ISO 45001:2018</span>
      <span className="cert-chip"><span className="dot"></span>ISO 50001:2018</span>
      <span className="cert-chip"><span className="dot"></span>LME Grade A</span>
      <span className="cert-chip"><span className="dot"></span>Responsible Copper Initiative</span>
    </div>

    {/*  Legal  */}
    <div className="foot-bottom">
      <div>© 2024 Sterlite Copper — a unit of Vedanta Limited. CIN: L13209MH1965PLC291394.</div>
      <div className="legal-links">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Whistleblower</a>
        <a href="#">Cookies</a>
        <a href="#">Sitemap</a>
        <a href="#">Accessibility</a>
      </div>
    </div>

    {/*  Oversized wordmark  */}
    <div className="foot-wordmark" aria-hidden="true">Sterlite <em>Copper</em></div>

  </div>
</footer>
  );
}
