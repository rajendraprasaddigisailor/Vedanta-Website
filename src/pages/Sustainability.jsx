import React from 'react';

export default function Sustainability() {
  return (
    <>

<main id="main-content">

<div className="hero-wrap">
  <div className="hero" role="region" aria-label="Sustainability">
    <div className="hero-track">
      <div className="hero-slide active" style={{"backgroundImage":"linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.65)), url('assets/csr1.png')"}}>
        <div className="hero-kicker">Sustainability</div>
        <h1 className="hero-title">Responsible by<br/>design, since 1997</h1>
        <p className="hero-sub reveal delay-2">Emissions, water, waste and community — tracked openly and disclosed annually. Our ESG targets are measurable, time-bound and independently assured.</p>
      </div>
    </div>
  </div>
</div>

<section className="esg reveal" style={{"paddingTop":"clamp(40px, 5vw, 60px)"}}>
  <div className="esg-head">
    <div className="eyebrow reveal" style={{"justifyContent":"center","display":"inline-flex"}}>Our sustainability, in real numbers</div>
    <h2 className="reveal delay-1">Tracked, disclosed, continuously improved</h2>
    <div className="live"><span className="live-dot"></span>Last updated 12 Oct 2024 · auto-refreshed monthly</div>
  </div>
  <div className="esg-grid">
    <div className="esg-card reveal"><span className="tag">Environment</span><h3>Scope 1 + 2 emissions</h3><div className="sub">CO₂e per tonne of refined copper</div><div className="esg-bar"><div className="esg-bar-fill" data-fill="64"></div></div><div className="esg-row"><span>Current: <strong>1.82 tCO₂e/t</strong></span><span>Target 2030: <strong>0.91 tCO₂e/t</strong></span></div><div className="trend">↓ 18% vs FY22 baseline</div></div>
    <div className="esg-card reveal"><span className="tag">Water</span><h3>Specific water consumption</h3><div className="sub">Cubic metres per tonne of product</div><div className="esg-bar"><div className="esg-bar-fill" data-fill="72"></div></div><div className="esg-row"><span>Current: <strong>6.1 m³/t</strong></span><span>Target: <strong>4.5 m³/t</strong></span></div><div className="trend">↓ 24% ZLD upgrades live</div></div>
    <div className="esg-card reveal"><span className="tag">Social</span><h3>Community reach</h3><div className="sub">Cumulative beneficiaries since 1997</div><div className="esg-bar"><div className="esg-bar-fill" data-fill="85"></div></div><div className="esg-row"><span>Current: <strong>2.5 lakh</strong></span><span>Target 2026: <strong>3 lakh</strong></span></div><div className="trend">↑ 14,200 added in FY24</div></div>
  </div>
</section>

<section className="page-section alt">
  <div className="ps-inner">
    <div className="section-head"><div className="eyebrow reveal">Four pillars</div><h2 className="reveal delay-1">How sustainability is organised</h2></div>
    <div className="pillars-grid reveal delay-3">
      <article className="pillar-card reveal"><img className="ph" src="assets/pillar-policies.png" alt="Safe, responsible policies" /><div className="body"><h3>Safe, Responsible Policies</h3><p className="reveal">ISO-certified management systems — quality (9001), environment (14001), OHS (45001) and energy (50001).</p></div></article>
      <article className="pillar-card reveal"><img className="ph" src="assets/pillar-operations.png" alt="Reliable operations" /><div className="body"><h3>Reliable Operations</h3><p className="reveal">Sword of Honour safety, zero-liquid-discharge, and continuous emissions monitoring connected to state pollution board.</p></div></article>
      <article className="pillar-card reveal"><img className="ph" src="assets/pillar-people.png" alt="People & careers" /><div className="body"><h3>People &amp; Careers</h3><p className="reveal">Structured L&amp;D, graduate engineer trainee programme, and industry-leading diversity targets.</p></div></article>
      <article className="pillar-card reveal"><img className="ph" src="assets/pillar-company.png" alt="Our company" /><div className="body"><h3>Community Partnership</h3><p className="reveal">2.5 lakh beneficiaries across education, health, livelihood and environmental programmes.</p></div></article>
    </div>
  </div>
</section>

<section className="page-section">
  <div className="ps-inner">
    <div className="section-head"><div className="eyebrow reveal">Community impact</div><h2 className="reveal delay-1">Programmes that make a material difference</h2></div>
    <div className="csr-grid reveal delay-3">
      <figure className="csr-story"><img src="assets/csr1.png" alt="Tamira Surabhi" /><figcaption><span className="csr-label">Tamira Surabhi</span><strong>20,000+ women</strong><span className="csr-meta">Livelihood SHGs across 170 villages</span></figcaption></figure>
      <figure className="csr-story"><img src="assets/pillar-people.png" alt="Education" /><figcaption><span className="csr-label">Education</span><strong>40,000 students</strong><span className="csr-meta">Smart classrooms &amp; scholarships</span></figcaption></figure>
      <figure className="csr-story"><img src="assets/pillar-policies.png" alt="Mobile medical unit" /><figcaption><span className="csr-label">Health</span><strong>1.8 lakh check-ups</strong><span className="csr-meta">Mobile units + village clinics</span></figcaption></figure>
      <figure className="csr-story"><img src="assets/pillar-company.png" alt="Pasumai Thoothukudi saplings" /><figcaption><span className="csr-label">Pasumai Thoothukudi</span><strong>1 million trees</strong><span className="csr-meta">Green-cover since 2007</span></figcaption></figure>
    </div>
  </div>
</section>

<section className="cta-band">
  <div className="cta-inner">
    <div><div className="eyebrow reveal">Deep dive</div><h2 className="reveal delay-1">Read the full FY24 Sustainability Report</h2></div>
    <div className="cta-btns"><a href="#" className="btn-primary">Download PDF (12.1 MB) →</a><a href="investors.html" className="btn-primary btn-sm">Governance</a></div>
  </div>
</section>

</main>

    </>
  );
}
