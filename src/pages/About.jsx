import React, { useEffect, useRef, useState } from 'react';

// Count-up ticker triggered on viewport entry
function NumberTicker({ value }) {
  const [displayValue, setDisplayValue] = useState('');
  const ref = useRef(null);

  useEffect(() => {
    const clean = String(value).replace(/,/g, '');
    const match = clean.match(/[\d\.]+/);
    if (!match) { setDisplayValue(value); return; }

    const num = parseFloat(match[0]);
    const pre = clean.substring(0, clean.indexOf(match[0]));
    const suf = clean.substring(clean.indexOf(match[0]) + match[0].length);
    const dur = 1400;
    let ts = null;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const step = (now) => {
          if (!ts) ts = now;
          const p = Math.min((now - ts) / dur, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          const cur = ease * num;
          const fmt = num % 1 === 0 ? Math.floor(cur).toLocaleString() : cur.toFixed(1);
          setDisplayValue(`${pre}${fmt}${suf}`);
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{displayValue || value}</span>;
}


function TypewriterAboutCTA() {
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

  // Eyebrow: Get in touch
  useEffect(() => {
    if (activeStep !== 1) return;
    const txt = "Get in touch";
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

  // Headline: Learn more about who we are
  useEffect(() => {
    if (activeStep !== 2) return;
    const txt = "Learn more about who we are";
    let idx = 0;
    const interval = setInterval(() => {
      setHeadlineText(txt.substring(0, idx + 1));
      idx++;
      if (idx >= txt.length) {
        clearInterval(interval);
        setActiveStep(3);
      }
    }, 35);
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

export default function About() {
  return (
    <>


<main id="main-content">

<div className="hero-wrap">
  <div className="hero" role="region" aria-label="Who we are">
    <div className="hero-track">
      <div className="hero-slide active" style={{"backgroundImage":"linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.65)), url('assets/hero.png')"}}>
        <div className="hero-kicker">Who we are</div>
        <h1 className="hero-title">Three decades of building<br/>India's copper backbone</h1>
        <p className="hero-sub reveal delay-2">From a single smelter in Thoothukudi to an integrated operation spanning two states — Sterlite Copper has grown alongside India's industrial economy since 1996.</p>
      </div>
    </div>
  </div>
</div>

<section className="page-section">
  <div className="ps-inner">
    <div className="content-grid">
      <div>
        <div className="eyebrow reveal">Our story</div>
        <h2 className="reveal delay-1">A company built on purpose, precision and partnership</h2>
      </div>
      <div className="prose">
        <p className="reveal">Sterlite Copper was established in 1996 as the copper business of Vedanta Limited — one of India's largest diversified natural-resources companies. Today we operate an integrated 400,000 MTPA primary smelter, refinery and rod plant complex at Thoothukudi, Tamil Nadu, with downstream operations at Silvassa.</p>
        <p className="reveal">We produce LME Grade-A copper cathodes, 8&nbsp;mm continuous cast rods, sulphuric and phosphoric acid, and granulated slag — feeding India's power, transport, construction and fertiliser industries.</p>
        <p className="reveal">Our ambition is simple: be the most responsible, most efficient and most community-embedded copper producer in the world.</p>
      </div>
    </div>
  </div>
</section>

<section className="page-section alt">
  <div className="ps-inner">
    <div className="section-head"><div className="eyebrow reveal">At a glance</div><h2 className="reveal delay-1">The numbers behind the company</h2></div>
    <div className="stat-grid reveal delay-3">
      <div className="stat-card reveal"><div className="stat-val"><NumberTicker value="1996" /></div><div className="stat-lbl">Founded</div><p className="reveal">Operating continuously as part of Vedanta Limited.</p></div>
      <div className="stat-card reveal"><div className="stat-val"><NumberTicker value="400 K" /></div><div className="stat-lbl">MTPA smelter</div><p className="reveal">One of the largest single-location smelters globally.</p></div>
      <div className="stat-card reveal"><div className="stat-val"><NumberTicker value="36%" /></div><div className="stat-lbl">India's copper demand</div><p className="reveal">At peak operational capacity.</p></div>
      <div className="stat-card reveal"><div className="stat-val"><NumberTicker value="2.5 L+" /></div><div className="stat-lbl">Lives touched</div><p className="reveal">Through education, health &amp; livelihood programmes.</p></div>
    </div>
  </div>
</section>

<section className="page-section">
  <div className="ps-inner">
    <div className="section-head"><div className="eyebrow reveal">Leadership</div><h2 className="reveal delay-1">The team steering Sterlite Copper forward</h2></div>
    <div className="people-grid reveal delay-3">
      <div className="person reveal scroll-zoom"><div className="person-photo" style={{"backgroundImage":"url('assets/careers_hero.png')"}}></div><h3>Pankaj Kumar</h3><div className="role">Chief Executive Officer</div><p className="reveal">Metallurgy veteran with 25+ years across Vedanta's base-metals portfolio.</p></div>
      <div className="person reveal scroll-zoom"><div className="person-photo" style={{"backgroundImage":"url('assets/contact_hero.png')"}}></div><h3>S. Ramnath</h3><div className="role">Chief Financial Officer</div><p className="reveal">Leads finance, investor relations and capital allocation.</p></div>
      <div className="person reveal scroll-zoom"><div className="person-photo" style={{"backgroundImage":"url('assets/pillar-operations.png')"}}></div><h3>Dr. Meera Iyer</h3><div className="role">Head of Sustainability</div><p className="reveal">Drives ESG agenda, water neutrality and community programmes.</p></div>
      <div className="person reveal scroll-zoom"><div className="person-photo" style={{"backgroundImage":"url('assets/pillar-policies.png')"}}></div><h3>Arun Narayan</h3><div className="role">Head of Operations</div><p className="reveal">Oversees smelter, refinery and rod-plant operations end-to-end.</p></div>
    </div>
  </div>
</section>

<section className="cta-band">
  <div className="cta-inner">
      <TypewriterAboutCTA />
    <div className="cta-btns">
      <a href="sustainability.html" className="btn-primary"><span className="roll-text"><span data-text="Sustainability report →">Sustainability report →</span></span></a>
      <a href="contact.html" className="btn-primary btn-sm"><span className="roll-text"><span data-text="Contact us">Contact us</span></span></a>
    </div>
  </div>
</section>

</main>


    </>
  );
}
