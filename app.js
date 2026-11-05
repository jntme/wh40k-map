(() => {
  'use strict';

  const D = window.WH40K_DATA;
  const NS = 'http://www.w3.org/2000/svg';
  const svg = document.getElementById('map');
  const panel = document.getElementById('panel');
  const panelBody = document.getElementById('panel-body');
  const crumbs = document.getElementById('crumbs');

  // ---------- Zoom levels (pixels per world unit) ----------
  const K_ORBIT_START = 2.2;  // planet orbits start fading in here
  const K_ORBIT_FULL = 3.2;   // fully visible from here
  const K_SYSTEM = 6;         // zoom when a system is selected
  const K_MAX = 22;
  const GALAXY_R = 1050;
  const ORBIT0 = 6, ORBIT_STEP = 4.5;

  // ---------- Eras ----------
  const ERAS = {
    '30k': { short: '30K', label: 'Horus Heresy', title: 'The 31st Millennium', sub: 'The Great Crusade and the Horus Heresy' },
    '40k': { short: '40K', label: 'Dark Imperium', title: 'The 41st Millennium', sub: 'From the end of M41 to the Dark Imperium' }
  };
  let era = '40k';
  const eventEra = e => (e.sort < 32000 ? '30k' : '40k');
  const inEra = obj => !obj || !obj.eras || obj.eras.includes(era);

  // ---------- Indexes ----------
  const segById = Object.fromEntries(D.segmentums.map(s => [s.id, s]));
  const systemById = Object.fromEntries(D.systems.map(s => [s.id, s]));
  const featureById = Object.fromEntries(D.features.map(f => [f.id, f]));
  const planetSystem = {};
  D.systems.forEach(s => s.planets.forEach(p => { planetSystem[p] = s; }));
  D.events.sort((a, b) => a.sort - b.sort);
  const eventById = Object.fromEntries(D.events.map(e => [e.id, e]));
  const eventsByPlanet = {};
  const eventsByBook = {};
  D.events.forEach(e => {
    e.planets.forEach(p => (eventsByPlanet[p] = eventsByPlanet[p] || []).push(e));
    e.books.forEach(b => (eventsByBook[b] = eventsByBook[b] || []).push(e));
  });
  // Books may list their own locations; mirror them onto the planets
  Object.entries(D.books).forEach(([bid, b]) => (b.planets || []).forEach(p => {
    const pl = D.planets[p];
    if (pl && !(pl.books || []).includes(bid)) (pl.books = pl.books || []).push(bid);
  }));
  const planetsByBook = {};
  Object.entries(D.planets).forEach(([pid, p]) =>
    (p.books || []).forEach(b => (planetsByBook[b] = planetsByBook[b] || []).push(pid)));

  // Era of a book: from its events, otherwise from its series
  const HERESY_SERIES = /horus heresy|siege of terra|primarchs/i;
  const bookEras = {};
  Object.entries(D.books).forEach(([bid, b]) => {
    const set = new Set((eventsByBook[bid] || []).map(eventEra));
    if (!set.size) set.add(HERESY_SERIES.test(b.series || '') ? '30k' : '40k');
    bookEras[bid] = set;
  });
  const bookInEra = (bid, er = era) => bookEras[bid] && bookEras[bid].has(er);
  const eraEvents = (list, er = era) => (list || []).filter(e => eventEra(e) === er);
  const planetEra = (pid, er = era) => (D.planets[pid] || {})['era' + er] || null;
  const planetHasContent = (pid, er = era) =>
    eraEvents(eventsByPlanet[pid], er).length > 0 ||
    !!planetEra(pid, er) ||
    (D.planets[pid].books || []).some(b => bookInEra(b, er));

  validateData();

  // ---------- Reading progress & spoiler shield ----------
  // Read books live in this browser only (localStorage); export/import moves them elsewhere.
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
  };
  // marks: { bookId: [1 = read / 0 = unread, timestamp] }; the newer mark wins when devices sync
  const marks = (() => {
    try {
      const m = JSON.parse(store.get('read-marks') || 'null');
      if (m) return m;
      const old = JSON.parse(store.get('read-books') || '[]');
      return Object.fromEntries(old.map(b => [b, [1, 0]]));
    } catch (e) { return {}; }
  })();
  const readSet = new Set();
  const rebuildRead = () => {
    readSet.clear();
    Object.entries(marks).forEach(([b, [r]]) => { if (r && D.books[b]) readSet.add(b); });
  };
  rebuildRead();
  let shield = store.get('spoiler-shield') !== '0';
  const peekBooks = new Set(), peekEvents = new Set(), peekPlanets = new Set();
  const listeners = [];
  const isRead = bid => readSet.has(bid);
  const isProtected = bid => HERESY_SERIES.test((D.books[bid] || {}).series || '');
  const saveRead = () => store.set('read-marks', JSON.stringify(marks));

  // A protected book's content stays hidden until it is read
  const bookLocked = bid => shield && isProtected(bid) && !isRead(bid) && !peekBooks.has(bid);
  // A 30K event is revealed by reading any of its books
  const eventLocked = e => shield && !e.public && eventEra(e) === '30k' && !peekEvents.has(e.id) && !e.books.some(isRead);
  // A world's Heresy-era fate is revealed once all its 30K storylines are
  function planetLocked(pid) {
    if (!shield || era !== '30k' || peekPlanets.has(pid)) return false;
    const evs = eraEvents(eventsByPlanet[pid], '30k');
    if (evs.length) return evs.some(eventLocked);
    return (D.planets[pid].books || []).some(b => isProtected(b) && !isRead(b));
  }

  function setRead(bids, read) {
    const now = Date.now();
    bids.forEach(b => { marks[b] = [read ? 1 : 0, now]; });
    rebuildRead();
    saveRead();
    progressChanged();
    syncSoon();
  }
  // Merge marks from another device; returns true if anything changed here
  function mergeMarks(remote) {
    let changed = false;
    Object.entries(remote || {}).forEach(([b, m]) => {
      if (!D.books[b] || !Array.isArray(m)) return;
      const l = marks[b];
      if (!l || m[1] > l[1]) { marks[b] = [m[0] ? 1 : 0, m[1]]; changed = true; }
    });
    if (changed) { rebuildRead(); saveRead(); }
    return changed;
  }
  let syncSoon = () => {};
  function setShield(on) {
    shield = on;
    store.set('spoiler-shield', on ? '1' : '0');
    progressChanged();
  }
  function progressChanged() {
    listeners.forEach(f => f());
  }

  // ---------- Helpers ----------
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const isMobile = () => window.matchMedia('(max-width: 760px)').matches;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const link = (kind, id, er = era) => `#/${er}/${kind}/${encodeURIComponent(id)}`;

  function el(tag, attrs, parent) {
    const n = document.createElementNS(NS, tag);
    for (const k in attrs || {}) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }

  function rng(seed) { // mulberry32
    return () => {
      seed |= 0; seed = seed + 0x6D2B79F5 | 0;
      let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  function hashAngle(id) {
    let h = 0;
    for (const c of id) h = (h * 31 + c.charCodeAt(0)) % 3600;
    return h / 10 * Math.PI / 180;
  }

  function smoothPath(pts) { // Catmull-Rom -> cubic Bézier
    let d = `M${pts[0][0]},${pts[0][1]}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
      const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
      const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
      d += ` C${c1[0]},${c1[1]} ${c2[0]},${c2[1]} ${p2[0]},${p2[1]}`;
    }
    return d;
  }

  function planetColor(type) {
    const t = (type || '').toLowerCase();
    if (t.includes('destroyed') || t.includes('devastated') || t.includes('ravaged')) return '#6b2a24';
    if (t.includes('throne')) return '#e8c25a';
    if (t.includes('forge')) return '#c4502e';
    if (t.includes('fortress')) return '#8a8f99';
    if (t.includes('death') || t.includes('ice world')) return '#bfe0f0';
    if (t.includes('daemon') || t.includes('chaos')) return '#9b3fbf';
    if (t.includes('forest') || t.includes('jungle') || t.includes('agri')) return '#3f8a4a';
    if (t.includes('desert')) return '#d2b071';
    if (t.includes('ocean')) return '#3a74b8';
    if (t.includes('hive')) return '#9a8570';
    return '#7fa7d9';
  }

  // ---------- SVG construction ----------
  const defs = el('defs', {}, svg);
  defs.innerHTML = `
    <radialGradient id="g-disc">
      <stop offset="0" stop-color="#3a3350" stop-opacity=".55"/>
      <stop offset=".55" stop-color="#1a1d33" stop-opacity=".35"/>
      <stop offset="1" stop-color="#0b0d18" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g-core">
      <stop offset="0" stop-color="#fff6d8" stop-opacity=".95"/>
      <stop offset=".25" stop-color="#f3d39a" stop-opacity=".55"/>
      <stop offset="1" stop-color="#b9824a" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g-warp">
      <stop offset="0" stop-color="#1a0322" stop-opacity="1"/>
      <stop offset=".35" stop-color="#6a1f8f" stop-opacity=".9"/>
      <stop offset=".7" stop-color="#b03fbf" stop-opacity=".45"/>
      <stop offset="1" stop-color="#a14ad6" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g-star">
      <stop offset="0" stop-color="#fffbe6"/>
      <stop offset="1" stop-color="#ffcf6a"/>
    </radialGradient>
    <clipPath id="clip-disc"><circle r="${GALAXY_R}"/></clipPath>`;

  const world = el('g', { id: 'world' }, svg);
  const scalers = []; // functions that update pixel sizes when the zoom changes

  drawGalaxy();
  drawSegmentums();
  const riftGroup = drawRift();
  drawFeatures();
  const systemEls = {};
  const planetEls = {};
  const sysLabelMinK = {};
  drawSystems();

  function drawGalaxy() {
    const g = el('g', { class: 'galaxy' }, world);
    el('circle', { r: GALAXY_R, fill: 'url(#g-disc)' }, g);
    const rand = rng(40000);
    const arms = 4;
    const frag = document.createDocumentFragment();
    for (let a = 0; a < arms; a++) {
      const off = a * Math.PI * 2 / arms;
      for (let i = 0; i < 520; i++) {
        const t = Math.pow(rand(), 0.8);
        const r = 90 + t * 940;
        const spread = (rand() + rand() + rand() - 1.5) * (0.42 - t * 0.12);
        const th = off + t * 4.4 + spread;
        frag.appendChild(el('circle', {
          cx: (Math.cos(th) * r).toFixed(1),
          cy: (Math.sin(th) * r).toFixed(1),
          r: (0.5 + rand() * 1.8).toFixed(2),
          fill: rand() < 0.15 ? '#ffd9a8' : (rand() < 0.3 ? '#b8ccff' : '#f4f1ff'),
          'fill-opacity': (0.25 + rand() * 0.6).toFixed(2)
        }));
      }
    }
    for (let i = 0; i < 700; i++) {
      const r = Math.sqrt(rand()) * GALAXY_R;
      const th = rand() * Math.PI * 2;
      frag.appendChild(el('circle', {
        cx: (Math.cos(th) * r).toFixed(1), cy: (Math.sin(th) * r).toFixed(1),
        r: (0.4 + rand() * 1.1).toFixed(2), fill: '#e8e6ff', 'fill-opacity': (0.15 + rand() * 0.4).toFixed(2)
      }));
    }
    g.appendChild(frag);
    el('circle', { r: 300, fill: 'url(#g-core)' }, g);
  }

  function drawSegmentums() {
    const g = el('g', { class: 'segmentums' }, world);
    const terra = systemById.sol;
    const T = [terra.x, terra.y];
    const R = 260;
    el('circle', { cx: T[0], cy: T[1], r: R, class: 'seg-line', 'vector-effect': 'non-scaling-stroke' }, g);
    const lines = el('g', { 'clip-path': 'url(#clip-disc)' }, g);
    [-50, -140, 150, 60].forEach(deg => {
      const u = [Math.cos(deg * Math.PI / 180), Math.sin(deg * Math.PI / 180)];
      el('line', {
        x1: T[0] + u[0] * R, y1: T[1] + u[1] * R,
        x2: T[0] + u[0] * 2400, y2: T[1] + u[1] * 2400,
        class: 'seg-line', 'vector-effect': 'non-scaling-stroke'
      }, lines);
    });
    D.segmentums.forEach(s => {
      const t = el('text', { x: s.label[0], y: s.label[1], class: 'seg-label', 'font-size': 34 }, g);
      t.textContent = s.name.toUpperCase();
    });
  }

  function drawRift() {
    const r = D.rift;
    const g = el('g', { class: 'rift-group', 'data-route': 'feature/rift' }, world);
    const d = smoothPath(r.points);
    el('path', { d, class: 'rift', stroke: '#a14ad6', 'stroke-opacity': .12, 'stroke-width': 70 }, g);
    el('path', { d, class: 'rift', stroke: '#b03fbf', 'stroke-opacity': .25, 'stroke-width': 30 }, g);
    el('path', { d, id: 'rift-path', class: 'rift', stroke: '#e3a6ff', 'stroke-opacity': .7, 'stroke-width': 4 }, g);
    const label = el('text', { class: 'rift-label' }, g);
    const tp = el('textPath', { href: '#rift-path', startOffset: '30%' }, label);
    tp.textContent = r.name;
    scalers.push(k => {
      label.setAttribute('dy', -16 / k);
      label.setAttribute('font-size', 14 / k);
      label.setAttribute('stroke-width', 3 / k);
    });
    return g;
  }

  function drawFeatures() {
    D.features.forEach(f => {
      const g = el('g', { class: 'feature', 'data-route': `feature/${f.id}`, transform: `translate(${f.x},${f.y})` }, world);
      el('circle', { r: f.r, fill: 'url(#g-warp)' }, g);
      el('circle', { r: f.r * 0.55, fill: 'none', stroke: '#d48ef0', 'stroke-opacity': .35, 'stroke-dasharray': '4 6', 'vector-effect': 'non-scaling-stroke' }, g);
      const t = el('text', { class: 'feature-label' }, g);
      t.textContent = f.name;
      scalers.push(k => {
        t.setAttribute('y', -(f.r * 0.6 + 6 / k));
        t.setAttribute('font-size', 13 / k);
        t.setAttribute('stroke-width', 3 / k);
      });
    });
  }

  function drawSystems() {
    const layer = el('g', { class: 'systems' }, world);
    D.systems.forEach(s => {
      const g = el('g', {
        class: 'system' + (s.major ? ' major' : ''),
        transform: `translate(${s.x},${s.y})`,
        'data-route': `system/${s.id}`
      }, layer);
      systemEls[s.id] = g;

      // planet orbits (only visible when zoomed in closely)
      const orbits = el('g', { class: 'orbits' }, g);
      el('circle', { r: 2, class: 'star', fill: 'url(#g-star)' }, orbits);
      const valid = s.planets.filter(pid => D.planets[pid]);
      valid.forEach((pid, i) => {
        const R = ORBIT0 + i * ORBIT_STEP;
        el('circle', { r: R, class: 'orbit', 'vector-effect': 'non-scaling-stroke' }, orbits);
        const a = hashAngle(pid);
        const px = Math.cos(a) * R, py = Math.sin(a) * R;
        const pg = el('g', { class: 'planet', 'data-route': `planet/${pid}` }, orbits);
        const ring = el('circle', { cx: px, cy: py, class: 'ring', 'vector-effect': 'non-scaling-stroke', 'stroke-width': 2 }, pg);
        const body = el('circle', { cx: px, cy: py, class: 'body', 'vector-effect': 'non-scaling-stroke' }, pg);
        const label = el('text', { class: 'planet-label' }, pg);
        label.textContent = D.planets[pid].name;
        planetEls[pid] = { g: pg, body };
        scalers.push(k => {
          body.setAttribute('r', 5.5 / k);
          ring.setAttribute('r', 9 / k);
          label.setAttribute('x', px + 11 / k);
          label.setAttribute('y', py + 4 / k);
          label.setAttribute('font-size', 12 / k);
          label.setAttribute('stroke-width', 3 / k);
        });
      });

      const halo = el('circle', { class: 'sys-halo', 'vector-effect': 'non-scaling-stroke', 'stroke-width': 1.5 }, g);
      const dot = el('circle', { class: 'sys-dot' }, g);
      const label = el('text', { class: 'sys-label', 'text-anchor': 'middle' }, g);
      label.textContent = s.name;
      const outer = valid.length ? ORBIT0 + (valid.length - 1) * ORBIT_STEP : 0;

      scalers.push(k => {
        const o = clamp((k - K_ORBIT_START) / (K_ORBIT_FULL - K_ORBIT_START), 0, 1);
        orbits.style.opacity = o;
        orbits.style.display = o === 0 ? 'none' : '';
        orbits.style.pointerEvents = o > 0.5 ? '' : 'none';
        dot.style.display = o >= 1 ? 'none' : '';
        halo.setAttribute('r', o >= 1 ? outer + 12 / k : (s.major ? 10 : 8) / k);
        dot.setAttribute('r', (s.major ? 5.5 : 4) / k);
        label.setAttribute('y', o >= 1 ? -(outer + 20 / k) : -13 / k);
        label.setAttribute('font-size', (s.major ? 14 : 12.5) / k);
        label.setAttribute('stroke-width', 3 / k);
        g.classList.toggle('nolabel', o < 1 && k < (sysLabelMinK[s.id] || 0));
      });
    });
  }

  // declutter labels: zoom level from which a label no longer overlaps
  function computeLabelZoom() {
    const visible = D.systems.filter(s => inEra(s));
    const score = s => (s.major ? 1e6 : 0) +
      s.planets.reduce((n, p) => n + (D.planets[p] ? eraEvents(eventsByPlanet[p]).length * 10 + (planetHasContent(p) ? 1 : 0) : 0), 0);
    const order = visible.slice().sort((a, b) => score(b) - score(a) || a.name.localeCompare(b.name));
    const width = s => s.name.length * (s.major ? 7.6 : 6.9) + 8;
    const placed = [];
    order.forEach(s => {
      let need = 0;
      if (!s.major) {
        placed.forEach(o => {
          const dx = Math.abs(s.x - o.x), dy = Math.abs(s.y - o.y);
          const kx = dx ? (width(s) + width(o)) / 2 / dx : Infinity;
          const ky = dy ? 17 / dy : Infinity;
          const kij = Math.min(kx, ky);
          if (kij > (sysLabelMinK[o.id] || 0)) need = Math.max(need, kij);
        });
      }
      sysLabelMinK[s.id] = need;
      placed.push(s);
    });
  }

  // ---------- Apply era ----------
  const eraButtons = [...document.querySelectorAll('[data-era]')];
  eraButtons.forEach(b => b.addEventListener('click', () => switchEra(b.dataset.era)));

  function applyEra() {
    document.body.classList.toggle('era-30k', era === '30k');
    document.body.classList.toggle('era-40k', era === '40k');
    eraButtons.forEach(b => b.setAttribute('aria-pressed', b.dataset.era === era));
    document.getElementById('brand-era').textContent = ERAS[era].short;
    libEraChanged();
    riftGroup.style.display = inEra(D.rift) ? '' : 'none';
    D.systems.forEach(s => {
      const g = systemEls[s.id];
      g.style.display = inEra(s) ? '' : 'none';
      const has = s.planets.some(p => D.planets[p] && planetHasContent(p));
      g.classList.toggle('dim', !has);
    });
    recolor();
    computeLabelZoom();
    lastK = null;
    apply();
  }

  function recolor() {
    Object.entries(planetEls).forEach(([pid, pe]) => {
      pe.body.setAttribute('fill', planetColor(planetInfo(pid).type));
      pe.g.classList.toggle('dim', !planetHasContent(pid));
    });
  }

  function switchEra(target) {
    if (target === era) return;
    const { kind, id } = parse(location.hash);
    let next = `#/${target}/`;
    if (kind === 'planet' || kind === 'system' || kind === 'feature') next = link(kind, id, target);
    else if (kind === 'book' && bookInEra(id, target)) next = link(kind, id, target);
    navigate(next, { fly: false });
  }

  // ---------- View / zoom ----------
  const view = { x: 0, y: 0, k: 1 };
  let W = 1, H = 1, kFit = 0.4, lastK = null, anim = null;
  const kMin = () => kFit * 0.7;

  function measure() {
    const r = svg.getBoundingClientRect();
    W = Math.max(1, r.width);
    H = Math.max(1, r.height);
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    const visH = visCenter().y * 2;
    kFit = Math.min(W, visH) / (GALAXY_R * 2.15);
  }

  function visCenter() {
    let h = H;
    if (isMobile()) h = Math.max(H * 0.3, H - sheetHeight(sheetState));
    return { x: W / 2, y: h / 2 };
  }

  function apply() {
    world.setAttribute('transform', `translate(${view.x},${view.y}) scale(${view.k})`);
    if (view.k !== lastK) {
      lastK = view.k;
      scalers.forEach(f => f(view.k));
    }
  }

  function center() {
    const vc = visCenter();
    return { x: (vc.x - view.x) / view.k, y: (vc.y - view.y) / view.k };
  }

  function setView(cx, cy, k) {
    const vc = visCenter();
    view.k = k;
    view.x = vc.x - cx * k;
    view.y = vc.y - cy * k;
    apply();
  }

  function zoomAt(p, factor) {
    const k = clamp(view.k * factor, kMin(), K_MAX);
    const wx = (p.x - view.x) / view.k, wy = (p.y - view.y) / view.k;
    view.k = k;
    view.x = p.x - wx * k;
    view.y = p.y - wy * k;
    apply();
  }

  function cancelFly() {
    if (anim) cancelAnimationFrame(anim);
    anim = null;
  }

  function flyTo(cx, cy, k1, dur = 800) {
    cancelFly();
    k1 = clamp(k1, kMin(), K_MAX);
    if (reduceMotion || dur === 0) { setView(cx, cy, k1); return; }
    const c0 = center(), k0 = view.k, t0 = performance.now();
    const step = now => {
      const t = Math.min(1, (now - t0) / dur);
      const e = t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      setView(c0.x + (cx - c0.x) * e, c0.y + (cy - c0.y) * e, k0 * Math.pow(k1 / k0, e));
      anim = t < 1 ? requestAnimationFrame(step) : null;
    };
    anim = requestAnimationFrame(step);
  }

  function fitSystems(list) {
    list = [...new Set(list.filter(Boolean))];
    if (!list.length) return;
    if (list.length === 1) { flyTo(list[0].x, list[0].y, K_SYSTEM); return; }
    const xs = list.map(s => s.x), ys = list.map(s => s.y);
    const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
    const pad = 140;
    const vc = visCenter();
    const k = Math.min(W / (x1 - x0 + pad * 2), vc.y * 2 / (y1 - y0 + pad * 2));
    flyTo((x0 + x1) / 2, (y0 + y1) / 2, clamp(k, kFit, K_SYSTEM));
  }

  // ---------- Input: mouse, touch, wheel ----------
  const pointers = new Map();
  let down = null, pinch = null;

  const localPt = e => {
    const r = svg.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  };
  const pinchState = () => {
    const [a, b] = [...pointers.values()];
    return { mid: { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }, dist: Math.hypot(a.x - b.x, a.y - b.y) || 1 };
  };

  svg.addEventListener('pointerdown', e => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    cancelFly();
    svg.setPointerCapture(e.pointerId);
    pointers.set(e.pointerId, localPt(e));
    if (pointers.size === 1) {
      down = { x: e.clientX, y: e.clientY, target: e.target, moved: false };
    } else {
      if (down) down.moved = true;
      pinch = pinchState();
    }
  });

  svg.addEventListener('pointermove', e => {
    if (!pointers.has(e.pointerId)) return;
    const prev = pointers.get(e.pointerId);
    const cur = localPt(e);
    pointers.set(e.pointerId, cur);
    if (pointers.size === 1) {
      view.x += cur.x - prev.x;
      view.y += cur.y - prev.y;
      apply();
      if (down && Math.hypot(e.clientX - down.x, e.clientY - down.y) > 5) {
        down.moved = true;
        svg.classList.add('dragging');
      }
    } else if (pointers.size === 2 && pinch) {
      const st = pinchState();
      zoomAt(st.mid, st.dist / pinch.dist);
      view.x += st.mid.x - pinch.mid.x;
      view.y += st.mid.y - pinch.mid.y;
      apply();
      pinch = st;
    }
  });

  const endPointer = e => {
    if (!pointers.has(e.pointerId)) return;
    pointers.delete(e.pointerId);
    if (pointers.size < 2) pinch = null;
    if (pointers.size === 0) {
      svg.classList.remove('dragging');
      if (e.type === 'pointerup' && down && !down.moved) {
        const node = down.target.closest && down.target.closest('[data-route]');
        if (node) {
          const [kind, id] = node.getAttribute('data-route').split('/');
          navigate(link(kind, id));
        }
      }
      down = null;
    }
  };
  svg.addEventListener('pointerup', endPointer);
  svg.addEventListener('pointercancel', endPointer);

  svg.addEventListener('wheel', e => {
    e.preventDefault();
    cancelFly();
    const unit = e.deltaMode === 1 ? 33 : (e.deltaMode === 2 ? H : 1);
    zoomAt(localPt(e), Math.exp(-e.deltaY * unit * 0.0016));
  }, { passive: false });

  svg.addEventListener('dblclick', e => {
    e.preventDefault();
    const c = localPt(e);
    const wx = (c.x - view.x) / view.k, wy = (c.y - view.y) / view.k;
    flyTo(wx, wy, view.k * 2.2, 400);
  });

  const zoomCenter = f => {
    const c = center();
    flyTo(c.x, c.y, view.k * f, 300);
  };
  document.getElementById('zoom-in').addEventListener('click', () => zoomCenter(1.8));
  document.getElementById('zoom-out').addEventListener('click', () => zoomCenter(1 / 1.8));
  document.getElementById('zoom-reset').addEventListener('click', () => navigate(`#/${era}/`));

  function onResize() {
    const c = center();
    if (isMobile()) setSheet(sheetState, false);
    else { panel.style.height = ''; delete document.body.dataset.sheet; }
    measure();
    setView(c.x, c.y, clamp(view.k, kMin(), K_MAX));
  }
  window.addEventListener('resize', onResize);

  // Mobile: expand/collapse panel
  // ---------- Mobile bottom sheet: peek, half, full; drag the grip to resize ----------
  const SHEETS = ['peek', 'half', 'full'];
  let sheetState = 'peek';
  function sheetHeight(st) {
    const vh = window.innerHeight;
    if (st === 'peek') return Math.min(150, vh * 0.3);
    if (st === 'half') return Math.round(vh * 0.5);
    return vh - 64;
  }
  function setSheet(st, recenter = true) {
    if (!isMobile()) return;
    const c = center();
    sheetState = st;
    panel.dataset.sheet = st;
    panel.style.height = sheetHeight(st) + 'px';
    document.body.dataset.sheet = st;
    document.documentElement.style.setProperty('--sheet-h', sheetHeight(st) + 'px');
    if (recenter) setView(c.x, c.y, view.k);
  }
  const grip = document.getElementById('panel-handle');
  let drag = null;
  grip.addEventListener('pointerdown', e => {
    if (!isMobile()) return;
    drag = { y: e.clientY, h: panel.offsetHeight, t: performance.now(), moved: false };
    grip.setPointerCapture(e.pointerId);
    panel.classList.add('dragging');
  });
  grip.addEventListener('pointermove', e => {
    if (!drag) return;
    const dy = e.clientY - drag.y;
    if (Math.abs(dy) > 4) drag.moved = true;
    panel.style.height = clamp(drag.h - dy, 80, window.innerHeight - 40) + 'px';
  });
  const endDrag = e => {
    if (!drag) return;
    panel.classList.remove('dragging');
    const d = drag;
    drag = null;
    if (!d.moved) { // tap: step up, or back down from full
      setSheet(sheetState === 'full' ? 'peek' : SHEETS[SHEETS.indexOf(sheetState) + 1]);
      return;
    }
    const h = panel.offsetHeight;
    const v = (h - d.h) / Math.max(1, performance.now() - d.t); // px/ms, positive = upwards
    let target = SHEETS.reduce((a, b) => Math.abs(sheetHeight(b) - h) < Math.abs(sheetHeight(a) - h) ? b : a);
    if (Math.abs(v) > 0.6) {
      const i = SHEETS.indexOf(target);
      const cur = SHEETS.reduce((a, b) => Math.abs(sheetHeight(b) - d.h) < Math.abs(sheetHeight(a) - d.h) ? b : a);
      const ci = SHEETS.indexOf(cur);
      target = SHEETS[clamp(v > 0 ? Math.max(i, ci + 1) : Math.min(i, ci - 1), 0, 2)];
    }
    setSheet(target);
  };
  grip.addEventListener('pointerup', endDrag);
  grip.addEventListener('pointercancel', endDrag);

  // ---------- Routing ----------
  // Format: #/<30k|40k>/<kind>/<id>, e.g. #/30k/planet/prospero
  let pendingOpts = null;

  function navigate(hash, opts) {
    pendingOpts = opts || null;
    if (location.hash === hash) show(hash, opts);
    else location.hash = hash;
  }

  window.addEventListener('hashchange', () => {
    const opts = pendingOpts || {};
    pendingOpts = null;
    show(location.hash, opts);
  });

  function parse(hash) {
    const parts = (hash || '').replace(/^#\/?/, '').split('/').filter(Boolean);
    const er = ERAS[parts[0]] ? parts.shift() : null;
    return { era: er, kind: parts[0] || '', id: parts[1] ? decodeURIComponent(parts[1]) : '' };
  }

  function clearMarks() {
    svg.querySelectorAll('.hl, .selected, .preview').forEach(n => n.classList.remove('hl', 'selected', 'preview'));
  }

  function mark(planetIds, cls) {
    planetIds.forEach(pid => {
      planetEls[pid] && planetEls[pid].g.classList.add(cls);
      const s = planetSystem[pid];
      s && systemEls[s.id] && systemEls[s.id].classList.add(cls);
    });
  }

  function show(hash, opts = {}) {
    let { era: er, kind, id } = parse(hash);
    // events and books belong to an era
    if (kind === 'event' && eventById[id]) er = eventEra(eventById[id]);
    if (kind === 'book' && D.books[id] && !bookInEra(id, er || era)) er = [...bookEras[id]][0];
    if (er && er !== era) { era = er; applyEra(); }

    clearMarks();
    if (isMobile() && !opts.keepSheet) setSheet(kind ? 'half' : 'peek', false);
    const fly = opts.fly !== false;

    if (kind === 'system' && systemById[id]) {
      const s = systemById[id];
      systemEls[id].classList.add('selected');
      renderSystem(s);
      if (fly) flyTo(s.x, s.y, K_SYSTEM);
    } else if (kind === 'planet' && D.planets[id]) {
      mark([id], 'selected');
      renderPlanet(id);
      const s = planetSystem[id];
      if (fly && s) flyTo(s.x, s.y, Math.max(K_SYSTEM, view.k));
    } else if (kind === 'event' && eventById[id]) {
      const e = eventById[id];
      renderEvent(e);
      if (!eventLocked(e)) {
        mark(e.planets, 'hl');
        if (fly) fitSystems(e.planets.map(p => planetSystem[p]));
      }
    } else if (kind === 'book' && D.books[id]) {
      const pids = bookPlanets(id);
      mark(pids, 'hl');
      renderBook(id);
      if (fly) fitSystems(pids.map(p => planetSystem[p]));
    } else if (kind === 'feature' && (featureById[id] || id === 'rift')) {
      renderFeature(id);
      const f = featureById[id];
      if (fly) {
        if (f) flyTo(f.x, f.y, Math.max(kFit * 4, 1.2));
        else flyTo(0, 0, kFit);
      }
    } else {
      renderOverview();
      if (fly) flyTo(0, 0, kFit);
    }
    panelBody.scrollTop = 0;
    libSync(kind === 'book' ? id : null);
  }

  function bookPlanets(bid) {
    const set = new Set(planetsByBook[bid] || []);
    (eventsByBook[bid] || []).forEach(e => { if (eventEra(e) === era) e.planets.forEach(p => set.add(p)); });
    return [...set];
  }

  // ---------- Panel content ----------
  function setCrumbs(parts) {
    crumbs.innerHTML = [[`#/${era}/`, `Galaxy ${ERAS[era].short}`], ...parts]
      .map(([href, label], i, arr) => i === arr.length - 1 && arr.length > 1
        ? `<span>${esc(label)}</span>`
        : `<a href="${href}">${esc(label)}</a>`)
      .join(' › ');
  }

  const segName = id => (segById[id] || {}).name || '';
  const other = () => (era === '30k' ? '40k' : '30k');

  function bookItem(bid) {
    const b = D.books[bid];
    if (!b) return '';
    return `<li class="${isRead(bid) ? 'read' : ''}"><a href="${link('book', bid)}">${esc(b.title)}</a>
      <div class="meta">${esc(b.author)} · ${esc(b.series)} · ${esc(b.year)}</div></li>`;
  }

  function bookList(ids, emptyText = 'No books recorded yet.') {
    return ids.length
      ? `<ul class="books">${ids.map(bookItem).join('')}</ul>`
      : `<div class="empty">${emptyText}</div>`;
  }

  function planetChips(ids) {
    if (!ids.some(p => D.planets[p])) return '<div class="empty">No specific location recorded.</div>';
    return `<div class="chips">${ids.filter(p => D.planets[p]).map(p =>
      `<a class="chip" href="${link('planet', p)}">${esc(D.planets[p].name)}</a>`).join('')}</div>`;
  }

  const bookTitles = ids => ids.filter(b => D.books[b]).map(b =>
    `<a href="${link('book', b, '30k')}">${esc(D.books[b].title)}</a>`).join(', ');

  function sealedCard(e, href = true) {
    const books = e.books.filter(b => D.books[b]);
    const inner = `<div class="card-head"><span class="card-title">🔒 Sealed storyline</span><span class="date">${esc(e.date)}</span></div>
      <div class="sealed-note">${books.length ? `Revealed when you have read ${books.length > 1 ? 'one of ' : ''}${bookTitles(books)}.` : 'Not linked to a book yet.'}</div>`;
    return href
      ? `<div class="card sealed">${inner}<a class="peek" href="${link('event', e.id)}">Details</a></div>`
      : `<div class="card sealed">${inner}</div>`;
  }

  function eventCard(e, withBooks = true) {
    if (eventLocked(e)) return sealedCard(e);
    return `<div class="card">
      <div class="card-head"><a class="card-title" href="${link('event', e.id)}">${esc(e.name)}</a><span class="date">${esc(e.date)}</span></div>
      <p>${esc(e.desc)}</p>
      ${withBooks ? bookList(e.books) : ''}
    </div>`;
  }

  function otherEraHint(count, kind, id, what) {
    if (!count) return '';
    const o = other();
    return `<p class="era-hint">${what} in ${ERAS[o].short}: ${count} ${count === 1 ? 'event' : 'events'}.
      <a href="${link(kind, id, o)}">Switch to ${ERAS[o].short} →</a></p>`;
  }

  function sealedSummary(evs) {
    const n = evs.filter(eventLocked).length;
    return n ? `<p class="era-hint">🔒 ${n} ${n === 1 ? 'storyline is' : 'storylines are'} sealed until you read the books.</p>` : '';
  }

  function renderOverview() {
    setCrumbs([]);
    const evs = eraEvents(D.events);
    const worlds = Object.keys(D.planets).filter(p => planetHasContent(p)).length;
    const books = Object.keys(D.books).filter(b => bookInEra(b)).length;
    const sealed = evs.filter(eventLocked).length;
    let intro = 'Zoom in to see systems and their planets. Select a world to explore its storylines and the books set there. Switch between 30K and 40K at the top.';
    if (era === '30k') intro += ' Open the library to track the books you have read.';
    let html = `<h2>${ERAS[era].title}</h2>
      <div class="subtitle">${ERAS[era].sub}<br>${worlds} worlds · ${evs.length} events · ${books} books</div>
      ${era === '40k' && shield ? '<div class="era-box warn"><span class="era-tag">Spoilers</span> The 41st Millennium lies ten thousand years after the Horus Heresy, and its worlds reveal how the Heresy ended. Stay in 30K if you are still reading.</div>' : ''}
      <p>${intro}</p>
      ${era === '30k' && shield && sealed ? `<p class="era-hint">🛡 Spoiler shield on: ${evs.length - sealed} of ${evs.length} storylines revealed by the books you have read.</p>` : ''}
      <h3>Timeline</h3><div class="timeline">`;
    let group = null;
    evs.forEach(e => {
      if (e.era !== group) { group = e.era; html += `<div class="era">${esc(group)}</div>`; }
      if (eventLocked(e)) {
        html += `<a class="card sealed" href="${link('event', e.id)}">
          <div class="card-head"><span class="card-title">🔒 Sealed storyline</span><span class="date">${esc(e.date)}</span></div></a>`;
        return;
      }
      const where = e.planets.map(p => D.planets[p] && D.planets[p].name).filter(Boolean).join(', ');
      html += `<a class="card" href="${link('event', e.id)}">
        <div class="card-head"><span class="card-title">${esc(e.name)}</span><span class="date">${esc(e.date)}</span></div>
        <div class="subtitle" style="margin:4px 0 0">${esc(where)}</div></a>`;
    });
    if (!evs.length) html += '<div class="empty">No events recorded yet.</div>';
    html += `</div>`;
    panelBody.innerHTML = html;
  }

  // Type and texts of a world for the current era, honouring the spoiler shield
  function planetInfo(pid) {
    const p = D.planets[pid];
    if (era === '30k') {
      const safe = p.safe30k, full = p.era30k;
      if (planetLocked(pid)) return { type: (safe && safe.type) || 'World', desc: safe ? safe.desc : '', eraDesc: null, locked: true };
      return { type: (full && full.type) || (safe && safe.type) || p.type, desc: safe ? safe.desc : p.desc, eraDesc: full && full.desc, locked: false };
    }
    const e40 = p.era40k;
    return { type: (e40 && e40.type) || p.type, desc: p.desc, eraDesc: e40 && e40.desc, locked: false };
  }

  function renderSystem(s) {
    setCrumbs([[`#/${era}/`, segName(s.segmentum)], [link('system', s.id), `System ${s.name}`]]);
    const valid = s.planets.filter(p => D.planets[p]);
    const evs = eraEvents(D.events.filter(e => e.planets.some(p => valid.includes(p))));
    const otherCount = eraEvents(D.events.filter(e => e.planets.some(p => valid.includes(p))), other()).length;
    panelBody.innerHTML = `<h2>${esc(s.name)}</h2>
      <div class="subtitle">${esc(segName(s.segmentum))} · ${valid.length} ${valid.length === 1 ? 'world' : 'worlds'} recorded</div>
      <h3>Worlds</h3>
      ${valid.map(pid => {
        const p = D.planets[pid];
        const info = planetInfo(pid);
        const text = info.eraDesc || info.desc;
        return `<a class="card" href="${link('planet', pid)}" style="display:block">
          <div class="card-head"><span class="card-title">${esc(p.name)}</span><span class="date">${esc(info.type)}</span></div>
          ${text ? `<p>${esc(text)}</p>` : ''}</a>`;
      }).join('')}
      <h3>Storylines ${ERAS[era].short}</h3>
      ${evs.length ? evs.map(e => eventCard(e)).join('') : '<div class="empty">No events recorded for this era yet.</div>'}
      ${otherEraHint(otherCount, 'system', s.id, 'This system')}`;
  }

  function renderPlanet(pid) {
    const p = D.planets[pid];
    const s = planetSystem[pid];
    const info = planetInfo(pid);
    setCrumbs([
      [`#/${era}/`, segName(s && s.segmentum)],
      [s ? link('system', s.id) : `#/${era}/`, `System ${s ? s.name : '?'}`],
      [link('planet', pid), p.name]
    ]);
    const evs = eraEvents(eventsByPlanet[pid]);
    const otherCount = eraEvents(eventsByPlanet[pid], other()).length;
    const extraBooks = (p.books || []).filter(b => bookInEra(b) && !evs.some(e => e.books.includes(b)));
    const lex = `https://wh40k.lexicanum.com/wiki/${encodeURIComponent(p.name.replace(/ /g, '_'))}`;
    const fate = info.locked
      ? `<div class="era-box sealed-box"><span class="era-tag">🔒 ${ERAS[era].short}</span> This world's fate during the Heresy is sealed until you have read its storylines.
          <button type="button" class="link-btn" data-peek-planet="${esc(pid)}">Reveal anyway</button></div>`
      : (info.eraDesc ? `<div class="era-box"><span class="era-tag">${ERAS[era].short}</span> ${esc(info.eraDesc)}</div>` : '');
    panelBody.innerHTML = `<h2>${esc(p.name)}</h2>
      <div class="subtitle">${esc(info.type)} · ${s ? `<a href="${link('system', s.id)}">System ${esc(s.name)}</a>` : ''} · ${esc(segName(s && s.segmentum))}</div>
      ${info.desc ? `<p>${esc(info.desc)}</p>` : ''}
      ${fate}
      <h3>Storylines ${ERAS[era].short}</h3>
      ${evs.length ? evs.map(e => eventCard(e)).join('') : '<div class="empty">No events recorded for this era yet.</div>'}
      ${otherEraHint(otherCount, 'planet', pid, 'This world')}
      ${extraBooks.length ? `<h3>More books</h3>${bookList(extraBooks)}` : ''}
      ${info.locked ? '' : `<p style="margin-top:18px"><a href="${lex}" target="_blank" rel="noopener">Read more on Lexicanum ↗</a></p>`}`;
  }

  function renderEvent(e) {
    if (eventLocked(e)) {
      setCrumbs([[link('event', e.id), 'Sealed storyline']]);
      const books = e.books.filter(b => D.books[b]);
      panelBody.innerHTML = `<h2>🔒 Sealed storyline</h2>
        <div class="subtitle">${esc(e.date)} · ${esc(e.era)}</div>
        <p>This storyline is hidden by the spoiler shield.</p>
        ${books.length ? `<h3>Revealed by reading</h3>${bookList(books)}` : '<p class="era-hint">No book is linked to it yet.</p>'}
        <p style="margin-top:18px"><button type="button" class="btn-ghost" data-peek-event="${esc(e.id)}">Reveal anyway</button></p>`;
      return;
    }
    setCrumbs([[link('event', e.id), e.name]]);
    panelBody.innerHTML = `<h2>${esc(e.name)}</h2>
      <div class="subtitle">${esc(e.date)} · ${esc(e.era)}</div>
      <p>${esc(e.desc)}</p>
      <h3>Locations</h3>${planetChips(e.planets)}
      <h3>Books</h3>${bookList(e.books)}`;
  }

  function readButton(bid) {
    const r = isRead(bid);
    return `<button type="button" class="read-btn${r ? ' on' : ''}" data-read="${esc(bid)}" aria-pressed="${r}">${r ? '✓ Read' : 'Mark as read'}</button>`;
  }

  function renderBook(bid) {
    const b = D.books[bid];
    setCrumbs([[link('book', bid), b.title]]);
    const evs = eraEvents(eventsByBook[bid]);
    const locked = bookLocked(bid);
    const seriesLine = [b.number ? `${esc(b.series)} #${b.number}` : esc(b.series), esc(b.format), esc(b.year),
      b.pages ? `${b.pages} pages` : ''].filter(Boolean).join(' · ');
    const lex = `https://wh40k.lexicanum.com/wiki/Special:Search?search=${encodeURIComponent(b.title)}`;
    const summary = b.summary || b.synopsis;
    const earlier = b.number ? Object.keys(D.books).filter(k => D.books[k].series === b.series && D.books[k].number && D.books[k].number < b.number && !isRead(k)) : [];
    const contents = (b.contents || []).length ? `<h3>Contents</h3><ol class="contents">${b.contents.map(c =>
      `<li>${esc(c.title)} <span class="meta">${esc(c.author || '')}${c.format && c.format !== 'Short story' ? ' · ' + esc(c.format) : ''}</span></li>`).join('')}</ol>` : '';
    const related = (b.related || []).filter(r => D.books[r]);
    let body;
    if (locked) {
      body = `
        ${b.premise ? `<details class="premise"><summary>Show spoiler-free premise</summary><p>${esc(b.premise)}</p></details>` : ''}
        <div class="era-box sealed-box"><span class="era-tag">🔒</span> Summary, characters and storylines are sealed until you mark this book as read.
          <button type="button" class="link-btn" data-peek-book="${esc(bid)}">Reveal anyway</button></div>`;
    } else {
      body = `
        ${b.premise ? `<p class="premise-text">${esc(b.premise)}</p>` : ''}
        ${summary ? `<h3>Summary</h3><p>${esc(summary)}</p>` : ''}
        ${(b.characters || []).length ? `<h3>Characters</h3><ul class="characters">${b.characters.map(c => {
          const [name, ...role] = String(c).split(' – ');
          return `<li><b>${esc(name)}</b>${role.length ? ` <span class="meta">${esc(role.join(' – '))}</span>` : ''}</li>`;
        }).join('')}</ul>` : ''}
        <h3>Storylines</h3>
        ${evs.length ? evs.map(e => eventCard(e, false)).join('') : '<div class="empty">Not linked to any event.</div>'}`;
    }
    const back = era === '30k' && libBooks.includes(bid) ? '<button type="button" class="btn-ghost small back-lib" data-open-lib="1">‹ Library</button>' : '';
    panelBody.innerHTML = `${back}<h2>${esc(b.title)}</h2>
      <div class="subtitle">${esc(b.author)}<br>${seriesLine}</div>
      <div class="book-actions">${readButton(bid)}
        ${earlier.length && !isRead(bid) ? `<button type="button" class="btn-ghost" data-read-upto="${esc(bid)}">Also mark #1–${b.number - 1} as read</button>` : ''}</div>
      ${b.setting ? `<div class="era-box"><span class="era-tag">Set</span> ${esc(b.setting)}</div>` : ''}
      ${b.collected_in ? `<p class="era-hint">Also collected in ${D.books[b.collected_in] ? `<a href="${link('book', b.collected_in)}">${esc(D.books[b.collected_in].title)}</a>` : esc(b.collected_in)}.</p>` : ''}
      ${(b.legions || []).length ? `<h3>Legions &amp; factions</h3><div class="chips">${b.legions.map(l =>
        `<button type="button" class="chip" data-legion="${esc(l)}" title="Show all books with ${esc(l)}">${esc(l)}</button>`).join('')}</div>` : ''}
      ${body}
      <h3>Locations</h3>${planetChips(bookPlanets(bid))}
      ${contents}
      ${related.length ? `<h3>Related books</h3>${bookList(related)}` : ''}
      <p style="margin-top:18px"><a href="${lex}" target="_blank" rel="noopener">Find on Lexicanum ↗</a></p>`;
  }

  function renderFeature(id) {
    const f = featureById[id] || D.rift;
    setCrumbs([[link('feature', id), f.name]]);
    const note = id === 'rift' && era === '30k'
      ? '<p class="era-hint">The Great Rift does not exist yet in the 31st Millennium. It only opens after the Fall of Cadia (999.M41).</p>' : '';
    panelBody.innerHTML = `<h2>${esc(f.name)}</h2>
      <div class="subtitle">${id === 'rift' ? 'Warp rift' : 'Warp anomaly'}</div>
      <p>${esc(era === '30k' && f.safe30k ? f.safe30k : f.desc)}</p>${note}`;
  }

  // ---------- Search ----------
  const searchInput = document.getElementById('search');
  const resultsEl = document.getElementById('search-results');
  const norm = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const index = [];
  Object.entries(D.planets).forEach(([id, p]) => index.push({ kind: 'Planet', label: p.name, route: ['planet', id] }));
  D.systems.forEach(s => {
    const same = s.planets.length === 1 && D.planets[s.planets[0]] && D.planets[s.planets[0]].name === s.name;
    if (!same) index.push({ kind: 'System', label: s.name, route: ['system', s.id] });
  });
  D.events.forEach(e => index.push({ kind: `Event · ${ERAS[eventEra(e)].short}`, label: e.name, route: ['event', e.id], event: e }));
  Object.entries(D.books).forEach(([id, b]) => index.push({ kind: 'Book', label: b.title, extra: b.author + ' ' + b.series, route: ['book', id] }));
  D.features.forEach(f => index.push({ kind: 'Anomaly', label: f.name, route: ['feature', f.id] }));
  index.push({ kind: 'Anomaly', label: D.rift.name, extra: 'Great Rift', route: ['feature', 'rift'] });
  index.forEach(i => { i.key = norm(i.label + ' ' + (i.extra || '')); i.lkey = norm(i.label); });

  let results = [], active = -1;

  function renderResults() {
    if (!results.length) { resultsEl.hidden = true; return; }
    resultsEl.hidden = false;
    resultsEl.innerHTML = results.map((r, i) =>
      `<li role="option" data-i="${i}" class="${i === active ? 'active' : ''}"><span>${esc(r.label)}</span><span class="kind">${esc(r.kind)}</span></li>`).join('');
  }

  function choose(r) {
    if (!r) return;
    searchInput.value = '';
    results = []; active = -1;
    renderResults();
    searchInput.blur();
    navigate(link(r.route[0], r.route[1]));
  }

  searchInput.addEventListener('input', () => {
    const q = norm(searchInput.value.trim());
    active = -1;
    results = q ? index.filter(i => i.key.includes(q) && !(i.event && eventLocked(i.event)))
      .sort((a, b) => (b.lkey.startsWith(q) - a.lkey.startsWith(q)) || a.label.localeCompare(b.label))
      .slice(0, 14) : [];
    renderResults();
  });
  searchInput.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') { active = Math.min(results.length - 1, active + 1); renderResults(); e.preventDefault(); }
    else if (e.key === 'ArrowUp') { active = Math.max(0, active - 1); renderResults(); e.preventDefault(); }
    else if (e.key === 'Enter') choose(results[Math.max(0, active)]);
    else if (e.key === 'Escape') { searchInput.value = ''; results = []; renderResults(); }
  });
  resultsEl.addEventListener('mousedown', e => {
    const li = e.target.closest('li');
    if (li) { e.preventDefault(); choose(results[+li.dataset.i]); }
  });
  searchInput.addEventListener('blur', () => setTimeout(() => { resultsEl.hidden = true; }, 100));
  searchInput.addEventListener('focus', renderResults);

  // ---------- Horus Heresy library (30K) ----------
  const LIB_SERIES = [
    ['The Horus Heresy', 'Main series'],
    ['The Siege of Terra', 'The Siege of Terra'],
    ['The Horus Heresy: Primarchs', 'Primarchs'],
    ['The Horus Heresy: Characters', 'Characters']
  ];
  const libSeriesOf = b => (b.series || '').replace(/\s*\((Novella|Novelle)\)$/i, '');
  const libRank = Object.fromEntries(LIB_SERIES.map(([s], i) => [s, i]));
  const libBooks = Object.keys(D.books).filter(bid => libSeriesOf(D.books[bid]) in libRank);
  const $ = id => document.getElementById(id);
  const libEl = $('library');
  const libList = $('lib-list');
  const libToggle = $('lib-toggle');
  const libFilter = $('lib-filter');
  const libSeriesSel = $('lib-series');
  const libLegionSel = $('lib-legion');
  const libStatusSel = $('lib-status');
  const libSortBtns = [...libEl.querySelectorAll('[data-sort]')];
  let libOpen = store.get('lib-open') !== '0' && !isMobile();
  let libSort = store.get('lib-sort') === 'chrono' ? 'chrono' : 'series';
  let libActive = null;
  libSortBtns.forEach(b => b.setAttribute('aria-pressed', b.dataset.sort === libSort));

  LIB_SERIES.forEach(([s, label]) => {
    if (libBooks.some(bid => libSeriesOf(D.books[bid]) === s))
      libSeriesSel.insertAdjacentHTML('beforeend', `<option value="${esc(s)}">${esc(label)}</option>`);
  });
  const legionCount = {};
  libBooks.forEach(bid => (D.books[bid].legions || []).forEach(l => { legionCount[l] = (legionCount[l] || 0) + 1; }));
  Object.keys(legionCount).sort((a, b) => a.localeCompare(b)).forEach(l =>
    libLegionSel.insertAdjacentHTML('beforeend', `<option value="${esc(l)}">${esc(l)} (${legionCount[l]})</option>`));

  const bySeries = (a, b) => {
    const A = D.books[a], B = D.books[b];
    return (libRank[libSeriesOf(A)] - libRank[libSeriesOf(B)]) ||
      ((A.number || 999) - (B.number || 999)) || ((A.year || 0) - (B.year || 0)) || A.title.localeCompare(B.title);
  };

  function libFiltered() {
    const q = norm(libFilter.value.trim());
    const ser = libSeriesSel.value, leg = libLegionSel.value, st = libStatusSel.value;
    return libBooks.filter(bid => {
      const b = D.books[bid];
      if (ser && libSeriesOf(b) !== ser) return false;
      if (leg && !(b.legions || []).includes(leg)) return false;
      if (st === 'read' && !isRead(bid)) return false;
      if (st === 'unread' && isRead(bid)) return false;
      if (!q) return true;
      // Characters only count as searchable once the book is unlocked
      const chars = bookLocked(bid) ? [] : (b.characters || []);
      return norm([b.title, b.author, ...(b.legions || []), ...chars].join(' ')).includes(q);
    });
  }

  function libSorted(ids) {
    if (libSort === 'series') return ids.sort(bySeries);
    return ids.sort((a, b) => ((D.books[a].sort || 99999) - (D.books[b].sort || 99999)) || bySeries(a, b));
  }

  // Next unread book in reading order of the main series, then the others
  function nextUp() {
    return libBooks.filter(b => !isRead(b) && D.books[b].number).sort(bySeries)[0] || null;
  }

  function libBadge() {
    $('lib-badge').textContent = `${libBooks.filter(isRead).length}/${libBooks.length}`;
  }

  function libProgress() {
    const read = libBooks.filter(isRead).length;
    const pct = libBooks.length ? Math.round(read / libBooks.length * 100) : 0;
    $('lib-progress').innerHTML = `<div class="bar"><i style="width:${pct}%"></i></div>
      <span>${read} of ${libBooks.length} read</span>`;
    const nx = nextUp();
    $('lib-next').innerHTML = nx
      ? `Next up: <a href="${link('book', nx, '30k')}">${esc(D.books[nx].title)}</a> <span class="meta">${esc((LIB_SERIES[libRank[libSeriesOf(D.books[nx])]] || [])[1] || '')} #${D.books[nx].number}</span>`
      : (read ? 'You have read every numbered book. Ave Imperator!' : '');
    const sh = $('lib-shield');
    sh.setAttribute('aria-pressed', shield);
    sh.textContent = shield ? '🛡 Shield on' : '🛡 Shield off';
    sh.title = shield ? 'Spoiler shield on: content of unread books is hidden' : 'Spoiler shield off: everything is shown';
  }

  function libRender() {
    const ids = libSorted(libFiltered());
    const worlds = new Set();
    ids.forEach(bid => bookPlanets(bid).forEach(p => worlds.add(p)));
    $('lib-count').textContent =
      `${ids.length} of ${libBooks.length} books · ${worlds.size} ${worlds.size === 1 ? 'world' : 'worlds'} highlighted`;
    libProgress();
    let html = '', group = null;
    const groupTotals = {};
    if (libSort === 'series') ids.forEach(bid => {
      const g = libSeriesOf(D.books[bid]);
      groupTotals[g] = groupTotals[g] || [0, 0];
      groupTotals[g][1]++;
      if (isRead(bid)) groupTotals[g][0]++;
    });
    ids.forEach(bid => {
      const b = D.books[bid];
      const ser = libSeriesOf(b);
      const g = libSort === 'series' ? (LIB_SERIES[libRank[ser]] || [])[1] : null;
      if (g && g !== group) {
        group = g;
        const [r, t] = groupTotals[ser];
        html += `<div class="lib-group"><span>${esc(g)}</span><span class="meta">${r}/${t}</span></div>`;
      }
      const n = bookPlanets(bid).length;
      const lead = libSort === 'series' ? (b.number ? b.number : '·') : esc(b.setting || '?');
      const meta = [b.author, b.year, b.format && b.format !== 'Novel' ? b.format : ''].filter(Boolean).map(esc).join(' · ');
      const r = isRead(bid);
      html += `<div class="lib-item${r ? ' read' : ''}${bid === libActive ? ' active' : ''}" data-bid="${esc(bid)}">
        <button type="button" class="lib-check" data-read="${esc(bid)}" aria-pressed="${r}" title="${r ? 'Mark as unread' : 'Mark as read'}" aria-label="${r ? 'Mark as unread' : 'Mark as read'}: ${esc(b.title)}">${r ? '✓' : ''}</button>
        <a class="lib-book" href="${link('book', bid, '30k')}">
          <span class="lib-num${libSort === 'series' ? '' : ' wide'}">${lead}</span>
          <span class="lib-main"><span class="lib-title">${esc(b.title)}</span><span class="lib-meta">${meta}</span></span>
          <span class="lib-worlds" title="${n} ${n === 1 ? 'world' : 'worlds'} on the map">${n || ''}</span></a></div>`;
    });
    if (!ids.length) html = '<div class="empty" style="padding:12px 16px">No books match the filter.</div>';
    libList.innerHTML = html;
    libMark(worlds);
  }

  // Worlds of all listed books get a soft highlight
  function libMark(worlds) {
    svg.querySelectorAll('.lib').forEach(n => n.classList.remove('lib'));
    document.body.classList.toggle('lib-on', libVisible());
    if (!libVisible()) return;
    mark([...(worlds || [])], 'lib');
  }

  function libVisible() { return libOpen && era === '30k'; }

  function libSetOpen(open, persist = true) {
    libOpen = open;
    if (persist && !isMobile()) store.set('lib-open', open ? '1' : '0');
    libApply();
  }

  function libApply() {
    const vis = libVisible();
    libEl.hidden = !vis;
    libToggle.hidden = era !== '30k';
    libToggle.setAttribute('aria-expanded', vis);
    libToggle.classList.toggle('on', vis);
    if (vis) libRender(); else libMark(null);
    onResize();
    if (vis && isMobile()) {
      const act = libList.querySelector('.lib-item.active') || libList.querySelector('.lib-item:not(.read)');
      if (act) act.scrollIntoView({ block: 'center' });
    }
  }

  function libEraChanged() { libApply(); }

  function libSync(activeBid) {
    libActive = activeBid;
    libList.querySelectorAll('.lib-item').forEach(a => a.classList.toggle('active', a.dataset.bid === activeBid));
  }

  libToggle.addEventListener('click', () => libSetOpen(!libOpen));
  $('lib-close').addEventListener('click', () => libSetOpen(false));
  function libFilterLabel() {
    const n = [libFilter.value.trim(), libSeriesSel.value, libLegionSel.value, libStatusSel.value].filter(Boolean).length;
    const open = libEl.classList.contains('filters-open');
    $('lib-filters-toggle').textContent = `Filter & sort${n ? ` · ${n} active` : ''} ${open ? '▴' : '▾'}`;
    $('lib-filters-toggle').setAttribute('aria-expanded', open);
  }
  $('lib-filters-toggle').addEventListener('click', () => {
    libEl.classList.toggle('filters-open');
    libFilterLabel();
  });
  [libFilter, libSeriesSel, libLegionSel, libStatusSel].forEach(el => el.addEventListener('input', libFilterLabel));
  libFilter.addEventListener('input', libRender);
  [libSeriesSel, libLegionSel, libStatusSel].forEach(el => el.addEventListener('change', libRender));
  libSortBtns.forEach(btn => btn.addEventListener('click', () => {
    libSort = btn.dataset.sort;
    store.set('lib-sort', libSort);
    libSortBtns.forEach(b => b.setAttribute('aria-pressed', b === btn));
    libRender();
  }));
  $('lib-shield').addEventListener('click', () => {
    if (shield && !confirm('Turn off the spoiler shield? Summaries, characters and storylines of unread books will be shown.')) return;
    setShield(!shield);
  });
  // Hover preview: show a book's worlds without selecting it
  libList.addEventListener('mouseover', e => {
    const a = e.target.closest('.lib-item');
    svg.querySelectorAll('.preview').forEach(n => n.classList.remove('preview'));
    if (a) mark(bookPlanets(a.dataset.bid), 'preview');
  });
  libList.addEventListener('mouseleave', () => svg.querySelectorAll('.preview').forEach(n => n.classList.remove('preview')));
  libList.addEventListener('click', e => {
    if (e.target.closest('.lib-book') && isMobile()) libSetOpen(false, false);
  });

  // Export / import of the reading list
  $('lib-export').addEventListener('click', () => {
    const data = { app: 'galaxy-map-40k', read: [...readSet].sort(), exported: new Date().toISOString() };
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([JSON.stringify(data, null, 1)], { type: 'application/json' }));
    a.download = 'horus-heresy-reading-list.json';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 0);
  });
  $('lib-import').addEventListener('click', () => $('lib-import-file').click());
  $('lib-import-file').addEventListener('change', async e => {
    const f = e.target.files[0];
    e.target.value = '';
    if (!f) return;
    try {
      const data = JSON.parse(await f.text());
      const ids = (Array.isArray(data) ? data : data.read || []).filter(b => D.books[b]);
      if (!ids.length) { alert('No known books found in this file.'); return; }
      if (!confirm(`Import ${ids.length} read books? They are added to your current list.`)) return;
      setRead(ids, true);
    } catch (err) {
      alert('This file could not be read.');
    }
  });

  // Buttons inside the panel and the library: read toggles, reveals, Legion chips
  document.addEventListener('click', e => {
    const t = e.target.closest('[data-read],[data-read-upto],[data-peek-book],[data-peek-event],[data-peek-planet],[data-legion],[data-open-lib]');
    if (!t) return;
    e.preventDefault();
    if (t.dataset.read) setRead([t.dataset.read], !isRead(t.dataset.read));
    else if (t.dataset.readUpto) {
      const b = D.books[t.dataset.readUpto];
      setRead(Object.keys(D.books).filter(k => D.books[k].series === b.series && D.books[k].number && D.books[k].number <= b.number), true);
    } else if (t.dataset.peekBook) { peekBooks.add(t.dataset.peekBook); progressChanged(); }
    else if (t.dataset.peekEvent) { peekEvents.add(t.dataset.peekEvent); show(location.hash, { fly: true }); }
    else if (t.dataset.peekPlanet) { peekPlanets.add(t.dataset.peekPlanet); progressChanged(); }
    else if (t.dataset.openLib) libSetOpen(true, false);
    else if (t.dataset.legion) {
      libLegionSel.value = t.dataset.legion;
      libFilter.value = '';
      libSeriesSel.value = '';
      libStatusSel.value = '';
      if (!libOpen) libSetOpen(true); else libRender();
    }
  });

  // ---------- Sync across devices via a private GitHub Gist ----------
  // Not meant to be secure: the token lives in this browser and in the sync link.
  const SYNC_FILE = 'galaxy-map-reading.json';
  const TOKEN_URL = 'https://github.com/settings/tokens/new?scopes=gist&description=Galaxy%20Map%20reading%20sync';
  let sync = (() => { try { return JSON.parse(store.get('sync') || 'null'); } catch (e) { return null; } })();
  let syncState = { busy: false, last: Number(store.get('sync-last')) || 0, error: '' };
  let syncTimer = null;
  const syncEl = $('lib-sync'), syncStatusEl = $('lib-sync-status');

  async function gh(path, opt = {}, token = sync && sync.token) {
    const r = await fetch('https://api.github.com' + path, {
      ...opt,
      cache: 'no-store',
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: 'Bearer ' + token,
        ...(opt.body ? { 'Content-Type': 'application/json' } : {})
      }
    });
    if (!r.ok) {
      const msg = r.status === 401 ? 'token rejected' : r.status === 404 ? 'sync file not found' : `GitHub error ${r.status}`;
      throw new Error(msg);
    }
    return r.json();
  }

  const payload = () => JSON.stringify({ app: 'galaxy-map-40k', version: 1, updated: new Date().toISOString(), marks }, null, 1);

  async function syncPull() {
    const g = await gh('/gists/' + sync.gist);
    const f = g.files && g.files[SYNC_FILE];
    let data = {};
    if (f) {
      const content = f.truncated ? await (await fetch(f.raw_url, { cache: 'no-store' })).text() : f.content;
      try { data = JSON.parse(content); } catch (e) { data = {}; }
    }
    return mergeMarks(data.marks);
  }

  // Pull, merge, then write the merged list back
  async function syncNow() {
    if (!sync || syncState.busy) return;
    syncState.busy = true; syncState.error = '';
    renderSyncStatus();
    try {
      const changed = await syncPull();
      await gh('/gists/' + sync.gist, { method: 'PATCH', body: JSON.stringify({ files: { [SYNC_FILE]: { content: payload() } } }) });
      syncState.last = Date.now();
      store.set('sync-last', String(syncState.last));
      if (changed) progressChanged();
    } catch (err) {
      syncState.error = err.message || 'sync failed';
    }
    syncState.busy = false;
    renderSyncStatus();
  }
  syncSoon = () => {
    if (!sync) return;
    clearTimeout(syncTimer);
    syncTimer = setTimeout(syncNow, 1500);
  };

  // Connect with a token: reuse an existing sync gist of this account, or create one
  async function syncConnect(token, gistId) {
    token = token.trim();
    let gist = (gistId || '').trim();
    if (!gist) {
      const list = await gh('/gists?per_page=100', {}, token);
      const found = list.find(g => g.files && g.files[SYNC_FILE]);
      if (found) gist = found.id;
    }
    if (!gist) {
      const g = await gh('/gists', { method: 'POST', body: JSON.stringify({
        description: 'Galaxy Map 40K: Horus Heresy reading list', public: false,
        files: { [SYNC_FILE]: { content: payload() } } }) }, token);
      gist = g.id;
    }
    sync = { token, gist };
    store.set('sync', JSON.stringify(sync));
    await syncNow();
  }

  function syncLink() {
    const code = btoa(JSON.stringify({ t: sync.token, g: sync.gist })).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    return location.origin + location.pathname + '#sync=' + code;
  }

  function ago(t) {
    const s = Math.round((Date.now() - t) / 1000);
    if (s < 45) return 'just now';
    if (s < 3600) return `${Math.round(s / 60)} min ago`;
    if (s < 86400) return `${Math.round(s / 3600)} h ago`;
    return new Date(t).toLocaleDateString();
  }

  function renderSyncStatus() {
    if (!sync) { syncStatusEl.textContent = ''; return; }
    syncStatusEl.className = 'lib-sync-status' + (syncState.error ? ' err' : '');
    syncStatusEl.textContent = syncState.busy ? '☁ Syncing…'
      : syncState.error ? `☁ Sync problem: ${syncState.error}`
      : syncState.last ? `☁ Synced ${ago(syncState.last)}` : '☁ Sync on';
    if (!syncEl.hidden) renderSyncPanel();
  }

  function renderSyncPanel() {
    if (sync) {
      syncEl.innerHTML = `<p>Your reading list syncs through a private GitHub Gist. Open this link once on your other devices to connect them:</p>
        <div class="sync-row"><input type="text" readonly id="sync-link" value="${esc(syncLink())}" aria-label="Sync link">
          <button type="button" class="btn-ghost small" id="sync-copy">Copy</button></div>
        <div class="sync-row"><button type="button" class="btn-ghost small" id="sync-now">Sync now</button>
          <button type="button" class="btn-ghost small" id="sync-off">Disconnect this device</button></div>
        <p class="meta">The link contains your token: anyone with it can edit your gists. Revoke the token on GitHub to cut access.</p>`;
    } else {
      syncEl.innerHTML = `<p>Keep your reading list in step across devices with a private GitHub Gist.</p>
        <ol>
          <li><a href="${TOKEN_URL}" target="_blank" rel="noopener">Create a GitHub token ↗</a> with only the <b>gist</b> scope (and no expiry, if you like).</li>
          <li>Paste it here and connect. On your other devices, use the sync link shown afterwards.</li>
        </ol>
        <div class="sync-row"><input type="password" id="sync-token" placeholder="ghp_… or github_pat_…" autocomplete="off" aria-label="GitHub token">
          <button type="button" class="read-btn" id="sync-connect">Connect</button></div>
        <p class="meta" id="sync-msg"></p>`;
    }
  }

  $('lib-sync-btn').addEventListener('click', () => {
    syncEl.hidden = !syncEl.hidden;
    $('lib-sync-btn').setAttribute('aria-expanded', !syncEl.hidden);
    if (!syncEl.hidden) renderSyncPanel();
  });
  syncEl.addEventListener('click', async e => {
    const id = e.target.id;
    if (id === 'sync-connect') {
      const token = $('sync-token').value;
      if (!token.trim()) return;
      $('sync-msg').textContent = 'Connecting…';
      try { await syncConnect(token); renderSyncPanel(); }
      catch (err) { sync = null; store.set('sync', 'null'); $('sync-msg').textContent = `Could not connect: ${err.message}.`; }
    } else if (id === 'sync-copy') {
      const inp = $('sync-link');
      try { await navigator.clipboard.writeText(inp.value); e.target.textContent = 'Copied'; }
      catch (err) { inp.select(); }
    } else if (id === 'sync-now') syncNow();
    else if (id === 'sync-off') {
      if (!confirm('Disconnect this device? Your reading list stays here and in the gist.')) return;
      sync = null;
      store.set('sync', 'null');
      renderSyncStatus();
      renderSyncPanel();
    }
  });
  // Pull changes from other devices whenever the page comes back into view
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && sync && Date.now() - syncState.last > 20000) syncNow();
  });

  // A sync link (#sync=…) connects this device, then opens the library
  function consumeSyncLink() {
    const m = location.hash.match(/^#sync=([\w-]+)/);
    if (!m) return false;
    try {
      const b64 = m[1].replace(/-/g, '+').replace(/_/g, '/');
      const { t, g } = JSON.parse(atob(b64 + '==='.slice((b64.length + 3) % 4)));
      if (t && g) { sync = { token: t, gist: g }; store.set('sync', JSON.stringify(sync)); }
    } catch (e) { /* ignore a broken link */ }
    history.replaceState(null, '', location.pathname + '#/30k/');
    return true;
  }

  // Re-render everything that depends on reading progress
  listeners.push(() => {
    recolor();
    libBadge();
    if (libVisible()) libRender();
    const scroll = panelBody.scrollTop;
    show(location.hash, { fly: false, keepSheet: true });
    panelBody.scrollTop = scroll;
  });

  // ---------- Data validation ----------
  function validateData() {
    const warn = m => console.warn('[Data check]', m);
    const seen = new Set();
    D.systems.forEach(s => {
      if (seen.has(s.id)) warn(`Duplicate system ID: ${s.id}`);
      seen.add(s.id);
      if (!segById[s.segmentum]) warn(`System ${s.id}: unknown segmentum "${s.segmentum}"`);
      s.planets.forEach(p => { if (!D.planets[p]) warn(`System ${s.id}: unknown planet "${p}"`); });
    });
    Object.entries(D.planets).forEach(([id, p]) => {
      if (!planetSystem[id]) warn(`Planet ${id} is not assigned to any system`);
      (p.books || []).forEach(b => { if (!D.books[b]) warn(`Planet ${id}: unknown book "${b}"`); });
    });
    D.events.forEach(e => {
      e.planets.forEach(p => { if (!D.planets[p]) warn(`Event ${e.id}: unknown planet "${p}"`); });
      e.books.forEach(b => { if (!D.books[b]) warn(`Event ${e.id}: unknown book "${b}"`); });
    });
  }

  // ---------- Start ----------
  measure();
  const fromLink = consumeSyncLink();
  const start = parse(location.hash);
  era = start.era || '40k';
  libBadge();
  libFilterLabel();
  renderSyncStatus();
  if (sync) syncNow();
  if (fromLink && sync) { libOpen = true; syncEl.hidden = false; }
  applyEra();
  setView(0, 0, kFit);
  show(location.hash, { fly: !!start.kind });
})();
