const cart = JSON.parse(localStorage.getItem('cart')) || [];
const container = document.getElementById('cart-items');

cart.forEach((item, index) => {
  const div = document.createElement('div');
  div.innerHTML = `<p>${item.name} - $${item.price}</p>`;
  container.appendChild(div);
});

function checkout() {
  fetch('http://localhost:5000/api/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ items: cart })
  }).then(() => {
    alert('Order placed!');
    localStorage.removeItem('cart');
    window.location.href = 'index.html';
  });
}
