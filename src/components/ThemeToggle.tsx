interface ThemeToggleProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}

export default ThemeToggle;
