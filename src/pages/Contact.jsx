import React from 'react';

export default function Contact() {
  return (
    <>

      <main id="main-content">

        <div className="hero-wrap">
          <div className="hero" role="region" aria-label="Contact">
            <div className="hero-track">
              <div className="hero-slide active" style={{ "backgroundImage": "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.65)), url('assets/contact_hero.png')" }}>
                <div className="hero-kicker">Contact</div>
                <h1 className="hero-title">Let's build<br />together</h1>
                <p className="hero-sub reveal delay-2">Procurement, partnerships, community initiatives or press — we respond within two working days.</p>
              </div>
            </div>
          </div>
        </div>

        <section className="page-section" style={{ "paddingTop": "clamp(40px, 5vw, 60px)" }}>
          <div className="ps-inner">
            <div className="contact-grid reveal delay-3">
              <form className="contact-form" onsubmit="event.preventDefault(); this.querySelector('.form-sent').hidden=false;">
                <div className="section-head" style={{ "marginBottom": "24px" }}><div className="eyebrow reveal">Send us a message</div><h2 className="reveal delay-1">Tell us how we can help</h2></div>
                <label className="reveal delay-2">Full name<input type="text" required placeholder="Your name" /></label>
                <label className="reveal delay-3">Company / organisation<input type="text" placeholder="Optional" /></label>
                <div className="row-2">
                  <label className="reveal delay-4">Email<input type="email" required placeholder="you@example.com" /></label>
                  <label className="reveal delay-5">Phone<input type="tel" placeholder="+91 ..." /></label>
                </div>
                <label className="reveal delay-6">I'm reaching out about
                  <select required>
                    <option value="">Select a topic</option>
                    <option>Buying copper cathodes / rods</option>
                    <option>Buying sulphuric or phosphoric acid</option>
                    <option>Investor relations</option>
                    <option>Media enquiry</option>
                    <option>Careers</option>
                    <option>Community / grievance</option>
                    <option>Something else</option>
                  </select>
                </label>
                <label className="reveal delay-7">Message<textarea rows="5" required placeholder="Brief details so we can route you to the right person"></textarea></label>
                <div className="form-actions reveal delay-8"><button type="submit" className="btn-primary">Send message →</button><span className="form-sent" hidden>✓ Thanks — we'll be in touch within 2 business days.</span></div>
              </form>
              <aside className="contact-side">
                <div className="contact-card reveal delay-1"><div className="cc-label">Corporate office</div><div className="cc-text"><strong>Sterlite Copper</strong><br />SIPCOT Industrial Complex,<br />Madurai Bypass Road, Thoothukudi<br />Tamil Nadu 628002, India</div></div>
                <div className="contact-card reveal delay-2"><div className="cc-label">Sales enquiries</div><a className="cc-link" href="mailto:sales@sterlitecopper.com">sales@sterlitecopper.com</a><a className="cc-link" href="tel:+914612345678">+91 461 234 5678</a></div>
                <div className="contact-card reveal delay-3"><div className="cc-label">Investor relations</div><a className="cc-link" href="mailto:ir@sterlitecopper.com">ir@sterlitecopper.com</a></div>
                <div className="contact-card reveal delay-4"><div className="cc-label">Media desk</div><a className="cc-link" href="mailto:media@sterlitecopper.com">media@sterlitecopper.com</a></div>
                <div className="contact-card reveal delay-5"><div className="cc-label">Grievance cell</div><a className="cc-link" href="mailto:grievance@sterlitecopper.com">grievance@sterlitecopper.com</a><p className="reveal cc-note"  >Anonymous reporting via our whistleblower channel is also available on the Investors page.</p></div>
              </aside>
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="ps-inner">
            <div className="section-head"><div className="eyebrow reveal">Our locations</div><h2 className="reveal delay-1">Where we operate</h2></div>
            <div className="loc-grid">
              <div className="loc-card"><div className="loc-map" style={{ "backgroundImage": "url('assets/hero-1.png')" }}></div><div className="loc-body"><h3>Thoothukudi, Tamil Nadu</h3><p className="reveal">Primary smelter, refinery &amp; acid plant complex. 400,000 MTPA cathode capacity.</p></div></div>
              <div className="loc-card"><div className="loc-map" style={{ "backgroundImage": "url('assets/hero-2.png')" }}></div><div className="loc-body"><h3>Silvassa, Dadra &amp; Nagar Haveli</h3><p className="reveal">Continuous-cast rod plant. 216,000 MTPA capacity.</p></div></div>
              <div className="loc-card"><div className="loc-map" style={{ "backgroundImage": "url('assets/hero-3.png')" }}></div><div className="loc-body"><h3>Mumbai, Maharashtra</h3><p className="reveal">Corporate &amp; commercial offices. Sales, finance, IR and strategy.</p></div></div>
            </div>
          </div>
        </section>

      </main>

    </>
  );
}
