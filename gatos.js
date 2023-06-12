// Obtener elementos del DOM
const cartCount = document.querySelector('.cart-count');
const cartIcon = document.querySelector('.cart');

let itemCount = 0;

// FunciÃ³n para agregar un producto al carrito
function addToCart() {
itemCount++;
cartCount.textContent = itemCount;
}

// Asignar evento de clic al Ã­cono del carrito
cartIcon.addEventListener('click', addToCart);