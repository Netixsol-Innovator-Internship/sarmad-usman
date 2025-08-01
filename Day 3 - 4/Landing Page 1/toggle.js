// Theme toggle elements
const toggleBtn = document.getElementById("theme-toggle");
const indicator = document.getElementById("indicator");
const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");

// Hamburger menu elements
const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');

// Initial theme state (false = dark mode, true = light mode)
let isLight = false;

// Theme toggle event
toggleBtn.addEventListener("click", () => {
  isLight = !isLight;

  // Toggle theme class on body
  document.body.classList.toggle("light-mode", isLight);

  // Move the sliding indicator
  indicator.style.transform = isLight ? "translateX(32px)" : "translateX(0)";

  // Change indicator background color
  indicator.classList.toggle("bg-gray-350", !isLight);
  indicator.classList.toggle("bg-gray-320", isLight);

  // Update icon colors
  sunIcon.classList.toggle("text-gray-500", isLight);
  sunIcon.classList.toggle("text-gray-400", !isLight);

  moonIcon.classList.toggle("text-gray-700", !isLight);
  moonIcon.classList.toggle("text-gray-400", isLight);
});

// Hamburger menu toggle event
menuButton.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});
