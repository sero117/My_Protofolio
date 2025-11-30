// ===== Progress bar + reveal on scroll + navbar shrink =====
window.addEventListener("scroll", () => {
  const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
  document.getElementById("progressBar").style.width = scrolled + "%";

  // Reveal sections
  document.querySelectorAll(".reveal").forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 120;
    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });

  // Navbar shrink
  const navbar = document.getElementById("navbar");
  if (winScroll > 50) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
});

// ===== Mobile menu toggle =====
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => navLinks.classList.remove("show"));
  });
}

// ===== Smooth scroll for internal links =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ===== Counters animation =====
function animateCounter(id, target) {
  const el = document.getElementById(id);
  let count = 0;
  const step = Math.ceil(target / 100);
  const interval = setInterval(() => {
    count += step;
    if (count >= target) {
      count = target;
      clearInterval(interval);
    }
    el.textContent = count;
  }, 30);
}

// ===== Mode toggle =====
const modeToggle = document.getElementById("mode-toggle");
if (modeToggle) {
  modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    modeToggle.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
  });
}

// ===== Slider for project images =====
const sliderState = {}; // حفظ الفهرس لكل سلايدر

function buildDots(sliderId) {
  const slider = document.getElementById(sliderId);
  if (!slider) return;
  const slides = slider.querySelector(".slides");
  const imgs = slides.querySelectorAll("img");
  const dotsContainer = document.getElementById(`${sliderId}-dots`);
  if (!dotsContainer) return;

  dotsContainer.innerHTML = "";

  const visibleCount = 4; // عدد الصور في الصفحة الواحدة
  const totalPages = Math.ceil(imgs.length / visibleCount);

  for (let i = 0; i < totalPages; i++) {
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.addEventListener("click", () => {
      sliderState[sliderId] = i * visibleCount; // كل دوت يمثل صفحة كاملة
      updateSliderTransform(sliderId);
      updateDots(sliderId);
    });
    dotsContainer.appendChild(dot);
  }
}

function updateDots(sliderId) {
  const dotsContainer = document.getElementById(`${sliderId}-dots`);
  if (!dotsContainer) return;
  const dots = dotsContainer.querySelectorAll(".dot");

  const visibleCount = 4;
  const index = sliderState[sliderId] ?? 0;
  const currentPage = Math.floor(index / visibleCount);

  dots.forEach((d, i) => d.classList.toggle("active", i === currentPage));
}

function updateSliderTransform(sliderId) {
  const slider = document.getElementById(sliderId);
  if (!slider) return;
  const slides = slider.querySelector(".slides");
  const imgs = slides.querySelectorAll("img");
  const total = imgs.length;
  const visibleCount = 4;
  let index = sliderState[sliderId] ?? 0;

  // منع الفراغات
  if (index > total - visibleCount) index = total - visibleCount;
  if (index < 0) index = 0;
  sliderState[sliderId] = index;

  const frameWidth = slider.clientWidth;
  const shift = (frameWidth / visibleCount) * index;
  slides.style.transform = `translateX(${-shift}px)`;

  updateDots(sliderId);
}

function nextSlide(sliderId) {
  const visibleCount = 4;
  sliderState[sliderId] = (sliderState[sliderId] ?? 0) + visibleCount;
  updateSliderTransform(sliderId);
}
function prevSlide(sliderId) {
  const visibleCount = 4;
  sliderState[sliderId] = (sliderState[sliderId] ?? 0) - visibleCount;
  updateSliderTransform(sliderId);
}

window.addEventListener("load", () => {
  document.querySelectorAll(".slider").forEach(slider => {
    const id = slider.id;
    sliderState[id] = 0;
    buildDots(id);
    updateSliderTransform(id);
  });
});

window.addEventListener("resize", () => {
  Object.keys(sliderState).forEach(updateSliderTransform);
});

// ===== Contact Form with Formspree =====
const form = document.getElementById("contact-form");
const successModal = document.getElementById("success-modal");
const errorModal = document.getElementById("error-modal");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        successModal.style.display = "block";
        setTimeout(() => { successModal.style.display = "none"; }, 3000);
        form.reset();
      } else {
        const data = await res.json().catch(() => null);
        console.error("Formspree error:", data || res.status);
        errorModal.style.display = "block";
      }
    } catch (err) {
      console.error("Network error:", err);
      errorModal.style.display = "block";
    }
  });
}

// ===== Close buttons for modals =====
document.querySelector(".close-btn")?.addEventListener("click", () => {
  successModal.style.display = "none";
});
document.querySelector(".error-close-btn")?.addEventListener("click", () => {
  errorModal.style.display = "none";
});
