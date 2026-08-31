    const products = [
  {
    name: "HYPEIN Essential Tee",
    price: 799,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "HYPEIN Oversized Hoodie",
    price: 1299,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "HYPEIN Street Jacket",
    price: 1799,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "HYPEIN Black Cargo",
    price: 1199,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80"
  }
];

let cart = 0;

const grid = document.getElementById("productGrid");
const count = document.getElementById("cartCount");

products.forEach((product) => {
  const card = document.createElement("article");
  card.className = "product";

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div class="product-info">
      <h3>${product.name}</h3>
      <div class="price">₹${product.price}</div>
      <button class="add">ADD TO CART</button>
    </div>
  `;

  card.querySelector(".add").addEventListener("click", () => {
    cart++;
    count.textContent = cart;

    const button = card.querySelector(".add");
    button.textContent = "ADDED ✓";

    setTimeout(() => {
      button.textContent = "ADD TO CART";
    }, 900);
  });

  grid.appendChild(card);
});

document.getElementById("cartBtn").addEventListener("click", () => {
  if (cart > 0) {
    alert(`You have ${cart} item(s) in your cart.`);
  } else {
    alert("Your cart is empty.");
  }
});
