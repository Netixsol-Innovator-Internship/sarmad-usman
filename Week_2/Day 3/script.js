// Get references to menu toggle elements
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Toggle mobile menu visibility when the menu button is clicked
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Initialize empty cart array
let cart = [];
let productsCache = null;
let toastTimeout = null;

// Fetch product data once and cache it
fetch("data.json")
  .then((res) => res.json())
  .then((products) => {
    productsCache = products; // Cache all products
    renderProducts(products.filter((p) => p.type === "burgers"), "burgers-grid");
    renderProducts(products.filter((p) => p.type === "fries"), "fries-grid");
    renderProducts(products.filter((p) => p.type === "cold-drinks"), "cold-drinks-grid");
  });

// Render products into container
function renderProducts(products, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = `
      bg-white rounded-xl border border-gray-100 
      flex flex-col md:flex-row justify-between items-center p-5 
      mb-4 shadow-md
    `;

    card.innerHTML = `
      <div class="w-full md:w-3/5 flex flex-col justify-start mb-4 md:mb-0">
        <h3 class="font-semibold text-black text-base leading-tight mb-1">${product.name}</h3>
        <p class="text-gray-800 text-xs leading-snug mb-3" style="line-height: 1.3;">${product.items.join(", ")}</p>
        <span class="font-bold text-black text-sm">GBP ${product.price.toFixed(2)}</span>
      </div>
      <div class="relative w-full md:w-2/5 h-[130px] rounded-xl overflow-hidden flex items-center justify-center">
        <img src="${product.image}" alt="${product.name}" class="object-cover w-[160px] h-[110px] rounded-lg shadow-md" />
        <div class="absolute bottom-2 md:top-[5rem] md:left-[5rem] left-1/2 transform -translate-x-1/2 md:transform-none w-12 h-12 md:w-16 md:h-[4rem] bg-white rounded-xl border border-white flex items-center justify-center">
          <button data-id="${product.id}" class="add-to-cart bg-[#0A1334] w-6 h-6 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Event delegation for add-to-cart buttons
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".add-to-cart");
  if (btn) {
    const productId = parseInt(btn.getAttribute("data-id"));
    addToCart(productId);
  }
});

// Show toast message with reset timeout
function showToast(message = "Product added to cart") {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.remove("opacity-0", "pointer-events-none");
  toast.classList.add("opacity-100");

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.add("opacity-0", "pointer-events-none");
    toast.classList.remove("opacity-100");
  }, 2000);
}

// Add product to cart using cached products
function addToCart(id) {
  if (!productsCache) return; // Safety check if cache not loaded yet

  const product = productsCache.find((p) => p.id === id);
  if (!product) return;

  const cartItem = cart.find((item) => item.id === id);
  if (cartItem) {
    cartItem.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCartUI();
  showToast();
}

// Update cart UI: count, items list, total price
function updateCartUI() {
  const cartCount = document.getElementById("cart-count");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.qty;
    const isSelected = item.qty > 1;

    const li = document.createElement("li");
    li.className = `
      flex flex-col sm:flex-row items-center justify-between px-4 py-3 rounded-lg
      ${isSelected ? "bg-[#0a1537]" : "bg-gray-200"}
    `;
    li.innerHTML = `
      <div class="flex items-center gap-4 w-full sm:w-3/5 mb-2 sm:mb-0">
        <img src="${item.image}" alt="${item.name}" class="w-14 h-14 rounded-full object-cover border border-gray-400" />
        <span class="font-semibold ${isSelected ? "text-[#f97316]" : "text-black"}">${item.name}</span>
      </div>
      <div class="flex items-center gap-2 w-full sm:w-2/5 justify-end">
        <button data-id="${item.id}" class="decrease-qty text-2xl font-bold px-3 py-1 rounded bg-gray-300 hover:bg-gray-400 transition">−</button>
        <input type="text" readonly value="${item.qty}" class="w-12 text-center border border-gray-300 rounded px-2 py-1 bg-white text-lg" />
        <button data-id="${item.id}" class="increase-qty text-2xl font-bold px-3 py-1 rounded bg-gray-300 hover:bg-gray-400 transition">+</button>
      </div>
    `;
    cartItems.appendChild(li);
  });

  cartTotal.innerHTML = `
    <span>Total to pay</span>
    <span>£${total.toFixed(2)}</span>
  `;
}

// Open cart modal only if cart is not empty
document.getElementById("cart-btn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }
  document.getElementById("cart-modal").classList.remove("hidden");
});

// Close cart modal handlers
document.getElementById("close-cart").addEventListener("click", () => {
  document.getElementById("cart-modal").classList.add("hidden");
});
document.getElementById("take-me-back").addEventListener("click", () => {
  document.getElementById("cart-modal").classList.add("hidden");
});

// Quantity change buttons inside cart modal
document.getElementById("cart-items").addEventListener("click", (e) => {
  if (e.target.classList.contains("increase-qty")) {
    const id = parseInt(e.target.getAttribute("data-id"));
    changeQty(id, 1);
  }
  if (e.target.classList.contains("decrease-qty")) {
    const id = parseInt(e.target.getAttribute("data-id"));
    changeQty(id, -1);
  }
});

// Change cart item quantity and update or remove
function changeQty(id, delta) {
  const item = cart.find((i) => i.id === id);
  if (!item) return;

  item.qty += delta;
  if (item.qty < 1) {
    cart = cart.filter((i) => i.id !== id);
  }
  updateCartUI();
}

// Card rotation logic (if you keep it, otherwise remove)
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("cardsContainer");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (!container || !prevBtn || !nextBtn) return;

  const cards = Array.from(container.children);

  if (window.innerWidth < 768) {
    return; // Skip rotation on mobile
  }

  function rotateNext() {
    const firstCard = cards.shift();
    cards.push(firstCard);
    updateDisplay();
  }

  function rotatePrev() {
    const lastCard = cards.pop();
    cards.unshift(lastCard);
    updateDisplay();
  }

  function updateDisplay() {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    cards.forEach((card) => container.appendChild(card));
  }

  nextBtn.addEventListener("click", rotateNext);
  prevBtn.addEventListener("click", rotatePrev);

  // Optional auto-rotate
  // setInterval(rotateNext, 5000);
});



// Static list of restaurant cards
const restaurants = [
  {
    name: "McDonald's London",
    image: "images/macdonald.png",
    bgColor: "bg-red-600"
  },
  {
    name: "Papa Johns",
    image: "images/papajohns.png",
    bgColor: "bg-green-800"
  },
  {
    name: "KFC West London",
    image: "images/kfc.png",
    bgColor: "bg-red-600"
  },
  {
    name: "Texas Chicken",
    image: "images/texas.png",
    bgColor: "bg-white"
  },
  {
    name: "Burger King",
    image: "images/burgerking.png",
    bgColor: "bg-orange-300"
  },
  {
    name: "Shaurma 1",
    image: "images/shaurma.png",
    bgColor: "bg-white"
  }
];

// Render static restaurant cards on page
const container = document.getElementById('restaurant-container');

restaurants.forEach((restaurant) => {
  const card = document.createElement('div');

  // Set styles and animation on hover
  card.className = `
    w-[238px] h-[203px] bg-white shadow rounded-[12px] overflow-hidden 
    transform transition-transform duration-300 hover:scale-105 hover:shadow-lg
  `;

  // Set card content with image and title
  card.innerHTML = `
    <div class="${restaurant.bgColor} h-[150px] flex items-center justify-center rounded-t-[12px]">
      <img src="${restaurant.image}" alt="${restaurant.name}" class="h-[100px] max-h-full object-contain">
    </div>
    <div class="bg-orange-400 h-[53px] flex items-center justify-center text-white font-medium text-sm">
      ${restaurant.name}
    </div>
  `;

  container.appendChild(card); // Append to DOM
});

// .......................Customer Reviews...............
    (() => {
      const container = document.getElementById('cardsContainer');
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');

      // Only enable slider on mobile (under md breakpoint)
      function isMobile() {
        return window.innerWidth < 768;
      }

      // Scroll amount per click = container width (show one card fully)
      function scrollAmount() {
        return container.offsetWidth;
      }

      prevBtn.addEventListener('click', () => {
        if (isMobile()) {
          container.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
        }
      });

      nextBtn.addEventListener('click', () => {
        if (isMobile()) {
          container.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
        }
      });

      // Optional: Disable buttons when at start/end of scroll on mobile
      function updateButtons() {
        if (!isMobile()) {
          prevBtn.disabled = false;
          nextBtn.disabled = false;
          return;
        }
        const scrollLeft = container.scrollLeft;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        prevBtn.disabled = scrollLeft <= 0;
        nextBtn.disabled = scrollLeft >= maxScrollLeft - 1; // small fudge factor
      }

      container.addEventListener('scroll', updateButtons);
      window.addEventListener('resize', updateButtons);
      updateButtons();
    })();
  