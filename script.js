// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Динамичные частицы
const particles = document.getElementById("particles");
for (let i = 0; i < 50; i++) {
  let dot = document.createElement("div");
  dot.classList.add("dot");
  dot.style.left = Math.random() * 100 + "vw";
  dot.style.top = Math.random() * 100 + "vh";
  dot.style.width = dot.style.height = Math.random() * 3 + 2 + "px";
  dot.style.animation = `move ${5 + Math.random() * 10}s ease-in-out infinite`;
  particles.appendChild(dot);
}
