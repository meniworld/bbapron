document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".hero-slide");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    const dotsContainer = document.querySelector(".hero-dots");
    let currentIndex = 0;
    let slideInterval;

    // Create dots
    slides.forEach((_, i) => {
        const dot = document.createElement("span");
        if (i === 0) dot.classList.add("active");
        dotsContainer.appendChild(dot);
        dot.addEventListener("click", () => goToSlide(i));
    });

    const dots = document.querySelectorAll(".hero-dots span");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
            dots[i].classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlideFn() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    function goToSlide(index) {
        currentIndex = index;
        showSlide(currentIndex);
        resetInterval();
    }

    prev.addEventListener("click", () => { prevSlideFn(); resetInterval(); });
    next.addEventListener("click", () => { nextSlide(); resetInterval(); });

    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 5000); // 5s auto-slide
    }

    function resetInterval() {
        clearInterval(slideInterval);
        startAutoSlide();
    }

    startAutoSlide();
});
