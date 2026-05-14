import React from 'react';

export default function Business() {
  return (
    <>


<main id="main-content">

<div className="hero-wrap">
  <div className="hero" role="region" aria-label="What we make">
    <div className="hero-track">
      <div className="hero-slide active" style={{"backgroundImage":"linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.65)), url('assets/copper_cathodes.png')"}}>
        <div className="hero-kicker">What we make</div>
        <h1 className="hero-title">Cathodes, rods,<br/>acids &amp; more</h1>
        <p className="hero-sub reveal delay-2">LME Grade-A copper cathodes, 8&nbsp;mm continuous cast rods, sulphuric and phosphoric acid at industrial scale — all from one integrated complex.</p>
      </div>
    </div>
  </div>
</div>

<section className="products reveal" aria-label="Products" style={{"paddingTop":"clamp(40px, 5vw, 60px)"}}>
  <div className="products-grid reveal delay-3">
    <div className="product-card"><div className="swatch-cu"></div><div className="spec">LME Grade A</div><h3>Copper Cathodes</h3><p className="reveal">99.99% Cu electrolytically refined cathodes — feedstock for cables, transformers, EV motors and renewables.</p><div className="product-meta"><div>Purity<strong>99.99% Cu</strong></div><div>Registered<strong>LME &amp; COMEX</strong></div></div><div className="actions"><a className="btn-buy reveal delay-4" href="buy.html"><span className="roll-text"><span data-text="Buy now →">Buy now →</span></span></a></div></div>
    <div className="product-card rod"><div className="swatch-cu"></div><div className="spec">8 mm CCR</div><h3>Continuous Cast Rods</h3><p className="reveal">Oxygen-free 8&nbsp;mm copper rods drawn directly from cathode — zero-defect feed for wire and cable mills.</p><div className="product-meta"><div>Diameter<strong>8 mm standard</strong></div><div>Capacity<strong>216,000 MTPA</strong></div></div><div className="actions"><a className="btn-buy reveal delay-4" href="buy.html"><span className="roll-text"><span data-text="Buy now →">Buy now →</span></span></a></div></div>
    <div className="product-card acid"><div className="swatch-cu"></div><div className="spec">98% H₂SO₄</div><h3>Sulphuric Acid</h3><p className="reveal">Captured from smelter off-gas — used in fertilisers, batteries, textiles and pharma across western India.</p><div className="product-meta"><div>Concentration<strong>98% by mass</strong></div><div>Capacity<strong>1.2 M MTPA</strong></div></div><div className="actions"><a className="btn-buy reveal delay-4" href="contact.html"><span className="roll-text"><span data-text="Enquire →">Enquire →</span></span></a></div></div>
    <div className="product-card phos"><div className="swatch-cu"></div><div className="spec">Fertiliser grade</div><h3>Phosphoric Acid</h3><p className="reveal">Merchant-grade phosphoric acid for DAP, MAP and NPK fertiliser producers — a key input for Indian agriculture.</p><div className="product-meta"><div>Grade<strong>Fertiliser</strong></div><div>Capacity<strong>220,000 MTPA</strong></div></div><div className="actions"><a className="btn-buy reveal delay-4" href="contact.html"><span className="roll-text"><span data-text="Enquire →">Enquire →</span></span></a></div></div>
    <div className="product-card slag"><div className="swatch-cu"></div><div className="spec">Secondary use</div><h3>Granulated Slag</h3><p className="reveal">Smelter slag processed into construction-grade aggregate and sand-blasting media — circular-economy by-product.</p><div className="product-meta"><div>Application<strong>Cement, blasting</strong></div><div>Utilisation<strong>~100% diverted</strong></div></div><div className="actions"><a className="btn-buy reveal delay-4" href="contact.html"><span className="roll-text"><span data-text="Enquire →">Enquire →</span></span></a></div></div>
  </div>
</section>

<section className="page-section alt">
  <div className="ps-inner">
    <div className="section-head"><div className="eyebrow reveal">Our process</div><h2 className="reveal delay-1">From concentrate to cathode — how we make copper</h2></div>
    <div className="process-grid">
      <div className="step"><div className="step-num">01</div><h3>Concentrate</h3><p className="reveal">Copper concentrate sourced globally — ~28% Cu content, blended for optimal smelter feed.</p></div>
      <div className="step"><div className="step-num">02</div><h3>Smelting</h3><p className="reveal">Isasmelt furnace oxidises sulphides — produces matte at ~62% Cu. Off-gas captured for acid plant.</p></div>
      <div className="step"><div className="step-num">03</div><h3>Converting</h3><p className="reveal">Pierce-Smith converters blow matte to blister at 99.3% Cu. Slag cooled and granulated for re-use.</p></div>
      <div className="step"><div className="step-num">04</div><h3>Anode casting</h3><p className="reveal">Blister fire-refined and cast into anodes — the feed for electrorefining.</p></div>
      <div className="step"><div className="step-num">05</div><h3>Electrorefining</h3><p className="reveal">Anodes dissolved electrolytically — 99.99% Cu deposited on starter sheets as cathodes.</p></div>
      <div className="step"><div className="step-num">06</div><h3>Rod mill</h3><p className="reveal">Cathodes melted in shaft furnace and continuously cast into 8&nbsp;mm oxygen-free copper rod.</p></div>
    </div>
  </div>
</section>

<section className="cta-band">
  <div className="cta-inner">
    <div><div className="eyebrow reveal">Work with us</div><h2 className="reveal delay-1">Ready to place an order or discuss a long-term contract?</h2></div>
    <div className="cta-btns"><a href="buy.html" className="btn-primary"><span className="roll-text"><span data-text="Buy now →">Buy now →</span></span></a><a href="contact.html" className="btn-primary btn-sm"><span className="roll-text"><span data-text="Talk to sales">Talk to sales</span></span></a></div>
  </div>
</section>

</main>


    </>
  );
}
