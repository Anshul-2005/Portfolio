/* ============================================
   WANDERLUX TRAVEL — Travel Agency Landing Page
   JavaScript — Interactions & Animations
   Author: Anshul Verma
   ============================================ */

(function () {
  'use strict';

  /* ==========================================
     DOM ELEMENTS
     ========================================== */
  const loader = document.getElementById('loader');
  const header = document.getElementById('header');
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-cta');
  const backToTop = document.getElementById('backToTop');
  
  /* ==========================================
     LOADER
     - Hide loader after page loads
     - Trigger initial animations
     ========================================== */
  window.addEventListener('load', function () {
    // Wait for loader animation to complete
    setTimeout(function () {
      loader.classList.add('hidden');
      document.body.classList.add('loaded');
      
      // Initialize all modules after loader
      initScrollReveal();
      initCounters();
      startOfferCountdown();
    }, 2400);
  });

  /* ==========================================
     NAVIGATION
     - Scroll detection for sticky nav
     - Mobile menu toggle
     ========================================== */
  
  // Scroll detection for header styling
  let lastScrollY = 0;
  let ticking = false;
  
  function updateHeader() {
    const scrollY = window.pageYOffset;
    
    // Add/remove scrolled class
    if (scrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Show/hide back to top button
    if (scrollY > 600) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
    
    lastScrollY = scrollY;
    ticking = false;
  }
  
  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(updateHeader);
      ticking = true;
    }
  });
  
  // Mobile menu toggle
  navToggle.addEventListener('click', function () {
    const isOpen = mobileMenu.classList.contains('open');
    
    navToggle.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    mobileMenu.setAttribute('aria-hidden', isOpen);
    navToggle.setAttribute('aria-expanded', !isOpen);
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = isOpen ? '' : 'hidden';
  });
  
  // Close mobile menu when link is clicked
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      navToggle.classList.remove('active');
      mobileMenu.classList.remove('open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
  
  // Back to top button
  backToTop.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  /* ==========================================
     SMOOTH SCROLL
     - Smooth scrolling for anchor links
     ========================================== */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

  /* ==========================================
     SCROLL REVEAL ANIMATIONS
     - Intersection Observer for reveal effects
     ========================================== */
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Add stagger delay for sibling elements
          const parent = entry.target.parentElement;
          if (parent) {
            const siblings = parent.querySelectorAll(':scope > .reveal');
            if (siblings.length > 1) {
              const index = Array.from(siblings).indexOf(entry.target);
              entry.target.style.transitionDelay = (index * 0.1) + 's';
            }
          }
          
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    reveals.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ==========================================
     COUNTER ANIMATIONS
     - Animate numbers on scroll
     ========================================== */
  function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    let animated = false;
    
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !animated) {
          animated = true;
          animateCounters(counters);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    // Observe the hero stats section
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
      observer.observe(heroStats);
    }
    
    // Also observe statistics section
    const statisticsSection = document.querySelector('.statistics');
    if (statisticsSection) {
      const statObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const statNums = entry.target.querySelectorAll('.stat-num');
            animateCounters(statNums);
            statObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });
      
      statObserver.observe(statisticsSection);
    }
  }
  
  function animateCounters(counters) {
    counters.forEach(function (counter) {
      const target = parseInt(counter.getAttribute('data-count') || counter.textContent);
      const duration = 2000;
      const startTime = performance.now();
      
      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * target);
        
        counter.textContent = formatNumber(current);
        
        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = formatNumber(target);
        }
      }
      
      requestAnimationFrame(updateCounter);
    });
  }
  
  // Format large numbers with commas
  function formatNumber(num) {
    if (num >= 1000) {
      return num.toLocaleString();
    }
    return num;
  }

  /* ==========================================
     HERO PARALLAX
     - Parallax effect on hero background
     ========================================== */
  const heroImg = document.querySelector('.hero-bg-img');
  const heroContent = document.querySelector('.hero-content');
  const floatingShapes = document.querySelectorAll('.floating-shape');
  
  window.addEventListener('scroll', function () {
    const scrollY = window.pageYOffset;
    const windowHeight = window.innerHeight;
    
    // Only apply parallax when hero is visible
    if (scrollY < windowHeight * 1.5) {
      // Parallax on hero image
      if (heroImg) {
        heroImg.style.transform = 'scale(' + (1.1 + scrollY * 0.0001) + ') translateY(' + (scrollY * 0.2) + 'px)';
      }
      
      // Fade out hero content on scroll
      if (heroContent) {
        const opacity = 1 - (scrollY / (windowHeight * 0.6));
        heroContent.style.opacity = Math.max(0, opacity);
        heroContent.style.transform = 'translateY(' + (scrollY * 0.3) + 'px)';
      }
      
      // Parallax floating shapes
      floatingShapes.forEach(function (shape, index) {
        const speed = (index + 1) * 0.1;
        shape.style.transform = 'rotate(' + (scrollY * speed) + 'deg)';
      });
    }
  });

  /* ==========================================
     GALLERY LIGHTBOX
     - Open images in lightbox
     ========================================== */
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  
  galleryItems.forEach(function (item) {
    item.addEventListener('click', function () {
      const img = this.querySelector('img');
      const caption = this.getAttribute('data-caption');
      
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxCaption.textContent = caption || '';
      
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });
  
  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  
  lightboxClose.addEventListener('click', closeLightbox);
  
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
  
  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) {
      closeLightbox();
    }
  });

  /* ==========================================
     TESTIMONIALS SLIDER
     - Auto-playing carousel with controls
     ========================================== */
  const track = document.getElementById('testimonialsTrack');
  const cards = track ? track.querySelectorAll('.testimonial-card') : [];
  const prevBtn = document.getElementById('sliderPrev');
  const nextBtn = document.getElementById('sliderNext');
  const dotsContainer = document.getElementById('sliderDots');
  
  let currentSlide = 0;
  const totalSlides = cards.length;
  let autoSlideInterval;
  
  // Create dots
  if (dotsContainer && totalSlides > 0) {
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('div');
      dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('data-index', i);
      dot.addEventListener('click', function () {
        goToSlide(parseInt(this.getAttribute('data-index')));
      });
      dotsContainer.appendChild(dot);
    }
  }
  
  const dots = dotsContainer ? dotsContainer.querySelectorAll('.slider-dot') : [];
  
  function goToSlide(index) {
    currentSlide = index;
    
    if (track) {
      track.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
    }
    
    // Update dots
    dots.forEach(function (dot, i) {
      dot.classList.toggle('active', i === currentSlide);
    });
    
    resetAutoSlide();
  }
  
  function nextSlide() {
    goToSlide((currentSlide + 1) % totalSlides);
  }
  
  function prevSlide() {
    goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
  }
  
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  
  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 5000);
  }
  
  if (totalSlides > 0) {
    resetAutoSlide();
  }
  
  // Touch/swipe support
  let touchStartX = 0;
  let touchEndX = 0;
  
  if (track) {
    track.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    track.addEventListener('touchend', function (e) {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    }, { passive: true });
  }

  /* ==========================================
     SPECIAL OFFER COUNTDOWN TIMER
     - Countdown to offer end date
     ========================================== */
  function startOfferCountdown() {
    const timerElement = document.getElementById('offerTimer');
    if (!timerElement) return;
    
    const endDate = new Date(timerElement.getAttribute('data-end')).getTime();
    
    function updateTimer() {
      const now = new Date().getTime();
      const distance = endDate - now;
      
      if (distance < 0) {
        document.getElementById('timerDays').textContent = '00';
        document.getElementById('timerHours').textContent = '00';
        document.getElementById('timerMins').textContent = '00';
        document.getElementById('timerSecs').textContent = '00';
        return;
      }
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      document.getElementById('timerDays').textContent = String(days).padStart(2, '0');
      document.getElementById('timerHours').textContent = String(hours).padStart(2, '0');
      document.getElementById('timerMins').textContent = String(minutes).padStart(2, '0');
      document.getElementById('timerSecs').textContent = String(seconds).padStart(2, '0');
    }
    
    updateTimer();
    setInterval(updateTimer, 1000);
  }

  /* ==========================================
     BOOKING FORM
     - Form validation and submission
     ========================================== */
  const bookingForm = document.getElementById('bookingForm');
  const bookingSuccess = document.getElementById('bookingSuccess');
  
  if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
      e.preventDefault();
      
      // Simple validation
      const inputs = bookingForm.querySelectorAll('[required]');
      let isValid = true;
      
      inputs.forEach(function (input) {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = '#f472b6';
          
          setTimeout(function () {
            input.style.borderColor = '';
          }, 2000);
        }
      });
      
      if (!isValid) return;
      
      // Show success message
      bookingForm.classList.add('hidden');
      bookingSuccess.classList.add('show');
      
      // Reset after delay
      setTimeout(function () {
        bookingForm.reset();
        bookingForm.classList.remove('hidden');
        bookingSuccess.classList.remove('show');
      }, 5000);
    });
  }

  /* ==========================================
     NEWSLETTER FORM
     - Newsletter subscription handling
     ========================================== */
  const newsletterForm = document.getElementById('newsletterForm');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      
      const input = newsletterForm.querySelector('input');
      const btn = newsletterForm.querySelector('button');
      
      if (input.value.trim()) {
        btn.textContent = 'Subscribed!';
        btn.style.background = 'var(--gradient-warm)';
        input.value = '';
        
        setTimeout(function () {
          btn.textContent = 'Subscribe';
          btn.style.background = '';
        }, 3000);
      }
    });
  }

  /* ==========================================
     CATEGORY CARDS INTERACTION
     - Enhanced hover effects
     ========================================== */
  const categoryCards = document.querySelectorAll('.category-card');
  
  categoryCards.forEach(function (card) {
    card.addEventListener('mouseenter', function () {
      // Add floating animation
      this.style.animation = 'cardFloat 0.5s ease forwards';
    });
    
    card.addEventListener('mouseleave', function () {
      this.style.animation = '';
    });
  });

  /* ==========================================
     DESTINATION CARDS TILT EFFECT
     - 3D tilt on hover
     ========================================== */
  const destinationCards = document.querySelectorAll('.destination-card');
  
  destinationCards.forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      const tiltX = (y - 0.5) * -8;
      const tiltY = (x - 0.5) * 8;
      
      card.style.transform = 'perspective(1000px) rotateX(' + tiltX + 'deg) rotateY(' + tiltY + 'deg) translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function () {
      card.style.transform = '';
    });
  });

  /* ==========================================
     PACKAGE WISHLIST TOGGLE
     - Toggle wishlist button state
     ========================================== */
  const wishlistBtns = document.querySelectorAll('.package-wishlist');
  
  wishlistBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      
      const svg = this.querySelector('svg');
      const isActive = this.classList.contains('active');
      
      this.classList.toggle('active');
      
      if (!isActive) {
        svg.style.fill = 'var(--color-secondary)';
        svg.style.stroke = 'var(--color-secondary)';
        
        // Add pulse animation
        this.style.animation = 'wishlistPulse 0.4s ease';
        setTimeout(() => {
          this.style.animation = '';
        }, 400);
      } else {
        svg.style.fill = 'none';
        svg.style.stroke = 'currentColor';
      }
    });
  });

  /* ==========================================
     ACTIVE NAV LINK HIGHLIGHTING
     - Highlight current section in nav
     ========================================== */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (!entry.isIntersecting) return;

              const id = entry.target.id;

              navLinks.forEach((link) => {
                  link.classList.toggle(
                      "active",
                      link.getAttribute("href") === "#" + id
                  );
              });
          });
      },
      {
          rootMargin: "-35% 0px -55% 0px",
          threshold: 0
      }
  );

sections.forEach((section) => observer.observe(section));

  /* ==========================================
     SEARCH WIDGET DATE SETUP
     - Set minimum date to today
     ========================================== */
  const searchDate = document.getElementById('searchDate');
  
  if (searchDate) {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    searchDate.setAttribute('min', year + '-' + month);
  }

  /* ==========================================
     REDUCED MOTION SUPPORT
     - Respect user's motion preferences
     ========================================== */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  
  if (prefersReducedMotion.matches) {
    // Disable animations for users who prefer reduced motion
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('active');
      el.style.transitionDelay = '0s';
    });
    
    // Disable auto-slide
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
    }
  }

  /* ==========================================
     RESIZE HANDLER
     - Prevent animation jank on resize
     ========================================== */
  let resizeTimer;
  
  window.addEventListener('resize', function () {
    document.body.classList.add('resize-animation-stopper');
    
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      document.body.classList.remove('resize-animation-stopper');
    }, 400);
  });
  
  // Add resize animation stopper styles dynamically
  const style = document.createElement('style');
  style.textContent = `
    .resize-animation-stopper * {
      animation: none !important;
      transition: none !important;
    }
    
    @keyframes wishlistPulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.3); }
      100% { transform: scale(1.1); }
    }
    
    @keyframes cardFloat {
      0% { transform: translateY(0); }
      100% { transform: translateY(-6px); }
    }
  `;
  document.head.appendChild(style);

  /* ==========================================
     CONSOLE GREETING
     - Fun message for developers
     ========================================== */
  console.log('%c✈️ Wanderlux Travel', 'font-size: 24px; font-weight: bold; color: #2dd4bf;');
  console.log('%cDesigned & Developed by Anshul Verma', 'font-size: 12px; color: #94a3b8;');
  console.log('%chttps://github.com/anshulverma', 'font-size: 11px; color: #64748b;');

})();
