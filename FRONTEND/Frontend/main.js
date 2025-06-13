fetch('http://localhost:5000/api/products')
  .then(res => res.json())
  .then(products => {
    const list = document.getElementById('product-list');
    products.forEach(p => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <p>$${p.price}</p>
        <button onclick='addToCart(${JSON.stringify(p)})'>Add to Cart</button>
      `;
      list.appendChild(div);
    });
  });

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Added to cart');
}
