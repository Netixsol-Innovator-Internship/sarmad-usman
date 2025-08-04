// Helper function to get element by id
function byId(id) {
  return document.getElementById(id);
}

// Show or hide error message for a given input field
function showError(id, message = "") {
  const el = byId(id);
  el.textContent = message;
  el.style.display = message ? "block" : "none";
}

// Update age display
function displayAge(years, months, days) {
  byId("age-years").textContent = years;
  byId("age-months").textContent = months;
  byId("age-days").textContent = days;
}

// Show a message box with success or error type
function showMessage(text, type = "success") {
  const box = byId("message-box");
  const textSpan = byId("message-text");
  textSpan.textContent = text;
  box.className = `message ${type}`;
  box.style.display = "flex";
}

// Clear all inputs, errors, age display, and hide message box
function clearAll() {
  ["input-day", "input-month", "input-year"].forEach(id => {
    byId(id).value = "";
  });
  clearAllErrors();
  displayAge("--", "--", "--");
  const box = byId("message-box");
  box.style.display = "none";
  byId("message-text").textContent = "";
}

// Check if a year is a leap year
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Get number of days in a month for a given year
function getDaysInMonth(monthIndex, year) {
  const daysInMonths = [
    31,
    isLeapYear(year) ? 29 : 28,
    31, 30, 31, 30,
    31, 31, 30, 31, 30, 31
  ];
  return daysInMonths[monthIndex];
}

// Clear all error messages
function clearAllErrors() {
  ["error-day", "error-month", "error-year"].forEach(id => {
    showError(id, "");
  });
}

// Clear a single input and its error
function clearField(id) {
  byId(id).value = "";
  showError("error-" + id.split('-')[1], "");
  displayAge("--", "--", "--");
  byId("message-box").style.display = "none";
}

// Calculate age and validate inputs
function calculateAge() {
  clearAllErrors();

  let day = byId("input-day").value.trim();
  let month = byId("input-month").value.trim();
  let year = byId("input-year").value.trim();

  let hasError = false;
  const currentYear = new Date().getFullYear();

  // Validate Day
  if (!day) {
    showError("error-day", "This field is required");
    hasError = true;
  } else if (!/^\d+$/.test(day)) {
    showError("error-day", "Must be a valid number");
    hasError = true;
  } else {
    day = parseInt(day);
    if (day < 1 || day > 31) {
      showError("error-day", "Must be a valid day");
      hasError = true;
    }
  }

  // Validate Month
  if (!month) {
    showError("error-month", "This field is required");
    hasError = true;
  } else if (!/^\d+$/.test(month)) {
    showError("error-month", "Must be a valid number");
    hasError = true;
  } else {
    month = parseInt(month);
    if (month < 1 || month > 12) {
      showError("error-month", "Must be a valid month");
      hasError = true;
    }
  }

  // Validate Year
  if (!year) {
    showError("error-year", "This field is required");
    hasError = true;
  } else if (!/^\d+$/.test(year)) {
    showError("error-year", "Must be a valid number");
    hasError = true;
  } else {
    year = parseInt(year);
    if (year > currentYear) {
      showError("error-year", "Must be in the past");
      hasError = true;
    }
  }

  // Validate day in the given month/year
  if (!hasError) {
    const maxDay = getDaysInMonth(month - 1, year);
    if (day > maxDay) {
      showError("error-day", `Must be <= ${maxDay} for that month`);
      hasError = true;
    }
  }

  if (hasError) {
    displayAge("--", "--", "--");
    showMessage("Please fix the errors above.", "error");
    return;
  }

  const birthDate = new Date(year, month - 1, day);
  const today = new Date();

  if (birthDate > today) {
    showMessage("Birth date cannot be in the future.", "error");
    displayAge("--", "--", "--");
    return;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = (today.getMonth() - 1 + 12) % 12;
    const prevMonthYear = prevMonth === 11 ? today.getFullYear() - 1 : today.getFullYear();
    days += getDaysInMonth(prevMonth, prevMonthYear);
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  displayAge(years, months, days);
  showMessage("Age calculated successfully!", "success");
}

// Event listeners

// Clear all fields and errors on close button click
byId("close-message").addEventListener("click", clearAll);

// Clear individual field when clicking the cross (you need to add these to your HTML)
["input-day", "input-month", "input-year"].forEach(id => {
  const clearBtn = byId("clear-" + id.split('-')[1]);
  if (clearBtn) {
    clearBtn.addEventListener("click", () => clearField(id));
  }
});

// Toggle dark mode if you have a toggle button with id="toggle-theme"
const toggleBtn = byId("toggle-theme");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });
}
