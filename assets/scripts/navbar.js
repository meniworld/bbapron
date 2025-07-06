// assets/scripts/navbar.js
const toggleBtn = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("open");
    navLinks.classList.toggle("show");
});
