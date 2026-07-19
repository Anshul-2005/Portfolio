/* ============================================
   NOIR BREW — Coffee Shop Landing Page
   JavaScript — Interactions & Animations
   ============================================ */

(function () {
  'use strict';

  /* ========== LOADER ========== */
  var loader = document.getElementById('loader');

  window.addEventListener('load', function () {
    setTimeout(function () {
      loader.classList.add('hidden');
      document.body.classList.add('loaded');
      initReveals();
      startCounters();
    }, 2200);
  });

  /* ========== NAVIGATION ========== */
  var nav = document.getElementById('nav');
  var hamburger = document.getElementById('hamburger');
  var mobileOverlay = document.getElementById('mobileOverlay');
  var mobileLinks = document.querySelectorAll('.mobile-link');

  // Scroll behavior
  window.addEventListener('scroll', function () {
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollY > 80) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    // Back to top
    var backBtn = document.getElementById('backToTop');
    if (scrollY > 600) {
      backBtn.classList.add('visible');
    } else {
      backBtn.classList.remove('visible');
    }
  });

  // Hamburger
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    mobileOverlay.classList.toggle('open');
    document.body.style.overflow = mobileOverlay.classList.contains('open') ? 'hidden' : '';
  });

  mobileLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('active');
      mobileOverlay.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Back to top
  document.getElementById('backToTop').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ========== SMOOTH SCROLL ========== */
  document.querySelectorAll('a[href^="#"]').forEach(function(link){

    link.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        }

    });

});

  /* ========== REVEAL ON SCROLL ========== */
  function initReveals() {
    var reveals = document.querySelectorAll('.reveal');

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(function (el, i) {
      // Stagger siblings
      var parent = el.parentElement;
      if (parent) {
        var siblings = parent.querySelectorAll(':scope > .reveal');
        if (siblings.length > 1) {
          var idx = Array.prototype.indexOf.call(siblings, el);
          el.style.transitionDelay = (idx * 0.1) + 's';
        }
      }
      observer.observe(el);
    });
  }

  /* ========== HERO PARTICLES ========== */
  var particlesContainer = document.getElementById('heroParticles');

  function createParticles() {
    for (var i = 0; i < 20; i++) {
      var p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.setProperty('--dur', (6 + Math.random() * 8) + 's');
      p.style.setProperty('--delay', (Math.random() * 8) + 's');
      p.style.width = (2 + Math.random() * 3) + 'px';
      p.style.height = p.style.width;
      particlesContainer.appendChild(p);
    }
  }

  createParticles();

  /* ========== HERO PARALLAX ========== */
  var heroImg = document.querySelector('.hero-img');
  var heroContent = document.querySelector('.hero-content');

  window.addEventListener('scroll', function () {
    var scrollY = window.pageYOffset;
    var winH = window.innerHeight;

    if (scrollY < winH * 1.5) {
      if (heroImg) {
        heroImg.style.transform = 'scale(' + (1.1 + scrollY * 0.0002) + ') translateY(' + (scrollY * 0.15) + 'px)';
      }
      if (heroContent) {
        heroContent.style.transform = 'translateY(' + (scrollY * 0.25) + 'px)';
        heroContent.style.opacity = 1 - (scrollY / (winH * 0.7));
      }
    }
  });

  /* ========== COUNTER ANIMATION ========== */
  function startCounters() {
    var counters = document.querySelectorAll('.stat-number');
    var started = false;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !started) {
          started = true;
          counters.forEach(function (counter) {
            var target = parseInt(counter.getAttribute('data-target'));
            var duration = 2000;
            var start = 0;
            var startTime = null;

            function step(timestamp) {
              if (!startTime) startTime = timestamp;
              var progress = Math.min((timestamp - startTime) / duration, 1);
              var eased = 1 - Math.pow(1 - progress, 3); // ease out cubic
              counter.textContent = Math.floor(eased * target);
              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                counter.textContent = target;
              }
            }

            requestAnimationFrame(step);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    if (counters.length > 0) {
      observer.observe(counters[0].closest('.hero-stats'));
    }
  }

  /* ========== MENU TABS ========== */
  var tabs = document.querySelectorAll('.menu-tab');
  var panels = document.querySelectorAll('.menu-panel');

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var target = this.getAttribute('data-tab');

      tabs.forEach(function (t) { t.classList.remove('active'); });
      this.classList.add('active');

      panels.forEach(function (panel) {
        if (panel.getAttribute('data-panel') === target) {
          panel.classList.add('active');
          // Re-trigger reveals in new panel
          panel.querySelectorAll('.reveal').forEach(function (el, i) {
            el.classList.remove('active');
            el.style.transitionDelay = (i * 0.06) + 's';
            setTimeout(function () { el.classList.add('active'); }, 50);
          });
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });

  /* ========== GALLERY LIGHTBOX ========== */
  var galleryItems = document.querySelectorAll('.gallery-item');
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxCaption = document.getElementById('lightboxCaption');
  var lightboxClose = document.getElementById('lightboxClose');

  galleryItems.forEach(function (item) {
    item.addEventListener('click', function () {
      var img = this.querySelector('img');
      var caption = this.getAttribute('data-caption');
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxCaption.textContent = caption || '';
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) {
      closeLightbox();
    }
  });

  /* ========== TESTIMONIALS SLIDER ========== */
  var track = document.getElementById('testimonialTrack');
  var cards = track.querySelectorAll('.testimonial-card');
  var prevBtn = document.getElementById('sliderPrev');
  var nextBtn = document.getElementById('sliderNext');
  var dotsContainer = document.getElementById('sliderDots');
  var currentSlide = 0;
  var totalSlides = cards.length;
  var autoSlideTimer;

  // Create dots
  for (var i = 0; i < totalSlides; i++) {
    var dot = document.createElement('div');
    dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('data-index', i);
    dot.addEventListener('click', function () {
      goToSlide(parseInt(this.getAttribute('data-index')));
    });
    dotsContainer.appendChild(dot);
  }

  var dots = dotsContainer.querySelectorAll('.slider-dot');

  function goToSlide(index) {
    currentSlide = index;
    track.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
    dots.forEach(function (d, di) {
      d.classList.toggle('active', di === currentSlide);
    });
    resetAutoSlide();
  }

  function nextSlide() {
    goToSlide((currentSlide + 1) % totalSlides);
  }

  function prevSlide() {
    goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
  }

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  function resetAutoSlide() {
    clearInterval(autoSlideTimer);
    autoSlideTimer = setInterval(nextSlide, 5000);
  }

  resetAutoSlide();

  // Touch support
  var touchStartX = 0;
  var touchEndX = 0;

  track.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  track.addEventListener('touchend', function (e) {
    touchEndX = e.changedTouches[0].screenX;
    var diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  }, { passive: true });

  /* ========== RESERVATION FORM ========== */
  var form = document.getElementById('reservationForm');
  var formSuccess = document.getElementById('formSuccess');

  // Set min date to today
  var dateInput = document.getElementById('resDate');
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  dateInput.setAttribute('min', yyyy + '-' + mm + '-' + dd);

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Simple validation visual
    var inputs = form.querySelectorAll('input[required], select[required]');
    var valid = true;

    inputs.forEach(function (inp) {
      if (!inp.value.trim()) {
        inp.style.borderColor = '#e74c3c';
        valid = false;
        setTimeout(function () { inp.style.borderColor = ''; }, 2000);
      }
    });

    if (!valid) return;

    // Show success
    form.classList.add('hidden');
    formSuccess.classList.add('show');

    // Reset after delay
    setTimeout(function () {
      form.reset();
      form.classList.remove('hidden');
      formSuccess.classList.remove('show');
    }, 5000);
  });

  /* ========== FORM INPUT ANIMATIONS ========== */
  var formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');

  formInputs.forEach(function (input) {
    input.addEventListener('focus', function () {
      this.parentElement.classList.add('focused');
    });
    input.addEventListener('blur', function () {
      this.parentElement.classList.remove('focused');
    });
  });

  /* ========== PARALLAX SECTIONS ========== */
  window.addEventListener('scroll', function () {
    var scrollY = window.pageYOffset;

    // CTA banner parallax
    var ctaBg = document.querySelector('.cta-bg img');
    if (ctaBg) {
      var ctaSection = document.querySelector('.cta-banner');
      var ctaRect = ctaSection.getBoundingClientRect();
      if (ctaRect.top < window.innerHeight && ctaRect.bottom > 0) {
        var progress = -ctaRect.top / window.innerHeight;
        ctaBg.style.transform = 'translateY(' + (progress * 40) + 'px) scale(1.05)';
      }
    }
  });

  /* ========== MENU ITEM HOVER ANIMATIONS ========== */
  var menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach(function (item) {
    item.addEventListener('mouseenter', function () {
      var line = this.querySelector('.menu-line');
      if (line) {
        line.style.width = '80px';
        line.style.background = 'var(--gold)';
      }
    });

    item.addEventListener('mouseleave', function () {
      var line = this.querySelector('.menu-line');
      if (line) {
        line.style.width = '60px';
        line.style.background = 'var(--border)';
      }
    });
  });

  /* ========== GALLERY HOVER TILT ========== */
  galleryItems.forEach(function (item) {
    item.addEventListener('mousemove', function (e) {
      var rect = item.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width;
      var y = (e.clientY - rect.top) / rect.height;
      var tiltX = (y - 0.5) * -6;
      var tiltY = (x - 0.5) * 6;
      item.style.transform = 'perspective(600px) rotateX(' + tiltX + 'deg) rotateY(' + tiltY + 'deg)';
    });

    item.addEventListener('mouseleave', function () {
      item.style.transform = 'perspective(600px) rotateX(0) rotateY(0)';
    });
  });

  /* ========== NAVBAR ACTIVE LINK ========== */
  var sections = document.querySelectorAll('section[id]');
  var navAnchors = document.querySelectorAll('.nav-link:not(.nav-cta)');

  window.addEventListener('scroll', function () {
    var scrollY = window.pageYOffset;

    sections.forEach(function (section) {
      var top = section.offsetTop - 200;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navAnchors.forEach(function (a) {
          a.style.color = '';
          if (a.getAttribute('href') === '#' + id) {
            a.style.color = 'var(--gold)';
          }
        });
      }
    });
  });

  /* ========== REDUCED MOTION ========== */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('active');
      el.style.transitionDelay = '0s';
    });
  }

})();
