// Hamburger toggle
const toggleBtn = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
toggleBtn?.addEventListener('click', () => {
    toggleBtn.classList.toggle('open');
    navLinks.classList.toggle('show');
});

// Mobile dropdown click
document.querySelectorAll('.dropdown > .dropdown-trigger').forEach(trigger => {
    trigger.addEventListener('click', e => {
        if (window.matchMedia('(max-width:768px)').matches) {
            e.preventDefault();
            const dd = trigger.parentElement;
            dd.classList.toggle('open');
        }
    });
});
