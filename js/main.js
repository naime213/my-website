/**
 * main.js — Core site logic
 * Cursor, scroll progress, works grid, blog grid, partners,
 * form handling, particles, mobile nav, filters, lightbox
 */

(function () {
  "use strict";

  // ─── Custom Cursor ─────────────────────────────────────────────
  function initCursor() {
    const outer = document.getElementById("cursor-outer");
    const inner = document.getElementById("cursor-inner");
    if (!outer || !inner) return;

    let mouseX = 0, mouseY = 0;
    let outerX = 0, outerY = 0;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.to(inner, { x: mouseX, y: mouseY, duration: 0.1 });
    });

    // Lag effect for outer cursor
    (function animateOuter() {
      outerX += (mouseX - outerX) * 0.12;
      outerY += (mouseY - outerY) * 0.12;
      outer.style.left = outerX + "px";
      outer.style.top  = outerY + "px";
      requestAnimationFrame(animateOuter);
    })();

    // Hover interactions
    function addHoverListeners() {
      document.querySelectorAll("a, button, .film-card, .blog-card, .filter-btn, .skill-tag").forEach(el => {
        el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
        el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
      });
    }

    addHoverListeners();
    document.addEventListener("langChanged", addHoverListeners);
    document.addEventListener("gridRendered", addHoverListeners);
  }

  // ─── Scroll Progress Bar ────────────────────────────────────────
  function initScrollProgress() {
    const bar = document.getElementById("scroll-progress");
    if (!bar) return;
    window.addEventListener("scroll", () => {
      const totalH  = document.documentElement.scrollHeight - window.innerHeight;
      const percent = totalH > 0 ? (window.scrollY / totalH) * 100 : 0;
      bar.style.width = percent + "%";
    }, { passive: true });
  }

  // ─── Back to Top ───────────────────────────────────────────────
  function initBackToTop() {
    const btn = document.getElementById("back-to-top");
    if (!btn) return;
    window.addEventListener("scroll", () => {
      btn.classList.toggle("visible", window.scrollY > 500);
    }, { passive: true });
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ─── Particles Canvas ──────────────────────────────────────────
  function initParticles() {
    const canvas = document.getElementById("particles-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W, H, particles = [];

    function resize() {
      const hero = document.getElementById("hero");
      W = canvas.width  = hero ? hero.offsetWidth  : window.innerWidth;
      H = canvas.height = hero ? hero.offsetHeight : window.innerHeight;
    }

    function createParticles() {
      particles = [];
      const count = Math.floor(W / 18);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 1.2 + 0.3,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          alpha: Math.random() * 0.4 + 0.1
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${p.alpha})`;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
      });
      requestAnimationFrame(draw);
    }

    resize();
    createParticles();
    draw();
    window.addEventListener("resize", () => { resize(); createParticles(); });
  }

  // ─── Mobile Navigation ─────────────────────────────────────────
  function initMobileNav() {
    const menuBtn = document.getElementById("nav-menu-btn");
    const mobileNav = document.getElementById("nav-mobile");
    if (!menuBtn || !mobileNav) return;

    menuBtn.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    mobileNav.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  // ─── Awards Grid Renderer ───────────────────────────────────────
  window.renderAwardsGrid = function () {
    const grid = document.getElementById("awards-grid");
    if (!grid) return;
    const lang = window.i18n ? window.i18n.getCurrentLang() : "ar";
    const items = CONTENT[lang].awards.items;

    grid.innerHTML = items.map(item => `
      <div class="laurel-badge anim-scale">
        <svg class="laurel-wing" aria-hidden="true"><use href="#laurel-branch"/></svg>
        <div class="laurel-badge-inner">
          <span class="laurel-icon">${item.icon}</span>
          <div class="laurel-festival">${item.festival}</div>
          <div class="laurel-detail">${item.detail}</div>
        </div>
        <svg class="laurel-wing laurel-wing-r" aria-hidden="true"><use href="#laurel-branch"/></svg>
      </div>
    `).join("");
  };

  // ─── Works Grid Renderer ────────────────────────────────────────
  window.renderWorksGrid = function () {
    const grid = document.getElementById("works-grid");
    if (!grid) return;
    const lang = window.i18n ? window.i18n.getCurrentLang() : "ar";

    // Network groups in display order
    const GROUPS = [
      { cat: "aljazeera", ar: "الجزيرة الوثائقية", en: "Al Jazeera Documentary" },
      { cat: "alaraby",   ar: "تلفزيون العربي",        en: "Al Araby TV" },
      { cat: "ajplus",    ar: "AJ+ عربي",           en: "AJ+ Arabic" },
      { cat: "other",     ar: "وزارة المجاهدين",   en: "Ministry of Mujahideen" }
    ];

    grid.innerHTML = GROUPS.map(group => {
      const films = FILMS
        .map((film, i) => ({ film, i }))
        .filter(({ film }) => film.category === group.cat);
      if (!films.length) return "";

      const label = lang === "ar" ? group.ar : group.en;

      const cardsHTML = films.map(({ film, i }) => {
        const d = film[lang];
        const hasRealUrl = film.youtube && film.youtube !== "#" && !film.youtube.includes("placeholder");
        const soonClass  = !hasRealUrl ? " film-card--soon" : "";
        const soonLabel  = lang === "ar" ? "قريباً" : "Coming Soon";

        return `
          <div class="film-card${soonClass}" data-category="${film.category}" data-index="${i}">
            <div class="film-thumb">
              <div class="film-year">${film.year}</div>
              ${film.impact ? `<div class="film-impact-badge">${film.impact}</div>` : ""}
              <img src="${film.poster}" alt="${d.title}" class="film-poster" loading="lazy"
                onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
              <div class="film-poster-placeholder" style="display:none"><span>${d.network}</span></div>
              <div class="film-play-btn" aria-hidden="true">
                ${hasRealUrl
                  ? `<svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>`
                  : soonLabel}
              </div>
            </div>
            <div class="film-info">
              <h3 class="film-title">${d.title}</h3>
            </div>
          </div>`;
      }).join("");

      return `
        <div class="works-group" data-section="${group.cat}">
          <div class="works-group-head">
            <div class="works-group-line"></div>
            <div class="works-group-info">
              <span class="works-group-label">${label}</span>
              <span class="works-group-count">${films.length}</span>
            </div>
            <div class="works-group-line works-group-line--right"></div>
          </div>
          <div class="works-row">${cardsHTML}</div>
        </div>`;
    }).join("");

    // Click → open film modal
    grid.querySelectorAll(".film-card").forEach(card => {
      card.addEventListener("click", () => {
        const row = card.closest(".works-row");
        if (row && row._wasDragged) { row._wasDragged = false; return; }
        const film = FILMS[parseInt(card.getAttribute("data-index"), 10)];
        if (film) openFilmModal(film);
      });
    });

    initDragScroll();
    document.dispatchEvent(new CustomEvent("gridRendered"));
    applyFilter(currentFilter);
  };

  // ─── Drag-to-scroll for horizontal rows ────────────────────────
  function initDragScroll() {
    document.querySelectorAll(".works-row").forEach(row => {
      row._wasDragged = false;

      // Mouse drag (desktop)
      row.addEventListener("mousedown", e => {
        if (e.button !== 0) return;
        const startX     = e.pageX;
        const scrollLeft = row.scrollLeft;
        row._wasDragged  = false;
        row.classList.add("is-grabbing");

        const onMove = ev => {
          const dx = ev.pageX - startX;
          if (Math.abs(dx) > 5) {
            row._wasDragged = true;
            row.scrollLeft  = scrollLeft - dx;
          }
        };

        const onUp = () => {
          row.classList.remove("is-grabbing");
          document.removeEventListener("mousemove", onMove);
          document.removeEventListener("mouseup",   onUp);
        };

        document.addEventListener("mousemove", onMove);
        document.addEventListener("mouseup",   onUp);
        e.preventDefault();
      });

      // Touch swipe (mobile)
      let touchStartX = 0;
      let touchScrollLeft = 0;

      row.addEventListener("touchstart", e => {
        touchStartX    = e.touches[0].pageX;
        touchScrollLeft = row.scrollLeft;
        row._wasDragged = false;
      }, { passive: true });

      row.addEventListener("touchmove", e => {
        const dx = e.touches[0].pageX - touchStartX;
        if (Math.abs(dx) > 5) {
          row._wasDragged = true;
          row.scrollLeft  = touchScrollLeft - dx;
        }
      }, { passive: true });

      row.addEventListener("touchend", () => {
        setTimeout(() => { row._wasDragged = false; }, 100);
      });
    });
  }

  // ─── Filter Logic ───────────────────────────────────────────────
  let currentFilter = "all";

  function applyFilter(filter) {
    currentFilter = filter;
    document.querySelectorAll(".works-group").forEach(group => {
      const show = filter === "all" || group.getAttribute("data-section") === filter;
      group.classList.toggle("hidden", !show);
    });
  }

  function initFilters() {
    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        applyFilter(btn.getAttribute("data-filter"));
      });
    });
  }

  // ─── Blog Grid Renderer ─────────────────────────────────────────
  window.renderBlogGrid = function () {
    const grid = document.getElementById("blog-grid");
    if (!grid) return;
    const lang = window.i18n ? window.i18n.getCurrentLang() : "ar";
    const t = CONTENT[lang].blog;

    grid.innerHTML = BLOG_POSTS.map(post => {
      const d = post[lang];
      return `
        <article class="blog-card">
          <a href="${post.file}" class="blog-card-link">
            <div class="blog-card-img-wrap">
              <img
                src="${post.cover}"
                alt="${d.title}"
                class="blog-card-img"
                loading="lazy"
                onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
              />
              <div class="blog-card-img-placeholder" style="display:none">${d.title}</div>
              <div class="blog-card-img-overlay"></div>
            </div>
            <div class="blog-card-body">
              <div class="blog-meta">
                <span class="blog-date">${post["date_" + lang] || post.date_ar}</span>
                <div class="blog-meta-dot"></div>
                <span class="blog-readtime">${d.read_time}</span>
              </div>
              <h3 class="blog-card-title">${d.title}</h3>
              <p class="blog-card-excerpt">${d.excerpt}</p>
              <span class="blog-read-more">
                ${t.read_more}
                <svg class="blog-read-more-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </span>
            </div>
          </a>
        </article>
      `;
    }).join("");

    document.dispatchEvent(new CustomEvent("gridRendered"));
  };

  // ─── Partners Track Renderer ────────────────────────────────────
  window.renderPartnersTrack = function () {
    const track = document.getElementById("partners-track");
    if (!track) return;
    const lang = window.i18n ? window.i18n.getCurrentLang() : "ar";

    // Render logos twice for seamless loop
    const items = [...PARTNERS, ...PARTNERS].map(p => `
      <div class="partner-logo-wrap">
        <img
          src="${p.logo}"
          alt="${lang === "ar" ? p.ar : p.name}"
          class="partner-logo"
          onerror="this.style.display='none';this.nextElementSibling.style.display='block';"
          loading="lazy"
        />
        <span class="partner-text" style="display:none">${lang === "ar" ? p.ar : p.name}</span>
      </div>
    `).join("");

    track.innerHTML = items;
  };

  // ─── BTS Film Reel Renderer ─────────────────────────────────────
  function renderBtsTrack() {
    const track = document.querySelector(".film-track");
    if (!track) return;
    const total = BTS_PHOTOS.length;
    const frames = [...BTS_PHOTOS, ...BTS_PHOTOS].map((src, i) => {
      const num = String((i % total) + 1).padStart(2, "0");
      const inner = src
        ? `<img src="${src}" alt="BTS ${num}" loading="eager">`
        : `<span class="film-num">${num}</span>`;
      return `<div class="film-frame" data-num="BTS · ${num}" data-src="${src || ""}"><div class="film-ph">${inner}</div></div>`;
    }).join("");
    track.innerHTML = frames;
  }

  // ─── Film Modal ────────────────────────────────────────────────
  function openFilmModal(film) {
    const lang = window.i18n ? window.i18n.getCurrentLang() : "ar";
    const d    = film[lang];
    const hasUrl = film.youtube && film.youtube !== "#" && !film.youtube.includes("placeholder");

    document.getElementById("film-modal-poster").src    = film.poster;
    document.getElementById("film-modal-poster").alt    = d.title;
    document.getElementById("film-modal-year").textContent    = film.year;
    document.getElementById("film-modal-network").textContent = d.network;
    document.getElementById("film-modal-title").textContent   = d.title;
    document.getElementById("film-modal-desc").textContent    = d.description || "";
    document.getElementById("film-modal-role-label").textContent = lang === "ar" ? "الدور" : "Role";
    document.getElementById("film-modal-role").textContent    = d.role || "";
    document.getElementById("film-modal-impact").textContent  = film.impact || "";

    const award = document.getElementById("film-modal-award");
    award.textContent = d.award ? "🏆 " + d.award : "";

    const watchBtn  = document.getElementById("film-modal-watch");
    const soonBadge = document.getElementById("film-modal-soon");
    if (hasUrl) {
      watchBtn.href = film.youtube;
      watchBtn.textContent = lang === "ar" ? "شاهد الفيلم" : "Watch Film";
      watchBtn.style.display = "inline-flex";
      soonBadge.style.display = "none";
    } else {
      watchBtn.style.display = "none";
      soonBadge.textContent  = lang === "ar" ? "قريباً" : "Coming Soon";
      soonBadge.style.display = "inline-block";
    }

    document.getElementById("film-modal").classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function initFilmModal() {
    const modal    = document.getElementById("film-modal");
    const backdrop = document.getElementById("film-modal-backdrop");
    const closeBtn = document.getElementById("film-modal-close");
    if (!modal) return;

    function closeModal() {
      modal.classList.remove("open");
      document.body.style.overflow = "";
    }

    closeBtn.addEventListener("click", closeModal);
    backdrop.addEventListener("click", closeModal);
    document.addEventListener("keydown", e => {
      if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
    });
  }

  // ─── BTS Lightbox ──────────────────────────────────────────────
  function initBtsLightbox() {
    const lb       = document.getElementById("bts-lightbox");
    const lbImg    = document.getElementById("bts-lb-img");
    const counter  = document.getElementById("bts-lb-counter");
    const backdrop = document.getElementById("bts-lb-backdrop");
    const closeBtn = document.getElementById("bts-lb-close");
    const prevBtn  = document.getElementById("bts-lb-prev");
    const nextBtn  = document.getElementById("bts-lb-next");
    if (!lb) return;

    const photos = BTS_PHOTOS.filter(Boolean);
    let current  = 0;

    function openLb(index) {
      current = ((index % photos.length) + photos.length) % photos.length;
      lbImg.src = photos[current];
      counter.textContent = (current + 1) + " / " + photos.length;
      lb.classList.add("open");
      document.body.style.overflow = "hidden";
    }

    function closeLb() {
      lb.classList.remove("open");
      document.body.style.overflow = "";
      setTimeout(() => { lbImg.src = ""; }, 300);
    }

    document.querySelector(".film-track").addEventListener("click", e => {
      const frame = e.target.closest(".film-frame[data-src]");
      if (!frame || !frame.getAttribute("data-src")) return;
      const src = frame.getAttribute("data-src");
      const idx = photos.indexOf(src);
      openLb(idx >= 0 ? idx : 0);
    });

    closeBtn.addEventListener("click", closeLb);
    backdrop.addEventListener("click", closeLb);
    prevBtn.addEventListener("click", () => openLb(current - 1));
    nextBtn.addEventListener("click", () => openLb(current + 1));

    document.addEventListener("keydown", e => {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape")     closeLb();
      if (e.key === "ArrowLeft")  openLb(current - 1);
      if (e.key === "ArrowRight") openLb(current + 1);
    });
  }

  // ─── Contact Form ───────────────────────────────────────────────
  function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    // Record when form became visible (for time-based check)
    const formLoadTime = Date.now();

    // Floating labels
    form.querySelectorAll(".form-field").forEach(field => {
      const input = field.querySelector(".form-input, .form-textarea");
      if (!input) return;

      input.addEventListener("focus",  () => field.classList.add("focused"));
      input.addEventListener("blur",   () => {
        field.classList.remove("focused");
        field.classList.toggle("filled", input.value.trim() !== "");
      });
      input.addEventListener("input",  () => {
        field.classList.toggle("filled", input.value.trim() !== "");
      });
    });

    // Form submission
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const lang = window.i18n ? window.i18n.getCurrentLang() : "ar";
      const t    = CONTENT[lang].contact.form;
      const btn  = document.getElementById("submit-btn");
      const txt  = document.getElementById("submit-text");

      // ── Anti-spam layer 1: honeypot ──────────────────────────
      const hp = document.getElementById("hp-website");
      if (hp && hp.value.trim() !== "") return;

      // ── Anti-spam layer 2: time check (< 3s = bot) ──────────
      if (Date.now() - formLoadTime < 3000) return;

      // ── Anti-spam layer 3: rate limiting (1 per 60s) ─────────
      const lastSent = parseInt(localStorage.getItem("_last_contact") || "0");
      if (Date.now() - lastSent < 60000) {
        showToast("يرجى الانتظار دقيقة قبل إرسال رسالة أخرى.", "error");
        return;
      }

      if (txt) txt.textContent = t.sending;
      if (btn) btn.disabled = true;

      try {
        await emailjs.sendForm("service_4wm75io", "template_clin5xi", form);
        localStorage.setItem("_last_contact", Date.now());
        showToast(t.success, "success");
        form.reset();
        form.querySelectorAll(".form-field").forEach(f => f.classList.remove("filled", "focused"));
      } catch (err) {
        showToast(t.error || "حدث خطأ، حاول مرة أخرى.", "error");
      } finally {
        if (txt) txt.textContent = t.submit;
        if (btn) btn.disabled = false;
      }
    });
  }

  // ─── Toast Notification ─────────────────────────────────────────
  function showToast(message, type = "success") {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.className = `${type} show`;
    setTimeout(() => toast.classList.remove("show"), 4000);
  }

  window.showToast = showToast;

  // ─── Smooth anchor scroll ───────────────────────────────────────
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener("click", (e) => {
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
          e.preventDefault();
          window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
        }
      });
    });
  }

  // ─── Navbar smooth scroll re-init on lang change ────────────────
  document.addEventListener("langChanged", () => {
    initSmoothScroll();
    window.renderAwardsGrid();
  });

  // ─── Hero section grid layout fix ──────────────────────────────
  function fixHeroGrid() {
    const hero = document.getElementById("hero");
    if (!hero) return;
    hero.style.display = "grid";
    hero.style.gridTemplateColumns = "1fr 1fr";
    hero.style.gap = "0";
  }

  // ─── Initialize everything ──────────────────────────────────────
  document.addEventListener("DOMContentLoaded", () => {
    const enterScreen = document.getElementById("enter-screen");

    function startPreloader() {
      if (typeof window.runPreloader === "function") {
        window.runPreloader(() => initSite());
      } else {
        initSite();
      }
    }

    if (enterScreen) {
      enterScreen.addEventListener("click", () => {
        if (window.plSounds) window.plSounds.unlock();
        gsap.to(enterScreen, {
          opacity: 0, duration: 0.55, ease: "power2.inOut",
          onComplete: () => {
            enterScreen.style.display = "none";
            startPreloader();
          }
        });
      }, { once: true });
    } else {
      startPreloader();
    }
  });

  function initSite() {
    // Render dynamic content
    window.renderWorksGrid();
    window.renderBlogGrid();
    window.renderPartnersTrack();
    renderBtsTrack();
    initBtsLightbox();
    initFilmModal();
    window.renderAwardsGrid();

    // UI
    initCursor();
    initScrollProgress();
    initBackToTop();
    initMobileNav();
    initFilters();
    initContactForm();
    initSmoothScroll();
    initParticles();
    fixHeroGrid();

    // GSAP animations
    if (typeof window.animateHero === "function")          window.animateHero();
    if (typeof window.initPhotoTilt === "function")        window.initPhotoTilt();
    if (typeof window.initScrollAnimations === "function") window.initScrollAnimations();
    if (typeof window.initCounters === "function")         window.initCounters();
    if (typeof window.initParallax === "function")         window.initParallax();
    if (typeof window.initMagneticButtons === "function")  window.initMagneticButtons();
    if (typeof window.initBook3D === "function")           window.initBook3D();
    if (typeof window.initNavbar === "function")           window.initNavbar();
    if (typeof window.initFilmCards === "function")        window.initFilmCards();

    // Re-init animations after language switch
    document.addEventListener("langChanged", () => {
      setTimeout(() => {
        if (typeof window.initMagneticButtons === "function") window.initMagneticButtons();
        if (typeof window.initFilmCards === "function") window.initFilmCards();
      }, 300);
    });
  }

  // Cinematic engine parallax
  const cinematicEngine = document.querySelector(".cinematic-engine");
  if (cinematicEngine) {
    let ticking = false;
    document.addEventListener("mousemove", (e) => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth  - 0.5) * 8;
        const y = (e.clientY / window.innerHeight - 0.5) * 8;
        cinematicEngine.style.transform = `translate(${x}px, ${y}px)`;
        ticking = false;
      });
    });
  }

  // Book preview modal
  const bookPreviewBtn     = document.getElementById('bookPreviewBtn');
  const bookPreviewModal   = document.getElementById('bookPreviewModal');
  const bookPreviewClose   = document.getElementById('bookPreviewClose');
  const bookPreviewBackdrop = document.getElementById('bookPreviewBackdrop');
  const bookPreviewIframe  = document.getElementById('bookPreviewIframe');

  function openBookPreview() {
    if (!bookPreviewModal) return;
    bookPreviewIframe.src = 'assets/book/preview.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH';
    bookPreviewModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeBookPreview() {
    if (!bookPreviewModal) return;
    bookPreviewModal.classList.remove('is-open');
    document.body.style.overflow = '';
    setTimeout(() => { bookPreviewIframe.src = ''; }, 400);
  }

  if (bookPreviewBtn)      bookPreviewBtn.addEventListener('click', openBookPreview);
  if (bookPreviewClose)    bookPreviewClose.addEventListener('click', closeBookPreview);
  if (bookPreviewBackdrop) bookPreviewBackdrop.addEventListener('click', closeBookPreview);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && bookPreviewModal && bookPreviewModal.classList.contains('is-open'))
      closeBookPreview();
  });

  // Cinema stats scroll reveal
  const csSection = document.getElementById('csSection');
  if (csSection) {
    const csObs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.cs-item.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('show'), i * 200);
          });
          csObs.disconnect();
        }
      });
    }, { threshold: 0.2 });
    csObs.observe(csSection);
  }

})();
