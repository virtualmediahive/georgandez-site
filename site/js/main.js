document.addEventListener("DOMContentLoaded", function () {
  initHeaderScroll();
  initMobileMenu();
  renderTrustLogos();
  renderTestimonials();
  renderStats();
  renderProducts();
  renderPaths();
  renderTravelDiaries();
  initReveal();
  initLeadModal();
  initTestimonialSlider();
  initTravelLightbox();
  initScrollRail();
  initNewsletterForm();
  initImageFallbacks();
});

function renderTrustLogos() {
  const root = document.getElementById("trust-logos");
  if (!root || !window.SITE_DATA) return;
  root.innerHTML = window.SITE_DATA.trustLogos
    .map((logo) => `<span>${logo.name}${logo.sub ? `<small>${logo.sub}</small>` : ""}</span>`)
    .join("");
}

function renderTestimonials() {
  const root = document.getElementById("testimonial-track");
  if (!root || !window.SITE_DATA) return;
  root.innerHTML = window.SITE_DATA.testimonials
    .map(
      (t, i) => `
      <div class="testimonial-slide${i === 0 ? " is-active" : ""}">
        <div class="testimonial-avatar">${t.photo ? `<img src="${t.photo}" alt="${t.name}">` : '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>'}</div>
        <p class="testimonial-quote">&ldquo;${t.quote}&rdquo;</p>
        <p class="testimonial-meta">&mdash; ${t.name}, ${t.meta}</p>
      </div>`
    )
    .join("");
}

function statIcon(label) {
  const icons = {
    "Monthly Revenue": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M9.5 9.5c0-1.4 1.2-2.5 2.7-2.5s2.7.9 2.7 2.1c0 3-5.4 1.6-5.4 4.5 0 1.3 1.2 2.4 2.7 2.4s2.7-1 2.7-2.3"/></svg>',
    "Students Trained": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 4 2 9l10 5 10-5-10-5z"/><path d="M6 12v5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-5"/></svg>',
    "Years Experience": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
    "Clients Served": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.4 3.8 5.6 3.8 9s-1.3 6.6-3.8 9c-2.5-2.4-3.8-5.6-3.8-9s1.3-6.6 3.8-9z"/></svg>'
  };
  return icons[label] || "";
}

function renderStats() {
  const root = document.getElementById("stats-grid");
  if (!root || !window.SITE_DATA) return;
  root.innerHTML = window.SITE_DATA.stats
    .map(
      (s) => `
      <div class="stat${s.placeholder ? " is-placeholder" : ""}">
        ${statIcon(s.label)}
        <div class="value">${s.value}</div>
        <div class="label">${s.label}</div>
      </div>`
    )
    .join("");
}

function renderProducts() {
  const root = document.getElementById("products-grid");
  if (!root || !window.SITE_DATA) return;
  root.innerHTML = window.SITE_DATA.products
    .map(
      (p) => `
      <div class="product-card">
        <span class="product-tier">${p.tier}</span>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <span class="product-price${p.price ? "" : " is-tbd"}">${p.price ? p.price : "Price TBD"}</span>
        <a class="btn btn--outline btn--block" href="${p.href}">Learn More</a>
      </div>`
    )
    .join("");
}

function renderPaths() {
  const root = document.getElementById("paths-grid");
  if (!root || !window.SITE_DATA) return;
  root.innerHTML = window.SITE_DATA.paths
    .map(
      (p) => `
      <div class="path-card">
        <div class="path-icon" aria-hidden="true">${pathIcon(p.id)}</div>
        <h3>${p.title}</h3>
        <p>${p.copy}</p>
        <a class="btn btn--forest" href="${p.href}" data-path="${p.id}" onclick="trackEvent('choose_path_${p.id.replace(/-/g, "_")}')">${p.cta}</a>
      </div>`
    )
    .join("");
}

function pathIcon(id) {
  const icons = {
    va: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
    "remote-career": '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M3 7v9l9 4 9-4V7"/></svg>',
    "remote-business": '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 21V9l9-6 9 6v12"/><path d="M9 21v-6h6v6"/></svg>',
    lifestyle: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8"/></svg>'
  };
  return icons[id] || "";
}

function renderTravelDiaries() {
  const root = document.getElementById("travel-grid");
  if (!root || !window.SITE_DATA) return;
  root.innerHTML = window.SITE_DATA.travelDiaries
    .map(
      (t, i) => `
      <button type="button" class="travel-card" data-index="${i}" aria-label="View photo: ${t.location}">
        ${
          t.photo
            ? `<img src="${t.photo}" alt="${t.location}">`
            : `<span class="placeholder">${t.location}</span>`
        }
        <span class="caption">${t.location}</span>
      </button>`
    )
    .join("");
}

function initTravelLightbox() {
  const overlay = document.getElementById("travel-lightbox");
  const grid = document.getElementById("travel-grid");
  if (!overlay || !grid || !window.SITE_DATA) return;
  const entries = window.SITE_DATA.travelDiaries;
  const media = document.getElementById("travel-lightbox-media");
  const locationEl = document.getElementById("travel-lightbox-location");
  const captionEl = document.getElementById("travel-lightbox-caption");
  const closeBtn = overlay.querySelector(".travel-lightbox-close");
  const prevBtn = overlay.querySelector(".travel-lightbox-prev");
  const nextBtn = overlay.querySelector(".travel-lightbox-next");
  let index = 0;
  let lastTrigger = null;

  const show = (i) => {
    index = (i + entries.length) % entries.length;
    const t = entries[index];
    media.innerHTML = t.photo
      ? `<img src="${t.photo}" alt="${t.location}">`
      : `<span class="placeholder">${t.location}</span>`;
    locationEl.textContent = t.location;
    captionEl.textContent = t.caption;
  };

  const open = (i, triggerEl) => {
    lastTrigger = triggerEl || document.activeElement;
    show(i);
    overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  };
  const close = () => {
    overlay.classList.remove("is-open");
    document.body.style.overflow = "";
    lastTrigger?.focus();
  };

  grid.querySelectorAll(".travel-card").forEach((card) => {
    card.addEventListener("click", () => open(Number(card.getAttribute("data-index")), card));
  });
  closeBtn.addEventListener("click", close);
  prevBtn.addEventListener("click", () => show(index - 1));
  nextBtn.addEventListener("click", () => show(index + 1));
  overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
  document.addEventListener("keydown", (e) => {
    if (!overlay.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(index - 1);
    if (e.key === "ArrowRight") show(index + 1);
  });
}

function initScrollRail() {
  const navConfig = (window.SITE_DATA && window.SITE_DATA.scrollNav) || [];
  const sections = navConfig
    .map((s) => ({ ...s, el: document.getElementById(s.id) }))
    .filter((s) => s.el);
  if (!sections.length) return;

  const rail = document.createElement("div");
  rail.className = "scroll-rail";
  rail.setAttribute("aria-hidden", "true");
  rail.innerHTML =
    '<div class="scroll-rail-track"></div>' +
    '<div class="scroll-rail-fill"></div>' +
    '<div class="scroll-rail-marker"></div>' +
    '<div class="scroll-rail-label"><span class="name"></span><span class="sub"></span></div>';
  document.body.appendChild(rail);

  const pill = document.createElement("nav");
  pill.className = "section-pillnav";
  pill.setAttribute("aria-label", "Jump to section");
  pill.innerHTML = sections
    .map((s) => `<button type="button" data-target="${s.id}"><span class="dot"></span>${s.label}</button>`)
    .join("");
  document.body.appendChild(pill);

  const fill = rail.querySelector(".scroll-rail-fill");
  const marker = rail.querySelector(".scroll-rail-marker");
  const label = rail.querySelector(".scroll-rail-label");
  const labelName = label.querySelector(".name");
  const labelSub = label.querySelector(".sub");
  const pillButtons = pill.querySelectorAll("button");

  pillButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.getAttribute("data-target"));
      target && target.scrollIntoView({ behavior: "smooth" });
    });
  });

  let current = null;
  const setActive = (section) => {
    if (current === section) return;
    current = section;
    labelName.textContent = section.label;
    labelSub.textContent = section.sub || "";
    pillButtons.forEach((btn) => {
      btn.classList.toggle("is-active", btn.getAttribute("data-target") === section.id);
    });
  };
  setActive(sections[0]);
  label.classList.add("is-visible");

  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = sections.find((s) => s.el === entry.target);
            if (match) setActive(match);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => spy.observe(s.el));
  }

  let footerVisible = false;
  const footer = document.querySelector(".site-footer");
  if (footer && "IntersectionObserver" in window) {
    new IntersectionObserver((entries) => { footerVisible = entries[0].isIntersecting; }, { threshold: 0 }).observe(footer);
  }

  const heroSection = sections[0];
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0;
    fill.style.height = pct + "%";
    marker.style.top = pct + "%";
    label.style.top = pct + "%";
    const onHero = current === heroSection;
    const hideRail = footerVisible || onHero;
    rail.style.opacity = hideRail ? "0" : "1";
    rail.style.pointerEvents = hideRail ? "none" : "auto";
    pill.style.opacity = footerVisible ? "0" : "1";
    pill.style.pointerEvents = footerVisible ? "none" : "auto";
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
}

function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initMobileMenu() {
  const toggle = document.querySelector(".hamburger");
  const menu = document.querySelector(".mobile-menu");
  if (!toggle || !menu) return;
  const close = () => { toggle.classList.remove("is-open"); menu.classList.remove("is-open"); document.body.style.overflow = ""; };
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.classList.toggle("is-open", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  });
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || !items.length) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  items.forEach((el) => observer.observe(el));
}

function initImageFallbacks() {
  const applyFallback = (img) => {
    if (img.hasAttribute("data-broken")) return;
    img.setAttribute("data-broken", "true");
    const label = document.createElement("div");
    label.className = "img-fallback-label";
    label.textContent = img.getAttribute("data-fallback-text");
    img.insertAdjacentElement("afterend", label);
  };
  document.querySelectorAll("img[data-fallback-text]").forEach((img) => {
    if (img.complete && img.naturalWidth === 0) {
      applyFallback(img);
    } else {
      img.addEventListener("error", () => applyFallback(img));
    }
  });
}

function initLeadModal() {
  const overlay = document.getElementById("lead-modal");
  if (!overlay) return;
  const openers = document.querySelectorAll("[data-open-lead-modal]");
  const closeBtn = overlay.querySelector(".modal-close");
  const form = overlay.querySelector("#lead-form");
  const pathSelect = form ? form.querySelector("#lead-path") : null;

  let lastTrigger = null;
  const focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

  const open = (pathId, triggerEl) => {
    lastTrigger = triggerEl || document.activeElement;
    overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
    trackEvent("lead_form_started", { path: pathId || null });
    if (pathId && pathSelect) pathSelect.value = pathId;
    const firstField = overlay.querySelector("#lead-first-name");
    (firstField || overlay.querySelector(".modal-close"))?.focus();
  };
  const close = () => {
    overlay.classList.remove("is-open");
    document.body.style.overflow = "";
    lastTrigger?.focus();
  };

  openers.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      open(btn.getAttribute("data-path") || null, btn);
    });
  });
  closeBtn && closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
  document.addEventListener("keydown", (e) => {
    if (!overlay.classList.contains("is-open")) return;
    if (e.key === "Escape") { close(); return; }
    if (e.key === "Tab") {
      const focusable = Array.from(overlay.querySelectorAll(focusableSelector));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());

      /* Integration layer: wire this to ConvertKit / ActiveCampaign / Kit / Mailchimp /
         GoHighLevel by POSTing `data` to SITE_CONFIG.LEAD_FORM_ENDPOINT. Left unimplemented
         until real credentials/endpoint are supplied. */
      if (window.SITE_CONFIG && window.SITE_CONFIG.LEAD_FORM_ENDPOINT) {
        fetch(window.SITE_CONFIG.LEAD_FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        }).catch(() => {});
      } else {
        console.log("[lead form placeholder] would submit:", data);
      }

      trackEvent("lead_form_submitted", { path: data.path || null });
      window.location.href = "thank-you.html" + (data.path ? "?path=" + encodeURIComponent(data.path) : "");
    });
  }
}

function initTestimonialSlider() {
  const root = document.querySelector(".testimonial-slider");
  if (!root) return;
  const slides = root.querySelectorAll(".testimonial-slide");
  const prev = root.querySelector(".prev-slide");
  const next = root.querySelector(".next-slide");
  let index = 0;

  const show = (i) => {
    slides.forEach((s, si) => s.classList.toggle("is-active", si === i));
  };
  prev && prev.addEventListener("click", () => { index = (index - 1 + slides.length) % slides.length; show(index); });
  next && next.addEventListener("click", () => { index = (index + 1) % slides.length; show(index); });
  show(index);
}

function initNewsletterForm() {
  const form = document.getElementById("newsletter-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    if (window.SITE_CONFIG && window.SITE_CONFIG.NEWSLETTER_ENDPOINT) {
      fetch(window.SITE_CONFIG.NEWSLETTER_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      }).catch(() => {});
    } else {
      console.log("[newsletter placeholder] would submit:", data);
    }
    trackEvent("newsletter_signup");
    form.setAttribute("aria-live", "polite");
    form.innerHTML = '<p style="font-weight:600;">You\'re on the list. Thank you.</p>';
  });
}
