function updateCartTotals() {
    let subtotal = 0;
    const shipping = 5;

    document.querySelectorAll('.cart-item').forEach(item => {
        const unitPrice = parseFloat(item.dataset.unitPrice);
        const quantity = parseInt(item.querySelector('.qty-input').value);
        const lineTotal = unitPrice * quantity;

        item.querySelector('.line-total').textContent = `$${lineTotal.toFixed(2)}`;
        subtotal += lineTotal;
    });

    // Calculate 5% discount based on current subtotal
    const discount = subtotal * 0.05;

    // Final total after discount and shipping (shipping only if subtotal > 0)
    const finalTotal = subtotal - discount + (subtotal > 0 ? shipping : 0);

    // Update the UI with formatted values
    document.getElementById('subtotal-value').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('discount-value').textContent = `-$${discount.toFixed(2)}`;
    document.getElementById('total-value').textContent = `$${finalTotal.toFixed(2)}`;
}

function attachEvents() {
    // Quantity increase button
    document.querySelectorAll('.qty-increase').forEach(button => {
        button.addEventListener('click', () => {
            const input = button.parentElement.querySelector('.qty-input');
            input.value = parseInt(input.value) + 1;
            updateCartTotals();
        });
    });

    // Quantity decrease button
    document.querySelectorAll('.qty-decrease').forEach(button => {
        button.addEventListener('click', () => {
            const input = button.parentElement.querySelector('.qty-input');
            if (parseInt(input.value) > 1) {
                input.value = parseInt(input.value) - 1;
                updateCartTotals();
            }
        });
    });

    // Manual quantity input change
    document.querySelectorAll('.qty-input').forEach(input => {
        input.addEventListener('change', () => {
            if (parseInt(input.value) < 1 || isNaN(parseInt(input.value))) {
                input.value = 1;
            }
            updateCartTotals();
        });
    });

    // Remove item button
    document.querySelectorAll('.cart-remove').forEach(button => {
        button.addEventListener('click', () => {
            const item = button.closest('.cart-item');
            item.remove();
            updateCartTotals();
        });
    });
}

// Initialize everything on page load
document.addEventListener('DOMContentLoaded', () => {
    attachEvents();
    updateCartTotals();
});
