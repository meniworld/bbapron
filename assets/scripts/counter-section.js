const counters = document.querySelectorAll('.counter');
const speed = 150;

const startCountUp = (counter) => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = Math.ceil(target / speed);

        if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 30);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
};

// Trigger when in view
const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCountUp(entry.target);
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.6 }
);

counters.forEach(counter => {
    observer.observe(counter);
});
