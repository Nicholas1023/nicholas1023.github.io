const toggleButton = document.getElementById("ModeToggle");

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("mode", "dark");
    toggleButton.textContent = "Light Mode (Ctrl+Alt+M)";
  } else {
    localStorage.setItem("mode", "light");
    toggleButton.textContent = "Dark Mode (Ctrl+Alt+M)";
  }
}

toggleButton.addEventListener("click", toggleDarkMode);

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.altKey && event.key.toLowerCase() === "m") {
    event.preventDefault(); 
    toggleDarkMode();
  }
});


if (localStorage.getItem("mode") === "dark") {
  document.body.classList.add("dark-mode");
  toggleButton.textContent = "Light Mode (Ctrl+Alt+M)";
}
