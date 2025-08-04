// Helper function
function byId(id) {
  return document.getElementById(id);
}

// Error message
function showError(id, message = "") {
  const el = byId(id);
  el.textContent = message;
  el.style.display = message ? "block" : "none";
}

// Display age
function displayAge(years, months, days) {
  byId("age-years").textContent = years;
  byId("age-months").textContent = months;
  byId("age-days").textContent = days;
}

// Message box
function showMessage(text, type = "success") {
  const box = byId("message-box");
  box.textContent = text;
  box.className = `message ${type}`;
  box.style.display = "flex";
}

// Leap year check
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Days in month
function getDaysInMonth(monthIndex, year) {
  const days = [
    31,
    isLeapYear(year) ? 29 : 28,
    31, 30, 31, 30, 31,
    31, 30, 31, 30, 31
  ];
  return days[monthIndex];
}

// Age calculation
function calculateAge() {
  const day = parseInt(byId("input-day").value);
  const month = parseInt(byId("input-month").value) - 1;
  const year = parseInt(byId("input-year").value);

  const today = new Date();
  const currentYear = today.getFullYear();

  let valid = true;
  const errors = [];

  if (isNaN(month) || month < 0 || month > 11) {
    showError("error-month", "Enter a valid month (1–12)");
    errors.push("Month must be 1–12.");
    valid = false;
  } else {
    showError("error-month");
  }

  if (isNaN(year) || year > currentYear || String(year).length !== 4) {
    showError("error-year", `Enter a valid year (<= ${currentYear})`);
    errors.push(`Year must be 4 digits and ≤ ${currentYear}.`);
    valid = false;
  } else {
    showError("error-year");
  }

  if (!isNaN(month) && !isNaN(year)) {
    const maxDay = getDaysInMonth(month, year);
    if (isNaN(day) || day < 1 || day > maxDay) {
      showError("error-day", `Enter a valid day (1–${maxDay})`);
      errors.push(`Day must be 1–${maxDay}.`);
      valid = false;
    } else {
      showError("error-day");
    }
  } else if (isNaN(day)) {
    showError("error-day", "Enter a valid day");
    errors.push("Day must be a number.");
    valid = false;
  }

  if (!valid) {
    showMessage(errors.join(" "), "error");
    displayAge("--", "--", "--");
    return;
  }

  const birthDate = new Date(year, month, day);

  if (birthDate > today) {
    showMessage("You haven't been born yet!", "error");
    displayAge("--", "--", "--");
    return;
  }

  let years = today.getFullYear() - year;
  let months = today.getMonth() - month;
  let days = today.getDate() - day;

  if (days < 0) {
    months--;
    const prevMonth = (today.getMonth() - 1 + 12) % 12;
    const prevYear = prevMonth === 11 ? today.getFullYear() - 1 : today.getFullYear();
    days += getDaysInMonth(prevMonth, prevYear);
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  displayAge(years, months, days);
  showMessage("Age calculated successfully!", "success");
}

// Clear individual field on cross button click
function clearField(fieldId) {
  const input = byId(fieldId);
  input.value = "";
  // Clear error related to that input
  showError(`error-${fieldId.split('-')[1]}`);
  // Reset age display and message box
  displayAge("--", "--", "--");
  const msgBox = byId("message-box");
  msgBox.style.display = "none";
  msgBox.textContent = "";
}

// Dark mode toggle
const toggleBtn = byId("toggle-theme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
});
