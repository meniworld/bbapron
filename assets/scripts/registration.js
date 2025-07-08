// Toggle password visibility
document.querySelectorAll(".password-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
        const input = btn.parentElement.querySelector('input');
        if (!input) return;
        if (input.type === "password") {
            input.type = "text";
            btn.textContent = "Hide";
        } else {
            input.type = "password";
            btn.textContent = "Show";
        }
    });
});