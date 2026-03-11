/* ============================================================
   search.js — Lunr init + query handler (only on search.html)
   ============================================================ */

(function () {
  'use strict';

  /* Wait for Lunr and SEARCH_DOCUMENTS to be available */
  if (typeof lunr === 'undefined' || typeof SEARCH_DOCUMENTS === 'undefined') {
    console.error('search.js: lunr or SEARCH_DOCUMENTS not loaded');
    return;
  }

  /* ---------- Build Lunr index ---------- */
  var idx = lunr(function () {
    this.ref('id');
    this.field('title',  { boost: 10 });
    this.field('tags',   { boost: 5  });
    this.field('body',   { boost: 1  });

    SEARCH_DOCUMENTS.forEach(function (doc) {
      this.add(doc);
    }, this);
  });

  /* ---------- Document map for fast lookup ---------- */
  var docMap = {};
  SEARCH_DOCUMENTS.forEach(function (doc) {
    docMap[doc.id] = doc;
  });

  /* ---------- DOM elements ---------- */
  var resultsEl    = document.getElementById('search-results');
  var queryDisplay = document.getElementById('search-query-display');
  var countEl      = document.getElementById('search-count');
  var searchInput  = document.getElementById('search-input');

  /* ---------- Get query from URL ---------- */
  function getQuery() {
    var params = new URLSearchParams(window.location.search);
    return (params.get('q') || '').trim();
  }

  /* ---------- Level badge HTML ---------- */
  function badgeHTML(level, label) {
    return '<span class="badge badge-l' + level + '">' + label + '</span>';
  }

  /* ---------- Create excerpt with context ---------- */
  function makeExcerpt(body, query) {
    if (!body) return '';
    var words   = query.toLowerCase().split(/\s+/).filter(Boolean);
    var lowerBody = body.toLowerCase();
    var bestPos = 0;

    // Find position of first query word in body
    for (var i = 0; i < words.length; i++) {
      var pos = lowerBody.indexOf(words[i]);
      if (pos !== -1) { bestPos = Math.max(0, pos - 60); break; }
    }

    var excerpt = body.slice(bestPos, bestPos + 200);
    if (bestPos > 0) excerpt = '…' + excerpt;
    if (bestPos + 200 < body.length) excerpt += '…';

    // Highlight query words
    words.forEach(function (word) {
      if (word.length < 2) return;
      var re = new RegExp('(' + word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
      excerpt = excerpt.replace(re, '<mark>$1</mark>');
    });

    return excerpt;
  }

  /* ---------- Render results ---------- */
  function renderResults(query) {
    if (!resultsEl) return;

    if (queryDisplay) queryDisplay.textContent = query;
    if (searchInput)  searchInput.value = query;

    if (!query) {
      resultsEl.innerHTML = '<div class="search-empty"><h2>Enter a search term</h2><p>Use the search bar above to find topics across all levels.</p></div>';
      if (countEl) countEl.textContent = '';
      return;
    }

    var raw;
    try {
      // Try exact query first, then with wildcard
      raw = idx.search(query);
      if (raw.length === 0) {
        raw = idx.search(query + '*');
      }
    } catch (e) {
      // Lunr can throw on malformed queries
      try { raw = idx.search(query + '*'); }
      catch (e2) { raw = []; }
    }

    if (raw.length === 0) {
      resultsEl.innerHTML =
        '<div class="search-empty">' +
        '<h2>No results for &ldquo;' + escapeHTML(query) + '&rdquo;</h2>' +
        '<p>Try different keywords, or <a href="index.html">browse all levels</a>.</p>' +
        '</div>';
      if (countEl) countEl.textContent = '0 results';
      return;
    }

    if (countEl) countEl.textContent = raw.length + ' result' + (raw.length === 1 ? '' : 's');

    var html = '';
    raw.forEach(function (result) {
      var doc = docMap[result.ref];
      if (!doc) return;
      html +=
        '<article class="search-result">' +
        '<h3 class="search-result-title"><a href="' + doc.url + '">' + escapeHTML(doc.title) + '</a></h3>' +
        '<div class="search-result-meta">' +
        badgeHTML(doc.level, doc.levelLabel) +
        '<span class="text-subtle">' + escapeHTML(doc.url.split('#')[0]) + '</span>' +
        '</div>' +
        '<p class="search-result-excerpt">' + makeExcerpt(doc.body, query) + '</p>' +
        '</article>';
    });

    resultsEl.innerHTML = html;
  }

  /* ---------- Escape HTML ---------- */
  function escapeHTML(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ---------- Handle search form on this page ---------- */
  var form = document.getElementById('search-form-page');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var q = (searchInput ? searchInput.value : '').trim();
      if (q) {
        history.pushState(null, '', '?q=' + encodeURIComponent(q));
        renderResults(q);
      }
    });
  }

  /* ---------- Handle browser back/forward ---------- */
  window.addEventListener('popstate', function () {
    renderResults(getQuery());
  });

  /* ---------- Initial render ---------- */
  renderResults(getQuery());

})();
