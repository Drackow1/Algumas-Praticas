const products = [
    { name: 'Produto 1', category: 'electronics', price: 100 },
    { name: 'Produto 2', category: 'clothing', price: 50 },
    { name: 'Produto 3', category: 'books', price: 20 },
    // Adicione mais produtos aqui
];

const productContainer = document.getElementById('product-list');
const categories = document.getElementById('categories');

// Função para exibir produtos de uma determinada categoria
function showProducts(category) {
    productContainer.innerHTML = '';
    const filteredProducts = products.filter(product => product.category === category);

    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Preço: $${product.price}</p>
        `;
        productContainer.appendChild(productDiv);
    });
}

// Adicione eventos de clique às categorias
categories.addEventListener('click', event => {
    if (event.target.tagName === 'A') {
        const selectedCategory = event.target.getAttribute('data-category');
        showProducts(selectedCategory);
    }
});
const cart = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

function addToCart(product) {
    const cartItem = document.createElement('li');
    cartItem.textContent = product.name + ' - $' + product.price;
    cart.appendChild(cartItem);

    // Atualizar o total do carrinho
    updateCartTotal(product.price);
}

function updateCartTotal(price) {
    const currentTotal = parseFloat(cartTotal.textContent);
    const newTotal = currentTotal + price;
    cartTotal.textContent = newTotal.toFixed(2);
}

// Adicionar eventos de clique aos produtos para adicioná-los ao carrinho
productContainer.addEventListener('click', event => {
    if (event.target.classList.contains('add-to-cart')) {
        const productName = event.target.getAttribute('data-name');
        const selectedProduct = products.find(product => product.name === productName);
        addToCart(selectedProduct);
    }
});

const dropbtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');

dropbtn.addEventListener('click', () => {
    dropdownContent.classList.toggle('show');
});

window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropbtn')) {
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
        }
    }
});


// Exibir produtos iniciais
showProducts('electronics');