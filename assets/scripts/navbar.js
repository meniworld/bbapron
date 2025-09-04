// ===============================
// NAVBAR & MOBILE MEGA MENU JS
// ===============================

// Hamburger toggle
const toggleBtn = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

toggleBtn?.addEventListener('click', () => {
    toggleBtn.classList.toggle('open');
    navLinks.classList.toggle('show');
});

// Mobile dropdown toggle
document.querySelectorAll('.dropdown > .dropdown-trigger').forEach(trigger => {
    trigger.addEventListener('click', e => {
        // ONLY run this on mobile
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const dd = trigger.parentElement;

            // Close other open dropdowns
            document.querySelectorAll('.nav-links .dropdown.open').forEach(other => {
                if (other !== dd) {
                    other.classList.remove('open');
                    const megaOther = other.querySelector('.mega-dropdown');
                    if (megaOther) megaOther.style.display = 'none';
                }
            });

            // Toggle current dropdown
            dd.classList.toggle('open');

            // Show/hide the mega menu
            const mega = dd.querySelector('.mega-dropdown');
            if (mega) {
                if (dd.classList.contains('open')) {
                    mega.style.display = 'block';
                    mega.style.opacity = '0';
                    mega.style.transform = 'translateY(-10px) translateX(-50%)';
                    requestAnimationFrame(() => {
                        mega.style.transition = 'all 0.3s ease';
                        mega.style.opacity = '1';
                        mega.style.transform = 'translateY(0) translateX(-50%)';
                    });
                } else {
                    mega.style.transition = 'all 0.3s ease';
                    mega.style.opacity = '0';
                    mega.style.transform = 'translateY(-10px) translateX(-50%)';
                    mega.addEventListener('transitionend', function hideMega() {
                        mega.style.display = 'none';
                        mega.removeEventListener('transitionend', hideMega);
                    });
                }
            }
        }
    });
});

// Optional: close nav if clicking outside
document.addEventListener('click', e => {
    if (window.innerWidth <= 768) {
        const isClickInside = e.target.closest('.nav-container');
        if (!isClickInside) {
            // Close all dropdowns
            document.querySelectorAll('.nav-links .dropdown.open').forEach(dd => {
                dd.classList.remove('open');
                const mega = dd.querySelector('.mega-dropdown');
                if (mega) mega.style.display = 'none';
            });

            // Close nav
            navLinks.classList.remove('show');
            toggleBtn.classList.remove('open');
        }
    }
});
