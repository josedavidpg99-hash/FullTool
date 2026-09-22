/* IMS Tool — ui.js
 * Mejoras de interfaz 2026: tarjetas de resumen del turno.
 * Lee los contadores existentes (nb-*) y los refleja en las tarjetas (sc-*).
 * Las tarjetas navegan al módulo correspondiente con switchPanel().
 * No duplica lógica de app.js: solo observa el DOM.
 */
(function () {
  'use strict';

  // [badge existente] -> [tarjeta de resumen]
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
    // Los badges se actualizan por eventos de app.js; sincronizar periódicamente.
    setInterval(syncCards, 1500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
