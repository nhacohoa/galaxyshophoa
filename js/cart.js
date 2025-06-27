function loadCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItems = document.getElementById('cart-items');
  const totalPrice = document.getElementById('total-price');

  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.price.toLocaleString()}đ`;
    cartItems.appendChild(li);
    total += item.price;
  });

  totalPrice.textContent = `Tổng cộng: ${total.toLocaleString()}đ`;
}

function clearCart() {
  localStorage.removeItem('cart');
  loadCart();
  alert('Đã xóa giỏ hàng.');
}

window.onload = loadCart;
