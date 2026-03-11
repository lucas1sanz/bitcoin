/* ============================================================
   nav.js — Sidebar toggle, active link, smooth scroll, auto-TOC
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Sidebar toggle (hamburger / overlay) ---------- */
  var hamburger = document.getElementById('hamburger');
  var sidebar   = document.getElementById('sidebar');
  var overlay   = document.getElementById('sidebar-overlay');

  function openSidebar() {
    if (!sidebar) return;
    sidebar.classList.add('is-open');
    if (hamburger) hamburger.classList.add('is-active');
    if (overlay)   overlay.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    if (!sidebar) return;
    sidebar.classList.remove('is-open');
    if (hamburger) hamburger.classList.remove('is-active');
    if (overlay)   overlay.classList.remove('is-visible');
    document.body.style.overflow = '';
  }

  function toggleSidebar() {
    if (sidebar && sidebar.classList.contains('is-open')) {
      closeSidebar();
    } else {
      openSidebar();
    }
  }

  if (hamburger) hamburger.addEventListener('click', toggleSidebar);
  if (overlay)   overlay.addEventListener('click', closeSidebar);

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeSidebar();
  });

  // Close sidebar when a nav link is clicked on mobile
  if (sidebar) {
    sidebar.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth <= 768) closeSidebar();
      });
    });
  }

  /* ---------- Active link detection ---------- */
  function highlightActiveLink() {
    if (!sidebar) return;

    var path = window.location.pathname;
    // Normalize: strip trailing slash, get last segment
    var page = path.replace(/\/$/, '').split('/').pop() || 'index.html';
    if (page === '') page = 'index.html';

    sidebar.querySelectorAll('a[href]').forEach(function (link) {
      var href = link.getAttribute('href');
      // Normalize href — could be relative like "level1.html" or "index.html"
      var linkPage = href.replace(/^.*\//, '').split('?')[0].split('#')[0];
      if (linkPage === page || (page === '' && linkPage === 'index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  highlightActiveLink();

  /* ---------- Auto-generate TOC in sidebar ---------- */
  var tocContainer = document.getElementById('sidebar-toc');

  function buildTOC() {
    if (!tocContainer) return;
    var content = document.querySelector('.content');
    if (!content) return;

    var headings = content.querySelectorAll('h2[id], h3[id]');
    if (headings.length === 0) return;

    var ul = document.createElement('ul');
    ul.className = 'sidebar-toc';
    ul.style.listStyle = 'none';
    ul.style.padding = '0';

    headings.forEach(function (h) {
      var li  = document.createElement('li');
      var a   = document.createElement('a');
      a.href  = '#' + h.id;
      a.textContent = h.textContent.replace(/\s*#\s*$/, '').trim();
      if (h.tagName === 'H3') {
        a.style.paddingLeft = '1.25rem';
        a.style.fontSize = '0.7rem';
      }
      li.appendChild(a);
      ul.appendChild(li);
    });

    tocContainer.appendChild(ul);
  }

  buildTOC();

  /* ---------- IntersectionObserver TOC tracking ---------- */
  function initTOCTracking() {
    var tocLinks = tocContainer
      ? tocContainer.querySelectorAll('a[href^="#"]')
      : [];
    if (tocLinks.length === 0) return;

    var headingIds = [];
    tocLinks.forEach(function (a) {
      headingIds.push(a.getAttribute('href').slice(1));
    });

    var activeId = null;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          activeId = entry.target.id;
          updateTOCActive(activeId);
        }
      });
    }, {
      rootMargin: '-' + (parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue('--header-height') || '60') + 8) + 'px 0px -60% 0px',
      threshold: 0
    });

    headingIds.forEach(function (id) {
      var el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    function updateTOCActive(id) {
      tocLinks.forEach(function (a) {
        if (a.getAttribute('href') === '#' + id) {
          a.classList.add('toc-active');
        } else {
          a.classList.remove('toc-active');
        }
      });
    }
  }

  if ('IntersectionObserver' in window) {
    initTOCTracking();
  }

  /* ---------- Add anchor links to headings ---------- */
  document.querySelectorAll('.content h2[id], .content h3[id], .content h4[id]')
    .forEach(function (heading) {
      var anchor = document.createElement('a');
      anchor.className = 'anchor-link';
      anchor.href = '#' + heading.id;
      anchor.innerHTML = '#';
      anchor.setAttribute('aria-hidden', 'true');
      anchor.setAttribute('tabindex', '-1');
      heading.appendChild(anchor);
    });

})();
