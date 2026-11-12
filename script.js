/* =========================================================
   Sachin Gangwar | Portfolio scripts
   Everything you are likely to edit is in the CONFIG section.
   ========================================================= */
document.documentElement.classList.add("js");

/* ---------------- CONFIG: edit these ---------------- */

// Words shown by the typing animation in the hero section.
const TYPED_TITLES = [
  "Aspiring Web Developer",
  "BCA Student",
  "Programming Enthusiast",
  "Creative Editor",
];

// Projects. To add one, copy an object and fill it in.
// Leave `url` as "" until the GitHub repository exists: no button is shown then.
const PROJECTS = [
  {
    title: "Calculator",
    description: "A calculator project created for practising programming and logical operations.",
    tags: ["Programming practice", "Logical operations"],
    url: "", // e.g. "https://github.com/sachingangwar8755/calculator"
    thumb: "calculator",
  },
  {
    title: "Social Net",
    description: "A website built as a chatting app.",
    tags: ["Website", "Chat app"],
    url: "", // e.g. "https://github.com/sachingangwar8755/social-net"
    thumb: "chat",
  },
];

// Contact form. By default the form opens the visitor's email app with the
// message filled in. To send straight from the site, create a free form at
// https://formspree.io and paste its URL here, e.g. "https://formspree.io/f/xxxxxxx"
const FORM_ENDPOINT = "";
const CONTACT_EMAIL = "sachingangwar9634@gmail.com";

/* ---------------- Icons ---------------- */
const SVG_ICONS = {
  globe: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.500 5.700 12 3z"/></svg>',
  photo: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="1.8"/><path d="M21 16l-5-5-8 9"/></svg>',
  video: '<svg viewBox="0 0 24 24"><rect x="3" y="6" width="13" height="12" rx="3"/><path d="M16 10.500l5-3v9l-5-3"/></svg>',
};
const THUMBS = {
  chat: '<svg viewBox="0 0 140 120" fill="none"><defs><linearGradient id="cg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3B82F6"/><stop offset="1" stop-color="#8B5CF6"/></linearGradient></defs><path d="M12 14h72a10 10 0 0 1 10 10v28a10 10 0 0 1-10 10H40l-16 14V62h-12a10 10 0 0 1-10-10V24a10 10 0 0 1 10-10z" fill="#101625" stroke="url(#cg)" stroke-width="3"/><path d="M56 70h60a10 10 0 0 1 10 10v22a10 10 0 0 1-10 10h-8v14l-16-14H56a10 10 0 0 1-10-10V80a10 10 0 0 1 10-10z" fill="url(#cg)" fill-opacity=".85" transform="translate(0 -12) scale(1 .9)"/><g fill="#93c5fd"><circle cx="30" cy="38" r="4"/><circle cx="46" cy="38" r="4"/><circle cx="62" cy="38" r="4"/></g></svg>',
  calculator: '<svg viewBox="0 0 120 140" fill="none"><defs><linearGradient id="tg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3B82F6"/><stop offset="1" stop-color="#8B5CF6"/></linearGradient></defs><rect x="8" y="6" width="104" height="128" rx="18" fill="#101625" stroke="url(#tg)" stroke-width="3"/><rect x="22" y="20" width="76" height="28" rx="8" fill="#080B14" stroke="#3B82F6" stroke-opacity=".5"/><text x="92" y="41" text-anchor="end" font-family="monospace" font-size="18" fill="#93c5fd">42</text><g fill="url(#tg)"><rect x="22" y="60" width="16" height="16" rx="5"/><rect x="44" y="60" width="16" height="16" rx="5"/><rect x="66" y="60" width="16" height="16" rx="5"/><rect x="88" y="60" width="10" height="16" rx="5"/><rect x="22" y="82" width="16" height="16" rx="5"/><rect x="44" y="82" width="16" height="16" rx="5"/><rect x="66" y="82" width="16" height="16" rx="5"/><rect x="88" y="82" width="10" height="38" rx="5"/><rect x="22" y="104" width="38" height="16" rx="5"/><rect x="66" y="104" width="16" height="16" rx="5"/></g></svg>',
};
THUMBS.chat = '<svg viewBox="0 0 140 120" fill="none"><defs><linearGradient id="cg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3B82F6"/><stop offset="1" stop-color="#8B5CF6"/></linearGradient></defs><rect x="8" y="8" width="78" height="46" rx="14" fill="#101625" stroke="url(#cg)" stroke-width="3"/><path d="M26 54v16l16-16" fill="#101625" stroke="url(#cg)" stroke-width="3" stroke-linejoin="round"/><g fill="#93c5fd"><circle cx="30" cy="31" r="4"/><circle cx="47" cy="31" r="4"/><circle cx="64" cy="31" r="4"/></g><rect x="54" y="64" width="78" height="46" rx="14" fill="url(#cg)"/><path d="M114 110v-14" stroke="none"/><path d="M114 110v10l-14-10" fill="url(#cg)"/><rect x="70" y="80" width="46" height="5" rx="2.500" fill="#fff" fill-opacity=".85"/><rect x="70" y="92" width="30" height="5" rx="2.500" fill="#fff" fill-opacity=".6"/></svg>';
const GITHUB_ICON = '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.300-1.700-1.300-1.700-1-.7.1-.7.1-.7 1.200.1 1.800 1.200 1.800 1.200 1 1.800 2.700 1.300 3.300 1 .1-.7.4-1.300.7-1.600-2.600-.3-5.300-1.300-5.300-5.700 0-1.300.5-2.300 1.200-3.100-.1-.3-.5-1.500.1-3.100 0 0 1-.3 3.200 1.200a11 11 0 0 1 5.800 0c2.200-1.500 3.200-1.200 3.200-1.200.6 1.600.2 2.800.1 3.100.8.8 1.200 1.900 1.200 3.100 0 4.400-2.700 5.400-5.300 5.700.4.4.8 1.100.8 2.200v3.200c0 .3.2.7.8.6A11.500 11.500 0 0 0 23.500 12 11.500 11.500 0 0 0 12 .5z"/></svg>';

/* ---------------- Helpers ---------------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Escape text before putting it into HTML.
function esc(str) {
  const d = document.createElement("div");
  d.textContent = str;
  return d.innerHTML;
}

/* ---------------- Build projects ---------------- */
function renderProjects() {
  const cards = PROJECTS.map((p) => `
    <article class="glass project-card reveal">
      <div class="project-thumb" aria-hidden="true">${THUMBS[p.thumb] || ""}</div>
      <div class="project-body">
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.description)}</p>
        <ul class="tags">${p.tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
        ${p.url ? `<div class="project-actions"><a class="btn btn-ghost btn-small" href="${esc(p.url)}" target="_blank" rel="noopener noreferrer">${GITHUB_ICON} Source code</a></div>` : ""}
      </div>
    </article>`).join("");

  const more = `
    <article class="glass project-card project-more reveal">
      <h3>More projects on the way</h3>
      <p>I'm always building something new. Follow my GitHub to see what's next.</p>
      <a class="btn btn-ghost btn-small" href="https://github.com/sachingangwar8755" target="_blank" rel="noopener noreferrer">${GITHUB_ICON} Visit my GitHub</a>
    </article>`;

  $("#projectsGrid").innerHTML = cards + more;
}

/* ---------------- Typing animation ---------------- */
function startTyping() {
  const el = $("#typed");
  if (prefersReduced) { el.textContent = TYPED_TITLES[0]; return; }
  let word = 0, char = 0, deleting = false;
  (function tick() {
    const current = TYPED_TITLES[word];
    char += deleting ? -1 : 1;
    el.textContent = current.slice(0, char);
    let delay = deleting ? 40 : 85;
    if (!deleting && char === current.length) { deleting = true; delay = 1600; }
    else if (deleting && char === 0) { deleting = false; word = (word + 1) % TYPED_TITLES.length; delay = 350; }
    setTimeout(tick, delay);
  })();
}

/* ---------------- Navigation ---------------- */
function setupNav() {
  const nav = $("#navbar"), toggle = $("#navToggle"), menu = $("#navMenu");
  const close = () => { menu.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); toggle.setAttribute("aria-label", "Open menu"); };

  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  $$("a", menu).forEach((a) => a.addEventListener("click", close));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") { close(); toggle.focus(); } });

  // Solid navbar + back-to-top visibility after scrolling.
  const toTop = $("#toTop");
  const onScroll = () => {
    nav.classList.toggle("scrolled", window.scrollY > 20);
    toTop.classList.toggle("show", window.scrollY > 600);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" }));

  // Highlight the link of the section being viewed.
  const links = $$(".nav-link");
  const sections = links.map((l) => $(l.getAttribute("href"))).filter(Boolean);
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => spy.observe(s));
}

/* ---------------- Scroll reveal + skill bars ---------------- */
function setupReveal() {
  const items = $$(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((i) => i.classList.add("visible"));
    $$(".bar i").forEach((b) => (b.style.width = b.dataset.level + "%"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add("visible");
      const bar = $(".bar i", en.target);
      if (bar) bar.style.width = bar.dataset.level + "%";
      io.unobserve(en.target);
    });
  }, { threshold: 0.15 });
  items.forEach((i) => io.observe(i));
}

/* ---------------- Contact form ---------------- */
function setupForm() {
  const form = $("#contactForm"), status = $("#formStatus");
  const rules = {
    name: (v) => (v.trim().length >= 2 ? "" : "Enter your name (at least 2 characters)."),
    email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "" : "Enter a valid email address."),
    message: (v) => (v.trim().length >= 10 ? "" : "Write a message of at least 10 characters."),
  };

  function validateField(name) {
    const input = form.elements[name];
    const msg = rules[name](input.value);
    $("#" + name + "Error").textContent = msg;
    input.closest(".field").classList.toggle("invalid", Boolean(msg));
    input.setAttribute("aria-invalid", msg ? "true" : "false");
    return !msg;
  }
  Object.keys(rules).forEach((n) => form.elements[n].addEventListener("blur", () => validateField(n)));

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.textContent = ""; status.classList.remove("fail");
    const valid = Object.keys(rules).map(validateField).every(Boolean);
    if (!valid) { form.querySelector(".invalid input, .invalid textarea")?.focus(); return; }

    const data = { name: form.name.value.trim(), email: form.email.value.trim(), message: form.message.value.trim() };

    if (FORM_ENDPOINT) {
      // Real sending through a form service such as Formspree.
      try {
        const res = await fetch(FORM_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) });
        if (!res.ok) throw new Error("Request failed");
        status.textContent = "Message sent. Thank you, I'll reply soon.";
        form.reset();
      } catch {
        status.textContent = "The message could not be sent. Please email me directly at " + CONTACT_EMAIL + ".";
        status.classList.add("fail");
      }
    } else {
      // No backend configured: open the visitor's email app with everything filled in.
      const subject = encodeURIComponent("Portfolio message from " + data.name);
      const body = encodeURIComponent(data.message + "\n\nFrom: " + data.name + " (" + data.email + ")");
      window.location.href = "mailto:" + CONTACT_EMAIL + "?subject=" + subject + "&body=" + body;
      status.textContent = "Your email app should open with the message ready. Press send there to deliver it.";
    }
  });
}

/* ---------------- Init ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  $("#year").textContent = new Date().getFullYear(); // footer year updates itself
  renderProjects();
  startTyping();
  setupNav();
  setupReveal();
  setupForm();
});
