/* ============================================
   TASKFLOW — SaaS Landing Page
   Vanilla JavaScript — Beginner Level
   ============================================ */

(function () {
  'use strict';

  /* === LOADER === */
  var loader = document.getElementById('loader');
  window.addEventListener('load', function () {
    setTimeout(function () {
      loader.classList.add('hidden');
      initReveals();
    }, 1200);
  });

  /* === NAVIGATION === */
  var nav = document.getElementById('nav');
  var burger = document.getElementById('navBurger');
  var mobileMenu = document.getElementById('mobileMenu');
  var mobileLinks = document.querySelectorAll('.mm-link, .mobile-menu .btn');

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  mobileLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      burger.classList.remove('active');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* === SMOOTH SCROLL === */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });

  /* === SCROLL REVEAL === */
  function initReveals() {
    var reveals = document.querySelectorAll('.reveal');
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var parent = entry.target.parentElement;
          if (parent) {
            var siblings = parent.querySelectorAll(':scope > .reveal');
            if (siblings.length > 1) {
              var idx = Array.from(siblings).indexOf(entry.target);
              entry.target.style.transitionDelay = (idx * 0.08) + 's';
            }
          }
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(function (el) { observer.observe(el); });
  }

  /* === FAQ ACCORDION === */
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var question = item.querySelector('.faq-question');
    question.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');

      // Close all others
      faqItems.forEach(function (other) { other.classList.remove('open'); });

      // Toggle current
      if (!isOpen) {
        item.classList.add('open');
        question.setAttribute('aria-expanded', 'true');
      } else {
        question.setAttribute('aria-expanded', 'false');
      }
    });
  });

  /* === BUTTON PRESS MICRO-INTERACTION === */
  document.querySelectorAll('.btn').forEach(function (btn) {
    btn.addEventListener('mousedown', function () {
      this.style.transform = 'scale(0.97)';
    });
    btn.addEventListener('mouseup', function () {
      this.style.transform = '';
    });
    btn.addEventListener('mouseleave', function () {
      this.style.transform = '';
    });
  });

  /* === REDUCED MOTION === */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('active');
      el.style.transitionDelay = '0s';
    });
  }

})();
