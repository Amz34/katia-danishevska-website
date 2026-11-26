/**
 * Katia Danishevska — Core Interactive & Accessibility Behaviors
 * Zero-motion Swiss editorial implementation.
 * Follows modern web accessibility, form validation, and minimal motion standards.
 */

(function () {
  'use strict';

  var htmlEl = document.documentElement;
  htmlEl.classList.add('js-ready');

  // =========================================================================
  // 1. DARK / LIGHT THEME OVERRIDE (Swiss Editorial Light Default)
  // =========================================================================
  var metaColorScheme = document.querySelector('meta[name="color-scheme"]');
  var themeToggleBtn = document.getElementById('theme-toggle');

  function getStoredScheme() {
    try {
      return localStorage.getItem('color-scheme');
    } catch (err) {
      return null;
    }
  }

  function setStoredScheme(val) {
    try {
      if (val === null) localStorage.removeItem('color-scheme');
      else localStorage.setItem('color-scheme', val);
    } catch (err) {
      // Storage blocked; keep in-memory state active
    }
  }

  function getResolvedScheme() {
    var stored = getStoredScheme();
    if (stored === 'dark') return 'dark';
    return 'light';
  }

  function syncThemeUI() {
    var resolved = getResolvedScheme();

    if (metaColorScheme) {
      metaColorScheme.setAttribute('content', resolved);
    }

    htmlEl.setAttribute('data-theme', resolved);

    if (themeToggleBtn) {
      var nextLabel = resolved === 'dark' ? 'Switch to Swiss light mode' : 'Switch to dark mode';
      themeToggleBtn.setAttribute('aria-label', nextLabel);
      themeToggleBtn.setAttribute('aria-pressed', resolved === 'dark' ? 'true' : 'false');
    }

    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: resolved } }));
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function () {
      var current = getResolvedScheme();
      var target = current === 'dark' ? 'light' : 'dark';
      setStoredScheme(target);
      syncThemeUI();
    });
  }

  window.addEventListener('storage', function (e) {
    if (e.key === 'color-scheme') syncThemeUI();
  });

  syncThemeUI();

  // =========================================================================
  // 2. FLOATING NAVIGATION & MOBILE DRAWER (with inert background trap)
  // =========================================================================
  var siteNav = document.getElementById('site-nav');
  var navSentinel = document.getElementById('nav-sentinel');
  if (siteNav && navSentinel) {
    var navElevateObserver = new IntersectionObserver(function (entries) {
      var atTop = entries[0] ? entries[0].isIntersecting : true;
      siteNav.classList.toggle('is-elevated', !atTop);
    }, { threshold: 0 });
    navElevateObserver.observe(navSentinel);
  }

  var menuToggle = document.getElementById('menu-toggle');
  var mobileDrawer = document.getElementById('mobile-drawer');
  var mainEl = document.getElementById('main');
  var footerEl = document.querySelector('footer.site-footer');
  var lastFocusedBeforeDrawer = null;

  function setDrawerState(open) {
    if (!menuToggle || !mobileDrawer) return;
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    mobileDrawer.classList.toggle('is-open', open);
    mobileDrawer.setAttribute('aria-hidden', open ? 'false' : 'true');

    if (mainEl) mainEl.inert = open;
    if (footerEl) footerEl.inert = open;

    if (open) {
      lastFocusedBeforeDrawer = document.activeElement;
      document.body.style.overflow = 'hidden';
      var links = mobileDrawer.querySelectorAll('.mobile-drawer-link');
      if (links[0]) links[0].focus();
    } else {
      document.body.style.overflow = '';
      if (lastFocusedBeforeDrawer && typeof lastFocusedBeforeDrawer.focus === 'function') {
        lastFocusedBeforeDrawer.focus();
      }
    }
  }

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', function () {
      var isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      setDrawerState(!isOpen);
    });

    mobileDrawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        setDrawerState(false);
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
        setDrawerState(false);
      }
    });
  }

  // =========================================================================
  // 3. ZERO-MOTION CONTENT RENDERING (Immediate readability)
  // =========================================================================
  var revealBlocks = document.querySelectorAll('.reveal-block');
  revealBlocks.forEach(function (el) {
    el.classList.add('is-visible');
  });

  var taglineEl = document.getElementById('tagline-reveal');
  if (taglineEl) {
    taglineEl.classList.add('is-lit');
  }

  // =========================================================================
  // 4. SCROLL PROGRESS INDICATOR
  // =========================================================================
  var progressEl = document.getElementById('scroll-progress-bar');
  if (progressEl && !CSS.supports('animation-timeline', 'scroll()')) {
    var pTicking = false;
    window.addEventListener('scroll', function () {
      if (!pTicking) {
        pTicking = true;
        requestAnimationFrame(function () {
          pTicking = false;
          var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          var pct = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
          progressEl.style.transform = 'scaleX(' + pct + ')';
        });
      }
    }, { passive: true });
  }

  // =========================================================================
  // 5. COPY LINK BUTTON
  // =========================================================================
  var copyBtn = document.getElementById('copy-linkedin-btn');
  var copyStatus = document.getElementById('copy-linkedin-status');
  if (copyBtn) {
    var copyTimer = null;
    copyBtn.addEventListener('click', function () {
      var url = copyBtn.getAttribute('data-copy-value');
      if (!url) return;

      var finish = function () {
        copyBtn.dataset.copied = 'true';
        var labelSpan = copyBtn.querySelector('[data-copy-label]');
        if (labelSpan) labelSpan.textContent = 'LinkedIn link copied';
        if (copyStatus) copyStatus.textContent = 'LinkedIn profile link copied to clipboard.';
        clearTimeout(copyTimer);
        copyTimer = setTimeout(function () {
          copyBtn.dataset.copied = 'false';
          if (labelSpan) labelSpan.textContent = 'Copy LinkedIn URL';
        }, 2200);
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(finish, finish);
      } else {
        finish();
      }
    });
  }

  // =========================================================================
  // 6. HONEST NOTE PREPARER (Formats note and copies to clipboard for LinkedIn)
  // =========================================================================
  var noteForm = document.getElementById('note-form');
  if (noteForm) {
    var noteStatus = document.getElementById('note-status');
    var noteOutput = document.getElementById('note-output');
    var noteLinkWrap = document.getElementById('note-link-wrap');

    noteForm.addEventListener('submit', function (event) {
      event.preventDefault();
      var nameEl = document.getElementById('note-name');
      var topicEl = document.getElementById('note-topic');
      var detailsEl = document.getElementById('note-details');

      var name = (nameEl ? nameEl.value : '').trim();
      var topic = topicEl ? topicEl.value : '';
      var details = (detailsEl ? detailsEl.value : '').trim();

      if (!name || !details) {
        if (noteStatus) {
          noteStatus.classList.remove('hidden');
          noteStatus.textContent = 'Please add your name and a brief note.';
        }
        return;
      }

      var note = 'Hello Katia,\n\nTopic: ' + topic + '\n\n' + details + '\n\n' + name;

      var finishCopy = function () {
        if (noteStatus) {
          noteStatus.classList.remove('hidden');
          noteStatus.textContent = 'Note copied to clipboard! Paste it into a LinkedIn message to Katia.';
        }
        if (noteLinkWrap) noteLinkWrap.classList.remove('hidden');
        if (noteOutput) {
          noteOutput.classList.remove('hidden');
          noteOutput.value = note;
        }
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(note).then(finishCopy, function () {
          if (noteOutput) {
            noteOutput.classList.remove('hidden');
            noteOutput.value = note;
            noteOutput.select();
          }
          if (noteStatus) {
            noteStatus.classList.remove('hidden');
            noteStatus.textContent = 'Copy the formatted note below and paste it into LinkedIn:';
          }
          if (noteLinkWrap) noteLinkWrap.classList.remove('hidden');
        });
      } else {
        finishCopy();
      }
    });
  }

  // =========================================================================
  // 7. NATIVE <dialog> MODALS (Privacy, Terms & Notices)
  // =========================================================================
  document.querySelectorAll('[data-open-dialog]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var id = btn.getAttribute('data-open-dialog');
      var dlg = id ? document.getElementById(id) : null;
      if (dlg && typeof dlg.showModal === 'function') {
        dlg.showModal();
      }
    });
  });

  document.querySelectorAll('dialog.site-dialog').forEach(function (dlg) {
    dlg.addEventListener('click', function (e) {
      if (e.target === dlg) dlg.close();
    });
  });

})();
