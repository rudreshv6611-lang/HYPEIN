
/* =========================
   HYPEIN - JAVASCRIPT
   ========================= */

const products = [
  {
    name: "HYPEIN Oversized T-Shirt",
    price: 999,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "HYPEIN Black Hoodie",
    price: 1299,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "HYPEIN Streetwear Shirt",
    price: 1099,
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "HYPEIN Premium Tee",
    price: 899,
    image: "https://images.unsplash.com/photo-1583743814966-8936f37f384c?auto=format&fit=crop&w=800&q=80"
  }
];

let cart = [];

const productGrid = document.getElementById("productGrid");
const cartCount = document.getElementById("cartCount");
const cartBtn = document.getElementById("cartBtn");


/* =========================
   DISPLAY PRODUCTS
   ========================= */

function displayProducts() {

  productGrid.innerHTML = "";

  products.forEach((product, index) => {

    const card = document.createElement("div");

    card.className = "product-card";

    card.innerHTML = `
      <img
        src="${product.image}"
        alt="${product.name}"
        loading="lazy"
      >

      <div class="product-info">

        <h3>${product.name}</h3>

        <p>₹${product.price}</p>

        <button
          class="add-to-cart"
          onclick="addToCart(${index})"
        >
          ADD TO CART
        </button>

      </div>
    `;

    productGrid.appendChild(card);

  });
}


/* =========================
   ADD TO CART
   ========================= */

function addToCart(index) {

  cart.push(products[index]);

  updateCartCount();

  alert(products[index].name + " added to cart!");
}


/* =========================
   UPDATE CART COUNT
   ========================= */

function updateCartCount() {

  cartCount.textContent = cart.length;

}


/* =========================
   CART BUTTON
   ========================= */

cartBtn.addEventListener("click", function () {

  if (cart.length === 0) {

    alert("Your cart is empty.");

    return;

  }

  let message = "YOUR HYPEIN CART\n\n";

  cart.forEach((item, index) => {

    message +=
      `${index + 1}. ${item.name} - ₹${item.price}\n`;

  });

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  message += `\nTOTAL: ₹${total}`;

  alert(message);

});


/* =========================
   START WEBSITE
   ========================= */

displayProducts();
updateCartCount();
