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
window.addEventListener("load", () => {
  animateCounter("counter-projects", 20); // مثال: 20 مشروع
  animateCounter("counter-years", 5);     // مثال: 5 سنوات خبرة
});

// ===== Mode toggle =====
const modeToggle = document.getElementById("mode-toggle");
if (modeToggle) {
  modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    modeToggle.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
  });
}

// ===== Slider for project images =====
/*const sliderState = {};
function updateSliderTransform(id) {
  const slider = document.getElementById(id);
  if (!slider) return;
  const slides = slider.querySelector(".slides");
  const imgs = slides ? slides.querySelectorAll("img") : [];
  const index = sliderState[id] || 0;
  const safeIndex = ((index % imgs.length) + imgs.length) % imgs.length;
  sliderState[id] = safeIndex;
  const translateX = -safeIndex * slider.clientWidth;
  slides.style.transform = `translateX(${translateX}px)`;
}
*/
// ===== Unified slider buttons =====
function nextSlide(sliderId) {
  const slider = document.getElementById(sliderId);
  if (!slider) return;
  const slides = slider.querySelector('.slides');
  const slideWidth = slider.querySelector('img').clientWidth + 20;
  slides.scrollBy({ left: slideWidth, behavior: 'smooth' });
}

function prevSlide(sliderId) {
  const slider = document.getElementById(sliderId);
  if (!slider) return;
  const slides = slider.querySelector('.slides');
  const slideWidth = slider.querySelector('img').clientWidth + 20;
  slides.scrollBy({ left: -slideWidth, behavior: 'smooth' });
}
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


