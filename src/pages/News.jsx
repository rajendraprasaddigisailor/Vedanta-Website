import React from 'react';

export default function News() {
  return (
    <>

<main id="main-content">

<div className="hero-wrap">
  <div className="hero" role="region" aria-label="News &amp; media">
    <div className="hero-track">
      <div className="hero-slide active" style={{"backgroundImage":"linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.65)), url('assets/hero-1.png')"}}>
        <div className="hero-kicker">News &amp; media</div>
        <h1 className="hero-title">Stories from the<br/>Thoothukudi complex</h1>
        <p className="hero-sub reveal delay-2">Announcements, features and press coverage — the copper industry, our people, and the communities we serve.</p>
      </div>
    </div>
  </div>
</div>

<section className="page-section" style={{"paddingTop":"clamp(40px, 5vw, 60px)"}}>
  <div className="ps-inner">
    <div className="news-feature">
      <div className="nf-img scroll-zoom" style={{"backgroundImage":"url('assets/hero.png')"}}></div>
      <div className="nf-body">
        <div className="eyebrow reveal">Press release · 08 Oct 2024</div>
        <h2 className="reveal delay-1">Sterlite Copper commissions ZLD upgrade at Silvassa unit</h2>
        <p className="reveal delay-2">New zero-liquid-discharge infrastructure brings water-recycling efficiency to 98% across the downstream rod plant, a 14-point jump in twelve months.</p>
        <a className="btn-ghost reveal delay-4" href="#"><span className="roll-text"><span data-text="Read the release →">Read the release →</span></span></a>
      </div>
    </div>

    <div className="news-filters">
      <button className="chip active">All</button>
      <button className="chip">Press releases</button>
      <button className="chip">Operations</button>
      <button className="chip">Sustainability</button>
      <button className="chip">Community</button>
      <button className="chip">Awards</button>
    </div>

    <div className="news-grid reveal delay-3">
      <article className="news-card reveal scroll-zoom"><div className="ni-img" style={{"backgroundImage":"url('assets/hero-2.png')"}}></div><div className="ni-body"><div className="ni-meta">Press release · 02 Oct 2024</div><h3>FY24 results: Revenue up 12.4% YoY</h3><p className="reveal">Record cathode dispatches and improved by-product credits drove consolidated EBITDA to ₹3,190 Cr.</p></div></article>
      <article className="news-card reveal scroll-zoom"><div className="ni-img" style={{"backgroundImage":"url('assets/hero-3.png')"}}></div><div className="ni-body"><div className="ni-meta">Community · 24 Sep 2024</div><h3>Tamira Surabhi crosses 20,000 women</h3><p className="reveal">Livelihood SHG programme adds 40 new villages across Thoothukudi and Tirunelveli districts.</p></div></article>
      <article className="news-card reveal scroll-zoom"><div className="ni-img" style={{"backgroundImage":"url('assets/pillar-operations.png')"}}></div><div className="ni-body"><div className="ni-meta">Operations · 12 Sep 2024</div><h3>Rod plant logs 3 M safe manhours</h3><p className="reveal">Silvassa unit crosses lost-time-injury-free milestone — a first for the facility since commissioning.</p></div></article>
      <article className="news-card reveal scroll-zoom"><div className="ni-img" style={{"backgroundImage":"url('assets/pillar-policies.png')"}}></div><div className="ni-body"><div className="ni-meta">Awards · 01 Sep 2024</div><h3>Greentech Safety Gold Award 2024</h3><p className="reveal">Thoothukudi complex recognised for integrated safety-management systems.</p></div></article>
      <article className="news-card reveal scroll-zoom"><div className="ni-img" style={{"backgroundImage":"url('assets/pillar-people.png')"}}></div><div className="ni-body"><div className="ni-meta">People · 18 Aug 2024</div><h3>Graduate Engineer intake of 64</h3><p className="reveal">Largest GET cohort to date joins the Thoothukudi smelter across metallurgy, electrical and environmental streams.</p></div></article>
      <article className="news-card reveal scroll-zoom"><div className="ni-img" style={{"backgroundImage":"url('assets/pillar-company.png')"}}></div><div className="ni-body"><div className="ni-meta">Sustainability · 07 Aug 2024</div><h3>1 million saplings across Thoothukudi</h3><p className="reveal">Pasumai Thoothukudi programme hits cumulative milestone after 17 years of green-cover work.</p></div></article>
    </div>

    <div className="news-pager"><button className="pager-btn" disabled>←</button><span>Page 1 of 8</span><button className="pager-btn">→</button></div>
  </div>
</section>

<section className="cta-band">
  <div className="cta-inner">
    <div><div className="eyebrow reveal">For journalists</div><h2 className="reveal delay-1">Need images, statements or an interview?</h2></div>
    <div className="cta-btns"><a href="mailto:media@sterlitecopper.com" className="btn-primary"><span className="roll-text"><span data-text="Email the press desk →">Email the press desk →</span></span></a><a href="contact.html" className="btn-primary btn-sm"><span className="roll-text"><span data-text="General contact">General contact</span></span></a></div>
  </div>
</section>

</main>

    </>
  );
}
