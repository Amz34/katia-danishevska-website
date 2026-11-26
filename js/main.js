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
  // 4. SCROLL PROGRESS INDICATOR (Native or lightweight sync)
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
  // 5. SPLIT-ACCORDION (Accessible disclosure widget)
  // =========================================================================
  document.querySelectorAll('.split-accordion').forEach(function (accordion) {
    var items = Array.from(accordion.querySelectorAll('.split-acc-item'));

    function updateAccordion(openIdx) {
      items.forEach(function (item, idx) {
        var trigger = item.querySelector('.split-acc-trigger');
        var isOpen = idx === openIdx;
        item.classList.toggle('is-open', isOpen);
        item.classList.toggle('is-before-open', openIdx !== -1 && idx === openIdx - 1);
        item.classList.toggle('is-after-open', openIdx !== -1 && idx === openIdx + 1);
        if (trigger) trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    }

    var currentOpen = items.findIndex(function (el) { return el.classList.contains('is-open'); });
    updateAccordion(currentOpen);

    items.forEach(function (item, idx) {
      var trigger = item.querySelector('.split-acc-trigger');
      if (!trigger) return;
      trigger.addEventListener('click', function () {
        var willOpen = !item.classList.contains('is-open');
        updateAccordion(willOpen ? idx : -1);
      });
    });
  });

  // =========================================================================
  // 6. COPY LINK BUTTON
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
  // 7. CLIENT-SIDE VALIDATED INQUIRY FORM
  // =========================================================================
  var contactForm = document.getElementById('inquiry-form');
  if (contactForm) {
    var formFields = Array.from(contactForm.querySelectorAll('[data-validate]'));
    var formSkeleton = document.getElementById('inquiry-skeleton');
    var formResult = document.getElementById('inquiry-result');
    var submitBtn = document.getElementById('inquiry-submit');

    function getErrorMessage(field) {
      var v = field.validity;
      if (v.valueMissing) return field.getAttribute('data-err-required') || 'This field is required.';
      if (v.typeMismatch && field.type === 'email') return 'Please enter a valid work email address.';
      if (v.tooShort) return 'Please share at least ' + field.minLength + ' characters.';
      return 'Please check this field.';
    }

    function validateField(field) {
      var errEl = document.getElementById(field.id + '-error');
      var ok = field.checkValidity();
      field.setAttribute('aria-invalid', ok ? 'false' : 'true');
      if (errEl) errEl.textContent = ok ? '' : getErrorMessage(field);
      return ok;
    }

    formFields.forEach(function (field) {
      var touched = false;
      field.addEventListener('blur', function () {
        if (field.value.trim().length > 0) touched = true;
        if (touched) validateField(field);
      });
      field.addEventListener('input', function () {
        if (field.getAttribute('aria-invalid') === 'true') {
          validateField(field);
        }
      });
    });

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var firstInvalid = null;

      formFields.forEach(function (field) {
        if (!validateField(field) && !firstInvalid) {
          firstInvalid = field;
        }
      });

      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      var senderName = (document.getElementById('inq-name')?.value || '').trim();
      if (submitBtn) submitBtn.disabled = true;
      if (formResult) formResult.classList.add('hidden');
      if (formSkeleton) formSkeleton.classList.remove('hidden');

      setTimeout(function () {
        if (formSkeleton) formSkeleton.classList.add('hidden');
        if (submitBtn) submitBtn.disabled = false;
        if (formResult) {
          formResult.classList.remove('hidden');
          formResult.textContent = 'Preview inquiry validated for ' + senderName +
            '. Because this design proposal runs statically without a live mail relay, please forward messages directly via LinkedIn.';
        }
        contactForm.reset();
        formFields.forEach(function (f) { f.setAttribute('aria-invalid', 'false'); });
      }, 350);
    });
  }

  // =========================================================================
  // 8. NATIVE <dialog> MODALS (Privacy, Terms & Executive Dossier Preview)
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
