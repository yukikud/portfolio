window.addEventListener('DOMContentLoaded', () => {
  const nameBlock = document.querySelector('.name-block');
  const portfolioLabel = document.querySelector('.portfolio-label');

  // 左からスライドイン
  nameBlock.classList.add('slide-left');

  // 少し遅れて右からスライドイン
  setTimeout(() => {
    portfolioLabel.classList.add('slide-right');
  }, 300);
});

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".work-item");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        entry.target.classList.remove("hidden");
      } else {
        entry.target.classList.add("hidden");
        entry.target.classList.remove("visible");
      }
    });
  }, {
    threshold: 0.2 // 20%見えたら反応
  });

  items.forEach(item => observer.observe(item));
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
});