const darkMode = () => {
  const themeToggleBtns = document.querySelectorAll("#theme-toggle");

  // State
  const theme = localStorage.getItem("theme");

  // On mount
  theme && document.body.classList.add(theme); // Use the 'theme' variable here

  // Handlers
  const handleThemeToggle = () => {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
      localStorage.removeItem("debug");
      localStorage.setItem("theme", "light-mode");
    } else {
      localStorage.removeItem("theme"); // Remove the 'theme' item from storage
      document.body.classList.remove("light-mode"); // Remove the class explicitly
    }
  };

  // Events
  themeToggleBtns.forEach((btn) =>
    btn.addEventListener("click", handleThemeToggle)
  );
};

export default darkMode;
