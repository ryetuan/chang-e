const root = document.documentElement;
const toggle = document.querySelector("#theme-toggle");

const savedTheme = localStorage.getItem("theme");

const initialTheme =
  savedTheme ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");

root.dataset.theme = initialTheme;

function updateToggle() {
  const isDark = root.dataset.theme === "dark";

  toggle.textContent = isDark ? "☀" : "☾";

  toggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode"
  );
}

toggle.addEventListener("click", () => {
  const newTheme =
    root.dataset.theme === "dark" ? "light" : "dark";

  root.dataset.theme = newTheme;
  localStorage.setItem("theme", newTheme);

  updateToggle();
});

updateToggle();