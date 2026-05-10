const toggleBtn = document.getElementById("themeToggle");

// Apply saved theme from local storage
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
}

function updateIcon(theme) {
    if (!toggleBtn) return;
    toggleBtn.textContent = theme === "dark" ? "☀️" : "🌙";
}

updateIcon(savedTheme);

// Toggle theme
if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme");
        const next = current === "dark" ? "light" : "dark";

        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);

        updateIcon(next);
    });
}