(() => {
  'use strict';

  const D = window.WH40K_DATA;
  const NS = 'http://www.w3.org/2000/svg';
  const svg = document.getElementById('map');
  const panel = document.getElementById('panel');
  const panelBody = document.getElementById('panel-body');
  const crumbs = document.getElementById('crumbs');

  // ---------- Zoomstufen (Pixel pro Welteinheit) ----------
  const K_ORBIT_START = 2.2;  // ab hier werden Planetenbahnen eingeblendet
  const K_ORBIT_FULL = 3.2;   // ab hier voll sichtbar
  const K_SYSTEM = 6;         // Zoom beim Anwählen eines Systems
  const K_MAX = 18;
  const GALAXY_R = 1050;

  // ---------- Indizes ----------
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
  const planetsByBook = {};
  Object.entries(D.planets).forEach(([pid, p]) =>
    (p.books || []).forEach(b => (planetsByBook[b] = planetsByBook[b] || []).push(pid)));

  validateData();

  // ---------- Hilfsfunktionen ----------
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const isMobile = () => window.matchMedia('(max-width: 760px)').matches;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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

  function smoothPath(pts) { // Catmull-Rom -> kubische Bézier
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
    const t = type.toLowerCase();
    if (t.includes('zerstört') || t.includes('verwüstet')) return '#6b2a24';
    if (t.includes('thron')) return '#e8c25a';
    if (t.includes('schmiede')) return '#c4502e';
    if (t.includes('festung')) return '#8a8f99';
    if (t.includes('todes') || t.includes('eis')) return '#bfe0f0';
    if (t.includes('wald')) return '#3f8a4a';
    if (t.includes('wüste')) return '#d2b071';
    if (t.includes('makropol')) return '#9a8570';
    return '#7fa7d9';
  }

  // ---------- SVG-Aufbau ----------
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
  const scalers = []; // Funktionen, die bei Zoomänderung Pixelgrössen nachführen

  drawGalaxy();
  drawSegmentums();
  drawRift();
  drawFeatures();
  const systemEls = {};
  const planetEls = {};
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
        const c = el('circle', {
          cx: (Math.cos(th) * r).toFixed(1),
          cy: (Math.sin(th) * r).toFixed(1),
          r: (0.5 + rand() * 1.8).toFixed(2),
          fill: rand() < 0.15 ? '#ffd9a8' : (rand() < 0.3 ? '#b8ccff' : '#f4f1ff'),
          'fill-opacity': (0.25 + rand() * 0.6).toFixed(2)
        });
        frag.appendChild(c);
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
    const g = el('g', { 'data-route': '#/feature/rift' }, world);
    const d = smoothPath(r.points);
    el('path', { d, class: 'rift', stroke: '#a14ad6', 'stroke-opacity': .12, 'stroke-width': 70 }, g);
    el('path', { d, class: 'rift', stroke: '#b03fbf', 'stroke-opacity': .25, 'stroke-width': 30 }, g);
    el('path', { d, id: 'rift-path', class: 'rift', stroke: '#e3a6ff', 'stroke-opacity': .7, 'stroke-width': 4 }, g);
    // Beschriftung folgt dem Riss
    const label = el('text', { class: 'rift-label' }, g);
    const tp = el('textPath', { href: '#rift-path', startOffset: '30%' }, label);
    tp.textContent = r.name;
    scalers.push(k => {
      label.setAttribute('dy', -16 / k);
      label.setAttribute('font-size', 14 / k);
      label.setAttribute('stroke-width', 3 / k);
    });
  }

  function drawFeatures() {
    D.features.forEach(f => {
      const g = el('g', { class: 'feature', 'data-route': `#/feature/${f.id}`, transform: `translate(${f.x},${f.y})` }, world);
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
        'data-route': `#/system/${s.id}`
      }, layer);
      systemEls[s.id] = g;

      // Planetenbahnen (nur bei starkem Zoom sichtbar)
      const orbits = el('g', { class: 'orbits' }, g);
      el('circle', { r: 2.2, class: 'star', fill: 'url(#g-star)' }, orbits);
      s.planets.forEach((pid, i) => {
        const p = D.planets[pid];
        if (!p) return;
        const R = 7 + i * 6;
        el('circle', { r: R, class: 'orbit', 'vector-effect': 'non-scaling-stroke' }, orbits);
        const a = hashAngle(pid);
        const px = Math.cos(a) * R, py = Math.sin(a) * R;
        const pg = el('g', { class: 'planet', 'data-route': `#/planet/${pid}` }, orbits);
        const ring = el('circle', { cx: px, cy: py, class: 'ring', 'vector-effect': 'non-scaling-stroke', 'stroke-width': 2 }, pg);
        const body = el('circle', { cx: px, cy: py, class: 'body', fill: planetColor(p.type), 'vector-effect': 'non-scaling-stroke' }, pg);
        const label = el('text', { class: 'planet-label' }, pg);
        label.textContent = p.name;
        planetEls[pid] = pg;
        scalers.push(k => {
          body.setAttribute('r', 6 / k);
          ring.setAttribute('r', 10 / k);
          label.setAttribute('x', px + 13 / k);
          label.setAttribute('y', py + 4 / k);
          label.setAttribute('font-size', 12 / k);
          label.setAttribute('stroke-width', 3 / k);
        });
      });

      const halo = el('circle', { class: 'sys-halo', 'vector-effect': 'non-scaling-stroke', 'stroke-width': 1.5 }, g);
      const dot = el('circle', { class: 'sys-dot' }, g);
      const label = el('text', { class: 'sys-label', 'text-anchor': 'middle' }, g);
      label.textContent = s.name;

      scalers.push(k => {
        const o = clamp((k - K_ORBIT_START) / (K_ORBIT_FULL - K_ORBIT_START), 0, 1);
        orbits.style.opacity = o;
        orbits.style.display = o === 0 ? 'none' : '';
        orbits.style.pointerEvents = o > 0.5 ? '' : 'none';
        dot.style.display = o >= 1 ? 'none' : '';
        const outer = s.planets.length ? 7 + (s.planets.length - 1) * 6 : 0;
        halo.setAttribute('r', o >= 1 ? outer + 14 / k : (s.major ? 10 : 8) / k);
        dot.setAttribute('r', (s.major ? 5.5 : 4) / k);
        label.setAttribute('y', o >= 1 ? -(outer + 22 / k) : -13 / k);
        label.setAttribute('font-size', (s.major ? 14 : 12.5) / k);
        label.setAttribute('stroke-width', 3 / k);
      });
    });
  }

  // ---------- Ansicht / Zoom ----------
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
    if (isMobile() && !panel.classList.contains('collapsed')) h = Math.max(H * 0.35, H - panel.offsetHeight);
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

  // ---------- Eingabe: Maus, Touch, Rad ----------
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
        if (node) navigate(node.getAttribute('data-route'));
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
  document.getElementById('zoom-reset').addEventListener('click', () => navigate('#/'));

  window.addEventListener('resize', () => {
    const c = center();
    measure();
    setView(c.x, c.y, clamp(view.k, kMin(), K_MAX));
  });

  // Mobil: Panel ein-/ausklappen
  document.getElementById('panel-handle').addEventListener('click', () => {
    panel.classList.toggle('collapsed');
    document.body.classList.toggle('panel-collapsed', panel.classList.contains('collapsed'));
  });

  // ---------- Routing ----------
  function navigate(hash) {
    if (location.hash === hash || (hash === '#/' && !location.hash)) show(hash);
    else location.hash = hash;
  }

  window.addEventListener('hashchange', () => show(location.hash));

  function parse(hash) {
    const [, kind, id] = (hash || '').replace(/^#/, '').split('/');
    return { kind: kind || '', id: id ? decodeURIComponent(id) : '' };
  }

  function clearMarks() {
    svg.querySelectorAll('.hl, .selected').forEach(n => n.classList.remove('hl', 'selected'));
  }

  function mark(planetIds, cls) {
    planetIds.forEach(pid => {
      planetEls[pid] && planetEls[pid].classList.add(cls);
      const s = planetSystem[pid];
      s && systemEls[s.id] && systemEls[s.id].classList.add(cls);
    });
  }

  function show(hash, opts = {}) {
    const { kind, id } = parse(hash);
    clearMarks();
    if (isMobile()) {
      panel.classList.remove('collapsed');
      document.body.classList.remove('panel-collapsed');
    }
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
      mark(e.planets, 'hl');
      renderEvent(e);
      if (fly) fitSystems(e.planets.map(p => planetSystem[p]));
    } else if (kind === 'book' && D.books[id]) {
      const pids = bookPlanets(id);
      mark(pids, 'hl');
      renderBook(id);
      if (fly) fitSystems([...new Set(pids.map(p => planetSystem[p]))]);
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
  }

  function bookPlanets(bid) {
    const set = new Set(planetsByBook[bid] || []);
    (eventsByBook[bid] || []).forEach(e => e.planets.forEach(p => set.add(p)));
    return [...set];
  }

  // ---------- Panel-Inhalte ----------
  function setCrumbs(parts) {
    crumbs.innerHTML = [['#/', 'Galaxie'], ...parts]
      .map(([href, label], i, arr) => i === arr.length - 1 && arr.length > 1
        ? `<span>${esc(label)}</span>`
        : `<a href="${href}">${esc(label)}</a>`)
      .join(' › ');
  }

  const segName = id => (segById[id] || {}).name || '';

  function bookItem(bid) {
    const b = D.books[bid];
    if (!b) return '';
    return `<li><a href="#/book/${bid}">${esc(b.title)}</a>
      <div class="meta">${esc(b.author)} · ${esc(b.series)} · ${esc(b.year)}</div></li>`;
  }

  function bookList(ids, emptyText = 'Noch keine Bücher erfasst.') {
    return ids.length
      ? `<ul class="books">${ids.map(bookItem).join('')}</ul>`
      : `<div class="empty">${emptyText}</div>`;
  }

  function planetChips(ids) {
    return `<div class="chips">${ids.filter(p => D.planets[p]).map(p =>
      `<a class="chip" href="#/planet/${p}">${esc(D.planets[p].name)}</a>`).join('')}</div>`;
  }

  function eventCard(e, withBooks = true) {
    return `<div class="card">
      <div class="card-head"><a class="card-title" href="#/event/${e.id}">${esc(e.name)}</a><span class="date">${esc(e.date)}</span></div>
      <p>${esc(e.desc)}</p>
      ${withBooks ? bookList(e.books) : ''}
    </div>`;
  }

  function renderOverview() {
    setCrumbs([]);
    let html = `<h2>Die Galaxie</h2>
      <div class="subtitle">${Object.keys(D.planets).length} Welten · ${D.events.length} Ereignisse · ${Object.keys(D.books).length} Bücher</div>
      <p>Zoome hinein, um Systeme und ihre Planeten zu sehen. Wähle eine Welt, um ihre Handlungsstränge und die passenden Bücher zu entdecken.</p>
      <h3>Zeitleiste</h3><div class="timeline">`;
    let era = null;
    D.events.forEach(e => {
      if (e.era !== era) { era = e.era; html += `<div class="era">${esc(era)}</div>`; }
      const where = e.planets.map(p => D.planets[p] && D.planets[p].name).filter(Boolean).join(', ');
      html += `<a class="card" href="#/event/${e.id}">
        <div class="card-head"><span class="card-title">${esc(e.name)}</span><span class="date">${esc(e.date)}</span></div>
        <div class="subtitle" style="margin:4px 0 0">${esc(where)}</div></a>`;
    });
    html += `</div>`;
    panelBody.innerHTML = html;
  }

  function renderSystem(s) {
    setCrumbs([['#/', segName(s.segmentum)], [`#/system/${s.id}`, `System ${s.name}`]]);
    const evs = D.events.filter(e => e.planets.some(p => s.planets.includes(p)));
    panelBody.innerHTML = `<h2>${esc(s.name)}</h2>
      <div class="subtitle">${esc(segName(s.segmentum))} · ${s.planets.length} ${s.planets.length === 1 ? 'Welt' : 'Welten'} erfasst</div>
      <h3>Welten</h3>
      ${s.planets.filter(p => D.planets[p]).map(pid => {
        const p = D.planets[pid];
        return `<a class="card" href="#/planet/${pid}" style="display:block">
          <div class="card-head"><span class="card-title">${esc(p.name)}</span><span class="date">${esc(p.type)}</span></div>
          <p>${esc(p.desc)}</p></a>`;
      }).join('')}
      <h3>Handlungsstränge</h3>
      ${evs.length ? evs.map(e => eventCard(e)).join('') : '<div class="empty">Noch keine Ereignisse erfasst.</div>'}`;
  }

  function renderPlanet(pid) {
    const p = D.planets[pid];
    const s = planetSystem[pid];
    setCrumbs([
      ['#/', segName(s && s.segmentum)],
      [`#/system/${s ? s.id : ''}`, `System ${s ? s.name : '?'}`],
      [`#/planet/${pid}`, p.name]
    ]);
    const evs = eventsByPlanet[pid] || [];
    const lex = `https://wh40k.lexicanum.com/wiki/${encodeURIComponent(p.name.replace(/ /g, '_'))}`;
    panelBody.innerHTML = `<h2>${esc(p.name)}</h2>
      <div class="subtitle">${esc(p.type)} · ${s ? `<a href="#/system/${s.id}">System ${esc(s.name)}</a>` : ''} · ${esc(segName(s && s.segmentum))}</div>
      <p>${esc(p.desc)}</p>
      <h3>Handlungsstränge</h3>
      ${evs.length ? evs.map(e => eventCard(e)).join('') : '<div class="empty">Noch keine Ereignisse erfasst.</div>'}
      ${p.books && p.books.length ? `<h3>Weitere Bücher</h3>${bookList(p.books)}` : ''}
      <p style="margin-top:18px"><a href="${lex}" target="_blank" rel="noopener">Auf Lexicanum nachlesen ↗</a></p>`;
  }

  function renderEvent(e) {
    setCrumbs([[`#/event/${e.id}`, e.name]]);
    panelBody.innerHTML = `<h2>${esc(e.name)}</h2>
      <div class="subtitle">${esc(e.date)} · ${esc(e.era)}</div>
      <p>${esc(e.desc)}</p>
      <h3>Schauplätze</h3>${planetChips(e.planets)}
      <h3>Bücher</h3>${bookList(e.books)}`;
  }

  function renderBook(bid) {
    const b = D.books[bid];
    setCrumbs([[`#/book/${bid}`, b.title]]);
    const evs = eventsByBook[bid] || [];
    panelBody.innerHTML = `<h2>${esc(b.title)}</h2>
      <div class="subtitle">${esc(b.author)} · ${esc(b.series)} · ${esc(b.year)}</div>
      <h3>Handlungsstränge</h3>
      ${evs.length ? evs.map(e => eventCard(e, false)).join('') : '<div class="empty">Keinem Ereignis zugeordnet.</div>'}
      <h3>Schauplätze</h3>${planetChips(bookPlanets(bid))}`;
  }

  function renderFeature(id) {
    const f = featureById[id] || D.rift;
    setCrumbs([[`#/feature/${id}`, f.name]]);
    panelBody.innerHTML = `<h2>${esc(f.name)}</h2>
      <div class="subtitle">${id === 'rift' ? 'Warp-Riss' : 'Warp-Anomalie'}</div>
      <p>${esc(f.desc)}</p>`;
  }

  // ---------- Suche ----------
  const searchInput = document.getElementById('search');
  const resultsEl = document.getElementById('search-results');
  const norm = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const index = [];
  Object.entries(D.planets).forEach(([id, p]) => index.push({ kind: 'Planet', label: p.name, hash: `#/planet/${id}` }));
  D.systems.forEach(s => {
    const same = s.planets.length === 1 && D.planets[s.planets[0]] && D.planets[s.planets[0]].name === s.name;
    if (!same) index.push({ kind: 'System', label: s.name, hash: `#/system/${s.id}` });
  });
  D.events.forEach(e => index.push({ kind: 'Ereignis', label: e.name, hash: `#/event/${e.id}` }));
  Object.entries(D.books).forEach(([id, b]) => index.push({ kind: 'Buch', label: b.title, extra: b.author + ' ' + b.series, hash: `#/book/${id}` }));
  D.features.forEach(f => index.push({ kind: 'Anomalie', label: f.name, hash: `#/feature/${f.id}` }));
  index.push({ kind: 'Anomalie', label: D.rift.name, extra: 'Großer Riss', hash: '#/feature/rift' });
  index.forEach(i => { i.key = norm(i.label + ' ' + (i.extra || '')); i.lkey = norm(i.label); });

  let results = [], active = -1;

  function renderResults() {
    if (!results.length) { resultsEl.hidden = true; return; }
    resultsEl.hidden = false;
    resultsEl.innerHTML = results.map((r, i) =>
      `<li role="option" data-i="${i}" class="${i === active ? 'active' : ''}"><span>${esc(r.label)}</span><span class="kind">${r.kind}</span></li>`).join('');
  }

  function choose(r) {
    if (!r) return;
    searchInput.value = '';
    results = []; active = -1;
    renderResults();
    searchInput.blur();
    navigate(r.hash);
  }

  searchInput.addEventListener('input', () => {
    const q = norm(searchInput.value.trim());
    active = -1;
    results = q ? index.filter(i => i.key.includes(q))
      .sort((a, b) => (b.lkey.startsWith(q) - a.lkey.startsWith(q)) || a.label.localeCompare(b.label))
      .slice(0, 12) : [];
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

  // ---------- Datenprüfung ----------
  function validateData() {
    const warn = m => console.warn('[Datenprüfung]', m);
    D.systems.forEach(s => {
      if (!segById[s.segmentum]) warn(`System ${s.id}: unbekanntes Segmentum "${s.segmentum}"`);
      s.planets.forEach(p => { if (!D.planets[p]) warn(`System ${s.id}: unbekannter Planet "${p}"`); });
    });
    Object.entries(D.planets).forEach(([id, p]) => {
      if (!planetSystem[id]) warn(`Planet ${id} ist keinem System zugeordnet`);
      (p.books || []).forEach(b => { if (!D.books[b]) warn(`Planet ${id}: unbekanntes Buch "${b}"`); });
    });
    D.events.forEach(e => {
      e.planets.forEach(p => { if (!D.planets[p]) warn(`Ereignis ${e.id}: unbekannter Planet "${p}"`); });
      e.books.forEach(b => { if (!D.books[b]) warn(`Ereignis ${e.id}: unbekanntes Buch "${b}"`); });
    });
  }

  // ---------- Start ----------
  measure();
  setView(0, 0, kFit);
  show(location.hash, { fly: !!location.hash });
})();
