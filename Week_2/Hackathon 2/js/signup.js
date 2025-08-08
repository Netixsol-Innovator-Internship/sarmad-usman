document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const nameInput = form.querySelector('input[placeholder="Full Name"]');
  const emailInput = form.querySelector('input[placeholder="Email"]');
  const passwordInput = form.querySelector('input[placeholder="Password"]');
  const confirmPasswordInput = form.querySelector('input[placeholder="Confirm Password"]');
  const signupButton = form.querySelector("a");

  function createErrorSpan(input) {
    const span = document.createElement("small");
    span.style.color = "#e53e3e";
    span.style.fontSize = "12px";
    span.style.display = "none";
    span.classList.add("error-msg");
    input.insertAdjacentElement("afterend", span);
    return span;
  }

  const nameError = createErrorSpan(nameInput);
  const emailError = createErrorSpan(emailInput);
  const passwordError = createErrorSpan(passwordInput);
  const confirmPasswordError = createErrorSpan(confirmPasswordInput);

  nameInput.addEventListener("keydown", (e) => {
    const allowedKeys = ["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete", " "];
    if (!allowedKeys.includes(e.key) && !/^[a-zA-Z]$/.test(e.key)) {
      e.preventDefault();
    }
  });

  function addEyeToggle(input) {
    const wrapper = document.createElement("div");
    wrapper.style.position = "relative";
    const parent = input.parentElement;
    parent.replaceChild(wrapper, input);
    wrapper.appendChild(input);

    const toggle = document.createElement("i");
    toggle.style.position = "absolute";
    toggle.style.right = "12px";
    toggle.style.top = "50%";
    toggle.style.transform = "translateY(-50%)";
    toggle.style.cursor = "pointer";
    toggle.style.fontSize = "16px";
    toggle.style.color = "#000";

    const eyeIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" 
           stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" width="16" height="16">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>`;

    const eyeOffIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" 
           stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" width="16" height="16">
        <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a21.93 21.93 0 0 1 5.06-6.94"/>
        <path d="M1 1l22 22"/>
      </svg>`;

    toggle.innerHTML = eyeIcon;
    wrapper.appendChild(toggle);

    toggle.addEventListener("click", () => {
      if (input.type === "password") {
        input.type = "text";
        toggle.innerHTML = eyeOffIcon;
      } else {
        input.type = "password";
        toggle.innerHTML = eyeIcon;
      }
    });
  }

  addEyeToggle(passwordInput);
  addEyeToggle(confirmPasswordInput);

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // New: Real-time validation handlers

  nameInput.addEventListener("input", () => {
    const val = nameInput.value.trim();
    if (val && !/\d/.test(val)) {
      nameError.style.display = "none";
    }
  });

  emailInput.addEventListener("input", () => {
    const val = emailInput.value.trim();
    if (val && isValidEmail(val)) {
      emailError.style.display = "none";
    }
  });

  passwordInput.addEventListener("input", () => {
    const val = passwordInput.value.trim();
    if (val.length >= 6) {
      passwordError.style.display = "none";
    }
  });

  confirmPasswordInput.addEventListener("input", () => {
    const val = confirmPasswordInput.value.trim();
    if (val === passwordInput.value.trim()) {
      confirmPasswordError.style.display = "none";
    }
  });

  // Original signup button handler
  signupButton.addEventListener("click", (e) => {
    e.preventDefault();

    nameError.style.display = "none";
    emailError.style.display = "none";
    passwordError.style.display = "none";
    confirmPasswordError.style.display = "none";

    const fullName = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    let isValid = true;

    if (!fullName) {
      nameError.textContent = "Full name is required.";
      nameError.style.display = "block";
      isValid = false;
    } else if (/\d/.test(fullName)) {
      nameError.textContent = "Full name cannot contain numbers.";
      nameError.style.display = "block";
      isValid = false;
    }

    if (!email) {
      emailError.textContent = "Email is required.";
      emailError.style.display = "block";
      isValid = false;
    } else if (!isValidEmail(email)) {
      emailError.textContent = "Please enter a valid email address.";
      emailError.style.display = "block";
      isValid = false;
    }

    if (!password) {
      passwordError.textContent = "Password is required.";
      passwordError.style.display = "block";
      isValid = false;
    } else if (password.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters.";
      passwordError.style.display = "block";
      isValid = false;
    }

    if (!confirmPassword) {
      confirmPasswordError.textContent = "Confirm your password.";
      confirmPasswordError.style.display = "block";
      isValid = false;
    } else if (confirmPassword !== password) {
      confirmPasswordError.textContent = "Passwords do not match.";
      confirmPasswordError.style.display = "block";
      isValid = false;
    }

    if (!isValid) return;

    const user = {
      fullName,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    const success = document.createElement("p");
    success.textContent = "✅ Account created and password saved!";
    success.style.color = "#38a169";
    success.style.fontSize = "14px";
    success.style.marginTop = "12px";
    form.appendChild(success);

    setTimeout(() => {
      window.location.href = "signin.html";
    }, 1500);
  });
});
