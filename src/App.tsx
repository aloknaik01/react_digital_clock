import { useState } from "react";
import Clock from "./components/Clock";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <h1 className="title">Digital Clock</h1>
        <Clock />
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
}

export default App;
