// Theme toggle functionality
const toggle = document.getElementById("toggleTheme");
const root = document.documentElement;

const storedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const theme = storedTheme || (prefersDark ? 'dark' : 'light');
root.setAttribute("data-theme", theme);

toggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    const newTheme = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
});

// Dynamic Year
document.getElementById("year").textContent = new Date().getFullYear();