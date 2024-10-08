
const totalElement = document.getElementById('total');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const orderButton = document.getElementById('submitOrder');

function updateTotal() {
    let total = 0;

    checkboxes.forEach(checkbox => {
        const qtyInput = document.getElementById(`${checkbox.id}-qty`);
        const quantity = parseInt(qtyInput.value);
        const price = parseInt(checkbox.getAttribute('data-price'));

        if (checkbox.checked && quantity > 0) {
            total += price * quantity;
        }
    });

    totalElement.textContent = total;
}

function validateQuantity(input) {
    let value = parseInt(input.value);
    if (isNaN(value) || value < 0 || /^0\d+$/.test(input.value)) {
        input.value = 0;
    } else {
        input.value = value;
    }
    updateTotal();
}

checkboxes.forEach(checkbox => {
    const qtyInput = document.getElementById(`${checkbox.id}-qty`);
    
    checkbox.addEventListener('change', () => {
        qtyInput.value = checkbox.checked ? 1 : 0;
        updateTotal();
    });
    qtyInput.addEventListener('input', () => {
        validateQuantity(qtyInput);
    });
});

orderButton.addEventListener('click', () => {
    const lastname = document.getElementById('lastname').value;
    const firstname = document.getElementById('firstname').value;
    const total = totalElement.textContent;

    alert(`Заказчик: ${lastname} ${firstname}\nОбщая стоимость: ${total} р.`);
});
