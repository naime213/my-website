/**
 * i18n.js — Bilingual (AR/EN) language switcher
 * Reads CONTENT from content.js and applies to DOM via data-i18n attributes
 */

(function () {
  "use strict";

  const STORAGE_KEY = "ab-lang";
  let currentLang = localStorage.getItem(STORAGE_KEY) || "en";

  // ─── Apply language to the entire document ────────────────────
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    const body = document.body;
    const html = document.documentElement;

    if (lang === "ar") {
      body.classList.add("lang-ar");
      body.classList.remove("lang-en");
      html.setAttribute("lang", "ar");
      html.setAttribute("dir", "rtl");
    } else {
      body.classList.add("lang-en");
      body.classList.remove("lang-ar");
      html.setAttribute("lang", "en");
      html.setAttribute("dir", "ltr");
    }

    // Update toggle button states
    const arBtn = document.getElementById("lang-ar-btn");
    const enBtn = document.getElementById("lang-en-btn");
    if (arBtn && enBtn) {
      if (lang === "ar") {
        arBtn.classList.add("active");
        enBtn.classList.remove("active");
      } else {
        enBtn.classList.add("active");
        arBtn.classList.remove("active");
      }
    }

    // Apply all translatable elements
    translateDOM(lang);

    // Update skills strip
    updateSkillsStrip(lang);

    // Update book features
    updateBookFeatures(lang);

    // Update awards grid
    if (typeof window.renderAwardsGrid === "function") window.renderAwardsGrid();

    // Update works grid
    if (typeof window.renderWorksGrid === "function") window.renderWorksGrid();

    // Update blog grid
    if (typeof window.renderBlogGrid === "function") window.renderBlogGrid();

    // Update partners track
    if (typeof window.renderPartnersTrack === "function") window.renderPartnersTrack();

    // Update document title
    document.title = lang === "ar"
      ? "عبد المنعم بركاتي | صانع أفلام وثائقية"
      : "Abdelmonaim Barkati | Documentary Filmmaker";

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = lang === "ar"
        ? "عبد المنعم بركاتي — صانع أفلام وثائقية، مدير تصوير، مونتاج قصصي."
        : "Abdelmonaim Barkati — Documentary Filmmaker, Director of Photography, Story Editor.";
    }

    // Update footer logo text
    const footerLogo = document.querySelector(".footer-logo");
    if (footerLogo) {
      if (lang === "ar") {
        footerLogo.innerHTML = 'عبد المنعم بركاتي<span class="nav-dot">.</span>';
        footerLogo.classList.add("footer-logo--ar");
      } else {
        footerLogo.innerHTML = 'Abdelmonaim Barkati<span class="nav-dot">.</span>';
        footerLogo.classList.remove("footer-logo--ar");
      }
    }


    // Dispatch event for other modules
    document.dispatchEvent(new CustomEvent("langChanged", { detail: { lang } }));
  }

  // ─── Translate all [data-i18n] elements ────────────────────────
  function translateDOM(lang) {
    const t = CONTENT[lang];
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach(el => {
      const key = el.getAttribute("data-i18n");
      const value = getNestedValue(t, key);
      if (value !== undefined && value !== null) {
        el.textContent = value;
      }
    });
  }

  // ─── Utility: get nested key "a.b.c" from object ──────────────
  function getNestedValue(obj, key) {
    if (!obj || !key) return undefined;
    const parts = key.split(".");
    let current = obj;
    for (const part of parts) {
      if (current === undefined || current === null) return undefined;
      current = current[part];
    }
    return current;
  }

  // ─── Update skills strip ──────────────────────────────────────
  function updateSkillsStrip(lang) {
    const strip = document.getElementById("skills-strip");
    if (!strip) return;
    const skills = CONTENT[lang].about.skills;
    strip.innerHTML = skills
      .map(s => `<span class="skill-tag">${s}</span>`)
      .join("");
  }

  // ─── Update book features ─────────────────────────────────────
  function updateBookFeatures(lang) {
    const list = document.getElementById("book-features");
    if (!list) return;
    const features = CONTENT[lang].book.features;
    list.innerHTML = features
      .map(f => `
        <li class="book-feature">
          <span class="feature-check">✓</span>
          <span>${f}</span>
        </li>`)
      .join("");
  }

  // ─── Initialize ───────────────────────────────────────────────
  function init() {
    // Language toggle button
    const toggleBtn = document.getElementById("lang-toggle");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        const next = currentLang === "ar" ? "en" : "ar";
        // Animate transition
        const body = document.body;
        body.style.opacity = "0.7";
        body.style.transition = "opacity 0.2s";
        setTimeout(() => {
          applyLanguage(next);
          body.style.opacity = "1";
        }, 200);
      });
    }

    // Apply stored language on load
    applyLanguage(currentLang);
  }

  // Run when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Expose for external use
  window.i18n = {
    getCurrentLang: () => currentLang,
    setLanguage: applyLanguage,
    translate: (key) => getNestedValue(CONTENT[currentLang], key)
  };
})();
