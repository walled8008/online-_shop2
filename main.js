/* =========================
   MOBILE HAMBURGER MENU
========================= */
function hamburgerMenu() {
  const links = document.getElementById("myLinks");

  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
}

/* =========================
   TRENDING PRODUCTS (INDEX)
========================= */
function displayProdIndex() {
  const container = document.getElementById("prod-index");
  if (!container) return;

  const products = [
    {
      name: "Canon EOS R5",
      price: "$3,899",
      img: "img/camera1.jpg",
    },
    {
      name: "Sony Alpha A7 IV",
      price: "$2,499",
      img: "img/camera2.jpg",
    },
    {
      name: "Nikon Z6 II",
      price: "$1,999",
      img: "img/camera3.jpg",
    },
    {
      name: "DJI Mini Drone",
      price: "$599",
      img: "img/drone.jpg",
    },
  ];

  container.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="price">${product.price}</p>
      <button class="buy-btn">Add to cart</button>
    `;

    container.appendChild(card);
  });
}

/* =========================
   SEARCH (BASIC DEMO)
========================= */
const searchInput = document.getElementById("search-input");

if (searchInput) {
  searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();
    console.log("Searching for:", value);
    // Later you can filter products here
  });
}

/* =========================
   SUBSCRIBE BUTTON
========================= */
const subscribeBtn = document.getElementById("subscribe-btn");
const subscribeInput = document.getElementById("subscribe-input");

if (subscribeBtn) {
  subscribeBtn.addEventListener("click", () => {
    if (subscribeInput.value === "") {
      alert("Please enter your email");
    } else {
      alert("Thank you for subscribing!");
      subscribeInput.value = "";
    }
  });
}

/* =========================
   CLOSE MOBILE MENU ON RESIZE
========================= */
window.addEventListener("resize", () => {
  const links = document.getElementById("myLinks");
  if (window.innerWidth > 768 && links) {
    links.style.display = "none";
  }
});
