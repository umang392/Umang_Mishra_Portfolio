// Navbar responsive menu
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("navbar");
const navlinks = document.getElementById("nav-links");
navToggle &&
  navToggle.addEventListener("click", function () {
    nav.classList.toggle("showmenu");
    navToggle.setAttribute(
      "aria-expanded",
      nav.classList.contains("showmenu") ? "true" : "false"
    );
  });

// Modal popups for projects (with ESC support)
function showModal(id) {
  hideAllModals();
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "flex";
    setTimeout(() => {
      modal.querySelector(".modal-content").focus();
    }, 100);
    document.body.style.overflow = "hidden";
  }
}
function hideModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }
}

// Hide all modals if ESC pressed or click outside
function hideAllModals() {
  document.querySelectorAll(".modal").forEach((m) => {
    m.style.display = "none";
    document.body.style.overflow = "";
  });
}
window.onclick = function (event) {
  document.querySelectorAll(".modal").forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "";
    }
  });
};
window.onkeydown = function (event) {
  if (event.key === "Escape") hideAllModals();
};

// Navbar scrollspy active link
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("main > section[id]");
  let scrollPos = window.scrollY + 120;
  let actived = false;
  for (let i = sections.length - 1; i > -1; i--) {
    const sec = sections[i];
    if (scrollPos >= sec.offsetTop) {
      document
        .querySelectorAll(".nav-links a")
        .forEach((l) => l.classList.remove("active"));
      let navl = document.querySelector(
        '.nav-links a[href="#' + sec.id + '"]'
      );
      if (navl) navl.classList.add("active");
      actived = true;
      break;
    }
  }
  if (!actived)
    document
      .querySelectorAll(".nav-links a")
      .forEach((l) => l.classList.remove("active"));
});

// Skills bar animation on scroll
function animateSkills() {
  const skills = document.querySelectorAll(".bar-fill");
  skills.forEach((bar, idx) => {
    setTimeout(() => {
      bar.style.width = bar.dataset.width;
    }, 90 * idx);
  });
}
window.addEventListener("scroll", function () {
  var skillsSec = document.getElementById("skills");
  if (
    skillsSec &&
    skillsSec.getBoundingClientRect().top < window.innerHeight - 100
  ) {
    animateSkills();
  }
});

// Section reveal/animation
function revealOnScroll() {
  var reveals = document.querySelectorAll(".reveal");
  var wh = window.innerHeight;
  reveals.forEach(function (reveal) {
    var top = reveal.getBoundingClientRect().top;
    if (top < wh - 50) reveal.classList.add("active");
  });
}
window.addEventListener("scroll", revealOnScroll);
window.onload = function () {
  revealOnScroll();
  document.querySelectorAll(".bar-fill").forEach((bar) => {
    bar.style.width = "0";
  });
};

// Contact submit notifier and custom toast
function notifySend() {
  document.getElementById("contact-notifier").textContent =
    "Thank you! (Simulated: Demo only.)";
  toast("Message sent!");
  setTimeout(() => {
    document.getElementById("contact-notifier").textContent = "";
  }, 2000);
}

// Custom notification toast
function toast(msg) {
  const t = document.getElementById("toast");
  if (!t) return;
  t.textContent = msg;
  t.className = "show";
  setTimeout(() => {
    t.className = t.className.replace("show", "");
  }, 2200);
}

// Dark mode toggle with localStorage and respects system
const dmtog = document.getElementById("darkmode-toggle");
function setDark(isDark) {
  if (isDark) document.body.classList.add("darkmode");
  else document.body.classList.remove("darkmode");
}
function getSystemDark() {
  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? true
    : false;
}
function storePref(val) {
  try {
    localStorage.setItem("umang_portfolio_theme", val ? "dark" : "light");
  } catch (e) {}
}
function getThemePref() {
  try {
    const v = localStorage.getItem("umang_portfolio_theme");
    if (v === "dark") return true;
    if (v === "light") return false;
  } catch (e) {}
  return null;
}
function toggleDark() {
  const cur = document.body.classList.contains("darkmode");
  setDark(!cur);
  storePref(!cur);
}
if (dmtog)
  dmtog.addEventListener("click", function () {
    toggleDark();
  });
window.addEventListener("DOMContentLoaded", () => {
  let p = getThemePref();
  if (p == null) p = getSystemDark();
  setDark(p);
});
