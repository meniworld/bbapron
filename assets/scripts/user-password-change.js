function togglePassword(id, btn) {
    const input = document.getElementById(id);
    const isPassword = input.type === "password";
    input.type = isPassword ? "text" : "password";
    btn.textContent = isPassword ? "Hide" : "Show";
}
