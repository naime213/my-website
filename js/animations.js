/**
 * animations.js — GSAP + ScrollTrigger cinematic animations
 * Runs after GSAP is loaded (called from main.js)
 */

(function () {
  "use strict";

  // ─── Register GSAP plugins ─────────────────────────────────────
  gsap.registerPlugin(ScrollTrigger);

  // ─── Cinematic Sound Engine ────────────────────────────────────
  let _actx = null;
  function _ctx() {
    if (!_actx) _actx = new (window.AudioContext || window.webkitAudioContext)();
    if (_actx.state === "suspended") _actx.resume();
    return _actx;
  }

  window.plSounds = {
    unlock: function () { try { _ctx(); } catch(e) {} },

    tick: function () {
      try {
        const ctx = _ctx();
        const dur = 0.07;
        const buf = ctx.createBuffer(1, ctx.sampleRate * dur, ctx.sampleRate);
        const d   = buf.getChannelData(0);
        for (let i = 0; i < d.length; i++) {
          d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 7) * 0.7;
        }
        const src = ctx.createBufferSource();
        src.buffer = buf;
        const hp = ctx.createBiquadFilter();
        hp.type = "highpass"; hp.frequency.value = 900;
        const g = ctx.createGain(); g.gain.value = 0.65;
        src.connect(hp); hp.connect(g); g.connect(ctx.destination);
        src.start();
      } catch(e) {}
    },

    flash: function () {
      try {
        const ctx = _ctx();
        const osc = ctx.createOscillator();
        const g   = ctx.createGain();
        osc.frequency.setValueAtTime(1400, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(60, ctx.currentTime + 0.18);
        g.gain.setValueAtTime(0.38, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);
        osc.connect(g); g.connect(ctx.destination);
        osc.start(); osc.stop(ctx.currentTime + 0.18);
      } catch(e) {}
    },

    reveal: function () {
      try {
        const ctx = _ctx();
        const osc = ctx.createOscillator();
        const g   = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(190, ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(240, ctx.currentTime + 0.9);
        g.gain.setValueAtTime(0, ctx.currentTime);
        g.gain.linearRampToValueAtTime(0.11, ctx.currentTime + 0.25);
        g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2.0);
        osc.connect(g); g.connect(ctx.destination);
        osc.start(); osc.stop(ctx.currentTime + 2.0);
      } catch(e) {}
    }
  };

  // ─── Cinematic Preloader (Film Countdown Leader) ──────────────
  window.runPreloader = function (onComplete) {
    const preloader = document.getElementById("preloader");
    const bar       = document.getElementById("preloader-bar");
    const plNum     = document.getElementById("pl-num");
    const plCircle  = document.getElementById("pl-circle-wrap");
    const plName    = document.getElementById("pl-name-wrap");

    if (!preloader) { if (onComplete) onComplete(); return; }

    // Progress simulation — completes in ~2.5s
    let done = false;
    let progress = 0;
    const progressInterval = setInterval(() => {
      progress += Math.random() * 2 + 0.8;
      if (progress >= 100) {
        progress = 100;
        done = true;
        clearInterval(progressInterval);
      }
      if (bar) bar.style.width = progress + "%";
    }, 40);

    // Flicker helper: briefly hides the number then shows new value
    function flicker(newVal, cb) {
      if (!plNum) return cb && cb();
      plNum.classList.add("pl-flickering");
      setTimeout(() => {
        plNum.textContent = newVal;
        plNum.classList.remove("pl-flickering");
        cb && cb();
      }, 120);
    }

    // Exit helper: waits for 100% then fades out
    function exit() {
      function tryExit() {
        if (done) {
          setTimeout(() => {
            gsap.to(preloader, {
              opacity: 0, duration: 0.9, ease: "power2.inOut",
              onComplete: () => {
                preloader.style.display = "none";
                if (onComplete) onComplete();
              }
            });
          }, 680);
        } else {
          setTimeout(tryExit, 80);
        }
      }
      tryExit();
    }

    // Countdown sequence: 3 → 2 → 1 → flash → name → exit
    if (window.plSounds) window.plSounds.tick(); // "3"
    setTimeout(() => {
      if (window.plSounds) window.plSounds.tick(); // "2"
      flicker(2, () => {
        setTimeout(() => {
          if (window.plSounds) window.plSounds.tick(); // "1"
          flicker(1, () => {
            setTimeout(() => {
              // White flash
              if (window.plSounds) window.plSounds.flash();
              preloader.classList.add("pl-flash-active");
              setTimeout(() => {
                preloader.classList.remove("pl-flash-active");
                // Circle fades out
                if (plCircle) {
                  plCircle.style.opacity = "0";
                  plCircle.style.pointerEvents = "none";
                }
                // Name fades in
                setTimeout(() => {
                  if (window.plSounds) window.plSounds.reveal();
                  if (plName) plName.classList.add("pl-name-visible");
                  exit();
                }, 200);
              }, 200);
            }, 850);
          });
        }, 850);
      });
    }, 900);
  };

  // ─── Hero entrance animations ──────────────────────────────────
  window.animateHero = function () {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Name reveal
    const nameInner = document.querySelector(".hero-name-inner");
    if (nameInner) {
      tl.to(nameInner, { y: "0%", duration: 1.2, ease: "expo.out" }, 0.3);
    }

    // Greeting
    const greeting = document.querySelector(".hero-greeting");
    if (greeting) {
      tl.to(greeting, { opacity: 1, y: 0, duration: 0.8 }, 0.5);
    }

    // Title
    const title = document.querySelector(".hero-title");
    if (title) {
      tl.to(title, { opacity: 1, y: 0, duration: 0.8 }, 0.65);
    }

    // Subtitle & tagline
    const sub = document.querySelector(".hero-subtitle");
    const tag = document.querySelector(".hero-tagline");
    if (sub) tl.to(sub, { opacity: 1, y: 0, duration: 0.7 }, 0.75);
    if (tag) tl.to(tag, { opacity: 1, y: 0, duration: 0.7 }, 0.85);

    // CTA buttons
    const cta = document.querySelector(".hero-cta");
    if (cta) {
      tl.to(cta, { opacity: 1, y: 0, duration: 0.7 }, 1.0);
    }

    // Photo wrap
    const photoWrap = document.querySelector(".hero-photo-wrap");
    if (photoWrap) {
      gsap.set(photoWrap, { x: 60, scale: 0.95 });
      tl.to(photoWrap,
        { opacity: 1, x: 0, scale: 1, duration: 1.4, ease: "expo.out" },
        0.4
      );
    }

    // Scroll indicator
    const scrollIndicator = document.querySelector(".hero-scroll");
    if (scrollIndicator) {
      gsap.to(scrollIndicator, { opacity: 1, y: 0, duration: 1, delay: 2 });
    }
  };

  // ─── 3D Tilt on hero photo ─────────────────────────────────────
  window.initPhotoTilt = function () {
    const wrap = document.getElementById("hero-photo-wrap");
    if (!wrap) return;

    wrap.addEventListener("mousemove", (e) => {
      const rect  = wrap.getBoundingClientRect();
      const cx    = rect.left + rect.width / 2;
      const cy    = rect.top  + rect.height / 2;
      const dx    = (e.clientX - cx) / (rect.width / 2);
      const dy    = (e.clientY - cy) / (rect.height / 2);
      const rotX  = dy * -10;
      const rotY  = dx *  10;

      gsap.to(wrap, {
        rotationX: rotX,
        rotationY: rotY,
        transformPerspective: 800,
        duration: 0.5,
        ease: "power2.out"
      });
    });

    wrap.addEventListener("mouseleave", () => {
      gsap.to(wrap, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)"
      });
    });
  };

  // ─── Scroll-triggered section animations ──────────────────────
  window.initScrollAnimations = function () {
    // Generic fade-up elements
    gsap.utils.toArray(".anim-fade-up").forEach(el => {
      const delay = parseFloat(el.getAttribute("data-delay") || 0);
      gsap.fromTo(el,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0,
          duration: 0.9,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    // Fade left
    gsap.utils.toArray(".anim-fade-left").forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, x: -60 },
        {
          opacity: 1, x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" }
        }
      );
    });

    // Fade right
    gsap.utils.toArray(".anim-fade-right").forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, x: 60 },
        {
          opacity: 1, x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" }
        }
      );
    });

    // Scale in
    gsap.utils.toArray(".anim-scale").forEach((el, i) => {
      const delay = parseFloat(el.getAttribute("data-delay") || i * 0.1);
      gsap.fromTo(el,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1, scale: 1,
          duration: 0.8,
          delay,
          ease: "back.out(1.4)",
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" }
        }
      );
    });

    // Stagger children
    gsap.utils.toArray(".stagger-parent").forEach(parent => {
      const children = parent.querySelectorAll(":scope > *");
      gsap.fromTo(children,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: { trigger: parent, start: "top 85%", toggleActions: "play none none none" }
        }
      );
    });
  };

  // ─── Animated stat counters ────────────────────────────────────
  window.initCounters = function () {
    const container = document.querySelector(".about-stats");
    if (!container) return;
    let fired = false;
    ScrollTrigger.create({
      trigger: container,
      start: "top 82%",
      once: true,
      onEnter: () => {
        if (fired) return;
        fired = true;
        container.querySelectorAll(".counter-value[data-target]").forEach(el => {
          const target = parseInt(el.getAttribute("data-target"), 10);
          const delay  = parseFloat(el.closest("[data-delay]")?.getAttribute("data-delay") || 0);
          const obj    = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 2.2,
            delay: 0.2 + delay,
            ease: "power2.out",
            onUpdate: () => { el.textContent = Math.floor(obj.val); }
          });
        });
      }
    });
  };

  // ─── Parallax on sections ──────────────────────────────────────
  window.initParallax = function () {
    // Hero background circles parallax
    const circles = document.querySelectorAll(".hero-bg-circle");
    circles.forEach((c, i) => {
      gsap.to(c, {
        y: (i === 0 ? 100 : -80),
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.5
        }
      });
    });

    // About visual section
    const aboutImg = document.querySelector(".about-filmstrip-img");
    if (aboutImg) {
      gsap.fromTo(aboutImg,
        { y: -30 },
        {
          y: 30,
          ease: "none",
          scrollTrigger: {
            trigger: "#about",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5
          }
        }
      );
    }
  };

  // ─── Magnetic buttons ──────────────────────────────────────────
  window.initMagneticButtons = function () {
    const wraps = document.querySelectorAll(".magnetic-wrap");
    wraps.forEach(wrap => {
      const btn = wrap.querySelector(".btn, a, button");
      if (!btn) return;

      wrap.addEventListener("mousemove", (e) => {
        const rect = wrap.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) * 0.25;
        const dy = (e.clientY - cy) * 0.25;

        gsap.to(btn, { x: dx, y: dy, duration: 0.4, ease: "power2.out" });
      });

      wrap.addEventListener("mouseleave", () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
      });
    });
  };

  // ─── Book 3D hover ─────────────────────────────────────────────
  window.initBook3D = function () {
    const scene = document.querySelector(".book-3d-scene");
    const book  = document.getElementById("book-3d");
    if (!scene || !book) return;

    scene.addEventListener("mousemove", (e) => {
      const rect = scene.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);

      gsap.to(book, {
        rotationY: dx * 15 - 10,
        rotationX: dy * -8 + 3,
        transformPerspective: 1000,
        duration: 0.6,
        ease: "power2.out"
      });
    });

    scene.addEventListener("mouseleave", () => {
      gsap.to(book, {
        rotationY: -20,
        rotationX: 5,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)"
      });
    });
  };

  // ─── Film card hover enhancements ─────────────────────────────
  window.initFilmCards = function () {
    // Re-run after grid is rendered
    const cards = document.querySelectorAll(".film-card");
    cards.forEach(card => {
      card.addEventListener("mouseenter", () => {
        document.body.classList.add("cursor-hover");
      });
      card.addEventListener("mouseleave", () => {
        document.body.classList.remove("cursor-hover");
      });
    });
  };

  // ─── Navbar scroll effect ──────────────────────────────────────
  window.initNavbar = function () {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    let lastY = 0;

    ScrollTrigger.create({
      start: "top -60",
      end: 99999,
      toggleClass: { targets: "#navbar", className: "scrolled" }
    });

    // Active link highlight
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: () => {
        const scrollY = window.scrollY + 120;
        sections.forEach(section => {
          const top    = section.offsetTop;
          const height = section.offsetHeight;
          const id     = section.getAttribute("id");
          if (scrollY >= top && scrollY < top + height) {
            navLinks.forEach(link => {
              link.classList.remove("active");
              if (link.getAttribute("href") === `#${id}`) {
                link.classList.add("active");
              }
            });
          }
        });
      }
    });
  };

  // ─── Section transitions with scroll ──────────────────────────
  window.initSectionReveal = function () {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
      gsap.fromTo(section.querySelector(".section-header"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );
    });
  };

})();
