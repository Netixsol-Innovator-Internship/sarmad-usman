const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

let cart = [];

fetch("data.json")
  .then(res => res.json())
  .then(products => {
    // Filter by type and render each section grid
    renderProducts(products.filter(p => p.type === "burgers"), "burgers-grid");
    renderProducts(products.filter(p => p.type === "fries"), "fries-grid");
    renderProducts(products.filter(p => p.type === "cold-drinks"), "cold-drinks-grid");
  });

function renderProducts(products, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = ""; // Clear existing content

  products.forEach(product => {
    const card = document.createElement("div");

    card.className = "bg-white rounded-xl border border-gray-100 flex justify-between items-center p-5";
    card.style.boxShadow = "0 0 8px 0 rgba(0, 0, 0, 0.12)";

    card.innerHTML = `
      <div class="w-3/5 flex flex-col justify-start">
        <h3 class="font-semibold text-black text-base leading-tight mb-1">${product.name}</h3>
        <p class="text-gray-800 text-xs leading-snug mb-3" style="line-height: 1.3;">${product.items.join(", ")}</p>
        <span class="font-bold text-black text-sm">GBP ${product.price.toFixed(2)}</span>
      </div>

      <div class="relative w-2/5 h-[130px] rounded-xl overflow-hidden flex items-center justify-center">
        <img src="${product.image}" alt="${product.name}" class="object-cover w-[160px] h-[110px] rounded-lg shadow-md" />

        <div class="absolute top-[5rem] left-[5rem] w-16 h-[4rem] bg-white rounded-xl border border-white border-2xl flex items-center justify-center">
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

// Add to cart logic
document.addEventListener("click", e => {
  if (e.target.closest(".add-to-cart")) {
    const btn = e.target.closest(".add-to-cart");
    const productId = parseInt(btn.getAttribute("data-id"));
    addToCart(productId);
  }
});

function addToCart(id) {
  fetch("data.json")
    .then(res => res.json())
    .then(products => {
      const product = products.find(p => p.id === id);

      const cartItem = cart.find(item => item.id === id);
      if (cartItem) {
        cartItem.qty += 1;
      } else {
        cart.push({ ...product, qty: 1 });
      }
      updateCartUI();
    });
}

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
      flex items-center justify-between px-6 py-4 mb-3 rounded-lg
      ${isSelected ? 'bg-[#0a1537]' : 'bg-gray-200'}
    `;

    li.innerHTML = `
      <div class="flex items-center gap-5 w-3/5">
        <img src="${item.image}" alt="${item.name}" class="w-14 h-14 rounded-full object-cover border border-gray-400" />
        <span class="font-semibold ${isSelected ? 'text-[#f97316]' : 'text-black'}">${item.name}</span>
      </div>
      <div class="flex items-center gap-4 w-2/5 justify-end">
        <button data-id="${item.id}" class="decrease-qty text-2xl font-bold px-3 py-1 rounded bg-gray-300 hover:bg-gray-400 transition">−</button>
        <input type="text" readonly value="${item.qty}" class="w-14 text-center border border-gray-300 rounded px-3 py-1 bg-white text-lg" />
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

// Modal toggle
document.getElementById("cart-btn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }
  document.getElementById("cart-modal").classList.remove("hidden");
});

document.getElementById("close-cart").addEventListener("click", () => {
  document.getElementById("cart-modal").classList.add("hidden");
});

document.getElementById("take-me-back").addEventListener("click", () => {
  document.getElementById("cart-modal").classList.add("hidden");
});

// Quantity buttons in cart modal
document.getElementById("cart-items").addEventListener("click", e => {
  if (e.target.classList.contains("increase-qty")) {
    const id = parseInt(e.target.getAttribute("data-id"));
    changeQty(id, 1);
  }
  if (e.target.classList.contains("decrease-qty")) {
    const id = parseInt(e.target.getAttribute("data-id"));
    changeQty(id, -1);
  }
});

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.qty += delta;
  if (item.qty < 1) {
    cart = cart.filter(i => i.id !== id);
  }
  updateCartUI();
}
 document.addEventListener('DOMContentLoaded', function() {
        const container = document.getElementById('cardsContainer');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const cards = Array.from(container.children);
        
        // For mobile: keep original slider behavior
        if (window.innerWidth < 768) {
            // Mobile slider implementation would go here
            return;
        }
        
        // Desktop: rotating queue effect
        function rotateNext() {
            // Move first card to end
            const firstCard = cards.shift();
            cards.push(firstCard);
            updateDisplay();
        }
        
        function rotatePrev() {
            // Move last card to beginning
            const lastCard = cards.pop();
            cards.unshift(lastCard);
            updateDisplay();
        }
        
        function updateDisplay() {
            // Clear container
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
            // Add cards in new order
            cards.forEach(card => {
                container.appendChild(card);
            });
        }
        
        nextBtn.addEventListener('click', rotateNext);
        prevBtn.addEventListener('click', rotatePrev);
        
        // Optional: Auto-rotate every 5 seconds
        // setInterval(rotateNext, 5000);
    });

    // script.js

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

const container = document.getElementById('restaurant-container');

restaurants.forEach((restaurant) => {
  const card = document.createElement('div');
  card.className = 'w-[238px] h-[203px] bg-white shadow rounded-[12px] overflow-hidden';

  card.innerHTML = `
    <div class="${restaurant.bgColor} h-[150px] flex items-center justify-center rounded-t-[12px]">
      <img src="${restaurant.image}" alt="${restaurant.name}" class="h-[80px] object-contain">
    </div>
    <div class="bg-orange-400 h-[53px] flex items-center justify-center text-white font-medium text-sm">
      ${restaurant.name}
    </div>
  `;

  container.appendChild(card);
});
