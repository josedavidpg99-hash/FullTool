/* IMS Tool — ui.js
 * 2026 UI enhancements: shift summary cards.
 * Reads the existing counters (nb-*) and mirrors them onto the cards (sc-*).
 * Cards navigate to the matching module via switchPanel().
 * No app.js logic duplicated: DOM observation only.
 */
(function () {
  'use strict';

  // [existing badge] -> [summary card]
  var WATCH = [
    ['nb-choc', 'sc-choc'],
    ['nb-kit', 'sc-kit'],
    ['nb-ing', 'sc-ing'],
    ['nb-pch', 'sc-pch'],
    ['nb-pal', 'sc-pal'],
    ['nb-cc', 'sc-cc'],
    ['nb-po', 'sc-po']
  ];

  function syncCards() {
    for (var i = 0; i < WATCH.length; i++) {
      var src = document.getElementById(WATCH[i][0]);
      var dst = document.getElementById(WATCH[i][1]);
      if (src && dst && dst.textContent !== src.textContent) {
        dst.textContent = src.textContent;
      }
    }
  }

  function goPanel(key) {
    var btn = document.querySelector('.nav-btn[onclick*="switchPanel(\'' + key + '\'"]');
    if (typeof window.switchPanel === 'function') {
      window.switchPanel(key, btn || undefined);
    }
  }

  function bindCards() {
    var cards = document.querySelectorAll('.sum-card[data-panel]');
    for (var i = 0; i < cards.length; i++) {
      (function (card) {
        card.addEventListener('click', function () {
          goPanel(card.getAttribute('data-panel'));
        });
      })(cards[i]);
    }
  }

  function init() {
    bindCards();
    syncCards();
    // Badges update on app.js events; sync periodically.
    setInterval(syncCards, 1500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
