/* ============================================
   ANSHUL VERMA — PORTFOLIO
   JavaScript — Interactions & Animations
   ============================================ */

(function () {
  'use strict';

  /* ---------- LOADER ---------- */
  const loader = document.getElementById('loader');

  window.addEventListener('load', function () {
    setTimeout(function () {
      loader.classList.add('hidden');
      document.body.style.overflow = 'auto';
      initRevealAnimations();
    }, 1800);
  });

  // Prevent scrolling during load
  document.body.style.overflow = 'hidden';

  /* ---------- CUSTOM CURSOR ---------- */
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  let followerX = 0;
  let followerY = 0;

  document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;
    followerX += (mouseX - followerX) * 0.08;
    followerY += (mouseY - followerY) * 0.08;

    if (cursor) {
      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';
    }
    if (follower) {
      follower.style.left = followerX + 'px';
      follower.style.top = followerY + 'px';
    }

    requestAnimationFrame(animateCursor);
  }

  animateCursor();

  // Hover effect on interactive elements
  var hoverTargets = document.querySelectorAll('a, button, .skill-tag, .tool-card, .philosophy-card, .project-card, .cert-card, .hire-card, .btn');

  hoverTargets.forEach(function (el) {
    el.addEventListener('mouseenter', function () {
      if (cursor) cursor.classList.add('hovering');
      if (follower) follower.classList.add('hovering');
    });
    el.addEventListener('mouseleave', function () {
      if (cursor) cursor.classList.remove('hovering');
      if (follower) follower.classList.remove('hovering');
    });
  });

  /* ---------- NAVIGATION SCROLL ---------- */
  var nav = document.getElementById('nav');
  var lastScrollY = 0;

  window.addEventListener('scroll', function () {
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    lastScrollY = scrollY;
  });

  /* ---------- MOBILE MENU ---------- */
  var navToggle = document.getElementById('navToggle');
  var mobileMenu = document.getElementById('mobileMenu');
  var mobileLinks = document.querySelectorAll('.mobile-link');

  navToggle.addEventListener('click', function () {
    navToggle.classList.toggle('active');
    mobileMenu.classList.toggle('open');

    if (mobileMenu.classList.contains('open')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  });

  mobileLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      navToggle.classList.remove('active');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = 'auto';
    });
  });

  /* ---------- SMOOTH SCROLL ---------- */
  var internalLinks = document.querySelectorAll('.nav-link[href^="#"], .mobile-link[href^="#"]');

  internalLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;

      var target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      if (mobileMenu.classList.contains('open')) {
        navToggle.classList.remove('active');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = 'auto';
      }

      var headerHeight = nav.offsetHeight;
      var targetPadding = parseFloat(getComputedStyle(target).paddingTop) || 0;
      var offset = target.getBoundingClientRect().top + window.pageYOffset + targetPadding - headerHeight;

      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });

      history.replaceState(null, null, targetId);
    });
  });

  /* ---------- REVEAL ON SCROLL ---------- */
  function initRevealAnimations() {
    var reveals = document.querySelectorAll('.reveal');

    var observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px'
    };

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    reveals.forEach(function (el, index) {
      // Stagger delay for sibling reveals
      var parent = el.parentElement;
      if (parent) {
        var siblings = parent.querySelectorAll(':scope > .reveal');
        if (siblings.length > 1) {
          var siblingIndex = Array.prototype.indexOf.call(siblings, el);
          el.style.transitionDelay = (siblingIndex * 0.1) + 's';
        }
      }
      observer.observe(el);
    });
  }

  /* ---------- PARALLAX ---------- */
  var heroGlow1 = document.querySelector('.hero-glow-1');
  var heroGlow2 = document.querySelector('.hero-glow-2');
  var floatShapes = document.querySelectorAll('.float-shape');
  var heroContent = document.querySelector('.hero-content');

  window.addEventListener('scroll', function () {
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    var windowHeight = window.innerHeight;

    // Only run parallax when hero is visible
    if (scrollY < windowHeight * 1.5) {
      var parallaxAmount = scrollY * 0.3;

      if (heroGlow1) {
        heroGlow1.style.transform = 'translate(0, ' + (parallaxAmount * 0.5) + 'px) scale(1)';
      }
      if (heroGlow2) {
        heroGlow2.style.transform = 'translate(0, ' + (-parallaxAmount * 0.3) + 'px) scale(1)';
      }

      floatShapes.forEach(function (shape, i) {
        var speed = (i + 1) * 0.15;
        shape.style.transform = 'rotate(' + (scrollY * speed) + 'deg) translateY(' + (parallaxAmount * speed) + 'px)';
      });

      if (heroContent) {
        heroContent.style.transform = 'translateY(' + (parallaxAmount * 0.15) + 'px)';
        heroContent.style.opacity = 1 - (scrollY / (windowHeight * 0.8));
      }
    }
  });

  /* ---------- MOUSE MOVE PARALLAX (HERO) ---------- */
  var hero = document.querySelector('.hero');

  if (hero) {
    hero.addEventListener('mousemove', function (e) {
      var rect = hero.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;

      floatShapes.forEach(function (shape, i) {
        var depth = (i + 1) * 15;
        shape.style.transform += ' translate(' + (x * depth) + 'px, ' + (y * depth) + 'px)';
      });

      if (heroGlow1) {
        heroGlow1.style.transform += ' translate(' + (x * 20) + 'px, ' + (y * 20) + 'px)';
      }
      if (heroGlow2) {
        heroGlow2.style.transform += ' translate(' + (-x * 15) + 'px, ' + (-y * 15) + 'px)';
      }
    });
  }

  /* ---------- TOOL CARD MOUSE TRACKING ---------- */
  var toolCards = document.querySelectorAll('.tool-card');

  toolCards.forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      var rect = card.getBoundingClientRect();
      var x = ((e.clientX - rect.left) / rect.width) * 100;
      var y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', x + '%');
      card.style.setProperty('--mouse-y', y + '%');
    });
  });

  /* ---------- PROJECT CARD TILT ---------- */
  var projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      var rect = card.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width;
      var y = (e.clientY - rect.top) / rect.height;
      var tiltX = (y - 0.5) * -2;
      var tiltY = (x - 0.5) * 6;

      card.style.transform = 'perspective(800px) rotateX(' + tiltX + 'deg) rotateY(' + tiltY + 'deg) translateY(-6px)';
    });

    card.addEventListener('mouseleave', function () {
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });

  /* ---------- MAGNETIC BUTTONS ---------- */
  var magneticBtns = document.querySelectorAll('.btn-primary, .btn-ghost');

  magneticBtns.forEach(function (btn) {
    btn.addEventListener('mousemove', function (e) {
      var rect = btn.getBoundingClientRect();
      var x = e.clientX - rect.left - rect.width / 2;
      var y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform = 'translate(' + (x * 0.15) + 'px, ' + (y * 0.15 - 2) + 'px)';
    });

    btn.addEventListener('mouseleave', function () {
      btn.style.transform = 'translate(0, 0)';
    });
  });

  /* ---------- ACTIVE NAV LINK ---------- */
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-link:not(.nav-link-cta)');

  window.addEventListener('scroll', function () {
    var scrollY = window.pageYOffset;

    sections.forEach(function (section) {
      var sectionTop = section.offsetTop - 200;
      var sectionHeight = section.offsetHeight;
      var sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(function (link) {
          link.classList.remove('active-link');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active-link');
          }
        });
      }
    });
  });

  /* ---------- TYPED EFFECT FOR HERO (subtle) ---------- */
  var heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    var lines = heroTitle.querySelectorAll('.hero-line');
    lines.forEach(function (line, i) {
      line.style.opacity = '0';
      line.style.transform = 'translateY(30px)';
      line.style.transition = 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
      line.style.transitionDelay = (0.3 + i * 0.15) + 's';
    });

    // Trigger after loader
    setTimeout(function () {
      lines.forEach(function (line) {
        line.style.opacity = '1';
        line.style.transform = 'translateY(0)';
      });
    }, 1900);
  }

  /* ---------- SMOOTH COUNTER ANIMATION (for future use) ---------- */
  function animateCounter(el, target, duration) {
    var start = 0;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var value = Math.floor(progress * target);
      el.textContent = value;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
    }

    requestAnimationFrame(step);
  }

  /* ---------- SKILL TAG STAGGER ---------- */
  var skillTags = document.querySelectorAll('.skill-tag');
  skillTags.forEach(function (tag, i) {
    tag.style.transitionDelay = (i * 0.04) + 's';
  });

  /* ---------- SECTION DIVIDER PARALLAX ---------- */
  window.addEventListener('scroll', function () {
    var scrolled = window.pageYOffset;
    var sectionLabels = document.querySelectorAll('.section-label .label-line');

    sectionLabels.forEach(function (line) {
      var rect = line.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        var progress = 1 - (rect.top / window.innerHeight);
        line.style.width = (40 + progress * 40) + 'px';
      }
    });
  });

  /* ---------- NAV LINK ACTIVE STYLE ---------- */
  var style = document.createElement('style');
  style.textContent = '.nav-link.active-link { color: var(--text-primary); } .nav-link.active-link::after { width: 100%; }';
  document.head.appendChild(style);

  /* ---------- PREFERS REDUCED MOTION ---------- */
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (prefersReducedMotion.matches) {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('active');
      el.style.transitionDelay = '0s';
    });

    if (cursor) cursor.style.display = 'none';
    if (follower) follower.style.display = 'none';
  }

  /* ---------- RESIZE HANDLER ---------- */
  var resizeTimer;
  window.addEventListener('resize', function () {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      document.body.classList.remove('resize-animation-stopper');
    }, 400);
  });

  // Prevent animation jank on resize
  var resizeStyle = document.createElement('style');
  resizeStyle.textContent = '.resize-animation-stopper * { animation: none !important; transition: none !important; }';
  document.head.appendChild(resizeStyle);

})();
