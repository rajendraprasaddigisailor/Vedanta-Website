import React from 'react';

export default function Buy() {
  return (
    <>

<main id="main-content">

<div className="hero-wrap">
  <div className="hero" role="region" aria-label="Procurement">
    <div className="hero-track">
      <div className="hero-slide active" style={{"backgroundImage":"linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.65)), url('assets/gallery1.png')"}}>
        <div className="hero-kicker">Procurement</div>
        <h1 className="hero-title">Buy Sterlite<br/>Copper products</h1>
        <p className="hero-sub reveal delay-2">LME Grade-A cathodes, 8mm CCR rods, sulphuric and phosphoric acid — spot contracts and long-term offtake agreements.</p>
      </div>
    </div>
  </div>
</div>

<section className="page-section" style={{"paddingTop":"clamp(40px, 5vw, 60px)"}}>
  <div className="ps-inner">
    <div className="fin-head">
      <div><div className="eyebrow reveal">Reference prices</div><h2 className="reveal delay-1">Today's benchmarks</h2></div>
      <div className="fin-ticker"><span className="live-dot"></span><span>LME Cu · <strong>$9,645/t</strong> · <span style={{"color":"#10843f"}}>+1.4%</span></span><span style={{"color":"var(--muted)","fontSize":"12px"}}>delayed 15m</span></div>
    </div>
    <div className="fin-grid reveal delay-3">
      <div className="fin-tile reveal"><div className="kpi-lab">LME Cu — 3M</div><div className="kpi-val">$9,645</div><div className="kpi-delta up">▲ +134 today</div><div className="kpi-caption">per metric tonne</div></div>
      <div className="fin-tile reveal"><div className="kpi-lab">MCX Cu</div><div className="kpi-val">₹802</div><div className="kpi-delta up">▲ +0.9%</div><div className="kpi-caption">per kg (Apr '26)</div></div>
      <div className="fin-tile reveal"><div className="kpi-lab">Cathode premium</div><div className="kpi-val">$120</div><div className="kpi-delta up">▲ +5</div><div className="kpi-caption">India CIF, indicative</div></div>
      <div className="fin-tile reveal"><div className="kpi-lab">Rod conversion</div><div className="kpi-val">$95</div><div className="kpi-delta up">▲ —</div><div className="kpi-caption">over cathode, ex-works</div></div>
    </div>
  </div>
</section>

<section className="page-section alt">
  <div className="ps-inner">
    <div className="section-head"><div className="eyebrow reveal">What you can order</div><h2 className="reveal delay-1">Two flagship products</h2></div>
    <div className="products-grid reveal delay-3">
      <div className="product-card"><div className="swatch-cu"></div><div className="spec">LME Grade A</div><h3>Copper Cathodes</h3><p className="reveal">99.99% Cu, 125&nbsp;kg sheets bundled to ~2&nbsp;t bundles. Registered on LME &amp; COMEX. Minimum order 25&nbsp;MT.</p><div className="product-meta"><div>Purity<strong>99.99% Cu</strong></div><div>Bundle<strong>~2 MT</strong></div><div>Lead time<strong>2–3 wks</strong></div><div>MOQ<strong>25 MT</strong></div></div><div className="actions"><a className="btn-buy reveal delay-4" href="#quote"><span className="roll-text"><span data-text="Request a quote →">Request a quote →</span></span></a></div></div>
      <div className="product-card rod"><div className="swatch-cu"></div><div className="spec">8 mm CCR</div><h3>Continuous Cast Rods</h3><p className="reveal">Oxygen-free 8&nbsp;mm copper rod, 3.5-ton coils. Zero-defect feed ready for wire-drawing. Minimum order 20&nbsp;MT.</p><div className="product-meta"><div>Diameter<strong>8 mm</strong></div><div>Coil<strong>3.5 MT</strong></div><div>Lead time<strong>2 wks</strong></div><div>MOQ<strong>20 MT</strong></div></div><div className="actions"><a className="btn-buy reveal delay-4" href="#quote"><span className="roll-text"><span data-text="Request a quote →">Request a quote →</span></span></a></div></div>
    </div>
  </div>
</section>

<section className="page-section" id="quote">
  <div className="ps-inner">
    <div className="contact-grid reveal delay-3">
      <form className="contact-form" onsubmit="event.preventDefault(); this.querySelector('.form-sent').hidden=false; this.querySelector('.form-sent').textContent = '✓ Quote request received. A commercial manager will email you within 24 hours.';">
        <div className="section-head" style={{"marginBottom":"24px"}}><div className="eyebrow reveal">Request a quote</div><h2 className="reveal delay-1">Tell us what you need</h2></div>
        <div className="row-2">
          <label>Company<input required placeholder="Registered entity name" /></label>
          <label>GSTIN / Tax ID<input placeholder="15-digit GSTIN if Indian" /></label>
        </div>
        <div className="row-2">
          <label>Contact name<input required placeholder="Full name" /></label>
          <label>Role<input placeholder="Procurement / purchase" /></label>
        </div>
        <div className="row-2">
          <label>Email<input type="email" required placeholder="you@company.com" /></label>
          <label>Phone<input type="tel" placeholder="+91 ..." /></label>
        </div>
        <div className="row-2">
          <label>Product
            <select required>
              <option value="">Select product</option>
              <option>Copper cathodes — LME Grade A</option>
              <option>Continuous cast rods — 8 mm</option>
              <option>Mixed order</option>
            </select>
          </label>
          <label>Quantity (MT)<input type="number" min="20" placeholder="e.g. 100" required /></label>
        </div>
        <div className="row-2">
          <label>Delivery terms
            <select>
              <option>Ex-works Thoothukudi</option>
              <option>Ex-works Silvassa</option>
              <option>FOR — named Indian port</option>
              <option>CIF — named port</option>
            </select>
          </label>
          <label>Payment terms
            <select>
              <option>Advance 100%</option>
              <option>LC at sight</option>
              <option>30-day credit (subject to approval)</option>
            </select>
          </label>
        </div>
        <label>Additional notes<textarea rows="4" placeholder="Delivery window, packaging preferences, certifications required"></textarea></label>
        <div className="form-actions"><button type="submit" className="btn-primary"><span className="roll-text"><span data-text="Request quote →">Request quote →</span></span></button><span className="form-sent" hidden></span></div>
      </form>
      <aside className="contact-side">
        <div className="contact-card"><div className="cc-label">Sales desk</div><a className="cc-link" href="mailto:sales@sterlitecopper.com">sales@sterlitecopper.com</a><a className="cc-link" href="tel:+914612345678">+91 461 234 5678</a><p className="reveal cc-note"  >Mon–Sat, 9:00–18:00 IST. Quotes returned within 1 business day.</p></div>
        <div className="contact-card"><div className="cc-label">Logistics</div><div className="cc-text">Ex-works dispatch from Thoothukudi (SIPCOT) and Silvassa. Preferred carriers on record for bulk &amp; containerised.</div></div>
        <div className="contact-card"><div className="cc-label">Certificates included</div><div className="cc-text">LME warrant copies, mill test certificates (ASTM B115), origin certificate, GST invoice.</div></div>
        <div className="contact-card"><div className="cc-label">Enterprise buyers</div><p className="reveal cc-note"  >For annual tonnage &gt; 5,000 MT or long-term supply contracts, contact our Key Accounts team at <a className="cc-link" href="mailto:keyaccounts@sterlitecopper.com" style={{"display":"inline","padding":"0"}}>keyaccounts@sterlitecopper.com</a>.</p></div>
      </aside>
    </div>
  </div>
</section>

<section className="cta-band">
  <div className="cta-inner">
    <div><div className="eyebrow reveal">Or talk to us first</div><h2 className="reveal delay-1">Not ready for a quote? We can walk you through specs and logistics.</h2></div>
    <div className="cta-btns"><a href="contact.html" className="btn-primary"><span className="roll-text"><span data-text="Contact sales →">Contact sales →</span></span></a><a href="business.html" className="btn-ghost"><span className="roll-text"><span data-text="Product details">Product details</span></span></a></div>
  </div>
</section>

</main>

    </>
  );
}
