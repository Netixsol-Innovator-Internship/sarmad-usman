'use strict';

const billInput = document.getElementById('bill');
const peopleInput = document.getElementById('people');
const tipButtons = document.querySelectorAll('.tip-btn');
const customInput = document.querySelector('.custom-input');
const tipDisplay = document.querySelector('.tip-amount-el');
const totalDisplay = document.querySelector('.total-amount-el');
const resetBtn = document.querySelector('.reset-btn');
const toastContainer = document.getElementById('toast-container');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

let tipPercent = 0;

// Display toast
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast bg-[#26C2AE] text-[#00474B] px-4 py-3 rounded-md shadow-lg font-semibold';
  toast.textContent = message;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// Calculate and display
function calculate() {
  const bill = parseFloat(billInput.value);
  const people = parseInt(peopleInput.value);

  if (!bill || !people || people === 0) {
    tipDisplay.textContent = '0.00';
    totalDisplay.textContent = '0.00';
    return;
  }

  const tipAmount = (bill * tipPercent) / 100;
  const tipPerPerson = tipAmount / people;
  const totalPerPerson = (bill + tipAmount) / people;

  tipDisplay.textContent = tipPerPerson.toFixed(2);
  totalDisplay.textContent = totalPerPerson.toFixed(2);

  showToast(`Tip calculated at ${tipPercent}%`);
}

// Highlight active tip button
function highlightButton(btn) {
  tipButtons.forEach((b) => b.classList.remove('active-tip'));
  if (btn) btn.classList.add('active-tip');
}

// Tip % buttons
tipButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    tipPercent = parseInt(btn.textContent);
    highlightButton(btn);
    customInput.value = '';
    calculate();
  });
});

// Custom tip input
customInput.addEventListener('input', () => {
  let val = parseFloat(customInput.value);

  if (isNaN(val) || val < 0) {
    tipPercent = 0;
  } else if (val > 100) {
    tipPercent = 100;
    customInput.value = 100;
    showToast('Custom tip cannot exceed 100%');
  } else {
    tipPercent = val;
  }

  highlightButton(null);
  calculate();
});

const errorContainer = document.querySelector('.main-error-message');

peopleInput.addEventListener('input', () => {
  let val = parseInt(peopleInput.value);

  if (isNaN(val) || val <= 0) {
    peopleInput.classList.add('border', 'border-red-500');
    errorContainer.textContent = "Can't be zero";
  } else if (val > 50) {
    peopleInput.value = 50;
    showToast('Number of people cannot exceed 50');
    peopleInput.classList.remove('border', 'border-red-500');
    errorContainer.textContent = '';
    calculate();
  } else {
    peopleInput.classList.remove('border', 'border-red-500');
    errorContainer.textContent = '';
    calculate();
  }
});

// Bill input with max limit 100000
billInput.addEventListener('input', () => {
  let val = parseFloat(billInput.value);

  if (val > 100000) {
    billInput.value = 100000;
    showToast('Bill amount cannot exceed $100,000');
  }
  calculate();
});

// Reset button
resetBtn.addEventListener('click', () => {
  billInput.value = '';
  peopleInput.value = '';
  customInput.value = '';
  tipDisplay.textContent = '0.00';
  totalDisplay.textContent = '0.00';
  tipPercent = 0;

  highlightButton(null);

  const error = document.querySelector('.main-error-message');
  if (error) error.remove();
  peopleInput.classList.remove('border-red-500');

  showToast('Calculator reset!');
});

// Theme toggle button
themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');

  // Change icon depending on theme
  if (isDark) {
    // Moon icon for dark mode
    themeIcon.innerHTML = `
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
    `;
  } else {
    // Sun icon for light mode
    themeIcon.innerHTML = `
      <path
        d="M12 4.354a1 1 0 0 1 1 1V7a1 1 0 1 1-2 0V5.354a1 1 0 0 1 1-1zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2a1 1 0 0 1 1 1v1.646a1 1 0 1 1-2 0V20a1 1 0 0 1 1-1zM18.364 6.364a1 1 0 1 1 1.414 1.414l-1.152 1.152a1 1 0 1 1-1.414-1.414l1.152-1.152zm-12.728 0 1.152 1.152a1 1 0 1 1-1.414 1.414L4.222 7.778a1 1 0 1 1 1.414-1.414zm12.728 11.272-1.152-1.152a1 1 0 1 1 1.414-1.414l1.152 1.152a1 1 0 1 1-1.414 1.414zm-12.728 0a1 1 0 1 1-1.414-1.414l1.152-1.152a1 1 0 1 1 1.414 1.414l-1.152 1.152zM20 12a1 1 0 0 1-1 1h-1.646a1 1 0 1 1 0-2H19a1 1 0 0 1 1 1zM7 12a1 1 0 0 1-1 1H4.354a1 1 0 1 1 0-2H6a1 1 0 0 1 1 1z"
      />
    `;
  }
});
