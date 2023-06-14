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


/* carrusel */

const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;
let currentIndex = 0;

function showItem(index) {
if (index < 0 || index >= totalItems) {
    return;
}

carouselItems.forEach(item => {
    item.style.transform = `translateX(-${index * 100}%)`;
});
}

function nextItem() {
currentIndex++;
if (currentIndex >= totalItems) {
    currentIndex = 0;
}
showItem(currentIndex);
}

function previousItem() {
currentIndex--;
if (currentIndex < 0) {
    currentIndex = totalItems - 1;
}
showItem(currentIndex);
}

setInterval(nextItem, 3000); // Cambiar automáticamente cada 3 segundos

// Event Listeners para botones de navegación
document.getElementById('btn-prev').addEventListener('click', previousItem);
document.getElementById('btn-next').addEventListener('click', nextItem);
