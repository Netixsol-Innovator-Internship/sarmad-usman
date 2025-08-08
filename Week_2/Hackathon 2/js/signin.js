document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const emailInput = form.querySelector('input[placeholder="Email"]');
  const passwordInput = form.querySelector('input[placeholder="Password"]');

  // Create toast container once
  let toastContainer = document.createElement("div");
  toastContainer.style.position = "fixed";
  toastContainer.style.top = "20px";
  toastContainer.style.right = "20px";
  toastContainer.style.zIndex = "9999";
  document.body.appendChild(toastContainer);

  function showToast(message, type = "success") {
    const toast = document.createElement("div");
    toast.textContent = message;
    toast.style.minWidth = "200px";
    toast.style.marginBottom = "10px";
    toast.style.padding = "12px 20px";
    toast.style.borderRadius = "5px";
    toast.style.color = "#fff";
    toast.style.fontWeight = "600";
    toast.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.5s ease";

    if (type === "success") {
      toast.style.backgroundColor = "#38a169"; // green
    } else if (type === "error") {
      toast.style.backgroundColor = "#e53e3e"; // red
    } else {
      toast.style.backgroundColor = "#0D78F2"; // default blue
    }

    toastContainer.appendChild(toast);

    // Fade in
    requestAnimationFrame(() => {
      toast.style.opacity = "1";
    });

    // Remove toast after 3 seconds
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.addEventListener("transitionend", () => {
        toast.remove();
      });
    }, 3000);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      showToast("❌ No user found. Please sign up first.", "error");
      return;
    }

    if (email === savedUser.email && password === savedUser.password) {
      showToast("✅ Login successful!", "success");
      setTimeout(() => {
        window.location.href = "../html/quizmaster.html";  // Redirect on successful login
      }, 1500);
    } else {
      showToast("❌ Invalid email or password.", "error");
    }
  });
});
