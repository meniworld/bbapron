document.addEventListener('DOMContentLoaded', () => {
    const showMoreBtn = document.getElementById("showMoreBtn");
    const partnerGrid = document.getElementById("partnerGrid");
    const partners = partnerGrid.querySelectorAll(".partner-logo");

    let visibleCount = 10;  // Initially show 10 logos
    const step = 5;         // Show 5 more on each click

    // Initially hide partners after the first 10
    partners.forEach((partner, i) => {
        if (i >= visibleCount) partner.style.display = "none";
    });

    showMoreBtn.addEventListener("click", (e) => {
        e.preventDefault();

        let shown = 0;
        for (let i = visibleCount; i < partners.length && shown < step; i++) {
            partners[i].style.display = "flex";
            shown++;
        }
        visibleCount += shown;

        if (visibleCount >= partners.length) {
            showMoreBtn.style.display = "none";
        }
    });

    // Hide button if all logos are already visible initially
    if (partners.length <= visibleCount) {
        showMoreBtn.style.display = "none";
    }
});
