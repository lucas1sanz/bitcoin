/* ============================================================
   filter.js — Level badge filtering on resources.html
              URL hash state: #level-1, #level-2, etc.
   ============================================================ */

(function () {
  'use strict';

  var filterBar   = document.querySelector('.filter-bar');
  var filterBtns  = document.querySelectorAll('.filter-btn[data-filter]');
  var resourceItems = document.querySelectorAll('[data-level]');

  if (!filterBar || filterBtns.length === 0) return;

  /* ---------- Apply a filter ---------- */
  function applyFilter(level) {
    // Update button states
    filterBtns.forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.filter === level);
    });

    // Show/hide resource items
    resourceItems.forEach(function (item) {
      if (level === 'all') {
        item.style.display = '';
      } else {
        var itemLevel = item.dataset.level;
        // Support comma-separated levels: data-level="1,2"
        var levels = itemLevel ? itemLevel.split(',').map(function (s) { return s.trim(); }) : [];
        item.style.display = levels.includes(level) ? '' : 'none';
      }
    });

    // Hide category sections that have no visible items
    document.querySelectorAll('.resource-category').forEach(function (cat) {
      var visibleItems = cat.querySelectorAll('[data-level]:not([style*="display: none"])');
      cat.style.display = visibleItems.length === 0 ? 'none' : '';
    });

    // Update URL hash (without triggering scroll)
    var hashValue = level === 'all' ? '' : '#level-' + level;
    if (history.replaceState) {
      history.replaceState(null, '', hashValue || window.location.pathname);
    } else {
      window.location.hash = hashValue;
    }
  }

  /* ---------- Attach button click handlers ---------- */
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyFilter(btn.dataset.filter);
    });
  });

  /* ---------- Read initial state from URL hash ---------- */
  function getFilterFromHash() {
    var hash = window.location.hash; // e.g. "#level-2"
    var match = hash.match(/^#level-(\d+|all)$/);
    return match ? match[1] : 'all';
  }

  applyFilter(getFilterFromHash());

  /* Handle browser back/forward */
  window.addEventListener('hashchange', function () {
    applyFilter(getFilterFromHash());
  });

})();
