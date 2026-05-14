import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';

export default function useCommonSetup() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // 1. Scroll reveals
    const targets = document.querySelectorAll('[data-reveal], .reveal, .reveal-scale, .reveal-left, .reveal-right');
    const ioReveal = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { 
          e.target.classList.add('in'); 
        } else {
          e.target.classList.remove('in');
        }
      });
    }, { threshold: 0.05, rootMargin: '80px 0px -20px 0px' });
    
    if (targets.length) {
      const grids = document.querySelectorAll('.glance-mvv, .people-grid, .stat-grid, .fin-grid, .fin-reports, .esg-grid, .jobs-list, .news-grid, .pillars-row, .card-grid, .prose');
      grids.forEach(g => {
        const children = g.querySelectorAll('.reveal');
        children.forEach((c, i) => {
          if (!c.className.includes('delay-')) {
            const d = Math.min(i + 1, 8);
            c.classList.add('delay-' + d);
          }
        });
      });
      targets.forEach(t => ioReveal.observe(t));
    }

    // 2. Count-up on scale band
    const cells = document.querySelectorAll('.scale-cell .n, [data-countup]');
    const ioCount = new IntersectionObserver((entries, observer) => {
      entries.forEach(e => { 
        if (e.isIntersecting) { 
          animateCount(e.target); 
          observer.unobserve(e.target); 
        } 
      });
    }, { threshold: 0.5 });
    
    if (cells.length) {
      cells.forEach(c => ioCount.observe(c));
    }

    // 3. ESG bar fills
    const bars = document.querySelectorAll('.esg-bar-fill[data-fill]');
    const ioBars = new IntersectionObserver((entries, observer) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const pct = e.target.dataset.fill;
          setTimeout(() => { e.target.style.width = pct + '%'; }, 80);
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.35 });
    
    if (bars.length) {
      bars.forEach(b => ioBars.observe(b));
    }

    // 4. Hero slider (only runs if hero is on page)
    setupHeroSlider();

    // 5. Timeline horizontal scroll
    setupTimelineScroll();

    return () => {
      ioReveal.disconnect();
      ioCount.disconnect();
      ioBars.disconnect();
      if (window.heroTimer) clearInterval(window.heroTimer);
      if (window._tlScrollHandler) window.removeEventListener('scroll', window._tlScrollHandler);
      
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [pathname]);

  useEffect(() => {
    // Run once for layout components (Nav, a11y, edit mode)
    setupNav();
    setupA11y();
    setupEditMode();
    
    // Ensure timeline scroll is recalculated on resize
    window.addEventListener('resize', setupTimelineScroll);
    return () => window.removeEventListener('resize', setupTimelineScroll);
  }, []);
}

function setupTimelineScroll() {
  const section = document.querySelector('.timeline-pinned');
  const track = document.querySelector('.timeline-track');
  const rail = document.querySelector('.timeline-rail');
  const progress = document.querySelector('.timeline-progress span');

  if (!section || !track || !rail) return;

  const extra = Math.max(0, track.scrollWidth - rail.clientWidth);
  section.style.setProperty('--tl-extra', `${extra}px`);

  const onScroll = () => {
    const rect = section.getBoundingClientRect();
    let p = -rect.top / extra;
    p = Math.max(0, Math.min(1, p));
    track.style.transform = `translate3d(${-p * extra}px, 0, 0)`;
    if (progress) progress.style.width = `${p * 100}%`;
  };

  // Remove old listener if exists
  if (window._tlScrollHandler) window.removeEventListener('scroll', window._tlScrollHandler);
  window._tlScrollHandler = onScroll;
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function animateCount(el) {
  const ease = t => 1 - Math.pow(1 - t, 3);
  const txt = el.textContent;
  const m = txt.match(/([\d.]+)/);
  if (!m) return;
  const target = parseFloat(m[1]);
  const suffix = txt.slice(m.index + m[0].length);
  const prefix = txt.slice(0, m.index);
  const dur = 1400;
  const start = performance.now();
  const step = (now) => {
    const p = Math.min((now - start) / dur, 1);
    const v = target * ease(p);
    const display = target % 1 === 0 ? Math.round(v).toString() : v.toFixed(1);
    el.innerHTML = prefix + display + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function setupHeroSlider() {
  const track = document.getElementById('hero-track');
  if (!track) return;
  const slides = Array.from(track.querySelectorAll('.hero-slide'));
  if (slides.length < 2) return;
  const dotsHost = document.getElementById('hero-dots');
  const prev = document.getElementById('hero-prev');
  const next = document.getElementById('hero-next');
  const pauseBtn = document.getElementById('hero-pause');
  let idx = 0, paused = false;
  const DUR = 6000;

  if (dotsHost && dotsHost.childElementCount === 0) {
    slides.forEach((_, i) => {
      const b = document.createElement('button');
      b.setAttribute('aria-label', 'Go to slide ' + (i+1));
      if (i === 0) b.classList.add('active');
      b.addEventListener('click', () => go(i, true));
      dotsHost.appendChild(b);
    });
  }
  const dots = dotsHost ? Array.from(dotsHost.children) : [];

  function render() {
    slides.forEach((s, i) => s.classList.toggle('active', i === idx));
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
  }
  function go(i, userInitiated) {
    idx = (i + slides.length) % slides.length;
    render();
    if (userInitiated) restart();
  }
  function start() {
    stop();
    if (paused) return;
    window.heroTimer = setInterval(() => go(idx + 1), DUR);
  }
  function stop() { if (window.heroTimer) clearInterval(window.heroTimer); window.heroTimer = null; }
  function restart() { stop(); start(); }

  if (prev) prev.onclick = () => go(idx - 1, true);
  if (next) next.onclick = () => go(idx + 1, true);
  if (pauseBtn) pauseBtn.onclick = () => {
    paused = !paused;
    pauseBtn.setAttribute('aria-pressed', paused ? 'true' : 'false');
    pauseBtn.classList.toggle('paused', paused);
    pauseBtn.innerHTML = paused
      ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>'
      : '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>';
    if (paused) stop(); else start();
  };

  render();
  start();
}

function setupNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 12);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  const toggle = nav.querySelector('.menu-toggle');
  const menu = nav.querySelector('.nav-menu');
  if (toggle && menu) {
    toggle.onclick = () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    };
    menu.querySelectorAll('a').forEach(a => a.onclick = () => {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded','false');
      document.body.style.overflow = '';
    });
  }
}

function setupA11y() {
  const root = document.documentElement;
  const fab = document.getElementById('a11y-fab');
  const panel = document.getElementById('a11y-panel');
  if (!fab || !panel) return;
  const closeBtn = document.getElementById('a11y-close');
  const resetBtn = document.getElementById('a11y-reset');
  const fsVal = document.getElementById('a11y-fs-val');
  const guideTop = document.querySelector('.a11y-guide.top');
  const guideBot = document.querySelector('.a11y-guide.bot');
  const STORAGE_KEY = 'sterlite-a11y';
  const DEFAULTS = { scale: 1, spacing: 0, font: 0, contrast: 0, invert: 0, grayscale: 0, links: 0, guide: 0, motion: 0, cursor: 0 };
  let state = Object.assign({}, DEFAULTS, JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'));
  function save(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  function apply() {
    root.style.setProperty('--a11y-scale', state.scale);
    if (state.scale !== 1) root.setAttribute('data-a11y-scale', '1');
    else root.removeAttribute('data-a11y-scale');
    if (fsVal) fsVal.textContent = Math.round(state.scale * 100) + '%';
    ['spacing','font','contrast','invert','grayscale','links','guide','motion','cursor'].forEach(k => {
      if (state[k]) root.setAttribute('data-a11y-'+k, '1'); else root.removeAttribute('data-a11y-'+k);
      const t = panel.querySelector('[data-toggle="'+k+'"]');
      if (t) { t.classList.toggle('on', !!state[k]); t.setAttribute('aria-checked', state[k] ? 'true' : 'false'); }
    });
  }
  function openPanel(open) {
    panel.classList.toggle('on', open);
    fab.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  fab.onclick = () => openPanel(!panel.classList.contains('on'));
  if (closeBtn) closeBtn.onclick = () => { openPanel(false); };
  panel.querySelectorAll('[data-toggle]').forEach(btn => {
    btn.onclick = () => {
      const k = btn.dataset.toggle;
      state[k] = state[k] ? 0 : 1;
      save(); apply();
    };
  });
  const upBtn = panel.querySelector('[data-act="fs-up"]');
  const dnBtn = panel.querySelector('[data-act="fs-down"]');
  if (upBtn) upBtn.onclick = () => { state.scale = Math.min(1.6, +(state.scale + 0.1).toFixed(2)); save(); apply(); };
  if (dnBtn) dnBtn.onclick = () => { state.scale = Math.max(0.85, +(state.scale - 0.1).toFixed(2)); save(); apply(); };
  if (resetBtn) resetBtn.onclick = () => { state = Object.assign({}, DEFAULTS); save(); apply(); };
  document.addEventListener('mousemove', (e) => {
    if (!state.guide || !guideTop) return;
    const y = e.clientY;
    guideTop.style.height = Math.max(0, y - 40) + 'px';
    guideBot.style.height = Math.max(0, window.innerHeight - y - 40) + 'px';
  });
  apply();
}

function setupEditMode() {
  const panel = document.getElementById('tweaks');
  if (!panel) return;
  const body = document.body;
  const state = Object.assign({accent:'green',density:'default',theme:'light'}, window.TWEAKS||{});
  function apply() {
    body.dataset.accent = state.accent;
    body.dataset.density = state.density;
    body.dataset.theme = state.theme;
    panel.querySelectorAll('.opts').forEach(g => {
      const k = g.dataset.key;
      g.querySelectorAll('.opt').forEach(o => {
        o.classList.toggle('active', o.dataset.val === state[k]);
      });
    });
  }
  panel.querySelectorAll('.opt').forEach(btn => {
    btn.onclick = () => {
      const k = btn.parentElement.dataset.key;
      state[k] = btn.dataset.val;
      apply();
    };
  });
  apply();
}
