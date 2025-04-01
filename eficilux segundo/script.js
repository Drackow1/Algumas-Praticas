document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('#parts-list input[type="checkbox"]');
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    const calculateButton = document.getElementById('calculate-button');
    const submitButton = document.getElementById('submit-button');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateCart);
    });

    calculateButton.addEventListener('click', calculateTotal);
    submitButton.addEventListener('click', submitOrder);

    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const item = document.createElement('li');
                item.textContent = checkbox.dataset.name + ' - R$' + checkbox.dataset.price;
                cartItems.appendChild(item);
                total += parseFloat(checkbox.dataset.price);
            }
        });

        totalElement.textContent = 'Total: R$' + total.toFixed(2);
    }

    function calculateTotal() {
        let total = 0;

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                total += parseFloat(checkbox.dataset.price);
            }
        });

        totalElement.textContent = 'Total: R$' + total.toFixed(2);
    }

    function submitOrder() {
        // Aqui você pode adicionar lógica para enviar o orçamento por email/WhatsApp
        // Isso pode envolver a criação de um formulário ou uso de APIs para envio de mensagens.
        // Porém, essa parte é mais complexa e dependente das suas preferências e requisitos.
    }
});