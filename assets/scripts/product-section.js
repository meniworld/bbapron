document.addEventListener('DOMContentLoaded', () => {
    // ==========================
    // Load More / Show All Logic
    // ==========================
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    const showAllBtn = document.getElementById("showAllBtn");
    const productGrid = document.getElementById("productGrid");
    const productCards = productGrid ? productGrid.querySelectorAll(".product-card") : [];

    let visibleCount = 6;
    const step = 3;

    // Initial display setup
    productCards.forEach((card, index) => {
        card.style.display = index < visibleCount ? "block" : "none";
    });

    if (productCards.length <= visibleCount && loadMoreBtn) {
        loadMoreBtn.style.display = "none";
    }

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener("click", () => {
            let shown = 0;
            for (let i = visibleCount; i < productCards.length && shown < step; i++) {
                productCards[i].style.display = "block";
                shown++;
            }
            visibleCount += shown;

            if (visibleCount >= productCards.length) {
                loadMoreBtn.style.display = "none";
                if (showAllBtn) showAllBtn.style.display = "inline-block";
            }
        });
    }

    if (showAllBtn) {
        showAllBtn.addEventListener("click", () => {
            alert("Redirect to All Products page or load full listing.");
        });
    }

    // ==========================
    // Filter Sidebar Toggle Logic
    // ==========================
    const filterToggleBtn = document.getElementById('filterToggleBtn');
    const filterSidebar = document.getElementById('filterSidebar');
    const filterCloseBtn = document.getElementById('filterCloseBtn');

    if (filterToggleBtn && filterSidebar) {
        filterToggleBtn.addEventListener('click', () => {
            filterSidebar.classList.add('show');
        });
    }

    if (filterCloseBtn && filterSidebar) {
        filterCloseBtn.addEventListener('click', () => {
            filterSidebar.classList.remove('show');
        });
    }
});
