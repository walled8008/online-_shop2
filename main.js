/* =========================
   MOBILE MENU
========================= */
function hamburgerMenu() {
  const links = document.getElementById("myLinks");
  links.style.display = links.style.display === "block" ? "none" : "block";
}

/* =========================
   CART STORAGE
========================= */
let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* =========================
   UPDATE CART ICON
========================= */
function updateCartCount() {
  const cartIcon = document.querySelector(".fa-cart-shopping");
  if (cartIcon) {
    cartIcon.setAttribute("data-count", cart.length);
    cartIcon.innerText = `(${cart.length})`;
  }
}

/* =========================
   TRENDING PRODUCTS
========================= */
function displayProdIndex() {
  const container = document.getElementById("prod-index");
  if (!container) return;

  const products = [
    { id: 1, name: "Canon EOS R5", price: 3899, img: "img/camera1.jpg" },
    { id: 2, name: "Sony A7 IV", price: 2499, img: "img/camera2.jpg" },
    { id: 3, name: "Nikon Z6 II", price: 1999, img: "img/camera3.jpg" },
    { id: 4, name: "DJI Mini Drone", price: 599, img: "img/drone.jpg" }
  ];

  container.innerHTML = "";

  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${p.img}">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button onclick="addToCart(${p.id}, '${p.name}', ${p.price})">
        Add to cart
      </button>
    `;
    container.appendChild(card);
  });
}

/* =========================
   ADD TO CART
========================= */
function addToCart(id, name, price) {
  cart.push({ id, name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(`${name} added to cart`);
}

/* =========================
   DISPLAY CART PAGE
========================= */
function displayCart() {
  const container = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total");
  if (!container) return;

  container.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    container.innerHTML += `
      <div class="cart-item">
        <p>${item.name} - $${item.price}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;
  });

  totalEl.innerText = `$${total}`;
}

/* =========================
   REMOVE ITEM
========================= */
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
  updateCartCount();
}

/* =========================
   CHECKOUT
========================= */
function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  alert("Checkout successful! Thank you for your order.");
  cart = [];
  localStorage.removeItem("cart");
  updateCartCount();
  displayCart();
}

/* =========================
   SUBSCRIBE
========================= */
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();

  const subscribeBtn = document.getElementById("subscribe-btn");
  const subscribeInput = document.getElementById("subscribe-input");

  if (subscribeBtn) {
    subscribeBtn.addEventListener("click", () => {
      if (subscribeInput.value === "") {
        alert("Please enter an email");
      } else {
        alert("Subscribed successfully!");
        subscribeInput.value = "";
      }
    });
  }
});
