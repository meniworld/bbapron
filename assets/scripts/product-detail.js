document.addEventListener("DOMContentLoaded", () => {
    const swatches = document.querySelectorAll(".swatch");
    const mainImage = document.querySelector(".product-image img");

    swatches.forEach((swatch) => {
        swatch.addEventListener("click", () => {
            const newSrc = swatch.getAttribute("data-image");
            mainImage.src = newSrc;

            // Optional: Add active border highlight
            swatches.forEach(s => s.classList.remove("active"));
            swatch.classList.add("active");
        });
    });
});