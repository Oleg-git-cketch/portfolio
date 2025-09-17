// Анимация появления секций при скролле
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

// Добавляем эффект появления
document.querySelectorAll("section, .project-card, .skill-card").forEach(el => {
  el.classList.add("hidden");
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

