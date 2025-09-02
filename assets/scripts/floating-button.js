document.addEventListener("DOMContentLoaded", function () {
    const btnContent = document.getElementById('appointmentContent');

    // Wait 30 seconds then switch to icon
    setTimeout(() => {
        btnContent.classList.add('fade-out');

        setTimeout(() => {
            // Use your local image path here
            btnContent.innerHTML = '<img src="assets/images/appointment.png" alt="Appointment Icon">';

            const img = btnContent.querySelector('img');
            img.style.display = 'block';  // make sure it is visible
            img.style.width = '40px';     // adjust size
            img.style.height = '40px';

            btnContent.classList.remove('fade-out');
            btnContent.classList.add('fade-in');
        }, 500);
    }, 30000);
});
