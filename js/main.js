/**
 * Katia Danishevska — Personal Website
 * Clean, performant JS with no dependencies
 */

(function () {
  'use strict';

  // ═══════════════════════════════════════
  // THEME TOGGLE
  // ═══════════════════════════════════════
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  function getPreferredTheme() {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }

  // Apply initial theme
  applyTheme(getPreferredTheme());

  themeToggle.addEventListener('click', function () {
    const current = html.classList.contains('dark') ? 'dark' : 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });

  // ═══════════════════════════════════════
  // MOBILE MENU
  // ═══════════════════════════════════════
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
    menuToggle.setAttribute('aria-expanded', menuOpen.toString());

    if (menuOpen) {
      mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
      mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
      document.body.style.overflow = 'hidden';

      // Stagger link animations
      mobileLinks.forEach(function (link, i) {
        setTimeout(function () {
          link.classList.add('visible');
        }, i * 60);
      });
    } else {
      mobileMenu.classList.add('opacity-0', 'pointer-events-none');
      mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
      document.body.style.overflow = '';

      mobileLinks.forEach(function (link) {
        link.classList.remove('visible');
      });
    }
  }

  menuToggle.addEventListener('click', toggleMenu);

  // Close mobile menu on link click
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (menuOpen) toggleMenu();
    });
  });

  // ═══════════════════════════════════════
  // SECTION REVEAL (IntersectionObserver)
  // ═══════════════════════════════════════
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal-section, .timeline-item').forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Reduced motion: show everything
    document.querySelectorAll('.reveal-section, .timeline-item').forEach(function (el) {
      el.classList.add('revealed');
    });
  }

  // ═══════════════════════════════════════
  // TAGLINE REVEAL (B11 — word by word)
  // ═══════════════════════════════════════
  var taglineEl = document.getElementById('tagline-reveal');
  if (taglineEl) {
    var text = taglineEl.textContent.trim();
    var words = text.split(/\s+/);
    taglineEl.textContent = '';

    words.forEach(function (word, i) {
      var span = document.createElement('span');
      span.className = 'tagline-word';
      span.textContent = word;
      span.style.transitionDelay = (i * 40) + 'ms';
      taglineEl.appendChild(span);

      if (i < words.length - 1) {
        taglineEl.appendChild(document.createTextNode(' '));
      }
    });

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      var taglineObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              var tagWords = taglineEl.querySelectorAll('.tagline-word');
              tagWords.forEach(function (w) {
                w.classList.add('active');
              });
              taglineObserver.unobserve(taglineEl);
            }
          });
        },
        { threshold: 0.3 }
      );

      taglineObserver.observe(taglineEl);
    } else {
      taglineEl.querySelectorAll('.tagline-word').forEach(function (w) {
        w.classList.add('active');
      });
    }
  }

  // ═══════════════════════════════════════
  // ACTIVE NAV LINK TRACKING
  // ═══════════════════════════════════════
  var navLinks = document.querySelectorAll('.nav-link');
  var sections = document.querySelectorAll('section[id]');

  var navObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          navLinks.forEach(function (link) {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    },
    { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
  );

  sections.forEach(function (section) {
    navObserver.observe(section);
  });

  // ═══════════════════════════════════════
  // NAVBAR SCROLL EFFECT
  // ═══════════════════════════════════════
  var navbar = document.getElementById('navbar');
  var lastScroll = 0;

  window.addEventListener('scroll', function () {
    var currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      navbar.classList.add('shadow-xl');
    } else {
      navbar.classList.remove('shadow-xl');
    }

    lastScroll = currentScroll;
  }, { passive: true });

})();
