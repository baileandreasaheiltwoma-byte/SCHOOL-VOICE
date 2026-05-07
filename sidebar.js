/* ═══════════════════════════════════════════════════════════
   SCHOOL VOICE — sidebar.js
   © 2025 BaileAndrea · All Rights Reserved
   Handles: sidebar open/close on mobile,
            section expand/collapse,
            active item highlighting
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Toggle sidebar open/close (mobile hamburger) ── */
  window.toggleSidebar = function () {
    var sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.toggle('open');
  };

  /* ── Close sidebar (used after navigation) ── */
  window.closeSidebar = function () {
    var sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.remove('open');
  };

  /* ── Toggle a sidebar section open/closed ── */
  window.toggleSection = function (sectionId) {
    var section = document.getElementById(sectionId);
    if (section) section.classList.toggle('open');
  };

  /* ── Close sidebar when clicking outside it on mobile ── */
  document.addEventListener('click', function (e) {
    var sidebar   = document.getElementById('sidebar');
    var hamburger = document.querySelector('.hamburger');
    if (!sidebar || !hamburger) return;

    /* Only act on mobile (sidebar uses transform) */
    if (window.innerWidth > 900) return;

    var clickedInsideSidebar   = sidebar.contains(e.target);
    var clickedHamburger       = hamburger.contains(e.target);

    if (!clickedInsideSidebar && !clickedHamburger) {
      window.closeSidebar();
    }
  });

  /* ── Highlight the correct sidebar item based on URL ── */
  document.addEventListener('DOMContentLoaded', function () {
    var params  = new URLSearchParams(window.location.search);
    var subject = params.get('subject');

    if (!subject) return;

    /* Remove active from all items */
    document.querySelectorAll('.sb-item').forEach(function (el) {
      el.classList.remove('active');
    });

    /* Map subject keys to sidebar item IDs or onclick text patterns */
    var subjectMap = {
      'g1-math':  'Grade 1 · Mathematics',
      'g2-math':  'Grade 2 · Mathematics',
      'g3-math':  'Grade 3 · Mathematics',
      'g4-math':  'Grade 4 · Mathematics',
      'g5-math':  'Grade 5 · Mathematics',
      'g6-math':  'Grade 6 · Mathematics',
      'g7-math':  'Grade 7 · Mathematics',
      'g8-math':  'Grade 8 · Mathematics',
      'g9-math':  'Grade 9 · Mathematics',
      'g10-math': 'Grade 10 · Mathematics',
      'g11-math': 'Grade 11 · Mathematics',
      'g12-math': 'Grade 12 · Mathematics',
    };

    var targetName = subjectMap[subject];
    if (!targetName) return;

    document.querySelectorAll('.sb-item').forEach(function (el) {
      var nameEl = el.querySelector('.sb-item-name');
      if (nameEl && nameEl.textContent.trim().startsWith(targetName)) {
        el.classList.add('active');
        /* Make sure its parent section is open */
        var section = el.closest('.sb-section');
        if (section) section.classList.add('open');
      }
    });
  });

  /* ── goCS helper (used on all pages for coming-soon links) ── */
  window.goCS = function (name) {
    window.location.href = 'coming-soon.html?subject=' + encodeURIComponent(name);
  };

})();
