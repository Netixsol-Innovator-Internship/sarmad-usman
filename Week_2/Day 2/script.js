// Get references to important DOM elements
const unreadCountEl = document.getElementById("unreadCount");
const listContainer = document.getElementById("listContainer");
const markReadBtn = document.getElementById("markReadBtn");
const themeToggleBtn = document.getElementById("themeToggleBtn");

// Notifications data array, each notification has properties like img, name, type, text, etc.
const notifications = [
  {
    img: "./assets/images/avatar-mark-webber.webp",
    name: "Mark Webber",
    type: "reacted",
    text: "reacted to your recent post",
    detail: "My first tournament today!",
    time: "1m ago",
    read: false,
  },
  {
    img: "./assets/images/avatar-angela-gray.webp",
    name: "Angela Gray",
    type: "followed",
    text: "followed you",
    time: "5m ago",
    read: false,
  },
  {
    img: "./assets/images/avatar-jacob-thompson.webp",
    name: "Jacob Thompson",
    type: "joined",
    text: "has joined your group",
    detail: "Chess Club",
    time: "1 day ago",
    read: false,
  },
  {
    img: "./assets/images/avatar-rizky-hasanuddin.webp",
    name: "Rizky Hasanuddin",
    type: "message",
    text: "sent you a private message",
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    time: "5 days ago",
    read: true,
  },
  {
    img: "./assets/images/avatar-kimberly-smith.webp",
    name: "Kimberly Smith",
    type: "comment",
    text: "commented on your picture",
    picture: "./assets/images/image-chess.webp",
    time: "1 week ago",
    read: true,
  },
  {
    img: "./assets/images/avatar-nathan-peterson.webp",
    name: "Nathan Peterson",
    type: "reacted",
    text: "reacted to your recent post",
    detail: "5 end‑game strategies to increase your win rate",
    time: "2 weeks ago",
    read: true,
  },
  {
    img: "./assets/images/avatar-anna-kim.webp",
    name: "Anna Kim",
    type: "left",
    text: "left the group",
    detail: "Chess Club",
    time: "2 weeks ago",
    read: true,
  },
];

// Function to render the notifications list on the page, including unread count and styles based on read status and theme
function renderNotifications() {
  listContainer.innerHTML = ""; // Clear current notification list
  let unreadCount = 0; // Initialize unread notifications counter

  notifications.forEach((n, index) => {
    // Count unread notifications
    if (!n.read) unreadCount++;

    // Create wrapper div for each notification with appropriate classes and styles
    const wrapper = document.createElement("div");
    wrapper.className = `flex flex-wrap sm:flex-nowrap items-start p-4 rounded-lg cursor-pointer
      ${!n.read ? "bg-blue-50 dark:bg-gray-900" : "bg-white dark:bg-gray-700"}
      hover:bg-blue-200 dark:hover:bg-gray-800 transition-colors duration-300`;

    // Add click event to mark the notification as read and re-render
    wrapper.addEventListener("click", () => {
      notifications[index].read = true;
      renderNotifications();
    });

    // Create and set avatar image element
    const avatar = document.createElement("img");
    avatar.src = n.img;
    avatar.alt = n.name;
    avatar.className = "h-12 w-12 rounded-full mr-4 flex-shrink-0";

    // Container for the main content of notification (name, text, detail, time)
    const content = document.createElement("div");
    content.className = "flex-1 min-w-0";

    const line = document.createElement("p");
    line.className = "text-sm break-words";

    // Determine CSS classes for name and text depending on read status and theme
    let baseNameClass = "font-bold";
    baseNameClass += n.read ? " text-gray-900 dark:text-gray-300" : " text-gray-900 dark:text-white";

    let baseTextClass = "text-gray-700 dark:text-gray-300";
    if (!n.read) baseTextClass = "text-gray-900 dark:text-gray-100";

    // Compose inner HTML for the notification text line with name and main action text
    let html = `<span class="${baseNameClass}">${n.name}</span> <span class="${baseTextClass}">${n.text}</span>`;

    // If notification has a detail field, add it with different styling depending on its content
    if (n.detail) {
      if (
        n.detail === "My first tournament today!" ||
        n.detail === "5 end‑game strategies to increase your win rate"
      ) {
        html += ` <span class="text-gray-600 dark:text-gray-400 font-bold">${n.detail}</span>`;
      } else {
        html += ` <span class="text-blue-800 dark:text-blue-400 font-bold">${n.detail}</span>`;
      }
    }

    // If unread, add a small red dot indicator
    if (!n.read) {
      html += ` <span class="inline-block h-2 w-2 bg-red-500 rounded-full align-middle ml-1"></span>`;
    }

    line.innerHTML = html;
    content.appendChild(line);

    // Add timestamp below the text
    const time = document.createElement("span");
    time.className = "text-xs text-gray-500 dark:text-gray-400 block mt-1";
    time.textContent = n.time;
    content.appendChild(time);

    // If notification includes a private message, render a message box below
    if (n.type === "message" && n.message) {
      const msgBox = document.createElement("div");
      msgBox.className =
        "mt-2 p-3 border border-gray-200 dark:border-gray-600 rounded text-sm text-gray-600 dark:text-gray-300 break-words";
      msgBox.textContent = n.message;
      content.appendChild(msgBox);
    }

    // Append avatar and content to the notification wrapper
    wrapper.appendChild(avatar);
    wrapper.appendChild(content);

    // If notification includes a picture (like a comment on an image), show the image on the right
    if (n.picture) {
      const pic = document.createElement("img");
      pic.src = n.picture;
      pic.alt = "Notification Image";
      pic.className =
        "ml-4 mt-2 sm:mt-0 h-14 w-14 rounded-lg object-cover flex-shrink-0";
      wrapper.appendChild(pic);
    }

    // Add the full notification element to the container
    listContainer.appendChild(wrapper);
  });

  // Update the unread notifications counter in the UI
  unreadCountEl.textContent = unreadCount;
}

// Event listener for "Mark all as read" button
markReadBtn.addEventListener("click", () => {
  notifications.forEach((n) => (n.read = true)); // Mark every notification as read
  renderNotifications(); // Re-render the list with updated states
});

// Function to set the theme (dark or light) on the document and update button text & localStorage
function setTheme(theme) {
  if (theme === "dark") {
    document.documentElement.classList.add("dark"); // Add dark class for Tailwind CSS dark mode
    themeToggleBtn.textContent = "☀️"; // Show sun icon to toggle back to light mode
    localStorage.setItem("theme", "dark"); // Save preference to localStorage
  } else {
    document.documentElement.classList.remove("dark"); // Remove dark mode class
    themeToggleBtn.textContent = "🌙"; // Show moon icon to toggle to dark mode
    localStorage.setItem("theme", "light"); // Save preference
  }
}

// Immediately invoked function to load saved theme preference or fallback to system preference
(function () {
  const savedTheme = localStorage.getItem("theme"); // Check localStorage
  if (savedTheme) {
    setTheme(savedTheme); // Use saved theme
  } else {
    // Use system preference if no saved theme
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }
})();

// Theme toggle button click event to switch themes on user request
themeToggleBtn.addEventListener("click", () => {
  const isDark = document.documentElement.classList.contains("dark");
  setTheme(isDark ? "light" : "dark"); // Toggle theme
});

// Initial rendering of notifications when the page loads
renderNotifications();
