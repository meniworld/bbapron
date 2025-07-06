const loadMoreBtn = document.getElementById("loadMoreBtn");
const showAllBtn = document.getElementById("showAllBtn");
const productGrid = document.getElementById("productGrid");
const productCards = productGrid.querySelectorAll(".product-card");

let visibleCount = 6;
const step = 3;

// Initial setup
productCards.forEach((card, index) => {
    card.style.display = index < visibleCount ? "block" : "none";
});

if (productCards.length <= visibleCount) {
    loadMoreBtn.style.display = "none";
}

loadMoreBtn.addEventListener("click", () => {
    let shown = 0;
    for (let i = visibleCount; i < productCards.length && shown < step; i++) {
        productCards[i].style.display = "block";
        shown++;
    }
    visibleCount += shown;

    if (visibleCount >= productCards.length) {
        loadMoreBtn.style.display = "none";
        showAllBtn.style.display = "inline-block";
    }
});

showAllBtn.addEventListener("click", () => {
    alert("Redirect to All Products page or load full listing.");
});
