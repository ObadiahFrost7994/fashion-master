const cartBtn = document.getElementById('cart-btn');
const cartOverlay = document.getElementById('cart-overlay');
const closeBtn = document.getElementById('close-btn');
const addToCartBtns = document.querySelectorAll('.add-to-cart');

cartBtn.addEventListener('click', () => {
  cartOverlay.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  cartOverlay.style.display = 'none';
});

addToCartBtns.forEach(btn => {
  btn.addEventListener('click', addToCart);
});

function addToCart() {
  const product = this.parentNode;
  const title = product.querySelector('h2').innerText;
  const price = product.querySelector('.price').innerText;
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');

  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');
  cartItem.innerHTML = `
    <p>${title}</p>
    <p>${price}</p>
  `;
  cartItems.appendChild(cartItem);

  updateCartTotal();
}

function updateCartTotal() {
  const cartItems = document.querySelectorAll('.cart-item');
  let total = 0;
  cartItems.forEach(item => {
    const price = parseFloat(item.children[1].innerText.replace('$', ''));
    total += price;
  });
  document.getElementById('cart-total').innerText = `$${total.toFixed(2)}`;
}
