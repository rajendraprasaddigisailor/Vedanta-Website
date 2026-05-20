import React, { useState, useEffect, useRef } from 'react';

function TypewriterCareersCTA() {
  const [eyebrowText, setEyebrowText] = useState('');
  const [headlineText, setHeadlineText] = useState('');
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [activeStep, setActiveStep] = useState(0); // 0: idle, 1: eyebrow, 2: headline, 3: done
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
      } else {
        setIsIntersecting(false);
        setActiveStep(0);
        setEyebrowText('');
        setHeadlineText('');
      }
    }, { threshold: 0.1 });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isIntersecting) return;

    const startTimeout = setTimeout(() => {
      setActiveStep(1); // start eyebrow
    }, 400);

    return () => clearTimeout(startTimeout);
  }, [isIntersecting]);

  // Eyebrow: Don't see your role?
  useEffect(() => {
    if (activeStep !== 1) return;
    const txt = "Don't see your role?";
    let idx = 0;
    const interval = setInterval(() => {
      setEyebrowText(txt.substring(0, idx + 1));
      idx++;
      if (idx >= txt.length) {
        clearInterval(interval);
        setTimeout(() => setActiveStep(2), 250);
      }
    }, 45);
    return () => clearInterval(interval);
  }, [activeStep]);

  // Headline: Share your CV — we'll reach out when something fits.
  useEffect(() => {
    if (activeStep !== 2) return;
    const txt = "Share your CV — we'll reach out when something fits.";
    let idx = 0;
    const interval = setInterval(() => {
      setHeadlineText(txt.substring(0, idx + 1));
      idx++;
      if (idx >= txt.length) {
        clearInterval(interval);
        setActiveStep(3);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [activeStep]);

  return (
    <div ref={containerRef}>
      <div className="eyebrow reveal in" style={{ opacity: 1, transform: 'none' }}>
        {eyebrowText}
        {activeStep === 1 && <span className="typewriter-caret">|</span>}
      </div>
      <h2 className="reveal delay-1 in" style={{ opacity: 1, transform: 'none' }}>
        {headlineText}
        {activeStep === 2 && <span className="typewriter-caret">|</span>}
      </h2>
    </div>
  );
}

export default function Careers() {
  return (
    <>
<main id="main-content">

<div className="hero-wrap">
  <div className="hero" role="region" aria-label="Careers">
    <div className="hero-track">
      <div className="hero-slide active" style={{"backgroundImage":"linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.65)), url('assets/careers_hero.png')"}}>
        <div className="hero-kicker">Careers</div>
        <h1 className="hero-title">Build the backbone<br/>of modern India</h1>
        <p className="hero-sub reveal delay-2">Join 1,400+ engineers, operators and professionals running one of the world's largest single-location copper operations.</p>
      </div>
    </div>
  </div>
</div>

<section className="page-section alt" style={{"paddingTop":"clamp(40px, 5vw, 60px)"}}>
  <div className="ps-inner">
    <div className="section-head"><div className="eyebrow reveal">Why us</div><h2 className="reveal delay-1">What you'll get working here</h2></div>
    <div className="marquee-wrapper">
      <div className="why-grid marquee-track">
        <div className="why-card"><h3>01 · Scale</h3><p className="reveal">Work on one of the largest single-location copper smelters globally — decisions matter at industrial scale.</p></div>
        <div className="why-card"><h3>02 · Learning</h3><p className="reveal">Structured graduate-engineer-trainee programme, cross-posting across Vedanta base-metals, external certifications funded.</p></div>
        <div className="why-card"><h3>03 · Safety-first</h3><p className="reveal">Sword of Honour safety culture — leaders walk the floor, near-misses surfaced, zero tolerance for shortcuts.</p></div>
        <div className="why-card"><h3>04 · Purpose</h3><p className="reveal">Copper is the metal of the energy transition — your work directly enables renewables, EVs and grid electrification.</p></div>
        {/* Duplicate for infinite marquee loop */}
        <div className="why-card"><h3>01 · Scale</h3><p className="reveal">Work on one of the largest single-location copper smelters globally — decisions matter at industrial scale.</p></div>
        <div className="why-card"><h3>02 · Learning</h3><p className="reveal">Structured graduate-engineer-trainee programme, cross-posting across Vedanta base-metals, external certifications funded.</p></div>
        <div className="why-card"><h3>03 · Safety-first</h3><p className="reveal">Sword of Honour safety culture — leaders walk the floor, near-misses surfaced, zero tolerance for shortcuts.</p></div>
        <div className="why-card"><h3>04 · Purpose</h3><p className="reveal">Copper is the metal of the energy transition — your work directly enables renewables, EVs and grid electrification.</p></div>
      </div>
    </div>
  </div>
</section>

<section className="page-section">
  <div className="ps-inner">
    <div className="section-head"><div className="eyebrow reveal">Open roles</div><h2 className="reveal delay-1">We're hiring across functions</h2></div>
    <div className="jobs-list">
      <a className="job reveal delay-1" href="#"><div className="j-title">Senior Metallurgist — Smelter</div><div className="j-meta"><span>Thoothukudi, TN</span><span>Full-time</span><span>7–12 yrs</span></div><div className="j-arrow">→</div></a>
      <a className="job reveal delay-2" href="#"><div className="j-title">Electrical Engineer — Acid Plant</div><div className="j-meta"><span>Thoothukudi, TN</span><span>Full-time</span><span>4–8 yrs</span></div><div className="j-arrow">→</div></a>
      <a className="job reveal delay-3" href="#"><div className="j-title">Environmental Compliance Lead</div><div className="j-meta"><span>Thoothukudi, TN</span><span>Full-time</span><span>8–14 yrs</span></div><div className="j-arrow">→</div></a>
      <a className="job reveal delay-4" href="#"><div className="j-title">Process Engineer — Rod Plant</div><div className="j-meta"><span>Silvassa, DNH</span><span>Full-time</span><span>3–6 yrs</span></div><div className="j-arrow">→</div></a>
      <a className="job reveal delay-5" href="#"><div className="j-title">Community Relations Officer</div><div className="j-meta"><span>Thoothukudi, TN</span><span>Full-time</span><span>5–10 yrs</span></div><div className="j-arrow">→</div></a>
      <a className="job reveal delay-6" href="#"><div className="j-title">Manager — Sustainability Reporting</div><div className="j-meta"><span>Mumbai, MH</span><span>Full-time</span><span>6–10 yrs</span></div><div className="j-arrow">→</div></a>
      <a className="job reveal delay-7" href="#"><div className="j-title">Graduate Engineer Trainee (2026 batch)</div><div className="j-meta"><span>Thoothukudi · Silvassa</span><span>Full-time</span><span>Fresher</span></div><div className="j-arrow">→</div></a>
    </div>
  </div>
</section>

<section className="cta-band">
  <div className="cta-inner">
    <TypewriterCareersCTA />
    <div className="cta-btns"><a href="mailto:careers@sterlitecopper.com" className="btn-primary"><span className="roll-text"><span data-text="Email the talent team →">Email the talent team →</span></span></a><a href="about.html" className="btn-primary btn-sm"><span className="roll-text"><span data-text="About Sterlite">About Sterlite</span></span></a></div>
  </div>
</section>

</main>

    </>
  );
}
