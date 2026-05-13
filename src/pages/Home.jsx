import React from 'react';

export default function Home() {
  return (
    <>


{/*  HERO  */}
<main id="main-content">
<div className="hero-wrap">
  <div className="hero" role="region" aria-label="Featured highlights" aria-roledescription="carousel">
    <div className="hero-track" id="hero-track">
      <div className="hero-slide active" style={{"backgroundImage":"linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.55)), url('assets/hero.png')"}} role="group" aria-roledescription="slide" aria-label="1 of 5">
        <div className="hero-kicker">Who we are</div>
        <h1 className="hero-title">India's leading<br/>copper producer</h1>
        <p className="hero-sub reveal delay-2">A unit of Vedanta Limited, powering 36% of India's copper demand since 1996.</p>
      </div>
      <div className="hero-slide" style={{"backgroundImage":"linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.55)), url('assets/hero-1.png')"}} role="group" aria-roledescription="slide" aria-label="2 of 5">
        <div className="hero-kicker">Scale</div>
        <h1 className="hero-title">400,000 MTPA<br/>smelter capacity</h1>
        <p className="hero-sub reveal delay-2">One of the largest single-location copper smelting complexes in the world — Thoothukudi, Tamil Nadu.</p>
      </div>
      <div className="hero-slide" style={{"backgroundImage":"linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('assets/copper_cathodes.png')"}} role="group" aria-roledescription="slide" aria-label="3 of 5">
        <div className="hero-kicker">Products</div>
        <h1 className="hero-title">Cathodes, rods,<br/>acids &amp; more</h1>
        <p className="hero-sub reveal delay-2">LME Grade-A copper cathodes, 8&nbsp;mm continuous cast rods, sulphuric and phosphoric acid at industrial scale.</p>
      </div>
      <div className="hero-slide" style={{"backgroundImage":"linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.65)), url('assets/csr1.png')"}} role="group" aria-roledescription="slide" aria-label="4 of 5">
        <div className="hero-kicker">Community</div>
        <h1 className="hero-title">2.5&nbsp;lakh lives<br/>impacted</h1>
        <p className="hero-sub reveal delay-2">Education, livelihood and healthcare programmes across Thoothukudi &amp; Tirunelveli districts since 1997.</p>
      </div>
      <div className="hero-slide" style={{"backgroundImage":"linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.6)), url('assets/pillar-operations.png')"}} role="group" aria-roledescription="slide" aria-label="5 of 5">
        <div className="hero-kicker">Safety</div>
        <h1 className="hero-title">Sword of Honour<br/>winners, 2024</h1>
        <p className="hero-sub reveal delay-2">British Safety Council's highest recognition — awarded to fewer than 2% of audited sites worldwide.</p>
      </div>
    </div>
    <div className="hero-arrows">
      <button id="hero-prev" aria-label="Previous slide">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <button id="hero-next" aria-label="Next slide">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>
      </button>
    </div>
    <div className="hero-dots" id="hero-dots" role="tablist">
      <button className="active" role="tab" aria-label="Slide 1" aria-selected="true"></button>
      <button role="tab" aria-label="Slide 2" aria-selected="false"></button>
      <button role="tab" aria-label="Slide 3" aria-selected="false"></button>
      <button role="tab" aria-label="Slide 4" aria-selected="false"></button>
      <button role="tab" aria-label="Slide 5" aria-selected="false"></button>
    </div>
    <button className="hero-pause" id="hero-pause" aria-label="Pause slideshow" aria-pressed="false">
      <svg className="icon-pause" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>
      <svg className="icon-play" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{"display":"none"}}><path d="M8 5v14l11-7z"/></svg>
    </button>
  </div>
</div>

{/*  GLANCE  */}
<section className="glance">
  <div>
    <div className="eyebrow reveal">About Sterlite Copper</div>
    <h2 className="h-section reveal delay-1">Sterlite Copper at a Glance</h2>
    <p className="lede reveal delay-2">Sterlite Copper represents a key aspect of Vedanta Limited's Copper Business. Since its inception in 1996, we have steadily grown to become a leading contributor to copper production in India — contributing upto 36% of India's demand for refined copper.</p>
    <p className="copy reveal delay-3">Currently, we operate a 400,000 Metric Tonnes Per Annum (MTPA) Copper Smelter with associated facilities — a Refinery and Copper Rod Plant, a Sulphuric Acid plant of more than 12,00,000 MTPA and a Phosphoric Acid plant of 220,000 MTPA at Thoothukudi, Tamil Nadu. Sterlite Copper also operates a 160 MW coal-based power plant in Thoothukudi.</p>

    <div className="glance-mvv reveal delay-3">
      <div className="mvv-item reveal">
        <div className="mvv-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
        </div>
        <div className="mvv-label">Mission</div>
      </div>
      <div className="mvv-item reveal">
        <div className="mvv-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
        </div>
        <div className="mvv-label">Vision</div>
      </div>
      <div className="mvv-item reveal">
        <div className="mvv-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3h12l4 6-10 13L2 9l4-6z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/></svg>
        </div>
        <div className="mvv-label">Values</div>
      </div>
    </div>

    <button className="btn-primary reveal delay-4">Facts about Copper
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
    </button>
  </div>

  <div className="gallery reveal delay-3">
    <div className="col">
      <img src="assets/gallery1.png" alt="Copper coils" />
      <img src="assets/gallery2.png" alt="Operations team" />
    </div>
    <div className="col offset">
      <img src="assets/pillar-operations.jpg" alt="Molten copper" />
      <img src="assets/copper_wire_bundles.png" alt="Copper wire" />
    </div>
  </div>
</section>

{/*  TIMELINE  */}
<section className="timeline timeline-pinned reveal" aria-label="Company timeline">
  <div className="timeline-pin">
    <div className="timeline-head">
      <div className="eyebrow reveal">Our journey</div>
      <h2 className="reveal delay-1">Three decades of building India's copper backbone</h2>
      <p className="reveal delay-2">From a single smelter at Thoothukudi to an integrated operation spanning two states — here's how Sterlite Copper has grown alongside India's industrial economy.</p>
    </div>
    <div className="timeline-rail">
      <div className="timeline-track">
      <div className="tl-item reveal"><div className="tl-dot"></div><div className="tl-year">1996</div><div className="tl-body"><h3>Inception</h3><p className="reveal">Sterlite Copper founded as part of Vedanta's copper business, breaking ground at Thoothukudi, Tamil Nadu.</p></div></div>
      <div className="tl-item reveal"><div className="tl-dot"></div><div className="tl-year">1997</div><div className="tl-body"><h3>CSR begins</h3><p className="reveal">First community programmes launched — mobile medical vans and school infrastructure around the plant.</p></div></div>
      <div className="tl-item reveal"><div className="tl-dot"></div><div className="tl-year">2000</div><div className="tl-body"><h3>Silvassa refinery</h3><p className="reveal">Second complex commissioned — copper rods, cathodes and downstream refining at scale.</p></div></div>
      <div className="tl-item reveal"><div className="tl-dot"></div><div className="tl-year">2009</div><div className="tl-body"><h3>400 K MTPA</h3><p className="reveal">Smelter expansion complete — becoming one of India's largest single-location copper operations.</p></div></div>
      <div className="tl-item reveal"><div className="tl-dot"></div><div className="tl-year">2015</div><div className="tl-body"><h3>Tamira Surabhi</h3><p className="reveal">Women's empowerment programme scales to 20,000+ beneficiaries across Thoothukudi district.</p></div></div>
      <div className="tl-item reveal"><div className="tl-dot"></div><div className="tl-year">2020</div><div className="tl-body"><h3>542 MT O₂</h3><p className="reveal">Supplied medical oxygen during COVID-19 — from by-product stream to critical-care hospitals nationwide.</p></div></div>
      <div className="tl-item reveal"><div className="tl-dot"></div><div className="tl-year">2022</div><div className="tl-body"><h3>Sword of Honour</h3><p className="reveal">British Safety Council recognition — fewer than 2% of audited sites worldwide earn this distinction.</p></div></div>
      <div className="tl-item reveal"><div className="tl-dot"></div><div className="tl-year">2024</div><div className="tl-body"><h3>2.5 lakh lives</h3><p className="reveal">Cumulative reach of Sterlite Copper's CSR programmes since inception — education, livelihood, health.</p></div></div>
    </div>
  </div>
  <div className="timeline-progress" aria-hidden="true"><span></span></div>
  </div>
</section>

{/*  PILLARS  */}
<section className="pillars pillars-v2">
  <div className="pillars-head">
    <div className="eyebrow reveal">Foundation</div>
    <h2 className="h-section reveal delay-1">Our Pillars of Excellence</h2>
    <p className="reveal delay-2">At Sterlite Copper, we are driven by a commitment to sustainable operations, stringent policies, and the empowerment of our people. We strive to set global benchmarks in everything we do.</p>
  </div>

  <div className="pillars-row reveal delay-3">
    <article className="pillar-card reveal">
      <img className="ph" src="assets/contact_hero.png" alt="Company" />
      <div className="body">
        <h3>Our Company</h3>
        <p className="reveal">Sterlite Copper is a key part of Vedanta Limited's Copper operations globally.</p>
        <a className="link-green" href="#">View all details
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
      </div>
    </article>
    <article className="pillar-card reveal">
      <img className="ph" src="assets/pillar-operations.png" alt="Operations" />
      <div className="body">
        <h3>Our Operations</h3>
        <p className="reveal">From smelting and refining to acid production, we execute every step with precision, safety and reliability.</p>
        <a className="link-green" href="#">View all details
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
      </div>
    </article>
    <article className="pillar-card reveal">
      <img className="ph" src="assets/pillar-policies.png" alt="Policies" />
      <div className="body">
        <h3>Our Policies</h3>
        <p className="reveal">An adherent set of rigorous committed standards across all material aspects of our business.</p>
        <a className="link-green" href="#">View all details
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
      </div>
    </article>
    <article className="pillar-card reveal">
      <img className="ph" src="assets/careers_hero.png" alt="People" />
      <div className="body">
        <h3>People & Careers</h3>
        <p className="reveal">We attribute much of our success to our talented workforce.</p>
        <a className="link-green" href="#">View all details
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
      </div>
    </article>
  </div>
</section>

{/*  SCALE BAND  */}
<section className="scale" aria-label="By the numbers">
  <div className="scale-inner reveal delay-3">
    <div className="scale-cell">
      <div className="n" data-count="400000" data-suffix="">400<sup>K</sup></div>
      <div className="l"><strong>MTPA smelter capacity</strong><span className="sub">Enough copper to wire ~8 million Indian homes each year</span></div>
    </div>
    <div className="scale-cell">
      <div className="n" data-count="36" data-suffix="%">36<sup>%</sup></div>
      <div className="l"><strong>Of India's refined-copper demand</strong><span className="sub">Supplying transformer, cable and EV battery manufacturers nationwide</span></div>
    </div>
    <div className="scale-cell">
      <div className="n" data-count="160" data-suffix="MW">160<sup>MW</sup></div>
      <div className="l"><strong>Captive power plant</strong><span className="sub">Thoothukudi complex — reliable baseload for 24×7 smelter operations</span></div>
    </div>
    <div className="scale-cell">
      <div className="n" data-count="250000" data-suffix="">2.5<sup>L</sup></div>
      <div className="l"><strong>Lives reached since 1997</strong><span className="sub">Across education, livelihood, women's health and rural development</span></div>
    </div>
  </div>
</section>

{/*  PRODUCTS  */}
<section className="products reveal" aria-label="Products">
  <div className="products-head">
    <div>
      <div className="eyebrow reveal">What we make</div>
      <h2 className="reveal delay-1">Five industrial-grade products, one integrated complex</h2>
    </div>
    <p className="reveal">LME Grade-A copper cathodes, continuous cast rods, sulphuric and phosphoric acid, plus granulated slag — all produced from a single primary smelter.</p>
  </div>
  <div className="products-grid reveal delay-3">
    <div className="product-card">
      <div className="swatch-cu" aria-hidden="true"></div>
      <div className="spec">LME Grade A</div>
      <h3>Copper Cathodes</h3>
      <p className="reveal">High-purity (99.99% Cu) electrolytically refined cathodes — the feedstock for cables, transformers, EV motors and renewables.</p>
      <div className="product-meta">
        <div>Purity<strong>99.99% Cu</strong></div>
        <div>Registered<strong>LME &amp; COMEX</strong></div>
      </div>
      <div className="actions">
        <button className="btn-buy reveal delay-4">Buy now →</button>
        <button className="btn-ds"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v14m0 0l-5-5m5 5l5-5M5 21h14"/></svg>Datasheet</button>
      </div>
    </div>
    <div className="product-card rod">
      <div className="swatch-cu" aria-hidden="true"></div>
      <div className="spec">8 mm CCR</div>
      <h3>Continuous Cast Rods</h3>
      <p className="reveal">Oxygen-free 8&nbsp;mm copper rods drawn directly from cathode — zero-defect feed for wire and cable mills.</p>
      <div className="product-meta">
        <div>Diameter<strong>8 mm standard</strong></div>
        <div>Capacity<strong>216,000 MTPA</strong></div>
      </div>
      <div className="actions">
        <button className="btn-buy reveal delay-4">Buy now →</button>
        <button className="btn-ds"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v14m0 0l-5-5m5 5l5-5M5 21h14"/></svg>Datasheet</button>
      </div>
    </div>
    <div className="product-card acid">
      <div className="swatch-cu" aria-hidden="true"></div>
      <div className="spec">98% H₂SO₄</div>
      <h3>Sulphuric Acid</h3>
      <p className="reveal">Captured from smelter off-gas — used in fertilisers, batteries, textiles and pharma across western India.</p>
      <div className="product-meta">
        <div>Concentration<strong>98% by mass</strong></div>
        <div>Capacity<strong>1.2 M MTPA</strong></div>
      </div>
      <div className="actions">
        <button className="btn-buy reveal delay-4">Enquire →</button>
        <button className="btn-ds"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v14m0 0l-5-5m5 5l5-5M5 21h14"/></svg>MSDS</button>
      </div>
    </div>
    <div className="product-card phos">
      <div className="swatch-cu" aria-hidden="true"></div>
      <div className="spec">Fertiliser grade</div>
      <h3>Phosphoric Acid</h3>
      <p className="reveal">Merchant-grade phosphoric acid for DAP, MAP and NPK fertiliser producers — a key input for Indian agriculture.</p>
      <div className="product-meta">
        <div>Grade<strong>Fertiliser</strong></div>
        <div>Capacity<strong>220,000 MTPA</strong></div>
      </div>
      <div className="actions">
        <button className="btn-buy reveal delay-4">Enquire →</button>
        <button className="btn-ds"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v14m0 0l-5-5m5 5l5-5M5 21h14"/></svg>MSDS</button>
      </div>
    </div>
    <div className="product-card slag">
      <div className="swatch-cu" aria-hidden="true"></div>
      <div className="spec">Secondary use</div>
      <h3>Granulated Slag</h3>
      <p className="reveal">Smelter slag processed into construction-grade aggregate and sand-blasting media — circular-economy by-product.</p>
      <div className="product-meta">
        <div>Application<strong>Cement, blasting</strong></div>
        <div>Utilisation<strong>~100% diverted</strong></div>
      </div>
      <div className="actions">
        <button className="btn-buy reveal delay-4">Enquire →</button>
        <button className="btn-ds"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v14m0 0l-5-5m5 5l5-5M5 21h14"/></svg>Datasheet</button>
      </div>
    </div>
    <div className="product-card" style={{"background":"linear-gradient(135deg,var(--green-pale),var(--bg))","borderStyle":"dashed"}}>
      <div className="swatch-cu" aria-hidden="true" style={{"background":"linear-gradient(135deg,var(--green-soft),var(--green))"}}></div>
      <div className="spec">Talk to us</div>
      <h3>Custom offtake</h3>
      <p className="reveal">Long-term supply agreements, logistics-integrated deliveries and specification-bound contracts for large buyers.</p>
      <div className="product-meta">
        <div>Term<strong>1–5 year</strong></div>
        <div>Logistics<strong>Rail &amp; road</strong></div>
      </div>
      <div className="actions">
        <button className="btn-buy reveal delay-4">Contact sales →</button>
      </div>
    </div>
  </div>
</section>

{/*  ESG LIVE DASHBOARD  */}
<section className="esg" aria-label="Live sustainability dashboard">
  <div className="esg-head">
    <div className="eyebrow reveal" style={{"justifyContent":"center","display":"inline-flex"}}>Transparency</div>
    <h2 className="reveal delay-1">Our sustainability, in real numbers</h2>
    <div className="live reveal delay-2"><span className="live-dot"></span>Last updated 12 Oct 2024 · auto-refreshed monthly</div>
  </div>
  <div className="esg-grid reveal delay-3">
    <div className="esg-card reveal">
      <span className="tag">Environment</span>
      <h3>Scope 1 + 2 emissions</h3>
      <div className="sub">CO₂e per tonne of refined copper</div>
      <div className="esg-bar"><div className="esg-bar-fill" data-fill="64"></div></div>
      <div className="esg-row"><span>Current: <strong>1.82 tCO₂e/t</strong></span><span>Target 2030: <strong>0.91 tCO₂e/t</strong></span></div>
      <div className="trend">↓ 18% vs FY22 baseline</div>
    </div>
    <div className="esg-card reveal">
      <span className="tag">Water</span>
      <h3>Specific water consumption</h3>
      <div className="sub">Cubic metres per tonne of product</div>
      <div className="esg-bar"><div className="esg-bar-fill" data-fill="72"></div></div>
      <div className="esg-row"><span>Current: <strong>6.1 m³/t</strong></span><span>Target: <strong>4.5 m³/t</strong></span></div>
      <div className="trend">↓ 24% zero-liquid-discharge upgrades live</div>
    </div>
    <div className="esg-card reveal">
      <span className="tag">Social</span>
      <h3>Community reach (cumulative)</h3>
      <div className="sub">Beneficiaries since 1997</div>
      <div className="esg-bar"><div className="esg-bar-fill" data-fill="85"></div></div>
      <div className="esg-row"><span>Current: <strong>2.5 lakh</strong></span><span>Target 2026: <strong>3 lakh</strong></span></div>
      <div className="trend">↑ 14,200 added in FY24</div>
    </div>
  </div>
</section>

{/*  CSR  */}
<section className="csr">
  <div className="csr-inner">
    <div className="csr-left">
      <div className="eyebrow reveal" style={{"color":"var(--green)"}}>Social Responsibility</div>
      <h2 className="reveal delay-1 h-section" style={{"color":"#fff"}}>Corporate Social Responsibility</h2>
      <p className="lede reveal delay-2">Sterlite Copper has woven social responsibility into its business fabric right from its inception in 1996–1997.</p>
      <p className="reveal">The company believes that business objectives should include overall development of communities around its surrounding areas. The aim has always been to go beyond mere 'Corporate Social Responsibility' to understand the real needs and genuine concerns of the people — and provide the necessary stimulus to not only address these issues but ensure social involvement, acceptability and sustainability.</p>
      <button className="btn-primary reveal delay-4">Read More
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </button>
    </div>
    <div className="csr-right reveal delay-3">
      <div className="csr-tag">
        <span className="sub">Working since 1997 towards</span>
        <span className="tag">Women Empowerment</span>
      </div>
      <div className="csr-grid reveal delay-3">
        <figure className="csr-story">
          <img src="assets/csr1.png" alt="Tamira Surabhi self-help collective — women gathered around production materials" loading="lazy" />
          <figcaption>
            <span className="csr-label">Tamira Surabhi</span>
            <strong>20,000+ women</strong>
            <span className="csr-meta">Livelihood SHGs across 170 villages</span>
          </figcaption>
        </figure>
        <figure className="csr-story">
          <img src="assets/pillar-people.png" alt="Students in a Sterlite-supported government school classroom" loading="lazy" />
          <figcaption>
            <span className="csr-label">Education</span>
            <strong>40,000 students</strong>
            <span className="csr-meta">Smart classrooms &amp; scholarships</span>
          </figcaption>
        </figure>
        <figure className="csr-story">
          <img src="assets/pillar-policies.png" alt="Mobile medical unit serving rural communities around Thoothukudi" loading="lazy" />
          <figcaption>
            <span className="csr-label">Health</span>
            <strong>1.8 lakh check-ups</strong>
            <span className="csr-meta">Mobile units + village clinics</span>
          </figcaption>
        </figure>
        <figure className="csr-story">
          <img src="assets/contact_hero.png" alt="Saplings planted under the Pasumai Thoothukudi green cover initiative" loading="lazy" />
          <figcaption>
            <span className="csr-label">Pasumai Thoothukudi</span>
            <strong>1 million trees</strong>
            <span className="csr-meta">Green-cover initiative since 2007</span>
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</section>

{/*  INVESTORS / MAP  */}
<section className="investors">
  <div className="investors-grid reveal delay-3">
    <div>
      <div className="eyebrow reveal" style={{"color":"var(--green)"}}>Investor Relations</div>
      <h2 className="reveal delay-1 h-section" style={{"color":"var(--green)"}}>Investors</h2>
      <p className="reveal delay-2" style={{"fontSize":"18px","lineHeight":"28px","color":"var(--muted)","marginTop":"32px"}}>Sterlite Copper represents a key aspect of Vedanta Limited's Copper Business. We have steadily grown to become one of the leading contributors to copper production in India — contributing upto 36% of India's demand for refined copper.</p>

      <div className="assurance">
        <h3>Our Assurance</h3>
        <ul>
          <li><span className="dot">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><path d="M20 6 9 17l-5-5"/></svg>
          </span>Sustainable Copper Production since 1997</li>
          <li><span className="dot">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><path d="M20 6 9 17l-5-5"/></svg>
          </span>Over Two Decades of Operational Excellence</li>
          <li><span className="dot">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><path d="M20 6 9 17l-5-5"/></svg>
          </span>Meeting 36% of India's Copper Needs</li>
          <li><span className="dot">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><path d="M20 6 9 17l-5-5"/></svg>
          </span>Winner of coveted British Safety Council's Sword of Honour Award</li>
        </ul>
      </div>

      <button className="btn-primary reveal delay-4">Read More
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </button>
    </div>

    <div className="india-map" id="india-map">
      {/*  SVG injected by JS  */}
      <div className="plant-pin" style={{"left":"43%","top":"82%"}}></div>
      <div className="plant-pin" style={{"left":"38%","top":"56%"}}></div>
      <div className="plant-pin" style={{"left":"45%","top":"38%"}}></div>

      <div className="plant-card plant-card-1">
        <div className="name"><span className="pin" style={{"width":"10px","height":"10px"}}></span>Silvassa Complex</div>
        <div className="meta">• Refinery & Rod Plant<br/>• 216,000 MTPA Copper Rods<br/>• 300,000 MTPA Cathodes</div>
      </div>

      <div className="plant-card plant-card-2">
        <div className="name"><span className="pin" style={{"width":"10px","height":"10px"}}></span>Thoothukudi Complex</div>
        <div className="meta">• 400,000 MTPA Smelter<br/>• Sulphuric & Phosphoric Acid<br/>• 160 MW Captive Power</div>
      </div>
    </div>
  </div>
</section>

{/*  SOCIAL  */}
<section className="social reveal">
  <div className="social-inner">
    <div className="social-left">
      <span className="sub reveal delay-1">Stay connected</span>
      <h2 className="reveal delay-2">Social Media Updates</h2>
      <button className="btn-primary reveal delay-3">Follow us
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </button>
    </div>
    <div className="social-cards reveal delay-4">
      <div className="social-card reveal">
        <div className="plat"><span className="plat-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
        </span>Instagram</div>
        <p className="reveal txt"  >New video: Behind the scenes at our Thoothukudi smelter 🔥</p>
        <div className="meta"><span>❤ 2.4k</span><span>💬 86</span></div>
      </div>
      <div className="social-card reveal delay-1">
        <div className="plat"><span className="plat-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </span>Facebook</div>
        <p className="reveal txt"  >Sterlite Copper partners with Pasumai Thoothukudi — 1 million trees planted across Tamil Nadu.</p>
        <div className="meta"><span>👍 3.1k</span><span>💬 124</span></div>
      </div>
      <div className="social-card reveal delay-2">
        <div className="plat"><span className="plat-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14M8.339 18.338V9.846H5.692v8.492h2.647zM7.015 8.71a1.533 1.533 0 1 0-.015-3.065 1.533 1.533 0 0 0 .015 3.065zm11.323 9.628v-4.65c0-2.449-1.306-3.589-3.048-3.589a2.631 2.631 0 0 0-2.393 1.316V9.846h-2.653c.035.748 0 8.492 0 8.492h2.653v-4.742a1.817 1.817 0 0 1 .087-.647 1.451 1.451 0 0 1 1.36-.97c.96 0 1.343.732 1.343 1.804v4.555z"/></svg>
        </span>LinkedIn</div>
        <p className="reveal txt"  >Proud to share our FY24 ESG report — see what sustainability looks like at 400K MTPA scale.</p>
        <div className="meta"><span>👍 1.8k</span><span>💬 46</span></div>
      </div>
      <div className="social-card reveal delay-3">
        <div className="plat"><span className="plat-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </span>X (Twitter)</div>
        <p className="reveal txt"  >542 MT of medical oxygen supplied during COVID. We'll never forget. 🇮🇳</p>
        <div className="meta"><span>🔁 892</span><span>❤ 4.1k</span></div>
      </div>
    </div>
  </div>
</section>

{/*  INVESTOR FINANCIAL TILES  */}
<section className="fin-tiles" aria-label="Investor highlights">
  <div className="fin-inner">
    <div className="fin-head">
      <div>
        <div className="eyebrow reveal">Investor highlights</div>
    <h2 className="reveal delay-1">FY24 at a glance</h2>
      </div>
      <div className="fin-ticker reveal delay-2" role="status" aria-live="polite">
        <span className="live-dot" aria-hidden="true"></span>
        <span>LME Cu · <strong>$9,645/t</strong> · <span style={{"color":"#10843f"}}>+1.4%</span></span>
        <span style={{"color":"var(--muted)","fontSize":"12px"}}>delayed 15m</span>
      </div>
    </div>
    <div className="fin-grid reveal delay-3">
      <div className="fin-tile reveal">
        <div className="kpi-lab">Revenue</div>
        <div className="kpi-val">₹24,830 Cr</div>
        <div className="kpi-delta up">▲ 12.4% YoY</div>
        <div className="kpi-caption">Consolidated FY24 copper business</div>
      </div>
      <div className="fin-tile reveal">
        <div className="kpi-lab">EBITDA</div>
        <div className="kpi-val">₹3,190 Cr</div>
        <div className="kpi-delta up">▲ 8.7% YoY</div>
        <div className="kpi-caption">Margin 12.8%</div>
      </div>
      <div className="fin-tile reveal">
        <div className="kpi-lab">Cathode production</div>
        <div className="kpi-val">364 KT</div>
        <div className="kpi-delta up">▲ 4.1% YoY</div>
        <div className="kpi-caption">91% capacity utilisation</div>
      </div>
      <div className="fin-tile reveal">
        <div className="kpi-lab">Net debt / EBITDA</div>
        <div className="kpi-val">0.6×</div>
        <div className="kpi-delta down">▼ 0.2 from FY23</div>
        <div className="kpi-caption">Investment-grade balance sheet</div>
      </div>
    </div>
    <div className="fin-reports">
      <a className="fin-report reveal" href="#">
        <span className="year">FY24</span>
        <span className="t">Annual Report</span>
        <span className="size"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg> PDF · 8.4 MB</span>
      </a>
      <a className="fin-report reveal" href="#">
        <span className="year">Q4</span>
        <span className="t">Earnings Presentation</span>
        <span className="size"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg> PDF · 3.1 MB</span>
      </a>
      <a className="fin-report reveal" href="#">
        <span className="year">FY24</span>
        <span className="t">Sustainability Report</span>
        <span className="size"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg> PDF · 12.1 MB</span>
      </a>
      <a className="fin-report reveal" href="#">
        <span className="year">Q4</span>
        <span className="t">Investor Call Transcript</span>
        <span className="size"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg> PDF · 0.8 MB</span>
      </a>
    </div>
  </div>
</section>

{/*  NEWS  */}
<section className="news">
  <div className="news-head">
    <div>
      <div className="eyebrow reveal">Latest</div>
    <h2 className="h-section reveal delay-1">News & Media</h2>
    </div>
    <a className="link-green" href="#">View all news
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
    </a>
  </div>
  <div className="news-grid reveal delay-3">
    <div className="news-hero">
      <div className="tag">Featured</div>
      <h3>Sterlite Copper awarded British Safety Council's Sword of Honour — 2024</h3>
    </div>
    <article className="news-card reveal">
      <img src="assets/pillar-operations.png" alt="" />
      <div className="b">
        <span className="date">Aug 12 2024 · Press</span>
        <h3>Q1 FY25: Record refined copper output at Silvassa Rod Plant</h3>
        <a className="link" href="#">Read more <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg></a>
      </div>
    </article>
    <article className="news-card reveal">
      <img src="assets/gallery3.png" alt="" />
      <div className="b">
        <span className="date">Jul 28 2024 · CSR</span>
        <h3>Tamira Surabhi crosses 1 million women beneficiaries milestone</h3>
        <a className="link" href="#">Read more <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg></a>
      </div>
    </article>
    <article className="news-card reveal">
      <img src="assets/gallery4.png" alt="" />
      <div className="b">
        <span className="date">Jun 14 2024 · Sustainability</span>
        <h3>Sterlite commits to 50% reduction in scope 1 & 2 emissions by 2030</h3>
        <a className="link" href="#">Read more <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg></a>
      </div>
    </article>
  </div>
</section>

{/*  FOOTER  */}
</main>

    </>
  );
}
