const unreadCountEl = document.getElementById("unreadCount");
const listContainer = document.getElementById("listContainer");
const markReadBtn = document.getElementById("markReadBtn");
const themeToggleBtn = document.getElementById("themeToggleBtn");

// Notifications data (same as before)
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

// Render notifications with dark mode support
function renderNotifications() {
  listContainer.innerHTML = "";
  let unreadCount = 0;

  notifications.forEach((n, index) => {
    if (!n.read) unreadCount++;

    const wrapper = document.createElement("div");
    wrapper.className = `flex flex-wrap sm:flex-nowrap items-start p-4 rounded-lg cursor-pointer
      ${!n.read ? "bg-blue-50 dark:bg-gray-900" : "bg-white dark:bg-gray-700"}
      hover:bg-blue-200 dark:hover:bg-gray-800 transition-colors duration-300`;

    wrapper.addEventListener("click", () => {
      notifications[index].read = true;
      renderNotifications();
    });

    const avatar = document.createElement("img");
    avatar.src = n.img;
    avatar.alt = n.name;
    avatar.className = "h-12 w-12 rounded-full mr-4 flex-shrink-0";

    const content = document.createElement("div");
    content.className = "flex-1 min-w-0";

    const line = document.createElement("p");
    line.className = "text-sm break-words";

    // Use appropriate text colors based on theme and read status
    let baseNameClass = "font-bold";
    baseNameClass += n.read ? " text-gray-900 dark:text-gray-300" : " text-gray-900 dark:text-white";

    let baseTextClass = "text-gray-700 dark:text-gray-300";
    if (!n.read) baseTextClass = "text-gray-900 dark:text-gray-100";

    let html = `<span class="${baseNameClass}">${n.name}</span> <span class="${baseTextClass}">${n.text}</span>`;

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

    if (!n.read) {
      html += ` <span class="inline-block h-2 w-2 bg-red-500 rounded-full align-middle ml-1"></span>`;
    }

    line.innerHTML = html;
    content.appendChild(line);

    const time = document.createElement("span");
    time.className = "text-xs text-gray-500 dark:text-gray-400 block mt-1";
    time.textContent = n.time;
    content.appendChild(time);

    if (n.type === "message" && n.message) {
      const msgBox = document.createElement("div");
      msgBox.className =
        "mt-2 p-3 border border-gray-200 dark:border-gray-600 rounded text-sm text-gray-600 dark:text-gray-300 break-words";
      msgBox.textContent = n.message;
      content.appendChild(msgBox);
    }

    wrapper.appendChild(avatar);
    wrapper.appendChild(content);

    if (n.picture) {
      const pic = document.createElement("img");
      pic.src = n.picture;
      pic.alt = "Notification Image";
      pic.className =
        "ml-4 mt-2 sm:mt-0 h-14 w-14 rounded-lg object-cover flex-shrink-0";
      wrapper.appendChild(pic);
    }

    listContainer.appendChild(wrapper);
  });

  unreadCountEl.textContent = unreadCount;
}

// Mark all as read button handler
markReadBtn.addEventListener("click", () => {
  notifications.forEach((n) => (n.read = true));
  renderNotifications();
});

// Theme toggle logic
function setTheme(theme) {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
    themeToggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    themeToggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
}

// Load saved theme or system preference
(function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    // Use system preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }
})();

themeToggleBtn.addEventListener("click", () => {
  const isDark = document.documentElement.classList.contains("dark");
  setTheme(isDark ? "light" : "dark");
});

// Initial render
renderNotifications();
