/**
 * Katia Danishevska — Core Interactive & Accessibility Behaviors
 * Follows modern web accessibility, form validation, and motion best practices.
 */

(function () {
  'use strict';

  var htmlEl = document.documentElement;
  htmlEl.classList.add('js-ready');

  var reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  var darkSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

  // =========================================================================
  // 1. DARK / LIGHT THEME OVERRIDE (modern-web-guidance: dark-mode-toggle)
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
    if (stored === 'dark' || stored === 'light') return stored;
    return darkSchemeQuery.matches ? 'dark' : 'light';
  }

  function syncThemeUI() {
    var stored = getStoredScheme();
    var resolved = getResolvedScheme();

    if (metaColorScheme) {
      metaColorScheme.setAttribute('content', stored === 'dark' || stored === 'light' ? stored : 'light dark');
    }

    if (stored === 'dark' || stored === 'light') {
      htmlEl.setAttribute('data-theme', stored);
    } else {
      htmlEl.removeAttribute('data-theme');
    }

    if (themeToggleBtn) {
      var nextLabel = resolved === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
      themeToggleBtn.setAttribute('aria-label', nextLabel);
      themeToggleBtn.setAttribute('aria-pressed', resolved === 'dark' ? 'true' : 'false');
    }

    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: resolved } }));
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function () {
      var currentRendered = getResolvedScheme();
      var target = currentRendered === 'dark' ? 'light' : 'dark';
      var systemScheme = darkSchemeQuery.matches ? 'dark' : 'light';

      // Revert to system default when target coincides with current OS setting
      if (target === systemScheme) {
        setStoredScheme(null);
      } else {
        setStoredScheme(target);
      }
      syncThemeUI();
    });
  }

  darkSchemeQuery.addEventListener('change', syncThemeUI);
  window.addEventListener('storage', function (e) {
    if (e.key === 'color-scheme') syncThemeUI();
  });

  syncThemeUI();

  // =========================================================================
  // 2. FLOATING NAVIGATION & MOBILE DRAWER (B7 + inert background)
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
      links.forEach(function (link, idx) {
        var delay = Math.min(idx * 60, 360);
        link.style.transitionDelay = reducedMotionQuery.matches ? '0ms' : delay + 'ms';
      });
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
  // 3. SECTION REVEAL (IntersectionObserver — no unthrottled scroll)
  // =========================================================================
  var revealBlocks = document.querySelectorAll('.reveal-block');
  if (revealBlocks.length) {
    if (reducedMotionQuery.matches) {
      revealBlocks.forEach(function (el) { el.classList.add('is-visible'); });
    } else {
      var revealObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

      revealBlocks.forEach(function (el) { revealObs.observe(el); });
    }
  }

  // =========================================================================
  // 4. B11 MANDATORY TAGLINE WORD-BY-WORD SCROLL REVEAL (rAF throttled)
  // =========================================================================
  var taglineEl = document.getElementById('tagline-reveal');
  if (taglineEl) {
    var rawText = taglineEl.textContent.trim();
    var words = rawText.split(/\s+/);
    taglineEl.textContent = '';

    var wordSpans = [];
    words.forEach(function (word, idx) {
      var span = document.createElement('span');
      span.className = 'tagline-word';
      span.textContent = word;
      taglineEl.appendChild(span);
      wordSpans.push(span);
      if (idx < words.length - 1) {
        taglineEl.appendChild(document.createTextNode(' '));
      }
    });

    if (reducedMotionQuery.matches) {
      wordSpans.forEach(function (s) { s.classList.add('is-lit'); });
    } else {
      var rafTicking = false;

      function updateTaglineWords() {
        rafTicking = false;
        var rect = taglineEl.getBoundingClientRect();
        var vh = window.innerHeight || 800;
        // Start illuminating when top enters bottom 85% of viewport, finish around 32% from top
        var startY = vh * 0.86;
        var endY = vh * 0.30;
        var progress = (startY - rect.top) / Math.max(1, startY - endY);
        var clamped = Math.max(0, Math.min(1, progress));
        var litCount = Math.round(clamped * wordSpans.length);

        for (var i = 0; i < wordSpans.length; i++) {
          if (i < litCount) wordSpans[i].classList.add('is-lit');
          else wordSpans[i].classList.remove('is-lit');
        }
      }

      window.addEventListener('scroll', function () {
        if (!rafTicking) {
          rafTicking = true;
          requestAnimationFrame(updateTaglineWords);
        }
      }, { passive: true });

      updateTaglineWords();
    }
  }

  // =========================================================================
  // 5. SCROLL PROGRESS FALLBACK (only when native scroll-timeline unsupported)
  // =========================================================================
  var progressEl = document.getElementById('scroll-progress-bar');
  if (progressEl && !CSS.supports('animation-timeline', 'scroll()') && !reducedMotionQuery.matches) {
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
  // 6. SPLIT-ACCORDION
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
  // 7. COPY PROFILE LINK BUTTON
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
  // 8. CLIENT-SIDE VALIDATED INQUIRY FORM (validate-input-after-interaction)
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
      if (v.typeMismatch && field.type === 'email') return 'Please enter a valid email address.';
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
      }, 450);
    });
  }

  // =========================================================================
  // 9. NATIVE <dialog> MODALS (Privacy & Terms)
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
