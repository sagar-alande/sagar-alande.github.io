/* Site-wide motion: page transitions, nav, scroll progress, reveals, split headlines,
   cursor follower, card spotlight + tilt, magnetic buttons, counters, typed text. */
(function () {
  var doc = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* Cards inside deep-dive pages get the same reveal + spotlight treatment as the main pages. */
  var AUTO_CARDS = [
    '.artifact-card', '.mm-card', '.mm-stat', '.content-card', '.hero-section', '.stat-card',
    '.action-card', '.value-panel', '.impact-card', '.reflection-card', '.roadmap-block',
    '.newsletter-hero', '.reflection-panel', '.reflection-box', '.sub-block', '.summary-box',
    '.comparison-column', '.framework-box'
  ].join(',');

  function ready(fn) {
    if (document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    var body = document.body;

    /* ---------- Split headlines into words ---------- */
    document.querySelectorAll('[data-split]').forEach(function (el) {
      var i = 0;
      (function walk(node) {
        Array.prototype.slice.call(node.childNodes).forEach(function (child) {
          if (child.nodeType === 3) {
            var frag = document.createDocumentFragment();
            child.textContent.split(/(\s+)/).forEach(function (part) {
              if (!part) return;
              if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
              var w = document.createElement('span'); w.className = 'w';
              var inner = document.createElement('span'); inner.textContent = part; inner.style.setProperty('--i', i++);
              w.appendChild(inner); frag.appendChild(w);
            });
            node.replaceChild(frag, child);
          } else if (child.nodeType === 1 && !child.classList.contains('w')) {
            if (child.matches('.grad-text, .wave, br')) {
              if (child.tagName === 'BR') return;
              var w = document.createElement('span'); w.className = 'w';
              var inner = document.createElement('span'); inner.style.setProperty('--i', i++);
              child.parentNode.insertBefore(w, child); inner.appendChild(child); w.appendChild(inner);
            } else { walk(child); }
          }
        });
      })(el);
      el.classList.add('split');
    });

    /* ---------- Auto-tag deep-dive cards ---------- */
    document.querySelectorAll(AUTO_CARDS).forEach(function (el) {
      if (!el.hasAttribute('data-reveal')) el.setAttribute('data-reveal', '');
      el.classList.add('spotlight');
    });
    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      if (el.style.getPropertyValue('--d')) return;
      var sibs = Array.prototype.filter.call(el.parentNode.children, function (c) { return c.hasAttribute('data-reveal'); });
      var idx = sibs.indexOf(el);
      if (sibs.length > 1 && idx > 0) el.style.setProperty('--d', Math.min(idx, 6) * 0.08 + 's');
    });

    /* ---------- Reveal on scroll ---------- */
    var revealTargets = document.querySelectorAll('[data-reveal], .split');
    if (reduce || !('IntersectionObserver' in window)) {
      revealTargets.forEach(function (el) { el.classList.add('is-in'); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
      revealTargets.forEach(function (el) { io.observe(el); });
    }

    /* ---------- Nav: scrolled state, hide on scroll down, mobile toggle ---------- */
    var nav = document.querySelector('[data-nav]');
    var toggle = document.querySelector('.nav-toggle');
    var progress = document.querySelector('.scroll-progress');
    var lastY = window.scrollY;
    function onScroll() {
      var y = window.scrollY;
      if (nav) {
        nav.classList.toggle('is-scrolled', y > 20);
        nav.classList.toggle('is-hidden', y > lastY && y > 400 && !doc.classList.contains('nav-open'));
      }
      if (progress) {
        var max = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.setProperty('--p', max > 0 ? (y / max).toFixed(4) : 0);
      }
      lastY = y;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (toggle) {
      toggle.addEventListener('click', function () {
        var open = doc.classList.toggle('nav-open');
        toggle.setAttribute('aria-expanded', String(open));
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && doc.classList.contains('nav-open')) { doc.classList.remove('nav-open'); toggle.setAttribute('aria-expanded', 'false'); toggle.focus(); }
      });
    }

    /* ---------- Back to top ---------- */
    document.querySelectorAll('[data-top]').forEach(function (b) {
      b.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); });
    });

    /* ---------- Counters ---------- */
    var counters = document.querySelectorAll('[data-count]');
    function runCount(el) {
      var end = parseFloat(el.getAttribute('data-count'));
      if (reduce) { el.textContent = end; return; }
      var start = performance.now(), dur = 1600;
      (function tick(now) {
        var t = Math.min(1, (now - start) / dur), eased = 1 - Math.pow(1 - t, 4);
        el.textContent = Math.round(end * eased);
        if (t < 1) requestAnimationFrame(tick);
      })(start);
    }
    if ('IntersectionObserver' in window) {
      var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { runCount(e.target); cio.unobserve(e.target); } });
      }, { threshold: 0.6 });
      counters.forEach(function (c) { cio.observe(c); });
    } else counters.forEach(runCount);

    /* ---------- Typed rotating text ---------- */
    document.querySelectorAll('[data-typed]').forEach(function (el) {
      var words = el.getAttribute('data-typed').split('|');
      if (reduce) { el.textContent = words[0]; return; }
      var wi = 0, ci = 0, deleting = false;
      (function step() {
        var word = words[wi];
        ci += deleting ? -1 : 1;
        el.textContent = word.slice(0, ci);
        var delay = deleting ? 38 : 75;
        if (!deleting && ci === word.length) { deleting = true; delay = 1700; }
        else if (deleting && ci === 0) { deleting = false; wi = (wi + 1) % words.length; delay = 300; }
        setTimeout(step, delay);
      })();
    });

    /* ---------- Spotlight (cursor-follow glow on cards) ---------- */
    document.addEventListener('pointermove', function (e) {
      var card = e.target.closest && e.target.closest('.spotlight');
      if (!card) return;
      var r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    }, { passive: true });

    if (finePointer && !reduce) {
      /* ---------- Tilt ---------- */
      document.querySelectorAll('[data-tilt]').forEach(function (el) {
        var max = parseFloat(el.getAttribute('data-tilt')) || 6;
        el.addEventListener('pointermove', function (e) {
          var r = el.getBoundingClientRect();
          var x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
          el.style.setProperty('--rx', (-y * max).toFixed(2) + 'deg');
          el.style.setProperty('--ry', (x * max).toFixed(2) + 'deg');
        });
        el.addEventListener('pointerleave', function () { el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg'); });
      });

      /* ---------- Magnetic buttons ---------- */
      document.querySelectorAll('[data-magnetic]').forEach(function (el) {
        el.addEventListener('pointermove', function (e) {
          var r = el.getBoundingClientRect();
          var x = e.clientX - r.left - r.width / 2, y = e.clientY - r.top - r.height / 2;
          el.style.transform = 'translate(' + (x * 0.25).toFixed(1) + 'px,' + (y * 0.35).toFixed(1) + 'px)';
        });
        el.addEventListener('pointerleave', function () { el.style.transform = ''; });
      });

      /* ---------- Cursor follower ---------- */
      var dot = document.querySelector('.cursor-dot'), ring = document.querySelector('.cursor-ring');
      if (dot && ring) {
        var mx = -100, my = -100, rx = -100, ry = -100;
        document.addEventListener('pointermove', function (e) {
          mx = e.clientX; my = e.clientY;
          dot.style.transform = 'translate(' + mx + 'px,' + my + 'px)';
          doc.classList.add('has-cursor');
        }, { passive: true });
        document.addEventListener('pointerleave', function () { doc.classList.remove('has-cursor'); });
        document.addEventListener('pointerover', function (e) {
          ring.classList.toggle('is-hover', !!(e.target.closest && e.target.closest('a, button, [role="button"], summary, input, .spotlight')));
        });
        (function loop() {
          rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
          ring.style.transform = 'translate(' + rx.toFixed(1) + 'px,' + ry.toFixed(1) + 'px)';
          requestAnimationFrame(loop);
        })();
      }
    }

    /* ---------- Network canvas (home hero): drifting nodes that link up and react to the cursor ---------- */
    document.querySelectorAll('canvas[data-network]').forEach(function (cv) {
      var ctx = cv.getContext('2d'), dpr = Math.min(window.devicePixelRatio || 1, 2);
      var pts = [], w = 0, h = 0, mouse = { x: -999, y: -999 }, visible = true;
      function resize() {
        var r = cv.getBoundingClientRect(); w = r.width; h = r.height;
        cv.width = w * dpr; cv.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        var n = Math.round(Math.min(90, w * h / 14000));
        pts = [];
        for (var i = 0; i < n; i++) pts.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35 });
      }
      resize();
      window.addEventListener('resize', resize);
      cv.parentElement.addEventListener('pointermove', function (e) { var r = cv.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
      cv.parentElement.addEventListener('pointerleave', function () { mouse.x = mouse.y = -999; });
      if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { visible = es[0].isIntersecting; }).observe(cv);
      function frame() {
        if (visible) {
          ctx.clearRect(0, 0, w, h);
          for (var i = 0; i < pts.length; i++) {
            var p = pts[i];
            if (!reduce) { p.x += p.vx; p.y += p.vy; }
            if (p.x < 0 || p.x > w) p.vx *= -1;
            if (p.y < 0 || p.y > h) p.vy *= -1;
            var dm = Math.hypot(p.x - mouse.x, p.y - mouse.y);
            if (dm < 140 && !reduce) { p.x += (p.x - mouse.x) / dm * 0.6; p.y += (p.y - mouse.y) / dm * 0.6; }
            for (var j = i + 1; j < pts.length; j++) {
              var q = pts[j], d = Math.hypot(p.x - q.x, p.y - q.y);
              if (d < 130) {
                ctx.strokeStyle = 'rgba(129,140,248,' + (0.22 * (1 - d / 130)).toFixed(3) + ')';
                ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
              }
            }
            ctx.fillStyle = dm < 140 ? 'rgba(34,211,238,.95)' : 'rgba(186,196,255,.55)';
            ctx.beginPath(); ctx.arc(p.x, p.y, dm < 140 ? 2.2 : 1.5, 0, Math.PI * 2); ctx.fill();
          }
        }
        requestAnimationFrame(frame);
      }
      frame();
    });

    /* ---------- Page transitions ---------- */
    document.addEventListener('click', function (e) {
      if (reduce || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      var a = e.target.closest && e.target.closest('a[href]');
      if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
      var url = new URL(a.href, location.href);
      if (url.origin !== location.origin || url.pathname === location.pathname) return;
      e.preventDefault();
      doc.classList.add('is-leaving');
      setTimeout(function () { location.href = a.href; }, 480);
    });
    window.addEventListener('pageshow', function (e) { if (e.persisted) doc.classList.remove('is-leaving'); });

    requestAnimationFrame(function () { body.classList.add('is-ready'); });
  });
})();
