import React, { useEffect, useRef, useState } from 'react';

// Universal dynamic IntersectionObserver count-up number ticker
function NumberTicker({ value }) {
  const [displayValue, setDisplayValue] = useState('');
  const elementRef = useRef(null);

  useEffect(() => {
    const cleanString = String(value).replace(/,/g, '');
    const numMatch = cleanString.match(/[\d\.]+/);
    if (!numMatch) {
      setDisplayValue(value);
      return;
    }

    const numValue = parseFloat(numMatch[0]);
    const numIndex = cleanString.indexOf(numMatch[0]);
    const prefix = cleanString.substring(0, numIndex);
    const suffix = cleanString.substring(numIndex + numMatch[0].length);

    const duration = 1200; // 1.2s count up
    let startTimestamp = null;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const current = easeProgress * numValue;

            let formattedNum;
            if (numValue % 1 === 0) {
              formattedNum = Math.floor(current).toLocaleString();
            } else {
              formattedNum = current.toFixed(1);
            }

            setDisplayValue(`${prefix}${formattedNum}${suffix}`);

            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return <span ref={elementRef}>{displayValue || value}</span>;
}

function TypewriterInvestorsCTA() {
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

  // Eyebrow: Contact IR
  useEffect(() => {
    if (activeStep !== 1) return;
    const txt = "Contact IR";
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

  // Headline: Questions? Our investor relations team is here to help.
  useEffect(() => {
    if (activeStep !== 2) return;
    const txt = "Questions? Our investor relations team is here to help.";
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

export default function Investors() {
  return (
    <>

<main id="main-content">

<div className="hero-wrap">
  <div className="hero" role="region" aria-label="Investor relations">
    <div className="hero-track">
      <div className="hero-slide active" style={{"backgroundImage":"linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.65)), url('assets/copper_wire_bundles.png')"}}>
        <div className="hero-kicker">Investor relations</div>
        <h1 className="hero-title">A steady engine<br/>in India's copper story</h1>
        <p className="hero-sub reveal delay-2">Sterlite Copper contributes up to 36% of India's refined-copper demand. Transparent reporting, governance and long-term value creation.</p>
      </div>
    </div>
  </div>
</div>

<section className="fin-tiles reveal" style={{"paddingTop":"clamp(40px, 5vw, 60px)"}}>
  <div className="fin-inner">
    <div className="fin-head">
      <div><div className="eyebrow reveal">FY24 at a glance</div><h2 className="reveal delay-1">Financial highlights</h2></div>
      <div className="fin-ticker"><span className="live-dot"></span><span>LME Cu · <strong>$9,645/t</strong> · <span style={{"color":"#10843f"}}>+1.4%</span></span><span style={{"color":"var(--muted)","fontSize":"12px"}}>delayed 15m</span></div>
    </div>
    <div className="fin-grid reveal delay-3">
      <div className="fin-tile reveal"><div className="kpi-lab">Revenue</div><div className="kpi-val"><NumberTicker value="₹24,830 Cr" /></div><div className="kpi-delta up">▲ 12.4% YoY</div><div className="kpi-caption">Consolidated FY24</div></div>
      <div className="fin-tile reveal"><div className="kpi-lab">EBITDA</div><div className="kpi-val"><NumberTicker value="₹3,190 Cr" /></div><div className="kpi-delta up">▲ 8.7% YoY</div><div className="kpi-caption">Margin 12.8%</div></div>
      <div className="fin-tile reveal"><div className="kpi-lab">Cathode production</div><div className="kpi-val"><NumberTicker value="364 KT" /></div><div className="kpi-delta up">▲ 4.1% YoY</div><div className="kpi-caption">91% utilisation</div></div>
      <div className="fin-tile reveal"><div className="kpi-lab">Net debt / EBITDA</div><div className="kpi-val"><NumberTicker value="0.6×" /></div><div className="kpi-delta down">▼ 0.2 from FY23</div><div className="kpi-caption">Investment-grade</div></div>
    </div>
    <div className="fin-reports">
      <a className="fin-report reveal" href="#"><span className="year">FY24</span><span className="t">Annual Report</span><span className="size">PDF · 8.4 MB</span></a>
      <a className="fin-report reveal" href="#"><span className="year">Q4</span><span className="t">Earnings Presentation</span><span className="size">PDF · 3.1 MB</span></a>
      <a className="fin-report reveal" href="#"><span className="year">FY24</span><span className="t">Sustainability Report</span><span className="size">PDF · 12.1 MB</span></a>
      <a className="fin-report reveal" href="#"><span className="year">Q4</span><span className="t">Investor Call Transcript</span><span className="size">PDF · 0.8 MB</span></a>
      <a className="fin-report reveal" href="#"><span className="year">Q3</span><span className="t">Results Release</span><span className="size">PDF · 2.2 MB</span></a>
      <a className="fin-report reveal" href="#"><span className="year">AGM</span><span className="t">Notice &amp; Postal Ballot</span><span className="size">PDF · 1.6 MB</span></a>
    </div>
  </div>
</section>

<section className="page-section alt">
  <div className="ps-inner">
    <div className="section-head"><div className="eyebrow reveal">Corporate governance</div><h2 className="reveal delay-1">Disclosures &amp; policies</h2></div>
    <div className="marquee-wrapper">
      <div className="doc-grid marquee-track">
        <a className="doc" href="#"><div className="doc-ic">📄</div><h4>Code of Conduct</h4><p className="reveal">Board &amp; senior management code covering ethics, conflicts and insider trading.</p></a>
        <a className="doc" href="#"><div className="doc-ic">📄</div><h4>Whistleblower Policy</h4><p className="reveal">Anonymous reporting channels and investigation framework.</p></a>
        <a className="doc" href="#"><div className="doc-ic">📄</div><h4>Dividend Distribution</h4><p className="reveal">Historical dividends, payout policy and record dates.</p></a>
        <a className="doc" href="#"><div className="doc-ic">📄</div><h4>Related-Party Transactions</h4><p className="reveal">Audit-committee-approved RPT disclosures.</p></a>
        <a className="doc" href="#"><div className="doc-ic">📄</div><h4>BRSR FY24</h4><p className="reveal">Business Responsibility &amp; Sustainability Report per SEBI format.</p></a>
        <a className="doc" href="#"><div className="doc-ic">📄</div><h4>Stock Exchange Filings</h4><p className="reveal">Link to NSE/BSE filings for Vedanta Limited.</p></a>
        {/* Duplicate for infinite marquee loop */}
        <a className="doc" href="#"><div className="doc-ic">📄</div><h4>Code of Conduct</h4><p className="reveal">Board &amp; senior management code covering ethics, conflicts and insider trading.</p></a>
        <a className="doc" href="#"><div className="doc-ic">📄</div><h4>Whistleblower Policy</h4><p className="reveal">Anonymous reporting channels and investigation framework.</p></a>
        <a className="doc" href="#"><div className="doc-ic">📄</div><h4>Dividend Distribution</h4><p className="reveal">Historical dividends, payout policy and record dates.</p></a>
        <a className="doc" href="#"><div className="doc-ic">📄</div><h4>Related-Party Transactions</h4><p className="reveal">Audit-committee-approved RPT disclosures.</p></a>
        <a className="doc" href="#"><div className="doc-ic">📄</div><h4>BRSR FY24</h4><p className="reveal">Business Responsibility &amp; Sustainability Report per SEBI format.</p></a>
        <a className="doc" href="#"><div className="doc-ic">📄</div><h4>Stock Exchange Filings</h4><p className="reveal">Link to NSE/BSE filings for Vedanta Limited.</p></a>
      </div>
    </div>
  </div>
</section>

<section className="cta-band">
  <div className="cta-inner">
    <TypewriterInvestorsCTA />
    <div className="cta-btns"><a href="mailto:ir@sterlitecopper.com" className="btn-primary"><span className="roll-text"><span data-text="Email IR →">Email IR →</span></span></a><a href="contact.html" className="btn-primary btn-sm"><span className="roll-text"><span data-text="General contact">General contact</span></span></a></div>
  </div>
</section>

</main>

    </>
  );
}
