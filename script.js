/* ═══════════════════════════════════════════
   DRAPÉ — Script principal
   ═══════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─── Navbar: clase "scrolled" al hacer scroll ─── */
  var header = document.getElementById('main-header');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  /* ─── Nav links: highlight sección activa ─── */
  var sections = document.querySelectorAll('.section-v[id]');
  var navLinks = document.querySelectorAll('.nav-link[data-section]');

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var id = entry.target.id;
        navLinks.forEach(function (link) {
          link.classList.toggle('active', link.dataset.section === id);
        });
      }
    });
  }, {
    rootMargin: '-40% 0px -55% 0px',
    threshold: 0
  });

  sections.forEach(function (section) {
    observer.observe(section);
  });

  /* ─── Regalo: revelar carta al clic ─── */
  var regalo = document.getElementById('regalo');
  var card = document.getElementById('obtuviste-card');

  if (regalo && card) {
    regalo.addEventListener('click', function () {
      card.classList.remove('hidden');
      regalo.style.display = 'none';
    });
  }
})();
