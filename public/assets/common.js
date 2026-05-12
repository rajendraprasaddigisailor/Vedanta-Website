/* shared site scripts */
(function(){
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
    btn.addEventListener('click', () => {
      const k = btn.parentElement.dataset.key;
      state[k] = btn.dataset.val;
      apply();
      try { window.parent.postMessage({type:'__edit_mode_set_keys', edits: {[k]: btn.dataset.val}}, '*'); } catch (e) {}
    });
  });
  window.addEventListener('message', (e) => {
    if (!e.data) return;
    if (e.data.type === '__activate_edit_mode') panel.classList.add('on');
    if (e.data.type === '__deactivate_edit_mode') panel.classList.remove('on');
  });
  try { window.parent.postMessage({type:'__edit_mode_available'}, '*'); } catch(e){}
  apply();
})();

/* Scroll reveals */
(function(){
  const targets = document.querySelectorAll('[data-reveal], .reveal, .reveal-scale, .reveal-left, .reveal-right');
  if (!targets.length) return;
  
  // Auto-stagger children in grids
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

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { 
        e.target.classList.add('in'); 
      } else {
        // Optional: remove if you want it to re-trigger every time
        e.target.classList.remove('in');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  targets.forEach(t => io.observe(t));
})();

/* Nav scroll shadow + mobile menu */
(function(){
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 12);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  // Mark active link
  const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  nav.querySelectorAll('.nav-menu a').forEach(a => {
    const href = (a.getAttribute('href')||'').toLowerCase();
    if (href === here || (here === '' && href === 'index.html')) a.classList.add('active');
  });
  // Mobile menu toggle
  const toggle = nav.querySelector('.menu-toggle');
  const menu = nav.querySelector('.nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded','false');
      document.body.style.overflow = '';
    }));
  }
})();

/* Count-up on scale band */
(function(){
  const cells = document.querySelectorAll('.scale-cell .n, [data-countup]');
  if (!cells.length) return;
  const ease = t => 1 - Math.pow(1 - t, 3);
  const animate = (el) => {
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
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { animate(e.target); io.unobserve(e.target); } });
  }, { threshold: 0.5 });
  cells.forEach(c => io.observe(c));
})();

/* Accessibility menu */
(function(){
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
    const dn = panel.querySelector('[data-act="fs-down"]'); if (dn) dn.disabled = state.scale <= 0.85;
    const up = panel.querySelector('[data-act="fs-up"]'); if (up) up.disabled = state.scale >= 1.6;
  }
  function openPanel(open) {
    panel.classList.toggle('on', open);
    fab.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open && closeBtn) closeBtn.focus();
  }
  fab.addEventListener('click', () => openPanel(!panel.classList.contains('on')));
  if (closeBtn) closeBtn.addEventListener('click', () => { openPanel(false); fab.focus(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel.classList.contains('on')) { openPanel(false); fab.focus(); }
  });
  document.addEventListener('click', (e) => {
    if (!panel.classList.contains('on')) return;
    if (!panel.contains(e.target) && !fab.contains(e.target)) openPanel(false);
  });
  panel.querySelectorAll('[data-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const k = btn.dataset.toggle;
      state[k] = state[k] ? 0 : 1;
      save(); apply();
    });
  });
  const upBtn = panel.querySelector('[data-act="fs-up"]');
  const dnBtn = panel.querySelector('[data-act="fs-down"]');
  if (upBtn) upBtn.addEventListener('click', () => { state.scale = Math.min(1.6, +(state.scale + 0.1).toFixed(2)); save(); apply(); });
  if (dnBtn) dnBtn.addEventListener('click', () => { state.scale = Math.max(0.85, +(state.scale - 0.1).toFixed(2)); save(); apply(); });
  if (resetBtn) resetBtn.addEventListener('click', () => { state = Object.assign({}, DEFAULTS); save(); apply(); });
  document.addEventListener('mousemove', (e) => {
    if (!state.guide || !guideTop) return;
    const y = e.clientY;
    guideTop.style.height = Math.max(0, y - 40) + 'px';
    guideBot.style.height = Math.max(0, window.innerHeight - y - 40) + 'px';
  });
  apply();
})();


/* Hero slider — auto-advancing with dots, arrows, pause */
(function(){
  const track = document.getElementById('hero-track');
  if (!track) return;
  const slides = Array.from(track.querySelectorAll('.hero-slide'));
  if (slides.length < 2) return;
  const dotsHost = document.getElementById('hero-dots');
  const prev = document.getElementById('hero-prev');
  const next = document.getElementById('hero-next');
  const pauseBtn = document.getElementById('hero-pause');
  let idx = 0, timer = null, paused = false;
  const DUR = 6000;

  // Build dots if empty
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
    timer = setInterval(() => go(idx + 1), DUR);
  }
  function stop() { if (timer) clearInterval(timer); timer = null; }
  function restart() { stop(); start(); }

  if (prev) prev.addEventListener('click', () => go(idx - 1, true));
  if (next) next.addEventListener('click', () => go(idx + 1, true));
  if (pauseBtn) pauseBtn.addEventListener('click', () => {
    paused = !paused;
    pauseBtn.setAttribute('aria-pressed', paused ? 'true' : 'false');
    pauseBtn.classList.toggle('paused', paused);
    pauseBtn.innerHTML = paused
      ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>'
      : '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>';
    if (paused) stop(); else start();
  });

  // Keyboard nav
  track.parentElement.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') go(idx - 1, true);
    if (e.key === 'ArrowRight') go(idx + 1, true);
  });
  // Touch swipe
  let sx = 0;
  track.addEventListener('touchstart', e => sx = e.touches[0].clientX, { passive: true });
  track.addEventListener('touchend', e => {
    const dx = (e.changedTouches[0].clientX) - sx;
    if (Math.abs(dx) > 40) { dx > 0 ? go(idx - 1, true) : go(idx + 1, true); }
  }, { passive: true });
  // Pause when tab hidden
  document.addEventListener('visibilitychange', () => { document.hidden ? stop() : start(); });

  render();
  start();
})();

/* ESG bar fills + news filter chips */
(function(){
  const bars = document.querySelectorAll('.esg-bar-fill[data-fill]');
  if (bars.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const pct = e.target.dataset.fill;
          setTimeout(() => { e.target.style.width = pct + '%'; }, 80);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.35 });
    bars.forEach(b => io.observe(b));
  }
  document.querySelectorAll('.news-filters').forEach(host => {
    host.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', () => {
        host.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
      });
    });
  });
})();

/* Parallax hero bg */
(function(){
  const hero = document.querySelector('.hero');
  if (!hero) return;
  let raf = null;
  window.addEventListener('scroll', () => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      const y = Math.min(window.scrollY * 0.3, 200);
      hero.style.backgroundPosition = `center calc(50% + ${y}px)`;
      raf = null;
    });
  }, { passive: true });
})();
