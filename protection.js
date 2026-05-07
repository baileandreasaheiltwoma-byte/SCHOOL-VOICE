/* ═══════════════════════════════════════════════════════════
   SCHOOL VOICE — protection.js
   © 2025 BaileAndrea · All Rights Reserved
   Handles: right-click, keyboard shortcuts, devtools detection,
            drag protection, selection prevention on content
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── 1. Disable right-click context menu ── */
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    return false;
  });

  /* ── 2. Block keyboard shortcuts ── */
  document.addEventListener('keydown', function (e) {
    var key = e.key ? e.key.toLowerCase() : '';

    /* Ctrl/Cmd + C  → copy */
    if ((e.ctrlKey || e.metaKey) && key === 'c') { e.preventDefault(); return false; }

    /* Ctrl/Cmd + A  → select all */
    if ((e.ctrlKey || e.metaKey) && key === 'a') { e.preventDefault(); return false; }

    /* Ctrl/Cmd + P  → print */
    if ((e.ctrlKey || e.metaKey) && key === 'p') { e.preventDefault(); return false; }

    /* Ctrl/Cmd + S  → save page */
    if ((e.ctrlKey || e.metaKey) && key === 's') { e.preventDefault(); return false; }

    /* Ctrl/Cmd + U  → view source */
    if ((e.ctrlKey || e.metaKey) && key === 'u') { e.preventDefault(); return false; }

    /* Ctrl/Cmd + Shift + I  → DevTools */
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && key === 'i') { e.preventDefault(); return false; }

    /* Ctrl/Cmd + Shift + J  → DevTools console */
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && key === 'j') { e.preventDefault(); return false; }

    /* Ctrl/Cmd + Shift + C  → DevTools element inspector */
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && key === 'c') { e.preventDefault(); return false; }

    /* F12 → DevTools */
    if (e.key === 'F12') { e.preventDefault(); return false; }

    /* Escape → close modal (allowed — handled by auth.js) */
  });

  /* ── 3. Block drag of text/images ── */
  document.addEventListener('dragstart', function (e) {
    e.preventDefault();
    return false;
  });

  /* ── 4. DevTools size-detection → blur content area ── */
  var devToolsOpen = false;
  var THRESHOLD    = 160; /* px difference that suggests devtools panel */

  function checkDevTools() {
    var widthDiff  = window.outerWidth  - window.innerWidth;
    var heightDiff = window.outerHeight - window.innerHeight;
    var isOpen     = widthDiff > THRESHOLD || heightDiff > THRESHOLD;

    if (isOpen && !devToolsOpen) {
      devToolsOpen = true;
      blurContent(true);
    } else if (!isOpen && devToolsOpen) {
      devToolsOpen = false;
      blurContent(false);
    }
  }

  function blurContent(shouldBlur) {
    var targets = [
      document.getElementById('content-area'),
      document.querySelector('.content-body'),
      document.querySelector('.topic-layout')
    ];
    targets.forEach(function (el) {
      if (el) {
        el.style.filter        = shouldBlur ? 'blur(8px)' : '';
        el.style.pointerEvents = shouldBlur ? 'none'      : '';
      }
    });
  }

  setInterval(checkDevTools, 800);

  /* ── 5. Disable text selection on non-input elements via JS ──
     (CSS handles the primary layer; this catches dynamic content) */
  document.addEventListener('selectstart', function (e) {
    var tag = e.target.tagName ? e.target.tagName.toLowerCase() : '';
    if (tag !== 'input' && tag !== 'textarea') {
      e.preventDefault();
      return false;
    }
  });

  /* ── 6. Override window.print() ── */
  var _origPrint = window.print;
  window.print = function () {
    /* silently block — the @media print CSS already hides all content */
    return false;
  };

  /* ── 7. Warn on page visibility change (tab switch / screenshot tools) ── */
  /* Soft warning only — does not block but logs intent */
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') {
      /* User switched tab — no action needed */
    }
  });

})();
