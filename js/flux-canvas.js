/**
 * Katia Danishevska — Bespoke Architectural Canvas & Executive Corridor Engine
 * 1. Hero Contour Topology Canvas (#flux-canvas)
 * 2. Interactive Zurich / Zug / Ljubljana Executive Talent Corridor Canvas (#corridor-canvas)
 */

(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function readThemePalette() {
    var rootStyle = getComputedStyle(document.documentElement);
    var isDark = document.documentElement.dataset.theme === 'dark' ||
      (!document.documentElement.dataset.theme && window.matchMedia('(prefers-color-scheme: dark)').matches);

    return {
      isDark: isDark,
      primary: rootStyle.getPropertyValue('--ink-primary').trim() || (isDark ? '#F5F6F7' : '#111316'),
      secondary: rootStyle.getPropertyValue('--ink-secondary').trim() || (isDark ? '#A3A9B2' : '#4B525C'),
      muted: rootStyle.getPropertyValue('--ink-muted').trim() || (isDark ? '#78808A' : '#68707A'),
      accent: rootStyle.getPropertyValue('--accent').trim() || (isDark ? '#60A5FA' : '#1D4ED8'),
      teal: rootStyle.getPropertyValue('--teal').trim() || (isDark ? '#2DD4BF' : '#0F766E'),
      surface: rootStyle.getPropertyValue('--bg-surface').trim() || (isDark ? '#181818' : '#FFFFFF'),
      band: rootStyle.getPropertyValue('--bg-band').trim() || (isDark ? '#131209' : '#EFECE5'),
      hairline: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(17, 19, 22, 0.08)',
      contour: isDark ? 'rgba(96, 165, 250, 0.14)' : 'rgba(29, 78, 216, 0.09)',
      watermark: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(17, 19, 22, 0.035)'
    };
  }

  // =========================================================================
  // 1. HERO ARCHITECTURAL TOPOLOGY CANVAS (#flux-canvas)
  // =========================================================================
  function initHeroFluxCanvas() {
    var canvas = document.getElementById('flux-canvas');
    if (!canvas) return;

    var ctx = canvas.getContext('2d');
    var width = 0;
    var height = 0;
    var dpr = 1;
    var tick = 0;
    var rafId = null;
    var isVisible = true;
    var pointer = { x: 0.5, y: 0.5, active: false };

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      var rect = canvas.getBoundingClientRect();
      width = rect.width || window.innerWidth;
      height = rect.height || 700;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function drawFrame(advance) {
      if (advance) tick += 0.006;
      var pal = readThemePalette();
      ctx.clearRect(0, 0, width, height);

      // Subtle architectural watermark along lower canvas baseline
      ctx.save();
      var wmSize = Math.max(36, Math.min(112, Math.floor(width * 0.075)));
      ctx.font = '600 ' + wmSize + 'px Geist, system-ui, sans-serif';
      ctx.fillStyle = pal.watermark;
      ctx.textAlign = 'left';
      ctx.textBaseline = 'alphabetic';
      ctx.fillText('KATIA DANISHEVSKA', 24, height - 24);
      ctx.restore();

      // Alpine topological contour curves
      var waveCount = 5;
      for (var w = 0; w < waveCount; w++) {
        ctx.beginPath();
        var baseY = height * (0.24 + w * 0.14);
        var amp = 18 + w * 6;
        for (var x = 0; x <= width; x += 20) {
          var normX = x / Math.max(1, width);
          var pull = pointer.active
            ? Math.exp(-Math.pow(normX - pointer.x, 2) * 10) * (pointer.y - 0.5) * 38
            : 0;
          var y = baseY +
            Math.sin(normX * 4.2 + tick + w * 0.85) * amp +
            Math.cos(normX * 2.1 - tick * 0.6) * (amp * 0.35) +
            pull;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = pal.contour;
        ctx.lineWidth = w === 2 ? 1.35 : 1;
        ctx.stroke();
      }
    }

    function loop() {
      if (!isVisible || document.hidden || prefersReducedMotion.matches) {
        rafId = null;
        return;
      }
      drawFrame(true);
      rafId = requestAnimationFrame(loop);
    }

    function startOrStatic() {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = null;
      if (prefersReducedMotion.matches) {
        drawFrame(false);
      } else if (isVisible && !document.hidden) {
        loop();
      }
    }

    var heroParent = canvas.parentElement;
    if (heroParent) {
      heroParent.addEventListener('pointermove', function (e) {
        if (prefersReducedMotion.matches) return;
        var r = canvas.getBoundingClientRect();
        pointer.x = (e.clientX - r.left) / Math.max(1, r.width);
        pointer.y = (e.clientY - r.top) / Math.max(1, r.height);
        pointer.active = true;
      }, { passive: true });

      heroParent.addEventListener('pointerleave', function () {
        pointer.active = false;
      }, { passive: true });
    }

    var observer = new IntersectionObserver(function (entries) {
      isVisible = entries[0] ? entries[0].isIntersecting : true;
      startOrStatic();
    }, { threshold: 0.05 });
    observer.observe(canvas);

    document.addEventListener('visibilitychange', startOrStatic);
    window.addEventListener('resize', function () {
      resize();
      if (prefersReducedMotion.matches) drawFrame(false);
    }, { passive: true });
    window.addEventListener('themechange', function () {
      if (prefersReducedMotion.matches || !rafId) drawFrame(false);
    });

    resize();
    startOrStatic();
  }

  // =========================================================================
  // 2. INTERACTIVE CAREER & MARKET CORRIDOR ATLAS (#corridor-canvas)
  // =========================================================================
  function initCorridorCanvas() {
    var canvas = document.getElementById('corridor-canvas');
    if (!canvas) return;

    var ctx = canvas.getContext('2d');
    var modeButtons = document.querySelectorAll('[data-atlas-mode]');
    var hubContainer = document.getElementById('atlas-hub-chips');
    var titleEl = document.getElementById('atlas-active-title');
    var metaEl = document.getElementById('atlas-active-meta');
    var descEl = document.getElementById('atlas-active-desc');

    var MODES = {
      CORRIDOR: {
        header: 'CAREER & GEOGRAPHIC CORRIDOR',
        sub: 'ZÜRICH METROPOLITAN AREA · ZUG · LJUBLJANA',
        centerLabel: 'STRATEGIC TALENT PARTNER',
        nodes: [
          {
            id: 'swisschain',
            label: 'SwissChain',
            short: 'SwissChain · 2025 to Present',
            meta: 'Senior Talent Acquisition Partner · Ljubljana · Digital Assets & FinTech',
            desc: 'Partners with business leaders to recruit senior specialists and leadership across technology, compliance, operations, finance, and business development.',
            rx: 0.72,
            ry: 0.30,
            highlight: true
          },
          {
            id: 'amina',
            label: 'AMINA Bank',
            short: 'AMINA Bank · 2020 to 2025',
            meta: 'Talent Acquisition Partner · Zug, Switzerland · 5 years 10 months',
            desc: 'Progressed across three roles supporting institutional banking, digital assets, and department leadership hiring in Switzerland.',
            rx: 0.28,
            ry: 0.34,
            highlight: true
          },
          {
            id: 'zurich',
            label: 'Zürich Hub',
            short: 'Zürich Area · Global Markets',
            meta: 'Zürich Metropolitan Area · International Financial & Tech Ecosystem',
            desc: 'Advises growing digital asset and financial institutions across European and international talent markets.',
            rx: 0.24,
            ry: 0.68,
            highlight: false
          },
          {
            id: 'manpower',
            label: 'ManpowerGroup',
            short: 'ManpowerGroup · 2018 to 2019',
            meta: 'Recruitment Consultant · Ljubljana · IT & Technology',
            desc: 'Directed technical sourcing and candidate partnerships across software and business technology roles.',
            rx: 0.76,
            ry: 0.68,
            highlight: false
          },
          {
            id: 'foundation',
            label: 'ISG & Adecco',
            short: 'ISG & Adecco · 2014 to 2017',
            meta: 'Talent Acquisition Specialist · Cross Industry Foundations',
            desc: 'Managed specialist and management searches from initial identification through interview coordination.',
            rx: 0.50,
            ry: 0.80,
            highlight: false
          },
          {
            id: 'ljubljana-msc',
            label: 'Univ. Ljubljana',
            short: 'University of Ljubljana · MSc HRM',
            meta: 'Master Degree in Human Resource Management · 2012 to 2014',
            desc: 'Academic grounding in organizational behavior, talent evaluation, and human resource leadership.',
            rx: 0.50,
            ry: 0.19,
            highlight: false
          }
        ]
      },
      MANDATES: {
        header: 'FUNCTIONAL MANDATE COVERAGE',
        sub: 'SPECIALISTS · MANAGERS · SENIOR LEADERSHIP',
        centerLabel: 'EXECUTIVE SEARCH SCOPE',
        nodes: [
          {
            id: 'exec',
            label: 'Executive Leadership',
            short: 'Executive & Department Heads',
            meta: 'Mandate Level · Senior Leaders & Functional Heads',
            desc: 'Close alignment with founders and hiring managers to calibrate leadership scope, succession readiness, and international market availability.',
            rx: 0.50,
            ry: 0.20,
            highlight: true
          },
          {
            id: 'tech',
            label: 'Technology & Blockchain',
            short: 'Engineering & Protocol Talent',
            meta: 'Digital Assets & FinTech Infrastructure',
            desc: 'Direct sourcing for core engineering, blockchain systems, security, and technical product specialists.',
            rx: 0.77,
            ry: 0.38,
            highlight: true
          },
          {
            id: 'compliance',
            label: 'Compliance & Risk',
            short: 'Regulatory & Banking Controls',
            meta: 'Regulated Financial & Digital Asset Frameworks',
            desc: 'Building specialized compliance, governance, and regulatory oversight pipelines tailored to Swiss and European standards.',
            rx: 0.74,
            ry: 0.72,
            highlight: false
          },
          {
            id: 'finance',
            label: 'Finance & Operations',
            short: 'Institutional Ops & Treasury',
            meta: 'Banking & Digital Asset Operations',
            desc: 'Sourcing precision minded finance, settlement, and operational managers built for scaling regulated businesses.',
            rx: 0.26,
            ry: 0.72,
            highlight: false
          },
          {
            id: 'growth',
            label: 'Business Development',
            short: 'Commercial & Institutional Partnerships',
            meta: 'International Market Expansion',
            desc: 'Connecting commercial leaders with proven institutional credibility across European and global corridors.',
            rx: 0.23,
            ry: 0.38,
            highlight: false
          }
        ]
      }
    };

    var activeMode = 'CORRIDOR';
    var activeIndex = 0;
    var width = 0;
    var height = 0;
    var dpr = 1;
    var computedPoints = [];

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      var rect = canvas.getBoundingClientRect();
      width = rect.width || 560;
      height = rect.height || 360;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    }

    function syncReadout() {
      var modeData = MODES[activeMode];
      var node = modeData.nodes[activeIndex] || modeData.nodes[0];
      if (!node) return;
      if (titleEl) titleEl.textContent = node.short;
      if (metaEl) metaEl.textContent = node.meta;
      if (descEl) descEl.textContent = node.desc;

      if (hubContainer) {
        var buttons = hubContainer.querySelectorAll('.hub-chip');
        buttons.forEach(function (btn, idx) {
          btn.setAttribute('aria-pressed', idx === activeIndex ? 'true' : 'false');
        });
      }
    }

    function renderChips() {
      if (!hubContainer) return;
      hubContainer.textContent = '';
      var nodes = MODES[activeMode].nodes;
      nodes.forEach(function (node, idx) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'hub-chip caption-1';
        btn.textContent = node.label;
        btn.setAttribute('aria-pressed', idx === activeIndex ? 'true' : 'false');
        btn.addEventListener('click', function () {
          activeIndex = idx;
          syncReadout();
          draw();
        });
        hubContainer.appendChild(btn);
      });
    }

    function draw() {
      var pal = readThemePalette();
      var modeData = MODES[activeMode];
      ctx.clearRect(0, 0, width, height);

      var cx = width * 0.5;
      var cy = height * 0.52;
      var maxR = Math.min(width, height) * 0.34;

      // Architectural Grid Hairlines
      ctx.strokeStyle = pal.hairline;
      ctx.lineWidth = 1;
      for (var gx = 48; gx < width; gx += 48) {
        ctx.beginPath();
        ctx.moveTo(gx, 0);
        ctx.lineTo(gx, height);
        ctx.stroke();
      }
      for (var gy = 48; gy < height; gy += 48) {
        ctx.beginPath();
        ctx.moveTo(0, gy);
        ctx.lineTo(width, gy);
        ctx.stroke();
      }

      // Concentric Orbit Rings
      [0.45, 0.85, 1.18].forEach(function (mult) {
        ctx.beginPath();
        ctx.arc(cx, cy, maxR * mult, 0, Math.PI * 2);
        ctx.strokeStyle = pal.hairline;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Header Telemetry
      ctx.save();
      ctx.font = '600 11px "Geist Mono", monospace';
      ctx.fillStyle = pal.teal;
      ctx.textAlign = 'left';
      ctx.fillText(modeData.header, 20, 28);

      ctx.font = '400 11px "Geist Mono", monospace';
      ctx.fillStyle = pal.muted;
      ctx.fillText(modeData.sub, 20, 44);
      ctx.restore();

      computedPoints = modeData.nodes.map(function (n) {
        return {
          x: width * n.rx,
          y: height * n.ry,
          node: n
        };
      });

      // Draw subtle mesh connections between nodes and center
      computedPoints.forEach(function (pt, idx) {
        var isSelected = idx === activeIndex;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(pt.x, pt.y);
        ctx.strokeStyle = isSelected ? pal.teal : pal.hairline;
        ctx.lineWidth = isSelected ? 1.75 : 1;
        ctx.stroke();
      });

      // Center Core
      ctx.beginPath();
      ctx.arc(cx, cy, 18, 0, Math.PI * 2);
      ctx.fillStyle = pal.surface;
      ctx.fill();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = pal.teal;
      ctx.stroke();

      ctx.font = '600 11px Geist, sans-serif';
      ctx.fillStyle = pal.primary;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('KD', cx, cy + 0.5);

      // Draw Nodes & Labels
      computedPoints.forEach(function (pt, idx) {
        var isSelected = idx === activeIndex;
        var r = isSelected ? 8 : 5.5;

        if (isSelected) {
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 16, 0, Math.PI * 2);
          ctx.fillStyle = pal.isDark ? 'rgba(45, 212, 191, 0.14)' : 'rgba(15, 118, 110, 0.12)';
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(pt.x, pt.y, r, 0, Math.PI * 2);
        ctx.fillStyle = isSelected ? pal.teal : pal.surface;
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = isSelected ? pal.primary : (pt.node.highlight ? pal.accent : pal.muted);
        ctx.stroke();

        // Label placement with safe canvas margins
        ctx.font = (isSelected ? '600 ' : '500 ') + '12px Geist, sans-serif';
        ctx.fillStyle = isSelected ? pal.primary : pal.secondary;
        ctx.textBaseline = 'middle';
        var onRight = pt.x >= cx;
        var pad = isSelected ? 18 : 13;
        var lx = onRight ? Math.min(width - 16, pt.x + pad) : Math.max(16, pt.x - pad);
        ctx.textAlign = onRight ? 'left' : 'right';
        if (pt.x > width * 0.72) {
          ctx.textAlign = 'right';
          lx = pt.x - pad;
        } else if (pt.x < width * 0.28) {
          ctx.textAlign = 'left';
          lx = pt.x + pad;
        }
        ctx.fillText(pt.node.label, lx, pt.y);
      });
    }

    function pickNearestNode(clientX, clientY) {
      var rect = canvas.getBoundingClientRect();
      var mx = clientX - rect.left;
      var my = clientY - rect.top;
      var bestIdx = -1;
      var bestDist = 44;

      computedPoints.forEach(function (pt, idx) {
        var d = Math.hypot(mx - pt.x, my - pt.y);
        if (d < bestDist) {
          bestDist = d;
          bestIdx = idx;
        }
      });

      if (bestIdx !== -1 && bestIdx !== activeIndex) {
        activeIndex = bestIdx;
        syncReadout();
        draw();
      }
    }

    canvas.addEventListener('click', function (e) {
      pickNearestNode(e.clientX, e.clientY);
    });

    canvas.addEventListener('pointermove', function (e) {
      if (e.pointerType === 'mouse') {
        pickNearestNode(e.clientX, e.clientY);
      }
    }, { passive: true });

    modeButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var mode = btn.getAttribute('data-atlas-mode');
        if (!MODES[mode]) return;
        activeMode = mode;
        activeIndex = 0;
        modeButtons.forEach(function (b) {
          b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
        });
        renderChips();
        syncReadout();
        draw();
      });
    });

    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('themechange', draw);

    renderChips();
    syncReadout();
    resize();
  }

  function boot() {
    initHeroFluxCanvas();
    initCorridorCanvas();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
