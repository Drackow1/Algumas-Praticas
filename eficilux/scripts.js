const buttons = document.querySelectorAll('.button');
const cartItems = document.querySelector('.cart-items');
const optChanger = document.querySelector('.opt-hidden');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const itemName = button.textContent;
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.textContent = itemName;
        cartItems.appendChild(cartItem);

        optChanger.classList.toggle('opt');
    });
});

const categoryButtons = document.querySelectorAll('.category-button');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const categoryId = button.getAttribute('data-category');
        
        const optHiddenElement = document.getElementById(`opt-${categoryId}`);
        
        if (optHiddenElement) {
            document.querySelectorAll('.opt-hidden').forEach(element => {
                element.classList.add('opt-hidden');
            });

            optHiddenElement.classList.remove('opt-hidden');
        }
    });
});