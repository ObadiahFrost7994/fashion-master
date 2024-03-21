
document.addEventListener('DOMContentLoaded', function() {
  const cartBtn = document.getElementById('viewCart');
  const closeCartBtn = document.getElementById('closeCart');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartItems = document.getElementById('cartItems');
  const cartCount = document.getElementById('cartCount');
  const cartTotal = document.getElementById('cartTotal');

  let itemCount = 0;
  let total = 0;
  let cart = [];

  cartBtn.addEventListener('click', function() {
      cartOverlay.style.display = 'flex';
  });

  closeCartBtn.addEventListener('click', function() {
      cartOverlay.style.display = 'none';
  });

  const buyButtons = document.querySelectorAll('.buy-btn');

  buyButtons.forEach(button => {
      button.addEventListener('click', function() {
          const itemContainer = this.parentElement;
          const name = itemContainer.querySelector('h6 a').innerText;
          const priceText = itemContainer.querySelector('.product__price').innerText;
          const price = parseFloat(priceText.replace('Ksh ', '')); // Remove currency symbol

          addItemToCart(name, price);
          itemCount++;
          cartCount.innerText = itemCount;

          // Redirect to cart.php after adding item to cart
          window.location.href = 'cart.php';
      });
  });

  function addItemToCart(name, price) {
      const existingItem = cart.find(item => item.name === name);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ name, price, quantity: 1 });
      }

      renderCart();
  }

  function renderCart() {
      cartItems.innerHTML = '';
      total = 0; // Reset total before recalculating

      cart.forEach(item => {
          const listItem = document.createElement('li');
          const itemPrice = parseFloat(item.price);
          if (!isNaN(itemPrice)) {
              total += itemPrice * item.quantity;
              listItem.innerText = `${item.name} - Ksh ${(itemPrice * item.quantity).toFixed(2)} x ${item.quantity}`;
          } else {
              listItem.innerText = `${item.name} - Ksh NaN x ${item.quantity}`;
          }
          cartItems.appendChild(listItem);
      });

      cartTotal.innerText = `Ksh ${total.toFixed(2)}`;
  }
});
