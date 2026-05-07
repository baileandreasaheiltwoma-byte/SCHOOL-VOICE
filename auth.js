/* ═══════════════════════════════════════════════════════════
   SCHOOL VOICE — auth.js
   © 2025 BaileAndrea · All Rights Reserved

   PERMANENT LOGIN GATE:
   ─────────────────────
   Topic 1 of every subject is FREE — no login required.
   All other topics require a free account.

   Once a user signs in or registers, their login is stored
   in localStorage — this means it PERSISTS across:
     ✓ Browser tab closes
     ✓ Browser window closes
     ✓ Computer restarts
     ✓ New sessions

   The only way to lose access is to click "Sign Out"
   or manually clear browser data.

   SUPABASE SWAP (Phase 2):
   ─────────────────────────
   Replace handleLogin() with a real Supabase call:
     const { data, error } = await supabase.auth.signInWithPassword({ email, password });
     if (!error) onLoginSuccess();
   Everything else stays the same — the rest of the code
   reads isLoggedIn() and works automatically.
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ══════════════════════════════════════════
     STORAGE KEYS
     Using localStorage so login survives
     browser close / restart permanently.
  ══════════════════════════════════════════ */
  var LOGIN_KEY   = 'sv_logged_in';   /* 'true' when signed in          */
  var EMAIL_KEY   = 'sv_user_email';  /* stores the user's email        */
  var NAME_KEY    = 'sv_user_name';   /* stores the user's display name */

  /* ══════════════════════════════════════════
     PUBLIC — isLoggedIn()
     Returns true if user has signed in before
     and has NOT signed out. Persists forever.
  ══════════════════════════════════════════ */
  window.isLoggedIn = function () {
    return localStorage.getItem(LOGIN_KEY) === 'true';
  };

  /* ══════════════════════════════════════════
     PUBLIC — openModal(type)
     Opens the login or register panel
  ══════════════════════════════════════════ */
  window.openModal = function (type) {
    var overlay = document.getElementById('modal-overlay');
    if (overlay) {
      overlay.classList.add('open');
      switchModal(type || 'login');
    }
  };

  /* ══════════════════════════════════════════
     PUBLIC — closeModal()
  ══════════════════════════════════════════ */
  window.closeModal = function () {
    var overlay = document.getElementById('modal-overlay');
    if (overlay) overlay.classList.remove('open');
  };

  /* ── Close when clicking outside the modal card ── */
  window.closeModalOutside = function (e) {
    if (e.target && e.target.id === 'modal-overlay') {
      window.closeModal();
    }
  };

  /* ══════════════════════════════════════════
     PUBLIC — switchModal(type)
     Switches between 'login' and 'register'
  ══════════════════════════════════════════ */
  window.switchModal = function (type) {
    var lp = document.getElementById('m-login');
    var rp = document.getElementById('m-register');
    if (lp) lp.style.display = type === 'login'    ? 'block' : 'none';
    if (rp) rp.style.display = type === 'register' ? 'block' : 'none';
  };

  /* ══════════════════════════════════════════
     PUBLIC — handleLogin()
     Called when user clicks Sign In or
     Create Account button.

     Phase 1: stores login in localStorage.
     Phase 2: swap with Supabase auth call.
  ══════════════════════════════════════════ */
  window.handleLogin = function () {
    /* ── Grab form values ── */
    var emailInput = document.querySelector('#m-login input[type="email"], #m-register input[type="email"]');
    var nameInput  = document.querySelector('#m-register input[type="text"]');
    var email = emailInput ? emailInput.value.trim() : '';
    var name  = nameInput  ? nameInput.value.trim()  : '';

    /* ── Basic validation ── */
    if (!email || email.indexOf('@') === -1) {
      alert('Please enter a valid email address.');
      return;
    }

    /* ── Save to localStorage — PERMANENT ── */
    localStorage.setItem(LOGIN_KEY, 'true');
    if (email) localStorage.setItem(EMAIL_KEY, email);
    if (name)  localStorage.setItem(NAME_KEY,  name);

    /* ── Close modal and update UI ── */
    window.closeModal();
    onLoginSuccess();
  };

  /* ══════════════════════════════════════════
     PRIVATE — onLoginSuccess()
     Called after any successful login.
     Updates the header nav and re-renders
     the current topic if on topic page.
  ══════════════════════════════════════════ */
  function onLoginSuccess() {
    var name  = localStorage.getItem(NAME_KEY)  || '';
    var email = localStorage.getItem(EMAIL_KEY) || '';
    var displayName = name || email.split('@')[0] || 'Reader';

    /* Update header nav */
    var nav = document.getElementById('header-nav');
    if (nav) {
      nav.innerHTML =
        '<span style="font-family:\'JetBrains Mono\',monospace;font-size:12px;'
        + 'color:var(--gold);margin-right:8px;white-space:nowrap">'
        + '● ' + displayName + '</span>'
        + '<button class="nav-btn nav-ghost" '
        + 'onclick="window.location.href=\'index.html\'">Home</button>'
        + '<button class="nav-btn nav-outline" '
        + 'onclick="handleSignOut()">Sign Out</button>';
    }

    /* If on topic page — re-render current topic unlocked */
    if (typeof loadSubject === 'function'
        && typeof currentSubjectKey !== 'undefined'
        && typeof currentTopicIndex !== 'undefined') {
      loadSubject(currentSubjectKey, currentTopicIndex);
    }
  }

  /* ══════════════════════════════════════════
     PUBLIC — handleSignOut()
     Clears ALL stored login data from
     localStorage. User must register/login
     again to access locked content.
  ══════════════════════════════════════════ */
  window.handleSignOut = function () {
    localStorage.removeItem(LOGIN_KEY);
    localStorage.removeItem(EMAIL_KEY);
    localStorage.removeItem(NAME_KEY);
    window.location.reload();
  };

  /* ══════════════════════════════════════════
     AUTO-RESTORE on every page load
     If localStorage says the user is logged in,
     restore their nav state immediately —
     no need to log in again ever.
  ══════════════════════════════════════════ */
  document.addEventListener('DOMContentLoaded', function () {
    if (window.isLoggedIn()) {
      onLoginSuccess();
    }

    /* Close modal on Escape */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') window.closeModal();
    });
  });

})();
